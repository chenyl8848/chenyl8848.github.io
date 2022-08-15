---
title: 命令模式
date: 2022-06-24
isOriginal: true
category:
  - 设计模式
tag:
  - 命令模式
---

# 命令模式

<!-- more -->

## 1.1 应用实例

1. 买了一套智能家电，有照明灯、风扇、冰箱、洗衣机，我们只要在手机上安装 App 就可以控制对这些家电工作。
2. 这些智能家电来自不同的厂家，不想针对每一种家电都安装一个 App，分别控制，希望只要一个 App 就可以控制全部智能家电。
3. 要实现一个 App 控制所有智能家电的需要，则每个智能家电厂家都要提供一个统一的接口给 App 调用，这时就可以考虑使用命令模式。
4. 命令模式可将""动作的请求者”从“动作的执行者”对象中解耦出来。
5. 在这个例子中，动作的请求者是手机 App，动作的执行者是每个厂商的一个家电产品。

## 1.2 命令模式

### 1.2.1 基本介绍

1. 命令模式（Command Pattern）：在软件设计中，经常需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是哪个，只需在程序运行时指定具体的请求接收者即可，此时，可以使用命令模式来进行设计。
2. 命令模式使得请求发送者与请求接收者消除彼此之间的耦合，让对象之间的调用关系更加灵活，实现解耦。
3. 在命令模式中，会将一个请求封装为一个对象，以便使用不同参数来表示不同的请求(即命名)，同时命令模式也支持可撤销的操作。
4. 通俗易懂的理解：将军发布命令，士兵去执行。其中有几个角色：将军（命令发布者）、士兵（命令的具体执行者）、命令(连接将军和士兵)。
   
   Invoker 是调用者（将军），receiver 是被调用者（士兵），MyCommand 是命令，实现了 Command 接口，持有接收对象。

### 1.2.2 原理类图

![image-20220731212134257](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/command_start/image-20220731212134257.png?versionId=CAEQMRiBgMCay.SBlRgiIDdhMGNhMDYzYjRhZDQ1ZTRhNzJiMGYwNTVjYzEwMWIw)

对原理类图的说明-即(命名模式的角色及职责)

1. `Invoker`: 是调用者角色
2. `Command`: 命令角色，需要执行的所有命令都在这里，可以是接口或抽象类
3. `Receiver`: 接受者角色，知道如何实施和执行一个请求相关的操作
4. `ConcreteCommand`: 将一个接受者对象与一个动作绑定，调用接受者相应的操作，实现 `execute()` 、`undo()`

### 1.2.3 代码实现

1. 思路分析和图解

   ![image-20220731212246626](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/command_start/image-20220731212246626.png?versionId=CAEQMRiBgMCqy.SBlRgiIGMzZmRjMGI4YjJjNzQ4YjFiN2Y0MjhhYjQzYWNlYWI3)

