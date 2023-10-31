import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { BaseSysApplicationEntity } from '../../../entity/sys/application';
import { BaseSysApplicationService } from '../../../service/sys/application';

/**
 * 应用程序
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: BaseSysApplicationEntity,
  service: BaseSysApplicationService,
  pageQueryOp: {
    // 让clientId字段支持模糊查询
    keyWordLikeFields: ['clientId'],
  }
})
export class BaseSysUserController extends BaseController {


}
