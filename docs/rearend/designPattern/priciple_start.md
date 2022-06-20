---
title: 设计模式七大原则
date: 2022-06-02
isOriginal: true
category:
  - 设计模式
tag:
  - 设计原则
---

#  设计模式七大原则

<!-- more -->

## 1.1 设计模式的目的

编写软件过程中，程序员面临着来自耦合性，内聚性以及可维护性，可扩展性，重用性，灵活性等多方面的挑战，设计模式是为了让程序(软件)，具有更好的：

1. 代码重用性 (即：相同功能的代码，不用多次编写)
2. 可读性 (即：编程规范性, 便于其他程序员的阅读和理解)
3. 可扩展性 (即：当需要增加新的功能时，非常的方便，称为可维护)
4. 可靠性 (即：当我们增加新的功能后，对原来的功能没有影响)
5. 使程序呈现高内聚，低耦合的特性

分享金句：
1. 设计模式包含了面向对象的精髓，“懂了设计模式，你就懂了面向对象分析和设计（OOA/D）的精要”
2. ScottMayers 在其巨著《EffectiveC++》就曾经说过：C++ 老手和 C++ 新手的区别就是前者手背上有很多伤疤

## 1.2 设计模式七大原则

设计模式原则，其实就是程序员在编程时，应当遵守的原则，也是各种设计模式的基础(即：设计模式为什么这样设计的依据)

设计模式常用的七大原则有:

1. 单一职责原则

2. 接口隔离原则

3. 依赖倒转(倒置)原则

4. 里氏替换原则

5. 开闭原则

6. 迪米特法则

7. 合成复用原则

## 1.3 单一职责原则(SRP)

### 1.3.1 基本介绍

“单一职责原则（SRP：Single responsibility principle）:对类来说的，即一个类应该只负责一项职责。如类 A 负责两个不同职责：职责 1 ，职责 2 ，当职责 1 需求变更而改变A时，可能造成职责 2 执行错误，所以需要将类A的粒度分解为 A1 ，A2 。

### 1.3.2 应用实例

以交通工具案例讲解


1. 方案 1 

   ```java
   public class SingleResponsibilityDemo01 {
   
       public static void main(String[] args) {
           Vehicle vehicle = new Vehicle();
           vehicle.run("摩托车");
           vehicle.run("汽车");
           vehicle.run("飞机");
       }
   }
   
   /**
    * 交通工具类
    * 方式1：
    *  1.在 run 方法中，违反了单一职责原则
    *  2.解决方案：根据不同的交通工具，分解成不同的类即可
    */
   class Vehicle {
       public void run (String vehicle) {
   
           System.out.println(vehicle + " 在公路上运行");
       }
   }
   ```

2. 方案 2 

   ```java
   public class SingleResponsibilityDemo02 {
   
       public static void main(String[] args) {
           RoadVehicle roadVehicle = new RoadVehicle();
           roadVehicle.run("摩托车");
   
           AirVehicle airVehicle = new AirVehicle();
           airVehicle.run("飞机");
   
           WaterVehicle waterVehicle = new WaterVehicle();
           waterVehicle.run("轮船");
       }
   }
   
   /**
    * 交通工具类
    * 方式2：
    *  1.遵循了单一职责原则
    *  2.这样做的改动大，即将类修改时，也要修改对应的客户端代码
    *  3.改进方案：直接改动 Vehicle 类
    */
   class RoadVehicle {
       public void run (String vehicle) {
   
           System.out.println(vehicle + " 在公路上运行");
       }
   }
   
   class AirVehicle {
       public void run (String vehicle) {
   
           System.out.println(vehicle + " 在天上运行");
       }
   }
   
   class WaterVehicle {
       public void run (String vehicle) {
   
           System.out.println(vehicle + " 在水上运行");
       }
   }
   ```

