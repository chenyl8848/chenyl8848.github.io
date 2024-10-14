---
title: Redis 万字入门教程
date: 2022-04-10
category:
  - 中间件
  - NoSQL
tag:
  - Redis
---

# Redis 万字入门教程
<!-- more -->

> [学习视频【编程不良人】](https://www.bilibili.com/video/BV1jD4y1Q7tU?spm_id_from=333.999.0.0)

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/Redis_Mindmap.png)

## 1. NoSQL

### 1.1 NoSQL 介绍

**NoSQL**(`Not Only SQL` )，意即**不仅仅是 SQL**,泛指**非关系型的数据库**。NoSQL 这个技术门类，早期就有人提出，发展至2009年趋势越发高涨。

随着互联网网站的兴起，传统的关系数据库在应付动态网站，特别是超大规模和高并发的纯动态网站已经显得力不从心，暴露了很多难以克服的问题。如**商城网站中对商品数据频繁查询、对热搜商品的排行统计、订单超时问题、以及微信朋友圈（音频，视频）存储**等相关使用传统的关系型数据库实现就显得非常复杂，虽然能实现相应功能但是在性能上却不是那么乐观。NoSQL 这个技术门类的出现，更好的解决了这些问题，它告诉了世界不仅仅是 SQL.

<!-- more -->

### 1.2 NoSQL 四大分类

- 键值(Key-Value)存储数据库

```markdown
1. 说明
  这一类数据库主要会使用到一个哈希表，这个表中有一个特定的键和一个指针指向特定的数据。

2. 特点
  Key/Value 模型对于 IT 系统来说的优势在于简单、易部署。  
  但是如果 DBA 只对部分值进行查询或更新的时候，Key/Value 就显得效率低下了。

3. 相关产品
  Tokyo Cabinet/Tyrant
  Redis
  SSDB
  Voldemort 
  Oracle BDB
```

- 列存储数据库

```markdown
1. 说明
  这部分数据库通常是用来应对分布式存储的海量数据。

2. 特点
  键仍然存在，但是它们的特点是指向了多个列。这些列是由列家族来安排的。

3. 相关产品
  Cassandra、HBase、Riak
```

- 文档型数据库

```markdown
1. 说明
  文档型数据库的灵感是来自于 Lotus Notes 办公软件的，而且它同第一种键值存储相类似该类型的数据模型是版本化的文档，半结构化的文档以特定的格式存储，比如 JSON.文档型数据库可以看作是键值数据库的升级版，允许之间嵌套键值，而且文档型数据库比键值数据库的查询效率更高。

2. 特点
  以文档形式存储

3. 相关产品
  MongoDB、CouchDB,国内也有文档型数据库 SequoiaDB,已经开源。
```

- 图形(Graph)数据库

 ```markdown
1. 说明
  图形结构的数据库同其他行列以及刚性结构的 SQL 数据库不同，它是使用灵活的图形模型，并且能够扩展到多个服务器上。
  NoSQL 数据库没有标准的查询语言(SQL)，因此进行数据库查询需要制定数据模型。许多 NoSQL 数据库都有 REST 式的数据接口或者查询 API.

2. 特点

3. 相关产品
  Neo4J、InfoGrid、 Infinite Graph
```

### 1.3 NoSQL 应用场景

- 数据模型比较简单
- 需要灵活性更强的IT系统
- 对数据库性能要求较高
- 不需要高度的数据一致性

----

## 2. Redis

### 2.1 Redis 介绍
![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623121234046.png)

> Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.

Redis 是一个遵循 BSD 开源的基于内存数据存储库，可用于作为数据库、缓存 、消息中间件。

**总结: Redis 是一个内存型的数据库**。

### 2.2 Redis 特点

-  Redis 是一个高性能 Key/Value 内存型数据库
-  Redis 支持丰富的数据类型 
-  Redis 支持持久化 
-  Redis 单线程、单进程

### 2.3 Redis 安装

```markdown
0. 准备环境
  - vmware15.x+
  - centos7.x+

1. 下载 Redis 源码包
  https://redis.io/
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623121621195.png)

```markdown
2. 下载完整源码包
  redis-4.0.10.tar.gz
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623123918876.png)

```markdown
3. 将下载的 Redis 安装包上传到 Linux 中
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623124327319.png)

```markdown
4. 解压缩文件
  tar -zxvf redis-4.0.10.tar.gz
  ll
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623124522026.png)

```markdown
5. 安装 gcc  
  yum install -y gcc

6. 进入解压缩目录执行如下命令
  make MALLOC=libc

7. 编译完成后执行如下命令
  make install PREFIX=/usr/redis

8. 进入 /usr/redis 目录启动 Redis 服务 
  ./redis-server
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623125420505.png)

```markdown
9. Redis 服务端口默认是 6379

10. 进入 bin 目录执行客户端连接操作
  ./redis-cli –p 6379
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623125716013.png)

```markdown
11.  连接成功出现上面界面连接成功
```

----

## 3. Redis 数据库相关指令

### 3.1 数据库操作指令

