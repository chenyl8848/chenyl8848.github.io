# 推荐一个 AI 绘图工具！将草图变成精美的图片！

大家好，我是 `Java陈序员`。

要说 2023 年科技圈什么最火，当属 `ChatGPT`！自从 `ChatGPT` 爆火之后，各种 `AI` 工具层出不穷。`AI` 对话、`AI` 写文案、`AI` 写代码.....

今天给大家介绍一个 `AI` 在线绘图工具！只要简单的绘制草图，加上简短的文字描述，就能帮我们生成一张精美的图片。

我们先来体验一下！

我们先画一个猫的草图，然后输入文字描述：
![cat](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/create-center/ScribbleDiffusion/img-20231116092546.png)

点击生成按钮：
![catPhoto](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/create-center/ScribbleDiffusion/img-20231116092753.png)

这样就帮我们生成好了一张猫的图片了。

比如，我们简单描绘一下山脉的草图，并输入描述：

![mountain](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/create-center/ScribbleDiffusion/img-20231116093514.png)

这样一张精美的图片就帮我们呈现出来了。

再比如画一棵树：

![tree](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/create-center/ScribbleDiffusion/img-20231116093640.png)

如果对图片不满意，可以继续再生成！
![tree](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/create-center/ScribbleDiffusion/img-20231116093721.png)

生成图片与描述是息息相关的，描述的越好，相对应生成的图片就越符合需求！

所以大家在体验的时候，需要使用英语尽量的描述出所画草图的含义！

那么生成的图片要怎么保存呢？

我们可以点击底部的 `Copy link` 分享生成的图片链接。

也可以右键图片，选择**图片另存为**将图片下载下来。

我们也可以自己部署工具，操作非常简单！

## 安装部署

**首先需要准备：**

- `Node.js`
- `Replicate Api Token`

`Replicate Api Token` 的获取也很简单，进入如下地址可以直接获取：
```
https://replicate.com/
```


**拷贝一下代码：**
```bash
git clone https://github.com/replicate/scribble-diffusion.git
```

**在项目目录下新建 `.env.local` 配置文件：**

```bash
echo "REPLICATE_API_TOKEN=<your-token-here>" > .env.local
```

**安装依赖：**
```bash
npm install
```

**运行启动：**
```bash
npm run dev
```

**浏览器访问：**
```
http://localhost:3000
```

## 项目地址

```
https://github.com/replicate/scribble-diffusion
```


## 体验地址

```
https://scribblediffusion.com/
```


## 最后
推荐的开源项目已经收录到 `GitHub` 项目，欢迎 `Star`：
```
https://github.com/chenyl8848/great-open-source-project
```

或者访问网站，进行在线浏览：
```
https://chencoding.top:8090/#/
```

> 大家的点赞、收藏和评论都是对作者的支持，如文章对你有帮助还请点赞转发支持下，谢谢！



