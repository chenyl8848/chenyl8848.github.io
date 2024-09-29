---
title: Linux 万字入门教程
date: 2022-04-10
category:
  - Linux
tag:
  - Linux
---

# Linux 万字入门教程
<!-- more -->

>[学习视频【编程不良人】](https://www.bilibili.com/video/BV1xV411k7FC?spm_id_from=333.999.0.0)

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/Linux_MindMap.png)

## 1. Linux 介绍

### 1.1 引言

Linux 是一套免费使用和自由传播的类 Unix 操作系统，是一个基于 POSIX 和 Unix 的**多用户、多任务、支持多线程和多CPU的操作系统**。

伴随着互联网的发展，Linux 得到了来自全世界软件爱好者、组织、公司的支持。它除了在**服务器操作系统**方面保持着强劲的发展势头以外，在个人电脑、嵌入式系统上都有着长足的进步。

目前 Linux 存在着许多不同的 Linux 发行版本，**但它们都使用了 Linux 内核**。Linux 可安装在各种计算机硬件设备中，比如手机、平板电脑、路由器、台式计算机。

<!-- more -->

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011200827437.png)

----

### 1.2 Linux 诞生

20世纪80年代，计算机硬件的性能不断提高，PC 的市场不断扩大，当时可供计算机选用的操作系统主要有 Unix、DOS 和 MacOS 这几种。

Unix 价格昂贵，不能运行于[PC](https://baike.baidu.com/item/PC/107)；
[DOS](https://baike.baidu.com/item/DOS/32025)显得简陋，且源代码被软件厂商严格保密；
[MacOS](https://baike.baidu.com/item/MacOS/8654551)是一种专门用于苹果计算机的操作系统。

此时，计算机科学领域迫切需要一个更加完善、强大、廉价和完全开放的操作系统。由于供教学使用的典型操作系统很少，因此当时在荷兰当教授的美国人 AndrewS.Tanenbaum 编写了一个操作系统，名为 [MINIX](https://baike.baidu.com/item/MINIX/7106045)，为了向学生讲述操作系统内部工作原理。MINIX 虽然很好，但只是一个用于教学目的的简单操作系统，而不是一个强有力的实用操作系统，然而最大的好处就是公开源代码。

全世界学计算机的学生都通过钻研 MINIX 源代码来了解电脑里运行的 MINIX 操作系统，芬兰赫尔辛基大学大学二年级的学生 Linus Torvalds 就是其中一个，在吸收了 MINIX 精华的基础上，Linus 于1991年写出了属于自己的 Linux 操作系统，版本为 Linux0.01，是 Linux 时代开始的标志。他利用 Unix 的核心，去除繁杂的核心程序，改写成适用于一般计算机的x86系统，并放在网络上供大家下载，1994年推出完整的核心Version1.0，至此，Linux 逐渐成为功能完善、稳定的操作系统，并被广泛使用。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011201019566.png)

> 总结：Linux 出现于1991年，是由芬兰赫尔辛基大学学生，Linus Torvalds 和后来加入的众多爱好者共同开发完成。
----

### 1.3 Linux 特点

- **完全免费**

Linux 是一款免费的操作系统，用户可以通过网络或其他途径免费获得，并可以任意修改其[源代码](https://baike.baidu.com/item/源代码/3969)。这是其他的操作系统所做不到的。正是由于这一点，来自全世界的无数[程序员](https://baike.baidu.com/item/程序员/62748)参与了 Linux 的修改、编写工作，程序员可以根据自己的兴趣和灵感对其进行改变，这让 Linux 吸收了无数程序员的精华，不断壮大。

- **多用户、多任务**

Linux 支持多用户，各个用户对于自己的文件设备有自己特殊的权利，保证了各用户之间互不影响。**多任务**则是现在电脑最主要的一个特点，Linux 可以使多个程序同时并独立地运行。同时**丰富的网络功能，可靠的系统安全，良好的可移植性，具有标准兼容性，出色的速度性能**。

----

## 2. Linux 之 CentOS

### 2.1 CentOS 引言

CentOS（Community Enterprise Operating System，中文意思是社区企业操作系统）是 Linux 发行版之一，它是来自于 Red Hat Enterprise Linux 依照[开放源代码](https://baike.baidu.com/item/开放源代码/114160)规定释出的源代码所编译而成。

由于出自同样的[源代码](https://baike.baidu.com/item/源代码/3587471)，因此有些要求高度稳定性的[服务器](https://baike.baidu.com/item/服务器/100571)以 CentOS 替代商业版的 [Red Hat](https://baike.baidu.com/item/Red Hat) Enterprise Linux 使用。两者的不同，在于**CentOS 完全开源**。

### 2.2 CentOS 和 RedHeat 区别

目前的 Linux 操作系统主要应用于生产环境，**主流企业的 Linux 系统仍旧是 RedHat 或者 CentOS**,他们出自于同样的源代码，但 CentOS 完全免费。其独有的 yum 命令支持在线升级，可以即时更新系统，不像 RedHat 那样需要花钱购买支持服务！

---

### 2.3 安装 CentOS

#### 2.3.1 环境准备

```markdown
# 环境要求：
1. windows7+
2. VMware Workstation8+
3. CentOS系统(镜像)
```

#### 2.3.2 安装 CentOS

0、下载 CentOS 

> [官网](https://www.CentOS.org/)：https://www.CentOS.org/
>
> [官网下载地址](http://isoredirect.CentOS.org/CentOS/7/isos/x86_64/)：http://isoredirect.CentOS.org/CentOS/7/isos/x86_64/

1、打开VMware Workstation

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011204617583.png)

2、选择菜单File的第一项新建虚拟机

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011204734492.png)

3、选择自定义虚拟机安装

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011204806260.png)

4、选择下一步

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/640-20191011204836520.jpeg)

5、虚拟机设置之后安装系统

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/640-20191011204924175.jpeg)

6、选择虚拟机安装系统以及版本

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011204948492.png)

7、选择虚拟机名称与位置

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011205013122.png)

8、设置处理器数

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011205034829.png)

