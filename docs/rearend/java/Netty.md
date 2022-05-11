---
title: 初学Netty
date: 2022-04-10
category:
  - Java
tag:
  - Netty
---

# 第1章 Netty介绍和应用场景

<!-- more -->
## 1.1 Netty介绍

>[学习视频【尚硅谷】](https://www.bilibili.com/video/BV1jD4y1Q7tU?spm_id_from=333.999.0.0)

1. Netty 是由JBOSS提供的一个 Java 开源框架，现为 Github上的独立项目；
2. Netty 是一个异步的、基于事件驱动的网络应用框架，用以快速开发高性能、高可靠性的网络 IO 程序；
3. Netty主要针对在TCP协议下，面向Clients端的高并发应用，或者Peer-to-Peer场景下的大量数据持续传输的应用；
4. Netty本质是一个NIO框架，适用于服务器通讯相关的多种应用场景。


## 1.2 Netty的应用场景

### 1.2.1 互联网行业

1）互联网行业：在分布式系统中，各个节点之间需要远程服务调用，高性能的 RPC 框架必不可少，Netty 作为异步高性能的通信框架，往往作为基础通信组件被这些 RPC 框架使用；
2）典型的应用有：阿里分布式服务框架 Dubbo 的 RPC 框架使用 Dubbo 协议进行节点间通信，Dubbo 协议默认使用 Netty 作为基础通信组件，用于实现各进程节点之间的内部通信。

### 1.2.2 游戏行业

1）无论是手游服务端还是大型的网络游戏，Java 语言得到了越来越广泛的应用；
2）Netty 作为高性能的基础通信组件，提供了 TCP/UDP 和 HTTP 协议栈，方便定制和开发私有协议栈，账号登录服务器；
3）地图服务器之间可以方便的通过 Netty 进行高性能的通信。

### 1.2.3 大数据

1）经典的 Hadoop 的高性能通信和序列化组件 Avro的 RPC 框架，默认采用 Netty 进行跨界点通信；
2）它的 Netty Service 基于 Netty 框架二次封装实现。

# 第2章 Java BIO编程

## 2.1 I/O模型

### 2.1.1 I/O模型基本说明

1）I/O 模型简单的理解：就是用什么样的通道进行数据的发送和接收，很大程度上决定了程序通信的性能；
2）Java共支持3种网络编程模型/IO模式：BIO、NIO、AIO；
3）Java BIO ： 同步并阻塞(传统阻塞型)，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销 ；

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821003614806.png" alt="image-20210821003614806" style="zoom: 50%;" />

4）Java NIO ： 同步非阻塞，服务器实现模式为一个线程处理多个请求(连接)，即客户端发送的连接请求都会注册到多路复用器上，多路复用器轮询到连接有I/O请求就进行处理；

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821003812822.png" alt="image-20210821003812822" style="zoom:50%;" />

5）Java AIO(NIO.2) ： 异步非阻塞，AIO 引入异步通道的概念，采用了Proactor 模式，简化了程序编写，有效的请求才启动线程，它的特点是先由操作系统完成后才通知服务端程序启动线程去处理，一般适用于连接数较多且连接时间较长的应用。

## 2.2 适用场景分析

1）BIO方式适用于连接数目比较小且固定的架构，这种方式对服务器资源要求比较高，并发局限于应用中，JDK1.4以前的唯一选择，但程序简单易理解；
2）NIO方式适用于连接数目多且连接比较短（轻操作）的架构，比如聊天服务器，弹幕系统，服务器间通讯等。编程比较复杂，JDK1.4开始支持；
3）AIO方式使用于连接数目多且连接比较长（重操作）的架构，比如相册服务器，充分调用OS参与并发操作，编程比较复杂，JDK7开始支持。

|      | 特点                   | 出现版本             | 使用场景                         | 使用示例                           |
| ---- | ---------------------- | -------------------- | -------------------------------- | ---------------------------------- |
| BIO  | 同步并阻塞(传统阻塞型) | JDK1.4以前的唯一选择 | 连接数目比较小                   |                                    |
| NIO  | 同步非阻塞             | DK1.4开始支持        | 连接数目多且连接比较短（轻操作） | 聊天服务器、弹幕系统、服务器间通讯 |
| AIO  | 异步非阻塞             | JDK7开始支持。       | 连接数目多且连接比较长（重操作   | 相册服务器                         |

## 2.3 Java BIO基本介绍

1）Java BIO 就是传统的java io 编程，其相关的类和接口在 java.io ；
2）BIO(blocking I/O) ：同步阻塞，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销，可以通过线程池机制改善(实现多个客户连接服务器)；
3）BIO方式适用于连接数目比较小且固定的架构，这种方式对服务器资源要求比较高，并发局限于应用中，JDK1.4以前的唯一选择，程序简单易理解。

## 2.4 Java BIO工作机制

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821102025270.png" alt="image-20210821102025270" style="zoom:50%;" />

**BIO编程简单流程：**
1）服务器端启动一个ServerSocket；
2）客户端启动Socket对服务器进行通信，默认情况下服务器端需要对每个客户建立一个线程与之通讯；
3）客户端发出请求后, 先咨询服务器是否有线程响应，如果没有则会等待，或者被拒绝；
4）如果有响应，客户端线程会等待请求结束后，在继续执行

## 2.5 Java BIO应用实例

**实例说明：**
1）使用BIO模型编写一个服务器端，监听6666端口，当有客户端连接时，就启动一个线程与之通讯；
2）要求使用线程池机制改善，可以连接多个客户端；
3）服务器端可以接收客户端发送的数据(telnet 方式即可)。

~~~java
package com.cccyl.netty.bio;

/**
 * @author cyl
 * @date 2021/08/21/9:48
 * @description
 */

import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 1)使用BIO模型编写一个服务器端，监听6666端口，当有客户端连接时，就启动一个线程与之通讯
 * 2)要求使用线程池机制改善，可以连接多个客户端
 * 3)服务器端可以接收客户端发送的数据(telnet 方式即可)
 */
public class BIOServerDemo {

    public static void main(String[] args) throws Exception{

        /**
         * 思路:
         *  1.创建一个线程池
         *  2.如果有客户端连接，就创建一个线程与之通信（单独一个方法）
         */
        ExecutorService newCachedThreadPool = Executors.newCachedThreadPool();

        /**
         * 创建serverSocket 指定端口为6666
         */
        ServerSocket serverSocket = new ServerSocket(6666);

        System.out.println("服务器启动了...");

        while (true) {

            System.out.println("线程信息:id=" + Thread.currentThread().getId() +
                    " 名称:" + Thread.currentThread().getName());

            /**
             * 监听，等待客户端进行连接
             */
            System.out.println("等待连接...");
            final Socket socket = serverSocket.accept();
            System.out.println("连接到一个客户端...");

            /**
             * 创建线程，进行通信
             */
            newCachedThreadPool.execute(() -> {
                handler(socket);
            });
        }
    }

