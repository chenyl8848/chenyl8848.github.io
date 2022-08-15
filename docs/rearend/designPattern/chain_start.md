---
title: 责任链模式
date: 2022-07-31
isOriginal: true
category:
  - 设计模式
tag:
  - 责任链模式
---

# 责任链模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

采购员采购教学器材

1. 如果金额 小于等于 5000 , 由教学主任审批 （ 0 <=x<= 5000 ）
2. 如果金额 小于等于 10000 , 由院长审批 ( 5000 <x<= 10000 )
3. 如果金额 小于等于 30000 , 由副校长审批 ( 10000 <x<= 30000 )
4. 如果金额 超过 30000 以上，有校长审批 ( 30000 <x)

### 1.1.2 解决方案

![image-20220728084729853](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/dhain_start/image-20220728084729853.png?versionId=CAEQMRiBgMCJupGBlRgiIDZlMDg0NzUyZWYyMjQ2ODViYmNiNDk2YWI5MmU1NWE2)

### 1.1.3 问题分析

1. 传统方式是：接收到一个采购请求后，根据采购金额来调用对应的 Approver (审批人)完成审批。
2. 传统方式的问题分析 : 客户端这里会使用到分支判断(比如 switch) 来对不同的采购请求处理，这样就存在如下问题 
   1. 如果各个级别的人员审批金额发生变化，在客户端的也需要变化 。
   2. 客户端必须明确的知道有多少个审批级别和访问。
3. 这对一个采购请求进行处理和 Approver (审批人) 就存在强耦合关系，不利于代码的扩展和维护。

## 1.2 职责链模式

### 1.2.1 基本介绍

1. 职责链模式（Chain of Responsibility Pattern）, 又叫**责任链模式**，为请求创建了一个接收者对象的链，这种模式对请求的发送者和接收者进行解耦。
2. 职责链模式通常每个接收者都包含对另一个接收者的引用。如果一个对象不能处理该请求，那么它会把相同的请求传给下一个接收者，依此类推。
3. 责任链模式属于**行为型模式**。

### 1.2.2 原理类图

![image-20220729093759843](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/dhain_start/image-20220729093759843.png?versionId=CAEQMRiBgICmuJGBlRgiIDExMTBkOGE1MTI0MzRiZDU5NWVmNDc0ZDNjOTAwMWY0)

对原理类图的说明-即(职责链模式的角色及职责)

1. Handler: 抽象的处理者，定义了一个处理请求的接口，同时含有另外Handler。
2. ConcreteHandlerA、ConcreteHandlerB 是具体的处理者，处理它自己负责的请求，可以访问它的后继者(即下一个处理者)，如果可以处理当前请求，则处理，否则就将该请求交给下一个处理者去处理，从而形成一个职责链。
3. Request，含有很多属性，表示一个请求。

### 1.2.3 代码实现

1. 思路分析和图解(类图)

   ![image-20220729094006293](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/dhain_start/image-20220729094006293.png?versionId=CAEQMRiBgICGupGBlRgiIDZiNmVlMzFiMWUxODRlOGE4ZmIwOWJlY2Y3MzcwNDEw)

2. 代码实现

   ```java
   public class PurchaseRequest {
   
       /**
        * 采购请求id
        */
       private Integer id;
   
       /**
        * 采购金额
        */
       private Double price;
   
       public PurchaseRequest(Integer id, Double price) {
           this.id = id;
           this.price = price;
       }
   
       public Integer getId() {
           return id;
       }
   
       public void setId(Integer id) {
           this.id = id;
       }
   
       public Double getPrice() {
           return price;
       }
   
       public void setPrice(Double price) {
           this.price = price;
       }
   }
   ```

   ```java
   public abstract class Approver {
   
       /**
        * 当前审批人名字
        */
       protected String name;
   
       /**
        * 下一个审批人
        */
       protected Approver approver;
   
       public Approver(String name) {
           this.name = name;
       }
   
       /**
        * 下一个审批人
        * @param approver
        */
       public void setApprover(Approver approver) {
           this.approver = approver;
       }
   
       public abstract void processRequest(PurchaseRequest request);
   }
   ```

   ```java
   public class DepartmentApprover extends Approver{
   
       public DepartmentApprover(String name) {
           super(name);
       }
   
       @Override
       public void processRequest(PurchaseRequest request) {
   
           if (request.getPrice() <= 5000) {
               System.out.println(" 采购请求编号 id = " + request.getId() + " 被 " + this.name + " 审批了");
           } else {
               this.approver.processRequest(request);
           }
       }
   }
   ```

   ```java
   public class ColleagueApprover extends Approver{
   
       public ColleagueApprover(String name) {
           super(name);
       }
   
       @Override
       public void processRequest(PurchaseRequest request) {
   
           if (request.getPrice() > 5000 && request.getPrice() <= 10000) {
               System.out.println(" 采购请求编号 id = " + request.getId() + " 被 " + this.name + " 审批了");
           } else {
               this.approver.processRequest(request);
           }
       }
   }
   ```

   ```java
   public class ViceSchoolMasterApprover extends Approver{
   
       public ViceSchoolMasterApprover(String name) {
           super(name);
       }
   
       @Override
       public void processRequest(PurchaseRequest request) {
   
           if (request.getPrice() > 10000 && request.getPrice() <= 30000) {
               System.out.println(" 采购请求编号 id = " + request.getId() + " 被 " + this.name + " 审批了");
           } else {
               this.approver.processRequest(request);
           }
       }
   }
   ```

   ```java
   public class SchoolMasterApprover extends Approver{
   
       public SchoolMasterApprover(String name) {
           super(name);
       }
   
       @Override
       public void processRequest(PurchaseRequest request) {
   
           if (request.getPrice() > 30000) {
               System.out.println(" 采购请求编号 id = " + request.getId() + " 被 " + this.name + " 审批了");
           } else {
               this.approver.processRequest(request);
           }
       }
   }
   ```

   ```java
   public class Client {
   
       public static void main(String[] args) {
           PurchaseRequest purchaseRequest1 = new PurchaseRequest(1,31000.0);
   
           DepartmentApprover departmentApprover = new DepartmentApprover("张三");
           ColleagueApprover colleagueApprover = new ColleagueApprover("李四");
           ViceSchoolMasterApprover viceSchoolMasterApprover = new ViceSchoolMasterApprover("王五");
           SchoolMasterApprover schoolMasterApprover = new SchoolMasterApprover("赵六");
   
           // 设置各个审批人的下一个审批人
           departmentApprover.setApprover(colleagueApprover);
           colleagueApprover.setApprover(viceSchoolMasterApprover);
           viceSchoolMasterApprover.setApprover(schoolMasterApprover);
           schoolMasterApprover.setApprover(departmentApprover);
   
           departmentApprover.processRequest(purchaseRequest1);
   
           PurchaseRequest purchaseRequest2 = new PurchaseRequest(2,1000.0);
           schoolMasterApprover.processRequest(purchaseRequest2);
           
           // 输出
           // 采购请求编号 id = 1 被 赵六 审批了
           // 采购请求编号 id = 2 被 张三 审批了
       }
   
   }
   ```

