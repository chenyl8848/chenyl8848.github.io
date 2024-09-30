---
title: Docker 万字入门教程
date: 2022-04-10
category:
  - 容器
tag:
  - Docker
star: true
article: true
---

# Docker 万字入门教程

<!-- more -->

>[学习视频【编程不良人】](https://www.bilibili.com/video/BV1ZT4y1K75K?spm_id_from=333.999.0.0)
>
>[官方文档地址](https://www.docker.com/get-started)
>
>[中文参考手册](https://docker_practice.gitee.io/zh-cn/)

-----

## 1. Docker 简介

### 1.1 官方定义

**官方介绍**：

- We have a complete container solution for you - no matter who you are and where you are on your containerization journey.
- 翻译：我们为你提供了一个完整的容器解决方案，不管你是谁。不管你在哪，你都可以开始容器的的旅程。

**官方定义**：Docker 是一个容器技术。

- 官网首页

![image-20201220213306128](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20201220213306128.png)

![image-20201220214210994](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20201220214210994.png)

### 1.2 Docker 的起源

Docker 最初是 dotCloud 公司创始人 Solomon Hykes 在法国期间发起的一个公司内部项目，它是基于 dotCloud 公司多年云服务技术的一次革新，并于 2013 年 3 月以 Apache2.0 授权协议开源，主要项目代码在 GitHub 上进行维护。Docker 项目后来还加入了 Linux 基金会，并成立推动开放容器联盟(OCI).

Docker 自开源后受到广泛的关注和讨论，由于 Docker 项目的火爆，在 2013 年底，dotCloud 公司决定改名为 Docker. Docker 最初是在 Ubuntu 12.04 上开发实现的；Red Hat 则从 RHEL 6.5 开始对 Docker 进行支持；Google 也在其 PaaS 产品中广泛应用 Docker.

Docker 使用 Google 公司推出的 Go 语言进行开发实现，基于 Linux 内核的 cgroup，namespace，以及 OverlayFS 类的 Union FS 等技术，对进程进行封装隔离，属于操作系统层面的虚拟化技术。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。

### 1.3 Docker 的优势

- 在开发的时候，在本机测试环境可以跑，生产环境跑不起来。

  这里我们拿 Java Web 应用程序举例，我们一个 Java Web 应用程序涉及很多东西，比如 JDK、Tomcat、MySQL 等软件环境。当这些其中某一项版本不一致的时候，可能就会导致应用程序跑不起来这种情况。Docker 则将程序以及使用软件环境直接打包在一起，无论在那个机器上保证了环境一致。

  **优势1：一致的运行环境，更轻松的迁移。**

- 服务器自己的程序挂了，结果发现是别人程序出了问题把内存吃完了，自己程序因为内存不够就挂了。

  这种也是一种比较常见的情况，如果你的程序重要性不是特别高的话，公司基本上不可能让你的程序独享一台服务器的，这时候你的服务器就会跟公司其他人的程序共享一台服务器，所以不可避免地就会受到其他程序的干扰，导致自己的程序出现问题。Docker 就很好解决了环境隔离的问题，别人程序不会影响到自己的程序。

  **优势2：对进程进行封装隔离，容器与容器之间互不影响，更高效的利用系统资源。**

- 公司要弄一个活动，可能会有大量的流量进来，公司需要再多部署几十台服务器。

  在没有 Docker 的情况下，要在几天内部署几十台服务器，这对运维来说是一件非常折磨人的事，而且每台服务器的环境还不一定一样，就会出现各种问题，最后部署地头皮发麻。用 Docker 的话，我只需要将程序打包到镜像，你要多少台服务，我就跑多少容器，极大地提高了部署效率。

  **优势3：通过镜像复制 N 多个环境一致容器。**

### 1.4 Docker 和虚拟机的区别

关于 Docker 与虚拟机的区别，在网上找到的一张图，非常直观形象地展示出来，话不多说，直接上图。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20201220222456675.png)

**比较上面两张图，我们发现虚拟机是携带操作系统，本身很小的应用程序却因为携带了操作系统而变得非常大，很笨重**。Docker是不携带操作系统的，所以 Docker 的应用就非常的轻巧。另外在调用宿主机的 CPU、磁盘等等这些资源的时候，拿内存举例，虚拟机是利用 Hypervisor 去虚拟化内存，整个调用过程是**虚拟内存->虚拟物理内存->真正物理内存**，但是 Docker 是利用 Docker Engine 去调用宿主的的资源，这时候过程是**虚拟内存->真正物理内存**。

|             | 传统虚拟机                           | Docker容器                            |
| ----------- | ------------------------------------ | ------------------------------------- |
| 磁盘占用    | 几个GB到几十个GB左右                 | 几十MB到几百MB左右                    |
| CPU内存占用 | 虚拟操作系统非常占用CPU和内存        | Docker引擎占用极低                    |
| 启动速度    | （从开机到运行项目）几分钟           | （从开启容器到运行项目）几秒          |
| 安装管理    | 需要专门的运维技术                   | 安装、管理方便                        |
| 应用部署    | 每次部署都费时费力                   | 从第二次部署开始轻松简捷              |
| 耦合性      | 多个应用服务安装到一起，容易互相影响 | 每个应用服务一个容器，达成隔离        |
| 系统依赖    | 无                                   | 需求相同或相似的内核，目前推荐是Linux |

-----

## 2. Docker 的安装

### 2.1 安装 Docker(centos7.x)

- 卸载原始 Docker
```bash
sudo yum remove docker \
                docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-engine
```

- 安装 Docker 依赖
```bash
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```

- 设置 Docker 的 yum 源
```bash
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

- 安装最新版的 Docker
```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

- 指定版本安装 Docker
```bash
yum list docker-ce --showduplicates | sort -r

# sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
sudo yum install docker-ce-18.09.5-3.el7 docker-ce-cli-18.09.5-3.el7 containerd.io
```

- 启动 Docker
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

- 关闭 Docker
```bash
sudo systemctl stop docker
```

- 测试 Docker 是否安装
```bash
$ sudo docker --version
```

### 2.2 bash 安装(通用所有平台)

在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，CentOS 系统上可以使用这套脚本安装。另外可以通过 `--mirror` 选项使用国内源进行安装。

执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 的稳定(stable)版本安装在系统中。
```bash
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
```

- 启动 Docker
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

- 创建 Docker 用户组
```bash
sudo groupadd docker
```

- 将当前用户加入 Docker 组
```bash
sudo usermod -aG docker $USER
```

- 测试 Docker 是否安装
```bash
docker --version
```

-----

## 3. Docker 的核心架构

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200404111908085-0291323.png)

- `镜像`：一个镜像代表一个应用环境，他是一个只读的文件，如 MySQL 镜像、Tomcat 镜像、Nginx 镜像等
- `容器`：镜像每次运行之后就是产生一个容器，就是正在运行的镜像，特点就是可读可写
- `仓库`：用来存放镜像的位置，类似于 Maven 仓库，也是镜像下载和上传的位置
- `dockerFile`Docker 生成镜像配置文件，用来书写自定义镜像的一些配置
- `tar`：一个对镜像打包的文件，日后可以还原成镜像

-----

## 4. Docker 配置阿里镜像加速服务

### 4.1 Docker 运行流程

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200404120356784.png)

