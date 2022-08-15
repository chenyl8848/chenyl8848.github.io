---
title: 访问者模式
date: 2022-06-25
isOriginal: true
category:
  - 设计模式
tag:
  - 访问者模式
---

# 访问者模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

完成测评系统需求

1. 将观众分为男人和女人，对歌手进行测评，当看完某个歌手表演后，得到他们对该歌手不同的评价(评价有不同的种类，比如成功、失败等)。

2. 传统方案

   ![image-20220731214127806](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/visitor_start/image-20220731214127806.png?versionId=CAEQMRiBgMDald6BlRgiIGY5OTM4YzYzMTcxZTQ2ZTdiZDM5ZjM3YTVlYTEzYWJi)

### 1.1.2 问题分析

1. 如果系统比较小，还是可行的，但是考虑系统增加越来越多新的功能时，对代码改动较大，违反了 OCP 原则，不利于维护。
2. 扩展性不好，比如增加了新的人员类型，或者管理方法，都不好做。
3. 引出我们会使用新的设计模式 – 访问者模式。

## 1.2 访问者模式

### 1.2.1 基本介绍

1. 访问者模式（Visitor Pattern），封装一些作用于某种数据结构的各元素的操作，它可以在不改变数据结构的前提下定义作用于这些元素的新的操作。
2. 主要将数据结构与数据操作分离，解决数据结构和操作耦合性问题。
3. 访问者模式的基本工作原理是：在被访问的类里面加一个对外提供接待访问者的接口。
4. 访问者模式主要应用场景是：需要对一个对象结构中的对象进行很多不同操作(这些操作彼此没有关联)，同时需要避免让这些操作"污染"这些对象的类，可以选用访问者模式解决。

### 1.2.2 原理类图

![image-20220731215438812](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/visitor_start/image-20220731215438812.png?versionId=CAEQMRiBgIDAlt6BlRgiIDMzNmZlMzkwODFjOTQ4NmE4ZWU5ODdhYTcxM2M2Njcw)

对原理类图的说明-即(访问者模式的角色及职责)

1. `Visitor`: 是抽象访问者，为该对象结构中的 `Element` 的每一个类声明一个 `visit()` 操作
2. `ConcreteVisitor`：是一个具体的访问值实现每个有Visitor 声明的操作，是每个操作实现的部分
3. `ObjectStructure`: 能枚举它的元素， 可以提供一个高层的接口，用来允许访问者访问元素
4. `Element`: 定义一个 `accept()` 方法，接收一个访问者对象
5. `ConcreteElement`: 为具体元素，实现了 `accept()` 方法

### 1.2.3 代码实现

1. 思路分析和图解(类图)

   ![image-20220731221906416](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/visitor_start/image-20220731221906416.png?versionId=CAEQMRiBgIDplt6BlRgiIDExZGNhYTBjZDRiZTQ5ZGZhOTE5MWM2MTZlYTU4OGY4)

2. 代码实现

   ```java
   public abstract class Evaluation {
   
       // 得到男性的测评
       public abstract void getManResult(Man man);
   
       // 得到女性的测评
       public abstract void getManResult(Woman woman);
   }
   ```

   ```java
   public abstract class Person {
   
       public abstract void accept(Evaluation evaluation);
   }
   ```

   ```java
   public class Praise extends Evaluation {
       @Override
       public void getManResult(Man man) {
           System.out.println("男性给歌手好评！");
       }
   
       @Override
       public void getManResult(Woman woman) {
           System.out.println("女性给歌手好评！");
       }
   }
   ```

   ```java
   public class BadReview extends Evaluation {
       @Override
       public void getManResult(Man man) {
           System.out.println("男性给歌手差评！");
       }
   
       @Override
       public void getManResult(Woman woman) {
           System.out.println("女性给歌手差评！");
       }
   }
   ```

   ```java
   public class Man extends Person{
   
   
       /**
        * 这里使用到了双分派，即首先在客户端程序中，将具体状态作为参数传递（第一次分派），
        * 然后 Man 调用 getManResult， 同事将自己(this) 传入，完成了第二次分派
        * @param evaluation
        */
       @Override
       public void accept(Evaluation evaluation) {
           evaluation.getManResult(this);
       }
   }
   ```

   ```java
   public class Woman extends Person{
       @Override
       public void accept(Evaluation evaluation) {
           evaluation.getManResult(this);
       }
   }
   ```

   ```java
   public class Client {
   
       public static void main(String[] args) {
           ObjectStructure objectStructure = new ObjectStructure();
   
           objectStructure.add(new Man());
           objectStructure.add(new Woman());
   
           objectStructure.accept(new Praise());
           System.out.println("==============");
   
           objectStructure.accept(new BadReview());
   
           // 输出
           // 男性给歌手好评！
           // 女性给歌手好评！
           // ==============
           // 男性给歌手差评！
           // 女性给歌手差评！
       }
   }
   ```

3. 应用案例的小结-双分派
   - 上面提到了双分派，所谓双分派是指不管类怎么变化，我们都能找到期望的方法运行。双分派意味着得到执行的操作取决于请求的种类和两个接收者的类型
   - 以上述实例为例，假设我们要添加一个 Wait 的状态类，考察 Man 类和 Woman 类的反应，由于使用了双分派，只需增加一个Action子类即可在客户端调用即可，不需要改动任何其他类的代码。

## 1.3 访问者模式的注意事项和细节

- 优点
  1. 访问者模式符合单一职责原则、让程序具有优秀的扩展性、灵活性非常高。
  2. 访问者模式可以对功能进行统一，可以做报表、UI、拦截器与过滤器，适用于数据结构相对稳定的系统。

- 缺点
  1. 具体元素对访问者公布细节，也就是说访问者关注了其他类的内部细节，这是迪米特法则所不建议的，这样造成了具体元素变更比较困难。
  2. 违背了依赖倒转原则，访问者依赖的是具体元素，而不是抽象元素。
  3. 因此，如果一个系统有比较稳定的数据结构，又有经常变化的功能需求，那么访问者模式就是比较合适的。