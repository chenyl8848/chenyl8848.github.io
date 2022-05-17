---
title: ElasticSearch入门
date: 2022-05-13
category:
  - 中间件
tag:
  - ElasticSearch
---

# Elasticsearch入门

<!-- more -->

## 1. Elasticsearch概述

### 1.1 Elasticsearch是什么

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%871.png?versionId=CAEQKRiBgICqgOKYhhgiIDA3YzllNGJkYzgwYjRjZWU4ZTNlYmU2YTRiODcwYzlk) 

> The Elastic Stack, 包括 Elasticsearch、Kibana、Beats 和 Logstash（也称为 ELK Stack）。能够安全可靠地获取任何来源、任何格式的数据，然后实时地对数据进行搜索、分析和可视化。
>
> Elaticsearch，简称为ES， ES是一个开源的高扩展的分布式全文搜索引擎，是整个Elastic Stack技术栈的核心。它可以近乎实时的存储、检索数据；本身扩展性很好，可以扩展到上百台服务器，处>理PB级别的数据。

### 1.2 全文搜索引擎

>  Google，百度类的网站搜索，它们都是根据网页中的关键字生成索引，我们在搜索的时候输入关键字，它们会将该关键字即索引匹配到的所有网页返回；还有常见的项目中应用日志的搜索等等。对于这些非结构化的数据文本，关系型数据库搜索不是能很好的支持。

>  一般传统数据库，全文检索都实现的很鸡肋，因为一般也没人用数据库存文本字段。进行全文检索需要扫描整个表，如果数据量大的话即使对SQL的语法优化，也收效甚微。建立了索引，但是维护起来也很麻烦，对于 insert 和 update 操作都会重新构建索引。

基于以上原因可以分析得出，在一些生产环境中，使用常规的搜索方式，性能是非常差的：

-  搜索的数据对象是大量的非结构化的文本数据。

-  文件记录量达到数十万或数百万个甚至更多。

- 支持大量基于交互式文本的查询。

- 需求非常灵活的全文搜索查询。

- 对高度相关的搜索结果的有特殊需求，但是没有可用的关系数据库可以满足。

- 对不同记录类型、非文本数据操作或安全事务处理的需求相对较少的情况。

为了解决结构化数据搜索和非结构化数据搜索性能问题，我们就需要专业，健壮，强大的全文搜索引擎

这里说到的全文搜索引擎指的是目前广泛应用的主流搜索引擎。它的工作原理是计算机索引程序通过扫描文章中的每一个词，对每一个词建立一个索引，指明该词在文章中出现的次数和位置，当用户查询时，检索程序就根据事先建立的索引进行查找，并将查找的结果反馈给用户的检索方式。这个过程类似于通过字典中的检索字表查字的过程。

###  1.3 Elasticsearch And Solr

> Lucene是Apache软件基金会Jakarta项目组的一个子项目，提供了一个简单却强大的应用程式接口，能够做全文索引和搜寻。在Java开发环境里Lucene是一个成熟的免费开源工具。就其本身而言，Lucene是当前以及最近几年最受欢迎的免费Java信息检索程序库。但Lucene只是一个提供全文搜索功能类库的核心工具包，而真正使用它还需要一个完善的服务框架搭建起来进行应用。

> 目前市面上流行的搜索引擎软件，主流的就两款：`Elasticsearch`和`Solr`,这两款都是基于`Lucene`搭建的，可以独立部署启动的搜索引擎服务软件。由于内核相同，所以两者除了服务器安装、部署、管理、集群以外，对于数据的操作 修改、添加、保存、查询等等都十分类似。

在使用过程中，一般都会将Elasticsearch和Solr这两个软件对比，然后进行选型。这两个搜索引擎都是流行的，先进的的开源搜索引擎。它们都是围绕核心底层搜索库 - Lucene构建的 - 但它们又是不同的。像所有东西一样，每个都有其优点和缺点：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%872.png?versionId=CAEQKRiBgID7geKYhhgiIGM3NjIwZWE4Yjg0NzQ0ZWE4MDVlYjdlNmZiNjgxNTk0) 

### 1.4 Elasticsearch Or Solr

Elasticsearch和Solr都是开源搜索引擎，那么我们在使用时该如何选择呢？

1. Google搜索趋势结果表明，与 Solr 相比，Elasticsearch具有很大的吸引力，但这并不意味着Apache Solr已经死亡。虽然有些人可能不这么认为，但Solr仍然是最受欢迎的搜索引擎之一，拥有强大的社区和开源支持。

2. 与Solr相比，Elasticsearch易于安装且非常轻巧。此外，你可以在几分钟内安装并运行Elasticsearch。但是，如果Elasticsearch管理不当，这种易于部署和使用可能会成为一个问题。基于JSON的配置很简单，但如果要为文件中的每个配置指定注释，那么它不适合您。总的来说，如果你的应用使用的是JSON，那么Elasticsearch是一个更好的选择。否则，请使用Solr，因为它的schema.xml和solrconfig.xml都有很好的文档记录。

3. Solr拥有更大，更成熟的用户，开发者和贡献者社区。ES虽拥有的规模较小但活跃的用户社区以及不断增长的贡献者社区。Solr贡献者和提交者来自许多不同的组织，而Elasticsearch提交者来自单个公司。

4. Solr更成熟，但ES增长迅速，更稳定。

5. Solr是一个非常有据可查的产品，具有清晰的示例和API用例场景。 Elasticsearch的文档组织良好，但它缺乏好的示例和清晰的配置说明。

那么，到底是Solr还是Elasticsearch？

有时很难找到明确的答案。无论您选择Solr还是Elasticsearch，首先需要了解正确的用例和未来需求。总结他们的每个属性。

- 由于易于使用，Elasticsearch在新开发者中更受欢迎。一个下载和一个命令就可以启动一切。

- 如果除了搜索文本之外还需要它来处理分析查询，Elasticsearch是更好的选择

- 如果需要分布式索引，则需要选择Elasticsearch。对于需要良好可伸缩性和以及性能分布式环境，Elasticsearch是更好的选择。

- Elasticsearch在开源日志管理用例中占据主导地位，许多组织在Elasticsearch中索引它们的日志以使其可搜索。

- 如果你喜欢监控和指标，那么请使用Elasticsearch，因为相对于Solr，Elasticsearch暴露了更多的关键指标

### 1.5 Elasticsearch 应用案例

GitHub: 2013年初，抛弃了Solr，采取Elasticsearch 来做PB级的搜索。“GitHub使用Elasticsearch搜索20TB的数据，包括13亿文件和1300亿行代码”。

维基百科：启动以Elasticsearch为基础的核心搜索架构

SoundCloud：“SoundCloud使用Elasticsearch为1.8亿用户提供即时而精准的音乐搜索服务”。

百度：目前广泛使用Elasticsearch作为文本数据分析，采集百度所有服务器上的各类指标数据及用户自定义数据，通过对各种数据进行多维分析展示，辅助定位分析实例异常或业务层面异常。目前覆盖百度内部20多个业务线（包括云分析、网盟、预测、文库、直达号、钱包、风控等），单集群最大100台机器，200个ES节点，每天导入30TB+数据。

新浪：使用Elasticsearch分析处理32亿条实时日志。

阿里：使用Elasticsearch构建日志采集和分析体系。

Stack Overflow：解决Bug问题的网站，全英文，编程人员交流的网站。


