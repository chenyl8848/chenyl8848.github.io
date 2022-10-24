---
title: Vue3 Composition Api
date: 2022-10-29
category:
  - 前端
tag:
  - Vue.js
  - Composition Api
---

# Vue3 Composition Api
<!-- more -->

[官方文档](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

## 1.1 拉开序幕的 `setup`

### 1.1.1 使用说明

1. 理解：`Vue3` 中一个新的配置项，值为一个函数
2. `setup` 是所有<strong style="color:#DD5145">`Composition API`（组合API）</strong><i style="color:gray;font-weight:bold">“ 表演的舞台 ”</i>
3. 组件中所用到的：数据、方法等等，均要配置在 `setup` 中
4. `setup` 函数的两种返回值：
   1. 若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用（重点关注！）
   2. <span style="color:#aad">若返回一个渲染函数：则可以自定义渲染内容。（了解）</span>
5. 注意点：
   1. 尽量不要与 `Vue2.x` 配置混用
      - `Vue2.x` 配置（`data`、`methos`、`computed` ...）中<strong style="color:#DD5145">可以访问到</strong> `setup` 中的属性、方法
      - 但在 `setup` 中<strong style="color:#DD5145">不能访问到 </strong>`Vue2.x` 配置（`data`、`methos`、`computed` ...）
      - 如果有重名，`setup` 优先
   2. `setup` 不能是一个 `async` 函数，因为返回值不再是 `return` 的对象，而是 `promise`, 模板看不到 `return` 对象中的属性。（后期也可以返回一个`Promise` 实例，但需要 `Suspense` 和异步组件的配合）

### 1.1.2 代码示例

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">说话(Vue3 所配置的——sayHello)</button>
  <br />
  <br />
  <button @click="sayWelcome">说话(Vue2
    所配置的——sayHello)</button>
  <br />
  <br />
  <button @click="test1">
    测试一下在 Vue2 的配置中去读取 Vue3 中的数据、方法
  </button>
  <br />
  <br />
  <button @click="test2">
    测试一下在 Vue3 的配置中去读取 Vue2 中的数据、方法
  </button>
</template>

<script>
import { h } from "vue";

export default {
  name: "App",
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎学习 vue");
    },
    test1() {
      console.log(this.sex);
      // 可以正确取到
      console.log(this.name);
      // 可以正确取到
      console.log(this.age);
      // 可以正确取到
      console.log(this.sayHello);
    },
  },

  // 此处只是暂时测试一下 setup，暂时不考虑响应式的问题
  setup() {
    let name = "张三";
    let age = 18;

    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊!`);
    }

    function test2() {
      console.log(name);
      console.log(age);
      // undefined
      console.log(this.sex);
      // undefined
      console.log(this.sayWelcome);
    }

    // 返回一个对象——常用
    // return {
    //   name,
    //   age,
    //   sayHello,
    //   test2,
    // };

    // 返回一个渲染函数
    return () => h("h1", "欢迎学习 Vue");
  },
};
</script>
```

## 1.2 `ref` 函数

### 1.2.1 使用说明

- 作用：定义一个响应式的数据
- 语法: `const xxx = ref(initValue)`
  - 创建一个包含响应式数据的<strong style="color:#DD5145">引用对象（`reference` 对象，简称 `ref` 对象）</strong>
  - `JS` 中操作数据： `xxx.value`
  - 模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`
- 备注：
  - 接收的数据可以是：基本类型、也可以是对象类型
  - 基本类型的数据：响应式依然是靠 `Object.defineProperty()` 的 `get` 与 `set` 完成的
  - 对象类型的数据：内部 <i style="color:gray;font-weight:bold">“ 求助 ”</i> 了 `Vue3.0` 中的一个新函数——  `reactive` 函数

### 1.2.2 代码示例

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪资：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",

  setup() {
    // 数据
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30k"
    })

    function changeInfo() {
      console.log("@@@", name);
      name.value = "李四";
      age.value = 98;

      job.value.type = "UI设计师";
      job.value.salary = "6k"

    }

    // 返回一个对象——常用
    return {
      name,
      age,
      job,
      changeInfo
    };

  },
};
</script>
```

## 1.3 `reactive` 函数

### 1.3.1 使用说明

- 作用：定义一个<strong style="color:#DD5145">对象类型</strong>的响应式数据（基本类型不要用它，要用 `ref` 函数）
- 语法：`const 代理对象= reactive(源对象)` 接收一个对象（或数组），返回一个<strong style="color:#DD5145">代理对象（`Proxy` 的实例对象，简称 `proxy` 对象）</strong>
- `reactive` 定义的响应式数据是“深层次的”
- 内部基于 `ES6` 的 `Proxy` 实现，通过代理对象操作源对象内部数据进行操作

### 1.3.2 代码示例

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪资：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试 c 的数据：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",

  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ["抽烟", "喝酒", "烫头"]
    })

    function changeInfo() {
      console.log("@@@", name);
      person.name = "李四";
      person.age = 98;

      person.job.type = "UI设计师";
      person.job.salary = "6k"
      person.job.a.b.c = 999

      // 此处数组修改注意与 Vue2 的区别
      person.hobby[0] = "篮球"

    }

    // 返回一个对象——常用
    return {
      person,
      changeInfo
    };

  },
};
</script>
```

## 1.4 Vue 中的响应式原理

### 1.4.1 `Vue2.x` 的响应式

- 实现原理：

  - 对象类型：通过 `Object.defineProperty()` 对属性的读取、修改进行拦截（数据劫持）

  - 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）

    ```js
    Object.defineProperty(data, 'count', {
        get () {}, 
        set () {}
    })
    ```

- 存在问题：

  - 新增属性、删除属性,，界面不会更新
  - 直接通过下标修改数组，界面不会自动更新

### 1.4.2 `Vue3.0` 的响应式

- 实现原理: 

  - 通过 `Proxy`（代理）:  拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等

  - 通过 `Reflect`（反射）:  对源对象的属性进行操作

  - `MDN` 文档中描述的 `Proxy` 与 `Reflect`：

    - [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

    - [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

      ```js
      new Proxy(data, {
      	// 拦截读取属性值
          get (target, prop) {
          	return Reflect.get(target, prop)
          },
          // 拦截设置属性值或添加新属性
          set (target, prop, value) {
          	return Reflect.set(target, prop, value)
          },
          // 拦截删除属性
          deleteProperty (target, prop) {
          	return Reflect.deleteProperty(target, prop)
          }
      })
      
      proxy.name = 'tom'   
      ```
  
- 代码示例

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      
      <script type="text/javascript">
          // 源数据
          let person = {
              name: '张三',
              age: 18
          }
  
          // 模拟 Vue2 中实现响应式
          // let p= {}
  
          // Object.defineProperty(p, 'name', {
          //     get() {
          //         // 有人读取 name 时调用
          //         return person.name
          //     },
          //     set(value) {
          //         // 有人修改 name 时调用
          //         console.log('有人修改了 name 属性，要去更新页面!');
          //         person.name = value
          //     }
          // })
          // Object.defineProperty(p, 'age', {
          //     get() {
          //         // 有人读取 age 时调用
          //         return person.age
          //     },
          //     set(value) {
          //         // 有人修改 name 时调用
          //         console.log('有人修改了 age 属性，要去更新页面!');
          //         person.age = value
          //     }
          // })
  
          // 模拟 Vue3 中实现响应式
          // const p = new Proxy(person, {
          //     // 有人读取 p 的某个属性时调用
          //     get(target, propName) {
          //         console.log(`有人读取了 p 身上的 ${propName} 属性`);
          //         return Reflect.get(target, propName)
          //     },
          //     // 有人修改了 p 的某个属性、或给 p 追加某个属性时调用
          //     set(target, propName, value) {
          //         console.log(`有人修改了 p 身上的 ${propName} 属性`);
          //         Reflect.set(target, propName, value)
          //     },
          //     // 有人删除 p 身上的某个属性时调用
          //     deleteProperty(target, propName) {
          //         console.log(`有人删除了 p 身上的 ${propName} 属性`);
          //         return Reflect.deleteProperty(target, propName)
          //     }
          // })
  
          let obj = {
              a: 1,
              b: 2
          }
  
          // 通过 Object.defineProperty 去操作
          // try {
          //     Object.defineProperty(obj, 'c', {
          //         get() {
          //             return 3;
          //         }
          //     })
      
          //     Object.defineProperty(obj, 'c', {
          //         get() {
          //             return 4;
          //         }
          //     })
          // } catch (error) {
          //     console.log(error);
          // }
  
          // 通过 Reflect.defineProperty 去操作
          const x1 = Reflect.deleteProperty(obj, 'c', {
              get() {
                  return 3;
              }
          })
          console.log('x1', x1);
  
          const x2 = Reflect.defineProperty(obj, 'c', {
              get() {
                  return 4;
              }
          })
  
          console.log('x2', x2);
  
          if (x2) {
              console.log('某某某操作成功了');
          } else {
              console.log('某某某操作失败了');
          }
      </script>
  </body>
  </html>
  ```

