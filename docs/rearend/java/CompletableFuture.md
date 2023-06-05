---
title: ComptetableFuture异步编排
date: 2022-04-10
# sticky: 1
category:
  - Java
tag:
  - 多线程
  - 并发编程
---

# ComptetableFuture异步编排

<!-- more -->

## 1.线程回顾

### 1.1初始化线程的几种方式

1.继承Thread类

```java
public class TestThreadCreate {

    public static void main(String[] args) {
        /**
         * 创建线程的方式一:继承Thread类
          */
        /**
         * 创建并启动线程
         */
        new TestThread().start();
    }


}
class TestThread extends Thread {
    @Override
    public void run() {
        System.out.println("创建线程的方式一:继承Thread类");
    }
}
```

2.实现Runable接口

```java
public class TestThreadCreate {

    public static void main(String[] args) {
        /**
         * 创建线程的方式一:继承Thread类，并重写run方法
          */
        /**
         * 创建并启动线程
         */
//        new TestThread().start();

        /**
         * 创建线程的方式二:实现Runable接口，并重写run方法
         */
        new Thread(new TestRunable()).start();
    }


}

class TestRunable implements Runnable {

    @Override
    public void run() {
        System.out.println("创建线程的方式二:实现Runable接口");
    }
}
```

3.实现Callable接口+FutureTask(可以拿到返回结果，可以处理异常)

```java
public class TestThreadCreate {

    public static void main(String[] args) {
        /**
         * 创建线程的方式一:继承Thread类，并重写run方法
         */
        /**
         * 创建并启动线程
         */
//        new TestThread().start();

        /**
         * 创建线程的方式二:实现Runable接口，并重写run方法
         */
//        new Thread(new TestRunable()).start();

        /**
         * 创建线程的方式三:实现Callable接口+FutureTask(可以拿到返回结果，可以处理异常)
         */
        FutureTask futureTask = new FutureTask<String>(new TestCallable());
        new Thread(futureTask).start();
        try {
            System.out.println(futureTask.get());
        } catch (Exception e) {
            e.printStackTrace();
        }
        /**
         * 使用lambda表达式创建
         */
        FutureTask<String> stringFutureTask = new FutureTask<>(() -> {
            return "创建线程的方式三:实现Callable接口+FutureTask(可以拿到返回结果，可以处理异常)";
        });
        new Thread(stringFutureTask).start();
        try {
            System.out.println(stringFutureTask.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

    }

}

class TestCallable implements Callable {

    @Override
    public Object call() throws Exception {
        return "创建线程的方式三:实现Callable接口+FutureTask(可以拿到返回结果，可以处理异常)";
    }
}
```

4.线程池

```java
public class TestThreadCreate {

    public static void main(String[] args) {
        /**
         * 创建线程的方式一:继承Thread类，并重写run方法
         */
        /**
         * 创建并启动线程
         */
//        new TestThread().start();

        /**
         * 创建线程的方式二:实现Runable接口，并重写run方法
         */
//        new Thread(new TestRunable()).start();

        /**
         * 创建线程的方式三:实现Callable接口+FutureTask(可以拿到返回结果，可以处理异常)
         */
//        FutureTask futureTask = new FutureTask<String>(new TestCallable());
//        new Thread(futureTask).start();
//        try {
//            System.out.println(futureTask.get());
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
        /**
         * 使用lambda表达式创建
         */
//        FutureTask<String> stringFutureTask = new FutureTask<>(() -> {
//            return "创建线程的方式三:实现Callable接口+FutureTask(可以拿到返回结果，可以处理异常)";
//        });
//        new Thread(stringFutureTask).start();
//        try {
//            System.out.println(stringFutureTask.get());
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        } catch (ExecutionException e) {
//            e.printStackTrace();
//        }

        /**
         * 创建线程的方式四:线程池
         */
        //缓存型池子---适用于生存期很短的异步任务
        ExecutorService newCachedThreadPool = Executors.newCachedThreadPool();
        //固定大小的线程池
        ExecutorService newFixedThreadPool = Executors.newFixedThreadPool(5);
        //调度型线程池
        ScheduledExecutorService newScheduledThreadPool = Executors.newScheduledThreadPool(5);
        //单例线程---任意时间池中只能有一个线程
        ExecutorService newSingleThreadExecutor = Executors.newSingleThreadExecutor();

        for (int i = 0; i < 5; i++) {
            newFixedThreadPool.execute(new TestRunable());
            System.out.println("*******************" + i);
        }
        newCachedThreadPool.shutdown();
    }

}
```

