import { Rule, RuleType } from '@midwayjs/validate';
/**
 * 登录参数校验
 */
export class ApplicationLoginDTO {

  @Rule(RuleType.string().required())
  clientId: string;

  @Rule(RuleType.string().required())
  clientSecret: string;

}