3. 方案 3 

   ```java
   public class SingleResponsibilityDemo03 {
   
       public static void main(String[] args) {
           ImproveVehicle improveVehicle = new ImproveVehicle();
           improveVehicle.runRoad("汽车");
           improveVehicle.runAir("飞机");
           improveVehicle.runWater("轮船");
       }
   }
   
   /**
    * 交通工具类
    * 方式3：
    *  1.这种方式对原来的类没有做大的修改，只是增加了方法；
    *  2.这种方式在类上没有遵循单一职责原则，但是在方法上遵循了单一职责原则
    */
   class ImproveVehicle {
   
       public void runRoad (String vehicle) {
           System.out.println(vehicle + " 在公路上运行");
       }
   
       public void runAir (String vehicle) {
           System.out.println(vehicle + " 在天上运行");
       }
   
       public void runWater (String vehicle) {
           System.out.println(vehicle + " 在水上运行");
       }
   }
   ```


### 1.3.3 注意事项和细节

1. 降低类的复杂度，一个类只负责一项职责；
2. 提高类的可读性，可维护性；
3. 降低变更引起的风险；
4. 通常情况下，我们应当遵守单一职责原则，只有逻辑足够简单，才可以在代码级违反单一职责原则；只有类中方法数量足够少，可以在方法级别保持单一职责原则。



## 1.4 接口隔离原则(ISP)

### 2 4 1 基本介绍

1. 接口隔离原则(Interface Segregation Principle):客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上.

2. 先看一张图:

3. 类A通过接口Interface 1 依赖类B，类C通过接口Interface 1 依赖类D，如果接口Interface 1 对于类A和类C来说不是最小接口，那么类B和类D必须去实现他们不需要的方法。

4. 按隔离原则应当这样处理：将接口 Interface1 拆分为独立的几个接口(这里我们拆分成 3 个接口)，类 A 和类 C 分别与他们需要的接口建立依赖关系，也就是采用接口隔离原则。

### 1.4.2 应用实例

1. 类A通过接口Interface 1 依赖类B，类C通过接口Interface 1 依赖类D，请编写代码完成此应用实例。

2. 代码-没有使用接口隔离原则代码

   ```java
   public class SeparationDemo02 {
   
       public static void main(String[] args) {
           A a = new A();
           a.depend1(new B()); //A 类通过接口去依赖 B
           a.depend2(new B());
           a.depend3(new B());
   
           C c = new C();
           c.depend1(new D());//C 类通过接口去依赖 D
           c.depend4(new D());
           c.depend5(new D());
       }
   }
   
   //接口 1
   interface Interface01 {
       public void function01();
   }
   
   //接口 2
   interface Interface02 {
       public void function02();
   
       public void function03();
   }
   
   //接口 3
   interface Interface03 {
       public void function04();
   
       public void function05();
   }
   
   class B implements Interface01,Interface02 {
   
       @Override
       public void function01() {
           System.out.println("B 实现了 function01");
       }
   
       @Override
       public void function02() {
           System.out.println("B 实现了 function02");
       }
   
       @Override
       public void function03() {
           System.out.println("B 实现了 function03");
   
       }
   }
   
   class D implements Interface01,Interface03 {
   
       @Override
       public void function01() {
           System.out.println("B 实现了 function01");
       }
   
       @Override
       public void function04() {
           System.out.println("B 实现了 function04");
       }
   
       @Override
       public void function05() {
           System.out.println("B 实现了 function05");
   
       }
   }
   
   // A 类通过接口 Interface01 Interface02 依赖（使用） B 类，但是只会用到 方法1 方法2 方法3
   class A {
   
       public void depend1(Interface01 interface01) {
           interface01.function01();
       }
   
       public void depend2(Interface02 interface02) {
           interface02.function02();
       }
   
       public void depend3(Interface02 interface02) {
           interface02.function03();
       }
   }
   
   // C 类通过接口 Interface01 Interface03 依赖（使用） D 类，但是只会用到 方法1 方法4 方法5
   class C {
   
       public void depend1(Interface01 interface1) {
           interface1.function01();
       }
   
       public void depend4(Interface03 interface1) {
           interface1.function04();
       }
   
       public void depend5(Interface03 interface03) {
           interface03.function05();
       }
   }
   ```
### 1.4.3 实例改进

1. 类 A 通过接口 Interface1 依赖类 B，类 C 通过接口 Interface 1 依赖类 D，如果接口 Interface1 对于类 A 和类 C 来说不是最小接口，那么类 B 和类 D 必须去实现他们不需要的方法；

