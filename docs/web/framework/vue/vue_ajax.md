---
title: Vue 中的 Ajax
date: 2022-10-25
category:
  - 前端
tag:
  - Vue.js
  - Ajax
---

# Vue 中的 Ajax
<!-- more -->

## 1.1 使用代理服务器

### 1.1.1 方式一

在 `vue.config.js` 中添加如下配置：

```javascript
devServer:{
  proxy:"http://localhost:5000"
}
```

说明：

1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

### 1.1.2 方式二
编写 `vue.config.js` 配置具体代理规则：

```javascript
module.exports = {
    devServer: {
        proxy: {
            '/api1': {
                // 匹配所有以 '/api1'开头的请求路径
                target: 'http://localhost:5000',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api1': ''}
            },
            '/api2': {
                // 匹配所有以 '/api2'开头的请求路径
                target: 'http://localhost:5001',// 代理目标的基础路径
                changeOrigin: true,
                pathRewrite: {'^/api2': ''}
            }
        }
	}
}
/*
changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
changeOrigin默认值为true
*/
```
说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。

### 1.2 `Vue` 项目中常用的 2 个 `Ajax` 库

#### 1.2.1 `Axios`

1. 说明：通用的 `Ajax` 请求库，官方推荐，使用广泛

2. 安装：`npm install axios`

3. 使用步骤：

   1. 引入

      ```javascript
      import axios from "axios";
      ```

   2. 使用

      ```javascript
      axios.get("http://localhost:8080/api/students").then(
          (response) => {
              console.log("请求成功了", response.data);
          },
          (error) => {
              console.log("请求失败了", error.message);
          }
      );
      ```

### 1.2.2 `vue-resource`

`Vue` 插件库，`Vue 1.x` 使用广泛，**官方已不维护**