## 1.5 `reactive` 对比 `ref`

-  从定义数据角度对比：
   -  `ref` 用来定义：<strong style="color:#DD5145">基本类型数据</strong>
   -  `reactive` 用来定义：<strong style="color:#DD5145">对象（或数组）类型数据</strong>
   -  备注：`ref` 也可以用来定义<strong style="color:#DD5145">对象（或数组）类型数据</strong>，它内部会自动通过 `reactive` 转为<strong style="color:#DD5145">代理对象</strong>
-  从原理角度对比：
   -  `ref` 通过 `Object.defineProperty()` 的 `get` 与 `set` 来实现响应式（数据劫持）
   -  `reactive` 通过使用 <strong style="color:#DD5145">`Proxy`</strong> 来实现响应式（数据劫持）, 并通过 <strong style="color:#DD5145">`Reflect`</strong> 操作<strong style="color:orange">源对象</strong>内部的数据
-  从使用角度对比：
   -  `ref` 定义的数据：操作数据<strong style="color:#DD5145">需要</strong> `.value`，读取数据时模板中直接读取<strong style="color:#DD5145">不需要</strong> `.value`
   -  `reactive` 定义的数据：操作数据与读取数据：<strong style="color:#DD5145">均不需要</strong> `.value`

## 1.6 `setup` 的两个注意点