    public static void handler(Socket socket) {
        byte[] bytes = new byte[1024];

        try {
            /**
             * 通过socket获得输入流
             */
            InputStream inputStream = socket.getInputStream();

            /**
             * 读取客户端发送的数据
             */
            while (true) {
                System.out.println("线程信息:id=" + Thread.currentThread().getId() +
                        " 名称:" + Thread.currentThread().getName());

                System.out.println("read...");
                int read = inputStream.read(bytes);
                if (read != -1) {
                    System.out.println(new String(bytes,0,read));
                } else {
                    break;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}
~~~

**Telnet使用说明**

1）cmd命令行输入进行连接

~~~shell
telnet 127.0.0.1 6666
~~~

若提示错误：“telnet”不是内部或外部命令，也不是可运行的程序或批处理文件

>[开启Telnet](https://jingyan.baidu.com/article/375c8e19bff04625f3a22961.html)

2）按Ctrl+]进行消息发送

3）发送消息

~~~shell
send helloworld
~~~

## 2.5 Java BIO问题分析

1）每个请求都需要创建独立的线程，与对应的客户端进行数据 Read，业务处理，数据 Write；
2）当并发数较大时，需要创建大量线程来处理连接，系统资源占用较大；
3）连接建立后，如果当前线程暂时没有数据可读，则线程就阻塞在 Read 操作上，造成线程资源浪费。

# 第3章 Java NIO编程

## 3.1 Java NIO基本介绍

1）Java NIO 全称java non-blocking IO，是指 JDK 提供的新 API。从 JDK1.4 开始，Java 提供了一系列改进的输入/输出的新特性，被统称为 NIO(即 New IO)，是同步非阻塞的；

2）NIO 相关类都被放在 java.nio包及子包下，并且对原 java.io 包中的很多类进行改写。【基本案例】

3）NIO 有三大核心部分：Channel(通道)，Buffer(缓冲区), Selector(选择器) 

4）NIO是 面向缓冲区 ，或者面向块编程的。数据读取到一个它稍后处理的缓冲区，需要时可在缓冲区中前后移动，这就增加了处理过程中的灵活性，使用它可以提供非阻塞式的高伸缩性网络

5）Java NIO的非阻塞模式，使一个线程从某通道发送请求或者读取数据，但是它仅能得到目前可用的数据，如果目前没有数据可用时，就什么都不会获取，而不是保持线程阻塞，所以直至数据变的可以读取之前，该线程可以继续做其他的事情。 非阻塞写也是如此，一个线程请求写入一些数据到某通道，但不需要等待它完全写入，这个线程同时可以去做别的事情。【后面有案例说明】
6）通俗理解：NIO是可以做到用一个线程来处理多个操作的。假设有10000个请求过来,根据实际情况，可以分配50或者100个线程来处理。不像之前的阻塞IO那样，非得分配10000个。
7）HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级。

8）案例说明BIO的Buffer

~~~java
package com.cccyl.netty.nio;

import java.nio.IntBuffer;

/**
 * @author cyl
 * @date 2021/08/21/10:40
 * @description java nio buffer简单示例
 */
public class BasicBufferDemo {

    public static void main(String[] args) throws Exception{
        IntBuffer intBuffer = IntBuffer.allocate(5);

        /**
         * 往buffer里面存放数据
         */
        for (int i = 0; i < intBuffer.capacity(); i++) {
            intBuffer.put(i * 2);
        }

        /**
         * 从buffer里面读取数据
         */
        /**
         * 先进行读写切换！！！
         */
        intBuffer.flip();

        while (intBuffer.hasRemaining()) {
            System.out.println(intBuffer.get());
        }
    }
}
~~~

## 3.2 BIO和NIO的比较

1）BIO 以流的方式处理数据,而 NIO 以块的方式处理数据,块 I/O 的效率比流 I/O 高很多
2）BIO 是阻塞的，NIO 则是非阻塞的
3）BIO基于字节流和字符流进行操作，而 NIO 基于 Channel(通道)和 Buffer(缓冲区)进行操作，数据总是从通道读取到缓冲区中，或者从缓冲区写入到通道中。Selector(选择器)用于监听多个通道的事件（比如：连接请求，数据到达等），因此使用单个线程就可以监听多个客户端通道。

## 3.3 NIO 三大核心原理示意图

Selector 、 Channel 和 Buffer 的关系图(简单版)

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821221245062.png" alt="image-20210821221245062" style="zoom: 80%;" />

关系图的说明:
1）每个channel 都会对应一个Buffer；
2）Selector 对应一个线程，一个线程对应多个channel(连接)；
3）该图反应了有三个channel 注册到 该selector；
4）程序切换到哪个channel 是有事件决定的, Event 就是一个重要的概念；
5）Selector 会根据不同的事件，在各个通道上切换；
6）Buffer 就是一个内存块， 底层是有一个数组；
7）数据的读取写入是通过Buffer, 这个和BIO , BIO 中要么是输入流，或者是输出流, 不能双向，但是NIO的Buffer 是可以读也可以写, 需要 flip 方法切换；
8）channel 是双向的, 可以返回底层操作系统的情况, 比如Linux ， 底层的操作系统通道就是双向的。

## 3.4 缓冲区（Buffer）

### 3.4.1 基本介绍

缓冲区（Buffer）：缓冲区本质上是一个可以读写数据的内存块，可以理解成是一个容器对象(含数组)，该对象提供了一组方法，可以更轻松地使用内存块，缓冲区对象内置了一些机制，能够跟踪和记录缓冲区的状态变化情况。Channel 提供从文件、网络读取数据的渠道，但是读取或写入的数据都必须经由 Buffer，如图:  

![image-20210821221638468](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821221638468.png)

### 3.4.2 Buffer类及其子类

1）在 NIO 中，Buffer 是一个顶层父类，它是一个抽象类, 类的层级关系图:

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821222041871.png" alt="image-20210821222041871" style="zoom: 67%;" />

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821221843327.png" alt="image-20210821221843327" style="zoom:50%;" />

2）Buffer类定义了所有的缓冲区都具有的四个属性来提供关于其所包含的数据元素的信息:

![image-20210821222141080](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821222141080.png)

| **属性** | **描述**                                                     |
| -------- | ------------------------------------------------------------ |
| Capacity | 容量，即可以容纳的最大数据量；在缓冲区创建时被设定并且不能改变 |
| Limit    | 表示缓冲区的当前终点，不能对缓冲区超过极限的位置进行读写操作。且极限是可以修改的 |
| Position | 位置，下一个要被读或写的元素的索引，每次读写缓冲区数据时都会改变改值，为下次读写作准备 |
| Mark     | 标记                                                         |

3）Buffer类相关方法一览

~~~java
public abstract class Buffer {
    //JDK1.4时，引入的api
    public final int capacity( )//返回此缓冲区的容量
    public final int position( )//返回此缓冲区的位置
    public final Buffer position (int newPositio)//设置此缓冲区的位置
    public final int limit( )//返回此缓冲区的限制
    public final Buffer limit (int newLimit)//设置此缓冲区的限制
    public final Buffer mark( )//在此缓冲区的位置设置标记
    public final Buffer reset( )//将此缓冲区的位置重置为以前标记的位置
    public final Buffer clear( )//清除此缓冲区, 即将各个标记恢复到初始状态，但是数据并没有真正擦除, 后面操作会覆盖
    public final Buffer flip( )//反转此缓冲区
    public final Buffer rewind( )//重绕此缓冲区
    public final int remaining( )//返回当前位置与限制之间的元素数
    public final boolean hasRemaining( )//告知在当前位置和限制之间是否有元素
    public abstract boolean isReadOnly( );//告知此缓冲区是否为只读缓冲区
 
    //JDK1.6时引入的api
    public abstract boolean hasArray();//告知此缓冲区是否具有可访问的底层实现数组
    public abstract Object array();//返回此缓冲区的底层实现数组
    public abstract int arrayOffset();//返回此缓冲区的底层实现数组中第一个缓冲区元素的偏移量
    public abstract boolean isDirect();//告知此缓冲区是否为直接缓冲区
}
~~~

### 3.4.3 ByteBuffer

从前面可以看出对于 Java 中的基本数据类型(boolean除外)，都有一个 Buffer 类型与之相对应，最常用的自然是ByteBuffer 类（二进制数据），该类的主要方法如下:

~~~java
public abstract class ByteBuffer {
    //缓冲区创建相关api
    public static ByteBuffer allocateDirect(int capacity)//创建直接缓冲区
    public static ByteBuffer allocate(int capacity)//设置缓冲区的初始容量
    public static ByteBuffer wrap(byte[] array)//把一个数组放到缓冲区中使用
    //构造初始化位置offset和上界length的缓冲区
    public static ByteBuffer wrap(byte[] array,int offset, int length)
     //缓存区存取相关API
    public abstract byte get( );//从当前位置position上get，get之后，position会自动+1
    public abstract byte get (int index);//从绝对位置get
    public abstract ByteBuffer put (byte b);//从当前位置上添加，put之后，position会自动+1
    public abstract ByteBuffer put (int index, byte b);//从绝对位置上put
 }
~~~

## 3.5 通道（Channel）

### 3.5.1 基本介绍

1）NIO的通道类似于流，但有些区别如下：
通道可以同时进行读写，而流只能读或者只能写；
通道可以实现异步读写数据；
通道可以从缓冲读数据，也可以写数据到缓冲；

2）BIO 中的 stream 是单向的，例如 FileInputStream 对象只能进行读取数据的操作，而 NIO 中的通道(Channel)是双向的，可以读操作，也可以写操作；
3）Channel在NIO中是一个接口；

~~~java
public interface Channel extends Closeable{} 
~~~

4）常用的 Channel 类有：FileChannel、DatagramChannel、ServerSocketChannel 和 SocketChannel。【ServerSocketChanne 类似 ServerSocket , SocketChannel 类似 Socket】；

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821222904980.png" alt="image-20210821222904980" style="zoom:67%;" />

5）FileChannel 用于文件的数据读写，DatagramChannel 用于 UDP 的数据读写，ServerSocketChannel 和 SocketChannel 用于 TCP 的数据读写。

### 3.5.2 FileChannel 类

FileChannel主要用来对本地文件进行 IO 操作，常见的方法有：

~~~java
public int read(ByteBuffer dst) ，从通道读取数据并放到缓冲区中
public int write(ByteBuffer src) ，把缓冲区的数据写到通道中
public long transferFrom(ReadableByteChannel src, long position, long count)，从目标通道中复制数据到当前通道
public long transferTo(long position, long count, WritableByteChannel target)，把数据从当前通道复制给目标通道
~~~

#### 3.5.2.1应用实例1-本地文件写数据

实例要求: 
1）使用前面学习后的ByteBuffer(缓冲) 和 FileChannel(通道)， 将字符串写入到file01.txt中；
2）文件不存在就创建；
3）代码演示。

~~~java
package com.cccyl.netty.nio;

import java.io.FileOutputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.StandardCharsets;

/**
 * @author cyl
 * @date 2021/08/21/16:11
 * @description 本地文件写数据
 */
public class NIOFileChannelDemo1 {

    public static void main(String[] args) throws Exception{

        String str = "hello,cyl";
        /**
         * 定义一个输出流
         */
        FileOutputStream fileOutputStream = new FileOutputStream("e://file01.txt");

        /**
         * 从输出流获取通道
         */
        FileChannel fileChannel = fileOutputStream.getChannel();

        /**
         * 定义一个缓冲区
         */
        ByteBuffer byteBuffer = ByteBuffer.allocate(1024);

        /**
         * 将要输出的字符串放入缓冲区
         */
        byteBuffer.put(str.getBytes(StandardCharsets.UTF_8));

        /**
         * 对缓冲区进行反转 position=0
         */
        byteBuffer.flip();

        /**
         * 将缓冲区的数据写入到channel
         */
        fileChannel.write(byteBuffer);

        /**
         * 关闭输出流
         */
        fileOutputStream.close();
    }
}
~~~

#### 3.5.2.2 应用实例2-本地文件读数据

实例要求: 
1）使用前面学习后的ByteBuffer(缓冲) 和 FileChannel(通道)， 将 file01.txt中的数据读入到程序，并显示在控制台屏幕；
2）假定文件已经存在；
3）代码演示。

~~~java
package com.cccyl.netty.nio;

import java.io.File;
import java.io.FileInputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

/**
 * @author cyl
 * @date 2021/08/21/16:20
 * @description 从本地文件读数据
 */
public class NIOFileChannelDemo2 {

    public static void main(String[] args) throws Exception{

        /**
         * 创建一个输入流
         */
        File file = new File("e://file01.txt");
        FileInputStream fileInputStream = new FileInputStream(file);

        /**
         * 从流中获取通道
         */
        FileChannel fileInputStreamChannel = fileInputStream.getChannel();

        /**
         * 创建一个缓冲区
         */
        ByteBuffer byteBuffer = ByteBuffer.allocate((int) file.length());

        /**
         * 将通道的数据读入到缓冲区
         */
        fileInputStreamChannel.read(byteBuffer);

        /**
         * 将缓冲区的字节数据转成String并输出
         */
        System.out.println(new String(byteBuffer.array()));

        /**
         * 关闭输入流
         */
        fileInputStream.close();

    }
}
~~~

#### 3.5.2.3 应用实例3-使用一个Buffer完成文件读取

实例要求: 

![image-20210821223814767](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210821223814767.png)1）使用 FileChannel(通道) 和方法 read,write,完成文件的拷贝；
2）拷贝一个文本文件 1.txt  , 放在项目下即可；
3)代码演示

~~~java
package com.cccyl.netty.nio;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

/**
 * @author cyl
 * @date 2021/08/21/16:36
 * @description 使用一个Buffer完成文件读取:使用 FileChannel(通道) 和 方法  read , write，完成文件的拷贝
 */
public class NIOFileChannelDemo3 {

    public static void main(String[] args) throws Exception{

        FileInputStream fileInputStream = new FileInputStream("E://Java//java-study//java-netty//1.txt");
        FileChannel channel01 = fileInputStream.getChannel();

        FileOutputStream fileOutputStream = new FileOutputStream("E://Java//java-study//java-netty//2.txt");
        FileChannel channel02 = fileOutputStream.getChannel();

        ByteBuffer byteBuffer = ByteBuffer.allocate(128);

        while (true) {

            /**
             * 最重要的一步!!!
             *   public final Buffer clear() {
             *         position = 0;
             *         limit = capacity;
             *         mark = -1;
             *         return this;
             *     }
             */
            byteBuffer.clear();

            int read = channel01.read(byteBuffer);
            System.out.println("read=" + read);

            if (read  -1) {
                break;
            }

            /**
             * 缓冲区position反转
             */
            byteBuffer.flip();

            channel02.write(byteBuffer);
        }

        fileInputStream.close();
        fileOutputStream.close();


    }
}
~~~

#### 3.5.2.4 应用实例4-拷贝文件transferFrom 方法

实例要求: 
1）使用 FileChannel(通道) 和 方法  transferFrom ，完成文件的拷贝；
2）拷贝一张图片；
3）代码演示

~~~java
package com.cccyl.netty.nio;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.channels.FileChannel;

/**
 * @author cyl
 * @date 2021/08/21/16:49
 * @description 拷贝文件transferFrom方法:使用 FileChannel(通道) 和 方法  transferFrom ，完成文件的拷贝
 */
public class NIOFileChannelDemo4 {

    public static void main(String[] args) throws Exception{

        FileInputStream fileInputStream = new FileInputStream("E://Java//java-study//java-netty//a.jpg");
        FileChannel sourceChannel = fileInputStream.getChannel();

        FileOutputStream fileOutputStream = new FileOutputStream("E://Java//java-study//java-netty//b.jpg");
        FileChannel targetChannel = fileOutputStream.getChannel();

//        sourceChannel.transferTo(0,sourceChannel.size(),targetChannel);
        sourceChannel.transferFrom(sourceChannel,0,sourceChannel.size());

        fileInputStream.close();
        fileOutputStream.close();
    }
}
~~~

#### 3.5.3 关于Buffer 和 Channel的注意事项和细节

1）ByteBuffer 支持类型化的put 和 get, put 放入的是什么数据类型，get就应该使用相应的数据类型来取出，否则可能有 BufferUnderflowException 异常；

~~~java
package com.cccyl.netty.nio;

import java.nio.ByteBuffer;

/**
 * @author cyl
 * @date 2021/08/21/18:00
 * @description ByteBuffer 支持类型化的put和get, put放入的是什么数据类型，get就应该使用相应的数据类型来取出，
 *  否则可能有BufferUnderflowException异常
 */
public class ByteBufferPutAndGetDemo {

    public static void main(String[] args) {

        ByteBuffer byteBuffer = ByteBuffer.allocate(128);

        byteBuffer.putInt(5);
        byteBuffer.putShort((short)6);
        byteBuffer.putLong(7L);
        byteBuffer.putChar('a');
        byteBuffer.putDouble(8.0);

        /**
         * 反转
         */
        byteBuffer.flip();

        System.out.println(byteBuffer.getInt());
        System.out.println(byteBuffer.getShort());
        System.out.println(byteBuffer.getLong());
        System.out.println(byteBuffer.getChar());
        System.out.println(byteBuffer.getDouble());

//        System.out.println(byteBuffer.getDouble());
//        System.out.println(byteBuffer.getLong());
//        System.out.println(byteBuffer.getInt());
//        System.out.println(byteBuffer.getShort());
//        System.out.println(byteBuffer.getChar());
    }
}
~~~

2）可以将一个普通Buffer 转成只读Buffer；

~~~java
package com.cccyl.netty.nio;

import java.nio.ByteBuffer;

/**
 * @author cyl
 * @date 2021/08/21/18:14
 * @description 只读Buffer
 */
public class ReadOnlyBufferDemo {

    public static void main(String[] args){

        ByteBuffer byteBuffer = ByteBuffer.allocate(5);

        for (int i = 0; i < 5; i++) {
            byteBuffer.put((byte) i);
        }

        /**
         * 反转
         */
        byteBuffer.flip();

        /**
         * 得到一个只读buffer
         */
        ByteBuffer readOnlyBuffer = byteBuffer.asReadOnlyBuffer();

        System.out.println(readOnlyBuffer.getClass());

        while (readOnlyBuffer.hasRemaining()) {
            System.out.println(readOnlyBuffer.get());
        }

        /**
         * Exception in thread "main" java.nio.ReadOnlyBufferException
         */
        readOnlyBuffer.put((byte) 100);

    }
}
~~~

3）NIO 还提供了 MappedByteBuffer， 可以让文件直接在内存（堆外的内存）中进行修改， 而如何同步到文件由NIO 来完成；

~~~java
package com.cccyl.netty.nio;

import java.io.RandomAccessFile;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;

/**
 * @author cyl
 * @date 2021/08/21/18:20
 * @description MappedByteBuffer 可以让文件直接在内存（堆外的内存）中进行修改，而如何同步到文件由NIO来完成，操作系统不需要拷贝一次
 */
public class MappedByteBufferDemo {

    public static void main(String[] args) throws Exception{

        RandomAccessFile randomAccessFile = new RandomAccessFile("E://Java//java-study//java-netty//1.txt","rw");

        /**
         * 创建channel
         */
        FileChannel channel = randomAccessFile.getChannel();

        /**
         * 创建mappedByteBuffer
         */
        /**
         * 参数说明：
         *  参数1：FileChannel.MapMode.READ_WRITE 使用的读写模式
         *  参数2：可以直接修改的起始位置
         *  参数3：是映射到内存的大小（不是索引位置），即将1.txt的多少个字节映射到内存，区间长度
         *  可以修改的范围是[0,5)
         *  实际类型是DirectByteBuffer
         */
        MappedByteBuffer mappedByteBuffer = channel.map(FileChannel.MapMode.READ_WRITE, 0, 5);

        /**
         * 进行修改操作
         */
        mappedByteBuffer.put(0,(byte)'H');
        mappedByteBuffer.put(3,(byte) '9');
//        mappedByteBuffer.put(5,(byte) 't'); //Exception in thread "main" java.lang.IndexOutOfBoundsException

        randomAccessFile.close();

        System.out.println("修改成功!");
    }
}
~~~

4）NIO 还支持通过多个Buffer (即Buffer数组) 完成读写操作，即Scattering和Gathering

~~~Java
package com.cccyl.netty.nio;

import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.util.Arrays;

/**
 * @author cyl
 * @date 2021/08/21/18:34
 * @description
 *  Scattering：将数据写入到buffer时，可以采用buffer数组，依次写入 分散
 *  Gathering：从buffer读取数据时，可以采用buffer数组，依次读入
 */
public class ScatteringAndGatheringDemo {

    public static void main(String[] args) throws Exception{

        /**
         * 使用serverSocketChannel
         */
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();

        InetSocketAddress address = new InetSocketAddress(7000);

        /**
         * 绑定7000端口
         */
        serverSocketChannel.socket().bind(address);

        /**
         * 创建buffer数组
         */
        ByteBuffer[] byteBuffers = new ByteBuffer[2];
        byteBuffers[0] = ByteBuffer.allocate(5);
        byteBuffers[1] = ByteBuffer.allocate(3);

        /**
         * 等待客户端连接
         */
        SocketChannel socketChannel = serverSocketChannel.accept();

        /**
         * 假设从客户端接收8个字节
         */
        int messageLength = 8;

        while (true) {

            int byteRead = 0;

            while (byteRead < messageLength) {
                long read = socketChannel.read(byteBuffers);

                byteRead += read;

                System.out.println("byteRead=" + byteRead);

                Arrays.asList(byteBuffers).stream().map(byteBuffer ->
                    "position=" + byteBuffer.position() + " limit=" + byteBuffer.limit()
                ).forEach(System.out::println);

                /**
                 * 将所有的buffer进行反转
                 */
                Arrays.asList(byteBuffers).forEach(byteBuffer -> byteBuffer.flip());
            }

            /**
             * 将数据读出到客户端
             */
            int byteWrite = 0;
            while (byteWrite < messageLength) {
                long l = socketChannel.write(byteBuffers);
                byteWrite += l;

            }

            /**
             * 将所有的buffer clear
             */
            Arrays.asList(byteBuffers).stream().forEach(byteBuffer -> byteBuffer.clear());

        }
    }
}
~~~

## 3.6 选择器(Selector)

### 3.6.1 基本介绍

1）Java 的 NIO，用非阻塞的 IO 方式，可以用一个线程，处理多个的客户端连接，就会使用到Selector(选择器)；
2）Selector 能够检测多个注册的通道上是否有事件发生(注意:多个Channel以事件的方式可以注册到同一个Selector)，如果有事件发生，便获取事件然后针对每个事件进行相应的处理，这样就可以只用一个单线程去管理多个通道，也就是管理多个连接和请求；
3）只有在连接/通道 真正有读写事件发生时，才会进行读写，就大大地减少了系统开销，并且不必为每个连接都创建一个线程，不用去维护多个线程；
4）避免了多线程之间的上下文切换导致的开销。

### 3.6.2 Selector示意图和特点说明

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210823221331628.png" alt="image-20210823221331628" style="zoom:80%;" />

特点说明:
1）Netty 的 IO 线程 NioEventLoop 聚合了 Selector(选择器，也叫多路复用器)，可以同时并发处理成百上千个客户端连接；
2）当线程从某客户端 Socket 通道进行读写数据时，若没有数据可用时，该线程可以进行其他任务；
3）线程通常将非阻塞 IO 的空闲时间用于在其他通道上执行 IO 操作，所以单独的线程可以管理多个输入和输出通道；
4）由于读写操作都是非阻塞的，这就可以充分提升 IO 线程的运行效率，避免由于频繁 I/O 阻塞导致的线程挂起；
5）一个 I/O 线程可以并发处理 N 个客户端连接和读写操作，这从根本上解决了传统同步阻塞 I/O 一连接一线程模型，架构的性能、弹性伸缩能力和可靠性都得到了极大的提升。

### 3.6.3 Selector类相关方法

Selector 类是一个抽象类, 常用方法和说明如下:

~~~java
public abstract class Selector implements Closeable { 
public static Selector open();//得到一个选择器对象
public int select(long timeout);//监控所有注册的通道，当其中有 IO 操作可以进行时，将
对应的 SelectionKey 加入到内部集合中并返回，参数用来设置超时时间
public Set<SelectionKey> selectedKeys();//从内部集合中得到所有的 SelectionKey	
}
~~~

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210823221640046.png" alt="image-20210823221640046" style="zoom:80%;" />

注意事项
1)NIO中的 ServerSocketChannel功能类似ServerSocket，SocketChannel功能类似Socket
2)selector 相关方法说明

```java
selector.select()//阻塞
selector.select(1000);//阻塞1000毫秒，在1000毫秒后返回
selector.wakeup();//唤醒selector
selector.selectNow();//不阻塞，立马返还
```

## 3.7 NIO非阻塞网络编程

### 3.7.1 原理分析

![image-20210823221834900](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210823221834900.png)

说明:
1)当客户端连接时，会通过ServerSocketChannel 得到 SocketChannel；
2)Selector 进行监听  select 方法, 返回有事件发生的通道的个数；
3)将socketChannel注册到Selector上, register(Selector sel, int ops), 一个selector上可以注册多个SocketChannel；
4)注册后返回一个 SelectionKey, 会和该Selector 关联(集合)；
5)进一步得到各个 SelectionKey (有事件发生)；
6)在通过 SelectionKey  反向获取 SocketChannel , 方法 channel()；
7)可以通过  得到的 channel  , 完成业务处理。

