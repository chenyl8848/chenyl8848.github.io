---
title: Spring 注入方式
date: 2022-05-17
category:
  - Spring
tag:
  - DI（依赖注入） 
isOriginal: true
---

# Spring 注入方式
<!-- more -->

## 前言

Spring 是 Java 后端程序员必须掌握得一门框架技术，Spring 的横空出世，大大简化了企业级应用开发的复杂性。

Spring 框架中最核心的技术就是：

- **IOC (控制反转)**：是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度（百度百科）。通俗的说，转移对象创建的控制权，原本对象创建的控制权在开发者，现在通过 IOC 将控制权交给 Spring ,由 Spring 统一管理对象的创建、销毁等。
- **AOP (切面编程)**：通过预编译方式和运行期间动态代理实现程序功能的统一维护的一种技术（百度百科）。通俗的说，将一些具有公共行为（如权限校验、日志记录等）封装到可重用的公共模块中，从何降低耦合度，提高程序的可重用性。

本文将主要介绍 Spring 中的 IOC 的依赖注入。



## 控制反转IOC

IOC 主要由两种实现方式：

- 依赖查找（Dependency Lookup）

  容器中的受控对象通过容器的API来查找自己所依赖的资源和协作对象。通俗的说，容器帮我们创建好了对象，开发者需要什么就去容器中取。
- 依赖注入（Dependency Injection，简称 DI ，IOC 最常见的方式）

  是对依赖查找的优化，即无需开发者手动去容器中查找对象，只要告诉容器需要什么对象，容器就会将创建好的对象进行注入。



## 依赖注入DI

在 Spring 中依赖注入的形式主要有两种形式：

- 基于 xml 的形式
- 基于注解的形式

基于注解 DI 有三种表现形式：

- 基于属性注入
- 基于属性 setter 注入
- 基于构造器注入



### 三种常规注入

#### 基于属性注入

日常开发中最常使用的方式：

```java
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private PhoneService phoneService;
    
}
```

```java
@Service
public class UserServiceImpl implements UserService {

    @Resource
    private PhoneService phoneService;

}
```

`@Autowired` 注解和 `@Resource` 注解的区别：

| @Autowired                                                   | @Resource                                            |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| Spring 的注解，它的包是 org.springframework.beans.factory.annotation.Autowired | 不是Spring的注解，它的包是 javax.annotation.Resource |
| 只按照 byType 注入                                           | 默认按照 byName 自动注入                             |
| 无属性                                                       | 有两个重要的属性：name 和 type                       |

`@Resource` 的装配顺序：

1. 如果同时指定了 name 和 type ，则从 Spring 上下文中找到唯一匹配的 bean 进行装配，找不到则抛出异常。

2. 如果指定了 name ，则从上下文中**查找名称匹配**的 bean 进行装配，找不到则抛出异常。

3. 如果指定了 type ，则从上下文中**查找类型匹配的唯一 **bean 进行装配，找不到或是找到多个，都会抛出异常。

4. 如果既没有指定 name ，又没有指定 type ，则**自动按照 byName 方式**进行装配；如果没有匹配，则回退为一个原始类型进行匹配，如果匹配则自动装配。
   

#### 基于setter方法注入

```java
@Service
public class UserServiceImpl implements UserService {

    private PhoneService phoneService;

    @Autowired
    public void setPhoneService(PhoneService phoneService) {
        this.phoneService = phoneService;
    }

}
```



#### 基于构造器注入( Spring 官方推荐)

```java
@Service
public class UserServiceImpl implements UserService {

    private final PhoneService phoneService;

    @Autowired
    public UserServiceImpl(PhoneService phoneService) {
        this.phoneService = phoneService;
    }

}
```

**为何 Spring 官方推荐使用构造器注入呢？**

- 保证依赖不可变（final关键字）
- 保证依赖不为空（省去了程序启动因注入对象为空而报异常）
- 避免循环依赖
- 提升了代码的可复用性（非 IOC 环境下，可使用 new 实例化该类的对象）



## 接口注入

当我们用上面三种方式注入接口时，接口有多个实现类时，程序启动就会报错，因为 Spring 不知道要注入哪个实现类。

![image-20220517100525105](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/spring/Spring_DI/image-20220517100703452.png?versionId=CAEQKRiBgICY9O6_hhgiIDZlMjQ2OWQxMjNmODRmMWFhYjcyNDUxMTkxM2VkYzlh)

**那么要如何解决接口多实现类的注入问题呢？**

