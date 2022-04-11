---
title: 云原生
date: 2022-04-11
category:
  - 运维
  - 容器编排
tag:
  - Kubernetes
  - 云原生
---


#  1. 云原生基本介绍

# 2. Docker容器化

#  3. Kubernetes实战

## 3.1 Kubernetes基础概念

## 3.2 Kubernetes集群搭建

## 3.3 Kubernetes核心实战



# 4. KubeSphere实战

## 4.1 KubeSphere简介

## 4.2 KubeSphere安装

## 4.3 KubeSphere多租户

## 4.4 KubeSphere部署中间件

## 4.5 KubeSphere应用商店

## 4.6 KubeSphere应用部署实战



# 5. DevOps实战

## 5.1 DevOps简介

## 5.2 DevOps应用部署实战



# 6. KubeKey实战

## 6.1 KubeKey简介

### 1. 是什么

[KubeKey](https://github.com/kubesphere/kubekey)（由 Go 语言开发）是一种全新的安装工具，替代了以前使用的基于 ansible 的安装程序。KubeKey 提供灵活的安装选择，可以仅安装 Kubernetes，也可以同时安装 Kubernetes 和 KubeSphere。

KubeKey 的几种使用场景：

- 仅安装 Kubernetes；

- 使用一个命令同时安装 Kubernetes 和 KubeSphere；

- 扩缩集群；

- 升级集群；

- 安装 Kubernetes 相关的插件（Chart 或 YAML）。

  [源码地址](https://github.com/kubesphere/kubekey)

  [中文介绍](https://kubesphere.io/zh/docs/installing-on-linux/introduction/kubekey/)

### 2. 为什么

- 以前基于 ansible 的安装程序依赖于许多软件，例如 Python。KubeKey 由 Go 语言开发，可以消除在多种环境中出现的问题，确保成功安装。
- KubeKey 支持多种安装选项，例如 [All-in-One](https://kubesphere.io/zh/docs/quick-start/all-in-one-on-linux/)、[多节点安装](https://kubesphere.io/zh/docs/installing-on-linux/introduction/multioverview/)以及[离线安装](https://kubesphere.io/zh/docs/installing-on-linux/introduction/air-gapped-installation/)。
- KubeKey 使用 Kubeadm 在节点上尽可能多地并行安装 Kubernetes 集群，使安装更简便，提高效率。与旧版的安装程序相比，它极大地节省了安装时间。
- KubeKey 提供[内置高可用模式](https://kubesphere.io/zh/docs/installing-on-linux/high-availability-configurations/internal-ha-configuration/)，支持一键安装高可用 Kubernetes 集群。
- KubeKey 旨在将集群作为对象来进行安装，即 CaaO。

### 3. 如何运作

下载 KubeKey 之后，您可以使用可执行文件 `kk` 来进行不同的操作。无论是使用它来创建，扩缩还是升级集群，都必须事先使用 `kk` 准备配置文件。此配置文件包含集群的基本参数，例如主机信息、网络配置（CNI 插件以及 Pod 和 Service CIDR）、仓库镜像、插件（YAML 或 Chart）和可插拔组件选项（如果您安装 KubeSphere）。

准备好配置文件后，需要使用 `./kk` 命令以及不同的标志来进行不同的操作。这之后，KubeKey 会自动安装 Docker，并拉取所有必要的镜像以进行安装。安装完成后，可以检查安装日志。

### 4.安装

#### 4.1 前置环境

**KubeKey支持矩阵**

```
• Ubuntu 16.04, 18.04, 20.04

• Debian Buster, Stretch

• CentOS/RHEL 7

• SUSE Linux Enterprise Server 15

(推荐 Linux 内核版本在4.15以上)

Kubernetes 版本：

• v1.15 至 v1.22

KubeSphere 版本：

• v2.1.1 至 v3.2.0

KubeKey 会不断更新以支持最新版本的 Kubernetes 和 KubeSphere
```

**安装要求与建议**

```
集群最小资源要求：
• 2 核 cpu
• 4 GB 内存
• 20 GB 存储
操作系统要求：
• 所有节点能够 ssh 访问
• 所有节点时钟同步
• 所有节点 sudo/curl/openssl 可以使用
• 建议关闭selinux或设置为宽容模式
• 建议关闭集群内的防火墙或按照文档设置网络访问策略
```

####  4.2下载KubeKey



## 6.2 部署高可用Kubernetes集群

## 6.3 集群配置文件详解

## 6.4 增删集群节点

## 6.5 集群证书管理

## 6.6 启用可插拔组件

## 6.7 节点管理