### 4.2 Docker 配置阿里云镜像加速

- 访问阿里云登录自己账号查看 Docker 镜像加速服务，并依照如下命令进行修改
```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://lz2nib3q.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

- 验证 Docker 的镜像加速是否生效
```bash
[root@localhost ~]# docker info
		..........
    127.0.0.0/8
   Registry Mirrors:
    'https://lz2nib3q.mirror.aliyuncs.com/'
   Live Restore Enabled: false
   Product License: Community Engine
```

-----

## 5. Docker 的入门应用

> docker run hello-world

```bash
[root@localhost ~]# docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

----

## 6. Docker 常用命令

### 6.1 辅助命令

```markdown
# 1.安装完成辅助命令
  docker version	--------------------------	查看 Docker 的信息
  docker info		--------------------------	查看更详细的信息
  docker --help	--------------------------	帮助命令
```

### 6.2 Images 镜像命令

```markdown
# 1.查看本机中所有镜像
  docker images	--------------------------	列出本地所有镜像
		-a			列出所有镜像（包含中间映像层）
  	-q			只显示镜像id

# 2.搜索镜像
	docker search [options] 镜像名	-------------------	去 dockerhub 上查询当前镜像
		-s 指定值		列出收藏数不少于指定值的镜像
  	--no-trunc	  显示完整的镜像信息

# 3.从仓库下载镜像
	docker pull 镜像名[:TAG|@DIGEST]	----------------- 下载镜像

# 4.删除镜像
	docker rmi 镜像名	--------------------------  删除镜像
		-f		强制删除
```

### 6.3 Contrainer 容器命令

```markdown
# 1.运行容器
	docker run 镜像名	--------------------------	镜像名新建并启动容器
    --name 					别名为容器起一个名字
    -d							启动守护式容器（在后台启动容器）
    -p 							映射端口号：原始端口号		 指定端口号启动

	例：docker run -it --name myTomcat -p 8888:8080 tomcat
      docker run -d --name myTomcat -P tomcat

# 2.查看运行的容器
	docker ps					--------------------------	列出所有正在运行的容器
    -a			正在运行的和历史运行过的容器
    -q			静默模式，只显示容器编号

# 3.停止|关闭|重启容器
	docker start   容器名字或者容器id  --------------- 开启容器
	docker restart 容器名或者容器id    --------------- 重启容器
	docker stop  容器名或者容器id 	    ------------------ 正常停止容器运行
	docker kill  容器名或者容器id      ------------------ 立即停止容器运行

# 4.删除容器
	docker rm -f 容器id和容器名     
	docker rm -f $(docker ps -aq)		--------------------------	删除所有容器

# 5.查看容器内进程
	docker top 容器id或者容器名 ------------------ 查看容器内的进程

# 6.查看查看容器内部细节
	docker inspect 容器id 		------------------ 查看容器内部细节

# 7.查看容器的运行日志
	docker logs [OPTIONS] 容器id或容器名	------------------ 查看容器日志
    -t			 加入时间戳
    -f			 跟随最新的日志打印
    --tail 	 数字	显示最后多少条

# 8.进入容器内部
	docker exec [options] 容器id 容器内命令 ------------------ 进入容器执行命令
		-i		以交互模式运行容器，通常与-t一起使用
    -t		分配一个伪终端    shell窗口   bash 

# 9.容器和宿主机之间复制文件
	docker cp 文件|目录 容器id:容器路径           -----------------   将宿主机复制到容器内部
	docker cp 容器id:容器内资源路径 宿主机目录路径  -----------------   将容器内资源拷贝到主机上

# 10.数据卷(volum)实现与宿主机共享目录
	docker run -v 宿主机的路径|任意别名:/容器内的路径 镜像名

  注意: 
      1. 如果是宿主机路径必须是绝对路径，宿主机目录会覆盖容器内目录内容
      2. 如果是别名则会在 Docker 运行容器时自动在宿主机中创建一个目录，并将容器目录文件复制到宿主机中

# 11.打包镜像
		docker save 镜像名 -o  名称.tar

# 12.载入镜像
		docker load -i 名称.tar

# 13.容器打包成新的镜像
	  docker commit -m "描述信息" -a "作者信息" （容器id或者名称）打包的镜像名称:标签
```

----

## 7. Docker 的镜像原理

### 7.1 镜像是什么？

镜像是一种轻量级的，可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需的所有内容，包括代码、运行时所需的库、环境变量和配置文件。

### 7.2 为什么一个镜像会那么大？

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200404142950068.png)

> **镜像就像是花卷**。

**UnionFS（联合文件系统）**：Union 文件系统是一种分层，轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下。

Union 文件系统是 Docker 镜像的基础。这种文件系统特性：就是一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录。	

### 7.3 Docker 镜像原理

> **Docker 的镜像实际是由一层一层的文件系统组成**。

- bootfs（boot file system）主要包含 bootloader 和 kernel. bootloader 主要是引导加载 kernel，Linux 刚启动时会加载 bootfs 文件系统。在 Docker 镜像的最底层就是 bootfs.这一层与 Linux/Unix 系统是一样的，包含 boot 加载器（bootloader）和内核(kernel).当 boot 加载完后，整个内核就都在内存中了，此时内存的使用权已由 bootfs 转交给内核，此时会卸载 bootfs.

