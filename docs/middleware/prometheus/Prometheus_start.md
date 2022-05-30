---
title: Prometheus + Grafana 搭建监控系统
date: 2022-05-29
isOriginal: true
category:
  - 中间件
tag:
  - Prometheus
  - Grafana
---

# Prometheus + Grafana 搭建监控系统

<!-- more -->

## 前言

> 本文主要记录下如何使用 Prometheus + Grafana 搭建对各种服务的性能监控，涵盖对 Prometheus、Grafana 的基本介绍，以及如何使用二者进行对 Linux、MySQL、Redis等监控。为了方便操作，所有的组件都是基于 Docker 容器进行操作。

## 概述

### Prometheus

#### 概述

> Prometheus 是云原生计算基金会的项目，是一个系统和服务监控系统。 它以给定的时间间隔从配置的目标收集指标，评估规则表达式，显示结果，并在观察到指定条件时触发警报。

Prometheus 与其他指标和监控系统的区别在于：

- 多维数据模型（由指标名称和键/值维度集定义的时间序列）
- 支持PromQL，一种强大且灵活的查询语言，可利用此维度
- 不依赖分布式存储，单个服务器节点是自治的
- 用于时间序列收集的 HTTP 拉取模型
- 通过用于批处理作业的中间网关支持推送时间序列
- 通过服务发现或静态配置发现目标
- 支持多种模式的图形和仪表板
- 支持分层和水平联合