2. 将接口 Interface1 拆分为独立的几个接口，类 A 和类 C 分别与他们需要的接口建立依赖关系。也就是采用接口隔离原则；

3. 接口 Interface1 中出现的方法，根据实际情况拆分为三个接口；

4. 代码实现

   ```java
   public class SeparationDemo02 {
   
       public static void main(String[] args) {
           A a = new A();
           a.depend1(new B()); //A 类通过接口去依赖 B
           a.depend2(new B());
           a.depend3(new B());
   
           C c = new C();
           c.depend1(new D());//C 类通过接口去依赖 D
           c.depend4(new D());
           c.depend5(new D());
       }
   }
   
   //接口 1
   interface Interface01 {
       public void function01();
   }
   
   //接口 2
   interface Interface02 {
       public void function02();
   
       public void function03();
   }
   
   //接口 3
   interface Interface03 {
       public void function04();
   
       public void function05();
   }
   
   class B implements Interface01,Interface02 {
   
       @Override
       public void function01() {
           System.out.println("B 实现了 function01");
       }
   
       @Override
       public void function02() {
           System.out.println("B 实现了 function02");
       }
   
       @Override
       public void function03() {
           System.out.println("B 实现了 function03");
   
       }
   }
   
   class D implements Interface01,Interface03 {
   
       @Override
       public void function01() {
           System.out.println("B 实现了 function01");
       }
   
       @Override
       public void function04() {
           System.out.println("B 实现了 function04");
       }
   
       @Override
       public void function05() {
           System.out.println("B 实现了 function05");
   
       }
   }
   
   // A 类通过接口 Interface01 Interface02 依赖（使用） B 类，但是只会用到 方法1 方法2 方法3
   class A {
   
       public void depend1(Interface01 interface01) {
           interface01.function01();
       }
   
       public void depend2(Interface02 interface02) {
           interface02.function02();
       }
   
       public void depend3(Interface02 interface02) {
           interface02.function03();
       }
   }
   
   // C 类通过接口 Interface01 Interface03 依赖（使用） D 类，但是只会用到 方法1 方法4 方法5
   class C {
   
       public void depend1(Interface01 interface1) {
           interface1.function01();
       }
   
       public void depend4(Interface03 interface1) {
           interface1.function04();
       }
   
       public void depend5(Interface03 interface03) {
           interface03.function05();
       }
   }
   ```

   

## 1.5 依赖倒转原则

### 1.5.1 基本介绍

依赖倒转原则(Dependence Inversion Principle)是指：
1. 高层模块不应该依赖低层模块，二者都应该依赖其抽象；
2. 抽象不应该依赖细节，细节应该依赖抽象；
3. 依赖倒转(倒置)的中心思想是面向接口编程；
4. 依赖倒转原则是基于这样的设计理念：相对于细节的多变性，抽象的东西要稳定的多。以抽象为基础搭建的架构比以细节为基础的架构要稳定的多。在 Java 中，抽象指的是接口或抽象类，细节就是具体的实现类；
5. 使用接口或抽象类的目的是制定好规范，而不涉及任何具体的操作，把展现细节的任务交给他们的实现类去完成

### 1.5.2 应用实例

请编程完成 Person 接收消息的功能。

1. 实现方案 1 + 分析说明
   ```java
   public class DependenceInversionDemo01 {
   
       public static void main(String[] args) {
           Person person = new Person();
           person.receive(new Email());
       }
   }
   
   class Email {
   
       public String getInfo() {
           return "邮件:hello world";
       }
   }
   
   /**
    * 完成 person 接收信息的功能
    * 方式1：
    *  1.简单，比较容易想到
    *  2.如果我们获取到的对象是微信、短信等，需要新增类，同时 person 也要增加相应的接收方法
    *  3.解决思路：引入一个抽象的接口 IReceiver, 表示接收者，这样 person 类与接口 IReceiver 依赖即可
    *      因为：Email、WeChat 等等属于接收信息的范畴，他们各自实现 IReceiver 接口，这样做就符合依赖倒转原则
    */
   class Person {
   
       public void receive(Email email) {
           System.out.println(email.getInfo());
       }
   
   }
   ```
