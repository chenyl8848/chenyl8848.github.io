---
title: 工厂模式
date: 2022-06-11
isOriginal: true
category:
  - 设计模式
tag:
  - 工厂模式
---

# 工厂模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

一个披萨的项目，要便于披萨种类的扩展，要便于维护，具体的需求如下：

1. 披萨的种类很多(比如 GreekPizz、CheesePizz 等)。
2. 披萨的制作有： prepare、bake、cut、box.
3. 完成披萨店订购功能。

### 1.1.2 代码实现

1. 思路分析（类图）

   ![image-20220619203000339](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/factory_start/image-20220619203000339.png?versionId=CAEQLBiBgMCdoqT6ixgiIGY2Y2NjNDVjN2VlODQ5MzM4MmUxMWI2ZjAwMmUyMzdk)

2. 定义 `Pizza` 抽象类

   ```java
   public abstract class Pizza {
   
       /** 披萨种类名称 */
       protected String name;
   
       public abstract void prepare();
   
       public void bake() {
           System.out.println(this.name + " 正在烘烤...");
       }
   
       public void cut() {
           System.out.println(this.name + " 正在切割...");
       }
   
       public void box() {
           System.out.println(this.name + " 正在打包...");
       }
   
       public void setName(String name) {
           this.name = name;
       }
   }
   ```

3. 定义 `CheesePizza` 、`GreekPizza` 继承 `Pizza` 

   ```java
   public class CheesePizza extends Pizza{
   
       @Override
       public void prepare() {
           System.out.println("cheesePizza 正在准备...");
       }
   }
   ```

   ```java
   public class GreekPizza extends Pizza{
       @Override
       public void prepare() {
           System.out.println("greekPizza 正在准备...");
       }
   }
   ```

4. 定义 `Order` 类

   ```java
   public class Order {
   
       /**
        * 披萨类型
        */
       private String orderType;
   
       private Pizza pizza;
   
       public Order(String orderType) {
           this.orderType = orderType;
           if (this.orderType.equals("cheese")) {
               pizza = new CheesePizza();
               pizza.setName("cheesePizza");
           } else if (this.orderType.equals("greek")) {
               pizza = new GreekPizza();
               pizza.setName("greekPizza");
           } else if (this.orderType.equals("pepper")) {
               // 当新增一个披萨种类时，order 类也要随着更改，这违反了 开闭原则
               pizza = new PepperPizza();
               pizza.setName("pepperPizza");
           }
   
           if (Objects.isNull(pizza)) {
               System.out.println("Pizza error");
           } else {
               pizza.prepare();
               pizza.bake();
               pizza.cut();
               pizza.box();
           }
   
       }
   
   }
   ```

5. 披萨店 `store`

   ```java
   public class Store {
   
       public static void main(String[] args) {
           Order order01 = new Order("cheese");
           Order order02 = new Order("greek");
           Order order03 = new Order("pepper");
           Order order04 = new Order("yyyy");
           
           // 输出
           // cheesePizza 正在准备...
           // cheesePizza 正在烘烤...
           // cheesePizza 正在切割...
           // cheesePizza 正在打包...
           // greekPizza 正在准备...
           // greekPizza 正在烘烤...
           // greekPizza 正在切割...
           // greekPizza 正在打包...
           // pepperPizza 正在准备...
           // pepperPizza 正在烘烤...
           // pepperPizza 正在切割...
           // pepperPizza 正在打包...
           // Pizza error
       }
   }
   ```

### 1.1.3 具体分析

1. 优点是比较好理解，简单易操作。
2. 当新增一个披萨种类时，Order 类也要随着更改。
3. 违反了设计模式的 OCP 原则，即**对扩展开放，对修改关闭**。当我们给类增加新功能的时候，尽量不修改代码，或者尽可能少修改代码。

## 1.2 简单工厂模式

### 1.2.1 基本介绍

1. 简单工厂模式是属于创建型模式，是工厂模式的一种。简单工厂模式是由一个工厂对象决定创建出哪一种产品类的实例，是工厂模式家族中最简单实用的模式。
2. 简单工厂模式：定义了一个创建对象的类，由这个类来封装实例化对象的行为（代码）。
3. 在软件开发中，当我们会用到大量的创建某种、某类或者某批对象时，就会使用到工厂模式。

### 1.2.2 代码实现

1. 简单工厂模式的设计方案：定义一个可以实例化 `Pizaa` 对象的类，封装创建对象的代码，即 `PizzaFactory`。

