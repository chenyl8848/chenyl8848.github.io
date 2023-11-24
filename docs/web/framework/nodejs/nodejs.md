---
title: Node.js 教程
date: 2023-05-31
category:
  - 前端
tag:
  - Node.js
  - MongoDB
---

# `Node.js` 教程

<!-- more -->

## 0. 基础概念

> `Node.js` 是一个基于 `Chrome V8` 引擎的 `JavaScript` 运行环境，使用了一个事件驱动、非阻塞式 `I/O` 模型，让 `JavaScript` 运行在服务端的开发平台。

官方地址：https://nodejs.org/en

中文地址：https://nodejs.org/zh-cn

代码初体验：

```JavaScript
console.log("hello NodeJS")

// 1.进入到对应 js 文件的目录下
// 2.执行 node 1-hello.js
// 3.输出：hello NodeJS
```

示例代码地址：https://github.com/chenyl8848/node.js-study

## 1. `Buffer`

### 1.1 概念

> `Buffer` 是一个类似于数组的**对象**，用于表示固定长度的字节序列。`Buffer` 本质是一段内存空间，专门用来处理二进制数据。

### 1.2 特点

- `Buffer` 大小固定且无法调整
- `Buffer` 性能较好，可以直接对计算机内存进行操作
- 每个元素的大小为 1 字节（byte）

### 1.3 使用

#### 1.3.1 `Buffer` 的创建

`Node.js` 中创建 `Buffer` 的方式主要如下几种：

`Buffer.alloc`

```JavaScript
// 创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
// 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
let buf_1 = Buffer.alloc(10);
```

`Buffer.allocUnsafe`

```JavaScript
// 创建了一个长度为 10 字节的 Buffer，Buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫 unsafe
let buf_2 = Buffer.allocUnsafe(10);
```

`Buffer.from`

```JavaScript
// 通过字符串创建 Buffer
let buf_3 = Buffer.from('hello');
// 通过数组创建 Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
```

#### 1.3.2 `Buffer` 与字符串的转化

可以借助 `toString` 方法将 `Buffer` 转为字符串

```JavaScript
// buffer 与字符串的转换
const buffer = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// 默认使用 UTF-8 的编码格式
console.log(buffer.toString())
```

> 注意：`toString` 默认是按照 `utf-8` 编码方式进行转换的。

#### 1.3.3 `Buffer` 的操作

`Buffer` 可以直接通过 [] 的方式对数据进行处理。

```JavaScript
const buffer = Buffer.from('hello');
// 二进制：1101000
console.log(buffer[0].toString(2))

// 修改 buffer
buffer[0] = 95
console.log(buffer.toString())

// 溢出 如果修改的数值超过 255 ，则超过 8 位数据会被舍弃
const buffer = Buffer.from('hello')
// 会舍弃高位的数字，因为八位的二进制最高值为 255   0001 0110 1001  => 0110 1001
buffer[0] = 361
console.log(buffer)

// 中文 一个 utf-8 的字符 一般 占 3 个字节
const buffer = Buffer.from('你好')
console.log(buffer)
```

> 注意：
>
> 1. 如果修改的数值超过 255，则超过 8 位数据会被舍弃
> 2. 一个 `utf-8` 的字符一般占 3 个字节

## 2. `fs` 模块

> `fs` 全称为 `file system`,称之为**文件系统**，是 `Node.js` 中的**内置模块**，可以对计算机中的磁盘进行操作。

### 2.1 文件写入

文件写入就是将数据保存到文件中，有如下的 `API`

| 方法                      | 说明     |
| ------------------------- | -------- |
| writeFile                 | 异步写入 |
| writeFileSync             | 同步写入 |
| appendFile/appendFileSync | 追加写入 |
| createWriteStream         | 流式写入 |

#### 2.1.1 异步写入

语法： `fs.writeFile(file, data, [options], callback)`

参数说明：

- `file`:文件名
- `data`:待写入的数据
- `options`:选项设置 （可选）
- `callback`:写入回调

返回值： `undefined`

代码示例：

```JavaScript
// 1.导入 fs 模块
const fs = require('fs')

// 2.写入文件
// writeFile 异步写入，四个参数：1.文件路径 2.写入内容 3.配置信息 4.回调函数
// 文件写入成功
fs.writeFile('./座右铭.txt', '封狼居胥，禅于姑衍，饮马瀚海', error => {
    // errror 为 null就是写入成功
    if (error) {
        console.log('文件写入失败')
        return;
    }
    console.log('文件写入成功')
});
```

#### 2.1.2 同步写入

语法: `fs.writeFileSync(file, data, [options])`

参数说明：

- `file`:文件名
- `data`:待写入的数据
- `options`:选项设置 （可选）

返回值： `undefined`

代码示例：

```JavaScript
// 1.导入 fs 模块
const fs = require('fs')

// 2.写入文件
// 同步写入，没有回调函数
fs.writeFileSync('./座右铭.txt', '封狼居胥，禅于姑衍，饮马瀚海，燕石勒然')
```

> `Node.js` 中的磁盘操作是由其他线程完成的，结果的处理有两种模式：
>
> - 同步处理 `JavaScript` 主线程会等待其他线程的执行结果，然后再继续执行主线程的代码，效率较低
> - 异步处理 `JavaScript` 主线程不会等待其他线程的执行结果，直接执行后续的主线程代码，效率较好

#### 2.1.3 追加写入

`appendFile` 作用是在文件尾部追加内容，`appendFile` 语法与 `writeFile` 语法完全相同
语法:

- fs.appendFile(file, data, [options], callback)
- fs.appendFileSync(file, data, [options])

返回值： 二者都为 `undefined`
代码示例：

```JavaScript
// 1.引入 fs 模块
const fs = require('fs');

const content = '\r\n但使龙城飞将在，不教胡马度阴山';

// fs.appendFile('./座右铭.txt', content, error => {
//     // errror 为 null就是写入成功
//     if (error) {
//         console.log('文件追加写入失败')
//         return;
//     }
//     console.log('文件追加写入成功');
// })

// 同步文件追加写入
// fs.appendFileSync('./座右铭.txt', content)

// 使用 writeFile 的方式追加文件写入
fs.writeFile('./座右铭.txt', content, {flag: 'a'}, error => {
    if (error) {
        console.log('文件追加写入失败')
        return;
    }
    console.log('文件追加写入成功')
})

console.log('hello world')
```

#### 2.1.4 流式写入

语法： `fs.createWriteStream(path, [options])`

参数说明：

- `path`:文件路径
- `options`:选项配置（ 可选 ）

返回值： `Object`

代码示例：

```JavaScript
// 1.导入 fs 模块
const fs = require('fs');

// 2.创建写入流对象
const writeStream = fs.createWriteStream('./观书有感.txt');

// 3.写入内容
writeStream.write('半亩方塘一鉴开\r\n')
writeStream.write('天光云影共徘徊\r\n')
writeStream.write('问渠那得清如许\r\n')
writeStream.write('为有源头活水来\r\n')

// 4.关闭通道 不是必须
// writeStream.close();
```

> 程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数。流式写入方式适用于**大文件写入**或者**频繁写入**的场景, `writeFile` 适合于写入频率较低的场景。

### 2.2 文件读取

文件读取顾名思义，就是通过程序从文件中取出其中的数据，有如下几种 `API`：

| 方法             | 说明     |
| ---------------- | -------- |
| readFile         | 异步读取 |
| readFileSync     | 同步读取 |
| createReadStream | 流式读取 |

#### 2.2.1 异步读取

语法： `fs.readFile(path, [options], callback)`

参数说明：

- `path`:文件路径
- `options`:选项配置
- `callback`:回调函数

返回值： `undefined`

代码示例：

```JavaScript
// 1.引入 fs 模块
const fs = require('fs')

// 2.异步读取
fs.readFile('./座右铭.txt', (error, data) => {
    if (error) {
        console.log('文件读取错误')
        return
    }
    console.log(data.toString())
})
```

#### 2.2.2 同步读取

语法： `fs.readFileSync(path, [options])`

参数说明：

- `path`:文件路径
- `options`:选项配置

返回值： `string` | `Buffer`

代码示例：

```JavaScript
// 1.引入 fs 模块
const fs = require('fs')

// 2.同步读取
let data = fs.readFileSync('./座右铭.txt');
console.log(data.toString())
```

#### 2.2.3 流式读取

语法： `fs.createReadStream(path, [options])`

参数说明：

- `path`:文件路径
- `options`:选项配置（可选）

返回值：`Object`

代码示例：

```JavaScript
// 1.导入 fs 模块
const fs = require('fs')

// 2.创建读取流对象
const rs = fs.createReadStream('./观书有感.txt');

// 3.绑定 data 事件
rs.on('data', chunk => {
    // chunk:块儿、大块儿
    console.log(chunk)
    console.log(chunk.length)
    console.log(chunk.toString())
})

// 4.结束事件（可选）
rs.on('end', () => {
    console.log('文件读取完成')
})
```

### 2.3 文件移动与重命名

在 `Node.js` 中，可以使用 `rename` 或 `renameSync` 来移动或重命名文件或文件夹

语法：

- `fs.rename(oldPath, newPath, callback)`
- `fs.renameSync(oldPath, newPath)`

参数说明：

- `oldPath`:文件当前的路径
- `newPath`:文件新的路径
- `callback`:操作后的回调

代码示例：

```JavaScript
// 1.导入 fs 模块
const fs = require('fs');

// 2.文件重命名
// fs.rename('./座右铭-2.txt', './西汉名将.txt', error => {
//     if (error) {
//         console.log('文件重命名失败')
//            return ;
//     }
//     console.log('文件重命名成功')
// })

// 3.文件移动
// 文件夹如果不存在，会报错误 Error: ENOENT: no such file or directory
fs.rename('./西汉名将.txt', './文件/西汉名将.txt', error => {
    if (error) {
        console.log(error, '移动文件出错');
        return ;
    }
    console.log('操作成功')
})
```