```markdown
1. Redis 库说明
  使用 Redis 的默认配置启动 Redis 服务后，默认会存在 16 个库，编号从 0-15
  可以使用 select 库的编号 来选择一个 Redis 的库

2. Redis 操作库的指令
  清空当前的库 FLUSHDB
  清空全部的库 FLUSHALL

3. Redis 客户端显示中文
  ./redis-cli -p 7000 --raw
```

### 3.2 Key 操作指令

```markdown
1. DEL 指令
  语法：DEL key [key ...] 
  作用：删除给定的一个或多个 key,不存在的 key 会被忽略
  可用版本：>= 1.0.0
  返回值：被删除 key 的数量 

2. EXISTS 指令
  语法：EXISTS key
  作用：检查给定 key 是否存在
  可用版本：>= 1.0.0
  返回值：若 key 存在，返回 1,否则返回 0

3. EXPIRE
  语法：EXPIRE key seconds
  作用：为给定 key 设置生存时间，当 key 过期时(生存时间为0 )，它会被自动删除。
  可用版本： >= 1.0.0
  时间复杂度： O(1)
  返回值：设置成功返回 1

4. KEYS
  语法：KEYS pattern
  作用：查找所有符合给定模式 pattern 的 key
  语法:
	  KEYS * 匹配数据库中所有 key
	  KEYS h?llo 匹配 hello、hallo 和 hxllo 等
	  KEYS h*llo 匹配 hllo 和 heeeeello 等
	  KEYS h[ae]llo 匹配 hello 和 hallo,但不匹配 hillo,特殊符号用 "\" 隔开
  可用版本：>= 1.0.0
  返回值：符合给定模式的 key 列表

5. MOVE
  语法：MOVE key db
  作用：将当前数据库的 key 移动到给定的数据库 db 当中
  可用版本：>= 1.0.0
  返回值：移动成功返回 1, 失败则返回 0

6. PEXPIRE
  语法：PEXPIRE key milliseconds
  作用：这个命令和 EXPIRE 命令的作用类似，但是它以毫秒为单位设置 key 的生存时间，而不像 EXPIRE 命令以秒为单位
  可用版本：>= 2.6.0
  时间复杂度：O(1)
  返回值：设置成功，返回 1,key 不存在或设置失败，返回 0

7. PEXPIREAT
  语法：PEXPIREAT key milliseconds-timestamp
  作用：这个命令和 EXPIREAT 命令类似，但它以毫秒为单位设置 key 的过期 Unix 时间戳，而不是像 EXPIREAT 以秒为单位
  可用版本：>= 2.6.0
  返回值：如果生存时间设置成功，返回 1,当 key 不存在或没办法设置生存时间时，返回 0

8. TTL
  语法：TTL key
  作用：以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)
  可用版本：>= 1.0.0
  返回值：
	  当 key 不存在时，返回 -2 
	  当 key 存在但没有设置剩余生存时间时，返回 -1 
	  否则，以秒为单位，返回 key 的剩余生存时间
  注意：在 Redis2.8 以前，当 key 不存在，或者 key 没有设置剩余生存时间时，命令都返回-1 

9. PTTL
  语法：PTTL key
  作用：这个命令类似于 TTL 命令，但它以毫秒为单位返回 key 的剩余生存时间，而不是像 TTL 命令以秒为单位
  可用版本：>= 2.6.0
  返回值：
    当 key 不存在时，返回 -2
    当 key 存在但没有设置剩余生存时间时，返回 -1
  否则，以毫秒为单位，返回 key 的剩余生存时间
  注意：在 Redis2.8 以前，当 key 不存在，或者 key 没有设置剩余生存时间时，命令都返回 -1

10. RANDOMKEY
  语法：RANDOMKEY
  作用：从当前数据库中随机返回（不删除） 一个 key
  可用版本：>= 1.0.0
  返回值：当数据库不为空时，返回一个 key,当数据库为空时，返回 nil

11. RENAME
  语法：RENAME key newkey
  作用：将 key 改名为 newkey,当 key 和 newkey 相同，或者 key 不存在时，返回一个错误；当 newkey 已经存在时，RENAME 命令将覆盖旧值
  可用版本：>= 1.0.0
  返回值：改名成功时提示 OK,失败时候返回一个错误

12. TYPE
  语法：TYPE key
  作用：返回 key 所储存的值的类型
  可用版本：>= 1.0.0
  返回值：
    none (key 不存在)
    string (字符串)
    list (列表)
    set (集合)
    zset (有序集)
    hash (哈希表)
```

### 3.3 String 类型

1. 内存存储模型

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623132104399.png)

2. 常用操作命令

