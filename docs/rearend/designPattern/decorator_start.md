---
title: 装饰者模式
date: 2022-06-16
isOriginal: true
category:
  - 设计模式
tag:
  - 装饰者模式
---

# 装饰器模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

星巴克咖啡订单项目：

1. 咖啡种类/单品咖啡：Espresso(浓咖啡)、Latte(拿铁)、Decaf(无因咖啡)
2. 调料：Milk(牛奶)、Chocolate(巧克力)
3. 要求在扩展新的咖啡种类时，具有良好的扩展性、改动方便、维护方便
4. 使用 OO 的来计算不同种类咖啡的费用：客户可以点单品咖啡，也可以单品咖啡 + 调料组合。

### 1.1.2 方案一

![image-20220619172259086](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619172259086.png)

问题分析：

1. `Drink` 是一个抽象类，表示饮料
2. `description` 就是对咖啡的描述, 比如咖啡的名字
3. `cost()` 方法就是计算费用，`Drink` 类中做成一个抽象方法
4. `Decaf` 、`Espresso` 、 `Latte` 就是单品咖啡， 继承 `Drink`, 并实现 `cost()`
5. `EspressAndMilk` 就是单品咖啡 + 调料
6. 问题：这样设计，会有很多类，当我们增加一个单品咖啡，或者一个新的调料，类的数量就会倍增，就会出现类爆炸

### 1.1.3 方案二

1. 方案一因为咖啡单品 + 调料组合会造成类的倍增，因此可以做改进，将调料内置到Drink类，这样就不会造成类数量过多，从而提高项目的维护性(如图)。

   ![image-20220619172209587](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619172209587.png)

   2. 说明：`hasMilk()`、`hasChocolate()` 设计为 boolean，表示是否要添加相应的调料。

问题分析：

1. 可以控制类的数量，不至于造成很多的类
2. 在增加或者删除调料种类时，代码的维护量很大
3. 考虑到用户可以添加多份调料时，可以将 `hasMilk()` 返回一个对应 int

## 1.2 装饰者模式

### 1.2.1 基本介绍

1. 装饰者模式：动态的将新功能附加到对象上。在对象功能扩展方面，它比继承更有弹性，装饰者模式也体现了开闭原则(OCP)。
2. 这里提到的动态的将新功能附加到对象和 OCP 原则，在后面的应用实例上会以代码的形式体现。

### 1.2.2 原理类图

1. 装饰者模式就像打包一个快递
   主体：比如：陶瓷、衣服 (Component)，被装饰者
   包装：比如：报纸填充、塑料泡沫、纸板、木板(Decorator)
   
2. Component主体：比如类似前面的Drink

3. ConcreteComponent 和 Decorator
   - ConcreteComponent：具体的主体，比如前面的各个单品咖啡
   - Decorator: 装饰者，比如各调料
   
4. 在如图的Component 与 ConcreteComponent 之间，如果 ConcreteComponent 类很多，还可以设计一个缓冲层，将共有的部分提取出来，抽象层一个类。

   ![image-20220619172319287](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619172319287.png)

## 1.3 装饰者模式解决咖啡订单问题

### 1.3.1 类图展示

![image-20220619172829196](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619172829196.png)

### 1.3.2 代码实现

1. 创建 `Drink` 抽象类

   ```java
   public abstract class Drink {
   
       /**
        * 描述
        */
       public String description;
   
       /**
        * 价格
        */
       private Float price = 0.0f;
   
       /**
        * 计算费用，让子类来实现
        * @return float 总价格
        */
       public abstract float cost();
   
       public String getDescription() {
           return description;
       }
   
       public void setDescription(String description) {
           this.description = description;
       }
   
       public Float getPrice() {
           return price;
       }
   
       public void setPrice(Float price) {
           this.price = price;
       }
   }
   ```