- 通过 `@Autowired` 注解结合 `@Qualifier` 注解

  ```java
  @Service
  public class UserServiceImpl implements UserService {
      
      @Autowired
      @Qualifier("applePhoneServieImpl")
      private PhoneService phoneService;
  
  }
  
  ```

  `@Qualifier("applePhoneServieImpl")` 指定要引入的具体实现类。

- 通过 `@Resource` 注解动态获取

  ```java
  @Service
  public class UserServiceImpl implements UserService {
  
      @Resource(name = "applePhoneServieImpl")
      private PhoneService phoneService;
  
  }
  ```

- 通过 `@Primary` 注解优先注入

  ```java
  @Service
  @Primary
  public class ApplePhoneServieImpl implements PhoneService {
  }
  ```

  `@Primary` 注解表示当有多个 bean 满足注入条件时，会优先注入该注解修饰的 bean 。

- 通过 `@ConditionalOnProperty` 注解结合配置文件注入

  ```java
  @Service
  @ConditionalOnProperty(prefix = "phone", name = "impl", havingValue = "vivo")
  public class VivoPhoneServieImpl implements PhoneService {
  }
  
  ```

  `@ConditionalOnProperty(prefix = "phone", name = "impl", havingValue = "vivo")` 意指当配置文件中 `phone.impl=vivo` 时，`VivoPhoneServieImpl` 才会注入到容器中。

- 通过其他 @Condition 条件注解

  - `@ConditionalOnBean`：当存在某一个 Bean 时，初始化此类到容器。
  - `@ConditionalOnClass`：当存在某一个类时，初始化此类的容器。
  - `@ConditionalOnMissingBean`：当不存在某一个 Bean 时，初始化此类到容器。
  - `@ConditionalOnMissingClass`：当不存在某一个类时，初始化此类到容器。
  - ...

- 通过集合注入

  ```java
  @Service
  public class UserServiceImpl implements UserService {
  
      @Autowired
      private List<PhoneService> phoneServiceList;
  
      @Autowired
      private Map<String, PhoneService> phoneServiceMap;
  
  }
  ```



## 获取Bean的方式

在 Spring 项目中，有时候需要手动去获取 bean，手动获取的方式需要通过 `applicationContext` ，有以下几种形式：

- 通过 `applicationContext` 获取

  ```java
  @Service
  public class UserServiceImpl implements UserService {
  
      @Autowired
      private ApplicationContext applicationContext;
  
      public Object getBean() {
          return applicationContext.getBean("appleService");
      }
  }
  ```

- 实现 `ApplicationContextAware` 接口

  ```java
  @Component
  public class SpringContextUtil implements ApplicationContextAware {
  
      public static ApplicationContext applicationContext;
  
      public void setApplicationContext(ApplicationContext applicationContext) {
          SpringContextUtil.applicationContext = applicationContext;
      }
  
      public static Object getBean(String name) {
          return applicationContext.getBean(name);
      }
  
      public static <T> T getBean(Class<T> clazz) {
          return applicationContext.getBean(clazz);
      }
  
      public static <T> T getBean(String name, Class<T> clazz) {
          return applicationContext.getBean(name, clazz);
      }
  
      public static Boolean containsBean(String name) {
          return applicationContext.containsBean(name);
      }
  
      public static Boolean isSingleton(String name) {
          return applicationContext.isSingleton(name);
      }
  
      public static Class<? extends Object> getType(String name) {
          return applicationContext.getType(name);
      }
  
  }
  ```

  ```java
  PhoneService phoneService = SpringContextUtil.getBean(PhoneService.class);
  ```

- 继承自抽象类 `ApplicationObjectSupport` 

  ```java
  @Component
  public class SpringContextHelper extends ApplicationObjectSupport {
  
      public Object getBean(String name) {
          return getApplicationContext().getBean(name);
      }
  
      public  <T> T getBean(Class<T> clazz) {
          return getApplicationContext().getBean(clazz);
      }
  
      public  <T> T getBean(String name, Class<T> clazz) {
          return getApplicationContext().getBean(name, clazz);
      }
  
      public  Boolean containsBean(String name) {
          return getApplicationContext().containsBean(name);
      }
  
      public  Boolean isSingleton(String name) {
          return getApplicationContext().isSingleton(name);
      }
  
      public  Class<? extends Object> getType(String name) {
          return getApplicationContext().getType(name);
      }
  }
  ```

- 继承自抽象类 `WebApplicationObjectSupport`

  `WebApplicationObjectSupport` 继承了 `ApplicationObjectSupport` ，所以使用方法和上面一样。



## 总结

本文主要记录了 Spring 中基于注解的 DI 几种方式，接口多个实现的注入方式，如何通过 applicationContext 手动获取 bean 。