### 2.4 文件删除

在 `Node.js` 中，可以使用 `unlink` 或 `unlinkSync` 或 `rm` 或 `rmSync` 来删除文件

语法：

- `fs.unlink(path, callback)`
- `fs.unlinkSync(path)`

参数说明：

- `path`:文件路径
- `callback`:操作后的回调

代码示例：

```JavaScript
// 1.引入 fs 模块
const fs = require('fs')

// 2.调用 unlink 方法
// unlinkSync:同步删除
// fs.unlink('./座右铭-3.txt', error => {
//     if (error) {
//         console.log('删除文件错误', error)
//         return;
//     }
//     console.log('删除文件成功')
// })

// 3.调用 rm 方法
// rmSync:同步删除
fs.rm('./文件/西汉名将.txt', error => {
    if (error) {
        console.log('文件删除失败', error)
        return;
    }
    console.log('文件删除成功')
})
```

### 2.5 文件夹操作

在 `Node.js` 中可以通过如下 `API` 对文件夹进行创建、读取、删除等操作

| 方法                  | 说明       |
| --------------------- | ---------- |
| mkdir / mkdirSync     | 创建文件夹 |
| readdir / readdirSync | 读取文件夹 |
| rmdir / rmdirSync     | 删除文件夹 |

#### 2.5.1 创建文件夹

在 `Node.js` 中，可以使用 `mkdir` 或 `mkdirSync` 来创建文件夹

语法：

- `fs.mkdir(path, [options], callback)`
- `fs.mkdirSync(path, [options])`

参数说明：

- `path`:文件夹路径
- `options`:选项配置（可选）
- `callback`:操作后的回调

示例代码：

```JavaScript
// 1.引入 fs 模块
const fs = require('fs')

// 2.创建文件夹
// mkdir make:制作 directory:目录
fs.mkdir('./html', error => {
    if (error) {
        console.log('创建目录失败', error)
        return;
    }
    console.log('创建目录成功')
})

// 3.递归创建文件夹
fs.mkdir('./a/b/c', {
    recursive: true
}, error => {
    if (error) {
        console.log("递归创建文件夹失败", error)
        return;
    }
    console.log('递归创建文件夹成功')
})

// 4.递归同步创建文件夹
fs.mkdirSync('./a/b/c', {recursive: true});
```

#### 2.5.2 读取文件夹

在 `Node.js` 中，可以使用 `readdir` 或 `readdirSync` 来读取文件夹

语法：

- `fs.readdir(path, [options], callback)`
- `fs.readdirSync(path, [options])`

参数说明：

- `path`:文件夹路径
- `options`:选项配置（可选）
- `callback`:操作后的回调

示例代码：

```JavaScript
// 1.引入 fs 模块
const fs = require('fs')

// 2.读取文件夹
// readdir read:读取 dir:directory 目录
fs.readdir('./', (error, data) => {
    if (error) {
        console.log('读取文件夹错误', error)
        return;
    }
    // [
    //     '1-文件写入.js',
    //     '2-追加写入.js',
    //     '3-流式写入.js',
    //     '4-文件读取.js',
    //     '5-流式读取.js',
    //     '6-练习-文件复制.js',
    //     '7-文件重命名与移动.js',
    //     '8-删除文件.js',
    //     '9-文件夹操作.js',
    //     'a',
    //     'html',
    //     '座右铭.txt',
    //     '文件',
    //     '观书有感.txt'
    // ]
    console.log(data)
})

//同步读取
// let data = fs.readdirSync('./');
// console.log(data);
```

#### 2.5.3 删除文件夹

在 `Node.js` 中，可以使用 `rmdir` 或 `rmdirSync` 来删除文件夹

语法：

- `fs.rmdir(path, [options], callback)`
- `fs.rmdirSync(path, [options])`
  参数说明：
- `path`:文件夹路径
- `options`:选项配置（可选）
- `callback`:操作后的回调

示例代码：

```JavaScript
// 1.引入 fs 模块
const fs = require('fs')

// 2.删除文件夹
// fs.rmdir('./文件', error => {
//     if (error) {
//         console.log('删除文件夹失败', error)
//         return;
//     }
//     console.log('删除文件夹成功')
// })

// 3.递归删除文件夹
// 递归删除文件夹失败 [Error: ENOTEMPTY: directory not empty, rmdir 'E:\JavaEE\frontend\nodejs-study\2-fs文件系统\a']

// 不推荐使用
// fs.rmdir('./a', {recursive: true}, error => {
//     if (error) {
//         console.log('递归删除文件夹失败', error)
//         return ;
//     }
//     console.log('递归删除文件夹成功')
// })

// 推荐使用
fs.rm('./a', {recursive: true}, error => {
    if (error) {
        console.log('递归删除文件失败', error)
        return;
    }
    console.log('递归删除文件成功')
})

//同步递归删除文件夹
fs.rmdirSync('./a', {recursive: true})
```

### 2.6 查看资源状态

在 `Node.js` 中，可以使用 `stat` 或 `statSync` 来查看资源的详细信息

语法：

- `fs.stat(path, [options], callback)`
- `fs.statSync(path, [options])`

参数说明：

- `path`:文件夹路径
- `options`:选项配置（可选）
- `callback`:操作后的回调

示例代码：

```JavaScript
// 1.引入 fs 模块
const fs = require('fs')

// 2.stat 方法 status 的缩写：状态
fs.stat('./观书有感.txt', (error, data) => {
    if (error) {
        console.log('操作失败', error)
        return;
    }
    // Stats {
    //     dev: 985301708,
    //     mode: 33206,
    //     nlink: 1,
    //     uid: 0,
    //     gid: 0,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 281474979770305,
    //     size: 92,
    //     blocks: 0,
    //     atimeMs: 1684373309132.9426,
    //     mtimeMs: 1684289136772.1648,
    //     ctimeMs: 1684289136772.1648,
    //     birthtimeMs: 1684289136770.7136,
    //     atime: 2023 - 05 - 18 T01: 28: 29.133 Z,
    //     mtime: 2023 - 05 - 17 T02: 05: 36.772 Z,
    //     ctime: 2023 - 05 - 17 T02: 05: 36.772 Z,
    //     birthtime: 2023 - 05 - 17 T02: 05: 36.771 Z
    // }
    console.log(data)
    console.log(data.isFile())
    console.log(data.isDirectory())
})

// 3.同步获取状态
let data = fs.statSync('./观书有感.txt');
console.log(data)
console.log(data.isFile())
console.log(data.isDirectory())
```

结果值对象结构：

- `size`:文件体积
- `birthtime`:创建时间
- `mtime`:最后修改时间
- `isFile`:检测是否为文件
- `isDirectory`:检测是否为文件夹

### 2.7 相对路径问题

`fs` 模块对资源进行操作时，路径的写法有两种：

- 相对路径
  - `./座右铭.txt`:当前目录下的座右铭.txt
  - `座右铭.txt`:等效于上面的写法
  - `../座右铭.txt`:当前目录的上一级目录中的座右铭.txt
- 绝对路径
  - `D:/Program Files`:`windows` 系统下的绝对路径
  - `/usr/bin`:`Linux` 系统下的绝对路径

> 相对路径中所谓的当前目录，指的是**命令行的工作目录**，而并非是文件的所在目录。所以当命令行的工作目录与文件所在目录不一致时，会出现一些 `BUG`。

### 2.8 `__dirname`

`__dirname` 与 `require` 类似，都是 `Node.js` 环境中的 '全局' 变量
`__dirname` 保存着**当前文件所在目录的绝对路径**，可以使用 `__dirname` 与文件名拼接成绝对路径
代码示例：

```JavaScript
let data = fs.readFileSync(__dirname + '/data.txt');
console.log(data);
```

> 使用 `fs` 模块的时候，尽量使用 `__dirname` 将路径转化为绝对路径，这样可以避免相对路径产生的 `Bug`

### 2.9 练习

实现文件复制的功能
代码示例：

```JavaScript
/**
 * 需求：
 *  复制【座右铭.txt】
 */

// 1.引入 fs 模块
const fs = require('fs');
// 全局对象，即 global 对象的属性，无须声明即可访问。它用于描述当前 Node 进程状态的对象，提供了一个与操作系统的简单接口。
const process = require('process')

// 方式一：使用 readFile
// 2.读取文件
// let data = fs.readFileSync('./座右铭.txt');

// // 3.写入文件
// fs.writeFileSync('./座右铭-2.txt', data);

// // 查看系统耗费内存
// // rss: 19795968 字节
// console.log(process.memoryUsage())

// 方式二：使用流式操作
// 2.创建流式读取
let rs = fs.createReadStream('./座右铭.txt');

// 3.创建流式写入
let ws = fs.createWriteStream('./座右铭-3.txt');

// // 4.绑定 data 事件
// rs.on('data', chunk => {
//     ws.write(chunk);
// })

// // 5.绑定 end 事件
// rs.on('end', () => {
//     // rss: 20885504 字节 相比于同步的方式占用内存会比较小
//     console.log(process.memoryUsage())
// })

// 4.使用 pipe(管道) 可直接复制
rs.pipe(ws)
```

## 3. `path` 模块

`path` 模块提供了**操作路径**的功能，有如下几个较为常用的 `API`：
| 方法 | 说明 |
| -- | -- |
| path.resolve | 拼接规范的绝对路径常用 |
| path.sep | 获取操作系统的路径分隔符 |
| path.parse | 解析路径并返回对象 |
| path.basename | 获取路径的基础名称 |
| path.dirname | 获取路径的目录名 |
| path.extname | 获得路径的扩展名 |

代码示例：

