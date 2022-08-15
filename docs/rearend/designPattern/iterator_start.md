---
title: 迭代器模式
date: 2022-06-26
isOriginal: true
category:
  - 设计模式
tag:
  - 迭代器模式
---

# 迭代器模式
<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

编写程序展示一个学校院系结构：需求是这样，要在一个页面中展示出学校的院系组成，一个学校有多个学院，一个学院有多个系。如图：

![image-20220731151129225](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/iterator_start/image-20220731151129225.png?versionId=CAEQMRiBgICpiNaBlRgiIDFiODNkNDMzODg1NjRkNDQ5MzVkMWE3ZGE2ZjJiZWFm)

### 1.1.2 设计方案(类图)

![image-20220731151201711](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/iterator_start/image-20220731151201711.png?versionId=CAEQMRiBgIDGhtaBlRgiIDU3Njg3MjFlMjdlYTQ2ZGFiY2JkNjg1OGVmODVjN2Fh)

### 1.1.3 问题分析

1. 将学院看做是学校的子类，系是学院的子类，这样实际上是站在组织大小来进行分层次的。

2.  实际上我们的要求是 ：在一个页面中展示出学校的院系组成，一个学校有多个学院，一个学院有多个系，因此这种方案，不能很好实现的遍历的操作。

## 1.2 迭代器模式

### 1.2.1 基本介绍

1. 迭代器模式（Iterator Pattern）是常用的设计模式，属于**行为型模式**。
2. 如果我们的集合元素是用不同的方式实现的，有数组，还有 Java 的集合类，或者还有其他方式，当客户端要遍历这些集合元素的时候就要使用多种遍历方式，而且还会暴露元素的内部结构，可以考虑使用迭代器模式解决。
3. 迭代器模式，提供一种遍历集合元素的统一接口，用一致的方法遍历集合元素，不需要知道集合对象的底层表示，即：不暴露其内部的结构。

### 1.2.2 原理类图

![image-20220731151828435](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/iterator_start/image-20220731151828435.png?versionId=CAEQMRiBgMCWh9aBlRgiIDA2ZGE1YTI5ZTMyYTRkODdiM2IzYmRiOGE5ZTdlOGM0)

对原理类图的说明-即(迭代器模式的角色及职责)

1. Iterator: 迭代器接口，是系统提供，包含 `hasNext()`、 `next()`、 `remove()`
2. ConcreteIterator: 具体的迭代器类，管理迭代
3. Aggregate: 一个统一的聚合接口， 将客户端和具体聚合解耦
4. ConcreteAggreage: 具体的聚合持有对象集合， 并提供一个方法，返回一个迭代器， 该迭代器可以正确遍历集合

### 1.2.3 代码实现

1. 使用迭代器模式实现遍历所有学院中专业的遍历。

2. 设计思路分析

   ![image-20220731155814990](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/iterator_start/image-20220731155814990.png?versionId=CAEQMRiBgMCFiNaBlRgiIDE0ZWE5NGQwMmVlNTRlYjNhMTUzYWY3NzZmOTEzMWQz)

