---
title: Cursor 入门教程
date: 2025-07-20
category:
  - AI
tag:
  - AI 助手
---

# Cursor 入门教程

<!-- more -->

## 1. Cursor 概述、安装以及环境配置

### 1.1 概述

Cursor 是一款功能强大的 AI 优先代码编辑器，可增强开发工作流程。

主要提供三个核心方向：

- 深度集成 AI 模型，不是简单地接入模型，而是让 AI 充当了编译器的核心交互方式。支持代码块对话、项目级对话、模型自由选择。
- 强上下文理解能力，可以自动识别项目文件、代码块、错误信息等等，提供更直观准确的 AI 修改能力。
- 对话式开发体验，仅需用自然语言沟通，Cursor 就会根据指令完成布置的任务，使用者可以轻松扮演产品经理，让 Cursor 理解你的命令自行工作。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/1749179465178.png)

> 关注微信公众号：【Java 陈序员】，获取**开源项目分享、AI 副业分享、超 200 本经典计算机电子书籍等。**

**对比其他编辑工具来说**：

- 对比 VS Code：基于 Visual Studio Code 打造而成的 AI 编程工具，因此界面和基础操作与 VS Code 高度相似，无缝衔接
- 对比 JetBrains IDEA：Cursor 提供 AI 驱动的现代编码体验，可以取代 JetBrains IDE，JetBrains 程序员可能会感觉不同

### 1.2 安装使用

#### 1.2.1 安装

1、访问 Cursor 官网并单击**下载**按钮
```bash
https://cursor.com/
```

2、运行安装程序并等待安装完成

3、通过桌面快捷方式或从应用菜单启动 Cursor

#### 1.2.2 登录

1、点击**注册**或**登录**后，系统会提示您设置一个帐户。可以选择使用邮件，或者使用 Google 或 GitHub 账号登录。

> 如果第一次使用 Cursor，将获得 14 天的免费试用期。

2、登录后，送回 Cursor，然后就可以开始编码了。

#### 1.2.3 无限续杯

新注册的 Cursor 用户有着 14 天免费，50 次免费高级提问的额度，但是也很轻易就会达到上限。

Cursor 会通过检测用户的邮箱账号以及电脑的机器码进行识别，我们出于学习的意图，可以尝试在达到上限后绕过这些限制继续学习。

> 推荐进行付费使用，功能也会更强大！

- 准备新邮箱

​可以去 2925 邮箱注册一个账号，这个邮箱平台的一个优势是用户申请的邮箱之后，可以自行创建子邮箱。

比如，创建了 `CodeChen@2925.com` 这个邮箱，那么我们在 Cursor 申请账号的时候，可以使用 `CodeChen123@2925.com`、`CodeChenabc@2925.com`、`CodeChen666@2925.com` 等邮箱进行注册（也就是 CodeChen数字随意@2925.com），当使用这些子邮箱注册时，会在主邮箱中收到邮件，这样就可以无限制创建和使用邮箱。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250719165527.png)

2925 邮箱注册地址：
```bash
https://www.2925.com/
```

- 机器码识别破解

Cursor 的团队意识到了开发者会通过换邮箱的方式投机取巧，于是加入了**校验本机机器码**的环节。即使用户注册了一个新的邮箱，但是机器码所属的额度用完之后，也是不能继续免费了。

俗话说，你有张良计，我有过墙梯。有个开源项目 `cursor-free-vip` 针对 Cursor 的机器码识别问题，提供了重置机器码和快速注册新账号等功能。	

1、下载 `cusor-free-vip`
```bash
https://github.com/yeongpin/cursor-free-vip/releases
```

2、鼠标右键以管理员身份运行 `cusor-free-vip`

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250719165617.png)

3、输入 1，重置机器 ID

4、输入 2，自动在浏览器中打开 Cursor 注册页面，使用新邮箱重新注册

5、注册成功后，在 Cursor 中登录新账号

### 1.3 Cursor 设置

在 Cursor 中，具有 **Cursor Settings** 和 **Editor Settings** 两个不同的配置入口，分别用于管理 **AI 功能** 和 **编辑器基础设置**。

二者的区别如下：

| **对比项**       | **Cursor Settings**                    | **Editor Settings**                |
| ---------------- | -------------------------------------- | ---------------------------------- |
| **功能定位**     | 管理 AI 相关功能和 Cursor 特有设置     | 调整编辑器基础行为和外观           |
| **继承性**       | Cursor 独有功能 | 大部分继承自 VS Code（如主题设置） |
| **影响范围**     | 影响 AI 代码生成、分析、对话的效果     | 影响代码编辑体验（如排版、颜色）   |
| **典型配置示例** | 调整 AI 模型参数、代码库索引路径       | 修改字体、启用自动保存、更改主题   |
| **快捷键** | `Ctrl + Shift + J`       | `Ctrl + Shift + P`   |

#### 1.3.1 Cursor AI 配置

在 Cursor 中可通过页面右上角的设置按钮（齿轮图标）或者使用快捷键 `Ctrl + Shift + J` 打开 AI 设置。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250714170814.png)

以下是对 Cursor Settings 中各项配置的作用解释（不同版本的配置可能会不一样，但是都大同小异）：

- **General（常规）**：包含账户管理设置，进行登录、注册操作，实现配置在不同设备间的同步；支持一键迁移 VS Code 配置，快速迁移主题、快捷键等设置；还包括隐私配置管理。
- **Chat（对话模式）**：配置对话模式（Ask、Edit、Agent）的核心功能，对相关参数进行微调，比如调整代码补全的触发灵敏度、对话模式的快捷操作设置等。
- **Tab（智能助手）**：配置 Tab（智能助手）的核心功能。
- **Models（模型）**：允许用户选择不同的 AI 模型（有多个可用选项）；同时支持添加模型和配置模型访问的 API Key 等。
- **Tools（工具） & Integrations（集成）**：配置 Github、Slack 的集成，加强 AI 上下文关联；同时支持配置自定义的 MCP 服务。
- **Rules（规则） & Memories（记忆）**：配置制定代码检查规则，用来约束或指导 AI 的行为，如对 AI 生成的代码格式、语法规范等进行约束；以及配置记忆功能，记忆是在 AI 与你的对话过程中自动或手动记录的重要信息。
- **Indexing（索引） & Docs（文档）**：定义需要被索引的代码库路径，让 Cursor 的 AI 能理解代码上下文；配置文档地址，将第三方框架文档设置为上下文，AI 可以结合文档内容，给出更准确的解答和建议。
- **Beta（测试版）**：可启用或禁用测试功能，提供反馈等。用户能通过这里尝试 Cursor 的新功能，并帮助开发团队测试和改进这些尚未正式发布的特性 。

