---
title: Spring Security + OAuth2 权限管理实战
date: 2024-09-27
category:
  - Spring
tag:
  - Spring Security
  - OAuth2
---

# Spring Security + OAuth2 权限管理实战
<!-- more -->

> 注意：本文基于 SpringBoot3 !

## 1. Spring Security 快速入门

### 1.1 Spring Security 介绍

Spring Security 是一个提供 **身份认证（authentication）、授权（authorization）和防御常见攻击（protection against common attacks）** 的 Java 框架。SpringSecurity 基于**过滤器链**的概念，可以轻松地集成到任何基于 Spring 的应用程序中。

**官方文档：** `https://docs.spring.io/spring-security/reference/index.html`

**功能：**
- **身份认证：** 身份认证是验证`谁正在访问系统资源`，判断用户是否为合法用户。认证用户的常见方式是要求`用户输入用户名和密码`。
- **授权：** 用户进行身份认证后，系统会控制`谁能访问哪些资源`，这个过程叫做授权。用户无法访问没有权限的资源。
- **防御常见攻击：**
    - CSRF
    - HTTP Headers
    - HTTP Requests

### 1.2 Spring Security 快速搭建

> Spring Security 官方提供了示例代码，可通过下载示例代码快速集成。
>
> 官方代码示例：`https://github.com/spring-projects/spring-security-samples/tree/main`

1、创建 SpringBoot 项目（JDK17 + SpringBoot3）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.codechen</groupId>
    <artifactId>springsecurity-oatuh2-demo</artifactId>
    <version>1.0-SNAPSHOT</version>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
    </parent>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
    </dependencies>

</project>
```

2、创建启动类

```java
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

3、启动项目，浏览器中访问 `http://localhost:8080/` 会自动跳转到登录页面 `http://localhost:8080/login`

<!-- ![image-20230410140908841](assets/image-20230410140908841.png) -->

> - `默认用户名`：user
> - `默认密码`：在控制台的启动日志中查找初始的默认密码 `Using generated security password: c52a3686-2ae8-4ec3-896b-efcbe5c99c74`

**页面样式无法加载的问题**：

页面样式 `bootstrap.min.css` 是一个 CDN 地址，需要通过**科学上网**的方式才能访问。

<!-- ![image-20231130152247055](assets/image-20231130152247055.png) -->

否则登录页会加载很久，并且看到的页面是这样的（登录按钮没有样式文件渲染，但是不影响登录功能的执行）。

<!-- ![image-20231130152345471](assets/image-20231130152345471.png) -->

### 1.3 Spring Security 默认做了什么

- 保护应用程序URL，要求对应用程序的任何交互进行身份验证。
- 程序启动时生成一个默认用户“user”。
- 生成一个默认的随机密码，并将此密码记录在控制台上。
- 生成默认的登录表单和注销页面。
- 提供基于表单的登录和注销流程。
- 对于Web请求，重定向到登录页面；
- 对于服务请求，返回401未经授权。
- 处理跨站请求伪造（CSRF）攻击。
- 处理会话劫持攻击。
- 写入Strict-Transport-Security以确保HTTPS。
- 写入X-Content-Type-Options以处理嗅探攻击。
- 写入Cache Control头来保护经过身份验证的资源。
- 写入X-Frame-Options以处理点击劫持攻击。

### 1.4 Spring Security 底层原理

Spring Security 之所以可以默认做这么多事情，它的底层原理是由很多个 **过滤器（Servlet Filters）** 实现的。

**官方文档**：`https://docs.spring.io/spring-security/reference/servlet/architecture.html`

- Filter（过滤器）

下图展示了 Spring Security 处理一个 Http 请求时，过滤器和 Servlet 的工作流程：

<!-- ![filterchain](assets/filterchain.png) -->

客户端向应用程序发送请求，容器根据请求 URI 的路径创建一个 `FilterChain`，其中包含应处理 `HttpServletRequest` 的 `Filter` 实例和 `Servlet`. 在 Spring MVC 应用程序中，`Servlet` 是 `DispatcherServlet` 的实例，也就是代码中的 `Controller`.

- DelegatingFilterProxy（委托过滤代理类）

`DelegatingFilterProxy` 是 Spring Security 提供的一个 `Filter` 实现，可以在 `Servlet` 容器和 Spring 容器之间建立桥梁。通过使用 `DelegatingFilterProxy`，这样就可以将 Servlet 容器中的 `Filter` 实例放在 Spring 容器中管理。

<!-- ![delegatingfilterproxy](assets/delegatingfilterproxy.png) -->

- FilterChainProxy（过滤器链代理类）

复杂的业务中不可能只有一个过滤器。因此 `FilterChainProxy` 是 Spring Security 提供的一个特殊的 Filter，它通过 `SecurityFilterChain` 将过滤器的工作委托给多个 `Bean Filter` 实例。由于 `FilterChainProxy` 是一个 Bean，因此它通常包装在 `DelegatingFilterProxy` 中。

<!-- ![filterchainproxy](assets/filterchainproxy.png) -->

- SecurityFilterChain（过滤器链）

`SecurityFilterChain` 被 `FilterChainProxy` 使用，负责查找当前的请求需要执行的 `Security Filter` 列表。

<!-- ![securityfilterchain](assets/securityfilterchain.png) -->

- 1.4.5 Multiple SecurityFilterChain

可以有多个 `SecurityFilterChain` 的配置，`FilterChainProxy` 决定使用哪个 `SecurityFilterChain`.
- 如果请求的 URL 是 `/api/messages/`，它首先匹配 `SecurityFilterChain0` 的模式 `/api/\*\*`，因此只调用 `SecurityFilterChain 0`。
- 假设没有其他 `SecurityFilterChain` 实例匹配，那么将调用 `SecurityFilterChain n`.

<!-- ![multi securityfilterchain](assets/multi-securityfilterchain-17016804731631.png) -->

### 1.5 程序的启动和运行

- DefaultSecurityFilterChain

SecurityFilterChain 接口的默认实现，初始化实例时默认加载了 16 个 `Filter`.

```java
public DefaultSecurityFilterChain(RequestMatcher requestMatcher, List<Filter> filters) {
    if (filters.isEmpty()) {
        logger.info(LogMessage.format("Will not secure %s", requestMatcher));
    } else {
        logger.info(LogMessage.format("Will secure %s with %s", requestMatcher, filters));
    }

    this.requestMatcher = requestMatcher;
    this.filters = new ArrayList(filters);
}
```

<!-- ![image-20231204230216259](assets/image-20231204230216259.png) -->

