---
title: 代理模式
date: 2022-06-23
isOriginal: true
category:
  - 设计模式
tag:
  - 代理模式
---

# 代理模式

<!-- more -->

## 1.1 基本介绍

1. 代理模式：为一个对象提供一个替身，以控制对这个对象的访问，即通过代理对象访问目标对象。这样做的好处是：可以在目标对象实现的基础上，增强额外的功能操作，即扩展目标对象的功能。

2. 被代理的对象可以是远程对象、创建开销大的对象或需要安全控制的对象。

3. 代理模式有不同的形式，主要有三种 静态代理、动态代理 (JDK代理、接口代理)和 Cglib 代理 (可以在内存动态的创建对象，而不需要实现接口， 他是属于动态代理的范畴) 。

4. 代理模式示意图

   ![image-20220623102116214](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/proxy_start/image-20220623102116214.png?versionId=CAEQLBiBgMCVh566jBgiIDc0Y2EzYzE1NWE1MDQ2N2FiZTdkMDFiNjI5YWM4OWEw)

## 1.2 静态代理

### 1.2.1 基本介绍

静态代理在使用时，需要定义接口或者父类，被代理对象(即目标对象)与代理对象一起实现相同的接口或者是继承相同父类。


### 1.2.2 应用实例

思路分析图解(类图)

![image-20220623102306481](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/proxy_start/image-20220623102306481.png?versionId=CAEQLBiBgMD.6p66jBgiIGRlNzZhYTJkMTQzZDRjNDVhNWFiNjU1OWQwMmU5ODFm)

代码实现

1. 创建 `ITeachService` 接口

   ```java
   public interface ITeachService {
   
       /**
        * 教学方法
        */
       public void teach();
   }
   ```

2. 创建 `TeachService` 实现类

   ```java
   public class TeachService implements ITeachService{
       @Override
       public void teach() {
           System.out.println(" 开始上课... ");
       }
   }
   ```

3. 创建 `TeachServiceProxy` 代理类

   ```java
   public class TeachServiceProxy implements ITeachService{
   
       private TeachService teachService;
   
       public TeachServiceProxy(TeachService teachService) {
           this.teachService = teachService;
       }
   
       @Override
       public void teach() {
           System.out.println(" 准备上课... ");
           teachService.teach();
           System.out.println(" 结束上课... ");
       }
   }
   ```

4. 创建客户端调用

   ```java
   public class Client {
   
       public static void main(String[] args) {
           TeachServiceProxy teachServiceProxy = new TeachServiceProxy(new TeachService());
           teachServiceProxy.teach();
   
           // 输出
           // 准备上课...
           // 开始上课...
           // 结束上课...
   
       }
   }
   ```

### 1.2.3 静态代理优缺点

1. 优点：在不修改目标对象的功能前提下，能通过代理对象对目标功能扩展。

2. 缺点：因为代理对象需要与目标对象实现一样的接口，所以会有很多代理类。

3. 一旦接口增加方法，目标对象与代理对象都要维护。

## 1.3 动态代理

### 1.3.1 基本介绍

1. 代理对象，不需要实现接口，但是目标对象要实现接口，否则不能用动态代理。

2. 代理对象的生成，是利用 JDK 的 API，动态的在内存中构建代理对象。

3. 动态代理也叫做：JDK 代理、接口代理。

### 1.3.2 JDK中生成代理对象的API

1. 代理类所在包：`java.lang.reflect.Proxy`
2. JDK 实现代理只需要使用 `newProxyInstance` 方法,但是该方法需要接收三个参数,完整的写法是: `static Object newProxyInstance(ClassLoaderloader, Class<?>[]interfaces, InvocationHandlerh)`

### 1.3.3 动态代理应用实例


将前面的静态代理改进成动态代理模式

思路图解(类图)

![image-20220623103106666](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/proxy_start/image-20220623103106666.png?versionId=CAEQLBiBgIDW9J.6jBgiIGE4ZmUzNjBhMzI3ODQ3ODE5MzBiMTY1NjlmZTg2MGU5)