#### 1.3.2 Cursor 编辑器配置

使用快捷键 `Ctrl + Shift + P` 打开控制面板，输入 `Preferences: Open Settings (UI)`.

编辑器设置和 VS Code 的设置界面一致。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250714175033.png)

**在 Cursor 编辑器设置中，“User” 和 “Workspace” 存在以下差异**：

User（用户）

- 作用范围：User 设置是全局性的，应用于当前登录用户在所有工作空间中的操作。无论打开哪个项目或工作空间，这些设置都始终生效。
- 数据存储：User 设置存储在用户的配置文件中，与特定项目无关。当在不同设备上登录同一账号时，User 设置会同步，保证一致的使用体验。

Workspace（工作空间）

- 作用范围：Workspace 设置仅在特定的工作空间（一般对应一个项目文件夹 ）内有效。不同的工作空间可以有各自独立的设置，互不影响。
- 数据存储：Workspace 设置存储在工作空间根目录下的 `.vscode` 文件夹（Cursor 基于 VS Code，沿用类似结构）中，仅在该工作空间打开时生效。

#### 1.3.3 Cursor 汉化

Cursor 汉化步骤如下：

1. **打开扩展**：启动 Cursor 后，使用快捷键 `Ctrl + Shift + X`，左侧边栏会出现扩展商店界面。
2. **搜索并安装插件**：在搜索框输入**Chinese**或**中文**，一般选择下载量最高的**Chinese (Simplified) Language Pack for Visual Studio Code**，点击安装按钮进行安装。
3. **打开命令面板**：按下 `Ctrl + Shift + P`，输入 **Configure Display Language** 并回车，进入语言配置界面。
4. **选择中文并重启**：在弹出的语言列表中选择 "中文（简体）" 或 "zh-cn" ，保存设置后重启 Cursor.
5. **重启 Cursor**：此时界面将完全切换为中文，包括菜单、提示信息和设置选项。

### 1.4 迁移 VS Code 配置

Cursor 基于 VS Code 设计打造，如之前已经使用过 VS Code, 可将其中的配置迁移至 Cursor 中。

#### 1.4.1 一键导入

Curson 提供一键导入 VS Code 配置的功能，可以将当前电脑中 VS Code 的 Extensions 扩展、Themes 主题、Settings 设置、Keybindings 键绑定等配置导入到 Cursor 中。

在最新版的 Cursor 一开始安装中，可设置是否导入 VS Code 配置。

**VS Code 的配置文件默认位置为**：