## 2. Elasticsearch安装	

### 2.1 下载软件

- [官方地址](https://www.elastic.co/cn/)

- [下载地址](https://www.elastic.co/cn/downloads/past-releases#elasticsearch)

### 2.2 安装软件

Windows版的Elasticsearch的安装很简单，解压即安装完毕，解压后的Elasticsearch的目录结构如下：

| 目录    | 含义           |
| ------- | -------------- |
| bin     | 可执行脚本目录 |
| config  | 配置目录       |
| jdk     | 内置JDK目录    |
| lib     | 类库           |
| logs    | 日志目录       |
| modules | 模块目录       |
| plugins | 插件目录       |

解压后，进入bin文件目录，点击elasticsearch.bat文件启动ES服务

**注意**：`9300`端口为Elasticsearch集群间组件的通信端口，`9200`端口为浏览器访问的http协议RESTful端口。

打开浏览器（推荐使用谷歌浏览器），输入地址：http://localhost:9200，测试结果

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%873.png?versionId=CAEQKRiBgMC3guKYhhgiIGQwZWU4YTM1ODU5NzQyZDI4YmNmNjIzMDE5OTZiMDYz) 

### 2.3 问题解决

- Elasticsearch是使用java开发的，且7.8版本的ES需要JDK版本1.8以上，默认安装包带有jdk环境，如果系统配置JAVA_HOME，那么使用系统默认的JDK，如果没有配置使用自带的JDK，一般建议使用系统配置的JDK。

- 双击启动窗口闪退，通过路径访问追踪错误，如果是“空间不足”，请修改config/jvm.options配置文件

```bash
# 设置JVM初始内存为1G。此值可以设置与-Xmx相同，以避免每次垃圾回收完成后JVM重新分配内存
# Xms represents the initial size of total heap space
# 设置JVM最大可用内存为1G
# Xmx represents the maximum size of total heap space
-Xms1g
-Xmx1g
```


## 3. Elasticsearch基本操作

### 3.1 RESTful

> REST 指的是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful。Web 应用程序最重要的 REST 原则是，客户端和服务器之间的交互在请求之间是无状态的。从客户端到服务器的每个请求都必须包含理解请求所必需的信息。如果服务器在请求之间的任何时间点重启，客户端不会得到通知。此外，无状态请求可以由任何可用服务器回答，这十分适合云计算之类的环境。客户端可以缓存数据以改进性能。

> 在服务器端，应用程序状态和功能可以分为各种资源。资源是一个有趣的概念实体，它向客户端公开。资源的例子有：应用程序对象、数据库记录、算法等等。每个资源都使用 URI (Universal Resource Identifier) 得到一个唯一的地址。所有资源都共享统一的接口，以便在客户端和服务器之间传输状态。使用的是标准的 HTTP 方法，比如 GET、PUT、POST 和 DELETE。

> 在 REST 样式的 Web 服务中，每个资源都有一个地址。资源本身都是方法调用的目标，方法列表对所有资源都是一样的。这些方法都是标准方法，包括 HTTP GET、POST、PUT、DELETE，还可能包括 HEAD 和 OPTIONS。简单的理解就是，如果想要访问互联网上的资源，就必须向资源所在的服务器发出请求，请求体中必须包含资源的网络路径，以及对资源进行的操作(增删改查)。


### 3.2客户端安装

如果直接通过浏览器向Elasticsearch服务器发请求，那么需要在发送的请求中包含HTTP标准的方法，而HTTP 的大部分特性且仅支持 GET和POST 方法。所以为了能方便地进行客户端的访问，可以使用Postman软件

> Postman是一款强大的网页调试工具，提供功能强大的Web API 和 HTTP 请求调试。软件功能强大，界面简洁明晰、操作方便快捷，设计得很人性化。Postman中文版能够发送任何类型的HTTP 请求 (GET, HEAD, POST, PUT..)，不仅能够表单提交，且可以附带任意类型请求体。

- [Postman官网](https://www.getpostman.com)

- [Postman下载](https://www.getpostman.com/apps)


### 3.3数据格式

Elasticsearch是面向文档型数据库，一条数据在这里就是一个文档。为了方便大家理解，我们将Elasticsearch里存储文档数据和关系型数据库MySQL存储数据的概念进行一个类比

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%874.png?versionId=CAEQKRiBgMCeqeeYhhgiIDBjYjM4YjZhMzhjNzQ4Mzg5NzY1ZjJlNzgyZjdlODVk) 

**ES里的Index可以看做一个库，而Types相当于表，Documents则相当于表的行**。

这里Types的概念已经被逐渐弱化，Elasticsearch 6.X中，一个index下已经只能包含一个type，Elasticsearch 7.X中, Type的概念已经被删除了。

6用JSON作为文档序列化的格式，比如一条用户信息：

```json
{
  "name" : "John",
  "sex" : "Male",
  "age" : 25,
  "birthDate": "1990/05/01",
  "about" : "I love to go rock climbing",
  "interests": [ "sports", "music" ]
}
```


### 3.4 HTTP操作

#### 3.4.1 索引操作

##### 1. 创建索引

> 对比关系型数据库，创建索引就等同于创建数据库

在Postman中，向ES服务器发`PUT`请求 ：http://127.0.0.1:9200/shopping

请求后，服务器返回响应

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%875.png?versionId=CAEQKRiBgIDkqueYhhgiIGNmYWE5ZDY3MDIwNDQ0Y2M4MjBlOGYyYjhlOTkwZjFj) 

```json
{
  "acknowledged"【响应结果】: true, # true操作成功
  "shards_acknowledged"【分片结果】: true, # 分片操作成功
  "index"【索引名称】: "shopping"
}
```

 

**注意：创建索引库的分片数默认1片，在7.0.0之前的Elasticsearch版本中，默认5片**

如果重复添加索引，会返回错误信息

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%876.png?versionId=CAEQKRiBgID_qeeYhhgiIDAxZGYyMDk2MDQ5ZjQyNGE5OTAwOWVlODhmNTg0OTFl) 
 

##### 2. 查看所有索引

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/_cat/indices?v


这里请求路径中的_cat表示查看的意思，indices表示索引，所以整体含义就是查看当前ES服务器中的所有索引，就好像MySQL中的show tables的感觉，服务器响应结果如下

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%877.png?versionId=CAEQKRiBgIC7pueYhhgiIDYwMTNmOGY5OGFlOTQ2MDJiODAzYmYyMDBkZTU0NDFk) 


| 表头           | 含义                                                                             |
| -------------- | -------------------------------------------------------------------------------- |
| health         | 当前服务器健康状态：green(集群完整) yellow(单点正常、集群不完整) red(单点不正常) |
| status         | 索引打开、关闭状态                                                               |
| index          | 索引名                                                                           |
| uuid           | 索引统一编号                                                                     |
| pri            | 主分片数量                                                                       |
| rep            | 副本数量                                                                         |
| docs.count     | 可用文档数量                                                                     |
| docs.deleted   | 文档删除状态（逻辑删除）                                                         |
| store.size     | 主分片和副分片整体占空间大小                                                     |
| pri.store.size | 主分片占空间大小                                                                 |

##### 3. 查看单个索引

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/shopping

查看索引向ES服务器发送的请求路径和创建索引是一致的。但是HTTP方法不一致。这里可以体会一下RESTful的意义，