代码实现

1. 创建 `ITeachService` 接口

   ```java
   public interface ITeachService {
   
       public void teach();
   
       public void select(String name);
   
       public String answer(String answer);
   }
   
   ```

2. 创建 `TeachService` 实现类

   ```java
   public class TeachService implements ITeachService {
       @Override
       public void teach() {
           System.out.println(" 开始上课... ");
       }
   
       @Override
       public void select(String name) {
           System.out.println(" " + name + " 回答问题... ");
       }
   
       @Override
       public String answer(String answer) {
           System.out.println(" 答案是... ");
           return answer;
       }
   }
   ```

3. 创建 `TeachServiceProxy` 代理类

   ```java
   public class TeachServiceProxy {
   
       // 要代理的对象
       private Object target;
   
       // 构造方法
       public TeachServiceProxy(Object target) {
           this.target = target;
       }
   
       // 获取代理对象
       public Object getProxyInstance() {
           /**
            *  public static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)
            *  1.ClassLoader loader:指定当前目标对象使用的类加载器，获取加载器的方法固定
            *  2.Class<?>[] interfaces:目标对象实现的接口，使用泛型方法确认类型
            *  3.InvocationHandler h:事件处理，执行目标对象的方法时，会触发当前事件处理器方法，会把当前执行的目标对象的方法作为参数传入
            */
           return Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), new InvocationHandler() {
               @Override
               public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                   System.out.println(" 开始使用 JDK 代理...");
                   // 反射机制调用目标对象的方法
                   Object invoke = method.invoke(target, args);
                   System.out.println(" 结束使用 JDK 代理... ");
                   return invoke;
               }
           });
       }
   }
   ```

4. 创建客户端调用

   ```java
   public class Client {
   
       public static void main(String[] args) {
   
           // 创建目标对象
           TeachService teachService = new TeachService();
           // 创建代理类
           TeachServiceProxy teachServiceProxy = new TeachServiceProxy(teachService);
           // 获取代理对象
           ITeachService instance = (ITeachService) teachServiceProxy.getProxyInstance();
           // 调用方法
           instance.teach();
           instance.select("Tom");
           String answer = instance.answer("Java is best language");
           System.out.println(" answer = " + answer);
   
           // 输出
           // 开始使用 JDK 代理...
           // 开始上课...
           // 结束使用 JDK 代理...
           // 开始使用 JDK 代理...
           // Tom 回答问题...
           // 结束使用 JDK 代理...
           // 开始使用 JDK 代理...
           // 答案是...
           // 结束使用 JDK 代理...
           // answer = Java is best language
       }
   }
   ```

## 1.4 Cglib 代理

### 1.4.1 基本介绍

1. 静态代理和 JDK 代理模式都要求目标对象实现一个接口，但是有时候目标对象只是一个单独的对象，并没有实现任何的接口，这个时候可使用目标对象子类来实现代理，这就是 Cglib 代理。
2. Cglib 代理也叫作**子类代理**， 它是在内存中构建一个子类对象从而实现对目标对象功能扩展，有些书也将 Cglib 代理归属到动态代理。
3. Cglib 是一个强大的高性能的代码生成包，它可以在运行期扩展 Java 类与实现 Java 接口。它广泛的被许多 AOP 的框架使用，例如 SpringAOP，实现方法拦截。
4. 在AOP编程中如何选择代理模式：
   - 目标对象需要实现接口，用 JDK 代理
   - 目标对象不需要实现接口，用 Cglib 代理
5. Cglib 包的底层是通过使用字节码处理框架 ASM 来转换字节码并生成新的类。


### 1.4.2 实现步骤

