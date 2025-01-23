---
title: TypeScript 快速上⼿
date: 2025-01-21
category:
  - 前端
tag:
  - TypeScript
---

# TypeScript 快速上⼿

<!-- more -->

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/js/img-20250123150428.png)

## TypeScript 简介

### 简介

1. TypeScript 由微软开发，是基于 JavaScript 的⼀个扩展语⾔。
2. TypeScript 包含了 JavaScript 的所有内容，即： TypeScript 是 JavaScript 的超集。
3. TypeScript 增加了：静态类型检查、接⼝、 泛型等很多现代开发特性，更适合⼤型项⽬的开发。
4. TypeScript 需要编译为 JavaScript ，然后交给浏览器或其他 JavaScript 运⾏环境执⾏。

### 为何需要 TypeScript

- 今⾮昔⽐的 JavaScript

JavaScript 当年诞⽣时的定位是浏览器脚本语⾔，⽤于在⽹⻚中嵌⼊简单的逻辑，且代码量很少。

随着时间的推移，JavaScript 变得越来越流⾏，如今的 JavaScript 已经可以全栈编程了。

现如今的 JavaScript 应⽤场景⽐当年丰富的多，代码量也⽐当年⼤很多，随便⼀个 JavaScript 项⽬的代码量，可以轻松的达到⼏万⾏，甚⾄⼗⼏万⾏！

然⽽ JavaScript 当年“出⽣简陋”，没考虑到如今的应⽤场景和代码量，逐渐就出现了很多困扰。

- JavaScript 中的困扰

1. 不清楚的数据类型
```javascript
let welcome = 'hello'

// 此行报错：Uncaught TypeError: welocom is not a function
welcome()
```

2. 有漏洞的逻辑
```javascript
const str = Date.now() % 2 ? '奇数' : '偶数'

if (str !== '奇数') {
    alert('hello')
} else if (str === '偶数') {
    // 永远不执行
    alert('world')
}
```

3. 访问不存在的属性
```javascript
const obj = { width: 10, height: 15 }
const area = obj.width * obj.heigth
```

4. 低级的拼写错误
```javascript
const msg = 'hello world'
msg.toUperCase()
```

- 静态类型检查

在代码运⾏前进⾏检查，发现代码的错误或不合理之处，减⼩运⾏时出现异常的⼏率，此种检查叫**静态类型检查**，TypeScript 的核⼼就是**静态类型检查**，简⾔之就是把运⾏时的**错误前置**。

同样的功能，TypeScript 的代码量要⼤于 JavaScript，但由于 TypeScript 的代码结构更加清晰，在后期代码的维护中 TypeScript 却胜于 JavaScript.

### 编译 TypeScript

**浏览器不能直接运⾏ TypeScript 代码，需要编译为 JavaScript 再交由浏览器解析器执⾏**。

- 命令⾏编译

要把 `.ts` ⽂件编译为 `.js` ⽂件，需要配置 TypeScript 的编译环境，步骤如下：

1. 第⼀步：创建⼀个 demo.ts ⽂件，例如：
```javascript
const person = {
 name:'李四',
 age:18
}
console.log(`我叫${person.name}，我今年${person.age}岁了`)
```

2. 第⼆步：全局安装 TypeScript
```bash
npm i typescript -g
```

3. 三步：使⽤命令编译 `.ts` ⽂件
```bash
tsc demo.ts
```

- ⾃动化编译

1. 第⼀步：创建 TypeScript 编译控制⽂件
```bash
tsc --init
```

⼯程中会⽣成⼀个 `tsconfig.json` 配置⽂件，其中包含着很多编译时的配置。

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "rewriteRelativeImportExtensions": true,          /* Rewrite '.ts', '.tsx', '.mts', and '.cts' file extensions in relative import paths to their JavaScript equivalent in output files. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
    // "noUncheckedSideEffectImports": true,             /* Check side effect imports. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
    // "isolatedDeclarations": true,                     /* Require sufficient annotation on exports so other tools can trivially generate declaration files. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "strictBuiltinIteratorReturn": true,              /* Built-in iterators are instantiated with a 'TReturn' type of 'undefined' instead of 'any'. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```


观察发现，默认编译的 JavaScript 版本是 ES7, 可以⼿动调整为其他版本。

2. 第⼆步：监视⽬录中的 `.ts` ⽂件变化

```bash
tsc --watch 或 tsc -w
```

3. 第三步：⼩优化，当编译出错时不⽣成 `.js` ⽂件

```bash
tsc --noEmitOnError --watch
```

备注：当然也可以修改 `tsconfig.json` 中的 `noEmitOnError` 配置。

## TypeScript 类型

### 类型声明

使用 `:` 来对**变量**或**参数**形参，进行类型声明：

```typescript
/** 变量 */
// 声明变量 a 只能存储字符串
let a: string

// 声明变量 b 只能存储数字
let b: number

// 声明变量 c 只能存储布尔值
let c: boolean

a = 'hello'
// 警告：不能将类型 “number” 分配给类型 “string”
a = 100

b = 666
// 警告：不能将类型 “string” 分配给类型 “number”
b = 'hello'

c = true
// 警告：不能将类型 “number” 分配给类型 “boolean”
c = 666

/** 函数 */
function demo(x: number, y: number): number {
    return x + y
}

demo(100, 200)
//警告：类型 “string” 的参数不能赋给类型 “number” 的参数
demo(100, '200')
// 警告：应有 2 个参数，但获得 3 个
demo(100, 200, 300)
// 警告：应有 2 个参数，但获得 1 个
demo(100) 
```

在 `:` 后也可以写**字面量类型**，不过实际开发中用的不多。

```typescript
// a 的值只能为字符串 “你好”
let a: '你好'

// b的值只能为数字100
let b: 100

a = '你好'
// 警告：不能将类型 “"欢迎"” 分配给类型 “"你好"”
a = '欢迎'

b = 100
// 警告：不能将类型 “200” 分配给类型 “100”
b = 200
```

### 类型推断

TS 会根据代码，进⾏类型推导，例如下⾯代码中的变量 `d`, 只能存储数字。

```typescript
//TypeScript 会推断出变量 d 的类型是数字
let d = 100

d = 200

// 警告：不能将类型 “string” 分配给类型 “number”
d = 'hello'
```

但要注意，**类型推断不是万能的，⾯对复杂类型时推断容易出问题，所以尽量还是明确的编写类型声明**！

### 类型总览

- JavaScript 中的数据类型
```markdown
1. string
2. number
3. boolean
4. null
5. undefined
6. bigint
7. symbol
8. object
```

备注：其中 object 包含： Array 、 Function 、 Date 、 Error 等......

- TypeScript 中的数据类型
```markdown
1. 上述所有 JavaScript 类型
2. 六个新类型：
    1. any
    2. unknown
    3. never
    4. void
    5. tuple
    6. enum
3. 两个⽤于⾃定义类型的⽅式：
    1. type
    2. interface
```

**注意点**：

在 JavaScript 中的这些内置构造函数：Number、String、Boolean, **⽤于创建对应的包装对象**，在⽇常开发时很少使⽤。

在 TypeScript 中也是同理，所以在 TypeScript 中进⾏类型声明时，**通常都是⽤⼩写**的 number、string、boolean.

例如下⾯代码：
```typescript
let str1: string
str1 = 'hello'
// 报错
str1 = new String('hello')