请求后，服务器响应结果如下：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%878.png?versionId=CAEQKRiBgMD7pueYhhgiIDY5OGFiYTI3MmRmMjQ1NjhhMzA0OGVhNTI0MzYwMmNj) 

```json
{
  "shopping"【索引名】: {     
    "aliases"【别名】: {},
    "mappings"【映射】: {},
    "settings"【设置】: {
      "index"【设置 - 索引】: {
        "creation_date"【设置 - 索引 - 创建时间】: "1614265373911",
        "number_of_shards"【设置 - 索引 - 主分片数量】: "1",
        "number_of_replicas"【设置 - 索引 - 副分片数量】: "1",
        "uuid"【设置 - 索引 - 唯一标识】: "eI5wemRERTumxGCc1bAk2A",
        "version"【设置 - 索引 - 版本】: {
          "created": "7080099"
        },
        "provided_name"【设置 - 索引 - 名称】: "shopping"
      }
    }
  }
}
```

##### 4. 删除索引

在Postman中，向ES服务器发`DELETE`请求：http://127.0.0.1:9200/shopping


![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%879.png?versionId=CAEQKRiBgIDYpueYhhgiIGE2ZThjMGI2MDYzNzQ4MzliNDkxYTFlOWMxODQ2MDc3) 

重新访问索引时，服务器返回响应：索引不存在

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8710.png?versionId=CAEQKRiBgIDdoOeYhhgiIGU3ODUxN2RiNDU3YjRiYTU4YTgwZDIzZTM2YzdhM2Zm) 

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8711.png?versionId=CAEQKRiBgIDSpeeYhhgiIDc2Njk0MDc0MmVkMjQxMWE4ZGY1YjBiN2IzMTA0MzY0) 

#### 3.4.2 文档操作

##### 1. 创建文档

索引已经创建好了，接下来我们来创建文档，并添加数据。这里的文档可以类比为关系型数据库中的表数据，添加的数据格式为JSON格式

在Postman中，向ES服务器发`POST`请求：http://127.0.0.1:9200/shopping/_doc

请求体内容为：
```json
{
  "title":"小米手机",
  "category":"小米",
  "images":"http://www.gulixueyuan.com/xm.jpg",
  "price":3999.00
}
```

此处发送请求的方式必须为`POST`，不能是`PUT`，否则会发生错误

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8712.png?versionId=CAEQKRiBgICRsvCYhhgiIGJhYjNlOTk0ZDk0MTRlZGVhNzMxMTgwYTUwMjkzMDRl) 

服务器响应结果如下：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8713.png?versionId=CAEQKRiBgICxqvCYhhgiIDVjOTIzMmNlYzkwYjRlNGU4NDI3ODA5NTg5YTQ5Njcx) 

```json
{
  "_index"【索引】: "shopping",
  "_type"【类型-文档】: "_doc",
  "_id"【唯一标识】: "Xhsa2ncBlvF_7lxyCE9G", #可以类比为MySQL中的主键，随机生成
  "_version"【版本】: 1,
  "result"【结果】: "created", #这里的create表示创建成功
  "_shards"【分片】: {
    "total"【分片 - 总数】: 2,
    "successful"【分片 - 成功】: 1,
    "failed"【分片 - 失败】: 0
  },
  "_seq_no": 0,
  "_primary_term": 1
}
```

上面的数据创建后，由于没有指定数据唯一性标识（ID），默认情况下，ES服务器会随机生成一个。

如果想要自定义唯一性标识，需要在创建时指定：http://127.0.0.1:9200/shopping/_doc/1

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8714.png?versionId=CAEQKRiBgMDJp_CYhhgiIGQ5ZWY3ZWQxNWY3OTQ3MjZhNzNjMmIxZWZlMmI2OGJm) 

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8715.png?versionId=CAEQKRiBgMCXqfCYhhgiIDVlM2ZmMWEwNmEwMTRiYWM4NjQyOGQzYWQ3M2MzNjZi) 

此处需要注意：**如果增加数据时明确数据主键，那么请求方式也可以为PUT**

##### 2. 查看文档

查看文档时，需要指明文档的唯一性标识，类似于MySQL中数据的主键查询

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/shopping/_doc/1

查询成功后，服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8716.png?versionId=CAEQKRiBgMCiuvuYhhgiIGUwMDY5NzI3OTIwOTRmYzM5MmM5OWEzODQwMmJlMmVm) 

```json
{
  "_index"【索引】: "shopping",
  "_type"【文档类型】: "_doc",
  "_id": "1",
  "_version": 2,
  "_seq_no": 2,
  "_primary_term": 2,
  "found"【查询结果】: true, # true表示查找到，false表示未查找到
  "_source"【文档源信息】: {
    "title": "华为手机",
    "category": "华为",
    "images": "http://www.gulixueyuan.com/hw.jpg",
    "price": 4999.00
  }
}
```

##### 3. 修改文档

和新增文档一样，输入相同的URL地址请求，如果请求体变化，会将原有的数据内容覆盖

在Postman中，向ES服务器发`POST`请求 ：http://127.0.0.1:9200/shopping/_doc/1`

请求体内容为:
```json
{
  "title":"华为手机",
  "category":"华为",
  "images":"http://www.gulixueyuan.com/hw.jpg",
  "price":4999.00
}
```

修改成功后，服务器响应结果：	

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8717.png?versionId=CAEQKRiBgMDXhYGZhhgiIGFjNTY4MzRmNjAzZjRkNjViMWRhN2RjYjAxNmMzOTc0) 

```json
{
  "_index": "shopping",
  "_type": "_doc",
  "_id": "1",
  "_version"【版本】: 2,
  "result"【结果】: "updated", # updated表示数据被更新
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "_seq_no": 2,
  "_primary_term": 2
}
```

##### 4. 修改字段

修改数据时，也可以只修改某一给条数据的局部信息

在Postman中，向ES服务器发`POST`请求：http://127.0.0.1:9200/shopping/_update/1

请求体内容为：
```json
{
  "doc": {
    "price": 3000.00
  } 
}
```

修改成功后，服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8718.png?versionId=CAEQKRiBgMCjgIGZhhgiIDQ5NGEzMmZiZjQ5MDQyM2I5YTdjZWM0Mzg0ZTY4MGQy) 

根据唯一性标识，查询文档数据，文档数据已经更新	

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8719.png?versionId=CAEQKRiBgMCS9oCZhhgiIGVmMjEyOWMzYTA5YTQzMjQ4NWE2ZTg1YWFiM2JkOWFh) 

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8720.png?versionId=CAEQKRiBgMDa.ICZhhgiIDQ1MjQ5ZTc2MGY3NzRkY2Y4ZmRjZGRhNDA3YmIwZjc5) 

##### 5. 删除文档

删除一个文档不会立即从磁盘上移除，它只是被标记成已删除（**逻辑删除**）。

在Postman中，向ES服务器发`DELETE`请求：http://127.0.0.1:9200/shopping/_doc/1

删除成功，服务器响应结果：	

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8721.png?versionId=CAEQKRiBgMDm9oCZhhgiIDk1MWUyMTBjNjZlMjRiOTJhYThjYzE5MzAxMDhjZWZl) 

```json
{
  "_index": "shopping",
  "_type": "_doc",
  "_id": "1",
  "_version"【版本】: 4, #对数据的操作，都会更新版本
  "result"【结果】: "deleted", # deleted表示数据被标记为删除
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "_seq_no": 4,
  "_primary_term": 2
}
```