| 命令                                       | 说明                                       |
| ------------------------------------------ | ------------------------------------------ |
| set                                        | 设置一个key/value                          |
| get                                        | 根据key获得对应的value                     |
| mset                                       | 一次设置多个key value                      |
| mget                                       | 一次获得多个key的value                     |
| getset                                     | 获得原始key的值，同时设置新值              |
| strlen                                     | 获得对应key存储value的长度                 |
| append                                     | 为对应key的value追加内容                   |
| getrange 索引0开始                         | 截取value的内容                            |
| setex                                      | 设置一个key存活的有效期（秒）              |
| psetex                                     | 设置一个key存活的有效期（毫秒）            |
| setnx                                      | 存在不做任何操作,不存在添加                |
| msetnx原子操作(只要有一个存在不做任何操作) | 可以同时设置多个key,只有有一个存在都不保存 |
| decr                                       | 进行数值类型的-1操作                       |
| decrby                                     | 根据提供的数据进行减法操作                 |
| Incr                                       | 进行数值类型的+1操作                       |
| incrby                                     | 根据提供的数据进行加法操作                 |
| Incrbyfloat                                | 根据提供的数据加入浮点数                   |

### 3.4 List 类型

List 类型相当于 Java 中 List 集合，**元素有序且可以重复**。

1. 内存存储模型

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623161114380.png)

2. 常用操作指令

| 命令    | 说明                                 |
| ------- | ------------------------------------ |
| lpush   | 将某个值加入到一个 key 列表头部        |
| lpushx  | 同 lpush,但是必须要保证这个 key 存在    |
| rpush   | 将某个值加入到一个 key 列表末尾        |
| rpushx  | 同 rpush,但是必须要保证这个 key 存在    |
| lpop    | 返回和移除列表左边的第一个元素       |
| rpop    | 返回和移除列表右边的第一个元素       |
| lrange  | 获取某一个下标区间内的元素           |
| llen    | 获取列表元素个数                     |
| lset    | 设置某一个指定索引的值(索引必须存在) |
| lindex  | 获取某一个指定索引位置的元素         |
| lrem    | 删除重复元素                         |
| ltrim   | 保留列表中特定区间内的元素           |
| linsert | 在某一个元素之前，之后插入新元素     |

### 3.5 Set 类型

Set 类型相当于 Java 中的 Set 集合，**元素无序且不可以重复**。

1. 内存存储模型

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623193634316.png)

2. 常用命令

| 命令        | 说明                                               |
| ----------- | -------------------------------------------------- |
| sadd        | 为集合添加元素                                     |
| smembers    | 显示集合中所有元素 无序                            |
| scard       | 返回集合中元素的个数                               |
| spop        | 随机返回一个元素 并将元素在集合中删除              |
| smove       | 从一个集合中向另一个集合移动元素  必须是同一种类型 |
| srem        | 从集合中删除一个元素                               |
| sismember   | 判断一个集合中是否含有这个元素                     |
| srandmember | 随机返回元素                                       |
| sdiff       | 去掉第一个集合中其它集合含有的相同元素             |
| sinter      | 求交集                                             |
| sunion      | 求和集                                             |

### 3.6 ZSet 类型

ZSet 类型是可排序的 Set 集合，但**不可重复**。

1. 内存模型

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623194903967.png)

2. 常用命令

| 命令                       | 说明                         |
| -------------------------- | ---------------------------- |
| zadd                       | 添加一个有序集合元素         |
| zcard                      | 返回集合的元素个数           |
| zrange 升序 zrevrange 降序 | 返回一个范围内的元素         |
| zrangebyscore              | 按照分数查找一个范围内的元素 |
| zrank                      | 返回排名                     |
| zrevrank                   | 倒序排名                     |
| zscore                     | 显示某一个元素的分数         |
| zrem                       | 移除某一个元素               |
| zincrby                    | 给某个特定元素加分           |

### 3.7 Hash 类型

Hash 类型中的 Value 是一个 Map 结构。 

1. 内存模型

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623200348408.png)

2. 常用命令

| 命令         | 说明                    |
| ------------ | ----------------------- |
| hset         | 设置一个 key/value 对     |
| hget         | 获得一个 key 对应的 value  |
| hgetall      | 获得所有的 key/value 对   |
| hdel         | 删除某一个 key/value 对   |
| hexists      | 判断一个 key 是否存在     |
| hkeys        | 获得所有的 key           |
| hvals        | 获得所有的 value         |
| hmset        | 设置多个 key/value       |
| hmget        | 获得多个 key的value      |
| hsetnx       | 设置一个不存在的 key 的值 |
| hincrby      | 为 value 进行加法运算     |
| hincrbyfloat | 为 value 加入浮点值       |

----

## 4. Redis 持久化机制

client redis[内存] -->  内存数据 - 数据持久化 --> 磁盘

Redis 官方提供了两种不同的持久化方法来将数据存储到硬盘里面分别是：
- 快照(Snapshot)
- AOF (Append Only File) 只追加日志文件

### 4.1 快照(Snapshot)

1. 特点

这种方式可以将某一时刻的所有数据都写入硬盘中，当然这也是 **Redis 的默认开启持久化方式**，保存的文件是以 `.rdb` 形式结尾的文件因此这种方式也称之为 **RDB 方式**。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623204303074.png)

2. 快照生成方式

- 客户端方式：`BGSAVE` 和 `SAVE` 指令
- 服务器配置自动触发

