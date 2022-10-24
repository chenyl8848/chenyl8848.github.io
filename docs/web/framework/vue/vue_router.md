---
title: Vue Router
date: 2022-10-27
category:
  - 前端
tag:
  - Vue.js
  - Vue Router
---

# Vue Router
<!-- more -->

## 1.1 相关理解

### 1.1.1 `vue-router` 的理解

`Vue` 的一个插件库，专门用来实现 `SPA` 应用

### 1.1.2 对 `SPA` 应用的理解

1. 单页 `Web` 应用（single page web application，SPA）
2. 整个应用只有一个完整的页面
3. 点击页面中的导航链接不会刷新页面，只会做页面的局部更新
4. 数据需要通过 `Ajax` 请求获取


### 1.1.3 路由的理解

1. 什么是路由

   1. 一个路由就是一组映射关系（`key-value`）
      1. `key` 为路径,  `value` 可能是 `function` 或 `component`

2. 路由分类

   1. 后端路由：
      1. 理解：`value` 是 `function` , 用于处理客户端提交的请求
      2. 工作过程：服务器接收到一个请求时,根据请求路径找到匹配的函数来处理请求,返回响应数据

   2.前端路由：

   1. 理解：`value` 是 `component`，用于展示页面内容
   2. 工作过程：当浏览器的路径改变时,对应的组件就会显示。

## 1.2 基本路由

### 1.2.1 安装与使用


1. 安装 `vue-router`，命令：`npm install vue-router`

2. 应用插件：`Vue.use(VueRouter)`

3. 编写 `router` 配置项：

   ```javascript
   //引入VueRouter
   import VueRouter from 'vue-router'
   //引入Luyou 组件
   import About from '../components/About'
   import Home from '../components/Home'
   
   //创建router实例对象，去管理一组一组的路由规则
   const router = new VueRouter({
       routes:[
           {
               path:'/about',
               component:About
           },
           {
               path:'/home',
               component:Home
           }
       ]
   })
   
   //暴露router
   export default router
   ```

4. 实现切换（`active-class` 可配置高亮样式）

   ```vue
    <router-link active-class="active" to="/about">About</router-link>
   ```

5. 指定展示位置

   ```vue
   <router-view></router-view>
   ```

6. 几个注意点：
	
	1. 路由组件通常存放在 `pages` 文件夹，一般组件通常存放在 `components` 文件夹
	2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载
	3. 每个组件都有自己的 `$route` 属性，里面存储着自己的路由信息
	4. 整个应用只有一个 `router`，可以通过组件的 `$router` 属性获取到

### 1.2.2 总结
编写使用路由的 3 步
1. 定义路由组件
2. 注册路由
3. 使用路由

## 1.3 嵌套（多级）路由


1. 配置路由规则，使用 `children` 配置项：

   ```javascript
   routes:[
      	{
      		path:'/about',
      		component:About,
      	},
      	{
      		path:'/home',
      		component:Home,
      		children:[ //通过children配置子级路由
      			{
      				path:'news', //此处一定不要写：/news
      				component:News
      			},
      			{
      				path:'message',//此处一定不要写：/message
      				component:Message
      			}
      		]
      	}
      ]
   ```

2. 跳转（要写完整路径）：

   ```vue
   <router-link to="/home/news">News</router-link>
   ```
## 1.4 路由传参

### 1.4.1 路由的 `query` 参数


1. 传递参数

   ```vue
   <!-- 跳转并携带query参数，to的字符串写法 -->
   <router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
   				
   <!-- 跳转并携带query参数，to的对象写法 -->
   <router-link 
   	:to="{
   		path:'/home/message/detail',
   		query:{
   		   id:666,
               title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

2. 接收参数：

   ```js
   $route.query.id
   $route.query.title
   ```
### 1.4.2 命名路由


1. 作用：可以简化路由的跳转。

2. 如何使用

   1. 给路由命名：

      ```js
      {
      	path:'/demo',
      	component:Demo,
      	children:[
      		{
      			path:'test',
      			component:Test,
      			children:[
      				{
                          name:'hello' //给路由命名
      					path:'welcome',
      					component:Hello,
      				}
      			]
      		}
      	]
      }
      ```

   2. 简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link 
      	:to="{
      		name:'hello',
      		query:{
      		   id:666,
                  title:'你好'
      		}
      	}"
      >跳转</router-link>
      ```
### 1.4.3 路由的 `params` 参数

1. 配置路由，声明接收 `params` 参数

   ```js
   {
   	path:'/home',
   	component:Home,
   	children:[
   		{
   			path:'news',
   			component:News
   		},
   		{
   			component:Message,
   			children:[
   				{
   					name:'xiangqing',
   					path:'detail/:id/:title', //使用占位符声明接收params参数
   					component:Detail
   				}
   			]
   		}
   	]
   }
   ```

2. 传递参数

   ```vue
   <!-- 跳转并携带params参数，to的字符串写法 -->
   <router-link :to="/home/message/detail/666/你好">跳转</router-link>
   				
   <!-- 跳转并携带params参数，to的对象写法 -->
   <router-link 
   	:to="{
   		name:'xiangqing',
   		params:{
   		   id:666,
               title:'你好'
   		}
   	}"
   >跳转</router-link>
   ```

   > 特别注意：路由携带 `params` 参数时，若使用 `to` 的对象写法，则不能使用 `path` 配置项，必须使用 `name` 配置！

3. 接收参数：

   ```js
   $route.params.id
   $route.params.title
   ```

### 1.4.4 路由的 `props` 配置
作用：让路由组件更方便的收到参数

```js
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
	// props:{a:900}

	//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
	// props:true
	
	//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

## 1.4.5 `<router-link>` 的 `replace` 属性


1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为 `push` 和 `replace`，`push` 是追加历史记录，`replace` 是替换当前记录。路由跳转时候默认为 `push`
3. 如何开启 `replace` 模式： `<router-link replace .......>News</router-link>`



## 1.5 编程式路由导航

1. `this.$router.push(path)`: 相当于点击路由链接(可以返回到当前路由界面)
2. `this.$router.replace(path)`: 用新路由替换当前路由(不可以返回到当前路由界面)
3. `this.$router.back()`: 请求(返回)上一个记录路由
4. `this.$router.go(-1)`: 请求(返回)上一个记录路由
5. `this.$router.go( 1 )`: 请求下一个记录路由
