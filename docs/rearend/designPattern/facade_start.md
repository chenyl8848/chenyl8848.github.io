---
title: 外观模式
date: 2022-06-21
isOriginal: true
category:
  - 设计模式
tag:
  - 外观模式
---

# 外观模式
<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

组建一个影院：有 DVD 播放器、屏幕、灯光调节等，要求完成使用影院的功能，其过程为：直接用遥控器：统筹各设备开关。

### 1.1.2 解决方案

![image-20220621121738816](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/facade_start/image-20220621121738816.png?versionId=CAEQLBiBgMD2.4KSjBgiIGYwNDdkOTRhZjUyMTRhMWQ5NTA1NmYxOTYzYWIzZWZh)

### 1.1.3 问题分析

1. 在 `ClientTest` 的 `main` 方法中，创建各个子系统的对象，并直接去调用子系统(对象)相关方法，会造成调用过程混乱，没有清晰的过程。
2. 不利于在 `ClientTest` 中，去维护对子系统的操作。
3. 解决思路：定义一个高层接口，给子系统中的一组接口提供一个一致的界面(比如在高层接口提供四个方法 `ready()` 、 `play()` 、 `pause()` 、 `end()` )，用来访问子系统中的一群接口。
4. 也就是说通过定义一个一致的接口(界面类)，用以屏蔽内部子系统的细节，使得调用端只需跟这个接口发生调用，而无需关心这个子系统的内部细节。

## 1.2 外观模式

### 1.2.1 基本介绍

1. 外观模式（Facade），也叫“**过程模式**“：外观模式为子系统中的一组接口提供一个一致的界面，此模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。
2. 外观模式通过定义一个一致的接口，用以屏蔽内部子系统的细节，使得调用端只需跟这个接口发生调用，而无需关心这个子系统的内部细节。
3. ![image-20220621121619945](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/facade_start/image-20220621121619945.png?versionId=CAEQLBiBgICA.YKSjBgiIDhlYTIxZDQwYzk1MzQxZWU5M2NkZDc1Njg0YTE0ODRi)

### 1.2.2 原理类图

![image-20220621121703871](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/facade_start/image-20220621121703871.png?versionId=CAEQLBiBgID5.YKSjBgiIDcyODE5Y2ZkNGIxMjQxN2NhZTFmMGUzOWQ1YmE4ZWRj)

对类图说明(分类外观模式的角色)
1. 外观类(Facade): 为调用端提供统一的调用接口，外观类知道哪些子系统负责处理请求，从而将调用端的请求代理给适当子系统对象。
2. 调用者(Client): 外观接口的调用者。
3. 子系统的集合：指模块或者子系统，处理Facade 对象指派的任务，他是功能的实际提供者。

### 1.2.3 代码实现

1. 使用外观模式来完成影院项目

2. 思路分析和图解(类图)

   ![image-20220621121834899](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/facade_start/image-20220621121834899.png?versionId=CAEQLBiBgMCG.IKSjBgiIGM0MjljOTdmZTY0NjRjMmNhZjY2MjU1N2NhZTkyY2Q2)

3. 代码实现

   1. 创建 DVD 播放器、屏幕、灯光等类

      ```java
      public class DVDPlayer {
      
          private static final DVDPlayer instance = new DVDPlayer();
      
          public static DVDPlayer getInstance() {
              return instance;
          }
      
          public void on() {
              System.out.println(" DVDPlayer on...");
          }
      
          public void off() {
              System.out.println(" DVDPlayer off...");
          }
      
          public void play() {
              System.out.println(" DVDPlayer play...");
          }
      
          public void pause() {
              System.out.println(" DVDPlayer pause...");
          }
      }
      ```

      ```java
      public class Screen {
      
          private static final Screen instance = new Screen();
      
          public static Screen getInstance() {
              return instance;
          }
      
          public void up() {
              System.out.println(" Screen up...");
          }
      
          public void down() {
              System.out.println(" Screen down...");
          }
      
      }
      ```

      ```java
      public class Light {
      
          private static final Light instance = new Light();
      
          public static Light getInstance() {
              return instance;
          }
      
          public void brighten() {
              System.out.println(" Light brighten... ");
          }
      
          public void dimmed() {
              System.out.println(" Light dimmed... ");
          }
      }
      
      ```

   2. 创建外观类

      ```java
      public class Cinema {
      
          private DVDPlayer dvdPlayer;
      
          private Screen screen;
      
          private Light light;
      
          public Cinema() {
              dvdPlayer = DVDPlayer.getInstance();
              screen = Screen.getInstance();
              light = Light.getInstance();
          }
      
          public void ready() {
              screen.down();
              dvdPlayer.on();
              light.dimmed();
          }
      
          public void play() {
              dvdPlayer.play();
          }
      
          public void pause() {
              dvdPlayer.pause();
          }
      
          public void end() {
              dvdPlayer.off();
              screen.up();
              light.brighten();
          }
      }
      ```

   3. 创建客户端调用

      ```java
      public class Client {
      
          public static void main(String[] args) {
              Cinema cinema = new Cinema();
      
              cinema.ready();
              cinema.play();
              cinema.pause();
              cinema.end();
      
              // 输出
              // Screen down...
              // DVDPlayer on...
              // Light dimmed...
              // DVDPlayer play...
              // DVDPlayer pause...
              // DVDPlayer off...
              // Screen up...
              // Light brighten...
          }
      }
      ```

## 1.3 外观模式在 MyBatis 框架应用的源码分析

1. MyBatis 中的 Configuration 去创建 MetaObject 对象使用到外观模式

2. 代码分析 + Debug 源码 + 示意图

3. 对源码中使用到的外观模式的角色类图

   ![image-20220621122240983](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/facade_start/image-20220621122240983.png?versionId=CAEQLBiBgMD6.oKSjBgiIDMwZjEzNjQ5ZGQ5YzRkMjVhMzY5MDYzNzUwM2NhNjAz)


## 1.4 外观模式的注意事项和细节

1. 外观模式对外屏蔽了子系统的细节，因此外观模式降低了客户端对子系统使用的复杂性。
2. 外观模式对客户端与子系统的耦合关系 - 解耦，让子系统内部的模块更易维护和扩展。
3. 通过合理的使用外观模式，可以更好的划分访问的层次。
4. 当系统需要进行分层设计时，可以考虑使用 Facade模式。
5. 在维护一个遗留的大型系统时，可能这个系统已经变得非常难以维护和扩展，此时可以考虑为新系统开发一个 Facade类，来提供遗留系统的比较清晰简单的接口，让新系统与Facade类交互，提高复用性。
6. 不能过多的或者不合理的使用外观模式，使用外观模式好，还是直接调用模块好，要以让系统有层次，利于维护为目的。
