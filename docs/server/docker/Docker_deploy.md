---
title: Docker部署中间件
date: 2022-05-11
category:
  - 容器
tag:
  - Docker
  - 中间件
isOriginal: true
---

# Docker 部署中间件

## Docker 安装

### 1. 卸载旧版本

```sh
sudo yum remove docker \
	docker-client \
	docker-client-latest \
	docker-common \
	docker-latest \
	docker-latest-logrotate \
	docker-logrotate \
	docker-engine
```

### 2. 安装基础依赖

```sh
yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 3. 配置 docker yum 源

```sh
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 4. 安装并启动 docker

```sh
yum install -y docker-ce-19.03.8 docker-ce-cli-19.03.8 containerd.io
```

```sh
systemctl enable docker
systemctl start docker
```

### 5. 查看 docker 版本

```sh
docker --version
```

### 6. 配置 docker 加速

```sh
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://t1gbabbr.mirror.aliyuncs.com"]
}
EOF
```

### 7. 设置开机自启动

```sh
sudo systemctl daemon-reload
sudo systemctl restart docker
```



## Docker-Compose 安装

### 1. 安装

```sh
sudo curl -L https://github.com/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```

```sh
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. 查看版本

```sh
docker-compose --version
```



## Docker 部署 Nginx

### 1. 拉取镜像

```sh
docker pull nginx:1.20
```

### 2. 运行容器

```sh
docker run --name nginx -d -p 80:80 nginx:1.20
```

### 3. 进入容器内部

```sh
docker exec -it nginx bash
```

### 4. 拷贝配置文件

```sh
docker cp nginx:/etc/nginx /data/software/docker/nginx/
```

### 5. 配置文件

`nginx.conf`

```sh
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

### 6. 数据卷挂载

```sh
docker run --name nginx -v /data/software/docker/nginx/conf:/etc/nginx -v /data/software/docker/nginx/data:/usr/share/nginx -v /data/software/docker/nginx/log:/var/log/nginx -p 80:80 -d nginx:1.20
```

**命令说明：**

- 挂载配置文件

  ```sh
  -v /data/software/docker/nginx/conf:/etc/nginx
  ```

- 挂载数据

  ```sh
  -v /data/software/docker/nginx/data:/usr/share/nginx
  ```

- 挂载日志文件

  ```sh
  -v /data/software/docker/nginx/log:/var/log/nginx
  ```



## Docker 部署 MySQL

### 1. 拉取镜像

```sh
docker pull mysql:5.7
```

### 2. 运行容器

```sh
docker run --name mysql -d -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7
```

### 3. 进入容器内部

```sh
docker exec -it mysql bash
```

### 4. 拷贝配置文件

```sh
docker cp mysql:/etc/mysql/mysql.conf.d /data/software/docker/mysql/conf/
```

### 5. 配置文件

`mysqld.cnf`

```sh
[mysqld]
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
datadir         = /var/lib/mysql
log-error       = /var/log/mysql/error.log
# By default we only accept connections from localhost
bind-address    = 0.0.0.0
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0
```

### 6. 数据卷挂载

```sh
docker run --name mysql -d -v /data/software/docker/mysql/conf:/etc/mysql/conf.d -v /data/software/docker/mysql/data:/var/lib/mysql -v /data/software/docker/mysql/log:/var/log/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7
```

**命令说明：**

- 挂载配置文件

  ```sh
  -v /data/software/docker/mysql/conf:/etc/mysql/conf.d
  ```

- 挂载数据

  ```sh
  -v /data/software/docker/mysql/data:/var/lib/mysql
  ```

- 挂载日志文件

  ```sh
  -v /data/software/docker/mysql/log:/var/log/mysql
  ```

  注意：

  `/data/software/docker/mysql/log`需要有777权限

  ```sh
  chmod 777 /data/software/docker/mysql/log/
  ```

- 指定root用户命令

  ```sh
  -e MYSQL_ROOT_PASSWORD=123456
  ```

  

## Docker 部署 Redis

### 1. 拉取镜像