**四种创建线程方式的比较：**

方式 1 和方式 2：主进程无法获取线程的运算结果。

方式 3：主进程可以获取线程的运算结果，但是不利于控制服务器中的线程资源。可以导致 

服务器资源耗尽。 

方式 4：通过如下两种方式初始化线程池 

```java
Executors.newFiexedThreadPool(3); 

//或者 

new ThreadPoolExecutor(corePoolSize, maximumPoolSize, keepAliveTime, TimeUnit unit, 

workQueue, threadFactory, handler); 
```

**通过线程池性能稳定，也可以获取执行结果，并捕获异常。但是，在业务复杂情况下，一个异步调用可能会依赖于另一个异步调用的执行结果。**

### 1.2线程池的七大参数

```java
/*Params:
        corePoolSize – the number of threads to keep in the pool, even if they are idle, unless allowCoreThreadTimeOut is set
        maximumPoolSize – the maximum number of threads to allow in the pool
        keepAliveTime – when the number of threads is greater than the core, this is the maximum time that excess idle threads will wait for new tasks before terminating.
        unit – the time unit for the keepAliveTime argument
        workQueue – the queue to use for holding tasks before they are executed. This queue will hold only the Runnable tasks submitted by the execute method.
        threadFactory – the factory to use when the executor creates a new thread
        handler – the handler to use when execution is blocked because the thread bounds and queue capacities are reached
        Throws:
        IllegalArgumentException – if one of the following holds: corePoolSize < 0 keepAliveTime < 0 maximumPoolSize <= 0 maximumPoolSize < corePoolSize
NullPointerException – if workQueue or threadFactory or handler is null*/
public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler) {
        if (corePoolSize < 0 ||
            maximumPoolSize <= 0 ||
            maximumPoolSize < corePoolSize ||
            keepAliveTime < 0)
            throw new IllegalArgumentException();
        if (workQueue == null || threadFactory == null || handler == null)
            throw new NullPointerException();
        this.acc = System.getSecurityManager() == null ?
                null :
                AccessController.getContext();
        this.corePoolSize = corePoolSize;
        this.maximumPoolSize = maximumPoolSize;
        this.workQueue = workQueue;
        this.keepAliveTime = unit.toNanos(keepAliveTime);
        this.threadFactory = threadFactory;
        this.handler = handler;
    }
```

1.**corePoolSize**:核心线程数，池中一直保持的线程的数量，即使线程空闲。除非设置了**allowCoreThreadTimeOut**；

2.**maximumPoolSize**:最大线程数，池中允许的最大线程数;

3.**keepAliveTime**:存活时间，当线程数大于核心线程数的时候，线程在最大多长时间没有接到新任务就会终止释放;

4.unit:时间单位

5.**workQueue**:阻塞队列，用来存储等待执行的任务，如果当前对线程的需求超过了 corePoolSize 大小，就会放在这里等待空闲线程执行。

6.threadFactory:创建线程的工厂，比如指定线程名等;

7.**handler**:拒绝策略，如果线程池满了，就执行拒绝策略。

==线程池的运行流程==:

1、线程池创建，准备好 **corePoolSize**数量的核心线程，准备接受任务 

2、新的任务进来，用 **corePoolSize**准备好的空闲线程执行。 