```text
2024-09-28T20:54:54.048+08:00  INFO 6312 --- [           main] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [
org.springframework.security.web.session.DisableEncodeUrlFilter@2be21396,
org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@124dac75,
org.springframework.security.web.context.SecurityContextHolderFilter@53b1a3f8, 
org.springframework.security.web.header.HeaderWriterFilter@45c9b3, 
org.springframework.web.filter.CorsFilter@315105f, 
org.springframework.security.web.csrf.CsrfFilter@3252747e, 
org.springframework.security.web.authentication.logout.LogoutFilter@7327a447, 
org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter@21263314, 
org.springframework.security.web.authentication.ui.DefaultLoginPageGeneratingFilter@3eb292cd, 
org.springframework.security.web.authentication.ui.DefaultLogoutPageGeneratingFilter@7b61bf11, 
org.springframework.security.web.authentication.www.BasicAuthenticationFilter@b73433, 
org.springframework.security.web.savedrequest.RequestCacheAwareFilter@5a936e64, 
org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@3b4a1a75, 
org.springframework.security.web.authentication.AnonymousAuthenticationFilter@40247d48, 
org.springframework.security.web.access.ExceptionTranslationFilter@68d6d775, 
org.springframework.security.web.access.intercept.AuthorizationFilter@4c6b4ed7]
```

- SecurityProperties

默认情况下 `Spring Security` 将初始的用户名和密码存在了 `SecurityProperties` 类中。这个类中有一个静态内部类 `User`，配置了默认的用户名（`name = "user"`）和密码（`password = uuid`）

```java
@ConfigurationProperties(
    prefix = "spring.security"
)
public class SecurityProperties {

    public static class User {
        private String name = "user";
        private String password = UUID.randomUUID().toString();
    }
}
```

可以将用户名、密码配置在 SpringBoot 的配置文件中：

```yaml
spring: 
  security: 
    user: 
      name: admin
      password: 123
```

## 2. Spring Security 自定义配置

### 2.1 基于内存的用户认证

#### 2.1.1 创建自定义配置

实际开发的过程中，我们需要应用程序更加灵活，可以在 Spring Security 中创建自定义配置文件。

> **官方文档**：https://docs.spring.io/spring-security/reference/servlet/configuration/java.html

1、创建一个 `WebSecurityConfig` 文件

2、定义一个 `@Bean`，类型是 `UserDetailsService`，实现是 `InMemoryUserDetailsManager`

```java
// 标识这是一个配置类
@Configuration
// 开启 Security 配置，在 SpringBoot 环境中，无需引入该注解
// 在 SpringBootWebSecurityConfiguration 中已经引入
@EnableWebSecurity
public class WebSecurityConfig {

    @Bean
    public UserDetailsService userDetailsService() {

        // 创建基于内存的用户信息管理器
        InMemoryUserDetailsManager userDetailsManager = new InMemoryUserDetailsManager();

        // 使用 userDetailsManager 管理 UserDetails 对象
        userDetailsManager.createUser(
                // 创建 UserDetails 对象，用于管理用户名、用户密码、用户角色、用户权限等内容
                User
                .withDefaultPasswordEncoder()
                .username("CodeChen")
                .password("123456")
                .roles("users")
                .build());

        return userDetailsManager;
    }
}
```

**UserDetailsService** 用来管理用户信息，**InMemoryUserDetailsManager** 是 `UserDetailsService` 的一个实现，用来管理基于内存的用户信息。

> **注意**：此时，通过配置文件配置 `SecurityProperties` 中的用户名、密码会失效！

#### 2.1.2 基于内存的用户认证流程

- 程序启动时：
  - 创建 `InMemoryUserDetailsManager` 对象
  - 创建 `User` 对象，封装用户名密码
  - 使用 `InMemoryUserDetailsManager` 将 `User` 存入内存
- 校验用户时：
  - Spring Security 自动使用 `InMemoryUserDetailsManager` 的 `loadUserByUsername` 方法从**内存中**获取 `User` 对象
  - 在 `UsernamePasswordAuthenticationFilter` 过滤器中的 `attemptAuthentication` 方法中将用户输入的用户名密码和从内存中获取到的用户信息进行比较，进行用户认证

### 2.2 基于数据库的用户认证

#### 2.2.1 数据库环境搭建

1、创建数据库表并插入测试数据

```sql
-- 创建数据库
CREATE DATABASE `security-demo`;
USE `security-demo`;

-- 创建用户表
CREATE TABLE `sys_user`(
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(50) DEFAULT NULL ,
	`password` VARCHAR(500) DEFAULT NULL,
	`enabled` BOOLEAN NOT NULL
);
-- 唯一索引
CREATE UNIQUE INDEX `sys_user_username_uindex` ON `sys_user`(`username`); 

-- 插入用户数据(密码是 "123456" )
INSERT INTO `sys_user` (`username`, `password`, `enabled`) VALUES
('admin', '{bcrypt}$2a$10$E49Zm6HtzhSYvCcYkj5dve7Gc3Biu.iZ680bfiqx6Go6iodgL4VTa', TRUE),
('Helen', '{bcrypt}$2a$10$E49Zm6HtzhSYvCcYkj5dve7Gc3Biu.iZ680bfiqx6Go6iodgL4VTa', TRUE),
('Tom', '{bcrypt}$2a$10$E49Zm6HtzhSYvCcYkj5dve7Gc3Biu.iZ680bfiqx6Go6iodgL4VTa', TRUE);
```

2、引入依赖

```xml
 <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.31</version>
</dependency>

<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-spring-boot3-starter</artifactId>
    <version>3.5.7</version>
</dependency>

<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```

3、配置数据源

```yaml
# MySQL 数据源
spring:
  datasource:
#    todo 修改密码
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/security-demo
    username: root
    password: root

# 打印SQL日志
mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

4、实体类

```java
@Data
public class SysUser {

    /** 主键 */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /** 用户名 */
    private String username;

    /** 密码 */
    private String password;

    /** 是否启用 */
    private Boolean enabled;
}
```

5、Mapper

```java
@Mapper
public interface SysUserMapper extends BaseMapper<SysUser> {
}
```

6、Service

```java
public interface ISysUserService extends IService<SysUser> {
}
```

```java
@Service
public class SysUserImpl extends ServiceImpl<SysUserMapper, SysUser> implements ISysUserService {
}
```
7、Controller

```java
@RestController
@RequestMapping("sysuser")
public class SysUserController {

    @Autowired
    private ISysUserService sysUserService;

    @GetMapping("/getSysUserList")
    public List<SysUser> getSysUserList() {
        return sysUserService.list();
    }
}
```

**测试**：`http://localhost:8080/sysuser/list`


#### 2.2.2 基于数据库的用户认证流程

- 程序启动时：
  - 创建 `UserDetailServiceImpl` 类，实现 `UserDetailsService` 接口的 `loadUserByUsername` 方法
  - 将 `UserDetailServiceImpl` 类注入到 IOC 容器中
- 校验用户时：
  - Spring Security 自动使用 `UserDetailServiceImpl` 的 `loadUserByUsername` 方法从**数据库中**获取 `SysUser` 对象，并封装为 `UserDetails`
  - 在 `UsernamePasswordAuthenticationFilter` 过滤器中的 `attemptAuthentication` 方法中将用户输入的用户名密码和从数据库中获取到的用户信息进行比较，进行用户认证

#### 2.2.3 定义 `UserDetailServiceImpl`

```java
@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private ISysUserService sysUserService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SysUser sysUser = sysUserService.getSysUserByUerName(username);

        if (Objects.isNull(sysUser)) {
            throw new UsernameNotFoundException(username);
        }

        Collection<GrantedAuthority> authorities = new ArrayList<>();
        return new User(username,
                sysUser.getPassword(),
                sysUser.getEnabled(),
                // 用户账号不过期
                true,
                // 用户凭证不过期
                true,
                // 用户不锁定
                true,
                // 用户权限
                authorities);
    }
}
```