3. 代码实现
   ```java
   public class Department {
   
       // 专业名称
       private String name;
   
       // 描述
       private String description;
   
       public Department(String name, String description) {
           this.name = name;
           this.description = description;
       }
   
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

   ```java
   public class ComputerCollegeIterator implements Iterator {
   
       Department[] departments;
       // 遍历的位置
       int position = 0;
   
       public ComputerCollegeIterator(Department[] departments) {
           this.departments = departments;
       }
   
       @Override
       public boolean hasNext() {
           if (position >= departments.length || departments[position] == null) {
               return false;
           } else {
               return true;
           }
       }
   
       @Override
       public Object next() {
           Department department = departments[position];
           position += 1;
           return department;
       }
   }
   ```

   ```java
   public class InfoCollegeIterator implements Iterator {
   
       List<Department> departments;
   
       // 索引
       int index = -1;
   
       public InfoCollegeIterator(List<Department> departments) {
           this.departments = departments;
       }
   
       @Override
       public boolean hasNext() {
   
           if (index >= departments.size() - 1) {
               return false;
           } else {
               index += 1;
               return true;
           }
       }
   
       @Override
       public Object next() {
           return departments.get(index);
       }
   }
   ```

   ```java
   public interface College {
   
       String getName();
   
       Iterator iterator();
   
       void addDepartment(String name, String description);
   
   }
   ```

   ```java
   public class ComputerCollege implements College{
   
       Department[] departments;
   
       // 保存当前数组的对象个数
       int numbersOfDepartment = 0;
   
       public ComputerCollege() {
           this.departments = new Department[5];
           addDepartment("软件工程", "软件工程");
           addDepartment("数字媒体与技术", "数字媒体与技术");
           addDepartment("计算机科学", "计算机科学");
       }
   
       @Override
       public String getName() {
           return "计算机学院";
       }
   
       @Override
       public Iterator iterator() {
           return new ComputerCollegeIterator(departments);
       }
   
       @Override
       public void addDepartment(String name, String description) {
           Department department = new Department(name, description);
           departments[numbersOfDepartment] = department;
           numbersOfDepartment += 1;
       }
   }
   ```

   ```java
   public class InfoCollegeIterator implements Iterator {
   
       List<Department> departments;
   
       // 索引
       int index = -1;
   
       public InfoCollegeIterator(List<Department> departments) {
           this.departments = departments;
       }
   
       @Override
       public boolean hasNext() {
   
           if (index >= departments.size() - 1) {
               return false;
           } else {
               index += 1;
               return true;
           }
       }
   
       @Override
       public Object next() {
           return departments.get(index);
       }
   }
   ```

   ```java
   public class Print {
   
       List<College> colleges;
   
       public Print(List<College> colleges) {
           this.colleges = colleges;
       }
   
       // 打印学员信息
       public void print() {
           Iterator<College> iterator = colleges.iterator();
           while (iterator.hasNext()) {
               College next = iterator.next();
               System.out.println("=====" + next.getName() +"=====");
               printDepartment(next);
           }
       }
   
       // 打印专业信息
       public void printDepartment(College college) {
           Iterator iterator = college.iterator();
           while (iterator.hasNext()) {
               Department next = (Department) iterator.next();
               System.out.println("专业:" + next.getName() + " 描述:" + next.getDescription());
           }
       }
   }
   ```

   ```java
   public class Client {
   
       public static void main(String[] args) {
           List<College> collegeList = new ArrayList<>();
           collegeList.add(new ComputerCollege());
           collegeList.add(new InfoCollege());
   
           Print print = new Print(collegeList);
           print.print();
   
           // 输出
           // =====计算机学院=====
           // 专业:软件工程 描述:软件工程
           // 专业:数字媒体与技术 描述:数字媒体与技术
           // 专业:计算机科学 描述:计算机科学
           //  =====信息工程学院=====
           // 专业:网络安全 描述:网络安全
           // 专业:信息安全 描述:信息安全
           // 专业:人工智能安全 描述:人工智能安全
       }
   }
   ```


## 1.3 迭代器模式在JDK-ArrayList 集合应用的源码分析

1. JDK 的 `ArrayList` 集合中就使用了迭代器模式

2. 代码分析+类图+说明

   ```java
   public class IteratorTest {
   
       public static void main(String[] args) {
           List<String> list = new ArrayList<>();
           list.add("张三");
           list.add("李四");
           list.add("王五");
           Iterator<String> iterator = list.iterator();
           while (iterator.hasNext()) {
               System.out.println(iterator.next());
           }
       }
   }
   ```

   ![image-20220731161524749](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/iterator_start/image-20220731161524749.png?versionId=CAEQMRiBgIDbh9aBlRgiIDUyYjRhZDEzODU5MDQ2NjY4NWQ4OTEzYTgyM2Q0MjAy)

3. 对类图的角色分析和说明
   - 内部类 `Itr` 充当具体实现迭代器` Iterator` 的类， 作为 `ArrayList` 内部类
   - `List` 就是充当了聚合接口，含有一个 iterator() 方法，返回一个迭代器对象
   - `ArrayLis`t 是实现聚合接口List 的子类，实现了 `iterator()`
   - 迭代器模式解决了 不同集合(`ArrayList` 、`LinkedList`) 统一遍历问题

## 1.4 迭代器模式的注意事项和细节

- 优点
  1. 提供一个统一的方法遍历对象，客户不用再考虑聚合的类型，使用一种方法就可以遍历对象了。
  2. 隐藏了聚合的内部结构，客户端要遍历聚合的时候只能取到迭代器，而不会知道聚合的具体组成。
  3. 提供了一种设计思想，就是一个类应该只有一个引起变化的原因（叫做单一责任原则）。在聚合类中，我们把迭代器分开，就是要把管理对象集合和遍历对象集合的责任分开，这样一来集合改变的话，只影响到聚合对象。而如果遍历方式改变的话，只影响到了迭代器。
  4. 当要展示一组相似对象，或者遍历一组相同对象时使用, 适合使用迭代器模式。


- 缺点
  每个聚合对象都要一个迭代器，会生成多个迭代器不好管理类。