(1) 、**corePoolSize**满了，就将再进来的任务放入阻塞队列中。空闲的 **corePoolSize**就会自己去阻塞队 

列获取任务执行 

(2) 、阻塞队列满了，就直接开新线程执行，最大只能开到 **maximumPoolSize**指定的数量 

(3) 、**maximumPoolSize**都执行好了。**maximumPoolSize** 数量空闲的线程会在 **keepAliveTime** 指定的时间后自 

动销毁。最终保持到 **corePoolSize**大小 

(4) 、如果线程数开到了 **maximumPoolSize**的数量，还有新任务进来，就会使用 **handler**指定的拒绝策 

略进行处理 

3、所有的线程创建都是由指定的 **threadFactory**创建的。 

==面试：== 

**一个线程池 core 7；max 20 ，queue：50，100并发进来怎么分配的?**

先有 7 个能直接得到执行，接下来 50 个进入队列排队，在多开 13 个继续执行。现在 70 个 

被安排上了。剩下 30 个默认拒绝策略。

### 1.3常见的4中线程池

```java
        //缓存型池子---适用于生存期很短的异步任务
        ExecutorService newCachedThreadPool = Executors.newCachedThreadPool();
        //固定大小的线程池
        ExecutorService newFixedThreadPool = Executors.newFixedThreadPool(5);
        //调度型线程池
        ScheduledExecutorService newScheduledThreadPool = Executors.newScheduledThreadPool(5);
        //单例线程---任意时间池中只能有一个线程
        ExecutorService newSingleThreadExecutor = Executors.newSingleThreadExecutor();
```



1.**newCachedThreadPool**:创建一个可缓存线程池，如果线程池长度超过处理需要，可灵活回收空闲线程，若 

无可回收，则新建线程。 

2.**newFixedThreadPool** :创建一个定长线程池，可控制线程最大并发数，超出的线程会在队列中等待。

3.**newScheduledThreadPool** :创建一个定长线程池，支持定时及周期性任务执行。 

 4.**newSingleThreadExecutor** :创建一个单线程化的线程池，它只会用唯一的工作线程来执行任务，保证所有任务 

按照指定顺序(FIFO, LIFO, 优先级)执行。

### 1.4使用线程池的优点

**1.降低资源的消耗**:通过重复利用已经创建好的线程降低线程的创建和销毁带来的损耗 

**2.提高响应速度**:因为线程池中的线程数没有超过线程池的最大上限时，有的线程处于等待分配任务 

的状态，当任务来时无需创建新的线程就能执行 

**3.提高线程的可管理性**:线程池会根据当前系统特点对池内的线程进行优化处理，减少创建和销毁线程带来 

的系统开销。无限的创建和销毁线程不仅消耗系统资源，还降低系统的稳定性，使 

用线程池进行统一分配

## 2.CompletableFuture异步编排

### 2.1创建异步编排对象

CompletableFuture 提供了四个静态方法来创建一个异步操作。

```java
    /**
     * Returns a new CompletableFuture that is asynchronously completed
     * by a task running in the {@link ForkJoinPool#commonPool()} after
     * it runs the given action.
     *
     * @param runnable the action to run before completing the
     * returned CompletableFuture
     * @return the new CompletableFuture
     */
    public static CompletableFuture<Void> runAsync(Runnable runnable) {
        return asyncRunStage(asyncPool, runnable);
    }

    /**
     * Returns a new CompletableFuture that is asynchronously completed
     * by a task running in the given executor after it runs the given
     * action.
     *
     * @param runnable the action to run before completing the
     * returned CompletableFuture
     * @param executor the executor to use for asynchronous execution
     * @return the new CompletableFuture
     */
    public static CompletableFuture<Void> runAsync(Runnable runnable,
                                                   Executor executor) {
        return asyncRunStage(screenExecutor(executor), runnable);
    }

    /**
     * Returns a new CompletableFuture that is asynchronously completed
     * by a task running in the {@link ForkJoinPool#commonPool()} with
     * the value obtained by calling the given Supplier.
     *
     * @param supplier a function returning the value to be used
     * to complete the returned CompletableFuture
     * @param <U> the function's return type
     * @return the new CompletableFuture
     */
    public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier) {
        return asyncSupplyStage(asyncPool, supplier);
    }

    /**
     * Returns a new CompletableFuture that is asynchronously completed
     * by a task running in the given executor with the value obtained
     * by calling the given Supplier.
     *
     * @param supplier a function returning the value to be used
     * to complete the returned CompletableFuture
     * @param executor the executor to use for asynchronous execution
     * @param <U> the function's return type
     * @return the new CompletableFuture
     */
    public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier,
                                                       Executor executor) {
        return asyncSupplyStage(screenExecutor(executor), supplier);
    }
```

