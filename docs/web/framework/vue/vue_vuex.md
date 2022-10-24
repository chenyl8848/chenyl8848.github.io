---
title: Vue Vuex
date: 2022-10-26
category:
  - 前端
tag:
  - Vue.js
  - Vuex
---

# Vue Vuex
<!-- more -->

## 1.1 理解 `Vuex`

### 1.1.1 `Vuex` 是什么

1. 概念：专门在 `Vue` 中实现集中式状态（数据）管理的一个 `Vue` 插件，对 `Vue` 应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
2. [Github地址](https://github.com/vuejs/vuex)

### 1.1.2 什么时候使用 `Vuex`

1. 多个组件依赖于同一状态
2. 来自不同组件的行为需要变更同一状态

### 1.1.3 `Vuex` 工作原理图

<img src="https://vuex.vuejs.org/flow.png" alt="flow.png" style="zoom:67%;" />

![vuex.png](https://vuex.vuejs.org/vuex.png)

## 1.2 搭建 `Vuex` 环境与基本使用

### 1.2.1 环境 `Vuex` 搭建

1. 创建文件：```src/store/index.js```

   ```javascript
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //应用Vuex插件
   Vue.use(Vuex)
   
   //准备actions对象——响应组件中用户的动作
   const actions = {}
   //准备mutations对象——修改state中的数据
   const mutations = {}
   //准备state对象——保存具体的数据
   const state = {}
   
   //创建并暴露store
   export default new Vuex.Store({
       actions,
       mutations,
       state
   })
   ```

2. 在 `main.js` 中创建 `vm` 时传入 `store` 配置项

   ```javascript
   ......
   //引入store
   import store from './store'
       ......
       //创建vm
       new Vue({
           el:'#app',
           render: h => h(App),
           store
       })
   ```

### 1.2.2 基本使用

1. 初始化数据、配置 `actions`、配置 `mutations`，操作文件 `store.js`

   ```javascript
   //引入Vue核心库
   import Vue from 'vue'
   //引入Vuex
   import Vuex from 'vuex'
   //引用Vuex
   Vue.use(Vuex)
   
   const actions = {
       //响应组件中加的动作
       jia(context,value){
           // console.log('actions中的jia被调用了',miniStore,value)
           context.commit('JIA',value)
       },
   }
   
   const mutations = {
       //执行加
       JIA(state,value){
           // console.log('mutations中的JIA被调用了',state,value)
           state.sum += value
       }
   }
   
   //初始化数据
   const state = {
       sum:0
   }
   
   //创建并暴露store
   export default new Vuex.Store({
       actions,
       mutations,
       state,
   })
   ```

2. 组件中读取 `Vuex` 中的数据：`$store.state.sum`

3.  组件中修改 `Vuex` 中的数据：`$store.dispatch('action中的方法名',数据)` 或 `$store.commit('mutations中的方法名',数据)`

   > 备注：若没有网络请求或其他业务逻辑，组件中也可以越过 `actions`，即不写  `dispatch`，直接编写 `commit`

## 1.3 `Vuex` 核心概念和API

### 1.3.1 `state`

1. `Vuex` 管理的状态对象

2. 它应该是唯一的

3. 示例代码：

   ```javascript
   const state = {
       sum:0
   }
   ```

### 1.3.2 `actions`

1. 值为一个对象，包含多个响应用户动作的回调函数

2. 通过 `commit()` 来触发 `mutation` 中函数的调用，间接更新 `state`

3. 如何触发 `actions` 中的回调？

   在组件中使用：`$store.dispatch('对应的action回调名') ` 触发

4. 可以包含异步代码（定时器,ajax等等）
   
5. 示例代码：

     ```javascript
     const actions = {
         //响应组件中加的动作
         jia(context,value){
             // console.log('actions中的jia被调用了',miniStore,value)
             context.commit('JIA',value)
         },
     }
     ```

### 1.3.3 `mutations`


1. 值是一个对象，包含多个直接更新 `state` 的方法

2. 谁能调用 `mutations` 中的方法？如何调用？

   在 `action` 中使用： `commit('对应的mutations方法名') ` 触发

3. `mutations` 中方法的特点：不能写异步代码、只能单纯的操作 `state`

4. 示例代码：

   ```javascript
   const mutations = {
       //执行加
       JIA(state,value){
           // console.log('mutations中的JIA被调用了',state,value)
           state.sum += value
       }
   }
   ```

### 1.3.4 `getters`


1. 概念：当 `state` 中的数据需要经过加工后再使用时，可以使用 `getters` 加工。

2. 在 `store.js` 中追加 `getters` 配置

   ```js
   // 准备 getters —— 用于对 state 中的数据进行加工
   const getters = {
   	bigSum(state){
   		return state.sum * 10
   	}
   }
   
   // 创建并暴露store
   export default new Vuex.Store({
   	......
   	getters
   })
   ```

3. 组件中读取数据：`$store.getters.bigSum`

## 1.4 四个 `map` 方法的使用

### 1.4.1 `mapState` 方法

<strong>`mapState` 方法：</strong>用于帮助我们映射 `state` 中的数据为计算属性

```javascript
computed: {
    //借助mapState生成计算属性：sum、school、subject（对象写法）
    ...mapState({sum:'sum',school:'school',subject:'subject'}),

    //借助mapState生成计算属性：sum、school、subject（数组写法）
    ...mapState(['sum','school','subject']),
},
```

### 1.4.2 `mapGetters` 方法

<strong>`mapGetters` 方法：</strong>用于帮助我们映射 `getters` 中的数据为计算属性

```javascript
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法）
    ...mapGetters({bigSum:'bigSum'}),

    //借助mapGetters生成计算属性：bigSum（数组写法）
    ...mapGetters(['bigSum'])
},
```

### 1.4.3 `mapActions` 方法

<strong>`mapActions` 方法：</strong>用于帮助我们生成与 `actions` 对话的方法，即：包含 `$store.dispatch(xxx)` 的函数

```javascript
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```

### 1.4.4 `mapMutations` 方法

<strong>`mapMutations` 方法：</strong>用于帮助我们生成与 `mutations` 对话的方法，即：包含 `$store.commit(xxx)` 的函数

```javascript
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```


> 备注：`mapActions` 与 `mapMutations` 使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。
## 1.5 模块化+命名空间
1. 业务场景中需要包含多个 `module`，一个 `module` 是一个 `store` 的配置对象，与一个组件（包含有共享数据）对应
2. 目的：让代码更好维护，让多种数据分类更加明确

进行模块化：

1. 修改 `store.js`

   ```javascript
   const countAbout = {
       namespaced:true,//开启命名空间
       state: {x: 1},
       mutations: { ... },
       actions: { ... },
       getters: {
           bigSum(state){
               return state.sum * 10
           }
       }
   }
      
   const personAbout = {
       namespaced:true,//开启命名空间
       state:{ ... },
       mutations: { ... },
       actions: { ... }
   }
      
   const store = new Vuex.Store({
       modules: {
           countAbout,
           personAbout
       }
   })
   ```

2. 开启命名空间后，组件中读取 `state` 数据

   ```javascript
   //方式一：自己直接读取
   this.$store.state.personAbout.list
   //方式二：借助mapState读取：
   ...mapState('countAbout',['sum','school','subject']),
   ```

3. 开启命名空间后，组件中读取 `getters` 数据

   ```javascript
   //方式一：自己直接读取
   this.$store.getters['personAbout/firstPersonName']
   //方式二：借助mapGetters读取：
   ...mapGetters('countAbout',['bigSum'])
   ```

4. 开启命名空间后，组件中调用 `dispatch`

   ```javascript
   //方式一：自己直接dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   //方式二：借助mapActions：
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```

5. 开启命名空间后，组件中调用 `commit`

   ```javascript
   //方式一：自己直接commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   //方式二：借助mapMutations：
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
   ```