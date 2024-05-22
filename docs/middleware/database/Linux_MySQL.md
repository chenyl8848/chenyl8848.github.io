---
title: Linux安装卸载MySQL
date: 2024-05-22
category:
  - 中间件
  - 数据库
tag:
  - MySQL
---

# Linux安装卸载MySQL

<!-- more -->

## MySQL 安装

1. 准备一台 Linux 服务器

2. 下载 Linux 版 MySQL 安装包
```
下载地址：https://downloads.mysql.com/archives/community/
```

3. 上传 MySQL 安装包至服务器

4. 创建目录，并解压到对应的目录
```
mkdir mysql

tar -xvf mysql-8.0.26-1.el7.x86_64.rpm-bundle.tar -C mysql
```

5. 按照如下顺序安装 MySQL 的安装包

```
cd mysql

rpm -ivh mysql-community-common-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-client-plugins-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-libs-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-libs-compat-8.0.26-1.el7.x86_64.rpm

rpm -ivh  mysql-community-devel-8.0.26-1.el7.x86_64.rpm

## 安装 mysql-community-devel-8.0.26-1.el7.x86_64.rpm 时，若提示缺少 openssl-devel,需要先安装 openssl-devel
yum install openssl-devel

rpm -ivh mysql-community-client-8.0.26-1.el7.x86_64.rpm

rpm -ivh  mysql-community-server-8.0.26-1.el7.x86_64.rpm
```

6. 启动 MySQL 服务
```
systemctl start mysqld
```

> 重启 MySQL 服务
```
systemctl restart mysqld
```

> 停止 MySQL 服务
```
systemctl stop mysqld
```

7. MySQL 服务启动时，会将 root 密码输出到日志 `/var/log/mysqld.log` 中，通过如下命令查看密码
```
grep 'temporary password' /var/log/mysqld.log
```

8. 进入 MySQL 客户端
```
mysql -u root -p
```

> 输入上述查询到的自动生成的密码, 完成登录

9. 修改 root 用户密码
> MySQL 服务默认生成的密码较难于记忆，可修改成自己熟悉的。

```
ALTER  USER  'root'@'localhost'  IDENTIFIED BY '123456';
```

执行上述的SQL会报错，原因是因为设置的密码太简单，密码复杂度不够。

可以通过如下命令设置密码的复杂度和长度。

```
## 设置密码复杂度为低 0-低 1-中 2-高 

set global validate_password.policy = 0;
## 设置密码长度
set global validate_password.length = 6;
```

降低密码的校验规则之后，再次执行上述修改密码的指令。

10. 创建用户

默认的 root 用户只能当前节点 localhost 访问，是无法远程访问的，还需要创建一个 root 账户，用于远程访问。

```
create user 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
```

11. 并给 root 用户分配权限

```
grant all on *.* to 'root'@'%';
```

12. 重新连接 MySQL
```
mysql -u root -p
```

然后输入密码

13. 通过客户端工具远程连接 MySQL

## MySQL 卸载

1. 停止MySQL服务
```
systemctl stop mysqld
```

2. 查询 MySQL 的安装文件
```
rpm -qa | grep -i mysql
```

3. 卸载查询出来的所有的 MySQL 安装包

```
rpm -e mysql-community-client-plugins-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-server-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-common-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-libs-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-client-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-libs-compat-8.0.26-1.el7.x86_64 --nodeps
```

4. 删除MySQL的数据存放目录
```
rm -rf /var/lib/mysql/
```

4. 删除MySQL的配置文件备份
```
rm -rf /etc/my.cnf.rpmsave
```