2. 代码实现：
   ```java
	public class PizzaFactory {
   
       private PizzaFactory() {
       }
   
       public static Pizza createPizza(String orderType) {
           Pizza pizza = null;
           if (StringUtils.isBlank(orderType)) {
               throw new IllegalStateException("orderType is null");
           }
           if (orderType.equals("cheese")) {
               pizza = new CheesePizza();
               pizza.setName("cheesePizza");
           } else if (orderType.equals("greek")) {
               pizza = new GreekPizza();
               pizza.setName("greekPizza");
           } else if (orderType.equals("pepper")) {
               // 当新增一个披萨种类时，只要修改 PizzaFactory 类即可，对 Order 类无需修改
               pizza = new PepperPizza();
               pizza.setName("pepperPizza");
           } else {
               System.out.println("orderType error");
           }
           return pizza;
       }
   }
   ```
   
   `Order` 类只要通过 `PizzaFactory` 即可创建所需要的 `Pizza`
   
   ```java
   public class Order {
   
       /**
        * 披萨类型
        */
       private String orderType;
   
       private Pizza pizza;
   
       public Order(String orderType) {
           this.orderType = orderType;
           pizza = PizzaFactory.createPizza(this.orderType);
   
           if (Objects.isNull(pizza)) {
               System.out.println("Pizza error");
           } else {
               pizza.prepare();
               pizza.bake();
               pizza.cut();
               pizza.box();
           }
   
       }
   
   }
   ```

## 1.3 工厂方法模式

### 1.3.1 业务需求

前面通过简单工厂模式可以方便的创建不同种类的 `Pizza` 类，但是当新添加一个 `Pizza` 种类时，`PizzaFactory` 中的 `createPizza()` 需要进行修改，还是不满足开闭原则，下面通过工厂方法模式进行优化。

### 1.3.2 基本介绍

工厂方法模式：定义了一个创建对象的抽象方法，由子类决定要实例化的类，工厂方法模式将对象的实例化推迟到子类。

### 1.3.3 代码实现

1. 思路分析（类图）

   ![image-20220619205151254](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/factory_start/image-20220619205151254.png?versionId=CAEQLBiBgMDmtab6ixgiIGRiYzQ4YWNjYTk5MTQxNGJhMjliYmExNmI4N2NkZjQ1)

2. 代码实现

   1. 抽取一个创建不同种类 Pizza 的工厂类 `PizzaFactory`

      ```java
      public abstract class PizzaFactory {
      
         public abstract Pizza createPizza(String orderType);
      }
      ```

   2. 不同种类的 Pizza 具有自己的工厂类，并且继承 `PizzaFactory` 类

      ```java
      public class CheesePizzaFactory extends PizzaFactory{
      
          @Override
          public Pizza createPizza() {
              return new CheesePizza("cheesePizza");
          }
      }
      ```
      
      ```java
      public class GreekPizzaFactory extends PizzaFactory{
      
          @Override
          public Pizza createPizza() {
              return new GreekPizza("greekPizza");
          }
      }
      ```
      
   3. `Order` 类中指定是哪个分店工厂创建的 `Pizza`

      ```java
      public class Order {
      
          private Pizza pizza;
      
          public Order(PizzaFactory pizzaFactory) {
              this.pizza = pizzaFactory.createPizza();
      
              if (Objects.isNull(this.pizza)) {
                  System.out.println("Pizza error");
              } else {
                  this.pizza.prepare();
                  this.pizza.bake();
                  this.pizza.cut();
                  this.pizza.box();
              }
      
          }
      
      }
      ```
      
   4. `Store` 类

      ```java
      public class Store {
      
          public static void main(String[] args) {
              Order order01 = new Order(new CheesePizzaFactory());
              Order order02 = new Order(new GreekPizzaFactory());
      
              // 输出
              // cheesePizza 正在准备...
              // cheesePizza 正在烘烤...
              // cheesePizza 正在切割...
              // cheesePizza 正在打包...
              // greekPizza 正在准备...
              // greekPizza 正在烘烤...
              // greekPizza 正在切割...
              // greekPizza 正在打包...
          }
      }
      ```


## 1.4 抽象工厂模式

### 1.4.1 业务需求

现在，披萨店要提高业务量，推出了不同口味的汉堡（CheeseHamburger、GreekHamburger），如果继续使用工厂方法模式，需要继续添加类，如果产品越来越多，会导致类爆炸，下面通过抽象工厂模式来解决这个问题。