9、设置虚拟机内存

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011205101094.png)

10、选择网络模式

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011205123751.png)

11、选择 IO 总线 下一步

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011205152854.png)

12、选择新建硬盘

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011205218692.png)

13、选择硬盘类型

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/640.png)

14、拆分硬盘

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/640-20191011205308573.jpeg)

15、设置磁盘位置

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/640-20191011205334834.png)

16、创建完成

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/640-20191011205358801.jpeg)

## 3. Linux 目录结构

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011205611690.png)

```markdown
# 目录结构	
	bin  (binaries)存放二进制可执行文件																									 [重点]
	sbin  (super user binaries)存放二进制可执行文件，只有root才能访问
	etc (etcetera)存放系统配置文件																											[重点]
	usr  (unix shared resources)用于存放共享的系统资源  																	[重点]
	home 存放用户文件的根目录																														 [重点]
	root  超级用户目录																															   [重点]
	dev (devices)用于存放设备文件
	lib  (library)存放跟文件系统中的程序运行所需要的共享库及内核模块
	mnt  (mount)系统管理员安装临时文件系统的安装点
	boot 存放用于系统引导时使用的各种文件
	tmp  (temporary)用于存放各种临时文件																							   [重点]
	var  (variable)用于存放运行时需要改变数据的文件
```

---

## 4. Linux 中常用指令

```markdown
# Linux 中命令格式：
命令 -选项 参数   如：ls -l /usr 
```

> **注意：在 Linux 中命令严格区分大小写**。

### 4.1 ls 命令

```markdown
# ls  显示文件和目录列表	(list)
常用参数:  
	-l (long)	 长格式显示文件和目录信息
	-a (all)	 显示所有文件和目录(包含隐藏文件和目录)
	-R         递归显示指定目录下的文件清单，即会显示指定目录分支内各子目录中的文件清单。
```

```shell
# 0. ls (查看目录下文件和目录)
[root@localhost ~]# ls
aa  aa.txt

# 1. ls -l (长格式展示文件)
[root@localhost ~]# ls -l
总用量 60
drwxrwxr-x      2   user1  user1    4096    Aug 17 09:10 abc
- rw- r-- r--    1   user1  user1    17     Aug 17 09:04 host.conf
- rw- r-- r--    1   user1  user1    38450  Aug 17 09:04 php.ini

`长格式含义:`
文件类型 文件权限   链接数  属主    属组    大小   日期   时间    文件名
d     rwxrwxr-x     2     user1  user1 4096  Aug 17 09:10  abc

# 2. ls -a (显示所有文件)
[root@localhost ~]# ls -a
.   aa      .bash_history  .bash_profile  .cshrc  .tcshrc
..  aa.txt  .bash_logout   .bashrc        .pki    .viminfo

# 3. ls -R (递归显示文件)
[root@localhost ~]# ls -R
.:
aa  aa.txt

./aa:
```

### 4.2 操作文件命令[重点]

```markdown
# 0.cd 用来切换目录

# 1.pwd 显示当前工作目录（print working directory）

# 2.touch 创建空文件		 

# 3.mkdir 创建目录（make directoriy）
	-p 父目录不存在情况下先生成父目录 （parents）

# 4.cp 复制文件或目录（copy）
	cp  文件名    目录   复制文件到指定目录中
	cp  -r 目录名    目录   复制指定目录到指定目录中
		-r 递归处理，将指定目录下的文件与子目录一并拷贝（recursive） 

# 5.mv 移动文件或目录、文件或目录改名（move）
	mv 文件名    新文件名      文件改名
	mv 文件名    目录名     	文件移动
	mv 目录名    不存在目录名  目录改名   
	mv 目录名	  已存在目录名  目录移动

# 6.rm 删除文件（remove）
	-r 同时删除该目录下的所有文件（recursive）
	-f 强制删除文件或目录（force）

# 7.rmdir 删除空目录（remove directoriy）

# 8.cat 显示文本文件内容（catenate）用来展示少量内容

# 9.more、less 分页显示文本文件内容 退出用 q 退出

# 10.head、tail查看文本中开头或结尾部分的内容
	head -n 5 a.log 查看 a.log 文件的前 5 行
# 11.tail  -f  b.log 循环读取（fellow）

# 12.echo 输出命令
	echo I love baby								说明：用来向屏幕输出一句话
	echo I Love baby >> aa.txt			说明：将这段内容输入到文件中
```

