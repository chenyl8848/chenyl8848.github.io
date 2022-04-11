---
title: 初学Kafka
date: 2022-04-11
category:
  - 中间件
  - MQ
tag:
  - Kafka
---

# 第一章 Kafka概述

## 1.1 基本概念

**Kafka传统定义**：Kafka是一个**分布式**的基于**发布/订阅**模式的**消息队列**（MessageQueue），主要应用于大数据实时处理领域。

**Kafka最新定义**： Kafka是 一个开源的**分布式事件流平台** （Event Streaming Platform），被数千家公司用于**高性能数据管道、流分析、数据集成和关键任务应用**。

**发布/订阅**：消息的发布者不会将消息直接发送给特定的订阅者，而是**将发布的消息分为不同的类别**，订阅者**只接收感兴趣的消息**。

[Kafka官网地址](https://kafka.apache.org/)

## 1.2 消息队列

**常见的消息队列产品**：**Kafka**、**ActiveMQ** 、**RabbitMQ** 、**RocketMQ**

### 1.2.1 消息队列应用场景

主要应用场景包括：**缓存/削峰**、**解耦**、**异步**

- 消息队列应用场景——缓存/削峰

  **缓存/削峰**：有助于控制和优化数据流经过系统的速度，解决生产消息和消费消息的处理速度不一致的情况。

  <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220218105543314.png" alt="image-20220218105543314" style="zoom: 67%;" /> -->

- 消息队列的应用场景——解耦

  **解耦**：允许你独立的扩展或修改两边的处理过程，只要确保它们遵守同样的接口约束。

  <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220218105810607.png" alt="image-20220218105810607" style="zoom: 67%;" /> -->

- 消息队列的应用场景——异步通信

  **异步通信**：允许用户把一个消息放入队列，但并不立即处理它，然后在需要的时候再去处理它们。

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220218105939896.png" alt="image-20220218105939896" style="zoom: 67%;" /> -->

### 1.2.2 消息队列两种模式

1. **点对点模式**

   - 消费者主动拉取数据，消息收到后清除消息

     <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220218110330983.png" alt="image-20220218110330983" style="zoom:67%;" /> -->

2. **发布/订阅模式**

   - 可以有多个topic主题（浏览、点赞、收藏、评论等）

   - 消费者消费数据之后，不删除数据

   - 每个消费者相互独立，都可以消费到数据

     <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220218110554236.png" alt="image-20220218110554236" style="zoom:67%;" /> -->

## 1.3 基本架构

1. 为方便扩展，并提高吞吐量，一个topic分为多个partition
2. 配合分区的设计，提出消费者组的概念，组内每个消费者并行消费
3. 为提高可用性，为每个partition增加若干副本，类似NameNode HA
4.  ZK中记录谁是leader，Kafka 2.8.0以后也可以配置不采用ZK

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220218111419404.png" alt="image-20220218111419404" style="zoom:67%;" /> -->

（1）**Producer**：**消息生产者**，就是向 Kafka broker发消息的客户端。 

（2）**Consumer**：**消息消费者**，向 Kafka broker 取消息的客户端。 

（3）**Consumer Group（CG）**：消费者组，由多个 consumer 组成。消费者组内每个消费者负责消费不同分区的数据，**一个分区只能由一个组内消费者消费**；消费者组之间互不影响。所有的消费者都属于某个消费者组，即消费者组是逻辑上的一个订阅者。 

（4）**Broker**：一台 Kafka 服务器就是一个 broker，一个集群由多个 broker 组成，一个broker 可以容纳多个 topic。 

（5）**Topic**：可以理解为一个队列，生产者和消费者面向的都是一个 topic。 

（6）**Partition**：为了实现扩展性，一个非常大的 topic 可以分布到多个 broker（即服务器）上，一个 topic 可以分为多个 partition，每个 partition 是一个有序的队列。 

（7）**Replica**：副本。一个 topic 的每个分区都有若干个副本，一个 Leader 和若干个Follower。 

（8）**Leader**：每个分区多个副本的“主”，生产者发送数据的对象，以及消费者消费数据的对象都是 Leader。 

（9）**Follower**：每个分区多个副本中的“从”，实时从 Leader 中同步数据，保持和Leader 数据的同步。Leader 发生故障时，某个 Follower 会成为新的 Leader。



# 第二章 Kafka快速入门

## 2.1 安装部署

### 2.1.1 集群规划

| 172.18.85.248(kafka01) | 172.18.85.249(kafka02) | 172.18.85.250(kafka03) |
| ---------------------- | ---------------------- | ---------------------- |
| zookeeper              | zookeeper              | zookeeper              |
| kafka                  | kafka                  | kafka                  |

### 2.1.2 集群部署

1. [官方下载地址](https://kafka.apache.org/downloads)

2. 解压压缩包：

   ```bash
   tar -zxvf kafka_2.12-3.0.0.tgz
   ```

3. 修改解压后的文件夹名称：

   ```bash
   mv kafka_2.12-3.0.0/ kafka
   ```

4. kafka目录结构：

   ```
   ├── bin 脚本命令
   ├── config 配置文件
   ├── libs 第三方包
   ├── LICENSE
   ├── licenses
   ├── NOTICE
   └── site-docs
   ```

5. 查看配置文件server.properties

   ```bash
   #broker 的全局唯一编号，不能重复，只能是数字。
   broker.id=0
   #开启远程调用
   listeners=PLAINTEXT://:9092
   advertised.listeners=PLAINTEXT://47.107.70.222:9092
   #处理网络请求的线程数量
   num.network.threads=3
   #用来处理磁盘 IO 的线程数量
   num.io.threads=8
   #发送套接字的缓冲区大小
   socket.send.buffer.bytes=102400
   #接收套接字的缓冲区大小
   socket.receive.buffer.bytes=102400
   #请求套接字的缓冲区大小
   socket.request.max.bytes=104857600
   #kafka 运行日志(数据)存放的路径，路径不需要提前创建，kafka 自动帮你创建，可以
   配置多个磁盘路径，路径与路径之间可以用"，"分隔
   log.dirs=/root/kafka/data
   #topic 在当前 broker 上的分区个数
   num.partitions=1
   #用来恢复和清理 data 下数据的线程数量
   num.recovery.threads.per.data.dir=1
   # 每个 topic 创建时的副本数，默认时 1 个副本
   offsets.topic.replication.factor=1
   #segment 文件保留的最长时间，超时将被删除
   log.retention.hours=168
   #每个 segment 文件的大小，默认最大 1G
   log.segment.bytes=1073741824
   # 检查过期数据的时间，默认 5 分钟检查一次是否数据过期
   log.retention.check.interval.ms=300000
   #配置连接 Zookeeper 集群地址（在 zk 根目录下创建/kafka，方便管理）
   zookeeper.connect=172.18.85.248:2181,172.18.85.249:2181,172.18.85.250:2181/kafka
   ```

6. 分发kafka安装包，在另外两台机器部署

   ```bash
   ./xsync kafka
   ```

   xsync脚本如下：

   ```bash
   #!/bin/bash
   
   #1. 判断参数个数
   if [ $# -lt 1 ]
   then
       echo Not Enough Arguement!
       exit;
   fi
   
   #2. 遍历集群所有机器
   for host in kafka01 kafka02 kafka03
   do
       echo ====================  $host  ====================
       #3. 遍历所有目录，挨个发送
   
       for file in $@
       do
           #4. 判断文件是否存在
           if [ -e $file ]
               then
                   #5. 获取父目录
                   pdir=$(cd -P $(dirname $file); pwd)
   
                   #6. 获取当前文件的名称
                   fname=$(basename $file)
                   ssh $host "mkdir -p $pdir"
                   rsync -av $pdir/$fname $host:$pdir
               else
                   echo $file does not exists!
           fi
       done
   done
   ```

7. 在172.18.85.249、172.18.85.250上修改配置文件/root/kafka/config/server.properties中的

   ```bash
   broker.id=2 broker.id=3
   ```

   **注：broker.id 不得重复，整个集群中唯一。**

8. 配置环境变量

   1. 在/etc/profile文件中增加kafka环境变量配置：

      ```bash
      vim /etc/profile
      ```

   2. 增加如下内容：

      ```bash
      # KAFKA_HOME
      export KAFKA_HOME=/root/kafka
      export PATH=$PATH:$KAFKA_HOME/bin
      ```

   3. 刷新环境变量：

      ```bash
      source /etc/profile
      ```

9. 启动集群

   1. 先启动zookeeper集群，再启动kafka

      ```bash
      ./zkServer.start /root/zookeeper/conf/zoo.cfg
      ```

   2. 依次在kafka01、kafka02、kafka03节点上启动kafka

      ```bash
      kafka-server-start.sh -daemon /root/kafka/config/server.properties 
      ```

   **注意：配置文件的路径要能够到 server.properties**

10. 关闭集群

    ```bash
    kafka-server-stop.sh
    ```

    **注意：关闭集群时要先关闭kafka，再关闭zookeeper集群**

## 2.2 Kafka命令行操作

### 2.2.1 主题命令行操作

1. 查看操作主题命令

   ```bash
   kafka-topics.sh 
   ```

   | 参数                                              | 描述                                 |
   | ------------------------------------------------- | ------------------------------------ |
   | --bootstrap-server <String: server toconnect to>  | 连接的 Kafka Broker 主机名称和端口号 |
   | --topic <String: topic>                           | 操作的 topic 名称                    |
   | --create                                          | 创建主题                             |
   | --delete                                          | 删除主题                             |
   | --alter                                           | 修改主题                             |
   | --list                                            | 查看所有主题                         |
   | --describe                                        | 查看主题详细描述                     |
   | --partitions <Integer: # of partitions>           | 设置分区数                           |
   | --replication-factor<Integer: replication factor> | 设置分区副本                         |
   | --config <String: name=value>                     | 更新系统默认的配置                   |

2. 查看当前服务器所有的topic

   ```bash
   kafka-topics.sh --bootstrap-server kafka01:9092  --list
   ```

3. 创建 hello topic

   ```bash
   kafka-topics.sh --bootstrap-server kafka01:9092 --create --partitions 1 --replication-factor 3 --topic hello
   ```

   选项说明：

   --topic 定义 topic 名

   --replication-factor 定义副本数

   --partitions 定义分区数

4. 查看 hello 主题的详情

   ```bash
   kafka-topics.sh --bootstrap-server kafka01:9092 --describe  --topic hello
   ```

   ```bash
   Topic: hello    TopicId: yYLpdO8UQL2jWZyFcn0TVA PartitionCount: 1       ReplicationFactor: 3    Configs: segment.bytes=1073741824
           Topic: hello    Partition: 0    Leader: 0       Replicas: 0,2,1 Isr: 0,2,1
   ```

5. 修改分区数（**注意：分区数只能增加，不能减少**）

   ```bash
   kafka-topics.sh --bootstrap-server kafka01:9092 --alter --partitions 3 --topic hello
   ```

6. 再次查看 first 主题的详情

   ```bash
   Topic: hello    TopicId: yYLpdO8UQL2jWZyFcn0TVA PartitionCount: 3       ReplicationFactor: 3    Configs: segment.bytes=1073741824
           Topic: hello    Partition: 0    Leader: 0       Replicas: 0,2,1 Isr: 0,2,1
           Topic: hello    Partition: 1    Leader: 1       Replicas: 1,2,0 Isr: 1,2,0
           Topic: hello    Partition: 2    Leader: 2       Replicas: 2,0,1 Isr: 2,0,1
   ```

7. 删除 topic

   ```bash
   kafka-topics.sh --bootstrap-server kafka01:9092 --delete --topic hello
   ```

### 2.2.2 生产者命令行操作

1. 查看操作生产者命令参数

   ```bash
   kafka-console-producer.sh
   ```

   | 参数                                             | 描述                                 |
   | ------------------------------------------------ | ------------------------------------ |
   | --bootstrap-server <String: server toconnect to> | 连接的 Kafka Broker 主机名称和端口号 |
   | --topic <String: topic>                          | 操作的 topic 名称                    |

2. 发送消息

   ```bash
   kafka-console-producer.sh --bootstrap-server kafka01:9092 --topic hello
   ```

### 2.3.3 消费者命令行操作

1. 查看操作消费者命令参数

   ```bash
   kafka-console-consumer.sh 
   ```

   | 参数                                             | 描述                                 |
   | ------------------------------------------------ | ------------------------------------ |
   | --bootstrap-server <String: server toconnect to> | 连接的 Kafka Broker 主机名称和端口号 |
   | --topic <String: topic>                          | 操作的 topic 名称                    |
   | --from-beginning                                 | 从头开始消费                         |
   | --group <String: consumer group id>              | 指定消费者组名称                     |

2. 消费消息

   1. 消费 first 主题中的数据

      ```bash
      kafka-console-consumer.sh --bootstrap-server kafka01:9092 --topic hello
      ```

   2. 把主题中所有的数据都读取出来（包括历史数据）

      ```bash
      kafka-console-consumer.sh --bootstrap-server kafka01:9092 --from-beginning --topic hello
      ```

   

   

# 第三章 Kafka生产者

## 3.1 生产者发送消息流程

### 3.1.1 发送原理

​	在消息发送的过程中，涉及到了两个线程——**main** 线程和 **Sender** 线程。在 main 线程中创建了一个双端队列 **RecordAccumulator**。main 线程将消息发送给 RecordAccumulator，Sender 线程不断从 RecordAccumulator 中拉取消息发送到 Kafka Broker。

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219204024091.png" alt="image-20220219204024091" style="zoom:67%;" /> -->

### 3.1.2 生产者重要参数列表

| 参数名称                              | 描述                                                         |
| ------------------------------------- | ------------------------------------------------------------ |
| bootstrap.servers                     | 生产者连接集群所需的 broker 地址清单.例 如kfaka01:9092，kfaka02:9092，kfaka03:9092，可以设置 1 个或者多个，中间用逗号隔开。注意这里并非需要所有的 broker 地址，因为生产者从给定的 broker里查找到其他 broker 信息。 |
| key.serializer 和 value.serializer    | 指定发送消息的 key 和 value 的序列化类型，**一定要写全类名**。 |
| buffer.memory                         | RecordAccumulator 缓冲区总大小，**默认 32m**。               |
| batch.size                            | 缓冲区一批数据最大值，**默认16k**。适当增加该值，可以提高吞吐量，但是如果该值设置太大，会导致数据传输延迟增加。 |
| linger.ms                             | 如果数据迟迟未达到 batch.size，sender 等待 linger.time之后就会发送数据。单位 ms，默认值是 0ms，表示没有延迟。**生产环境建议该值大小为 5-100ms 之间**。 |
| acks                                  | 0：生产者发送过来的数据，**不需要等数据落盘应答**。1：生产者发送过来的数据，**Leader 收到数据后应答**。-1（all）：生产者发送过来的数据，Leader+和 isr 队列里面的所有节点收齐数据后应答。默认值是-1，-1 和all 是等价的。 |
| max.in.flight.requests.per.connection | 允许最多没有返回 ack 的次数，默认为 5，开启幂等性要保证该值是 1-5 的数字。 |
| retries                               | 当消息发送出现错误的时候，系统会重发消息。**retries表示重试次数，默认是 int 最大值，2147483647**。如果设置了重试，还想保证消息的有序性，需要设置MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION=1，否则在重试此失败消息的时候，其他的消息可能发送成功了。 |
| retry.backoff.ms                      | 两次重试之间的时间间隔，默认是 100ms。                       |
| enable.idempotence                    | 是否开启幂等性，默认 true。                                  |
| compression.type                      | 生产者发送的所有数据的压缩方式，**默认是 none，也就是不压缩**。支持压缩类型：**none、gzip、snappy、lz4 和 zstd**。 |

## 3.2 异步发送API

### 3.2.1 普通异步发送

1. 需求：创建 Kafka 生产者，采用异步的方式发送到 Kafka Broker

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219205841697.png" alt="image-20220219205841697" style="zoom:67%;" /> -->

2. 代码编写

   1. 创建maven工程kafka

   2. 导入依赖

      ```xml
      <dependency>
          <groupId>org.apache.kafka</groupId>
          <artifactId>kafka-clients</artifactId>
          <version>3.0.0</version>
      </dependency>
      ```

   3. 创建包：com.kafka.producer

   4. 编写不带回调函数的异步API

      ```java
      package com.kafka.producer;
      
      import org.apache.kafka.clients.producer.KafkaProducer;
      import org.apache.kafka.clients.producer.ProducerConfig;
      import org.apache.kafka.clients.producer.ProducerRecord;
      import org.apache.kafka.common.serialization.StringSerializer;
      
      import java.util.Properties;
      
      /**
       * @author cyl
       * @date 2022-02-19 21:06
       * @description kafka不带回调函数异步发送生产者
       */
      public class CustomProducer {
      
          public static void main(String[] args) {
      
              //0.添加配置信息
              Properties properties = new Properties();
      
              //配置bootstrap.server----
              properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,"39.108.62.189:9092");
              //key、value设置序列化器
              //properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
              properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
              properties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
      
              //1.创建kafka生产者对象
              KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);
      
              //2.调用send方法，发送消息
              for (int i = 0; i < 5; i++) {
                  producer.send(new ProducerRecord<>("hello","hello world" + i));
              }
      
              //3.关闭资源
              producer.close();
          }
      }
      ```
   
   5. 测试
   
      在kafka上开启消费者，成功消费消息
      
      ```bash
      kafka-console-consumer.sh --bootstrap-server kafka01:9092 --topic hello
      ```

### 3.2.2 带回调函数异步发送

​	回调函数会在 producer 收到 ack 时调用，为异步调用，该方法有两个参数，分别是元数据信息（RecordMetadata）和异常信息（Exception），如果 Exception 为 null，说明消息发送成功，如果 Exception 不为 null，说明消息发送失败。

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219211727849.png" alt="image-20220219211727849" style="zoom:67%;" /> -->

**注意：消息发送失败会自动重试，不需要我们在回调函数中手动重试**。

```java
//2.调用send方法，发送消息
for (int i = 0; i < 5; i++) {
    //设置回调
    producer.send(new ProducerRecord<>("hello", "hello world" + i), new Callback() {
        @Override
        public void onCompletion(RecordMetadata recordMetadata, Exception e) {
            if (e == null) {
                //没有异常
                String topic = recordMetadata.topic();
                int partition = recordMetadata.partition();
                System.out.println("****主题:" + topic + "->分区:" + partition + "*****");

            }
        }
    });

    //延迟一会会看到消息发往不同分区
    Thread.sleep(200);
}
```

测试

1. 在kafka上开启消费者，成功消费消息

   ```bash
   kafka-console-consumer.sh --bootstrap-server kafka01:9092 --topic hello
   ```

2. idea控制台打印

```java
****主题:hello->分区:0*****
****主题:hello->分区:0*****
****主题:hello->分区:0*****
****主题:hello->分区:0*****
****主题:hello->分区:0*****
```

## 3.3 同步发送API

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219211912676.png" alt="image-20220219211912676" style="zoom:67%;" /> -->

**只需在异步发送的基础上，再调用一下 get()方法即可。**

```java
 //2.调用send方法，发送消息
for (int i = 0; i < 5; i++) {
    //异步发送
    //producer.send(new ProducerRecord<>("hello","hello world" + i));
    //同步发送
    producer.send(new ProducerRecord<>("hello","hello world" + i)).get();
}
```

测试

在kafka上开启消费者，成功消费消息

```java
kafka-console-consumer.sh --bootstrap-server kafka01:9092 --topic hello
```

## 3.4 生产者分区

### 3.4.1 分区的好处

1. **便于合理使用存储资源**，每个Partition在一个Broker上存储，可以把海量的数据按照分区切割成一块一块数据存储在多台Broker上。合理控制分区的任务，可以实现**负载均衡**的效果。

2. **提高并行度**，生产者可以**以分区为单位发送数据**；消费者可以**以分区为单位进行消费数据**。

   

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219212207010.png" alt="image-20220219212207010" style="zoom:67%;" /> -->

### 3.4.2 分区策略

1. **默认的分区器DefaultPartitioner**

   ```java
   public class DefaultPartitioner implements Partitioner {
       private final StickyPartitionCache stickyPartitionCache = new StickyPartitionCache();
   
       public DefaultPartitioner() {
       }
   
       public void configure(Map<String, ?> configs) {
       }
   
       public int partition(String topic, Object key, byte[] keyBytes, Object value, byte[] valueBytes, Cluster cluster) {
           return this.partition(topic, key, keyBytes, value, valueBytes, cluster, cluster.partitionsForTopic(topic).size());
       }
   
       public int partition(String topic, Object key, byte[] keyBytes, Object value, byte[] valueBytes, Cluster cluster, int numPartitions) {
           return keyBytes == null ? this.stickyPartitionCache.partition(topic, cluster) : Utils.toPositive(Utils.murmur2(keyBytes)) % numPartitions;
       }
   
       public void close() {
       }
   
       public void onNewBatch(String topic, Cluster cluster, int prevPartition) {
           this.stickyPartitionCache.nextPartition(topic, cluster, prevPartition);
       }
   }
   ```

   ProducerRecord类，在类中可以看到如下构造方法：

   ```java
   //指明partition的情况下，直接将指明的值作为partition值；例如partition=0，所有数据写入分区0
   public ProducerRecord(String topic, Integer partition, Long timestamp, K key, V value, Iterable<Header> headers) {
   ... ...
   }
   public ProducerRecord(String topic, Integer partition, Long timestamp, K key, V value) {
   ... ...
   }
   public ProducerRecord(String topic, Integer partition, K key, V value, Iterable<Header> headers) {
   ... ...
   }
   public ProducerRecord(String topic, Integer partition, K key, V value) {
   ... ...
   }
   //没有指明partition值但有key的情况下，将key的hash值与topic的partition数进行取余得到partition值；
   //例如：key1的hash值=5， key2的hash值=6 ，topic的partition数=2，那 么key1 对应的value1写入1号分区，key2对应的value2写入0号分区
   public ProducerRecord(String topic, K key, V value) {
   ... ...
   }
   //既没有partition值又没有key值的情况下，Kafka采用Sticky Partition（黏性分区器），会随机选择一个分区，并尽可能一直使用该分区，待该分区的batch已满
   //或者已完成，Kafka再随机一个分区进行使用（和上一次的分区不同）。
   //例如：第一次随机选择0号分区，等0号分区当前批次满了（默认16k）或者linger.ms设置的时间到， Kafka再随机一个分区进行使用（如果还是0会继续随机）
   public ProducerRecord(String topic, V value) {
   ... ...
   }
   ```

2. **案例一**

   **将数据发往指定 partition 的情况下**，例如，将所有数据发往分区 1 中。

   ```java
    //2.调用send()方法，发送消息
   for (int i = 0; i < 5; i++) {
   
       //指定发送数据到1号分区
       producer.send(new ProducerRecord<>("hello", 1, null, "hello world" + i), new Callback() {
           @Override
           public void onCompletion(RecordMetadata recordMetadata, Exception e) {
               if (e == null) {
                   //没有异常
                   String topic = recordMetadata.topic();
                   int partition = recordMetadata.partition();
                   System.out.println("****主题:" + topic + "->分区:" + partition + "*****");
   
               }
           }
       });
   }
   ```

   测试

   idea控制台打印

   ```java
   ****主题:hello->分区:1*****
   ****主题:hello->分区:1*****
   ****主题:hello->分区:1*****
   ****主题:hello->分区:1*****
   ****主题:hello->分区:1*****
   ```

3. **案例二**

   **没有指明 partition 值但有 key 的情况下**，将 key 的 hash 值与 topic 的 partition 数进行**取余**得到 partition 值。

   ```java
    // 依次指定 key 值为 a,b,f ，数据 key 的 hash 值与 3 个分区求余，分别发往 1、2、0
   producer.send(new ProducerRecord<>("hello", 1, "a", "hello world" + i), new Callback() {
       @Override
       public void onCompletion(RecordMetadata recordMetadata, Exception e) {
           if (e == null) {
               //没有异常
               String topic = recordMetadata.topic();
               int partition = recordMetadata.partition();
               System.out.println("****主题:" + topic + "->分区:" + partition + "*****");
   
           }
       }
   });
   ```
   
   测试
   
   idea控制台打印
   
   ```java
   ****主题:hello->分区:1*****
   ****主题:hello->分区:1*****
   ****主题:hello->分区:1*****
   ****主题:hello->分区:1*****
   ****主题:hello->分区:1*****
   ```

### 3.4.3 自定义分区器

​	如果研发人员可以根据企业需求，自己重新实现分区器。

1. 需求

   例如我们实现一个分区器实现，发送过来的数据中如果包含hello，就发往0号分区，不包含hello，就发往1号分区。

2. 实现步骤

   1. 定义类实现 Partitioner 接口

   2. 重写 partition()方法

      ```java
      package com.kafka.producer;
      
      import org.apache.kafka.clients.producer.Partitioner;
      import org.apache.kafka.common.Cluster;
      import java.util.Map;
      
      /**
       * @author cyl
       * @date 2022-02-20 13:21
       * @description 自定义分区器
       */
      public class CustomPartitioner implements Partitioner {
      
          @Override
          public int partition(String s, Object o, byte[] bytes, Object o1, byte[] bytes1, Cluster cluster) {
      
              //1.获取消息
              String value = o1.toString();
      
              //2.创建partition
              int partition;
      
              if (value.contains("hello")) {
                  partition = 0;
              } else {
                  partition = 1;
              }
      
              return partition;
          }
      
          @Override
          public void close() {
      
          }
      
          @Override
          public void configure(Map<String, ?> map) {
      
          }
      }
      
      ```
   
   3. 使用分区器的方法，在生产者的配置中添加分区器参数
   
      ```java
       //指定分区器为自定义分区器
      properties.put(ProducerConfig.PARTITIONER_CLASS_CONFIG, CustomPartitioner.class.getName());
      
      //1.创建生产者对象
      KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);
      
      //2.调用send()方法，发送消息
      for (int i = 0; i < 5; i++) {
          producer.send(new ProducerRecord<>("hello", 1, null, "world" + i), new Callback() {
              @Override
              public void onCompletion(RecordMetadata recordMetadata, Exception e) {
                  if (e == null) {
                      //没有异常
                      String topic = recordMetadata.topic();
                      int partition = recordMetadata.partition();
                      System.out.println("****主题:" + topic + "->分区:" + partition + "*****");
      
                  }
              }
          });
      }
      ```
   
   4. 测试
   
      idea控制台打印
      
      ```java
      ****主题:hello->分区:1*****
      ****主题:hello->分区:1*****
      ****主题:hello->分区:1*****
      ****主题:hello->分区:1*****
      ****主题:hello->分区:1*****
      ```

## 3.5 生产者提高吞吐量

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220220134930630.png" alt="image-20220220134930630" style="zoom:67%;" /> -->

```java
package com.kafka.producer;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;

import java.util.Properties;

/**
 * @author cyl
 * @date 2022-02-20 13:37
 * @description kafka生产者提高吞吐量
 */
public class CustomProducerParameters {

    public static void main(String[] args) {

        //0.配置连接信息等
        Properties properties = new Properties();

        //配置bootstrap.server
        properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "120.25.193.19:9092");
        //配置key序列化器
        properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        //配置value序列化器
        properties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        //设置批次大小，默认:16k
        properties.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);

        //等待事件，默认:0
        properties.put(ProducerConfig.LINGER_MS_CONFIG, 1);

        //缓冲区大小，默认:32M
        properties.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432);

        //压缩，默认:none，可配置gzip、snappy、lz4 和 zstd
        properties.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, "snappy");

        //1.创建生产者对象
        KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);

        //2.调用send()方法，发送消息
        for (int i = 0; i < 5; i++) {
            producer.send(new ProducerRecord<>("hello", "hello world" + i));
        }

        //3.关闭资源
        producer.close();

    }
}

```

## 3.6 数据可靠性

1. 回顾发送流程

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219213156707.png" alt="image-20220219213156707" style="zoom:67%;" /> -->

2. ack应答原理

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219213244491.png" alt="image-20220219213244491" style="zoom:67%;" /> -->

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219213353995.png" alt="image-20220219213353995" style="zoom:67%;" /> -->

   **数据完全可靠条件 = ACK级别设置为-1 + 分区副本大于等于2 + ISR里应答的最小副本数量大于等于2**

   **可靠性总结：**

   - acks=0，生产者发送过来数据就不管了，可靠性差，效率高；

   - acks=1，生产者发送过来数据Leader应答，可靠性中等，效率中等；

   - acks=-1，生产者发送过来数据Leader和ISR队列里面所有Follwer应答，可靠性高，效率低；
     **在生产环境中，acks=0很少使用；acks=1，一般用于传输普通日志，允许丢个别数据；acks=-1，一般用于传输和钱相关的数据，**
     **对可靠性要求比较高的场景。**

     **数据重复分析：**

     **acks： -1（all）：生产者发送过来的数据，Leader和ISR队列里面的所有节点收齐数据后应答。**

     <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219213634877.png" alt="image-20220219213634877" style="zoom:67%;" /> -->

3. 代码

   ```java
   //设置acks
   properties.put(ProducerConfig.ACKS_CONFIG, "all");
   //设置重试次数，默认:int的最大值 2147483647
   properties.put(ProducerConfig.RETRIES_CONFIG, 3);
   ```

## 3.7 数据去重

### 3.7.1 数据传递语义

- **至少一次**（At Least Once）= ACK级别设置为-1 + 分区副本大于等于2 + ISR里应答的最小副本数量大于等于2

- **最多一次**（At Most Once）= ACK级别设置为0

- **总结：**
  At Least Once可以保证数据不丢失，但是**不能保证数据不重复**；
  At Most Once可以保证数据不重复，但是**不能保证数据不丢失**。

- **精确一次**（Exactly Once）：对于一些非常重要的信息，比如和钱相关的数据，要求数据既不能重复也不丢失。

  Kafka 0.11版本以后，引入了一项重大特性：**幂等性和事务**。

### 3.7.2 幂等性

1. **幂等性原理**

   **幂等性**就是指Producer不论向Broker发送多少次重复数据，**Broker端都只会持久化一条，保证了不重复**。
   **精确一次（Exactly Once） = 幂等性 + 至少一次（ ack=-1 + 分区副本数>=2 + ISR最小副本数量>=2**） 。
   **重复数据的判断标准**：具有<**PID**, **Partition**, **SeqNumber**>相同主键的消息提交时，Broker只会持久化一条。其 中PID是Kafka每次重启都会分配一个新的；Partition 表示分区号；Sequence Number是单调自增的。
   所以幂等性只能保证的是在**单分区单会话内**不重复。

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219214449260.png" alt="image-20220219214449260" style="zoom:67%;" /> -->

2. **如何使用幂等性**

   开启参数 **enable.idempotence** 默认为 true，false 关闭。

### 3.7.3 事务

1. 事务原理

   **说明：开启事务，必须开启幂等性。**

2. **事务API**

   ```java
   // 1 初始化事务
   void initTransactions();
   // 2 开启事务
   void beginTransaction() throws ProducerFencedException;
   // 3 在事务内提交已经消费的偏移量（主要用于消费者）
   void sendOffsetsToTransaction(Map<TopicPartition, OffsetAndMetadata> offsets,
    String consumerGroupId) throws 
   ProducerFencedException;
   // 4 提交事务
   void commitTransaction() throws ProducerFencedException;
   // 5 放弃事务（类似于回滚事务的操作）
   void abortTransaction() throws ProducerFencedException;
   ```

3. 单个 Producer，使用事务保证消息的仅一次发送

   ```java
   package com.kafka.producer;
   
   import org.apache.kafka.clients.producer.KafkaProducer;
   import org.apache.kafka.clients.producer.ProducerConfig;
   import org.apache.kafka.clients.producer.ProducerRecord;
   import org.apache.kafka.common.serialization.StringSerializer;
   
   import java.util.Properties;
   
   /**
    * @author cyl
    * @date 2022-02-19 21:06
    * @description kafka生产者事务
    */
   public class CustomProducerTransaction {
   
       public static void main(String[] args) {
   
           //0.添加配置信息
           Properties properties = new Properties();
   
           //配置bootstrap.server----
           properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "120.25.193.19:9092");
           //key、value设置序列化器
           //properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, "org.apache.kafka.common.serialization.StringSerializer");
           properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
           properties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
   
           //事务id，一定要设置且全局唯一
           properties.put(ProducerConfig.TRANSACTIONAL_ID_CONFIG, "transaction_id_0");
   
           //1.创建kafka生产者对象
           KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);
   
           //初始化事务
           producer.initTransactions();
   
           //开启事务
           producer.beginTransaction();
   
           //2.调用send方法，发送消息
           try {
               for (int i = 0; i < 5; i++) {
                   producer.send(new ProducerRecord<>("hello", "hello world" + i));
               }
               
   			//int i = 10 / 0;
               //提交事务
               producer.commitTransaction();
           } catch (Exception e) {
               e.printStackTrace();
   
               //终止事务
               producer.abortTransaction();
           } finally {
   
               //3.关闭资源
               producer.close();
           }
   
   
       }
   }
   ```

## 3.8 数据有序

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220219214934834.png" alt="image-20220219214934834" style="zoom:67%;" /> -->

## 3.9 数据乱序

1. kafka在**1.x版本之前**保证数据单分区有序，条件如下：

   **max.in.flight.requests.per.connection=1（不需要考虑是否开启幂等性）**

2. kafka在**1.x及以后版本**保证数据单分区有序，条件如下：

   1. 未开启幂等性

      **max.in.flight.requests.per.connection需要设置为1**

   2. 开启幂等性

      **max.in.flight.requests.per.connection需要设置小于等于5**
      原因说明：因为在kafka1.x以后，启用幂等后，kafka服务端会缓存producer发来的最近5个request的元数据，故无论如何，都可以保证最近5个request的数据都是有序的。



# 第四章 Kafka Broker

## 4.1 Broker工作流程

### 4.1.1 Zookeeper存储的Kafka信息

1. 启动zookeeper客户端

   ```bash
   
   ```

2. 通过ls命令查看Kafka相关信息

   ```bash
   ```

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220221091408273.png" alt="image-20220221091408273" style="zoom:67%;" /> -->

### 4.1.2 Broker总体工作流程

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220223110500365.png" alt="image-20220223110500365" style="zoom:67%;" /> -->

1. 模拟 Kafka 上下线，Zookeeper 中数据变化

   1. 查看/kafka/brokers/ids 路径上的节点

      ```bash
      
      ```

   2. 查看/kafka/controller 路径上的数据

      ```bash
      
      ```

   3. 查看/kafka/brokers/topics/first/partitions/0/state 路径上的数据

      ```bash
      
      ```

   4. 停止 kafka03 上的 kafka

      ```bash
      
      ```

   5. 再次查看/kafka/brokers/ids 路径上的节点

      ```bash
      
      ```

   6. 再次查看/kafka/controller 路径上的数据

      ```bash
      
      ```

   7. 再次查看/kafka/brokers/topics/first/partitions/0/state 路径上的数据

      ```java
      
      ```

   8. 启动 kafka03 上的 kafka

      ```bash
      
      ```

### 4.1.3 Broker重要参数

| 参数名称                                | 描述                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| replica.lag.time.max.ms                 | ISR 中，如果 Follower 长时间未向 Leader 发送通信请求或同步数据，则该 Follower 将被踢出 ISR。该时间阈值，默认 30s。 |
| auto.leader.rebalance.enable            | 默认是 true。 自动 Leader Partition 平衡。                   |
| leader.imbalance.per.broker.percentage  | 默认是 10%。每个 broker 允许的不平衡的 leader的比率。如果每个 broker 超过了这个值，控制器会触发 leader 的平衡。 |
| leader.imbalance.check.interval.seconds | 默认值 300 秒。检查 leader 负载是否平衡的间隔时间。          |
| log.segment.bytes                       | Kafka 中 log 日志是分成一块块存储的，此配置是指 log 日志划分 成块的大小，默认值 1G。 |
| log.index.interval.bytes                | 默认 4kb，kafka 里面每当写入了 4kb 大小的日志（.log），然后就往 index 文件里面记录一个索引。 |
| log.retention.hours                     | Kafka 中数据保存的时间，默认 7 天。                          |
| log.retention.minutes                   | Kafka 中数据保存的时间，分钟级别，默认关闭。                 |
| log.retention.ms                        | Kafka 中数据保存的时间，毫秒级别，默认关闭。                 |
| log.retention.check.interval.ms         | 检查数据是否保存超时的间隔，默认是 5 分钟。                  |
| log.retention.bytes                     | 默认等于-1，表示无穷大。超过设置的所有日志总大小，删除最早的 segment。 |
| log.cleanup.policy                      | 默认是 delete，表示所有数据启用删除策略；如果设置值为 compact，表示所有数据启用压缩策略。 |
| num.io.threads                          | 默认是 8。负责写磁盘的线程数。整个参数值要占总核数的 50%。   |
| num.replica.fetchers                    | 副本拉取线程数，这个参数占总核数的 50%的 1/3                 |
| num.network.threads                     | 默认是 3。数据传输线程数，这个参数占总核数的50%的 2/3 。     |
| log.flush.interval.messages             | 强制页缓存刷写到磁盘的条数，默认是 long 的最大值，9223372036854775807。一般不建议修改，交给系统自己管理。 |
| log.flush.interval.ms                   | 每隔多久，刷数据到磁盘，默认是 null。一般不建议修改，交给系统自己管理。 |

## 4.2 节点服役和退役

### 4.2.1 服役新节点

1. 准备新节点

2. 执行负载均衡操作

   1. 创建一个要均衡的主题

      ```bash
      
      ```

   2. 生成一个负载均衡的计划

      ```bash
      
      ```

   3. 创建副本存储计划（所有副本存储在 broker0、broker1、broker2、broker3 中）

      ```bash
      
      ```

   4. 执行副本存储计划

      ```bash
      
      ```

   5. 验证副本存储计划

      ```bash
      
      ```

### 4.2.2 退役旧节点

1. 执行负载均衡操作

   先按照退役一台节点，生成执行计划，然后按照服役时操作流程执行负载均衡。

   1. 创建一个要均衡的主题

      ```bash
      
      ```

   2. 创建执行计划

      ```bash
      
      ```

   3. 创建副本存储计划（所有副本存储在 broker0、broker1、broker2 中）

      ```bash
      
      ```

   4. 执行副本存储计划

      ```bash

   5. 验证副本存储计划

      ```bash
      
      ```

2. 执行停止命令

   ```bash
   
   ```

## 4.3 Kafka副本

### 4.3.1 副本基本信息

1. Kafka 副本作用：提高数据可靠性。 
2. Kafka 默认副本 1 个，生产环境一般配置为 2 个，保证数据可靠性；太多副本会增加磁盘存储空间，增加网络上数据传输，降低效率。
3. Kafka 中副本分为：Leader 和 Follower。Kafka 生产者只会把数据发往 Leader，然后 Follower 找 Leader 进行同步数据。
4. Kafka 分区中的所有副本统称为 AR（Assigned Repllicas）。
   **AR = ISR + OSR**
   **ISR：**表示和 Leader 保持同步的 Follower 集合。如果 Follower 长时间未向 Leader 发送通信请求或同步数据，则该 Follower 将被踢出 ISR。该时间阈值由 replica.lag.time.max.ms参数设定，默认 30s。Leader 发生故障之后，就会从 ISR 中选举新的 Leader。
   **OSR：**表示 Follower 与 Leader 副本同步时，延迟过多的副本。

### 4.3.2 Leader选举流程

​	Kafka 集群中有一个 broker 的 Controller 会被选举为 Controller Leader，负责管理集群broker 的上下线，所有 topic 的分区副本分配和 Leader 选举等工作。
​	Controller 的信息同步工作是依赖于 Zookeeper 的。

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220225174329375.png" alt="image-20220225174329375" style="zoom:67%;" /> -->

1. 创建一个新的 topic，4 个分区，4 个副本

   ```bash
   
   ```

2. 查看 Leader 分布情况

   ```bash
   
   ```

3. 停止掉 hadoop105 的 kafka 进程，并查看 Leader 分区情况

   ```bash
   
   ```

4. 停止掉 hadoop104 的 kafka 进程，并查看 Leader 分区情况

   ```bash
   
   ```

5. 启动 hadoop105 的 kafka 进程，并查看 Leader 分区情况

   ```bash
   
   ```

6. 启动 hadoop104 的 kafka 进程，并查看 Leader 分区情况

   ```bash
   
   ```

7. 停止掉 hadoop103 的 kafka 进程，并查看 Leader 分区情况

   ```bash
   
   ```

### 4.3.3 Leader和Follower故障处理细节

**LEO（Log End Offset）**：每个副本的最后一个offset，LEO其实就是最新的offset + 1。
**HW（High Watermark）**：所有副本中最小的LEO 。

1. Follower故障

   1.  Follower发生故障后会被临时踢出ISR

   2. 这个期间Leader和Follower继续接收数据

   3.  待该Follower恢复后，Follower会读取本地磁盘记录的上次的HW，并将log文件高于HW的部分截取掉，从HW开始
      向Leader进行同步

   4. 等该Follower的LEO大于等于该Partition的HW，即Follower追上Leader之后，就可以重新加入ISR了。

      <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220225174758736.png" alt="image-20220225174758736" style="zoom:67%;" /> -->

2. Leader故障

   1.  Leader发生故障之后，会从ISR中选出一个新的Leader

   2. 为保证多个副本之间的数据一致性，其余的Follower会先将各自的log文件高于HW的部分截掉，然后从新的Leader同步
      数据。
      **注意：这只能保证副本之间的数据一致性，并不能保证数据不丢失或者不重复。**

      <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220225174906129.png" alt="image-20220225174906129" style="zoom:67%;" /> -->

### 4.3.4 分区副本分配

​	如果 kafka 服务器只有 4 个节点，那么设置 kafka 的分区数大于服务器台数，在 kafka底层如何分配存储副本呢？

1. 创建 16 分区，3 个副本

   1. 创建一个新的 topic，名称为 second

      ```bash
      
      ```

   2. 查看分区和副本情况

      ```bash
      
      ```

### 4.3.5 手动调整分区副本存储

​	在生产环境中，每台服务器的配置和性能不一致，但是Kafka只会根据自己的代码规则创建对应的分区副本，就会导致个别服务器存储压力较大。所有需要手动调整分区副本的存储。

​	需求：创建一个新的topic，4个分区，两个副本，名称为three。将 该topic的所有副本都存储到broker0和broker1两台服务器上。

​	手动调整分区副本存储的步骤如下：

1. 创建一个新的 topic，名称为 three

   ```bash
   
   ```

2. 查看分区副本存储情况

   ```bash
   
   ```

3. 创建副本存储计划（所有副本都指定存储在 broker0、broker1 中）

   ```bash
   
   ```

4. 执行副本存储计划

   ```bash
   
   ```

5. 验证副本存储计划

   ```bash
   
   ```

6. 查看分区副本存储情况

   ```bash
   
   ```

### 4.3.6 Leader Partition负载均衡

​	正常情况下，Kafka本身会自动把Leader Partition均匀分散在各个机器上，来保证每台机器的读写吞吐量都是均匀的。但是如果某 些broker宕机，会导致Leader Partition过于集中在其他少部分几台broker上，这会导致少数几台broker的读写请求压力过高，其他宕机的
broker重启之后都是follower partition，读写请求很低，造成集群负载不均衡。

| 参数名称                                | 描述                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| auto.leader.rebalance.enable            | 默认是 true。 自动 Leader Partition 平衡。生产环境中，leader 重选举的代价比较大，可能会带来性能影响，建议设置为 false 关闭。 |
| leader.imbalance.per.broker.percentage  | 默认是 10%。每个 broker 允许的不平衡的 leader的比率。如果每个 broker 超过了这个值，控制器会触发 leader 的平衡。 |
| leader.imbalance.check.interval.seconds | 默认值 300 秒。检查 leader 负载是否平衡的间隔                |

### 4.3.7 增加副本因子

​	生产环境当中，由于某个主题的重要等级需要提升，我们考虑增加副本。副本数的增加需要先制定计划，然后根据计划执行。

1. 创建 topic

   ```bash
   
   ```

2. 手动增加副本存储

   1. 创建副本存储计划（所有副本都指定存储在 broker0、broker1、broker2 中）

      ```bash
      
      ```

   2. 执行副本存储计划

      ```bash
      
      ```

## 4.4 文件存储

### 4.4.1 文件存储机制

1. Topic数据的存储机制

   Topic是逻辑上的概念，而partition是物理上的概念，每个partition对应于一个log文件，该log文件中存储的就是Producer生产的数
   据。Producer生产的数据会被不断追加到该log文件末端，为防止log文件过大导致数据定位效率低下，Kafka采取了分片和索引机制， 将每个partition分为多个segment。每个segment包括：“.index”文件、“.log”文件和.timeindex等文件。这些文件位于一个文件夹下，该文件夹的命名规则为：topic名称+分区序号，例如：first-0。

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220225184033271.png" alt="image-20220225184033271" style="zoom:67%;" /> -->

2. 思考：Topic 数据到底存储在什么位置？

   1. 启动生产者，并发送消息

      ```bash
      
      ```

   2. 查看 hadoop102（或者 hadoop103、hadoop104）的/opt/module/kafka/datas/first-1 （first-0、first-2）路径上的文件

      ```bash
      
      ```

   3. 直接查看 log 日志

      ```bash
      
      ```

   4. 通过工具查看 index 和 log 信息

      ```bash
      
      ```

3. index 文件和 log 文件详解
<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220225184145340.png" alt="image-20220225184145340" style="zoom:67%;" /> -->

   说明：日志存储参数配置

   | 参数                     | 描述                                                         |
   | ------------------------ | ------------------------------------------------------------ |
   | log.segment.bytes        | Kafka 中 log 日志是分成一块块存储的，此配置是指 log 日志划分成块的大小，默认值 1G。 |
   | log.index.interval.bytes | 默认 4kb，kafka 里面每当写入了 4kb 大小的日志（.log），然后就往 index 文件里面记录一个索引。 稀疏索引。 |

### 4.4.2 文件清理策略

Kafka 中默认的日志保存时间为 7 天，可以通过调整如下参数修改保存时间。

-  log.retention.hours，最低优先级小时，默认 7 天。 

-  log.retention.minutes，分钟。 

-  log.retention.ms，最高优先级毫秒。 

-  log.retention.check.interval.ms，负责设置检查周期，默认 5 分钟。

那么日志一旦超过了设置的时间，怎么处理呢？

Kafka 中提供的日志清理策略有 **delete** 和 **compact** 两种

1. delete 日志删除：将过期数据删除

   - log.cleanup.policy = delete 所有数据启用删除策略

     1. 基于时间：默认打开。以 segment 中所有记录中的最大时间戳作为该文件时间戳。

     2. 基于大小：默认关闭。超过设置的所有日志总大小，删除最早的 segment。

        log.retention.bytes，默认等于-1，表示无穷大。

2. compact 日志压缩

   compact日志压缩：对于相同key的不同value值，只保留最后一个版本。

   - log.cleanup.policy = compact 所有数据启用压缩策略

     <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220225184655131.png" alt="image-20220225184655131" style="zoom:67%;" /> -->

   压缩后的offset可能是不连续的，比如上图中没有6，当从这些offset消费消息时，将会拿到比这个offset大 的offset对应的消息，实际上会拿到offset为7的消息，并从这个位置开始消费。

   这种策略只适合特殊场景，比如消息的key是用户ID，value是用户的资料，通过这种压缩策略，整个消息
   集里就保存了所有用户最新的资料。

## 4.5 高效读写数据

1. Kafka 本身是分布式集群，可以采用分区技术，并行度高

2. 读数据采用稀疏索引，可以快速定位要消费的数据

3. 顺序写磁盘

   Kafka 的 producer 生产数据，要写入到 log 文件中，写的过程是一直追加到文件末端，为顺序写。官网有数据表明，同样的磁盘，顺序写能到 600M/s，而随机写只有 100K/s。这与磁盘的机械机构有关，顺序写之所以快，是因为其省去了大量磁头寻址的时间。

4. 页缓存 + 零拷贝技术

   零拷贝：Kafka的数据加工处理操作交由Kafka生产者和Kafka消费者处理。Kafka Broker应用层不关心存储的数据，所以就不用
   走应用层，传输效率高。
   PageCache页缓存：Kafka重度依赖底层操作系统提供的PageCache功 能。当上层有写操作时，操作系统只是将数据写PageCache。当读操作发生时，先从PageCache中查找，如果找不到，再去磁盘中读取。实际上PageCache是把尽可能多的空闲内存都当做了磁盘缓存来使用。

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220225185020176.png" alt="image-20220225185020176" style="zoom:67%;" /> -->

   | 参数                        | 描述                                                         |
   | --------------------------- | ------------------------------------------------------------ |
   | log.flush.interval.messages | 强制页缓存刷写到磁盘的条数，默认是 long 的最大值，9223372036854775807。一般不建议修改，交给系统自己管理。 |
   | log.flush.interval.ms       | 每隔多久，刷数据到磁盘，默认是 null。一般不建议修改，交给系统自己管理。 |



# 第五章 Kafka消费者

## 5.1 Kafka消费方式

1. pull（拉）模式：

   consumer采用从broker中主动拉取数据，**Kafka采用这种方式**。

2. push（推）模式：

   Kafka没有采用这种方式，因为由broker决定消息发送速率，很难适应所有消费者的消费速率。如下图所示，例如推送的速度50m/s，Consumer1、Consumer2就来不及处理消息。pull模式不足之处是，如 果Kafka没有数据，消费者可能会陷入循环中，一直返回空数据。

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220309192145605.png" alt="image-20220309192145605" style="zoom:67%;" /> -->

## 5.2 Kafka消费者工作流程

### 5.2.1 消费者总体工作流程

<!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220309192251123.png" alt="image-20220309192251123" style="zoom:67%;" /> -->

### 5.2.2 消费者组原理

1. Consumer Group（CG）：消费者组，由多个consumer组成。形成一个消费者组的条件，是所有消费者的groupid相同。 
   - 消费者组内每个消费者负责消费不同分区的数据，一个分区只能由一个组内消费者消费。 
   - 消费者组之间互不影响。所有的消费者都属于某个消费者组，即消费者组是逻辑上的一个订阅者。
   - 如果向消费组中添加更多的消费者，超过主题分区数量，则有一部分消费者就会闲置，不会接收任何消息。
   
2. 消费者组初始化流程

   coordinator：辅助实现消费者组的初始化和分区的分配。
   coordinator节点选择 = groupid的hashcode值 % 50（ consumer_offsets的分区数量）
   例如： groupid的hashcode值 = 1，1% 50 = 1，那么__consumer_offsets 主题的1号分区，在哪个broker上，就选择这个节点的coordinator
   作为这个消费者组的老大。消费者组下的所有的消费者提交offset的时候就往这个分区去提交offset。

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220409211649244.png" alt="image-20220409211649244" style="zoom:67%;" /> -->

   <!-- <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20220409211800920.png" alt="image-20220409211800920" style="zoom:67%;" /> -->

   ### 5.2.3 消费者重要参数

   | 参数名称                               | 描述                                                         |
   | -------------------------------------- | ------------------------------------------------------------ |
   | bootstrap.servers                      | 向 Kafka 集群建立初始连接用到的 host/port 列表               |
   | key.deserializer 和 value.deserializer | 指定接收消息的 key 和 value 的反序列化类型，一定要写全类名   |
   | group.id                               | 标记消费者所属的消费者组                                     |
   | enable.auto.commit                     | 默认值为 true，消费者会自动周期性地向服务器提交偏移量        |
   | auto.commit.interval.ms                | 如果设置了 enable.auto.commit 的值为 true， 则该值定义了消费者偏移量向 Kafka 提交的频率，默认 5s |
   | auto.offset.reset                      | 当 Kafka 中没有初始偏移量或当前偏移量在服务器中不存在（如，数据被删除了），该如何处理？ earliest：自动重置偏移量到最早的偏移量。 latest：默认，自动重置偏移量为最新的偏移量。 none：如果消费组原来的（previous）偏移量不存在，则向消费者抛异常。 anything：向消费者抛异常 |
   | offsets.topic.num.partitions           | __consumer_offsets 的分区数，默认是 50 个分区                |
   | heartbeat.interval.ms                  | Kafka 消费者和 coordinator 之间的心跳时间，默认 3s。该条目的值必须小于 session.timeout.ms ，也不应该高于session.timeout.ms 的 1/3。 |
   | session.timeout.ms                     | Kafka 消费者和 coordinator 之间连接超时时间，默认 45s。超过该值，该消费者被移除，消费者组执行再平衡 |
   | max.poll.interval.ms                   | 消费者处理消息的最大时长，默认是 5 分钟。超过该值，该消费者被移除，消费者组执行再平衡。 |
   | fetch.min.bytes                        | 默认 1 个字节。消费者获取服务器端一批消息最小的字节数。      |
   | fetch.max.wait.ms                      | 默认 500ms。如果没有从服务器端获取到一批数据的最小字节数。该时间到，仍然会返回数据。 |
   | fetch.max.bytes                        | 默认 Default: 52428800（50 m）。消费者获取服务器端一批消息最大的字节数。如果服务器端一批次的数据大于该值（50m）仍然可以拉取回来这批数据，因此，这不是一个绝对最大值。一批次的大小受 message.max.bytes （broker config）or max.message.bytes （topic config）影响。 |
   | max.poll.records                       | 一次 poll 拉取数据返回消息的最大条数，默认是 500 条。        |

## 5.3 消费者 API
### 5.3.1 独立消费者案例（订阅主题）
1. 需求：创建一个独立消费者，消费 first 主题中数据。
	注意：==在消费者 API 代码中必须配置消费者组 id==，命令行启动消费者不填写消费者组id会被自动填写随机的消费者组 id。
	
2. 代码实现

   ```java
   
   ```

3. 测试

### 5.3.2 独立消费者案例（订阅分区）
1. 需求：创建一个独立消费者，消费 first 主题 0 号分区的数据。
2. 代码实现
	```java
	
	```
3. 测试

### 5.3.3 消费者组案例

1. 需求：测试同一个主题的分区数据，只能由一个消费者组中的一个消费。

2. 代码实现

   ```java
   
   ```

3. 测试

## 5.4 生产经验——分区的分配以及再平衡
1. 一个consumer group中有多个consumer组成，一个 topic有多个partition组成，现在的问题是，到底由哪个consumer来消费哪个partition的数据。
2. Kafka有四种主流的分区分配策略： **Range、RoundRobin、Sticky、CooperativeSticky**。可以通过配置参数partition.assignment.strategy，修改分区的分配策略。默认策略是Range + CooperativeSticky。Kafka可以同时使用多个分区分配策略。

| 参数名称                      | 描述                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| heartbeat.interval.ms         | Kafka 消费者和 coordinator 之间的心跳时间，默认 3s。该条目的值必须小于 session.timeout.ms，也不应该高于session.timeout.ms 的 1/3。 |
| session.timeout.ms            | Kafka 消费者和 coordinator 之间连接超时时间，默认 45s。超过该值，该消费者被移除，消费者组执行再平衡。 |
| max.poll.interval.ms          | 消费者处理消息的最大时长，默认是 5 分钟。超过该值，该消费者被移除，消费者组执行再平衡。 |
| partition.assignment.strategy | 消 费 者 分 区 分 配 策 略 ， 默 认 策 略 是 Range +CooperativeSticky。Kafka 可以同时使用多个分区分配策略。可 以 选 择 的 策 略 包 括 ： Range 、 RoundRobin 、 Sticky 、CooperativeSticky |

### 5.4.1 Range以及再平衡

1. Range分区策略原理
2. Range 分区分配策略案例
3. Range 分区分配再平衡案例

### 5.4.2 RoundRobin 以及再平衡

1. RoundRobin 分区策略原理
2. RoundRobin 分区分配策略案例
3. RoundRobin 分区分配再平衡案例

### 5.4.3 Sticky 以及再平衡

1. 需求
2. 步骤
3. Sticky 分区分配再平衡案例

## 5.5 offset 位移

### 5.5.1 offset 的默认维护位置

1. 消费 offset 案例

### 5.5.2 自动提交 offset

1. 消费者自动提交 offset

### 5.5.3 手动提交 offset

1. 同步提交 offset
2. 异步提交 offset

### 5.5.4 指定 Offset 消费

### 5.5.5 指定时间消费

### 5.5.6 漏消费和重复消费

## 5.6 生产经验——消费者事务

## 5.7 生产经验——数据积压（消费者如何提高吞吐量）



# 第 6 章 Kafka-Eagle 监控

## 6.1 MySQL 环境准备

## 6.2 Kafka 环境准备

## 6.3 Kafka-Eagle 安装

## 6.4 Kafka-Eagle 页面操作



# 第 7 章 Kafka-Kraft 模式

## 7.1 Kafka-Kraft 架构

## 7.2 Kafka-Kraft 集群部署

## 7.3 Kafka-Kraft 集群启动停止脚本



