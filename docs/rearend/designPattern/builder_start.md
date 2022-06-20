---
title: 建造者模式
date: 2022-06-12
isOriginal: true
category:
  - 设计模式
tag:
  - 建造者模式
---

# 建造者模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

1. 需要建房子：这一过程为打桩、砌墙、封顶。

2. 房子有各种各样的，比如普通房，高楼，别墅，各种房子的过程虽然一样，但是要求不要相同的房子。

3. 请编写程序，完成需求。

### 1.1.2 代码实现

1. 思路分析(图解)

   ![image-20220619100846152](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/builder_start/image-20220619100846152.png?versionId=**CAEQLBiBgIDz7bD6ixgiIGY5MzQ5MmIzNTk0MDQ2NzdiNjYwMjlhZDUyYTdmMmFj)

2. 代码演示

   1. 创建建房抽象类

      ```java
      public abstract class AbstractHouse {
      
          // 打地基
          public abstract void buildFoundation();
      
          // 砌墙
          public abstract void buildWall();
      
          // 封顶
          public abstract void buildRoof();
      
          // 房子建造过程
          public void build() {
              buildFoundation();
              buildWall();
              buildRoof();
          }
      }
      ```

   2. 创建普通房子类

      ```java
      public class CommonHouse extends AbstractHouse{
          @Override
          public void buildFoundation() {
              System.out.println("普通房子打地基...");
          }
      
          @Override
          public void buildWall() {
              System.out.println("普通房子砌墙...");
          }
      
          @Override
          public void buildRoof() {
              System.out.println("普通房子封顶...");
          }
      }
      ```

   3. 创建高楼类

      ```java
      public class HighBuilding extends AbstractHouse{
          @Override
          public void buildFoundation() {
              System.out.println("高楼大厦打地基...");
          }
      
          @Override
          public void buildWall() {
              System.out.println("高楼大厦砌墙...");
          }
      
          @Override
          public void buildRoof() {
              System.out.println("高楼大厦封顶...");
          }
      }
      ```

   4. 客户端调用

      ```java
      public class Client {
      
          public static void main(String[] args) {
              CommonHouse commonHouse = new CommonHouse();
              commonHouse.build();
      
              HighBuilding highBuilding = new HighBuilding();
              highBuilding.build();
      
              // 输出
              // 普通房子打地基...
              // 普通房子砌墙...
              // 普通房子封顶...
              // 高楼大厦打地基...
              // 高楼大厦砌墙...
              // 高楼大厦封顶...
          }
      }
      ```

### 1.1.3 问题分析

1. 优点是比较好理解，简单易操作。
2.  设计的程序结构，过于简单，没有设计缓存层对象，程序的扩展和维护不好。也就是说，这种设计方案，把产品(即：房子) 和创建产品的过程(即：建房子流程) 封装在一起，耦合性增强了。
3. 解决方案：将产品和产品建造过程解耦。

## 1.2 建造者模式

### 1.2.1 基本介绍

1. 建造者模式（Builder Pattern）又叫**生成器模式**，是一种**对象构建模式**。它可以将复杂对象的建造过程抽象出来（抽象类别），使这个抽象过程的不同实现方法可以构造出不同表现（属性）的对象。
2. 建造者模式是一步一步创建一个复杂的对象，它允许用户只通过指定复杂对象的类型和内容就可以构建它们，用户不需要知道内部的具体构建细节。

### 1.2.2 四个角色

1. Product（产品角色）：一个具体的产品对象。
2. Builder（抽象建造者）：创建一个Product对象的各个部件指定的 接口/抽象类。
3. ConcreteBuilder（具体建造者）：实现接口，构建和装配各个部件。
4. Director（指挥者）：构建一个使用Builder接口的对象。它主要是用于创建一个复杂的对象。它主要有两个作用，一是：隔离了客户与对象的生产过程，二是：负责控制产品对象的生产过程。

### 1.2.3 原理类图

