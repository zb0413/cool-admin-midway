import { Provide } from '@midwayjs/decorator';
import { BaseService, CoolCommException } from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseSysApplicationEntity } from '../../entity/sys/application';
import * as _ from 'lodash';
import * as md5 from 'md5';

/**
 * 系统用户
 */
@Provide()
export class BaseSysApplicationService extends BaseService {
  @InjectEntityModel(BaseSysApplicationEntity)
  baseSysApplicationEntity: Repository<BaseSysApplicationEntity>;

  /**
   * 新增
   * @param param
   */
  async add(param) {
    const exists = await this.baseSysApplicationEntity.findOneBy({
      clientId: param.clientId,
    });
    if (!_.isEmpty(exists)) {
      throw new CoolCommException('应用已经存在~');
    }
    param.clientSecret = md5(param.clientSecret);
    await this.baseSysApplicationEntity.save(param);
    return param.id;
  }
}
