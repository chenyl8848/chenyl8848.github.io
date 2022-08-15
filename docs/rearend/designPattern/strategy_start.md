---
title: 策略模式
date: 2022-07-30
isOriginal: true
category:
  - 设计模式
tag:
  - 策略模式
---

# 策略模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

1. 有各种鸭子(比如 北京鸭子、玩具鸭子、野鸭子等， 鸭子有各种行为，比如 叫、游泳、飞翔等)

2. 显示鸭子的信息

### 1.1.2 解决方案

设计方案(类图)

![image-20220815155603431](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220815155603431.png)

### 1.1.3 代码实现

```java
public abstract class Duck {

    public Duck() {
    }

    public abstract void display();

    public void quack() {
        System.out.println("鸭子嘎嘎叫...");
    }

    public void swim() {
        System.out.println("鸭子会游泳...");
    }

    public void fly() {
        System.out.println("鸭子会飞翔...");
    }
}
```

```java
public class PekingDuck extends Duck {

    @Override
    public void display() {
        System.out.println("我是北京鸭子...");
    }

    /**
     * 北京鸭子不能飞翔，需要重写 fly()
     */
    @Override
    public void fly() {
        System.out.println("北京鸭子不能飞翔...");
    }
}
```

```java
public class ToyDuck extends Duck {
    @Override
    public void display() {
        System.out.println("我是玩具鸭子...");
    }

    @Override
    public void quack() {
        System.out.println("玩具鸭子不能嘎嘎叫...");
    }

    @Override
    public void swim() {
        System.out.println("玩具鸭子不能游泳...");
    }

    @Override
    public void fly() {
        System.out.println("玩具鸭子不能飞翔...");
    }
}
```

```java
public class WildDuck extends Duck {
    @Override
    public void display() {
        System.out.println("我是野鸭子...");
    }
}
```

### 1.1.4 问题分析

1. 其它鸭子，都继承了 `Duck` 类，所以 `fly()` 让所有子类都会飞了，这是不正确的。
2. 上面说的问题，其实是继承带来的问题：对类的局部改动，尤其超类的局部改动，会影响其他部分，会有溢出效应。
3. 为了改进问题，我们可以通过覆盖 `fly()` 方法来解决（覆盖解决）。
4. 问题又来了，如果我们有一个玩具鸭子 `ToyDuck`, 这样就需要 `ToyDuck` 去覆盖 `Duck` 的所有实现的方法。

## 1.2 策略模式

## 1.2.1 基本介绍

1. 策略模式（Strategy Pattern）：定义算法族（策略组），分别封装起来，让他们之间可以互相替换，此模式让算法的变化独立于使用算法的客户。
2. 策略模式体现了几个设计原则：
   - 第一：把变化的代码从不变的代码中分离出来；
   - 第二：针对接口编程而不是具体类（定义了策略接口）；
   - 第三：多用组合/聚合，少用继承（客户通过组合方式使用策略）。

### 1.2.2 原理类图

![image-20220815164625028](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/strategy_start/image-20220815164625028.png?versionId=CAEQMRiBgMDT4IGDlRgiIGM0MDZhZjJhNTAzNzQwOGNiYWUzYmIxODY1MjEzZTUx)

说明：从上图可以看到，客户 `context` 有成员变量 `strategy` 或者其他的策略接口，至于需要使用到哪个策略，可以在构造器中指定。

### 1.2.3 代码实现

1. 思路分析(类图)
   策略模式：分别封装行为接口，实现算法族，超类里放行为接口对象，在子类里具体设定行为对象。
   原则就是：分离变化部分，封装接口，基于接口编程各种功能。此模式让行为的变化独立于算法的使用者。

   ![image-20220815164710830](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/strategy_start/image-20220815164710830.png?versionId=CAEQMRiBgMCo34GDlRgiIGVmMzU4MTIwM2U1MTRlZTliMmVmNjgyMGIwNTc2MDM5)
   