1、runXxxx 都是没有返回结果的，supplyXxx 都是可以获取返回结果的 

2、可以传入自定义的线程池，否则就用默认的线程池；

```java
public class TestCompletableFuture {

//    @Autowired
//    private static ThreadPoolExecutor threadPoolExecutor;

    public static ExecutorService executor = Executors.newFixedThreadPool(10);

    public static void main(String[] args) {
        System.out.println("main...start...");
        /**
         * 没有返回值的异步编排
         */
        CompletableFuture<Void> completableFuture = CompletableFuture.runAsync(() -> {
            System.out.println("当前线程:" + Thread.currentThread().getName());
            System.out.println("没有返回值的异步编排");
        },executor);

        /**
         * 有返回值的异步编排
         */
        CompletableFuture<String> stringCompletableFuture = CompletableFuture.supplyAsync(() -> {
            System.out.println("当前线程:" + Thread.currentThread().getName());
            return "有返回值的异步编排";
        }, executor);

        try {
            System.out.println(stringCompletableFuture.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

        System.out.println("main...end...");
    }
}
```



### 2.2计算完成时回调方法

whenComplete 可以处理正常和异常的计算结果，exceptionally 处理异常情况。 

whenComplete 和 whenCompleteAsync 的区别： 

​	whenComplete：是执行当前任务的线程执行继续执行 whenComplete 的任务。 

​	whenCompleteAsync：是执行把 whenCompleteAsync 这个任务继续提交给线程池 来进行执行。 

**方法不以** **Async** **结尾，意味着** **Action** **使用相同的线程执行，而** **Async** **可能会使用其他线程** 

**执行（如果是使用相同的线程池，也可能会被同一个线程选中执行）**

```java
    public CompletableFuture<T> whenComplete(
        BiConsumer<? super T, ? super Throwable> action) {
        return uniWhenCompleteStage(null, action);
    }

    public CompletableFuture<T> whenCompleteAsync(
        BiConsumer<? super T, ? super Throwable> action) {
        return uniWhenCompleteStage(asyncPool, action);
    }

    public CompletableFuture<T> whenCompleteAsync(
        BiConsumer<? super T, ? super Throwable> action, Executor executor) {
        return uniWhenCompleteStage(screenExecutor(executor), action);
    }

	public CompletableFuture<T> exceptionally(
        Function<Throwable, ? extends T> fn) {
        return uniExceptionallyStage(fn);
    }
```

```java
public class TestWhenComplete {

    public static ExecutorService executor = Executors.newFixedThreadPool(10);

    public static void main(String[] args) {
        System.out.println("main...start...");

        /**
         * 计算完成时回调方法
         */
        CompletableFuture<String> stringCompletableFuture = CompletableFuture.supplyAsync(() -> {
            int i = 10 /0 ;
            System.out.println("当前线程:" + Thread.currentThread().getName());
            return "有返回值的异步编排";
        }, executor).whenComplete((res,excption)->{
            res = "whencomplete";
            //虽然能得到异常信息，但是没法修改返回数据
            System.out.println("异步编排任务完成时，返回结果是:"  + res + ",异常是:" + excption);
        }).exceptionally(throwable -> {
            //出现异常，同事返回默认值
            return "出现异常";
        });

        try {
            System.out.println(stringCompletableFuture.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

        System.out.println("main...end...");
    }
}
```



