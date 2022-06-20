---
title: 组合模式
date: 2022-06-17
isOriginal: true
category:
  - 设计模式
tag:
  - 组合模式
---

# 组合模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

编写程序展示一个学校院系结构：展示出学校的院系组成，一个学校有多个学院，一个学院有多个系。

### 1.1.2 类图展示

![image-20220618161042735](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/composite_start/image-20220618161042735.png?versionId=CAEQLBiBgMDsmtX6ixgiIGY1MzQ5MWRiNDEzYzQzYjNiZmJmMmVmZjkxZTgyZTIz)

### 1.1.3 问题分析

1. 将学院看做是学校的子类，系是学院的子类，这样实际上是站在组织大小来进行分层次的。
2. 实际上我们的要求是 ：在一个页面中展示出学校的院系组成，一个学校有多个学院，一个学院有多个系，因此这种方案，不能很好实现的管理的操作，比如对学院、系的添加，删除，遍历等。
3. 解决方案：把学校、院、系都看做是组织结构，他们之间没有继承的关系，而是一个树形结构，可以更好的实现管理操作。

## 1.2 组合模式

### 1.2.1 基本介绍

1. 组合模式（Composite Pattern），又叫**部分整体模式**，它创建了对象组的**树形结构**，将对象组合成树状结构以表示“整体 - 部分”的层次关系。
2. 组合模式依据树形结构来组合对象，用来表示部分以及整体层次。
3. 组合模式属于结构型模式。
4. 组合模式使得用户对单个对象和组合对象的访问具有一致性，即：组合能让客户端以一致的方式处理个别对象以及组合对象。

### 1.2.2 原理类图

![image-20220618161612355](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/composite_start/image-20220618161612355.png?versionId=CAEQLBiBgMCLm9X6ixgiIDA3OWE0N2U5YzcyZTRiYzZhYmEyOGY3YjU0MWM1NzQ4)

对原理结构图的说明-即(组合模式的角色及职责)


1. Component: 这是组合中对象声明接口，在适当情况下，实现所有类共有的接口默认行为，用于访问和管理 Component 子部件, Component 可以是抽象类或者接口。
2. Leaf: 在组合中表示叶子节点，叶子节点没有子节点。
3. Composite:非叶子节点， 用于存储子部件 在Component 接口中实现子部件的相关操作，比如增加、删除等。

### 1.2.3 代码实现

应用实例要求

1. 编写程序展示一个学校院系结构：展示出学校的院系组成，一个学校有多个学院，一个学院有多个系。

2. 思路分析和图解(类图)

   ![image-20220618162219050](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/composite_start/image-20220618162219050.png?versionId=CAEQLBiBgMDImtX6ixgiIGVlY2YwMDBjMjgwYjQzNzRiNDUyN2FlMzdiNjA0MDU4)

3. 代码实现

   1. 创建 Component 抽象类

      ```java
      public abstract class OrganizationComponent {
      
          private String name;
      
          private String description;
      
          public OrganizationComponent(String name, String description) {
              this.name = name;
              this.description = description;
          }
      
          /**
           * 添加方法，添加默认实现，好处是叶子节点无需实现
           */
          protected void add(OrganizationComponent organizationComponent) {
              throw new UnsupportedOperationException();
          }
      
          /**
           * 删除方法，添加默认实现，好处是叶子节点无需实现
           */
          protected void remove(OrganizationComponent organizationComponent) {
              throw new UnsupportedOperationException();
          }
      
          /**
           * 打印方法，做成抽象的，子类都需要去实现
           */
          public abstract void print();
      
          public String getName() {
              return name;
          }
      
          public void setName(String name) {
              this.name = name;
          }
      
          public String getDescription() {
              return description;
          }
      
          public void setDescription(String description) {
              this.description = description;
          }
      }
      ```

   2. 创建 University 类，并继承 Component

      ```java
      public class University extends OrganizationComponent{
      
          List<OrganizationComponent> list = new ArrayList<>();
      
          public University(String name, String description) {
              super(name, description);
          }
      
          @Override
          protected void add(OrganizationComponent organizationComponent) {
              list.add(organizationComponent);
          }
      
          @Override
          protected void remove(OrganizationComponent organizationComponent) {
              list.remove(organizationComponent);
          }
      
          @Override
          public void print() {
              System.out.println("-----------------" + getName() + "-----------------");
              for (OrganizationComponent component : list) {
                  component.print();
              }
          }
      }
      ```

   3.  创建 College 类，并继承 Component 

      ```java
      public class College extends OrganizationComponent{
      
          List<OrganizationComponent> list = new ArrayList<>();
      
          public College(String name, String description) {
              super(name, description);
          }
      
          @Override
          protected void add(OrganizationComponent organizationComponent) {
              list.add(organizationComponent);
          }
      
          @Override
          protected void remove(OrganizationComponent organizationComponent) {
              list.remove(organizationComponent);
          }
      
          @Override
          public void print() {
              System.out.println("-----------------" + getName() + "-----------------");
              for (OrganizationComponent component : list) {
                  component.print();
              }
          }
      }
      ```

   4. 创建 Department 类，并继承 Component 

      ```java
      public class Department extends OrganizationComponent{
      
          public Department(String name, String description) {
              super(name, description);
          }
      
          @Override
          public void print() {
              System.out.println(getName());
          }
      }
      ```

   5. 创建客户端，进行调用

      ```java
      public class Client {
      
          public static void main(String[] args) {
      
              // 创建学校
              OrganizationComponent university = new University("北京大学", "中国最好的大学");
      
              // 创建学院
              OrganizationComponent computerCollege = new College("计算机学院", "程序员");
              OrganizationComponent infoEngineerCollege = new College("通信学院", "通信员");
      
              // 创建系
              OrganizationComponent department01 = new Department("软件工程", "编程");
              OrganizationComponent department02 = new Department("网络工程", "网工");
              OrganizationComponent department03 = new Department("计算机科学与技术学院", "计科");
      
              computerCollege.add(department01);
              computerCollege.add(department02);
              computerCollege.add(department03);
      
              university.add(computerCollege);
              university.add(infoEngineerCollege);
      
              // 打印输出
              university.print();
      
          }
      }
      ```

## 1.3 组合模式在 JDK 集合的源码分析

1. Java 的集合类 HashMap 就使用了组合模式

2. 代码分析 + Debug 源码
   ```java
   public class CompositeTest {
   
       public static void main(String[] args) {
           HashMap<Integer, String> hashMap = new HashMap<>();
           hashMap.put(0,"东游记");
   
           HashMap<Integer, String> map = new HashMap<>();
           map.put(1,"西游记");
           map.put(2,"水浒传");
   
           hashMap.putAll(map);
       }
   }
   ```

3. 类图

   ![image-20220618172203892](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/composite_start/image-20220618172203892.png?versionId=CAEQLBiBgMCfmtX6ixgiIGQ5MjI4YjBmMTJmOTQ3YjJiMDk1NDQyNDU3OGQwMGVl)

## 1.4 组合模式小结

1. 简化客户端操作，客户端只需要面对一致的对象而不用考虑整体部分或者节点叶子的问题。
2. 具有较强的扩展性，当我们要更改组合对象时，我们只需要调整内部的层次关系，客户端不用做出任何改动。
3. 方便创建出复杂的层次结构，客户端不用理会组合里面的组成细节，容易添加节点或者叶子从而创建出复杂的树形结构。
4. 需要遍历组织机构，或者处理的对象具有树形结构时, 非常适合使用组合模式。
5. 要求较高的抽象性，如果节点和叶子有很多差异性的话，比如很多方法和属性都不一样，不适合使用组合模式。