2. 实现方案 2 (依赖倒转) + 分析说明
   ```java
   public class DependenceInversionDemo02 {
   
       public static void main(String[] args) {
           Person person = new Person();
   
           person.receive(new Email());
           person.receive(new WeChat());
       }
   }
   
   interface IReceiver {
       public String receive();
   }
   
   class Email implements IReceiver {
       @Override
       public String receive() {
           return "邮件:hello world";
       }
   }
   
   class WeChat implements IReceiver {
       @Override
       public String receive() {
           return "微信:hello ok";
       }
   }
   
   class Person {
   
       public void receive (IReceiver iReceiver) {
           System.out.println(iReceiver.receive());
       }
   }
   ```

### 1.5.3 依赖关系传递的三种方式

1. 接口传递
   
   ```java
  public class DependenceInversionDemo03 {
   
       public static void main(String[] args) {
           // 方式1:通过接口传递依赖
           OpenAndClose openAndClose = new OpenAndClose();
           openAndClose.open(new ChangHong());
       }
   }
   
   /**
    * 方式1：通过接口传递依赖
    */
   interface IOpenAndClose {
   
       public void open(ITv iTv);
   }
   
   class OpenAndClose implements IOpenAndClose {
       @Override
       public void open(ITv iTv) {
           iTv.play();
       }
   }
   
   interface ITv {
       public void play();
   }
   
   class ChangHong implements ITv {
       @Override
       public void play() {
           System.out.println("长虹电视机：打开...");
       }
   }
   ```
   
2. 构造方法传递
   
   ```java
  public class DependenceInversionDemo03 {
   
       public static void main(String[] args) {
   
           // 方式2：通过构造器传递依赖
           OpenAndClose openAndClose = new OpenAndClose(new ChangHong());
           openAndClose.open();
       }
   }
   
   /**
    * 方式2：通过构造器传递依赖
    */
   interface IOpenAndClose {
       public void open();
   }
   
   class OpenAndClose implements IOpenAndClose {
       private ITv iTv;
   
       public OpenAndClose(ITv iTv) {
           this.iTv = iTv;
       }
   
       @Override
       public void open() {
           this.iTv.play();
       }
   }
   
   interface ITv {
       public void play();
   }
   
   class ChangHong implements ITv {
   
       @Override
       public void play() {
           System.out.println("长虹电视机：打开...");
       }
   }
   ```
   
3. setter方式传递
   
```java
   public class DependenceInversionDemo03 {
   
       public static void main(String[] args) {
   
           // 方式3：通过 setter 传递依赖
           OpenAndClose openAndClose = new OpenAndClose();
           openAndClose.setiTv(new ChangHong()); // 没有 setter 会导致空指针异常
           openAndClose.open();
       }
   }
   
   /**
    * 方式3：setter 方法传递
    */
   interface IOpenAndClose {
       public void open();
   }
   
   class OpenAndClose implements IOpenAndClose {
   
       private ITv iTv;
   
       public void setiTv(ITv iTv) {
           this.iTv = iTv;
       }
   
       @Override
       public void open() {
           this.iTv.play();
       }
   }
   
   interface ITv {
       public void play();
   }
   
   class ChangHong implements ITv {
       @Override
       public void play() {
           System.out.println("长虹电视机：打开...");
       }
   }
```

### 1.5.4 注意事项和细节

1. 低层模块尽量都要有抽象类或接口，或者两者都有，程序稳定性更好；

2. 变量的声明类型尽量是抽象类或接口, 这样我们的变量引用和实际对象间，就存在一个缓冲层，利于程序扩展和优化；

3. 继承时遵循里氏替换原则



## 1.6 里氏替换原则(LSP)

### 1.6.1 基本介绍

**OO 中的继承性的思考和说明**

1. 继承包含这样一层含义：父类中凡是已经实现好的方法，实际上是在设定规范和契约，虽然它不强制要求所有的子类必须遵循这些契约，但是如果子类对这些已经实现的方法任意修改，就会对整个继承体系造成破坏；