let str2: String
str2 = 'hello'
str2 = new String('hello')

// string
console.log(typeof str1)
// object
console.log(typeof str2)
```

**原始类型 VS 包装对象**：

- 原始类型：如 number、string、boolean, 在 JavaScript 中是简单数据类型，它们在内存中占⽤空间少，处理速度快。
- 包装对象：如 Number 对象、 String 对象、 Boolean 对象，是复杂类型，在内存中占⽤更多空间，在⽇常开发时很少由开发⼈员⾃⼰创建包装对象。

**⾃动装箱**：

JavaScript 在必要时会⾃动将原始类型包装成对象，以便调⽤⽅法或访问属性。

```javascript
let str = 'hello'

// 当要获取字符串 str 的长度 length 时，JavaScript 引擎做了如下工作：
let size = (function () {
    // 1、自动装箱：创建一个临时的 String 对象包装原始字符串
    let tempStringObj = new String(str)
    // 2、访问 String 对象的 length 属性
    let lengthValue = tempStringObj.length
    //3、销毁临时对象，返回长度值 JavaScript 引擎自动销毁，开发者无感知
    return lengthValue
})()

// 5
console.log(size)
```

## 常用类型与语法

### any

any 的含义是：任意类型，⼀旦将变量类型限制为 any, 那就意味着放弃了对该变量的类型检查。

```typescript
// 显式的 any: 明确的表示 a 的类型是 any
let a: any
a = 100
a = 'hello'
a = true

// 隐式的 any：没有明确的表示 b 的类型是 any，但 TS 主动推断出来 b 是 any
let b
b = 100
b = 'hello'
b = false
```

**注意点：any 类型的变量，可以赋值给任意类型的变量**。

```typescript
// 注意：any 类型的变量，可以赋值给任意类型的变量
let c: any
c = 9

let d: string
// 无异常
d = c
```

### unknown

unknown 的含义是：未知类型，适⽤于**起初不确定数据的具体类型，要后期才能确定**。

1. unknown 可以理解为⼀个类型安全的 any.
```typescript
// 设置 a 的类型为 unknown
let a: unknown
// 以下赋值均符合规范
a = 100
a = 'hello'
a = false

// 设置 b 的类型为 string
let b: string
// 警告：不能将类型 “unknown” 分配给类型 “string”
b = a
```

2. unknown 会强制开发者在使⽤之前进⾏类型检查，从⽽提供更强的类型安全性。

```typescript
// 设置 a 的类型为 unknown
let a: unknown

a = 'hello'

// 设置 b 的类型为 string
let b: string


// 方式一：类型判断
if (typeof a === 'string') {
    b = a
    console.log(b)
}

// 方式二：加断言
b = a as string

// 方式三：加断言
b = <string>a
```

3. 读取 any 类型数据的任何属性都不会报错，⽽ unknown 正好与之相反。
```typescript
let str1: string
str1 = 'hello'
// 无警告
str1.toLocaleUpperCase()

let str2: any
str2 = 'hello'
// 无警告
str2.toLocaleUpperCase()

let str3: unknown
str3 = 'hello'
// 警告：“str3” 的类型为“未知”
str3.toLocaleUpperCase()
// 使⽤断⾔强制指定 str3 的类型为 string —— 无警告
(str3 as string).toLocaleUpperCase()
```

### never

never 的含义是：**任何值都不是，即不能有值**。例如 undefined、null、 ''、 0 都不⾏！

1. **⼏乎不⽤ never 去直接限制变量，因为没有意义**，例如：
```typescript
// 指定 a 的类型为 never, 那就意味着 a 以后不能存任何的数据了
let a: never

// 以下对 a 的所有赋值都会有警告 
a = 100
a = 'hello'
a = false
a = null
```

2. never ⼀般是 TypeScript 主动推断出来的，例如：
```typescript
// 指定 a 的类型为 string
let a: string
// 给 a 设置⼀个值 
a = 'hello'

if (typeof a === 'string') {
    console.log(a.toUpperCase())
} else {
    //  TypeScript 会推断出此处的 a 是 never，因为没有任何⼀个值符合此处的逻辑
    console.log(a)
}
```

3. never 也可⽤于限制函数的返回值
```typescript
// 限制 throwError 函数不需要有任何返回值，任何值都不⾏，像 undeifned、null 都不⾏
function throwError(message: string): never {
    throw Error(`程序异常退出【${message}】`)
}
```

### void 

void 的含义是空，即：**函数不返回任何值，调⽤者也不应依赖其返回值进⾏任何操作**！

1. void 通常⽤于函数返回值声明
```typescript
function logMessage(message: string): void {
    console.log(message)
}

logMessage('hello world')
```

**注意**：编码者没有编写 `return` 指定函数返回值，所以 `logMessage` 函数是没有**显式返回值**的，但会有⼀个**隐式返回值** —— `undefined`, 虽然函数返回类型为 `void`, 但也是可以接受 `undefined` 的。

**简单记：undefined 是 void 可以接受的⼀种“空”**。

2. 以下写法均符合规范
```typescript
// ⽆警告
function logMessage(msg: string): void {
    console.log(msg)
}

// ⽆警告
function logMessage(msg: string): void {
    console.log(msg)
    return;
}

// ⽆警告
function logMessage(msg: string): void {
    console.log(msg)
    return undefined
}
```

3. 那限制函数返回值时，是不是 undefined 和 void 就没区别呢？

有区别，因为还有这句话：**返回值类型为 void 的函数，调⽤者不应依赖其返回值进⾏任何操作**！

对⽐下⾯两段代码：
```typescript
function logMessage(msg: string): void {
    console.log(msg)
}

let result = logMessage('hello')

// 此⾏报错：⽆法测试 "void" 类型的表达式的真实性
if (result) {
    console.log('logMessage 有返回值')
}
```

```typescript
function logMessage(msg: string): undefined {
    console.log(msg)
}

let result = logMessage('hello')

// 无警告
if (result) {
    console.log('logMessage 有返回值')
}
```

**理解 void 与 undefined**: 
- void 是⼀个⼴泛的概念，⽤来表达“空”，⽽ undefined 则是这种“空”的具体实现。 
- 因此可以说 undefined 是 void 能接受的⼀种“空”的状态。 
- 也可以理解为：void 包含 undefined ，但 void 所表达的语义超越了 undefined, void 是⼀种意图上的约定，⽽不仅仅是特定值的限制。

**总结**：
如果⼀个函数返回类型为 void ，那么： 

1. 从语法上讲：函数是可以返回 undefined 的，⾄于显式返回，还是隐式返回，这⽆所谓！ 
2. 从语义上讲：函数调⽤者不应关⼼函数返回的值，也不应依赖返回值进⾏任何操作！ 即使我们知道它返回了 undefined.

### object 

关于 object 与 Object, 直接说结论：**实际开发中⽤的相对较少，因为范围太⼤了**。

#### object（⼩写）

object （⼩写）的含义是：所有**⾮原始类型**，可存储：对象、函数、数组等，由于限制的范围**⽐较宽泛**，在实际开发中使⽤的**相对较少**。

```typescript
// a 的值可以是任何【⾮原始类型】，包括：对象、函数、数组等
let a: object 