- **Window 系统**：导入的是 `%appdata%\code\user\` 路径下的 `settings.json` 配置文件
- **MacOS 系统**：导入的是 `~/Library/Application Support/Code/User/` 路径下的配置内容
- **Linux 系统**: 导入的是 `~/.config/code/user/` 路径下的配置文件

> **注意**：并非所有 VS Code 扩展都与 Cursor 兼容。一些依赖 VS Code 特定 API 的插件，在导入时可能导致整个导入过程失败或部分功能（如主题显示）异常。

如在安装 Cursor 时未设置导入 VS Code 配置，可通过如下方式手动导入：

1. 打开 Cursor 设置中心（`Ctrl + Shift + J`）
2. 导航到 **General（常规）** --> **Preferences（首选项）**
3. 在 **Importing Setiings from VS Code（从 VS Code 导入设置）** 下，单击 **Import（导入）** 按钮

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250714180903.png)

#### 1.4.2 手动迁移

如果是在不同电脑的配置，或者希望对设置进行更多控制，可以手动迁移配置文件。

- **导出配置文件**

1. 在 VS Code 中，打开命令面板（`Ctrl + Shift + P`）
2. 输入 **Preferences： Open Profiles （UI）**
3. 在左侧边栏上找到要导出的个人资料
4. 单击 **···** 图标并选择 **Export Profile**
5. 输入文件名称并回车
6. 选择将其导出到本地文件或 **GitHub Gist**

- **导入配置文件**

1. 在 Cursor 实例上，打开设置中心（`Ctrl + Shift + P`）
2. 搜索 **Preferences： Open Profiles （UI）**
3. 单击 **New Profile** 旁边的下拉菜单，然后单击 **Import Profile**
4. 粘贴 **GitHub Gist** 的 URL 或选择**选择文件**以上传本地文件
5. 单击对话框底部的 **Import** 以保存配置文件
6. 最后，在侧边栏中，选择新的配置文件，然后单击勾号图标将其激活

### 1.5 配置 Java 语言环境

在 Cursor 中进行 Java 开发，需要配置 JDK、Maven 等环境，同时需要安装插件，才能调试、运行 Java 应用程序。

#### 1.5.1 配置本地 JDK 和 Maven 配置

- **自动读取情况**

如果在系统环境变量中正确配置了 `JAVA_HOME` 和 `MAVEN_HOME` ，且环境变量配置无误（变量值准确指向 JDK 和 Maven 的安装目录 ），部分情况下 Cursor 能自动识别并应用这些配置。

比如，当你在 Cursor 中创建、运行或调试 Java 项目时，它可能会利用自动读取到的环境变量来找到对应的 JDK 和 Maven 位置，完成代码编译、项目构建等操作。

- **手动配置情况**

如果 Cursor 没有自动读取到 JDK 和 Maven 配置，就需要手动配置，步骤如下：

1、在 Cursor 输入快捷键 `Ctrl + Shift + P` 打开命令面板
2、输入 **Preferences: Open User Settings (JSON)** 并回车，打开 `settings.json` 文件
3、然后添加或修改以下内容：
```json
{
    ....
    // 配置 JDK
    "java.home": "D:/program/jdk1.8",
    // 或者使用如下属性配置 JDK
    "java.jdt.ls.java.home": "D:/program/jdk1.8",
    // 配置 JDK 的多版本，类似于在 IDEA 中的 Project Settings 中选择不同的 Java 运行环境，用于项目启动
    "java.configuration.runtimes": [
        {
            "name": "JavaSE-1.8",
            "path": "D:/program/jdk1.8",
            "default": true
        },
        {
            "name": "JavaSE-11",
            "path": "D:/program/jdk11",
        },
        {
            "name": "JavaSE-17",
            "path": "D:/program/jdk17"
        },
    ],
    // Maven 环境配置 
    "java.configuration.maven.userSettings": "D:/program/apache-maven-3.6.3/conf/settings.xml"
}
```

保存文件后，重启 Cursor 使配置生效。

#### 1.5.2 安装 Java 环境相关插件

在 Cursor 中使用 Java 开发，**即使已安装 JDK 和 Maven 并配置好环境变量，仍需安装 Java 扩展插件**以获得完整的开发体验。这些插件能将编辑器（如 Cursor/VS Code）从**普通文本编辑器**转变为**智能 IDE**，提供语法高亮、代码补全、错误提示、调试支持、Maven 项目管理等核心功能。

在 Cursor 中，使用快捷键 `Ctrl + Shift + X` 打开插件，安装插件 **Extension Pack for Java**.

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250715215013.png)

这是一个插件集合，而非具体单个插件。它集成了多个与 Java 开发相关的插件，安装后能为开发者在 Visual Studio Code 或 Cursor 等编辑器中提供完整的 Java 开发环境，涵盖从代码编写、调试、测试到项目管理等多方面功能。

**注意：选择由 Microsoft 发布的扩展包，并安装**。

插件集合中包含如下插件：

- **Language Support for Java(TM) by Red Hat**

提供语法高亮、智能代码补全、代码检查、代码格式化（`Shift + Option/Alt + F`）、代码导航以及重构支持等功能，辅助高效编写和优化 Java 代码。

- **Debugger for Java**

实现轻量级 Java 程序调试，可设置断点，调试时查看变量值、对象属性和调用栈，追踪程序执行流程以排查问题。

- **Maven for Java**

用于管理 Maven 项目，能创建新项目，管理项目依赖，执行 Maven 构建任务，如清理、编译、打包项目等。

- **Test Runner for Java**

支持 JUnit 和 TestNG 等测试框架，方便运行和调试 Java 测试用例，展示测试结果及详细日志，助力开发者定位问题。

- **Project Manager for Java**

可在编辑器中管理多个 Java 项目，实现快速切换，导入本地 Java 项目，可视化展示项目模块、包和文件结构。

- **Gradle for Java**

针对 Gradle 构建工具，能创建 Gradle 项目，运行 Gradle 任务，管理项目构建、测试流程，查看 Gradle 任务和工程依赖。

### 1.6 IDEA 中使用 Cursor

如果习惯于使用 IDEA 进行 Java 应用开发，又想借助 Cursor 的 AI 编程能力，可通过如下两款插件进行二者之间的切换。

- **Switch2Cursor**

顾名思义，这是一款 IDEA 插件，帮助开发者从 IDEA 跳转到 Cursor 编辑器。

1. 环境要求：已安装 Cursor、IDEA 2022.3 及以上版本

2. 安装：在 IDEA 的插件市场搜索 switch2cursor 进行安装

3. 配置 Cursor 路径：在 IDEA 中打开 `Settings → Tools → Switch2Cursor` 配置 Cursor Path 为你的 Cursor 可执行文件的路径，如：`D:\software\cursor\Cursor.exe` 需要替换成自己电脑的 Cursor 安装路径

4. 使用快捷键切换到 Cursor：
    - 打开项目：`Option/Alt + Shift + P`
    - 打开当前文件：`Option/Alt + Shift + O`

- **Switch2IDEA**

顾名思义，这是一款 Cursor 插件，帮助开发者从 Cursor 跳转到 IDEA 编辑器。

1. 安装：在 Cursor 扩展市场中搜索 "Switch2IDEA" 并安装

2. 配置 IDEA 路径：打开 Cursor 设置，点击 G`eneral → Editor → open editor settings → Extensions → Switch2IDEA → Idea Path`

3. 配置 IDEA 安装路径

4. 使用快捷键切换到 IDEA：
    - 打开项目：`Option/Alt + Shift + P`
    - 打开当前文件：`Option/Alt + Shift + O`

## 2. Cursor 三大核心 AI 功能

### 2.1 Tab 键：代码自动补全

Cursor 的 Tab 键具有强大的代码自动补全功能，基于 AI 模型，能根据代码上下文自动预测并生成代码补全建议和代码修复重构，还可用于代码自动联想等。

使用方式：使用 `Tab` 键接受建议，`Esc` 键拒绝建议，`Ctrl + →` 逐字部分接受建议（部分接受功能需要启用 **Partial Accepts** 配置项）。

#### 2.1.1 单行/多行代码补全

- 新建一个工具类，在类中写上注释**计算数组平均值**

```java
public class ArrayUtil {

    // 计算数组平均值
}
```

- 按 `Tab` 键，Cursor 自动生成代码

```java
public class ArrayUtil {

    // 计算数组平均值
    public static double average(int[] array) {
        if (array == null || array.length == 0) {
            return 0;
        }
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return (double) sum / array.length;
    }
}
```

#### 2.1.2 智能代码重写

- 已有代码如下：

```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 数组工具类
 * 
 * @author 
 * @version 1.0
 * @since 1.0
 */
public class ArrayUtil {

    // 计算数组平均值
    public static double average(int[] array) {
        if (array == null || array.length == 0) {
            return 0;
        }
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return (double) sum / array.length;
    }