- rootfs（root file system），在 bootfs 之上，包含的就是典型的 Linux 系统中的 /dev、/proc、/bin、/etc 等标准的目录和文件。rootfs 就是各种不同的操作系统发行版，比如 Ubuntu/CentOS 等等。

- 我们平时安装进虚拟机的 Centos都有 1 到几个GB，为什么 Docker 这里才 200MB？对于一个精简的 OS,rootfs 可以很小，只需要包括最基本的命令、工具和程序库就可以了，因为底层直接使用 Host 的 Kernal,自己只需要提供 rootfs 就行了。由此可见不同的 Linux 发行版，他们的 bootfs 是一致的，rootfs 会有差别，因此不同的发行版可以共用 bootfs.

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/1567585172(1).jpg)

### 7.4 为什么 Docker 镜像要采用这种分层结构呢?

> **最大的一个好处就是资源共享**。

比如：有多个镜像都是从相同的 base 镜像构建而来的，那么宿主机只需在磁盘中保存一份 base 镜像。同时内存中也只需要加载一份 base 镜像，就可以为所有容器服务了，而且镜像的每一层都可以被共享。

Docker 镜像都是只读的。当容器启动时，一个新的可写层被加载到镜像的顶部。这一层通常被称为容器层，容器层之下都叫镜像层。

----

## 8.Docker 安装常用服务

### 8.1 安装 MySQL

```markdown
# 1.拉取mysql镜像到本地
	docker pull mysql:tag (tag不加默认最新版本)
	
# 2.运行mysql服务
	docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:tag  						  --没有暴露外部端口外部不能连接
	docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d  mysql:tag  --没有暴露外部端口

# 3.进入mysql容器
	docker exec -it 容器名称|容器id bash

# 4.外部查看mysql日志
	docker logs 容器名称|容器id

# 5.使用自定义配置参数
	docker run --name mysql -v /root/mysql/conf.d:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=root -d mysql:tag

# 6.将容器数据位置与宿主机位置挂载保证数据安全
	docker run --name mysql -v /root/mysql/data:/var/lib/mysql -v /root/mysql/conf.d:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:tag

# 7.通过其他客户端访问 如在window系统|macos系统使用客户端工具访问
	
# 8.将 MySQL 数据库备份为 SQL 文件
	docker exec mysql|容器id sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > /root/all-databases.sql  --导出全部数据
	docker exec mysql sh -c 'exec mysqldump --databases 库表 -uroot -p"$MYSQL_ROOT_PASSWORD"' > /root/all-databases.sql  --导出指定库数据
	docker exec mysql sh -c 'exec mysqldump --no-data --databases 库表 -uroot -p"$MYSQL_ROOT_PASSWORD"' > /root/all-databases.sql  --导出指定库数据不要数据

# 9.执行 SQL 文件到 MySQL 中
	docker exec -i mysql sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < /root/xxx.sql
```

### 8.2 安装 Redis

```markdown
# 1.在 Docker Hub 搜索 Redis 镜像
	docker search redis

# 2.拉取 Redis 镜像到本地
	docker pull redis

# 3.启动 Redis 服务运行容器
	docker run --name redis -d redis:tag (没有暴露外部端口)
	docker run --name redis -p 6379:6379 -d redis:tag (暴露外部宿主机端口为6379进行连接) 

# 4.查看启动日志
	docker logs -t -f 容器id|容器名称

# 5.进入容器内部查看
	docker exec -it 容器id|名称 bash  

# 6.加载外部自定义配置启动redis容器
	默认情况下 Redis 官方镜像中没有 redis.conf 配置文件，需要去官网下载指定版本的配置文件
	1. wget http://download.redis.io/releases/redis-5.0.8.tar.gz  下载官方安装包
	2. 将官方安装包中配置文件进行复制到宿主机指定目录中如 /root/redis/redis.conf 文件
	3. 修改需要自定义的配置
		 bind 0.0.0.0 开启远程权限
		 appenonly yes 开启aof持久化
	4. 加载配置启动
	docker run --name redis -v /root/redis:/usr/local/etc/redis -p 6379:6379 -d redis redis-server /usr/local/etc/redis/redis.conf  

# 7.将数据目录挂在到本地保证数据安全
	docker run --name redis -v /root/redis/data:/data -v /root/redis/redis.conf:/usr/local/etc/redis/redis.conf -p 6379:6379 -d redis redis-server 					/usr/local/etc/redis/redis.conf  
```

### 8.3 安装 Nginx

```markdown
# 1.在 Docker Hub 搜索 Nginx
	docker search nginx

# 2.拉取 Nginx 镜像到本地
	[root@localhost ~]# docker pull nginx
    Using default tag: latest
    latest: Pulling from library/nginx
    afb6ec6fdc1c: Pull complete 
    b90c53a0b692: Pull complete 
    11fa52a0fdc0: Pull complete 
    Digest: sha256:30dfa439718a17baafefadf16c5e7c9d0a1cde97b4fd84f63b69e13513be7097
    Status: Downloaded newer image for nginx:latest
    docker.io/library/nginx:latest

# 3.启动 Nginx 容器
		docker run -p 80:80 --name nginx01 -d nginx

# 4.进入容器
		docker exec -it nginx01 /bin/bash
		查找目录:  whereis nginx
		配置文件:  /etc/nginx/nginx.conf

# 5.复制配置文件到宿主机
		docker cp nginx01(容器id|容器名称):/etc/nginx/nginx.conf 宿主机名录

# 6.挂在nginx配置以及html到宿主机外部
		docker run --name nginx02 -v /root/nginx/nginx.conf:/etc/nginx/nginx.conf -v /root/nginx/html:/usr/share/nginx/html -p 80:80 -d nginx		
```

### 8.4 安装 Tomcat

```markdown
# 1.在 Docker Hub 搜索 Tomcat
	docker search tomcat

# 2.下载 Tomcat 镜像
	docker pull tomcat

# 3.运行 Tomcat 镜像
	docker run -p 8080:8080 -d --name mytomcat tomcat

# 4.进入 Tomcat 容器
	docker exec -it mytomcat /bin/bash

# 5.将 webapps 目录挂载在外部
	docker run -p 8080:8080 -v /root/webapps:/usr/local/tomcat/webapps -d --name mytomcat tomcat

```