```JavaScript
// 1.引入 path、fs 模块
const path = require('path')
const fs = require('fs')

// 写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love')
// E:\JavaEE\frontend\nodejs-study\3-path模块/index.html
// console.log(__dirname + '/index.html')

// 使用 path 解决
// E:\JavaEE\frontend\nodejs-study\3-path模块\index.html
console.log(path.resolve(__dirname, './index.html'))
// E:\JavaEE\frontend\nodejs-study\3-path模块\index.html
console.log(path.resolve(__dirname, 'index.html'))
// E:\index.html\test
console.log(path.resolve(__dirname, '/index.html', './test'))

// 分隔符
// \ windows:\ linux:/
console.log(path.sep)

// parse 方法 __dirname '全局变量'
// __filename '全局变量' 文件的绝对路径
console.log(__filename)

let str = 'E:\\JavaEE\\frontend\\nodejs-study\\3-path模块\\index.html';

// {
//     root: 'E:\\',
//     dir: 'E:\\JavaEE\\frontend\\nodejs-study\\3-path模块',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
// }
console.log(path.parse(str))

// index.html
console.log(path.basename(str))

// E:\JavaEE\frontend\nodejs-study\3-path模块
console.log(path.dirname(str))

// .html
console.log(path.extname(str))
```

## 4. `http` 模块

### 4.1 创建 `http` 服务

#### 4.1.1 操作步骤

代码示例：

```JavaScript
// 1.引入 http 模块
const http = require('http')

// 2.创建 http 服务
const server = http.createServer((request, response) => {

    // response.end 设置响应体 必须要返回，且只能返回一次
    // 多个 response.end 报错 Error [ERR_STREAM_WRITE_AFTER_END]: write after end
    // response.end("hello world")
    // response.end("hello world")

    // 解决中文乱码
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('你好，世界')
})

// 3.启动服务并监听端口
server.listen(9000, () => {
    console.log('http 服务启动成功')
})
```

> `http.createServer` 里的回调函数的执行时机：当接收到 `http` 请求的时候，就会执行

#### 4.1.2 测试

浏览器请求对应端口
`http://127.0.0.1:9000`

#### 4.1.3 注意事项

- 命令行 `ctrl + c` 停止服务
- 当服务启动后，更新代码必须重启服务才能生效
- 响应内容中文乱码的解决办法
  ```JavaScript
  response.setHeader('content-type', 'text/html;charset=utf-8')
  ```
- 端口号被占用
  - 关闭当前正在运行监听端口的服务
  - 修改其他端口号
  - 如果端口被其他程序占用，可以使用**资源监视器**找到占用端口的程序，然后使用**任务管理器**关闭对应的程序

### 4.2 获取 `http` 请求报文

想要获取请求的数据，需要通过 `request` 对象

| 方法                                                                       | 说明           |
| -------------------------------------------------------------------------- | -------------- |
| request.method                                                             | 请求方法       |
| request.httpVersion                                                        | 请求版本       |
| request.url                                                                | 请求路径       |
| require('url').parse(request.url).pathname                                 | URL 路径       |
| require('url').parse(request.url, true).query                              | URL 查询字符串 |
| request.headers                                                            | 请求头         |
| request.on('data', function(chunk){})<br/>request.on('end', function(){}); | 请求体         |

注意事项：

- `request.url` 只能获取路径以及查询字符串，无法获取 `URL` 中的域名以及协议的内容
- `request.headers` 将请求信息转化成一个对象，并将属性名都转化成了『小写』
- 关于路径：如果访问网站的时候，只填写了 `IP` 地址或者是域名信息，此时请求的路径为『/』
- 关于 `favicon.ico`：这个请求是属于浏览器自动发送的请求

代码示例：

```JavaScript
// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
    // 获取请求的方法
    console.log(request.method)
    // 获取请求的 url
    console.log(request.url)
    // 获取 http 协议版本号
    console.log(request.httpVersion)
    // 获取请求头
    console.log(request.headers)
    // 获取请求主机地址
    console.log(request.headers.host)

    response.end("hello world")
})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

代码示例：

```JavaScript
// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {

    // 1.声明一个变量
    let body = ''

    // 2.绑定 data 事件
    request.on('data', chunk => {
        body += chunk
    })

    // 3.绑定 end 事件
    request.on('end', () => {
        console.log(body)
        response.end("hello world")
    })

})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

代码示例：

```JavaScript
// 1.引入 http 模块
const http = require('http')

// 1.导入 url 模块
const url = require('url')

// 2.创建服务
const server = http.createServer((request, response) => {
    // request: http://127.0.0.1:9000/search?keyword=123&username=chen

    // 2.解析 request.url
    // let res1 = url.parse(request.url)
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?keyword=123&username=chen',
    //     query: 'keyword=123&username=chen',
    //     pathname: '/search',
    //     path: '/search?keyword=123&username=chen',
    //     href: '/search?keyword=123&username=chen'
    // }
    // console.log(res1)


    // let res2 = url.parse(request.url, true)
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?keyword=123&username=chen',
    //     query: [Object: null prototype] {
    //         keyword: '123',
    //         username: 'chen'
    //     },
    //     pathname: '/search',
    //     path: '/search?keyword=123&username=chen',
    //     href: '/search?keyword=123&username=chen'
    // }
    // console.log(res2)

    let res = url.parse(request.url, true)
    // 请求路径
    // /search
    console.log(res.pathname)
    // 查询字符串
    // 123
    console.log(res.query.keyword)

    response.end('hello world')
})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

代码示例：

```JavaScript
// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
    // request: http://127.0.0.1:9000/search?keyword=123&username=chen

    // 第二个参数要写完整 http://127.0.0.1  只写 ip 会报错
    let url = new URL(request.url, 'http://127.0.0.1')

    // URL {
    //     href: 'http://127.0.0.1/search?keyword=123&username=chen',
    //     origin: 'http://127.0.0.1',
    //     protocol: 'http:',
    //     username: '',
    //     password: '',
    //     host: '127.0.0.1',
    //     hostname: '127.0.0.1',
    //     port: '',
    //     pathname: '/search',
    //     search: '?keyword=123&username=chen',
    //     searchParams: URLSearchParams {
    //         'keyword' => '123', 'username' => 'chen'
    //     },
    //     hash: ''
    // }
    // console.log(url)

    // 请求路径
    console.log(url.pathname)

    // 请求路径参数
    console.log(url.searchParams.get('keyword'))

    response.end('hello world')
})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

### 4.3 设置 `http` 响应报文

| 方法                                    | 说明             |
| --------------------------------------- | ---------------- |
| response.statusCode                     | 设置响应状态码   |
| response.statusMessage                  | 设置响应状态描述 |
| response.setHeader('键名', '键值')      | 设置响应头信息   |
| response.write('xx')response.end('xxx') | 设置响应体       |

`write` 和 `end` 的两种使用情况：

```JavaScript
// 1.write 和 end 的结合使用 响应体相对分散
response.write('xx');
response.write('xx');
response.write('xx');

 //每一个请求，在处理的时候必须要执行 end 方法，且只能执行一次
response.end();

// 2.单独使用 end 方法 响应体相对集中
response.end('xxx');
```

代码示例：

```JavaScript
// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {

    // 1.设置响应状态码
    // response.statusCode = 200
    // response.statusCode = 404

    // 2.设置响应信息 不常用
    // response.statusMessage = 'hello world'

    // 3.设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.setHeader('Server', 'Node.js')
    response.setHeader('myHeader', 'myHeader')
    response.setHeader('test', ['love', 'love', 'love'])

    // 4.设置响应体
    response.write('love\r\n')
    response.write('love\r\n')
    response.write('love\r\n')
    response.write('love\r\n')

    response.end('hello world')

})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

### 4.4 练习

#### 4.4.1 `http` 请求练习

需求：
当请求方式为 `get` 请求时，请求路径为 `/login` 返回 `login`
当请求方式为 `get` 请求时，请求路径为 `/register` 返回 `register`

代码示例：

```JavaScript
/**
 * 需求：
 *  当请求方式为 get 请求时，请求路径为 /login 返回 login
 *  当请求方式为 get 请求时，请求路径为 /register 返回 register
 */

// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {

    // 请求方式
    let { method } = request

    // 请求路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    if (method === 'GET' && pathname === '/login') {
        response.end('login')
    } else if (method === 'GET' && pathname === '/register') {
        response.end('register')
    } else {
        response.end('hello world')
    }
})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

#### 4.4.1 `http` 响应练习

需求：
回一个 4 行 3 列的表格，且要求表格有隔行换色效果，且点击单元格能高亮显示

代码示例：

```JavaScript
/**
 * 需求：
 *  返回一个4行3列的表格，且要求表格有隔行换色效果，且点击单元格能高亮显示
 */


// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {

    response.end(`
    <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                td {
                    padding: 20px 40px;
                }

                table tr:nth-child(odd) {
                    background: rgb(179, 165, 201);
                }

                table tr:nth-child(even) {
                    background: #fcb;
                }

                table,
                td {
                    border-collapse: collapse;
                }
            </style>
        </head>

        <body>
            <table border="1">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <script>
                //获取所有的 td
                let tds = document.querySelectorAll('td');
                //遍历
                tds.forEach(item => {
                    item.onclick = function () {
                        this.style.background = '#222';
                    }
                })
            </script>
        </body>

        </html>
    `)

})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

代码优化：

```JavaScript
/**
 * 需求：
 *  返回一个4行3列的表格，且要求表格有隔行换色效果，且点击单元格能高亮显示
 */


// 1.引入 http 模块
const http = require('http')

// 1.引入 fs 模块
const fs = require('fs')

// 2.创建服务
const server = http.createServer((request, response) => {

    // 2.读取文件内容
    let file = fs.readFileSync(__dirname + '/10-table.html')

    response.end(file)

})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

### 4.5 静态资源服务

> 静态资源是指**内容长时间不发生改变的资源**，例如图片、视频、`CSS` 文件、`JS` 文件、`HTML` 文件、字体文件等。

> 动态资源是指**内容经常更新的资源**，例如百度首页、网易首页、京东搜索列表页面等。