    public void arrayFor() {    
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        List<Integer> evenNumbers = new ArrayList<>();
        for (int num : numbers) {
            if (num % 2 == 0) {
                evenNumbers.add(num);
            }
        }
    }
}
```

- 使用 Stream 重构 `arrayFor` 方法，按 `Tab` 键，自动补全：

```java
// 使用 stream 
// 光标放在方法块的任意位置，按 Tab 键
public void arrayFor() {    
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    List<Integer> evenNumbers = numbers.stream().filter(num -> num % 2 == 0).collect(Collectors.toList());
}
```

#### 2.1.3 自动联想

新建一个 POJO 类，输入几个变量后，Cursor 会自动联想，使用 `Tab` 键快速生成代码。

``` java
public class Person {
    // 姓名
    private String name;
    // 年龄
    private int age;
    // 性别
    private String gender;
    // Cursor 会继续联想变量类型，按 Tab 键快速生成
}
```

#### 2.1.4 Tab 相关配置

Tab 相关配置修改位置：`Cursor Settings > Tab`.

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717113444.png)

- **Cursor Tab**：启用/禁用 Tab 功能。相当于“总开关”，启用后才能用 Tab 键触发 AI 代码建议（如多行补全、智能续写）；取消勾选则 Tab 仅作普通缩进。
- **Partial Accepts**：部分建议功能，启用后，可使用 `Ctrl + →` 逐个单词接受 AI 建议。比如 AI 建议 `const fullName = firstName + " " + lastName;`，但你只想用 `firstName + ` 部分，就可通过该快捷键拆分接受。
- **Suggestions While Commenting**：控制是否在**注释里也提供 Tab 建议**。写注释时，Tab 键同样会帮你补全思路。如输入 `// 实现冒泡排序的步骤：`，按 Tab 自动续写步骤说明。
- **Whitespace Only Suggestions**：控制是否显示仅包含空白（空格、换行、格式化代码）的 AI 建议。这个配置项决定了当按 Tab 时，是否让那些**只调整空格、换行、缩进（没有实际代码逻辑变化）**的建议显示出来。

比如，如下代码格式不齐整：
  
```java
public class Demo {
public void test() {
System.out.println("Hello");
    if (true) {
System.out.println("World");
    }
}
}
```
  
1. 勾选：把光标放在混乱的代码里（比如 `public void test() {` 这行后面） Tab 会有修改建议
2. 不勾选：把光标放在混乱的代码里（比如 `public void test() {` 这行后面） Tab 不会有修改建议

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717150636.png)
  
- **Imports**：在 TypeScript 中，写代码时缺模块，按 Tab 键自动帮你导入模块依赖。
- **Auto Import for Python**：为 Python 开启导包功能（测试版），按 Tab 键自动导入缺失模块。

### 2.2 Chat: 对话模式

Chat（之前称**Composer**）是 Cursor 的 AI 助手，位于编辑器的侧边栏中，通过自然语言与代码库进行交互。

可以提出问题、请求代码编辑、获取终端命令建议等。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717165357.png)

**Cursor Chat 主要功能**：

- Chat 能够了解代码库并对其进行更改，这是实现新功能、新需求的强大方法
- Chat 通过深入了解代码库以及每个组件如何组合在一起，帮助你重构代码库
- Chat 可以根据输入的需求，从零开始进行项目搭建，包括创建项目结构、安装依赖项、甚至编写初始代码等，尽快开始业务编码
- Chat 也可以根据当前项目的错误信息，进行错误定位和错误代码直接调整解决

#### 2.2.1 快速开始

使用 `Ctrl + L` 打开侧边栏中的聊天窗口，用中文文字输入请求，Cursor 将做出相应的响应。

**注意**：与 Chat 对话时，建议采用清晰、具体的语言格式，最好包含任务类型、上下文描述和具体要求。

以下是几个参考模板：

- **代码生成类**

```markdown 
[任务类型]：请生成一个 {功能描述} 的 {编程语言/框架} 实现

[具体要求]：
1. 使用 {特定技术/库}
2. 包含 {特定功能点}
3. 符合 {编码规范/设计模式}
```

示例：

```markdown 
请生成一个学习计划页面的 HTML + CSS + JavaScript 实现

[具体要求]：
1. 使用Tailwind CSS v3 和 Font Awesome
2. 包含任务添加、编辑、删除功能
3. 包含日历视图展示学习计划
4. 包含学习进度可视化图表
5. 符合现代UI设计原则和响应式设计
6. 具有平滑的动画和交互效果
```
  
- **代码修改类**

```markdown 
[任务类型]：请帮我修改 {上下文：具体文件/代码片段}，实现 {预期功能}

[当前问题]：{现有的错误/不足描述}

[具体要求]：
1. 保持 {现有功能/结构} 不变
2. 使用 {特定方法/技术} 改进
3. 修复 {具体错误/警告}
```

示例：

```markdown 
请帮我修改当前的 React 组件，优化列表渲染性能。
当前问题：滚动时列表卡顿，存在明显性能问题。
要求：
1. 保持现有 UI 不变
2. 使用 React.memo 和虚拟列表技术优化
3. 添加性能监控日志
```

- **代码解释类**

```markdown 
[任务类型]：请解释 {代码片段/功能模块} 的 {具体方面}

[上下文信息]：{相关业务背景/技术栈}

[具体问题]：
1. {不理解的语法/逻辑}
2. {特定设计选择的原因}
3. {潜在的问题/优化点}
```

示例：

```markdown 
请解释这段 TypeScript 代码的泛型约束和类型推导逻辑。
上下文：这是一个用于数据验证的工具函数。
具体问题：
1. <T extends object> 这里为什么要加 extends object？
2. 类型推导是如何工作的？
3. 是否存在类型安全隐患？
```

- **流程自动化类**

```markdown 
[任务类型]：请创建一个自动化流程，实现 {目标描述}

[操作步骤]：
1. 从 {数据源} 获取 {数据类型}
2. 执行 {数据处理/转换操作}
3. 将结果保存到 {目标位置}
4. 触发 {后续操作/通知}

[具体要求]：
1. 使用 {特定工具/API}
2. 添加 {错误处理/重试机制}
3. 生成 {日志/报告}
```

示例：

```markdown 
请创建一个自动化流程，每天凌晨从 GitHub API 获取仓库星标数，保存到 Google Sheets 并生成趋势图。
要求：
1. 使用 GitHub REST API v3
2. 添加异常处理和邮件通知
3. 生成周/月增长趋势图表
```

- **命令行辅助类**

