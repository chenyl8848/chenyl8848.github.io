---
title: MyBatisPlus
date: 2022-04-11
category:
  - 中间件
  - 数据库
tag:
  - MyBatis Plus
---

# 1.  简介
<!-- more -->

## 1.1 简介
> MyBatis-Plus（简称 MP）是一个 MyBatis的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。

## 1.2 特性
- 无侵入：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑
- 损耗小：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作
- 强大的 CRUD 操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分CRUD 操作，更有强大的条件构造器，满足各类使用需求
- 支持 Lambda 形式调用：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错
- 支持主键自动生成：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题
- 支持 ActiveRecord 模式：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作
- 支持自定义全局通用操作：支持全局通用方法注入（ Write once, use anywhere ）
- 内置代码生成器：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、
- Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用
- 内置分页插件：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询
- 分页插件支持多种数据库：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库
- 内置性能分析插件：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询
- 内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作

## 1.3 支持数据库
> 任何能使用MyBatis进行 CRUD, 并且支持标准 SQL 的数据库，具体支持情况如下：
>
> - MySQL，Oracle，DB2，H2，HSQL，SQLite，PostgreSQL，SQLServer，Phoenix，Gauss，ClickHouse，Sybase，OceanBase，Firebird，Cubrid，Goldilocks，csiidb
> - 达梦数据库，虚谷数据库，人大金仓数据库，南大通用(华库)数据库，南大通用数据库，神通数据库，瀚高数据库

## 1.4 框架结构

<!-- <img src="image-20220414173701561.png" alt="image-20220414173701561" style="zoom:67%;" /> -->

