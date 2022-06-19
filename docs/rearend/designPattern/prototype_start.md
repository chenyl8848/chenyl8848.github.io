---
title: 原型模式
date: 2022-06-11
isOriginal: true
category:
  - 设计模式
tag:
  - 原型模式
---

# 原型模式
<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

现在有一只羊，姓名：tom ，年龄：1，颜色：白色，请编写程序创建和 tom 羊属性完全相同的 10 只羊。

### 1.1.2 代码实现

1. 定义 `Sheep` 类

   ```java
   public class Sheep {
       
       private String name;
   
       private int age;
   
       private String color;
   
       public Sheep() {
       }
   
       public Sheep(String name, int age, String color) {
           this.name = name;
           this.age = age;
           this.color = color;
       }
   
       public String getName() {
           return name;
       }
   
       public void setName(String name) {
           this.name = name;
       }
   
       public int getAge() {
           return age;
       }
   
       public void setAge(int age) {
           this.age = age;
       }
   
       public String getColor() {
           return color;
       }
   
       public void setColor(String color) {
           this.color = color;
       }
   
       @Override
       public String toString() {
           return "Sheep{" +
                   "name='" + name + '\'' +
                   ", age=" + age +
                   ", color='" + color + '\'' +
                   '}';
       }
   }
   ```

2. 客户端实现 10 只羊

   ```java
   public class Test {
   
       public static void main(String[] args) {
           Sheep sheep = new Sheep("tom", 1, "white");
   
           Sheep sheep2 = new Sheep(sheep.getName(), sheep.getAge(), sheep.getColor());
           Sheep sheep3 = new Sheep(sheep.getName(), sheep.getAge(), sheep.getColor());
           Sheep sheep4 = new Sheep(sheep.getName(), sheep.getAge(), sheep.getColor());
           Sheep sheep5 = new Sheep(sheep.getName(), sheep.getAge(), sheep.getColor());
   
           System.out.println("sheep = " + sheep.toString() + " hashcode = " + sheep.hashCode());
           System.out.println("sheep2 = " + sheep.toString() + " hashcode = " + sheep2.hashCode());
           System.out.println("sheep3 = " + sheep.toString() + " hashcode = " + sheep3.hashCode());
           System.out.println("sheep4 = " + sheep.toString() + " hashcode = " + sheep4.hashCode());
           System.out.println("sheep5 = " + sheep.toString() + " hashcode = " + sheep5.hashCode());
           
           // 输出
           // sheep = Sheep{name='tom', age=1, color='white'} hashcode = 1956725890
           // sheep2 = Sheep{name='tom', age=1, color='white'} hashcode = 356573597
           // sheep3 = Sheep{name='tom', age=1, color='white'} hashcode = 1735600054
           // sheep4 = Sheep{name='tom', age=1, color='white'} hashcode = 21685669
           // sheep5 = Sheep{name='tom', age=1, color='white'} hashcode = 2133927002
       }
   }
   ```

### 1.1.3 具体分析

1. 优点是比较好理解，简单易操作。
2.  在创建新的对象时，总是需要重新获取原始对象的属性，如果创建的对象比较复杂时，效率较低。
3. 总是需要重新初始化对象，而不是动态地获得对象运行时的状态, 不够灵活。
4. 改进的思路分析
   思路：Java 中 `Object `类是所有类的根类，`Object` 类提供了一个 `clone()` 方法，该方法可以将一个 Java 对象复制一份，但是需要实现 `clone()` 方法的 Java 类必须要实现一个接口 `Cloneable` ，该接口表示该类能够复制且具有复制的能力。

## 1.2 原型模式

### 1.2.1 基本介绍

1. 原型模式(Prototype 模式)是指：用原型实例指定创建对象的种类，并且通过拷贝这些原型，创建新的对象。
2. 原型模式是一种创建型设计模式，允许一个对象再创建另外一个可定制的对象，无需知道如何创建的细节。
3. 工作原理是：通过将一个原型对象传给那个要发动创建的对象，这个要发动创建的对象通过请求原型对象拷贝它们自己来实施创建，即 对象 .clone**() 。
4. 形象的理解：孙大圣拔出猴毛， 变出其它孙大圣。

### 1.2.2 UML 类图