### 2.3handle方法

和 complete 一样，可对结果做最后的处理（可处理异常），可改变返回值。

```java
    public <U> CompletableFuture<U> handle(
        BiFunction<? super T, Throwable, ? extends U> fn) {
        return uniHandleStage(null, fn);
    }

    public <U> CompletableFuture<U> handleAsync(
        BiFunction<? super T, Throwable, ? extends U> fn) {
        return uniHandleStage(asyncPool, fn);
    }

    public <U> CompletableFuture<U> handleAsync(
        BiFunction<? super T, Throwable, ? extends U> fn, Executor executor) {
        return uniHandleStage(screenExecutor(executor), fn);
    }
```

```java
public class TestHandle {

    public static ExecutorService executor = Executors.newFixedThreadPool(10);

    public static void main(String[] args) {
        System.out.println("main...start...");

        CompletableFuture<Integer> handle = CompletableFuture.supplyAsync(() -> {
            System.out.println("当前线程:" + Thread.currentThread().getName());
            int i = 10 / 0;
            System.out.println("运行结果:" + i);
            return i;
        }, executor).handle((res, exception) -> {
            if (res != null) {
                return res * 2;
            }
            if (exception != null) {
                return 10 / 2;
            }

            return 0;
        });

        try {
            System.out.println("最终结果:" + handle.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
        System.out.println("main...end...");
    }
}
```

### 2.4线程串行化方法

#### 1.thenRun方法:只要之前的任务执行完成，就开始执行 thenRun，只是处理完任务后，执行thenRun 的后续操作，带有 Async 默认是异步执行的;

```java
    public CompletableFuture<Void> thenRun(Runnable action) {
        return uniRunStage(null, action);
    }

    public CompletableFuture<Void> thenRunAsync(Runnable action) {
        return uniRunStage(asyncPool, action);
    }

    public CompletableFuture<Void> thenRunAsync(Runnable action,
                                                Executor executor) {
        return uniRunStage(screenExecutor(executor), action);
    }
```

#### 2.thenAccept 方法:消费处理结果。接收上个任务的处理结果，并消费处理，无返回结果，带有 Async 默认是异步执行的;

```java
    public CompletableFuture<Void> thenAccept(Consumer<? super T> action) {
        return uniAcceptStage(null, action);
    }

    public CompletableFuture<Void> thenAcceptAsync(Consumer<? super T> action) {
        return uniAcceptStage(asyncPool, action);
    }

    public CompletableFuture<Void> thenAcceptAsync(Consumer<? super T> action,
                                                   Executor executor) {
        return uniAcceptStage(screenExecutor(executor), action);
    }
```

#### 3.thenApply 方法：当一个线程依赖另一个线程时，获取上一个任务返回的结果，并返回当前任务的返回值; 

```java
public <U> CompletableFuture<U> thenApply(
    Function<? super T,? extends U> fn) {
    return uniApplyStage(null, fn);
}

public <U> CompletableFuture<U> thenApplyAsync(
    Function<? super T,? extends U> fn) {
    return uniApplyStage(asyncPool, fn);
}

public <U> CompletableFuture<U> thenApplyAsync(
    Function<? super T,? extends U> fn, Executor executor) {
    return uniApplyStage(screenExecutor(executor), fn);
}
```

以上都要前置任务成功完成。 

```java
Function<? super T,? extends U> //T：上一个任务返回结果的类型U：当前任务的返回值类型
```