## 1.5 官方地址
- [官方地址](http://mp.baomidou.com)
- [Github](https://github.com/baomidou/mybatis-plus)
- [Gitee](https://gitee.com/baomidou/mybatis-plus)
- [文档地址](https://baomidou.com/pages/24112f/)


# 2. 入门案例

## 2.1 开发环境
```markdown
IDE：idea 2019.2
JDK：JDK8+
构建工具：maven 3.5.4
MySQL版本：MySQL 5.7
Spring Boot：2.6.3
MyBatis-Plus：3.5.1
```

## 2.2 创建数据库表

1. 创建表
```sql
CREATE DATABASE `mybatis_plus` /*!40100 DEFAULT CHARACTER SET utf8mb4 */; 
use `mybatis_plus`;
 CREATE TABLE `user` ( 
    `id` bigint(20) NOT NULL COMMENT '主键ID', 
    `name` varchar(30) DEFAULT NULL COMMENT '姓名',
    `age` int(11) DEFAULT NULL COMMENT '年龄',
    `email` varchar(50) DEFAULT NULL COMMENT '邮箱', 
    PRIMARY KEY (`id`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

2. 添加数据
```sql
INSERT INTO user (id, name, age, email) VALUES 
    (1, 'Jone', 18, 'test1@baomidou.com'), 
    (2, 'Jack', 20, 'test2@baomidou.com'), 
    (3, 'Tom', 28, 'test3@baomidou.com'), 
    (4, 'Sandy', 21, 'test4@baomidou.com'), 
    (5, 'Billie', 24, 'test5@baomidou.com');
```

## 2.3 创建Spring Boot工程

1. pom依赖
```xml
<dependencies> 
    <dependency> 
        <groupId>org.springframework.boot</groupId> 
        <artifactId>spring-boot-starter</artifactId> 
    </dependency>
    <dependency> 
        <groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-test</artifactId> 
        <scope>test</scope> 
    </dependency> 
    <dependency> 
        <groupId>com.baomidou</groupId> 
        <artifactId>mybatis-plus-boot-starter</artifactId> 
        <version>3.5.1</version> 
    </dependency> 
    <dependency> 
        <groupId>org.projectlombok</groupId> 
        <artifactId>lombok</artifactId>
        <optional>true</optional> 
    </dependency> 
    <dependency>
        <groupId>mysql</groupId> 
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope> 
    </dependency> 
</dependencies>
```

2. 配置信息
```yaml
spring: 
    # 配置数据源信息 
    datasource: 
    	# 配置数据源类型 
        type: com.zaxxer.hikari.HikariDataSource 
        # 配置连接数据库信息 
        driver-class-name: com.mysql.cj.jdbc.Driver 
        url: jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf- 8&useSSL=false 
        username: root 
        password: 123456
```

> 注意：
> 1. 驱动类driver-class-name:
>       - spring boot 2.0（内置jdbc5驱动），驱动类使用：driver-class-name: com.mysql.jdbc.Driver
>       - spring boot 2.1及以上（内置jdbc8驱动），驱动类使用：driver-class-name: com.mysql.cj.jdbc.Driver
>
> 2. 连接地址url：
>       - MySQL5.7版本的url：jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf-8&useSSL=false
>       - MySQL8.0版本的url：jdbc:mysql://localhost:3306/mybatis_plus?serverTimezone=GMT%2B8&characterEncoding=utf-8&useSSL=false
>       - 否则运行测试用例报告如下错误：java.sql.SQLException: The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more

3. 启动类
> 在Spring Boot启动类中添加`@MapperScan`注解，扫描mapper包

```java
@SpringBootApplication 
@MapperScan("com.atguigu.mybatisplus.mapper") 
public class MybatisplusApplication { 
    public static void main(String[] args) { 
        SpringApplication.run(MybatisplusApplication.class, args); 
    } 
}
```

4. 实体类
```java
@Data //lombok注解 
public class User { 
    private Long id; 
    private String name; 
    private Integer age; 
    private String email; 
}
```

5. 添加`mapper`
> BaseMapper是MyBatis-Plus提供的模板mapper，其中包含了基本的CRUD方法，泛型为操作的实体类型

```java
@Mapper
public interface UserMapper extends BaseMapper<User> { 

}
```

6. 添加`SQL`打印日志
```yaml
# 配置MyBatis日志 
mybatis-plus: 
    configuration: 
        log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

# 3. 增删改查

## 3.1 BaseMapper
> MyBatis-Plus中的基本`CRUD`在内置的`BaseMapper`中都已得到了实现，可直接使用，接口如下：

```java
package com.baomidou.mybatisplus.core.mapper; 
public interface BaseMapper<T> extends Mapper<T> { 
    /*** 插入一条记录 
    * @param entity 实体对象 
    */ 
    int insert(T entity); 
    
    /*** 根据 ID 删除 
    * @param id 主键ID 
    */ 
    int deleteById(Serializable id); 
    
    /*** 根据实体(ID)删除 
    * @param entity 实体对象 
    * @since 3.4.4 
    */
	int deleteById(T entity); 
    
    /*** 根据 columnMap 条件，删除记录 
    * @param columnMap 表字段 map 对象 
    */ 
    int deleteByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap); 
    
    /*** 根据 entity 条件，删除记录 
    * @param queryWrapper 实体对象封装操作类（可以为 null,里面的 entity 用于生成 where 语句）
    */ 
    int delete(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper); 
    
    /*** 删除（根据ID 批量删除） 
    * @param idList 主键ID列表(不能为 null 以及 empty)
    */ 
    int deleteBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList); 
    
    /*** 根据 ID 修改 
    * @param entity 实体对象 
    */ 
    int updateById(@Param(Constants.ENTITY) T entity); 
    
    /*** 根据 whereEntity 条件，更新记录 
    * @param entity 实体对象 (set 条件值,可以为 null) 
    * @param updateWrapper 实体对象封装操作类（可以为 null,里面的 entity 用于生成 where 语句） 
    */ 
    int update(@Param(Constants.ENTITY) T entity, @Param(Constants.WRAPPER) Wrapper<T> updateWrapper); 
    
    /*** 根据 ID 查询 
    * @param id 主键ID 
    */ 
    T selectById(Serializable id); 
    
    /*** 查询（根据ID 批量查询） 
    * @param idList 主键ID列表(不能为 null 以及 empty) 
    */ 
    List<T> selectBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList); 
    
    /*** 查询（根据 columnMap 条件）
    * @param columnMap 表字段 map 对象 
    */ 
    List<T> selectByMap(@Param(Constants.COLUMN_MAP) Map<String, Object> columnMap); 
    
    /**
    * 根据 entity 条件，查询一条记录 
    * <p>查询一条记录，例如 qw.last("limit 1") 限制取一条记录, 注意：多条数据会报异常 </p> 
    * @param queryWrapper 实体对象封装操作类（可以为 null） 
    */ 
    default T selectOne(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper) { 
        List<T> ts = this.selectList(queryWrapper); 
        if (CollectionUtils.isNotEmpty(ts)) { 
            if (ts.size() != 1) { 
                throw ExceptionUtils.mpe("One record is expected, but the query result is multiple records"); 
            }
            return ts.get(0); 
        }
        return null; 
    }
                
    /*** 根据 Wrapper 条件，查询总记录数 
    * @param queryWrapper 实体对象封装操作类（可以为 null） 
    */ 
    Long selectCount(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
    
     /*** 根据 entity 条件，查询全部记录 
     * @param queryWrapper 实体对象封装操作类（可以为 null） 
     */ 
    List<T> selectList(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper); 
     
     /*** 根据 Wrapper 条件，查询全部记录 
     * @param queryWrapper 实体对象封装操作类（可以为 null） 
     */ 
    List<Map<String, Object>> selectMaps(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper); 
     
     /*** 根据 Wrapper 条件，查询全部记录 
     * <p>注意： 只返回第一个字段的值</p> 
     * @param queryWrapper 实体对象封装操作类（可以为 null） 
     */ 
    List<Object> selectObjs(@Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
     
      /*** 根据 entity 条件，查询全部记录（并翻页） 
      * @param page 分页查询条件（可以为 RowBounds.DEFAULT） 
      * @param queryWrapper 实体对象封装操作类（可以为 null） 
      */ 
    <P extends IPage<T>> P selectPage(P page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper); 
    
    /*** 根据 Wrapper 条件，查询全部记录（并翻页） 
    * @param page 分页查询条件 
    * @param queryWrapper 实体对象封装操作类 
    */ 
    <P extends IPage<Map<String, Object>>> P selectMapsPage(P page, @Param(Constants.WRAPPER) Wrapper<T> queryWrapper);
}
```

## 3.2 通用Service
> 说明:
>   - 通用 Service CRUD 封装 `IService` 接口，进一步封装 CRUD 采用 get 查询单行 remove 删 除 list 查询集合 page 分页 前缀命名方式区分 Mapper 层避免混淆，
>   - 泛型 T 为任意实体对象
>   - 建议如果存在自定义通用 Service 方法的可能，请创建自己的 IBaseService 继承Mybatis-Plus 提供的基类
>   - [官网地址](https://baomidou.com/pages/49cc81/#service-crud-%E6%8E%A5%E5%8F%A3)

1. 创建Service接口和实现类
```java
/*** UserService继承IService模板提供的基础功能 */ 
public interface UserService extends IService<User> { 

}
```

```java
/*** ServiceImpl实现了IService，提供了IService中基础功能的实现 
* 若ServiceImpl无法满足业务需求，则可以使用自定的UserService定义方法，并在实现类中实现
*/ 
@Service 
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService { 

}
```

# 4. 常用注解

## 4.1 `@TableName`
> 在实体类类型上添加@TableName("table_name")，标识实体类对应的表

- 全局配置表明前缀
> 当实体类所对应的表都有固定的前缀，例如t_或tbl_ 此时，可以使用MyBatis-Plus提供的全局配置，为实体类所对应的表名设置默认的前缀
```yaml
mybatis-plus: 
    configuration: 
    # 配置MyBatis日志 
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl 
    global-config: 
        db-config:
        # 配置MyBatis-Plus操作表的默认前缀 
        table-prefix: t_
```

## 4.2 `@TableId`
> 在实体类中属性上通过@TableId将其标识为主键

- TableId的type属性
> type属性用来定义主键策略

常用的主键策略：

| 值                       | 描述                                                         |
| ------------------------ | ------------------------------------------------------------ |
| IdType.ASSIGN_ID（默认） | 基于雪花算法的策略生成数据id，与数据库id是否设置自增无关     |
| IdType.AUTO              | 使用数据库的自增策略，注意，该类型请确保数据库设置了id自增，否则无效 |

- 配置全局主键策略：

  ```yaml
  mybatis-plus: 
  	configuration: 
  	# 配置MyBatis日志 
  	log-impl: org.apache.ibatis.logging.stdout.StdOutImpl 
  	global-config: 
  		db-config: 
  		# 配置MyBatis-Plus操作表的默认前缀 
  		table-prefix: t_ 
  		# 配置MyBatis-Plus的主键策略 
  		id-type: auto
  ```

- 雪花算法

  > 雪花算法是由Twitter公布的分布式主键生成算法，它能够保证不同表的主键的不重复性，以及相同表的主键的有序性。

  1. 核心思想：

     长度共64bit（一个long型）；
     首先是一个符号位，1bit标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负数是1，所以id一般是正数，最高位是0；
     41bit时间截(毫秒级)，存储的是时间截的差值（当前时间截 - 开始时间截)，结果约等于69.73年；
     10bit作为机器的ID（5个bit是数据中心，5个bit的机器ID，可以部署在1024个节点）；
     12bit作为毫秒内的流水号（意味着每个节点在每毫秒可以产生 4096 个 ID）。

     <!-- <img src="image-20220414101522238.png" alt="image-20220414101522238" style="zoom:67%;" /> -->

  2. 优点：整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞，并且效率较高。

  
## 4.3 `@TableField`

  > 在实体类属性上使用@TableField("username")设置属性所对应的字段名



## 4.4 `@TableLogic`

1. 逻辑删除
   - 物理删除：真实删除，将对应数据从数据库中删除，之后查询不到此条被删除的数据
   - 逻辑删除：假删除，将对应数据中代表是否被删除字段的状态修改为“被删除状态”，之后在数据库中仍旧能看到此条数据记录
   - 使用场景：可以进行数据恢复
2. 实现逻辑删除
3. 具体表现
   - 测试删除功能，真正执行的是修改
     `UPDATE t_user SET is_deleted=1 WHERE id=? AND is_deleted=0`
   - 测试查询功能，被逻辑删除的数据默认不会被查询
     `SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE is_deleted=0`

# 5. 条件构造器和常用接口

## 5.1 `wapper`

<!-- <img src="image-20220414102032696.png" alt="image-20220414102032696" style="zoom:67%;" /> -->

- `Wrapper `： 条件构造抽象类，最顶端父类
  - `AbstractWrapper `： 用于查询条件封装，生成 sql 的 where 条件
    - `QueryWrapper` ： 查询条件封装
    - `UpdateWrapper` ： Update 条件封装
    - `AbstractLambdaWrapper` ： 使用Lambda 语法
      - `LambdaQueryWrapper` ：用于Lambda语法使用的查询Wrapper
      - `LambdaUpdateWrapper` ： Lambda 更新封装Wrapper



## 5.2 `QueryWrapper`

## 5.3 `UpdateWrapper`

## 5.4 `condition`

> 在真正开发的过程中，组装条件是常见的功能，而这些条件数据来源于用户输入，是可选的，因此我们在组装这些条件时，必须先判断用户是否选择了这些条件，若选择则需要组装该条件，若没有选择则一定不能组装，以免影响SQL执行的结果。

## 5.5 `LambdaQueryWrapper`

## 5.6 `LambdaUpdateWrapper`



# 6. 插件

## 6.1 分页插件

> MyBatis Plus自带分页插件，只要简单的配置即可实现分页功能

1. 添加配置类

   ```java
   @Configuration 
   @MapperScan("com.atguigu.mybatisplus.mapper") //可以将主类中的注解移到此处 
   public class MybatisPlusConfig { 
       @Bean 
       public MybatisPlusInterceptor mybatisPlusInterceptor() { 
           MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); 			   interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL)); 
           return interceptor; 
       } 
   }
   ```

2. 测试

   ```java
   @Test public void testPage(){ 
       //设置分页参数 
       Page<User> page = new Page<>(1, 5); 
       userMapper.selectPage(page, null); //获取分页数据 
       List<User> list = page.getRecords(); 
       list.forEach(System.out::println); 
       System.out.println("当前页："+page.getCurrent()); 
       System.out.println("每页显示的条数："+page.getSize()); 
       System.out.println("总记录数："+page.getTotal()); 
       System.out.println("总页数："+page.getPages()); 
       System.out.println("是否有上一页："+page.hasPrevious());
       System.out.println("是否有下一页："+page.hasNext()); 
   }
   ```

   

## 6.2 xml自定义分页

1. `UserMapper`中定义接口方法

   ```java
   /*** 根据年龄查询用户列表，分页显示 
   * @param page 分页对象,xml中可以从里面进行取值,传递参数 Page 即自动分页,必须放在第一位 
   * @param age 年龄 
   * @return 
   */ 
   I Page<User> selectPageVo(@Param("page") Page<User> page, @Param("age") Integer age);
   ```

2.  UserMapper.xml中编写SQL

   ```xml
   <!--SQL片段，记录基础字段--> 
   <sql id="BaseColumns">id,username,age,email</sql> 
   <!--IPage<User> selectPageVo(Page<User> page, Integer age);--> 
   <select id="selectPageVo" resultType="User"> 
       SELECT <include refid="BaseColumns"></include> FROM t_user WHERE age > # {age} 
   </select>
   ```



## 6.3 乐观锁

1. 添加乐观锁插件配置

   ```java
   @Bean 
   public MybatisPlusInterceptor mybatisPlusInterceptor(){ 
       MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor(); 
       //添加分页插件 
       interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL)); 
       //添加乐观锁插件 
       interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor()); 
       return interceptor; 
   }
   ```

2. 修改实体类

   ```java
   @Data 
   public class Product { 
       private Long id; 
       private String name; 
       private Integer price; 
       @Version 
       private Integer version; 
   }
   ```



# 7. 代码生成器

1. 依赖

   ```xml
   <dependency> 
       <groupId>com.baomidou</groupId> 
       <artifactId>mybatis-plus-generator</artifactId> 
       <version>3.5.1</version> 
   </dependency> 
   <dependency> 
       <groupId>org.freemarker</groupId> 
       <artifactId>freemarker</artifactId> 
       <version>2.3.31</version> 
   </dependency>
   ```

2. 生成

   ```java
   public class FastAutoGeneratorTest {
       public static void main(String[] args) { 		
           FastAutoGenerator.create("jdbc:mysql://127.0.0.1:3306/mybatis_plus? characterEncoding=utf-8&userSSL=false", "root", "123456") 
               .globalConfig(builder -> { 
                   builder.author("atguigu") // 设置作者 
                       //.enableSwagger() // 开启 swagger 模式 
                       .fileOverride() // 覆盖已生成文件 
                       .outputDir("D://mybatis_plus"); // 指定输出目录 
               }).packageConfig(builder -> { 
               	builder.parent("com.atguigu") // 设置父包名 
                       .moduleName("mybatisplus") // 设置父包模块名 
                       .pathInfo(Collections.singletonMap(OutputFile.mapperXml, "D://mybatis_plus")); // 设置mapperXml生成路径 
           }).strategyConfig(
               builder -> { builder.addInclude("t_user") // 设置需要生成的表名 
                   .addTablePrefix("t_", "c_"); // 设置过滤表前缀 
                          })
               .templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker 引擎模板，默认的是Velocity引擎模板 
               .execute(); 
       } 
   }
   ```



# 8. 多数据源

> 适用于多种场景：纯粹多库、 读写分离、 一主多从、 混合模式等

1. 引入依赖

   ```xml
   <dependency> 
       <groupId>com.baomidou</groupId> 
       <artifactId>dynamic-datasource-spring-boot-starter</artifactId> 
       <version>3.5.0</version> 
   </dependency>
   ```

2. 配置多数据源

   ```yaml
   spring: 
   	# 配置数据源信息 
   	datasource: dynamic: 
   	# 设置默认的数据源或者数据源组,默认值即为master 
   	primary: master 
   	# 严格匹配数据源,默认false.true未匹配到指定数据源时抛异常,false使用默认数据源 
   	strict: false 
   	datasource: 
   		master: 
   			url: jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf- 8&useSSL=false 
   			driver-class-name: com.mysql.cj.jdbc.Driver 
   			username: root 
   			password: 123456 
           slave_1: 
           	url: jdbc:mysql://localhost:3306/mybatis_plus_1?characterEncoding=utf- 8&useSSL=false 
           	driver-class-name: com.mysql.cj.jdbc.Driver 
           	username: root 
           	password: 123456
   ```

3. `Service`指定数据源

   ```java
   @DS("master") //指定所操作的数据源 
   @Service 
   public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService { 
   }
   ```

   ```java
   @DS("slave_1") 
   @Service 
   public class ProductServiceImpl extends ServiceImpl<ProductMapper, Product> implements ProductService {
   }
   ```

   # 9. MyBatisX插件

   [MyBatisX插件用法](https://baomidou.com/pages/ba5b24/)