删除后再查询当前文档信息

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8722.png?versionId=CAEQKRiBgIDS74CZhhgiIGMyZGY4MDgxNWJlOTQwNTc4MWRkMzQzNTgwN2U4ODhi) 

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8723.png?versionId=CAEQKRiBgMC39ICZhhgiIDJjODY2MzE1MTdiNjRiNDM5NTcyNzYzODgxOWZkYjQ0) 

如果删除一个并不存在的文档	

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8724.png?versionId=CAEQKRiBgMDO74CZhhgiIGNiNGViYzQyNjg4MzQ3NTE4ZTdkZTFhNjQxMjM3ZDIx) 

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8725.png?versionId=CAEQKRiBgMDq94CZhhgiIDI0OGU0NmQ0MjkwYzQ0MzhhNWIzYjBiY2UxN2U3M2Q3) 

```json
{
  "_index": "shopping",
  "_type": "_doc",
  "_id": "1",
  "_version": 1,
  "result"【结果】: "not_found", # not_found表示未查找到
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "_seq_no": 5,
  "_primary_term": 2
}
```

##### 6. 条件删除文档

一般删除数据都是根据文档的唯一性标识进行删除，实际操作时，也可以根据条件对多条数据进行删除

首先分别增加多条数据:
```json
{
  "title":"小米手机",
  "category":"小米",
  "images":"http://www.gulixueyuan.com/xm.jpg",
  "price":4000.00
}
```

```json
{
  "title":"华为手机",
  "category":"华为",
  "images":"http://www.gulixueyuan.com/hw.jpg",
  "price":4000.00
}
```



向ES服务器发`POST`请求：http://127.0.0.1:9200/shopping/_delete_by_query

请求体内容为：
```json
{
 "query":{
  "match":{
   "price":4000.00
  }
 }
}
```

删除成功后，服务器响应结果：	

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8726.png?versionId=CAEQKRiBgMDt8oCZhhgiIDFjMjAzNmI5YjkyODQ0ODRiZjk4MTZjYzI3M2RlODAx) 

```json
{
  "took"【耗时】: 175,
  "timed_out"【是否超时】: false,
  "total"【总数】: 2,
  "deleted"【删除数量】: 2,
  "batches": 1,
  "version_conflicts": 0,
  "noops": 0,
  "retries": {
    "bulk": 0,
    "search": 0
  },
  "throttled_millis": 0,
  "requests_per_second": -1.0,
  "throttled_until_millis": 0,
  "failures": []
}
```

#### 3.4.3 映射操作

有了索引库，等于有了数据库中的database。

接下来就需要建索引库(index)中的映射了，类似于数据库(database)中的表结构(table)。创建数据库表需要设置字段名称，类型，长度，约束等；索引库也一样，需要知道这个类型下有哪些字段，每个字段有哪些约束信息，这就叫做映射(mapping)。

##### 1. 创建映射

在Postman中，向ES服务器发`PUT`请求：http://127.0.0.1:9200/student/_mapping

请求体内容为：
```json
{
 "properties": {
  "name":{
   "type": "text",
   "index": true
  },
  "sex":{
   "type": "text",
   "index": false
  },
  "age":{
   "type": "long",
   "index": false
  }
 }
}
```

服务器响应结果如下：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8727.png?versionId=CAEQKRiBgICOjYqZhhgiIDYzMTQ5MmJlYTlmYjQwNjA4ZWJkMmNjMjJlOWM5YmFk) 

映射数据说明：


- 字段名：任意填写，下面指定许多属性，例如：title、subtitle、images、price

- type：类型，Elasticsearch中支持的数据类型非常丰富，说几个关键的：

    - String类型，又分两种：
        text：可分词
        keyword：不可分词，数据会作为完整字段进行匹配

    - Numerical：数值类型，分两类
        基本数据类型：long、integer、short、byte、double、float、half_float
        浮点数的高精度类型：scaled_float

    - Date：日期类型

    - Array：数组类型

    - Object：对象

- index：是否索引，默认为true，也就是说你不进行任何配置，所有字段都会被索引。

    - true：字段会被索引，则可以用来进行搜索

    - false：字段不会被索引，不能用来搜索

- store：是否将数据进行独立存储，默认为false

    原始的文本会存储在_source里面，默认情况下其他提取出来的字段都不是独立存储的，是从_source里面提取出来的。当然你也可以独立的存储某个字段，只要设置"store": true即可，获取独立存储的字段要比从_source中解析快得多，但是也会占用更多的空间，所以要根据实际业务需求来设置。

- analyzer：分词器，这里的ik_max_word即使用ik分词器,后面会有专门的章节学习

##### 2. 查看映射

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_mapping

服务器响应结果如下：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8728.png?versionId=CAEQKRiBgMCsjIqZhhgiIGY2MjM3MGQ5ODY3ZjRmZDI4MjNhOTJjMDAxYzQyYmM3) 

##### 3. 索引映射关联

在Postman中，向ES服务器发`PUT`请求：http://127.0.0.1:9200/student1
```json
{
 "settings": {},
 "mappings": {
	 "properties": {
		"name":{
		 "type": "text",
		 "index": true
		},
		"sex":{
		 "type": "text",
		 "index": false
		},
		"age":{
		 "type": "long",
		 "index": false
		}
	 }
 }
}
```

服务器响应结果如下：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8729.png?versionId=CAEQKRiBgMDRi4qZhhgiIDg2YzBmMmQxM2JjNzRiOWQ4NDFjMmE0NTM1MGMxZDZm) 

#### 3.4.4 高级查询

Elasticsearch提供了基于JSON提供完整的查询DSL来定义查询

定义数据:
```json

# POST /student/_doc/1001
{
  "name":"zhangsan",
  "nickname":"zhangsan",
  "sex":"男",
  "age":30
}

# POST /student/_doc/1002
{
  "name":"lisi",
  "nickname":"lisi",
  "sex":"男",
  "age":20
}

# POST /student/_doc/1003
{
  "name":"wangwu",
  "nickname":"wangwu",
  "sex":"女",
  "age":40
}

# POST /student/_doc/1004
{
  "name":"zhangsan1",
  "nickname":"zhangsan1",
  "sex":"女",
  "age":50
}

# POST /student/_doc/1005
{
  "name":"zhangsan2",
  "nickname":"zhangsan2",
  "sex":"女",
  "age":30
}

```

##### 1. 查询所有文档

在Postman中，向ES服务器发`GE`T请求：http://127.0.0.1:9200/student/_search
```json
{
 "query": {
  "match_all": {}
 }
}

# "query"：这里的query代表一个查询对象，里面可以有不同的查询属性

# "match_all"：查询类型，例如：match_all(代表查询所有)， match，term ， range 等等

# {查询条件}：查询条件会根据类型的不同，写法也有差异
```

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8732.png?versionId=CAEQKRiBgMDUko6ZhhgiIGZmZWY3Y2E1YmY3ZDQxMmM4NDc0Nzg3MGZiNjE2NDM3) 

服务器响应结果如下：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8730.png?versionId=CAEQKRiBgIDrkI6ZhhgiIDg1MjEyMDg5MWZmOTRkYjVhOWNmNWI4NzJiOTAwOTdl) 

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8731.png?versionId=CAEQKRiBgIDfkY6ZhhgiIGM1NjdmMjM1NTYzNDRjMGRhMzQ2ZTFmMjI0OGFkZjA0) 