```sh
docker pull redis:6.2.6
```

### 2. 运行容器

```sh
docker run --name redis -d -p 6379:6379  redis:6.2.6
```

### 3. 进入容器内部

```sh
docker exec -it redis bash
```

### 4. 配置文件

`redis.conf`

```sh
port 6379     
bind 0.0.0.0
requirepass 123456
daemonize no                               
pidfile /var/run/redis_6379.pid
logfile "/var/log/redis.log"
dbfilename dump.rdb
dir /data/
databases 16
appendonly yes
appendfilename "appendonly.aof"
# appendfsync always
appendfsync everysec
# appendfsync no
```

### 5. 数据卷挂载

```sh
docker run --name redis -d -p 6379:6379 -v /data/software/docker/redis/conf:/usr/local/etc/redis -v /data/software/docker/redis/data:/data -v /data/software/docker/redis/log:/var/log redis:6.2.6 redis-server /usr/local/etc/redis/redis.conf
```

**命令说明：**

- 挂载配置文件

  ```sh
  -v /data/software/docker/redis/conf:/usr/local/etc/redis
  ```

- 挂载数据

  ```sh
  -v /data/software/docker/redis/data:/data
  ```

- 挂载日志文件

  ```sh
   -v /data/software/docker/redis/log:/var/log/redis.log
  ```

  注意：

  `/data/software/docker/redis/log`需要有777权限

  ```sh
  chmod 777 /data/software/docker/redis/log/
  ```

- 指定配置文件

  ```sh
  redis-server /usr/local/etc/redis/redis.conf
  ```


### 6. Redis 客户端

1. 进入客户端

   ```sh
   docker exec -it redis redis-cli
   ```

2. 登录

   ```sh
   auth 123456
   ```



## Docker 部署 MongoDB

### 1. 拉取镜像

```sh
docker pull mongo:5.0.8
```

### 2. 运行容器

```sh
docker run --name mongo -d -p 27017:27017 mongo:5.0.8
```

### 3. 进入容器内部

```sh
docker exec -it mongo bash
```

### 4. 拷贝配置文件

```sh
docker cp mongo:/etc/mongod.conf.orig /data/software/docker/mongo/conf/
```

### 5. 配置文件

`mongod.conf`

```sh
# mongod.conf

# for documentation of all options, see:
#   http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: /data/db
  journal:
    enabled: true
#  engine:
#  wiredTiger:

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0


# how the process runs
processManagement:
  timeZoneInfo: /usr/share/zoneinfo

#security:

#operationProfiling:

#replication:

#sharding:

## Enterprise-Only Options:

#auditLog:

#snmp:
```

### 6. 数据卷挂载

```sh
docker run --name mongo -d -v /data/software/docker/mongo/conf:/data/configdb -v /data/software/docker/mongo/data:/data/db -v /data/software/docker/mongo/log:/var/log/mongodb -p 27017:27017 mongo:5.0.8 --config /data/configdb/mongod.conf --auth
```

**命令说明：**

- 挂载配置文件

  ```sh
  -v /data/software/docker/mongo/conf:/data/configdb
  ```

- 挂载数据

  ```sh
  -v /data/software/docker/mongo/data:/data/db
  ```

- 挂载日志文件

  ```sh
  -v /data/software/docker/mongo/log:/var/log/mongodb
  ```

  注意：

  `/data/software/docker/mongo/log`需要有777权限

  ```sh
  chmod 777 /data/software/docker/mongo/log/
  ```

- 指定配置文件

  ```sh
  --config /data/configdb/mongod.conf
  ```

- Mongo带验证

  ```sh
  --auth
  ```

### 7. MongoDB 操作

1. 进入mongo客户端

   ```sh
   docker exec -it mongo mongo
   ```

2. 进入`admin`数据库

   ```sh
   use admin
   ```

3. 创建系统用户

   ```sh
   db.createUser({ user:'root',pwd:'123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'},"readWriteAnyDatabase"]});
   ```

