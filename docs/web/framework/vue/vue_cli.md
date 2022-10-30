---
title: Vue 脚手架编程
date: 2022-10-24
category:
  - 前端
tag:
  - Vue.js
---

# 1. `Vue` 脚手架编程
<!-- more -->

## 1.1 初始化脚手架

### 1.1.1 说明

1. `Vue` 脚手架是 `Vue` 官方提供的标准化开发工具（开发平台）
2. 最新的版本是 `4.x`
3. [文档](https://cli.vuejs.org/zh/)

### 1.1.2 具体步骤

1. 第一步（仅第一次执行）：全局安装 `@vue/cli`

   ```bash
   npm install -g @vue/cli
   ```

2. 第二步： 切换到要创建项目的目录 ，然后使用命令创建项目
   
      ```bash 
      vue create xxxx
      ```
      
      xxxx: 项目名
      
3. 第三步：启动项目

      ```bash
      npm run serve
      ```

4. 备注：

      1. 如出现：下载缓慢请配置淘宝镜像：

         ```bash
         npm config set registry https://registry.npm.taobao.org
         ```

      2. `Vue` 脚手架隐藏了所有 `webpack` 相关的配置，若想查看具体的 `webpack`配置，请执行：

         ```bash
         vue inspect > output.js
         ```

### 1.1.3 模板项目的结构

```
├──node_modules
├──public
│ ├──favicon.ico:页签图标
│ └──index.html:主页面
├──src
│ ├──assets:存放静态资源
│ │ └──logo.png
│ │──component:存放组件
│ │ └──HelloWorld.vue
│ │──App.vue:汇总所有组件
│ │──main.js:入口文件
├──.gitignore:git版本管制忽略的配置
├──babel.config.js:babel的配置文件
├──package.json:应用包配置文件
├──README.md:应用描述文件
├──package-lock.json：包版本控制文件
```

### 1.1.4 不同版本的 `Vue`


1. `vue.js` 与 `vue.runtime.xxx.js` 的区别：
    1. `vue.js` 是完整版的 `Vue`，包含：核心功能 + 模板解析器
    2. `vue.runtime.xxx.js` 是运行版的 `Vue`，只包含：核心功能；没有模板解析器
2. 因为 `vue.runtime.xxx.js` 没有模板解析器，所以不能使用 `template` 这个配置项，需要使用 `render` 函数接收到的 `createElement` 函数去指定具体内容

### 1.1.5 `vue.config.js` 配置文件

1. 使用 `vue inspect > output.js` 可以查看到Vue脚手架的默认配置

2. 使用 `vue.config.js` 可以对脚手架进行个性化定制，[详情](https://cli.vuejs.org/zh)



## 1.2 `ref`

### 1.2.1 使用说明

1. 被用来给元素或子组件注册引用信息（id 的替代者）
2. 应用在 `html` 标签上获取的是真实 `DOM` 元素，应用在组件标签上是组件实例对象（`vc`）
3. 使用方式：
    1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
    2. 获取：```this.$refs.xxx```

## 1.3 `props`

#### 1.3.1 使用说明


1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo name="xxx"/>```

3. 接收数据：

    1. 第一种方式（只接收）：```props:['name'] ```

    2. 第二种方式（限制类型）：```props:{name:String}```

    3. 第三种方式（限制类型、限制必要性、指定默认值）：

        ```js
        props:{
        	name:{
        	type:String, //类型
        	required:true, //必要性
        	default:'老王' //默认值
        	}
        }
        ```

    > 备注：`props` 是只读的，`Vue` 底层会监测你对 `props` 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 `props` 的内容到 `data` 中一份，然后去修改 `data` 中的数据
    
### 1.3.2 代码示例

父组件 `App` 中使用子组件 `Student`，并传参数

```vue
<template>
<div id="app">
    <!-- 注意：属性前面有没有加 : 的区别，没加就是表示传的参数是字符串，加了就是表示具体的类型值 -->
    <!-- <Student studentName="张三" studentSex="男" studentAge="18"/> -->
    <hr />
    <Student studentName="张三" studentSex="男" :studentAge="18"/>
    <hr />
    <Student  studentSex="男" :studentAge="20"/>

    </div>
</template>
<script>
    import Student from "./components/Student.vue";

    export default {
        components: { Student }
    };
</script>
```

`Student` 组件接收父组件传来的参数

```vue
<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>学生姓名: {{ studentName }}</h2>
    <h2>学生性别: {{ studentSex }}</h2>
    <!-- <h2>学生年龄: {{ studentAge + 1 }}</h2> -->
    <h2>学生年龄: {{ age + 1 }}</h2>
    <button @click="addAge">点我年龄 +10 </button>
  </div>
</template>

<script>
export default {
  name: "Student",
  // 接收参数的简要写法
  // props: ['studentName', 'studentSex', 'studentAge'],

  // 接受参数 + 指定类型的写法
  // props: {
  //   studentName: String,
  //   studentSex: String,
  //   // 指令类型为数值类型，当传入的类型不是数值类型时就会报错
  //   // Expected Number with value 18, got String with value "18".
  //   studentAge: Number, 
  // },

  // 接收参数 + 指定类型 + 指定是否必传 + 指定默认值
  props: {
    studentName: {
      // 指定类型是字符串
      type: String,
      // 指定默认值
      default: "李四"
    },
    studentSex: {
      type: String,
      // 指定必传
      required: true
    },
    studentAge: {
      type: Number
    }
  },
  
  data() {
    return {
      msg: "我是一名学生",
      age: this.studentAge
    };
  },

  methods: {
    addAge() {
      // props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据
      // 警告 
      // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
      // this.studentAge += 10;
      this.age += 10
    }
  }
};
</script>
```

## 1.4 混入

### 1.4.1 使用说明

1. 功能：可以把多个组件共用的配置提取成一个混入对象

2. 使用方式：

    第一步定义混入：

    ```
    {
        data(){....},
        methods:{....}
        ....
    }
    ```

    第二步使用混入：
    ​	- 全局混入：```Vue.mixin(xxx)```
    ​	- 局部混入：```mixins:['xxx']	```

### 1.4.2 代码示例

定义混入 `mixin.js`

```javascript
// 定义一个混入配置信息
// 说明：如果混入中配置的数据、方法，在组件中有同样的数据定义、方法名称，会加载组件中的数据和方法，混入中的数据和方法就不起作用
const mixin1 = {
    data() {
        return {
            x: 200,
            y: 100
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    },
}
// 说明：生命周期中的函数，如果混入、组件中都有配置的话，二者都会执行
const mixin2 = {
    mounted() {
        console.log("mixin 中的 mounted... ")
    },
}

export {
    mixin1,
    mixin2
}
```

在组件中使用混入：

```vue
<template>
  <div>
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button @click="showName">点我提示信息</button>
  </div>
</template>

<script>
// 引入混入
import { mixin1 } from "@/mixin";

export default {
  name: "School",
  // 混入配置项
  mixins: [mixin1],
  data() {
    return {
      name: "北京大学",
      address: "北京",
    };
  },
  methods: {
    // showName() {
    //   alert(this.name);
    // },
  },
};
</script>
```

```vue
<template>
  <div>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="showName">点我提示信息</button>
  </div>
</template>

<script>
// 引入混入
import { mixin1, mixin2 } from "../mixin";
export default {
  name: "Student",
  mixins: [mixin1, mixin2],

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
      x: 1000,
    };
  },
  methods: {
    showName() {
      console.log("student... ");
      alert(this.name + "hello world");
    },
  },
  mounted() {
    console.log("student 中的 mounted... ");
  },
};
</script>
```

## 1.5 插件

### 1.5.1 使用说明

1. 功能：用于增强 `Vue`

2. 本质：包含 `install` 方法的一个对象，`install` 的第一个参数是 `Vue`，第二个以后的参数是插件使用者传递的数据

3. 定义插件：

    ```js
    对象.install = function (Vue, options) {
        // 1. 添加全局过滤器
        Vue.filter(....)
    
        // 2. 添加全局指令
        Vue.directive(....)
    
        // 3. 配置全局混入(合)
        Vue.mixin(....)
    
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
    ```

4. 使用插件：```Vue.use()```

### 1.5.2 代码示例

定义插件 `plugins.js`

```javascript
export default {
    install(Vue) {
        console.log(Vue, "@@@@@");

        // 全局定义过滤器
        Vue.filter("strSlice", function (value) {
            return value.slice(0, 4)
        })

        // 全局定义指令
        Vue.directive("fbind", {
            // 指令与元素成功绑定时 一上来
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在模板被重新解析时
            updated(element, binding) {
                element.value = binding.value
            },
        })
        // 给 Vue 原型上添加一个方法 vm、vc 都能使用
        Vue.prototype.hello = () => {
            console.log("hello world ");
        }
    },

}
```

在 `main.js` 中使用插件

```javascript
// 引入插件
import plugins from './plugins'

// 使用插件
Vue.use(plugins)

```

## 1.6 `scoped` 样式

1. 作用：让样式在局部生效，防止冲突

2. 写法：

   ```css
   <style scoped>
     .demo {
       background-color: orange;
       // less 与 css 的一个区别就是 less 可以叠加写，css 不可以
       .title {
         font-size: 40px;
       }
     }
   </style>
   ```

## 1.7 组件化编码流程

1. 组件化编码流程：
   1. 拆分静态组件：组件要按照功能点拆分，命名不要与 `html` 元素冲突
   2. 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
        1. 一个组件在用：放在组件自身即可
        2. 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）
        3. 实现交互：从绑定事件开始
2. `props` 适用于：
   1. 父组件 ==> 子组件 通信
   2. 子组件 ==> 父组件 通信（要求父先给子一个函数）
3. 使用 `v-model` 时要切记：`v-model` 绑定的值不能是 `props` 传过来的值，因为 `props` 是不可以修改的！
4. `props` 传过来的若是对象类型的值，修改对象中的属性时 `Vue` 不会报错，但不推荐这样做

## 1.8 `webStorage`

### 1.8.1 使用说明

1. 存储内容大小一般支持 5MB 左右（不同浏览器可能还不一样）

2. 浏览器端通过 `Window.sessionStorage` 和 `Window.localStorage` 属性来实现本地存储机制

3. 相关API：
    1. ```xxxxxStorage.setItem('key', 'value');```
        该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值
    2. ```xxxxxStorage.getItem('person');```
        ​该方法接受一个键名作为参数，返回键名对应的值
    3. ```xxxxxStorage.removeItem('key');```
        ​该方法接受一个键名作为参数，并把该键名从存储中删除
    4. ``` xxxxxStorage.clear()```

        该方法会清空存储中的所有数据

4. 备注：
    1. `SessionStorage` 存储的内容会随着浏览器窗口关闭而消失
    2. `LocalStorage` 存储的内容，需要手动清除才会消失
    3. ```xxxxxStorage.getItem(xxx)``` 如果 xxx 对应的 `value` 获取不到，那么 `getItem` 的返回值是 `null`
    4. ```JSON.parse(null)``` 的结果依然是 `null`

### 1.8.2 代码示例

`LocalStorage`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>localStorage 浏览器本地存储</title>
</head>
<body>
    <div>
        <h2>localStorage 浏览器本地存储</h2>
        <button onclick="save()">点我保存一个数据</button>
        <button onclick="read()">点我读取一个数据</button>
        <button onclick="remove()">点我删除一个数据</button>
        <button onclick="clearAll()">点我清空数据</button>
    </div>

    <script type="text/javascript">
        let person = {name: "张三", age: 19}

        // localStorage 保存数据时最终都是 字符串
        function save() {
            // 保存字符串
            localStorage.setItem("name", "张三")
            // 保存数字
            localStorage.setItem("age", 18)
            // 保存对象数据
            // localStorage.setItem("person", person)
            localStorage.setItem("person", JSON.stringify(person))
        }

        function read() {
            // 读取字符串
            console.log(localStorage.getItem("name"))
            // 读取数字
            console.log(localStorage.getItem("age"))
            // 读取对象
            console.log(localStorage.getItem("person"))
            console.log(JSON.parse(localStorage.getItem("person")))
        }

        function remove() {
            // 删除字符串
            localStorage.removeItem("name")
            // 移除数字
            localStorage.removeItem("age")
            // 移除对象
            localStorage.removeItem("person")
        }

        function clearAll() {
            console.log("clear...");
            localStorage.clear()
        }
    </script>
</body>
</html>
```

`SessionStorage`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sessionStorage 浏览器本地存储</title>
</head>
<body>
    <div>
        <h2>sessionStorage 浏览器本地存储</h2>
        <button onclick="save()">点我保存一个数据</button>
        <button onclick="read()">点我读取一个数据</button>
        <button onclick="remove()">点我删除一个数据</button>
        <button onclick="clearAll()">点我清空数据</button>
    </div>

    <script type="text/javascript">
        let person = {name: "张三", age: 19}

        // sessionStorage 保存数据时最终都是 字符串
        function save() {
            // 保存字符串
            sessionStorage.setItem("name", "张三")
            // 保存数字
            sessionStorage.setItem("age", 18)
            // 保存对象数据
            // sessionStorage.setItem("person", person)
            sessionStorage.setItem("person", JSON.stringify(person))
        }

        function read() {
            // 读取字符串
            console.log(sessionStorage.getItem("name"))
            // 读取数字
            console.log(sessionStorage.getItem("age"))
            // 读取对象
            console.log(sessionStorage.getItem("person"))
            console.log(JSON.parse(sessionStorage.getItem("person")))
        }

        function remove() {
            // 删除字符串
            sessionStorage.removeItem("name")
            // 移除数字
            sessionStorage.removeItem("age")
            // 移除对象
            sessionStorage.removeItem("person")
        }

        function clearAll() {
            console.log("clear...");
            sessionStorage.clear()
        }
    </script>
</body>
</html>
```


## 1.9 组件的自定义事件

### 1.9.1 使用说明
1. 一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===> 父组件</strong>

2. 使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件（<span style="color:red">事件的回调在 A 中</span>）

3. 绑定自定义事件：

    1. 第一种方式，在父组件中：```<Demo @helloWorld="test"/>```  或 ```<Demo v-on:helloWorld="test"/>```

    2. 第二种方式，在父组件中：

        ```js
        <Demo ref="demo"/>
        ......
        mounted(){
           this.$refs.xxx.$on('helloWorld', this.test)
        }
        ```

    3. 若想让自定义事件只能触发一次，可以使用 ```once``` 修饰符，或 ```$once``` 方法

4. 触发自定义事件：```this.$emit('helloWorld',数据)```		

5. 解绑自定义事件```this.$off('helloWorld')```

6. 组件上也可以绑定原生 `DOM` 事件，需要使用 ```native``` 修饰符

7. 注意：通过 ```this.$refs.xxx.$on('helloWorld',回调)``` 绑定自定义事件时，回调<span style="color:red">要么配置在methods中</span>，<span style="color:red">要么用箭头函数</span>，否则 `this` 指向会出问题！

### 1.9.2 代码示例

父组件 `	App`

```vue
<template>
  <div id="app" class="app">
    <h1>学校名称是：{{ schoolName }}</h1>
    <h1>学生姓名是：{{ studentName }}</h1>

    <!-- 通过 props 来实现子组件给父组件传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 第一种写法：通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据 使用 @ 或者 v-on -->
    <!-- <Student @getStudentName="getStudentName" /> -->
    
    <!-- 第二种写法：通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据 使用 ref-->
    <Student ref="student" />
    
    <!-- 通过父组件给子组件绑定一个自定义事件来实现子组件给父组件传递数据，只触发一次 -->
    <!-- <Student @getStudentName.once="getStudentName"/> -->
    <!-- <Student ref="student" /> -->
    
    <!-- 使用组件原生的方法 -->
    <!-- <Student @click.native="show" /> -->
    
    <!-- <Student @getStudentName="getStudentName" @getDemo="getDemo" /> -->
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  components: { School, Student },
  data() {
    return {
      schoolName: "",
      studentName: "",
    };
  },

  methods: {
    // 接收 School 子组件传递来的数据
    getSchoolName(name) {
      console.log("App 组件收到了学校名称", name);
      this.schoolName = name;
    },

    // 接收 Student 子组件传递来的数据
    getStudentName(name) {
      console.log("App 组件收到了学生姓名", name);
      this.studentName = name;
    },

    // 接收多个数据
    getDemo(...params) {
      console.log(...params);
    },

    show() {
      alert(123)
    }
  },

  mounted() {
    // 写法一
    this.$refs.student.$on("getStudentName", (name) => {
      // 普通函数写法 此时 this 是 VueComponent 实例 Student
      // 箭头函数写法 此时 this 是 vm 
      console.log(this,"@@@", name);
       this.studentName = name
    })
    // 写法二
    // this.$refs.student.$on("getStudentName", this.getStudentName)
    // this.$refs.student.$once("getStudentName", this.getStudentName)
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
```

子组件 `School`

```vue
<template>
  <div class="school">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    <button @click="sendSchoolName">把学校名称给 App 组件</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "北京大学",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>

<style>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
```

子组件 `Student`

```vue
<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生姓名给 App 组件</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">销毁当前组件实例</button>
  </div>
</template>

<script>
// 引入混入
export default {
  name: "Student",

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
    };
  },
  methods: {
    sendStudentName() {
      // 触发 student 组件实例的 getStudentName 事件
      this.$emit("getStudentName", this.name);
      this.$emit("getDemo", 1, 2, 3, 4);
    },
    // 解绑自定义事件
    unbind() {
      // 解绑一个自定义事件
      // this.$off("getStudentName");

      // 解绑多个自定义事件
      this.$off(["getStudentName", "getDemo"]);
    },
    // 销毁当前组件实例
    death() {
      // 销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
      this.$destroy()
    }
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>
```

## 1.10 全局事件总线

### 1.10.1 使用说明
1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>

2. 安装全局事件总线：

   ```js
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
   	},
       ......
   }) 
   ```

3. 使用事件总线：

   1. 接收数据：A 组件想接收数据，则在 A 组件中给 `$bus` 绑定自定义事件，事件的<span style="color:red">回调留在 A 组件自身</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.$bus.$on('xxxx',this.demo)
      }
      ```

   2. 提供数据：```this.$bus.$emit('xxxx',数据)```

