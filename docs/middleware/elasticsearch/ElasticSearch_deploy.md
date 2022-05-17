---
title: ElasticSearch部署
date: 2022-05-13
category:
  - 中间件
tag:
  - ElasticSearch
---

# ElasticSearch部署

<!-- more -->

## 1. 相关概念

### 1.1 单机 & 集群

单台Elasticsearch服务器提供服务，往往都有最大的负载能力，超过这个阈值，服务器性能就会大大降低甚至不可用，所以生产环境中，一般都是运行在指定服务器集群中。

除了负载能力，单点服务器也存在其他问题：

- 单台机器存储容量有限

- 单服务器容易出现单点故障，无法实现高可用

- 单服务的并发处理能力有限

配置服务器集群时，集群中节点数量没有限制，大于等于2个节点就可以看做是集群了。一般出于高性能及高可用方面来考虑集群中节点数量都是3个以上。

### 1.2 集群Cluster

一个集群就是由一个或多个服务器节点组织在一起，共同持有整个的数据，并一起提供索引和搜索功能。一个Elasticsearch集群有一个唯一的名字标识，这个名字默认就是”elasticsearch”。这个名字是重要的，因为一个节点只能通过指定某个集群的名字，来加入这个集群。

### 1.3 节点Node

集群中包含很多服务器，一个节点就是其中的一个服务器。作为集群的一部分，它存储数据，参与集群的索引和搜索功能。

一个节点也是由一个名字来标识的，默认情况下，这个名字是一个随机的漫威漫画角色的名字，这个名字会在启动的时候赋予节点。这个名字对于管理工作来说挺重要的，因为在这个管理过程中，你会去确定网络中的哪些服务器对应于Elasticsearch集群中的哪些节点。

一个节点可以通过配置集群名称的方式来加入一个指定的集群。默认情况下，每个节点都会被安排加入到一个叫做“elasticsearch”的集群中，这意味着，如果你在你的网络中启动了若干个节点，并假定它们能够相互发现彼此，它们将会自动地形成并加入到一个叫做“elasticsearch”的集群中。

在一个集群里，只要你想，可以拥有任意多个节点。而且，如果当前你的网络中没有运行任何Elasticsearch节点，这时启动一个节点，会默认创建并加入一个叫做“elasticsearch”的集群。

## 2. Windows集群

### 2.1 部署集群

1. 创建elasticsearch-cluster文件夹，在内部复制三个elasticsearch服务

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%871.png?versionId=CAEQKRiBgIDF2rCKhhgiIDQyZTc0N2Q1YTM3ZTQ5Y2Q5ZTFkZmI4ZDYzOWE1MDYx) 

2. 修改集群文件目录中每个节点的 config/elasticsearch.yml配置文件

    - node-1001节点

        ```bash
        #节点1的配置信息：

        #集群名称，节点之间要保持一致

        cluster.name: my-elasticsearch

        #节点名称，集群内要唯一

        node.name: node-1001

        node.master: true

        node.data: true

        

        #ip地址

        network.host: localhost

        #http端口

        http.port: 1001

        #tcp监听端口

        transport.tcp.port: 9301

        

        #discovery.seed_hosts: ["localhost:9301", "localhost:9302","localhost:9303"]

        #discovery.zen.fd.ping_timeout: 1m

        #discovery.zen.fd.ping_retries: 5

        

        #集群内的可以被选为主节点的节点列表

        #cluster.initial_master_nodes: ["node-1", "node-2","node-3"]

        

        #跨域配置

        #action.destructive_requires_name: true

        http.cors.enabled: true

        http.cors.allow-origin: ""
        ```

    - node-1002节点

        ```bash
        #节点2的配置信息：

        #集群名称，节点之间要保持一致

        cluster.name: my-elasticsearch

        #节点名称，集群内要唯一

        node.name: node-1002

        node.master: true

        node.data: true

        

        #ip地址

        network.host: localhost

        #http端口

        http.port: 1002

        #tcp监听端口

        transport.tcp.port: 9302

        

        discovery.seed_hosts: ["localhost:9301"]

        discovery.zen.fd.ping_timeout: 1m

        discovery.zen.fd.ping_retries: 5

        

        #集群内的可以被选为主节点的节点列表

        #cluster.initial_master_nodes: ["node-1", "node-2","node-3"]

        

        #跨域配置

        #action.destructive_requires_name: true

        http.cors.enabled: true

        http.cors.allow-origin: ""

        ```

    - node-1003节点

        ```bash
        #节点3的配置信息：

        #集群名称，节点之间要保持一致

        cluster.name: my-elasticsearch

        #节点名称，集群内要唯一

        node.name: node-1003

        node.master: true

        node.data: true

        

        #ip地址

        network.host: localhost

        #http端口

        http.port: 1003

        #tcp监听端口

        transport.tcp.port: 9303

        #候选主节点的地址，在开启服务后可以被选为主节点 

        discovery.seed_hosts: ["localhost:9301", "localhost:9302"]

        discovery.zen.fd.ping_timeout: 1m

        discovery.zen.fd.ping_retries: 5

        

        #集群内的可以被选为主节点的节点列表

        #cluster.initial_master_nodes: ["node-1", "node-2","node-3"]

        

        #跨域配置

        #action.destructive_requires_name: true

        http.cors.enabled: true

        http.cors.allow-origin: ""
        ```

