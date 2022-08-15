---
title: 中介者模式
date: 2022-07-26
isOriginal: true
category:
  - 设计模式
tag:
  - 中介者模式
---

# 中介者模式

<!-- more -->

## 1.1 基本介绍

1. 中介者模式（Mediator Pattern），用一个中介对象来封装一系列的对象交互。中介者使各个对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
2. 中介者模式属于**行为型模式**，使代码易于维护。
3. 比如 MVC 模式，C（Controller控制器）是 M（Model模型）和 V（View视图）的中介者，在前后端交互时起到了中间人的作用。

## 1.2 原理类图

![image-20220731170223064](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/mediator_start/image-20220731170223064.png?versionId=CAEQMRiBgMCFsMKBlRgiIGZlZGNmZGQ0OTI3MTRhZDRiN2FjYmNkOGQyMDQ0MTdh)

对原理类图的说明-即(中介者模式的角色及职责)

1. `Mediator` 就是抽象中介者，定义了同事对象到中介者对象的接口
2. `Colleague` 是抽象同事类
3. `ConcreteMediator` 具体的中介者对象，实现抽象方法，他需要知道所有的具体的同事类，即以一个集合来管理，并接受某个同事对象消息，完成相应的任务。
4. `ConcreteColleague` 具体的同事类，会有很多，每个同事只知道自己的行为，而不了解其他同事类的行为(方法)，但是他们都依赖中介者对象。

## 1.3 代码实现

```java
public abstract class Mediator {

    public abstract void send(String message, Colleague colleague);

}
```

```java
public abstract class Colleague {

    // 名字
    private String name;

    // 中介者
    private Mediator mediator;

    public Colleague(String name, Mediator mediator) {
        this.name = name;
        this.mediator = mediator;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Mediator getMediator() {
        return mediator;
    }

    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    public abstract void send(String message);

    public abstract void receive(String message);
}
```

```java
public class ConcreteColleague1 extends Colleague{

    public ConcreteColleague1(String name, Mediator mediator) {
        super(name, mediator);
    }

    @Override
    public void send(String message) {
        this.getMediator().send(message, this);
    }

    @Override
    public void receive(String message) {
        System.out.println("同事:" + getName() + "收到了消息:" + message);
    }
}
```

```java
public class ConcreteColleague2 extends Colleague{

    public ConcreteColleague2(String name, Mediator mediator) {
        super(name, mediator);
    }

    @Override
    public void send(String message) {
        this.getMediator().send(message, this);
    }

    @Override
    public void receive(String message) {
        System.out.println("同事:" + getName() + "收到了消息:" + message);
    }
}
```

```java
public class ConcreteMediator extends Mediator{

    private ConcreteColleague1 colleague1;
    private ConcreteColleague2 colleague2;

    public ConcreteColleague1 getColleague1() {
        return colleague1;
    }

    public void setColleague1(ConcreteColleague1 colleague1) {
        this.colleague1 = colleague1;
    }

    public ConcreteColleague2 getColleague2() {
        return colleague2;
    }

    public void setColleague2(ConcreteColleague2 colleague2) {
        this.colleague2 = colleague2;
    }

    @Override
    public void send(String message, Colleague colleague) {
       if (colleague == colleague1) {
           colleague2.receive(message);
       } else {
           colleague1.receive(message);
       }
    }
}
```

```java
public class Client {

    public static void main(String[] args) {
        ConcreteMediator mediator = new ConcreteMediator();
        ConcreteColleague1 concreteColleague1 = new ConcreteColleague1("colleague1", mediator);
        ConcreteColleague2 concreteColleague2 = new ConcreteColleague2("colleague2", mediator);

        mediator.setColleague1(concreteColleague1);
        mediator.setColleague2(concreteColleague2);

        concreteColleague1.send("同事2好，我是同事1");
        concreteColleague2.send("同事1好，我是同事2");
        
        // 输出
        // 同事:colleague2收到了消息:同事2好，我是同事1
        // 同事:colleague1收到了消息:同事1好，我是同事2

    }
}
```

## 1.4 中介者模式的注意事项和细节

1. 多个类相互耦合，会形成网状结构，使用中介者模式将网状结构分离为星型结构，进行解耦。
2. 减少类间依赖，降低了耦合，符合迪米特原则。
3. 中介者承担了较多的责任，一旦中介者出现了问题，整个系统就会受到影响。
4. 如果设计不当，中介者对象本身变得过于复杂，这点在实际使用时，要特别注意。