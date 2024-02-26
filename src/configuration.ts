import * as orm from '@midwayjs/typeorm';
import { Configuration, App, Inject } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
import * as view from '@midwayjs/view-ejs';
import * as staticFile from '@midwayjs/static-file';
import * as localTask from '@midwayjs/task';
// import * as crossDomain from '@midwayjs/cross-domain';
import * as cool from '@cool-midway/core';
import * as cloud from '@cool-midway/cloud';
import { ILogger } from '@midwayjs/logger';
import * as upload from '@midwayjs/upload';
import { IMidwayApplication } from '@midwayjs/core';
// import * as swagger from '@midwayjs/swagger';
// import * as rpc from '@cool-midway/rpc';
// import * as task from '@cool-midway/task';
// import * as iot from '@cool-midway/iot';
import * as proxy from '@midwayjs/http-proxy';

@Configuration({
  imports: [
    // https://koajs.com/
    koa,
    // 是否开启跨域(注：顺序不能乱放！！！) http://www.midwayjs.org/docs/extensions/cross_domain
    // crossDomain,
    // 模板渲染 https://midwayjs.org/docs/extensions/render
    view,
    // 静态文件托管 https://midwayjs.org/docs/extensions/static_file
    staticFile,
    // orm https://midwayjs.org/docs/extensions/orm
    orm,
    // 参数验证 https://midwayjs.org/docs/extensions/validate
    validate,
    // 本地任务 http://midwayjs.org/docs/legacy/task
    localTask,
    // 文件上传
    upload,
    // cool-admin 官方组件 https://cool-js.com
    cool,
    // rpc 微服务 远程调用
    // rpc,
    // 任务与队列
    // task,
    // cool-admin 云开发组件
    cloud,
    // 物联网开发，如MQTT支持等
    // iot,
    // swagger 文档
    // swagger,
    //http 代理
    proxy,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: IMidwayApplication;

  @Inject()
  logger: ILogger;

  async onReady() {}
}