### 3.7.2 快速入门

**案例要求:**  
1）编写一个 NIO 入门案例，实现服务器端和客户端之间的数据简单通讯（非阻塞）
2）目的：理解NIO非阻塞网络编程机制

~~~java
package com.cccyl.netty.nio;

import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.util.Iterator;
import java.util.Set;

/**
 * @author cyl
 * @date 2021/08/22/9:48
 * @description NIO网络编程服务端
 */
public class NIOServerDemo {

    public static void main(String[] args) throws Exception{

        //创建serverSocketChannel -->serverSocket
        ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();

        //创建selector对象
        Selector selector = Selector.open();

        //绑定端口
        serverSocketChannel.socket().bind(new InetSocketAddress(7000));

        //设定为非阻塞
        serverSocketChannel.configureBlocking(false);

        //将channel注册到selector,OP_ACCEPT
        serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);

        //循环等待客户端连接
        while(true) {

            //等待1秒，如果没有事件发生，就返回
            if (selector.select(1000)  0) {
                System.out.println("服务起等待了1秒，没有连接....");
                continue;
            }

            //如果返回的>0，就获取到相应的selectionKey
            Set<SelectionKey> selectionKeys = selector.selectedKeys();

            //通过selectionKey反向获取channel
            Iterator<SelectionKey> iterator = selectionKeys.iterator();

            //使用迭代器遍历
            while (iterator.hasNext()) {

                SelectionKey selectionKey = iterator.next();

                //根据key对应的通道发生的事件进行处理
                if (selectionKey.isAcceptable()) {
                    //如果是OP_ACCEPT，表示有新的客户端连接
                    SocketChannel socketChannel = serverSocketChannel.accept();

                    System.out.println("客户端连接成功，生成socketChannel:" + socketChannel.hashCode());

                    //设置为非阻塞
                    socketChannel.configureBlocking(false);

                    //将channel注册到selector,关注事件为OP_READ，同时关联上一个ByteBuffer
                    socketChannel.register(selector, SelectionKey.OP_READ, ByteBuffer.allocate(1024));
                }

                if (selectionKey.isReadable()) {
                    //关注OP_READ事件
                    SocketChannel socketChannel = (SocketChannel) selectionKey.channel();

                    //获取到该channel关联的buffer
                    ByteBuffer byteBuffer = (ByteBuffer) selectionKey.attachment();

                    socketChannel.read(byteBuffer);

                    System.out.println("form 客户端:" + new String(byteBuffer.array()));
                }

                //手动移除selectionKey,防止重复操作
                iterator.remove();
            }
        }
    }
}
~~~

~~~java
package com.cccyl.netty.nio;

import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;

/**
 * @author cyl
 * @date 2021/08/22/10:13
 * @description NIO网络编程客户端
 */
public class NIOClientDemo {

    public static void main(String[] args) throws Exception{

        //创建socketChannel
        SocketChannel socketChannel = SocketChannel.open();

        //设置为非阻塞
        socketChannel.configureBlocking(false);

        //绑定服务器地址
        InetSocketAddress socketAddress = new InetSocketAddress("127.0.0.1",7000);

        //连接服务器
        if (!socketChannel.connect(socketAddress)) {
            //连接不成功，不用阻塞，可以做其他事
            while (!socketChannel.finishConnect()) {
                System.out.println("因为连接需要时间，客户端不会阻塞，可以做其他事....");
            }
        }

        //如果连接成功，就发送数据
        String str = "hello world 我爱你";

        ByteBuffer byteBuffer = ByteBuffer.wrap(str.getBytes(StandardCharsets.UTF_8));

        //将byteBuffer写入到通道
        socketChannel.write(byteBuffer);

        System.in.read();


    }
}
~~~

### 3.7.3 SelectionKey

1）SelectionKey，表示 Selector 和网络通道的注册关系, 共四种:
int OP_ACCEPT：有新的网络连接可以 accept，值为 16
int OP_CONNECT：代表连接已经建立，值为 8
int OP_READ：代表读操作，值为 1 
int OP_WRITE：代表写操作，值为 4
源码中：

```java
public static final int OP_READ = 1 << 0; 
public static final int OP_WRITE = 1 << 2;
public static final int OP_CONNECT = 1 << 3;
public static final int OP_ACCEPT = 1 << 4;
```

2）SelectionKey相关方法：

~~~java
public abstract class SelectionKey {
     public abstract Selector selector();//得到与之关联的 Selector 对象
     public abstract SelectableChannel channel();//得到与之关联的通道
     public final Object attachment();//得到与之关联的共享数据
     public abstract SelectionKey interestOps(int ops);//设置或改变监听事件
     public final boolean isAcceptable();//是否可以 accept
     public final boolean isReadable();//是否可以读
     public final boolean isWritable();//是否可以写
}
~~~

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210823222330092.png" alt="image-20210823222330092" style="zoom:80%;" />

### 3.7.4 ServerSocketChannel

1）ServerSocketChannel 在服务器端监听新的客户端 Socket 连接；
2）相关方法如下：

~~~java
public abstract class ServerSocketChannel    extends AbstractSelectableChannel    implements NetworkChannel{
    public static ServerSocketChannel open()，得到一个 ServerSocketChannel 通道
    public final ServerSocketChannel bind(SocketAddress local)，设置服务器端端口号
    public final SelectableChannel configureBlocking(boolean block)，设置阻塞或非阻塞模式，取值 false 表示采用非阻塞模式
    public SocketChannel accept()，接受一个连接，返回代表这个连接的通道对象
    public final SelectionKey register(Selector sel, int ops)，注册一个选择器并设置监听事件
}
~~~

<img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210823222440346.png" alt="image-20210823222440346"  />

### 3.7.5 SocketChannel 

1）SocketChannel，网络 IO 通道，具体负责进行读写操作，NIO 把缓冲区的数据写入通道，或者把通道里的数据读到缓冲区；
2）相关方法如下：

~~~java
public abstract class SocketChannel    extends AbstractSelectableChannel    implements ByteChannel, ScatteringByteChannel, GatheringByteChannel, NetworkChannel{
    public static SocketChannel open();//得到一个 SocketChannel 通道
    public final SelectableChannel configureBlocking(boolean block);//设置阻塞或非阻塞模式，取值 false 表示采用非阻塞模式
    public boolean connect(SocketAddress remote);//连接服务器
    public boolean finishConnect();//如果上面的方法连接失败，接下来就要通过该方法完成连接操作
    public int write(ByteBuffer src);//往通道里写数据
    public int read(ByteBuffer dst);//从通道里读数据
    public final SelectionKey register(Selector sel, int ops, Object att);//注册一个选择器并设置监听事件，最后一个参数可以设置共享数据
    public final void close();//关闭通道
}
~~~

![image-20210823222554668](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210823222554668.png)

### 3.7.6 NIO 网络编程应用实例-群聊系统

实例要求: 
1）编写一个 NIO 群聊系统，实现服务器端和客户端之间的数据简单通讯（非阻塞）；
2）实现多人群聊；
3）服务器端：可以监测用户上线，离线，并实现消息转发功能；
4）客户端：通过channel 可以无阻塞发送消息给其它所有用户，同时可以接受其它用户发送的消息(有服务器转发得到)；
5）目的：进一步理解NIO非阻塞网络编程机制。

~~~java
package com.cccyl.netty.nio.groupchat;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.Channel;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.ServerSocketChannel;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Iterator;
import java.util.Set;

/**
 * @author cyl
 * @date 2021/08/23/20:27
 * @description 群聊系统服务端
 */
public class GroupChatServerDemo {

    /**
     * 定义属性
     */
    private Selector selector;//多路复用选择器

    private ServerSocketChannel serverSocketChannel;//serverSocketChannel

    private final String SERVER_ADDRESS = "127.0.0.1";//ip

    private final int SERVER_PORT = 7000; //端口