### 1.6.1 使用说明

- `setup` 执行的时机
  - 在 `beforeCreate` 之前执行一次，`this` 是 `undefined`

- `setup` 的参数
  - `props`：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
  - `context`：上下文对象
    - `attrs`: 值为对象，包含：组件外部传递过来，但没有在 `props` 配置中声明的属性, 相当于 `this.$attrs`
    - `slots`: 收到的插槽内容, 相当于 `this.$slots`
    - `emit`: 分发自定义事件的函数, 相当于 `this.$emit`

### 1.6.2 代码示例

```vue
<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发一下 Demo 组件的 hello 事件</button>
</template>

<script>
export default {
  name: "Demo",
  props: ["message"],
  emits: ["hello"],
  setup(props, context) {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----", this);

    // 数据
    let person = {
      name: "张三",
      age: 18,
    };

    console.log(props, context);
    // props
    // console.log("props", props);
    // 相当于 Vue2 中的 $attrs
    // console.log("attrs", context.attrs);
    // 触发自定义事件
    // console.log("emit", context.emit);
    // 插槽
    console.log("slots", context.slots);

    function test() {
      context.emit("hello", person.name);
    }

    return {
      person,
      test,
    };
  },
  beforeCreate() {
    console.log("-----beforeCreate-----");
  },
};
</script>
```

## 1.7 计算属性与监视

### 1.7.1 `computed` 函数

- 与 `Vue2.x` 中 `computed` 配置功能一致

- 写法：

  ```js
  import {computed} from 'vue'
  
  setup(){
      ...
  	//计算属性——简写
      let fullName = computed(()=>{
          return person.firstName + '-' + person.lastName
      })
      //计算属性——完整
      let fullName = computed({
          get(){
              return person.firstName + '-' + person.lastName
          },
          set(value){
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
  }
  ```
  
- 代码示例

  ```vue
  <template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstName" />
    <br />
    名：<input type="text" v-model="person.lastName" />
    <br />
    全名：<input type="text" v-model="person.fullName" />
  </template>
  
  <script>
  import { reactive, computed } from "@vue/reactivity";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      let person = reactive({
        firstName: "张",
        lastName: "三",
      });
  
      // 计算属性-简写
      // person.fullName = computed(() => {
      //   return person.firstName + "-" + person.lastName;
      // });
  
      // 计算属性-完整写法（考虑读和写）
      person.fullName = computed({
        get() {
          return person.firstName + "-" + person.lastName;
        },
        set(value) {
          const arr = value.split("-");
          person.firstName = arr[0];
          person.lastName = arr[1];
        },
      });
  
      return {
        person,
        // fullName,
      };
    },
    beforeCreate() {
      console.log("-----beforeCreate-----");
    },
  };
  </script>
  ```