2. 继承在给程序设计带来便利的同时，也带来了弊端。比如使用继承会给程序带来侵入性，程序的可移植性降低，增加对象间的耦合性，如果一个类被其他的类所继承，则当这个类需要修改时，必须考虑到所有的子类，并且父类修改后，所有涉及到子类的功能都有可能产生故障；

3. 问题提出：在编程中，如何正确的使用继承? => 里氏替换原则。

**里氏替换原则**

- 里氏替换原则(Liskov Substitution Principle)在 1988 年，由麻省理工学院的以一位姓里的女士提出的。
- 如果对每个类型为 T1 的对象 O1 ，都有类型为 T2 的对象 O2 ，使得以 T1 定义的所有程序 P 在所有的对象 O1 都代换成 O2 时，程序 P 的行为没有发生变化，那么类型 T2 是类型 T1 的子类型。换句话说，**所有引用基类的地方必须能透明地使用其子类的对象**。
- 在使用继承时，遵循里氏替换原则，在子类中尽量不要重写父类的方法。
- 里氏替换原则告诉我们，**继承实际上让两个类耦合性增强了，在适当的情况下，可以通过聚合、组合、依赖来解决问题**。


### 1.6.2 应用实例

看个程序， 思考下问题和解决思路：
```java
public class LisKovDemo01 {

    public static void main(String[] args) {
        A a = new A();
        System.out.println("11 - 3 = " + a.function01(11, 3));
        System.out.println("1 - 8 = " + a.function01(1, 8));

        B b = new B();
        System.out.println("11 - 3 = " + b.function01(11, 3));
        System.out.println("1 - 8 = " + b.function01(1, 8));
        System.out.println("11 + 8 + 9 = " + b.function02(11, 8));

    }
}

class A {

    /**
     * 返回两个数的差
     * @param a
     * @param b
     * @return
     */
    public int function01 (int a, int b) {
        return a - b;
    }
}

/**
 * B 继承 A
 * 增加了一个新总能：完成两个数相加，然后与 9 求和
 */
class B extends A {
    @Override
    public int function01(int a, int b) {
        return a + b;
    }

    public int function02 (int a, int b) {
        return function01(a, b) + 9;
    }
}
```

### 1.6.3 实例改进

1. 我们发现原来运行正常的相减功能发生了错误。原因就是类B无意中重写了父类的方法，造成原有功能出现错误。在实际编程中，我们常常会通过重写父类的方法完成新的功能，这样写起来虽然简单，但整个继承体系的复用性会比较差。特别是运行多态比较频繁的时候。

2. 通用的做法是：**原来的父类和子类都继承一个更通俗的基类，原有的继承关系去掉，采用依赖、聚合、组合等关系代替**。

3. 改进方案代码实现
   ```java
  public class LisKovDemo02 {
   
       public static void main(String[] args) {
           ImproveA a = new ImproveA();
           System.out.println("11 - 3 = " + a.function01(11, 3));
           System.out.println("1 - 8 = " + a.function01(1, 8));
   
           ImproveB b = new ImproveB();
           // 因为 B 不再继承 A ,因此调用者，不会再认为 function01 是求减法，调用完成的功能就会很明确
           System.out.println("11 + 3 = " + b.function01(11, 3));
           System.out.println("1 + 8 = " + b.function01(1, 8));
           System.out.println("11 + 8 + 9 = " + b.function02(11, 8));
           // 使用组合的关系仍然可以使用 A 中的方法
           System.out.println("11 - 3 = " + b.function03(11, 3));
       }
   }
   
   /**
    * 创建一个更基础的基类
    */
   class Base {
       // 把更加基础的属性、方法抽取到 Base
   }
   
   class ImproveA extends Base{
   
       /**
        * 返回两个数的差
        * @param a
        * @param b
        * @return
        */
       public int function01 (int a, int b) {
           return a - b;
       }
   }
   
   /**
    * B 继承 A
    * 增加了一个新总能：完成两个数相加，然后与 9 求和
    */
   class ImproveB extends Base {
   
       // 如果 B 需要使用到 A 中的方法，采用组合的关系
       private ImproveA improveA = new ImproveA();
   
       public int function01(int a, int b) {
           return a + b;
       }
   
       public int function02 (int a, int b) {
           return function01(a, b) + 9;
       }
   
       // 仍然想使用 A 中的方法
       public int function03 (int a, int b) {
           return improveA.function01(a, b);
       }
   }
   ```