4. 最好在 `beforeDestroy` 钩子中，用 `$off` 去解绑<span style="color:red">当前组件所用到的</span>事件

### 1.10.2 代码示例

在 `main.js` 中安装全局事件总线

```javascript
import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
})
```

在组件 `School` 中挂载全局事件

```vue
<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "北大大学",
      address: "北京",
    };
  },
  methods: {},
  // 在组件挂载时绑定一个事件
  mounted() {
    this.$bus.$on("getStudentName", (data) => {
      // 此时 this 是 VueComponent 的实例 School
      console.log(this);
      console.log("School 组件收到了数据:", data);
    });
  },
  // 在组件销毁前解绑事件
  beforeDestroy() {
    this.$bus.$off("getStudentName")
  }
};
</script>

<style>
.demo {
  background-color: skyblue;
}
</style>
```

在 `Student` 组件中触发全局事件

```vue
<template>
  <div class="demo">
    <h2 class="title">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生名字给 School 组件</button>
  </div>
</template>

<script>
// 引入混入
export default {
  name: "Student",

  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
    };
  },
  methods: {
    sendStudentName() {
      // 触发事件
      this.$bus.$emit("getStudentName", this.name)
    }
  },
};
</script>

<!-- <style>
  .demo {
    background-color: orange;
  }
</style> -->
<!-- 不指定，默认使用 css -->
<!--  scoped: 表示样式只对指定的组件起作用-->
<!-- <style scoped>
  .demo {
    background-color: orange;
  }
</style> -->

<!-- lang: 指定用什么样式  -->
<!-- less 需要引入 less-loader:npm install less-loader 指定版本：npm install less-loader@7 -->
<!-- npm view webpack versions 查看 webpack 版本命令，同理： -->
<style lang="less" scoped>
  .demo {
    background-color: orange;
    // less 与 css 的一个区别就是 less 可以叠加写，css 不可以
    .title {
      font-size: 40px;
    }
  }
</style>
```