![image-20220619210856441](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220619210856441.png)

原理结构图说明

1. Prototype: 原型类，声明一个克隆自己的接口
2. ConcretePrototype: 具体的原型类, 实现一个克隆自己的操作
3. Client: 让一个原型对象克隆自己，从而创建一个新的对象(属性一样）

### 1.2.3 代码实现 

使用原型模式改进传统方式，让程序具有更高的效率和扩展性。

1. 修改 `Sheep` 类实现 `Cloneable` 接口

   ```java
   public class Sheep implements Cloneable{
       //...
   }
   ```

2. 重写 `clone()` 方法

   ```java
   @Override
       protected Object clone() {
           Sheep sheep = null;
   
           try {
               sheep = (Sheep) super.clone();
           } catch (CloneNotSupportedException e) {
               e.printStackTrace();
           }
           return sheep;
       }
   ```

3. 客户端调用

   ```java
   public class Test {
   
       public static void main(String[] args) {
           Sheep sheep = new Sheep("tom", 1, "white");
   
           Sheep sheep2 = (Sheep) sheep.clone();
           Sheep sheep3 = (Sheep) sheep.clone();
           Sheep sheep4 = (Sheep) sheep.clone();
           Sheep sheep5 = (Sheep) sheep.clone();
           System.out.println("sheep = " + sheep.toString() + " hashcode = " + sheep.hashCode());
           System.out.println("sheep2 = " + sheep2.toString() + " hashcode = " + sheep2.hashCode());
           System.out.println("sheep3 = " + sheep3.toString() + " hashcode = " + sheep3.hashCode());
           System.out.println("sheep4 = " + sheep4.toString() + " hashcode = " + sheep4.hashCode());
           System.out.println("sheep5 = " + sheep5.toString() + " hashcode = " + sheep5.hashCode());
   
           // 输出
           // sheep = Sheep{name='tom', age=1, color='white'} hashcode = 1956725890
           // sheep2 = Sheep{name='tom', age=1, color='white'} hashcode = 356573597
           // sheep3 = Sheep{name='tom', age=1, color='white'} hashcode = 1735600054
           // sheep4 = Sheep{name='tom', age=1, color='white'} hashcode = 21685669
           // sheep5 = Sheep{name='tom', age=1, color='white'} hashcode = 2133927002
   
   
       }
   }
   ```

## 1.3 原型模式在 Spring 框架中源码分析

1. Spring 中原型 bean 的创建，就是原型模式的应用

2. 代码分析 + Debug源码

   1. Spring 中 bean 为原型

      ```xml
      <?xml version="1.0" encoding="UTF-8"?>
      <beans xmlns="http://www.springframework.org/schema/beans"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://www.springframework.org/schema/beans
         http://www.springframework.org/schema/beans/spring-beans-3.0.xsd">
          <bean id="bean" class="com.cccyl.spring.prototype.Bean" scope="prototype">
          </bean>
      </beans>
      ```
      
   2. Spring 中获取 bean
   
      ```java
      public class ProtoTypeTest {
      
          public static void main(String[] args) {
              ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring.xml");
              Bean bean = (Bean) applicationContext.getBean("bean");
              System.out.println("bean hashcode = " + bean.hashCode());
          }
      }
      ```
   
   3. `AbstractBeanFactory` 中的`doGetBean()` 中判断是否为原型
   
      ```java
       else if (mbd.isPrototype()) {
           var12 = null;
      
           Object prototypeInstance;
           try {
               this.beforePrototypeCreation(beanName);
               prototypeInstance = this.createBean(beanName, mbd, args);
           } finally {
               this.afterPrototypeCreation(beanName);
           }
      
           beanInstance = this.getObjectForBeanInstance(prototypeInstance, name, beanName, mbd);
       }
      ```


## 1.4 浅拷贝和深拷贝

### 1.4.1 浅拷贝

1. 对于数据类型是**基本数据类型的成员变量，浅拷贝会直接进行值传递**，也就是将该属性值复制一份给新的对象。

2. 对于数据类型是**引用数据类型的成员变量，比如说成员变量是某个数组、某个类的对象等，那么浅拷贝会进行引用传递，也就是只是将该成员变量的引用值（内存地址）复制一份给新的对象，实际上两个对象的该成员变量都指向同一个实例**。在这种情况下，在一个对象中修改该成员变量会影响到另一个对象的该成员变量值。

3. 浅拷贝是使用默认的 `clone()` 方法来实现。

4. 前面我们克隆羊就是浅拷贝。

   在 `Sheep` 类中添加一个应用类型的属性

   ```java
       /**
        * 添加引用类型的属性
        */
       public Sheep freind;
   ```

   客户端调用测试

   ```java
   public class Test {
   
       public static void main(String[] args) {
           Sheep sheep = new Sheep("tom", 1, "white");
           sheep.freind = new Sheep("jack",2,"black");
   
           Sheep sheep2 = (Sheep) sheep.clone();
           Sheep sheep3 = (Sheep) sheep.clone();
           Sheep sheep4 = (Sheep) sheep.clone();
           Sheep sheep5 = (Sheep) sheep.clone();
   
           System.out.println("sheep = " + sheep.toString() + " hashcode = " + sheep.hashCode() + " sheep.friend.hashcode = " + sheep.freind.hashCode());
           System.out.println("sheep2 = " + sheep2.toString() + " hashcode = " + sheep2.hashCode() + " sheep2.friend.hashcode = " + sheep2.freind.hashCode());
           System.out.println("sheep3 = " + sheep3.toString() + " hashcode = " + sheep3.hashCode() + " sheep3.friend.hashcode = " + sheep3.freind.hashCode());
           System.out.println("sheep4 = " + sheep4.toString() + " hashcode = " + sheep4.hashCode() + " sheep4.friend.hashcode = " + sheep4.freind.hashCode());
           System.out.println("sheep5 = " + sheep5.toString() + " hashcode = " + sheep5.hashCode() + " sheep5.friend.hashcode = " + sheep5.freind.hashCode());
           
           //输出
           // sheep = Sheep{name='tom', age=1, color='white'} hashcode = 312714112 sheep.friend.hashcode = 692404036
           // sheep2 = Sheep{name='tom', age=1, color='white'} hashcode = 1554874502 sheep2.friend.hashcode = 692404036
           // sheep3 = Sheep{name='tom', age=1, color='white'} hashcode = 1846274136 sheep3.friend.hashcode = 692404036
           // sheep4 = Sheep{name='tom', age=1, color='white'} hashcode = 1639705018 sheep4.friend.hashcode = 692404036
           // sheep5 = Sheep{name='tom', age=1, color='white'} hashcode = 1627674070 sheep5.friend.hashcode = 692404036
       }
   }
   ```

   可以看到， `Sheep` 类中的 `friend` 属性输出的 hashcode 值都是一样的，只是进行浅拷贝。

### 1.4.2 深拷贝

1. 复制对象的所有基本数据类型的成员变量值。
2.  为所有**引用数据类型的成员变量申请存储空间，并复制每个引用数据类型成员变量所引用的对象，直到该对象可达的所有对象**。也就是说，**对象进行深拷贝要对整个对象 ( 包括对象的引用类型 ) 进行拷贝**。
3. 实现深拷贝的两种方式：
   - 重写 clone 方法来实现深拷贝
   - **通过对象序列化实现深拷贝（推荐）**

## 1.5 实现深拷贝

### 1.5.1 重写 Clone() 方法实现深拷贝

1. 定义一个只有基本类型属性的 `SheepHouse` 类，实现 `Cloneable` 接口，并重写 `clone()` 方法

   ```java
   public class SheepHouse implements Cloneable {
   
       private String name;
   
       private int number;
   
       public SheepHouse() {
       }
   
       public SheepHouse(String name, int number) {
           this.name = name;
           this.number = number;
       }
   
       public String getName() {
           return name;
       }
   
       public void setName(String name) {
           this.name = name;
       }
   
       public int getNumber() {
           return number;
       }
   
       public void setNumber(int number) {
           this.number = number;
       }
   
       @Override
       public String toString() {
           return "SheepHouse{" +
                   "name='" + name + '\'' +
                   ", number=" + number +
                   '}';
       }
   
       @Override
       protected Object clone() {
           SheepHouse sheepHouse = null;
   
           try {
               sheepHouse = (SheepHouse) super.clone();
           } catch (CloneNotSupportedException e) {
               e.printStackTrace();
           }
           return sheepHouse;
       }
   }
   ```

2. 定义 `Sheep` 类

   ```java
   public class Sheep implements Cloneable, Serializable {
   
       private String name;
   
       private int age;
   
       private String color;
   
       /**
        * 添加引用类型的属性
        */
       public SheepHouse sheepHouse;
   
       public Sheep() {
       }
   
       public Sheep(String name, int age, String color) {
           this.name = name;
           this.age = age;
           this.color = color;
       }
   
       public String getName() {
           return name;
       }
   
       public void setName(String name) {
           this.name = name;
       }
   
       public int getAge() {
           return age;
       }
   
       public void setAge(int age) {
           this.age = age;
       }
   
       public String getColor() {
           return color;
       }
   
       public void setColor(String color) {
           this.color = color;
       }
   
       @Override
       public String toString() {
           return "Sheep{" +
                   "name='" + name + '\'' +
                   ", age=" + age +
                   ", color='" + color + '\'' +
                   '}';
       }
   
       /**
        * 实现深拷贝方式一，使用 clone() 方法
        *
        * @return
        */
       @Override
       protected Object clone() {
           Sheep sheep = null;
   
           try {
               sheep = (Sheep) super.clone();
               // 因为 sheepHouse 属性是引用类型，所以要调用其自身的 clone() 方法
               sheep.sheepHouse = (SheepHouse) sheepHouse.clone();
   
           } catch (CloneNotSupportedException e) {
               e.printStackTrace();
           }
           return sheep;
       }
   
   }
   ```

3. 编写客户端测试

   ```java
   public class Test {
   
       public static void main(String[] args) {
           Sheep sheep = new Sheep("tom", 1, "white");
           sheep.sheepHouse = new SheepHouse("London",100);
   
           Sheep sheep2 = (Sheep) sheep.clone();
           Sheep sheep3 = (Sheep) sheep.clone();
           Sheep sheep4 = (Sheep) sheep.clone();
           Sheep sheep5 = (Sheep) sheep.clone();
   
           System.out.println("sheep = " + sheep.toString() + " hashcode = " + sheep.hashCode() + " sheep.friend.hashcode = " + sheep.sheepHouse.hashCode());
           System.out.println("sheep2 = " + sheep2.toString() + " hashcode = " + sheep2.hashCode() + " sheep2.friend.hashcode = " + sheep2.sheepHouse.hashCode());
           System.out.println("sheep3 = " + sheep3.toString() + " hashcode = " + sheep3.hashCode() + " sheep3.friend.hashcode = " + sheep3.sheepHouse.hashCode());
           System.out.println("sheep4 = " + sheep4.toString() + " hashcode = " + sheep4.hashCode() + " sheep4.friend.hashcode = " + sheep4.sheepHouse.hashCode());
           System.out.println("sheep5 = " + sheep5.toString() + " hashcode = " + sheep5.hashCode() + " sheep5.friend.hashcode = " + sheep5.sheepHouse.hashCode());
   
           // 输出
           // sheep = Sheep{name='tom', age=1, color='white'} hashcode = 312714112 sheep.friend.hashcode = 692404036
           // sheep2 = Sheep{name='tom', age=1, color='white'} hashcode = 1554874502 sheep2.friend.hashcode = 1846274136
           // sheep3 = Sheep{name='tom', age=1, color='white'} hashcode = 1639705018 sheep3.friend.hashcode = 1627674070
           // sheep4 = Sheep{name='tom', age=1, color='white'} hashcode = 1360875712 sheep4.friend.hashcode = 1625635731
           // sheep5 = Sheep{name='tom', age=1, color='white'} hashcode = 1580066828 sheep5.friend.hashcode = 491044090
   
       }
   }
   ```

**说明：**

1. 通过客户端输出的结果，可以发现，这种方式实现了深拷贝。
2. 因为 `SheepHouse` 类中都是基本类型，重写 `clone()` 方法即可，那如果 `SheepHouse` 类中含有引用类型，其引用类型中继续含有引用类型的属性，一直循环下去，这种方式实现深拷贝就显得很麻烦给。

### 1.5.2 使用序列化实现深拷贝

1. `SheepHouse` 类实现 `Serializable` 接口

   ```java
   public class SheepHouse implements Cloneable, Serializable {
       // ...
   }
   ```

2. `Sheep` 类实现 `Serializable` 接口

   ```java
   public class Sheep implements Cloneable, Serializable {
       // ...
   }
   ```

3. `Sheep` 类通过序列化的方式实现深拷贝

   ```java
       /**
        * 实现深拷贝方式二，使用序列化
        *
        * @return
        */
       protected Object deepClone() {
   
           ByteArrayOutputStream byteArrayOutputStream = null;
           ObjectOutputStream objectOutputStream = null;
           ByteArrayInputStream byteArrayInputStream = null;
           ObjectInputStream objectInputStream = null;
           try {
               byteArrayOutputStream = new ByteArrayOutputStream();
               objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
               objectOutputStream.writeObject(this);
   
               byteArrayInputStream = new ByteArrayInputStream(byteArrayOutputStream.toByteArray());
               objectInputStream = new ObjectInputStream(byteArrayInputStream);
   
               Sheep sheep = (Sheep) objectInputStream.readObject();
               return sheep;
           } catch (Exception e) {
               e.printStackTrace();
           } finally {
               try {
                   byteArrayOutputStream.close();
                   objectOutputStream.close();
                   byteArrayInputStream.close();
                   objectInputStream.close();
               } catch (IOException e) {
                   e.printStackTrace();
               }
           }
   
           return null;
       }
   ```

4. 编写客户端测试

   ```java
   public class Test {
   
       public static void main(String[] args) {
           Sheep sheep = new Sheep("tom", 1, "white");
           sheep.sheepHouse = new SheepHouse("London",100);
   
           Sheep sheep2 = (Sheep) sheep.deepClone();
           Sheep sheep3 = (Sheep) sheep.deepClone();
           Sheep sheep4 = (Sheep) sheep.deepClone();
           Sheep sheep5 = (Sheep) sheep.deepClone();
   
           System.out.println("sheep = " + sheep.toString() + " hashcode = " + sheep.hashCode() + " sheep.friend.hashcode = " + sheep.sheepHouse.hashCode());
           System.out.println("sheep2 = " + sheep2.toString() + " hashcode = " + sheep2.hashCode() + " sheep2.friend.hashcode = " + sheep2.sheepHouse.hashCode());
           System.out.println("sheep3 = " + sheep3.toString() + " hashcode = " + sheep3.hashCode() + " sheep3.friend.hashcode = " + sheep3.sheepHouse.hashCode());
           System.out.println("sheep4 = " + sheep4.toString() + " hashcode = " + sheep4.hashCode() + " sheep4.friend.hashcode = " + sheep4.sheepHouse.hashCode());
           System.out.println("sheep5 = " + sheep5.toString() + " hashcode = " + sheep5.hashCode() + " sheep5.friend.hashcode = " + sheep5.sheepHouse.hashCode());
           
           // 输出
           // sheep = Sheep{name='tom', age=1, color='white'} hashcode = 1175962212 sheep.friend.hashcode = 925858445
           // sheep2 = Sheep{name='tom', age=1, color='white'} hashcode = 1342443276 sheep2.friend.hashcode = 769287236
           // sheep3 = Sheep{name='tom', age=1, color='white'} hashcode = 1587487668 sheep3.friend.hashcode = 1199823423
           // sheep4 = Sheep{name='tom', age=1, color='white'} hashcode = 932172204 sheep4.friend.hashcode = 1225358173
           // sheep5 = Sheep{name='tom', age=1, color='white'} hashcode = 1848402763 sheep5.friend.hashcode = 933699219
   
       }
   }
   ```

## 1.6 原型模式小结

1. 创建新的对象比较复杂时，可以利用原型模式简化对象的创建过程，同时也能够提高效率。
2. 不用重新初始化对象，而是动态地获得对象运行时的状态。
3. 如果原始对象发生变化(增加或者减少属性)，其它克隆对象的也会发生相应的变化，无需修改代码。
4. 在实现深克隆的时候可能需要比较复杂的代码。
5. 缺点：需要为每一个类配备一个克隆方法，这对全新的类来说不是很难，但对已有的类进行改造时，需要修改其源代码，违背了 OCP 原则。