### 2.2 启动集群

1. 启动前先删除每个节点中的data目录中所有内容（如果存在）

2. 分别双击执行 bin/elasticsearch.bat, 启动节点服务器，启动后，会自动加入指定名称的集群

### 2.3 测试集群

1. 查看集群状态

    - node-1001节点

        ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%872.png?versionId=CAEQKRiBgMDa2LCKhhgiIDhlYTY2OTI2YTljNjQxNDY4NGM5ZDZkMjVjYmRkYzkz) 

        ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%873.png?versionId=CAEQKRiBgIDv1rCKhhgiIDlmMjQxNDVjOWE1NDRkYWViYzhmNjU1ZDdjZDQzMjUy) 

    - node-1002节点

        ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%874.png?versionId=CAEQKRiBgICS0bCKhhgiIGQ2ZTY4OWM5MWE3OTRjN2ZhNGE3NDhhODRkZDRhNzA0) 

        ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%875.png?versionId=CAEQKRiBgICpz7CKhhgiIDY0NjhmZWJkZjliNTRkNjI5NjRjNDZmMjg2YWJmZjI5) 

    - node-1003节点

        ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%876.png?versionId=CAEQKRiBgICly7CKhhgiIGMyYzYzNWJmZWZmMTQ2YTU5YjkyYjljOTVlNjJkODhi) 

        ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%877.png?versionId=CAEQKRiBgIC0xbCKhhgiIGVlMjRjMDg1YTdmYjQ1YjFiMmFlYjM4YjQxMTM5MjQ4) 

        ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%878.png?versionId=CAEQKRiBgMCgwLCKhhgiIGYyZWJkNGI0NzViZjQyOWZiZDhmMTI5OTI5MTU4ODQ4) 

2. 向集群中的node-1001节点增加索引

    ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%879.png?versionId=CAEQKRiBgICeyLCKhhgiIDMxNmJmYjJhOTk2MzRjNmU4YmE4OTgxNzNiNmFkN2Iy) 

    ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%8710.png?versionId=CAEQKRiBgMDwurCKhhgiIGE3YzUyMjM0YmE5NjQ5NGU5MjU2OTAzZTdkMmFjYTcz) 

3. 向集群中的node-1002节点查询索引

    ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%8711.png?versionId=CAEQKRiBgMDxtLCKhhgiIDViZWMxZDYxMzNhYzRlN2NhMzMxMmZmZWYwMzk5ZDE4) 

    ![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%8712.png?versionId=CAEQKRiBgIDrwbCKhhgiIGIwZGE5ZDZkNWRlMDQ3YTNiNTBmODBiZjJiMDRjYjcx) 


## 3. Linux单机

### 3.1 软件下载

软件下载地址：https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-8-0

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%8713.png?versionId=CAEQKRiBgMDFtbCKhhgiIGZjZTU5ZTE3NDYwNTRkYjFhYmM2MzYxNWZhZTdhYTMw) 

### 3.2 软件安装

1. 解压软件
    ```bash
    # 解压缩
    tar -zxvf elasticsearch-7.8.0-linux-x86_64.tar.gz -C /opt/module
    # 改名
    mv elasticsearch-7.8.0 es
    ```
2. 创建用户
    因为安全问题，Elasticsearch不允许root用户直接运行，所以要创建新用户，在root用户中创建新用户
    ```bash
    useradd es #新增es用户
    passwd es #为es用户设置密码

    userdel -r es #如果错了，可以删除再加
    chown -R es:es /opt/module/es #文件夹所有者
    ```
   
3. 修改配置文件
    修改`/opt/module/es/config/elasticsearch.yml`文件
    ```bash
    # 加入如下配置
    cluster.name: elasticsearch
    node.name: node-1
    network.host: 0.0.0.0
    http.port: 9200
    cluster.initial_master_nodes: ["node-1"]
    ```

    修改/etc/security/limits.conf 
    ```bash
    # 在文件末尾中增加下面内容
    # 每个进程可以打开的文件数的限制
    es soft nofile 65536
    es hard nofile 65536
    ```
    ```bash
    修改/etc/security/limits.d/20-nproc.conf
    # 在文件末尾中增加下面内容
    # 每个进程可以打开的文件数的限制
    es soft nofile 65536
    es hard nofile 65536
    # 操作系统级别对每个用户创建的进程数的限制
    * hard nproc 4096
    # 注：* 带表Linux所有用户名称
    ```
   
    修改/etc/sysctl.conf
    ```bash
    # 在文件中增加下面内容
    # 一个进程可以拥有的VMA(虚拟内存区域)的数量,默认值为65536
    vm.max_map_count=655360
    ```
   
    重新加载
    ```bash
    sysctl -p 
    ```

