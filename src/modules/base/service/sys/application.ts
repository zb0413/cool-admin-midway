import { Provide } from '@midwayjs/decorator';
import { BaseService} from '@cool-midway/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { BaseSysApplicationEntity } from '../../entity/sys/application';



/**
 * 系统用户
 */
@Provide()
export class BaseSysApplicationService extends BaseService {
  @InjectEntityModel(BaseSysApplicationEntity)
  baseSysApplicationEntity: Repository<BaseSysApplicationEntity>;

}
