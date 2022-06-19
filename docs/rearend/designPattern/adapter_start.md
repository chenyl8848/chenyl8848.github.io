---
title: 适配器模式
date: 2022-06-11
isOriginal: true
category:
  - 设计模式
tag:
  - 适配器模式
---

# 适配器模式

<!-- more -->

## 1.1 适配器模式

### 1.1.1 基本介绍

1. 适配器模式(Adapter Pattern)将某个类的接口转换成客户端期望的另一个接口表示，主的目的是兼容性，让原本因接口不匹配不能一起工作的两个类可以协同工作。其别名为包装器(Wrapper)。
2. 适配器模式属于**结构型模式**。
3. 主要分为三类：**类适配器模式、对象适配器模式、接口适配器模式**。

### 1.1.2 工作原理

1. 适配器模式：将一个类的接口转换成另一种接口，让原本接口不兼容的类可以兼容。

2. 从用户的角度看不到被适配者，是解耦的。

3. 用户调用适配器转化出来的目标接口方法，适配器再调用被适配者的相关接口方法。

4. 用户收到反馈结果，感觉只是和目标接口交互，如图

   ![image-20220619102834065](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619102834065.png)


## 1.2 类适配器模式

### 1.2.1 基本介绍

基本介绍：`Adapter` 类，通过继承 `Source` 类，实现 `Target` 类接口，完成 `Source`  -- > `Target` 的适配。

### 1.2.2 代码实现

1. 应用实例说明
   以生活中充电器的例子来讲解适配器，充电器本身相当于 `Adapter`， 220 V交流电相当于 `Source`  (即被适配者)，我们的目 `Target`  (即 目标)是 5V 直流电。
   
2. 思路分析(类图)

   ![image-20220619103024178](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619103024178.png)

3. 代码实现

   1. 创建 220V 电压类

      ```java
      public class Voltage220V {
      
          /**
           * 输出 220V 交流电
           */
          public int output220V() {
              System.out.println("输出 220V 交流电...");
              return 220;
          }
      }
      ```

   2. 创建 5V 电压接口

      ```java
      public interface Voltage5V {
      
          public int output5V();
      }
      ```

   3. 创建适配器类

      ```java
      public class VoltageAdapter extends Voltage220V implements Voltage5V {
          @Override
          public int output5V() {
              int src = output220V();
              System.out.println("输出 5V 电...");
              int dist = src / 44;
              return dist;
          }
      }
      ```

   4. 创建手机类

      ```java
      public class Phone {
      
          public Phone() {
          }
      
          public void charge(VoltageAdapter voltageAdapter) {
              int i = voltageAdapter.output5V();
              if (i == 5) {
                  System.out.println("手机充上电了，电压:" + i + "V");
              } else {
                  System.out.println("电压不匹配，手机充不了电");
              }
          }
      }
      ```

   5. 创建客户端调用

      ```java
      public class Client {
          public static void main(String[] args) {
              Phone phone = new Phone();
              phone.charge(new VoltageAdapter());
              
              // 输出
              // 输出 220V 交流电...
              // 输出 5V 电...
              // 手机充上电了，电压:5V
          }
      }
      ```

### 1.2.3 具体分析

1. Java 是单继承机制，所以类适配器需要继承 `Source` 类这一点算是一个缺点，因为这要求 `Target` 必须是接口，有一定局限性。
2. `Source` 类的方法在 `Adapter` 中都会暴露出来，也增加了使用的成本。
3. 由于其继承了 `Source` 类，所以它可以根据需求重写 `Source`  类的方法，使得 `Adapter` 的灵活性增强了。

## 1.3 对象适配器模式

### 1.3.1 基本介绍

1. 基本思路和类的适配器模式相同，只是将 `Adapter` 类作修改，不是继承 `Source` 类，而是持有 `Source`  类的实例，以解决兼容性的问题。 即：持有 `Source` 类，实现 `Target` 类接口，完成 `Source` --> `Target` 的适配
2.  根据“合成复用原则”，在系统中尽量使用关联关系（聚合）来替代继承关系。
3. 对象适配器模式是适配器模式常用的一种。

