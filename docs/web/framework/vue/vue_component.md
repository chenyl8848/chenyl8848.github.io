---
title: Vue 组件化编程
date: 2022-10-21
category:
  - 前端
tag:
  - Vue.js
---

# 1. Vue 组件化编程

<!-- more -->

## 1.1 模块与组件、模块化与组件化

### 1.1.1 模块

1. 理解：向外提供特定功能的 `js` 程序，一般就是一个 `js` 文件
2. 为什么：`js` 文件很多很复杂
3. 作用：复用 `js`，简化 `js` 的编写，提高 `js` 运行效率

### 1.1.2 组件

1. 理解：用来实现局部(特定)功能效果的代码集合( `html/css/js/image`.....)
2. 为什么：一个界面的功能很复杂
3. 作用：复用编码，简化项目编码，提高运行效率

### 1.1.3 模块化

当应用中的 `js` 都以模块来编写的，那这个应用就是一个模块化的应用。

### 1.1.4 组件化

当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用。

## 1.2 非单文件组件

### 1.2.1 说明

1. 模板编写没有提示
2. 没有构建过程，无法将 `ES6` 转换成 `ES5`
3. 不支持组件的 `CSS`
4. 真正开发中几乎不用

### 1.2.2 基本使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>基本使用</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        Vue中使用组件的三大步骤：
            一、定义组件(创建组件)
            二、注册组件
            三、使用组件(写组件标签)

			一、如何定义一个组件？
                使用 Vue.extend(options) 创建，其中 options 和 new Vue(options) 时传入的那个 options 几乎一样，但也有点区别；
                    区别如下：
                        1.el 不要写，为什么？ ——— 最终所有的组件都要经过一个 vm 的管理，由 vm 中的 el 决定服务哪个容器。
                        2.data 必须写成函数，为什么？ ———— 避免组件被复用时，数据存在引用关系。
                    备注：使用 template 可以配置组件结构。

			二、如何注册组件？
                1.局部注册：靠 new Vue 的时候传入 components 选项
                2.全局注册：靠 Vue.component('组件名',组件)

			三、编写组件标签：
                <school></school>
    -->
    <div id="root">
        <!-- <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{schoolAddress}}</h2>
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生年龄：{{studentAge}}</h2> -->

        <!-- 第三步：使用组件 -->
        <xuexiao></xuexiao>
        <hr></hr>
        <student></student>
    </div>

    <div id="root2">
        <xuexiao></xuexiao>
        <hr></hr>
        <student></student>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        // 第一步：创建组件
        const school = Vue.extend({
            template: `
                <div>
                    <h2>学校名称：{{schoolName}}</h2>
                    <h2>学校地址：{{schoolAddress}}</h2>
                </div>`,
            data() {
                return {
                    schoolName: "厦门大学",
                    schoolAddress: "厦门",
                }
            }
        })

        // 第一步：创建组件
        const student = Vue.extend({
            template: `
                <div>
                    <h2>学生姓名：{{studentName}}</h2>
                    <h2>学生年龄：{{studentAge}}</h2>
                </div>`,
            // 组件定义时，一定不要写 el 配置项，因为最终所有的组件都要被一个 vm 管理，由 vm 决定服务于哪个容器
            // el: "#rtoot",
            data() {
                return {
                    studentName: "李四",
                    studentAge: 22,
                }
            }
        })

        // 全局注册组件
        Vue.component("xuexiao", school)
        Vue.component("student", student)

        new Vue({
            el: "#root",
            data: {
                schoolName: "北京大学",
                schoolAddress: "北京",
                studentName: "张三",
                studentAge: 18,
            },
            
            // 第二步：注册组件
            components: {
                xuexiao: school,
                student
            }
        })

        new Vue({
            el: "#root2",
            data: {

            }
        })
    </script>