**测试**：使用数据库中配置的用户名 `admin` 和密码 `123456` 进行登录。

## 3. 密码加密算法

在前面基于数据库的用户认证中，我们输入用户名 `admin`、密码 `123456` 就能实现用户认证登录。

但是数据库中 `admin` 的密码明明是 `{bcrypt}$2a$10$E49Zm6HtzhSYvCcYkj5dve7Gc3Biu.iZ680bfiqx6Go6iodgL4VTa`, 为什么登录密码反而是  `123456` 呢？

我们先回顾下常用的密码加密方式。

**参考文档**：`https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html`

### 3.1 密码加密方式

- 明文密码

最初，密码以明文形式存储在数据库中，但是恶意用户可能会通过 SQL 注入等手段获取到明文密码，或者程序员将数据库数据泄露的情况也可能发生。

- 哈希算法

使用**哈希算法**对密码进行**单向转换**，常见的哈希算法如 `MD5`、`SHA-256`、`SHA-512` 等。

**哈希算法是单向的，只能加密，不能解密**。

因此，**数据库中存储的是单向转换后的密码**，在进行用户身份验证时需要将用户输入的密码进行单向转换，然后与数据库的密码进行比较。

如果发生数据泄露，只有密码的单向哈希会被暴露。由于哈希是单向的，并且在给定哈希的情况下只能通过**暴力破解的方式猜测密码**。

- 彩虹表

彩虹表就是一个庞大的、针对各种可能的字母组合预先生成的哈希值集合，有了它可以快速破解各类密码。

越是复杂的密码，需要的彩虹表就越大，主流的彩虹表都是100G以上，目前主要的算法有LM、NTLM、MD5、SHA1、MYSQLSHA1、HALFLMCHALL、NTLMCHALL、ORACLE-SYSTEM、MD5-HALF.

- 加盐密码

为了减轻彩虹表的效果，开发人员开始使用**加盐密码**。

不再只使用密码作为哈希函数的输入，而是为每个用户的密码生成**随机字节（称为盐）**。

**盐和用户的密码将一起经过哈希函数运算，生成一个唯一的哈希**。

盐将以明文形式与用户的密码一起存储，然后，当用户尝试进行身份验证时，盐和用户输入的密码一起经过哈希函数运算，再与存储的密码进行比较。

唯一的盐意味着彩虹表不再有效，因为对于每个盐和密码的组合，哈希都是不同的。

- 自适应单向函数

随着硬件的不断发展，加盐密码也不再安全。原因是，计算机可以每秒执行数十亿次哈希计算，这意味着可以轻松地破解每个密码。

现在，开发人员开始使用自适应单向函数来存储密码。

使用自适应单向函数验证密码时，**故意占用资源（故意使用大量的CPU、内存或其他资源）**。自适应单向函数允许配置一个**工作因子**，随着硬件的改进而增加。

> 建议将**工作因子**调整到系统中验证密码需要约一秒钟的时间，这种权衡是为了**让攻击者难以破解密码**。

自适应单向函数包括 `BCrypt`、`PBKDF2`、`Scrypt` 和 `Argon2`.

### 3.2 PasswordEncoder

Spring Security 中一个基于自适应单项函数实现的密码解析器接口，用以进行密码存储和校验。

PasswordEncoder 接口具体的实现类有：

- BCryptPasswordEncoder

使用广泛支持的 BCrypt 算法来对密码进行哈希。

为了增加对密码破解的抵抗力，BCrypt 故意设计得较慢。和其他自适应单向函数一样，应该调整其参数，使其在您的系统上验证一个密码大约需要 1 秒的时间。

**BCryptPasswordEncoder 自带 Salt 加盐机制，即使相同的明文每次生成的加密字符串都不相同。默认实现使用强度 10, 建议您在自己的系统上调整和测试强度参数，以便验证密码时大约需要 1 秒的时间**。

- Argon2PasswordEncoder

使用 Argon2 算法对密码进行哈希处理。

为了防止在自定义硬件上进行密码破解，Argon2 是一种故意缓慢的算法，需要大量内存。

当前的 Argon2PasswordEncoder 实现需要使用 BouncyCastle 库。

- Pbkdf2PasswordEncoder

使用 PBKDF2 算法对密码进行哈希处理。

为了防止密码破解，PBKDF2 是一种故意缓慢的算法。

当需要 FIPS 认证时，这种算法是一个很好的选择。

<!-- ![image-20230421184645177](assets/image-20230421184645177.png) -->

- SCryptPasswordEncoder

使用 SCrypt 算法对密码进行哈希处理。

### 3.3 密码加密实现

在测试类中编写一个测试方法。

```java
@Test
void testPassword() {

    // 工作因子，默认值是 10，最小值是 4，最大值是 31，值越大运算速度越慢
    PasswordEncoder encoder = new BCryptPasswordEncoder(4);
    // 明文："123456"
    // 密文：result，即使明文密码相同，每次生成的密文也不一致
    String result = encoder.encode("password");
    System.out.println(result);

    //密码校验
    Assert.isTrue(encoder.matches("password", result), "密码不一致");
}
```

### 3.4 DelegatingPasswordEncoder

- 表中存储的密码形式：`{bcrypt}$2a$10$GRLdNijSQMUvl/au9ofL.eDwmoohzzS7.rmNSJZ.0FxO/BTk76klW`
- 通过如下源码可以知道：可以通过 `{bcrypt}` 前缀动态获取和密码的形式类型一致的 PasswordEncoder 对象
- 目的：方便随时做密码策略的升级，兼容数据库中的老版本密码策略生成的密码

<!-- ![image-20231209011827867](assets/image-20231209011827867.png) -->

## 4. 添加用户

1、`SysUserController` 中添加方法

```java
@PostMapping("/add")
public void addSysUser(@RequestBody SysUser sysUser) {
    sysUserService.addSysUser(sysUser);
}
```

2、`ISysUserService` 接口中添加方法

```java
void addSysUser(SysUser sysUser);
```

3、`SysUserImpl` 实现中添加方法实现

```java
private PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

@Override
public void addSysUser(SysUser sysUser) {
    
    // 使用 PasswordEncoder 加密用户输入的密码
    sysUser.setPassword(passwordEncoder.encode(sysUser.getPassword()));

    save(sysUser);
}
```

4、使用 Swagger 测试
```xml
<!-- 引入 Swagger 依赖 -->
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>
    <version>4.1.0</version>
</dependency>
```

**Swagger测试地址**：`http://localhost:8080/doc.html`

<!-- ![image-20231206022701725](assets/image-20231206022701725.png) -->

5、关闭 CSRF 攻击防御

默认情况下 Spring Security 开启了 CSRF 攻击防御的功能，这要求请求参数中必须有一个隐藏的 `_csrf` 字段，如下：

<!-- ![image-20231206023030864](assets/image-20231206023030864.png) -->

需要在 Spring Security 的默认配置中关闭 CSRF 攻击防御。