4. 用户登录命令

   ```sh
   db.auth('root','123456');
   ```

5. 创建指定数据库用户命令

   ```sh
   db.createUser({user:"test",pwd:"123456",roles:[{role:'dbOwner',db:'test'}]})
   ```

   

## Docker 部署 Zookeeper

### 1. 拉取镜像

```sh
docker pull zookeeper:3.6.3
```

### 2. 运行容器

```sh
docker run --name zookeeper -d -p 2181:2181 -p 2888:2888 -p 3888:3888 zookeeper:3.6.3
```

### 3. 进入容器内部

```sh
docker exec -it zookeeper bash
```

### 4. 拷贝配置文件

```sh
docker cp zookeeper:/conf/zoo.cfg /data/software/docker/zookeeper/conf/
```

### 5. 配置文件

`zoo.cfg`

```sh
dataDir=/data
dataLogDir=/datalog
tickTime=2000
initLimit=5
syncLimit=2
autopurge.snapRetainCount=3
autopurge.purgeInterval=0
maxClientCnxns=60
standaloneEnabled=false
admin.enableServer=false
server.1=localhost:2888:3888;2181
```

### 6. 数据卷挂载

```sh
docker run --name zookeeper -d -v /data/software/docker/zookeeper/conf:/conf -v /data/software/docker/zookeeper/data:/data -v /data/software/docker/zookeeper/log:/datalog -p 2181:2181 -p 2888:2888 -p 3888:3888 zookeeper:3.6.3
```

**命令说明：**

- 挂载配置文件

  ```sh
  -v /data/software/docker/zookeeper/conf:/conf
  ```

- 挂载数据

  ```sh
  -v /data/software/docker/zookeeper/data:/data
  ```

- 挂载日志文件

  ```sh
  -v /data/software/docker/zookeeper/log:/datalog
  ```


### 7. 客户端操作

1. 进入Zookeeper客户端

   ```sh
   docker exec -it zookeeper ./bin/zkCli.sh
   ```




## Docker 部署 Kafka

### 1. 拉取镜像

```sh
docker pull bitnami/kafka:2.8.1
```

### 2. 运行容器

```sh
docker run --name kafka -d -e ALLOW_PLAINTEXT_LISTENER=yes  bitnami/kafka:2.8.1 
```

### 3. 进入容器内部

```sh
docker exec -it kafka bash
```

### 4. 拷贝配置文件

```sh
docker cp kafka:/opt/bitnami/kafka/config /data/software/docker/kafka/conf/
```

### 5. 配置文件

`server.properties`