### 8.5 安装 MongoDB 数据库

```markdown
# 1.运行 MongoDB
	docker run -d -p 27017:27017 --name mymongo mongo  ---无须权限
	docker logs -f mymongo --查看mongo运行日志

# 2.进入 MongoDB 容器
	docker exec -it mymongo /bin/bash
	直接执行 mongo 命令进行操作

# 3.常见具有权限的容器
	docker run --name  mymongo  -p 27017:27017  -d mongo --auth

# 4.进入容器配置用户名密码
	mongo
  # 选择admin库
	use admin
  # 创建用户,此用户创建成功,则后续操作都需要用户认证
	db.createUser({user:"root",pwd:"root",roles:[{role:'root',db:'admin'}]})
	exit

# 5.将 MongoDB 中数据目录映射到宿主机中
	docker run -d -p 27017:27017 -v /root/mongo/data:/data/db --name mymongo mongo 
```

### 8.6 安装 ElasticSearch

> 注意：**需要调高 JVM 线程数限制数量**。

#### 0. 拉取镜像运行 ElasticSearch

```markdown
# 1.拉取 ElasticSearch 镜像
	docker pull elasticsearch:6.4.2

# 2.查看 Docker 镜像
	docker images

# 3.运行 ElasticSearch 镜像
	docker run -p 9200:9200 -p 9300:9300 elasticsearch:6.4.2
```

若启动出现如下错误，按照如下步骤修改。
- ![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200602184321790.png)

#### 1. 预先配置

```markdown
# 1.在 CentOS 虚拟机中，修改配置 sysctl.conf
	vim /etc/sysctl.conf

# 2.加入如下配置
	vm.max_map_count=262144 

# 3.启用配置
	sysctl -p
	注：这一步是为了防止启动容器时，报出如下错误：bootstrap checks failed max virtual memory areas vm.max_map_count [65530] likely too low, increase to at least [262144]
```

#### 2. 启动 EleasticSearch 容器

```markdown
# 0.复制容器中 data 目录到宿主机中
	docker cp 容器id:/usr/share/share/elasticsearch/data /root/es

# 1.运行 EleasticSearch 容器，指定 JVM 内存大小并指定 IK 分词器位置
	docker run -d --name es -p 9200:9200 -p 9300:9300 -e ES_JAVA_OPTS="-Xms128m -Xmx128m" -v /root/es/plugins:/usr/share/elasticsearch/plugins -v /root/es/data:/usr/share/elasticsearch/data elasticsearch:6.4.2
```

#### 3.安装 IK 分词器

```markdown
# 1.下载对应版本的 IK 分词器
	wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v6.4.2/elasticsearch-analysis-ik-6.4.2.zip

# 2.解压到 plugins 文件夹中
	yum install -y unzip
	unzip -d ik elasticsearch-analysis-ik-6.4.2.zip

# 3.添加自定义扩展词和停用词
	cd plugins/elasticsearch/config
	vim IKAnalyzer.cfg.xml
	<properties>
		<comment>IK Analyzer 扩展配置</comment>
		<!--用户可以在这里配置自己的扩展字典 -->
		<entry key="ext_dict">ext_dict.dic</entry>
		<!--用户可以在这里配置自己的扩展停止词字典-->
		<entry key="ext_stopwords">ext_stopwords.dic</entry>
	</properties>

# 4.在 IK 分词器目录下 config 目录中创建 ext_dict.dic 文件，编码一定要为 UTF-8 才能生效
	vim ext_dict.dic 加入扩展词即可

# 5. 在 IK 分词器目录下 config 目录中创建 ext_stopword.dic 文件 
	vim ext_stopwords.dic 加入停用词即可

# 6.重启容器生效
	docker restart 容器id

# 7.将此容器提交成为一个新的镜像
	docker commit -a="xiaochen" -m="es with IKAnalyzer" 容器id xiaochen/elasticsearch:6.4.2
```

#### 4. 安装 Kibana

```markdown
# 1.下载 Kibana 镜像到本地
	docker pull kibana:6.4.2

# 2.启动 Kibana 容器
	docker run -d --name kibana -e ELASTICSEARCH_URL=http://10.15.0.3:9200 -p 5601:5601 kibana:6.4.2
```

----

## 10. Docker 中出现如下错误解决方案

```bash
[root@localhost ~]# docker search mysql 或者 docker pull 这些命令无法使用
Error response from daemon: Get https://index.docker.io/v1/search?q=mysql&n=25: x509: certificate has expired or is not yet valid
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200602183429286.png)

**注意**：**这个错误的原因在于是系统的时间和 Docker Hub 时间不一致，需要做系统时间与网络时间同步**。

```markdown
# 1.安装时间同步
	sudo yum -y install ntp ntpdate

# 2.同步时间
	sudo ntpdate cn.pool.ntp.org

# 3.查看本机时间
	date

# 4.重新测试
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200602183718623.png)

## 11. Dockerfile

### 11.1 什么是 Dockerfile

Dockerfile 可以认为是**Docker 镜像的描述文件，是由一系列命令和参数构成的脚本**。主要作用是**用来构建 Docker 镜像的构建文件**。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200404111908085.png)

**通过架构图可以看出通过 DockerFile 可以直接构建镜像**。

### 11.2 Dockerfile 解析过程

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200603181253804.png)

### 11.3 Dockerfile 的保留命令

官方说明：https://docs.docker.com/engine/reference/builder/