![image-20220619101351763](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/builder_start/image-20220619101351763.png?versionId=CAEQLBiBgMCp_bL6ixgiIGZhZjlmNTM2NzFjYTRlODZhNWM1YzEwOWMzZjFmOGUy)


## 1.3 建造者模式解决盖房需求应用实例

1. 需要建房子：这一过程为打桩、砌墙、封顶。不管是普通房子也好，别墅也好都需要经历这些过程，下面使用建造者模式(Builder Pattern)来完成。

2. 思路分析图解(类图)

   ![image-20220619101425109](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/builder_start/image-20220619101425109.png?versionId=CAEQLBiBgIDvv7T6ixgiIDA3ZTI0YzFmYzRjZjRmN2RhNGE3MDc5NDc4ZjdhZDNi)

3. 代码实现

   1. 创建房子（产品）类

      ```java
      ublic class House {
      
          private String name;
      
          private String address;
      
          public House() {
          }
      
          public House(String name, String address) {
              this.name = name;
              this.address = address;
          }
      
          public String getName() {
              return name;
          }
      
          public void setName(String name) {
              this.name = name;
          }
      
          public String getAddress() {
              return address;
          }
      
          public void setAddress(String address) {
              this.address = address;
          }
      }
      ```

   2. 创建房子建造类

      ```java
      public abstract class HouseBuilder {
      
          House house = new House();
      
          // 打地基
          public abstract void buildFoundation();
      
          // 砌墙
          public abstract void buildWall();
      
          // 封顶
          public abstract void buildRoof();
      
          // 房子建好后，将房子返回出去
          public House build() {
              return house;
          }
      }
      ```

   3. 创建普通房子类

      ```java
      public class CommonHouse extends HouseBuilder {
          @Override
          public void buildFoundation() {
              System.out.println("普通房子打地基...");
          }
      
          @Override
          public void buildWall() {
              System.out.println("普通房子砌墙...");
          }
      
          @Override
          public void buildRoof() {
              System.out.println("普通房子封顶...");
          }
      }
      ```

   4. 创建高楼大厦类

      ```java
      public class HighBuilding extends HouseBuilder {
          @Override
          public void buildFoundation() {
              System.out.println("高楼大厦打地基...");
          }
      
          @Override
          public void buildWall() {
              System.out.println("高楼大厦砌墙...");
          }
      
          @Override
          public void buildRoof() {
              System.out.println("高楼大厦封顶...");
          }
      }
      ```

   5. 创建指挥者类

      ```java
      public class HouseDirector {
      
          private HouseBuilder houseBuilder;
      
          public HouseDirector() {
          }
      
          public HouseDirector(HouseBuilder houseBuilder) {
              this.houseBuilder = houseBuilder;
          }
      
          public House construct() {
              houseBuilder.buildFoundation();
              houseBuilder.buildWall();
              houseBuilder.buildRoof();
              return houseBuilder.build();
          }
      
          public HouseBuilder getHouseBuilder() {
              return houseBuilder;
          }
      
          public void setHouseBuilder(HouseBuilder houseBuilder) {
              this.houseBuilder = houseBuilder;
          }
      }
      ```

   6. 客户端调用

      ```java
      public class Client {
      
          public static void main(String[] args) {
              // 房子建造指挥者
              HouseDirector houseDirector = new HouseDirector();
              // 建造普通房子
              CommonHouse commonHouse = new CommonHouse();
              houseDirector.setHouseBuilder(commonHouse);
              // 输出建造过程
              houseDirector.construct();
      
              // 建造高楼大厦
              HighBuilding highBuilding = new HighBuilding();
              houseDirector.setHouseBuilder(highBuilding);
              // 输出建造过程
              houseDirector.construct();
      
              // 输出
              // 普通房子打地基...
              // 普通房子砌墙...
              // 普通房子封顶...
              // 高楼大厦打地基...
              // 高楼大厦砌墙...
              // 高楼大厦封顶...
          }
      }
      ```

