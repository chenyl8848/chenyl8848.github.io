---
title: 单例模式
date: 2022-06-07
isOriginal: true
category:
  - 设计模式
tag:
  - 单例模式
---

# 单例模式

## 1.1 单例模式介绍

> 所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，**对某个类只能存在一个对象实例**，并且该类只提供一个取得其对象实例的方法(静态方法)。
<!-- more -->

比如 Hibernate 的 SessionFactory，它充当数据存储源的代理，并负责创建 Session 对象。SessionFactory 并不是轻量级的，一般情况下，一个项目通常只需要一个 SessionFactory 就够，这是就会使用到单例模式。

单例模式八种方式

- 饿汉式 ( 静态常量 )
- 饿汉式（静态代码块）
- 懒汉式(线程不安全)
- 懒汉式(线程安全，同步方法)
- 懒汉式(线程安全，同步代码块)
- 双重检查
- 静态内部类
- 枚举

## 1.2 饿汉式（静态常量）

**应用实例**

步骤如下：

1. 构造器私有化 (防止 new)

2. 类的内部创建对象

3. 向外暴露一个静态的公共方法 `getInstance`

4. 代码实现

   ```java
   public class SingletonDemo01 {
   
       public static void main(String[] args) {
           Singleton01 instance01 = Singleton01.getInstance();
           Singleton01 instance02 = Singleton01.getInstance();
   
           System.out.println(instance01 == instance02); // true
           System.out.println("instance01 hashcode=" + instance01.hashCode());
           System.out.println("instance02 hashcode=" + instance02.hashCode());
       }
   }
   
   /**
    * 饿汉式--静态常量
    */
   class Singleton01 {
   
       // 1.构造方法私有化，外部不能 new
       private Singleton01() {
   
       }
   
       // 2.定义静态变量
       public final static Singleton01 instance = new Singleton01();
   
       // 3.向外暴露一个静态方法
       public static Singleton01 getInstance() {
           return instance;
       }
   }
   ```

**优缺点说明**

1. 优点：这种写法比较简单，就是在类装载的时候就完成实例化，避免了线程同步问题。
2. 缺点：在类装载的时候就完成实例化，没有达到 LazyLoading 的效果。如果从始至终从未使用过这个实例，则会造成内存的浪费。
3. 这种方式基于 classloder 机制避免了多线程的同步问题，不过，instance 在类装载时就实例化，在单例模式中大多数都是调用 getInstance 方法，但是导致类装载的原因有很多种，因此不能确定有其他的方式（或者其他的静态方法）导致类装载，这时候初始化 instance 就没有达到 lazyloading 的效果。
4. 结论：**这种单例模式可用，可能造成内存浪费**。

## 1.3 饿汉式（静态代码块）

**应用实例**

```java
public class SingletonDemo02 {

    public static void main(String[] args) {
        Singleton02 instance01 = Singleton02.getInstance();
        Singleton02 instance02 = Singleton02.getInstance();

        System.out.println(instance01 == instance02); // true
        System.out.println("instance01 hashcode=" + instance01.hashCode());
        System.out.println("instance02 hashcode=" + instance02.hashCode());
    }
}

/**
 * 饿汉式--静态代码块
 */
class Singleton02 {

    // 1.构造方法私有化，外部不能 new
    private Singleton02() {

    }

    // 2.定义静态变量
    public static Singleton02 instance;

    // 3.静态代码块
    static {
        instance = new Singleton02();
    }

    // 4.向外暴露一个静态方法
    public static Singleton02 getInstance() {
        return instance;
    }
}
```

**优缺点说明**

1. 这种方式和上面的方式其实类似，只不过将类实例化的过程放在了静态代码块中，也是在类装载的时候，就执行静态代码块中的代码，初始化类的实例。优缺点和上面是一样的。
2. 结论：**这种单例模式可用，但是可能造成内存浪费**。

## 1.4 懒汉式(线程不安全)

**应用实例**