```markdown
1. 客户端方式之 BGSAVE
  客户端可以使用 BGSAVE 命令来创建一个快照，当接收到客户端的 BGSAVE 命令时，Redis 会调用 fork 来创建一个子进程，然后子进程负责将快照写入磁盘中，而父进程则继续处理命令请求。
	
	名词解释: fork 当一个进程创建子进程的时候，底层的操作系统会创建该进程的一个副本，在类 Unix 系统中创建子进程的操作会进行优化：在刚开始的时候，父子进程共享相同内存，直到父进程或子进程对内存进行了写之后，对被写入的内存的共享才会结束服务。
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623205132460.png)

```markdown
2. 客户端方式之SAVE
  客户端还可以使用 SAVE 命令来创建一个快照，接收到 SAVE 命令的 Redis 服务器在快照创建完毕之前将不再响应任何其他的命令。
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623205444101.png)

> **注意：SAVE 命令并不常用，使用 SAVE 命令在快照创建完毕之前，Redis 处于阻塞状态，无法对外服务**。

```markdown
3. 服务器配置方式之满足配置自动触发
  如果用户在 redis.conf 中设置了 save 配置选项，Redis 会在 save 选项条件满足之后自动触发一次 BGSAVE 命令，如果设置多个 save 配置选项，当任意一个 save 配置选项条件满足，Redis也会触发一次 BGSAVE 命令。
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623210021012.png)

```markdown
4. 服务器接收客户端 shutdown 指令
  当 Redis 通过 shutdown 指令接收到关闭服务器的请求时，会执行一个 save 命令，阻塞所有的客户端，不再执行客户端执行发送的任何命令，并且在 save 命令执行完毕之后关闭服务器。
```

3. 配置生成快照名称和位置

```markdown
1. 修改生成快照名称
  dbfilename dump.rdb

2. 修改生成位置
  dir ./
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623210352448.png)

### 4.2 AOF 只追加日志文件

1. 特点

这种方式可以将所有客户端执行的写命令记录到日志文件中，AOF 持久化会将被执行的写命令写到 AOF 的文件末尾，以此来记录数据发生的变化，因此只要 Redis 从头到尾执行一次AOF文件所包含的所有写命令，就可以恢复AOF文件的记录的数据集。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623211330798.png)

2. 开启 AOF 持久化

在 Redis 的默认配置中AOF持久化机制是没有开启的，需要在配置中开启。

```markdown
1. 开启AOF持久化
  修改 appendonly yes 开启持久化
  修改 appendfilename "appendonly.aof" 指定生成文件名称
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623211508987.png)

3. 日志追加频率

```markdown
1. always 【谨慎使用】
  说明：每个 Redis 写命令都要同步写入硬盘，严重降低 Redis 速度
  解释：如果用户使用了 always 选项，那么每个 Redis 写命令都会被写入硬盘，从而将发生系统崩溃时出现的数据丢失减到最少；遗憾的是，因为这种同步策略需要对硬盘进行大量的写入操作，所以 Redis 处理命令的速度会受到硬盘性能的限制
  注意：转盘式硬盘在这种频率下200左右个命令/s;固态硬盘(SSD) 几百万个命令/s
  警告：使用 SSD 用户请谨慎使用 always 选项，这种模式不断写入少量数据的做法有可能会引发严重的写入放大问题，导致将固态硬盘的寿命从原来的几年降低为几个月

2. everysec 【推荐】
  说明：每秒执行一次同步显式的将多个写命令同步到磁盘
  解释：为了兼顾数据安全和写入性能，用户可以考虑使用 everysec 选项，让 Redis 每秒一次的频率对 AOF 文件进行同步；Redis 每秒同步一次 AOF 文件时性能和不使用任何持久化特性时的性能相差无几，而通过每秒同步一次 AOF 文件，Redis 可以保证，即使系统崩溃，用户最多丢失一秒之内产生的数据

3. no	【不推荐】
  说明：由操作系统决定何时同步 
  解释：最后使用 no 选项，将完全有操作系统决定什么时候同步 AOF 日志文件，这个选项不会对 Redis 性能带来影响但是系统崩溃时，会丢失不定数量的数据，另外如果用户硬盘处理写入操作不够快的话，当缓冲区被等待写入硬盘数据填满时，Redis 会处于阻塞状态，并导致 Redis 的处理命令请求的速度变慢
```

4. 修改同步频率

```markdown
1. 修改日志同步频率
  修改 appendfsync everysec|always|no 指定
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623211658910.png)

### 4.3 AOF 文件的重写

1. AOF 带来的问题

AOF 的方式也同时带来了另一个问题：**持久化文件会变的越来越大**。

例如我们调用 `incr test` 命令 100 次，文件中必须保存全部的100条命令，其实有99条都是多余的。因为要恢复数据库的状态其实文件中保存一条 `set test 100` 就够了。为了压缩 AOF 的持久化文件 Redis 提供了 AOF 重写(ReWriter)机制。

2. AOF 重写

用来在一定程度上减小 AOF 文件的体积。