## 1.4 建造者模式在JDK的应用和源码分析

1. `java.lang.StringBuilder` 中的建造者模式

2. 代码说明 + Debug 源码

   1. `StringBuilder` 的使用

      ```java
      public class BuilderTest {
      
          public static void main(String[] args) {
              StringBuilder stringBuilder = new StringBuilder();
              stringBuilder.append("hello world");
              System.out.println(stringBuilder);
              /**
               * 分析:
               *  1.Appendable 接口定义了多个 append() 方法，即 Appendable 为抽象建造者，定义了抽象方法
               *  2.AbstractStringBuilder 实现了 Appendable 接口，实现了方法，AbstractStringBuilder 是具体的建造者，只是不能实例化
               *  3.StringBuilder 继承了 AbstractStringBuilder, 即是具体的建造者，又充当了指挥者角色
               */
          }
      }
      ```

   2. `Appendable` 接口

      ```java
      public interface Appendable {
      
          Appendable append(CharSequence csq) throws IOException;
      
          Appendable append(CharSequence csq, int start, int end) throws IOException;
      
          Appendable append(char c) throws IOException;
      }
      ```

      

   3. `AbstractStringBuilder` 抽象类

      ```java
      abstract class AbstractStringBuilder implements Appendable, CharSequence {
          
          //...
          
          public AbstractStringBuilder append(String str) {
              if (str == null)
                  return appendNull();
              int len = str.length();
              ensureCapacityInternal(count + len);
              str.getChars(0, len, value, count);
              count += len;
              return this;
          }
          
          //...
      }
      ```

   4. `StringBuilder` 类

      ```java
      public final class StringBuilder
          extends AbstractStringBuilder
          implements java.io.Serializable, CharSequence {
          
          // ...
          
          @Override
          public StringBuilder append(String str) {
              super.append(str);
              return this;
          }
          
          //...
      }
      ```

      

3. 源码中建造者模式角色分析
   - `Appendable` 接口定义了多个append方法(抽象方法), 即 `Appendable` 为抽象建造者, 定义了抽象方法。
   - `AbstractStringBuilder` 实现了 `Appendable` 接口方法，这里的 `AbstractStringBuilder` 已经是建造者，只是不能实例化。
   - `StringBuilder` 即充当了指挥者角色，同时充当了具体的建造者，建造方法的实现是由 `AbstractStringBuilder` 完成，而 `StringBuilder` 继承了`AbstractStringBuilder` 。

## 1.5 建造者模式的注意事项和细节

1. 客户端（使用程序）不必知道产品内部组成的细节，将产品本身与产品的创建过程解耦，使得相同的创建过程可以创建不同的产品对象。
2. 每一个具体建造者都相对独立，而与其他的具体建造者无关，因此可以很方便地替换具体建造者或增加新的具体建造者，用户使用不同的具体建造者即可得到不同的产品对象。
3. 可以更加精细地控制产品的创建过程。将复杂产品的创建步骤分解在不同的方法中，使得创建过程更加清晰，也更方便使用程序来控制创建过程。
4. 增加新的具体建造者无须修改原有类库的代码，指挥者类针对抽象建造者类编程，系统扩展方便，符合“开闭原则”。
5. 建造者模式所创建的产品一般具有较多的共同点，其组成部分相似，如果产品之间的差异性很大，则不适合使用建造者模式，因此其使用范围受到一定的限制。
6. 如果产品的内部变化复杂，可能会导致需要定义很多具体建造者类来实现这种变化，导致系统变得很庞大，因此在这种情况下，要考虑是否选择建造者模式。
7. 抽象工厂模式 VS 建造者模式
   - 抽象工厂模式实现对产品家族的创建，一个产品家族是这样的一系列产品：具有不同分类维度的产品组合，采用抽象工厂模式不需要关心构建过程，只关心什么产品由什么工厂生产即可。
   - 建造者模式则是要求按照指定的蓝图建造产品，它的主要目的是通过组装零配件而产生一个新产品。