## 1.11 消息订阅与发布

### 1.11.1 说明使用
1. 一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>

2. 它包含以下操作：

   1. 订阅消息--对应绑定事件监听
   2. 发布消息--分发事件
   3. 取消消息订阅--解绑事件监听

3. `PubSub.js`

   1. [在线文档](https://github.com/mroderick/PubSubJS)
   2. 安装：
   3. 相关语法：
      - `import PubSub from 'pubsub-js'` : 引入
      -  `PubSub.subscribe(‘msgName’, functon(msgName, data){})`: 订阅
      -  `PubSub.publish(‘msgName’,data)`: 发布消息，触发订阅的回调函数调用
      -  `PubSub.unsubscribe(token)`: 取消消息的订阅

4. 使用步骤：

   1. 安装 `pubsub`：```npm i pubsub-js```

   2. 引入: ```import pubsub from 'pubsub-js'```

   3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red">回调留在A组件自身</span>

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
      }
      ```

   4. 提供数据：```pubsub.publish('xxx',数据)```

   5. 最好在 `beforeDestroy` 钩子中，用 ```PubSub.unsubscribe(pid)``` 去<span style="color:red">取消订阅</span>

### 1.11.2 代码示例

`School` 组件订阅消息

```vue
<template>
  <div class="demo">
    <h2>学校名称： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "北大大学",
      address: "北京",
    };
  },
  methods: {},
  mounted() {
    // 订阅消息
    const pubId = pubsub.subscribe("sendStudentName", (messageName, data) => {
      // 箭头函数写法 此时 this 是 VueComponent 实例 School
      console.log(this);
      console.log(messageName, data);
    })
    // pubsub.subscribe("sendStudentName", function (messageName, data) {
    //   // 普通函数写法，此时 this undefined
    //   console.log(this);
    //   console.log(messageName, data);
    // });
  },
  beforeDestroy() {
    // 取消订阅消息
    // 取消订阅消息时要用 pubId 去取消订阅
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
.demo {
  background-color: skyblue;
}
</style>
```

 `Student` 组件消费消息

```vue
<template>
  <div class="demo">
    <h2 class="title">学生姓名: {{ name }}</h2>
    <h2>学生性别: {{ sex }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="sendStudentName">把学生姓名给 School 组件</button>
  </div>
</template>

<script>
// 引入消息订阅
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      age: 20,
    };
  },
  methods: {
    sendStudentName() {
      // 发布消息
      // 第一个参数是消息名
      pubsub.publish("sendStudentName", this.name);
    },
  },
};
</script>

