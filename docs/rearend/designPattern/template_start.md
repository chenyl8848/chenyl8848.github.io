---
title: 模板方法模式
date: 2022-06-23
isOriginal: true
category:
  - 设计模式
tag:
  - 模板方法模式
---

# 模板方法模式

<!-- more -->

## 1.1 应用实例

编写榨果汁的程序，说明如下:

1. 制作果汁的流程：选材--->清洗--->榨汁--->加冰块（可选）。

2. 通过选择不同的材料，可以制作出不同的果汁。

3. 选材、清洗和榨汁这几个步骤对于制作不同的果汁都是一样的。


## 1.2 模板方法模式

### 1.2.1 基本介绍

1. 模板方法模式（Template Method Pattern），又叫模板模式(Template Pattern)，在一个抽象类公开定义了执行它的方法的模板，它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。
2. 简单说，模板方法模式定义一个操作中的算法的骨架，而将一些步骤延迟到子类中，使得子类可以不改变一个算法的结构，就可以重定义该算法的某些特定步骤。
3. 模板方法模式属于行为型模式。

### 1.2.2 原理类图

![image-20220623105129236](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/template_start/image-20220623105129236.png?versionId=CAEQLBiBgIDltKK6jBgiIGE1NjYxYTExNTM0NDQ5ZjFhNzc3NzNhNjZiYmVjYjVj)


对原理类图的说明-即(模板方法模式的角色及职责)

1. `AbstractClass` 抽象类，类中实现了模板方法(template)，定义了算法的骨架，具体子类需要去实现其它的抽象方法
2. `ConcreteClass` 实现抽象方法，以完成算法中特点子类的步骤。

### 1.2.3 代码实现

1. 思路分析和图解(类图)

   ![image-20220623105306361](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/template_start/image-20220623105306361.png?versionId=CAEQLBiBgMDitaK6jBgiIGNkNGYzM2QzMDk4ZjQ1ZDE5NzEyNWUzZTEyOWEzNGI5)

2. 代码实现

   1. 创建 `MakeJuice` 抽象类

      ```java
      public abstract class MakeJuice {
      
          // 通用的模板方法，使用 final 修饰，子类无法进行更改
          final void make() {
              select();
              clean();
              juicing();
              addIce();
          }
      
          // 选择材料 可以是西瓜(watermelon)、橙子(orange)、葡萄(grape)、
          public abstract void select();
      
          // 清洗材料
          public void clean() {
              System.out.println("清洗材料...");
          }
      
          // 材料榨汁
          public void juicing() {
              System.out.println("榨汁...");
          }
      
          // 钩子方法，默认不实现，让子类决定是否实现
          public void addIce() {
      
          }
      
      
      }
      ```

   2. 创建 `MakeWatermelonJuice` `MakeOrangeJuice`  `MakeGrapeJuice` 子类

      ```java
      public class MakeWatermelonJuice extends MakeJuice{
      
          @Override
          public void select() {
              System.out.println("选择西瓜...");
          }
      }
      
      ```

      ```java
      public class MakeOrangeJuice extends MakeJuice{
          @Override
          public void select() {
              System.out.println("选择橙子...");
          }
      
          @Override
          public void addIce() {
              System.out.println("添加冰块...");
          }
      }
      ```

      ```java
      public class MakeGrapeJuice extends MakeJuice{
          @Override
          public void select() {
              System.out.println("选择葡萄...");
          }
      
          @Override
          public void addIce() {
              System.out.println("添加冰块...");
          }
      }
      ```

   3. 创建客户端调用

      ```java
      public class Client {
      
          public static void main(String[] args) {
              MakeJuice watermelonJuice = new MakeWatermelonJuice();
              MakeJuice orangeJuice = new MakeOrangeJuice();
              MakeJuice grapeJuice = new MakeGrapeJuice();
      
              watermelonJuice.make();
              orangeJuice.make();
              grapeJuice.make();
      
              // 输出
              // 选择西瓜...
              // 清洗材料...
              // 榨汁...
              // 选择橙子...
              // 清洗材料...
              // 榨汁...
              // 添加冰块...
              // 选择葡萄...
              // 清洗材料...
              // 榨汁...
              // 添加冰块...
          }
      }
      ```

### 1.2.4 钩子方法

1. 在模板方法模式的父类中，我们可以定义一个方法，它默认不做任何事，子类可以视情况要不要覆盖它，该方法称为“钩子”。

2. 在榨果汁中 `addIce()` 方法就是一个钩子方法。


## 1.3 模板方法模式在 Spring 框架应用的源码分析

1. Spring IOC 容器初始化时运用到的模板方法模式。

2. 源码的类图(说明层次关系)

   ![image-20220623111312704](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/template_start/image-20220623111312704.png?versionId=CAEQLBiBgMD9tqK6jBgiIGNiNzY0ODE2ZjFkOTQwZmY4MjVmYTVmNWM1NWUzYjY2)


## 1.4 模板方法模式的注意事项和细节

1. 基本思想是：算法只存在于一个地方，也就是在父类中，容易修改。需要修改算法时，只要修改父类的模板方法或者已经实现的某些步骤，子类就会继承这些修改。
2. 实现了最大化代码复用，父类的模板方法和已实现的某些步骤会被子类继承而直接使用。
3. 既统一了算法，也提供了很大的灵活性，父类的模板方法确保了算法的结构保持不变，同时由子类提供部分步骤的实现。
4. 该模式的不足之处：每一个不同的实现都需要一个子类实现，导致类的个数增加，使得系统更加庞大。
5. 一般模板方法都加上 `final` 关键字， 防止子类重写模板方法。
6. 模板方法模式使用场景：当要完成在某个过程，该过程要执行一系列步骤 ，这一系列的步骤基本相同，但其个别步骤在实现时 可能不同，通常考虑用模板方法模式来处理。