</body>
</html>
```

### 1.2.3 注意事项


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>几个注意点</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        几个注意点：
            1.关于组件名:
                一个单词组成：
                    第一种写法(首字母小写)：school
                    第二种写法(首字母大写)：School
                多个单词组成：
                    第一种写法( kebab-case 命名)：my-school
                    第二种写法(CamelCase 命名)：MySchool (需要 Vue 脚手架支持)
                备注：
                    (1).组件名尽可能回避 HTML 中已有的元素名称，例如：h2、H2 都不行。
                    (2).可以使用 name 配置项指定组件在开发者工具中呈现的名字。

            2.关于组件标签:
                第一种写法：<school></school>
                第二种写法：<school/>
                    备注：不用使用脚手架时，<school/> 会导致后续组件不能渲染。

            3.一个简写方式：
                const school = Vue.extend(options) 可简写为：const school = options
    -->
    <div id="root">
        <h2>{{ message }}</h2>
        <!-- 写法一：首字母小写 -->
        <school></school>

        <!-- 写法二：首字母大写 -->
        <School></School>

        <!-- 写法三 -->
        <!-- 不用脚手架时，当使用多个组件，会导致后续组件不能渲染 -->
        <school />
        <school />
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        // 定义组件
        // const school = Vue.extend({
        //     name: "MySchool",
        //     template: `
        //         <div>
        //             <h2>学校名称：{{ name }}</h2>
        //             <h2>学校地址：{{ address }}</h2>
        //         </div>
        //     `,
        //     data() {
        //         return {
        //             name: "北京大学",
        //             address: "北京"
        //         }
        //     }
        // })
        // 定义组件
        const school = {
            name: "MySchool",
            template: `
                <div>
                    <h2>学校名称：{{ name }}</h2>
                    <h2>学校地址：{{ address }}</h2>
                </div>
            `,
            data() {
                return {
                    name: "北京大学",
                    address: "北京"
                }
            }
        }

        new Vue({
            el: "#root",
            data: {
                message: "欢迎学习 Vue!"
            },
            // 注册组件
            components: {
                school
            }
        })
    </script>
</body>
</html>
```

### 1.2.4 组件的嵌套

![components.png](https://v2.cn.vuejs.org/images/components.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>组件的嵌套</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <div id="root">
        <!-- <h2>{{ message }}</h2>
        
        <hello></hello>

        <school></school> -->

    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false


        // 定义学生组件
        const student = Vue.extend({
            template: `
                <div>
                    <h2>学生名称：{{ name }}</h2>
                    <h2>学生年龄：{{ age }}</h2>
                </div>
            `,
            data() {
                return {
                    name: "北京大学",
                    age: 20
                }
            }
        })

        // 定义组件
        const school = Vue.extend({
            name: "MySchool",
            template: `
                <div>
                    <h2>学校名称：{{ name }}</h2>
                    <h2>学校地址：{{ address }}</h2>
                    <student></student>
                </div>
            `,
            data() {
                return {
                    name: "北京大学",
                    address: "北京"
                }
            },
            components: {
                student
            }
        })

        // 定义 hello 组件
        const hello = Vue.extend({
            template: `
                <div>
                    <h2> Hello World </h2>
                </div>
            `,
        })

        const app = ({
            template: `
                <div>
                    <h2>{{ message }}</h2>
                    
                    <school></school>

                    <hello></hello>
                </div>
            `,
            data() {
                return {
                    message: "欢迎学习 Vue!"
                }
            },
            // 注册组件
            components: {
                school, hello   
            }
        })

        new Vue({
            el: "#root",
            template: `
                <app></app>
            `,
            // data: {
            //     message: "欢迎学习 Vue!"
            // },
            // 注册组件
            components: {
                app
            }
        })
    </script>
</body>
</html>
```

