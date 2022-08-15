---
title: 观察者模式
date: 2022-07-25
isOriginal: true
category:
  - 设计模式
tag:
  - 观察者模式
---

# 观察者模式

<!-- more -->

## 1.1 应用实例

### 1.1.1 业务需求

1. 气象站可以将每天测量到的温度，湿度，气压等等以公告的形式发布出去(比如发布到自己的网站或第三方)。

2. 需要设计开放型 API ，便于其他第三方也能接入气象站获取数据。

3. 提供温度、气压和湿度的接口。

4. 测量数据更新时，要能实时的通知给第三方。

### 1.1.2 设计方案 

![image-20220731161616825](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/observer_start/image-20220731161616825.png?versionId=CAEQMRiBgIDCoMuBlRgiIDY3OWQ1NWM4YjM5YzRlYTI5ZjRmMjlhY2VkNTBmYjI2)

### 1.1.3 代码实现

```java
public class WeatherData {

    /**
     * 温度
     */
    private float temperature;

    /**
     * 压强
     */
    private float pressure;

    /**
     * 湿度
     */
    private float humidity;

    private SinaWebsite sinaWebsite;

    public WeatherData(SinaWebsite sinaWebsite) {
        this.sinaWebsite = sinaWebsite;
    }

    /**
     * 数据更新时，调用这个方法
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    public void updateData(float temperature, float pressure, float humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        changeData();
    }

    /**
     * 数据有变化，推送给各个天气网站
     */
    public void changeData() {
        sinaWebsite.update(temperature, pressure, humidity);
    }

    public float getTemperature() {
        return temperature;
    }

    public float getPressure() {
        return pressure;
    }

    public float getHumidity() {
        return humidity;
    }

}
```

```java
public class SinaWebsite {

    /**
     * 温度
     */
    private float temperature;

    /**
     * 压强
     */
    private float pressure;

    /**
     * 湿度
     */
    private float humidity;

    /**
     * 接收天气数据变化并展示
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    public void update(float temperature, float pressure, float humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        display();
    }

    /**
     * 展示天气信息
     */
    public void display() {
        System.out.println("sinaWebsite: today temperature is: " + this.temperature);
        System.out.println("sinaWebsite: today pressure is: " + this.pressure);
        System.out.println("sinaWebsite: today humidity is: " + this.humidity);
    }
}
```

```java
public class Client {

    public static void main(String[] args) {
        // 1.创建一个天气网站
        SinaWebsite sinaWebsite = new SinaWebsite();

        // 2.创建一个初始天气数据
        WeatherData weatherData = new WeatherData(sinaWebsite);

        // 3.修改天气数据，并推送给天气网站
        weatherData.updateData(10f, 20f, 30f);

        System.out.println("==========天气发生变化==========");

        // 4.再次修改天气数据
        weatherData.updateData(30f, 40f, 10f);
        
        // 输出
        // sinaWebsite: today temperature is: 10.0
        // sinaWebsite: today pressure is: 1.0
        // sinaWebsite: today humidity is: 30.0
        // ==========天气发生变化==========
        // sinaWebsite: today temperature is: 30.0
        // sinaWebsite: today pressure is: 40.0
        // sinaWebsite: today humidity is: 10.0

    }
}
```

### 1.1.4 问题分析

1. 其他第三方接入气象站获取数据的问题
2. 无法在运行时动态的添加第三方 (百度网站)
3. 违反 OCP 原则：在 `WeatherData` 中，当增加一个第三方，都需要创建一个对应的第三方的公告板对象，并加入到 `changeData()`, 不利于维护，也不是动态加入。
   
## 1.2 观察者模式

1. 观察者模式类似订牛奶业务
2. 奶站/气象局：Subject
3. 用户/第三方网站：Observer

Subject：登记注册、移除和通知
1. registerObserver 注册
2. removeObserver 移除
3. notifyObservers() 通知所有的注册的用户，根据不同需求，可以是更新数据，让用户来取，也可能是实施推送，看具体需求定
    Observer：接收输入

  观察者模式：对象之间多对一依赖的一种设计方案，被依赖的对象为 `Subject`，依赖的对象为 `Observer`，`Subject` 通知 `Observer` 变化，比如这里的奶站是 `Subject`，是 1 的一方。用户是 `Observer`，是多的一方。

## 1.3 观察者模式解决天气预报需求

### 1.3.1 类图说明

![image-20220731162755900](https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/observer_start/image-20220731162755900.png?versionId=CAEQMRiBgID4oMuBlRgiIGJiZjFmNzkyYzE3MzRiOTdiMDRmZGZlYjVlZDk2NWIw)


### 1.3.2 代码实现

```java
public interface Observer {

    public void update(float temperature, float pressure, float humidity);
}
```