```markdown 
[任务类型]：请提供 {操作场景} 的 {操作系统} 命令

[具体需求]：
1. {执行的具体操作}
2. 包含 {特定参数/选项}
3. 处理 {特殊情况/错误}
```

示例：

```markdown 
请提供在 macOS 上批量压缩图片的命令行方案。
需求：
1. 将当前目录下所有 PNG/JPG 图片压缩 50%
2. 保留原始文件并添加 "-compressed" 后缀
3. 显示每个文件的压缩前后大小对比
```

**提示词技巧总结**：

1. **提供上下文**：提及项目语言、框架、业务背景等信息
2. **分点描述**：将复杂需求拆解为具体步骤或要求
3. **使用技术术语**：准确的术语能帮助 AI 更精准理解需求
4. **明确边界**：说明必须保留的现有功能或禁止的实现方式
5. **示例引导**：附上期望输出示例或参考代码风格

#### 2.2.2 Chat 三种模式

Chat 提供针对特定任务优化的不同模式：

1. Agent 代理模式（默认）: 全能模式，可以自主调用所有的 Search、Edit、Run 工具。它会主动规划任务、修改代码、运行命令，甚至在出错时自我修复。
2. Ask 对话模式：智能问答模式，可以自主调用所有 Search 工具，但不能编辑文件或运行终端命令。会根据你的问题，在代码库和网络中寻找答案，并以文本或代码块形式回复。
3. Manual 手动模式：纯手动模式，几乎不自主调用任何工具。它的行为完全由你的指令驱动，比如你用 @ 指令明确提供了哪个文件，它才会去读哪个文件。它更加可控，适合执行精准、小范围的修改任务。

##### 2.2.2.1 Agent 模式

Agent 是 Cursor 中的默认且最自主的模式，旨在以最少的指导处理复杂的编码任务。它启用了所有工具，可以自主探索代码库、阅读文档、联网搜索、编辑文件和运行终端命令以高效完成任务。

Agent 的能力总结：

- 独立探索项目代码，识别相关文件，并进行必要的更改
- 使用所有可用工具搜索、编辑、创建文件和运行终端命令
- 全面了解项目结构和依赖关系
- 将复杂任务分解为可管理的步骤并按顺序执行

生成和修改示例：

1、新建一个文件夹，并在 Cursor 中打开

2、使用 `Ctrl + L` 打开对话模式（默认 Agent 模式）

3、输入用例对话

```markdown 
使用 HTML、Css、Javascript 来实现一个贪吃蛇页面。
要求：
1. 要求有积分统计
2. 页面要有多种背景可以切换
3. 代码添加中文注释
4. 不能使用 var 只能使用 let 和 const 声明变量
```

4、发送需求，并等待生成代码

5、运行代码对话

```markdown 
将 Html 页面在 Chrome 浏览器打开
```

6、后续进行对话，进行代码调整或者添加新需求

```markdown 
添加开始游戏按钮，点击后才开始游戏
```

Agent 的配置选项：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717154153.png)

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717154217.png)

- Model（模型选择）：选择使用哪种大模型
- Keybindings（快捷键设置）： 为 Agent 模式设置快速开启快捷键（默认 `Ctrl + I`）
- Auto-run（自动运行）：当你让 Agent 修改代码后，自动执行相关命令（如编译、测试、运行），验证修改的正确性
- Auto-fix errors（自动修复）：当自动运行过程中出现错误（如编译失败、测试报错），Agent 会尝试分析错误信息并自动修复

错误调试和修改示例：

1、准备错误信息类

```java
public class ArrayDemo {
    public static void main(String[] args) {
        // 创建一个整数数组
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        
        // 使用 for 循环输出数组内容
        System.out.println("数组内容如下：");
        for (int i = 0; i < numbers.length; i++) {
            // 此处 i + 2 就会出现下角标越界错误
            System.out.println("第 " + (i + 1) + " 个元素是: " + numbers[i + 2]);
        }
    }
} 
```

2、运行时出现如下报错信息

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717154348.png)

3、对话解决错误信息：选中错误信息，使用快捷键打开 Chat 模式，输入描述【**根据错误信息，解决程序Bug**】

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717155025.png)

##### 2.2.2.2 Ask 模式

Ask 是 Chat 的**只读**模式，用于提出问题、探索和了解代码库。

Ask 是其他模式（Agent 和 Manual）所独有的，因为它默认不自动应用任何建议的更改，这使它成为一种**只读**模式，具有读取文件和其他上下文的完整能力，但不能自行进行任何更改。

适合在不想更改代码库或在实施之前使用 AI 规划解决方案的场景下使用。

如在 Ask 模式下给贪吃蛇添加多种游戏模式：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717160505.png)

Ask 的配置选项：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717161258.png)

- Model（模型选择）: 选择使用哪种大模型
- Keybindings（快捷键设置）：为 Ask 模式设置快速开启快捷键
- Search codebase（搜索代码库）: 是否允许 Cursor 搜索代码上下文，不需要手动 `@文件` 作为上下文

##### 2.2.2.3 Manual 模式

与 Ask 模式不同，Manual 模式不探索代码库或运行终端命令。

完全取决于具体说明和提供的上下文（例如，通过 `@文件名`），AI 生成修改建议后，还需要用户**手动点击应用**才会改动代码，而且通常是**单文件/局部代码调整**。

如给代码添加注释：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717163010.png)

Manual 的配置选项：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717163108.png)

#### 2.2.3 Chat 模式的其他细节

##### 2.2.3.1 代码编辑选项

当 Chat 建议更改代码时：

1、**Review changes**：在差异视图中查看建议的更改

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717171049.png)

2、**Apply**: 在**Ask/Manual** 模式下，使用**应用**按钮显式应用更改

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717171806.png)

3、**Accept/Reject（接受/拒绝）**：进行更改后，决定是保留还是放弃更改

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717171850.png)

##### 3.2.3.2 Checkpoints 数据还原

有些情况，需要恢复到代码库的**先前状态**。Cursor 通过在发出的每个请求以及每次 AI 更改的代码库时自动创建代码库的检查点（Checkpoints）来帮助解决这个问题，类似于 Git 版本管理中的回滚操作。

要恢复到之前的状态，可以：单击上一个请求的输入框中显示的 `Restore Checkpoint` 按钮。如下所示：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717172029.png)