#### 4.5.1 网页中的 `URL`

> 网页中的 `URL` 主要分为两大类：相对路径与绝对路径

绝对路径可靠性强，而且相对容易理解，在项目中运用较多

| 形式               | 特点                                                                       |
| ------------------ | -------------------------------------------------------------------------- |
| http://xxx.com/web | 直接向目标资源发送请求，容易理解，网站的外链会用到此形式                   |
| //xxx.com/web      | 与页面 `URL` 的协议拼接形成完整 `URL` 再发送请求，大型网站用的比较多       |
| /web               | 与页面 `URL` 的协议、主机名、端口拼接形成完整 `URL` 再发送请求，中小型网站 |

相对路径在发送请求时，需要与当前页面 `URL` 路径进行计算，得到完整 `URL` 后，再发送请求
例如当前网页 `URL` 为 `http://www.xxx.com/course/h5.html`
| 形式 | 最终的 `URL` |
| -- | -- |
| ./css/app.css | http://www.xxx.com/course/css/app.css |
| js/app.js | http://www.xxx.com/course/js/app.js |
| ../img/logo.png | http://www.xxx.com/img/logo.png |
| ../../mp4/show.mp4 | http://www.atguigu.com/mp4/show.mp4 |

#### 4.5.2 设置资源类型（`mime` 类型）

> 媒体类型（通常称为 `Multipurpose Internet Mail Extensions` 或 `MIME` 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。

`mime` 类型结构： `[type]/[subType]`

例如： `text/html` `text/css` `image/jpeg` `image/png` `application/json`

`http` 服务可以设置响应头 `Content-Type` 来表明响应体的 `mime` 类型，浏览器会根据该类型决定如何处理资源
下面是常见文件对应的 `mime` 类型：

```Json
{
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}
```

> 说明：对于未知的资源类型，可以选择 `application/octet-stream` 类型，浏览器在遇到该类型的响应时，会对响应体内容进行独立存储，也就是**下载**。

代码示例：

```JavaScript
/**
 * 需求：
 *  根据不同的请求路径，返回不同的文件
 */

// 1.引入模块
const http = require('http')
const fs = require('fs')

// 2.创建服务
const server = http.createServer((request, response) => {

    // 获取请求路径
    let { pathname } = new URL(request.url, 'https://127.0.0.1:9000')
    if (pathname === '/') {
        // 获取要响应的文件
        let data = fs.readFileSync(__dirname + '/11-table.html')
        // 设置响应
        response.end(data)
    } else if (pathname === '/index.css') {
        // 获取要响应的文件
        let data = fs.readFileSync(__dirname + '/index.css')
        // 设置响应
        response.end(data)
    } else if (pathname === '/index.js') {
        // 获取要响应的文件
        let data = fs.readFileSync(__dirname + '/index.js')
        // 设置响应
        response.end(data)
    } else {
        response.end(`<h1>404 Not Found</h1>`)
    }
})

// 3.启动服务，并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

代码优化：

```JavaScript
/**
 * 需求：
 *  创建一个 HTTP 服务，端口为 9000，满足如下需求
 *      GET  /index.html        响应  page/index.html 的文件内容
 *      GET  /css/app.css       响应  page/css/app.css 的文件内容
 *      GET  /images/logo.png   响应  page/images/logo.png 的文件内容
 */

// 1.引入模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 2.创建服务
const server = http.createServer((request, response) => {

    // 获取文件根路径
    let root = path.resolve(__dirname + '/page')
    // 获取文件路径
    let { pathname } = new URL(request.url, 'https://127.0.0.1:9000')
    // 拼接文件路径
    let filePath = root + pathname

    // 获取文件
    fs.readFile(filePath, (error, data) => {
        // 设置字符集，解决打开文件中文乱码的问题
        response.setHeader('content-type', 'text/html;charset=utf-8')

        if (error) {
            response.end('读取文件错误')
        }

        response.end(data)
        return;
    })
})

// 3.启动服务并监听端口
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

代码优化：

```JavaScript
/**
 * 需求：
 *  创建一个 HTTP 服务，端口为 9000，满足如下需求
 *      GET  /index.html        响应  page/index.html 的文件内容
 *      GET  /css/app.css       响应  page/css/app.css 的文件内容
 *      GET  /images/logo.png   响应  page/images/logo.png 的文件内容
 *  根据不同的文件类型，返回不同的类型
 */

// 1.引入模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 声明一个变量
let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

// 2.创建服务
const server = http.createServer((request, response) => {

    // 获取文件根路径
    let root = path.resolve(__dirname + '/page')
    // 获取文件路径
    let {
        pathname
    } = new URL(request.url, 'https://127.0.0.1:9000')
    // 拼接文件路径
    let filePath = root + pathname

    // 获取文件
    fs.readFile(filePath, (error, data) => {

        if (error) {
            // 设置字符集，解决打开文件中文乱码的问题
            response.setHeader('content-type', 'text/html;charset=utf-8')
            switch(error.code) {
                case 'ENOENT':
                    response.statusCode = 404
                    response.end(`<h1>404 Not Found</h1>`)
                    break;
                case 'EPERM':
                    response.statusCode = 403
                    response.end(`<h1>403 Forbidden</h1>`)
                    break;
                default:
                    response.statusCode = 500
                    response.end(`<h1>500 Internal </h1>`)
                    break;
            }
            return;
        }

        // 获取文件后缀
        let ext = path.extname(filePath).slice(1)
        // 获取对应的类型
        let type = mimes[ext]
        if (type) {
            // 匹配到了
            if (ext === 'html') {
                response.setHeader('content-type', type + ';charset=utf-8')
            } else {
                response.setHeader('content-type', type)
            }
        } else {
            // 没有匹配到
            // 这种返回格式可以实现下载效果
            response.setHeader('content-type', 'application/octet-stream')
        }

        response.end(data)
    })
})

// 3.启动服务并监听端口
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

#### 4.5.3 `GET` 和 `POST` 请求的区别

- `GET` 和 `POST` 是 `http` 协议请求的两种方式。
- `GET` 主要用来获取数据，`POST` 主要用来提交数据
- `GET` 带参数请求是将参数缀到 `URL` 之后，在地址栏中输入 `URL` 访问网站就是 `GET` 请求，`POST` 带参数请求是将参数放到请求体中
- `POST` 请求相对 `GET` 安全一些，因为在浏览器中参数会暴露在地址栏
- `GET` 请求大小有限制，一般为 `2K`，而 `POST` 请求则没有大小限制

## 5. 模块化

### 5.1 基础概念

> 模块化：将一个复杂的程序文件依据一定规则（规范）拆分成多个文件的过程称之为**模块化**。

> 模块：拆分出的每个文件就是一个模块，模块的内部数据是私有的，不过模块可以暴露内部数据以便其他模块使用

> 模块化项目：编码时是按照模块一个一个编码的， 整个项目就是一个模块化的项目

模块化好处：

- 防止命名冲突
- 高复用性
- 高维护性

### 5.2 模块暴露

模块暴露的方式有两种：

- `module.exports = value`
- `exports.name = value`

> 说明：
>
> - `module.exports` 可以暴露任意数据和方法
> - 不能使用 `exports = value` 的形式暴露，模块内部 `module` 与 `exports` 具有隐式关系
>   `exports = module.exports = {}`,`require` 返回的是目标模块中 `module.exports` 的值

代码示例：
`hello.js`

```JavaScript
const type = 'hello world'

function helloWorld() {
    console.log('你好，世界....')
}

// 暴露数据、方法
module.exports = {
    type,
    helloWorld
}

// exports.type = type
// module.exports = helloWorld

// exports.type = type
// exports.helloWorld = helloWorld
```

`index.js`

```JavaScript
// 引入自定应模块
const hello = require('./hello')

// 调用模块数据/方法
console.log(hello)
hello.helloWorld()
// hello()
```

### 5.3 模块导入

在模块中使用 `require` 传入文件路径即可引入文件
`require` 使用的一些注意事项：

- 对于自己创建的模块，导入时路径建议写**相对路径**，且不能省略 `./` 和 `../`
- `js` 和 `json` 文件导入时可以不用写后缀，`c/c++` 编写的 `node` 扩展文件也可以不写后缀，但是一般用不到
- 如果导入其他类型的文件，会以 `js` 文件进行处理
- 如果导入的路径是个文件夹，则会首先检测该文件夹下 `package.json` 文件中 `main` 属性对应的文件，如果存在则导入，反之如果文件不存在会报错。如果 `main` 属性不存在，或者 `package.json` 不存在，则会尝试导入文件夹下的 `index.js` 和 `index.json`，如果还是没找到，就会报错
- 导入 `node.js` 内置模块时，直接 `require` 模块的名字即可，无需加 `./` 和 `../`

### 5.4 模块导入流程

`require` 导入**自定义模块**的基本流程：

1. 将相对路径转为绝对路径，定位目标文件
2. 缓存检测
3. 读取目标文件代码
4. 包裹为一个函数并执行（自执行函数），通过 `arguments.callee.toString()` 查看自执行函数
5. 缓存模块的值
6. 返回 `module.exports` 的值

代码示例：

```JavaScript
/**
 * require 导入原理 伪代码
 */

// 1.引入模块
const path = require('path')
const fs = require('fs')

// 2.定义一个缓存数组
let caches = []