    //初始化
    public GroupChatServerDemo() {

        try {
            //selector
            selector = Selector.open();

            //serverSocketChannel
            serverSocketChannel = ServerSocketChannel.open();

            //绑定ip 端口号
            serverSocketChannel.socket().bind(new InetSocketAddress(SERVER_ADDRESS,SERVER_PORT));

            //开启非阻塞模式
            serverSocketChannel.configureBlocking(false);

            //将channel注册到selector
            serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 处理监听事件
     */
    public void listen() {

        try {
            while (true) {
                int count = selector.select();

                if (count > 0) {
                    //有件事处理
                    Set<SelectionKey> selectionKeys = selector.selectedKeys();

                    Iterator<SelectionKey> iterator = selectionKeys.iterator();

                    while (iterator.hasNext()) {
                        SelectionKey selectionKey = iterator.next();

                        if (selectionKey.isAcceptable()) {
                            SocketChannel channel = serverSocketChannel.accept();

                            channel.configureBlocking(false);

                            channel.register(selector, SelectionKey.OP_READ);

                            //提示
                            System.out.println("[" + channel.getRemoteAddress() +  "]-->[" + new Date() + "]-->上线了...");

                        }

                        if (selectionKey.isReadable()) {
                            //读取客户端消息
                            readClientMessage(selectionKey);
                        }

                        iterator.remove();
                    }
                } else {
                    System.out.println("[" + new Date() + "]" + "服务器等待中...");
                }


            }


        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //读取客户端消息
    public void readClientMessage(SelectionKey selectionKey) {

        //取到关联的channel
        SocketChannel socketChannel = null;

        try {
            socketChannel = (SocketChannel) selectionKey.channel();

            ByteBuffer byteBuffer = ByteBuffer.allocate(1024);

            socketChannel.read(byteBuffer);

            String msg = new String(byteBuffer.array());

            System.out.println("["+ socketChannel.getRemoteAddress() + "]-->[" + new Date() + "]-->msg:" + msg);

            //服务器将消息妆发给其他客户端，注意排除自己
            sendMsgToOtherClients(socketChannel, msg);

        } catch (IOException e) {
            //出现异常，说明该客户端下线了
            try {
                System.out.println("["+ socketChannel.getRemoteAddress() + "]-->[" + new Date() + "]-->下线了...");

                //取消注册
                selectionKey.cancel();

                //关闭通道
                socketChannel.close();

            } catch (IOException ioException) {
                ioException.printStackTrace();
            }

        }
    }

    //服务器转发消息给其他客户端
    public void sendMsgToOtherClients(SocketChannel self,String msg) {

        System.out.println("[" + new Date() + "]" + "服务器转发消息中...");

        try {

            //获取所有注册到selector上的socketChannel并排除自己
            Set<SelectionKey> keys = selector.keys();

            for (SelectionKey key:keys) {
                Channel channel = key.channel();

                if (channel instanceof SocketChannel && channel != self) {
                    SocketChannel socketChannel = (SocketChannel) channel;

                    //将msg存储到ByteBuffer中
                    ByteBuffer byteBuffer = ByteBuffer.wrap(msg.getBytes(StandardCharsets.UTF_8));

                    socketChannel.write(byteBuffer);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static void main(String[] args) {
        GroupChatServerDemo groupChatServerDemo = new GroupChatServerDemo();
        groupChatServerDemo.listen();
    }

}
~~~

~~~java
package com.cccyl.netty.nio.groupchat;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.SocketChannel;
import java.nio.charset.StandardCharsets;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Set;
import java.util.concurrent.TimeUnit;

/**
 * @author cyl
 * @date 2021/08/23/21:47
 * @description 群聊系统客户端
 */
public class GroupChatClientDemo {

    private final String SERVER_IP = "127.0.0.1";

    private final int SERVER_PORT = 7000;

    private Selector selector;

    private SocketChannel socketChannel;

    private String userName;

    public GroupChatClientDemo() {
        try {
            selector = Selector.open();

            socketChannel = SocketChannel.open(new InetSocketAddress(SERVER_IP, SERVER_PORT));

            socketChannel.configureBlocking(false);

            socketChannel.register(selector, SelectionKey.OP_READ);

            userName = socketChannel.getLocalAddress().toString().substring(1);

            System.out.println(userName + "-->成功上线...");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    //客户端发送消息给服务端
    public void sendMsgToServer(String msg) {

        msg = userName + "-->说:" + msg;

        try {
            socketChannel.write(ByteBuffer.wrap(msg.getBytes(StandardCharsets.UTF_8)));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //客户端接收服务端发回的消息
    public void receiveMsgFromServer() {

        try {
            int read = selector.select();

            if (read > 0) {
                //有可以用的通道
                Set<SelectionKey> selectionKeys = selector.selectedKeys();
                Iterator<SelectionKey> iterator = selectionKeys.iterator();

                while (iterator.hasNext()) {
                    SelectionKey key = iterator.next();

                    SocketChannel channel = (SocketChannel) key.channel();

                    ByteBuffer byteBuffer = ByteBuffer.allocate(1024);

                    channel.read(byteBuffer);

                    System.out.println(new String(byteBuffer.array()).trim());

                    iterator.remove();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        GroupChatClientDemo groupChatClientDemo = new GroupChatClientDemo();

        new Thread(() -> {
            while (true) {
                groupChatClientDemo.receiveMsgFromServer();

                try {
                    TimeUnit.SECONDS.sleep(3);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

            }

        }).start();

        //向server发送消息
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNextLine()) {
            String next = scanner.next();
            groupChatClientDemo.sendMsgToServer(next);
        }
    }
}
~~~

## 3.8 NIO与零拷贝

### 3.8.1 零拷贝基本介绍 

1)零拷贝是网络编程的关键，很多性能优化都离不开;
2)在 Java 程序中，常用的零拷贝有mmap(内存映射) 和 sendFile。那么，他们在 OS 里，到底是怎么样的一个的设计？我们分析 mmap 和 sendFile 这两个零拷贝;
3)我们说零拷贝，是从操作系统的角度来说的，因为内核缓冲区之间，没有数据是重复的（只有 kernel buffer 有一份数据）;
4)零拷贝不仅仅带来更少的数据复制，还能带来其他的性能优势，例如更少的上下文切换，更少的 CPU 缓存伪共享以及无 CPU 校验和计算。

### 3.8.2 传统IO数据读写

Java 传统 IO 和 网络编程:

```java
File file = new File("test.txt");
RandomAccessFile raf = new RandomAccessFile(file, "rw");

byte[] arr = new byte[(int) file.length()];
raf.read(arr);

Socket socket = new ServerSocket(8080).accept();
socket.getOutputStream().write(arr);
```

### 3.8.3 传统IO 

![image-20210902182644172](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902182644172.png)

DMA: direct memory access直接内存拷贝(不使用CPU)

### 3.8.4 mmap 优化

mmap 通过内存映射，将文件映射到内核缓冲区，同时，用户空间可以共享内核空间的数据。这样，在进行网络传输时，就可以减少内核空间到用户控件的拷贝次数。

![image-20210902182844448](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902182844448.png)

### 3.8.5 sendFile 优化

1)Linux 2.1 版本 提供了 sendFile 函数，其基本原理如下：数据根本不经过用户态，直接从内核缓冲区进入到 Socket Buffer，同时，由于和用户态完全无关，就减少了一次上下文切换；

![image-20210902182938161](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902182938161.png)

2)Linux 在 2.4 版本中，做了一些修改，避免了从内核缓冲区拷贝到 Socket buffer 的操作，直接拷贝到协议栈，从而再一次减少了数据拷贝。这里其实有 一次cpu 拷贝kernel buffer -> socket buffer但是，拷贝的信息很少，比如lenght , offset , 消耗低，可以忽略。

### 3.8.6 mmap 和 sendFile 的区别

1)mmap 适合小数据量读写，sendFile 适合大文件传输;
2)mmap 需要 4 次上下文切换，3 次数据拷贝；sendFile 需要 3 次上下文切换，最少 2 次数据拷贝;
3)sendFile 可以利用 DMA 方式，减少 CPU 拷贝，mmap 则不能（必须从内核拷贝到 Socket 缓冲区）。

# 第4章 Java AIO编程

## 4.1 ava AIO 基本介绍

1)JDK 7 引入了 Asynchronous I/O，即 AIO。在进行 I/O 编程中，常用到两种模式：Reactor和 Proactor。Java 的 NIO 就是 Reactor，当有事件触发时，服务器端得到通知，进行相应的处理;
2)AIO 即 NIO2.0，叫做异步不阻塞的 IO。AIO 引入异步通道的概念，采用了 Proactor 模式，简化了程序编写，有效的请求才启动线程，它的特点是先由操作系统完成后才通知服务端程序启动线程去处理，一般适用于连接数较多且连接时间较长的应用

3)目前 AIO 还没有广泛应用，Netty 也是基于NIO, 而不是AIO， 因此我们就不详解AIO了，有兴趣的同学可以参考 <<Java新一代网络编程模型AIO原理及Linux系统AIO介绍>>  http://www.52im.net/thread-306-1-1.html  

## 4.2 BIO、NIO、AIO对比表

|          | **BIO**  | **NIO**                | **AIO**    |
| -------- | -------- | ---------------------- | ---------- |
| IO 模型  | 同步阻塞 | 同步非阻塞（多路复用） | 异步非阻塞 |
| 编程难度 | 简单     | 复杂                   | 复杂       |
| 可靠性   | 差       | 好                     | 好         |
| 吞吐量   | 低       | 高                     | 高         |

**举例说明** 
1)同步阻塞：到理发店理发，就一直等理发师，直到轮到自己理发;
2)同步非阻塞：到理发店理发，发现前面有其它人理发，给理发师说下，先干其他事情，一会过来看是否轮到自己;
3)异步非阻塞：给理发师打电话，让理发师上门服务，自己干其它事情，理发师自己来家给你理发.

# 第5章 Netty 概述

## 5.1 原生NIO存在的问题

1)NIO 的类库和 API 繁杂，使用麻烦：需要熟练掌握 Selector、ServerSocketChannel、SocketChannel、ByteBuffer 等;
2)需要具备其他的额外技能：要熟悉 Java 多线程编程，因为 NIO 编程涉及到 Reactor 模式，你必须对多线程和网络编程非常熟悉，才能编写出高质量的 NIO 程序;
3)开发工作量和难度都非常大：例如客户端面临断连重连、网络闪断、半包读写、失败缓存、网络拥塞和异常流的处理等等;
4)JDK NIO 的 Bug：例如臭名昭著的 Epoll Bug，它会导致 Selector 空轮询，最终导致 CPU 100%。直到 JDK 1.7 版本该问题仍旧存在，没有被根本解决。

## 5.2 Netty官网说明

1)Netty 是由 JBOSS 提供的一个 Java 开源框架。Netty 提供异步的、基于事件驱动的网络应用程序框架，用以快速开发高性能、高可靠性的网络 IO 程序;
 2)Netty 可以帮助你快速、简单的开发出一个网络应用，相当于简化和流程化了 NIO 的开发过程;
3)Netty 是目前最流行的 NIO 框架，Netty 在互联网领域、大数据分布式计算领域、游戏行业、通信行业等获得了广泛的应用，知名的 Elasticsearch 、Dubbo 框架内部都采用了 Netty。

![image-20210902184211723](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902184211723.png)

## 5.3 Netty的优点

Netty 对 JDK 自带的 NIO 的 API 进行了封装，解决了上述问题。
1)设计优雅：适用于各种传输类型的统一 API 阻塞和非阻塞 Socket；基于灵活且可扩展的事件模型，可以清晰地分离关注点；高度可定制的线程模型 - 单线程，一个或多个线程池;
2)使用方便：详细记录的 Javadoc，用户指南和示例；没有其他依赖项，JDK 5（Netty 3.x）或 6（Netty 4.x）就足够了。
高性能、吞吐量更高：延迟更低；减少资源消耗；最小化不必要的内存复制;
3)安全：完整的 SSL/TLS 和 StartTLS 支持;
4)社区活跃、不断更新：社区活跃，版本迭代周期短，发现的 Bug 可以被及时修复，同时，更多的新功能会被加入。

# 第6章 Netty 高性能架构设计

## 6.1 线程模型基本介绍

1)不同的线程模式，对程序的性能有很大影响，为了搞清Netty 线程模式，我们来系统的讲解下 各个线程模式， 最后看看Netty 线程模型有什么优越性;
2)目前存在的线程模型有：传统阻塞 I/O 服务模型 Reactor 模式;
3)根据 Reactor 的数量和处理资源池线程的数量不同，有 3 种典型的实现
单 Reactor 单线程
单 Reactor 多线程
主从 Reactor 多线程
4)Netty 线程模式(Netty 主要基于主从 Reactor 多线程模型做了一定的改进，其中主从 Reactor 多线程模型有多个 Reactor)

## 6.2 传统阻塞 I/O 服务模型

### 6.2.1工作原理图
黄色的框表示对象， 蓝色的框表示线程，白色的框表示方法(API)

![image-20210902184659396](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902184659396.png)

### 6.2.2 模型特点

1)采用阻塞IO模式获取输入的数据;
2_每个连接都需要独立的线程完成数据的输入，业务处理,数据返回。

### 6.2.3 问题分析

1)当并发数很大，就会创建大量的线程，占用很大系统资源;
2)连接创建后，如果当前线程暂时没有数据可读，该线程会阻塞在read 操作，造成线程资源浪费。

## 6.3 Reactor 模式

### 6.3.1 解决方案

1)基于 I/O 复用模型：多个连接共用一个阻塞对象，应用程序只需要在一个阻塞对象等待，无需阻塞等待所有连接。当某个连接有新的数据可以处理时，操作系统通知应用程序，线程从阻塞状态返回，开始进行业务处理Reactor 对应的叫法: 1. 反应器模式 2. 分发者模式(Dispatcher) 3. 通知者模式(notifier)；
2)基于线程池复用线程资源：不必再为每个连接创建线程，将连接完成后的业务处理任务分配给线程进行处理，一个线程可以处理多个连接的业务。

![image-20210902185122844](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902185122844.png)

### 6.3.2 模式说明

I/O 复用结合线程池，就是 Reactor 模式基本设计思想。

![image-20210902185222587](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902185222587.png)

说明:
1)Reactor 模式，通过一个或多个输入同时传递给服务处理器的模式(基于事件驱动);
3)服务器端程序处理传入的多个请求,并将它们同步分派到相应的处理线程， 因此Reactor模式也叫 Dispatcher模式;
3)Reactor 模式使用IO复用监听事件, 收到事件后，分发给某个线程(进程), 这点就是网络服务器高并发处理关键。

### 6.3.3 核心组成

1)Reactor：Reactor 在一个单独的线程中运行，负责监听和分发事件，分发给适当的处理程序来对 IO 事件做出反应。 它就像公司的电话接线员，它接听来自客户的电话并将线路转移到适当的联系人；
2)Handlers：处理程序执行 I/O 事件要完成的实际事件，类似于客户想要与之交谈的公司中的实际官员。Reactor 通过调度适当的处理程序来响应 I/O 事件，处理程序执行非阻塞操作。

### 6.3.4 模式分类

1)单 Reactor 单线程;
2)单 Reactor 多线程;
3)主从 Reactor 多线程。

### 6.3.5 单 Reactor 单线程

#### 6.3.5.1 工作原理示意图

![image-20210902185609854](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902185609854.png)

#### 6.3.5.2 方案说明

1)Select 是前面 I/O 复用模型介绍的标准网络编程 API，可以实现应用程序通过一个阻塞对象监听多路连接请求;
2)Reactor 对象通过 Select 监控客户端请求事件，收到事件后通过 Dispatch 进行分发;
3)如果是建立连接请求事件，则由 Acceptor 通过 Accept 处理连接请求，然后创建一个 Handler 对象处理连接完成后的后续业务处理;
4)如果不是建立连接事件，则 Reactor 会分发调用连接对应的 Handler 来响应;
5)Handler 会完成 Read→业务处理→Send 的完整业务流程。
**结合实例：**服务器端用一个线程通过多路复用搞定所有的 IO 操作（包括连接，读、写等），编码简单，清晰明了，但是如果客户端连接数量较多，将无法支撑，前面的 NIO 案例就属于这种模型。

#### 6.3.5.3 方案优缺点分析

1)**优点：**模型简单，没有多线程、进程通信、竞争的问题，全部都在一个线程中完成
2)**缺点：**性能问题，只有一个线程，无法完全发挥多核 CPU 的性能。Handler 在处理某个连接上的业务时，整个进程无法处理其他连接事件，很容易导致性能瓶颈
3)**缺点：**可靠性问题，线程意外终止，或者进入死循环，会导致整个系统通信模块不可用，不能接收和处理外部消息，造成节点故障
4)**使用场景**：客户端的数量有限，业务处理非常快速，比如 Redis在业务处理的时间复杂度 O(1) 的情况

### 6.3.6 单Reactor多线程