### 1.7.2 `watch` 函数

- 与 `Vue2` 中 `watch` 配置功能一致

- 两个小“坑”：

  - 监视 `reactive` 定义的响应式数据时：`oldValue` 无法正确获取、强制开启了深度监视（`deep` 配置失效）
  - 监视 `reactive` 定义的响应式数据中某个属性时：`deep` 配置有效。

  ```js
  //情况一：监视ref定义的响应式数据
  watch(sum,(newValue,oldValue)=>{
  	console.log('sum变化了',newValue,oldValue)
  },{immediate:true})
  
  //情况二：监视多个ref定义的响应式数据
  watch([sum,msg],(newValue,oldValue)=>{
  	console.log('sum或msg变化了',newValue,oldValue)
  }) 
  
  /* 情况三：监视reactive定义的响应式数据
  			若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
  			若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
  */
  watch(person,(newValue,oldValue)=>{
  	console.log('person变化了',newValue,oldValue)
  },{immediate:true,deep:false}) //此处的deep配置不再奏效
  
  //情况四：监视reactive定义的响应式数据中的某个属性
  watch(()=>person.job,(newValue,oldValue)=>{
  	console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true}) 
  
  //情况五：监视reactive定义的响应式数据中的某些属性
  watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
  	console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true})
  
  //特殊情况
  watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue)
  },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
  ```
  
- 代码示例

  ```vue
  <template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我 +1</button>
    <hr />
    <h2>当前的信息为：{{ message }}</h2>
    <button @click="message += '~'">点我修改信息</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </template>
  
  <script>
  import { ref, reactive, watch } from "vue";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      let sum = ref(0);
  
      let message = ref("hello");
  
      let person = reactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
  
      // 情况一：监听 ref 所定义的一个响应式数据
      // watch(
      //   sum,
      //   (newValue, oldValue) => {
      //     console.log("sum 的值变化了", newValue, oldValue);
      //   },
      //   {
      //     immediate: true,
      //   }
      // );
  
      // 情况二：监听 ref 所定义的多个响应式数据
      // watch([sum, message], (newValue, oldValue) => {
      //   console.log("sum 或 message 的值变化了", newValue, oldValue);
      // });
  
      // 情况三：监听 reactive 所定义的一个响应式数据的全部属性
      // 1.注意：此处无法活得 oldValue
      // 2,注意：强制开启了深度监视（deep: false 配置无效）
      // watch(
      //   person,
      //   (newValue, oldValue) => {
      //     console.log("person 的值变化了", newValue, oldValue);
      //   },
      //   // 此时 deep 配置无效
      //   {
      //     deep: true,
      //   }
      // );
  
      // 情况四：监听 reactive 所定义的一个响应式数据中的某个属性
      // watch(
      //   () => person.name,
      //   (newValue, oldValue) => {
      //     console.log("person 中的 name 属性的值变化了", newValue, oldValue);
      //   }
      // );
  
      // 情况五:监听 reactive 所定义的一个响应式数据中的某些属性
      // watch([() => person.name, () => person.age], (newValue, oldValue) => {
      //   console.log("person 的 name 或 age 属性的值变化了", newValue, oldValue);
      // });
  
      // 特殊情况:
      watch(
        () => person.job,
        (newValue, oldValue) => {
          console.log("person 的 job 属性的值发生变化了", newValue, oldValue);
        },
        // 此处由于监视的是 reactive 所定义的对象中的某个属性,所哟 deep 配置有效
        {
          deep: true,
        }
      );
  
      return {
        sum,
        message,
        person,
      };
    },
    beforeCreate() {
      console.log("-----beforeCreate-----");
    },
  };
  </script>
  ```

### 1.7.3 `watchEffect` 函数

- `watch` 的套路是：既要指明监视的属性，也要指明监视的回调

- `watchEffect` 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性

