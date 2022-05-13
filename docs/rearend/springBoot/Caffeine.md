---
title: Spring Cache + Caffeine实现本地缓存
date: 2022-05-13
category:
  - 缓存
tag:
  - Caffeine

isOriginal: true
---

# Spring Cache + Caffeine实现本地缓存

<!-- more -->

## Caffeine简介
> Caffeine是一个高性能，高命中率，低内存占用，near optimal 的本地缓存，简单来说它是 Guava Cache 的优化加强版

## 依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>
```

## 开启缓存
`@EnableCaching`注解开启使用缓存管理功能
```java
@SpringBootApplication
@EnableCaching
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
```


## 注入

### 方式一
1. 新建一个枚举类
```java
public enum Caches {
    CACHE_ACCESS_TOKEN(10, 7200);

    /** 最大数量 */
    private Integer maxSize;

    /** 过期时间 秒 */
    private Integer ttl;

    Caches() {
    }

    Caches(Integer maxSize, Integer ttl) {
        this.maxSize = maxSize;
        this.ttl = ttl;
    }

    public Integer getMaxSize() {
        return maxSize;
    }

    public Integer getTtl() {
        return ttl;
    }

}
```

2. 注入到IOC容器
```java
    /**
     * 本地缓存
     * @return
     */
    @Bean
    @Primary
    public CacheManager cacheManager() {
        SimpleCacheManager simpleCacheManager = new SimpleCacheManager();

        ArrayList<CaffeineCache> caffeineCaches = new ArrayList<>();

        for (Caches c : Caches.values()) {
            caffeineCaches.add(new CaffeineCache(c.name(),
                            Caffeine.newBuilder()
                                    .recordStats()
                                    .expireAfterWrite(c.getTtl(), TimeUnit.SECONDS)
                                    .maximumSize(c.getMaxSize())
                                    .build()
                    )
            );
        }

        simpleCacheManager.setCaches(caffeineCaches);
        return simpleCacheManager;

    }
```


### 方式二
```java
@Bean
@Primary
public CacheManager cacheManager() {

    CaffeineCacheManager caffeineCacheManager = new CaffeineCacheManager();
    Caffeine<Object, Object> caffeine = Caffeine.newBuilder().expireAfterWrite(60, TimeUnit.MINUTES);
    caffeineCacheManager.setCaffeine(caffeine);
    return caffeineCacheManager;

}
```

## 使用
可以使用spring提供的@Cacheable、@CachePut、@CacheEvict等注解来方便的使用caffeine缓存

```java
@Cacheable(cacheNames = "CACHE_ACCESS_TOKEN", key = "#root.methodName")
public String getAccessToken(String corpid, String corpsecret) {

   //todo something...
   return "";

}
```


## 问题

### 使用`@Cacheable`缓存不起作用

**失效场景**
- 在私有方法上加缓存
- 类内部方法调用加缓存

**失效原因**
> `Spring cache` 的实现原理是基于 `AOP` 的动态代理实现的：即都在方法调用前后去获取方法的名称、参数、返回值，然后根据方法名称、参数生成缓存的key(自定义的key例外)，进行缓存。

> `AOP` 不支持对 `private` 私有方法的拦截，所以也就不支持私有方法上的 `Spring Cache` 注解。

> `this` 调用不是代理对象的调用, 所以 `AOP` 失效，注解失效。

**解决办法**

1. 方法用 `public` 限定符修饰；
2. 类内部方法调用加缓存时可以用 `SpringContextUtil` 获取当前 `Bean` ,由它来调用

## 工具类

`SpringContextUtil`

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