在 `WebSecurityConfig` 中添加如下代码：

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
            // 对所有请求开启请求保护
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            // 使用默认登录页
            .formLogin(withDefaults())
            // 关闭跨站伪造攻击
            .csrf(csrf -> csrf.disable())
            .build();
}
```

## 5. Spring Security 的默认配置

我们为了关闭 CSRF 攻击防御，在 `WebSecurityConfig` 中注入了 `SecurityFilterChain`. 在这里可以修改添加 Spring Security 的默认配置，比如**开启授权保护、修改表单授权模式、自定义登录页等等**。

1、开启授权保护

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
            // 对所有请求开启请求保护
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            // 使用默认登录页
            .formLogin(withDefaults())
            // 关闭跨站伪造攻击
            .csrf(csrf -> csrf.disable())
            .build();
}
```

开启后，所有请求都需要经过登录后才能访问。

2、使用浏览器自带登录表单授权

```java
@Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        return httpSecurity
                // 对所有请求开启请求保护
                .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
                // 使用默认登录页
//                .formLogin(withDefaults())
                // 基本授权方式
                .httpBasic(withDefaults())
                // 关闭跨站伪造攻击
                .csrf(csrf -> csrf.disable())
                .build();
    }
```


## 6. 自定义登录页面

在开发中，为了实现更好的交互，往往都是自己开发登录页面。那么，在 Spring Security 要怎么配置自定义登录页面呢？

1、引入模板引擎 `thymeleaf` 依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

2、创建 `LoginController`

```java
@Controller
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }

}
```

3、在 `resources/templates/` 目录下创建登录页面 `login.html`

```html
<!DOCTYPE html>
<html xmlns:th="https://www.thymeleaf.org">
<head>
    <title>登录</title>
</head>
<body>
<h1>登录</h1>
<div th:if="${param.error}">
    错误的用户名和密码.</div>

<!--method必须为"post"-->
<!--th:action="@{/login}" ，
使用动态参数，表单中会自动生成_csrf隐藏字段，用于防止csrf攻击
login: 和登录页面保持一致即可，SpringSecurity自动进行登录认证-->
<form th:action="@{/login}" method="post">
    <div>
        <!--name必须为"username"-->
        <input type="text" name="username" placeholder="用户名"/>
    </div>
    <div>
        <!--name必须为"password"-->
        <input type="password" name="password" placeholder="密码"/>
    </div>
    <input type="submit" value="登录" />
</form>
</body>
</html>
```

4、配置 `WebSecurityConfig` 中的 `SecurityFilterChain`

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
            // 对所有请求开启请求保护
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            // 使用默认登录页
//                .formLogin(withDefaults())
            // 基本授权方式
//                .httpBasic(withDefaults())
            // 配置自定义登录页
            .formLogin(form -> {
                form.loginPage("/login")
                        // 配置登录页无需授权即可访问
                        .permitAll();
            })
            // 关闭跨站伪造攻击
            .csrf(csrf -> csrf.disable())
            .build();
}
```

> 注意：需要配置登录页无需授权即可访问，否则会由于**重定向的次数过多导致页面崩溃**。

5、修改用户名、密码表单字段

在前面的 HTML 中，用户名、密码的表单 `name` 为 `username`、`password`, 是否可以修改为其他名称呢？

答案是可以的。

比如在 HTML 中将用户名、密码的表单 `name` 修改为 `myusername`、`pwd`.
```html
<form th:action="@{/login}" method="post">
    <div>
        <!--name必须为"username"-->
        <input type="text" name="myusername" placeholder="用户名"/>
    </div>
    <div>
        <!--name必须为"password"-->
        <input type="password" name="pwd" placeholder="密码"/>
    </div>
    <input type="submit" value="登录" />
</form>
```

此时，会发现登录不了，提示**错误的用户名和密码.**。

这是因为在 Spring Security 中默认的字段为 `username`、`password`, 在 `UsernamePasswordAuthenticationFilter` 源码中可以看到：
```java
private String usernameParameter = "username";
private String passwordParameter = "password";
```

因此，需要在 Spring Security 的默认配置中进行同步修改：
```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
            // 对所有请求开启请求保护
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            // 使用默认登录页
//                .formLogin(withDefaults())
            // 基本授权方式
//                .httpBasic(withDefaults())
            // 配置自定义登录页
            .formLogin(form -> {
                form.loginPage("/login")
                        // 配置自定义的表单用户名参数 默认：username
                        .usernameParameter("myusername")
                        // 配置自定义的表单密码参数 默认：password
                        .passwordParameter("pwd")
                        // 配置登录页无需授权即可访问
                        .permitAll();
            })
            // 关闭跨站伪造攻击
            .csrf(csrf -> csrf.disable())
            .build();
}
```

## 7. 前后端分离

### 7.1 用户认证流程

<!-- ![usernamepasswordauthenticationfilter](assets/usernamepasswordauthenticationfilter-16822329079281.png) -->

- 登录成功后调用：AuthenticationSuccessHandler
- 登录失败后调用：AuthenticationFailureHandler

### 7.2 认证成功响应处理

1、引入 fastjson2

```xml
<dependency>
    <groupId>com.alibaba.fastjson2</groupId>
    <artifactId>fastjson2</artifactId>
    <version>2.0.40</version>
</dependency>
```

2、创建 `CustomAuthenticationSuccessHandler` 登录成功处理类并实现 `AuthenticationSuccessHandler` 接口

```java
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        // 获取用户身份信息
        Object principal = authentication.getPrincipal();
        // 获取用户凭证信息
        Object credentials = authentication.getCredentials();
        // 获取用户权限信息
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("code", 200);
        resultMap.put("message", "登录成功");
        resultMap.put("data", principal);

        String result = JSON.toJSONString(resultMap);

        // 输出响应结果
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(result);

    }
}
```

3、在 Spring Security 的默认配置中配置**认证成功时的处理类**

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
            // 对所有请求开启请求保护
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            // 使用默认登录页
//                .formLogin(withDefaults())
            // 基本授权方式
//                .httpBasic(withDefaults())
            // 配置自定义登录页
            .formLogin(form -> {
                form.loginPage("/login")
//                            // 配置自定义的表单用户名参数 默认：username
//                            .usernameParameter("myusername")
//                            // 配置自定义的表单密码参数 默认：password
//                            .passwordParameter("pwd")
                        // 配置认证成功自定义处理类
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        // 配置登录页无需授权即可访问
                        .permitAll();
            })
            // 关闭跨站伪造攻击
            .csrf(csrf -> csrf.disable())
            .build();
}
```

### 7.3 认证失败响应处理

1、创建 `CustomAuthenticationFailureHandler` 登录失败处理类并实现 `AuthenticationFailureHandler` 接口

```java
public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {

        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("code", -1);
        resultMap.put("message", "登录失败");
        String result = JSON.toJSONString(resultMap);

        // 输出响应结果
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(result);

    }
}
```

2、在 Spring Security 的默认配置中配置**认证失败时的处理类**

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
            // 对所有请求开启请求保护
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            // 使用默认登录页
//                .formLogin(withDefaults())
            // 基本授权方式