### 1.2.5 VueComponent

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VueComponent</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        关于VueComponent：
            1.school 组件本质是一个名为 VueComponent 的构造函数，且不是程序员定义的，是 Vue.extend 生成的。

            2.我们只需要写 <school/> 或 <school></school>，Vue 解析时会帮我们创建 school 组件的实例对象，即 Vue 帮我们执行的：new VueComponent(options)。

            3.特别注意：每次调用 Vue.extend，返回的都是一个全新的 VueComponent

            4.关于this指向：
                (1).组件配置中：
                    data 函数、methods 中的函数、watch 中的函数、computed 中的函数 它们的 this 均是【 VueComponent 实例对象】。
                (2).new Vue(options)配置中：
                    data 函数、methods 中的函数、watch 中的函数、computed 中的函数 它们的 this 均是【 Vue 实例对象】。

            5.VueComponent 的实例对象，以后简称 vc（也可称之为：组件实例对象）。
                Vue的实例对象，以后简称vm。
    -->
    <div id="root">
        <school></school>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        //定义school组件
		const school = Vue.extend({
			name: "school",
			template:`
				<div>
					<h2>学校名称：{{ name }}</h2>	
					<h2>学校地址：{{ address }}</h2>	
					<button @click="showName">点我提示学校名</button>
				</div>
			`,
			data(){
				return {
					name: "北京大学",
					address: '北京'
				}
			},
			methods: {
				showName(){
                    // 组件中的 this 是 VueComponent 实例
					console.log('showName', this)
				}
			},
		})

        const test = Vue.extend({
			template: `<span>atguigu</span>`
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`
				<div>
					<h2>{{ msg }}</h2>
					<test></test>	
				</div>
			`,
			data(){
				return {
					msg: '你好啊！'
				}
			},
			components:{ test }
		})


		console.log('@', school)
		console.log('#', hello)
        
        // false 说明两个是不同的 VueComponent 实例
        console.log(school === hello);

        const vm = new Vue({
            el: "#root",
            data: {
                
            },
            components: {
                school, hello
            }
        })
    </script>
</body>
</html>
```

### 1.2.6 内置关系

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>一个重要的内置关系</title>
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 
        1.一个重要的内置关系：VueComponent.prototype.__proto__ === Vue.prototype
        2.为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue 原型上的属性、方法。
    -->
    <div id="root">
        <school></school>

        <hello></hello>
    </div>

    <script>
        // 阻止 vue 在启动时生成生产提示
        Vue.config.productionTip = false

        // 定义 school 组件
        const school = Vue.extend({
            template: `
                <div>
                    <h2>学校名称：{{ name }}</h2>
                    <h2>学校地址：{{ address }}</h2>
                </div>
            `,
            data() {
                return {
                    name: "北京大学",
                    address: "北京"
                }
            }
        })

        const hello = Vue.extend({
            template: `
                <div>
                    <h2>Hello World</h2>
                </div>
            `,
            data() {
                return {
                }
            }
        })

        console.log(school.prototype.__proto__ === Vue.prototype);

        new Vue({
            el: "#root",
            data: {
                
            },
            components: {
                school, hello
            }
        })

        // 定义一个构造函数
        function Demo() {
            this.a = 1
            this.b = 2
        }

        const d = new Demo()

        // 显示原型属性
        console.log(Demo.prototype);
        
        // 隐式原型属性高 
        console.log(d.__proto__);

        console.log(Demo.prototype === d.__proto__);

        Demo.prototype.x = 99

        console.log(d.__proto__.x);


</script>
</body>
</html>
```

## 1.3 单文件组件

### 1.3.1 一个 `.vue` 文件的组成( 3 个部分)

1. 模板页面

   ```vue
   <template>
   页面模板
   </template>
   ```

2. `JS` 模块对象

   ```javascript
   <script>
       export default{
       data(){
           return{}
       },
       methods:{},
       computed:{},
       components:{}
       }
   </script>
   ```

3. 样式

   ```css
   <style>
   	样式定义
   </style>
   ```

4. 示例代码

   ```vue
   <template>
       <div>
           <h2>学生姓名：{{ name }}}</h2>
           <h2>学生年龄：{{ age }}}</h2>
       </div>
   </template>
   
   <script>
   export default {
       name: "Student",
       data() {
           return {
               name: "张三",
               age: 18
           }
       }
   }
   </script>
   
   <style>
   
   </style>
   ```

### 1.3.2 基本使用

1. 引入组件

   ```javascript
   <script>
   import School from "./School.vue";
   import Student from "./Student.vue";
   
   export default {
     name: "App",
     components: {
       School,
       Student,
     },
   };
   </script>
   ```

2. 使用组件标签

   ```vue
   <template>
     <div>
       <School></School>
       <Student></Student>
     </div>
   </template>
   ```