### 1.3.2 代码实现

1. 应用实例说明
   以生活中充电器的例子来讲解适配器，充电器本身相当于 `Adapter`， 220 V交流电相当于 `Source`  (即被适配者)，我们的目 `Target`  (即 目标)是 5V 直流电。
   
2. 思路分析(类图)：

   只需修改适配器即可

   ![image-20220619103738274](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619103738274.png)

3. 代码实现

   只需修改适配器即可

   ```java
   public class VoltageAdapter implements Voltage5V {
   
       private Voltage220V voltage220V;
   
       public VoltageAdapter() {
       }
   
       public VoltageAdapter(Voltage220V voltage220V) {
           this.voltage220V = voltage220V;
       }
   
       public void setVoltage220V(Voltage220V voltage220V) {
           this.voltage220V = voltage220V;
       }
   
       public Voltage220V getVoltage220V() {
           return voltage220V;
       }
   
       @Override
       public int output5V() {
           int dist = 0;
           if (Objects.nonNull(voltage220V)) {
               int src = voltage220V.output220V();
               System.out.println("输出 5V 电...");
               dist = src / 44;
           }
           return dist;
       }
   }
   ```


### 1.3.3 具体分析

1. 对象适配器和类适配器其实算是同一种思想，只不过实现方式不同。
   根据合成复用原则，使用组合替代继承，所以它解决了类适配器必须继承 `Source`  的局限性问题，也不再要求 `Target` 必须是接口。
2. 使用成本更低，更灵活。

## 1.4 接口适配器模式

### 1.4.1 基本介绍

1. 一些书籍称为：适配器模式(Default Adapter Pattern)或**缺省适配器模式**。
2. 核心思路：当不需要全部实现接口提供的方法时，可先设计一个抽象类实现接口，并为该接口中每个方法提供一个默认实现（空方法），那么该抽象类的子类可有选择地覆盖父类的某些方法来实现需求。
3. 适用于一个接口不想使用其所有的方法的情况。

### 1.4.2 代码实现

1. 创建接口类

   ```java
   public interface Interface1 {
   
       void function01();
   
       void function02();
   
       void function03();
   
       void function04();
   }
   ```

2. 创建适配器类

   ```java
   public abstract class AbstractAdapter implements Interface1{
   
       // 默认实现
       @Override
       public void function01() {
   
       }
   
       @Override
       public void function02() {
   
       }
   
       @Override
       public void function03() {
   
       }
   
       @Override
       public void function04() {
   
       }
   }
   ```

3. 创建客户但调用

   ```java
   public class Client {
   
       public static void main(String[] args) {
           // 用匿名内部类的形式实现，只需要去重写我们要调用的方法
           AbstractAdapter abstractAdapter = new AbstractAdapter() {
               @Override
               public void function01() {
                   System.out.println("这是 function01()");
               }
           };
           abstractAdapter.function01();
           
           // 输出
           // 这是 function01()
       }
   }
   ```

## 1.5 适配器模式在 SpringMVC 框架的源码分析

### 1.5.1源码分析

1. SpringMVC 中的 `HandlerAdapter` 就使用了适配器模式

2. SpringMVC 处理请求的流程回顾

   1. 请求首先到达 `DispatcherServlet`

      ```java
      public class DispatcherServlet extends FrameworkServlet {
          protected void doDispatch(HttpServletRequest request, HttpServletResponse response) throws Exception {
      
              //...
              // 通过handlerMapping 来映射 Controller
              mappedHandler = this.getHandler(processedRequest);
              // ...
      		// 获取适配器
              HandlerAdapter ha = this.getHandlerAdapter(mappedHandler.getHandler());
      		// ...
              // 通过适配器调用 Controller 的方法并返回 ModelAndView
              mv = ha.handle(processedRequest, response, mappedHandler.getHandler());
          }
      }
      ```

   2. `HandlerAdapter`

      ```java
      public interface HandlerAdapter {
          boolean supports(Object handler);
      
          @Nullable
          ModelAndView handle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception;
      
          /** @deprecated */
          @Deprecated
          long getLastModified(HttpServletRequest request, Object handler);
      }
      ```

   3. `HandlerAdapter` 的实现子类

      ![image-20220619175252744](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619175252744.png)

      `HandlerAdapter` 的实现子类使得每一种 Controller 有一种对应的适配器实现类，每种 Controller 有不同的实现方式。