//                .httpBasic(withDefaults())
            // 配置自定义登录页
            .formLogin(form -> {
                form.loginPage("/login")
//                            // 配置自定义的表单用户名参数 默认：username
//                            .usernameParameter("myusername")
//                            // 配置自定义的表单密码参数 默认：password
//                            .passwordParameter("pwd")
                        // 配置认证成功自定义处理类
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        // 配置认证失败自定义处理类
                        .failureHandler(new CustomAuthenticationFailureHandler())
                        // 配置登录页无需授权即可访问
                        .permitAll();
            })
            // 关闭跨站伪造攻击
            .csrf(csrf -> csrf.disable())
            .build();
}
```

### 7.4 注销响应处理

1、创建 `CustomLogoutSuccessHandler` 登录失败处理类并实现 `LogoutSuccessHandler` 接口

```java
public class CustomLogoutSuccessHandler implements LogoutSuccessHandler {

    @Override
    public void onLogoutSuccess(HttpServletRequest request,
                                HttpServletResponse response,
                                Authentication authentication) throws IOException, ServletException {
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("code", 200);
        resultMap.put("message", "注销成功");

        String result = JSON.toJSONString(resultMap);

        // 输出响应结果
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(result);

    }
}
```

2、在 Spring Security 的默认配置中配置**注销成功时的处理类**

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
            // 对所有请求开启请求保护
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            // 使用默认登录页
//                .formLogin(withDefaults())
            // 基本授权方式
//                .httpBasic(withDefaults())
            // 配置自定义登录页
            .formLogin(form -> {
                form.loginPage("/login")
//                            // 配置自定义的表单用户名参数 默认：username
//                            .usernameParameter("myusername")
//                            // 配置自定义的表单密码参数 默认：password
//                            .passwordParameter("pwd")
                        // 配置认证成功自定义处理类
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        // 配置认证失败自定义处理类
                        .failureHandler(new CustomAuthenticationFailureHandler())
                        // 配置登录页无需授权即可访问
                        .permitAll();
            })
            // 配置注销成功自定义处理类
            .logout(logout -> {
                logout.logoutSuccessHandler(new CustomLogoutSuccessHandler());
            })
            // 关闭跨站伪造攻击
            .csrf(csrf -> csrf.disable())
            .build();
}
```

### 7.5 请求未认证接口处理

当访问一个需要认证之后才能访问的接口时，Spring Security 会使用 `AuthenticationEntryPoint` 将用户请求跳转到登录页面，要求用户提供登录凭证。

在前后端分离的模式下，希望**返回 JSON 结果**，可以通过定义类并实现 `AuthenticationEntryPoint` 接口来实现功能。

1、创建 `CustomAuthenticationEntryPoint` 未认证接口的处理类并实现 `AuthenticationEntryPoint` 接口

```java
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {

        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("code", 403);
        resultMap.put("message", "请先登录");
        String result = JSON.toJSONString(resultMap);

        // 输出响应结果
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(result);
    }
}
```

2、在 Spring Security 的默认配置中配置**请求未认证接口的处理类**

```java
//错误处理
http.exceptionHandling(exception  -> {
    exception.authenticationEntryPoint(new MyAuthenticationEntryPoint());//请求未认证的接口
});
```

### 7.6 跨域处理

跨域(CORS)全称是跨域资源共享(Cross-Origin Resources Sharing)，它是浏览器的保护机制，只允许网页请求同一域名下的服务。

> 同一域名指协议、域名、端口号都要保持一致，如果有一项不同，那么就是跨域请求。

在前后端分离的项目中，需要解决跨域的问题。

在 Spring Security 中解决跨域很简单，在默认配置中添加如下配置即可：

```java
//跨域
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

    return httpSecurity
            // 对所有请求开启请求保护
            .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
            // 使用默认登录页
//                .formLogin(withDefaults())
            // 基本授权方式
//                .httpBasic(withDefaults())
            // 配置自定义登录页
            .formLogin(form -> {
                form.loginPage("/login")
//                            // 配置自定义的表单用户名参数 默认：username
//                            .usernameParameter("myusername")
//                            // 配置自定义的表单密码参数 默认：password
//                            .passwordParameter("pwd")
                        // 配置认证成功自定义处理类
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        // 配置认证失败自定义处理类
                        .failureHandler(new CustomAuthenticationFailureHandler())
                        // 配置登录页无需授权即可访问
                        .permitAll();
            })
            // 配置注销成功自定义处理类
            .logout(logout -> {
                logout.logoutSuccessHandler(new CustomLogoutSuccessHandler());
            })
            // 配置请求未认证接口的处理类
            .exceptionHandling(exception -> {
                exception.authenticationEntryPoint(new CustomAuthenticationEntryPoint());
            })
            // 跨域处理
            .cors(withDefaults())
            // 关闭跨站伪造攻击
            .csrf(csrf -> csrf.disable())
            .build();
}
```

## 8. 身份认证

### 8.1 用户认证信息

#### 8.1.1 基本概念

<!-- ![securitycontextholder](assets/securitycontextholder.png) -->

在 Spring Security 框架中，`SecurityContextHolder`、`SecurityContext`、`Authentication`、`Principal` 和 `Credential` 是一些与身份验证和授权相关的重要概念。

它们之间的关系如下：

1. `SecurityContextHolder`：Spring Security 存储已认证用户详细信息的地方
2. `SecurityContext`：从 SecurityContextHolder 获取内容，包含当前已认证用户的 Authentication 信息
3. `Authentication`：Authentication 表示用户的身份认证信息，它包含了用户的 `Principal`、`Credential` 和 `Authority` 信息
4. `Principal`：表示用户的身份标识，它通常是一个表示用户的实体对象。可以通过 `Authentication` 对象的 `getPrincipal()` 方法获取
5. `Credentials`：表示用户的凭证信息，例如密码、证书或其他认证凭据。可以通过 `Authentication` 对象的 `getCredentials()` 方法获取
6. `GrantedAuthority`：表示用户被授予的权限

总结起来：
- `SecurityContextHolder` 用于管理当前线程的安全上下文，存储已认证用户的详细信息，其中包含了 `SecurityContext` 对象
- `SecurityContext` 对象包含了 `Authentication` 对象，`Authentication` 表示用户的身份验证信息
- `Authentication` 对象包括 `Principal`（用户的身份标识）、`Credential`（用户的凭证信息）和 `GrantedAuthority`（用户的权限信息）

#### 8.1.2 在 Controller 中获取用户信息

```java
@RestController
public class IndexController {

    @GetMapping("/")
    public Map index() {

        // 存储认证对象的上下文
        SecurityContext securityContext = SecurityContextHolder.getContext();
        // 认证对象
        Authentication authentication = securityContext.getAuthentication();
        // 用户名
        String name = authentication.getName();
        // 用户信息 org.springframework.security.core.userdetails.User [Username=admin, Password=[PROTECTED], Enabled=true, AccountNonExpired=true, CredentialsNonExpired=true, AccountNonLocked=true, Granted Authorities=[]]
        Object principal = authentication.getPrincipal();
        // 用户凭证（脱敏处理 null）
        Object credentials = authentication.getCredentials();
        // 用户权限
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

        // 创建结果对象
        Map<String,Object> resultMap = new HashMap<>();
        resultMap.put("code", 0);
        resultMap.put("data", name);

        return resultMap;
    }
}
```