### 4.3 网络相关命令

```markdown
# 1.ip addr 查看IP地址
	ip a  简化写法

# 2.ping 测试网络连通性
	ping 192.168.0.1
```

### 4.4 tar 命令(windows winrar 好压)

```markdown
# tar 命令   
	-c 建立一个压缩文件的参数指令（create）
	-x 解开一个压缩文件的参数指令（extract）
	-z 是否需要用 gzip 压缩  
	-v 压缩的过程中显示文件（verbose）
	-f 使用档名，在 f 之后要立即接档名（file）

# 通常组合使用：
tar -cvf aaa.tar file1.txt file2.txt 				将 file1 和 file2 打包成 aaa.tar
tar -zcvf aaa.tar.gz file1.txt file2.txt 			将 file1 和 file2 打包成 aaa.tar 并压缩
tar -zxvf aaa.tar.gz file1.txt file2.txt 			将 aaa.tar.gz 解压
```

### 4.5 systemctl 服务命令

```markdown
# systemctl 
systemctl status|start|stop|restart 服务名  mysqld firewalld(防火墙) network(网络)

systemctl status 服务名          说明：查看某个服务的运行状态
systemctl start 服务名 			 说明：启动某个服务
systemctl restart 服务名 		 说明：重启某个服务
systemctl stop 服务名 			 说明：停止某个服务
```

### 4.6 进程相关命令

```markdown
# 1.ps 询在当前控制台上运行的进程
ps -aux    说明：查询系统中所有运行的进程，包括后台进程，其中参数a是所有进程，参数x包括不占用控制台的进程，参数u显示用户。
ps -ef	   说明：查询系统中所有运行的进程，包括后台进程，而且可以显示出每个进程的父进程号。

ps -aux|grep 进程 服务名  关键字 Tomcat  重点

# 2.top	命令  动态显示系统进程

# 3.kill 杀死进程
kill 3029 	  说明：上述命令中 3029 是进程号；一般在执行kill命令之前，先用ps或pstree来查询一下将要被杀掉的进程的进程号。 
kill -9 3029  说明：强制终止 3029 号进程的运行，其中参数 -9 代表强制的意思，实际上 kill 命令是向该进程发送信号，该进程接到信号后决定是否停止运行，有些守护进程必须要收到参数 9 才终止运行。
```

### 4.7 vi 命令

vi/vim 是 Unix/Linux 上最常用的文本编辑器而且功能非常强大。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191011213625815.png)

```markdown
# 常用命令：
i						在光标前插入
I						在光标当前行开始插入
a						在光标后插入
A						在光标当前行末尾插入
o						在光标当前行的下一行插入新行
O						在光标当前行的上一行插入新行
----------------重点---------------------------
:set nu			显示行号
:set nonu		取消行号
gg					到文本的第一行
G						到文本的最后一行
:n					到文本的第n行
------------------重点-------------------------
u						undo,取消上一步操作
Ctrl + r		redo,返回到undo之前
-------------------重点------------------------
Shift+ zz		保存退出，与“:wq”作用相同
:q					退出不保存
:q!					强制退出不保存
:wq					保存退出
:wq!				强制保存退出
```

### 4.8 软件相关命令

RPM 命令：是 RedHat Package Manager（RedHat软件包管理工具）的缩写，这一文件格式名称虽然打上了 RedHat 的标志，但是其原始设计理念是开放式的，现在包括 RedHat、CentOS、SUSE 等 Linux 的分发版本都有采用，可以算是公认的行业标准了。RPM 文件在Linux系统中的安装最为简便。

```markdown
# rpm 命令  
常用参数：
	i：安装应用程序（install）
	e：卸载应用程序（erase）
	vh：显示安装进度；（verbose   hash） 
	U：升级软件包；（update） 
	qa: 显示所有已安装软件包（query all）

例子：rmp  -ivh  gcc-c++-4.4.7-3.el6.x86_64.rpm
----------------------------------------------
安装命令：
rpm -ivh  xxxx.rpm
rpm -evh  xxxx.rpm
rpm -Uvh  xxx.rpm
rpm -qa 
```

YUM 命令：Yum（全称为 Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 SUSE、CentOS 中的 Shell 前端软件包管理器。基於 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。

```markdown
例子：
yum  install  gcc-c++
yum  remove   gcc-c++
yum  update   gcc-c++

yum install|remove|update  依赖名称
```

> **注意：使用YUM命令必须连接外部网络**。

### 4.9 用户和组相关命令

```markdown
# 1.查看当前用户：whoami

# 2.查看登录用户：who
-m 或 am I	只显示运行who命令的用户名、登录终端和登录时间
-q 或 --count	只显示用户的登录账号和登录用户的数量

# 3.退出用户：exit

# 4.添加、删除组账号：groupadd、groupdel

# 5.添加用户账号：useradd
-g 指定组名称  说明：如果创建用户的时候，不指定组名，那么系统会自动创建一个和用户名一样的组名。

# 6.设置用户密码：passwd　[用户名]

# 7.su 切换用户
	su  root 
```