注意：是恢复到本次对话之前的状态，不是本次对话产生的状态。

##### 2.2.3.3 历史和新建会话

可以通过 Chat 中的 `Show history` 图标按钮或者使用快捷键 `Ctrl + Alt + '`.

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717173823.png)

开启新任务、避免对话混乱、保留特定记录或解决误操作时，需要在 Cursor 的 Chat 新建会话。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717174007.png)

#### 2.2.4 Chat 相关配置说明

Chat 相关配置修改位置：`Cursor Settings > Chat`.

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250717174239.png)

- **Default new chat mode**：设置新 Chat 会话的默认模式。
- **Text Size**：调整 Chat 窗口消息文字大小，**Default** 是默认尺寸，可按需改显示效果。
- **Auto-Clear Chat**：勾选后，聊天面板闲置再打开时自动新建聊天，保持交互新鲜度，避免旧聊天堆积干扰。
- **Scroll to New Message**：新消息生成时自动滚动到聊天面板底部，无需手动翻阅，方便实时查看最新内容。
- **Completion Sound**：开启后，当 Agent 完成响应时播放音效。
- **To-Do List**：是否允许 Agent 使用待办事项列表来跟踪任务的进度。
- **Queue Message**：当启用时，且模型正在流式传输时，后续消息将排队并按照接收顺序发送。
- **Custom modes（BETA）**：允许创建自定义模式，可按需定制交互逻辑，尚在测试，探索个性化玩法。
- **Include Full-Folder Context**：是否允许当前项目文件夹的全部内容被包含在上下文中。
- **Web Search Tool**：是否允许 Agent 联网搜索信息。
- **Hierarchical Cursor Ignore**：启用后，`.cursorignore` 文件规则作用于所有子目录，修改后需要重启 Cursor.
- **Out-of-Context Edits in Manual mode**：手动模式下，允许聊天对当前上下文外的文件自动应用更改，拓展操作范围，处理跨文件任务更便捷。
- **Auto-Fix Lints**：是否允许在 Chat 中自动修复错误。
- **Auto-Accepts on Commit**：当文件被修改或提交（commit）时，系统会自动接受这些更改。

### 2.3 内联智能修改

内联智能修改（快捷键：`Ctrl + K`）功能是直接在编辑器窗口中生成新代码或编辑现有代码，适合精准修改代码内容。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718103046.png)

在 Cursor 中，将按 `Ctrl + K` 时出现的弹窗称为 **Prompt Bar**。它的工作原理类似于在指定代码文件中的 Chat 功能，可以在代码文件中指定区域输入，或使用 @ 引用其他上下文。

内联智能修改的三大功能：

- **内联生成**：如果在按 `Ctrl + K` 时未选择任何代码，Cursor 将根据在提示栏中输入的提示生成新代码。
- **内联编辑**：如需重构代码，选中要编辑的代码块，按 `Ctrl + K` 后在提示栏中输入需求信息，完成代码重构。
- **终端命令执行**：在终端中，按 `Ctrl + K` 后在提示栏中输入需求信息，生成脚本命令，然后运行操作。

#### 2.3.1 代码文件中使用

- **内联生成**

1、创建一个 `main.js` 文件，光标放文件末尾（无选中代码）

2、按 `Ctrl + K`，输入提示
```plain 
生成一个带点击动画的按钮组件，用 JavaScript 实现，点击后控制台打印次数
```


3、实现效果

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718103924.png)

- **内联编辑**

1、继续打开刚刚 `main.js` 

2、选中代码块，按 `Ctrl + K`，输入提示：
```plain 
添加注释和每行代码添加注释说明
```

3、实现效果
![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718104139.png)

#### 2.3.2 终端中使用

在 Cursor 中，内联智能修改功能除了能在代码文件中使用，还支持在终端（Terminal）中使用。

> 在 Cursor 中，可使用快捷键 `Ctrl` + 反引号键在编辑器底部打开终端窗口。

把光标定位在终端中，按 `Ctrl + K` 打开终端底部的提示栏。输入需求，然后生成脚本命令，使用 `Ctrl + Enter` 接受并运行命令，也可以通过按 `Esc` 拒绝命令。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718105535.png)

## 3. Cursor 精准上下文指定

在 Cursor 工具里，**上下文（Context）** 可理解为让 AI 准确理解需求、辅助编码的信息参考范围，是 AI 读懂代码、精准响应的关键。

### 3.1 Codebase Indexing 代码库索引

#### 3.1.1 概念和作用

打开项目文件夹时，每个 Cursor 实例都将初始化该工作区的索引。

初始索引设置完成后，Cursor 将自动为添加到工作区的任何新文件编制索引，以保证当前是最新的代码库上下文。

作用：

- 快速 “读懂” 你的项目结构（哪些是工具文件、哪些是业务逻辑）
- 定位相关代码（如搜索 `getUser` 时，知道优先查 `userService.js`）
- 理解代码关系（如 `Order` 类和 `Product` 类的关联）

AI 分析索引内容后，生成代码时会更贴合项目实际（如使用已有工具函数、遵循命名规范）。

#### 3.1.2 代码库索引配置和示例

代码库索引的配置位于：`Cursor Settings > Indexing & Docs`

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718105858.png)

测试示例：

```plain 
查看当前项目结构，并使用文字图形形式罗列出来
```

展示效果：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718110005.png)

#### 3.1.3 忽略文件配置

Cursor 会读取项目的代码库并为其编制索引以支持其功能。可以通过将 `.cursorignore` 文件添加到项目根目录来控制哪些文件被忽略和限制 Cursor 访问。

作用：

- **提升索引速度**：排除一些没有用的模块依赖、生成文件（如 `node_modules`、`dist`）
- **避免干扰**：某些配置文件可能包含敏感信息或与当前任务无关

配置 `.cursorignore` 忽略文件的两种方式：

- 在项目根目录下创建 `.cursorignore` 文件，并列出要忽略的目录和文件
- 使用 Cursor 配置快捷创建忽略文件 `Cursor Settings > Indexing & Docs > Ignored Files in .cursorignore`

忽略文件配置测试：