3. 使用 `HandlerAdapter` 的原因分析:
   处理器的类型不同，有多重实现方式，那么调用方式就不是确定的，如果需要直接调用 Controller 方法，需要调用的时候就得不断是使用 if else来进行判断是哪一种子类然后执行。那么如果后面要扩展 Controller，就得修改原来的代码，这样违背了 OCP 原则。

### 1.5.2 手写 SpringMVC 获取对应的 Controller

1. 创建 Controller 类

   ```java
   public interface Controller {
   }
   
   class HttpController implements Controller {
       public void doHttpHandler() {
           System.out.println("http...");
       }
   }
   
   class SimpleController implements Controller {
       public void doSimpleHandler() {
           System.out.println("simple...");
       }
   }
   
   class AnnotationController implements Controller {
       public void doAnnotationHandler() {
           System.out.println("annotation...");
       }
   }
   ```

2. 创建适配器类

   ```java
   public interface HandlerAdapter {
       public boolean support(Object handler);
   
       public void handle(Object handler);
   
   }
   
   class HttpHandlerAdapter implements HandlerAdapter {
       @Override
       public boolean support(Object handler) {
           return (handler instanceof HttpController);
       }
   
       @Override
       public void handle(Object handler) {
           ((HttpController) handler).doHttpHandler();;
       }
   }
   
   class SimpleHandlerAdapter implements HandlerAdapter {
       @Override
       public boolean support(Object handler) {
           return (handler instanceof SimpleController);
       }
   
       @Override
       public void handle(Object handler) {
           ((SimpleController) handler).doSimpleHandler();;
       }
   }
   
   class AnnotationHandlerAdapter implements HandlerAdapter {
       @Override
       public boolean support(Object handler) {
           return (handler instanceof AnnotationController);
       }
   
       @Override
       public void handle(Object handler) {
           ((AnnotationController) handler).doAnnotationHandler();;
       }
   }
   ```

3. 创建 `DispatchServlet` 类

   ```java
   public class DispatchServlet {
   
       private static List<HandlerAdapter> handlerAdapters = new ArrayList<>();
   
       public DispatchServlet() {
           handlerAdapters.add(new HttpHandlerAdapter());
           handlerAdapters.add(new SimpleHandlerAdapter());
           handlerAdapters.add(new AnnotationHandlerAdapter());
       }
   
       public void doDispatch() {
           HttpController httpController = new HttpController();
   
           HandlerAdapter handlerAdapter = getHandlerAdapter(handlerAdapters, httpController);
   
           handlerAdapter.handle(httpController);
   
       }
   
       private HandlerAdapter getHandlerAdapter(List<HandlerAdapter> list, Controller controller) {
           return list.stream()
                   .filter(item -> item.support(controller))
                   .findFirst()
                   .orElseThrow(() -> new RuntimeException("handler not support"));
       }
   }
   
   ```

4. 创建客户端

   ```java
   public class Client {
   
       public static void main(String[] args) {
           DispatchServlet dispatchServlet = new DispatchServlet();
           dispatchServlet.doDispatch();
           
           // 输出
           // http...
       }
   }
   ```

## 1.6 适配器模式的注意事项和细节

1. 三种命名方式，是根据 `source` 是以怎样的形式给到 `Adapter`（在Adapter里的形式）来命名的。
2. 类适配器：以类给到，在 `Adapter` 里，就是将 `source` 当做类。
3. 对象适配器：以对象给到，在 `Adapter` 里，将 `source` 作为一个对象。
4. 接口适配器：以接口给到，在Adapter里，将 `source` 作为一个接口，实现。
5. 适配器模式最大的作用是将原本不兼容的接口融合在一起工作。
6. 实际开发中，实现起来不拘泥于这三种经典形式。