## 1.3 职责链模式在 SpringMVC 框架应用的源码分析

1. SpringMVC-HandlerExecutionChain 类就使用到职责链模式

2. 代码分析+Debug源码+说明

4. 源码和说明
   
   `DispatcherServlet` 类中的 `doDispatch` 方法
   
   ```java
   protected void doDispatch(HttpServletRequest request, HttpServletResponse response) throws Exception {
       HttpServletRequest processedRequest = request;
       HandlerExecutionChain mappedHandler = null;
       boolean multipartRequestParsed = false;
       WebAsyncManager asyncManager = WebAsyncUtils.getAsyncManager(request);
   
       try {
           try {
               ModelAndView mv = null;
               Object dispatchException = null;
   
               try {
                   processedRequest = this.checkMultipart(request);
                   multipartRequestParsed = processedRequest != request;
                   // 获取到 HandlerExecutionChain 对象
                   mappedHandler = this.getHandler(processedRequest);
                   if (mappedHandler == null) {
                       this.noHandlerFound(processedRequest, response);
                       return;
                   }
   
                   HandlerAdapter ha = this.getHandlerAdapter(mappedHandler.getHandler());
                   String method = request.getMethod();
                   boolean isGet = HttpMethod.GET.matches(method);
                   if (isGet || HttpMethod.HEAD.matches(method)) {
                       long lastModified = ha.getLastModified(request, mappedHandler.getHandler());
                       if ((new ServletWebRequest(request, response)).checkNotModified(lastModified) && isGet) {
                           return;
                       }
                   }
   
                   // 调用了拦截器的 interceptor.preHandle
                   if (!mappedHandler.applyPreHandle(processedRequest, response)) {
                       return;
                   }
   
                   mv = ha.handle(processedRequest, response, mappedHandler.getHandler());
                   if (asyncManager.isConcurrentHandlingStarted()) {
                       return;
                   }
   
                   this.applyDefaultViewName(processedRequest, mv);
                   
                   // 调用了拦截器的 interceptor.applyPostHandle
                   mappedHandler.applyPostHandle(processedRequest, response, mv);
               } catch (Exception var20) {
                   dispatchException = var20;
               } catch (Throwable var21) {
                   dispatchException = new NestedServletException("Handler dispatch failed", var21);
               }
   
               this.processDispatchResult(processedRequest, response, mappedHandler, mv, (Exception)dispatchException);
           } catch (Exception var22) {
               this.triggerAfterCompletion(processedRequest, response, mappedHandler, var22);
           } catch (Throwable var23) {
               this.triggerAfterCompletion(processedRequest, response, mappedHandler, new NestedServletException("Handler processing failed", var23));
           }
   
       } finally {
           if (asyncManager.isConcurrentHandlingStarted()) {
               if (mappedHandler != null) {
                   mappedHandler.applyAfterConcurrentHandlingStarted(processedRequest, response);
               }
           } else if (multipartRequestParsed) {
               this.cleanupMultipart(processedRequest);
           }
   
       }
   }
   ```
   
4. 对源码总结

   - SpringMVC 请求的流程中，执行了 拦截器相关方法 Interceptor.preHandler 等等
   - 在处理 SpringMVC 请求时，使用到职责链模式还使用到适配器模式 
   - `HandlerExecutionChain` 主要负责的是请求拦截器的执行和请求处理，但是他本身不处理请求，只是将请求分配给链上注册处理器执行，这是职责链实现方式，减少职责链本身与处理逻辑之间的耦合，规范了处理流程
   - `HandlerExecutionChain` 维护了 `HandlerInterceptor` 的集合， 可以向其中注册相应的拦截器

## 1.4 职责链模式的注意事项和细节

1. 将请求和处理分开，实现解耦，提高系统的灵活性。

2. 简化了对象，使对象不需要知道链的结构。

3. 性能会受到影响，特别是在链比较长的时候，因此需控制链中最大节点数量，一般通过在 Handler 中设置一个最大节点数量，在 setNext() 方法中判断是否已经超过阀值，超过则不允许该链建立，避免出现超长链无意识地破坏系统性能。

4. 调试不方便。采用了类似递归的方式，调试时逻辑可能比较复杂。

5. 最佳应用场景：有多个对象可以处理同一个请求时，比如：多级请求、请假/加薪等审批流程、JavaWeb 中 Tomcat 对 Encoding 的处理、拦截器。