```java
public class TestThen {

    public static ExecutorService executor = Executors.newFixedThreadPool(10);

    public static void main(String[] args) {
        System.out.println("main...start...");

        CompletableFuture<Integer> integerCompletableFuture = CompletableFuture.supplyAsync(() -> {
            System.out.println("当前线程:" + Thread.currentThread().getName());
            int i = 10;
            System.out.println("结果i=" + i);
            return i;
        }, executor)
//        .thenRunAsync(()->{
//            System.out.println("当前线程:" + Thread.currentThread().getName());
//            System.out.println("之前任务已完成，开启新任务...");
//        },executor);
//        .thenAcceptAsync((t) -> {
//            System.out.println("当前线程:" + Thread.currentThread().getName());
//            System.out.println("结果i2=" + t/2);
//        },executor);
                .thenApplyAsync((t) -> {
                    System.out.println("当前线程:" + Thread.currentThread().getName());
                    System.out.println("上个任务结果i=" + t);
                    return t / 5;
                }, executor);
        try {
            Integer i = integerCompletableFuture.get();
            System.out.println("第二次任务结果i=" + i);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }


        System.out.println("main...end...");
    }
}
```

### 2.5两任务组合---都要完成

两个任务必须都完成，触发该任务。 

#### 1.runAfterBoth:组合两个 future，不需要获取 future 的结果，只需两个 future 处理完任务后，处理该任务。

```java
    public CompletableFuture<Void> runAfterBoth(CompletionStage<?> other,
                                                Runnable action) {
        return biRunStage(null, other, action);
    }

    public CompletableFuture<Void> runAfterBothAsync(CompletionStage<?> other,
                                                     Runnable action) {
        return biRunStage(asyncPool, other, action);
    }

    public CompletableFuture<Void> runAfterBothAsync(CompletionStage<?> other,
                                                     Runnable action,
                                                     Executor executor) {
        return biRunStage(screenExecutor(executor), other, action);
    }
```

#### 2.thenAcceptBoth:组合两个 future，获取两个 future 任务的返回结果，然后处理任务，没有返回值。 

```java
    public <U> CompletableFuture<Void> thenAcceptBoth(
        CompletionStage<? extends U> other,
        BiConsumer<? super T, ? super U> action) {
        return biAcceptStage(null, other, action);
    }

    public <U> CompletableFuture<Void> thenAcceptBothAsync(
        CompletionStage<? extends U> other,
        BiConsumer<? super T, ? super U> action) {
        return biAcceptStage(asyncPool, other, action);
    }

    public <U> CompletableFuture<Void> thenAcceptBothAsync(
        CompletionStage<? extends U> other,
        BiConsumer<? super T, ? super U> action, Executor executor) {
        return biAcceptStage(screenExecutor(executor), other, action);
    }
```

#### 3.thenCombine:组合两个 future，获取两个 future 的返回结果，并返回当前任务的返回值;

```java
    public <U,V> CompletableFuture<V> thenCombine(
        CompletionStage<? extends U> other,
        BiFunction<? super T,? super U,? extends V> fn) {
        return biApplyStage(null, other, fn);
    }

    public <U,V> CompletableFuture<V> thenCombineAsync(
        CompletionStage<? extends U> other,
        BiFunction<? super T,? super U,? extends V> fn) {
        return biApplyStage(asyncPool, other, fn);
    }

    public <U,V> CompletableFuture<V> thenCombineAsync(
        CompletionStage<? extends U> other,
        BiFunction<? super T,? super U,? extends V> fn, Executor executor) {
        return biApplyStage(screenExecutor(executor), other, fn);
    }
```

