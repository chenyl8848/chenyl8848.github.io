---
title: JUC并发编程
date: 2022-04-10
category:
  - Java
tag:
  - 多线程
---

# 1.JUC概述
<!-- more -->

>[学习视频【尚硅谷】](https://www.bilibili.com/video/BV1Kw411Z7dF?spm_id_from=333.999.0.0)

## 1.1JUC简介

JUC是java.util.concurrent工具包的简称，是处理线程的一个工具包，是在JDK1.5之后开始出现的。


## 1.2进程和线程

### 1.2.1基本概念

1.**进程（process）**：计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础；

2.**线程（thread）**：操作系统能够进行运算调度的最小单位，被包含在进程之中，是进程中的实际运作单位。

比较：进程——系统资源分配的最小单位；线程——程序执行的最小单位。

### 1.2.2线程的状态

**线程状态枚举类**

```java
public enum State {
        /**
         * Thread state for a thread which has not yet started.
         * 新建
         */
        NEW,

        /**
         * Thread state for a runnable thread.  A thread in the runnable
         * state is executing in the Java virtual machine but it may
         * be waiting for other resources from the operating system
         * such as processor.
         * 准备就绪
         */
        RUNNABLE,

        /**
         * Thread state for a thread blocked waiting for a monitor lock.
         * A thread in the blocked state is waiting for a monitor lock
         * to enter a synchronized block/method or
         * reenter a synchronized block/method after calling
         * {@link Object#wait() Object.wait}.
         * 阻塞
         */
        BLOCKED,

        /**
         * Thread state for a waiting thread.
         * A thread is in the waiting state due to calling one of the
         * following methods:
         * <ul>
         *   <li>{@link Object#wait() Object.wait} with no timeout</li>
         *   <li>{@link #join() Thread.join} with no timeout</li>
         *   <li>{@link LockSupport#park() LockSupport.park}</li>
         * </ul>
         *
         * <p>A thread in the waiting state is waiting for another thread to
         * perform a particular action.
         *
         * For example, a thread that has called <tt>Object.wait()</tt>
         * on an object is waiting for another thread to call
         * <tt>Object.notify()</tt> or <tt>Object.notifyAll()</tt> on
         * that object. A thread that has called <tt>Thread.join()</tt>
         * is waiting for a specified thread to terminate.
         * 不见不散
         */
        WAITING,

        /**
         * Thread state for a waiting thread with a specified waiting time.
         * A thread is in the timed waiting state due to calling one of
         * the following methods with a specified positive waiting time:
         * <ul>
         *   <li>{@link #sleep Thread.sleep}</li>
         *   <li>{@link Object#wait(long) Object.wait} with timeout</li>
         *   <li>{@link #join(long) Thread.join} with timeout</li>
         *   <li>{@link LockSupport#parkNanos LockSupport.parkNanos}</li>
         *   <li>{@link LockSupport#parkUntil LockSupport.parkUntil}</li>
         * </ul>
         * 过时不候
         */
        TIMED_WAITING,

        /**
         * Thread state for a terminated thread.
         * The thread has completed execution.
         * 终结
         */
        TERMINATED;
    }
```

### 1.2.3wait和sleep

1.wait是Object的方法，任何实例对象都能调用；sleep是Thread的静态方法。

2.wait会释放锁，但调用它的前提是当前线程占用锁（即代码要在synchronized中）；sleep不会释放锁，它也不需要占用锁。

3.他们都可以被interrupted方法中断。

### 1.2.4并发和并行

1.并发：同一时刻多个线程在访问同一个资源，多个线程对一个点；

2.并行：多项工作一起执行，最后汇总。

### 1.2.5管程

**管程（monitor）**：在操作系统中也叫监视器（即Java锁），一种同步的机制，保证同一时间只能有一个线程对资源（被保护数据或者代码）进行访问。JVM中的同步基于进入和退出，是使用管程对象实现的。

###  1.2.6用户线程和守护线程

**用户线程**：自定义的线程都是用户线程；

**守护线程**：是一种特殊线程，运行在后台，比如垃圾回收。

```java
public class ThreadTest01 {

    public static void main(String[] args) {
        Thread testThread = new Thread(() -> {
            /**
             * 用户线程--->daemon:false
             */
            System.out.println(Thread.currentThread().getName() + "::" + Thread.currentThread().isDaemon());
            while (true) {

            }
        }, "testThread");

        /**
         * 设置线程为守护线程
         */
        testThread.setDaemon(true);

        testThread.start();

        System.out.println(Thread.currentThread().getName() + " over");
    }
}
```

主线程结束了，用户线程还在运行，jvm存活；没有用户线程了，都是守护线程，jvm结束。

# 2、Lock接口

### 2.1Synchronized

#### 2.1.1Synchronized关键字回顾

Synchronized是Java中的关键字，是一种同步锁。可以修饰多个对象：

1. 修饰**一个代码块**，被修饰的代码块称为**同步语句块**，其作用的范围是大括号{}括起来的代码，**作用的对象是调用这个代码块的对象**；
2. 修饰**一个方法**，被修饰的方法称为**同步方法**，其作用的范围是整个方法，**作用的对象是调用这个方法的对象**；
3. 修饰**一个静态的方法**，其作用的范围是整个静态方法，**作用的对象是这个类的所有对象**；
4. 修饰**一个类**，其作用的范围是 synchronized 后面括号括起来的部分，**作用的对象是这个类的所有对象**。

# 3、线程间通信

# 4、线程间定制化通信

# 5、集合的线程安全

# 6、多线程锁

# 7、Callable接口

# 8、JUC强大的辅助类

# 9、ReentrantReadWriteLock读写锁

# 10、BlockingQueue阻塞队列

# 11、ThreadPool线程池

# 12、Fork/Join分支合并框架

# 13、CompletableFuture异步回调