2. 创建 `DeCaf` 类并继承 `Drink` 类

   ```java
   public class DeCaf extends Coffee{
   
       public DeCaf() {
           setDescription("无因咖啡");
           setPrice(5.0f);
       }
   }
   ```

3. 创建 `Expresso` 类并继承 `Drink` 类

   ```java
   public class Espresso extends Coffee{
   
       public Espresso() {
           setDescription("浓咖啡");
           setPrice(7.0f);
       }
   }
   ```

4. 创建 `Latte` 类并继承 `Drink` 类

   ```java
   public class Latte extends Coffee{
   
       public Latte() {
           setDescription("拿铁咖啡");
           setPrice(9.0f);
       }
   }
   ```

5. 创建 `Decorator` 类并继承 `Drink` 类

   ```java
   public class Decorator extends Drink{
   
       private Drink drink;
   
       public Decorator(Drink drink) {
           this.drink = drink;
       }
   
       @Override
       public float cost() {
           return super.getPrice() + drink.cost();
       }
   
       @Override
       public String getDescription() {
           return super.getDescription() + " " + getPrice() + " && " + drink.getDescription();
       }
   }
   ```

6. 创建 `Milk` 类并继承 `Decoraor` 类

   ```java
   public class Milk extends Decorator{
   
       public Milk(Drink drink) {
           super(drink);
           setDescription("牛奶调料");
           setPrice(3.0f);
       }
   }
   ```

7. 创建 `Chocolate` 类并继承 `Decoraor` 类

   ```java
   public class Chocolate extends Decorator {
   
       public Chocolate(Drink drink) {
           super(drink);
           setDescription("巧克力调料");
           setPrice(2.0f);
       }
   }
   ```

8. 创建客户端调用

   ```java
   public class CoffeeBar {
   
       public static void main(String[] args) {
           // 2份巧克力 + 1份牛奶 + 一份 浓咖啡
   
           // 1.点一份浓咖啡
           Drink order = new Espresso();
           System.out.println("描述 = " + order.getDescription());
           System.out.println("费用 1 = " + order.cost());
   
           // 2.点一份牛奶
           order = new Milk(order);
           System.out.println("描述 = " + order.getDescription());
           System.out.println("费用 2 = " + order.cost());
   
           // 3.点一份巧克力
           order = new Chocolate(order);
           System.out.println("描述 = " + order.getDescription());
           System.out.println("费用 3 = " + order.cost());
   
           // 4.再点一份巧克力
           order = new Chocolate(order);
           System.out.println("描述 = " + order.getDescription());
           System.out.println("费用 4 = " + order.cost());
   
           // 输出
           // 描述 = 浓咖啡
           // 费用 1 = 7.0
           // 描述 = 牛奶调料 3.0 && 浓咖啡
           // 费用 2 = 10.0
           // 描述 = 巧克力调料 2.0 && 牛奶调料 3.0 && 浓咖啡
           // 费用 3 = 12.0
           // 描述 = 巧克力调料 2.0 && 巧克力调料 2.0 && 牛奶调料 3.0 && 浓咖啡
           // 费用 4 = 14.0
       }
   }
   ```

## 1.4 装饰者模式在 JDK 的源码分析

Java的IO结构，`FilterInputStream` 就是一个装饰者

![image-20220619173710738](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619173710738.png)

源码说明

```java
public class DecoratorTest {

    public static void main(String[] args) throws IOException {
        DataInputStream dataInputStream = new DataInputStream(new FileInputStream("E:\\abc.txt"));
        System.out.println(dataInputStream.read());
        dataInputStream.close();

        // 说明：
        // 1.InputStream 是一个接口
        // 2.FileInputStream 是 InputStream 的一个实现类
        // 3.FilterInputStream 是 InputStream 的一个实现类，类似于 Decorator
        // 4.FilterInputStream 中 protected volatile InputStream in; 聚合被修饰者
        // 5.DataInputStream 是 InputStream 的一个子类，具体的修饰者
        
    }
}
```