[官网地址](https://prometheus.io/)

[Github 地址](https://github.com/prometheus/prometheus)

**架构图**

![image-20220530083721686](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220530083721686.png?versionId=CAEQKRiBgIC4xs3JiBgiIDdiNTgwYjhhMDNmNTQzODI4MTc4MmE3OGEwNzFlNDI2)



#### 安装

1. 使用原生方式安装：[下载地址](https://prometheus.io/download/)

2. 使用 Docker 安装

   1. 拉取镜像

      ```bash
      docker pull prom/prometheus:v2.35.0
      ```

   2. 启动命令

      ```bash
      docker run --name prometheus -d -p 9090:9090 prom/prometheus:v2.35.0
      ```

   3. 配置文件挂载

      - 将容器内部的配置文件拷贝到宿主机

        ```bash
        docker cp prometheus:/etc/prometheus /data/software/docker/prometheus/
        ```

      - 配置文件

        `prometheus.yml`

        ```bash
        # my global config
        global:
          scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
          evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
          # scrape_timeout is set to the global default (10s).
        
        # Alertmanager configuration
        alerting:
          alertmanagers:
            - static_configs:
                - targets:
                  # - alertmanager:9093
        
        # Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
        rule_files:
          # - "first_rules.yml"
          # - "second_rules.yml"
        
        # A scrape configuration containing exactly one endpoint to scrape:
        # Here it's Prometheus itself.
        scrape_configs:
          # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
          - job_name: "prometheus"
        
            # metrics_path defaults to '/metrics'
            # scheme defaults to 'http'.
        
            static_configs:
              - targets: ["localhost:9090"]
        ```

   4. 挂载配置文件启动容器

      ```bash
      docker run --name prometheus -d -p 9090:9090 -v /data/software/docker/prometheus/conf:/etc/prometheus  prom/prometheus:v2.35.0
      ```

   5. 测试结果：

      浏览器访问：http://ip:9090

      ![image-20220527103116929](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527103116929.png?versionId=CAEQKRiBgMDi2YGuiBgiIGE3OGE3NjcwZjg0ODRhMzU5NTgzZThmNjhkZDU2M2U1)

### Grafana

#### 概述

> Grafana 是一个可以监控，分析指标、日志，进行团队管理，提供漂亮仪表板的平台系统。无论数据存储在何处， 都可以进行查询、可视化、提醒。

[Grafana 官网地址](https://grafana.com/)

#### 安装

**原生方式安装**

[下载地址](https://grafana.com/grafana/download?pg=get&plcmt=selfmanaged-box1-cta1)

**Docker 安装**

1. 拉取镜像

   ```bash
   docker pull grafana/grafana:7.5.16
   ```

2. 启动容器

   ```bash
   docker run -d --name=grafana -p 3000:3000 grafana/grafana:7.5.16
   ```

3. 测试结果：

   浏览器访问：http://ip:3000，成功访问如下页面

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527105054209.png?versionId=CAEQKRiBgMCB3IGuiBgiIDhjZjQ3ODY3YzJkNTQ0MWNiZDA3ODVjZDNjM2JkYmM2" alt="image-20220527105054209" style="zoom: 33%;" />

   初始用户名：admin

   初始密码：admin

#### 配置 Prometheus 数据源

Grafana 展示 Promethus 监控需要配置对应的数据源，如下步骤进行配置：

1. 新建数据源

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527105545437.png?versionId=CAEQKRiBgICc2oGuiBgiIDhjMTBiY2RhY2E3NzQ5ODA5YjA1ZDQ4YjAyN2I5NDdl" alt="image-20220527105545437" style="zoom: 33%;" />

2. 选择 Prometheus

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527105627172.png?versionId=CAEQKRiBgMCv2oGuiBgiIGJkZGYxY2IyNTlhYTRmMTRhNjU3MzcwOTNkZDI3N2Jj" alt="image-20220527105627172" style="zoom: 50%;" />

3. 填写 Prometheus 地址（注意：要以 http 开头）

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527105733822.png?versionId=CAEQKRiBgIDE2oGuiBgiIDQ3NDYyNjgwNTYwMzQ5MWViNjRjYTJjYTUzZDlmNjI3" alt="image-20220527105733822" style="zoom:50%;" />

4. 保存测试

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527105916262.png?versionId=CAEQKRiBgMDS2oGuiBgiIGQ3NDNlZGUzZDM5ZDQ1MzNhMWYxY2Y0YjljYTYwODI2" alt="image-20220527105916262" style="zoom: 33%;" />



## 应用

### 搭建 Linux 服务器性能监控

#### 概述

使用 Node exporter 可以来收集 Linux 服务器相关的性能指标。 

#### 安装

1. 拉取镜像

   ```bash
   docker pull prom/node-exporter:v1.3.0
   ```

2. 启动容器

   ```bash
   docker run --name node-export -p 9100:9100 -d prom/node-exporter:v1.3.0
   ```

3. 浏览器访问：http://ip:9100， 出现如下页面：

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527145640445.png?versionId=CAEQKRiBgMD92oGuiBgiIDc2OTA3ZjY4YjhlMjRjOGFiMWQ1MjI3Y2JjNDMwZTAy" alt="image-20220527145640445" style="zoom: 80%;" />

#### 配置

1. Prometheus 配置文件 `prometheus.yml` 添加配置

   ```bash
     - job_name: "linux"
   
       # metrics_path defaults to '/metrics'
       # scheme defaults to 'http'.
       
       static_configs:
         - targets: ["ip:9100"]
   ```

2. 重启 Prometheus 容器

   ```bash
   docker restart prometheus
   ```

3. 进行测试，浏览器访问 http://ip:9090/service-discovery 出现如下页面：

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527145814259.png?versionId=CAEQKRiBgMCu24GuiBgiIDczZGZmZmZlZjJiNTQ0MTViY2JmMmYxMWE0ZTYyZDgz" alt="image-20220527145814259" style="zoom: 50%;" />

#### 展示

在 Grafana 中展示上述配置的 Node exporter， 一些漂亮的 DashBoard 模板可以在 [插件中心](https://grafana.com/grafana/dashboards/1860) 中下载

1. 下载对应 dashboard 的 JSON 文件 

   [下载地址](https://grafana.com/grafana/dashboards/1860)

2. 在 Grafana 导入对应的 json 文件

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527151416480.png?versionId=CAEQKRiBgIC33YGuiBgiIDRmZjVlY2JiYmYwNDQzNzhiODk5Njc2ZjUzYmU4ZTk1" alt="image-20220527151416480" style="zoom: 50%;" />

   也可以通过 url 或 id 进行导入

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527151900505.png?versionId=CAEQKRiBgMD83IGuiBgiIDk3YjNjZGM4MGEwODRjNDQ4MjYzZDg1NjE4ZDc0OTYw" alt="image-20220527151900505" style="zoom:50%;" />

3. 展示效果

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527152008777.png?versionId=CAEQKRiBgICA4IGuiBgiIDhhNDgyNDI0ZmE1ZjQ2M2RiMmUxNjA0YjA4ZTI2ODgy" alt="image-20220527152008777" style="zoom: 50%;" />



### 搭建 MySQL 服务器性能监控

#### 概述

使用 MySQLd exporter 可以来收集 MySQL 服务器相关的性能指标。

#### 安装

1. 拉取镜像

   ```bash
   docker pull prom/mysqld-exporter:v0.13.0
   ```

2. 启动容器

   ```bash
   docker run -d -p 9104:9104 --name mysql-exporter  -e DATA_SOURCE_NAME="username:password@(ip:3306)/" prom/mysqld-exporter:v0.13.0
   ```

3. 测试，浏览器访问：http://ip:9104

   ![image-20220527153212591](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527153212591.png?versionId=CAEQKRiBgICq3YGuiBgiIDgwZDAwZTFmNDA5NjRlMzhhNDI2N2NlNjgwNGRkY2U1)

#### 配置

1. Prometheus 配置文件 `prometheus.yml` 添加配置

   ```bash
     - job_name: "mysql"
   
       # metrics_path defaults to '/metrics'
       # scheme defaults to 'http'.
   
       static_configs:
         - targets: ["ip:9104"]
           labels:
             instance: mysql
   ```

2. 重启 Prometheus 容器

   ```bash
   docker restart prometheus
   ```

3. 进行测试，浏览器访问 http://ip:9090/service-discovery 出现如下页面：

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527153428231.png?versionId=CAEQKRiBgMDW3YGuiBgiIDVkNTM1ODIyMzc2NjQ2MjM4NDY1N2ZhMWYzMmM0ZGY1" alt="image-20220527153428231" style="zoom:50%;" />

#### 展示

在 Grafana 中展示上述配置的 MySQLd exporter， 一些漂亮的 DashBoard 模板可以在 [插件中心](https://grafana.com/grafana/dashboards/1860) 中下载

1. 下载对应 dashboard 的 JSON 文件 

   [下载地址](https://grafana.com/api/dashboards/7362/revisions/5/download)

2. 在 Grafana 导入对应的 json 文件

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527151416480.png?versionId=CAEQKRiBgIC33YGuiBgiIDRmZjVlY2JiYmYwNDQzNzhiODk5Njc2ZjUzYmU4ZTk1" alt="image-20220527151416480" style="zoom: 50%;" />

   也可以通过 url 或 id 进行导入

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527151900505.png?versionId=CAEQKRiBgMD83IGuiBgiIDk3YjNjZGM4MGEwODRjNDQ4MjYzZDg1NjE4ZDc0OTYw" alt="image-20220527151900505" style="zoom:50%;" />

3. 展示效果

   <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527160349053.png?versionId=CAEQKRiBgICf34GuiBgiIDA3YzU4ZTljZGQ3ODRlYjJhZWZmN2Y2ODZhYmYyNTk2" alt="image-20220527160349053" style="zoom: 50%;" />



### 搭建 Redis 服务器性能监控

#### 概述

使用 Redis exporter 可以来收集 Redis 服务器相关的性能指标。

#### 安装

1. 拉取镜像

   ```bash
   docker pull oliver006/redis_exporter:v1.37.0
   ```

2. 启动容器

   ```bash
   docker run -d --name redis-exporter -p 9121:9121 oliver006/redis_exporter:v1.37.0 --redis.addr redis://ip:6379 --redis.password password
   ```

3. 测试，浏览器访问：http://ip:9121

   ![image-20220527160714153](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527160714153.png?versionId=CAEQKRiBgMCw3oGuiBgiIDVhYjAxYTYyY2IxZDQ5NWI4ZWE3MzBkZjlmOWU2M2Fk)

   #### 配置

   1. Prometheus 配置文件 `prometheus.yml` 添加配置

      ```bash
        - job_name: "redis"
      
          # metrics_path defaults to '/metrics'
          # scheme defaults to 'http'.
      
          static_configs:
            - targets: ["ip:9121"]
              labels: 
                instance: redis
      ```

   2. 重启 Prometheus 容器

      ```bash
      docker restart prometheus
      ```

   3. 进行测试，浏览器访问 http://ip:9090/service-discovery 出现如下页面：

      <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527160811841.png?versionId=CAEQKRiBgMD_34GuiBgiIDU4M2MwYmQ3ZDg1NzQzMWNhMDFiMmNhYmNkNTI4OTg0" alt="image-20220527160811841" style="zoom: 33%;" />

#### 展示

在 Grafana 中展示上述配置的 Redis exporter， 一些漂亮的 DashBoard 模板可以在 [插件中心](https://grafana.com/grafana/dashboards/1860) 中下载

   1. 下载对应 dashboard 的 JSON 文件 

      [下载地址](https://grafana.com/api/dashboards/11835/revisions/1/download)

   2. 在 Grafana 导入对应的 json 文件

      <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527151416480.png?versionId=CAEQKRiBgIC33YGuiBgiIDRmZjVlY2JiYmYwNDQzNzhiODk5Njc2ZjUzYmU4ZTk1" alt="image-20220527151416480" style="zoom: 50%;" />

      也可以通过 url 或 id 进行导入

      <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527151900505.png?versionId=CAEQKRiBgMD83IGuiBgiIDk3YjNjZGM4MGEwODRjNDQ4MjYzZDg1NjE4ZDc0OTYw" alt="image-20220527151900505" style="zoom:50%;" />

   3. 展示效果

      <img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/prometheus/prometheus_start/image-20220527161130116.png?versionId=CAEQKRiBgMD234GuiBgiIGJiZDk1N2Y1Y2VkZDQ3MjI5YWMxNTA3ZGI1OTBmODM5" alt="image-20220527161130116" style="zoom:50%;" />