```java
public interface Subject {

    public void registerObserver(Observer observer);

    public void removeObserver(Observer observer);

    public void notifyObservers();

    public void notifyObservers(Observer observer);
}
```

```java
ublic class WeatherData implements Subject {

    /**
     * 温度
     */
    private float temperature;

    /**
     * 压强
     */
    private float pressure;

    /**
     * 湿度
     */
    private float humidity;

    private List<Observer> observerList = new ArrayList<>();

    public WeatherData() {
    }

    @Override
    public void registerObserver(Observer observer) {
        this.observerList.add(observer);
    }

    @Override
    public void removeObserver(Observer observer) {
        this.observerList.remove(observer);
    }

    @Override
    public void notifyObservers() {
        this.observerList.forEach((item) -> item.update(temperature, pressure, humidity));
    }

    @Override
    public void notifyObservers(Observer observer) {
        this.observerList.stream()
                .filter(item -> item.equals(observer))
                .findFirst()
                .ifPresent(item -> item.update(temperature, pressure, humidity));
    }

    /**
     * 数据更新时，调用这个方法
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    public void updateData(float temperature, float pressure, float humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        changeData();
    }


    /**
     * 数据更新时，调用这个方法
     *
     * @param temperature
     * @param pressure
     * @param humidity
     */
    public void updateData(float temperature, float pressure, float humidity, Observer observer) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        changeData(observer);
    }

    /**
     * 数据有变化，推送给各个天气网站
     */
    public void changeData() {
        notifyObservers();
    }

    /**
     * 数据有变化，推送给指定的天气网站
     */
    public void changeData(Observer observer) {
        notifyObservers(observer);
    }
}
```

```java
public class SinaWebsite implements Observer{

    /**
     * 温度
     */
    private float temperature;

    /**
     * 压强
     */
    private float pressure;

    /**
     * 湿度
     */
    private float humidity;

    @Override
    public void update(float temperature, float pressure, float humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        display();
    }

    /**
     * 展示天气信息
     */
    public void display() {
        System.out.println("sinaWebsite: today temperature is: " + this.temperature);
        System.out.println("sinaWebsite: today pressure is: " + this.pressure);
        System.out.println("sinaWebsite: today humidity is: " + this.humidity);
    }

}
```

```java
public class BaiduWebsite implements Observer{

    /**
     * 温度
     */
    private float temperature;

    /**
     * 压强
     */
    private float pressure;

    /**
     * 湿度
     */
    private float humidity;

    @Override
    public void update(float temperature, float pressure, float humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        display();
    }

    /**
     * 展示天气信息
     */
    public void display() {
        System.out.println("baiduWebsite: today temperature is: " + this.temperature);
        System.out.println("baiduWebsite: today pressure is: " + this.pressure);
        System.out.println("baiduWebsite: today humidity is: " + this.humidity);
    }

}
```

```java
public class Client {

    public static void main(String[] args) {
        // 1.创建一个天气网站
        SinaWebsite sinaWebsite = new SinaWebsite();
        BaiduWebsite baiduWebsite = new BaiduWebsite();

        // 2.创建天气数据
        WeatherData weatherData = new WeatherData();

        // 3.注册通知对象
        weatherData.registerObserver(sinaWebsite);
        weatherData.registerObserver(baiduWebsite);

        // 4.天气变化
        weatherData.updateData(10f, 20f, 30f);

        // 5.移除天气网站
        weatherData.removeObserver(sinaWebsite);

        // 6.天气变化
        System.out.println("==========天气发生变化==========");
        weatherData.updateData(100f, 200f, 300f);
        
        // 输出
        // sinaWebsite: today temperature is: 10.0
        // sinaWebsite: today pressure is: 1.0
        // sinaWebsite: today humidity is: 30.0
        // baiduWebsite: today temperature is: 10.0
        // baiduWebsite: today pressure is: 1.0
        // baiduWebsite: today humidity is: 30.0
        // ==========天气发生变化==========
        // baiduWebsite: today temperature is: 100.0
        // baiduWebsite: today pressure is: 200.0
        // baiduWebsite: today humidity is: 300.0
    }
}
```



### 1.3.3 观察者模式的好处

1. 观察者模式设计后，会以集合的方式来管理用户(Observer)，包括注册，移除和通知。
2. 这样，我们增加观察者(这里可以理解成一个新的公告板)，就不需要去修改核心类 `WeatherData` 不会修改代码，遵守了 OCP 原则。

## 1.4 观察者模式在JDK应用的源码分析

1. Jdk的 `Observable` 类就使用了观察者模式