#### 6.3.6.1 工作原理示意图

![image-20210902185853080](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902185853080.png)

#### 6.3.6.2 方案说明

1)Reactor 对象通过select 监控客户端请求事件, 收到事件后，通过dispatch进行分发;
2)如果建立连接请求, 则右Acceptor 通过accept 处理连接请求, 然后创建一个Handler对象处理完成连接后的各种事件;
3)如果不是连接请求，则由reactor分发调用连接对应的handler 来处理;
4)handler 只负责响应事件，不做具体的业务处理, 通过read 读取数据后，会分发给后面的worker线程池的某个线程处理业务;
4)worker 线程池会分配独立线程完成真正的业务，并将结果返回给handler;
6)handler收到响应后，通过send 将结果返回给client。

#### 6.3.6.3 方案优缺点分析

1)**优点：**可以充分的利用多核cpu 的处理能力;
2)**缺点：**多线程数据共享和访问比较复杂， reactor 处理所有的事件的监听和响应，在单线程运行， 在高并发场景容易出现性能瓶颈。

### 6.3.7 主从 Reactor 多线程

#### 6.3.7.1 工作原理示意图

![image-20210902190110862](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902190110862.png)

#### 6.3.7.2 方案说明

1)Reactor主线程 MainReactor 对象通过select 监听连接事件, 收到事件后，通过Acceptor 处理连接事件;
2)当 Acceptor  处理连接事件后，MainReactor 将连接分配给SubReactor ;
3)subreactor 将连接加入到连接队列进行监听,并创建handler进行各种事件处理;
4)当有新事件发生时， subreactor 就会调用对应的handler处理;
5)handler 通过read 读取数据，分发给后面的worker 线程处理;
6)worker 线程池分配独立的worker 线程进行业务处理，并返回结果;
7)handler 收到响应的结果后，再通过send 将结果返回给client;
8)Reactor 主线程可以对应多个Reactor 子线程, 即MainRecator 可以关联多个SubReactor。

**Scalable IO in Java 对 Multiple Reactors 的原理图解：**

![image-20210902190242798](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902190242798.png)

![image-20210902190247890](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210902190247890.png)

#### 6.3.7.3 方案优缺点说明

1)**优点**：父线程与子线程的数据交互简单职责明确，父线程只需要接收新连接，子线程完成后续的业务处理;
2)**优点：**父线程与子线程的数据交互简单，Reactor 主线程只需要把新连接传给子线程，子线程无需返回数据;
3)**缺点：**编程复杂度较高;
4)**结合实例：**这种模型在许多项目中广泛使用，包括 Nginx 主从 Reactor 多进程模型，Memcached 主从多线程，Netty 主从多线程模型的支持。

### 6.3.7 Reactor 模式小结

**3 种模式用生活案例来理解**
1)单 Reactor 单线程，前台接待员和服务员是同一个人，全程为顾客服;
2)单 Reactor 多线程，1 个前台接待员，多个服务员，接待员只负责接待;
3)主从 Reactor 多线程，多个前台接待员，多个服务生。

**Reactor 模式具有如下的优点：**
1)响应快，不必为单个同步时间所阻塞，虽然 Reactor 本身依然是同步的;
2)可以最大程度的避免复杂的多线程及同步问题，并且避免了多线程/进程的切换开销;
3)扩展性好，可以方便的通过增加 Reactor 实例个数来充分利用 CPU 资源;
4)复用性好，Reactor 模型本身与具体事件处理逻辑无关，具有很高的复用性。

## 6.4 Netty模型

### 6.4.1 简单版

![image-20210903083616976](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210903083616976.png)

1)BossGroup 线程维护Selector , 只关注Accecpt;
2)当接收到Accept事件，获取到对应的SocketChannel, 封装成 NIOScoketChannel并注册到Worker 线程(事件循环), 并进行维护;
3)当Worker线程监听到selector 中通道发生自己感兴趣的事件后，就进行处理(就由handler)， 注意handler 已经加入到通道。

### 6.4.2 进阶版

![image-20210903083731222](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210903083731222.png)

### 6.4.3 详细版

![image-20210903083750466](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210903083750466.png)

1)Netty抽象出两组线程池 BossGroup 专门负责接收客户端的连接, WorkerGroup 专门负责网络的读写;
2)BossGroup 和 WorkerGroup 类型都是 NioEventLoopGroup;
3)NioEventLoopGroup 相当于一个事件循环组, 这个组中含有多个事件循环 ，每一个事件循环是 NioEventLoop;
4)NioEventLoop 表示一个不断循环的执行处理任务的线程， 每个NioEventLoop 都有一个selector , 用于监听绑定在其上的socket的网络通讯;
5)NioEventLoopGroup 可以有多个线程, 即可以含有多个NioEventLoop;
6)每个Boss NioEventLoop 循环执行的步骤有3步;
	1.轮询accept 事件
	2.处理accept 事件 , 与client建立连接 , 生成NioScocketChannel , 并将其注册到某个worker NIOEventLoop 上的 selector 
	3.处理任务队列的任务 ， 即 runAllTasks

7)每个 Worker NIOEventLoop 循环执行的步骤;
	1.轮询read, write 事件
	2.处理i/o事件， 即read , write 事件，在对应NioScocketChannel 处理
	3.处理任务队列的任务 ， 即 runAllTasks

8)每个Worker NIOEventLoop  处理业务时，会使用pipeline(管道), pipeline 中包含了 channel , 即通过pipeline 可以获取到对应通道, 管道中维护了很多的 处理器。

### 6.4.4 Netty快速入门实例-TCP服务

实例要求：

1)使用IDEA 创建Netty项目;
2)Netty 服务器在 6668 端口监听，客户端能发送消息给服务器 "hello, 服务器~";
3)服务器可以回复消息给客户端 "hello, 客户端~";

### 6.4.5 任务队列

1)用户程序自定义的普通任务 [举例说明]
2)用户自定义定时任务;
3)非当前 Reactor 线程调用 Channel 的各种方法

4)例如在推送系统的业务线程里面，根据用户的标识，找到对应的 Channel 引用，然后调用 Write 类方法向该用户推送消息，就会进入到这种场景。最终的 Write 会提交到任务队列中后被异步消费

### 6.4.6  总结

**方案再说明**
1)Netty 抽象出两组线程池，BossGroup 专门负责接收客户端连接，WorkerGroup 专门负责网络读写操作;
2)NioEventLoop 表示一个不断循环执行处理任务的线程，每个 NioEventLoop 都有一个 selector，用于监听绑定在其上的 socket 网络通道;
3)NioEventLoop 内部采用串行化设计，从消息的读取->解码->处理->编码->发送，始终由 IO 线程 NioEventLoop 负责。
NioEventLoopGroup 下包含多个 NioEventLoop
每个 NioEventLoop 中包含有一个 Selector，一个 taskQueue
每个 NioEventLoop 的 Selector 上可以注册监听多个 NioChannel
每个 NioChannel 只会绑定在唯一的 NioEventLoop 上
每个 NioChannel 都绑定有一个自己的 ChannelPipeline

## 6.5 异步模型

### 6.5.1 基本介绍

1)异步的概念和同步相对。当一个异步过程调用发出后，调用者不能立刻得到结果。实际处理这个调用的组件在完成后，通过状态、通知和回调来通知调用者;
2)Netty 中的 I/O 操作是异步的，包括 Bind、Write、Connect 等操作会简单的返回一个 ChannelFuture;
3)调用者并不能立刻获得结果，而是通过 Future-Listener 机制，用户可以方便的主动获取或者通过通知机制获得 IO 操作结果;
4)Netty 的异步模型是建立在 future 和 callback 的之上的。callback 就是回调。重点说 Future，它的核心思想是：假设一个方法 fun，计算过程可能非常耗时，等待 fun返回显然不合适。那么可以在调用 fun 的时候，立马返回一个 Future，后续可以通过 Future去监控方法 fun 的处理过程(即 ： Future-Listener 机制)。

**Future 说明**
1)表示异步的执行结果, 可以通过它提供的方法来检测执行是否完成，比如检索计算等等;
2)ChannelFuture 是一个接口 ： 
```java
public interface ChannelFuture extends Future<Void>
```
我们可以添加监听器，当监听的事件发生时，就会通知到监听器。案例说明

### 6.5.2 工作原理示意图

![image-20210906182945241](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210906182945241.png)

**说明:**
1)在使用 Netty 进行编程时，拦截操作和转换出入站数据只需要您提供 callback 或利用future 即可。这使得链式操作简单、高效, 并有利于编写可重用的、通用的代码;
2)Netty 框架的目标就是让你的业务逻辑从网络基础应用编码中分离出来、解脱出来。

### 6.5.3 Future-Listener 机制

举例说明
演示：绑定端口是异步操作，当绑定操作处理完，将会调用相应的监听器处理逻辑

~~~java
serverBootstrap.bind(port).addListener(future -> {
       if(future.isSuccess()) {
           System.out.println(newDate() + ": 端口["+ port + "]绑定成功!");
       } else{
           System.err.println("端口["+ port + "]绑定失败!");
       }
   });
~~~

**小结：**相比传统阻塞 I/O，执行 I/O 操作后线程会被阻塞住, 直到操作完成；异步处理的好处是不会造成线程阻塞，线程在 I/O 操作期间可以执行别的程序，在高并发情形下会更稳定和更高的吞吐量

### 6.5.4 HTTP服务实例

实例要求：
1)Netty 服务器在 6668 端口监听，浏览器发出请求 "http://localhost:7000/ "
2)服务器可以回复消息给客户端 "Hello! 我是服务器 5 " ,  并对特定请求资源进行过滤。

~~~java
package com.cccyl.netty.http;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.ServerSocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;

/**
 * @author cyl
 * @date 2021/09/06/8:54
 * @description netty http服务端
 */
public class NettyHttpServerDemo {

    public static void main(String[] args) throws InterruptedException {

        NioEventLoopGroup bossGroup = new NioEventLoopGroup();
        NioEventLoopGroup workGroup = new NioEventLoopGroup();

        ServerBootstrap serverBootstrap = new ServerBootstrap();

        serverBootstrap.group(bossGroup,workGroup)
                .channel(NioServerSocketChannel.class)
                .childHandler(new NettyChannelInitializerDemo());

        ChannelFuture channelFuture = serverBootstrap.bind(7000).sync();

        channelFuture.channel().closeFuture().sync();
    }
}
~~~

~~~java
package com.cccyl.netty.http;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.codec.http.HttpServerCodec;

/**
 * @author cyl
 * @date 2021/09/06/10:09
 * @description
 */
public class NettyChannelInitializerDemo extends ChannelInitializer<SocketChannel> {

    @Override
    protected void initChannel(SocketChannel socketChannel) throws Exception {
        //HttpServerCodec:netty提供的一个http编解码器
        socketChannel.pipeline().addLast(new HttpServerCodec());

        socketChannel.pipeline().addLast(new NettyHttpHandlerDemo());
    }
}
~~~

~~~java
package com.cccyl.netty.http;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.DefaultHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaders;
import io.netty.handler.codec.http.HttpObject;
import io.netty.handler.codec.http.HttpRequest;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpVersion;

import java.nio.charset.StandardCharsets;

/**
 * @author cyl
 * @date 2021/09/06/10:14
 * @description
 */
public class NettyHttpHandlerDemo extends SimpleChannelInboundHandler<HttpObject> {

    /**
     * 读取客户端数据
     * @param channelHandlerContext
     * @param httpObject 客户端发送的数据
     * @throws Exception
     */
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, HttpObject httpObject) throws Exception {

        if (httpObject instanceof HttpRequest) {

            String uri = ((HttpRequest) httpObject).uri();
            System.out.println("uri:" + uri);

            if(uri.equals("/favicon.ico")) {
                //过滤/favicon.ico请求
                return;
            }

            System.out.println("客户端地址:" + channelHandlerContext.channel().remoteAddress());

            //回复消息给客户端,http协议
            ByteBuf content = Unpooled.copiedBuffer("hello,客户端...", StandardCharsets.UTF_16);

            DefaultFullHttpResponse response = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1,
                    HttpResponseStatus.OK, content);

            response.headers().add(HttpHeaderNames.CONTENT_TYPE,"text/plain");
            response.headers().add(HttpHeaderNames.CONTENT_LENGTH, content.readableBytes());

            channelHandlerContext.writeAndFlush(response);

        }
    }
}
~~~

# 第7章 Netty 核心模块组件

## 7.1 Bootstrap、ServerBootstrap

1)Bootstrap 意思是引导，一个 Netty 应用通常由一个 Bootstrap 开始，主要作用是配置整个 Netty 程序，串联各个组件，Netty 中 Bootstrap 类是客户端程序的启动引导类，ServerBootstrap 是服务端启动引导类
2)常见的方法有

```java
public ServerBootstrap group(EventLoopGroup parentGroup, EventLoopGroup childGroup)，该方法用于服务器端，用来设置两个 EventLoop
public B group(EventLoopGroup group) ，该方法用于客户端，用来设置一个 EventLoop
public B channel(Class<? extends C> channelClass)，该方法用来设置一个服务器端的通道实现
public <T> B option(ChannelOption<T> option, T value)，用来给 ServerChannel 添加配置
public <T> ServerBootstrap childOption(ChannelOption<T> childOption, T value)，用来给接收到的通道添加配置
public ServerBootstrap childHandler(ChannelHandler childHandler)，该方法用来设置业务处理类（自定义的 handler）
public ChannelFuture bind(int inetPort) ，该方法用于服务器端，用来设置占用的端口号
public ChannelFuture connect(String inetHost, int inetPort) ，该方法用于客户端，用来连接服务器端
```

## 7.2 Channel和Selector

### 7.2.1 Channel

1)Netty 网络通信的组件，能够用于执行网络 I/O 操作。
2)通过Channel 可获得当前网络连接的通道的状态
3)通过Channel 可获得 网络连接的配置参数 （例如接收缓冲区大小）
4)Channel 提供异步的网络 I/O 操作(如建立连接，读写，绑定端口)，异步调用意味着任何 I/O 调用都将立即返回，并且不保证在调用结束时所请求的 I/O 操作已完成
5)调用立即返回一个 ChannelFuture 实例，通过注册监听器到 ChannelFuture 上，可以 I/O 操作成功、失败或取消时回调通知调用方