## 1.7 开闭原则(OCP)

### 1.7.1 基本介绍

1. 开闭原则（Open Closed Principle）是编程中**最基础、最重要的设计原则**。

2. 一个软件实体如类，模块和函数应该**对扩展开放 ( 对提供方 ) ，对修改关闭 ( 对使用方 )** 。用抽象构建框架，用实现扩展细节。

3. 当软件需要变化时，尽量通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现变化。

4. 编程中遵循其它原则，以及使用设计模式的目的就是遵循开闭原则。

### 1.7.2 应用实例

完成一个画图的功能，类图如下：



具体代码实现：

```java
public class OpenClosedDemo01 {

    public static void main(String[] args) {

        GraphicEditor graphicEditor = new GraphicEditor();
        graphicEditor.draw(new Circle());
        graphicEditor.draw(new Rectangle());
    }


}

/**
 * 这是一个用于画图的类 ---> 使用方
 */
class GraphicEditor {

    public void drawCircle() {
        System.out.println("画圆形...");
    }

    public void drawRectangle() {
        System.out.println("画长方形...");
    }

    public void draw(Shape shape) {
        if (shape.m_type == 1) {
            drawCircle();
        } else if (shape.m_type == 2) {
            drawRectangle();
        }
    }
}

/**
 * 图形 基类 ---> 提供方
 */
class Shape {

    int m_type;
}

class Circle extends Shape {
    Circle() {
        super.m_type = 1;
    }
}

class Rectangle extends Shape {
    Rectangle() {
        super.m_type = 2;
    }
}

```

**优缺点分析**

1. 优点是比较好理解，简单易操作。

1. 缺点是违反了设计模式的 ocp 原则，即对扩展开放(提供方)，对修改关闭(使用方)。即当我们给类增加新功能的时候，尽量不修改代码，或者尽可能少修改代码。

3. 比如我们这时要新增加一个图形种类 三角形，我们需要做如下修改，修改的地方较多

   代码演示

   ```java
   public class OpenClosedDemo01 {
   
       public static void main(String[] args) {
   
           GraphicEditor graphicEditor = new GraphicEditor();
           graphicEditor.draw(new Circle());
           graphicEditor.draw(new Rectangle());
           graphicEditor.draw(new Triangle());
       }
   
   
   }
   
   /**
    * 这是一个用于画图的类 ---> 使用方
    */
   class GraphicEditor {
   
       public void drawCircle() {
           System.out.println("画圆形...");
       }
   
       public void drawRectangle() {
           System.out.println("画长方形...");
       }
   
       public void drawTriangle() {
           System.out.println("画三角形...");
       }
   
       public void draw(Shape shape) {
           if (shape.m_type == 1) {
               drawCircle();
           } else if (shape.m_type == 2) {
               drawRectangle();
           } else if (shape.m_type == 3) {
               // 当新增一个图形类时，draw 的方法也要随着改变
               drawTriangle();
           }
       }
   }
   
   /**
    * 图形 基类 ---> 提供方
    */
   class Shape {
   
       int m_type;
   }
   
   class Circle extends Shape {
       Circle() {
           super.m_type = 1;
       }
   }
   
   class Rectangle extends Shape {
       Rectangle() {
           super.m_type = 2;
       }
   }
   
   /**
    * 新增三角形类
    */
   class Triangle extends Shape {
       Triangle() {
           super.m_type = 3;
       }
   }
   ```

### 1.7.3 实例改进 

**改进的思路分析**

思路：把创建 Shape 类做成抽象类，并提供一个抽象的 draw 方法，让子类去实现即可，这样我们有新的图形种类时，只需要让新的图形类继承 Shape，并实现draw 方法即可，使用方的代码就不需要修盖，满足了开闭原则。

改进后的代码：

