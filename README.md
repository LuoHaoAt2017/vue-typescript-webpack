# 技术实践

自定义指令，对普通的 dom 元素进行底层操作。

"babel-plugin-transform-runtime": "^6.23.0",

"babel-plugin-syntax-jsx": "^6.18.0",
"babel-plugin-transform-vue-jsx": "^3.7.0",
"babel-polyfill": "^6.26.0",

tsconfig

"babel-polyfill";

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

请求的发送和浏览器地址栏域名之间的关系
