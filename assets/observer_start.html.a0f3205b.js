import{_ as n,f as s}from"./app.06d697e7.js";const a={},p=s(`<h1 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u89C2\u5BDF\u8005\u6A21\u5F0F</h1><h2 id="_1-1-\u5E94\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5E94\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> 1.1 \u5E94\u7528\u5B9E\u4F8B</h2><h3 id="_1-1-1-\u4E1A\u52A1\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u4E1A\u52A1\u9700\u6C42" aria-hidden="true">#</a> 1.1.1 \u4E1A\u52A1\u9700\u6C42</h3><ol><li><p>\u6C14\u8C61\u7AD9\u53EF\u4EE5\u5C06\u6BCF\u5929\u6D4B\u91CF\u5230\u7684\u6E29\u5EA6\uFF0C\u6E7F\u5EA6\uFF0C\u6C14\u538B\u7B49\u7B49\u4EE5\u516C\u544A\u7684\u5F62\u5F0F\u53D1\u5E03\u51FA\u53BB(\u6BD4\u5982\u53D1\u5E03\u5230\u81EA\u5DF1\u7684\u7F51\u7AD9\u6216\u7B2C\u4E09\u65B9)\u3002</p></li><li><p>\u9700\u8981\u8BBE\u8BA1\u5F00\u653E\u578B API \uFF0C\u4FBF\u4E8E\u5176\u4ED6\u7B2C\u4E09\u65B9\u4E5F\u80FD\u63A5\u5165\u6C14\u8C61\u7AD9\u83B7\u53D6\u6570\u636E\u3002</p></li><li><p>\u63D0\u4F9B\u6E29\u5EA6\u3001\u6C14\u538B\u548C\u6E7F\u5EA6\u7684\u63A5\u53E3\u3002</p></li><li><p>\u6D4B\u91CF\u6570\u636E\u66F4\u65B0\u65F6\uFF0C\u8981\u80FD\u5B9E\u65F6\u7684\u901A\u77E5\u7ED9\u7B2C\u4E09\u65B9\u3002</p></li></ol><h3 id="_1-1-2-\u8BBE\u8BA1\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u8BBE\u8BA1\u65B9\u6848" aria-hidden="true">#</a> 1.1.2 \u8BBE\u8BA1\u65B9\u6848</h3><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/observer_start/image-20220731161616825.png?versionId=CAEQMRiBgIDCoMuBlRgiIDY3OWQ1NWM4YjM5YzRlYTI5ZjRmMjlhY2VkNTBmYjI2" alt="image-20220731161616825" loading="lazy"></p><h3 id="_1-1-3-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-1-3-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 1.1.3 \u4EE3\u7801\u5B9E\u73B0</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WeatherData</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6E29\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u538B\u5F3A
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6E7F\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">SinaWebsite</span> sinaWebsite<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token class-name">SinaWebsite</span> sinaWebsite<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sinaWebsite <span class="token operator">=</span> sinaWebsite<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6570\u636E\u66F4\u65B0\u65F6\uFF0C\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5
     *
     * <span class="token keyword">@param</span> <span class="token parameter">temperature</span>
     * <span class="token keyword">@param</span> <span class="token parameter">pressure</span>
     * <span class="token keyword">@param</span> <span class="token parameter">humidity</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6570\u636E\u6709\u53D8\u5316\uFF0C\u63A8\u9001\u7ED9\u5404\u4E2A\u5929\u6C14\u7F51\u7AD9
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sinaWebsite<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> pressure<span class="token punctuation">,</span> humidity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getTemperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> temperature<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPressure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pressure<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getHumidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> humidity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SinaWebsite</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6E29\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u538B\u5F3A
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6E7F\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u63A5\u6536\u5929\u6C14\u6570\u636E\u53D8\u5316\u5E76\u5C55\u793A
     *
     * <span class="token keyword">@param</span> <span class="token parameter">temperature</span>
     * <span class="token keyword">@param</span> <span class="token parameter">pressure</span>
     * <span class="token keyword">@param</span> <span class="token parameter">humidity</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5C55\u793A\u5929\u6C14\u4FE1\u606F
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sinaWebsite: today temperature is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>temperature<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sinaWebsite: today pressure is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sinaWebsite: today humidity is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>humidity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.\u521B\u5EFA\u4E00\u4E2A\u5929\u6C14\u7F51\u7AD9</span>
        <span class="token class-name">SinaWebsite</span> sinaWebsite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SinaWebsite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2.\u521B\u5EFA\u4E00\u4E2A\u521D\u59CB\u5929\u6C14\u6570\u636E</span>
        <span class="token class-name">WeatherData</span> weatherData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span>sinaWebsite<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3.\u4FEE\u6539\u5929\u6C14\u6570\u636E\uFF0C\u5E76\u63A8\u9001\u7ED9\u5929\u6C14\u7F51\u7AD9</span>
        weatherData<span class="token punctuation">.</span><span class="token function">updateData</span><span class="token punctuation">(</span><span class="token number">10f</span><span class="token punctuation">,</span> <span class="token number">20f</span><span class="token punctuation">,</span> <span class="token number">30f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========\u5929\u6C14\u53D1\u751F\u53D8\u5316==========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.\u518D\u6B21\u4FEE\u6539\u5929\u6C14\u6570\u636E</span>
        weatherData<span class="token punctuation">.</span><span class="token function">updateData</span><span class="token punctuation">(</span><span class="token number">30f</span><span class="token punctuation">,</span> <span class="token number">40f</span><span class="token punctuation">,</span> <span class="token number">10f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// \u8F93\u51FA</span>
        <span class="token comment">// sinaWebsite: today temperature is: 10.0</span>
        <span class="token comment">// sinaWebsite: today pressure is: 1.0</span>
        <span class="token comment">// sinaWebsite: today humidity is: 30.0</span>
        <span class="token comment">// ==========\u5929\u6C14\u53D1\u751F\u53D8\u5316==========</span>
        <span class="token comment">// sinaWebsite: today temperature is: 30.0</span>
        <span class="token comment">// sinaWebsite: today pressure is: 40.0</span>
        <span class="token comment">// sinaWebsite: today humidity is: 10.0</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="_1-1-4-\u95EE\u9898\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_1-1-4-\u95EE\u9898\u5206\u6790" aria-hidden="true">#</a> 1.1.4 \u95EE\u9898\u5206\u6790</h3><ol><li>\u5176\u4ED6\u7B2C\u4E09\u65B9\u63A5\u5165\u6C14\u8C61\u7AD9\u83B7\u53D6\u6570\u636E\u7684\u95EE\u9898</li><li>\u65E0\u6CD5\u5728\u8FD0\u884C\u65F6\u52A8\u6001\u7684\u6DFB\u52A0\u7B2C\u4E09\u65B9 (\u767E\u5EA6\u7F51\u7AD9)</li><li>\u8FDD\u53CD OCP \u539F\u5219\uFF1A\u5728 <code>WeatherData</code> \u4E2D\uFF0C\u5F53\u589E\u52A0\u4E00\u4E2A\u7B2C\u4E09\u65B9\uFF0C\u90FD\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94\u7684\u7B2C\u4E09\u65B9\u7684\u516C\u544A\u677F\u5BF9\u8C61\uFF0C\u5E76\u52A0\u5165\u5230 <code>changeData()</code>, \u4E0D\u5229\u4E8E\u7EF4\u62A4\uFF0C\u4E5F\u4E0D\u662F\u52A8\u6001\u52A0\u5165\u3002</li></ol><h2 id="_1-2-\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-2-\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> 1.2 \u89C2\u5BDF\u8005\u6A21\u5F0F</h2><ol><li>\u89C2\u5BDF\u8005\u6A21\u5F0F\u7C7B\u4F3C\u8BA2\u725B\u5976\u4E1A\u52A1</li><li>\u5976\u7AD9/\u6C14\u8C61\u5C40\uFF1ASubject</li><li>\u7528\u6237/\u7B2C\u4E09\u65B9\u7F51\u7AD9\uFF1AObserver</li></ol><p>Subject\uFF1A\u767B\u8BB0\u6CE8\u518C\u3001\u79FB\u9664\u548C\u901A\u77E5</p><ol><li>registerObserver \u6CE8\u518C</li><li>removeObserver \u79FB\u9664</li><li>notifyObservers() \u901A\u77E5\u6240\u6709\u7684\u6CE8\u518C\u7684\u7528\u6237\uFF0C\u6839\u636E\u4E0D\u540C\u9700\u6C42\uFF0C\u53EF\u4EE5\u662F\u66F4\u65B0\u6570\u636E\uFF0C\u8BA9\u7528\u6237\u6765\u53D6\uFF0C\u4E5F\u53EF\u80FD\u662F\u5B9E\u65BD\u63A8\u9001\uFF0C\u770B\u5177\u4F53\u9700\u6C42\u5B9A Observer\uFF1A\u63A5\u6536\u8F93\u5165</li></ol><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF1A\u5BF9\u8C61\u4E4B\u95F4\u591A\u5BF9\u4E00\u4F9D\u8D56\u7684\u4E00\u79CD\u8BBE\u8BA1\u65B9\u6848\uFF0C\u88AB\u4F9D\u8D56\u7684\u5BF9\u8C61\u4E3A <code>Subject</code>\uFF0C\u4F9D\u8D56\u7684\u5BF9\u8C61\u4E3A <code>Observer</code>\uFF0C<code>Subject</code> \u901A\u77E5 <code>Observer</code> \u53D8\u5316\uFF0C\u6BD4\u5982\u8FD9\u91CC\u7684\u5976\u7AD9\u662F <code>Subject</code>\uFF0C\u662F 1 \u7684\u4E00\u65B9\u3002\u7528\u6237\u662F <code>Observer</code>\uFF0C\u662F\u591A\u7684\u4E00\u65B9\u3002</p><h2 id="_1-3-\u89C2\u5BDF\u8005\u6A21\u5F0F\u89E3\u51B3\u5929\u6C14\u9884\u62A5\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-3-\u89C2\u5BDF\u8005\u6A21\u5F0F\u89E3\u51B3\u5929\u6C14\u9884\u62A5\u9700\u6C42" aria-hidden="true">#</a> 1.3 \u89C2\u5BDF\u8005\u6A21\u5F0F\u89E3\u51B3\u5929\u6C14\u9884\u62A5\u9700\u6C42</h2><h3 id="_1-3-1-\u7C7B\u56FE\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-3-1-\u7C7B\u56FE\u8BF4\u660E" aria-hidden="true">#</a> 1.3.1 \u7C7B\u56FE\u8BF4\u660E</h3><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/observer_start/image-20220731162755900.png?versionId=CAEQMRiBgID4oMuBlRgiIGJiZjFmNzkyYzE3MzRiOTdiMDRmZGZlYjVlZDk2NWIw" alt="image-20220731162755900" loading="lazy"></p><h3 id="_1-3-2-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-3-2-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 1.3.2 \u4EE3\u7801\u5B9E\u73B0</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>ublic <span class="token keyword">class</span> <span class="token class-name">WeatherData</span> <span class="token keyword">implements</span> <span class="token class-name">Subject</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6E29\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u538B\u5F3A
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6E7F\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span> observerList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> pressure<span class="token punctuation">,</span> humidity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observerList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> pressure<span class="token punctuation">,</span> humidity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6570\u636E\u66F4\u65B0\u65F6\uFF0C\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5
     *
     * <span class="token keyword">@param</span> <span class="token parameter">temperature</span>
     * <span class="token keyword">@param</span> <span class="token parameter">pressure</span>
     * <span class="token keyword">@param</span> <span class="token parameter">humidity</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * \u6570\u636E\u66F4\u65B0\u65F6\uFF0C\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5
     *
     * <span class="token keyword">@param</span> <span class="token parameter">temperature</span>
     * <span class="token keyword">@param</span> <span class="token parameter">pressure</span>
     * <span class="token keyword">@param</span> <span class="token parameter">humidity</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">,</span> <span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token function">changeData</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6570\u636E\u6709\u53D8\u5316\uFF0C\u63A8\u9001\u7ED9\u5404\u4E2A\u5929\u6C14\u7F51\u7AD9
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6570\u636E\u6709\u53D8\u5316\uFF0C\u63A8\u9001\u7ED9\u6307\u5B9A\u7684\u5929\u6C14\u7F51\u7AD9
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">changeData</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> observer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">notifyObservers</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SinaWebsite</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6E29\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u538B\u5F3A
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6E7F\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5C55\u793A\u5929\u6C14\u4FE1\u606F
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sinaWebsite: today temperature is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>temperature<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sinaWebsite: today pressure is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;sinaWebsite: today humidity is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>humidity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaiduWebsite</span> <span class="token keyword">implements</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6E29\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> temperature<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u538B\u5F3A
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pressure<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6E7F\u5EA6
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> humidity<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">float</span> temperature<span class="token punctuation">,</span> <span class="token keyword">float</span> pressure<span class="token punctuation">,</span> <span class="token keyword">float</span> humidity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>temperature <span class="token operator">=</span> temperature<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pressure <span class="token operator">=</span> pressure<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>humidity <span class="token operator">=</span> humidity<span class="token punctuation">;</span>
        <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5C55\u793A\u5929\u6C14\u4FE1\u606F
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;baiduWebsite: today temperature is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>temperature<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;baiduWebsite: today pressure is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pressure<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;baiduWebsite: today humidity is: &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>humidity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.\u521B\u5EFA\u4E00\u4E2A\u5929\u6C14\u7F51\u7AD9</span>
        <span class="token class-name">SinaWebsite</span> sinaWebsite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SinaWebsite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BaiduWebsite</span> baiduWebsite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BaiduWebsite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2.\u521B\u5EFA\u5929\u6C14\u6570\u636E</span>
        <span class="token class-name">WeatherData</span> weatherData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeatherData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3.\u6CE8\u518C\u901A\u77E5\u5BF9\u8C61</span>
        weatherData<span class="token punctuation">.</span><span class="token function">registerObserver</span><span class="token punctuation">(</span>sinaWebsite<span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherData<span class="token punctuation">.</span><span class="token function">registerObserver</span><span class="token punctuation">(</span>baiduWebsite<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.\u5929\u6C14\u53D8\u5316</span>
        weatherData<span class="token punctuation">.</span><span class="token function">updateData</span><span class="token punctuation">(</span><span class="token number">10f</span><span class="token punctuation">,</span> <span class="token number">20f</span><span class="token punctuation">,</span> <span class="token number">30f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 5.\u79FB\u9664\u5929\u6C14\u7F51\u7AD9</span>
        weatherData<span class="token punctuation">.</span><span class="token function">removeObserver</span><span class="token punctuation">(</span>sinaWebsite<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 6.\u5929\u6C14\u53D8\u5316</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;==========\u5929\u6C14\u53D1\u751F\u53D8\u5316==========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        weatherData<span class="token punctuation">.</span><span class="token function">updateData</span><span class="token punctuation">(</span><span class="token number">100f</span><span class="token punctuation">,</span> <span class="token number">200f</span><span class="token punctuation">,</span> <span class="token number">300f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// \u8F93\u51FA</span>
        <span class="token comment">// sinaWebsite: today temperature is: 10.0</span>
        <span class="token comment">// sinaWebsite: today pressure is: 1.0</span>
        <span class="token comment">// sinaWebsite: today humidity is: 30.0</span>
        <span class="token comment">// baiduWebsite: today temperature is: 10.0</span>
        <span class="token comment">// baiduWebsite: today pressure is: 1.0</span>
        <span class="token comment">// baiduWebsite: today humidity is: 30.0</span>
        <span class="token comment">// ==========\u5929\u6C14\u53D1\u751F\u53D8\u5316==========</span>
        <span class="token comment">// baiduWebsite: today temperature is: 100.0</span>
        <span class="token comment">// baiduWebsite: today pressure is: 200.0</span>
        <span class="token comment">// baiduWebsite: today humidity is: 300.0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h3 id="_1-3-3-\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_1-3-3-\u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u597D\u5904" aria-hidden="true">#</a> 1.3.3 \u89C2\u5BDF\u8005\u6A21\u5F0F\u7684\u597D\u5904</h3><ol><li>\u89C2\u5BDF\u8005\u6A21\u5F0F\u8BBE\u8BA1\u540E\uFF0C\u4F1A\u4EE5\u96C6\u5408\u7684\u65B9\u5F0F\u6765\u7BA1\u7406\u7528\u6237(Observer)\uFF0C\u5305\u62EC\u6CE8\u518C\uFF0C\u79FB\u9664\u548C\u901A\u77E5\u3002</li><li>\u8FD9\u6837\uFF0C\u6211\u4EEC\u589E\u52A0\u89C2\u5BDF\u8005(\u8FD9\u91CC\u53EF\u4EE5\u7406\u89E3\u6210\u4E00\u4E2A\u65B0\u7684\u516C\u544A\u677F)\uFF0C\u5C31\u4E0D\u9700\u8981\u53BB\u4FEE\u6539\u6838\u5FC3\u7C7B <code>WeatherData</code> \u4E0D\u4F1A\u4FEE\u6539\u4EE3\u7801\uFF0C\u9075\u5B88\u4E86 OCP \u539F\u5219\u3002</li></ol><h2 id="_1-4-\u89C2\u5BDF\u8005\u6A21\u5F0F\u5728jdk\u5E94\u7528\u7684\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_1-4-\u89C2\u5BDF\u8005\u6A21\u5F0F\u5728jdk\u5E94\u7528\u7684\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> 1.4 \u89C2\u5BDF\u8005\u6A21\u5F0F\u5728JDK\u5E94\u7528\u7684\u6E90\u7801\u5206\u6790</h2><ol><li><p>Jdk\u7684 <code>Observable</code> \u7C7B\u5C31\u4F7F\u7528\u4E86\u89C2\u5BDF\u8005\u6A21\u5F0F</p></li><li><p>\u4EE3\u7801\u5206\u6790+\u6A21\u5F0F\u89D2\u8272\u5206\u6790</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Observable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> changed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Vector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Observer</span><span class="token punctuation">&gt;</span></span> obs<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** Construct an Observable with zero Observers. */</span>

    <span class="token keyword">public</span> <span class="token class-name">Observable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Adds an observer to the set of observers for this object, provided
     * that it is not the same as some observer already in the set.
     * The order in which notifications will be delivered to multiple
     * observers is not specified. See the class comment.
     *
     * <span class="token keyword">@param</span>   <span class="token parameter">o</span>   an observer to be added.
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span>   if the parameter o is null.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">addObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obs<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            obs<span class="token punctuation">.</span><span class="token function">addElement</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Deletes an observer from the set of observers of this object.
     * Passing <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CODE</span><span class="token punctuation">&gt;</span></span>null<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CODE</span><span class="token punctuation">&gt;</span></span> to this method will have no effect.
     * <span class="token keyword">@param</span>   <span class="token parameter">o</span>   the observer to be deleted.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">deleteObserver</span><span class="token punctuation">(</span><span class="token class-name">Observer</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obs<span class="token punctuation">.</span><span class="token function">removeElement</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * If this object has changed, as indicated by the
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">hasChanged</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> method, then notify all of its observers
     * and then call the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">clearChanged</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> method to
     * indicate that this object has no longer changed.
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * Each observer has its <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">update</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> method called with two
     * arguments: this observable object and <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token keyword">null</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>. In other
     * words, this method is equivalent to:
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span>
     <span class="token code-section">* <span class="token line"><span class="token code language-java"><span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">&gt;</span></span>
     *
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">#</span><span class="token function">clearChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">#</span><span class="token function">hasChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observer</span><span class="token punctuation">#</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">,</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Object</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * If this object has changed, as indicated by the
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">hasChanged</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> method, then notify all of its observers
     * and then call the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">clearChanged</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> method to indicate
     * that this object has no longer changed.
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * Each observer has its <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">update</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> method called with two
     * arguments: this observable object and the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">arg</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> argument.
     *
     * <span class="token keyword">@param</span>   <span class="token parameter">arg</span>   any object.
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">#</span><span class="token function">clearChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">#</span><span class="token function">hasChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observer</span><span class="token punctuation">#</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">,</span> <span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Object</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token class-name">Object</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
         * a temporary array buffer, used as a snapshot of the state of
         * current Observers.
         */</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arrLocal<span class="token punctuation">;</span>

        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/* We don&#39;t want the Observer doing callbacks into
             * arbitrary code while holding its own Monitor.
             * The code where we extract each Observable from
             * the Vector and store the state of the Observer
             * needs synchronization, but notifying observers
             * does not (should not).  The worst result of any
             * potential race-condition here is that:
             * 1) a newly-added Observer will miss a
             *   notification in progress
             * 2) a recently unregistered Observer will be
             *   wrongly notified when it doesn&#39;t care
             */</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>changed<span class="token punctuation">)</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            arrLocal <span class="token operator">=</span> obs<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">clearChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> arrLocal<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Observer</span><span class="token punctuation">)</span>arrLocal<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Clears the observer list so that this object no longer has any observers.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">deleteObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        obs<span class="token punctuation">.</span><span class="token function">removeAllElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Marks this <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token class-name">Observable</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span> object as having been changed; the
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">hasChanged</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span> method will now return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token boolean">true</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span>.
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">setChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        changed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Indicates that this object has no longer changed, or that it has
     * already notified all of its observers of its most recent change,
     * so that the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">hasChanged</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span> method will now return <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token boolean">false</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span>.
     * This method is called automatically by the
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">notifyObservers</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> methods.
     *
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">#</span><span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">#</span><span class="token function">notifyObservers</span><span class="token punctuation">(</span><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Object</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">clearChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        changed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Tests if this object has changed.
     *
     * <span class="token keyword">@return</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token boolean">true</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> if and only if the <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">setChanged</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
     *          method has been called more recently than the
     *          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">clearChanged</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> method on this object;
     *          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token boolean">false</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> otherwise.
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">#</span><span class="token function">clearChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Observable</span><span class="token punctuation">#</span><span class="token function">setChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">boolean</span> <span class="token function">hasChanged</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> changed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Returns the number of observers of this <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tt</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token class-name">Observable</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tt</span><span class="token punctuation">&gt;</span></span> object.
     *
     * <span class="token keyword">@return</span>  the number of observers of this object.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">int</span> <span class="token function">countObservers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> obs<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br></div></div></li><li><p>\u6A21\u5F0F\u89D2\u8272\u5206\u6790</p><ul><li><code>Observable</code> \u7684\u4F5C\u7528\u548C\u5730\u4F4D\u7B49\u4EF7\u4E8E \u6211\u4EEC\u524D\u9762\u8BB2\u8FC7 <code>Subject</code></li><li><code>Observable</code> \u662F\u7C7B\uFF0C\u4E0D\u662F\u63A5\u53E3\uFF0C\u7C7B\u4E2D\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u6838\u5FC3\u7684\u65B9\u6CD5 \uFF0C\u5373\u7BA1\u7406 <code>Observer</code> \u7684\u65B9\u6CD5 <code>add()</code> \u3001<code>delete()</code> \u3001<code>notify()</code></li><li><code>Observer</code> \u7684\u4F5C\u7528\u548C\u5730\u4F4D\u7B49\u4EF7\u4E8E\u6211\u4EEC\u524D\u9762\u8BB2\u8FC7\u7684 <code>Observer</code> \uFF0C\u6709 <code>update()</code></li><li><code>Observable</code> \u548C <code>Observer</code> \u7684\u4F7F\u7528\u65B9\u6CD5\u548C\u524D\u9762\u8BB2\u8FC7\u7684\u4E00\u6837\uFF0C\u53EA\u662F <code>Observable</code> \u662F\u7C7B\uFF0C\u901A\u8FC7\u7EE7\u627F\u6765\u5B9E\u73B0\u89C2\u5BDF\u8005\u6A21\u5F0F\u3002</li></ul></li></ol>`,31);function e(t,c){return p}var l=n(a,[["render",e],["__file","observer_start.html.vue"]]);export{l as default};