### 8.2 会话并发处理

在 Spring Security 框架中可以实现会话并发处理，后登录的账号会使先登录的账号失效。

1、创建 `CustomSessionInformationExpiredStrategy` 类并实现接口 `SessionInformationExpiredStrategy`

```java
public class CustomSessionInformationExpiredStrategy implements SessionInformationExpiredStrategy {

    @Override
    public void onExpiredSessionDetected(SessionInformationExpiredEvent event) throws IOException, ServletException {
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("code", -1);
        resultMap.put("message", "该账号已从其他设备登录");

        String result = JSON.toJSONString(resultMap);

        HttpServletResponse response = event.getResponse();

        // 输出响应结果
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(result);
    }
}
```

2、在 Spring Security 的默认配置中配置**会话并发的处理类**

```java
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        return httpSecurity
                // 对所有请求开启请求保护
                .authorizeHttpRequests(authorize -> authorize.anyRequest().authenticated())
                // 使用默认登录页
//                .formLogin(withDefaults())
                // 基本授权方式
//                .httpBasic(withDefaults())
                // 配置自定义登录页
                .formLogin(form -> {
                    form.loginPage("/login")
//                            // 配置自定义的表单用户名参数 默认：username
//                            .usernameParameter("myusername")
//                            // 配置自定义的表单密码参数 默认：password
//                            .passwordParameter("pwd")
                            // 配置认证成功自定义处理类
                            .successHandler(new CustomAuthenticationSuccessHandler())
                            // 配置认证失败自定义处理类
                            .failureHandler(new CustomAuthenticationFailureHandler())
                            // 配置登录页无需授权即可访问
                            .permitAll();
                })
                // 配置注销成功自定义处理类
                .logout(logout -> {
                    logout.logoutSuccessHandler(new CustomLogoutSuccessHandler());
                })
                // 配置请求未认证接口的处理类
                .exceptionHandling(exception -> {
                    exception.authenticationEntryPoint(new CustomAuthenticationEntryPoint());
                })
                // 跨域处理
                .cors(withDefaults())
                // 会话并发处理
                .sessionManagement(session -> {
                    // 设置用户的最大会话数为 1，即只允许一个用户（同个用户）在线，不允许同一个用户多端多设备同时在线
                    session.maximumSessions(1)
                            .expiredSessionStrategy(new CustomSessionInformationExpiredStrategy());
                })
                // 关闭跨站伪造攻击
                .csrf(csrf -> csrf.disable())
                .build();
    }
```

## 9. 授权

授权管理的实现在SpringSecurity中非常灵活，可以帮助应用程序实现以下两种常见的授权需求：

- 用户-权限-资源：例如张三的权限是添加用户、查看用户列表，李四的权限是查看用户列表

- 用户-角色-权限-资源：例如 张三是角色是管理员、李四的角色是普通用户，管理员能做所有操作，普通用户只能查看信息

### 9.1 基于request的授权

#### 9.1.1 用户-权限-资源

**需求：**

- 具有USER_LIST权限的用户可以访问/user/list接口
- 具有USER_ADD权限的用户可以访问/user/add接口

1、配置权限

SecurityFilterChain

```java
//开启授权保护
http.authorizeRequests(
        authorize -> authorize
    			//具有USER_LIST权限的用户可以访问/user/list
                .requestMatchers("/user/list").hasAuthority("USER_LIST")
    			//具有USER_ADD权限的用户可以访问/user/add
    			.requestMatchers("/user/add").hasAuthority("USER_ADD")
                //对所有请求开启授权保护
                .anyRequest()
                //已认证的请求会被自动授权
                .authenticated()
        );
```

2、授予权限

DBUserDetailsManager中的loadUserByUsername方法：

```java
Collection<GrantedAuthority> authorities = new ArrayList<>();
authorities.add(()->"USER_LIST");
authorities.add(()->"USER_ADD");

/*authorities.add(new GrantedAuthority() {
    @Override
    public String getAuthority() {
        return "USER_LIST";
    }
});
authorities.add(new GrantedAuthority() {
    @Override
    public String getAuthority() {
        return "USER_ADD";
    }
});*/
```

3、请求未授权的接口

SecurityFilterChain

```java
//错误处理
http.exceptionHandling(exception  -> {
    exception.authenticationEntryPoint(new MyAuthenticationEntryPoint());//请求未认证的接口
    exception.accessDeniedHandler((request, response, e)->{ //请求未授权的接口

        //创建结果对象
        HashMap result = new HashMap();
        result.put("code", -1);
        result.put("message", "没有权限");

        //转换成json字符串
        String json = JSON.toJSONString(result);

        //返回响应
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(json);
    });
});
```

**更多的例子**：https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html

#### 9.1.2 用户-角色-资源

**需求**：角色为 ADMIN 的用户才可以访问 `/user/**` 路径下的资源

1、配置角色

SecurityFilterChain

```java
//开启授权保护
http.authorizeRequests(
        authorize -> authorize
                //具有管理员角色的用户可以访问/user/**
                .requestMatchers("/user/**").hasRole("ADMIN")
                //对所有请求开启授权保护
                .anyRequest()
                //已认证的请求会被自动授权
                .authenticated()
);
```

2、授予角色

DBUserDetailsManager中的loadUserByUsername方法：

```java
return org.springframework.security.core.userdetails.User
        .withUsername(user.getUsername())
        .password(user.getPassword())
        .roles("ADMIN")
        .build();
```


### 9.1.3 用户-角色-权限-资源

RBAC（Role-Based Access Control，基于角色的访问控制）是一种常用的数据库设计方案，它将用户的权限分配和管理与角色相关联。以下是一个基本的RBAC数据库设计方案的示例：

1. 用户表（User table）：包含用户的基本信息，例如用户名、密码和其他身份验证信息。

| 列名     | 数据类型 | 描述         |
| -------- | -------- | ------------ |
| user_id  | int      | 用户ID       |
| username | varchar  | 用户名       |
| password | varchar  | 密码         |
| email    | varchar  | 电子邮件地址 |
| ...      | ...      | ...          |

2. 角色表（Role table）：存储所有可能的角色及其描述。

| 列名        | 数据类型 | 描述     |
| ----------- | -------- | -------- |
| role_id     | int      | 角色ID   |
| role_name   | varchar  | 角色名称 |
| description | varchar  | 角色描述 |
| ...         | ...      | ...      |

3. 权限表（Permission table）：定义系统中所有可能的权限。

| 列名            | 数据类型 | 描述     |
| --------------- | -------- | -------- |
| permission_id   | int      | 权限ID   |
| permission_name | varchar  | 权限名称 |
| description     | varchar  | 权限描述 |
| ...             | ...      | ...      |

4. 用户角色关联表（User-Role table）：将用户与角色关联起来。