6)支持关联 I/O 操作与对应的处理程序
7不同协议、不同的阻塞类型的连接都有不同的 Channel 类型与之对应，常用的 Channel 类型:

- NioSocketChannel，异步的客户端 TCP Socket 连接。
- NioServerSocketChannel，异步的服务器端 TCP Socket 连接。
- NioDatagramChannel，异步的 UDP 连接。
- NioSctpChannel，异步的客户端 Sctp 连接。
- NioSctpServerChannel，异步的 Sctp 服务器端连接，这些通道涵盖了 UDP 和 TCP 网络 IO 以及文件 IO。

### 7.2.2 Selector

1)Netty 基于 Selector 对象实现 I/O 多路复用，通过 Selector 一个线程可以监听多个连接的 Channel 事件。
2)当向一个 Selector 中注册 Channel 后，Selector 内部的机制就可以自动不断地查询(Select) 这些注册的 Channel 是否有已就绪的 I/O 事件（例如可读，可写，网络连接完成等），这样程序就可以很简单地使用一个线程高效地管理多个 Channel 

## 7.3 ChannelHandler 

1)ChannelHandler 是一个接口，处理 I/O 事件或拦截 I/O 操作，并将其转发到其 ChannelPipeline(业务处理链)中的下一个处理程序。
2)ChannelHandler 本身并没有提供很多方法，因为这个接口有许多的方法需要实现，方便使用期间，可以继承它的子类
3)ChannelHandler 及其实现类一览图(后)

![image-20210907182134693](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210907182134693.png)

- ChannelInboundHandler 用于处理入站 I/O 事件。
- ChannelOutboundHandler 用于处理出站 I/O 操作。

- //适配器
- ChannelInboundHandlerAdapter 用于处理入站 I/O 事件。
- ChannelOutboundHandlerAdapter 用于处理出站 I/O 操作。
- ChannelDuplexHandler 用于处理入站和出站事件。

4)我们经常需要自定义一个 Handler 类去继承 ChannelInboundHandlerAdapter，然后通过重写相应方法实现业务逻辑，我们接下来看看一般都需要重写哪些方法

```java
public class ChannelInboundHandlerAdapter extends ChannelHandlerAdapter implements ChannelInboundHandler {
    public ChannelInboundHandlerAdapter() { }
    public void channelRegistered(ChannelHandlerContext ctx) throws Exception {
        ctx.fireChannelRegistered();
    }
    public void channelUnregistered(ChannelHandlerContext ctx) throws Exception {
        ctx.fireChannelUnregistered();
    }
    //通道就绪事件
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        ctx.fireChannelActive();
    }
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        ctx.fireChannelInactive();
    }
    //通道读取数据事件
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        ctx.fireChannelRead(msg);
    }
    //数据读取完毕事件
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.fireChannelReadComplete();
    }
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        ctx.fireUserEventTriggered(evt);
    }
    public void channelWritabilityChanged(ChannelHandlerContext ctx) throws Exception {
        ctx.fireChannelWritabilityChanged();
    }
    //通道发生异常事件
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.fireExceptionCaught(cause);
    }
}
```

## 7.4 Pipeline 和 ChannelPipeline

**ChannelPipeline 是一个重点：**
1)ChannelPipeline 是一个 Handler 的集合，它负责处理和拦截 inbound 或者 outbound 的事件和操作，相当于一个贯穿 Netty 的链。(也可以这样理解：ChannelPipeline 是 保存 ChannelHandler 的 List，用于处理或拦截 Channel 的入站事件和出站操作)
2)ChannelPipeline 实现了一种高级形式的拦截过滤器模式，使用户可以完全控制事件的处理方式，以及 Channel 中各个的 ChannelHandler 如何相互交互

3)在 Netty 中每个 Channel 都有且仅有一个 ChannelPipeline 与之对应，它们的组成关系如下

![image-20210907182752804](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210907182752804.png)

- 一个 Channel 包含了一个 ChannelPipeline，而 ChannelPipeline 中又维护了一个由 ChannelHandlerContext 组成的双向链表，并且每个 ChannelHandlerContext 中又关联着一个 ChannelHandler
- 入站事件和出站事件在一个双向链表中，入站事件会从链表 head 往后传递到最后一个入站的 handler，出站事件会从链表 tail 往前传递到最前一个出站的 handler，两种类型的 handler 互不干扰

4)常用方法

```java
ChannelPipeline addFirst(ChannelHandler... handlers)//把一个业务处理类（handler）添加到链中的第一个位置
ChannelPipeline addLast(ChannelHandler... handlers)//把一个业务处理类（handler）添加到链中的最后一个位置
```

## 7.5 ChannelHandlerContext

1)保存 Channel 相关的所有上下文信息，同时关联一个 ChannelHandler 对象
2)即ChannelHandlerContext 中 包 含 一 个 具 体 的 事 件 处 理 器 ChannelHandler ， 同 时ChannelHandlerContext 中也绑定了对应的 pipeline 和 Channel 的信息，方便对 ChannelHandler进行调用.
3)常用方法

~~~java
ChannelFuture close()//关闭通道
ChannelOutboundInvoker flush()//刷新
ChannelFuture writeAndFlush(Object msg)//将数据写到ChannelPipeline中当前ChannelHandler 的下一个 ChannelHandler 开始处理（出站）
~~~

## 7.6 ChannelOption

1)Netty 在创建 Channel 实例后,一般都需要设置 ChannelOption 参数。
2)ChannelOption 参数如下:

ChannelOption.SO_BACKLOG:对应 TCP/IP 协议 listen 函数中的 backlog 参数，用来初始化服务器可连接队列大小。服务端处理客户端连接请求是顺序处理的，所以同一时间只能处理一个客户端连接。多个客户端来的时候，服务端将不能处理的客户端连接请求放在队列中等待处理，backlog 参数指定了队列的大小。
ChannelOption.SO_KEEPALIVE:一直保持连接活动状态

## 7.7 EventLoopGroup 

1)EventLoopGroup 是一组 EventLoop 的抽象，Netty 为了更好的利用多核 CPU 资源，一般会有多个 EventLoop 同时工作，每个 EventLoop 维护着一个 Selector 实例。
2)EventLoopGroup 提供 next 接口，可以从组里面按照一定规则获取其中一个 EventLoop来处理任务。在 Netty 服务器端编程中，我们一般都需要提供两个 EventLoopGroup，例如：BossEventLoopGroup 和 WorkerEventLoopGroup。

3)通常一个服务端口即一个 ServerSocketChannel对应一个Selector 和一个EventLoop线程。BossEventLoop 负责接收客户端的连接并将 SocketChannel 交给 WorkerEventLoopGroup 来进行 IO 处理，如下图所示

![image-20210907183322483](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210907183322483.png)

- BossEventLoopGroup 通常是一个单线程的 EventLoop，EventLoop 维护着一个注册了ServerSocketChannel 的 Selector 实例BossEventLoop 不断轮询 Selector 将连接事件分离出来
- 通常是 OP_ACCEPT 事件，然后将接收到的 SocketChannel 交给 WorkerEventLoopGroup
- WorkerEventLoopGroup 会由 next 选择其中一个 EventLoop来将这个 SocketChannel 注册到其维护的 Selector 并对其后续的 IO 事件进行处理

4)常用方法

```java
public NioEventLoopGroup()//构造方法
public Future<?> shutdownGracefully()//断开连接，关闭线程
```

## 7.8 Unpooled 类

1)Netty 提供一个专门用来操作缓冲区(即Netty的数据容器)的工具类
2)常用方法如下所示

~~~java
//通过给定的数据和字符编码返回一个 ByteBuf 对象（类似于 NIO 中的 ByteBuffer 但有区别）

public static ByteBuf copiedBuffer(CharSequence string, Charset charset)
~~~

3)举例说明Unpooled 获取 Netty的数据容器ByteBuf 的基本使用

![image-20210907183616450](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210907183616450.png)

~~~java
package com.cccyl.netty.buf;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;

/**
 * @author cyl
 * @date 2021/09/07/11:22
 * @description netty ByteBuf demo
 */
public class NettyBufDemo1 {

    public static void main(String[] args) {
        /**
         * 说明:
         *  1.netty中的byteBuf无需像nio中的byteBuffer要进行flip()
         *  2.底层包含一个数组，byte[]
         *  3.底层三个参数:readerIndex,writeIndex,capacity将buffer分成三个区域
         *      0--readerIndex:已读区域
         *      readerIndex--writeIndex:可读区域
         *      writerIndex--capacity:可写区域
         */
        ByteBuf byteBuf = Unpooled.buffer(10);

        for (int i = 0; i < 10; i++) {
            byteBuf.writeByte(i);
        }

        System.out.println("byteBuf capacity=" + byteBuf.capacity());

        for (int i = 0; i < byteBuf.capacity(); i++) {
            System.out.println(byteBuf.readByte());
        }
    }
}
~~~

~~~java
package com.cccyl.netty.buf;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;

import java.nio.charset.StandardCharsets;

/**
 * @author cyl
 * @date 2021/09/07/11:31
 * @description netty byteBuf demo
 */
public class NettyBufDemo2 {

    public static void main(String[] args) {
        ByteBuf byteBuf = Unpooled.copiedBuffer("hello,world", StandardCharsets.UTF_8);

        if (byteBuf.hasArray()) {
            byte[] content = byteBuf.array();

            System.out.println(new String(content,StandardCharsets.UTF_8));
            System.out.println("arrayOffset=" + byteBuf.arrayOffset());
            System.out.println("readerIndex=" + byteBuf.readerIndex());
            System.out.println("writerIndex=" + byteBuf.writerIndex());
            System.out.println("capacity=" + byteBuf.capacity());
            System.out.println("可读字节:" + byteBuf.readableBytes());
            System.out.println("按照范围读取:" + byteBuf.getCharSequence(0,5,StandardCharsets.UTF_8));
        }
    }
}
~~~

## 7.9 Netty应用实例-群聊系统

实例要求:  
1)编写一个 Netty 群聊系统，实现服务器端和客户端之间的数据简单通讯（非阻塞）
2)实现多人群聊
3)服务器端：可以监测用户上线，离线，并实现消息转发功能
4)客户端：通过channel 可以无阻塞发送消息给其它所有用户，同时可以接受其它用户发送的消息(有服务器转发得到)
5)目的：进一步理解Netty非阻塞网络编程机制

~~~java
package com.cccyl.netty.groupchat;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;

/**
 * @author cyl
 * @date 2021/09/07/9:55
 * @description netty 群聊系统服务端
 */
public class NettyGroupChatServerDemo {

    //端口号
    private int port;

    public NettyGroupChatServerDemo(int port) {
        this.port = port;
    }

    //服务器启动
    public void run() throws InterruptedException {

        NioEventLoopGroup bossGroup = new NioEventLoopGroup();
        NioEventLoopGroup workGroup = new NioEventLoopGroup();

        try {

            ServerBootstrap serverBootstrap = new ServerBootstrap();

            serverBootstrap.group(bossGroup,workGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG, 128)
                    .childOption(ChannelOption.SO_KEEPALIVE,true)
                    .childHandler(new ChannelInitializer<SocketChannel>() {

                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            ChannelPipeline pipeline = socketChannel.pipeline();

                            //加入解码器
                            pipeline.addLast(new StringDecoder());

                            //加入编码器
                            pipeline.addLast(new StringEncoder());

                            //加入自定义handler
                            pipeline.addLast(new NettyGroupChatServerHandlerDemo());
                        }
                    });

            ChannelFuture channelFuture = serverBootstrap.bind(port).sync();

            System.out.println("群聊系统服务器启动成功...");

            channelFuture.channel().closeFuture().sync();

        } finally {
            bossGroup.shutdownGracefully();
            workGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        new NettyGroupChatServerDemo(7000).run();
    }
}
~~~

~~~java
package com.cccyl.netty.groupchat;

import io.netty.channel.Channel;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.channel.group.ChannelGroup;
import io.netty.channel.group.DefaultChannelGroup;
import io.netty.util.concurrent.GlobalEventExecutor;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @author cyl
 * @date 2021/09/07/10:11
 * @description netty 群聊系统服务端handler
 */
public class NettyGroupChatServerHandlerDemo extends SimpleChannelInboundHandler<String> {

    /**
     * 定义一个channelGroup管理所有的channel
     * GlobalEventExecutor.INSTANCE:全局事件处理器，单例
     */
    private static ChannelGroup channelGroup = new DefaultChannelGroup(GlobalEventExecutor.INSTANCE);

    SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    /**
     * 表示连接建立，一旦连接，第一个执行
     * @param ctx
     * @throws Exception
     */
    @Override
    public void handlerAdded(ChannelHandlerContext ctx) throws Exception {
        Channel channel = ctx.channel();

        /**
         * 将该客户端加入聊天的消息群发到各个channel
         */
        channelGroup.writeAndFlush("[客户端]-->" + channel.remoteAddress() + " 加入聊天-->" +
                simpleDateFormat.format(new Date()) + "\n");

        channelGroup.add(channel);
    }

    /**
     * 断开连接，channelGroup自动移除相应的channel
     * @param ctx
     * @throws Exception
     */
    @Override
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
        Channel channel = ctx.channel();

        channelGroup.writeAndFlush("[客户端]-->" + channel.remoteAddress() + " 离开聊天-->" +
                simpleDateFormat.format(new Date()) + "\n");
    }

    /**
     * 监听channel不处于活动状态
     * @param ctx
     * @throws Exception
     */
    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        Channel channel = ctx.channel();
        System.out.println("[客户端]-->" + channel.remoteAddress() + " 离线了-->"  +
                simpleDateFormat.format(new Date()) + "\n");
    }

    /**
     * 监听channel处于活动状态
     * @param ctx
     * @throws Exception
     */
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        Channel channel = ctx.channel();

        System.out.println("[客户端]-->" + channel.remoteAddress() + " 上线了-->"  +
                simpleDateFormat.format(new Date()) + "\n");
    }

    /**
     * 读取数据
     * @param channelHandlerContext
     * @param s
     * @throws Exception
     */
    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, String s) throws Exception {
        Channel channel = channelHandlerContext.channel();

        channelGroup.forEach(ch -> {
            if (ch != channel) {
                //不是自己，群发消息
                ch.writeAndFlush("[客户端]-->" + channel.remoteAddress() + "-->"  +
                        simpleDateFormat.format(new Date()) + "说:" + s + "\n");
            } else {
                //是自己，回显消息
                ch.writeAndFlush("[自己]-->" + simpleDateFormat.format(new Date()) + "说:" + s + "\n");
            }
        });
    }

    /**
     * 监听异常
     * @param ctx
     * @param cause
     * @throws Exception
     */
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();
    }
}
~~~

