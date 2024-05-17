import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';

/**
 * 本地开发 npm run dev 读取的配置文件
 */
export default {
  typeorm: {
    dataSource: {
      // db_pg: {
      //   type: 'postgres',
      //   // driver: pg,

      //   host: '127.0.0.1',
      //   port: 5432,
      //   username: 'root',
      //   password: 'root',
      //   database: 'cool',
      //   // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
      //   synchronize: true,
      //   // 打印日志
      //   logging: true,
      //   // 字符集
      //   charset: 'utf8',
      //   // 是否开启缓存
      //   cache: true,
      //   // 实体路径
      //   entities: ['**/modules/*/entity'],
      // },
      default: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'cool',
        // 自动建表 注意：线上部署的时候不要使用，有可能导致数据丢失
        synchronize: true,
        // 打印日志
        logging: false,
        // 字符集
        charset: 'utf8mb4',
        // 是否开启缓存
        cache: true,
        // 实体路径
        entities: ['**/modules/*/entity'],
      },
      
    },
    // 多个数据源时可以用这个指定默认的数据源
    // defaultDataSourceName: 'db_pg',
  },
  cool: {
    // 实体与路径，跟生成代码、前端请求、swagger文档相关 注意：线上不建议开启，以免暴露敏感信息
    eps: true,
    // 是否自动导入模块数据库
    initDB: true,
    // 是否自动导入模块菜单
    initMenu: true,
  } as CoolConfig,
} as MidwayConfig;