### 1.4.2 基本介绍

1. 抽象工厂模式：定义了一个 interface 用于创建相关或有依赖关系的对象簇，而无需指明具体的类。

2. 抽象工厂模式可以将简单工厂模式和工厂方法模式进行整合。

3. 从设计层面看，抽象工厂模式就是对简单工厂模式的改进(或者称为进一步的抽象)。

4. 将工厂抽象成两层， AbstractFactory( 抽象工厂 ) 和 具体实现的工厂子类。程序员可以根据创建对象类型使用对应的工厂子类。这样将单个的简单工厂类变成了工厂簇，更利于代码的维护和扩展。

5. 类图

   ![image-20220619205458412](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/factory_start/image-20220619205458412.png?versionId=CAEQLBiBgMCtm6j6ixgiIGYzMmZlYmM0ZjM3ZDQxODBiMmJjNTMzZGI5NWVlMmI4)

### 1.4.3 代码实现

1. 抽取一个抽象类 `AbstractFactory`

   ```java
   public abstract class AbstractFactory {
   
       public abstract Pizza createPizza();
   
       public abstract Hamburger createHamburger();
   }
   ```

2. 创建不同种类的工厂，并继承 `AbstractFactory`

   ```java
   public class CheeseFactory extends AbstractFactory{
       @Override
       public Pizza createPizza() {
           return new CheesePizza("cheesePizza");
       }
   
       @Override
       public Hamburger createHamburger() {
           return new CheeseHamburger("cheeseHamburger");
       }
   }
   ```

   ```java
   public class GreekFactory extends AbstractFactory{
       @Override
       public Pizza createPizza() {
           return new GreekPizza("greekPizza");
       }
   
       @Override
       public Hamburger createHamburger() {
           return new GreekHamburger("greekHamburger");
       }
   }
   ```

3. 创建 `Pizza` 和不同种类的 `Pizza` 类

   ```java
   public abstract class Pizza {
   
       /** 披萨种类名称 */
       protected String name;
   
       public Pizza(String name) {
           this.name = name;
       }
   
       public abstract void prepare();
   
       public void bake() {
           System.out.println(this.name + " 正在烘烤...");
       }
   
       public void cut() {
           System.out.println(this.name + " 正在切割...");
       }
   
       public void box() {
           System.out.println(this.name + " 正在打包...");
       }
   
   }
   ```

   ```java
   public class CheesePizza extends Pizza {
   
       public CheesePizza(String name) {
           super(name);
       }
   
       @Override
       public void prepare() {
           System.out.println("cheesePizza 正在准备...");
       }
   }
   ```

   ```java
   public class GreekFactory extends AbstractFactory{
       @Override
       public Pizza createPizza() {
           return new GreekPizza("greekPizza");
       }
   
       @Override
       public Hamburger createHamburger() {
           return new GreekHamburger("greekHamburger");
       }
   }
   ```

4. 创建 `Hamburger` 和不同种类的 `Hamburger` 类

   ```java
   public abstract class Hamburger {
   
       /** 汉堡种类名称 */
       protected String name;
   
       public Hamburger(String name) {
           this.name = name;
       }
   
       public abstract void prepare();
   
       public void box() {
           System.out.println(this.name + " 正在打包...");
       }
   }
   ```

   ```java
   public class CheeseHamburger extends Hamburger {
   
       public CheeseHamburger(String name) {
           super(name);
       }
   
       @Override
       public void prepare() {
           System.out.println("cheeseHamburger 正在准备...");
       }
   }
   ```

   ```java
   public class GreekHamburger extends Hamburger {
   
       public GreekHamburger(String name) {
           super(name);
       }
   
       @Override
       public void prepare() {
           System.out.println("greekHamburger 正在准备...");
       }
   }
   ```

5. 创建订单 `Order` 类

   ```java
   public class Order {
   
       private Pizza pizza;
   
       private Hamburger hamburger;
   
       public Order(AbstractFactory abstractFactory) {
           this.pizza = abstractFactory.createPizza();
           if (Objects.isNull(this.pizza)) {
               System.out.println("Pizza error");
           } else {
               this.pizza.prepare();
               this.pizza.bake();
               this.pizza.cut();
               this.pizza.box();
           }
   
           this.hamburger = abstractFactory.createHamburger();
           if (Objects.isNull(this.pizza)) {
               System.out.println("Hamburger error");
           } else {
               this.hamburger.prepare();
               this.hamburger.box();
           }
   
       }
   
   }
   ```