- `watchEffect` 有点像 `computed`：

  - 但 `computed` 注重的计算出来的值（回调函数的返回值），所以必须要写返回值
  - 而 `watchEffect` 更注重的是过程（回调函数的函数体），所以不用写返回值

  ```js
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect配置的回调执行了')
  })
  ```
  
- 代码示例：

  ```vue
  <template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我 +1</button>
    <hr />
    <h2>当前的信息为：{{ message }}</h2>
    <button @click="message += '~'">点我修改信息</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </template>
  
  <script>
  import { reactive, ref, watch, watchEffect } from "vue";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      let sum = ref(0);
  
      let message = ref("hello");
  
      let person = reactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
  
      watch(
        sum,
        (newValue, oldValue) => {
          console.log("sum 的值变化了", newValue, oldValue);
        },
        {
          immediate: true,
        }
      );
  
      watchEffect(() => {
        // 当 sum/person.job.j1,salary 的值发生变化时,执行回调
        const x1 = sum.value;
        const x2 = person.job.j1.salary;
        console.log("所指定的回调执行了", x1, x2);
      });
  
      return {
        sum,
        message,
        person,
      };
    },
    beforeCreate() {
      console.log("-----beforeCreate-----");
    },
  };
  </script>
  ```

## 1.8 生命周期

### 1.8.1 使用说明

- `Vue3` 中可以继续使用 `Vue2` 中的生命周期钩子，但有有两个被更名：
  - `beforeDestroy` 改名为 `beforeUnmount`
  - `destroyed` 改名为 `unmounted`
- `Vue3` 也提供了 `Composition API` 形式的生命周期钩子，与 `Vue2` 中钩子对应关系如下：
  - `beforeCreate` ===> `setup()`
  - `beforeMount` ===>`onBeforeMount`
  - `mounted`  ===> `onMounted`
  - `beforeUpdate` ===> `onBeforeUpdate`
  - `updated`  ===> `onUpdated`
  - `beforeUnmount`  ===> `onBeforeUnmount`
  - `unmounted` ==> `onUnmounted`

### 1.8.2 代码示例

```vue
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我 +1</button>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");

    let sum = ref(0);

    // 通过组合式 API 的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log("-----onBeforeMount-----");
    });
    onMounted(() => {
      console.log("-----onMounted-----");
    });
    onBeforeUpdate(() => {
      console.log("-----onBeforeUpdate-----");
    });
    onUpdated(() => {
      console.log("-----onUpdated-----");
    });
    onBeforeUnmount(() => {
      console.log("-----onBeforeUnmount-----");
    });
    onUnmounted(() => {
      console.log("-----onUnmounted-----");
    });

    return {
      sum,
    };
  },
  // 通过配置项的形式使用生命周期钩子
  // beforeCreate() {
  //   console.log("-----beforeCreate-----");
  // },
  // created() {
  //   console.log("-----created-----");
  // },
  // beforeMount() {
  //   console.log("-----beforeMount-----");
  // },
  // mounted() {
  //   console.log("-----mounted-----");
  // },
  // beforeUpdate() {
  //   console.log("-----beforeUpdate-----");
  // },
  // updated() {
  //   console.log("-----updated-----");
  // },
  // beforeUnmount() {
  //   console.log("-----beforeUnmount-----");
  // },
  // unmounted() {
  //   console.log("-----unmounted-----");
  // },
};
</script>
```

## 1.9 自定义 `hook` 函数

### 1.9.1 使用说明

- 什么是 `hook`？—— 本质是一个函数，把 `setup` 函数中使用的 `Composition API` 进行了封装
- 类似于 `Vue2` 中的 `mixin`
- 自定义 `hook` 的优势：复用代码，让 `setup` 中的逻辑更清楚易懂

### 1.9.2 代码示例

创建 `js` 文件

```javascript
import {
    reactive,
    onMounted,
    onBeforeUnmount
} from 'vue';

export default function () {
    let point = reactive({
        x: 0,
        y: 0
    })

    // 实现鼠标“打点”相关的方法
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(event.pageX, event.pageY);
    }

    // 实现鼠标“打点”相关的生命周期钩子
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}
```

引入使用

```vue
<template>
  <h2>我是 Test 组件</h2>
  <h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
</template>
<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "Test",
  setup() {
    let point = usePoint();

    return {
      point,
    };
  },
};
</script>
```

## 1.10 `toRef`