| 保留字         | 作用                                                         |
| -------------- | ------------------------------------------------------------ |
| **FROM**       | **当前镜像是基于哪个镜像的** `第一个指令必须是FROM`          |
| MAINTAINER     | 镜像维护者的姓名和邮箱地址                                   |
| **RUN**        | **构建镜像时需要运行的指令**                                 |
| **EXPOSE**     | **当前容器对外暴露出的端口号**                               |
| **WORKDIR**    | **指定在创建容器后，终端默认登录进来的工作目录，一个落脚点** |
| **ENV**        | **用来在构建镜像过程中设置环境变量**                         |
| **ADD**        | **将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar包** |
| **COPY**       | **类似于ADD，拷贝文件和目录到镜像中<br/>将从构建上下文目录中<原路径>的文件/目录复制到新的一层的镜像内的<目标路径>位置** |
| **VOLUME**     | **容器数据卷，用于数据保存和持久化工作**                     |
| **CMD**        | **指定一个容器启动时要运行的命令<br/>Dockerfile中可以有多个CMD指令，但只有最后一个生效，CMD会被docker run之后的参数替换** |
| **ENTRYPOINT** | **指定一个容器启动时要运行的命令<br/>ENTRYPOINT的目的和CMD一样，都是在指定容器启动程序及其参数** |

#### 11.3.1 FROM 命令

基于哪个镜像进行构建新的镜像，在构建时会自动从 Docker Hub拉取 base 镜像，**必须作为 Dockerfile 的第一个指令出现**。

语法：
```dockerfile
FROM  <image>
FROM  <image>[:<tag>]     使用版本不写为latest
FROM  <image>[@<digest>]  使用摘要
```

#### 11.3.2 MAINTAINER  命令

镜像维护者的姓名和邮箱地址[废弃]。

语法：
```dockerfile
MAINTAINER <name>
```

#### 11.3.3 RUN 命令

RUN 命令将在当前映像之上的新层中执行任何命令并提交结果，生成的提交映像将用于 Dockerfile 中的下一步。

语法：
```dockerfile
RUN <command> (shell form, the command is run in a shell, which by default is /bin/sh -c on Linux or cmd /S /C on Windows)
RUN echo hello

RUN ["executable", "param1", "param2"] (exec form)
RUN ["/bin/bash", "-c", "echo hello"]
```

#### 11.3.4 EXPOSE 命令

用来指定构建的镜像在运行为容器时对外暴露的端口。

语法：
```dockerfile
EXPOSE 80/tcp  如果没有显示指定则默认暴露都是tcp
EXPOSE 80/udp
```

#### 11.3.5 CMD 命令

用来为启动的容器指定执行的命令，**在 Dockerfile 中只能有一条 CMD 指令。如果列出多个命令，则只有最后一个命令才会生效**。

语法：
```dockerfile
CMD ["executable","param1","param2"] (exec form, this is the preferred form)
CMD ["param1","param2"] (as default parameters to ENTRYPOINT)
CMD command param1 param2 (shell form)
```

#### 11.3.6 WORKDIR 命令

用来为 Dockerfile 中的任何 RUN、CMD、ENTRYPOINT、COPY 和 ADD 指令设置工作目录。如果 WORKDIR 不存在，即使它没有在任何后续 Dockerfile 指令中使用，它也将被创建。

语法：
```dockerfile
WORKDIR /path/to/workdir

WORKDIR /a
WORKDIR b
WORKDIR c
```
**注意：WORKDIR 指令可以在 Dockerfile 中多次使用。如果提供了相对路径，则该路径将与先前 WORKDIR 指令的路径相对**。

#### 11.3.7 ENV 命令

用来为构建镜像设置环境变量，这个值将出现在构建阶段中所有后续指令的环境中。

语法：
```dockerfile
ENV <key> <value>
ENV <key>=<value> ...
```

#### 11.3.8 ADD 命令

用来从 context 上下文复制新文件、目录或远程文件url，并将它们添加到位于指定路径的映像文件系统中。

语法：
```dockerfile
ADD hom* /mydir/       通配符添加多个文件
ADD hom?.txt /mydir/   通配符添加
ADD test.txt relativeDir/  可以指定相对路径
ADD test.txt /absoluteDir/ 也可以指定绝对路径
ADD url 
```

#### 11.3.9 COPY 命令

用来将 context 目录中指定文件复制到镜像的指定目录中。

语法：
```dockerfile
COPY src dest
COPY ["<src>",... "<dest>"]
```

#### 11.3.10 VOLUME 命令

用来定义容器运行时可以挂在到宿主机的目录。

语法：
```dockerfile
VOLUME ["/data"]
```

#### 11.3.11 ENTRYPOINT命令

用来指定容器启动时执行命令和 CMD 类似。

语法:
```dockerfile
  ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2
```

- ENTRYPOINT 指令，往往用于设置容器启动后的**第一个命令**，这对一个容器来说往往是固定的。
- CMD 指令，往往用于设置容器启动的**第一个命令的默认参数**，这对一个容器来说可以是变化的。

#### 11.3.11 ENTRYPOINT 命令

### 11.4 Dockerfile 构建 SpringBoot 项目部署

##### 1. 准备 SpringBoot 可运行项目
![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200605172151266.png)

##### 2. 将可运行项目放入 Linux 虚拟机中
![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200605172340380.png)

##### 3. 编写 Dockerfile
```dockerfile
FROM openjdk:8
WORKDIR /ems
ADD ems.jar /ems
EXPOSE 8989
ENTRYPOINT ["java","-jar"]
CMD ["ems.jar"]
```

##### 4. 构建镜像
```bash
[root@localhost ems]# docker build -t ems .
```

##### 5. 运行镜像
```shell
[root@localhost ems]# docker run -p 8989:8989 ems
```