2. 代码实现

   ```java
   public interface ICommand {
   
       /**
        * 执行方法
        */
       public void execute();
   
       /**
        * 撤销方法
        */
       public void undo();
   }
   ```

   ```java
   public class Lamp {
   
       public void on () {
           System.out.println("灯打开了...");
       }
   
       public void off () {
           System.out.println("灯关闭了...");
       }
   }
   ```

   ```java
   public class LampOnCommand implements ICommand{
   
       private Lamp lamp;
   
       public LampOnCommand(Lamp lamp) {
           this.lamp = lamp;
       }
   
       @Override
       public void execute() {
           lamp.on();
       }
   
       @Override
       public void undo() {
           lamp.off();
       }
   }
   ```

   ```java
   public class LampOffCommand implements ICommand{
   
   
       private Lamp lamp;
   
       public LampOffCommand(Lamp lamp) {
           this.lamp = lamp;
       }
   
       @Override
       public void execute() {
           lamp.off();
       }
   
       @Override
       public void undo() {
           lamp.on();
       }
   }
   ```

   ```java
   public class RemoteController {
   
       // 创建一组命令集合
       private List<ICommand> commandList = new ArrayList<>();
   
       public RemoteController(ICommand command) {
           this.commandList.add(command);
       }
   
       public RemoteController(List<ICommand> commandList) {
           this.commandList.addAll(commandList);
       }
   
       public void doAction(int index) {
           commandList.get(index).execute();
       }
   
       public void cancelAction(int index) {
           commandList.get(index).undo();
       }
   }
   ```

   ```java
   public class Client {
   
       public static void main(String[] args) {
           // 1.创建命令接收者
           Lamp lamp = new Lamp();
   
           // 2.创建开灯的命令
           LampOnCommand lampOnCommand = new LampOnCommand(lamp);
   
           // 3.创建关灯的命令
           LampOffCommand lampOffCommand = new LampOffCommand(lamp);
   
           // 4.使用遥控器开关灯
           List<ICommand> commandList = new ArrayList<>();
           commandList.add(lampOnCommand);
           commandList.add(lampOffCommand);
           RemoteController remoteController = new RemoteController(commandList);
   
           // 开灯
           remoteController.doAction(0);
           // 撤销开灯
           remoteController.cancelAction(0);
   
           // 关灯
           remoteController.doAction(1);
           // 撤销关灯
           remoteController.cancelAction(1);
   
           // 输出
           // 灯打开了...
           // 灯关闭了...
           // 灯关闭了...
           // 灯打开了...
   
       }
   }
   ```

## 1.3 命令模式在 Spring 框架 JDBCTemplate 应用的源码分析

1. Spring框架的JdbcTemplate就使用到了命令模式

2. 代码分析

   ```java
   public class JdbcTemplate extends JdbcAccessor implements JdbcOperations {
       // ...
       @Nullable
       public <T> T query(final String sql, final ResultSetExtractor<T> rse) throws DataAccessException {
           // ...
   
           class QueryStatementCallback implements StatementCallback<T>, SqlProvider {
               QueryStatementCallback() {
               }
           }
           
           // ...
       }
       
       @Nullable
       private <T> T execute(StatementCallback<T> action, boolean closeResources) throws DataAccessException {
           // ...
           T result = action.doInStatement(stmt);
           this.handleWarnings(stmt);
           // ...
       }
       
       // ...
   }
   ```

   ```java
   @FunctionalInterface
   public interface StatementCallback<T> {
       @Nullable
       T doInStatement(Statement stmt) throws SQLException, DataAccessException;
   }
   ```

3. 模式角色分析说明
   - `StatementCallback` 接口，类似命令接口(Command)
   - `class QueryStatementCallback implements StatementCallback<T>,SqlProvider,` 匿名内部类， 实现了命令接口，同时也充当命令接收者
   - 命令调用者是 `JdbcTemplate` , 其中 `execute(StatementCallback<T>action)` 方法中，调用 `action.doInStatement` 方法，不同的实现 `StatementCallback` 接口的对象，对应不同的 `doInStatemnt`实现逻辑
   - 另外实现 `StatementCallback` 命令接口的子类还有 `QueryStatementCallback`

## 1.4 命令模式的注意事项和细节

1. 将发起请求的对象与执行请求的对象解耦。发起请求的对象是调用者，调用者只要调用命令对象的 `execute()` 方法就可以让接收者工作，而不必知道具体的接收者对象是谁、是如何实现的，命令对象会负责让接收者执行请求的动作，也就是说：”请求发起者”和“请求执行者”之间的解耦是通过命令对象实现的，命令对象起到了纽带桥梁的作用。
2. 设计一个命令队列，只要把命令对象放到列队，就可以多线程的执行命令。
3. 容易实现对请求的撤销和重做。
4. 命令模式不足：可能导致某些系统有过多的具体命令类，增加了系统的复杂度，这点在在使用的时候要注意。
5. 空命令也是一种设计模式，省去了判空的操作。
6. 命令模式经典的应用场景：界面的一个按钮都是一条命令、模拟CMD（DOS命令）订单的撤销/恢复、触发-反馈机制。