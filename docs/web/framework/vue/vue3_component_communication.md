---
title: Vue3 组件通信方式
date: 2023-06-05
category:
  - 前端
tag:
  - Vue.js
---

# `Vue3` 组件通信方式

<!-- more -->

## 0. 前言

不管是 `Vue2` 还是 `Vue3`,组件通信方式很重要，不管是项目还是面试都是经常用到的知识点。

回顾一下 `Vue2` 中组件的通信方式：

- `props`:可以实现父子组件、子父组件、甚至兄弟组件通信

- 自定义事件:可以实现子父组件通信

- 全局事件总线 `$bus`:可以实现任意组件通信

- `pubsub`:发布订阅模式实现任意组件通信

- `vuex`:集中式状态管理容器，实现任意组件通信

- `ref`:父组件获取子组件实例 `VC`,获取子组件的响应式数据以及方法

- `slot`:插槽(默认插槽、具名插槽、作用域插槽)实现父子组件通信

示例代码地址：https://github.com/chenyl8848/vue-technology-stack-study

## 1. `props`

> `props` 可以实现父子组件通信,在 `Vue3` 中可以通过 `defineProps` 获取父组件传递的数据，且在组件内部不需要引入 `defineProps` 方法可以直接使用。

父组件给子组件传递数据

```JavaScript
<template>
  <div class="box">
    <h1>props:我是父组件</h1>
    <Children :money = "money" :info = "info"></Children>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// 引入子组件
import Children from "./Children.vue";
// 使用 props 实现父子组件通信
let money = ref(1000);
let info = ref('发零花钱了')

</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background-color: pink;
}
</style>
```

子组件获取父组件传递数据：

``` JavaScript
<template>
  <div>
    <h2>props:我是子组件</h2>
    <p>接收父组件传值:{{ props.money }}</p>
    <p>接收父组件传值:{{ props.info }}</p>
    <!-- 无法修改 -->
    <!-- Set operation on key "money" failed: target is readonly. -->
    <!-- <button @click="updateProps">修改 props 的值</button> -->
  </div>
</template>

<script lang="ts" setup>
// 需要使用到 defineProps 方法去接受父组件传递过来的数据
// defineProps是 Vue3 提供方法,不需要引入直接使用
//数组|对象写法都可以
// let props = defineProps(["money", "info"]);
let props = defineProps({
  money: {
    // 接收数据的类型
    type: Number,
    default: 0,
  },
  info: {
    type: String,
    required: true,
  },
});

// props 是只读的，不能修改
// let updateProps = () => {
//   props.money = 3000;
// };
</script>

<style scoped>
</style>
```

> 注意：子组件获取到 `props` 数据就可以在模板中使用，但是切记 `props` 是只读的（只能读取，不能修改）。

## 2. 自定义事件

在 `Vue` 框架中事件分为两种：一种是原生的 `DOM` 事件，另外一种自定义事件。

原生 `DOM` 事件可以让用户与网页进行交互，比如 `click`、`dbclick`、`change`、`mouseenter`、`mouseleave`...

自定义事件可以实现子组件给父组件传递数据。

### 2.1 原生 `DOM` 事件

代码如下:

```Html
<pre @click="handler1">大江东去，浪淘尽</pre>
<pre @click="handler2(1,2,3,$event)">千古风流人物</pre>
```

```JavaScript
let handler1 = (event) => {
    console.log(event)
}

let handler2 = (x, y, z, $event) => {
    console.log(x, y, z, $event)
}
```

给 `pre` 标签绑定原生 `DOM` 事件点击事件，默认会给事件回调注入 `event` 事件对象。当点击事件注入多个参数时，注入的事件对象务叫 `$event`.



在 `Vue3` 框架 `click`、`dbclick`、`change`(这类原生 `DOM` 事件),不管是在标签、自定义标签上(组件标签)都是原生 `DOM` 事件。

`Vue2` 中却不是这样的,在 `Vue2` 中组件标签需要通过 `native` 修饰符才能变为原生 `DOM` 事件。

### 2.2 自定义事件