### 4.10 权限相关命令

> Linux 文件有**三种**典型的权限，**即 r 读权限、w 写权限和 x 执行权限**。在长格式输出中在文件类型的后面有 9 列权限位，实际上这是针对不同用户而设定的。`r=4，w=2，x=1`.

```markdown
# chmod 
all = user + group + other 
chmod  u+rwx,g+rwx,o+rwx   文件名
字母法：chmod u/g/o/a +/-/= rwx 文件
	
[u/g/o/a] 含义
u	user 					表示该文件的所有者
g	group 				表示与该文件的所有者属于同一组( group )者，即用户组
o	other 				表示其他以外的人
a	all 					表示这三者皆是

[ +-= ]	含义
+								增加权限
-								撤销权限
=								设定权限

rwx	含义
r								read 表示可读取，对于一个目录，如果没有r权限，那么就意味着不能通过ls查看这个目录的内容。
w								write 表示可写入，对于一个目录，如果没有w权限，那么就意味着不能在目录下创建新的文件。
x								excute 表示可执行，对于一个目录，如果没有x权限，那么就意味着不能通过cd进入这个目录。
   
数字法：   4读 2写  1执行 
chmod 777 文件名
```

------------------

## 5. CRT 终端操作

```markdown
# 0.准备工作
	安装 CRT 客户端工具：WinScp工具

# 1.设置 Linux 获取 ip 地址 (编辑网络配置文件)	
	vi /etc/sysconfig/network-scripts/ifcfg-ens33

# 2.修改 ens33 配置文件
    BOOTPROTO=dhcp
    ONBOOT=yes

# 3.重启启动网路服务加载修改配置生效
	systemctl restart network

# 4.查看ip地址
	ip addr

# 5.此时 ip 已经获取
	ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:0c:29:07:16:9e brd ff:ff:ff:ff:ff:ff
    inet 192.168.202.136/24 brd 192.168.202.255 scope global noprefixroute dynamic ens33
       valid_lft 1459sec preferred_lft 1459sec
    inet6 fe80::b22b:7e01:db87:52fe/64 scope link noprefixroute 

# 6.测试外部网络连通(保证宿主机windows可以上网前提)
	ping www.baidu.com

# 7.使用 CRT 工具连接
```

## 6. 安装JDK

### 6.1 下载 JDK

```markdown
# 1.下载jdk
	https://www.oracle.com/technetwork/java/javase/downloads/index.html
	https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

# 2.通过 CRT|WinSCP 工具将 JDK 上传到 Linux 系统中	
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013121013589.png)

### 6.2 tar 包安装

```markdown
# 1.将 JDK 解压缩到指定目录
tar -zxvf JDK-8u171-linux-x64.tar.gz -C /usr/
注意：-C 参数是将 JDK 解压之后文件放入 usr 目录中

# 2.进入 JDK 解压缩目录查看
cd /usr/jdk1.8.0_171/

# 3.查看详细信息
[root@localhost jdk1.8.0_171]# ls
bin        db       javafx-src.zip  lib      man          release  THIRDPARTYLICENSEREADME-JAVAFX.txt
COPYRIGHT  include  jre             LICENSE  README.html  src.zip  THIRDPARTYLICENSEREADME.txt

# 4.配置环境变量
vi /etc/profile
	 
# 5.在文件末尾加入如下配置
export JAVA_HOME=/usr/jdk1.8.0_171
export PATH=$PATH:$JAVA_HOME/bin

# 6.加载配置生效
source /etc/profile    加载配置生效
reboot                 重启系统
注意：以上两个选项选择任意一个即可 `source` 可以不用重启立即生效，某些情况下 `source` 无法生效时，可以使用重启试试。

# 7.测试环境变量
java
javac
java -version
```

### 6.3 rpm 包安装

```markdown
# 1.安装 JDK
[root@localhost ~]# rpm -ivh JDK-8u171-linux-x64.rpm 
准备中...                          ################################# [100%]
正在升级/安装...
1:jdk1.8-2000:1.8.0_171-fcs        ################################# [100%]
	Unpacking JAR files...
tools.jar...
plugin.jar...
javaws.jar...
deploy.jar...
rt.jar...
jsse.jar...
charsets.jar...
localedata.jar...

# 2.搜索默认安装位置
[root@localhost ~]# find / -name "java"
/usr/java/jdk1.8.0_171-amd64/bin/java
/usr/java/jdk1.8.0_171-amd64/jre/bin/java

# 3.配置环境变量
vi /etc/profile

# 4.在文件末尾加入如下配置
export JAVA_HOME=/usr/java/jdk1.8.0_171-amd64/
export PATH=$PATH:$JAVA_HOME/bin

# 5.加载配置生效
source /etc/profile    加载配置生效
reboot                 重启系统
注意: 以上两个选项选择任意一个即可source可以不用重启立即生效,某些情况下source无法生效时,可以使用重启试试