// 以下代码，是将【⾮原始类型】赋给 a, 所以均符合要求
a = {}
a = { name: '张三' }
a = [1, 3, 5, 7, 9]
a = function () { } 
a = new String('123')
class Person { }
a = new Person()

// 以下代码，是将【原始类型】赋给 a,有警告 
// 警告：不能将类型 “number” 分配给类型 “object”
a = 1 

// 警告：不能将类型 “boolean” 分配给类型 “object”
a = true 

// 警告：不能将类型 “string” 分配给类型 “object” 
a = '你好' 

// 警告：不能将类型 “null” 分配给类型 “object”
a = null 

// 警告：不能将类型 “undefined” 分配给类型 “object”
a = undefined 
```


#### Object（⼤写）

1. 官⽅描述：所有可以调⽤ Object ⽅法的类型。 
2. 简单记忆：除了 undefined 和 null 的任何值。
3. 由于限制的**范围实在太⼤了**，所以实际开发中**使⽤频率极低**。

```typescript
// b 的值必须是 Object 的实例对象（除去 undefined 和 null 的任何值）
let b: Object

// 以下代码，均⽆警告，因为给 b 赋的值，都是 Object 的实例对象 
b = {}
b = { name: '张三' }
b = [1, 3, 5, 7, 9]
b = function () { }
b = new String('123')
class Person { } b = new Person()
// 1 不是 Object 的实例对象，但其包装对象是 Object 的实例 
b = 1
// true 不是 Object 的实例对象，但其包装对象是 Object 的实例 
b = true
// “你好” 不是 Object的实例对象，但其包装对象是 Object 的实例
b = '你好'

// 以下代码均有警告 
// 警告：不能将类型 “null” 分配给类型 “Object”
b = null
// 警告：不能将类型 “undefined” 分配给类型 “Object”
b = undefined 
```

#### 声明对象类型

1. 实际开发中，限制⼀般对象，通常使⽤以下形式：
```typescript
// 限制 person1 对象必须有 name 属性，age 为可选属性
let person1: { name: string, age?: number }

// 含义同上，也能⽤分号做分隔
let person2: { name: string; age?: number }

// 含义同上，也能⽤换行做分隔
let person3: {
    name: string
    age?: number
}

// 如下赋值均可
person1 = { name: '张三', age: 18 }
person2 = { name: '李四' }
person3 = { name: '王五' }

// 如下赋值不合法 因为 person3 的类型限制中，没有对 gender 属性的说明
person3 = { name: '赵六', age: 20, gender: '男' }
```

2. 索引签名：允许定义对象可以具有**任意数量的属性**，这些属性的**键和类型是可变的**，常⽤于描述类型不确定的属性（具有动态属性的对象）。
```typescript
let person: {
    name: string
    age?: number
    // 索引签名，完全可以不⽤ key 这个单词，换成其他的也可以 
    [key: string]: any
}

// 赋值合法
person = { name: '赵六', age: 20, gender: '男' }
```

#### 声明函数类型

```typescript
let sum: (x: number, y: number) => number

sum = function (a: number, b: number): number {
    return a + b
}
```

**备注**：
- TypeScript 中的 => 在函数类型声明时表示**函数类型**，描述其参数类型和返回类型。 
- JavaScript 中的 => 是⼀种定义函数的语法，是具体的函数实现。 
- 函数类型声明还可以使⽤：接⼝、⾃定义类型等⽅式，下⽂中会详细讲解。

#### 声明数组类型

```typescript
let arr1: string[]
let arr2: Array<string>

arr1 = ['a', 'b', 'c']
arr2 = ['1', '2', '3']
```

**备注**：上述代码中的 `Array<string>` 属于**泛型**，下⽂会详细讲解。

### tuple 

元组 (Tuple) 是⼀种特殊的数组类型，可以存储固定数量的元素，并且每个元素的类型是已知的且可以不同。

元组⽤于精确描述⼀组值的类型，`?` 表示可选元素。

```typescript
// 第⼀个元素必须是 string 类型，第⼆个元素必须是 number 类型
let arr1: [string, number]

// 第⼀个元素必须是 number 类型，第⼆个元素是可选的，如果存在，必须是 boolean 类型
let arr2: [number, boolean?]

// 第⼀个元素必须是 number 类型，后⾯的元素可以是任意数量的 string 类型
let arr3: [number, ...string[]]

// 赋值合法
arr1 = ['hello', 123]
arr2 = [123, false]
arr2 = [123]
arr3 = [123, 'hello', 'world']
arr3 = [123, 'hello']
arr3 = [123]

// 赋值不合法，arr1 声明时是两个元素，赋值的是三个
arr1 = ['a', 1, 2]
```

### enum 

枚举（ enum ）可以定义⼀组**命名常量**，它能增强代码的可读性，也让代码更好维护。

如下代码的功能是：根据调⽤ walk 时传⼊的不同参数，执⾏不同的逻辑，存在的问题是调⽤ walk 时传参时没有任何提示，编码者很容易写错字符串内容；并且⽤于判断逻辑的 up、 down、 left、 right 是**连续且相关的⼀组值**，那此时就特别适合使⽤枚举（ enum ）。

```typescript
function walk(str: string) {
    if (str === 'up') {
        console.log("向【上】⾛");
    } else if (str === 'down') {
        console.log("向【下】⾛");
    } else if (str === 'left') {
        console.log("向【左】⾛");
    } else if (str === 'right') {
        console.log("向【右】⾛");
    } else {
        console.log("未知⽅向");
    }
}

walk('up')
walk('down')
walk('left')
walk('right')
```

1. 数字枚举

数字枚举⼀种最常⻅的枚举类型，其**成员的值会⾃动递增，且数字枚举还具备反向映射**的特点，在下⾯代码的打印中，不难发现：可以通过值来获取对应的枚举成员名称。
```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}

/**{
    "0": "Up",
    "1": "Down",
    "2": "Left",
    "3": "Right",
    "Up": 0,
    "Down": 1,
    "Left": 2,
    "Right": 3
} */
console.log(Direction)

// 反向映射
// 2
console.log(Direction.Left)
// Left
console.log(Direction[2])

// 警告 枚举中的属性是只读的
Direction.Down = '2'
```

也可以指定枚举成员的初始值，其后的成员值会⾃动递增。
```typescript
enum Direction {
    Up = 6,
    Down,
    Left,
    Right
}

// 输出: 6
console.log(Direction.Up)
// 输出: 7
console.log(Direction.Down)
```

使⽤数字枚举完成刚才 walk 函数中的逻辑，此时我们发现：代码更加直观易读，⽽且类 型安全，同时也更易于维护。

```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function walk(n: Direction) {
    if (n === Direction.Up) {
        console.log("向【上】⾛");
    } else if (n === Direction.Down) {
        console.log("向【下】⾛");
    } else if (n === Direction.Left) {
        console.log("向【左】⾛");
    } else if (n === Direction.Right) {
        console.log("向【右】⾛");
    } else {
        console.log("未知⽅向");
    }
}

walk(Direction.Up)
walk(Direction.Down)
```

2. 字符串枚举

枚举成员的值是字符串。
```typescript
enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

let dir: Direction = Direction.Up