```java
public class SingletonDemo03 {

    public static void main(String[] args) {
        Singleton03 instance01 = Singleton03.getInstance();
        Singleton03 instance02 = Singleton03.getInstance();

        System.out.println(instance01 == instance02); // true
        System.out.println("instance01 hashcode=" + instance01.hashCode());
        System.out.println("instance02 hashcode=" + instance02.hashCode());

    }
}

/**
 * 懒汉式--线程不安全
 */
class Singleton03 {

    // 1.构造方法私有化，外部不能 new
    private Singleton03() {

    }

    // 2.创建静态常量
    private static Singleton03 instance;

    // 3.创建静态方法，供外部调用，当需要实例时，才去创建 instance
    public static Singleton03 getInstance() {
        if (instance == null) {
            instance = new Singleton03();
        }

        return instance;
    }

}
```

**优缺点说明**

1. 起到了 LazyLoading 的效果，但是只能在单线程下使用。
2. 如果在多线程下，一个线程进入了 `if(singleton==null)` 判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例，造成线程不安全，所以在多线程环境下不可使用这种方式。
3. 结论：**在实际开发中，不要使用这种方式**.

## 1.5 懒汉式(线程安全，同步方法)

**应用实例**

```java
public class SingletonDemo04 {

    public static void main(String[] args) {
        Singleton04 instance01 = Singleton04.getInstance();
        Singleton04 instance02 = Singleton04.getInstance();

        System.out.println(instance01 == instance02); // true
        System.out.println("instance01 hashcode=" + instance01.hashCode());
        System.out.println("instance02 hashcode=" + instance02.hashCode());

    }
}

/**
 * 懒汉式--线程安全
 */
class Singleton04{

    // 1.构造方法私有化，外部不能 new
    private Singleton04() {

    }

    // 2.创建静态常量
    private static Singleton04 instance;

    // 3.创建静态方法，供外部调用，当需要实例时，才去创建 instance
    // 4.加入 synchronized 关键字，解决线程不完全问题
    public static synchronized Singleton04 getInstance() {
        if (instance == null) {
            instance = new Singleton04();
        }

        return instance;
    }

}
```

**优缺点说明**

1. 解决了线程安全问题。
2. 效率太低了，每个线程在想获得类的实例时候，执行 `getInstance()` 方法都要进行同步。而其实这个方法只执行一次实例化代码就够了，后面的想获得该类实例，直接return就行了。方法进行同步效率太低。
3. 结论：**在实际开发中，不推荐使用这种方式**。

## 1.6 懒汉式(线程安全，同步代码块)

**应用实例**

```java
public class SingletonDemo05 {

    public static void main(String[] args) {
        Singleton05 instance01 = Singleton05.getInstance();
        Singleton05 instance02 = Singleton05.getInstance();

        System.out.println(instance01 == instance02); // true
        System.out.println("instance01 hashcode=" + instance01.hashCode());
        System.out.println("instance02 hashcode=" + instance02.hashCode());

    }
}

/**
 * 懒汉式--线程安全--同步代码块
 */
class Singleton05{

    // 1.构造方法私有化，外部不能 new
    private Singleton05() {

    }

    // 2.创建静态常量
    private static Singleton05 instance;

    // 3.创建静态方法，供外部调用，当需要实例时，才去创建 instance
    // 4.使用同步代码块
    public static Singleton05 getInstance() {
        if (instance == null) {
            synchronized (Singleton05.class) {
                instance = new Singleton05();
            }
        }

        return instance;
    }

}
```

**优缺点说明**

1. 结论：**在实际开发中，不能使用这种方式**。

## 1.7 双重检查

**应用实例**

```java
public class SingletonDemo06 {

    public static void main(String[] args) {
        Singleton06 instance01 = Singleton06.getInstance();
        Singleton06 instance02 = Singleton06.getInstance();

        System.out.println(instance01 == instance02); // true
        System.out.println("instance01 hashcode=" + instance01.hashCode());
        System.out.println("instance02 hashcode=" + instance02.hashCode());
    }
}

/**
 * 双重检查
 */
class Singleton06 {

    // 1.构造方法私有化，外部不能直接 new
    private Singleton06 () {

    }

    // 2.创建静态常量
    private static Singleton06 instance;

    // 3.提供静态方法，供外部调用
    // 4.使用双重检查，即实现了懒加载的效果，又保证了线程安全，推荐使用
    public static Singleton06 getInstance() {
        if (instance == null) {
            synchronized (Singleton06.class) {
                if (instance == null) {
                    instance = new Singleton06();
                }

                return instance;
            }
        }

        return instance;
    }
}
```

**优缺点说明**