```json
{
 "took【查询花费时间，单位毫秒】" : 1116,
 "timed_out【是否超时】" : false,
 "_shards【分片信息】" : {
  "total【总数】" : 1,
  "successful【成功】" : 1,
  "skipped【忽略】" : 0,
  "failed【失败】" : 0
 },
 "hits【搜索命中结果】" : {
   "total"【搜索条件匹配的文档总数】: {
     "value"【总命中计数的值】: 3,
     "relation"【计数规则】: "eq" # eq 表示计数准确， gte表示计数不准确
   },
  "max_score【匹配度分值】" : 1.0,
  "hits【命中结果集合】" : [
    ···
   }
  ]
 }

}
```

##### 2. 匹配查询

match匹配类型查询，会把查询条件进行分词，然后进行查询，多个词条之间是or的关系

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
 "query": {
  "match": {
    "name":"zhangsan"
  }
 }
}
```

服务器响应结果为：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8733.png?versionId=CAEQKRiBgMC9vpKZhhgiIGFmYzAwYTczODdiMjRiNTJhM2FlZDY1NTBhNTRkNjcw) 

##### 3. 字段匹配查询

multi_match与match类似，不同的是它可以在多个字段中查询。

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
 "query": {
  "multi_match": {
    "query": "zhangsan",
    "fields": ["name","nickname"]
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8734.png?versionId=CAEQKRiBgIDxvJKZhhgiIGRkYjE0YjE5ODFlZDQ5OGY4ODcyZGIyYThhZjAxYjY3) 

##### 4. 关键字精确查询

term查询，精确的关键词匹配查询，不对查询条件进行分词。

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search
```json
{
 "query": {
  "term": {
   "name": {
    "value": "zhangsan"
   }
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8735.png?versionId=CAEQKRiBgMCfwJKZhhgiIDg4ODc4ZmEyMDVmYzQ5NzBiODhkZDY5N2ZiYWQzZjc3) 

##### 5. 多关键字精确查询

terms 查询和 term 查询一样，但它允许你指定多值进行匹配。

如果这个字段包含了指定值中的任何一个值，那么这个文档满足条件，类似于mysql的in

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search
```json
{
 "query": {
  "terms": {
   "name": ["zhangsan","lisi"]
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8736.png?versionId=CAEQKRiBgID_vZKZhhgiIDEzODkwZmUwZDE4ZTQxMjI5YjU0NmM1ZGIyZTE0Yzk2) 

##### 6. 指定查询字段

默认情况下，Elasticsearch在搜索的结果中，会把文档中保存在_source的所有字段都返回。

如果我们只想获取其中的部分字段，我们可以添加_source的过滤

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
 "_source": ["name","nickname"],  
 "query": {
  "terms": {
   "nickname": ["zhangsan"]
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8737.png?versionId=CAEQKRiBgMDCv5KZhhgiIDBkMTQzZjRhYzc3NzQ1NmFhYTUwMGMxYzA5ZTNkYTA3) 

##### 7. 过滤字段

我们也可以通过：

includes：来指定想要显示的字段

excludes：来指定不想要显示的字段

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search
```json
{
 "_source": {
  "includes": ["name","nickname"]
 },  
 "query": {
  "terms": {
   "nickname": ["zhangsan"]
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8738.png?versionId=CAEQKRiBgIDRvZKZhhgiIDgzOTI5OTIxOTcwMTQwZWRhMDM0MWY2YjdjNmNkY2Q2) 

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search
```json
{
 "_source": {
  "excludes": ["name","nickname"]
 },  
 "query": {
  "terms": {
   "nickname": ["zhangsan"]
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8739.png?versionId=CAEQKRiBgIDEt5KZhhgiIDE2YTkxNmVlOTlkOTQxODQ4YzU0YjMzNmNjNTRjYzJj) 

##### 8. 组合查询

`bool`把各种其它查询通过`must`（必须 ）、`must_not`（必须不）、`should`（应该）的方式进行组合

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search
```json
{
 "query": {
  "bool": {
   "must": [
    {
     "match": {
      "name": "zhangsan"
     }
    }
   ],
   "must_not": [
    {
     "match": {
      "age": "40"
     }
    }
   ],
   "should": [
    {
     "match": {
      "sex": "男"
     }
    }
   ]
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8740.png?versionId=CAEQKRiBgMCLjJuZhhgiIGFiYTBmZGFmNmM3ZDRlYzJhZjA5YWJjZmYzZmQwYjAy) 

##### 9. 范围查询

`range`查询找出那些落在指定区间内的数字或者时间。range查询允许以下字符

| 操作符 | 说明       |
| ------ | ---------- |
| gt     | 大于>      |
| gte    | 大于等于>= |
| lt     | 小于<      |
| lte    | 小于等于<= |

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search
```json
{
 "query": {
  "range": {
   "age": {
    "gte": 30,
    "lte": 35
   }
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8741.png?versionId=CAEQKRiBgMCIi5uZhhgiIGE3NWZhZDUyMWEwNzQxYmM4ZjIwYWExNmVhYTI1N2Y1) 

##### 10. 模糊查询

返回包含与搜索字词相似的字词的文档。

编辑距离是将一个术语转换为另一个术语所需的一个字符更改的次数。这些更改可以包括：

- 更改字符（box → fox）

- 删除字符（black → lack）

- 插入字符（sic → sick）

- 转置两个相邻字符（act → cat）

为了找到相似的术语，fuzzy查询会在指定的编辑距离内创建一组搜索词的所有可能的变体或扩展。然后查询返回每个扩展的完全匹配。

通过fuzziness修改编辑距离。一般使用默认值AUTO，根据术语的长度生成编辑距离。

在Postman中，向ES服务器发`GE`T请求：http://127.0.0.1:9200/student/_search
```json
{
 "query": {
  "fuzzy": {
   "title": {
    "value": "zhangsan"
   }
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8742.png?versionId=CAEQKRiBgMCCiJuZhhgiIGYwZjlkZGU1ZDAzMTRkMDc4N2ExZjY0MzZlZWU5N2Yy) 

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search
```json
{
 "query": {
  "fuzzy": {
   "title": {
    "value": "zhangsan",
    	"fuzziness": 2
   }
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8743.png?versionId=CAEQKRiBgMCXh5uZhhgiIDgzYTRmYTE4ZGI1MDQ5ODk4YjY5ODM5NTFjZjUyZmQ5) 

##### 11. 单字段排序

`sort`可以让我们按照不同的字段进行排序，并且通过order指定排序的方式。`desc`降序，`asc`升序。

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
 "query": {
  "match": {
    "name":"zhangsan"
  }
 },
 "sort": [{
  "age": {
    "order":"desc"
  }
 }]
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8744.png?versionId=CAEQKRiBgMDdgJuZhhgiIDFlOGMxMWJhNzk0YTQ4NzNiYTAwNWNkNGFmNzVhMGNm) 

##### 12. 多字段排序

假定我们想要结合使用 age和 _score进行查询，并且匹配的结果首先按照年龄排序，然后按照相关性得分排序

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
 "query": {
  "match_all": {}
 },
 "sort": [
  {
   "age": {
    "order": "desc"
   }
  },
  {
   "_score":{
    "order": "desc"
   }
  }
 ]
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8745.png?versionId=CAEQKRiBgICDi5uZhhgiIGRkODAwYmQ2MTQ1MDQ2MWE5YjU4MzkzMGJmYjRkNzI5) 

##### 13. 高亮查询

在进行关键字搜索时，搜索出的内容中的关键字会显示不同的颜色，称之为高亮。

在百度搜索"京东"

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8746.png?versionId=CAEQKRiBgIC4h5uZhhgiIDYzZDRjNDgxMmFjZTRhMzU5MzQzMzJmMDgwZDVkNGFi) 

Elasticsearch可以对查询内容中的关键字部分，进行标签和样式(高亮)的设置。

在使用match查询的同时，加上一个`highlight`属性：

- pre_tags：前置标签

- post_tags：后置标签

- fields：需要高亮的字段

- title：这里声明title字段需要高亮，后面可以为这个字段设置特有配置，也可以空

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
 "query": {
  "match": {
   "name": "zhangsan"
  }
 },
 "highlight": {
  "pre_tags": "<font color='red'>",
  "post_tags": "</font>",
  "fields": {
   "name": {}
  }
 }
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8747.png?versionId=CAEQKRiBgIC2g5uZhhgiIDFmYzJlMjdkOWE4YjQwZjA4ZjVjNDFjN2E4OTBmMTRh) 

##### 14. 分页查询

`from`：当前页的起始索引，默认从0开始。 from = (pageNum - 1)  size

`size`：每页显示多少条 

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
 "query": {
  "match_all": {}
 },
 "sort": [
  {
   "age": {
    "order": "desc"
   }
  }
 ],
 "from": 0,
 "size": 2
}
```


服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8748.png?versionId=CAEQKRiBgID9gJuZhhgiIGM1ZTBlZDFkYWY0ODQzNDJiYWY5NGZjNjYyNWYxZDc4) 

##### 15. 聚合查询

聚合允许使用者对es文档进行统计分析，类似与关系型数据库中的group by，当然还有很多其他的聚合，例如取最大值、平均值等等。

对某个字段取最大值max

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
  "aggs":{
   "max_age":{
    "max":{"field":"age"}
   }
  },
  "size":0
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8749.png?versionId=CAEQKRiBgIDt_5qZhhgiIDA4N2M1ZWI4ZGMzMDRjODQ5YjA5OTY1ZDQ1ODcyMDlj) 

对某个字段取最小值min

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
  "aggs":{
   "min_age":{
    "min":{"field":"age"}
   }
  },
  "size":0
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8750.png?versionId=CAEQKRiBgIDm.pqZhhgiIGE4OWJjYmJmMmY3NDRiN2I4YTQxY2U0MzY5NzgxNTY0) 

对某个字段求和sum

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
  "aggs":{
   "sum_age":{
    "sum":{"field":"age"}
   }
  },
  "size":0
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8751.png?versionId=CAEQKRiBgMCt9pqZhhgiIGQ4YzBkZWQ1ZGU4NTQxNmM5ZjJjY2EzNjkxOGM0Y2Ni) 

对某个字段取平均值avg

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json

  "aggs":{
   "avg_age":{
    "avg":{"field":"age"}
   }
  },
  "size":0
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8752.png?versionId=CAEQKRiBgICP95qZhhgiIDE1MmM3ZmZmYmFkMTRmY2FhMTdhZWIyMDU3ODk3N2Ux) 

对某个字段的值进行去重之后再取总数

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
  "aggs":{
   "distinct_age":{
    "cardinality":{"field":"age"}
   }
  },
  "size":0
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8753.png?versionId=CAEQKRiBgMCK95qZhhgiIDY2NjUzZjFjNDliZjRlNWNiYjY5ZjE2ZjVlYzcyN2Jl) 

State聚合

stats聚合，对某个字段一次性返回count，max，min，avg和sum五个指标

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
  "aggs":{
   "stats_age":{
    "stats":{"field":"age"}
   }
  },
  "size":0
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8754.png?versionId=CAEQKRiBgIDo85qZhhgiIGQ0ZGM1ODg1MmJjYjRkYTY4YTAwNDA5MmYwNzI1MDhk) 

##### 16. 桶聚合查询

桶聚和相当于sql中的group by语句

terms聚合，分组统计

在Postman中，向ES服务器发`GET`请求：http://127.0.0.1:9200/student/_search

```json
{
  "aggs":{
   "age_groupby":{
    "terms":{"field":"age"}
   }
  },
  "size":0
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8755.png?versionId=CAEQKRiBgMDF95qZhhgiIDg3NTZjM2I2OWM3OTQyZDY4MTgxNzRlNTUzNjg2ZjEx) 

在terms分组下再进行聚合

在Postman中，向ES服务器发`GE`T请求：http://127.0.0.1:9200/student/_search

```json
{
  "aggs":{
   "age_groupby":{
    "terms":{"field":"age"}
   }
  },
  "size":0
}
```

服务器响应结果：

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8756.png?versionId=CAEQKRiBgMDY85qZhhgiIDA3YjRhZGNiZTkxMzRkY2I5MGM2MWI2NDMwODhkNDcz) 



## 4. Java API操作

Elasticsearch软件是由Java语言开发的，所以也可以通过Java API的方式对Elasticsearch服务进行访问

### 4.1 创建Maven项目

在IDEA开发工具中创建Maven项目(模块也可)ES	

修改pom文件，增加Maven依赖关系

```xml
<dependencies>
    <dependency>
        <groupId>org.elasticsearch</groupId>
        <artifactId>elasticsearch</artifactId>
        <version>7.8.0</version>
    </dependency>
    <!-- elasticsearch的客户端 -->
    <dependency>
        <groupId>org.elasticsearch.client</groupId>
        <artifactId>elasticsearch-rest-high-level-client</artifactId>
        <version>7.8.0</version>
    </dependency>
    <!-- elasticsearch依赖2.x的log4j -->
    <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-api</artifactId>
        <version>2.8.2</version>
    </dependency>
    <dependency>
        <groupId>org.apache.logging.log4j</groupId>
        <artifactId>log4j-core</artifactId>
        <version>2.8.2</version>
    </dependency>
	<dependency>
		<groupId>com.fasterxml.jackson.core</groupId>
		<artifactId>jackson-databind</artifactId>
		<version>2.9.9</version>
	</dependency>
    <!-- junit单元测试 -->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.12</version>
    </dependency>
</dependencies>
```

### 4.2 客户端对象

创建com.atguigu.es.test.Elasticsearch01_Client类，代码中创建Elasticsearch客户端对象

因为早期版本的客户端对象已经不再推荐使用，且在未来版本中会被删除，所以这里我们采用高级REST客户端对象	

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8757.png?versionId=CAEQKRiBgMDN7auZhhgiIGIxMzkwMTBlNDk1OTQxMzM4NGFhZTljZGZhN2ZhOGEz) 

```java
// 创建客户端对象
RestHighLevelClient client = new RestHighLevelClient(
		RestClient.builder(new HttpHost("localhost", 9200, "http"))
);

...

// 关闭客户端连接
client.close();
```

注意：9200端口为Elasticsearch的Web通信端口，localhost为启动ES服务的主机名

执行代码，查看控制台信息：	

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_start/%E5%9B%BE%E7%89%8758.png?versionId=CAEQKRiBgICe7quZhhgiIGFmYTZkYzQwY2YyOTQxNjliNGZkMzdjNjdkNGJhODMz) 

### 4.3 索引操作

ES服务器正常启动后，可以通过Java API 客户端对象对ES索引进行操作

#### 1. 创建索引

```java
// 创建索引 - 请求对象
CreateIndexRequest request = new CreateIndexRequest("user");
// 发送请求，获取响应
CreateIndexResponse response = client.indices().create(request, RequestOptions.DEFAULT);
boolean acknowledged = response.isAcknowledged();
// 响应状态
System.out.println("操作状态 = " + acknowledged);
```


#### 2. 查看索引

```java
// 查询索引 - 请求对象
GetIndexRequest request = new GetIndexRequest("user");
// 发送请求，获取响应
GetIndexResponse response = client.indices().get(request, RequestOptions.DEFAULT);
System.out.println("aliases:"+response.getAliases());
System.out.println("mappings:"+response.getMappings());
System.out.println("settings:"+response.getSettings());
```

#### 3. 删除索引

```java
// 删除索引 - 请求对象
DeleteIndexRequest request = new DeleteIndexRequest("user");
// 发送请求，获取响应
AcknowledgedResponse response = client.indices().delete(request, RequestOptions.DEFAULT);
// 操作结果
System.out.println("操作结果 ： " + response.isAcknowledged());
```

### 4.4 文档操作

#### 1. 新增文档

创建数据模型
```java
class User {                         
    private String name;             
    private Integer age;             
    private String sex;              
                                     
    public String getName() {        
        return name;                 
    }                                
    public void setName(String name) 
        this.name = name;            
    }                                
    public Integer getAge() {        
        return age;                  
    }                                
    public void setAge(Integer age) {
        this.age = age;              
    }                                
    public String getSex() {         
        return sex;                  
    }                                
    public void setSex(String sex) { 
        this.sex = sex;              
    }                                
}
```

创建数据，添加到文档中

```java
// 新增文档 - 请求对象
IndexRequest request = new IndexRequest();
// 设置索引及唯一性标识
request.index("user").id("1001");
// 创建数据对象
User user = new User();
user.setName("zhangsan");
user.setAge(30);
user.setSex("男");
ObjectMapper objectMapper = new ObjectMapper();
String productJson = objectMapper.writeValueAsString(user);
// 添加文档数据，数据格式为JSON格式
request.source(productJson,XContentType.JSON);
// 客户端发送请求，获取响应对象
IndexResponse response = client.index(request, RequestOptions.DEFAULT);
////3.打印结果信息
System.out.println("_index:" + response.getIndex());
System.out.println("_id:" + response.getId());
System.out.println("_result:" + response.getResult()); 
```


#### 2. 修改文档

```java
// 修改文档 - 请求对象
UpdateRequest request = new UpdateRequest();
// 配置修改参数
request.index("user").id("1001");
// 设置请求体，对数据进行修改
request.doc(XContentType.JSON, "sex", "女");
// 客户端发送请求，获取响应对象
UpdateResponse response = client.update(request, RequestOptions.DEFAULT);
System.out.println("_index:" + response.getIndex());
System.out.println("_id:" + response.getId());
System.out.println("_result:" + response.getResult());
```

#### 3. 查询文档

```java
//1.创建请求对象
GetRequest request = new GetRequest().index("user").id("1001");
//2.客户端发送请求，获取响应对象
GetResponse response = client.get(request, RequestOptions.DEFAULT);
////3.打印结果信息
System.out.println("_index:" + response.getIndex());
System.out.println("_type:" + response.getType());
System.out.println("_id:" + response.getId());
System.out.println("source:" + response.getSourceAsString());
```


#### 4. 删除文档

```java
//创建请求对象
DeleteRequest request = new DeleteRequest().index("user").id("1");
//客户端发送请求，获取响应对象
DeleteResponse response = client.delete(request, RequestOptions.DEFAULT);
//打印信息
System.out.println(response.toString());
```


#### 5. 批量操作

- 批量新增：
```java
//创建批量新增请求对象
BulkRequest request = new BulkRequest();
request.add(new IndexRequest().index("user").id("1001").source(XContentType.JSON, "name", "zhangsan"));
request.add(new IndexRequest().index("user").id("1002").source(XContentType.JSON, "name", "lisi"));
request.add(new IndexRequest().index("user").id("1003").source(XContentType.JSON, "name", "wangwu"));
//客户端发送请求，获取响应对象
BulkResponse responses = client.bulk(request, RequestOptions.DEFAULT);
//打印结果信息
System.out.println("took:" + responses.getTook());
System.out.println("items:" + responses.getItems())
```

- 批量删除：
```java
//创建批量删除请求对象
BulkRequest request = new BulkRequest();
request.add(new DeleteRequest().index("user").id("1001"));
request.add(new DeleteRequest().index("user").id("1002"));
request.add(new DeleteRequest().index("user").id("1003"));
//客户端发送请求，获取响应对象
BulkResponse responses = client.bulk(request, RequestOptions.DEFAULT);
//打印结果信息
System.out.println("took:" + responses.getTook());
System.out.println("items:" + responses.getItems());
```

### 4.5 高级查询

#### 1. 请求体查询

- 查询所有索引数据
```java
// 创建搜索请求对象
SearchRequest request = new SearchRequest();
request.indices("student");