// up
console.log(dir)
```

3. 常量枚举

官⽅描述：常量枚举是⼀种特殊枚举类型，它使⽤ const 关键字定义，在编译时会被**内联**，避免⽣成⼀些额外的代码。

何为编译时内联？所谓“内联”其实就是 TypeScript 在编译时，会将枚举成员引⽤替换为它们的实际值，⽽不是⽣成额外的枚举对象。这可以减少⽣成的 JavaScript 代码量，并提⾼运⾏时性能。

使⽤普通枚举的 TypeScript 代码如下：
```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let x = Direction.Up;
```

编译后⽣成的 JavaScript 代码量较⼤：
```javascript
"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let x = Direction.Up;
```

使⽤常量枚举的 TypeScript 代码如下：
```typescript
const enum Direction {
    Up,
    Down,
    Left,
    Right
}
let x = Direction.Up;
```

编译后⽣成的 JavaScript 代码量较⼩：
```javascript
"use strict";
let x = 0 /* Direction.Up */;
```

### type

type 可以为任意类型创建别名，让代码更简洁、可读性更强，同时能更⽅便地进⾏类型复⽤和扩展。

#### 基本⽤法

类型别名使⽤ type 关键字定义， type 后跟类型名称，例如下⾯代码中 num 是类型别名。

```typescript
type num = number

let price: num
price = 100
```

#### 联合类型

联合类型是⼀种⾼级类型，它表示⼀个值可以是⼏种不同类型之⼀。
```typescript
type Status = number | string
type Gender = '男' | '女'

function printStatus(status: Status) {
    console.log(status)
}

function logGender(gender: Gender) {
    console.log(gender)
}

printStatus(404);
printStatus('200');
printStatus('501');

logGender('男')
logGender('女')
```

#### 交叉类型

交叉类型（Intersection Types）允许将多个类型合并为⼀个类型，合并后的类型将拥有所有被合并类型的成员。

**交叉类型通常⽤于对象类型**。

```typescript
// 面积
type Area = {
    // 宽
    width: number
    // 高
    height: number
}

// 地址
type Adddress = {
    // 楼号
    num: number
    // 单元号
    cell: number
    // 房间号
    room: string
}

// 定义类型 House, 且 House 是 Area 和 Address 组成的交叉类型
type House = Area & Adddress

const house: House = {
    width: 100,
    height: 120,
    num: 11,
    cell: 22,
    room: '401'
}
```

### 特殊情况

先来观察如下两段代码：

- 代码段1（正常）
在函数定义时，限制函数返回值为 void ，那么函数的返回值就必须是空。
```typescript
function demo(): void {
    // 返回undefined合法
    return undefined
    // 以下返回均不合法
    return 100
    return false
    return null
    return []
}

demo()
```

- 代码段2（特殊）
使⽤类型声明限制函数返回值为 void 时， TypeScript 并不会严格要求函数返回空。

```typescript
type LogFunc = () => void

const f1: LogFunc = () => {
    // 允许返回非空值
    return 100
}

// 允许返回非空值
const f2: LogFunc = () => 200

const f3: LogFunc = function () {
    // 允许返回非空值
    return 100
}
```

为什么会这样？

是为了确保如下代码成⽴，我们知道 `Array.prototype.push` 的返回值是⼀个数字， ⽽ `Array.prototype.forEach` ⽅法期望其回调的返回类型是 void.

```typescript
const src = [1, 2, 3]
const dst = [0]

src.forEach((el) => dst.push(el))
```

### 类

`Person` 类：

```typescript
class Person {
    // 属性声明
    name: string
    age: number

    // 构造器
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 方法
    speak() {
        console.log(`我叫：${this.name}，今年${this.age}岁`)
    }
}

// 实例
let person1 = new Person('张三', 18)
```

`Student` 类继承 `Person` 类：
```typescript
class Student extends Person {
    grade: string

    // 构造器
    // 若 Student 类不需要额外的属性，Student 的构造器可以省略
    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }

    // 重写从⽗类继承的⽅法
    override speak() {
        console.log(`我是学⽣，我叫：${this.name}，今年${this.age}岁，在读${this.grade} 年级`)
    }

    // ⼦类⾃⼰的⽅法
    study() {
        console.log(`${this.name}正在努⼒学习中......`)
    }
}
```

### 属性修饰符

| 修饰符 | 含义 | 具体规则 |
| -- | -- | -- |
| public | 公开的 | 可以被：类内部、⼦类、类外部访问。 |
| protected | 受保护的 | 可以被：类内部、⼦类访问。 |
| private | 私有的 | 可以被：类内部访问。 |
| readonly | 只读属性 | 属性⽆法修改 |

#### public 修饰符

`Person` 类：
```typescript
class Person {
    // name 写了 public 修饰符，age 没写修饰符，最终都是 public 修饰符
    public name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    speak() {
        // 类的【内部】可以访问 public 修饰的 name 和 age
        console.log(`我叫：${this.name}，今年${this.age}岁`)
    }
}
const p1 = new Person('张三', 18)
// 类的【外部】可以访问public修饰的属性
console.log(p1.name)
```


`Student` 类继承 `Person` 类：
```typescript
class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
    }
    study() {
        // 【⼦类中】可以访问⽗类中 public 修饰的：name 属性、age 属性
        console.log(`${this.age}岁的${this.name}正在努⼒学习`)
    }
}
```

#### 属性的简写形式

- 完整写法
```typescript
class Person {
    public name: string
    public age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
```

- 简写形式
```typescript
class Person {
    // 简写形式要写属性修饰符
    constructor(public name: string, public age: number) {

    }
}
```

#### protected 修饰符

`Person` 类：
```typescript
class Person {
    // name 和 age 是受保护属性，不能在类外部访问，但可以在【类】与【⼦类】中访问
    constructor(
        protected name: string,
        protected age: number
    ) { }
    // getDetails 是受保护⽅法，不能在类外部访问，但可以在【类】与【⼦类】中访问
    protected getDetails(): string {
        // 类中能访问受保护的 name 和 age 属性
        return `我叫：${this.name}，年龄是：${this.age}`
    }
    // introduce 是公开⽅法，类、⼦类、类外部都能使⽤
    introduce() {
        // 类中能访问受保护的getDetails⽅法
        console.log(this.getDetails());
    }
}
const p1 = new Person('杨超越', 18)
// 可以在类外部访问 introduce
p1.introduce()
// 以下代码均报错
// p1.getDetails()
// p1.name
// p1.age
```

`Student` 类继承 `Person` 类：
```typescript
class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
    }
    study() {
        // ⼦类中可以访问 introduce
        this.introduce()
        // ⼦类中可以访问 name
        console.log(`${this.name}正在努⼒学习`)
    }
}
const s1 = new Student('tom', 17)
s1.introduce()
```

#### private 修饰符

`Person` 类：
```typescript
class Person {
    constructor(
        public name: string,
        public age: number,
        // IDCard 属性为私有的(private)属性，只能在【类内部】使⽤
        private IDCard: string
    ) { }
    private getPrivateInfo() {
        // 类内部可以访问私有的(private)属性 —— IDCard
        return `身份证号码为：${this.IDCard}`
    }
    getInfo() {
        // 类内部可以访问受保护的(protected)属性 —— name 和 age
        return `我叫: ${this.name}, 今年刚满${this.age}岁`;
    }
    getFullInfo() {
        // 类内部可以访问公开的 getInfo ⽅法，也可以访问私有的 getPrivateInfo ⽅法
        return this.getInfo() + '，' + this.getPrivateInfo()
    }
}
const p1 = new Person('张三', 18, '110114198702034432')
console.log(p1.getFullInfo())
console.log(p1.getInfo())
// 以下代码均报错
// p1.name
// p1.age
// p1.IDCard
// p1.getPrivateInfo()
```

#### readonly 修饰符

```typescript
class Car {
    constructor(
        // 车牌 只读
        readonly carNo: string,
        // 出产年份 只读
        readonly productionYear: number,
        // 颜色
        public color: string
    ) { }

