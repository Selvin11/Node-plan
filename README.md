# Node-plan

* express: web 框架
* express-session: session 中间件
* connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
* connect-flash: 页面通知提示的中间件，基于 session 实现
* pug: 模板
* express-formidable: 接收表单及文件的上传中间件
* config-lite: 读取配置文件
* marked: markdown 解析
* moment: 时间格式化
* mongolass: mongodb 驱动
* objectid-to-timestamp: 根据 ObjectId 生成时间戳
* sha1: sha1 加密，用于密码加密
* winston: 日志
* express-winston: 基于 winston 的用于 express 的日志中间件

> module exports && exports diff

- module.exports 初始值为一个空对象 {}
- exports 是指向的 module.exports 的引用
- require() 返回的是 module.exports 而不是 


- `exports = module.exports = {...}` === `module.exports = {...}; exports = module.exports;` : 
- module.exports 指向新的对象时，exports 断开了与 module.exports 的引用，那么通过 exports = module.exports 让 exports 重新指向 module.exports。


> express().use() && express.Router()

- express().use() 挂载路由 load route
- express.Router() 定义路由模块 create route module

> 中间件  next()使用

- 函数顺序执行后，将控制权通过next()转交给下一个

> 关于网页重定向过多产生310错误，需清除浏览器cookie