3. 触发重写方式

```markdown
1. 客户端方式触发重写
  执行 BGREWRITEAOF 命令，不会阻塞 Redis 的服务

2. 服务器配置方式自动触发
  配置 redis.conf 中的 auto-aof-rewrite-percentage 选项
  如果设置 auto-aof-rewrite-percentage 值为 100 和 auto-aof-rewrite-min-size 64mb,并且启用的 AOF 持久化时，那么当 AOF 文件体积大于64M,并且 AOF 文件的体积比上一次重写之后体积大了至少一倍(100%)时，会自动触发，如果重写过于频繁，用户可以考虑将 auto-aof-rewrite-percentage 设置为更大
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623212547775.png)

4. 重写原理

> **注意：重写 AOF 文件的操作，并没有读取旧的 AOF 文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的 AOF 文件，替换原有的文件这点和快照有点类似**。

```markdown
重写流程：
  1. Redis 调用 fork,现在有父子两个进程，子进程根据内存中的数据库快照，往临时文件中写入重建数据库状态的命令
  2. 父进程继续处理 Client 请求，除了把写命令写入到原来的 AOF 文件中，同时把收到的写命令缓存起来，这样就能保证如果子进程重写失败的话并不会出问题
  3. 当子进程把快照内容写入已命令方式写到临时文件中后，子进程发信号通知父进程，然后父进程把缓存的写命令也写入到临时文件
  4. 现在父进程可以使用临时文件替换老的 AOF 文件，并重命名，后面收到的写命令也开始往新的 AOF 文件中追加
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623214843123.png)

### 4.4 持久化总结

两种持久化方案既可以同时使用，又可以单独使用，在某种情况下也可以都不使用，具体使用那种持久化方案取决于用户的数据和应用决定。

无论使用 AOF 还是快照机制持久化，将数据持久化到硬盘都是有必要的，除了持久化外，用户还应该对持久化的文件进行备份（最好备份在多个不同地方）。

----

## 5. Java 操作 Redis

### 5.1 环境准备

1. 引入依赖

```xml
<!--引入jedis连接依赖-->
<dependency>
  <groupId>redis.clients</groupId>
  <artifactId>jedis</artifactId>
  <version>2.9.0</version>
</dependency>
```

2. 创建 Jedis 对象

```java
 public static void main(String[] args) {
   //1.创建jedis对象
   Jedis jedis = new Jedis("192.168.40.4", 6379);//1.redis服务必须关闭防火墙  2.redis服务必须开启远程连接
   jedis.select(0);//选择操作的库默认0号库
   //2.执行相关操作
   //....
   //3.释放资源
   jedis.close();
 }
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200623201932000.png)

### 5.2 操作 Key 相关API

```java
private Jedis jedis;
    @Before
    public void before(){
        this.jedis = new Jedis("192.168.202.205", 7000);
    }
    @After
    public void after(){
        jedis.close();
    }

    //测试key相关
    @Test
    public void testKeys(){
        //删除一个key
        jedis.del("name");
        //删除多个key
        jedis.del("name","age");

        //判断一个key是否存在exits
        Boolean name = jedis.exists("name");
        System.out.println(name);

        //设置一个key超时时间 expire pexpire
        Long age = jedis.expire("age", 100);
        System.out.println(age);

        //获取一个key超时时间 ttl
        Long age1 = jedis.ttl("newage");
        System.out.println(age1);

        //随机获取一个key
        String s = jedis.randomKey();

        //修改key名称
        jedis.rename("age","newage");

        //查看可以对应值的类型
        String name1 = jedis.type("name");
        System.out.println(name1);
        String maps = jedis.type("maps");
        System.out.println(maps);
    }
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627180325687.png)

### 5.3 操作 String 相关API

```java
//测试String相关
    @Test
    public void testString(){
        //set
        jedis.set("name","小陈");
        //get
        String s = jedis.get("name");
        System.out.println(s);
        //mset
        jedis.mset("content","好人","address","海淀区");
        //mget
        List<String> mget = jedis.mget("name", "content", "address");
        mget.forEach(v-> System.out.println("v = " + v));
        //getset
        String set = jedis.getSet("name", "小明");
        System.out.println(set);

        //............
    }
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627180352953.png)

### 5.4 操作 List 相关 API

```java
//测试List相关
    @Test
    public void testList(){

        //lpush
        jedis.lpush("names1","张三","王五","赵柳","win7");

        //rpush
        jedis.rpush("names1","xiaomingming");

        //lrange

        List<String> names1 = jedis.lrange("names1", 0, -1);
        names1.forEach(name-> System.out.println("name = " + name));

        //lpop rpop
        String names11 = jedis.lpop("names1");
        System.out.println(names11);

        //llen
        jedis.linsert("lists", BinaryClient.LIST_POSITION.BEFORE,"xiaohei","xiaobai");

      	//........

    }
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627180435997.png)

### 5.5 操作 Set 的相关 API