```java
public class TestBoth {

    public static ExecutorService executor = Executors.newFixedThreadPool(10);

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        /**
         * 异步任务两个都完成
         */
        System.out.println("mian...start...");

        CompletableFuture<Integer> future01 = CompletableFuture.supplyAsync(() -> {
            System.out.println("当前线程:" + Thread.currentThread().getName());
            int i = 10;
            System.out.println("任务1开始...");
            return i;
        }, executor);

        CompletableFuture<String> future02 = CompletableFuture.supplyAsync(() -> {
            System.out.println("当前线程:" + Thread.currentThread().getName());
            System.out.println("任务2开始...");
            return "hello world";
        }, executor);

//        future01.runAfterBothAsync(future02,() ->{
//            System.out.println("任务3开始...");
//        }, executor);

//        future01.thenAcceptBothAsync(future02, (f1,f2) -> {
//            System.out.println("任务3开始..." + f1 + "-->" + f2);
//        }, executor);

        CompletableFuture<String> future03 = future01.thenCombineAsync(future02, (f1, f2) -> {
            System.out.println("任务3开始..." + f1 + "-->" + f2);
            return "哈哈哈";
        }, executor);

        String s = future03.get();
        System.out.println("任务3运行结果:" + s);
        System.out.println("main...end...");
    }
}
```

### 2.6两任务组合---一个完成

当两个任务中，任意一个 future 任务完成的时候，执行任务。

#### 1.runAfterEither:两个任务有一个执行完成，不需要获取 future 的结果，处理任务，也没有返 

回值;

```java
 public CompletableFuture<Void> runAfterEither(CompletionStage<?> other,
                                                  Runnable action) {
        return orRunStage(null, other, action);
    }

    public CompletableFuture<Void> runAfterEitherAsync(CompletionStage<?> other,
                                                       Runnable action) {
        return orRunStage(asyncPool, other, action);
    }

    public CompletableFuture<Void> runAfterEitherAsync(CompletionStage<?> other,
                                                       Runnable action,
                                                       Executor executor) {
        return orRunStage(screenExecutor(executor), other, action);
    }
```

#### 2.acceptEither:两个任务有一个执行完成，获取它的返回值，处理任务，没有新的返回值;

```java
	public CompletableFuture<Void> acceptEither(
        CompletionStage<? extends T> other, Consumer<? super T> action) {
        return orAcceptStage(null, other, action);
    }

    public CompletableFuture<Void> acceptEitherAsync(
        CompletionStage<? extends T> other, Consumer<? super T> action) {
        return orAcceptStage(asyncPool, other, action);
    }

    public CompletableFuture<Void> acceptEitherAsync(
        CompletionStage<? extends T> other, Consumer<? super T> action,
        Executor executor) {
        return orAcceptStage(screenExecutor(executor), other, action);
    }
```

#### 3.applyToEither：两个任务有一个执行完成，获取它的返回值，处理任务并有新的返回值。

```java
 public <U> CompletableFuture<U> applyToEither(
        CompletionStage<? extends T> other, Function<? super T, U> fn) {
        return orApplyStage(null, other, fn);
    }

    public <U> CompletableFuture<U> applyToEitherAsync(
        CompletionStage<? extends T> other, Function<? super T, U> fn) {
        return orApplyStage(asyncPool, other, fn);
    }

    public <U> CompletableFuture<U> applyToEitherAsync(
        CompletionStage<? extends T> other, Function<? super T, U> fn,
        Executor executor) {
        return orApplyStage(screenExecutor(executor), other, fn);
    }
```

```java
public class TestEither {

    public static ExecutorService executor = Executors.newFixedThreadPool(10);

    public static void main(String[] args) throws ExecutionException, InterruptedException {

        System.out.println("main...start...");

        CompletableFuture<Object> future01 = CompletableFuture.supplyAsync(() -> {
            System.out.println("任务1...开始...");
            System.out.println("当前线程:" + Thread.currentThread().getName());
            return 10;
        }, executor);

        CompletableFuture<Object> future02 = CompletableFuture.supplyAsync(() -> {
            System.out.println("任务2...开始...");
            System.out.println("当前线程:" + Thread.currentThread().getName());
            try {
                Thread.sleep(10000);
                System.out.println("任务2...结束...");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "hello world";
        }, executor);

//        future01.runAfterEitherAsync(future02,() -> {
//            System.out.println("任务3...开始...");
//            System.out.println("当前线程:" + Thread.currentThread().getName());
//        }, executor);

//        future01.acceptEitherAsync(future02, (res) -> {
//            System.out.println("任务3...开始...任务1或任务2的结果是:" + res);
//            System.out.println("当前线程:" + Thread.currentThread().getName());
//        }, executor);

        CompletableFuture<String> future03 = future01.applyToEitherAsync(future02, (res) -> {
            System.out.println("任务3...开始...任务1或任务2的结果是:" + res);
            System.out.println("当前线程:" + Thread.currentThread().getName());
            return "哈哈";
        }, executor);

        String s = future03.get();
        System.out.println("任务3运行结果:" + s);

        System.out.println("main...end...");
    }
}
```