function require(file) {
    // 3.将相对路径转成绝对路径
    let absolutePath = path.resolve(__dirname, file)

    // 4.检测是否有缓存
    if (caches[absolutePath]) {
        return caches[absolutePath]
    }

    // 5.读取文件的代码
    let code = fs.readFileSync(absolutePath).toString()
    // 6.封装一个函数
    let module = {}
    let exports = module.exports = {}

    (function (exports, require, module, __fileName, __dirname) {
        const test = {
            name: 'hello world'
        }
        module.exports = test

        console.log(arguments.callee.toString())
    })(exports, require, module, __filename, __dirname)

    // 7.缓存结果
    caches[absolutePath] = module.exports

    // 7.返回 module.exports 的值
    return module.exports
}
```

## 6. 包管理工具

### 6.1 基础概念

包：英文单词是 `package`，代表了一组特定功能的源码集合
包管理工具：管理**包**的应用软件，可以对**包**进行下载安装、更新、删除、上传等操作。借助包管理工具，可以快速开发项目，提升开发效率。包管理工具是一个通用的概念，很多编程语言都有包管理工具，所以 掌握好包管理工具非常重要

常用的包管理工具：

- `npm`
- `cnpm`
- `yarn`
- `pnpm`

### 6.2 `npm`

> `npm` 全称 `Node Package Manager`,翻译为中文意思是**Node 的包管理工具**

> `npm` 是 `Node.js` 官方内置的包管理工具，是必须要掌握住的工具

常见使用命令：
| 命令 | 说明 |
| -- | -- |
| `npm -v` | 查看版本号 |
| `npm init` | 命令的作用是将文件夹初始化为一个包， 交互式创建 `package.json` 文件 |
| `npm s/search` | 搜索包 |
| `npm install` `npm i` | 下载安装包 |
| `npm i -g` | 全局安装 |
| `npm i <包名@版本号>` | 安装指定版本的包 |
| `npm remove` `npm r` | 局部删除依赖 |
| `npm remove -g` | 全局删除依赖 |

#### 6.2.1 初始化

创建一个空目录，然后以此目录作为工作目录**启动命令行工具**，执行 `npm init`.
`npm init` 命令的作用是将文件夹初始化为一个**包**，交互式创建 `package.json` 文件。
`package.json` 文件是包的配置文件，每个包都必须要有， `package.json` 文件内容：

```Json
{
    "name": "1-npm", #包的名字
    "version": "1.0.0", #包的版本
    "description": "", #包的描述
    "main": "index.js", #包的入口文件
    "scripts": { #脚本配置
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "", #作者
    "license": "ISC" #开源证书
}
```

> 初始化的过程中还有一些注意事项：
>
> - `name` ( 包名 ) 不能使用中文、大写，默认值是文件夹的名称 ，所以文件夹名称也不能使用中文和大写
> - `version` ( 版本号 )要求 `x.x.x` 的形式定义， `x` 必须是数字，默认值是 `1.0.0`
> - `ISC` 证书与 `MIT` 证书功能上是相同的，关于开源证书扩展阅读 http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html
> - `package.json` 可以手动创建与修改
> - 使用 `npm init -y` 或者 `npm init --yes` 极速创建 `package.json`

### 6.2.2 包管理

通过 `npm install` 和 `npm i` 命令安装包

```Bash
npm install uniq
npm i uniq
```

运行之后文件夹下会增加两个资源

- `node_modules` 文件夹存放下载的包，`node_modules` 文件夹大多数情况都不会存入版本库(`git`、`svn` 等)
- `package-lock.json` 包的锁文件，用来锁定包的版本

可以使用 `require` 导入 `npm` 包

```JavaScript
// 导入 uniq 包
const uniq = require('uniq')
```

`require` 导入的基本流程：

- 在当前文件夹下 `node_modules` 中寻找同名的文件夹
- 在上级目录中下的 `node_modules` 中寻找同名的文件夹，直至找到磁盘根目录

安装的包，也称为**依赖**，**依赖**有**生产依赖**与**开发依赖**，二者的使用如下：
| 类型 | 命令 | 说明 |
| -- | -- | -- |
| 生产依赖 | `npm i -S uniq` `npm i --save uniq` | `-S` 等效于 `--save`,`-S` 是默认选项 包信息保存在 `package.json` 中 `dependencies` 属性 |
| 开发依赖 | `npm i -D less` `npm i --save-dev less` | `-D` 等效于 `--save-dev` 包信息保存在 `package.json` 中 `devDependencies` 属性 |

项目中可能会遇到版本不匹配的情况，有时就需要安装指定版本的包，可以使用下面的命令

```Bash
npm i jquery@1.11.2
```

可以执行安装选项 `-g` 进行全局安装

```Bash
npm i -g nodemon
```

全局安装完成之后就可以在命令行的任何位置运行 `nodemon` 命令，该命令的作用是**自动重启 Node 应用程序**

> 说明：
>
> - 全局安装的命令不受工作目录位置影响
> - 可以通过 `npm root -g` 可以查看全局安装包的位置
> - 不是所有的包都适合全局安装，只有全局类的工具才适合，可以通过查看包的官方文档来确定

项目中可能需要删除某些不需要的包，可以使用下面的命令

```Bash
## 局部删除
npm remove uniq
npm r uniq
## 全局删除
npm remove -g nodemon
```

### 6.2.3 启动项目

可以通过配置 `package.json` 中的 `scripts` 属性来启动项目

```Json
{
    "scripts": {
        "server": "node server.js",
        "start": "node index.js",
    },
}
```

配置完成之后，执行命令启动项目

```Bash
npm run server
npm run start
```

不过 `start` 比较特别，使用时可以省略 `run`

```Bash
npm start
```

> `npm run` 有自动向上级目录查找的特性，跟 `require` 函数一样

### 6.3 `cnpm`

`cnpm` 是一个淘宝构建的 `npmjs.com` 的完整镜像，也称为**淘宝镜像**，网址：https://npmmirror.com/。
`cnpm` 服务部署在国内阿里云服务器上，可以提高包的下载速度。官方也提供了一个全局工具包 `cnpm`，操作命令与 `npm` 大体相同。

可以通过 `npm` 来安装 `cnpm` 工具：

```Bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

常用操作命令：
| 命令 | 说明 |
| -- | -- |
| `cnpm init` / `cnpm init` | 初始化 |
| `cnpm i uniq` `cnpm i -S uniq` `cnpm i -D uniq` `cnpm i -g nodemon` | 安装包 |
| `cnpm i` | 安装项目依赖 |
| `cnpm r uniq` | 删除 |

用 `npm` 也可以使用淘宝镜像，配置的方式有两种：

- 直接配置
- 工具配置

执行如下命令即可完成配置：

```Bash
npm config set registry https://registry.npmmirror.com/
```

使用 `nrm` 配置 `npm` 的镜像地址 `npm registry manager`

1. 安装 `nrm`
   ```Bash
   npm i -g nrm
   ```
2. 修改镜像
   ```Bash
    nrm use taobao
   ```
3. 检查是否配置成功（选做）
   ```Bash
   npm config list
   ```
   检查 `registry` 地址是否为 `https://registry.npmmirror.com/`, 如果是则表明成功

> 补充说明：
>
> - 建议使用第二种方式进行镜像配置，因为后续修改起来会比较方便
> - 虽然 `cnpm` 可以提高速度，但是 `npm` 也可以通过淘宝镜像进行加速，所以 `npm` 的使用率还是高于 `cnpm`

### 6.4 `yarn`

`yarn` 是由 `Facebook` 在 2016 年推出的新的 `Javascript` 包管理工具，官方网址：https://yarnpkg.com/

`yarn` 特点：

- 速度超快：`yarn` 缓存了每个下载过的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，因此安装速度更快。
- 超级安全：在执行代码之前，`yarn` 会通过算法校验每个安装包的完整性
- 超级可靠：使用详细、简洁的锁文件格式和明确的安装算法，`yarn` 能够保证在不同系统上无差异的工作

可以使用 `npm` 安装 `yarn`

```Bash
npm i -g yarn
```

`yarn` 常用命令：
| 命令 | 说明 |
| -- | -- |
| `yarn init` / `yarn init -y` | 初始化 |
| `yarn add uniq` 生产依赖 `yarn add less --dev` 开发依赖 `yarn global add nodemon` 全局安装 | 安装包 |
| `yarn remove uniq` 删除项目依赖包 `yarn global remove nodemon` 全局删除包 | 删除包 |
| `yarn`/`yarn install` | 安装项目依赖 |
| `yarn` # 不需要添加 `run` | 运行命令别名 |

可以通过如下命令配置淘宝镜像

```Bash
yarn config set registry https://registry.npmmirror.com/
```

查看 `yarn` 的配置项

```Bash
yarn config list
```

`npm` 和 `yarn` 选择：

- 个人项目：如果是个人项目， 哪个工具都可以 ，可以根据自己的喜好来选择
- 公司项目：如果是公司要根据项目代码来选择，可以 通过**锁文件**判断项目的包管理工具
  - `npm` 的锁文件为 `package-lock.json`
  - `yarn` 的锁文件为 `yarn.lock`

> 切记：包管理工具不要混着用

### 6.5 管理发布包

可以将自己开发的工具包发布到 `npm` 服务上，方便自己和其他开发者使用，操作步骤如下：

1. 创建文件夹，并创建文件 `index.js`， 在文件中声明函数，使用 `module.exports` 暴露
2. `npm` 初始化工具包，`package.json` 填写包的信息 (包的名字是唯一的)
3. 注册账号：https://www.npmjs.com/signup
4. 激活账号（一定要激活账号）
5. 修改为官方的官方镜像(命令行中运行 `nrm use npm`)
6. 命令行下 `npm login` 填写相关用户信息
7. 命令行下 `npm publish` 提交包

后续可以对自己发布的包进行更新，操作步骤如下：

1. 更新包中的代码
2. 测试代码是否可用
3. 修改 `package.json` 中的版本号
4. 发布更新命令 `npm publish`

执行如下命令删除包

```Bash
npm unpublish --force
```

删除包需要满足一定的条件，https://docs.npmjs.com/policies/unpublish

- 是包的作者
- 发布小于 24 小时
- 大于 24 小时后，没有其他包依赖，并且每周小于 300 下载量，并且只有一个维护者

### 6.6 `nvm`

> `nvm` 全称 `Node Version Manager` 顾名思义它是用来管理 `Node` 版本的工具，方便切换不同版本的 `Node.js`。

> `nvm` 的使用非常的简单，跟 `npm` 的使用方法类似。

> 下载地址 https://github.com/coreybutler/nvm-windows/releases

常用命令：

| 命令                    | 说明                              |
| ----------------------- | --------------------------------- |
| `nvm list available`    | 显示所有可以下载的 `Node.js` 版本 |
| `nvm list`              | 显示已安装的版本                  |
| `nvm install 18.12.1`   | 安装 `18.12.1` 版本的 `Node.js`   |
| `nvm install latest`    | 安装最新版的 `Node.js`            |
| `nvm uninstall 18.12.1` | 删除某个版本的 `Node.js`          |
| `nvm use 18.12.1`       | 切换 `18.12.1` 的 `Node.js`       |

## 7. `express` 框架

### 7.1 介绍与使用

> `express` 是一个基于 `Node.js` 平台的极简、灵活的 `WEB` 应用开发框架，官方网址：`https://www.expressjs.com.cn/`

> 简单来说，`express` 是一个封装好的工具包，封装了很多功能，便于我们开发 `web` 应用（`http` 服务）

`express` 下载
`express` 本身是一个 `npm` 包，所以可以通过 `npm` 安装：

```Bash
npm init
npm i express
```

`express` 初体验：

```JavaScript
// 1.引入模块
const express = require('express')

// 2.创建服务
const app = express()

// 3.创建路由
app.get('/hello', (req, resp) => {
    resp.end('hello world')
})

// 4.启动服务并监听端口
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

### 7.2 路由

#### 7.2.1 路由初体验

> 官方定义：路由确定了应用程序如何响应客户端对特定端点的请求。

一个路由的组成有请求方法、路径、回调函数组成。
`express` 中提供了一系列方法，可以很方便的使用路由，使用格式如下：

```JavaScript
app.<method>(path，callback)
```

代码示例：

```JavaScript
// 1.引入模块
const express = require('express')

// 2.创建服务
const app = express()

// 3.创建路由
// get 请求
app.get('/hello', (req, resp) => {
    resp.end('hello world')
})

// 首页路由
app.get('/', (req, resp) => {
    resp.end('home')
})

// post 请求
app.post('/login', (req, resp) => {
    resp.end('login')
})

// 所有的请求方式都可以
app.all('/register', (req, resp) => {
    resp.end('register')
})

// 404
app.all('*', (req, resp) => {
    resp.end(`<h1>404 Not Found</h1>`)
})

// 4.启动服务并监听端口
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

#### 7.2.2 获取请求参数

`express` 框架封装了一些 `API` 来方便获取请求报文中的数据，并且兼容原生 `http` 模块的获取方式.。
代码示例：

```JavaScript
// 引入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/hello', (req, resp) => {

    // 原生方式
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req.httpVersion)
    // console.log(req.headers)

    // express 操作
    console.log(req.path)
    console.log(req.query)
    // 获取请求ip
    console.log(req.ip)

    resp.end('hello world')
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

`express` 框架也可以获取到路由参数。路由参数指的是 `URL` 路径中的参数（数据）。
代码示例：

```JavaScript
// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/:id/:token', (req, resp) => {
    console.log(req.params.id, req.params.token)
    resp.end('hello world')
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

`express` 可以使用 `body-parser` 包处理请求体。
安装 `body-parser`

```Bash
npm i body-parser
```

代码示例：

```JavaScript
/**
 * 需求：
 *  GET   /login  显示表单网页
 *  POST  /login  获取表单中的『用户名』和『密码』
 */

// 导入模块
const express = require('express')

// 使用 body-parser 获取请求体数据
// 安装 body-parser
// npm i body-parser
// 导入
const bodyParser = require('body-parser')

// 创建应用服务
const app = express()

// 解析 json 请求格式的请求体中间件
const jsonParser = bodyParser.json()

// 解析 queryString 请求格式的请求体中间件
const urlencodedParser = bodyParser.urlencoded({extended: false})

// 创建路由
app.get('/login', (req, resp) => {
    resp.sendFile(__dirname + '/11-form.html')
})

app.post('/login', urlencodedParser, (req, resp) => {

    // 获取用户名和密码
    console.log(req.body)
    resp.send('登录成功')
})

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

#### 7.2.3 设置响应

`express` 框架封装了一些 `API` 来方便给客户端响应数据，并且兼容原生 `http` 模块的获取方式。
代码示例：

```JavaScript
// 引入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/hello', (req, resp) => {
    // 原生响应
    // resp.statusCode = 404
    // resp.statusMessage = 'Not Found'
    // resp.setHeader('aaaa', 'bbbb')
    // resp.write('hello express ')

    // express 操作
    // resp.status(500)
    // resp.set('aaa', '123')
    // 自动返回 utf8 编码。此时无需再写 resp.end()
    // resp.send('hello express ')

    // 可以链式调用
    resp.status(500).set('xxx', 'yyy').send('你好，世界')
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

还可以设置其他响应：

```JavaScript
// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/hello', (req, resp) => {
    // resp.end('hello world')

    // 重定向
    // resp.redirect('https://www.baidu.com')

    // 下载响应
    // resp.download(__dirname + '/singers.json')

    // 返回json
    // resp.json({
    //     username: '张三',
    //     age: 18
    // })

    // 返回文件内容
    resp.sendFile(__dirname + '/2-form.html')
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

#### 7.2.4 路由模块化

对路由进行模块化，可以更好的管理路由。

`admin.js` 路由

```JavaScript
// 导入模块
const express = require('express')

// 创建应用服务
const router = express()

// 创建路由
router.get('/admin', (req, resp) => {
    resp.send('后台首页')
})

router.get('/setting', (req, resp) => {
    resp.send('个人设置')
})

module.exports = router
```

`home.js` 路由

```JavaScript
// 导入模块
const express = require('express')

// 创建应用服务
const router = express()

// 创建路由
router.get('/', (req, resp) => {
    resp.send('前台首页')
})

router.get('/home', (req, resp) => {
    resp.send('home')
})

module.exports = router
```

`index.js` 路由

```JavaScript
// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
// 导入路由
const admin = require('./routes/admin')
const home = require('./routes/home')

app.use(admin)
app.use(home)

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

### 7.3 中间件

> 中间件（`Middleware`）本质是一个回调函数。可以像路由回调一样访问请求对象（`request`），响应对象（`response`）。

> 中间件的作用就是使用函数封装公共操作，简化代码。

中间件有两种类型：

- 全局中间件
- 路由中间件

#### 7.3.1 全局中间件

> 每一个请求到达服务端之后都会执行全局中间件函数。

代码示例：

```JavaScript
/**
 * 需求：
 *  记录每个请求的 ip 和 url
 */

// 引入模块
const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用服务
const app = express()

// 创建全局路由中间件
let globalMiddleware = (req, resp, next) => {
    // 获取 url 和 ip
    let {ip, url} = req
    // 使用追加的方式记录到日志文件
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${ip} ${url} \r\n`)
    // 调用 next
    next()
}