<!-- <style>
  .demo {
    background-color: orange;
  }
</style> -->
<!-- 不指定，默认使用 css -->
<!--  scoped: 表示样式只对指定的组件起作用-->
<!-- <style scoped>
  .demo {
    background-color: orange;
  }
</style> -->

<!-- lang: 指定用什么样式  -->
<!-- less 需要引入 less-loader:npm install less-loader 指定版本：npm install less-loader@7 -->
<!-- npm view webpack versions 查看 webpack 版本命令，同理： -->
<style lang="less" scoped>
.demo {
  background-color: orange;
  // less 与 css 的一个区别就是 less 可以叠加写，css 不可以
  .title {
    font-size: 40px;
  }
}
</style>
```

## 1.12 nextTick


1. 语法：```this.$nextTick(回调函数)```
2. 作用：在下一次 `DOM` 更新结束后执行其指定的回调
3. 什么时候用：当改变数据后，要基于更新后的新 `DOM` 进行某些操作时，要在 `nextTick` 所指定的回调函数中执行
## 1.13 过度与动画

### 1.13.1 使用说明
1. 作用：在插入、更新或移除 `DOM` 元素时，在合适的时候给元素添加样式类名

3. 写法：

   1. 准备好样式：

      - 元素进入的样式：
        1. `v-enter`：进入的起点
        2. `v-enter-active`：进入过程中
        3. `v-enter-to`：进入的终点
      - 元素离开的样式：
        1. `v-leave`：离开的起点
        2. `v-leave-active`：离开过程中
        3. `v-leave-to`：离开的终点

   2. 使用```<transition>```包裹要过度的元素，并配置 `name` 属性：

      ```vue
      <transition name="hello">
      	<h1 v-show="isShow">你好啊！</h1>
      </transition>
      ```

   3. 备注：若有多个元素需要过度，则需要使用：```<transition-group>```，且每个元素都要指定 ```key``` 值

### 1.13.2 代码示例

`transition`

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear 表示页面一进来就进行动画效果 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">Hello World</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test1",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.hello-enter-active {
  animation: helloWorld 0.5s linear;
}

.hello-leave-active {
  animation: helloWorld 0.5s linear reverse;
}

@keyframes helloWorld {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
```

