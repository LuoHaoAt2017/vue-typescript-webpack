# 技术实践

### 搭建 jsx + ts + vue + webpack 环境

自定义指令，对普通的 dom 元素进行底层操作。

"babel-plugin-transform-runtime": "^6.23.0",

"babel-plugin-syntax-jsx": "^6.18.0",
"babel-plugin-transform-vue-jsx": "^3.7.0",
"babel-polyfill": "^6.26.0",

tsconfig

"babel-polyfill";

### 请求的发送和浏览器地址栏域名之间的关系

统一资源定位符
协议 + 域名 + 端口 + 路径 + 查询参数

地址栏的内容：http://localhost:8090/#/home

以绝对路径发送请求
const url = /test-api/action
window.fetch('url').then(() => {});
发送的完整请求路径是
http://test-api/action

以相对路径发送请求
const url = test-api/action
window.fetch('url').then(() => {});
发送的完整请求路径是
http://localhost:8090/test-api/action

### 如何让一个表单中的所有控件不可编辑

注意：表单中存在什么元素不可预知。

方案一：
所有出现在表单中的元素都会携带一个通用的样式属性 disable，
所有携带 disable 属性的元素都不可点击。

方案二：
给 form 表单添加一个蒙层，遮住表单内部的元素。

### 模块方案

浏览器采取异步模块加载机制，因为依赖包在服务器上。
AMD 规范
require([module], callback);

服务器采取同步模块加载机制，因为依赖包在本地磁盘上。
CommonJS 规范
module.exports