```java
//测试SET相关
@Test
public void testSet(){

  //sadd
  jedis.sadd("names","zhangsan","lisi");

  //smembers
  jedis.smembers("names");

  //sismember
  jedis.sismember("names","xiaochen");

  //...
}
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627181913715.png)

### 5.6 操作 ZSet 相关 API

```java
//测试ZSET相关
@Test
public void testZset(){

  //zadd
  jedis.zadd("names",10,"张三");

  //zrange
  jedis.zrange("names",0,-1);

  //zcard
  jedis.zcard("names");

  //zrangeByScore
  jedis.zrangeByScore("names","0","100",0,5);

  //..

}
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627181947116.png)

### 5.7 操作 Hash 相关 API

```java
//测试HASH相关
@Test
public void testHash(){
  //hset
  jedis.hset("maps","name","zhangsan");
  //hget
  jedis.hget("maps","name");
  //hgetall
  jedis.hgetAll("mps");
  //hkeys
  jedis.hkeys("maps");
  //hvals
  jedis.hvals("maps");
  //....
}
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200628093242527.png)

----

## 6. SpringBoot 整合 Redis

Spring Boot Data(数据) Redis 中提供 `RedisTemplate和StringRedisTemplate`，其中 `StringRedisTemplate` 是 `RedisTemplate` 的子类，两个方法基本一致，不同之处主要体现在操作的数据类型不同，`RedisTemplate` 中的两个泛型都是 `Object`，意味着存储的 key 和 value 都可以是一个对象，而 `StringRedisTemplate` 的两个泛型都是 `String`，意味着 `StringRedisTemplate` 的 key 和 value 都只能是字符串。

> **注意：使用 `RedisTemplate` 默认是将对象序列化到 Redis 中，所以放入的对象必须实现对象序列化接口**。

### 6.1 环境准备

1. 引入依赖

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

2. 配置 `application.properties`

```properties
spring.redis.host=localhost
spring.redis.port=6379
spring.redis.database=0
```

### 6.2 使用 `StringRedisTemplate` 和 `RedisTemplate`

```java
@Autowired
private StringRedisTemplate stringRedisTemplate;  //对字符串支持比较友好，不能存储对象
@Autowired
private RedisTemplate redisTemplate;  //存储对象

@Test
public void testRedisTemplate(){
    System.out.println(redisTemplate);
    //设置redistemplate值使用对象序列化策略
    redisTemplate.setValueSerializer(new JdkSerializationRedisSerializer());//指定值使用对象序列化
    //redisTemplate.opsForValue().set("user",new User("21","小黑",23,new Date()));
    User user = (User) redisTemplate.opsForValue().get("user");
    System.out.println(user);
//      Set keys = redisTemplate.keys("*");
//      keys.forEach(key -> System.out.println(key));
    /*Object name = redisTemplate.opsForValue().get("name");
    System.out.println(name);*/

    //Object xiaohei = redisTemplate.opsForValue().get("xiaohei");
    //System.out.println(xiaohei);
    /*redisTemplate.opsForValue().set("name","xxxx");
    Object name = redisTemplate.opsForValue().get("name");
    System.out.println(name);*/
    /*redisTemplate.opsForList().leftPushAll("lists","xxxx","1111");
    List lists = redisTemplate.opsForList().range("lists", 0, -1);
    lists.forEach(list-> System.out.println(list));*/
}


//key的绑定操作 如果日后对某一个key的操作及其频繁，可以将这个key绑定到对应redistemplate中，日后基于绑定操作都是操作这个key
//boundValueOps 用来对String值绑定key
//boundListOps 用来对List值绑定key
//boundSetOps 用来对Set值绑定key
//boundZsetOps 用来对Zset值绑定key
//boundHashOps 用来对Hash值绑定key

@Test
public void testBoundKey(){
    BoundValueOperations<String, String> nameValueOperations = stringRedisTemplate.boundValueOps("name");
    nameValueOperations.set("1");
    //yuew
    nameValueOperations.set("2");
    String s = nameValueOperations.get();
    System.out.println(s);

}


//hash相关操作 opsForHash
@Test
public void testHash(){
    stringRedisTemplate.opsForHash().put("maps","name","小黑");
    Object o = stringRedisTemplate.opsForHash().get("maps", "name");
    System.out.println(o);
}

//zset相关操作 opsForZSet
@Test
public void testZSet(){
    stringRedisTemplate.opsForZSet().add("zsets","小黑",10);
    Set<String> zsets = stringRedisTemplate.opsForZSet().range("zsets", 0, -1);
    zsets.forEach(value-> System.out.println(value));
}

//set相关操作 opsForSet
@Test
public void testSet(){
    stringRedisTemplate.opsForSet().add("sets","xiaosan","xiaosi","xiaowu");
    Set<String> sets = stringRedisTemplate.opsForSet().members("sets");
    sets.forEach(value-> System.out.println(value));
}

//list相关的操作opsForList
@Test
public void testList(){
    // stringRedisTemplate.opsForList().leftPushAll("lists","张三","李四","王五");
    List<String> lists = stringRedisTemplate.opsForList().range("lists", 0, -1);
    lists.forEach(key -> System.out.println(key));
}