~~~java
package com.cccyl.netty.groupchat;

import com.sun.org.apache.bcel.internal.generic.NEW;
import io.netty.bootstrap.Bootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;

import java.util.Scanner;

/**
 * @author cyl
 * @date 2021/09/07/10:34
 * @description netty 群聊系统客户端
 */
public class NettyGroupChatClientDemo {

    //服务器主机地址
    private String host;

    //服务器端口
    private int port;

    public NettyGroupChatClientDemo(String host, int port) {
        this.host = host;
        this.port = port;
    }

    public void run() throws InterruptedException {

        NioEventLoopGroup eventLoopGroup = new NioEventLoopGroup();

        try {

            Bootstrap bootstrap = new Bootstrap();

            bootstrap.group(eventLoopGroup)
                    .channel(NioSocketChannel.class)
                    .handler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            ChannelPipeline pipeline = socketChannel.pipeline();

                            //加入编码器
                            pipeline.addLast(new StringEncoder());
                            //加入解码器
                            pipeline.addLast(new StringDecoder());

                            pipeline.addLast(new NettyGroupChatClientHandlerDemo());
                        }
                    });

            ChannelFuture channelFuture = bootstrap.connect(host, port).sync();

            System.out.println("群聊系统客户端启动成功...");

//            channelFuture.channel().closeFuture().sync();

            Channel channel = channelFuture.channel();

            Scanner scanner = new Scanner(System.in);

            while (scanner.hasNextLine()) {
                String s = scanner.nextLine();
                channel.writeAndFlush(s + "\r\n");
            }

        } finally {
            eventLoopGroup.shutdownGracefully();
        }

    }

    public static void main(String[] args) throws InterruptedException {
        new NettyGroupChatClientDemo("127.0.0.1",7000).run();
    }

}
~~~

~~~java
package com.cccyl.netty.groupchat;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;

/**
 * @author cyl
 * @date 2021/09/07/10:46
 * @description netty 群聊系统客户端handler
 */
public class NettyGroupChatClientHandlerDemo extends SimpleChannelInboundHandler<String> {


    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, String s) throws Exception {
        System.out.println(s.trim());
    }
}
~~~

## 7.10 Netty心跳检测机制案例

实例要求:  
1)编写一个 Netty心跳检测机制案例, 当服务器超过3秒没有读时，就提示读空闲
2)当服务器超过5秒没有写操作时，就提示写空闲
3)实现当服务器超过7秒没有读或者写操作时，就提示读写空闲

~~~java
package com.cccyl.netty.heartbeat;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;
import io.netty.handler.timeout.IdleStateHandler;

import java.util.concurrent.TimeUnit;

/**
 * @author cyl
 * @date 2021/09/07/10:57
 * @description netty 心跳检测机制
 */
public class NettyHeartBeatDemo {

    public static void main(String[] args) throws InterruptedException {

        NioEventLoopGroup bossGroup = new NioEventLoopGroup();
        NioEventLoopGroup workerGroup = new NioEventLoopGroup();

        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();

            serverBootstrap.group(bossGroup, workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .handler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            ChannelPipeline pipeline = socketChannel.pipeline();

                            /**
                             * 说明:
                             *  1.IdleStateHandler是netty提供的处理空闲状态的处理器
                             *  2.readerIdleTime:表示多长时间没有读操作，就会发送一个心跳检测包检测是否连接
                             *  3.writerIdleTime:表示多长时间没有写操作，就会发送一个心跳检测包检测是否连接
                             *  4.allIdleTime:表示多长时间没有读写操作，就会发送一个心跳检测包检测是否连接
                             *  5.当IdleStateHandler处理器触发后，就会传递给管道的下一个handler处理，
                             *      调用（触发）下一个handler的userEventTriggered
                             */
                            pipeline.addLast(new IdleStateHandler(
                                    3,5,7, TimeUnit.SECONDS));

                            pipeline.addLast(new NettyHeartBeatHandlerDemo());
                        }
                    });

            ChannelFuture channelFuture = serverBootstrap.bind(7000).sync();

            channelFuture.channel().closeFuture().sync();

        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }

    }
}
~~~

~~~java
package com.cccyl.netty.heartbeat;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.timeout.IdleStateEvent;

/**
 * @author cyl
 * @date 2021/09/07/11:07
 * @description netty 心跳检测机制handler
 */
public class NettyHeartBeatHandlerDemo extends ChannelInboundHandlerAdapter {


    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        if (evt instanceof IdleStateEvent) {
            IdleStateEvent event = (IdleStateEvent) evt;

            switch (event.state()) {
                case READER_IDLE:
                    System.out.println("读空闲...");
                    break;
                case WRITER_IDLE:
                    System.out.println("写空闲...");
                    break;
                case ALL_IDLE:
                    System.out.println("读写空闲...");
                    break;
            }

        }
    }
}
~~~

## 7.11 Netty 通过WebSocket编程实现服务器和客户端长连接

实例要求:  
1)Http协议是无状态的, 浏览器和服务器间的请求响应一次，下一次会重新创建连接.
2)要求：实现基于webSocket的长连接的全双工的交互
3)改变Http协议多次请求的约束，实现长连接了， 服务器可以发送消息给浏览器
4)客户端浏览器和服务器端会相互感知，比如服务器关闭了，浏览器会感知，同样浏览器关闭了，服务器会感知

~~~java
package com.cccyl.netty.websocket;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;
import io.netty.handler.stream.ChunkedWriteHandler;

/**
 * @author cyl
 * @date 2021/09/08/11:16
 * @description netty websocket服务端
 */
public class NettyWebsockerServerDemo {

    public static void main(String[] args) throws InterruptedException {
        NioEventLoopGroup bossGroup = new NioEventLoopGroup();
        NioEventLoopGroup workerGroup = new NioEventLoopGroup();

        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();

            serverBootstrap.group(bossGroup,workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .childHandler(new LoggingHandler(LogLevel.INFO))
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            ChannelPipeline pipeline = socketChannel.pipeline();
                            //加入httpserver编解码器
                            pipeline.addLast(new HttpServerCodec());
                            //以块的方式写
                            pipeline.addLast(new ChunkedWriteHandler());

                            /**
                             * 说明:
                             *  1.http数据在传输过程中是分段，HttpObjectAggregator可以将多个段聚合
                             *  2.这就是为什么当浏览器发送大量数据时，会发出多次http请求
                             */
                            pipeline.addLast(new HttpObjectAggregator(8192));

                            /**
                             * 说明:
                             *  1.对应websocket,它的数据是以帧(frame)的形式传递
                             *  2.WebSocketServerProtocolHandler的核心功能是将http协议升级为ws协议，保持长连接
                             */
                            pipeline.addLast(new WebSocketServerProtocolHandler("/hello"));

                            pipeline.addLast(new NettyTextWebsocketFrameHandlerDemo());

                        }
                    });

            ChannelFuture channelFuture = serverBootstrap.bind(7000).sync();

            channelFuture.channel().closeFuture().sync();

        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}
~~~

~~~java
package com.cccyl.netty.websocket;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;

import java.time.LocalDateTime;

/**
 * @author cyl
 * @date 2021/09/08/11:32
 * @description
 */
public class NettyTextWebsocketFrameHandlerDemo extends SimpleChannelInboundHandler<TextWebSocketFrame> {

    @Override
    protected void channelRead0(ChannelHandlerContext channelHandlerContext, TextWebSocketFrame textWebSocketFrame) throws Exception {
        System.out.println("服务器收到消息:" + textWebSocketFrame.text());

        //回复消息
        channelHandlerContext.channel().writeAndFlush(
                new TextWebSocketFrame("服务器时间:" + LocalDateTime.now() + " " + textWebSocketFrame.text()));
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        System.out.println(cause.getMessage());
        ctx.close();
    }
}
~~~

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

    <script>
        var socket;
        //判断当前浏览器是否支持websocket
        if (window.WebSocket) {
            socket = new WebSocket("ws://localhost:7000/hello");
            socket.onmessage = function(ev) {
                var rt = document.getElementById("responseTx");
                rt.value = rt.value + "\n" + ev.data;
            }

            socket.onopen = function(ev) {
                var rt = document.getElementById("responseTx");
                rt.value = "连接开启了...";
            }

            socket.onclose = function(ev) {
                var rt = document.getElementById("responseTx");
                rt.value = rt.value + "\n" + "连接关闭了...";
            }
        } else {
            alert("当前浏览器不支持websocket!");
        }

        //发送消息到服务器
        function send(message) {
            if(!window.socket) {
                return ;
            }

            if (socket.readyStateWebSocket.OPEN) {
                socket.send(message);
            } else {
                alert("连接未开启...");
            }
        }
    </script>
    <form onsubmit="return false">
        <textarea name="message" style="width:300px;height:300px"></textarea>
        <input type="button" value="发送消息" onclick="send(this.form.message.value)">
        <textarea id="responseTx" style="height:300px;width:300px"></textarea>
        <input type="button" value="清空内容" onclick="document.getElementById('responseTx').value=''">
    </form>
</body>
</html>
~~~

# 第8章 Google Protobuf

## 8.1 编码和解码的基本介绍

1)编写网络应用程序时，因为数据在网络中传输的都是二进制字节码数据，在发送数据时就需要编码，接收数据时就需要解码 [示意图]
![image-20210908164441701](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210908164441701.png)
2)codec(编解码器) 的组成部分有两个：decoder(解码器)和 encoder(编码器)。encoder 负责把业务数据转换成字节码数据，decoder 负责把字节码数据转换成业务数据

## 8.2 Netty中的编解码器

1)Netty 自身提供了一些 codec(编解码器)
2)Netty 提供的编码器
	StringEncoder，对字符串数据进行编码
	ObjectEncoder，对 Java 对象进行编码
3)Netty 提供的解码器
	StringDecoder, 对字符串数据进行解码
	ObjectDecoder，对 Java 对象进行解码
4)Netty 本身自带的 ObjectDecoder 和 ObjectEncoder 可以用来实现 POJO 对象或各种业务对象的编码和解码，底层使用的仍是 Java 序列化技术 , 而Java 序列化技术本身效率就不高，存在如下问题:
无法跨语言
序列化后的体积太大，是二进制编码的 5 倍多。
序列化性能太低

## 8.3 Protobuf基本介绍和使用示意图

1)Protobuf 是 Google 发布的开源项目，全称 Google Protocol Buffers，是一种轻便高效的结构化数据存储格式，可以用于结构化数据串行化，或者说序列化。它很适合做数据存储或 RPC[远程过程调用  remote procedure call ] 数据交换格式 。目前很多公司 http+json/tcp+protobuf
2)参考文档 : https://developers.google.com/protocol-buffers/docs/proto   语言指南
3)Protobuf 是以 message 的方式来管理数据的.
4)支持跨平台、跨语言，即[客户端和服务器端可以是不同的语言编写的] （支持目前绝大多数语言，例如 C++、C#、Java、python 等）

5)高性能，高可靠性
6)使用 protobuf 编译器能自动生成代码，Protobuf 是将类的定义使用.proto 文件进行描述。说明，在idea 中编写 .proto 文件时，会自动提示是否下载 .ptotot 编写插件. 可以让语法高亮。然后通过 protoc.exe 编译器根据.proto 自动生成.java 文件
7)protobuf 使用示意图

![image-20210908165649038](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210908165649038.png)

## 8.4 Protobuf快速入门实例

### 8.4.1 入门实例一

编写程序，使用Protobuf完成如下功能
1)客户端可以发送一个Student  PoJo 对象到服务器 (通过 Protobuf 编码) 
2)服务端能接收Student PoJo 对象，并显示信息(通过 Protobuf 解码)

### 8.4.2 入门实例二

编写程序，使用Protobuf完成如下功能
1)客户端可以随机发送Student  PoJo/ Worker PoJo 对象到服务器 (通过 Protobuf 编码) 
2)服务端能接收Student PoJo/ Worker PoJo 对象(需要判断是哪种类型)，并显示信息(通过 Protobuf 解码)

# 第9章 Netty编解码器和handler的调用机制

## 9.1 基本说明

1)netty的组件设计：Netty的主要组件有Channel、EventLoop、ChannelFuture、ChannelHandler、ChannelPipe等
2)ChannelHandler充当了处理入站和出站数据的应用程序逻辑的容器。例如，实现ChannelInboundHandler接口（ChannelInboundHandlerAdapter），你就可以接收入站事件和数据，这些数据会被业务逻辑处理。当要给客户端发送响应时，也可以从ChannelInboundHandler冲刷数据。业务逻辑通常写在一个或者多个ChannelInboundHandler中。ChannelOutboundHandler原理一样，只不过它是用来处理出站数据的

3)ChannelPipeline提供了ChannelHandler链的容器。以客户端应用程序为例，如果事件的运动方向是从客户端到服务端的，那么我们称这些事件为出站的，即客户端发送给服务端的数据会通过pipeline中的一系列ChannelOutboundHandler，并被这些Handler处理，反之则称为入站的

![image-20210908170347040](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210908170347040.png)

## 9.2 编码解码器

1)当Netty发送或者接受一个消息的时候，就将会发生一次数据转换。入站消息会被解码：从字节转换为另一种格式（比如java对象）；如果是出站消息，它会被编码成字节。
2)Netty提供一系列实用的编解码器，他们都实现了ChannelInboundHadnler或者ChannelOutboundHandler接口。在这些类中，channelRead方法已经被重写了。以入站为例，对于每个从入站Channel读取的消息，这个方法会被调用。随后，它将调用由解码器所提供的decode()方法进行解码，并将已经解码的字节转发给ChannelPipeline中的下一个ChannelInboundHandler。

## 9.3 解码器-ByteToMessageDecoder

1)关系继承图
![image-20210908170506506](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210908170506506.png)
2)由于不可能知道远程节点是否会一次性发送一个完整的信息，tcp有可能出现粘包拆包的问题，这个类会对入站数据进行缓冲，直到它准备好被处理.