2. 代码实现

   ```java
   public interface QuackBehavior {
   
       public void quack();
   }
   
   class GoodQuackBehavior implements QuackBehavior{
   
       @Override
       public void quack() {
           System.out.println("能够嘎嘎叫...");
       }
   }
   
   
   class BadQuackBehavior implements QuackBehavior{
   
       @Override
       public void quack() {
           System.out.println("不能够嘎嘎叫...");
       }
   }
   ```

   ```java
   public interface SwimBehavior {
   
       public void swim();
   }
   
   class GoodSwimBehavior implements SwimBehavior {
   
       @Override
       public void swim() {
           System.out.println("能够游泳...");
       }
   }
   
   class BadSwimBehavior implements SwimBehavior {
   
       @Override
       public void swim() {
           System.out.println("不能够游泳...");
       }
   }
   ```

   ```java
   public interface FlyBehavior {
   
       public void fly();
   }
   class GoodFlyBehavior implements FlyBehavior{
   
       @Override
       public void fly() {
           System.out.println("能够飞翔..");
       }
   }
   
   class BadFlyBehavior implements FlyBehavior{
   
       @Override
       public void fly() {
           System.out.println("不能够飞翔..");
       }
   }
   ```

   ```java
   public abstract class Duck {
   
       private QuackBehavior quackBehavior;
   
       private SwimBehavior swimBehavior;
   
       private FlyBehavior flyBehavior;
   
       public Duck(QuackBehavior quackBehavior,
                   SwimBehavior swimBehavior,
                   FlyBehavior flyBehavior) {
           this.quackBehavior = quackBehavior;
           this.swimBehavior = swimBehavior;
           this.flyBehavior = flyBehavior;
       }
   
       public abstract void display();
   
       public void quack() {
           if (Objects.nonNull(quackBehavior)) {
               quackBehavior.quack();
           }
       }
   
       public void swim() {
           if (Objects.nonNull(swimBehavior)) {
               swimBehavior.swim();
           }
       }
   
       public void fly() {
           if (Objects.nonNull(flyBehavior)) {
               flyBehavior.fly();
           }
       }
   }
   ```

   ```java
   public class PekingDuck extends Duck {
   
       public PekingDuck(QuackBehavior quackBehavior, SwimBehavior swimBehavior, FlyBehavior flyBehavior) {
           super(quackBehavior, swimBehavior, flyBehavior);
       }
   
       @Override
       public void display() {
           System.out.println("我是北京鸭子...");
       }
   }
   ```

   ```java
   public class ToyDuck extends Duck {
   
       public ToyDuck(QuackBehavior quackBehavior, SwimBehavior swimBehavior, FlyBehavior flyBehavior) {
           super(quackBehavior, swimBehavior, flyBehavior);
       }
   
       @Override
       public void display() {
           System.out.println("我是玩具鸭子...");
       }
   
   }
   ```

   ```java
   public class WildDuck extends Duck {
   
       public WildDuck(QuackBehavior quackBehavior, SwimBehavior swimBehavior, FlyBehavior flyBehavior) {
           super(quackBehavior, swimBehavior, flyBehavior);
       }
   
       @Override
       public void display() {
           System.out.println("我是野鸭子...");
       }
   }
   ```


## 1.3 策略模式在 JDK-Arrays 应用的源码分析

1. JDK中 `Arrays` 的 `Comparator` 就使用了策略模式

2. 代码分析 + Debug源码 + 模式角色分析
   ```java
   public class StrategyTest {
   
       public static void main(String[] args) {
           Integer[] data = new Integer[]{10, 15, 5, 20};
           Comparator<Integer> comparator = new Comparator<Integer>() {
               // 实现升序排序，返回 -1 放左边，1 放右边，0 保持不变
               @Override
               public int compare(Integer o1, Integer o2) {
                   if (o1 > o2) {
                       return 1;
                   } else {
                       return -1;
                   }
               }
           };
   
           Arrays.sort(data, comparator);
   
           Arrays.stream(data).forEach(System.out::println);
       }
   }
   ```
   
   ```java
   public interface Comparator<T> {
   
       int compare(T o1, T o2);
       
   }
   ```
   
   ```java
   public static <T> void sort(T[] a, Comparator<? super T> c) {
       if (c == null) {
           sort(a);
       } else {
           if (LegacyMergeSort.userRequested)
               legacyMergeSort(a, c);
           else
               TimSort.sort(a, 0, a.length, c, null, 0, 0);
       }
   }
   ```
   
   

## 1.4 策略模式的注意事项和细节

1. 策略模式的关键是：分析项目中变化部分与不变部分。
2. 策略模式的核心思想是：多用组合/聚合，少用继承；用行为类组合，而不是行为的继承，更有弹性。
3. 体现了”对修改关闭，对扩展开放”原则，客户端增加行为不用修改原有代码，只要添加一种策略（或者行为）即可，避免了使用多重转移语句（if else if else）。
4. 提供了可以替换继承关系的办法：策略模式将算法封装在独立的 `Strategy` 类中使得你可以独立于其 `Context` 改变它，使它易于切换、易于理解、易于扩展。
5. 需要注意的是：每添加一个策略就要增加一个类，当策略过多是会导致类数目庞大。