//String相关的操作 opsForValue
@Test
public void testString(){
    //stringRedisTemplate.opsForValue().set("166","好同学");
    String s = stringRedisTemplate.opsForValue().get("166");
    System.out.println(s);
    Long size = stringRedisTemplate.opsForValue().size("166");
    System.out.println(size);
}


//key相关的操作
@Test
public void test(){
    Set<String> keys = stringRedisTemplate.keys("*");//查看所有key
    Boolean name = stringRedisTemplate.hasKey("name");//判断某个key是否存在
    stringRedisTemplate.delete("age");//根据指定key删除
    stringRedisTemplate.rename("","");//修改key的名称
    stringRedisTemplate.expire("key",10, TimeUnit.HOURS);
    //设置key超时时间 参数1:设置key名 参数2:时间 参数3:时间的单位
    stringRedisTemplate.move("",1);//移动key
}
```

---

## 7. Redis 主从复制

### 7.1 主从复制介绍

主从复制架构仅仅用来解决数据的冗余备份，从节点仅仅用来同步数据，无法解决 Master 节点出现故障的自动故障转移。

**架构图**：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627201722700.png)

### 7.2 搭建主从复制

```markdown
1. 准备 3 台机器并修改配置
  - master
    port 6379
    bind 0.0.0.0
    
  - slave1
    port 6380
    bind 0.0.0.0
    slaveof masterip masterport

  - slave2
    port 6381
    bind 0.0.0.0
    slaveof masterip masterport
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627202443388.png)

```markdown
2. 启动 3 台机器进行测试
  cd /usr/redis/bin
  ./redis-server /root/master/redis.conf
  ./redis-server /root/slave1/redis.conf
  ./redis-server /root/slave2/redis.conf
```

---

## 8. Redis Sentinel 哨兵机制

### 8.1 Sentinel 哨兵机制介绍

Sentinel（哨兵）是 Redis 的高可用性解决方案：由一个或多个 Sentinel 实例组成的 Sentinel 系统可以监视任意多个主服务器，以及这些主服务器属下的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器属下的某个从服务器升级为新的主服务器。

简单的说哨兵机制就是带有**自动故障转移功能的主从架构**，**但是无法解决单节点并发压力、单节点内存和磁盘物理上限的问题**。

**架构原理**：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627204422750.png)

### 8.2 搭建哨兵架构

```markdown
1. 在主节点上创建哨兵配置
  在 Master 对应 redis.conf 同目录下新建 sentinel.conf 文件，名字绝对不能错

2. 配置哨兵，在 sentinel.conf 文件中填入内容：
  sentinel monitor 被监控数据库名字（自己起名字） ip port 1

3. 启动哨兵模式进行测试
  redis-sentinel  /root/sentinel/sentinel.conf
	
  说明：这个后面的数字 2,是指当有两个及以上的 sentinel 服务检测到 Master 宕机，才会去执行主从切换的功能
```

### 8.3 通过 SpringBoot 操作哨兵

修改 `application.properties` 配置文件：
```properties
# redis sentinel 配置
# master书写是使用哨兵监听的那个名称
spring.redis.sentinel.master=mymaster
# 连接的不再是一个具体redis主机，书写的是多个哨兵节点
spring.redis.sentinel.nodes=192.168.202.206:26379
```

**注意：如果连接过程中出现如下错误 `RedisConnectionException: DENIED Redis is running in protected mode because protected mode is enabled, no bind address was specified, no authentication password is requested to clients. In this mode connections are only accepted from the loopback interface. If you want to connect from external computers to Redis you may adopt one of the following solutions: 1) Just disable protected mode sending the command 'CONFIG SET protected-mode no' from the loopback interface by connecting to Redis from the same host the server is running, however MAKE SURE Redis is not publicly accessible from internet if you do so. Use CONFIG REWRITE to make this change permanent. 2)`**

**解决方案：在哨兵的配置文件中加入 `bind 0.0.0.0` 开启远程连接权限**

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200629154647970.png)

## 9. Redis 集群

### 9.1 集群介绍

Redis 在 3.0 后开始支持 `Cluster` 模式，目前 Redis 的集群支持节点的自动发现，支持 `slave-master` 选举和容错，支持在线分片(`sharding shard`)等特性。reshard

**集群架构图**：

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/wpsgRnQP8.jpg)

**集群细节**：
- 所有的 Redis 节点彼此互联(`PING-PONG` 机制)，内部使用二进制协议优化传输速度和带宽
- 节点的 fail 是通过集群中超过半数的节点检测失效时才生效
- 客户端与 Redis 节点直连，不需要中间 proxy 层，客户端不需要连接集群所有节点，连接集群中任何一个可用节点即可
- redis-cluster 把所有的物理节点映射到[0-16383] slot 上，Cluster 负责维护 `node<->slot<->value`

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200629165226329.png)

### 9.2 集群搭建