2. 代码分析+模式角色分析

   ```java
   public class Observable {
       private boolean changed = false;
       private Vector<Observer> obs;
   
       /** Construct an Observable with zero Observers. */
   
       public Observable() {
           obs = new Vector<>();
       }
   
       /**
        * Adds an observer to the set of observers for this object, provided
        * that it is not the same as some observer already in the set.
        * The order in which notifications will be delivered to multiple
        * observers is not specified. See the class comment.
        *
        * @param   o   an observer to be added.
        * @throws NullPointerException   if the parameter o is null.
        */
       public synchronized void addObserver(Observer o) {
           if (o == null)
               throw new NullPointerException();
           if (!obs.contains(o)) {
               obs.addElement(o);
           }
       }
   
       /**
        * Deletes an observer from the set of observers of this object.
        * Passing <CODE>null</CODE> to this method will have no effect.
        * @param   o   the observer to be deleted.
        */
       public synchronized void deleteObserver(Observer o) {
           obs.removeElement(o);
       }
   
       /**
        * If this object has changed, as indicated by the
        * <code>hasChanged</code> method, then notify all of its observers
        * and then call the <code>clearChanged</code> method to
        * indicate that this object has no longer changed.
        * <p>
        * Each observer has its <code>update</code> method called with two
        * arguments: this observable object and <code>null</code>. In other
        * words, this method is equivalent to:
        * <blockquote><tt>
        * notifyObservers(null)</tt></blockquote>
        *
        * @see     java.util.Observable#clearChanged()
        * @see     java.util.Observable#hasChanged()
        * @see     java.util.Observer#update(java.util.Observable, java.lang.Object)
        */
       public void notifyObservers() {
           notifyObservers(null);
       }
   
       /**
        * If this object has changed, as indicated by the
        * <code>hasChanged</code> method, then notify all of its observers
        * and then call the <code>clearChanged</code> method to indicate
        * that this object has no longer changed.
        * <p>
        * Each observer has its <code>update</code> method called with two
        * arguments: this observable object and the <code>arg</code> argument.
        *
        * @param   arg   any object.
        * @see     java.util.Observable#clearChanged()
        * @see     java.util.Observable#hasChanged()
        * @see     java.util.Observer#update(java.util.Observable, java.lang.Object)
        */
       public void notifyObservers(Object arg) {
           /*
            * a temporary array buffer, used as a snapshot of the state of
            * current Observers.
            */
           Object[] arrLocal;
   
           synchronized (this) {
               /* We don't want the Observer doing callbacks into
                * arbitrary code while holding its own Monitor.
                * The code where we extract each Observable from
                * the Vector and store the state of the Observer
                * needs synchronization, but notifying observers
                * does not (should not).  The worst result of any
                * potential race-condition here is that:
                * 1) a newly-added Observer will miss a
                *   notification in progress
                * 2) a recently unregistered Observer will be
                *   wrongly notified when it doesn't care
                */
               if (!changed)
                   return;
               arrLocal = obs.toArray();
               clearChanged();
           }
   
           for (int i = arrLocal.length-1; i>=0; i--)
               ((Observer)arrLocal[i]).update(this, arg);
       }
   
       /**
        * Clears the observer list so that this object no longer has any observers.
        */
       public synchronized void deleteObservers() {
           obs.removeAllElements();
       }
   
       /**
        * Marks this <tt>Observable</tt> object as having been changed; the
        * <tt>hasChanged</tt> method will now return <tt>true</tt>.
        */
       protected synchronized void setChanged() {
           changed = true;
       }
   
       /**
        * Indicates that this object has no longer changed, or that it has
        * already notified all of its observers of its most recent change,
        * so that the <tt>hasChanged</tt> method will now return <tt>false</tt>.
        * This method is called automatically by the
        * <code>notifyObservers</code> methods.
        *
        * @see     java.util.Observable#notifyObservers()
        * @see     java.util.Observable#notifyObservers(java.lang.Object)
        */
       protected synchronized void clearChanged() {
           changed = false;
       }
   
       /**
        * Tests if this object has changed.
        *
        * @return  <code>true</code> if and only if the <code>setChanged</code>
        *          method has been called more recently than the
        *          <code>clearChanged</code> method on this object;
        *          <code>false</code> otherwise.
        * @see     java.util.Observable#clearChanged()
        * @see     java.util.Observable#setChanged()
        */
       public synchronized boolean hasChanged() {
           return changed;
       }
   
       /**
        * Returns the number of observers of this <tt>Observable</tt> object.
        *
        * @return  the number of observers of this object.
        */
       public synchronized int countObservers() {
           return obs.size();
       }
   }
   ```

3. 模式角色分析
   - `Observable` 的作用和地位等价于 我们前面讲过 `Subject`
   - `Observable` 是类，不是接口，类中已经实现了核心的方法 ，即管理 `Observer` 的方法 `add()` 、`delete()` 、`notify()`
   - `Observer` 的作用和地位等价于我们前面讲过的 `Observer` ，有 `update()`
   - `Observable` 和 `Observer` 的使用方法和前面讲过的一样，只是 `Observable` 是类，通过继承来实现观察者模式。