---
title: 桥接模式
date: 2022-06-13
isOriginal: true
category:
  - 设计模式
tag:
  - 桥接模式
---

# 桥接模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

现在对不同手机类型（折叠手机、直立样式手机）的不同品牌（Vivo、Oppo）实现操作编程(比如:开机、关机、打电话等)。

### 1.2 解决方案

类图分析

![image-20220619104856226](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619104856226.png)

### 1.3 问题分析

1. 扩展性问题(类爆炸)，如果我们再增加手机的样式(旋转式)，就需要增加各个品牌手机的类，同样如果我们增加一个手机品牌，也要在各个手机样式类下增加。
2.  违反了单一职责原则，当我们增加手机样式时，要同时增加所有品牌的手机，这样增加了代码维护成本。

## 1.2 桥接模式

### 1.2.1 基本介绍

1. 桥接模式(Bridge 模式)是指：将实现与抽象放在两个不同的类层次中，使两个层次可以独立改变，是一种**结构型设计模式**。
3. Bridge 模式基于**类的最小设计原则**，通过使用封装、聚合及继承等行为让不同的类承担不同的职责。它的主要特点是把抽象(Abstraction)与行为实现(Implementation)分离开来，从而可以保持各部分的独立性以及应对他们的功能扩展。

### 1.2.2 原理类图

![image-20220619105038507](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619105038507.png)

说明：

1. Client类：桥接模式的调用者
2. 抽象类(Abstraction):维护了 Implementor 即它的实现类 ConcreteImplementorA , 二者是聚合关系, Abstraction 充当桥接类
3. RefinedAbstraction: 是 Abstraction 抽象类的子类
4. Implementor: 行为实现类的接口
5. ConcreteImplementorA/B：行为的具体实现类
6. 从UML图：这里的抽象类和接口是聚合的关系，其实调用和被调用关系

### 1.2.3 代码实现

使用桥接模式改进前面手机的业务需求，让程序具有搞好的扩展性，利用程序维护。

1. 使用桥接模式对应的类图

   ![image-20220619164531954](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619164531954.png)

2. 代码实现

   1. 创建品牌接口

      ```java
      public interface Brand {
      
          void open();
      
          void close();
      
          void call();
      }
      ```

   2. 创建 Vivo 品牌类

      ```java
      public class Vivo implements Brand {
      
      
          @Override
          public void open() {
              System.out.println(" vivo 手机开机...");
          }
      
          @Override
          public void close() {
              System.out.println(" vivo 手机关机...");
          }
      
          @Override
          public void call() {
              System.out.println(" vivo 手机打电话...");
          }
      }
      ```

   3. 创建 Oppo 品牌类

      ```java
      public class Oppo implements Brand {
      
          @Override
          public void open() {
              System.out.println(" oppo 手机开机... ");
          }
      
          @Override
          public void close() {
              System.out.println(" oppo 手机关机... ");
          }
      
          @Override
          public void call() {
              System.out.println(" oppo 手机打电话... ");
          }
      }
      ```

   4. 创建手机抽象类

      ```java
      public abstract class Phone {
      
          /**
           * 手机
           */
          private Brand brand;
      
          public Phone(Brand brand) {
              this.brand = brand;
          }
      
          protected void open() {
              brand.open();
          }
      
          protected void close() {
              brand.close();
          }
      
          protected void call() {
              brand.call();
          }
      }
      ```

   5. 创建折叠手机类

      ```java
      public class FoldedPhone extends Phone {
      
          public FoldedPhone(Brand brand) {
              super(brand);
          }
      
          @Override
          protected void open() {
              System.out.println(" 折叠手机... ");
              super.open();
          }
      
          @Override
          protected void close() {
              System.out.println(" 折叠手机... ");
              super.close();
          }
      
          @Override
          protected void call() {
              System.out.println(" 折叠手机... ");
              super.call();
          }
      }
      ```

   6. 创建直立样式手机类

      ```java
      public class UpRightPhone extends Phone {
          public UpRightPhone(Brand brand) {
              super(brand);
          }
      
          @Override
          protected void open() {
              System.out.println(" 直立样式手机... ");
              super.open();
          }
      
          @Override
          protected void close() {
              System.out.println(" 直立样式手机... ");
              super.close();
          }
      
          @Override
          protected void call() {
              System.out.println(" 直立样式手机... ");
              super.call();
          }
      }
      ```

   7. 创建客户端

      ```java
      public class Client {
      
          public static void main(String[] args) {
              // 获取折叠 Vivo 手机
              FoldedPhone foldedPhone = new FoldedPhone(new Vivo());
              foldedPhone.open();
              foldedPhone.call();
              foldedPhone.close();
      
              // 获取直立样式 Oppo 手机
              UpRightPhone upRightPhone = new UpRightPhone(new Oppo());
              upRightPhone.open();
              upRightPhone.call();
              upRightPhone.close();
      
              // 输出
              // 折叠手机...
              // vivo 手机开机...
              // 折叠手机...
              // vivo 手机打电话...
              // 折叠手机...
              // vivo 手机关机...
              // 直立样式手机...
              // oppo 手机开机...
              // 直立样式手机...
              // oppo 手机打电话...
              // 直立样式手机...
              // oppo 手机关机...
          }
      }
      ```

