---
title: 解释器模式
date: 2022-07-28
isOriginal: true
category:
  - 设计模式
tag:
  - 解释器模式
---

# 解释器模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

通过解释器模式来实现四则运算，如计算a+b-c的值，具体要求：
1. 先输入表达式的形式，比如 a+b+c-d+e，要求表达式的字母不能重复

2. 在分别输入a、b、c、d、e 的值

3. 最后求出结果，如图：

   ![image-20220731175426066](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/interpreter_start/image-20220731175426066.png?versionId=CAEQMRiBgMCp3KeBlRgiIGZiOTM1MWVmMmM4OTQ4Zjc4NTNkYzc1MGNhZmE4ZmQy)

### 1.1.2 解决方案

1. 编写一个方法，接收表达式的形式，然后根据用户输入的数值进行解析，得到结果。
2. 问题分析：如果加入新的运算符，比如 *、/、(、 等等，不利于扩展，另外让一个方法来解析会造成程序结构混乱，不够清晰。


## 1.2 解释器模式

### 1.2.1 基本介绍

1. 在编译原理中，一个算术表达式通过词法分析器形成词法单元，而后这些词法单元再通过语法分析器构建语法分析树，最终形成一颗抽象的语法分析树，这里的词法分析器和语法分析器都可以看做是解释器。

2. 解释器模式（Interpreter Pattern）：是指给定一个语言(表达式) ，定义它的文法的一种表示，并定义一个解释器，使用该解释器来解释语言中的句子(表达式)。
3. 应用场景
   - 应用可以将一个需要解释执行的语言中的句子表示为一个抽象语法树
   - 一些重复出现的问题可以用一种简单的语言来表达
   - 一个简单语法需要解释的场景

4. 这样的例子还有，比如编译器、运算表达式计算、正则表达式、机器人等。

### 1.2.2 原理类图

![image-20220731194011408](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/interpreter_start/image-20220731194011408.png?versionId=CAEQMRiBgICk3KeBlRgiIDc1NWRiZGU4YzM1ZTQ4MjViZTJhZGFjZGNjZjAzNzVh)

对原理类图的说明-即(解释器模式的角色及职责)

1. `Context`: 是环境角色，含有解释器之外的全局信息。
2. `AbstractExpression`: 抽象表达式，声明一个抽象的解释操作，这个方法为抽象语法树中所有的节点所共享。
3. `TerminalExpression`: 为终结符表达式,，实现与文法中的终结符相关的解释操作。
4. `NonTermialExpression`: 为非终结符表达式，为文法中的非终结符实现解释操作。
5. 说明： 输入 `ContextheTerminalExpression`  信息通过 Client 输入即可。

### 1.2.3 代码实现

1. 用解释器模式实现四则运算

2. 思路分析和图解(类图)

   ![image-20220731201410780](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/interpreter_start/image-20220731201410780.png?versionId=CAEQMRiBgMD63qeBlRgiIGM2ZjJiNTRmNzg4NjRiZTk5MGJlYjllMzcxZDE0ZWM2)

3. 代码实现
   ```java
   public abstract class Expression {
   
       /**
        * 解释公式和数值 a+b-c
        * @param map key为参数 value 为参数值 {a=1,b=2,c=3}
        * @return
        */
       public abstract int interpreter(HashMap<String, Integer> map);
   }
   ```

   ```java
   public class VarExpression extends Expression{
   
       private String key;
   
       public VarExpression(String key) {
           this.key = key;
       }
   
       // 获取参数对应的值
       @Override
       public int interpreter(HashMap<String, Integer> map) {
           return map.get(key);
       }
   }
   ```

   ```java
   public class SymbolExpression extends Expression{
   
       // 符号左边的表达式
       protected Expression left;
       // 符号右边的表达式
       protected Expression right;
   
       public SymbolExpression(Expression left, Expression right) {
           this.left = left;
           this.right = right;
       }
   
       @Override
       public int interpreter(HashMap<String, Integer> map) {
           return 0;
       }
   }
   ```

   ```java
   public class AddExpression extends SymbolExpression {
       public AddExpression(Expression left, Expression right) {
           super(left, right);
       }
   
       @Override
       public int interpreter(HashMap<String, Integer> map) {
           return super.left.interpreter(map) + super.right.interpreter(map);
       }
   }
   ```

   ```java
   public class SubtractExpression extends SymbolExpression {
       public SubtractExpression(Expression left, Expression right) {
           super(left, right);
       }
   
       @Override
       public int interpreter(HashMap<String, Integer> map) {
           return super.left.interpreter(map) - super.right.interpreter(map);
       }
   }
   ```

   ```java
   public class Calculator {
   
       // 表达式
       private Expression expression;
   
       public Calculator(String express) {
           // 安排运算先后顺序
           Stack<Expression> stack = new Stack<>();
           char[] chars = express.toCharArray();
   
           Expression left = null;
           Expression right = null;
   
           for (int i = 0; i < chars.length; i++) {
               switch (chars[i]) {
                   case '+':
                       left = stack.pop();
                       right = new VarExpression(String.valueOf(chars[++i]));
                       stack.push(new AddExpression(left, right));
                       break;
                   case '-':
                       left = stack.pop();
                       right = new VarExpression(String.valueOf(chars[++i]));
                       stack.push(new SubtractExpression(left, right));
                       break;
                   default:
                       stack.push(new VarExpression(String.valueOf(chars[i])));
                       break;
               }
           }
   
           this.expression = stack.pop();
       }
   
       public int calculate(HashMap<String, Integer> map) {
           return expression.interpreter(map);
       }
   }
   ```

   ```java
   public class Client {
   
       public static void main(String[] args) throws IOException {
           String expression = getExpression();
           HashMap<String, Integer> map = getValue(expression);
   
           Calculator calculator = new Calculator(expression);
           int calculate = calculator.calculate(map);
           System.out.println("表达式:" + expression + "的运算结果:" + calculate);
   
           // 输出
           // 请输入表达式:
           // a+b-c
           // 请输入 a 的值
           // 20
           // 请输入 b 的值
           // 10
           // 请输入 c 的值
           // 20
           // 表达式:a+b-c的运算结果:10
   
       }
   
       public static String getExpression() throws IOException {
           System.out.println("请输入表达式:");
           return (new BufferedReader(new InputStreamReader(System.in))).readLine();
       }
   
       public static HashMap<String, Integer> getValue(String expression) throws IOException {
           HashMap<String, Integer> map = new HashMap<>();
   
           for (char ch : expression.toCharArray()) {
               if (ch != '+' && ch != '-') {
                   if (!map.containsKey(String.valueOf(ch))) {
                       System.out.println("请输入 " + String.valueOf(ch) + " 的值");
                       String value = (new BufferedReader(new InputStreamReader(System.in))).readLine();
                       map.put(String.valueOf(ch), Integer.valueOf(value));
                   }
               }
           }
   
           return map;
       }
   }
   ```

## 1.3 解释器模式在Spring框架应用的源码剖析

1. Spring框架中 `SpelExpressionParser` 就使用到解释器模式

2. 代码分析+Debug源码

   ```java
   public class InterpreterTest {
   
       public static void main(String[] args) {
           SpelExpressionParser spelExpressionParser = new SpelExpressionParser();
           Expression expression = spelExpressionParser.parseExpression("10+5-9");
           int value = (int) expression.getValue();
           System.out.println("运算结果值:" + value);
           // 输出
           // 运算结果值:6
       }
   }
   ```

3. 说明

## 1.4 解释器模式的注意事项和细节

1. 当有一个语言需要解释执行，可将该语言中的句子表示为一个抽象语法树，就可以考虑使用解释器模式，让程序具有良好的扩展性。
2. 应用场景：编译器、运算表达式计算、正则表达式、机器人等。
3. 使用解释器可能带来的问题：解释器模式会引起类膨胀、解释器模式采用递归调用方法，将会导致调试非常复杂、效率可能降低。