// 使用全局路由中间件
app.use(globalMiddleware)

// 创建路由
app.get('/home', (req, resp) => {
    resp.send('前台首页')
})

app.get('/admin', (req, resp) => {
    resp.send('后台首页')
})

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

#### 7.3.2 路由中间件

如果只需要对某一些路由进行功能封装，则就需要路由中间件。
调用格式如下：

```JavaScript
app.get('/路径',`中间件函数`,(request,response)=>{
});

app.get('/路径',`中间件函数1`,`中间件函数2`,(request,response)=>{
});
```

代码示例：

```JavaScript
/**
 * 需求：
 *  针对 /admin  /setting 的请求, 要求 URL 携带 code=521 参数, 如未携带提示『暗号错误』
 */
// 引入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由中间件
let routerMiddleware = (req, resp, next) => {
    // 获取 code
    let { code } = req.query

    if (code !== '521') {
        resp.send('暗号错误')
        return;
    }
    next()
}

// 创建路由
app.get('/home', (req, resp) => {
    resp.send('前台首页')
})

app.get('/admin', routerMiddleware, (req, resp) => {
    resp.send('后台首页')
})

app.get('/setting', routerMiddleware, (req, resp) => {
    resp.send('个人设置')
})

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

#### 7.3.3 静态资源中间件

`express` 内置处理静态资源的中间件。

代码示例：

```JavaScript
// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/', (req, resp) => {
    resp.send('前台首页')
})

// 静态资源中间件设置
// '/' 路径默认访问 idnex.html，如果与动态资源的请求路径一致时，谁先加载就谁先返回
app.use(express.static(__dirname + '/public'))

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})
```

> 注意事项:
>
> - index.html 文件为默认打开的资源
> - 如果静态资源与路由规则同时匹配，谁先匹配谁就响应
> - 路由响应动态资源，静态资源中间件响应静态资源

### 7.4 `EJS` 模板引擎

> 模板引擎是分离**用户界面和业务数据**的一种技术。

> `EJS` 是一个高效的 `Javascript` 的模板引擎。官网: https://ejs.co/ 中文站：https://ejs.bootcss.com/

#### 7.4.1 `EJS` 初体验

下载安装 `EJS`

```Bash
npm i ejs --save
```

```JavaScript
// 安装 ejs
// npm i ejs
// 导入模块
const ejs = require('ejs')
const fs = require('fs')

// 声明变量
let text = '中国'
let weather = '艳阳高照，万里无云'
let str = fs.readFileSync(__dirname + '/1-html.html').toString()

let result = ejs.render(str, {text, weather})
console.log(result)

```

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>我爱你<%= text %></h1></h1>
    <h2><%= weather %></h1></h1>
</body>
</html>
```

#### 7.4.2 `EJS` 常用语法

字符串输出

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>我爱你<%= text %></h1></h1>
    <h2><%= weather %></h1></h1>
