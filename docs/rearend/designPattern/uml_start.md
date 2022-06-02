---
title: UML 类图
date: 2022-06-02
isOriginal: true
category:
  - 设计模式
tag:
  - UML
---

# UML 类图
<!-- more -->

## 1. UML基本介绍

1. UML——Unified Modeling Language(统一建模语言)，是一种用于软件系统分析和设计的语言工具，它用于帮助软件开发人员进行思考和记录思路的结果。
2. UML 本身是一套符号的规定，就像数学符号和化学符号一样，这些符号用于描述软件模型中的各个元素和他们之间的关系，比如类、接口、实现、泛化、依赖、组合、聚合等。
3. 使用 UML 来建模，常用的工具有 RationalRose, 也可以使用一些插件来建模。
4. 在 IDEA 中可安装插件 PlantUML Integration


## 1.2 UML图

画 UML 图与写文章差不多，都是把自己的思想描述给别人看，关键在于思路和条理，UML 图分类：

- 用例图(usecase)
- 静态结构图：类图、对象图、包图、组件图、部署图
- 动态行为图：交互图（时序图与协作图）、状态图、活动图

说明：**类图是描述类与类之间的关系的，是 UML 图中最核心的**。

## 1.3 UML类图

1. 用于描述系统中的类 ( 对象 ) 本身的组成和类 ( 对象 ) 之间的各种静态关系。

2. 类之间的关系：**依赖、泛化（继承）、实现、关联、聚合、组合**。

3. 类图简单举例
   ```java
    public class Person {
   
       public Integer id;
   
       public String name;
   
       public String getName() {
           return name;
       }
   
       public void setName(String name) {
           this.name = name;
       }
   }
   ```
   
   对应的类图：
   
   ![image-20220602094046233](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/uml_start/image-20220602094046233.png?versionId=CAEQKRiBgMCbyaqIiRgiIGFhNGQ5N2I0ZjRhYzQyNTg4Njk2ODViMGU0NDAzNjI5)


## 1.4 类图—依赖关系（DEPENDENCE）

只要是在类中用到了对方，那么他们之间就存在依赖关系。如果没有对方，连编绎都通过不了。

```java
public class PersonService {

    private PersonDao personDao;

    public void save(Person person) {}

    public IDCard getIDCard() {
        return null;
    }

    public void modify() {
        Department department = new Department();
    }
}

class Person {}

class Department {}

class IDCard {}

class PersonDao {}
```

对应的类图：

![image-20220602095516518](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/uml_start/image-20220602095516518.png?versionId=CAEQKRiBgMCCu8CIiRgiIDE5MmUyOGE2MzA2NTQ0ODBiM2JjNmZjOTdkY2FkZGE2)


小结：

1. 类中用到了对方
2. 是类的成员属性
3. 是方法的返回类型
4. 是方法接收的参数类型
5. 方法中使用到

## 1.5 类图—泛化关系（GENERALIZATION）

泛化关系实际上就是继承关系，是依赖关系的特例。

```java
public class DaoSupport {

    public void save(Object entity) {

    }

    public void delete(Object id) {
        
    }
}

class PersonDao extends DaoSupport {
    
}
```

对应的类图：

![image-20220602100334272](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/uml_start/image-20220602100334272.png?versionId=CAEQKRiBgMDqss.IiRgiIDIyZmZlZWIwY2NhZjQ4N2M4NzcxMjNmZmVhMDNmNTM2)


小结:

1. 泛化关系实际上就是继承关系
2. 如果 A类 继承了 B类，我们就说 A 和 B 存在泛化关系

## 1.6 类图—实现关系（IMPLEMENTATION）

实现关系实际上就是 A类 实现 B 接口，他是依赖关系的特例。

```java
public interface PersonService {

    public void delete(Integer id);
}
```

```java
public class PersonServiceImpl implements PersonService {

    @Override
    public void delete(Integer id) {

    }
}
```

对应的类图：

![image-20220602101503384](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/uml_start/image-20220602101503384.png?versionId=CAEQKRiBgICPw.WIiRgiIDZiMTcxYTMyYzAzOTRhYmI4ZjkwYmZlMmRjYjk2NmVi)

## 1.7 类图—关联关系（ASSOCIATION）

关联关系实际上就是类与类之间的联系，是依赖关系的特例。

关联关系具有导航性：即双向关系或者单向关系。

关联关系具有多重性：如 “1” 表示有且仅有一个，“0...” 表示0个或者多个，“0,1” 表示0个或者一个，“n...m” 表示 n 到 m 个都可以，“m...*”表示至少m个。

单向一对一关系

```java
public class Person {
	private IDCard card;
}
```

双向一对一关系

```java
public class Person {
	private IDCard card;
}

public class IDCard{
	private Person person
}
```

## 1.8 类图—聚合关系（AGGREGATION）

### 1.8.1 基本介绍

聚合关系（Aggregation）表示的是**整体和部分的关系，整体与部分可以分开**。聚合关系是关联关系的特例，所以他具有关联的导航性与多重性。
如：一台电脑由键盘(keyboard)、显示器(monitor)，鼠标等组成；组成电脑的各个配件是可以从电脑上分离出来的，使用带空心菱形的实线来表示。

### 1.8.2 应用实例

```java
public class Computer {
    private Mouse mouse;
    
    private Monitor monitor;

    public void setMouse(Mouse mouse) {
        this.mouse = mouse;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }
}

class Mouse {}

class Monitor {}
```

对应的类图：

![image-20220602103454763](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/uml_start/image-20220602103454763.png?versionId=CAEQKRiBgICP2IiJiRgiIDQyNzllMDc2YzkxZDQ1NzU5MzNiNzg5YjM3MjhhZjE0)


## 1.9 类图—组合关系（COMPOSITION）

### 1.9.1 基本介绍

组合关系：也是整体与部分的关系，**但是整体与部分不可以分开**。

案例：在程序中我们定义实体：Person 与 IDCard、Head, 那么 Head 和 Person 就是 组合，IDCard 和 Person 就是聚合。

但是如果在程序中 Person 实体中定义了对 IDCard 进行级联删除，即删除 Person 时连同 IDCard 一起删除，那么 IDCard 和 Person 就是组合了。

### 1.9.2 应用案例

```java
public class Person {
    
    private IDCard idCard;
    
    private Header header = new Header();
}

class IDCard {}

class Header {}
```
对应的类图：

![image-20220602104109938](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/uml_start/image-20220602104109938.png?versionId=CAEQKRiBgMCvnJSJiRgiIDExYTUwOGQ0ODQ2ZDQ2NjU5YTVmZDg5MDQ1MzZiZjcy)

案例 2
```java
public class Computer {
    private Mouse mouse = new Mouse();

    private Monitor monitor = new Monitor();
    
}

class Mouse {}

class Monitor {}
```

对应的类图：

![image-20220602104419018](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/uml_start/image-20220602104419018.png?versionId=CAEQKRiBgIDj4pmJiRgiIGNkYWEwYzU1NGYxNzRiOTg4ZTZmMWVkYzQxYjUyNWY2)
