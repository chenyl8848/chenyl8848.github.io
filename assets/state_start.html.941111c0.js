import{_ as n,f as s}from"./app.06d697e7.js";const a={},p=s(`<h1 id="\u72B6\u6001\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u72B6\u6001\u6A21\u5F0F" aria-hidden="true">#</a> \u72B6\u6001\u6A21\u5F0F</h1><h2 id="_1-1-\u5E94\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5E94\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> 1.1 \u5E94\u7528\u5B9E\u4F8B</h2><h3 id="_1-1-1-\u4E1A\u52A1\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u4E1A\u52A1\u9700\u6C42" aria-hidden="true">#</a> 1.1.1 \u4E1A\u52A1\u9700\u6C42</h3><p>\u8BF7\u7F16\u5199\u7A0B\u5E8F\u5B8C\u6210APP\u62BD\u5956\u6D3B\u52A8\u5177\u4F53\u8981\u6C42\u5982\u4E0B:</p><ol><li><p>\u5047\u5982\u6BCF\u53C2\u52A0\u4E00\u6B21\u8FD9\u4E2A\u6D3B\u52A8\u8981\u6263\u9664\u7528\u6237 50 \u79EF\u5206\uFF0C\u4E2D\u5956\u6982\u7387\u662F 10%</p></li><li><p>\u5956\u54C1\u6570\u91CF\u56FA\u5B9A\uFF0C\u62BD\u5B8C\u5C31\u4E0D\u80FD\u62BD\u5956</p></li><li><p>\u6D3B\u52A8\u6709\u56DB\u4E2A\u72B6\u6001: \u53EF\u4EE5\u62BD\u5956\u3001\u4E0D\u80FD\u62BD\u5956\u3001\u53D1\u653E\u5956\u54C1\u548C\u5956\u54C1\u9886\u5B8C</p></li><li><p>\u6D3B\u52A8\u7684\u56DB\u4E2A\u72B6\u6001\u8F6C\u6362\u5173\u7CFB\u56FE</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/state_start/image-20220729105353884.png?versionId=CAEQMRiBgMDBnJ2BlRgiIGJmYzk1ZDBlODRlMTQyZjNhMDlkNDAzM2NiNGZkMzli" alt="image-20220729105353884" loading="lazy"></p></li></ol><h2 id="_1-2-\u72B6\u6001\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-2-\u72B6\u6001\u6A21\u5F0F" aria-hidden="true">#</a> 1.2 \u72B6\u6001\u6A21\u5F0F</h2><h3 id="_1-2-1-\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> 1.2.1 \u57FA\u672C\u4ECB\u7ECD</h3><ol><li>\u72B6\u6001\u6A21\u5F0F\uFF08State Pattern\uFF09\uFF1A\u4E3B\u8981\u7528\u6765\u89E3\u51B3\u5BF9\u8C61\u5728\u591A\u79CD\u72B6\u6001\u8F6C\u6362\u65F6\uFF0C\u9700\u8981\u5BF9\u5916\u8F93\u51FA\u4E0D\u540C\u7684\u884C\u4E3A\u7684\u95EE\u9898\uFF0C\u72B6\u6001\u548C\u884C\u4E3A\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\uFF0C\u72B6\u6001\u4E4B\u95F4\u53EF\u4EE5\u76F8\u4E92\u8F6C\u6362\u3002</li><li>\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7684\u5185\u5728\u72B6\u6001\u6539\u53D8\u65F6\uFF0C\u5141\u8BB8\u6539\u53D8\u5176\u884C\u4E3A\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u770B\u8D77\u6765\u50CF\u662F\u6539\u53D8\u4E86\u5176\u7C7B\u3002</li></ol><h3 id="_1-2-2-\u539F\u7406\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u539F\u7406\u7C7B\u56FE" aria-hidden="true">#</a> 1.2.2 \u539F\u7406\u7C7B\u56FE</h3><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/rearend/designPattern/state_start/image-20220729151331754.png?versionId=CAEQMRiBgICnnJ2BlRgiIGEwMDVkMDU4Y2UyMTQ1ZTJhMDcwNDU5NmI2ZDQwM2Zh" alt="image-20220729151331754" loading="lazy"></p><p>\u5BF9\u539F\u7406\u7C7B\u56FE\u7684\u8BF4\u660E-\u5373(\u72B6\u6001\u6A21\u5F0F\u7684\u89D2\u8272\u53CA\u804C\u8D23)</p><ol><li>Context \u7C7B\u4E3A\u73AF\u5883\u89D2\u8272\uFF0C\u7528\u4E8E\u7EF4\u62A4 State \u5B9E\u4F8B\uFF0C\u8FD9\u4E2A\u5B9E\u4F8B\u5B9A\u4E49\u5F53\u524D\u72B6\u6001\u3002</li><li>State \u662F\u62BD\u8C61\u72B6\u6001\u89D2\u8272\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\u5C01\u88C5\u4E0E Context \u7684\u4E00\u4E2A\u7279\u70B9\u63A5\u53E3\u76F8\u5173\u884C\u4E3A\u3002</li><li>ConcreteState \u5177\u4F53\u7684\u72B6\u6001\u89D2\u8272\uFF0C\u6BCF\u4E2A\u5B50\u7C7B\u5B9E\u73B0\u4E00\u4E2A\u4E0EContext \u7684\u4E00\u4E2A\u72B6\u6001\u76F8\u5173\u884C\u4E3A\u3002</li></ol><h3 id="_1-2-3-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-2-3-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 1.2.3 \u4EE3\u7801\u5B9E\u73B0</h3><ol><li><p>\u601D\u8DEF\u5206\u6790\u548C\u56FE\u89E3(\u7C7B\u56FE)</p><ul><li>\u5B9A\u4E49\u51FA\u4E00\u4E2A\u63A5\u53E3\u53EB\u72B6\u6001\u63A5\u53E3\uFF0C\u6BCF\u4E2A\u72B6\u6001\u90FD\u5B9E\u73B0\u5B83\u3002</li><li>\u63A5\u53E3\u6709\u6263\u9664\u79EF\u5206\u65B9\u6CD5\u3001\u62BD\u5956\u65B9\u6CD5\u3001\u53D1\u653E\u5956\u54C1\u65B9\u6CD5</li></ul></li><li><p>\u4EE3\u7801\u5B9E\u73B0</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6263\u9664\u79EF\u5206
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u662F\u5426\u4E2D\u5956
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53D1\u653E\u5956\u54C1
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dispensePrize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LotteryActivity</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u72B6\u6001
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">State</span> state<span class="token punctuation">;</span>

    <span class="token comment">// \u4E0D\u80FD\u62BD\u5956\u72B6\u6001</span>
    <span class="token class-name">ReadyState</span> readyState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadyState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53EF\u4EE5\u62BD\u5956\u72B6\u6001</span>
    <span class="token class-name">LotteryState</span> lotteryState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LotteryState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53D1\u653E\u5956\u54C1\u72B6\u6001</span>
    <span class="token class-name">DispenseState</span> dispenseState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DispenseState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5956\u54C1\u9886\u5B8C\u72B6\u6001</span>
    <span class="token class-name">FinishState</span> finishState <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FinishState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5546\u54C1\u6570\u91CF
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6784\u9020\u5668
     * 1.\u521D\u59CB\u5316\u5F53\u524D\u72B6\u6001\u4E3A \u51C6\u5907\u62BD\u5956
     * 2.\u4F20\u5165\u5956\u54C1\u6570\u91CF
     * <span class="token keyword">@param</span> <span class="token parameter">count</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">LotteryActivity</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadyState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6263\u9664\u79EF\u5206
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">deductPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u62BD\u5956
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lottery</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span><span class="token function">isDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4E2D\u5956\u5C31\u53D1\u653E\u5956\u54C1</span>
            state<span class="token punctuation">.</span><span class="token function">dispensePrize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">State</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6BCF\u9886\u53D6\u4E00\u6B21\u5956\u54C1\uFF0Ccount--
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ReadyState</span> <span class="token function">getReadyState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> readyState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setReadyState</span><span class="token punctuation">(</span><span class="token class-name">ReadyState</span> readyState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">=</span> readyState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">LotteryState</span> <span class="token function">getLotteryState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> lotteryState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setLotteryState</span><span class="token punctuation">(</span><span class="token class-name">LotteryState</span> lotteryState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lotteryState <span class="token operator">=</span> lotteryState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">DispenseState</span> <span class="token function">getDispenseState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> dispenseState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDispenseState</span><span class="token punctuation">(</span><span class="token class-name">DispenseState</span> dispenseState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dispenseState <span class="token operator">=</span> dispenseState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">FinishState</span> <span class="token function">getFinishState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> finishState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFinishState</span><span class="token punctuation">(</span><span class="token class-name">FinishState</span> finishState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>finishState <span class="token operator">=</span> finishState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReadyState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">LotteryActivity</span> lotteryActivity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ReadyState</span><span class="token punctuation">(</span><span class="token class-name">LotteryActivity</span> lotteryActivity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lotteryActivity <span class="token operator">=</span> lotteryActivity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6263\u9664 50 \u79EF\u5206\uFF0C\u53EF\u4EE5\u5F00\u59CB\u62BD\u5956... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        lotteryActivity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>lotteryActivity<span class="token punctuation">.</span><span class="token function">getLotteryState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD8\u672A\u62BD\u5956... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dispensePrize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u80FD\u53D1\u653E\u5956\u54C1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LotteryState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">LotteryActivity</span> lotteryActivity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LotteryState</span><span class="token punctuation">(</span><span class="token class-name">LotteryActivity</span> lotteryActivity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lotteryActivity <span class="token operator">=</span> lotteryActivity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5DF2\u7ECF\u6263\u9664\u79EF\u5206\uFF0C\u5F00\u59CB\u62BD\u5956... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6B63\u5728\u62BD\u5956\uFF0C\u8BF7\u7A0D\u7B49... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> num <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            lotteryActivity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>lotteryActivity<span class="token punctuation">.</span><span class="token function">getDispenseState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F88\u9057\u61BE\u6CA1\u6709\u62BD\u4E2D\u5956\u54C1... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            lotteryActivity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>lotteryActivity<span class="token punctuation">.</span><span class="token function">getReadyState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dispensePrize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u80FD\u53D1\u653E\u5956\u54C1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DispenseState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">LotteryActivity</span> lotteryActivity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DispenseState</span><span class="token punctuation">(</span><span class="token class-name">LotteryActivity</span> lotteryActivity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lotteryActivity <span class="token operator">=</span> lotteryActivity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6263\u9664 50 \u79EF\u5206\uFF0C\u53EF\u4EE5\u5F00\u59CB\u62BD\u5956... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5DF2\u62BD\u5956... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dispensePrize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lotteryActivity<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD8\u6709\u5956\u54C1\uFF0C\u606D\u559C\u4E2D\u5956... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            lotteryActivity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>lotteryActivity<span class="token punctuation">.</span><span class="token function">getReadyState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u53D1\u653E\u5956\u54C1\u540E\uFF0C\u5956\u54C1\u6570\u6263\u51CF</span>
            lotteryActivity<span class="token punctuation">.</span><span class="token function">setCount</span><span class="token punctuation">(</span>lotteryActivity<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F88\u9057\u61BE\uFF0C\u6CA1\u6709\u5956\u54C1\u4E86... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            lotteryActivity<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>lotteryActivity<span class="token punctuation">.</span><span class="token function">getFinishState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinishState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">LotteryActivity</span> lotteryActivity<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">FinishState</span><span class="token punctuation">(</span><span class="token class-name">LotteryActivity</span> lotteryActivity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lotteryActivity <span class="token operator">=</span> lotteryActivity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deductPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u62BD\u5956\u6D3B\u52A8\u7ED3\u675F\uFF0C\u8BF7\u4E0B\u6B21\u518D\u53C2\u52A0... &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isDraw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dispensePrize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">LotteryActivity</span> lotteryActivity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LotteryActivity</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----- \u7B2C&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\u6B21\u62BD\u5956 -----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u53C2\u52A0\u62BD\u5956</span>
            lotteryActivity<span class="token punctuation">.</span><span class="token function">deductPoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// \u62BD\u5956</span>
            lotteryActivity<span class="token punctuation">.</span><span class="token function">lottery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//  \u8F93\u51FA</span>
        <span class="token comment">//----- \u7B2C1\u6B21\u62BD\u5956 -----</span>
        <span class="token comment">// \u6263\u9664 50 \u79EF\u5206\uFF0C\u53EF\u4EE5\u5F00\u59CB\u62BD\u5956...</span>
        <span class="token comment">// \u6B63\u5728\u62BD\u5956\uFF0C\u8BF7\u7A0D\u7B49...</span>
        <span class="token comment">// \u8FD8\u6709\u5956\u54C1\uFF0C\u606D\u559C\u4E2D\u5956...</span>
        <span class="token comment">// ----- \u7B2C2\u6B21\u62BD\u5956 -----</span>
        <span class="token comment">// \u6263\u9664 50 \u79EF\u5206\uFF0C\u53EF\u4EE5\u5F00\u59CB\u62BD\u5956...</span>
        <span class="token comment">// \u6B63\u5728\u62BD\u5956\uFF0C\u8BF7\u7A0D\u7B49...</span>
        <span class="token comment">// \u5F88\u9057\u61BE\uFF0C\u6CA1\u6709\u5956\u54C1\u4E86...</span>
        <span class="token comment">//----- \u7B2C3\u6B21\u62BD\u5956 -----</span>
        <span class="token comment">// \u62BD\u5956\u6D3B\u52A8\u7ED3\u675F\uFF0C\u8BF7\u4E0B\u6B21\u518D\u53C2\u52A0...</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></li></ol><h2 id="_1-3-\u72B6\u6001\u6A21\u5F0F\u5728\u5B9E\u9645\u9879\u76EE-\u501F\u8D37\u5E73\u53F0-\u6E90\u7801\u5256\u6790" tabindex="-1"><a class="header-anchor" href="#_1-3-\u72B6\u6001\u6A21\u5F0F\u5728\u5B9E\u9645\u9879\u76EE-\u501F\u8D37\u5E73\u53F0-\u6E90\u7801\u5256\u6790" aria-hidden="true">#</a> 1.3 \u72B6\u6001\u6A21\u5F0F\u5728\u5B9E\u9645\u9879\u76EE-\u501F\u8D37\u5E73\u53F0 \u6E90\u7801\u5256\u6790</h2><ol><li><p>\u501F\u8D37\u5E73\u53F0\u7684\u8BA2\u5355\uFF0C\u6709\u5BA1\u6838-\u53D1\u5E03-\u62A2\u5355 \u7B49\u7B49 \u6B65\u9AA4\uFF0C\u968F\u7740\u64CD\u4F5C\u7684\u4E0D\u540C\uFF0C\u4F1A\u6539\u53D8\u8BA2\u5355\u7684\u72B6\u6001, \u9879\u76EE\u4E2D\u7684\u8FD9\u4E2A\u6A21\u5757\u5B9E\u73B0\u5C31\u4F1A\u4F7F\u7528\u5230\u72B6\u6001\u6A21\u5F0F</p></li><li><p>\u901A\u5E38\u901A\u8FC7if/else\u5224\u65AD\u8BA2\u5355\u7684\u72B6\u6001\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E0D\u540C\u7684\u903B\u8F91\uFF0C\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>\u5BA1\u6838<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5BA1\u6838\u903B\u8F91</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>\u53D1\u5E03<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53D1\u5E03\u903B\u8F91</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>\u63A5\u5355<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u63A5\u5355\u903B\u8F91</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>\u4F7F\u7528\u72B6\u6001\u6A21\u5F0F\u5B8C\u6210 \u501F\u8D37\u5E73\u53F0\u9879\u76EE\u7684\u5BA1\u6838\u6A21\u5757 [\u8BBE\u8BA1+\u4EE3\u7801]</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u7535\u5BA1
     */</span>
    <span class="token keyword">void</span> <span class="token function">checkEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7535\u5BA1\u5931\u8D25
     */</span>
    <span class="token keyword">void</span> <span class="token function">checkFailEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5B9A\u4EF7\u53D1\u5E03
     */</span>
    <span class="token keyword">void</span> <span class="token function">makePriceEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u63A5\u5355
     */</span>
    <span class="token keyword">void</span> <span class="token function">acceptOrderEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u65E0\u4EBA\u63A5\u5355\u5931\u6548
     */</span>
    <span class="token keyword">void</span> <span class="token function">notPeopleAcceptEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4ED8\u6B3E
     */</span>
    <span class="token keyword">void</span> <span class="token function">payOrderEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u63A5\u5355\u6709\u4EBA\u652F\u4ED8\u5931\u6548
     */</span>
    <span class="token keyword">void</span> <span class="token function">orderFailureEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u53CD\u9988
     */</span>
    <span class="token keyword">void</span> <span class="token function">feedBackEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractState</span> <span class="token keyword">implements</span> <span class="token class-name">State</span><span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">RuntimeException</span> EXCEPTION <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;\u64CD\u4F5C\u6D41\u7A0B\u4E0D\u5141\u8BB8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u62BD\u8C61\u7C7B\uFF0C\u9ED8\u8BA4\u5B9E\u73B0\u4E86 State \u63A5\u53E3\u7684\u6240\u6709\u65B9\u6CD5</span>
    <span class="token comment">//\u8BE5\u7C7B\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u5176\u5B50\u7C7B(\u5177\u4F53\u7684\u72B6\u6001\u7C7B)\uFF0C\u53EF\u4EE5\u6709\u9009\u62E9\u7684\u8FDB\u884C\u91CD\u5199</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> EXCEPTION<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkFailEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> EXCEPTION<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makePriceEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> EXCEPTION<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">acceptOrderEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> EXCEPTION<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notPeopleAcceptEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> EXCEPTION<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payOrderEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> EXCEPTION<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">orderFailureEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> EXCEPTION<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">feedBackEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> EXCEPTION<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractState</span> <span class="token punctuation">{</span>

    <span class="token comment">//\u5F53\u524D\u7684\u72B6\u6001 state, \u6839\u636E\u6211\u4EEC\u7684\u4E1A\u52A1\u6D41\u7A0B\u5904\u7406\uFF0C\u4E0D\u505C\u7684\u53D8\u5316</span>
    <span class="token keyword">private</span> <span class="token class-name">State</span> state<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">checkEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkFailEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">checkFailEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makePriceEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">makePriceEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">acceptOrderEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">acceptOrderEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notPeopleAcceptEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">notPeopleAcceptEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payOrderEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">payOrderEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">orderFailureEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">orderFailureEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">feedBackEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span><span class="token function">feedBackEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">State</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token class-name">State</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> state<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u72B6\u6001 : &quot;</span> <span class="token operator">+</span> state<span class="token punctuation">.</span><span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">StateEnum</span> <span class="token punctuation">{</span>

    <span class="token comment">//\u8BA2\u5355\u751F\u6210</span>
    <span class="token function">GENERATE</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;GENERATE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//\u5DF2\u5BA1\u6838</span>
    <span class="token function">REVIEWED</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;REVIEWED&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//\u5DF2\u53D1\u5E03</span>
    <span class="token function">PUBLISHED</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;PUBLISHED&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//\u5F85\u4ED8\u6B3E</span>
    <span class="token function">NOT_PAY</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;NOT_PAY&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//\u5DF2\u4ED8\u6B3E</span>
    <span class="token function">PAID</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;PAID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//\u5DF2\u5B8C\u7ED3</span>
    <span class="token function">FEED_BACKED</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&quot;FEED_BACKED&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> key<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> value<span class="token punctuation">;</span>

    <span class="token class-name">StateEnum</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">,</span> <span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AllState</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u5404\u79CD\u5177\u4F53\u72B6\u6001\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">FeedBackState</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StateEnum</span><span class="token punctuation">.</span>FEED_BACKED<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">GenerateState</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ReviewState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">checkFailEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FeedBackState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StateEnum</span><span class="token punctuation">.</span>GENERATE<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NotPayState</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payOrderEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaidState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">feedBackEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FeedBackState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StateEnum</span><span class="token punctuation">.</span>NOT_PAY<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PaidState</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">feedBackEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FeedBackState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StateEnum</span><span class="token punctuation">.</span>PAID<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PublishState</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">acceptOrderEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u628A\u5F53\u524D\u72B6\u6001\u8BBE\u7F6E\u4E3A  NotPayState\u3002\u3002\u3002</span>
        <span class="token comment">//\u81F3\u4E8E\u5E94\u8BE5\u53D8\u6210\u54EA\u4E2A\u72B6\u6001\uFF0C\u6709\u6D41\u7A0B\u56FE\u6765\u51B3\u5B9A</span>
        context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">NotPayState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">notPeopleAcceptEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FeedBackState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StateEnum</span><span class="token punctuation">.</span>PUBLISHED<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ReviewState</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractState</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makePriceEvent</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PublishState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCurrentState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StateEnum</span><span class="token punctuation">.</span>REVIEWED<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div></li></ol><h2 id="_1-4-\u72B6\u6001\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879\u548C\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#_1-4-\u72B6\u6001\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879\u548C\u7EC6\u8282" aria-hidden="true">#</a> 1.4 \u72B6\u6001\u6A21\u5F0F\u7684\u6CE8\u610F\u4E8B\u9879\u548C\u7EC6\u8282</h2><ol><li>\u4EE3\u7801\u6709\u5F88\u5F3A\u7684\u53EF\u8BFB\u6027\uFF0C\u72B6\u6001\u6A21\u5F0F\u5C06\u6BCF\u4E2A\u72B6\u6001\u7684\u884C\u4E3A\u5C01\u88C5\u5230\u5BF9\u5E94\u7684\u4E00\u4E2A\u7C7B\u4E2D\u3002</li><li>\u65B9\u4FBF\u7EF4\u62A4\uFF0C\u5C06\u5BB9\u6613\u4EA7\u751F\u95EE\u9898\u7684 if-else \u8BED\u53E5\u5220\u9664\u4E86\uFF0C\u5982\u679C\u628A\u6BCF\u4E2A\u72B6\u6001\u7684\u884C\u4E3A\u90FD\u653E\u5230\u4E00\u4E2A\u7C7B\u4E2D\uFF0C\u6BCF\u6B21\u8C03\u7528\u65B9\u6CD5\u65F6\u90FD\u8981\u5224\u65AD\u5F53\u524D\u662F\u4EC0\u4E48\u72B6\u6001\uFF0C\u4E0D\u4F46\u4F1A\u4EA7\u51FA\u5F88\u591A if-else\u8BED\u53E5\uFF0C\u800C\u4E14\u5BB9\u6613\u51FA\u9519\u3002</li><li>\u7B26\u5408\u201C\u5F00\u95ED\u539F\u5219\u201D\uFF0C\u5BB9\u6613\u589E\u5220\u72B6\u6001\u3002</li><li>\u4F1A\u4EA7\u751F\u5F88\u591A\u7C7B\uFF0C\u6BCF\u4E2A\u72B6\u6001\u90FD\u8981\u4E00\u4E2A\u5BF9\u5E94\u7684\u7C7B\uFF0C\u5F53\u72B6\u6001\u8FC7\u591A\u65F6\u4F1A\u4EA7\u751F\u5F88\u591A\u7C7B\uFF0C\u52A0\u5927\u7EF4\u62A4\u96BE\u5EA6\u3002</li><li>\u5E94\u7528\u573A\u666F\uFF1A\u5F53\u4E00\u4E2A\u4E8B\u4EF6\u6216\u8005\u5BF9\u8C61\u6709\u5F88\u591A\u79CD\u72B6\u6001\uFF0C\u72B6\u6001\u4E4B\u95F4\u4F1A\u76F8\u4E92\u8F6C\u6362\uFF0C\u5BF9\u4E0D\u540C\u7684\u72B6\u6001\u8981\u6C42\u6709\u4E0D\u540C\u7684\u884C\u4E3A\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u72B6\u6001\u6A21\u5F0F\u3002</li></ol>`,18);function t(e,c){return p}var l=n(a,[["render",t],["__file","state_start.html.vue"]]);export{l as default};