# 6.测试环境变量
java
javac
java -version
```

------

## 7. 安装 Tomcat

```markdown
# 0.下载tomcat
http://mirrors.tuna.tsinghua.edu.cn/apache/Tomcat/Tomcat-8/v8.5.46/bin/apache-Tomcat-8.5.46.tar.gz

# 1.通过工具上传到 Linux 系统中

# 2.解压缩到 /usr 目录中
[root@localhost ~]# tar -zxvf apache-Tomcat-8.5.46.tar.gz -C /usr/
-C 用来指定解压缩的位置

# 3.查看解压内容
[root@localhost apache-Tomcat-8.5.46]# ls -l
总用量 124
drwxr-x---. 2 root root  4096 10月 13 12:27 bin
-rw-r-----. 1 root root 19318 9月  17 02:19 BUILDING.txt
drwx------. 2 root root   238 9月  17 02:19 conf
-rw-r-----. 1 root root  5407 9月  17 02:19 CONTRIBUTING.md
drwxr-x---. 2 root root  4096 10月 13 12:27 lib
-rw-r-----. 1 root root 57011 9月  17 02:19 LICENSE
drwxr-x---. 2 root root     6 9月  17 02:17 logs
-rw-r-----. 1 root root  1726 9月  17 02:19 NOTICE
-rw-r-----. 1 root root  3255 9月  17 02:19 README.md
-rw-r-----. 1 root root  7139 9月  17 02:19 RELEASE-NOTES
-rw-r-----. 1 root root 16262 9月  17 02:19 RUNNING.txt
drwxr-x---. 2 root root    30 10月 13 12:27 temp
drwxr-x---. 7 root root    81 9月  17 02:17 webapps
drwxr-x---. 2 root root     6 9月  17 02:17 work

# 4.启动tomcat
[root@localhost apache-Tomcat-8.5.46]# ./bin/startup.sh 

# 5.关闭网络防火墙
systemctl stop firewalld	   关闭网络防火墙
systemctl disable firewalld  关闭开机自启动(永久关闭)

# 6.在 windows 中访问 Tomcat
http://10.15.0.8:8080/

# 7.显示 Tomcat 实时控制台信息
进入 Tomcat 的 logs 目录中使用 tail -f catalina.out 命令实时查看控制台信息 

# 8.关闭 Tomcat
在 Tomcat 的 bin 目录下面使用 ./shutdown.sh
```

------

## 8. 安装 MySQL

### 8.1 环境准备

```markdown
# 1.卸载 mariadb，否则安装 MySQL 会出现冲突
# 2.执行命令 rpm -qa | grep mariadb
# 3.列出所有被安装的 mariadb rpm 包
# 4.执行命令 rpm -e --nodeps mariadb-libs-5.5.56-2.el7.x86_64
```

### 8.2 本地安装(5.6版本默认 root 没有密码)

上传下载好的软件包到系统中。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013124602190.png)

```shell
# 0.执行本地安装包之前必须先安装 vim
yum install -y vim

# 1.安装步骤
rpm -ivh perl-*
rpm -ivh net-tools-2.0-0.22.20131004git.el7.x86_64.rpm
rpm -ivh mysql-community-common-5.6.42-2.el7.x86_64.rpm
rpm -ivh mysql-community-libs-5.6.42-2.el7.x86_64.rpm
rpm -ivh mysql-community-client-5.6.42-2.el7.x86_64.rpm
rpm -ivh mysql-community-server-5.6.42-2.el7.x86_64.rpm
```

### 8.3 在线安装

```markdown
# 1.添加官方的 yum 源创建并编辑 mysql-community.repo 文件
vi /etc/yum.repos.d/mysql-community.repo

# 2.粘贴以下内容到源文件中
[mysql56-community]
name=MySQL 5.6 Community Server
baseurl=http://repo.mysql.com/yum/mysql-5.6-community/el/7/$basearch/
enabled=1
gpgcheck=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql

注意：如果需要安装 MySQL5.7 只需要将 baseurl 修改即可 
baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/

# 3.安装 MySQL
sudo yum install -y mysql-community-server
```

### 8.4 设置 root 用户密码

```markdown
# 1.启动 MySQL 数据库
[root@localhost mysql]# systemctl start mysqld

# 2.修改 MySQL 数据库密码
mysqladmin -u root -p password 回车 输入原始密码 在输入新的密码
	
注意：5.7 之前版本安装完成之后没有密码，MySQL5.7 之后的版本的初始密码是随机生成的，放在了 /var/log/mysqld.log
使用命令 grep ‘temporary password’ /var/log/mysqld.log 读出来即可 ROOT!Q2w

# 3.登录 MySQL
[root@localhost mysql]# mysql -u root -p  
```

### 8.5 开启远程访问

1、安装完成 MySQL 时，发现 MySQL 数据库，不允许我们远程连接，需要修改设置。

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013130519305.png)

2、登录 MySQL,并选择使用 mysql 数据库

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013130544372.png)

3、查看 mysql 库中的所有表

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013130645099.png)

4、查询 user 表

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013130748107.png)

5、执行如下命令
`grant all privileges on *.* to 'root'@'%' identified by 'ROOT!Q2w' with grant option;`

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013131257409.png)

6、刷新权限
`flush privileges;`

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013131324656.png)

7、重启服务
`systemctl restart mysqld`

8、测试连接

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013131419858.png)

-----

## 9. MySQL 主从复制

```markdown
# 0.架构规划
192.168.202.201    master  主节点
192.168.202.202    slave   从节点