##### 6.访问项目
```http
http://10.15.0.8:8989/ems/login.html
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20200605173141636.png)

----

## 10.高级网络配置

### 10.1 说明

当 Docker 启动时，会自动在主机上创建一个 `docker0` 虚拟网桥，实际上是 Linux 的一个 bridge，可以理解为一个软件交换机。它会在挂载到它的网口之间进行转发。

同时，Docker 随机分配一个本地未占用的私有网段（在 [RFC1918](https://tools.ietf.org/html/rfc1918) 中定义）中的一个地址给 `docker0` 接口。比如典型的 `172.17.42.1`，掩码为 `255.255.0.0`。此后启动的容器内的网口也会自动分配一个同一网段（`172.17.0.0/16`）的地址。

当创建一个 Docker 容器的时候，同时会创建了一对 `veth pair` 接口（当数据包发送到一个接口时，另外一个接口也可以收到相同的数据包）。这对接口一端在容器内，即 `eth0`；另一端在本地并被挂载到 `docker0` 网桥，名称以 `veth` 开头（例如 `vethAQI2QT`）。通过这种方式，主机可以跟容器通信，容器之间也可以相互通信。Docker 就创建了在主机和所有容器之间一个虚拟共享网络。

![image-20201125105847896](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20201125105847896.png)

### 10.2 查看网络信息

```markdown
# docker network ls
```

### 10.3 创建一个网桥

```markdown
# docker network create -d bridge 网桥名称
```

### 10.4 删除一个网桥

```markdown
# docker network rm 网桥名称
```

### 10.5 容器之前使用网络通信

```markdown
# 1.查询当前网络配置
- docker network ls
```

```shell
NETWORK ID          NAME                DRIVER              SCOPE
8e424e5936b7        bridge              bridge              local
17d974db02da        docker_gwbridge     bridge              local
d6c326e433f7        host                host                local
```

```markdown
# 2.创建桥接网络
- docker network create -d bridge info
```

```shell
[root@centos ~]# docker network create -d bridge info
6e4aaebff79b1df43a064e0e8fdab08f52d64ce34db78dd5184ce7aaaf550a2f
[root@centos ~]# docker network ls
NETWORK ID          NAME                DRIVER              SCOPE
8e424e5936b7        bridge              bridge              local
17d974db02da        docker_gwbridge     bridge              local
d6c326e433f7        host                host                local
6e4aaebff79b        info                bridge              local
```

```markdown
# 3.启动容器指定使用网桥
- docker run -d -p 8890:80 --name nginx001 --network info nginx 
- docker run -d -p 8891:80 --name nginx002 --network info nginx 
	`注意:一旦指定网桥后--name指定名字就是主机名,多个容器指定在同一个网桥时,可以在任意一个容器中使用主机名与容器进行互通`