// 构建查询的请求体
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
// 查询所有数据
sourceBuilder.query(QueryBuilders.matchAllQuery());
request.source(sourceBuilder);

SearchResponse response = client.search(request, RequestOptions.DEFAULT);
// 查询匹配
SearchHits hits = response.getHits();
System.out.println("took:" + response.getTook());
System.out.println("timeout:" + response.isTimedOut());
System.out.println("total:" + hits.getTotalHits());
System.out.println("MaxScore:" + hits.getMaxScore());
System.out.println("hits========>>");
for (SearchHit hit : hits) {
	//输出每条查询的结果信息
	System.out.println(hit.getSourceAsString());
}
System.out.println("<<========");
```

- term查询，查询条件为关键字
```java
// 创建搜索请求对象
SearchRequest request = new SearchRequest();
request.indices("student");

// 构建查询的请求体
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
sourceBuilder.query(QueryBuilders.termQuery("age", "30"));
request.source(sourceBuilder);

SearchResponse response = client.search(request, RequestOptions.DEFAULT);
// 查询匹配
SearchHits hits = response.getHits();
System.out.println("took:" + response.getTook());
System.out.println("timeout:" + response.isTimedOut());
System.out.println("total:" + hits.getTotalHits());
System.out.println("MaxScore:" + hits.getMaxScore());
System.out.println("hits========>>");
for (SearchHit hit : hits) {
	//输出每条查询的结果信息
	System.out.println(hit.getSourceAsString());
}
System.out.println("<<========");
```

- 分页查询

```java
// 创建搜索请求对象
SearchRequest request = new SearchRequest();
request.indices("student");