### 2.7多任务组合

#### 1.allOf:等待所有任务完成 ;

```java
    /**
     * Returns a new CompletableFuture that is completed when all of
     * the given CompletableFutures complete.  If any of the given
     * CompletableFutures complete exceptionally, then the returned
     * CompletableFuture also does so, with a CompletionException
     * holding this exception as its cause.  Otherwise, the results,
     * if any, of the given CompletableFutures are not reflected in
     * the returned CompletableFuture, but may be obtained by
     * inspecting them individually. If no CompletableFutures are
     * provided, returns a CompletableFuture completed with the value
     * {@code null}.
     *
     * <p>Among the applications of this method is to await completion
     * of a set of independent CompletableFutures before continuing a
     * program, as in: {@code CompletableFuture.allOf(c1, c2,
     * c3).join();}.
     *
     * @param cfs the CompletableFutures
     * @return a new CompletableFuture that is completed when all of the
     * given CompletableFutures complete
     * @throws NullPointerException if the array or any of its elements are
     * {@code null}
     */
    public static CompletableFuture<Void> allOf(CompletableFuture<?>... cfs) {
        return andTree(cfs, 0, cfs.length - 1);
    }
```

#### 2.anyOf:只要有一个任务完成;

```java
    /**
     * Returns a new CompletableFuture that is completed when any of
     * the given CompletableFutures complete, with the same result.
     * Otherwise, if it completed exceptionally, the returned
     * CompletableFuture also does so, with a CompletionException
     * holding this exception as its cause.  If no CompletableFutures
     * are provided, returns an incomplete CompletableFuture.
     *
     * @param cfs the CompletableFutures
     * @return a new CompletableFuture that is completed with the
     * result or exception of any of the given CompletableFutures when
     * one completes
     * @throws NullPointerException if the array or any of its elements are
     * {@code null}
     */
    public static CompletableFuture<Object> anyOf(CompletableFuture<?>... cfs) {
        return orTree(cfs, 0, cfs.length - 1);
    }
```

```java
public class TestAll {

    public static ExecutorService executor = Executors.newFixedThreadPool(10);

    public static void main(String[] args) {
        System.out.println("main...start..");

        CompletableFuture<String> future01 = CompletableFuture.supplyAsync(() -> {
            System.out.println("任务1...开始...");
            return "01";
        }, executor);

        CompletableFuture<String> future02 = CompletableFuture.supplyAsync(() -> {
            System.out.println("任务2...开始...");
            return "02";
        }, executor);

        CompletableFuture<String> future03 = CompletableFuture.supplyAsync(() -> {
            System.out.println("任务3...开始...");
            return "03";
        }, executor);

        CompletableFuture<String> future04 = CompletableFuture.supplyAsync(() -> {
            System.out.println("任务4...开始...");
            return "04";
        }, executor);

//        CompletableFuture<Void> allOf = CompletableFuture.allOf(future01, future02, future03, future04);

        CompletableFuture<Object> anyOf = CompletableFuture.anyOf(future01, future02, future03, future04);

        try {
            System.out.println("anyOf:" + anyOf.get());
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

        System.out.println("main...end...");
    }
}
```