## 1.3 桥接模式在 JDBC 的源码分析

桥接模式在 JDBC 的源码剖析

1. JDBC 的 `Driver` 接口，如果从桥接模式来看，`Driver` 就是一个接口，下面可以有 MySQL 的 `Driver`、Oracle 的 `Driver`，这些就可以当做实现接口类。

2. 代码分析 + Debug 源码

   1. Java `Driver` 接口

      ```java
      public interface Driver {
          
          Connection connect(String url, java.util.Properties info)
              throws SQLException;
      
          boolean acceptsURL(String url) throws SQLException;
      
          DriverPropertyInfo[] getPropertyInfo(String url, java.util.Properties info)
                               throws SQLException;
      
          int getMajorVersion();
      
          int getMinorVersion();
      
          boolean jdbcCompliant();
      
          public Logger getParentLogger() throws SQLFeatureNotSupportedException;
      }
      ```

   2. MySQL `Driver` 类

      ```java
      public class Driver extends NonRegisteringDriver implements java.sql.Driver {
          public Driver() throws SQLException {
          }
      
          static {
              try {
                  DriverManager.registerDriver(new Driver());
              } catch (SQLException var1) {
                  throw new RuntimeException("Can't register driver!");
              }
          }
      }
      ```

   3. Oracle`Driver` 类

      ```java
      @DefaultLogger("oracle.jdbc")
      @Supports({Feature.CONNECT})
      public class OracleDriver implements Driver {
          
      }
      ```

3. 对 JDBC 源码分析的类图

   ![image-20220619164614141](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619164614141.png)

## 1.4 桥接模式的注意事项和细节

1. 实现了抽象和实现部分的分离，从而极大的提供了系统的灵活性，让抽象部分和实现部分独立开来，这有助于系统进行分层设计，从而产生更好的结构化系统。
2.  对于系统的高层部分，只需要知道抽象部分和实现部分的接口就可以了，其它的部分由具体业务来完成。
3. 桥接模式替代多层继承方案，可以减少子类的个数，降低系统的管理和维护成本。
4. 桥接模式的引入增加了系统的理解和设计难度，由于聚合关联关系建立在抽象层，要求开发者针对抽象进行设计和编程。
5. 桥接模式要求正确识别出系统中两个独立变化的维度 ( 抽象、和实现 ) ，因此其使用范围有一定的局限性，即需要有这样的应用场景。

桥接模式其它应用场景：对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。

## 1.5 桥接模式的应用场景

1. JDBC 驱动程序
2. 银行转账系统
   - 转账分类: 网上转账，柜台转账，AMT转账
   - 转账用户类型：普通用户，银卡用户，金卡用户
3. 消息管理
   - 消息类型：即时消息，延时消息
   - 消息分类：手机短信，邮件消息，QQ 消息