```sh
############################# Server Basics #############################

# The id of the broker. This must be set to a unique integer for each broker.
broker.id=0

############################# Socket Server Settings #############################
listeners=PLAINTEXT://0.0.0.0:9092

# Hostname and port the broker will advertise to producers and consumers. If not set, 
# it uses the value for "listeners" if configured.  Otherwise, it will use the value
# returned from java.net.InetAddress.getCanonicalHostName().
advertised.listeners=PLAINTEXT://ip:9092

# Maps listener names to security protocols, the default is for them to be the same. See the config documentation for more details
#listener.security.protocol.map=PLAINTEXT:PLAINTEXT,SSL:SSL,SASL_PLAINTEXT:SASL_PLAINTEXT,SASL_SSL:SASL_SSL

# The number of threads that the server uses for receiving requests from the network and sending responses to the network
num.network.threads=3

# The number of threads that the server uses for processing requests, which may include disk I/O
num.io.threads=8

# The send buffer (SO_SNDBUF) used by the socket server
socket.send.buffer.bytes=102400

# The receive buffer (SO_RCVBUF) used by the socket server
socket.receive.buffer.bytes=102400

# The maximum size of a request that the socket server will accept (protection against OOM)
socket.request.max.bytes=104857600


############################# Log Basics #############################

# A comma separated list of directories under which to store log files
log.dirs=/bitnami/kafka/data

# The default number of log partitions per topic. More partitions allow greater
# parallelism for consumption, but this will also result in more files across
# the brokers.
num.partitions=1

# The number of threads per data directory to be used for log recovery at startup and flushing at shutdown.
# This value is recommended to be increased for installations with data dirs located in RAID array.
num.recovery.threads.per.data.dir=1

############################# Internal Topic Settings  #############################
# The replication factor for the group metadata internal topics "__consumer_offsets" and "__transaction_state"
# For anything other than development testing, a value greater than 1 is recommended to ensure availability such as 3.
offsets.topic.replication.factor=1
transaction.state.log.replication.factor=1
transaction.state.log.min.isr=1


############################# Log Retention Policy #############################
# The minimum age of a log file to be eligible for deletion due to age
log.retention.hours=168

# A size-based retention policy for logs. Segments are pruned from the log unless the remaining
# segments drop below log.retention.bytes. Functions independently of log.retention.hours.
#log.retention.bytes=1073741824

# The maximum size of a log segment file. When this size is reached a new log segment will be created.
log.segment.bytes=1073741824

# The interval at which log segments are checked to see if they can be deleted according
# to the retention policies
log.retention.check.interval.ms=300000

############################# Zookeeper #############################
zookeeper.connect=ip:2181/kafka
# Timeout in ms for connecting to zookeeper
zookeeper.connection.timeout.ms=18000

group.initial.rebalance.delay.ms=0

auto.create.topics.enable=true

max.partition.fetch.bytes=1048576
max.request.size=1048576
sasl.enabled.mechanisms=PLAIN,SCRAM-SHA-256,SCRAM-SHA-512
sasl.mechanism.inter.broker.protocol=
```



### 6. 数据卷挂载

```sh
docker run --name kafka -d -v /data/software/docker/kafka/conf:/bitnami/kafka/config -v /data/software/docker/kafka/data:/bitnami/kafka/data -p 9092:9092 -e ALLOW_PLAINTEXT_LISTENER=yes bitnami/kafka:2.8.1
```

**命令说明：**

- 挂载配置文件

  ```sh
  -v /data/software/docker/kafka/conf:/bitnami/kafka/config
  ```

- 挂载数据

  ```sh
  -v /data/software/docker/kafka/data:/bitnami/kafka/data -p 9092:9092
  ```

  注意：

  `/data/software/docker/kafka/data`需要有777权限

  ```sh
  chmod 777 /data/software/docker/kafka/data/
  ```





## Docker 部署 RabbitMQ

### 1. 拉取镜像

```sh
docker pull rabbitmq:3.8-management
```

**说明**：镜像带management表示已经安装RabbitMQ后台管理插件。

### 2. 运行容器

```sh
docker run --name rabbitmq -d -p 5672:5672 -p 15672:15672 rabbitmq:3.8-management
```

### 3. 进入容器内部

```sh
docker exec -it rabbitmq bash
```

### 4. 拷贝配置文件

```sh
docker cp rabbitmq:/etc/rabbitmq /data/software/docker/rabbitmq/conf/
```

### 5. 配置文件

`rabbitmq.conf`

```sh
loopback_users.guest = false
listeners.tcp.default = 5672
management.tcp.port = 15672
```

### 6. 数据卷挂载

```sh
docker run --name rabbitmq -p 5672:5672 -p 15672:15672 -v /data/software/docker/rabbitmq/conf:/etc/rabbitmq -v /data/software/docker/rabbitmq/data:/var/lib/rabbitmq/mnesia -v /data/software/docker/rabbitmq/log:/var/log/rabbitmq/log -e RABBITMQ_DEFAULT_USER=guest -e RABBITMQ_DEFAULT_PASS=123456  -d rabbitmq:3.8-management
```

**命令说明：**

- 挂载配置文件

  ```sh
  -v /data/software/docker/rabbitmq/conf:/etc/rabbitmq
  ```

- 挂载数据

  ```sh
  -v /data/software/docker/rabbitmq/data:/var/lib/rabbitmq/mnesia
  ```

- 挂载日志文件

  ```sh
  -v /data/software/docker/rabbitmq/log:/var/log/rabbitmq/log
  ```