1. Double-Check 概念是多线程开发中常使用到的，如代码中所示，我们进行了两次 `if(singleton==null)` 检查，这样就可以保证线程安全了。
2. 这样，实例化代码只用执行一次，后面再次访问时，判断 `if(singleton==null)` ，直接 `return` 实例化对象，也避免的反复进行方法同步。
3. 线程安全、延迟加载、效率较高。
4. 结论：在实际开发中，**推荐使用这种单例设计模式**。

## 1.8 静态内部类

**应用实例**

```java
public class SingletonDemo07 {

    public static void main(String[] args) {
        Singleton07 instance01 = Singleton07.getInstance();
        Singleton07 instance02 = Singleton07.getInstance();

        System.out.println(instance01 == instance02); // true
        System.out.println("instance01 hashcode=" + instance01.hashCode());
        System.out.println("instance02 hashcode=" + instance02.hashCode());
    }
}

/**
 * 使用静态内部类的方式实现单例模式
 */
class Singleton07 {

    // 1.构造方法私有化，外部不能直接 new
    private Singleton07() {

    }

    // 2.创建一个静态内部类
    private static class Singleton07Instance {
        private static final Singleton07 INSTANCE = new Singleton07();
    }

    // 3.创建一个静态方法，供外部调用
    // 4.JVM 在加载类的时候不会加载静态内部类，在使用到静态内部类的时候才会加载，这样既保证了懒加载的效果，又保证了线程安全
    public static Singleton07 getInstance() {
        return Singleton07Instance.INSTANCE;
    }
}
```

**优缺点说明**

1. 这种方式采用了类装载的机制来保证初始化实例时只有一个线程。
2. 静态内部类方式在 Singleton 类被装载时并不会立即实例化，而是在需要实例化时，调用 `getInstance` 方法，才会装载 SingletonInstance 类，从而完成 Singleton 的实例化。
3. 类的静态属性只会在第一次加载类的时候初始化，所以在这里，JVM 帮助我们保证了线程的安全性，在类进行初始化时，别的线程是无法进入的。
4. 优点：**避免了线程不安全，利用静态内部类特点实现延迟加载，效率高**。
5. 结论：**推荐使用**。

## 1.9 枚举

**应用实例**

```java
public class SingletonDemo08 {

    public static void main(String[] args) {
        Singleton08 instance01 = Singleton08.INSTANCE;
        Singleton08 instance02 = Singleton08.INSTANCE;

        System.out.println(instance01 == instance02); // true
        System.out.println("instance01 hashcode=" + instance01.hashCode());
        System.out.println("instance02 hashcode=" + instance02.hashCode());
    }
}

/**
 * 使用枚举的方式实现单例模式
 */
enum Singleton08 {

    INSTANCE;

}
```

**优缺点说明**

1. 这借助 JDK 1.5 中添加的枚举来实现单例模式，不仅能避免多线程同步问题，而且还能防止反序列化重新创建新的对象。
2. 这种方式是 EffectiveJava 作者 JoshBloch 提倡的方式。
3. 结论：**推荐使用**。

## 1.10 单例模式在JDK应用的源码分析

1. JDK 中，`java.lang.Runtime` 就是经典的单例模式(饿汉式)

2. 代码分析 + Debug 源码 + 代码说明

   ```java
   public class Runtime {
       // 使用静态常量的方式实现单例模式
       private static Runtime currentRuntime = new Runtime();
   
       /**
        * Returns the runtime object associated with the current Java application.
        * Most of the methods of class <code>Runtime</code> are instance
        * methods and must be invoked with respect to the current runtime object.
        *
        * @return  the <code>Runtime</code> object associated with the current
        *          Java application.
        */
       public static Runtime getRuntime() {
           return currentRuntime;
       }
   
       /** Don't let anyone else instantiate this class */
       private Runtime() {}
   }
   ```


## 1.11 单例模式注意事项和细节说明

1. 单例模式保证了系统内存中该类只存在一个对象，节省了系统资源，对于一些**需要频繁创建销毁的对象，使用单例模式可以提高系统性能**。
2. 当想实例化一个单例类的时候，必须要记住使用相应的获取对象的方法，而不是使用 new。
3. 单例模式使用的场景：需要频繁的进行创建和销毁的对象、创建对象时耗时过多或耗费资源过多(即：重量级对象)，但又经常用到的对象、工具类对象、频繁访问数据库或文件的对象(比如数据源、 session 工厂等)。