// 构建查询的请求体
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
sourceBuilder.query(QueryBuilders.matchAllQuery());

// 分页查询
// 当前页其实索引(第一条数据的顺序号)，from
sourceBuilder.from(0);
// 每页显示多少条size
sourceBuilder.size(2);

request.source(sourceBuilder);
SearchResponse response = client.search(request, RequestOptions.DEFAULT);
// 查询匹配
SearchHits hits = response.getHits();
System.out.println("took:" + response.getTook());
System.out.println("timeout:" + response.isTimedOut());
System.out.println("total:" + hits.getTotalHits());
System.out.println("MaxScore:" + hits.getMaxScore());
System.out.println("hits========>>");
for (SearchHit hit : hits) {
	//输出每条查询的结果信息
	System.out.println(hit.getSourceAsString());
}
System.out.println("<<========");
```

- 数据排序
```java
// 构建查询的请求体
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
sourceBuilder.query(QueryBuilders.matchAllQuery());

// 排序
sourceBuilder.sort("age", SortOrder.ASC);

request.source(sourceBuilder);
SearchResponse response = client.search(request, RequestOptions.DEFAULT);
// 查询匹配
SearchHits hits = response.getHits();
System.out.println("took:" + response.getTook());
System.out.println("timeout:" + response.isTimedOut());
System.out.println("total:" + hits.getTotalHits());
System.out.println("MaxScore:" + hits.getMaxScore());
System.out.println("hits========>>");
for (SearchHit hit : hits) {
	//输出每条查询的结果信息
	System.out.println(hit.getSourceAsString());
}
System.out.println("<<========");
```

- 过滤字段

```java
// 创建搜索请求对象
SearchRequest request = new SearchRequest();
request.indices("student");