`transition-group`

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear 表示页面一进来就进行动画效果 -->
    <!-- transition-group 包裹一组标签，需要指定 key -->
    <transition-group name="hello" appear="">
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="isShow" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
}

/* 进入的起点，离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 离开的起点，进入的重点 */
.hello-leave,
.hello-enter-to {
  transform: translateX(0);
}
</style>
```

使用第三方动画库 `Animate.css`

```vue
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 使用第三方动画库 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">Hello</h1>
      <h1 v-show="isShow" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
// Animate.css 使用步骤
// 0.官网地址：https://animate.style/
// 1.安装：npm install animate.css --save
// 2.引入： import "animate.css";

import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>
```

## 1.14 插槽

### 1.14.1 使用说明


1. 作用：让父组件可以向子组件指定位置插入 `html` 结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===> 子组件</strong> 

2. 分类：默认插槽、具名插槽、作用域插槽
### 1.14.2 默认插槽

 父组件

```vue
<Category>
    <div>html结构1</div>
</Category>
```

子组件

```vue
<template>
	<div>
        <!-- 定义插槽 -->
        <slot>插槽默认内容...</slot>
    </div>
</template>
```

### 1.14.3 具名插槽

父组件中

```vue
<Category>
    <template slot="center">
        <div>html结构1</div>
    </template>

    <template v-slot:footer>
        <div>html结构2</div>
    </template>
</Category>
```

子组件中

```vue
<template>
	<div>
        <!-- 定义插槽 -->
        <slot name="center">插槽默认内容...</slot>
        <slot name="footer">插槽默认内容...</slot>
    </div>
</template>
```

### 1.14.4 作用域插槽

1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定</span>（`games` 数据在 `Category` 组件中，但使用数据所遍历出来的结构由 `App` 组件决定）

2. 具体编码：

   父组件中

   ```vue
   <Category>
       <template scope="scopeData">
           <!-- 生成的是ul列表 -->
           <ul>
               <li v-for="g in scopeData.games" :key="g">{{g}}</li>
           </ul>
       </template>
   </Category>
   
   <Category>
       <template slot-scope="scopeData">
           <!-- 生成的是h4标题 -->
           <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
       </template>
   </Category>
   ```

   子组件

   ```vue
   <template>
       <div>
           <slot :games="games"></slot>
       </div>
   </template>
   
   <script>
       export default {
           name:'Category',
           props:['title'],
           //数据在子组件自身
           data() {
               return {
                   games:['红色警戒','穿越火线','劲舞团','超级玛丽']
               }
           },
       }
   </script>
   ```