    // 显示汽车信息
    display() {
        console.log(`识别码：${this.carNo}，出⼚年份：${this.productionYear}，颜⾊：${this.color}`)
    }
}

const car = new Car('赣B:9999', 2002, '黑色')
car.display()
// 以下代码均错误：不能修改 readonly 属性
car.carNo = '琼B:6666'
car.productionYear = 1998
```

## 抽象类

概述：抽象类是⼀种⽆法被实例化的类，专⻔⽤来定义类的结构和⾏为，类中可以写抽象⽅法，也可以写具体实现。

抽象类主要⽤来为其派⽣类提供⼀个基础结构，**要求其派⽣类必须实现其中的抽象⽅法**。

**简记：抽象类不能实例化，其意义是可以被继承，抽象类⾥可以有普通⽅法、也可以有抽象⽅法**。

通过以下场景，理解抽象类：

我们定义⼀个抽象类 Package ，表示所有包裹的基本结构，任何包裹都有重量属性 weight, 包裹都需要计算运费。但不同类型的包裹（如：标准速度、特快专递）都有不同的运费计算⽅式，因此⽤于计算运费的 calculate ⽅法是⼀个抽象⽅法，必须由具体的⼦类来实现。

`Package` 类：
```typescript
abstract class Package {
    constructor(public weight: number) {

    }

    // 抽象⽅法：⽤来计算运费，不同类型包裹有不同的计算⽅式
    abstract calculate(): number

    // 通⽤⽅法：打印包裹详情
    printPackage() {
        console.log(`包裹重量为: ${this.weight}kg，运费为: ${this.calculate()}元`)
    }
}
```

`StandardPackage` 类继承了 `Package`, 实现了 `calculate` ⽅法：
```typescript
// 标准包裹
class StandardPackage extends Package {
    constructor(
        weight: number,
        // 每公斤固定的费用
        public unitPrice: number) {
        super(weight)
    }

    // 实现抽象⽅法：计算运费
    calculate(): number {
        return this.weight * this.unitPrice;
    }
}

const s1 = new StandardPackage(10, 1)
// 包裹重量为: 10kg，运费为: 10元
s1.printPackage()
```

`ExpressPackage` 类继承了 `Package`, 实现了 `calculate` ⽅法：
```typescript
class ExpressPackage extends Package {
    constructor(
        weight: number,
        // 每公⽄的固定费率（快速包裹更⾼）
        private unitPrice: number,
        // 超出10kg以后的附加费
        private additional: number
    ) {
        super(weight)
    }

    // 实现抽象⽅法：计算运费
    calculate(): number {
        if (this.weight > 10) {
            // 超出 10kg 的部分，每公⽄多收 additional 对应的价格
            return 10 * this.unitPrice + (this.weight - 10) * this.additional
        } else {
            return this.weight * this.unitPrice;
        }
    }
}
// 创建特快包裹实例
const e1 = new ExpressPackage(13, 8, 2)
// 包裹重量为: 13kg，运费为: 86元
e1.printPackage()
```

**总结：何时使⽤抽象类**？ 
1. 定义：为⼀组相关的类定义通⽤的⾏为（⽅法或属性）时。 
2. 提供：在抽象类中提供某些⽅法或为其提供基础实现，这样派⽣类就可以继承这 些实现。 
3. 确保：强制派⽣类实现⼀些关键⾏为。 
4. 代码和逻辑：当多个类需要共享部分代码时，抽象类可以避免代码重复。

### interface（接口）

interface 是⼀种定义结构的⽅式，主要作⽤是为：类、对象、函数等规定⼀种契约，这样可以确保代码的⼀致性和类型安全，但要注意 interface **只能定义格式，不能包含任何实现**！

- 定义类结构
```typescript
// PersonInterface 接⼝，⽤与限制 Person 类的格式
interface PersonInterface {
    name: string
    age: number
    speak(n: number): void
}

// 定义⼀个类 Person，实现 PersonInterface 接⼝
class Person implements PersonInterface {
    constructor(
        public name: string,
        public age: number
    ) { }

    speak(n: number): void {
        for (let i = 0; i < n; i++) {
            // 打印出包含名字和年龄的问候语句
            console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
        }
    }
}

const p1 = new Person('张三', 18)
p1.speak(3)
```

- 定义对象结构
```typescript
interface UserInterface {
    name: string
    // 只读属性
    readonly gender: string
    // 可选属性
    age?: number
    run(n: number): void
}

const user: UserInterface = {
    name: '张三',
    gender: '女',
    age: 18,
    run(n) {
        console.log(`奔跑了${n}⽶`)
    }
}
```

- 定义函数结构
```typescript
interface CountInterface {
    (a: number, b: number): number
}

const count: CountInterface = (x: number, y: number): number => {
    return x + y
}
```

- 接口之间的继承
```typescript
interface PersonInterface {
    // 姓名
    name: string
    // 年龄
    age: number
}

interface StudentInterface extends PersonInterface {
    // 年级
    gender: string
}

const student: StudentInterface = { name: '张三', age: 18, gender: '六年级' }
```


- 接⼝⾃动合并（可重复定义）
```typescript
// PersonInterface 接⼝
interface PersonInterface {
    // 属性声明
    name: string
    age: number
}

// 给 PersonInterface 接⼝添加新属性
interface PersonInterface {
    // ⽅法声明
    speak(): void
}

// Person 类实现 PersonInterface
class Person implements PersonInterface {
    name: string
    age: number
    
    // 构造器
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // ⽅法
    speak() {
        console.log('你好！我是⽼师:', this.name)
    }
}
```

**总结：何时使⽤接⼝**？ 
1. 定义对象的格式：描述数据模型、API 响应格式、配置对象...等等，是开发中⽤的最多的场景。 
2. 类的契约：规定⼀个类需要实现哪些属性和⽅法。 
3. 扩展已有接⼝：⼀般⽤于扩展第三⽅库的类型，这种特性在⼤型项⽬中可能会⽤到。

### 相似概念

#### interface 与 type 的区别

- 相同点：interface 和 type 都可以⽤于定义对象结构，在定义对象结构时两者可以互换。
- 不同点： 
    1️. interface: 更专注于定义对象和类的结构，⽀持继承、合并。 
    2️. type: 可以定义类型别名、联合类型、交叉类型，但不⽀持继承和⾃动合并。

interface 和 type 都可以定义对象结构：
```typescript
// 使⽤ interface 定义 Person 对象
interface PersonInterface {
    name: string
    age: number
    speak(): void
}