判断一个是集群中的节点是否可用，是集群中的所用主节点选举过程，如果半数以上的节点认为当前节点挂掉，那么当前节点就是挂掉了，所以搭建 Redis 集群时建议节点数最好为奇数，**搭建集群至少需要三个主节点，三个从节点，至少需要6个节点**。

```markdown
1. 准备环境安装ruby以及redis集群依赖
  yum install -y ruby rubygems
  gem install redis-xxx.gem
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627193219366.png)

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627193348905.png)

```markdown
2. 在一台机器创建7个目录
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627193849867.png)

```markdown
3. 每个目录复制一份配置文件
  cp redis-4.0.10/redis.conf 7000/
  cp redis-4.0.10/redis.conf 7001/
  cp redis-4.0.10/redis.conf 7002/
  cp redis-4.0.10/redis.conf 7003/
  cp redis-4.0.10/redis.conf 7004/
  cp redis-4.0.10/redis.conf 7005/
  cp redis-4.0.10/redis.conf 7006/
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627194103354.png)

```markdown
4. 修改不同目录配置文件
  - port 	6379 .....                		 //修改端口
  - bind  0.0.0.0                   		 //开启远程连接
  - cluster-enabled  yes 	        			 //开启集群模式
  - cluster-config-file  nodes-port.conf //集群节点配置文件
  - cluster-node-timeout  5000      	   //集群节点超时时间
  - appendonly  yes   		               //开启AOF持久化

5. 指定不同目录配置文件启动七个节点
  ./redis-server  /root/7000/redis.conf
  ./redis-server  /root/7001/redis.conf
  ./redis-server  /root/7002/redis.conf
  ./redis-server  /root/7003/redis.conf
  ./redis-server  /root/7004/redis.conf
  ./redis-server  /root/7005/redis.conf
  ./redis-server  /root/7006/redis.conf
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627194913866.png)

```markdown
6. 查看进程
  ps aux|grep redis
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627194954143.png)

1. 创建集群

```markdown
1. 复制集群操作脚本到 bin 目录中
  cp /root/redis-4.0.10/src/redis-trib.rb .

2. 创建集群
  ./redis-trib.rb create --replicas 1 192.168.202.205:7000 192.168.202.205:7001 192.168.202.205:7002 192.168.202.205:7003 192.168.202.205:7004 192.168.202.205:7005
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627195601307.png)

```markdown
3. 集群创建成功出现如下提示
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200627195647767.png)

2. 查看集群状态

```markdown
1. 查看集群状态 check [原始集群中任意节点] [无]
  ./redis-trib.rb check 192.168.202.205:7000

2. 集群节点状态说明
  - 主节点 
    主节点存在hash slots,且主节点的hash slots 没有交叉
    主节点不能删除
    一个主节点可以有多个从节点
    主节点宕机时多个副本之间自动选举主节点

  - 从节点
    从节点没有hash slots
    从节点可以删除
    从节点不负责数据的写，只负责数据的同步
```

3. 添加主节点

```markdown
1. 添加主节点 add-node [新加入节点] [原始集群中任意节点]
  ./redis-trib.rb  add-node 192.168.1.158:7006  192.168.1.158:7005
  注意：
    1.该节点必须以集群模式启动
    2.默认情况下该节点就是以master节点形式添加
```

4. 添加从节点

```markdown
1. 添加从节点 add-node --slave [新加入节点] [集群中任意节点]
  ./redis-trib.rb  add-node --slave 192.168.1.158:7006 192.168.1.158:7000
  注意：当添加副本节点时没有指定主节点，redis会随机给副本节点较少的主节点添加当前副本节点
	
2. 为确定的master节点添加主节点 add-node --slave --master-id master节点id [新加入节点] [集群任意节点]
  ./redis-trib.rb  add-node --slave --master-id 3c3a0c74aae0b56170ccb03a76b60cfe7dc1912e 127.0.0.1:7006  127.0.0.1:7000
```

5. 删除副本节点

```markdown
1. 删除节点 del-node [集群中任意节点] [删除节点id]
  ./redis-trib.rb  del-node 127.0.0.1:7002 0ca3f102ecf0c888fc7a7ce43a13e9be9f6d3dd1
  注意：被删除的节点必须是从节点或没有被分配 hash slots 的节点
```

6. 集群在线分片

```markdown
1. 在线分片 reshard [集群中任意节点] [无]
  ./redis-trib.rb  reshard  192.168.1.158:7000
```

----

## 10. Redis 实现分布式 Session 管理

### 10.1 管理机制

**Redis 的 Session 管理是利用 Spring 提供的 Session 管理解决方案，将一个应用 Session 交给 Redis 存储，整个应用中所有 Session 的请求都会去 Redis 中获取对应的 Session 数据**。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/NoSQL/01/image-20200628201643358.png)

### 10.2 开发 Session 管理

1. 引入依赖

```xml
<dependency>
  <groupId>org.springframework.session</groupId>
  <artifactId>spring-session-data-redis</artifactId>
</dependency>
```

2. 开发 Session 管理配置类

```java
@Configuration
@EnableRedisHttpSession
public class RedisSessionManager {
   
}
```

3. 测试

----