1、创建忽略文件

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718151547.png)

2、添加忽略文件配置

```plain 
# Add directories or file patterns to ignore during indexing (e.g. foo/ or *.csv)
main.js
ArrayDemo.class
```

3、测试

```bash
查看当前项目结构，并使用文字图形形式罗列出来
```

4、效果展示，可以看到对应的文件已经被忽略了

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718152006.png)

### 3.2 Rules 规则

#### 3.2.1 Rules 规则介绍

Rules 是给 Cursor AI 功能（规则适用于 Chat 和内联智能修改）生成的代码结果添加规则和限制，让 AI 生成的代码贴合团队规范，减少人工二次修改成本。

作用：

- 约束代码风格，如强制用驼峰命名、要求函数必须写注释
- 限定技术选型，如禁止使用某老旧库、优先用项目指定工具类
- 指定核心参数，如提前设置连接数据库的地址和账号密码等

**Rule 主要的配置方案有两种：**

| **维度**     | **项目规则（Project Rules）**                | **用户规则（User Rules）**           |
| ------------ | -------------------------------------------- | ------------------------------------ |
| **作用范围** | 仅对当前项目生效，团队成员共享相同规则       | 对所有项目生效，个人专属配置         |
| **存储位置** | 项目根目录下的 `.cursor/rules/随意.mdc` 文件 | 用户配置目录（如 `~/.cursor/rules`） |
| **同步方式** | 随项目代码提交到版本库（如 Git），团队共享   | 仅本地生效，不随项目同步             |
| **适用场景** | 统一团队编码规范（如函数注释格式、依赖版本） | 个人习惯（如快捷键、AI 响应风格）    |

**注意：项目规则和用户规则同时存在并且规则冲突，项目规则优先级更高**。

#### 3.2.2 项目规则配置

1、项目下创建规则文件

可通过如下两种方式进行创建：

- 手动创建规则文件：`项目/.cursor/rules/随意命名.mdc`
- 使用快捷命令方式创建：使用 `Ctrl + Shift + P` 唤起命令面板，然后输入**New Cursor Rule**，输入规则文件名，进行创建

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718153355.png)

2、编写项目规则文件

```markdown
---
description: "团队前端项目规范"
priority: 1000
---

# 代码风格
1. 函数必须包含 JSDoc 注释
2. 禁止使用 `var`, 统一用 `const`/`let`
3. 函数命名必须添加 code_ 前缀，例如：code_login

# 依赖管理
- 优先使用项目内已有的工具函数（如 `utils/request`）
- 禁止引入低版本的 lodash（<4.0.0）
```

规则文件的语法后文会介绍。

3、创建一个 `test.js` 文件，使用内联智能修改功能生成代码
```plain 
生成两个方法一个登录一个注册
```

4、项目规则生效效果展示

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718153920.png)

#### 3.2.3 用户规则配置

1、用户规则在 **Cursor Settings > Rules & Memories** 中定义

2、添加规则内容

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718154343.png)

3、用户规则不支持 MDC, 只是纯文本

#### 3.2.4 MDC 语法

Cursor 的 MDC（Markdown with Cursor）语法是专门为编写项目规则设计的轻量级格式，结合了 Markdown 的可读性和元数据配置能力。

##### 3.2.4.1 MDC 文件组成部分

1、前置元数据（Frontmatter）

- 用 `---` 包裹的 YAML 格式配置
- 定义规则的基本属性（如作用范围、优先级）

2、规则内容（Markdown 正文）：用 Markdown 语法写具体规则

##### 3.2.4.2 前置元数据

```markdown 
---
# 官方约定字段（推荐用，AI 更易理解）
description: "前端项目规则"
globs: "src/**/*.tsx"
priority: 1000

# 自定义字段（自己或团队约定含义）
author: "技术团队"
review_date: "2025-06-04"
special_rule: "仅周一至周五生效"
---
```

常用元数据字段

| 字段          | 作用                                       | 示例                     |
| ------------- | ------------------------------------------ | ------------------------ |
| `description` | 描述规则用途，指导 AI 如何应用规则         | `"前端组件编码规范"`     |
| `globs`       | 指定规则生效的文件范围（支持 glob 语法）   | `"src/**/*.{js,ts,jsx}"` |
| `priority`    | 规则优先级（数值越大越优先），解决规则冲突 | `1000`                   |
| `version`     | 规则版本号（可选）                         | `"1.0.0"`                |

##### 3.2.4.3 规则内容（Markdown 正文）

用 Markdown 的标题、列表、代码块等语法写具体规则，常见结构：

- 代码风格规则（最常用）

```markdown 
# 一、代码风格
1. 函数必须包含 JSDoc 注释  
   - 至少包含 `@param` 和 `@return` 描述  
2. 变量命名必须使用驼峰命名法（camelCase）  
3. 每行代码长度不超过 120 个字符  

# 二、技术选型
- 禁止直接使用原生 fetch，必须通过项目封装的 request 工具  
- 优先使用 React Hooks 而非 Class 组件  
```

- 安全约束规则

```markdown
# 安全规范
1. 禁止使用 eval() 函数  
2. SQL 查询必须使用参数化查询，防止注入攻击  
3. 敏感信息（如 API 密钥）必须从环境变量读取  
```

- 特殊语法：引用项目文件

用 `@file` 引用项目内的配置文件，让 AI 参考：

```markdown
# 工具链配置
1. ESLint 规则必须符合 @file .eslintrc.js  
2. 测试用例必须遵循 Jest 框架规范  
```

##### 3.2.4.4 完整示例（TypeScript 项目规则）

```markdown
---
description: "TypeScript 项目编码规范"
globs: "src/**/*.ts"
priority: 1000
---

# 一、基础规范
1. 所有文件必须使用 UTF-8 编码  
2. 统一使用 2 空格缩进  

# 二、类型约束
1. 禁止使用隐式 any 类型  
   - 示例：`const num: number = 123`（显式）  
   - 禁止：`const num = 123`（隐式）  
2. 接口命名必须以 `I` 开头（如 `interface IUser`）  

# 三、项目约束
- 所有 HTTP 请求必须通过 @file src/utils/request.ts 封装的工具  
- 状态管理必须使用 Redux Toolkit，禁止直接修改 state  
```