```java
public class OpenClosedDemo02 {

    public static void main(String[] args) {

        GraphicEditor graphicEditor = new GraphicEditor();
        graphicEditor.draw(new Circle());
        graphicEditor.draw(new Rectangle());
        graphicEditor.draw(new Triangle());
        graphicEditor.draw(new OtherShape());
    }


}

/**
 * 这是一个用于画图的类 ---> 使用方
 */
class GraphicEditor {

    public void draw(Shape shape) {
        shape.draw();
    }
}

/**
 * 图形 基类 ---> 提供方 --> 改为抽象类，并提供 draw 的方法让子类去实现
 */
abstract class Shape {

    int m_type;

    public abstract void draw();
}

class Circle extends Shape {
    Circle() {
        super.m_type = 1;
    }

    @Override
    public void draw() {
        System.out.println("画圆形...");
    }
}

class Rectangle extends Shape {
    Rectangle() {
        super.m_type = 2;
    }

    @Override
    public void draw() {
        System.out.println("画长方形...");
    }
}

/**
 * 新增三角形类
 */
class Triangle extends Shape {
    Triangle() {
        super.m_type = 3;
    }

    @Override
    public void draw() {
        System.out.println("画三角形...");
    }
}

/**
 * 新增其他图形
 */
class OtherShape extends Shape {
    
    OtherShape () {
        super.m_type = 4;
    }
    
    @Override
    public void draw() {
        System.out.println("其他图形...");
    }
}
```


## 1.8 迪米特法则(DP)

### 1.8.1 基本介绍

1. 一个对象应该对其他对象保持最少的了解。

1. 类与类关系越密切，耦合度越大。

3. 迪米特法则(Demeter Principle)又叫**最少知道原则**，即一个类对自己依赖的类知道的越少越好。也就是说，对于被依赖的类不管多么复杂，都尽量将逻辑封装在类的内部。对外除了提供的public 方法，不对外泄露任何信息。

4. 迪米特法则还有个更简单的定义：只与直接的朋友通信。

5. 直接的朋友：每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说这两个对象之间是朋友关系。耦合的方式很多，依赖、关联、组合、聚合等。其中，我们称出现**成员变量，方法参数，方法返回值中的类为直接的朋友**，而出现在局部变量中的类不是直接的朋友。也就是说，**陌生的类最好不要以局部变量的形式出现在类的内部**。

### 1.8.2 应用实例

需求：有一个学校，下属有各个学院和总部，现要求打印出学校总部员工ID和学院员工的id

代码实现：

```java
public class DemeterDemo01 {

    public static void main(String[] args) {
        SchoolManager schoolManager = new SchoolManager();
        schoolManager.print(new CollegeManager());
    }
}

/**
 * 学校总部员工
 */
class Employee {

    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}

/**
 * 学校学院员工
 */
class CollegeEmployee {

    private String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}

/**
 * 学院管理类
 */
class CollegeManager {

    /**
     * 获取学院的所有员工
     * @return
     */
    public List<CollegeEmployee> getAllCollegeEmployee() {
        ArrayList<CollegeEmployee> list = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            CollegeEmployee collegeEmployee = new CollegeEmployee();
            collegeEmployee.setId(i + "");
            list.add(collegeEmployee);
        }

        return list;
    }
}

/**
 * 学校总部管理
 * 直接朋友: Employee collegeManager
 * 陌生朋友: CollegeEmployee 违背了迪米特法则
 */
class SchoolManager {

    /**
     * 获取学校总部的所有员工
     * @return
     */
    public List<Employee> getAllEmployee() {
        ArrayList<Employee> list = new ArrayList<>();

        for (int i = 0; i < 5; i++) {
            Employee employee = new Employee();
            employee.setId(i + "");
            list.add(employee);
        }

        return list;

    }

    /**
     * 打印所有员工
     */
    public void print(CollegeManager collegeManager) {

        /**
         * 问题分析
         *  1.CollegeEmployee 是以局部变量的形式出现
         *  2.这里的 CollegeEmployee 不是 SchoolManager 的直接朋友，违背了迪米特法则
         */
        List<CollegeEmployee> list1 = collegeManager.getAllCollegeEmployee();
        System.out.println("学院员工......");
        for (CollegeEmployee collegeEmplyee : list1) {
            System.out.println("学院员工:" + collegeEmplyee.getId());
        }

        List<Employee> list2 = getAllEmployee();
        System.out.println("学校总部员工......");
        for (Employee emplyee : list2) {
            System.out.println("学校总部员工:" + emplyee.getId());
        }

    }

}
```