```

```shell
[root@centos ~]# docker run -d -p 8890:80 --name nginx001 --network info nginx 
c315bcc94e9ddaa36eb6c6f16ca51592b1ac8bf1ecfe9d8f01d892f3f10825fe
[root@centos ~]# docker run -d -p 8891:80 --name nginx002 --network info nginx
f8682db35dd7fb4395f90edb38df7cad71bbfaba71b6a4c6e2a3a525cb73c2a5
[root@centos ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
f8682db35dd7        nginx               "/docker-entrypoint.…"   3 seconds ago       Up 2 seconds        0.0.0.0:8891->80/tcp   nginx002
c315bcc94e9d        nginx               "/docker-entrypoint.…"   7 minutes ago       Up 7 minutes        0.0.0.0:8890->80/tcp   nginx001
b63169d43792        mysql:5.7.19        "docker-entrypoint.s…"   7 minutes ago       Up 7 minutes        3306/tcp               mysql_mysql.1.s75qe5kkpwwttyf0wrjvd2cda
[root@centos ~]# docker exec -it f8682db35dd7 /bin/bash
root@f8682db35dd7:/# curl http://nginx001
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
.....
```

---

## 11.高级数据卷配置

### 11.1 说明

`数据卷` 是一个可供一个或多个容器使用的特殊目录，它绕过 UFS，可以提供很多有用的特性：

- `数据卷` 可以在容器之间共享和重用
- 对 `数据卷` 的修改会立马生效
- 对 `数据卷` 的更新，不会影响镜像
- `数据卷` 默认会一直存在，即使容器被删除

> 注意：`数据卷` 的使用，类似于 Linux 下对目录或文件进行 mount，镜像中的被指定为挂载点的目录中的文件会复制到数据卷中（仅数据卷为空时会复制）。

### 11.2 创建数据卷

```shell
[root@centos ~]# docker volume create my-vol
my-vol
```

### 11.3 查看数据卷

```shell
[root@centos ~]# docker volume inspect my-vol       
[
    {
        "CreatedAt": "2020-11-25T11:43:56+08:00",
        "Driver": "local",
        "Labels": {},
        "Mountpoint": "/var/lib/docker/volumes/my-vol/_data",
        "Name": "my-vol",
        "Options": {},
        "Scope": "local"
    }
]
```

### 11.4 挂载数据卷

```shell
[root@centos ~]# docker run -d -P --name web  -v my-vol:/usr/share/nginx/html  nginx
[root@centos ~]# docker inspect web
				"Mounts": [
            {
                "Type": "volume",
                "Name": "my-vol",
                "Source": "/var/lib/docker/volumes/my-vol/_data",
                "Destination": "/usr/share/nginx/html",
                "Driver": "local",
                "Mode": "z",
                "RW": true,
                "Propagation": ""
            }
        ],
```

### 11.5 删除数据卷

```shell
docker volume rm my-vol
```

---

## 12.Docker Compose

### 12.1 简介

`Compose` 项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。从功能上看，跟 `OpenStack` 中的 `Heat` 十分类似。

其代码目前在 https://github.com/docker/compose 上开源。

`Compose` 定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」，其前身是开源项目 Fig。

通过第一部分中的介绍，我们知道使用一个 `Dockerfile` 模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。

`Compose` 恰好满足了这样的需求。它允许用户通过一个单独的 `docker-compose.yml` 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。

`Compose` 中有两个重要的概念：

- 服务 (`service`)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。
- 项目 (`project`)：由一组关联的应用容器组成的一个完整业务单元，在 `docker-compose.yml` 文件中定义。

`Compose` 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。

`Compose` 项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。因此，只要所操作的平台支持 Docker API，就可以在其上利用 `Compose` 来进行编排管理。

### 12.2 安装与卸载

###### 1.linux

- 在 Linux 上的也安装十分简单，从 官方 GitHub Release 处直接下载编译好的二进制文件即可。例如，在 Linux 64 位系统上直接下载对应的二进制包。

```bash
$ sudo curl -L https://github.com/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

###### 2.macos、window

- Compose 可以通过 Python 的包管理工具 pip 进行安装，也可以直接下载编译好的二进制文件使用，甚至能够直接在 Docker 容器中运行。`Docker Desktop for Mac/Windows 自带 docker-compose 二进制文件，安装 Docker 之后可以直接使用`。

###### 3.bash命令补全

```shell
$ curl -L https://raw.githubusercontent.com/docker/compose/1.25.5/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose
```

###### 4.卸载

- 如果是二进制包方式安装的，删除二进制文件即可。

```shell
$ sudo rm /usr/local/bin/docker-compose
```

###### 5.测试安装成功

```shell
$ docker-compose --version
 docker-compose version 1.25.5, build 4667896b
```

### 12.3 docker compose使用

```markdown
# 1.相关概念
```

首先介绍几个术语。

- 服务 (`service`)：一个应用容器，实际上可以运行多个相同镜像的实例。
- 项目 (`project`)：由一组关联的应用容器组成的一个完整业务单元。∂一个项目可以由多个服务（容器）关联而成，`Compose` 面向项目进行管理。

```markdown
# 2.场景
```

最常见的项目是 web 网站，该项目应该包含 web 应用和缓存。

- springboot应用
- mysql服务
- redis服务
- elasticsearch服务
- .......

````markdown
# 3.docker-compose模板
- 参考文档:https://docker_practice.gitee.io/zh-cn/compose/compose_file.html
````

```yml
version: "3.0"
services:
  mysqldb:
    image: mysql:5.7.19
    container_name: mysql
    ports:
      - "3306:3306"
    volumes:
      - /root/mysql/conf:/etc/mysql/conf.d
      - /root/mysql/logs:/logs
      - /root/mysql/data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: root
    networks:
      - ems
    depends_on:
      - redis

  redis:
    image: redis:4.0.14
    container_name: redis
    ports:
      - "6379:6379"
    networks:
      - ems
    volumes:
      - /root/redis/data:/data
    command: redis-server
    
networks:
  ems:
```

```markdown
# 4.通过docker-compose运行一组容器
- 参考文档:https://docker_practice.gitee.io/zh-cn/compose/commands.html
```

```bash
[root@centos ~]# docker-compose up    							//前台启动一组服务
[root@centos ~]# docker-compose up -d 							//后台启动一组服务
```

---

### 12.4 docker-compose 模板文件

模板文件是使用 `Compose` 的核心，涉及到的指令关键字也比较多。但大家不用担心，这里面大部分指令跟 `docker run` 相关参数的含义都是类似的。

默认的模板文件名称为 `docker-compose.yml`，格式为 YAML 格式。

```yaml
version: "3"

services:
  webapp:
    image: examples/web
    ports:
      - "80:80"
    volumes:
      - "/data"
```

注意每个服务都必须通过 `image` 指令指定镜像或 `build` 指令（需要 Dockerfile）等来自动构建生成镜像。

如果使用 `build` 指令，在 `Dockerfile` 中设置的选项(例如：`CMD`, `EXPOSE`, `VOLUME`, `ENV` 等) 将会自动被获取，无需在 `docker-compose.yml` 中重复设置。

下面分别介绍各个指令的用法。

#### `build`

指定 `Dockerfile` 所在文件夹的路径（可以是绝对路径，或者相对 docker-compose.yml 文件的路径）。 `Compose` 将会利用它自动构建这个镜像，然后使用这个镜像。

```yaml
version: '3'
services:

  webapp:
    build: ./dir
```

你也可以使用 `context` 指令指定 `Dockerfile` 所在文件夹的路径。

使用 `dockerfile` 指令指定 `Dockerfile` 文件名。

使用 `arg` 指令指定构建镜像时的变量。

```yaml
version: '3'
services:

  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        buildno: 1
```

#### `command`

覆盖容器启动后默认执行的命令。

```yaml
command: echo "hello world"
```

#### `container_name`

指定容器名称。默认将会使用 `项目名称_服务名称_序号` 这样的格式。

```yaml
container_name: docker-web-container
```

> 注意: 指定容器名称后，该服务将无法进行扩展（scale），因为 Docker 不允许多个容器具有相同的名称。

#### `depends_on`

解决容器的依赖、启动先后的问题。以下例子中会先启动 `redis` `db` 再启动 `web`

```yaml
version: '3'

services:
  web:
    build: .
    depends_on:
      - db
      - redis

  redis:
    image: redis

  db:
    image: postgres
```

> 注意：`web` 服务不会等待 `redis` `db` 「完全启动」之后才启动。

#### `env_file`

从文件中获取环境变量，可以为单独的文件路径或列表。

如果通过 `docker-compose -f FILE` 方式来指定 Compose 模板文件，则 `env_file` 中变量的路径会基于模板文件路径。

如果有变量名称与 `environment` 指令冲突，则按照惯例，以后者为准。

```bash
env_file: .env

env_file:
  - ./common.env
  - ./apps/web.env
  - /opt/secrets.env
```

环境变量文件中每一行必须符合格式，支持 `#` 开头的注释行。

```bash
# common.env: Set development environment
PROG_ENV=development
```

#### `environment`

设置环境变量。你可以使用数组或字典两种格式。

只给定名称的变量会自动获取运行 Compose 主机上对应变量的值，可以用来防止泄露不必要的数据。

```yaml
environment:
  RACK_ENV: development
  SESSION_SECRET:

environment:
  - RACK_ENV=development
  - SESSION_SECRET
```

如果变量名称或者值中用到 `true|false，yes|no` 等表达 [布尔](https://yaml.org/type/bool.html) 含义的词汇，最好放到引号里，避免 YAML 自动解析某些内容为对应的布尔语义。这些特定词汇，包括

```bash
y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF
```

#### `healthcheck`

通过命令检查容器是否健康运行。

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost"]
  interval: 1m30s
  timeout: 10s
  retries: 3
```

#### `image`

指定为镜像名称或镜像 ID。如果镜像在本地不存在，`Compose` 将会尝试拉取这个镜像。

```yaml
image: ubuntu
image: orchardup/postgresql
image: a4bc65fd
```

#### `networks`

配置容器连接的网络。

```yaml
version: "3"
services:

  some-service:
    networks:
     - some-network
     - other-network

networks:
  some-network:
  other-network:
```

#### `ports`

暴露端口信息。

使用宿主端口：容器端口 `(HOST:CONTAINER)` 格式，或者仅仅指定容器的端口（宿主将会随机选择端口）都可以。

```yaml
ports:
 - "3000"
 - "8000:8000"
 - "49100:22"
 - "127.0.0.1:8001:8001"
```

*注意：当使用 `HOST:CONTAINER` 格式来映射端口时，如果你使用的容器端口小于 60 并且没放到引号里，可能会得到错误结果，因为 `YAML` 会自动解析 `xx:yy` 这种数字格式为 60 进制。为避免出现这种问题，建议数字串都采用引号包括起来的字符串格式。*

#### `sysctls`

配置容器内核参数。

```yaml
sysctls:
  net.core.somaxconn: 1024
  net.ipv4.tcp_syncookies: 0

sysctls:
  - net.core.somaxconn=1024
  - net.ipv4.tcp_syncookies=0
```

#### `ulimits`

指定容器的 ulimits 限制值。

例如，指定最大进程数为 65535，指定文件句柄数为 20000（软限制，应用可以随时修改，不能超过硬限制） 和 40000（系统硬限制，只能 root 用户提高）。

```yaml
  ulimits:
    nproc: 65535
    nofile:
      soft: 20000
      hard: 40000
```

#### `volumes`

数据卷所挂载路径设置。可以设置为宿主机路径(`HOST:CONTAINER`)或者数据卷名称(`VOLUME:CONTAINER`)，并且可以设置访问模式 （`HOST:CONTAINER:ro`）。

该指令中路径支持相对路径。

```yaml
volumes:
 - /var/lib/mysql
 - cache/:/tmp/cache
 - ~/configs:/etc/configs/:ro
```

如果路径为数据卷名称，必须在文件中配置数据卷。

```yaml
version: "3"

services:
  my_src:
    image: mysql:8.0
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
```

---

### 12.5 docker-compose 常用命令

##### 1. 命令对象与格式

对于 Compose 来说，大部分命令的对象既可以是项目本身，也可以指定为项目中的服务或者容器。如果没有特别的说明，命令对象将是项目，这意味着项目中所有的服务都会受到命令影响。

执行 `docker-compose [COMMAND] --help` 或者 `docker-compose help [COMMAND]` 可以查看具体某个命令的使用格式。

`docker-compose` 命令的基本的使用格式是

```bash
docker-compose [-f=<arg>...] [options] [COMMAND] [ARGS...]
```

##### 2. 命令选项

- `-f, --file FILE` 指定使用的 Compose 模板文件，默认为 `docker-compose.yml`，可以多次指定。
- `-p, --project-name NAME` 指定项目名称，默认将使用所在目录名称作为项目名。
- `--x-networking` 使用 Docker 的可拔插网络后端特性
- `--x-network-driver DRIVER` 指定网络后端的驱动，默认为 `bridge`
- `--verbose` 输出更多调试信息。
- `-v, --version` 打印版本并退出。

##### 3.命令使用说明

##### `up`

格式为 `docker-compose up [options] [SERVICE...]`。

- 该命令十分强大，它将尝试自动完成包括构建镜像，（重新）创建服务，启动服务，并关联服务相关容器的一系列操作。

- 链接的服务都将会被自动启动，除非已经处于运行状态。

- 可以说，大部分时候都可以直接通过该命令来启动一个项目。

- 默认情况，`docker-compose up` 启动的容器都在前台，控制台将会同时打印所有容器的输出信息，可以很方便进行调试。

- 当通过 `Ctrl-C` 停止命令时，所有容器将会停止。

- 如果使用 `docker-compose up -d`，将会在后台启动并运行所有的容器。一般推荐生产环境下使用该选项。

- 默认情况，如果服务容器已经存在，`docker-compose up` 将会尝试停止容器，然后重新创建（保持使用 `volumes-from` 挂载的卷），以保证新启动的服务匹配 `docker-compose.yml` 文件的最新内容

---

##### `down`

- 此命令将会停止 `up` 命令所启动的容器，并移除网络

----

##### `exec`

- 进入指定的容器。

----

##### `ps`

格式为 `docker-compose ps [options] [SERVICE...]`。

列出项目中目前的所有容器。

选项：

- `-q` 只打印容器的 ID 信息。

----

##### `restart`

格式为 `docker-compose restart [options] [SERVICE...]`。

重启项目中的服务。

选项：

- `-t, --timeout TIMEOUT` 指定重启前停止容器的超时（默认为 10 秒）。

----

##### `rm`

格式为 `docker-compose rm [options] [SERVICE...]`。

删除所有（停止状态的）服务容器。推荐先执行 `docker-compose stop` 命令来停止容器。

选项：

- `-f, --force` 强制直接删除，包括非停止状态的容器。一般尽量不要使用该选项。
- `-v` 删除容器所挂载的数据卷。

---

##### `start`

格式为 `docker-compose start [SERVICE...]`。

启动已经存在的服务容器。

----

##### `stop`

格式为 `docker-compose stop [options] [SERVICE...]`。

停止已经处于运行状态的容器，但不删除它。通过 `docker-compose start` 可以再次启动这些容器。

选项：

- `-t, --timeout TIMEOUT` 停止容器时候的超时（默认为 10 秒）。

----

##### `top`

查看各个服务容器内运行的进程。

---

##### `unpause`

格式为 `docker-compose unpause [SERVICE...]`。

恢复处于暂停状态中的服务。

------

## 13.docker可视化工具

#### 13.1 安装Portainer

官方安装说明：[https://www.portainer.io/installation/](http://www.yunweipai.com/go?_=8fe4813824aHR0cHM6Ly93d3cucG9ydGFpbmVyLmlvL2luc3RhbGxhdGlvbi8=)

```shell
[root@ubuntu1804 ~]#docker pull  portainer/portainer

[root@ubuntu1804 ~]#docker volume create portainer_data
portainer_data
[root@ubuntu1804 ~]#docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
20db26b67b791648c2ef6aee444a5226a9c897ebcf0160050e722dbf4a4906e3
[root@ubuntu1804 ~]#docker ps 
CONTAINER ID        IMAGE                 COMMAND             CREATED             STATUS              PORTS                                            NAMES
20db26b67b79        portainer/portainer   "/portainer"        5 seconds ago       Up 4 seconds        0.0.0.0:8000->8000/tcp, 0.0.0.0:9000->9000/tcp   portainer
```

#### 13.2 登录和使用Portainer

> 用浏览器访问：`http://localhost:9000`

![image-20201223231707738](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/container%20/01/image-20201223231707738.png)

----


