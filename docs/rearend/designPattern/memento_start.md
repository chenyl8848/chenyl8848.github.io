---
title: 备忘录模式
date: 2022-07-27
isOriginal: true
category:
  - 设计模式
tag:
  - 备忘录模式
---

# 备忘录模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

游戏角色有攻击力和防御力，在大战Boss前保存自身的状态(攻击力和防御力)，当大战Boss后攻击力和防御力下降，从备忘录对象恢复到大战前的状态。

### 1.1.2 解决方案

![image-20220729154504011](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/memento_start/image-20220729154504011.png?versionId=CAEQMRiBgICkt7iBlRgiIGUxNTU4NGJlNDMwOTRhMDJiYTA5OTYzZDliYjliZDM0)

### 1.1.3 问题分析

1. 一个对象，就对应一个保存对象状态的对象， 这样当我们游戏的对象很多时，不利于管理，开销也很大。
2. 传统的方式是简单地做备份，new 出另外一个对象出来，再把需要备份的数据放到这个新对象，但这就暴露了对象内部的细节。

## 1.2 备忘录模式

### 1.2.1 基本介绍

1. 备忘录模式（Memento Pattern）：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，这样以后就可将该对象恢复到原先保存的状态。
2. 理解备忘录模式：现实生活中的备忘录是用来记录某些要去做的事情，或者是记录已经达成的共同意见的事情，以防忘记了。而在软件层面，备忘录模式有着相同的含义，备忘录对象主要用来记录一个对象的某种状态，或者某些数据，当要做回退时，可以从备忘录对象里获取原来的数据进行恢复操作。
3. 备忘录模式属于**行为型模式**。

### 1.2.2 原理类图

![image-20220729160420303](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/memento_start/image-20220729160420303.png?versionId=CAEQMRiBgMD8triBlRgiIGUxMjYzZjBhMTliODQ0ZWM4NzIyOTM0Y2Q0Y2VkZTg0)

对原理类图的说明-即(备忘录模式的角色及职责)

1. Originator： 对象(需要保存状态的对象)

2. Memento： 备忘录对象,负责保存好记录，即Originator内部状态

3. Caretaker： 守护者对象，负责保存多个备忘录对象， 使用集合管理，提高效率

4. 说明：如果希望保存多个 Originator 对象的不同时间的状态，只需要使用 HashMap<String, 集合>

5. 代码实现

   ```java
   public class Memento {
   
       private String state;
   
       public Memento(String state) {
           this.state = state;
       }
   
       public String getState() {
           return state;
       }
   
       public void setState(String state) {
           this.state = state;
       }
   }
   ```

   ```java
   public class Originator {
   
       // 状态信息
       private String state;
   
       public Originator(String state) {
           this.state = state;
       }
   
       public String getState() {
           return state;
       }
   
       public void setState(String state) {
           this.state = state;
       }
   
       // 创建一个备份
       public Memento createMemento() {
           return new Memento(state);
       }
   
       // 通过备份对象恢复状态
       public void recoverState(Memento memento) {
           state = memento.getState();
       }
   }
   ```

   ```java
   public class CareTaker {
   
       private List<Memento> mementos = new ArrayList<>();
   
       public void add(Memento memento) {
           mementos.add(memento);
       }
   
       public Memento get(int index) {
           return mementos.get(index);
       }
   }
   ```

   ```java
   public class Client {
   
       public static void main(String[] args) {
           // 创建一个保存备份对象
           CareTaker careTaker = new CareTaker();
           // 创建一个原始对象数据
           Originator originator = new Originator("1");
           // 创建一个备份对象
           Memento memento = originator.createMemento();
           // 保存备份对象
           careTaker.add(memento);
           System.out.println("当前状态是: " + originator.getState());
   
           originator.setState("2");
           System.out.println("当前状态是: " + originator.getState());
   
           // 恢复到状态1
           System.out.println("恢复到状态1");
           originator.recoverState(careTaker.get(0));
           System.out.println("当前状态是: " + originator.getState());
   
           // 输出
           // 当前状态是: 1
           // 当前状态是: 2
           // 恢复到状态1
           // 当前状态是: 1
   
       }
   }
   ```

### 1.2.3 代码实现

1. 应用实例要求

   游戏角色有攻击力和防御力，在大战Boss前保存自身的状态(攻击力和防御力)，当大战Boss后攻击力和防御力下降，从备忘录对象恢复到大战前的状态。

2. 思路分析和图解(类图)

   ![image-20220729192537285](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/memento_start/image-20220729192537285.png?versionId=CAEQMRiBgIDqtriBlRgiIDI5YjQwNWVlMmJmNzQ3NjNhOWE2ZGM5ODBhOWExMDRl)

3. 代码实现
   ```java
   public class Memento {
   
       // 攻击力
       private int attack;
   
       // 防御力
       private int defense;
   
       public Memento(int attack, int defense) {
           this.attack = attack;
           this.defense = defense;
       }
   
       public int getAttack() {
           return attack;
       }
   
       public void setAttack(int attack) {
           this.attack = attack;
       }
   
       public int getDefense() {
           return defense;
       }
   
       public void setDefense(int defense) {
           this.defense = defense;
       }
   }
   ```

   ```java
   public class GameRole {
   
       // 攻击力
       private int attack;
   
       // 防御力
       private int defense;
   
       public GameRole(int attack, int defense) {
           this.attack = attack;
           this.defense = defense;
       }
   
       public int getAttack() {
           return attack;
       }
   
       public void setAttack(int attack) {
           this.attack = attack;
       }
   
       public int getDefense() {
           return defense;
       }
   
       public void setDefense(int defense) {
           this.defense = defense;
       }
   
       public Memento createMemento() {
           return new Memento(attack, defense);
       }
   
       public void recoverState(Memento memento) {
           this.attack = memento.getAttack();
           this.defense = memento.getDefense();
       }
   
       public void display() {
           System.out.println("当前游戏角色-->攻击力:" + attack + " -->防御力:" + defense);
       }
   }
   ```

   ```java
   public class CareTaker {
   
       private Memento memento;
   
       public CareTaker(Memento memento) {
           this.memento = memento;
       }
   
       public Memento getMemento() {
           return memento;
       }
   
       public void setMemento(Memento memento) {
           this.memento = memento;
       }
   }
   ```

   ```java
   public class Client {
   
       public static void main(String[] args) {
           // 创建一个原始对象数据
           GameRole gameRole = new GameRole(100, 100);
           // 创建一个备份对象
           Memento memento = gameRole.createMemento();
           // 创建一个保存备份对象，并保存备份对象
           CareTaker careTaker = new CareTaker(memento);
           gameRole.display();
   
           // 修改属性值
           gameRole.setAttack(50);
           gameRole.setDefense(50);
           gameRole.display();
   
           // 恢复状态
           gameRole.recoverState(memento);
           gameRole.display();
   
           // 输出
           // 当前游戏角色-->攻击力:100 -->防御力:100
           // 当前游戏角色-->攻击力:50 -->防御力:50
           // 当前游戏角色-->攻击力:100 -->防御力:100
       }
   }
   ```

## 1.3 备忘录模式的注意事项和细节

1. 给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态。
2. 实现了信息的封装，使得用户不需要关心状态的保存细节。
3. 如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存，这个需要注意。
4. 适用的应用场景：
   - 后悔药
   - 打游戏时的存档
   - Windows 里的 ctrl + z
   - IE 中的后退
   - 数据库的事务管理
5. 为了节约内存，备忘录模式可以和原型模式配合使用。