| 列名         | 数据类型 | 描述           |
| ------------ | -------- | -------------- |
| user_role_id | int      | 用户角色关联ID |
| user_id      | int      | 用户ID         |
| role_id      | int      | 角色ID         |
| ...          | ...      | ...            |

5. 角色权限关联表（Role-Permission table）：将角色与权限关联起来。

| 列名               | 数据类型 | 描述           |
| ------------------ | -------- | -------------- |
| role_permission_id | int      | 角色权限关联ID |
| role_id            | int      | 角色ID         |
| permission_id      | int      | 权限ID         |
| ...                | ...      | ...            |

在这个设计方案中，用户可以被分配一个或多个角色，而每个角色又可以具有一个或多个权限。通过对用户角色关联和角色权限关联表进行操作，可以实现灵活的权限管理和访问控制。

当用户尝试访问系统资源时，系统可以根据用户的角色和权限决定是否允许访问。这样的设计方案使得权限管理更加简单和可维护，因为只需调整角色和权限的分配即可，而不需要针对每个用户进行单独的设置。

### 9.2 基于方法的授权

1、开启方法授权

在配置文件中添加如下注解

```java
@EnableMethodSecurity
```

2、给用户授予角色和权限

DBUserDetailsManager中的loadUserByUsername方法：

```java
return org.springframework.security.core.userdetails.User
        .withUsername(user.getUsername())
        .password(user.getPassword())
        .roles("ADMIN")
        .authorities("USER_ADD", "USER_UPDATE")
        .build();
```

3、常用授权注解

```java
//用户必须有 ADMIN 角色 并且 用户名是 admin 才能访问此方法
@PreAuthorize("hasRole('ADMIN') and authentication.name == 'admim'")
@GetMapping("/list")
public List<User> getList(){
    return userService.list();
}

//用户必须有 USER_ADD 权限 才能访问此方法
@PreAuthorize("hasAuthority('USER_ADD')")
@PostMapping("/add")
public void add(@RequestBody User user){
    userService.saveUserDetails(user);
}
```

**更多的例子**：https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html

## 10. OAuth2

### 10.1 OAuth2 简介

#### 10.1.1 OAuth2 什么

“Auth” 表示 “授权” Authorization

 “O” 是 Open 的简称，表示 “开放”

连在一起就表示 **“开放授权”**，OAuth2是一种开放授权协议。

**OAuth2最简向导**：https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb

#### 10.1.2 OAuth2 的角色

OAuth 2协议包含以下角色：

1. 资源所有者（Resource Owner）：即用户，资源的拥有人，想要通过客户应用访问资源服务器上的资源。
2. 客户应用（Client）：通常是一个Web或者无线应用，它需要访问用户的受保护资源。
3. 资源服务器（Resource Server）：存储受保护资源的服务器或定义了可以访问到资源的API，接收并验证客户端的访问令牌，以决定是否授权访问资源。
4. 授权服务器（Authorization Server）：负责验证资源所有者的身份并向客户端颁发访问令牌。

<!-- ![image-20231222124053994](assets/image-20231222124053994.png) -->

#### 10.1.3 OAuth2的使用场景

- 开放系统间授权

- 社交登录

在传统的身份验证中，用户需要提供用户名和密码，还有很多网站登录时，允许使用第三方网站的身份，这称为"第三方登录"。所谓第三方登录，实质就是 OAuth 授权。用户想要登录 A 网站，A 网站让用户提供第三方网站的数据，证明自己的身份。获取第三方网站的身份数据，就需要 OAuth 授权。

<!-- ![image-20231222131233025](assets/image-20231222131233025.png) -->

- 开放API

例如云冲印服务的实现

<!-- ![image-20231222131118611](assets/image-20231222131118611.png) -->

- 现代微服务安全

- 单块应用安全

<!-- ![image-20231222152734546](assets/image-20231222152734546.png) -->

- 微服务安全

<!-- ![image-20231222152557861](assets/image-20231222152557861.png) -->

- 企业内部应用认证授权

- SSO：Single Sign On 单点登录

- IAM：Identity and Access Management 身份识别与访问管理

#### 10.1.4 OAuth2 的四种授权模式

RFC6749：