3)一个关于ByteToMessageDecoder实例分析

~~~java
public class ToIntegerDecoder extends ByteToMessageDecoder {
    @Override
    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {
        if (in.readableBytes() >= 4) {
            out.add(in.readInt());
        }
    }
}
~~~

**说明：**
这个例子，每次入站从ByteBuf中读取4字节，将其解码为一个int，然后将它添加到下一个List中。当没有更多元素可以被添加到该List中时，它的内容将会被发送给下一个ChannelInboundHandler。int在被添加到List中时，会被自动装箱为Integer。在调用readInt()方法前必须验证所输入的ByteBuf是否具有足够的数据。

## 9.4 Netty的handler链的调用机制

![image-20210908170730425](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210908170730425.png)

**总结：**

- 不论解码器handler 还是 编码器handler 即接收的消息类型必须与待处理的消息类型一致，否则该handler不会被执行

- 在解码器 进行数据解码时，需要判断 缓存区(ByteBuf)的数据是否足够 ，否则接收到的结果会期望结果可能不一致

## 9.5 解码器-ReplayingDecoder

1)

```java
public abstract class ReplayingDecoder<S> extends ByteToMessageDecoder
```


2)ReplayingDecoder扩展了ByteToMessageDecoder类，使用这个类，我们不必调用readableBytes()方法。参数S指定了用户状态管理的类型，其中Void代表不需要状态管理
3)ReplayingDecoder使用方便，但它也有一些局限性：
并不是所有的 ByteBuf 操作都被支持，如果调用了一个不被支持的方法，将会抛出一个 UnsupportedOperationException。
ReplayingDecoder 在某些情况下可能稍慢于 ByteToMessageDecoder，例如网络缓慢并且消息格式复杂时，消息会被拆成了多个碎片，速度变慢

## 9.6 其它编解码器

1)LineBasedFrameDecoder：这个类在Netty内部也有使用，它使用行尾控制字符（\n或者\r\n）作为分隔符来解析数据。
2)DelimiterBasedFrameDecoder：使用自定义的特殊字符作为消息的分隔符。
3)HttpObjectDecoder：一个HTTP数据的解码器
4)LengthFieldBasedFrameDecoder：通过指定长度来标识整包消息，这样就可以自动的处理黏包和半包消息。

![image-20210908170942565](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210908170942565.png)

## 9.7 Log4j 整合到Netty

1)在Maven 中添加对Log4j的依赖 在 pom.xml

~~~xml
 		<dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>1.2.17</version>
        </dependency>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-api</artifactId>
            <version>1.7.25</version>
        </dependency>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-log4j12</artifactId>
            <version>1.7.25</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.slf4j</groupId>
            <artifactId>slf4j-simple</artifactId>
            <version>1.7.25</version>
            <scope>test</scope>
        </dependency>
~~~

2)配置 Log4j , 在 resources/log4j.properties

~~~properties
log4j.rootLogger = debug,stdout
log4j.appender.stdout = org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout = org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern =  %d{ABSOLUTE} %5p %c{ 1 }:%L - %m%n
~~~

# 第10章 TCP 粘包和拆包

## 10.1 基本介绍

1)TCP是面向连接的、面向流的，提供高可靠性服务。收发两端（客户端和服务器端）都要有一一成对的socket，因此，发送端为了将多

个发给接收端的包，更有效的发给对方，使用了优化方法（Nagle算法），将多次间隔较小且数据量小的数据，合并成一个大的数据块，

然后进行封包。这样做虽然提高了效率，但是接收端就难于分辨出完整的数据包了，因为面向流的通信是无消息保护边界的;

2)由于TCP无消息保护边界, 需要在接收端处理消息边界问题，也就是我们所说的粘包、拆包问题;

3)TCP粘包、拆包图解:

![image-20210911234818545](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210911234818545.png)

**说明：**

假设客户端分别发送了两个数据包D1和D2给服务端，由于服务端一次读取到字节数是不确定的，故可能存在以下四种情况：
a.服务端分两次读取到了两个独立的数据包，分别是D1和D2，没有粘包和拆包
b.服务端一次接受到了两个数据包，D1和D2粘合在一起，称之为TCP粘包
c.服务端分两次读取到了数据包，第一次读取到了完整的D1包和D2包的部分内容，第二次读取到了D2包的剩余内容，这称之为TCP拆包
d.服务端分两次读取到了数据包，第一次读取到了D1包的部分内容D1_1，第二次读取到了D1包的剩余部分内容D1_2和完整的D2包。

## 10.2 解决方案

1)使用自定义协议 + 编解码器来解决;

2)关键就是要解决服务器端每次读取数据长度的问题，这个问题解决，就不会出现服务器多读或少读数据的问题，从而避免的TCP 粘包、拆包 。

3）看一个具体的实例:
	要求客户端发送 5 个 Message 对象, 客户端每次发送一个 Message 对象;
	服务器端每次接收一个Message, 分5次进行解码， 每读取到 一个Message , 会回复一个Message 对象 给客户端。

# 第11章 Netty 核心源码剖析

## 11.1 基本说明

1)只有看过Netty源码，才能说是真的掌握了Netty框架;

2)在 io.netty.example 包下，有很多Netty源码案例，可以用来分析

![image-20210911235405341](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210911235405341.png)

## 11.2 Netty 启动过程源码剖析

## 11.3 Netty 接受请求过程源码剖析

## 11.4 Pipeline Handler HandlerContext创建源码剖析

## 11.5 ChannelPipeline 调度 handler 的源码剖析

## 11.6 Netty 心跳(heartbeat)服务源码剖析

## 11.7 Netty 核心组件 EventLoop 源码剖析

## 11.8 handler 中加入线程池和Context 中添加线程池的源码剖析

# 第12章 用Netty实现Dubbo RPC

## 12.1 RPC基本介绍

1)RPC（Remote Procedure Call）— 远程过程调用，是一个计算机通信协议。该协议允许运行于一台计算机的程序调用另一台计算机的子程序，而程序员无需额外地为这个交互作用编程;

2)两个或多个应用程序都分布在不同的服务器上，它们之间的调用都像是本地方法调用一样(如图);

![image-20210911235807804](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210911235807804.png)

3)常见的 RPC 框架有: 比较知名的如阿里的Dubbo、google的gRPC、Go语言的rpcx、Apache的thrift， Spring 旗下的 Spring Cloud。

## 12.2 RPC调用流程

![image-20210912000010003](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/Java/20.Netty/image-20210912000010003.png)

**术语说明**：在RPC 中， Client 叫服务消费者，Server 叫服务提供者

**PRC调用流程说明:**
①服务消费方(client)以本地调用方式调用服务
②client stub 接收到调用后负责将方法、参数等封装成能够进行网络传输的消息体
③client stub 将消息进行编码并发送到服务端
④server stub 收到消息后进行解码
⑤server stub 根据解码结果调用本地的服务
⑥本地服务执行并将结果返回给 server stub
⑦server stub 将返回导入结果进行编码并发送至消费方
⑧client stub 接收到消息并进行解码
⑨服务消费方(client)得到结果
小结：RPC 的目标就是将 2-8 这些步骤都封装起来，用户无需关心这些细节，可以像调用本地方法一样即可完成远程服务调用。

## 12.3 实现 dubbo RPC(基于Netty)

**需求说明:**
dubbo 底层使用了 Netty 作为网络通讯框架，要求用 Netty 实现一个简单的 RPC 框架
模仿 dubbo，消费者和提供者约定接口和协议，消费者远程调用提供者的服务，提供者返回一个字符串，消费者打印提供者返回的数据。底层网络通信使用 Netty 4.1.20
**设计说明:**
创建一个接口，定义抽象方法。用于消费者和提供者之间的约定。
创建一个提供者，该类需要监听消费者的请求，并按照约定返回数据。
创建一个消费者，该类需要透明的调用自己不存在的方法，内部需要使用 Netty 请求提供者返回数据。

~~~java
package com.cccyl.netty.rpc;

/**
 * @author cyl
 * @date 2021/09/11/10:28
 * @description
 */
public interface HelloService {

    String hello(String msg);
}
~~~

~~~java
package com.cccyl.netty.rpc.provider;

import com.cccyl.netty.rpc.HelloService;

/**
 * @author cyl
 * @date 2021/09/11/10:30
 * @description
 */
public class HelloServiceImpl implements HelloService {

    @Override
    public String hello(String msg) {
        System.out.println("收到客户端消息:" + msg);
        if (msg != null) {
            return "你好，客户端，我已经收到你的消息[" + msg + "]";
        } else {
            return "你好，客户端，我已经收到你的消息";
        }
    }
}
~~~

~~~java
package com.cccyl.netty.rpc.netty;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;

/**
 * @author cyl
 * @date 2021/09/11/10:34
 * @description
 */
public class NettyServer {

    public static void startServer(String host,int port) throws InterruptedException {
        start(host,port);
    }

    private static void start(String host,int port) throws InterruptedException {
        NioEventLoopGroup bossGroup = new NioEventLoopGroup();
        NioEventLoopGroup workGroup = new NioEventLoopGroup();

        try {
            ServerBootstrap bootstrap = new ServerBootstrap();

            bootstrap.group(bossGroup,workGroup)
                    .channel(NioServerSocketChannel.class)
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        protected void initChannel(SocketChannel socketChannel) throws Exception {
                            ChannelPipeline pipeline = socketChannel.pipeline();

                            pipeline.addLast(new StringDecoder());
                            pipeline.addLast(new StringEncoder());


                            pipeline.addLast(new NettyServerHandler());
                        }
                    });
            ChannelFuture channelFuture = bootstrap.bind(host, port).sync();

            channelFuture.channel().closeFuture().sync();

        } finally {
            bossGroup.shutdownGracefully();
            workGroup.shutdownGracefully();
        }
    }

}
~~~

~~~java
package com.cccyl.netty.rpc.netty;

import com.cccyl.netty.rpc.provider.HelloServiceImpl;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

/**
 * @author cyl
 * @date 2021/09/11/10:39
 * @description
 */
public class NettyServerHandler extends ChannelInboundHandlerAdapter {

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        //获得客户端发送的消息，并调用服务
        System.out.println("msg=" + msg);

        //客户端在调用服务的时候，需要定义一个协议
        if (msg.toString().startsWith("HelloService#hello#")) {
            int index = msg.toString().lastIndexOf("#");
            String hello = new HelloServiceImpl().hello(msg.toString().substring(msg.toString().lastIndexOf("#") + 1));

            ctx.writeAndFlush(hello);
        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();
    }
}
~~~

~~~java
package com.cccyl.netty.rpc.netty;

import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

import java.util.concurrent.Callable;

/**
 * @author cyl
 * @date 2021/09/11/10:50
 * @description
 */
public class NettyClientHandler extends ChannelInboundHandlerAdapter implements Callable {

    private ChannelHandlerContext channelHandlerContext;

    private String reuslt; //返回的结果

    private String param; //客户端调用方法时，传入的参数

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        channelHandlerContext = ctx; //在其他方法会使用到ctx
    }

    @Override
    public synchronized void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        reuslt=msg.toString();

        notify(); //唤醒等待的线程

    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();
    }

    /**
     * 被代理对象调用，发送数据给服务器，-->wait-->等待被唤醒(channelRead)-->返回结果
     * @return
     * @throws Exception
     */
    @Override
    public synchronized Object call() throws Exception {
        channelHandlerContext.writeAndFlush(param);

        /**
         * 进行wait，等待channelRead方法获取到服务器的结果后，唤醒
         */
        wait();

        return reuslt;
    }

    public void setParam(String param) {
        this.param = param;
    }
}
~~~

~~~java
package com.cccyl.netty.rpc.netty;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;

import java.lang.reflect.Proxy;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @author cyl
 * @date 2021/09/11/12:20
 * @description
 */
public class NettyClient {

    //创建线程池
    private static ExecutorService executor = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());

    private static NettyClientHandler nettyClientHandler;

    /**
     * 编写方法使用代理模式，获取一个代理对象
     */
    public Object getBean(final Class<?> serviceClass,final String providerName) {
        return Proxy.newProxyInstance(Thread.currentThread().getContextClassLoader(),
                new Class<?>[]{serviceClass},
                (proxy, method, args) -> {

                    if (nettyClientHandler  null) {
                        initClient();
                    }

                    //设置要发给服务器的信息
                    nettyClientHandler.setParam(providerName + args[0]);

                    return executor.submit(nettyClientHandler).get();
                });
    }

    //初始化客户端
    private static void initClient() {
        nettyClientHandler = new NettyClientHandler();

        NioEventLoopGroup group = new NioEventLoopGroup();

        Bootstrap bootstrap = new Bootstrap();

        bootstrap.group(group)
                .channel(NioSocketChannel.class)
                .option(ChannelOption.TCP_NODELAY,true)
                .handler(new ChannelInitializer<SocketChannel>() {
                    @Override
                    protected void initChannel(SocketChannel socketChannel) throws Exception {
                        ChannelPipeline pipeline = socketChannel.pipeline();

                        pipeline.addLast(new StringDecoder());
                        pipeline.addLast(new StringEncoder());

                        pipeline.addLast(nettyClientHandler);
                    }
                });

        try {
            bootstrap.connect("127.0.0.1", 7000).sync();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
~~~

~~~java
package com.cccyl.netty.rpc.provider;

import com.cccyl.netty.rpc.netty.NettyServer;

/**
 * @author cyl
 * @date 2021/09/11/10:32
 * @description rpc服务提供者
 */
public class ProviderServer {

    public static void main(String[] args) throws InterruptedException {

        NettyServer.startServer("127.0.0.1",7000);
    }
}
~~~

~~~java
package com.cccyl.netty.rpc.consumer;

import com.cccyl.netty.rpc.HelloService;
import com.cccyl.netty.rpc.netty.NettyClient;

/**
 * @author cyl
 * @date 2021/09/11/12:36
 * @description
 */
public class ConsumerServer {

    //定义协议头
    public static final String providerName = "HelloService#hello#";

    public static void main(String[] args) {
        //创建一个消费者
        NettyClient nettyClient = new NettyClient();

        //创建代理对象
        HelloService helloService = (HelloService) nettyClient.getBean(HelloService.class, providerName);

        //通过代理对象调用服务提供者的方法
        String hello_world = helloService.hello("hello world333");

        System.out.println(hello_world);
    }
}
~~~

