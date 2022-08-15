---
title: 状态模式
date: 2022-07-29
isOriginal: true
category:
  - 设计模式
tag:
  - 状态模式
---

# 状态模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

请编写程序完成APP抽奖活动具体要求如下:

1. 假如每参加一次这个活动要扣除用户 50 积分，中奖概率是 10%

2. 奖品数量固定，抽完就不能抽奖

3. 活动有四个状态: 可以抽奖、不能抽奖、发放奖品和奖品领完

4. 活动的四个状态转换关系图

   ![image-20220729105353884](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/state_start/image-20220729105353884.png?versionId=CAEQMRiBgMDBnJ2BlRgiIGJmYzk1ZDBlODRlMTQyZjNhMDlkNDAzM2NiNGZkMzli)

## 1.2 状态模式

### 1.2.1 基本介绍

1. 状态模式（State Pattern）：主要用来解决对象在多种状态转换时，需要对外输出不同的行为的问题，状态和行为是一一对应的，状态之间可以相互转换。
2. 当一个对象的内在状态改变时，允许改变其行为，这个对象看起来像是改变了其类。

### 1.2.2 原理类图

![image-20220729151331754](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/state_start/image-20220729151331754.png?versionId=CAEQMRiBgICnnJ2BlRgiIGEwMDVkMDU4Y2UyMTQ1ZTJhMDcwNDU5NmI2ZDQwM2Zh)

对原理类图的说明-即(状态模式的角色及职责)
1. Context 类为环境角色，用于维护 State 实例，这个实例定义当前状态。
2. State 是抽象状态角色，定义一个接口封装与 Context 的一个特点接口相关行为。
3. ConcreteState 具体的状态角色，每个子类实现一个与Context 的一个状态相关行为。

### 1.2.3 代码实现

1. 思路分析和图解(类图)
   - 定义出一个接口叫状态接口，每个状态都实现它。
   - 接口有扣除积分方法、抽奖方法、发放奖品方法

2. 代码实现

   ```java
   public interface State {
   
       /**
        * 扣除积分
        */
       public void deductPoints();
   
       /**
        * 是否中奖
        * @return
        */
       public boolean isDraw();
   
       /**
        * 发放奖品
        */
       public void dispensePrize();
   }
   ```

   ```java
   public class LotteryActivity {
   
       /**
        * 状态
        */
       private State state;
   
       // 不能抽奖状态
       ReadyState readyState = new ReadyState(this);
       // 可以抽奖状态
       LotteryState lotteryState = new LotteryState(this);
       // 发放奖品状态
       DispenseState dispenseState = new DispenseState(this);
       // 奖品领完状态
       FinishState finishState = new FinishState(this);
   
       /**
        * 商品数量
        */
       private int count;
   
       /**
        * 构造器
        * 1.初始化当前状态为 准备抽奖
        * 2.传入奖品数量
        * @param count
        */
       public LotteryActivity(int count) {
           state = new ReadyState(this);
           this.count = count;
       }
   
       /**
        * 扣除积分
        */
       public void deductPoints() {
           state.deductPoints();
       }
   
       /**
        * 抽奖
        */
       public void lottery() {
           if (state.isDraw()) {
               // 中奖就发放奖品
               state.dispensePrize();
           }
       }
   
       public State getState() {
           return state;
       }
   
       public void setState(State state) {
           this.state = state;
       }
   
       /**
        * 每领取一次奖品，count--
        * @return
        */
       public int getCount() {
           return count;
       }
   
       public void setCount(int count) {
           this.count = count;
       }
   
       public ReadyState getReadyState() {
           return readyState;
       }
   
       public void setReadyState(ReadyState readyState) {
           this.readyState = readyState;
       }
   
       public LotteryState getLotteryState() {
           return lotteryState;
       }
   
       public void setLotteryState(LotteryState lotteryState) {
           this.lotteryState = lotteryState;
       }
   
       public DispenseState getDispenseState() {
           return dispenseState;
       }
   
       public void setDispenseState(DispenseState dispenseState) {
           this.dispenseState = dispenseState;
       }
   
       public FinishState getFinishState() {
           return finishState;
       }
   
       public void setFinishState(FinishState finishState) {
           this.finishState = finishState;
       }
   }
   ```

   ```java
   public class ReadyState implements State{
   
       private LotteryActivity lotteryActivity;
   
       public ReadyState(LotteryActivity lotteryActivity) {
           this.lotteryActivity = lotteryActivity;
       }
   
       @Override
       public void deductPoints() {
           System.out.println("扣除 50 积分，可以开始抽奖... ");
           lotteryActivity.setState(lotteryActivity.getLotteryState());
       }
   
       @Override
       public boolean isDraw() {
           System.out.println("还未抽奖... ");
           return false;
       }
   
       @Override
       public void dispensePrize() {
           System.out.println("不能发放奖品");
       }
   }
   ```

   ```java
   public class LotteryState implements State{
   
       private LotteryActivity lotteryActivity;
   
       public LotteryState(LotteryActivity lotteryActivity) {
           this.lotteryActivity = lotteryActivity;
       }
   
       @Override
       public void deductPoints() {
           System.out.println("已经扣除积分，开始抽奖... ");
       }
   
       @Override
       public boolean isDraw() {
           System.out.println("正在抽奖，请稍等... ");
           Random random = new Random();
           int num = random.nextInt(1);
           if (num == 0) {
               lotteryActivity.setState(lotteryActivity.getDispenseState());
               return true;
           } else {
               System.out.println("很遗憾没有抽中奖品... ");
               lotteryActivity.setState(lotteryActivity.getReadyState());
               return false;
           }
       }
   
       @Override
       public void dispensePrize() {
           System.out.println("不能发放奖品");
       }
   }
   ```

   ```java
   public class DispenseState implements State{
   
       private LotteryActivity lotteryActivity;
   
       public DispenseState(LotteryActivity lotteryActivity) {
           this.lotteryActivity = lotteryActivity;
       }
   
       @Override
       public void deductPoints() {
           System.out.println("扣除 50 积分，可以开始抽奖... ");
       }
   
       @Override
       public boolean isDraw() {
           System.out.println("已抽奖... ");
           return false;
       }
   
       @Override
       public void dispensePrize() {
           if (lotteryActivity.getCount() > 0) {
               System.out.println("还有奖品，恭喜中奖... ");
               lotteryActivity.setState(lotteryActivity.getReadyState());
               // 发放奖品后，奖品数扣减
               lotteryActivity.setCount(lotteryActivity.getCount() - 1);
           } else {
               System.out.println("很遗憾，没有奖品了... ");
               lotteryActivity.setState(lotteryActivity.getFinishState());
           }
       }
   }
   ```

   ```java
   public class FinishState implements State {
   
       private LotteryActivity lotteryActivity;
   
       public FinishState(LotteryActivity lotteryActivity) {
           this.lotteryActivity = lotteryActivity;
       }
   
       @Override
       public void deductPoints() {
           System.out.println("抽奖活动结束，请下次再参加... ");
       }
   
       @Override
       public boolean isDraw() {
           return false;
       }
   
       @Override
       public void dispensePrize() {
       }
   }
   ```

   ```java
   public class Client {
   
       public static void main(String[] args) {
           LotteryActivity lotteryActivity = new LotteryActivity(1);
   
           for (int i = 0; i < 3; i++) {
               System.out.println("----- 第" + (i + 1) + "次抽奖 -----");
               // 参加抽奖
               lotteryActivity.deductPoints();
   
               // 抽奖
               lotteryActivity.lottery();
           }
           //  输出
           //----- 第1次抽奖 -----
           // 扣除 50 积分，可以开始抽奖...
           // 正在抽奖，请稍等...
           // 还有奖品，恭喜中奖...
           // ----- 第2次抽奖 -----
           // 扣除 50 积分，可以开始抽奖...
           // 正在抽奖，请稍等...
           // 很遗憾，没有奖品了...
           //----- 第3次抽奖 -----
           // 抽奖活动结束，请下次再参加...
   
       }
   }
   ```