# 1.修改mysql的配置文件
[root@localhost mysql]# vim /etc/my.cnf

# 2.分别在配置文件中加入如下配置
mysql(master):
	server-id=1
	log-bin=mysql-bin
	log-slave-updates
	slave-skip-errors=all

msyql(slave):
	server-id=2
	log-bin=mysql-bin
	log-slave-updates
	slave-skip-errors=all
		
注意：两个机器的 server-id 不能一致
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013201349444.png)

```markdown
# 3.重启mysql服务
systemctl restart mysqld

# 4.登录mysql执行如下命令检测配置是否生效
SHOW VARIABLES like 'server_id';
```
<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013201523812.png" alt="image-20191013201523812"  />

```markdown
# 5.登录master节点执行如下命令
show master status;
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013203543728.png)

```markdown
# 6.登录从节点执行如下命令:
change master to 
master_host='10.15.0.9',
master_user='root',
master_password='root',
master_log_file='mysql-bin.000001',
master_log_pos=120;
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013204344807.png)

```markdown
# 7.开启从节点
start slave; 
stop  slave;
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191013204413766.png)

```markdown
# 8.查看从节点状态
show slave status\G;

************************** 1. row ***************************
Slave_IO_State: Waiting for master to send event
	Master_Host: 10.15.0.9
	Master_User: root
	Master_Port: 3306
	Connect_Retry: 60
	Master_Log_File: mysql-bin.000001
	Read_Master_Log_Pos: 120
	Relay_Log_File: mysqld-relay-bin.000002
	Relay_Log_Pos: 283
Relay_Master_Log_File: mysql-bin.000001
	Slave_IO_Running: Yes
	Slave_SQL_Running: Yes
   	
注意：
1. 出现 Slave_IO_Running: Yes 和 Slave_SQL_Running: Yes 说明成功
2. 如果在搭建过程出现错误，可以查看查看错误日志文件 cat /var/log/mysqld.log
 
# 9.通过客户端工具进行测试
	
# 10.关闭主从复制(在从节点执行)
stop slave;
```

- 注意:如果出现 `Slave I/O: Fatal error: The slave I/O thread stops because master and slave have equal MySQL server UUIDs; these UUIDs must be different for replication to work. Error_code: 1593` 错误，请执行如下命令 `rm -rf /var/lib/mysql/auto.cnf` 删除这个文件，之所以出现会出现这样的问题，是因为我的从库主机是克隆的主库所在的主机，所以 `auto.cnf` 文件中保存的 `UUID` 会出现重复。

---

## 10. 读写分离

### 10.1 MyCat 引言

基于阿里开源的 Cobar 产品而研发，Cobar 的稳定性、可靠性、优秀的架构和性能以及众多成熟的使用案例使得 MyCat 一开始就拥有一个很好的起点，站在巨人的肩膀上，我们能看到更远。

业界优秀的开源项目和创新思路被广泛融入到 MyCat 的基因中，使得 MyCat 在很多方面都领先于目前其他一些同类的开源项目，甚至超越某些商业产品。

MyCat 背后有一支强大的技术团队，其参与者都是5年以上资深软件工程师、架构师、DBA等，优秀的技术团队保证了 MyCat 的产品质量。MyCat 并不依托于任何一个商业公司，因此不像某些开源项目，将一些重要的特性封闭在其商业产品中，使得开源项目成了一个摆设。

### 10.2 安装 Mycat

```markdown
# 1.下载 MyCat
http://dl.mycat.io/1.6-RELEASE/Mycat-server-1.6-RELEASE-20161028204710-linux.tar.gz

# 2.解压 MyCat
tar -zxvf Mycat-server-1.6-RELEASE-20161028204710-linux.tar.gz
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191014225929256.png)

```markdown
# 3.查看解压之后目录
[root@localhost mycat]# ls
总用量 12
drwxr-xr-x. 2 root root  190 10月 14 22:58 bin
drwxrwxrwx. 2 root root    6 3月   1 2016 catlet
drwxrwxrwx. 4 root root 4096 10月 14 22:58 conf
drwxr-xr-x. 2 root root 4096 10月 14 22:58 lib
drwxrwxrwx. 2 root root    6 10月 28 2016 logs
-rwxrwxrwx. 1 root root  217 10月 28 2016 version.txt
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191014230002014.png)

```markdown
# 4.移动到 /usr 目录
mv mycat/ /usr/

# 5.配置 MyCat 中 conf 下的配置 schema.xml
```

```xml
<!-- 定义MyCat的逻辑库  -->   
<schema name="test_schema" checkSQLschema="false" sqlMaxLimit="100" dataNode="testNode"></schema>
<!-- 定义MyCat的数据节点 -->
<dataNode name="testNode" dataHost="dtHost" database="test" />
<dataHost name="dtHost" maxCon="1000" minCon="10" balance="1"
			writeType="0" dbType="mysql" dbDriver="native" switchType="-1"  slaveThreshold="100">
			<heartbeat>select user()</heartbeat>
			<!--写节点-->
			<writeHost host="hostM1" url="192.168.28.128:3306" user="root"
					password="root">
					<!--从节点-->
						<readHost host="hostS1" url="192.168.28.129:3306" user="root" password="root" />
			</writeHost>