自定义事件可以实现子组件给父组件传递数据。

在父组件内部给子组件绑定一个自定义事件：

```Html
<Children2 @xxx="handler4" @click="handler5"></Children2>
```

在 `Children2` 子组件内部触发这个自定义事件。

```JavaScript
<template>
    <div>
        <h2>自定义事件:我是子组件2</h2>
        <button @click="handler">向父组件传值,自定义事件xxx</button>
        <br>
        <br>
        <button @click="$emit('click', '321', 'world hello')">向父组件传值,自定义事件click</button>
    </div>
</template>

<script lang="ts" setup>
// 可以使用 defineEmits 返回函数触发自定义事件
// defineEmits 方法不需要引入直接使用

let $emit = defineEmits(['xxx', 'click']) 

let handler = () => {
    $emit('xxx', 123, 'hello world')
}
</script>

<style scoped>

</style>
```

`defineEmits` 是 `Vue3` 提供的方法，不需要引入直接使用。`defineEmits` 方法执行，传递一个数组，数组元素即为将来组件需要触发的自定义事件类型，此方执行会返回一个 `$emit` 方法用于触发自定义事件。

当点击按钮的时候，事件回调内部调用 `$emit` 方法去触发自定义事件，第一个参数为触发事件类型，第二个、第三个、第N个参数即为传递给父组件的数据。

在父组件中接收子组件传递过来的参数：
```JavaScript
let handler4 = (params1, params2) => {
    console.log(params1, params2)
}

let handler5 = (params1, params2) => {
    console.log(params1, params2)
}
```

## 3. 全局事件总线

全局事件总线可以实现任意组件通信，在 `Vue2` 中可以根据 `VM` 与 `VC` 关系推出全局事件总线。

但是在 `Vue3` 中没有 `Vue` 构造函数，也就没有 `Vue.prototype` 以及组合式 `API` 写法没有 `this`，如果想在 `Vue3` 中使用全局事件总线功能，可以使用插件 `mitt` 实现。

`mitt` 官网地址：https://www.npmjs.com/package/mitt

### 3.1 `mitt` 安装

```Bash
pnpm i mitt
```

### 3.2 `mitt` 定义

```JavaScript
// 引入 mitt mitt 是一个方法，方法执行会返回 bus 对象
import mitt from 'mitt';

const $bus = mitt();

export default $bus;
```

### 3.3 `mitt` 使用

`mitt` 实现全局事件总线，实现兄弟组件之间进行通信：

```JavaScript
<template>
  <div class="children2">
    <h2>我是子组件2</h2>
    <button @click="handler">给兄弟组件传递值</button>
  </div>
</template>

<script lang="ts" setup>
import $bus from '../../bus'

const handler = () => {
    $bus.emit('car', {car: '兰博基尼'})
}
</script>

<style scoped>
.children2 {
  width: 300px;
  height: 150px;
  background-color: yellowgreen;
}
</style>
```

```JavaScript
<template>
  <div class="children1">
    <h2>我是子组件1</h2>
  </div>
</template>

<script lang="ts" setup>
import $bus from "../../bus";

// console.log($bus)

// 使用组合式 API 函数
import { onMounted } from "vue";

// 组件挂载完毕的时候，当前组件绑定一个事件，接收将来兄弟组件传递的数据
onMounted(() => {
  // 第一个参数即为事件类型 第二个参数即为事件回调
  $bus.on("car", (params) => {
    console.log("接收兄弟组件传值", params);
  });
});
</script>

<style scoped>
.children1 {
  width: 300px;
  height: 150px;
  background-color: yellow;
}
</style>
```


## 4. v-model

`v-model` 指令可是收集表单数据(数据双向绑定)，除此之外它也可以实现父子组件数据同步。

`v-model` 实际时基于 `props[modelValue]` 与自定义事件 `[update:modelValue]` 实现的。

父组件：

