import { BaseEntity } from '@cool-midway/core';
import { Column, Index, Entity } from 'typeorm';

/**
 * 系统用户
 */
@Entity('base_sys_application')
export class BaseSysApplicationEntity extends BaseEntity {
  
  
  @Index({ unique: true })
  @Column({ comment: '应用ID', nullable: false })
  clientId: string;

  @Column({ comment: '密码', nullable: false  })
  clientSecret: string;

  @Column({ comment: '备注', nullable: true })
  remark: string;

  @Column({ comment: '状态 0:禁用 1：启用', default: 1})
  status: number;

}