### 1.10.1 使用说明

- 作用：创建一个 `ref` 对象，其 `value` 值指向另一个对象中的某个属性
- 语法：```const name = toRef(person,'name')```
- 应用:   要将响应式对象中的某个属性单独提供给外部使用时。


- 扩展：```toRefs``` 与```toRef```功能一致，但可以批量创建多个 ref 对象，语法：```toRefs(person)```

### 1.10.2 代码示例

```vue
<template>
  <h2>信息：{{ person }}</h2>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <!-- <h2>薪资：{{ salary }}</h2> -->
  <h2>薪资：{{ job.j1.salary }}</h2>
  <button @click="name += '@'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <!-- <button @click="salary++">涨薪</button> -->
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // salary: toRef(person.job.j1, "salary"),
      ...toRefs(person),
    };
  },
};
</script>
```

## 2. 其它 `Composition API`

### 2.1 `shallowReactive` 与 `shallowRef`

- `shallowReactive`：只处理对象最外层属性的响应式（浅响应式）

- `shallowRef`：只处理基本数据类型的响应式，不进行对象的响应式处理

- 什么时候使用?
  -  如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ===> `shallowReactive`
  -  如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> `shallowRef`
  
- 代码示例：

  ```vue
  <template>
    <h2>当前 x.y 的值是：{{ x.y }}</h2>
    <button @click="x = { y: 888 }">点我替换 x</button>
    <button @click="x.y++">点我 x.y + 1</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </template>
  
  <script>
  import { shallowReactive, shallowRef } from "vue";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      console.log("-----setup-----");
  
      // let person = reactive({
      //   name: "张三",
      //   age: 18,
      //   job: {
      //     j1: {
      //       salary: 20,
      //     },
      //   },
      // });
      // 只考虑第一层数据的响应式。此种情况下，修改薪资就不起作用了
      let person = shallowReactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
  
      let x = shallowRef({
        y: 0,
      });
      console.log("*****", x);
  
      return {
        person,
        x,
      };
    },
  };
  </script>
  ```

### 2.2 `readonly` 与 `shallowReadonly`

- `readonly`: 让一个响应式数据变为只读的（深只读）

- `shallowReadonly`：让一个响应式数据变为只读的（浅只读）

- 应用场景：不希望数据被修改时

- 代码示例：

  ```vue
  <template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我 ++</button>
    <h2>{{ person }}</h2>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += '@'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </template>
  
  <script>
  import { ref, reactive, readonly, shallowReadonly } from "vue";
  export default {
    name: "Demo",
    setup() {
      // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
      console.log("-----setup-----");
      let sum = ref(0);
  
      let person = reactive({
        name: "张三",
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      });
  
      // 数据不修改，页面也不更新
      // person = readonly(person);
  
      // 数据不修改，页面也不更新，只作用第一层属性，可以作用于第二层以上的属性，如可以修改薪资
      // person = shallowReadonly(person);
  
      // sum = readonly(sum);
  
      sum = shallowReadonly(sum);
  
      return {
        sum,
        person,
      };
    },
  };
  </script>
  ```

### 2.3 `toRaw` 与 `markRaw`

#### 2.3.1 使用说明

- `toRaw`：
  - 作用：将一个由 `reactive` 生成的<strong style="color:orange">响应式对象</strong>转为<strong style="color:orange">普通对象</strong>
  - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
- `markRaw`：
  - 作用：标记一个对象，使其永远不会再成为响应式对象
  - 应用场景:
    1.  有些值不应被设置为响应式的，例如复杂的第三方类库等
    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

#### 2.3.2 代码示例

```vue
<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我 ++</button>
  <h2>{{ person }}</h2>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}</h2>
  <h2 v-show="person.car">车辆：{{ person.car }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的 person</button>
  <button @click="addCar">添加一台车</button>
  <button @click="person.car.name += '@'">修改车的名字</button>
  <button @click="changeCarPrice">修改车的价格</button>
</template>

<script>
import { ref, reactive, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    // setup 在 beforeCreate 生命周期之前执行，此时的 this undefined
    console.log("-----setup-----");
    let sum = ref(0);

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function showRawPerson() {
      const p = toRaw(person);
      p.age++;
      console.log(p);
    }

    function addCar() {
      let car = {
        name: "奔驰",
        price: 40,
      };
      // 添加的 car 是响应式数据
      // person.car = car;

      // 添加的 car 不是响应式数据，但是数据可以修改
      person.car = markRaw(car);
    }

    function changeCarPrice() {
      person.car.price++;
      console.log(person.car);
    }

    return {
      sum,
      person,
      showRawPerson,
      addCar,
      changeCarPrice,
    };
  },
};
</script>
```