</dataHost>
```

```markdown
# 6.配置登陆 MyCat 的权限 server.xml
```

```xml
<system>
  <!-- 这里配置的都是一些系统属性，可以自己查看mycat文-->
  <property name="defaultSqlParser">druidparser</property>
  <property name="charset">utf8mb4</property>
</system>

<user name="root">
  <property name="password">root</property>
  <property name="schemas">test_schema</property>
</user>
```

```markdown
# 7.启动 MyCat
./mycat console

# 8.查看日志
tail -f ../logs/mycat.log

# 9.数据库连接配置，测试
```

## 11. 安装 Nginx

### 11.1 Nginx 引言

`Nginx`是一款[轻量级](http://baike.baidu.com/subview/1318763/16205192.htm)的 [Web](http://baike.baidu.com/subview/3912/15992867.htm) 服务器/[反向代理](http://baike.baidu.com/view/1165595.htm)服务器及[电子邮件](http://baike.baidu.com/view/1524.htm)（IMAP/POP3）代理服务器，并在一个 BSD-like 协议下发行。

由俄罗斯的程序设计师 Igor Sysoev 所开发，供俄国大型的入口网站及搜索引擎 Rambler（俄文：Рамблер）使用。其特点是占有内存少，[并发](http://baike.baidu.com/view/684757.htm)能力强，事实上 Nginx 的并发能力确实在同类型的网页服务器中表现较好。

### 11.2 Nginx 安装

```markdown
# 0.安装必要依赖
yum install -y gcc pcre-devel zlib-devel

# 1.下载 Nginx
http://nginx.org/en/download.html

# 2.将 Nginx 上传到 Linux 中并解压缩
tar -zxvf nginx-1.11.1.tar.gz

# 3.查看 Nginx 安装目录
[root@localhost nginx-1.11.1]# ls
auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  man  README  src

# 4.在 Nginx 安装目录中执行如下命令：(指定安装位置)
./configure --prefix=/usr/nginx

# 5.执行上述命令后，执行如下命令：
make && make install

# 6.编译完成后进入编译安装目录 /usr/nginx 目录中查看：
[root@localhost nginx]# ls -l
总用量 4
drwxr-xr-x. 2 root root 4096 10月 14 21:17 conf
drwxr-xr-x. 2 root root   40 10月 14 21:17 html
drwxr-xr-x. 2 root root    6 10月 14 21:17 logs
drwxr-xr-x. 2 root root   19 10月 14 21:17 sbin

# 7.启动 Nginx,进入 Nginx 安装目录的 sbin 目录中执行：
./nginx   

# 8.在 windows 中浏览器访问，可以看到 Nginx 欢迎页面：
http://10.15.0.8:80/
	
注意：关闭网络防火墙。

# 9.关闭 Nginx,进入 Nginx 安装目录的 sbin 目录中执行：
./nginx -s stop

# 10.Nginx 配置文件在 Nginx 安装目录的 conf 目录中：
[root@localhost conf]# ls -l
总用量 60
-rw-r--r--. 1 root root 2656 10月 14 21:17 nginx.conf
.......

注意：nginx.conf 为 Nginx 的配置文件，可以在 nginx.conf 修改 Nginx 默认配置。
```

----

## 12. Tomcat 负载均衡集群

### 12.1 Tomcat 集群

```markdown
# 0.准备多个 Tomcat
tar -zxvf apache-Tomcat-8.5.46.tar.gz #解压缩一个新的tomcat安装包
mv apache-Tomcat-8.5.46 tomcat1 			 #将名称改为tomcat1
cp -r tomcat1/ tomcat2								 #复制一份
cp -r tomcat1/ tomcat3                #复制一份

# 1.此时当前目录中有三个服务器，如下：
[root@localhost ~]# ls -l
总用量 12248
-rwxrwxrwx. 1 root root  11623939 10月 13 12:25 apache-Tomcat-8.5.46.tar.gz
drwxr-xr-x. 9 root root       220 10月 14 21:28 tomcat1
drwxr-xr-x. 9 root root       220 10月 14 21:38 tomcat2
drwxr-xr-x. 9 root root       220 10月 14 21:38 tomcat3
```

```markdown
# 2.修改 tomcat1 端口号：(伪分布式)
vim tomcat1/conf/server.xml

命令修改如下内容：
a.<Server port="8001" shutdown="SHUTDOWN">   ---关闭端口
b.<Connector port="8888" protocol="HTTP/1.1" ---http协议端口
		connectionTimeout="20000"
		redirectPort="8443" />
c.<Connector port="10010" protocol="AJP/1.3" redirectPort="8443" /> ---AJP协议端口
```

```markdown
# 3.修改 tomcat2 端口号：(伪分布式)
vim tomcat2/conf/server.xml 