</body>
</html>
```

列表渲染

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <% list.forEach( item => {%>
            <li><%= item %></li>
        <% })%>
    </ul>
</body>
</html>
```

条件判断

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <% if (isLogin) { %>
        <span>欢迎回来</span>
    <% } else { %>
        <button>登录</button>  <button>注册</button>
    <% } %>
</body>
</html>
```

### 7.5 脚手架

> 脚手架：可以快速创建一个应用的框架，应用框架是指在项目开发过程中常用的目录或文件，比如：css 目录、js 目录等，以提高开发效率。

> `express-generator` 是实现 `express` 框架的脚手架。

安装 `express-generator`

```Bash
npm i express-generator -g
```

初始化

```Bash
express --view=ejs 项目包名
```

`package.json` 文件

```JSON
{
  "name": "15-express-generator",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1"
  }
}
```

进入项目，安装依赖

```Bash
npm i
```

启动项目

```Bash
npm start
```

浏览器访问，端口默认是：`3000`
`localhost:3000`

## 8. `MongoDB`

### 8.1 基础概念

> `MongoDB` 是一个基于**分布式文件存储**的数据库，官方地址：https://www.mongodb.com/,下载地址： https://www.mongodb.com/try/download/community

> `MongoDB` 操作语法与 `JavaScript` 类似，容易上手，学习成本低。

`MongoDB` 中有三个重要概念需要掌握：

- 数据库（`Database`） 是一个数据仓库，数据库服务下可以创建很多数据库，数据库中可以存放很多集合
- 集合（`Collection`） 集合类似于 `JS` 中的数组，在集合中可以存放很多文档
- 文档（`Document`） 文档是数据库中的最小单位，类似于 `JS` 中的对象

可以通过 `JSON` 文件来理解 `MongoDB` 中的概念：
一个 `JSON` 文件好比是一个数据库，一个 `Mongodb` 服务下可以有 `N` 个数据库；`JSON` 文件中的一级属性的数组值好比是集合；数组中的对象好比是文档对象中的属性，有时也称之为字段。

一般情况下，一个项目使用一个数据库，一个集合会存储同一种类型的数据。

### 8.2 操作命令

#### 8.2.1 数据库命令

显示所有的数据库

```Bash
show dbs
```

切换到指定的数据库，如果数据库不存在会自动创建数据库

```Bash
use 数据库名
```

显示当前所在的数据库

```Bash
db
```

删除当前数据库

```Bash
use 库名
db.dropDatabase()
```

#### 8.2.2 集合命令

创建集合

```Bash
db.createCollection('集合名称')
```

显示当前数据库中的所有集合

```Bash
show collections
```

删除某个集合

```Bash
db.集合名.drop()
```

重命名集合

```Bash
db.集合名.renameCollection('newName')
```

#### 8.2.3 文档命令

插入文档

```Bash
db.集合名.insert(文档对象)
```

查询文档

```Bash
db.集合名.find(查询条件)
```

`_id` 是 `MongoDB` 自动生成的唯一编号，用来唯一标识文档

更新文档

```Bash
db.集合名.update(查询条件,新的文档)
db.集合名.update({name:'张三'},{$set:{age:19}})
```

删除文档

```Bash
db.集合名.remove(查询条件)
```

### 8.3 `Mongooose`

#### 8.4.1 介绍与使用

> `Mongoose` 是一个 **对象文档模型库**，可以方便使用代码操作 `MongoDB` 数据库,官网 http://www.mongoosejs.net/。

代码示例：

```JavaScript
// 1.导入 mongoose
const mongoose = require('mongoose')

// 设置 strictQuery 为 true
mongoose.set('strictQuery', true)

// 2.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 3.设置连接成功的回调函数
mongoose.connection.once('open', () => {
    // 创建新文档

    // 1、创建文档的结构模型
    let bookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 2、创建文档模型对象，用于操作文档
    // book 就是集合名，mongoose 会默认加上 s,在mongodb数据库中显示的是 books
    let bookModel = mongoose.model('book', bookSchema);

    // 3、操作文档-新增
    bookModel.create({
        name: "海边的卡夫卡",
        author: '树上春树',
        price: 49
    }, (err, data) => {
        // 判断是否有错误
        if (err) {
            console.log('文档新增失败', err)
            return;
        }
        console.log('文档新增成功', data)
    });

    console.log('连接成功')
})

// 4.设置连接失败的回调函数
mongoose.connection.on('error', () => {
    console.log('连接失败')
})

// 5.设置连接关闭的回调函数
mongoose.connection.on('close', () => {
    console.log('连接关闭')
})
```

#### 8.4.2 字段操作

文档结构可选的常用字段类型列表
| 类型 | 描述 |
| -- | -- |
| `String` | 字符串 |
| `Number` | 数字 |
| `Boolean` | 布尔值 |
| `Array` | 数组，也可以使用 `[]` 来标识 |
| `Date` | 日期 |
| `Buffer` | `Buffer` 对象 |
| `Mixed` | 任意类型，需要使用 `mongoose.Schema.Types.Mixed` 指定 |
| `ObjectId` | 对象 `ID`，需要使用 `mongoose.Schema.Types.ObjectId` 指定 |
| `Decimal128` | 高精度数字，需要使用 `mongoose.Schema.Types.Decimal128` 指定 |

`Mongoose` 有一些内建验证器，可以对字段值进行验证

必填项

```JSON
name: {
    type: String,
    // 设置是否必填
    // name: ValidatorError: Path `name` is required.
    required: true
}
```

默认值

```JSON
author: {
    type: String,
    // 设置默认值
    default: '匿名'
}
```

枚举值

```JSON
tages: {
    type: String,
    // 枚举
    // tages: ValidatorError: `架空` is not a valid enum value for path `tages`.
    enum: ['言情', '历史', '励志']
}
```

唯一值

```JSON
name: {
    type: String,
    // 是否唯一
    unique: true
}
```

`unique` 需要**重建集合**才能有效果。

> 永远不要相信用户的输入!

#### 8.4.3 增删改查

插入一条

```JavaScript
bookModel.create({
    name: "海边的卡夫卡",
    author: '树上春树',
    price: 49
}, (err, data) => {
    // 判断是否有错误
    if (err) {
        console.log('文档新增失败', err)
        return;
    }
    console.log('文档新增成功', data)
});
```

批量插入

```JavaScript
bookModel.insertMany([{
        name: '西游记',
        author: '吴承恩',
        price: 19.9,
    }, {
        name: '红楼梦',
        author: '曹雪芹',
        price: 29.9,
    }, {
        name: '三国演义',
        author: '罗贯中',
        price: 25.9,
    }, {
        name: '水浒传',
        author: '施耐庵',
        price: 20.9,
    }, {
        name: '活着',
        author: '余华',
        price: 19.9,
    }, {
        name: '狂飙',
        author: '徐纪周',
        price: 68,
    }, {
        name: '大魏能臣',
        author: '黑男爵',
        price: 9.9,
    },
    {
        name: '知北游',
        author: '洛水',
        price: 59,
    }, {
        name: '道君',
        author: '跃千愁',
        price: 59,
    }, {
        name: '七煞碑',
        author: '游泳的猫',
        price: 29,
    }, {
        name: '独游',
        author: '酒精过敏',
        price: 15,
    }, {
        name: '大泼猴',
        author: '甲鱼不是龟',
        price: 26,
    },
    {
        name: '黑暗王者',
        author: '古羲',
        price: 39,
    },
    {
        name: '不二大道',
        author: '文刀手予',
        price: 89,
    },
    {
        name: '大泼猴',
        author: '甲鱼不是龟',
        price: 59,
    },
    {
        name: '长安的荔枝',
        author: '马伯庸',
        price: 45,
    },
    {
        name: '命运',
        author: '蔡崇达',
        price: 59.8,
    },
    {
        name: '如雪如山',
        author: '张天翼',
        price: 58,
    },
    {
        name: '三体',
        author: '刘慈欣',
        price: 23,
    },
    {
        name: '秋园',
        author: '杨本芬',
        price: 38,
    },
    {
        name: '百年孤独',
        author: '范晔',
        price: 39.5,
    },
    {
        name: '在细雨中呼喊',
        author: '余华',
        price: 25,
    },
], (error, data) => {
    if (error) {
        console.log('批量新增失败', error)
        return
    }
    console.log('批量新增成功')
})
```

删除一条数据

```JavaScript
bookModel.deleteOne({name: '西游记'}, (error, data) => {
    if (error) {
        console.log('删除文档失败', data)
        return
    }
    console.log('删除文档成功', data)
})
```

批量删除

```JavaScript
bookModel.deleteMany({
    name: '海边的卡夫卡'
}, (error, data) => {
    if (error) {
        console.log('批量删除失败', error)
        return
    }
    console.log('批量删除成功', data)
})
```

更新一条数据

```JavaScript
bookModel.updateOne({
    name: '海边的卡夫卡'
}, {
    name: '西游记',
    author: '吴承恩',
    price: 59
}, (error, data) => {
    if (error) {
        console.log('更新文档失败', error)
        return;
    }

    console.log('更新文档成功', data)
})
```

批量更新数据

```JavaScript
 bookModel.updateMany({
    name: '海边的卡夫卡'
}, {
    price: 89
}, (error, data) => {
    if (error) {
        console.log('批量更新文档失败', error)
        return
    }
    console.log('批量更新文档成功', data)
})
```

查询一条数据

```JavaScript
bookModel.findOne({name: '西游记'}, (error, data) => {
    if (error) {
        console.log('读取单个文档错误', error)
        return
    }
    console.log('读取单个文档成功', data)
})
```

批量查询数据

```JavaScript
bookModel.find({name: '西游记'}, (error, data) => {
    if (error) {
        console.log('文档读取错误', error)
        return;
    }
    console.log('文档读取成功', data)
})
```

#### 8.4.4 条件控制

在 `MongoDB` 不能 `>`、`<`、`>=`、`<=`、`!==` 等运算符，需要使用替代符号：

`>` 使用 `$gt`
`<` 使用 `$lt`
`>=` 使用 `$gte`
`<=` 使用 `$lte`
`!==` 使用 `$ne`

```JavaScript
// 获取价格 小于 20 的图书
bookModel.find({price: {$lt: 20}}, (error, data) => {
    if (error) {
        console.log('文档读取错误', error)
        return;
    }
    console.log('文档读取成功', data)
})
```

逻辑运算
`$or` 逻辑或的情况

```JavaScript
//曹雪芹 或者 余华的书
bookModel.find({
    $or: [
        {
            author: '曹雪芹'
        },
        {
            author: '余华'
        }
    ]
}, (error, data) => {
    if (error) {
        console.log('文档读取错误', error)
        return
    }
    console.log('文档读取成功', data)
})
```

`$and` 逻辑与的情况

```JavaScript
//价格大于等于 30 且小于 70
bookModel.find({
    $and: [
        {
            price: {
                $gte: 30
            }
        }, {
            price: {
                $lt: 70
            }
        }
    ]
}, (error, data) => {
    if (error) {
        console.log('文档读取错误', error)
        return;
    }
    console.log('文档读取成功', data)
})
```

正则匹配
条件中可以直接使用 `JS` 的正则语法，通过正则可以进行模糊查询

```JavaScript
//正则表达式, 搜索书籍名称中带有 `三` 的图书
let queryCondition = '三'
bookModel.find({name: /三/}, (error, data) => {
    if (error) {
        console.log('文档读取错误', error)
        return;
    }
    console.log('文档读取成功', data)
})