// 使⽤ type 定义 Person 对象
type PersonType = {
    name: string
    age: number
    speak(): void
}

// 使⽤PersonInterface
/* let person: PersonInterface = {
 name:'张三',
 age:18,
 speak(){
 console.log(`我叫：${this.name}，年龄：${this.age}`)
 }
} */

// 使⽤PersonType
let person: PersonType = {
    name: '张三',
    age: 18,
    speak() {
        console.log(`我叫：${this.name}，年龄：${this.age}`)
    }
}
```

interface 可以继承、合并：
```typescript
interface PersonInterface {
    // 姓名
    name: string
    // 年龄 
    age: number
}

interface PersonInterface {
    speak: () => void
}

interface StudentInterface extends PersonInterface {
    // 年级 
    grade: string
}

const student: StudentInterface = {
    name: '李四',
    age: 18,
    grade: '⾼⼆',
    speak() {
        console.log(this.name, this.age, this.grade)
    }
}
```

type 的交叉类型：
```typescript
// 使⽤ type 定义 Person 类型，并通过交叉类型实现属性的合并
type PersonType = {
    name: string;
    // 姓名
    age: number;
    // 年龄 
} & {
    speak: () => void;
}

// 使⽤ type 定义 Student 类型，并通过交叉类型继承 PersonType
type StudentType = PersonType & {
    // 年级 
    grade: string
}

const student: StudentType = {
    name: '李四',
    age: 18,
    grade: '⾼⼆',
    speak() {
        console.log(this.name, this.age, this.grade);
    }
}
```

#### interface 与抽象类的区别

- 相同点：都能定义⼀个类的格式（定义类应遵循的契约） 
- 不相同： 
    1️. 接⼝：只能描述结构，不能有任何实现代码，⼀个类可以实现多个接⼝。 
    2️. 抽象类：既可以包含抽象⽅法，也可以包含具体⽅法， ⼀个类只能继承⼀个抽象类。

⼀个类可以实现多个接⼝：
```typescript
// FlyInterface 接⼝
interface FlyInterface {
    fly(): void
}

// 定义 SwimInterface 接⼝
interface SwimInterface {
    swim(): void
}

// Duck 类实现了 FlyInterface 和 SwimInterface 两个接⼝
class Duck implements FlyInterface, SwimInterface {
    fly(): void {
        console.log('鸭⼦可以⻜')
    }

    swim(): void {
        console.log('鸭⼦可以游泳')
    }
}

// 创建⼀个 Duck 实例
const duck = new Duck();
// 鸭⼦可以⻜
duck.fly()
// 鸭⼦可以游泳
duck.swim()
```

## 泛型

泛型允许我们在定义函数、类或接⼝时，使⽤类型参数来**表示未指定的类型**，这些参数在具体使⽤时，才被指定具体的类型，泛型能让同⼀段代码适⽤于多种类型，同时仍然保持类型的安全性。

举例：如下代码中 `<T>` 就是泛型，（不⼀定⾮叫 T），设置泛型后即可在函数中使⽤ T 来表示该类型：
```typescript
function logData<T>(data: T): T {
    console.log(data)
    return data
}

logData<number>(100)
logData<string>('hello world')
```

- 多个泛型

```typescript
function logData<T, U>(data1: T, data2: U): T | U {
    console.log(data1, data2)
    return Date.now() % 2 ? data1 : data2
}

logData<number, string>(100, 'hello world')
logData<string, boolean>('hello world', false)
```

- 泛型接口

```typescript
interface PersonInterface<T> {
    name: string
    age: number
    extraInfo: T
}

let p1: PersonInterface<string>
let p2: PersonInterface<number>

p1 = { name: '张三', age: 18, extraInfo: '老实人' }
p2 = { name: '李四', age: 28, extraInfo: 250 }
```

- 泛型约束

```typescript
interface LengthInterface {
    length: number
}

// 约束规则是：传⼊的类型 T 必须具有 length 属性
function logPerson<T extends LengthInterface>(data: T): void {
    console.log(data)
}

logPerson<string>('hello world')
// 报错：因为 number 不具备 length 属性
logPerson<number>(100)
```

- 泛型类

```typescript
class Person<T> {

    constructor(
        public name: string,
        public age: number,
        public extraInfo: T) {

    }

    speak() {
        console.log(`我叫${this.name}今年${this.age}岁了`)
        console.log(this.extraInfo)
    }
}

// 测试代码1
const p1 = new Person<number>("张三", 30, 250);

// 测试代码2
type JobInfo = {
    title: string
    company: string
}

const p2 = new Person<JobInfo>("李四", 30, { title: '研发总监', company: '发发发科技公司' })
```

## 类型声明文件

类型声明⽂件是 TypeScript 中的⼀种特殊⽂件，通常以 `.d.ts` 作为扩展名。它的主要作⽤是为现有的 JavaScript 代码提供类型信息，使得 TypeScript 能够在使⽤这些 JavaScript 库或模块时进⾏类型检查和提示。

`demo.js`:
```javascript
export function add(a, b) {
    return a + b
}

export function mul(a, b) {
    return a * b;
}
```

`demo.d.ts`:
```typescript
declare function add(a: number, b: number): number
declare function mul(a: number, b: number): number

export { add, mul }
```

`demo.ts`:
```typescript
import { add, mul } from './demo.js'

// x 类型为 number
const x = add(2, 3)
// y 类型为 number
const y = mul(4, 5)

console.log(x, y)
```

## 装饰器

### 简介

1. 装饰器本质是一种特殊的**函数**，它可以对：**类、属性、方法、参数**进行扩展，同时能让代码更简洁。
2. 装饰器自 `2015` 年在 `ECMAScript-6` 中被提出到现在，已将近 10 年。
3. 截止目前，装饰器依然是实验性特性，需要开发者手动调整配置，来开启装饰器支持。
4. 装饰器有 5 种：
- 类装饰器
- 属性装饰器
- 方法装饰器
- 访问器装饰器
- 参数装饰器

**备注**：虽然 `TypeScript5.0` 中可以直接使用**类装饰器**，但为了确保其他装饰器可用，现阶段使用时，仍建议使用 `experimentalDecorators` 配置来开启装饰器支持，而且不排除在来的版本中，官方会**进一步调整**装饰器的相关语法！

参考：《TypeScript 5.0发版公告》
```
https://devblogs.microsoft.com/typescript/announcing-typescript-5-0-rc/
```

### 类装饰器

#### 基本语法

类装饰器是一个应用在**类声明**上的**函数**，可以为类添加额外的功能，或添加额外的逻辑。

```typescript
// Demo 函数会在 Person 类定义时执行
// 参数说明：target 参数是被装饰的类，即：Person
function Demo(target: Function) {
    console.log(target)
}

// 使用装饰器
@Demo
class Person { }
```
#### 应用举例

需求：定义一个装饰器，实现 `Person` 实例调用 `toString` 时返回 `JSON.stringify` 的执行结果。

```typescript
// 使用装饰器重写 toString 方法 + 封闭其原型对象
function CustomToString(target: Function) {
    target.prototype.toString = function () {
        // 向被装饰类的原型上添加自定义的 toString 方法
        return JSON.stringify(this)
    }

    // 封闭其原型对象，禁止随意操作其原型对象
    Object.seal(target.prototype)
}