1. 需要引入Cglib 的 Jar 包

   ```xml
   <dependency>
       <groupId>cglib</groupId>
       <artifactId>cglib</artifactId>
       <version>2.2.2</version>
   </dependency>
   
   <dependency>
       <groupId>asm</groupId>
       <artifactId>asm</artifactId>
       <version>3.2</version>
   </dependency>
   
   <dependency>
       <groupId>asm</groupId>
       <artifactId>asm-commons</artifactId>
       <version>3.2</version>
   </dependency>
   
   <dependency>
       <groupId>asm</groupId>
       <artifactId>asm-tree</artifactId>
       <version>3.2</version>
   </dependency>
   ```

2. 在内存中动态构建子类，注意代理的类不能为 `final`，否则报错 `java.lang.IllegalArgumentException` .

3. 目标对象的方法如果为 final/static ，那么就不会被拦截，即不会执行目标对象额外的业务方法。

### 1.4.3 应用实例

将前面的案例用Cglib代理模式实现

思路图解(类图)

![image-20220623103838856](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/proxy_start/image-20220623103838856.png?versionId=CAEQLBiBgIDG_qC6jBgiIDdkNWQ0NzYzOGQ1NDRiNmJhN2U5MjIwM2U4OTEzOTky)

代码实现

1. 创建 `TeachService` 类

   ```java
   public class TeachService {
   
       public void teach() {
           System.out.println(" 开始上课... ");
       }
   
       public void select(String name) {
           System.out.println(" " + name + " 回答问题... ");
       }
   
       public String answer(String answer) {
           System.out.println(" 答案是... ");
           return answer;
       }
   
   }
   ```

2. 创建 `TeachServiceProxy` 代理类

   ```java
   public class TeachServiceProxy implements MethodInterceptor {
   
       // 目标对象
       private Object target;
   
       // 构造器
       public TeachServiceProxy(Object target) {
           this.target = target;
       }
   
       // 创建一个 代理对象
       public Object getProxyInstance() {
           // 1.创建工具类
           Enhancer enhancer = new Enhancer();
           // 2.设置父类
           enhancer.setSuperclass(target.getClass());
           // 3.设置回调函数
           enhancer.setCallback(this);
           // 4.创建子类对象，即代理对象
           return enhancer.create();
       }
   
       // 重写 intercept 方法，会调用目标对象的方法
       @Override
       public Object intercept(Object o, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
           System.out.println(" 开始 cglib 代理... ");
           Object invoke = method.invoke(target, args);
           System.out.println(" 结束 cglib 代理... ");
           return invoke;
       }
   }
   ```

3. 创建客户端调用

   ```java
   public class Client {
   
       public static void main(String[] args) {
   
           // 创建目标对象
           TeachService teachService = new TeachService();
           // 创建代理类
           TeachServiceProxy teachServiceProxy = new TeachServiceProxy(teachService);
           // 获取代理对象
           TeachService instance = (TeachService) teachServiceProxy.getProxyInstance();
           // 调用方法
           instance.teach();
           instance.select("Tom");
           String answer = instance.answer("Java is best language");
           System.out.println(" answer = " + answer);
   
           // 输出
           // 开始 cglib 代理...
           // 开始上课...
           // 结束 cglib 代理...
           // 开始 cglib 代理...
           // Tom 回答问题...
           // 结束 cglib 代理...
           // 开始 cglib 代理...
           // 答案是...
           // 结束 cglib 代理...
           // answer = Java is best language
   
       }
   }
   ```


## 1.5 常见的代理模式

1. 防火墙代理
   内网通过代理穿透防火墙，实现对公网的访问。
2. 缓存代理
   比如：当请求图片文件等资源时，先到缓存代理取，如果取到资源则ok,如果取不到资源，再到公网或者数据库取，然后缓存。
3. 远程代理
   远程对象的本地代表，通过它可以把远程对象当本地对象来调用。远程代理通过网络和真正的远程对象沟通信息。
4. 同步代理：主要使用在多线程编程中，完成多线程间同步工作。
   同步代理：主要使用在多线程编程中，完成多线程间同步工作。