## 1.3 状态模式在实际项目-借贷平台 源码剖析

1. 借贷平台的订单，有审核-发布-抢单 等等 步骤，随着操作的不同，会改变订单的状态, 项目中的这个模块实现就会使用到状态模式

2. 通常通过if/else判断订单的状态，从而实现不同的逻辑，伪代码如下：

   ```java
   if (审核) {
       // 审核逻辑
   } else if (发布) {
       // 发布逻辑
   } else if (接单) {
       // 接单逻辑
   }
   ```

3. 使用状态模式完成 借贷平台项目的审核模块 [设计+代码]

   ```java
   public interface State {
       /**
        * 电审
        */
       void checkEvent(Context context);
   
       /**
        * 电审失败
        */
       void checkFailEvent(Context context);
   
       /**
        * 定价发布
        */
       void makePriceEvent(Context context);
   
       /**
        * 接单
        */
       void acceptOrderEvent(Context context);
   
       /**
        * 无人接单失效
        */
       void notPeopleAcceptEvent(Context context);
   
       /**
        * 付款
        */
       void payOrderEvent(Context context);
   
       /**
        * 接单有人支付失效
        */
       void orderFailureEvent(Context context);
   
       /**
        * 反馈
        */
       void feedBackEvent(Context context);
   
   
       String getCurrentState();
   
   }
   ```

   ```java
   public class AbstractState implements State{
   
       protected static final RuntimeException EXCEPTION = new RuntimeException("操作流程不允许");
   
       //抽象类，默认实现了 State 接口的所有方法
       //该类的所有方法，其子类(具体的状态类)，可以有选择的进行重写
   
       @Override
       public void checkEvent(Context context) {
           throw EXCEPTION;
       }
   
       @Override
       public void checkFailEvent(Context context) {
           throw EXCEPTION;
       }
   
       @Override
       public void makePriceEvent(Context context) {
           throw EXCEPTION;
       }
   
       @Override
       public void acceptOrderEvent(Context context) {
           throw EXCEPTION;
       }
   
       @Override
       public void notPeopleAcceptEvent(Context context) {
           throw EXCEPTION;
       }
   
       @Override
       public void payOrderEvent(Context context) {
           throw EXCEPTION;
       }
   
       @Override
       public void orderFailureEvent(Context context) {
           throw EXCEPTION;
       }
   
       @Override
       public void feedBackEvent(Context context) {
           throw EXCEPTION;
       }
   
       @Override
       public String getCurrentState() {
           return null;
       }
   }
   ```

   ```java
   public class Context extends AbstractState {
   
       //当前的状态 state, 根据我们的业务流程处理，不停的变化
       private State state;
   
       @Override
       public void checkEvent(Context context) {
           state.checkEvent(this);
           getCurrentState();
       }
   
       @Override
       public void checkFailEvent(Context context) {
           state.checkFailEvent(this);
           getCurrentState();
       }
   
       @Override
       public void makePriceEvent(Context context) {
           state.makePriceEvent(this);
           getCurrentState();
       }
   
       @Override
       public void acceptOrderEvent(Context context) {
           state.acceptOrderEvent(this);
           getCurrentState();
       }
   
       @Override
       public void notPeopleAcceptEvent(Context context) {
           state.notPeopleAcceptEvent(this);
           getCurrentState();
       }
   
       @Override
       public void payOrderEvent(Context context) {
           state.payOrderEvent(this);
           getCurrentState();
       }
   
       @Override
       public void orderFailureEvent(Context context) {
           state.orderFailureEvent(this);
           getCurrentState();
       }
   
       @Override
       public void feedBackEvent(Context context) {
           state.feedBackEvent(this);
           getCurrentState();
       }
   
       public State getState() {
           return state;
       }
   
       public void setState(State state) {
           this.state = state;
       }
   
       @Override
       public String getCurrentState() {
           System.out.println("当前状态 : " + state.getCurrentState());
           return state.getCurrentState();
       }
   
   }
   ```

   ```java
   public enum StateEnum {
   
       //订单生成
       GENERATE(1, "GENERATE"),
   
       //已审核
       REVIEWED(2, "REVIEWED"),
   
       //已发布
       PUBLISHED(3, "PUBLISHED"),
   
       //待付款
       NOT_PAY(4, "NOT_PAY"),
   
       //已付款
       PAID(5, "PAID"),
   
       //已完结
       FEED_BACKED(6, "FEED_BACKED");
   
       private int key;
       private String value;
   
       StateEnum(int key, String value) {
           this.key = key;
           this.value = value;
       }
   
       public int getKey() {
           return key;
       }
   
       public String getValue() {
           return value;
       }
   }
   ```

   ```java
   public class AllState {
   }
   
   //各种具体状态类
   class FeedBackState extends AbstractState {
   
       @Override
       public String getCurrentState() {
           return StateEnum.FEED_BACKED.getValue();
       }
   }
   
   class GenerateState extends AbstractState {
   
       @Override
       public void checkEvent(Context context) {
           context.setState(new ReviewState());
       }
   
       @Override
       public void checkFailEvent(Context context) {
           context.setState(new FeedBackState());
       }
   
       @Override
       public String getCurrentState() {
           return StateEnum.GENERATE.getValue();
       }
   }
   
   class NotPayState extends AbstractState {
   
       @Override
       public void payOrderEvent(Context context) {
           context.setState(new PaidState());
       }
   
       @Override
       public void feedBackEvent(Context context) {
           context.setState(new FeedBackState());
       }
   
       @Override
       public String getCurrentState() {
           return StateEnum.NOT_PAY.getValue();
       }
   }
   
   class PaidState extends AbstractState {
   
       @Override
       public void feedBackEvent(Context context) {
           context.setState(new FeedBackState());
       }
   
       @Override
       public String getCurrentState() {
           return StateEnum.PAID.getValue();
       }
   }
   
   class PublishState extends AbstractState {
   
       @Override
       public void acceptOrderEvent(Context context) {
           //把当前状态设置为  NotPayState。。。
           //至于应该变成哪个状态，有流程图来决定
           context.setState(new NotPayState());
       }
   
       @Override
       public void notPeopleAcceptEvent(Context context) {
           context.setState(new FeedBackState());
       }
   
       @Override
       public String getCurrentState() {
           return StateEnum.PUBLISHED.getValue();
       }
   }
   
   class ReviewState extends AbstractState {
   
       @Override
       public void makePriceEvent(Context context) {
           context.setState(new PublishState());
       }
   
       @Override
       public String getCurrentState() {
           return StateEnum.REVIEWED.getValue();
       }
   
   }
   ```

## 1.4 状态模式的注意事项和细节

1. 代码有很强的可读性，状态模式将每个状态的行为封装到对应的一个类中。
2. 方便维护，将容易产生问题的 if-else 语句删除了，如果把每个状态的行为都放到一个类中，每次调用方法时都要判断当前是什么状态，不但会产出很多 if-else语句，而且容易出错。
3. 符合“开闭原则”，容易增删状态。
4. 会产生很多类，每个状态都要一个对应的类，当状态过多时会产生很多类，加大维护难度。
5. 应用场景：当一个事件或者对象有很多种状态，状态之间会相互转换，对不同的状态要求有不同的行为的时候，可以考虑使用状态模式。