### 3.3 @ 符号

在 Cursor 的 Chat 和内联智能修改功能中可以使用 @ 符号中引用代码、文件、文档和其他上下文的指南，直接更具体的指定上下文环境。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718154745.png)

以下是所有可用 @ 符号的列表：

- @Files - 引用项目中的特定文件
- @Folders - 引用整个文件夹以获得更广泛的上下文
- @Code - 引用代码库中的特定代码片段或符号
- @Docs - 访问文档和指南
- @Git - 访问 git 历史记录和更改
- @Past Chats - 使用汇总的 Composer 会话
- @Rules - 使用规则
- @Terminals - 使用终端
- @Lint Errors - 引用 lint 错误（仅限 Chat）
- @Web- 参考外部 Web 资源和文档

#### 3.3.1 @Files 使用和测试

1、准备测试文件 `test.js`

```javascript
/**
 * 用户登录方法
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns {Promise<Object>} 登录结果
 */
function code_login(username, password) {
    return new Promise((resolve, reject) => {
        if (!username || !password) {
            reject({ success: false, message: '用户名和密码不能为空' });
            return;
        }
        // 模拟登录逻辑
        setTimeout(() => {
            if (username === 'admin' && password === '123456') {
                resolve({ success: true, message: '登录成功', token: 'mock_token_123' });
            } else {
                reject({ success: false, message: '用户名或密码错误' });
            }
        }, 500);
    });
}

/**
 * 用户注册方法
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns {Promise<Object>} 注册结果
 */
function code_register(username, password) {
    return new Promise((resolve, reject) => {
        if (!username || !password) {
            reject({ success: false, message: '用户名和密码不能为空' });
            return;
        }
        // 模拟注册逻辑
        setTimeout(() => {
            if (username.length < 3) {
                reject({ success: false, message: '用户名长度不能少于3位' });
            } else if (password.length < 6) {
                reject({ success: false, message: '密码长度不能少于6位' });
            } else {
                resolve({ success: true, message: '注册成功', user: { username } });
            }
        }, 500);
    });
}
```

2、测试 @Test.js 对话

```bash
总结下 @test.js 里面的方法
```

3、查看对话结果

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718155915.png)

#### 3.3.2 @Code 使用和测试

1、还是使用前文的 `test.js` 文件

2、测试 @Code 对话

```bash
帮我逐行解释下 @zwf_register 代码的含义！并且最终在源文件中添加注释！
```

3、查看对话结果

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718160324.png)

#### 3.3.3 @Docs 使用和测试

1、@Docs 作用说明

`@Docs` 将 Cursor 连接到来自常用工具和框架的官方文档，当需要以下内容的最新权威信息时，请使用它：

- API 参考：函数签名、参数、返回类型
- 入门指南：设置、配置、基本用法
- 最佳做法：源中的推荐模式
- 特定于框架的调试：官方故障排除指南

2、@Docs 文档配置

可以通过 `Cursor Settings > Indexing & Docs` 来进行文档索引配置。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718162031.png)

点击 **Add Doc** 输入文档地址，如添加 MyBatis-Plus 官网地址：
```bash
https://baomidou.com/introduce/
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718163700.png)

- name：一般用于标识文档的名称、简称或唯一识别名，方便在 Cursor 中区分不同文档配置。比如这里填 `MyBatis-Plus`，就是用框架名称作为文档标识，后续可通过这个 `name` 快速找到、关联对应的文档配置。
- prefix：通常指文档 URL 的前缀部分，可用于拼接完整文档路径，或作为统一的基础地址标识。如 `https://baomidou.com`, 该框架文档介绍板块的基础前缀，后续若要拼接具体文档子页面路径（如某个功能详细说明路径 ），可以基于这个 `prefix` 去扩展，让文档地址管理更规整。
- entrypoint：一般是文档的入口地址，即用户访问该文档时最先进入的页面。这里的 `https://baomidou.com/introduce/` 就是`MyBatis-Plus`文档的起始访问页面，用户通过这个 `entrypoint` 能直接进入到对应文档内容开始浏览。

3、测试 @Docs 对话

```bash
@MyBatis-Plus 查询下乐观锁的使用
```

4、查看对话结果

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718164048.png)

#### 3.3.4 @Web 使用和测试

1、@Web 作用说明

`@Web` 提供联网搜索当前信息、博客文章和社区讨论等资料的功能。

在特殊的场景下使用，如：

- 最新的教程：社区生成的内容和示例
- 比较：比较不同方法的文章
- 最近更新：Very Recent updates or announcement（最近的更新或公告）
- 多种视角：不同的问题处理方法

2、测试 @Web 对话

```bash
@Web Java17 有哪些新特性
```

3、查看对话结果

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718164502.png)

4、对比 @Docs 和 MCP 配置的区别

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/docsweb和mcp.png)

#### 3.3.5 @Linter Errors 使用和测试

1、@Linter Errors 作用和说明

`@Linter Errors` 符号会自动捕获并提供有关当前活动文件中的任何 linting 错误和警告的上下文。

2、准备代码 `BubbleSort.java`

``` java
public class BubbleSort {
    /**
    * 冒泡排序方法
    * @param arr 待排序的数组
    */
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        // 外层循环控制排序轮数
        for (int i = 0; i < n - 1; i++) {
            // 内层循环进行相邻元素比较和交换
            for (int j = 0; j < n - 1 - i; j++) {
                // 如果当前元素大于下一个元素，则交换它们
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    /**
    * 打印数组的辅助方法
    * @param arr 要打印的数组
    */
    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            //此处故意出现错误，会出现数组越界
            System.out.print(arr[i+2] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        // 测试数组
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        
        System.out.println("排序前的数组：");
        printArray(arr);
        
        // 执行冒泡排序
        bubbleSort(arr);
        
        System.out.println("排序后的数组：");
        printArray(arr);
    }
} 
```

3、运行后，出现如下错误

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718164918.png)

4、使用 @Lint Errors 对话结局 Bug

```plain 
@Linter Errors 程序运行报错了，基于报错信息分析下，并直接解决下错误
```

5、测试结果

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/ai/assistant/cursor/img-20250718165202.png)