### 3.3 启动软件

使用ES用户启动
```bash
cd /opt/module/es/
#启动
bin/elasticsearch
#后台启动
bin/elasticsearch -d
```

启动时，会动态生成文件，如果文件所属用户不匹配，会发生错误，需要重新进行修改用户和用户组

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%8714.png?versionId=CAEQKRiBgICYsrCKhhgiIDEyMGQ5NTlkYTg0ODQxNTJhYjU3ZGUwNGFmM2ZmYjk2)

关闭防火墙
```bash
#暂时关闭防火墙
systemctl stop firewalld

#永久关闭防火墙
systemctl enable firewalld.service #打开放货抢永久性生效，重启后不会复原
systemctl disable firewalld.service #关闭防火墙，永久性生效，重启后不会复原
```


### 3.4 测试集群

浏览器中输入地址：http://linux1:9200/

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%8715.png?versionId=CAEQKRiBgMCvybCKhhgiIDc4M2E4MDZhNzFmZTRkZTY4MWE1Y2ExNGJhNmQ5NmVl) 

## 4. Linux集群

### 4.1 软件下载

软件下载地址：https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-8-0

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%8713.png?versionId=CAEQKRiBgMDFtbCKhhgiIGZjZTU5ZTE3NDYwNTRkYjFhYmM2MzYxNWZhZTdhYTMw) 

### 4.2 软件安装

1. 解压软件
    ```bash
    # 解压缩
    tar -zxvf elasticsearch-7.8.0-linux-x86_64.tar.gz -C /opt/module
    # 改名
    mv elasticsearch-7.8.0 es-cluster
    ```
    将软件分发到其他节点：linux2, linux3
2. 创建用户
    因为安全问题，Elasticsearch不允许root用户直接运行，所以要创建新用户，在root用户中创建新用户
    ```bash
    useradd es #新增es用户
    passwd es #为es用户设置密码

    userdel -r es #如果错了，可以删除再加
    chown -R es:es /opt/module/es-cluster #文件夹所有者
    ```
   
3. 修改配置文件
    修改`/opt/module/es/config/elasticsearch.yml`文件
    ```bash
    # 加入如下配置
    #集群名称
    cluster.name: cluster-es
    #节点名称，每个节点的名称不能重复
    node.name: node-1
    #ip地址，每个节点的地址不能重复
    network.host: linux1
    #是不是有资格主节点
    node.master: true
    node.data: true
    http.port: 9200
    # head 插件需要这打开这两个配置
    http.cors.allow-origin: "*"
    http.cors.enabled: true
    http.max_content_length: 200mb
    #es7.x 之后新增的配置，初始化一个新的集群时需要此配置来选举master
    cluster.initial_master_nodes: ["node-1"]
    #es7.x 之后新增的配置，节点发现
    discovery.seed_hosts: ["linux1:9300","linux2:9300","linux3:9300"]
    gateway.recover_after_nodes: 2
    network.tcp.keep_alive: true
    network.tcp.no_delay: true
    transport.tcp.compress: true
    #集群内同时启动的数据任务个数，默认是2个
    cluster.routing.allocation.cluster_concurrent_rebalance: 16
    #添加或删除节点及负载均衡时并发恢复的线程个数，默认4个
    cluster.routing.allocation.node_concurrent_recoveries: 16
    #初始化数据恢复时，并发恢复线程的个数，默认4个
    cluster.routing.allocation.node_initial_primaries_recoveries: 16
    ```

    修改`/etc/security/limits.conf`
    ```bash
    # 在文件末尾中增加下面内容
    es soft nofile 65536
    es hard nofile 65536
    ```
    修改`/etc/security/limits.d/20-nproc.conf`，分发文件
    ```bash
    # 在文件末尾中增加下面内容
    es soft nofile 65536
    es hard nofile 65536
    * hard nproc 4096
    # 注：* 带表Linux所有用户名称
    ```
   
    修改`/etc/sysctl.conf`
    ```bash
    # 在文件中增加下面内容
    # 一个进程可以拥有的VMA(虚拟内存区域)的数量,默认值为65536
    vm.max_map_count=655360
    ```
   
    重新加载
    ```bash
    sysctl -p 
    ```

### 4.3 启动软件

分别在不同节点上启动ES软件

```bash
cd /opt/module/es-cluster

#启动
bin/elasticsearch

#后台启动
bin/elasticsearch -d
```

### 4.4 测试集群

![img](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/%E5%9B%BE%E7%89%8716.png?versionId=CAEQKRiBgIDtsbCKhhgiIGEwMmFiZmQ0OTQ5NjRjMTM4ZGQyODU1ZTlhNmIwNDI4) 