```JavaScript
<template>
  <div class="box">
    <h1>我是父组件:v-model</h1>
    <input v-model="info" type="text" />

    <!-- 使用 props 向子组件传递数据 -->
    <!-- <Children1 :modelValue="info" @update:modelValue="handler"></Children1> -->

    <!-- 使用 v-model 向子组件传递数据 -->
    <!-- 
       在组件上使用 v-model
        第一:相当有给子组件传递 props[modelValue]
        第二:相当于给子组件绑定自定义事件update:modelValue
     -->

    <div class="container">
      <Children1 v-model="info"></Children1>

      <Children2
        v-model:pageNo="pageNo"
        v-model:pageSize="pageSize"
      ></Children2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Children1 from "./Children1.vue";
import Children2 from "./Children2.vue";

let info = ref("");
const handler = (params) => {
  info.value = params;
};

let pageNo = ref(0);
let pageSize = ref(10);
</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
```

子组件 `Children1`：
```JavaScript
<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <h2>父组件info信息:{{ props.modelValue }}</h2>
    <button @click="handler">同步更新父组件info信息</button>
  </div>
</template>

<script lang="ts" setup>
// 使用defineProps 接收父组件传值
let props = defineProps(["modelValue"]);
console.log(props);

let $emits = defineEmits(['update:modelValue'])

const handler = () => {
  $emits('update:modelValue', 'hello world')
}

</script>

<style scoped>
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
</style>
```

子组件 `Children2`：
```JavaScript
<template>
  <div class="children2">
    <h2>我是子组件2</h2>
    <h3>同时绑定多个v-model</h3>
    <button @click="handler">pageNo: {{ pageNo }}</button>
    <br />
    <br />
    <button @click="$emit('update:pageSize', pageSize + 10)">pageSize: {{ pageSize }}</button>
  </div>
</template>

<script lang="ts" setup>

let props = defineProps(['pageNo', 'pageSize'])
let $emit = defineEmits(['update:pageNo', 'update:pageSize'])

const handler = () => {
  $emit('update:pageNo', props.pageNo + 1)
}

</script>

<style scoped>
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
</style>
```

`<Children1 v-model="info"></Children1>` 相当于给组件 `Children1` 传递一个 `props(modelValue)` 与绑定一个自定义事件 `update:modelValue` 实现父子组件数据同步。

在 `Vue3` 中一个组件可以通过使用多个 `v-model`,让父子组件多个数据同步,下方代码相当于给组件 `Children2` 传递两个 `props` 分别是 `pageNo` 与 `pageSize`，以及绑定两个自定义事件 `update:pageNo` 与 `update:pageSize` 实现父子数据同步。

```Html
<Children2 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Children2>
```

## 5. useAttrs

在 `Vue3` 中可以利用 `useAttrs` 方法获取组件的属性与事件(包含:原生 `DOM` 事件或者自定义事件)，该函数功能类似于 `Vue2` 框架中 `attrs` 属性与 `$listeners` 方法。

比如：在父组件内部使用一个子组件 `HintButton`

```JavaScript
<template>
  <div class="box">
    <h1>我是父组件:attrs</h1>
    <el-button type="primary" size="large" :icon="Edit"></el-button>
    <!-- 自定义组件 -->
    <!-- 实现将光标放在按钮上，会有文字提示 -->
    <HintButton type="primary" size="large" :icon="Edit" @click="handler" @xxx="handler" :title="title"></HintButton>
  </div>
</template>

<script lang='ts' setup>
import { Edit } from "@element-plus/icons-vue";
import { ref } from "vue";
import HintButton from "./HintButton.vue";

const handler = () => {
  alert(12306)
}

let title = ref('编辑')

</script>
<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}
</style>
```

子组件内部可以通过 `useAttrs` 方法获取组件属性与事件。它类似于 `props`,可以接受父组件传递过来的属性与属性值。需要注意如果 `defineProps` 接受了某一个属性，`useAttrs` 方法返回的对象身上就没有相应属性与属性值。

