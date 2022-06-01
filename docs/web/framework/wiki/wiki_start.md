---
title: 基于 Wiki.js 搭建知识库系统
date: 2022-06-01
isOriginal: true
category:
  - Wiki.js
tag:
  - 知识库
---

# 基于 Wiki.js 搭建知识库系统

<!-- more -->

## 前言

> 本文介绍如何使用 Wiki.js 搭建知识库系统。

[Wiki.js 官网](https://docs.requarks.io/)

## 安装

### 前提准备

Wiki.js 几乎可以在任何支持 Node.js 的系统上运行。它可以运行在 Linux 、Windows、macOS等操作系统上，也可以运行在 Docker 、Kubernetes 等容器上。

- CPU 推荐 2核或者更多
- 内存 至少 1G 
- 存储 至少 1G
- 数据库 推荐使用 PostgreSQL，MySQL/MariaDB/MS SQL Server/SQLite 也支持使用

### Node 安装

[Node.js 中文网](http://nodejs.cn/)

1. 下载

   ```bash
   wget https://npmmirror.com/mirrors/node/v16.15.0/node-v16.15.0-linux-x64.tar.xz
   ```

2. 解压

   ```bash
   tar -xf node-v16.15.0-linux-x64.tar.xz 
   ```

3. 换名

   ```bash
   mv node-v16.15.0-linux-x64/ node
   ```

4. 建立软连接

   ```bash
   ln -s /data/software/node/bin/node /usr/local/bin/
   ```

   也可以使用配置环境变量的方式

5. 查看版本

   ```bash
    node -v
   ```

### PostgreSQL 安装

[PostgreSQL 官网](https://www.postgresql.org/)

1. 安装

   ```bash
   yum install postgresql-server
   ```

2. 初始化数据库

   ```bash
   cd /usr/bin/
   ```

   ```bash
   ./postgresql-setup initdb
   ```

3. 加入 systemctl 服务设置开机自启动

   ```bash
   systemctl enable postgresql.service
   ```

4. 启动

   ```bash
   systemctl start postgresql.service
   ```

5. 进入客户端命令

   ```bash
   sudo -u postgres plsql
   ```

6. 修改密码

   ```bash
   ALTER USER postgres WITH PASSWORD 'postgres';
   ```

7. 数据存储

   PostgreSQL 存储文件、配置文件默认在 `/var/lib/pgsql/data/` 下

8. 开启远程访问权限

   编辑配置文件 `postgresql.conf`

   ```bash
   vim postgresql.conf 
   ```

   修改配置文件中的监听地址

   ```bash
   listen_addresses = '*'  
   ```

   在配置文件同级目录下有个文件 `pg_hba.conf` 最后面添加

   ```bash
   host     all             postgres        0.0.0.0/0               trust
   ```

   重启 postgresql 服务

   ```bash
   systemctl restart postgresql.service
   ```

   用 Navicat 成功连接

   ![image-20220601100137277](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220601100137277.png?versionId=CAEQKRiBgMDZ8bj0iBgiIDZkMjA5ZDYzZjBjYjQ0NDI5OGNjM2RhODZkNGRmMmZm)

9. 客户端操作命令

   进入客户端

   ```bash
   sudo -u postgres plsql
   ```

   查看数据库

   ```bash
   \l
   ```

   新建数据库

   ```bash
   create database wiki;
   ```

   退出客户端

   ```bash
   \q
   ```



### Wiki.js 安装

1. 下载

    ```bash
    wget https://github.com/Requarks/wiki/releases/latest/download/wiki-js.tar.gz
    ```

2. 解压缩
    ```bash
    mkdir wiki
    tar xzf wiki-js.tar.gz -C ./wiki
    cd ./wiki
    ```
    
3. 修改配置文件

    配置文件改名

    ```bash
    mv config.sample.yml config.yml
    ```

    配置数据库信息（注意：数据库要先创建）

    ```bash
    db:
      type: postgres
    
      # PostgreSQL / MySQL / MariaDB / MS SQL Server only:
      host: localhost
      port: 5432
      user: postgres
      pass: 123456
      db: wiki
      ssl: false
    ```

4. 启动服务

    在 wiki 目录下

    ```bash
    node server
    ```

5. 加入 systemctl 服务

    在 `/etc/systemd/system/` 下新建 `wiki.service` 文件

    ```bash
    [Unit]
    Description=Wiki.js
    After=network.target
    
    [Service]
    Type=simple
    ExecStart=/usr/local/bin/node server
    Restart=always
    # Consider creating a dedicated user for Wiki.js here:
    User=nobody
    Environment=NODE_ENV=production
    WorkingDirectory=/data/software/wiki # 这个要指定你 wiki 的安装地址
    
    [Install]
    WantedBy=multi-user.target
    ```

    重新加载

    ```bash
    systemctl daemon-reload
    ```

6. 设置开机自启动

    ```bash
    systemctl enable wiki
    ```

7. 启动服务

    ```bash
    systemctl start wiki
    ```

8. 查看服务状态

    ```bash
    systemctl status wiki
    ```

    如果没有启动成功，可通过如下命令查看日志信息

    ```bash
    journalctl -u wiki
    ```



## 使用

### 配置管理员

Wiki.js 服务成功启动后，访问 http://ip:3000，出现如下页面：

![image-20220531164034350](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220531164034350.png?versionId=CAEQKRiBgICS.7j0iBgiIDEwODYyODdkZWE2MDQ5NWZhNDk1YzViODBlOGJjYjY1)

配置管理员邮箱地址，密码，网站地址，后进行安装，稍等一会，就会出现如下页面：

![image-20220601090432609](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220601090432609.png?versionId=CAEQKRiBgMDr9bj0iBgiIGUzMWU5NWQwZmQ2ZTRhMTI4NDEwYjRiNjhjZWQ5ODJj)

### 配置中文

Wiki.js 默认使用英语，可配置中文，方便操作。

1. 首先选择 后台管理

   ![image-20220601102257106](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220601102257106.png?versionId=CAEQKRiBgIC29Lj0iBgiIDYzMmRkZWI5M2QyMTRkMmFiNzc3YzEwNTE3OGExMGRm)

2. 安装中文简体
   ![image-20220601090536579](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220601090536579.png?versionId=CAEQKRiBgIDe9rj0iBgiIGY4NjhjZWQ3ZDc4OTQwZGY5YWI1ODFjODMzZGJhYzZi)

3. 切换到中文简体
   ![image-20220601090632689](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220601090632689.png?versionId=CAEQKRiBgIDu.bj0iBgiIDRiZjFlNmY0YTdhNTQyMjBhYmQ0MmViNDMyYTY4MmJm)

### 创建页面

1. 选择 创建主页

   ![image-20220601102542863](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220601102542863.png?versionId=CAEQKRiBgIDo87j0iBgiIGE1ZDBkZDc5ZDE5ZjRkNGRhZTQ4ZmY4NzZhYTNlNTJj)

2. Wiki.js 支持多种方式的编辑器，可以自行选择，有的还未开放
   ![image-20220601090719054](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220601090719054.png?versionId=CAEQKRiBgICH9bj0iBgiIGYyNzIwMzczYjlkZDQ3NTc4ODEzZTMwNDYwMzczMmNj)

3. 效果展示

   ![image-20220601102850608](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/web/framework/wiki/Wiki_start/image-20220601102850608.png?versionId=CAEQKRiBgMCX97j0iBgiIDJjOTNkMjM1MDViMzRjMWVhYjgwMmFhMTJhOGZiMzY4)

   