- 指定后台管理界面的登录用户名、密码

  ```sh
  -e RABBITMQ_DEFAULT_USER=guest -e RABBITMQ_DEFAULT_PASS=123456
  ```



## Docker 部署 Elastic Search

### 安装Elastic Search

#### 1. 拉取镜像

```sh
docker pull elasticsearch:6.8.22
```

#### 2. 运行容器

```sh
docker run --name elasticsearch -d elasticsearch:6.8.22
```

启动报错：

```sh
[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
```

解决方法：

1. 在centos虚拟机中，修改配置sysctl.conf

   ```sh
   vim /etc/sysctl.conf
   ```

2. 加入如下配置

   ```sh
   vm.max_map_count=262144
   ```

3. 启用配置

   ```sh
   sysctl -p
   ```

#### 3. 进入容器内部

```sh
docker exec -it elasticsearch bash
```

#### 4. 拷贝配置文件

```sh
docker cp elasticsearch:/usr/share/elasticsearch/config/ /data/software/docker/elasticsearch/conf/
```

#### 5. 配置文件

`elasticsearch.yml`

```sh
cluster.name: "docker-cluster"
network.host: 0.0.0.0
```

**说明：**

注意指定`jvm.options`中的`-Xms512m` `-Xmx512m`参数，分配内存应与服务器环境适配，设置内存过大，会导致系统崩溃。

#### 6. 数据卷挂载

```sh
docker run --name elasticsearch -d -p 9200:9200 -p 9300:9300 -v /data/software/docker/elasticsearch/conf:/usr/share/elasticsearch/config -v /data/software/docker/elasticsearch/data:/usr/share/elasticsearch/data -v /data/software/docker/elasticsearch/log:/usr/share/elasticsearch/logs  elasticsearch:6.8.22
```

**命令说明：**

- 挂载配置文件

  ```sh
  -v /data/software/docker/elasticsearch/conf:/usr/share/elasticsearch/config
  ```

- 挂载数据

  ```sh
  -v /data/software/docker/elasticsearch/data:/usr/share/elasticsearch/data
  ```

- 挂载日志文件

  ```sh
  -v /data/software/docker/elasticsearch/log:/usr/share/elasticsearch/logs
  ```

  注意：

  `/data/software/docker/elasticsearch/data`需要有777权限

  ```sh
  chmod 777 /data/software/docker/elasticsearch/data/
  ```

    `/data/software/docker/elasticsearch/log`需要有777权限

  ```sh
  chmod 777 /data/software/docker/elasticsearch/log/
  ```

  

### 安装 Kibana

#### 1. 拉取镜像

```sh
docker pull kibana:6.8.22
```

#### 2. 运行容器

```sh
docker run -d --name kibana -e ELASTICSEARCH_URL=http://ip:9200 -p 5601:5601 kibana:6.8.22
```

#### 3. 进入容器内部

```sh
docker exec -it kibana bash
```

#### 4. 拷贝配置文件

```sh
docker cp kibana:/usr/share/kibana/config/ /data/software/docker/kibana/conf/
```

#### 5. 配置文件

`kibana.yml`

```sh
server.name: kibana
server.host: "0"
elasticsearch.hosts: [ "http://ip:9200" ]
xpack.monitoring.ui.container.elasticsearch.enabled: true
```

#### 6. 数据卷挂载

```sh
docker run -d --name kibana -v /data/software/docker/kibana/conf:/usr/share/kibana/config -v /data/software/docker/kibana/data:/usr/share/kibana/data -p 5601:5601 kibana:6.8.22
```

**命令说明：**

- 挂载配置文件

  ```sh
   -v /data/software/docker/kibana/conf:/usr/share/kibana/config
  ```

- 挂载数据

  ```sh
   /data/software/docker/kibana/data:/usr/share/kibana/data
  ```

  注意：

  `/data/software/docker/kibana/data`需要有777权限

  ```sh
  chmod 777 /data/software/docker/kibana/data/
  ```