### 2.4 `customRef`

- 作用：创建一个自定义的 `ref`，并对其依赖项跟踪和更新触发进行显式控制

- 实现防抖效果：

  ```vue
  <template>
  	<input type="text" v-model="keyword">
  	<h3>{{keyword}}</h3>
  </template>
  
  <script>
  	import {ref,customRef} from 'vue'
  	export default {
  		name:'Demo',
  		setup(){
  			// let keyword = ref('hello') //使用Vue准备好的内置ref
  			//自定义一个myRef
  			function myRef(value,delay){
  				let timer
  				//通过customRef去实现自定义
  				return customRef((track,trigger)=>{
  					return{
  						get(){
  							track() //告诉Vue这个value值是需要被“追踪”的
  							return value
  						},
  						set(newValue){
  							clearTimeout(timer)
  							timer = setTimeout(()=>{
  								value = newValue
  								trigger() //告诉Vue去更新界面
  							},delay)
  						}
  					}
  				})
  			}
  			let keyword = myRef('hello',500) //使用程序员自定义的ref
  			return {
  				keyword
  			}
  		}
  	}
  </script>
  ```

### 2.5 `provide` 与 `inject`

#### 2.5.1 使用介绍

- 作用：实现<strong style="color:#DD5145">祖与后代组件间</strong>通信

- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据

- 具体写法：

  1. 祖组件中：

     ```js
     setup(){
     	......
         let car = reactive({name:'奔驰',price:'40万'})
         provide('car',car)
         ......
     }
     ```

  2. 后代组件中：

     ```js
     setup(props,context){
     	......
         const car = inject('car')
         return {car}
     	......
     }
     ```

#### 2.5.2 代码示例

父组件 `App` 

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <div class="app">
    <h1>我是 App 组件（祖），{{ name }} - {{ price }}W</h1>
    <button @click="price++">修改车的价格</button>
    <Children />
  </div>
</template>

<script>
import { provide, reactive, toRefs } from "vue";
import Children from "./components/Children.vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 40,
    });

    // 给自己的后代传递数据
    provide("car", car);

    return {
      ...toRefs(car),
    };
  },
  components: { Children },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
```

子组件 `children`

```vue
<template>
  <div class="children">
    <h1>我是 Children 组件（子）</h1>
    <Son />
  </div>
</template>

<script>
import Son from "./Son";
export default {
  name: "Children",
  components: { Son },
  setup() {},
};
</script>
<style scoped>
.children {
  background-color: skyblue;
  padding: 10px;
}
</style>
```

孙子组件 `Son`

```vue
<template>
  <div class="son">
    <h1>我是 Son 组件（孙） {{ car.name }} - {{ car.price }}W</h1>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Son",
  setup() {
    // 注入上代传来的数据
    let car = inject("car");

    return {
      car,
    };
  },
};
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>
```

### 2.6 响应式数据的判断

#### 2.6.1 使用说明

- `isRef`: 检查一个值是否为一个 `ref` 对象
- `isReactive`: 检查一个对象是否是由 `reactive` 创建的响应式代理
- `isReadonly`: 检查一个对象是否是由 `readonly` 创建的只读代理
- `isProxy`: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

#### 2.6.2 代码示例

```vue
<template>
  <!-- vue3 组件中的模板结构可以没有根标签 -->
  <h1>我是 App 组件</h1>
</template>