// 使用 CustomToString 装饰器
@CustomToString
class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    speak() {
        console.log('hello world...')
    }
}

let p1 = new Person('张三', 18)
// {"name":"张三","age":18}
console.log(p1.toString())

interface Person {
    a: any
}

// 此行会报错：Cannot add property a, object is not extensible
Person.prototype.a = 100
console.log(p1.a)
```

#### 关于返回值

- **类装饰器有返回值**：若类装饰器返回一个新的类，那这个新类将**替换**掉被装饰的类。
- **类装饰器无返回值**：若类装饰器无返回值或返回`undefined`，那被装饰的类**不会**被替换。

```typescript
function Demo(target: Function) {
    // 装饰器有返回值时，该返回值会替换掉被装饰的类
    return class {
        test() {
            console.log(100)
            console.log(200)
            console.log(300)
        }
    }
}

@Demo
class Person { }

/**
 * class {
        test() {
            console.log(100);
            console.log(200);
            console.log(300);
        }
    }
 */
console.log(Person)
```

#### 关于构造类型

在 TypeScript 中，`Function` 类型所表示的范围十分广泛，包括：普通函数、箭头函数、方法等等。但并非`Function` 类型的函数都可以被 `new` 关键字实例化，例如箭头函数是不能被实例化的，那么 TypeScript 中该如何声明一个构造类型呢？有以下两种方式：

```typescript
// 定义 Constructor 类型，代表是构造类型
/**
    new     表示：该类型是可以用 new 操作符调用。
    ...args 表示：构造器可以接受【任意数量】的参数。
    any[]   表示：构造器可以接受【任意类型】的参数。
    {}      表示：返回类型是对象(非 null、非 undefined 的对象)
 */
type Constructor = new (...args: any[]) => {}

function test(fn: Constructor) {
    console.log(fn)
}

class Person { }

/**
 * class Person {
   }
 */
test(Person)
```
```typescript
// 定义一个构造类型，且包含一个静态属性 wife
type Constructor = {
    // 构造签名
    new(...args: any[]): {}
    // wife属性
    wife: string
};

function test(fn: Constructor) {
    console.log(fn)
}

class Person {
    static wife = 'asd'
}

/**
 * class Person {
   }
 */
test(Person)
```
#### 替换被装饰的类

对于高级一些的装饰器，不仅仅是覆盖一个原型上的方法，还要有更多功能，例如添加新的方法和状态。

需求：设计一个 `LogTime` 装饰器，可以给实例添加一个属性，用于记录实例对象的创建时间，再添加一个方法用于读取创建时间。

```typescript
// Person 接口
interface Person {
    getTime(): Date
}

// 自定义类型Class
type Constructor = new (...args: any[]) => {}

// 创建一个装饰器，为类添加日志功能和创建时间
function LogTime<T extends Constructor>(target: T) {
    return class extends target {
        createdTime: Date
        constructor(...args: any[]) {
            super(...args)
            // 记录对象创建的时间
            this.createdTime = new Date()
        }

        getTime() {
            return `该对象创建时间为：${this.createdTime}`
        }
    }
}

@LogTime
class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    speak() {
        console.log('hello world...')
    }
}

const p1 = new Person('张三', 18)
p1.speak()
// 该对象创建时间为：Wed Jan 15 2025 10:10:58 GMT+0800 (中国标准时间)
console.log(p1.getTime())
```

### 装饰器工厂

装饰器工厂是一个返回装饰器函数的函数，可以为装饰器添加参数，可以更灵活地控制装饰器的行为。  

需求：定义一个 `LogInfo` 类装饰器工厂，实现 `Person` 实例可以调用到 `introduce` 方法，且 `introduce` 中输出内容的次数，由 `LogInfo` 接收的参数决定。

```typescript
interface Person {
    introduce(): void
}

function LogInfo(n: number) {
    return function (target: Function) {
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`我的名字：${this.name}，我的年龄：${this.age}`)
            }
        }
    }
}

@LogInfo(5)
class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    speak() {
        console.log('hello world...')
    }
}

const p1 = new Person('张三', 18)
p1.speak()
p1.introduce()
```

### 装饰器组合

装饰器可以组合使用，执行顺序为：先**由上到下**的执行所有的装饰器工厂，依次获取到装饰器，然后再**由下到上**执行所有的装饰器。

```typescript
//装饰器
function test1(target: Function) {
    console.log('test1')
}

//装饰器工厂
function test2() {
    console.log('test2工厂')
    return function (target: Function) {
        console.log('test2')
    }
}

//装饰器工厂
function test3() {
    console.log('test3工厂')
    return function (target: Function) {
        console.log('test3')
    }
}

//装饰器
function test4(target: Function) {
    console.log('test4')
}

/*
  控制台打印：
    test2工厂
    test3工厂
    test4
    test3
    test2
    test1
*/
@test1
@test2()
@test3()
@test4
class Person { }
```

```typescript
interface Person {
    getTime(): Date
    introduce(): void
}

type Constructor = new (...args: any[]) => {}

function LogInfo(n: number) {
    return function (target: Function) {
        target.prototype.introduce = function () {

            for (let i = 0; i < n; i++) {
                console.log(`我的名字：${this.name}，我的年龄：${this.age}`)
            }
        }
    }
}

function LogTime<T extends Constructor>(target: T) {
    return class extends target {
        createdTime: Date
        constructor(...args: any[]) {
            super(...args)
            this.createdTime = new Date()
        }

        getTime() {
            return `该对象创建时间为：${this.createdTime}`
        }
    }
}

function CustomToString(target: Function) {
    target.prototype.toString = function () {
        return JSON.stringify(this)
    }

    Object.seal(target.prototype)
}

@LogInfo(3)
@LogTime
@CustomToString
class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    speak() {
        console.log('hello world...')
    }
}

const p1 = new Person('张三', 18)
p1.speak()
console.log(p1.toString())
console.log(p1.getTime())
p1.introduce()
```

### 属性装饰器

#### 基本语法

```typescript
// target: 对于静态属性来说值是类，对于实例属性来说值是类的原型对象
// propertyKey: 属性名
function Demo(target: object, propertyKey: string) {
    console.log(target, propertyKey)
}

class Person {
    @Demo name: string
    @Demo age: number
    @Demo static school: string

    constructor(
        name: string,
        age: number
    ) {
        this.name = name
        this.age = age
    }
}

// {} 'name'
// {} 'age'
/**
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
} 'school'
*/
const p1 = new Person('张三', 18)
```

#### 关于属性遮蔽

如下代码中：当构造器中的 `this.age = age` 试图在实例上赋值时，实际上是调用了原型上 `age` 属性的 `set` 方法。

```typescript
class Person {
    name: string
    age: number
    static school: string

    constructor(
        name: string,
        age: number
    ) {
        this.name = name
        this.age = age
    }
}

let value = 99
// 使用 defineProperty 给 Person 原型添加 age 属性，并配置对应的 get 与 set
Object.defineProperty(Person.prototype, 'age', {
    get() {
        return value
    },

    set(newValue) {
        value = newValue
    }
})