```JavaScript
<template>
  <div :title="title">
    <el-button :="$attrs"></el-button>
  </div>
</template>

<script lang='ts' setup>
//引入useAttrs方法:获取组件标签身上属性与事件
import { useAttrs } from "vue";
//此方法执行会返回一个对象
let $attrs = useAttrs();

// 万一用 props 接受 title
let props = defineProps(['title'])
// props 与 useAttrs 方法都可以获取父组件传递过来的属性与属性值
//但是 props 接收了 useAttrs 方法就获取不到了
console.log($attrs)

</script>
<style scoped>
</style>
```

## 6. `ref` 与 `$parent`

`ref` 可以获取元素的 `DOM` 或者获取子组件实例的 `VC`。既然可以在父组件内部通过 `ref` 获取子组件实例 `VC`，那么子组件内部的方法与响应式数据父组件也是可以使用的。

比如:在父组件挂载完毕获取组件实例

父组件内部代码:

```JavaScript
<template>
  <div class="box">
    <h1>我是父组件:ref parent</h1>
    <h2>父组件拥有财产:{{ money }}</h2>
    <button @click="handler">向子组件1拿100元</button>
    <div class="container">
        <Children1 ref="children1"></Children1>
        <Children2 ref="children2"></Children2>
    </div>
  </div>
</template>


<script lang='ts' setup>
//ref:可以获取真实的DOM节点,可以获取到子组件实例VC
//$parent:可以在子组件内部获取到父组件的实例
import Children1 from './Children1.vue'
import Children2 from './Children2.vue'

import {ref} from 'vue'

let money = ref(10000)

// 获取子组件的实例
let children1 = ref()
let children2 = ref()
console.log(children1, children2)

//父组件内部按钮点击回调
const handler = () => {
    money.value += 100
    children1.value.money -= 100
}

defineExpose({
    money
})

</script>

<style scoped>

.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
    display: flex;
    justify-content: space-between;
}
</style>
```

但是需要注意，如果想让父组件获取子组件的数据或者方法需要通过 `defineExpose` 对外暴露，因为 `Vue3` 中组件内部的数据对外“关闭的”，外部不能访问。

```JavaScript
<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <h3>子组件1拥有财产:{{ money }}</h3>
  </div>
</template>


<script lang='ts' setup>
import { ref } from "vue";

let money = ref(9999);

defineExpose({
    money
})
</script>

<style scoped>
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
</style>
```

`$parent` 可以获取某一个组件的父组件实例 `VC`，因此可以使用父组件内部的数据与方法。必须子组件内部拥有一个按钮点击时候获取父组件实例，当然父组件的数据与方法需要通过 `defineExpose` 方法对外暴露。

```JavaScript
<template>
  <div class="children2">
    <h2>我是子组件2</h2>
    <h3>子组件2拥有财产:{{ money }}</h3>
    <button @click="handler($parent)">向父组件拿300元</button>
  </div>
</template>

<script lang='ts' setup>
import {ref} from 'vue'

let money = ref(1000)

const handler = ($parent) => {
  money.value += 300
  console.log($parent)
  $parent.money -= 300
}
</script>

<style scoped>
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
</style>
```

## 7. `provide` 与 `inject`

`Vue3` 提供两个方法 `provide`[提供] 与 `inject`[注入]，可以实现隔辈组件传递参数。

`provide` 方法用于提供数据，此方法执需要传递两个参数,分别提供数据的 `key` 与提供数据 `value`.

```JavaScript
<template>
  <div class="box">
    <h1>我是父组件:provdide-inject</h1>
    <h1>父组件拥有汽车:{{ car }}</h1>
    <Children></Children>
  </div>
</template>


<script lang='ts' setup>
import Children from "./Children.vue";

//vue3 提供 provide(提供)与 inject(注入),可以实现隔辈组件传递数据
import { provide, ref } from "vue";
let car = ref("保时捷911");

//祖先组件给后代组件提供数据
//两个参数:第一个参数就是提供的数据key
//第二个参数:祖先组件提供数据
provide("CAR", car);


</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}
</style>
```

```JavaScript
<template>
  <div class="children">
    <h2>我是子组件</h2>
    <Grandson></Grandson>
  </div>
</template>


<script lang='ts' setup>
import Grandson from './Grandson.vue';

</script>

<style scoped>
.children {
  width: 500px;
  height: 250px;
  background: pink;
}
</style>
```