// 构建查询的请求体
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
sourceBuilder.query(QueryBuilders.matchAllQuery());

//查询字段过滤
String[] excludes = {};
String[] includes = {"name", "age"};
sourceBuilder.fetchSource(includes, excludes);

request.source(sourceBuilder);
SearchResponse response = client.search(request, RequestOptions.DEFAULT);
// 查询匹配
SearchHits hits = response.getHits();
System.out.println("took:" + response.getTook());
System.out.println("timeout:" + response.isTimedOut());
System.out.println("total:" + hits.getTotalHits());
System.out.println("MaxScore:" + hits.getMaxScore());
System.out.println("hits========>>");
for (SearchHit hit : hits) {
	//输出每条查询的结果信息
	System.out.println(hit.getSourceAsString());
}
System.out.println("<<========");
```

- Bool查询
```java
// 创建搜索请求对象
SearchRequest request = new SearchRequest();
request.indices("student");

// 构建查询的请求体
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();

BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
// 必须包含
boolQueryBuilder.must(QueryBuilders.matchQuery("age", "30"));
// 一定不含
boolQueryBuilder.mustNot(QueryBuilders.matchQuery("name", "zhangsan"));
// 可能包含
boolQueryBuilder.should(QueryBuilders.matchQuery("sex", "男"));

sourceBuilder.query(boolQueryBuilder);
request.source(sourceBuilder);
SearchResponse response = client.search(request, RequestOptions.DEFAULT);
// 查询匹配
SearchHits hits = response.getHits();
System.out.println("took:" + response.getTook());
System.out.println("timeout:" + response.isTimedOut());
System.out.println("total:" + hits.getTotalHits());
System.out.println("MaxScore:" + hits.getMaxScore());
System.out.println("hits========>>");
for (SearchHit hit : hits) {
	//输出每条查询的结果信息
	System.out.println(hit.getSourceAsString());
}
System.out.println("<<========");
```

- 范围查询
```java
// 创建搜索请求对象
SearchRequest request = new SearchRequest();
request.indices("student");

// 构建查询的请求体
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();

RangeQueryBuilder rangeQuery = QueryBuilders.rangeQuery("age");
// 大于等于
rangeQuery.gte("30");
// 小于等于
rangeQuery.lte("40");

sourceBuilder.query(rangeQuery);
request.source(sourceBuilder);
SearchResponse response = client.search(request, RequestOptions.DEFAULT);
// 查询匹配
SearchHits hits = response.getHits();
System.out.println("took:" + response.getTook());
System.out.println("timeout:" + response.isTimedOut());
System.out.println("total:" + hits.getTotalHits());
System.out.println("MaxScore:" + hits.getMaxScore());
System.out.println("hits========>>");
for (SearchHit hit : hits) {
	//输出每条查询的结果信息
	System.out.println(hit.getSourceAsString());
}
System.out.println("<<========");
```

- 模糊查询

```java
// 创建搜索请求对象
SearchRequest request = new SearchRequest();
request.indices("student");

// 构建查询的请求体
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();

sourceBuilder.query(QueryBuilders.fuzzyQuery("name","zhangsan").fuzziness(Fuzziness.ONE));
request.source(sourceBuilder);
SearchResponse response = client.search(request, RequestOptions.DEFAULT);
// 查询匹配
SearchHits hits = response.getHits();
System.out.println("took:" + response.getTook());
System.out.println("timeout:" + response.isTimedOut());
System.out.println("total:" + hits.getTotalHits());
System.out.println("MaxScore:" + hits.getMaxScore());
System.out.println("hits========>>");
for (SearchHit hit : hits) {
	//输出每条查询的结果信息
	System.out.println(hit.getSourceAsString());
}
System.out.println("<<========");
```

#### 2. 高亮查询

```java
// 高亮查询
SearchRequest request = new SearchRequest().indices("student");
//2.创建查询请求体构建器
SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
//构建查询方式：高亮查询
TermsQueryBuilder termsQueryBuilder = QueryBuilders.termsQuery("name","zhangsan");
//设置查询方式
sourceBuilder.query(termsQueryBuilder);
//构建高亮字段
HighlightBuilder highlightBuilder = new HighlightBuilder();
highlightBuilder.preTags("<font color='red'>");//设置标签前缀
highlightBuilder.postTags("</font>");//设置标签后缀
highlightBuilder.field("name");//设置高亮字段
//设置高亮构建对象
sourceBuilder.highlighter(highlightBuilder);
//设置请求体
request.source(sourceBuilder);
//3.客户端发送请求，获取响应对象
SearchResponse response = client.search(request, RequestOptions.DEFAULT);

//4.打印响应结果
SearchHits hits = response.getHits();
System.out.println("took::"+response.getTook());
System.out.println("time_out::"+response.isTimedOut());
System.out.println("total::"+hits.getTotalHits());
System.out.println("max_score::"+hits.getMaxScore());
System.out.println("hits::::>>");
for (SearchHit hit : hits) {
	String sourceAsString = hit.getSourceAsString();
	System.out.println(sourceAsString);
	//打印高亮结果
	Map<String, HighlightField> highlightFields = hit.getHighlightFields();
	System.out.println(highlightFields);
}
System.out.println("<<::::");
```

#### 3. 聚合查询

- 最大年龄

```java
// 高亮查询
SearchRequest request = new SearchRequest().indices("student");

SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
sourceBuilder.aggregation(AggregationBuilders.max("maxAge").field("age"));
//设置请求体
request.source(sourceBuilder);
//3.客户端发送请求，获取响应对象
SearchResponse response = client.search(request, RequestOptions.DEFAULT);

//4.打印响应结果
SearchHits hits = response.getHits();
System.out.println(response);
```

- 分组统计

```java
// 高亮查询
SearchRequest request = new SearchRequest().indices("student");

SearchSourceBuilder sourceBuilder = new SearchSourceBuilder();
sourceBuilder.aggregation(AggregationBuilders.terms("age_groupby").field("age"));

//设置请求体
request.source(sourceBuilder);
//3.客户端发送请求，获取响应对象
SearchResponse response = client.search(request, RequestOptions.DEFAULT);

//4.打印响应结果
SearchHits hits = response.getHits();
System.out.println(response);
```