bookModel.find({name: new RegExp(queryCondition)}, (error, data) => {
    if (error) {
        console.log('文档读取错误', error)
        return;
    }
    console.log('文档读取成功', data)
})
```

#### 8.4.5 个性化读取

字段筛选

```JavaScript
// 只查询 书名 作者
// 1:查询 0:不查询
bookModel.find().select({name: 1, author: 1, _id: 0}).exec((error, data) => {
    if (error) {
        console.log('文档读取错误', error)
        return
    }
    console.log('文档读取成功', data)
})
```

数据排序

```JavaScript
// 对数据进行排序
// 1:升序 -1:降序
bookModel.find({author: '余华'}).select({name: 1, price: 1}).sort({price: -1}).exec((error, data) => {
    if (error) {
        console.log('文件读取错误', error)
        return
    }
    console.log(data)
})
```

数据截取

```JavaScript
// 数据列表集合截取
// 可用于分页
bookModel.find()
    .select({name: 1, author: 1, _id: 0})
    .sort({price: -1})
    .skip(2)
    .limit(3)
    .exec((error, data) => {
        if (error) {
            console.log('文件读取错误', error)
            return
        }
        console.log(data)
    })
```

## 9. 接口

### 9.1 `RESTful API`

`RESTful API` 是一种特殊风格的接口，主要特点有如下几个：

- `URL` 中的路径表示资源 ，路径中不能有动词 ，例如 `create` , `delete` , `update` 等这些都不能有
- 操作资源要与 `HTTP` 请求方法对应
- 操作结果要与 `HTTP` 响应状态码对应

规则示例：
| 操作 | 请求类型 | URL |
| -- | -- | -- |
| 新增歌曲 | `POST` | `/song` |
| 删除歌曲 | `DELETE` | `/song/10` |
| 修改歌曲 | `PUT` | `/song/10` |
| 修改歌曲 | `PATCH` | `/song/10` |
| 获取所有歌曲 | `GET` | `/song` |
| 获取单个歌曲 | `GET` | `/song/10` |

### 9.2 `json-server`

> `json-server` 本身是一个 `JS` 编写的工具包，可以快速搭建 `RESTful API` 服务。

官方地址: https://github.com/typicode/json-server

操作步骤：
全局安装 `json-server`

```Bash
npm i -g json-server
```

创建 `JSON` 文件（`db.json`），编写基本结构

```JSON
{
    "song": [
        { "id": 1, "name": "干杯", "singer": "五月天" },
        { "id": 2, "name": "当", "singer": "动力火车" },
        { "id": 3, "name": "不能说的秘密", "singer": "周杰伦" }
    ]
}
```

以 `JSON` 文件所在文件夹作为工作目录，执行如下命令

```Bash
json-server --watch db.json
```

默认监听端口为 `3000`

## 10. 会话控制

> 所谓会话控制就是对会话进行控制。`HTTP` 是一种无状态的协议，它没有办法区分多次的请求是否来自于同一个客户端，无法区分用户而产品中又大量存在的这样的需求，所以我们需要通过**会话控制**来解决该问题。

常见的会话控制技术有三种：

- `cookie`
- `session`
- `token`

### 10.1 `cookie`

> `cookie` 是 `HTTP` 服务器发送到用户浏览器并保存在本地的一小块数据，**保存在浏览器端**的一小块数据且是按照域名划分保存的。

`express` 中可以使用 `cookie-parser` 来进行对 `cookie` 的操作。

示例代码：

```JavaScript
// 导入express
const express = require('express')
const cookieParser = require('cookie-parser')

// 创建应用对象
const app = express()
app.use(cookieParser())

// 创建路由
app.get('/', (req, resp) => {
    resp.send('home')
})

// 设置cookie
app.get('/set-cookie', (req, resp) => {
    // 在浏览器关闭时会销毁
    // resp.cookie('name', 'zhangsan')

    // 设置 cookie 的过期时间。设置一分钟以后过期
    resp.cookie('name', 'lisi', {maxAge: 60 * 1000})

    resp.send('hello world')
})

// 获取 cookie
app.get('/get-cookie', (req, resp) => {
    console.log(req.cookies)
    resp.send(`欢迎您${req.cookies.name}`)
})

// 删除 cookie
app.get('/remove-cookie', (req, resp) => {
    resp.clearCookie('name')
    resp.send('删除cookie成功')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务启动成功')
})
```

> 不同浏览器中的 `cookie` 是相互独立的，不共享。

### 10.2 `session`

> `session` 是保存在**服务器端**的一块儿数据 ，保存当前访问用户的相关信息。

`express` 中可以使用 `express-session` 对 `session` 进行操作。
示例代码：

```JavaScript
// 引入模块
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')

// 创建应用服务
const app = express()
// 设置 session 的中间件
app.use(session({
    // 设置 cookie 的 name，默认值是：connect.sid
    name: 'sid',
    // 参与加密的字符串（又称签名）  加盐
    secret: '123456',
    // 是否为每次请求都设置一个cookie用来存储session的id
    saveUninitialized: false,
    // 是否在每次请求时重新保存session  20 分钟    4:00  4:20
    resave: true,
    store: MongoStore.create({
        //数据库的连接配置
        mongoUrl: 'mongodb://127.0.0.1:27017/test'
    }),
    cookie: {
        // 开启后前端无法通过 JS 操作
        httpOnly: true,
        // 这一条 是控制 sessionID 的过期时间的！！！ 5分钟过期
        maxAge: 5 * 60 * 1000
    }
}))

// 创建路由
app.get('/', (req, resp) => {
    resp.send('home')
})

// 登录时设置 session
app.get('/login', (req, resp) => {
    // 校验一下用户名密码是否正确
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        // 设置 session 信息
        req.session.username = req.query.username
        req.session.uid = '258aefccc'
        resp.send('登录成功')
    } else {
        resp.send('登录失败')
    }
})

// 获取 session
app.get('/cart', (req, resp) => {
    // 检测 session 是否存在用户信息
    if (req.session.username) {
        resp.send(`欢迎您${req.session.username}`)
    } else {
        resp.send('请先登录')
    }
})

// 退出登录删除 session
app.get('/logout', (req, resp) => {
    req.session.destroy(() => {
        resp.send('成功退出登录')
    })
})

// 监听端口，启动服务
app.listen(3000)

```

**`session` 和 `cookie` 的区别**
`cookie` 和 `session` 的区别主要有如下几点：

- 存在的位置
  - `cookie`：浏览器端
  - `session`：服务端
- 安全性
  - `cookie` 是以明文的方式存放在客户端的，安全性相对较低
  - `session` 存放于服务器中，所以安全性**相对较好**
- 网络传输量
  - `cookie` 设置内容过多会增大报文体积，会影响传输效率
  - `session` 数据存储在服务器，只是通过 `cookie` 传递 `id`，所以不影响传输效率
- 存储限制
  - 浏览器限制单个 `cookie` 保存的数据不能超过 `4K`，且单个域名下的存储数量也有限制
  - `session` 数据存储在服务器中，所以没有这些限制

### 10.3 `token`

> `token` 是服务端生成并返回给 `HTTP` 客户端的一串加密字符串， `token` 中保存着用户信息。

`token` 的特点：

- 服务端压力更小
- 数据存储在客户端
- 相对更安全
- 数据加密
- 可以避免 `CSRF`（跨站请求伪造）
- 扩展性更强
- 服务间可以共享
- 增加服务节点更简单

`JWT`（`JSON Web Token`）是目前最流行的跨域认证解决方案，可用于基于 `token` 的身份验证
`JWT` 使 `token` 的生成与校验更规范，可以使用 jsonwebtoken 包 来操作 `token`.

代码操作：

```JavaScript
// 引入 jwt
const jwt = require('jsonwebtoken')

// 生成 token
// jwt.sign(用户数据，加密字符串，配置对象)
let token = jwt.sign({
    username: 'admin'
}, '123456', {
    // 单位秒 60秒后过期
    expiresIn: 60
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg1NTE5NTkzLCJleHAiOjE2ODU1MTk2NTN9.IP90SEMbkzaBGnxVDoq63IHWzQ8crbfapvYCylGZhhg
console.log(token)

// 校验 token
jwt.verify(token, '123456', (error, data) => {
    if (error) {
        console.log('token 校验失败', error)
        return
    }
    console.log(data)
})
```