const p1 = new Person('张三', 18)
// 18
console.log(p1.age)
// 18
console.log(Person.prototype.age)
```

#### 应用举例

需求：定义一个 `State` 属性装饰器，来监视属性的修改。

```typescript
// 声明一个装饰器函数 State 用于捕获数据的修改
function State(target: object, propertyKey: string) {
    // 存储属性的内部值
    let key = `__${propertyKey}`

    // 使用 Object.defineProperty 替换类的原始属性
    // 重新定义属性，使其使用自定义的 getter 和 setter
    Object.defineProperty(target, propertyKey, {
        get() {
            return this[key]
        },
        set(newValue) {
            console.log(`${propertyKey} 的最新值为：${newValue}`)
            this[key] = newValue
        },
        enumerable: true,
        configurable: true
    })
}

class Person {
    name: string
    @State age: number

    constructor(
        name: string,
        age: number
    ) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log('hello world...')
    }
}

// age 的最新值为：18
const p1 = new Person('张三', 18)
// age 的最新值为：30
const p2 = new Person('李四', 30)

// age 的最新值为：80
p1.age = 80
// age 的最新值为：90
p2.age = 90

console.log('------------------')
//80
console.log(p1.age) 
//90
console.log(p2.age) 
```

### 方法装饰器

#### 基本语法

```typescript
/**
 * 参数说明
 * @param target 对于静态方法来说值是类，对于实例方法来说值是原型对象
 * @param propertyKey 方法的名称
 * @param descriptor 方法的描述对象，其中value属性是被装饰的方法
 */
function Demo(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
}

class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    // Demo 装饰实例方法
    @Demo speak() {
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`)
    }
    // Demo 装饰静态方法
    @Demo static isAdult(age: number) {
        return age >= 18;
    }
}

// {speak: ƒ}constructor: class Personspeak: ƒ speak()[[Prototype]]: Object
// speak
// {writable: true, enumerable: false, configurable: true, value: ƒ}
/**
 class Person {
     constructor(name, age) {
         this.name = name;
         this.age = age;
     }
     // Demo 装饰实例方法
     speak() {
         console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`);
     }
 */
// isAdult
// {writable: true, enumerable: false, configurable: true, value: ƒ}
const p1 = new Person('张三',18)

// 你好，我的名字：张三，我的年龄：18
p1.speak()
```
#### 应用举例

需求：

1. 定义一个 `Logger` 方法装饰器，用于在方法执行前和执行后，均追加一些额外逻辑。
2. 定义一个 `Validate` 方法装饰器，用于验证数据。

```typescript
function Logger(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原始方法
    const original = descriptor.value
    // 替换原始方法
    descriptor.value = function (...args: any[]) {
        console.log(`${propertyKey}开始执行......`)
        const result = original.call(this, ...args)
        console.log(`${propertyKey}结束执行......`)
        return result
    }
}

function Validate(maxValue: number) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        // 保存原始方法
        const original = descriptor.value
        // 替换原始方法
        descriptor.value = function (...args: any[]) {
            // 自定义的验证逻辑
            if (args[0] > maxValue) {
                throw new Error('年龄非法')
            }

            // 如果所有参数都符合要求，则调用原始方法
            return original.apply(this, args)
        }
    }
}

class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    @Logger speak() {
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`)
    }

    @Validate(120)
    static isAdult(age: number) {
        return age >= 18
    }
}

const p1 = new Person('张三', 18)
// speak开始执行......
// 你好，我的名字：张三，我的年龄：18
// speak结束执行......
p1.speak()

// Uncaught Error: 年龄非法
Person.isAdult(130)
```

### 访问器装饰器

#### 基本语法

```typescript
/**
 * 
 * @param target 1.对于实例访问器来说值是【所属类的原型对象】 2. 对于静态访问器来说值是【所属类】
 * @param propertyKey 访问器的名称
 * @param descriptor 描述对象
 */
function Demo(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
}

class Person {
    @Demo getAddress() {
        return '南京路111号'
    }

    @Demo static getCountry() {
        return '中国'
    }
}
```

#### 应用举例

需求：对 `Weather` 类的 `temp` 属性的 `set` 访问器进行限制，设置的最低温度 `-50`，最高温度 `50`.

```typescript
function RangeValidate(minValue: number, maxValue: number) {

    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        // 保存原始的 setter 方法，以便在后续调用中使用
        const originalSet = descriptor.set

        descriptor.set = function (value: number) {
            // 检查设置的值是否在范围之内
            if (value < minValue || value > maxValue) {
                throw new Error(`${propertyKey}的值应该在 ${minValue} 到 ${maxValue}之间！`);
            }

            // 如果值在范围内，且原始 setter 方法存在，则调用原始 setter 方法
            if (originalSet) {
                originalSet.call(this, value)
            }
        }

    }
}

class Weather {
    private _temp: number
    constructor(_temp: number) {
        this._temp = _temp
    }

    // 设置温度范围在 -50 到 50 之间
    @RangeValidate(-50, 50)
    set temp(value) {
        this._temp = value;
    }
    get temp() {
        return this._temp;
    }
}

const w1 = new Weather(25)
console.log(w1.temp)
// Uncaught Error: temp的值应该在 -50 到 50之间！
w1.temp = 200
```

### 参数装饰器

#### 基本语法

```typescript
/**
 * 
 * @param target 1.如果修饰的是【实例方法】的参数，target 是类的【原型对象】 2.如果修饰的是【静态方法】的参数，target 是【类】
 * @param propertyKey 参数所在的方法的名称
 * @param parameterIndex 参数在函数参数列表中的索引，从 0 开始
 */
function Demo(target: object, propertyKey: string, parameterIndex: number) {
    /**
     * {}
     */
    console.log(target)
    // speak
    console.log(propertyKey)
    // 0
    console.log(parameterIndex)
}

class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    speak(@Demo message1: any, mesage2: any) {
        console.log(`${this.name} 想对说：${message1}，${mesage2}`);
    }
}
```

#### 应用举例

需求：定义方法装饰器 `Validate`, 同时搭配参数装饰器 `NotNumber`, 来对 `speak` 方法的参数类型进行限制。

```typescript
function NotNumber(target: any, propertyKey: string, parameterIndex: number) {
    // 初始化或获取当前方法的参数索引列表
    let notNumberArr: number[] = target[`__notNumber_${propertyKey}`] || []

    // 将当前参数索引添加到列表中
    notNumberArr.push(parameterIndex)

    // 将列表存储回目标对象
    target[`__notNumber_${propertyKey}`] = notNumberArr

}

// 方法装饰器定义
function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const method = descriptor.value

    descriptor.value = function (...args: any[]) {
        // 获取被标记为不能为空的参数索引列表
        const notNumberArr: number[] = target[`__notNumber_${propertyKey}`] || []

        // 检查参数是否为 null 或 undefined
        for (const index of notNumberArr) {
            if (typeof args[index] === 'number') {
                throw new Error(`方法 ${propertyKey} 中索引为 ${index} 的参数不能是数字！`)
            }
        }
        // 调用原始方法
        return method.apply(this, args)
    }

    return descriptor
}

class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    @Validate
    speak(@NotNumber message1: any, mesage2: any) {
        console.log(`${this.name} 想对说：${message1}，${mesage2}`);
    }
}

const p1 = new Person("张三", 18)
// Uncaught Error: 方法 speak 中索引为 0 的参数不能是数字！
p1.speak(100, 200)
```