6. 创建客户端

   ```java
   public class Store {
   
       public static void main(String[] args) {
           Order order01 = new Order(new CheeseFactory());
           Order order02 = new Order(new GreekFactory());
           
           // 输出
           // cheesePizza 正在准备...
           // cheesePizza 正在烘烤...
           // cheesePizza 正在切割...
           // cheesePizza 正在打包...
           // cheeseHamburger 正在准备...
           // cheeseHamburger 正在打包...
           // greekPizza 正在准备...
           // greekPizza 正在烘烤...
           // greekPizza 正在切割...
           // greekPizza 正在打包...
           // greekHamburger 正在准备...
           // greekHamburger 正在打包...
   
       }
   }
   ```

## 1.5 工厂模式在 JDK-CALENDAR 的源码分析

1. JDK 中的Calendar类中，就使用了简单工厂模式。

2. 源码分析 + Debug 源码 + 说明
   
   1. 使用

      ```java
      public class FactoryTest {
      
          public static void main(String[] args) {
      
              Calendar calendar = Calendar.getInstance();
      
              System.out.println("年 = " + calendar.get(Calendar.YEAR));
              System.out.println("月 = " + calendar.get(Calendar.MONTH));
              System.out.println("日 = " + calendar.get(Calendar.DATE));
              System.out.println("时 = " + calendar.get(Calendar.HOUR));
              System.out.println("分 = " + calendar.get(Calendar.MINUTE));
              System.out.println("秒 = " + calendar.get(Calendar.SECOND));
          }
      }
      ```
   
   2. `Calendar` 类
   
      ```java
      public abstract class Calendar implements Serializable, Cloneable, Comparable<Calendar> {
          
          // ...
          
          public static Calendar getInstance() {
              return createCalendar(TimeZone.getDefault(), Locale.getDefault(Locale.Category.FORMAT));
          }
          
          private static Calendar createCalendar(TimeZone zone,
                                                 Locale aLocale) {
              CalendarProvider provider =
                  LocaleProviderAdapter.getAdapter(CalendarProvider.class, aLocale)
                                       .getCalendarProvider();
              if (provider != null) {
                  try {
                      return provider.getInstance(zone, aLocale);
                  } catch (IllegalArgumentException iae) {
                      // fall back to the default instantiation
                  }
              }
      
              Calendar cal = null;
      
              if (aLocale.hasExtensions()) {
                  String caltype = aLocale.getUnicodeLocaleType("ca");
                  if (caltype != null) {
                      switch (caltype) {
                      case "buddhist":
                      cal = new BuddhistCalendar(zone, aLocale);
                          break;
                      case "japanese":
                          cal = new JapaneseImperialCalendar(zone, aLocale);
                          break;
                      case "gregory":
                          cal = new GregorianCalendar(zone, aLocale);
                          break;
                      }
                  }
              }
              if (cal == null) {
                  // If no known calendar type is explicitly specified,
                  // perform the traditional way to create a Calendar:
                  // create a BuddhistCalendar for th_TH locale,
                  // a JapaneseImperialCalendar for ja_JP_JP locale, or
                  // a GregorianCalendar for any other locales.
                  // NOTE: The language, country and variant strings are interned.
                  if (aLocale.getLanguage() == "th" && aLocale.getCountry() == "TH") {
                      cal = new BuddhistCalendar(zone, aLocale);
                  } else if (aLocale.getVariant() == "JP" && aLocale.getLanguage() == "ja"
                             && aLocale.getCountry() == "JP") {
                      cal = new JapaneseImperialCalendar(zone, aLocale);
                  } else {
                      cal = new GregorianCalendar(zone, aLocale);
                  }
              }
              return cal;
          }
          
          // ...
      }
      ```

## 1.6 工厂模式小结

1. 工厂模式的意义：将实例化对象的代码提取出来，放到一个类中统一管理和维护，达到和主项目的依赖关系的解耦，从而提高项目的扩展和维护性。
2.  三种工厂模式：简单工厂模式、工厂方法模式、抽象工厂模式。
3. 设计模式的依赖抽象原则
   - 创建对象实例时，不要直接 new 类，而是把这个 new 类的动作放在一个工厂的方法中，并返回。有的书上说，变量不要直接持有具体类的引用。
   - 不要让类继承具体类，而是继承抽象类或者是实现 interface (接口)。
   - 不要覆盖基类中已经实现的方法。