[RFC 6749 - The OAuth 2.0 Authorization Framework (ietf.org)](https://datatracker.ietf.org/doc/html/rfc6749)

阮一峰：

[OAuth 2.0 的四种方式 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)


四种模式：

- 授权码（authorization-code）
- 隐藏式（implicit）
- 密码式（password）
- 客户端凭证（client credentials）



#### 第一种方式：授权码

**授权码（authorization code），指的是第三方应用先申请一个授权码，然后再用该码获取令牌。**

这种方式是最常用，最复杂，也是最安全的，它适用于那些有后端的 Web 应用。授权码通过前端传送，令牌则是储存在后端，而且所有与资源服务器的通信都在后端完成。这样的前后端分离，可以避免令牌泄漏。

<!-- ![image-20231220180422742](assets/image-20231220180422742.png) -->



- 注册客户应用：客户应用如果想要访问资源服务器需要有凭证，需要在授权服务器上注册客户应用。注册后会**获取到一个ClientID和ClientSecrets**

<!-- ![image-20231222203153125](assets/image-20231222203153125.png) -->

#### 第二种方式：隐藏式

**隐藏式（implicit），也叫简化模式，有些 Web 应用是纯前端应用，没有后端。这时就不能用上面的方式了，必须将令牌储存在前端。**

RFC 6749 规定了这种方式，允许直接向前端颁发令牌。这种方式没有授权码这个中间步骤，所以称为隐藏式。这种方式把令牌直接传给前端，是很不安全的。因此，只能用于一些安全要求不高的场景，并且令牌的有效期必须非常短，通常就是会话期间（session）有效，浏览器关掉，令牌就失效了。

<!-- ​								![image-20231220185958063](assets/image-20231220185958063.png) -->



<!-- ![image-20231222203218334](assets/image-20231222203218334.png) -->

```
https://a.com/callback#token=ACCESS_TOKEN
将访问令牌包含在URL锚点中的好处：锚点在HTTP请求中不会发送到服务器，减少了泄漏令牌的风险。
```

#### 第三种方式：密码式

**密码式（Resource Owner Password Credentials）：如果你高度信任某个应用，RFC 6749 也允许用户把用户名和密码，直接告诉该应用。该应用就使用你的密码，申请令牌。**

这种方式需要用户给出自己的用户名/密码，显然风险很大，因此只适用于其他授权方式都无法采用的情况，而且必须是用户高度信任的应用。

<!-- ![image-20231220190152888](assets/image-20231220190152888.png) -->

<!-- ![image-20231222203240921](assets/image-20231222203240921.png) -->

#### 第四种方式：凭证式

**凭证式（client credentials）：也叫客户端模式，适用于没有前端的命令行应用，即在命令行下请求令牌。**

这种方式给出的令牌，是针对第三方应用的，而不是针对用户的，即有可能多个用户共享同一个令牌。

<!-- ![image-20231220185958063](assets/image-20231220185958063.png) -->

<!-- ![image-20231222203259785](assets/image-20231222203259785.png) -->

#### 10.1.5 授权类型的选择

<!-- ![image-20231223020052999](assets/image-20231223020052999.png) -->



### 10.2 Spring中的OAuth2

#### 10.2.1 相关角色

**回顾：**OAuth 2中的角色

1. 资源所有者（Resource Owner）
2. 客户应用（Client）
3. 资源服务器（Resource Server）
4. 授权服务器（Authorization Server）

#### 10.2.2 Spring中的实现

[OAuth2 :: Spring Security](https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html)

**Spring Security**

- 客户应用（OAuth2 Client）：OAuth2客户端功能中包含OAuth2 Login
- 资源服务器（OAuth2 Resource Server）

**Spring**

- 授权服务器（Spring Authorization Server）：它是在Spring Security之上的一个单独的项目。

#### 10.2.3 相关依赖

```xml
<!-- 资源服务器 -->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
</dependency>

<!-- 客户应用 -->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>

<!-- 授权服务器 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-authorization-server</artifactId>
</dependency>
```

#### 10.2.4 授权登录的实现思路

使用OAuth2 Login

<!-- ![image-20231223164128030](assets/image-20231223164128030.png) -->

### 10.3 GiuHub 社交登录案例

#### 10.3.1 创建应用

**注册客户应用：**

登录GitHub，在开发者设置中找到OAuth Apps，创建一个application，为客户应用创建访问GitHub的凭据：

<!-- ![image-20230510154255157](assets/image-20230510154255157.png) -->

填写应用信息：`默认的重定向URI模板为{baseUrl}/login/oauth2/code/{registrationId}`。registrationId是ClientRegistration的唯一标识符。

<!-- ![image-20231221000906168](assets/image-20231221000906168.png) -->

获取应用程序id，生成应用程序密钥：

<!-- ![image-20230510163101376](assets/image-20230510163101376.png) -->

#### 10.3.2 创建测试项目

创建一个springboot项目oauth2-login-demo，创建时引入如下依赖

<!-- ![image-20230510165314829](assets/image-20230510165314829.png) -->

示例代码参考：[spring-security-samples/servlet/spring-boot/java/oauth2/login at 6.2.x · spring-projects/spring-security-samples (github.com)](https://github.com/spring-projects/spring-security-samples/tree/6.2.x/servlet/spring-boot/java/oauth2/login)

#### 10.3.3 配置 OAuth 客户端属性

application.yml：

```properties
spring:
  security:
    oauth2:
      client:
        registration:
          github:
            client-id: 7807cc3bb1534abce9f2
            client-secret: 008dc141879134433f4db7f62b693c4a5361771b
#            redirectUri: http://localhost:8200/login/oauth2/code/github
```



#### 10.3.4 创建Controller

```java
package com.atguigu.oauthdemo.controller;

@Controller
public class IndexController {

    @GetMapping("/")
    public String index(
            Model model,
            @RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient,
            @AuthenticationPrincipal OAuth2User oauth2User) {
        model.addAttribute("userName", oauth2User.getName());
        model.addAttribute("clientName", authorizedClient.getClientRegistration().getClientName());
        model.addAttribute("userAttributes", oauth2User.getAttributes());
        return "index";
    }
}
```

#### 10.3.5 创建 html 页面

resources/templates/index.html

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="https://www.thymeleaf.org" xmlns:sec="https://www.thymeleaf.org/thymeleaf-extras-springsecurity5">
<head>
    <title>Spring Security - OAuth 2.0 Login</title>
    <meta charset="utf-8" />
</head>
<body>
<div style="float: right" th:fragment="logout" sec:authorize="isAuthenticated()">
    <div style="float:left">
        <span style="font-weight:bold">User: </span><span sec:authentication="name"></span>
    </div>
    <div style="float:none">&nbsp;</div>
    <div style="float:right">
        <form action="#" th:action="@{/logout}" method="post">
            <input type="submit" value="Logout" />
        </form>
    </div>
</div>
<h1>OAuth 2.0 Login with Spring Security</h1>
<div>
    You are successfully logged in <span style="font-weight:bold" th:text="${userName}"></span>
    via the OAuth 2.0 Client <span style="font-weight:bold" th:text="${clientName}"></span>
</div>
<div>&nbsp;</div>
<div>
    <span style="font-weight:bold">User Attributes:</span>
    <ul>
        <li th:each="userAttribute : ${userAttributes}">
            <span style="font-weight:bold" th:text="${userAttribute.key}"></span>: <span th:text="${userAttribute.value}"></span>
        </li>
    </ul>
</div>
</body>
</html>
```

#### 10.3.6 启动应用程序

- 启动程序并访问localhost:8080。浏览器将被重定向到默认的自动生成的登录页面，该页面显示了一个用于GitHub登录的链接。
- 点击GitHub链接，浏览器将被重定向到GitHub进行身份验证。
- 使用GitHub账户凭据进行身份验证后，用户会看到授权页面，询问用户是否允许或拒绝客户应用访问GitHub上的用户数据。点击允许以授权OAuth客户端访问用户的基本个人资料信息。
- 此时，OAuth客户端访问GitHub的获取用户信息的接口获取基本个人资料信息，并建立一个已认证的会话。



### 10.4 案例分析

#### 10.4.1 登录流程

1. **A 网站让用户跳转到 GitHub，并携带参数ClientID 以及 Redirection URI。**
2. GitHub 要求用户登录，然后询问用户"A 网站要求获取用户信息的权限，你是否同意？"
3. 用户同意，GitHub 就会重定向回 A 网站，同时发回一个授权码。
4. **A 网站使用授权码，向 GitHub 请求令牌。**
5. GitHub 返回令牌.
6. **A 网站使用令牌，向 GitHub 请求用户数据。**
7. GitHub返回用户数据
8. **A 网站使用 GitHub用户数据登录**

<!-- ![image-20231223203225688](assets/image-20231223203225688.png) -->

#### 10.4.2 CommonOAuth2Provider

CommonOAuth2Provider是一个预定义的通用OAuth2Provider，为一些知名资源服务API提供商（如Google、GitHub、Facebook）预定义了一组默认的属性。

例如，**授权URI、令牌URI和用户信息URI**通常不经常变化。因此，提供默认值以减少所需的配置。

因此，当我们配置GitHub客户端时，只需要提供client-id和client-secret属性。

```java
GITHUB {
    public ClientRegistration.Builder getBuilder(String registrationId) {
        ClientRegistration.Builder builder = this.getBuilder(
        registrationId, 
        ClientAuthenticationMethod.CLIENT_SECRET_BASIC, 
        
        //授权回调地址(GitHub向客户应用发送回调请求，并携带授权码)   
		"{baseUrl}/{action}/oauth2/code/{registrationId}");
        builder.scope(new String[]{"read:user"});
        //授权页面
        builder.authorizationUri("https://github.com/login/oauth/authorize");
        //客户应用使用授权码，向 GitHub 请求令牌
        builder.tokenUri("https://github.com/login/oauth/access_token");
        //客户应用使用令牌向GitHub请求用户数据
        builder.userInfoUri("https://api.github.com/user");
        //username属性显示GitHub中获取的哪个属性的信息
        builder.userNameAttributeName("id");
        //登录页面超链接的文本
        builder.clientName("GitHub");
        return builder;
    }
},
```