命令修改如下内容：
a.<Server port="8002" shutdown="SHUTDOWN">
b.<Connector port="8889" protocol="HTTP/1.1"
		connectionTimeout="20000"
		redirectPort="8443" />
c.<Connector port="10011" protocol="AJP/1.3" redirectPort="8443" />
```

```markdown
# 4.修改 tomcat3 端口号：(伪分布式)
vim tomcat2/conf/server.xml
		
命令修改如下内容：
a.<Server port="8003" shutdown="SHUTDOWN">
b.<Connector port="8890" protocol="HTTP/1.1"
		connectionTimeout="20000"
		redirectPort="8443" />
c.<Connector port="10012" protocol="AJP/1.3" redirectPort="8443" />
```

```markdown
# 5.将多个 Tomcat 启动：
tomcat1/bin/startup.sh 
tomcat2/bin/startup.sh 
tomcat3/bin/startup.sh
    
# 6.查看 Tomcat 是否启动成功
ps -aux|grep Tomcat
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191014215035543.png)

```markdown
# 7.在 Windows 中分别访问 Tomcat,都看到主页代表启动成功：
http://10.15.0.8:8888/
http://10.15.0.8:8889/
http://10.15.0.8:8890/
	
**注意：这步一定要关闭网路防火墙**。
```

```markdown
# 8.将多个 Tomcat 配置到 Nginx 的配置文件中：

1、在 server 标签上加入如下配置：
upstream Tomcat-servers {
	server 10.15.0.8:8888;
	server 10.15.0.8:8889;
	server 10.15.0.8:8890;
}

2、将配置文件中 location / 替换为如下配置：
location / {
	proxy_pass http://Tomcat-servers;
	proxy_redirect    off;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header Host $http_host;
	proxy_next_upstream http_502 http_504 error timeout invalid_header;
}
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191014215825240.png)

```markdown
# 9.进入 Nginx 安装目录 sbin 目录启动 Nginx
./nginx -c /usr/nginx/conf/nginx.conf
```

```markdown
# 10.访问 Nginx,看到其中一个 Tomcat 画面：
http://10.15.0.8/ 
```

![](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/server/Linux/01/image-20191014220145379.png)

### 12.2 Nginx 负载均衡策略

```markdown
# 1.轮询
说明: 默认策略，每个请求会按时间顺序逐一分配到不同的后端服务器

# 2.weight 权重
说明：weight 参数用于指定轮询几率，weight 的默认值为 1,weight 的数值与访问比率成正比 
upstream Tomcat-servers {
	server localhost:8080   weight=2;  
	server localhost:8081;  
	server localhost:8082   backup;  
}
注意：1.权重越高分配到需要处理的请求越多。2.此策略可以与 least_conn 和 ip_hash 结合使用主要用于后端服务器性能不均。

# 3.ip_hash  4%3=1 
说明：指定负载均衡器按照基于客户端IP的分配方式，这个方法确保了相同的客户端的请求一直发送到相同的服务器，以保证 session 会话。这样每个访客都固定访问一个后端服务器，可以解决 session 不能跨服务器的问题。
upstream Tomcat-servers {
	ip_hash;    #保证每个访客固定访问一个后端服务器
	server localhost:8080;
	......
}

# 4.least_conn
说明：把请求转发给连接数较少的后端服务器。轮询算法是把请求平均的转发给各个后端，使它们的负载大致相同；但是，有些请求占用的时间很长，会导致其所在的后端负载较高。
这种情况下，least_conn 这种方式就可以达到更好的负载均衡效果。
upstream Tomcat-servers{
	least_conn;    #把请求转发给连接数较少的后端服务器
	server localhost:8080;
}
```

----

## 13. MSM 配置

> Memcached Session Manager 基于 MemCache 缓存的 session 共享。
> 即使用 CacheDB 存取 session 信息，应用服务器接受新请求将 session 信息保存在 CacheDB 中，当应用服务器发生故障时，调度器会遍历寻找可用节点，分发请求，当应用服务器发现 session 不在本机内存时，则去 CacheDB 中查找，如果找到则复制到本机，这样实现 session 共享和高可用。

```markdown
# 0.准备一个 MemCache 服务

# 1.安装 memcached
yum install -y memcached

# 2.启动memcached
memcached -p 11211 -vvv -u root

# 3.Tomcat 安装的 lib 目录中放入与 MemCache 整合 Jar 包
cp *.jar tomcat1/lib
cp *.jar tomcat2/lib
cp *.jar tomcat3/lib

# 4.配置 Tomcat 目录中 conf 目录中 context.xml(所有 Tomcat 均需要配置)
<Context>
<Manager className="de.javakaffee.web.msm.MemcachedBackupSessionManager"
	memcachedNodes="n1:10.15.0.8:11211"
	sticky="false"  
		sessionBackupAsync="false"  
	requestUriIgnorePattern=".*\.(ico|png|gif|jpg|css|js)$"
	transcoderFactoryClass="de.javakaffee.web.msm.serializer.kryo.KryoTranscoderFactory"
	/>
</Context>

# 5.放入测试项目进行测试
```