<script>
import {
  reactive,
  ref,
  isReactive,
  isRef,
  readonly,
  isReadonly,
  isProxy,
} from "vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 40,
    });

    let sum = ref(0);

    let car2 = readonly(car);

    // true
    console.log(isReactive(car));
    // true
    console.log(isRef(sum));
    // true
    console.log(isReadonly(car2));
    // true
    console.log(isProxy(car));
    // false
    console.log(isProxy(sum));
  },
};
</script>
```

## 3. `Composition API` 的优势

### 3.1 `Options API` 存在的问题

使用传统 `Options API` 中，新增或者修改一个需求，就需要分别在 `data`，`methods`，`computed` 里修改 

<div style="width:600px;height:370px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" style="width:600px;float:left" />
</div>
<div style="width:300px;height:370px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image" style="zoom:50%;width:560px;left" /> 
</div>


















### 3.2 `Composition API` 的优势

我们可以更加优雅的组织我们的代码、函数，让相关功能的代码更加有序的组织在一起

<div style="width:500px;height:340px;overflow:hidden;float:left">
    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image" style="height:360px"/>
</div>
<div style="width:430px;height:340px;overflow:hidden;float:left">
    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image" style="height:360px"/>
</div>
















## 4. 新的组件

### 4.1 `Fragment`

- 在 `Vue2` 中：组件必须有一个根标签
- 在 `Vue3` 中：组件可以没有根标签，内部会将多个标签包含在一个 `Fragment` 虚拟元素中
- 好处：减少标签层级，减小内存占用

### 4.2 `Teleport`

- 什么是 `Teleport`？—— `Teleport` 是一种能够将我们的<strong style="color:#DD5145">组件 `html` 结构</strong>移动到指定位置的技术。

  ```vue
  <teleport to="移动位置">
  	<div v-if="isShow" class="mask">
  		<div class="dialog">
  			<h3>我是一个弹窗</h3>
  			<button @click="isShow = false">关闭弹窗</button>
  		</div>
  	</div>
  </teleport>
  ```

### 4.3 `Suspense`

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

- 使用步骤：

  - 异步引入组件

    ```js
    import {defineAsyncComponent} from 'vue'
    const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
    ```

  - 使用 `Suspense` 包裹组件，并配置好 `default` 与 `fallback`

    ```vue
    <template>
    	<div class="app">
    		<h3>我是App组件</h3>
    		<Suspense>
    			<template v-slot:default>
    				<Child/>
    			</template>
    			<template v-slot:fallback>
    				<h3>加载中.....</h3>
    			</template>
    		</Suspense>
    	</div>
    </template>
    ```

## 5. 其他

### 5.1 全局 `API` 的转移

- `Vue2.x` 有许多全局 `API` 和配置

  - 例如：注册全局组件、注册全局指令等

    ```js
    //注册全局组件
    Vue.component('MyButton', {
      data: () => ({
        count: 0
      }),
      template: '<button @click="count++">Clicked {{ count }} times.</button>'
    })
    
    //注册全局指令
    Vue.directive('focus', {
      inserted: el => el.focus()
    }
    ```

- `Vue3` 中对这些 `API` 做出了调整：

  - 将全局的 `API`，即：`Vue.xxx` 调整到应用实例（`app`）上

    | 2.x 全局 API（`Vue`）    | 3.x 实例 API (`app`)                        |
    | ------------------------ | ------------------------------------------- |
    | Vue.config.xxxx          | app.config.xxxx                             |
    | Vue.config.productionTip | <strong style="color:#DD5145">移除</strong> |
    | Vue.component            | app.component                               |
    | Vue.directive            | app.directive                               |
    | Vue.mixin                | app.mixin                                   |
    | Vue.use                  | app.use                                     |
    | Vue.prototype            | app.config.globalProperties                 |

### 5.2 其他改变

- `data` 选项应始终被声明为一个函数

- 过度类名的更改：

  - `Vue2.x` 写法

    ```css
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-leave,
    .v-enter-to {
      opacity: 1;
    }
    ```

  - `Vue3.x` 写法

    ```css
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    
    .v-leave-from,
    .v-enter-to {
      opacity: 1;
    }
    ```

- <strong style="color:#DD5145">移除 </strong>`keyCode` 作为 `v-on` 的修饰符，同时也不再支持 `config.keyCodes`

- <strong style="color:#DD5145">移除</strong> `v-on.native` 修饰符

  - 父组件中绑定事件

    ```vue
    <my-component
      v-on:close="handleComponentEvent"
      v-on:click="handleNativeClickEvent"
    />
    ```

  - 子组件中声明自定义事件

    ```vue
    <script>
      export default {
        emits: ['close']
      }
    </script>
    ```

- <strong style="color:#DD5145">移除</strong>过滤器（`filter`）

  > 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 `JavaScript`” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。