### 1.8.3 实例改进

1. 前面设计的问题在于 SchoolManager 中， CollegeEmployee 类并不是 SchoolManager 类的直接朋友。
1. 按照迪米特法则，应该避免类中出现这样非直接朋友关系的耦合。
3. 对代码按照迪米特法则进行改进
4. 代码演示：
   ```java
  public class DemeterDemo02 {
   
       public static void main(String[] args) {
           SchoolManager schoolManager = new SchoolManager();
           schoolManager.print(new CollegeManager());
       }
   }
   
   /**
    * 学校总部员工
    */
   class Employee {
   
       private String id;
   
       public String getId() {
           return id;
       }
   
       public void setId(String id) {
           this.id = id;
       }
   }
   
   /**
    * 学校学院员工
    */
   class CollegeEmployee {
   
       private String id;
   
       public String getId() {
           return id;
       }
   
       public void setId(String id) {
           this.id = id;
       }
   
   }
   
   /**
    * 学院管理类
    */
   class CollegeManager {
   
       /**
        * 获取学院的所有员工
        * @return
        */
       public List<CollegeEmployee> getAllCollegeEmployee() {
           ArrayList<CollegeEmployee> list = new ArrayList<>();
   
           for (int i = 0; i < 10; i++) {
               CollegeEmployee collegeEmployee = new CollegeEmployee();
               collegeEmployee.setId(i + "");
               list.add(collegeEmployee);
           }
   
           return list;
       }
   
       /**
        * 打印学院员工
        */
       public void printCollegeEmployee() {
           /**
            * 问题分析
            *  1.CollegeEmployee 是以局部变量的形式出现
            *  1.这里的 CollegeEmployee 不是 SchoolManager 的直接朋友，违背了迪米特法则
            */
           List<CollegeEmployee> list1 = getAllCollegeEmployee();
           System.out.println("学院员工......");
           for (CollegeEmployee collegeEmplyee : list1) {
               System.out.println("学院员工:" + collegeEmplyee.getId());
           }
       }
   }
   
   /**
    * 学校总部管理
    * 直接朋友: Employee collegeManager
    * 陌生朋友: CollegeEmployee 违背了迪米特法则
    */
   class SchoolManager {
   
       /**
        * 获取学校总部的所有员工
        * @return
        */
       public List<Employee> getAllEmployee() {
           ArrayList<Employee> list = new ArrayList<>();
   
           for (int i = 0; i < 5; i++) {
               Employee employee = new Employee();
               employee.setId(i + "");
               list.add(employee);
           }
   
           return list;
   
       }
   
       /**
        * 打印所有员工
        */
       public void print(CollegeManager collegeManager) {
   
           /**
            * 将打印学院员工的方法封装到 CollegeManager
            */
           collegeManager.printCollegeEmployee();
   
           List<Employee> list2 = getAllEmployee();
           System.out.println("学校总部员工......");
           for (Employee emplyee : list2) {
               System.out.println("学校总部员工:" + emplyee.getId());
           }
   
       }
   
   }
   ```
   


### 1.8.4 注意事项和细节

1. 迪米特法则的核心是降低类之间的耦合。
2. 但是注意：由于每个类都减少了不必要的依赖，因此迪米特法则只是要求降低类间(对象间)耦合关系，并不是要求完全没有依赖关系。



## 1.9 合成复用原则（CRP）

### 1.9.1 基本介绍

原则是尽量使用合成/聚合的方式，而不是使用继承。



## 1.10 设计原则核心思想

1. 找出应用中可能需要变化之处，把它们独立出来，不要和那些不需要变化的代码混在一起。
2. 针对接口编程，而不是针对实现编程。
3. 为了交互对象之间的**松耦合设计**而努力。