后代组件可以通过 `inject` 方法获取数据,通过 `key` 获取存储的数值

```JavaScript
<template>
  <div class="grandson">
    <h3>我是孙子组件</h3>
    <p>祖先传下来的汽车:{{ car }}</p>
    <button @click="handler">更换汽车</button>
  </div>
</template>

<script lang='ts' setup>
import { inject } from "vue";

//注入祖先组件提供数据
//需要参数:即为祖先提供数据的 key
let car = inject('CAR')

// 使用 provide-inject 通信可以修改数据
const handler = () => {
  car.value = '自行车'
}

</script>

<style scoped>
.grandson {
  width: 200px;
  height: 200px;
  background: hotpink;
}
</style>
```

## 8. `pinia`

`pinia` 官网：https://pinia.web3doc.top/

`pinia` 也是集中式管理状态容器，类似于 `Vuex`.但是核心概念没有 `mutation`、`modules`.

### 8.1 `pinia` 安装
```Bash
pnpm i pinia
```

### 8.2 `pinia` 注册
创建 `store`：
```JavaScript
import { createPinia } from 'pinia';

let store = createPinia()

export default store;
```

在 `main.ts` 中注册使用：
```JavaScript
import { createApp } from 'vue'

import store from './store'

import App from './App.vue'

const app = createApp(App)

app.use(store)

app.mount('#app')

```


### 8.3 `pinia` 使用

选项式API使用：
```JavaScript
import { defineStore } from 'pinia'

//第一个参数:小仓库名字  第二个参数:小仓库配置对象
//defineStore 方法执行会返回一个函数,函数作用就是让组件可以获取到仓库数据
let useInfoStore = defineStore("info", {
    // 注意写法与 vue2 中 的 vuex 写法不同

    // state 存储数据
    state: () => {
        return {
            count: 999,
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    // 对数据进行操作
    actions: {
        //注意:函数没有context上下文对象
        //没有commit、没有mutations去修改数据
        updateCount(param1: number, param2: number) {
            this.count = param1 + param2
        }
    },
    // 获取数据
    getters: {
        total() {
            let result:number = this.arr.reduce((prev, next) => {
                return prev + next
            }, 0)
            return result
        }
    }
})

export default useInfoStore;
```

在组件中使用：
```JavaScript
<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <h3>count:{{ infoStore.count }}</h3>
    <button @click="handler">修改infoStore中的数据</button>
    <h3>total:{{ infoStore.total }}</h3>
  </div>
</template>


<script lang='ts' setup>
import useInfoStore from "../../store/module/info";

// 获取小仓库对象
let infoStore = useInfoStore()

const handler = () => {
  //仓库调用自身的方法去修改仓库的数据
  infoStore.updateCount(99, 100)
}

</script>

<style scoped>
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
</style>
```

组合式 `API` 使用：
```JavaScript
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

let useTodoStore = defineStore('todo', () => {
    let todoList = ref([
        { id: 1, title: '吃饭', done: true },
        { id: 2, title: '睡觉', done: false },
        { id: 3, title: '打游戏', done: true }
    ])

    let arr = ref([1, 2, 3, 4, 5])

    const total:any = computed(() => {
        return arr.value.reduce((prev, next) => {
            return prev + next
        }, 0)
    })

    const updateTodo = (params: any) => {
        todoList.value.unshift(params)
    }

    // 务必要返回一个对象:属性与方法可以提供给组件使用
    return {
        todoList,
        total,
        updateTodo
    }
})

export default useTodoStore;
```

在组件中使用：
```JavaScript
<template>
  <div class="children2">
    <h2>我是子组件2</h2>
    <ul>
      <li v-for="(item, index) in todoStore.todoList" :key="item.id">{{ item.title }}</li>
    </ul>
    <button @click="handler">修改todo</button>
    <h3>totalCount:{{ todoStore.total }}</h3>
  </div>
</template>

<script lang='ts' setup>
import useTodoStore from '../../store/module/todo'

let todoStore = useTodoStore()

const handler = () => {
  let params = { id: 4, title: '学习', done: true }
  todoStore.updateTodo(params)
}
</script>

<style scoped>
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
</style>
```

## 9. `slot`

插槽：默认插槽、具名插槽、作用域插槽可以实现父子组件通信。

### 9.1 默认插槽

在子组件内部的模板中书写 `slot` 全局组件标签

```JavaScript
<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <!-- 默认插槽-->
    <slot></slot>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped>

</style>
```

在父组件内部提供结构，`Children1` 即为子组件，在父组件内部使用的时候，在双标签内部书写结构传递给子组件。

```JavaScript
<template>
  <div class="box">
    <h1>我是父组件:slot</h1>
    <div class="container">
      <Children1>
        <span>默认插槽</span>
      </Children1>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Children1 from "./Children1.vue";

</script>

<style scoped>

</style>
```

> 注意开发项目的时候默认插槽一般只有一个。

### 9.2 具名插槽

> 顾名思义，此插槽带有名字，在组件内部可以有多个指定名字的插槽。

下面是一个子组件内部，模板中留两个插槽：

```JavaScript
<template>
  <div class="children1">
    <h2>我是子组件1</h2>
    <!-- 默认插槽-->
    <slot></slot>
    <slot name="a"></slot>
    <slot name="b"></slot>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped>
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
</style>
```

父组件内部向指定的具名插槽传递结构，`v-slot` 可以替换为 `#`

```JavaScript
<template>
  <div class="box">
    <h1>我是父组件:slot</h1>
    <div class="container">
      <Children1>
        <span>默认插槽</span>
      </Children1>
      <Children1>
        <template v-slot:a>
          <span>具名插槽a</span>
        </template>
      </Children1>
      <Children1>
        <template #b>
          <span>具名插槽b</span>
        </template>
      </Children1>
    </div>
  </div>
</template>


<script lang='ts' setup>
import Children1 from "./Children1.vue";

</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
```

### 9.3 作用域插槽

> 作用域插槽：子组件数据由父组件提供，但是子组件内部决定不了自身结构与外观(样式)

子组件 `Children2` 代码如下:

```JavaScript
<template>
  <div class="children2">
    <h2>我是子组件2:作用域插槽</h2>
    <ul>
      <li v-for="(item, index) in todos" :key="item.id">
        <!--作用域插槽:可以讲数据回传给父组件-->
        <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script lang='ts' setup>
//通过props接受父组件传递数据
defineProps(["todos"]);
</script>

<style scoped>
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
</style>
```

父组件内部代码如下:

```JavaScript
<template>
  <div class="box">
    <h1>我是父组件:slot</h1>
    <div class="container">
      <Children1>
        <span>默认插槽</span>
      </Children1>
      <Children1>
        <template v-slot:a>
          <span>具名插槽a</span>
        </template>
      </Children1>
      <Children1>
        <template #b>
          <span>具名插槽b</span>
        </template>
      </Children1>
      <Children2 :todos="todos">
        <template v-slot="{ $row, $index }">
          <p :style="{ color: $row.done ? 'green' : 'red' }">
            {{ $row.title }}
          </p>
        </template>
      </Children2>
    </div>
  </div>
</template>


<script lang='ts' setup>
import Children1 from "./Children1.vue";
import Children2 from "./Children2.vue";

//插槽:默认插槽、具名插槽、作用域插槽
//作用域插槽:就是可以传递数据的插槽,子组件可以将数据回传给父组件,父组件可以决定这些回传的数据是以何种结构或者外观在子组件内部去展示！！！

import { ref } from "vue";
//todos数据
let todos = ref([
  { id: 1, title: "吃饭", done: true },
  { id: 2, title: "睡觉", done: false },
  { id: 3, title: "打游戏", done: true },
  { id: 4, title: "学习", done: false },
]);
</script>

<style scoped>
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
  display: flex;
  justify-content: space-between;
}
</style>
```