import{_ as n,f as s}from"./app.06d697e7.js";const e={},a=s(`<h1 id="vue3-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue3-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F" aria-hidden="true">#</a> <code>Vue3</code> \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F</h1><h2 id="_0-\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#_0-\u524D\u8A00" aria-hidden="true">#</a> 0. \u524D\u8A00</h2><p>\u4E0D\u7BA1\u662F <code>Vue2</code> \u8FD8\u662F <code>Vue3</code>,\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F\u5F88\u91CD\u8981\uFF0C\u4E0D\u7BA1\u662F\u9879\u76EE\u8FD8\u662F\u9762\u8BD5\u90FD\u662F\u7ECF\u5E38\u7528\u5230\u7684\u77E5\u8BC6\u70B9\u3002</p><p>\u56DE\u987E\u4E00\u4E0B <code>Vue2</code> \u4E2D\u7EC4\u4EF6\u7684\u901A\u4FE1\u65B9\u5F0F\uFF1A</p><ul><li><p><code>props</code>:\u53EF\u4EE5\u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u3001\u5B50\u7236\u7EC4\u4EF6\u3001\u751A\u81F3\u5144\u5F1F\u7EC4\u4EF6\u901A\u4FE1</p></li><li><p>\u81EA\u5B9A\u4E49\u4E8B\u4EF6:\u53EF\u4EE5\u5B9E\u73B0\u5B50\u7236\u7EC4\u4EF6\u901A\u4FE1</p></li><li><p>\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF <code>$bus</code>:\u53EF\u4EE5\u5B9E\u73B0\u4EFB\u610F\u7EC4\u4EF6\u901A\u4FE1</p></li><li><p><code>pubsub</code>:\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u5B9E\u73B0\u4EFB\u610F\u7EC4\u4EF6\u901A\u4FE1</p></li><li><p><code>vuex</code>:\u96C6\u4E2D\u5F0F\u72B6\u6001\u7BA1\u7406\u5BB9\u5668\uFF0C\u5B9E\u73B0\u4EFB\u610F\u7EC4\u4EF6\u901A\u4FE1</p></li><li><p><code>ref</code>:\u7236\u7EC4\u4EF6\u83B7\u53D6\u5B50\u7EC4\u4EF6\u5B9E\u4F8B <code>VC</code>,\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u4EE5\u53CA\u65B9\u6CD5</p></li><li><p><code>slot</code>:\u63D2\u69FD(\u9ED8\u8BA4\u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD)\u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</p></li></ul><p>\u793A\u4F8B\u4EE3\u7801\u5730\u5740\uFF1Ahttps://github.com/chenyl8848/vue-technology-stack-study</p><h2 id="_1-props" tabindex="-1"><a class="header-anchor" href="#_1-props" aria-hidden="true">#</a> 1. <code>props</code></h2><blockquote><p><code>props</code> \u53EF\u4EE5\u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1,\u5728 <code>Vue3</code> \u4E2D\u53EF\u4EE5\u901A\u8FC7 <code>defineProps</code> \u83B7\u53D6\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E\uFF0C\u4E14\u5728\u7EC4\u4EF6\u5185\u90E8\u4E0D\u9700\u8981\u5F15\u5165 <code>defineProps</code> \u65B9\u6CD5\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002</p></blockquote><p>\u7236\u7EC4\u4EF6\u7ED9\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;h1&gt;props:\u6211\u662F\u7236\u7EC4\u4EF6&lt;/h1&gt;
    &lt;Children :money = &quot;money&quot; :info = &quot;info&quot;&gt;&lt;/Children&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &quot;vue&quot;;
// \u5F15\u5165\u5B50\u7EC4\u4EF6
import Children from &quot;./Children.vue&quot;;
// \u4F7F\u7528 props \u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1
let money = ref(1000);
let info = ref(&#39;\u53D1\u96F6\u82B1\u94B1\u4E86&#39;)

&lt;/script&gt;

&lt;style scoped&gt;
.box {
  width: 1000px;
  height: 500px;
  background-color: pink;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5B50\u7EC4\u4EF6\u83B7\u53D6\u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;props:\u6211\u662F\u5B50\u7EC4\u4EF6&lt;/h2&gt;
    &lt;p&gt;\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u503C:{{ props.money }}&lt;/p&gt;
    &lt;p&gt;\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u503C:{{ props.info }}&lt;/p&gt;
    &lt;!-- \u65E0\u6CD5\u4FEE\u6539 --&gt;
    &lt;!-- Set operation on key &quot;money&quot; failed: target is readonly. --&gt;
    &lt;!-- &lt;button @click=&quot;updateProps&quot;&gt;\u4FEE\u6539 props \u7684\u503C&lt;/button&gt; --&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
// \u9700\u8981\u4F7F\u7528\u5230 defineProps \u65B9\u6CD5\u53BB\u63A5\u53D7\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E
// defineProps\u662F Vue3 \u63D0\u4F9B\u65B9\u6CD5,\u4E0D\u9700\u8981\u5F15\u5165\u76F4\u63A5\u4F7F\u7528
//\u6570\u7EC4|\u5BF9\u8C61\u5199\u6CD5\u90FD\u53EF\u4EE5
// let props = defineProps([&quot;money&quot;, &quot;info&quot;]);
let props = defineProps({
  money: {
    // \u63A5\u6536\u6570\u636E\u7684\u7C7B\u578B
    type: Number,
    default: 0,
  },
  info: {
    type: String,
    required: true,
  },
});

// props \u662F\u53EA\u8BFB\u7684\uFF0C\u4E0D\u80FD\u4FEE\u6539
// let updateProps = () =&gt; {
//   props.money = 3000;
// };
&lt;/script&gt;

&lt;style scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A\u5B50\u7EC4\u4EF6\u83B7\u53D6\u5230 <code>props</code> \u6570\u636E\u5C31\u53EF\u4EE5\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\uFF0C\u4F46\u662F\u5207\u8BB0 <code>props</code> \u662F\u53EA\u8BFB\u7684\uFF08\u53EA\u80FD\u8BFB\u53D6\uFF0C\u4E0D\u80FD\u4FEE\u6539\uFF09\u3002</p></blockquote><h2 id="_2-\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> 2. \u81EA\u5B9A\u4E49\u4E8B\u4EF6</h2><p>\u5728 <code>Vue</code> \u6846\u67B6\u4E2D\u4E8B\u4EF6\u5206\u4E3A\u4E24\u79CD\uFF1A\u4E00\u79CD\u662F\u539F\u751F\u7684 <code>DOM</code> \u4E8B\u4EF6\uFF0C\u53E6\u5916\u4E00\u79CD\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u3002</p><p>\u539F\u751F <code>DOM</code> \u4E8B\u4EF6\u53EF\u4EE5\u8BA9\u7528\u6237\u4E0E\u7F51\u9875\u8FDB\u884C\u4EA4\u4E92\uFF0C\u6BD4\u5982 <code>click</code>\u3001<code>dbclick</code>\u3001<code>change</code>\u3001<code>mouseenter</code>\u3001<code>mouseleave</code>...</p><p>\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5B50\u7EC4\u4EF6\u7ED9\u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u3002</p><h3 id="_2-1-\u539F\u751F-dom-\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-1-\u539F\u751F-dom-\u4E8B\u4EF6" aria-hidden="true">#</a> 2.1 \u539F\u751F <code>DOM</code> \u4E8B\u4EF6</h3><p>\u4EE3\u7801\u5982\u4E0B:</p><div class="language-Html ext-Html line-numbers-mode"><pre class="language-Html"><code>&lt;pre @click=&quot;handler1&quot;&gt;\u5927\u6C5F\u4E1C\u53BB\uFF0C\u6D6A\u6DD8\u5C3D&lt;/pre&gt;
&lt;pre @click=&quot;handler2(1,2,3,$event)&quot;&gt;\u5343\u53E4\u98CE\u6D41\u4EBA\u7269&lt;/pre&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>let handler1 = (event) =&gt; {
    console.log(event)
}

let handler2 = (x, y, z, $event) =&gt; {
    console.log(x, y, z, $event)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7ED9 <code>pre</code> \u6807\u7B7E\u7ED1\u5B9A\u539F\u751F <code>DOM</code> \u4E8B\u4EF6\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u9ED8\u8BA4\u4F1A\u7ED9\u4E8B\u4EF6\u56DE\u8C03\u6CE8\u5165 <code>event</code> \u4E8B\u4EF6\u5BF9\u8C61\u3002\u5F53\u70B9\u51FB\u4E8B\u4EF6\u6CE8\u5165\u591A\u4E2A\u53C2\u6570\u65F6\uFF0C\u6CE8\u5165\u7684\u4E8B\u4EF6\u5BF9\u8C61\u52A1\u53EB <code>$event</code>.</p><p>\u5728 <code>Vue3</code> \u6846\u67B6 <code>click</code>\u3001<code>dbclick</code>\u3001<code>change</code>(\u8FD9\u7C7B\u539F\u751F <code>DOM</code> \u4E8B\u4EF6),\u4E0D\u7BA1\u662F\u5728\u6807\u7B7E\u3001\u81EA\u5B9A\u4E49\u6807\u7B7E\u4E0A(\u7EC4\u4EF6\u6807\u7B7E)\u90FD\u662F\u539F\u751F <code>DOM</code> \u4E8B\u4EF6\u3002</p><p><code>Vue2</code> \u4E2D\u5374\u4E0D\u662F\u8FD9\u6837\u7684,\u5728 <code>Vue2</code> \u4E2D\u7EC4\u4EF6\u6807\u7B7E\u9700\u8981\u901A\u8FC7 <code>native</code> \u4FEE\u9970\u7B26\u624D\u80FD\u53D8\u4E3A\u539F\u751F <code>DOM</code> \u4E8B\u4EF6\u3002</p><h3 id="_2-2-\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> 2.2 \u81EA\u5B9A\u4E49\u4E8B\u4EF6</h3><p>\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u5B50\u7EC4\u4EF6\u7ED9\u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u3002</p><p>\u5728\u7236\u7EC4\u4EF6\u5185\u90E8\u7ED9\u5B50\u7EC4\u4EF6\u7ED1\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A</p><div class="language-Html ext-Html line-numbers-mode"><pre class="language-Html"><code>&lt;Children2 @xxx=&quot;handler4&quot; @click=&quot;handler5&quot;&gt;&lt;/Children2&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728 <code>Children2</code> \u5B50\u7EC4\u4EF6\u5185\u90E8\u89E6\u53D1\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
    &lt;div&gt;
        &lt;h2&gt;\u81EA\u5B9A\u4E49\u4E8B\u4EF6:\u6211\u662F\u5B50\u7EC4\u4EF62&lt;/h2&gt;
        &lt;button @click=&quot;handler&quot;&gt;\u5411\u7236\u7EC4\u4EF6\u4F20\u503C,\u81EA\u5B9A\u4E49\u4E8B\u4EF6xxx&lt;/button&gt;
        &lt;br&gt;
        &lt;br&gt;
        &lt;button @click=&quot;$emit(&#39;click&#39;, &#39;321&#39;, &#39;world hello&#39;)&quot;&gt;\u5411\u7236\u7EC4\u4EF6\u4F20\u503C,\u81EA\u5B9A\u4E49\u4E8B\u4EF6click&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
// \u53EF\u4EE5\u4F7F\u7528 defineEmits \u8FD4\u56DE\u51FD\u6570\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6
// defineEmits \u65B9\u6CD5\u4E0D\u9700\u8981\u5F15\u5165\u76F4\u63A5\u4F7F\u7528

let $emit = defineEmits([&#39;xxx&#39;, &#39;click&#39;]) 

let handler = () =&gt; {
    $emit(&#39;xxx&#39;, 123, &#39;hello world&#39;)
}
&lt;/script&gt;

&lt;style scoped&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><code>defineEmits</code> \u662F <code>Vue3</code> \u63D0\u4F9B\u7684\u65B9\u6CD5\uFF0C\u4E0D\u9700\u8981\u5F15\u5165\u76F4\u63A5\u4F7F\u7528\u3002<code>defineEmits</code> \u65B9\u6CD5\u6267\u884C\uFF0C\u4F20\u9012\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u5143\u7D20\u5373\u4E3A\u5C06\u6765\u7EC4\u4EF6\u9700\u8981\u89E6\u53D1\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u6B64\u65B9\u6267\u884C\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>$emit</code> \u65B9\u6CD5\u7528\u4E8E\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u3002</p><p>\u5F53\u70B9\u51FB\u6309\u94AE\u7684\u65F6\u5019\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u5185\u90E8\u8C03\u7528 <code>$emit</code> \u65B9\u6CD5\u53BB\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u89E6\u53D1\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u7B2C\u4E8C\u4E2A\u3001\u7B2C\u4E09\u4E2A\u3001\u7B2CN\u4E2A\u53C2\u6570\u5373\u4E3A\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u3002</p><p>\u5728\u7236\u7EC4\u4EF6\u4E2D\u63A5\u6536\u5B50\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>let handler4 = (params1, params2) =&gt; {
    console.log(params1, params2)
}

let handler5 = (params1, params2) =&gt; {
    console.log(params1, params2)
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF" tabindex="-1"><a class="header-anchor" href="#_3-\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF" aria-hidden="true">#</a> 3. \u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF</h2><p>\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\u53EF\u4EE5\u5B9E\u73B0\u4EFB\u610F\u7EC4\u4EF6\u901A\u4FE1\uFF0C\u5728 <code>Vue2</code> \u4E2D\u53EF\u4EE5\u6839\u636E <code>VM</code> \u4E0E <code>VC</code> \u5173\u7CFB\u63A8\u51FA\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\u3002</p><p>\u4F46\u662F\u5728 <code>Vue3</code> \u4E2D\u6CA1\u6709 <code>Vue</code> \u6784\u9020\u51FD\u6570\uFF0C\u4E5F\u5C31\u6CA1\u6709 <code>Vue.prototype</code> \u4EE5\u53CA\u7EC4\u5408\u5F0F <code>API</code> \u5199\u6CD5\u6CA1\u6709 <code>this</code>\uFF0C\u5982\u679C\u60F3\u5728 <code>Vue3</code> \u4E2D\u4F7F\u7528\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6 <code>mitt</code> \u5B9E\u73B0\u3002</p><p><code>mitt</code> \u5B98\u7F51\u5730\u5740\uFF1Ahttps://www.npmjs.com/package/mitt</p><h3 id="_3-1-mitt-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_3-1-mitt-\u5B89\u88C5" aria-hidden="true">#</a> 3.1 <code>mitt</code> \u5B89\u88C5</h3><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>pnpm i mitt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-2-mitt-\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_3-2-mitt-\u5B9A\u4E49" aria-hidden="true">#</a> 3.2 <code>mitt</code> \u5B9A\u4E49</h3><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5F15\u5165 mitt mitt \u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u6267\u884C\u4F1A\u8FD4\u56DE bus \u5BF9\u8C61
import mitt from &#39;mitt&#39;;

const $bus = mitt();

export default $bus;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-3-mitt-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-3-mitt-\u4F7F\u7528" aria-hidden="true">#</a> 3.3 <code>mitt</code> \u4F7F\u7528</h3><p><code>mitt</code> \u5B9E\u73B0\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u5B9E\u73B0\u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u8FDB\u884C\u901A\u4FE1\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children2&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF62&lt;/h2&gt;
    &lt;button @click=&quot;handler&quot;&gt;\u7ED9\u5144\u5F1F\u7EC4\u4EF6\u4F20\u9012\u503C&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import $bus from &#39;../../bus&#39;

const handler = () =&gt; {
    $bus.emit(&#39;car&#39;, {car: &#39;\u5170\u535A\u57FA\u5C3C&#39;})
}
&lt;/script&gt;

&lt;style scoped&gt;
.children2 {
  width: 300px;
  height: 150px;
  background-color: yellowgreen;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children1&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF61&lt;/h2&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import $bus from &quot;../../bus&quot;;

// console.log($bus)

// \u4F7F\u7528\u7EC4\u5408\u5F0F API \u51FD\u6570
import { onMounted } from &quot;vue&quot;;

// \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6BD5\u7684\u65F6\u5019\uFF0C\u5F53\u524D\u7EC4\u4EF6\u7ED1\u5B9A\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u63A5\u6536\u5C06\u6765\u5144\u5F1F\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E
onMounted(() =&gt; {
  // \u7B2C\u4E00\u4E2A\u53C2\u6570\u5373\u4E3A\u4E8B\u4EF6\u7C7B\u578B \u7B2C\u4E8C\u4E2A\u53C2\u6570\u5373\u4E3A\u4E8B\u4EF6\u56DE\u8C03
  $bus.on(&quot;car&quot;, (params) =&gt; {
    console.log(&quot;\u63A5\u6536\u5144\u5F1F\u7EC4\u4EF6\u4F20\u503C&quot;, params);
  });
});
&lt;/script&gt;

&lt;style scoped&gt;
.children1 {
  width: 300px;
  height: 150px;
  background-color: yellow;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_4-v-model" tabindex="-1"><a class="header-anchor" href="#_4-v-model" aria-hidden="true">#</a> 4. v-model</h2><p><code>v-model</code> \u6307\u4EE4\u53EF\u662F\u6536\u96C6\u8868\u5355\u6570\u636E(\u6570\u636E\u53CC\u5411\u7ED1\u5B9A)\uFF0C\u9664\u6B64\u4E4B\u5916\u5B83\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u6570\u636E\u540C\u6B65\u3002</p><p><code>v-model</code> \u5B9E\u9645\u65F6\u57FA\u4E8E <code>props[modelValue]</code> \u4E0E\u81EA\u5B9A\u4E49\u4E8B\u4EF6 <code>[update:modelValue]</code> \u5B9E\u73B0\u7684\u3002</p><p>\u7236\u7EC4\u4EF6\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;h1&gt;\u6211\u662F\u7236\u7EC4\u4EF6:v-model&lt;/h1&gt;
    &lt;input v-model=&quot;info&quot; type=&quot;text&quot; /&gt;

    &lt;!-- \u4F7F\u7528 props \u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E --&gt;
    &lt;!-- &lt;Children1 :modelValue=&quot;info&quot; @update:modelValue=&quot;handler&quot;&gt;&lt;/Children1&gt; --&gt;

    &lt;!-- \u4F7F\u7528 v-model \u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E --&gt;
    &lt;!-- 
       \u5728\u7EC4\u4EF6\u4E0A\u4F7F\u7528 v-model
        \u7B2C\u4E00:\u76F8\u5F53\u6709\u7ED9\u5B50\u7EC4\u4EF6\u4F20\u9012 props[modelValue]
        \u7B2C\u4E8C:\u76F8\u5F53\u4E8E\u7ED9\u5B50\u7EC4\u4EF6\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6update:modelValue
     --&gt;

    &lt;div class=&quot;container&quot;&gt;
      &lt;Children1 v-model=&quot;info&quot;&gt;&lt;/Children1&gt;

      &lt;Children2
        v-model:pageNo=&quot;pageNo&quot;
        v-model:pageSize=&quot;pageSize&quot;
      &gt;&lt;/Children2&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
import { ref } from &quot;vue&quot;;
import Children1 from &quot;./Children1.vue&quot;;
import Children2 from &quot;./Children2.vue&quot;;

let info = ref(&quot;&quot;);
const handler = (params) =&gt; {
  info.value = params;
};

let pageNo = ref(0);
let pageSize = ref(10);
&lt;/script&gt;

&lt;style scoped&gt;
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
  display: flex;
  justify-content: space-between;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u5B50\u7EC4\u4EF6 <code>Children1</code>\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children1&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF61&lt;/h2&gt;
    &lt;h2&gt;\u7236\u7EC4\u4EF6info\u4FE1\u606F:{{ props.modelValue }}&lt;/h2&gt;
    &lt;button @click=&quot;handler&quot;&gt;\u540C\u6B65\u66F4\u65B0\u7236\u7EC4\u4EF6info\u4FE1\u606F&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;
// \u4F7F\u7528defineProps \u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u503C
let props = defineProps([&quot;modelValue&quot;]);
console.log(props);

let $emits = defineEmits([&#39;update:modelValue&#39;])

const handler = () =&gt; {
  $emits(&#39;update:modelValue&#39;, &#39;hello world&#39;)
}

&lt;/script&gt;

&lt;style scoped&gt;
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u5B50\u7EC4\u4EF6 <code>Children2</code>\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children2&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF62&lt;/h2&gt;
    &lt;h3&gt;\u540C\u65F6\u7ED1\u5B9A\u591A\u4E2Av-model&lt;/h3&gt;
    &lt;button @click=&quot;handler&quot;&gt;pageNo: {{ pageNo }}&lt;/button&gt;
    &lt;br /&gt;
    &lt;br /&gt;
    &lt;button @click=&quot;$emit(&#39;update:pageSize&#39;, pageSize + 10)&quot;&gt;pageSize: {{ pageSize }}&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot; setup&gt;

let props = defineProps([&#39;pageNo&#39;, &#39;pageSize&#39;])
let $emit = defineEmits([&#39;update:pageNo&#39;, &#39;update:pageSize&#39;])

const handler = () =&gt; {
  $emit(&#39;update:pageNo&#39;, props.pageNo + 1)
}

&lt;/script&gt;

&lt;style scoped&gt;
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><code>&lt;Children1 v-model=&quot;info&quot;&gt;&lt;/Children1&gt;</code> \u76F8\u5F53\u4E8E\u7ED9\u7EC4\u4EF6 <code>Children1</code> \u4F20\u9012\u4E00\u4E2A <code>props(modelValue)</code> \u4E0E\u7ED1\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6 <code>update:modelValue</code> \u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u6570\u636E\u540C\u6B65\u3002</p><p>\u5728 <code>Vue3</code> \u4E2D\u4E00\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u591A\u4E2A <code>v-model</code>,\u8BA9\u7236\u5B50\u7EC4\u4EF6\u591A\u4E2A\u6570\u636E\u540C\u6B65,\u4E0B\u65B9\u4EE3\u7801\u76F8\u5F53\u4E8E\u7ED9\u7EC4\u4EF6 <code>Children2</code> \u4F20\u9012\u4E24\u4E2A <code>props</code> \u5206\u522B\u662F <code>pageNo</code> \u4E0E <code>pageSize</code>\uFF0C\u4EE5\u53CA\u7ED1\u5B9A\u4E24\u4E2A\u81EA\u5B9A\u4E49\u4E8B\u4EF6 <code>update:pageNo</code> \u4E0E <code>update:pageSize</code> \u5B9E\u73B0\u7236\u5B50\u6570\u636E\u540C\u6B65\u3002</p><div class="language-Html ext-Html line-numbers-mode"><pre class="language-Html"><code>&lt;Children2 v-model:pageNo=&quot;pageNo&quot; v-model:pageSize=&quot;pageSize&quot;&gt;&lt;/Children2&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_5-useattrs" tabindex="-1"><a class="header-anchor" href="#_5-useattrs" aria-hidden="true">#</a> 5. useAttrs</h2><p>\u5728 <code>Vue3</code> \u4E2D\u53EF\u4EE5\u5229\u7528 <code>useAttrs</code> \u65B9\u6CD5\u83B7\u53D6\u7EC4\u4EF6\u7684\u5C5E\u6027\u4E0E\u4E8B\u4EF6(\u5305\u542B:\u539F\u751F <code>DOM</code> \u4E8B\u4EF6\u6216\u8005\u81EA\u5B9A\u4E49\u4E8B\u4EF6)\uFF0C\u8BE5\u51FD\u6570\u529F\u80FD\u7C7B\u4F3C\u4E8E <code>Vue2</code> \u6846\u67B6\u4E2D <code>attrs</code> \u5C5E\u6027\u4E0E <code>$listeners</code> \u65B9\u6CD5\u3002</p><p>\u6BD4\u5982\uFF1A\u5728\u7236\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528\u4E00\u4E2A\u5B50\u7EC4\u4EF6 <code>HintButton</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;h1&gt;\u6211\u662F\u7236\u7EC4\u4EF6:attrs&lt;/h1&gt;
    &lt;el-button type=&quot;primary&quot; size=&quot;large&quot; :icon=&quot;Edit&quot;&gt;&lt;/el-button&gt;
    &lt;!-- \u81EA\u5B9A\u4E49\u7EC4\u4EF6 --&gt;
    &lt;!-- \u5B9E\u73B0\u5C06\u5149\u6807\u653E\u5728\u6309\u94AE\u4E0A\uFF0C\u4F1A\u6709\u6587\u5B57\u63D0\u793A --&gt;
    &lt;HintButton type=&quot;primary&quot; size=&quot;large&quot; :icon=&quot;Edit&quot; @click=&quot;handler&quot; @xxx=&quot;handler&quot; :title=&quot;title&quot;&gt;&lt;/HintButton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;
import { Edit } from &quot;@element-plus/icons-vue&quot;;
import { ref } from &quot;vue&quot;;
import HintButton from &quot;./HintButton.vue&quot;;

const handler = () =&gt; {
  alert(12306)
}

let title = ref(&#39;\u7F16\u8F91&#39;)

&lt;/script&gt;
&lt;style scoped&gt;
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u5B50\u7EC4\u4EF6\u5185\u90E8\u53EF\u4EE5\u901A\u8FC7 <code>useAttrs</code> \u65B9\u6CD5\u83B7\u53D6\u7EC4\u4EF6\u5C5E\u6027\u4E0E\u4E8B\u4EF6\u3002\u5B83\u7C7B\u4F3C\u4E8E <code>props</code>,\u53EF\u4EE5\u63A5\u53D7\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u5C5E\u6027\u4E0E\u5C5E\u6027\u503C\u3002\u9700\u8981\u6CE8\u610F\u5982\u679C <code>defineProps</code> \u63A5\u53D7\u4E86\u67D0\u4E00\u4E2A\u5C5E\u6027\uFF0C<code>useAttrs</code> \u65B9\u6CD5\u8FD4\u56DE\u7684\u5BF9\u8C61\u8EAB\u4E0A\u5C31\u6CA1\u6709\u76F8\u5E94\u5C5E\u6027\u4E0E\u5C5E\u6027\u503C\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div :title=&quot;title&quot;&gt;
    &lt;el-button :=&quot;$attrs&quot;&gt;&lt;/el-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;
//\u5F15\u5165useAttrs\u65B9\u6CD5:\u83B7\u53D6\u7EC4\u4EF6\u6807\u7B7E\u8EAB\u4E0A\u5C5E\u6027\u4E0E\u4E8B\u4EF6
import { useAttrs } from &quot;vue&quot;;
//\u6B64\u65B9\u6CD5\u6267\u884C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61
let $attrs = useAttrs();

// \u4E07\u4E00\u7528 props \u63A5\u53D7 title
let props = defineProps([&#39;title&#39;])
// props \u4E0E useAttrs \u65B9\u6CD5\u90FD\u53EF\u4EE5\u83B7\u53D6\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u5C5E\u6027\u4E0E\u5C5E\u6027\u503C
//\u4F46\u662F props \u63A5\u6536\u4E86 useAttrs \u65B9\u6CD5\u5C31\u83B7\u53D6\u4E0D\u5230\u4E86
console.log($attrs)

&lt;/script&gt;
&lt;style scoped&gt;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_6-ref-\u4E0E-parent" tabindex="-1"><a class="header-anchor" href="#_6-ref-\u4E0E-parent" aria-hidden="true">#</a> 6. <code>ref</code> \u4E0E <code>$parent</code></h2><p><code>ref</code> \u53EF\u4EE5\u83B7\u53D6\u5143\u7D20\u7684 <code>DOM</code> \u6216\u8005\u83B7\u53D6\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\u7684 <code>VC</code>\u3002\u65E2\u7136\u53EF\u4EE5\u5728\u7236\u7EC4\u4EF6\u5185\u90E8\u901A\u8FC7 <code>ref</code> \u83B7\u53D6\u5B50\u7EC4\u4EF6\u5B9E\u4F8B <code>VC</code>\uFF0C\u90A3\u4E48\u5B50\u7EC4\u4EF6\u5185\u90E8\u7684\u65B9\u6CD5\u4E0E\u54CD\u5E94\u5F0F\u6570\u636E\u7236\u7EC4\u4EF6\u4E5F\u662F\u53EF\u4EE5\u4F7F\u7528\u7684\u3002</p><p>\u6BD4\u5982:\u5728\u7236\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6BD5\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B</p><p>\u7236\u7EC4\u4EF6\u5185\u90E8\u4EE3\u7801:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;h1&gt;\u6211\u662F\u7236\u7EC4\u4EF6:ref parent&lt;/h1&gt;
    &lt;h2&gt;\u7236\u7EC4\u4EF6\u62E5\u6709\u8D22\u4EA7:{{ money }}&lt;/h2&gt;
    &lt;button @click=&quot;handler&quot;&gt;\u5411\u5B50\u7EC4\u4EF61\u62FF100\u5143&lt;/button&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;Children1 ref=&quot;children1&quot;&gt;&lt;/Children1&gt;
        &lt;Children2 ref=&quot;children2&quot;&gt;&lt;/Children2&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;


&lt;script lang=&#39;ts&#39; setup&gt;
//ref:\u53EF\u4EE5\u83B7\u53D6\u771F\u5B9E\u7684DOM\u8282\u70B9,\u53EF\u4EE5\u83B7\u53D6\u5230\u5B50\u7EC4\u4EF6\u5B9E\u4F8BVC
//$parent:\u53EF\u4EE5\u5728\u5B50\u7EC4\u4EF6\u5185\u90E8\u83B7\u53D6\u5230\u7236\u7EC4\u4EF6\u7684\u5B9E\u4F8B
import Children1 from &#39;./Children1.vue&#39;
import Children2 from &#39;./Children2.vue&#39;

import {ref} from &#39;vue&#39;

let money = ref(10000)

// \u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u5B9E\u4F8B
let children1 = ref()
let children2 = ref()
console.log(children1, children2)

//\u7236\u7EC4\u4EF6\u5185\u90E8\u6309\u94AE\u70B9\u51FB\u56DE\u8C03
const handler = () =&gt; {
    money.value += 100
    children1.value.money -= 100
}

defineExpose({
    money
})

&lt;/script&gt;

&lt;style scoped&gt;

.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
    display: flex;
    justify-content: space-between;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>\u4F46\u662F\u9700\u8981\u6CE8\u610F\uFF0C\u5982\u679C\u60F3\u8BA9\u7236\u7EC4\u4EF6\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u6570\u636E\u6216\u8005\u65B9\u6CD5\u9700\u8981\u901A\u8FC7 <code>defineExpose</code> \u5BF9\u5916\u66B4\u9732\uFF0C\u56E0\u4E3A <code>Vue3</code> \u4E2D\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636E\u5BF9\u5916\u201C\u5173\u95ED\u7684\u201D\uFF0C\u5916\u90E8\u4E0D\u80FD\u8BBF\u95EE\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children1&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF61&lt;/h2&gt;
    &lt;h3&gt;\u5B50\u7EC4\u4EF61\u62E5\u6709\u8D22\u4EA7:{{ money }}&lt;/h3&gt;
  &lt;/div&gt;
&lt;/template&gt;


&lt;script lang=&#39;ts&#39; setup&gt;
import { ref } from &quot;vue&quot;;

let money = ref(9999);

defineExpose({
    money
})
&lt;/script&gt;

&lt;style scoped&gt;
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><code>$parent</code> \u53EF\u4EE5\u83B7\u53D6\u67D0\u4E00\u4E2A\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\u5B9E\u4F8B <code>VC</code>\uFF0C\u56E0\u6B64\u53EF\u4EE5\u4F7F\u7528\u7236\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636E\u4E0E\u65B9\u6CD5\u3002\u5FC5\u987B\u5B50\u7EC4\u4EF6\u5185\u90E8\u62E5\u6709\u4E00\u4E2A\u6309\u94AE\u70B9\u51FB\u65F6\u5019\u83B7\u53D6\u7236\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u5F53\u7136\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u4E0E\u65B9\u6CD5\u9700\u8981\u901A\u8FC7 <code>defineExpose</code> \u65B9\u6CD5\u5BF9\u5916\u66B4\u9732\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children2&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF62&lt;/h2&gt;
    &lt;h3&gt;\u5B50\u7EC4\u4EF62\u62E5\u6709\u8D22\u4EA7:{{ money }}&lt;/h3&gt;
    &lt;button @click=&quot;handler($parent)&quot;&gt;\u5411\u7236\u7EC4\u4EF6\u62FF300\u5143&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;
import {ref} from &#39;vue&#39;

let money = ref(1000)

const handler = ($parent) =&gt; {
  money.value += 300
  console.log($parent)
  $parent.money -= 300
}
&lt;/script&gt;

&lt;style scoped&gt;
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="_7-provide-\u4E0E-inject" tabindex="-1"><a class="header-anchor" href="#_7-provide-\u4E0E-inject" aria-hidden="true">#</a> 7. <code>provide</code> \u4E0E <code>inject</code></h2><p><code>Vue3</code> \u63D0\u4F9B\u4E24\u4E2A\u65B9\u6CD5 <code>provide</code>[\u63D0\u4F9B] \u4E0E <code>inject</code>[\u6CE8\u5165]\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u9694\u8F88\u7EC4\u4EF6\u4F20\u9012\u53C2\u6570\u3002</p><p><code>provide</code> \u65B9\u6CD5\u7528\u4E8E\u63D0\u4F9B\u6570\u636E\uFF0C\u6B64\u65B9\u6CD5\u6267\u9700\u8981\u4F20\u9012\u4E24\u4E2A\u53C2\u6570,\u5206\u522B\u63D0\u4F9B\u6570\u636E\u7684 <code>key</code> \u4E0E\u63D0\u4F9B\u6570\u636E <code>value</code>.</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;h1&gt;\u6211\u662F\u7236\u7EC4\u4EF6:provdide-inject&lt;/h1&gt;
    &lt;h1&gt;\u7236\u7EC4\u4EF6\u62E5\u6709\u6C7D\u8F66:{{ car }}&lt;/h1&gt;
    &lt;Children&gt;&lt;/Children&gt;
  &lt;/div&gt;
&lt;/template&gt;


&lt;script lang=&#39;ts&#39; setup&gt;
import Children from &quot;./Children.vue&quot;;

//vue3 \u63D0\u4F9B provide(\u63D0\u4F9B)\u4E0E inject(\u6CE8\u5165),\u53EF\u4EE5\u5B9E\u73B0\u9694\u8F88\u7EC4\u4EF6\u4F20\u9012\u6570\u636E
import { provide, ref } from &quot;vue&quot;;
let car = ref(&quot;\u4FDD\u65F6\u6377911&quot;);

//\u7956\u5148\u7EC4\u4EF6\u7ED9\u540E\u4EE3\u7EC4\u4EF6\u63D0\u4F9B\u6570\u636E
//\u4E24\u4E2A\u53C2\u6570:\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662F\u63D0\u4F9B\u7684\u6570\u636Ekey
//\u7B2C\u4E8C\u4E2A\u53C2\u6570:\u7956\u5148\u7EC4\u4EF6\u63D0\u4F9B\u6570\u636E
provide(&quot;CAR&quot;, car);


&lt;/script&gt;

&lt;style scoped&gt;
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u5B50\u7EC4\u4EF6\u4EE3\u7801\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF6&lt;/h2&gt;
    &lt;Grandson&gt;&lt;/Grandson&gt;
  &lt;/div&gt;
&lt;/template&gt;


&lt;script lang=&#39;ts&#39; setup&gt;
import Grandson from &#39;./Grandson.vue&#39;;

&lt;/script&gt;

&lt;style scoped&gt;
.children {
  width: 500px;
  height: 250px;
  background: pink;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u5B59\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 <code>inject</code> \u65B9\u6CD5\u83B7\u53D6\u6570\u636E,\u901A\u8FC7 <code>key</code> \u83B7\u53D6\u5B58\u50A8\u7684\u6570\u503C</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;grandson&quot;&gt;
    &lt;h3&gt;\u6211\u662F\u5B59\u5B50\u7EC4\u4EF6&lt;/h3&gt;
    &lt;p&gt;\u7956\u5148\u4F20\u4E0B\u6765\u7684\u6C7D\u8F66:{{ car }}&lt;/p&gt;
    &lt;button @click=&quot;handler&quot;&gt;\u66F4\u6362\u6C7D\u8F66&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;
import { inject } from &quot;vue&quot;;

//\u6CE8\u5165\u7956\u5148\u7EC4\u4EF6\u63D0\u4F9B\u6570\u636E
//\u9700\u8981\u53C2\u6570:\u5373\u4E3A\u7956\u5148\u63D0\u4F9B\u6570\u636E\u7684 key
let car = inject(&#39;CAR&#39;)

// \u4F7F\u7528 provide-inject \u901A\u4FE1\u53EF\u4EE5\u4FEE\u6539\u6570\u636E
const handler = () =&gt; {
  car.value = &#39;\u81EA\u884C\u8F66&#39;
}

&lt;/script&gt;

&lt;style scoped&gt;
.grandson {
  width: 200px;
  height: 200px;
  background: hotpink;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="_8-pinia" tabindex="-1"><a class="header-anchor" href="#_8-pinia" aria-hidden="true">#</a> 8. <code>pinia</code></h2><p><code>pinia</code> \u5B98\u7F51\uFF1Ahttps://pinia.web3doc.top/</p><p><code>pinia</code> \u4E5F\u662F\u96C6\u4E2D\u5F0F\u7BA1\u7406\u72B6\u6001\u5BB9\u5668\uFF0C\u7C7B\u4F3C\u4E8E <code>Vuex</code>.\u4F46\u662F\u6838\u5FC3\u6982\u5FF5\u6CA1\u6709 <code>mutation</code>\u3001<code>modules</code>.</p><h3 id="_8-1-pinia-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_8-1-pinia-\u5B89\u88C5" aria-hidden="true">#</a> 8.1 <code>pinia</code> \u5B89\u88C5</h3><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>pnpm i pinia
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_8-2-pinia-\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_8-2-pinia-\u6CE8\u518C" aria-hidden="true">#</a> 8.2 <code>pinia</code> \u6CE8\u518C</h3><p>\u521B\u5EFA <code>store</code>\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { createPinia } from &#39;pinia&#39;;

let store = createPinia()

export default store;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728 <code>main.ts</code> \u4E2D\u6CE8\u518C\u4F7F\u7528\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { createApp } from &#39;vue&#39;

import store from &#39;./store&#39;

import App from &#39;./App.vue&#39;

const app = createApp(App)

app.use(store)

app.mount(&#39;#app&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_8-3-pinia-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_8-3-pinia-\u4F7F\u7528" aria-hidden="true">#</a> 8.3 <code>pinia</code> \u4F7F\u7528</h3><p>\u9009\u9879\u5F0FAPI\u4F7F\u7528\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { defineStore } from &#39;pinia&#39;

//\u7B2C\u4E00\u4E2A\u53C2\u6570:\u5C0F\u4ED3\u5E93\u540D\u5B57  \u7B2C\u4E8C\u4E2A\u53C2\u6570:\u5C0F\u4ED3\u5E93\u914D\u7F6E\u5BF9\u8C61
//defineStore \u65B9\u6CD5\u6267\u884C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570,\u51FD\u6570\u4F5C\u7528\u5C31\u662F\u8BA9\u7EC4\u4EF6\u53EF\u4EE5\u83B7\u53D6\u5230\u4ED3\u5E93\u6570\u636E
let useInfoStore = defineStore(&quot;info&quot;, {
    // \u6CE8\u610F\u5199\u6CD5\u4E0E vue2 \u4E2D \u7684 vuex \u5199\u6CD5\u4E0D\u540C

    // state \u5B58\u50A8\u6570\u636E
    state: () =&gt; {
        return {
            count: 999,
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    // \u5BF9\u6570\u636E\u8FDB\u884C\u64CD\u4F5C
    actions: {
        //\u6CE8\u610F:\u51FD\u6570\u6CA1\u6709context\u4E0A\u4E0B\u6587\u5BF9\u8C61
        //\u6CA1\u6709commit\u3001\u6CA1\u6709mutations\u53BB\u4FEE\u6539\u6570\u636E
        updateCount(param1: number, param2: number) {
            this.count = param1 + param2
        }
    },
    // \u83B7\u53D6\u6570\u636E
    getters: {
        total() {
            let result:number = this.arr.reduce((prev, next) =&gt; {
                return prev + next
            }, 0)
            return result
        }
    }
})

export default useInfoStore;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children1&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF61&lt;/h2&gt;
    &lt;h3&gt;count:{{ infoStore.count }}&lt;/h3&gt;
    &lt;button @click=&quot;handler&quot;&gt;\u4FEE\u6539infoStore\u4E2D\u7684\u6570\u636E&lt;/button&gt;
    &lt;h3&gt;total:{{ infoStore.total }}&lt;/h3&gt;
  &lt;/div&gt;
&lt;/template&gt;


&lt;script lang=&#39;ts&#39; setup&gt;
import useInfoStore from &quot;../../store/module/info&quot;;

// \u83B7\u53D6\u5C0F\u4ED3\u5E93\u5BF9\u8C61
let infoStore = useInfoStore()

const handler = () =&gt; {
  //\u4ED3\u5E93\u8C03\u7528\u81EA\u8EAB\u7684\u65B9\u6CD5\u53BB\u4FEE\u6539\u4ED3\u5E93\u7684\u6570\u636E
  infoStore.updateCount(99, 100)
}

&lt;/script&gt;

&lt;style scoped&gt;
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u7EC4\u5408\u5F0F <code>API</code> \u4F7F\u7528\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>import { defineStore } from &#39;pinia&#39;
import { computed, ref } from &#39;vue&#39;

let useTodoStore = defineStore(&#39;todo&#39;, () =&gt; {
    let todoList = ref([
        { id: 1, title: &#39;\u5403\u996D&#39;, done: true },
        { id: 2, title: &#39;\u7761\u89C9&#39;, done: false },
        { id: 3, title: &#39;\u6253\u6E38\u620F&#39;, done: true }
    ])

    let arr = ref([1, 2, 3, 4, 5])

    const total:any = computed(() =&gt; {
        return arr.value.reduce((prev, next) =&gt; {
            return prev + next
        }, 0)
    })

    const updateTodo = (params: any) =&gt; {
        todoList.value.unshift(params)
    }

    // \u52A1\u5FC5\u8981\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61:\u5C5E\u6027\u4E0E\u65B9\u6CD5\u53EF\u4EE5\u63D0\u4F9B\u7ED9\u7EC4\u4EF6\u4F7F\u7528
    return {
        todoList,
        total,
        updateTodo
    }
})

export default useTodoStore;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children2&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF62&lt;/h2&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in todoStore.todoList&quot; :key=&quot;item.id&quot;&gt;{{ item.title }}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;button @click=&quot;handler&quot;&gt;\u4FEE\u6539todo&lt;/button&gt;
    &lt;h3&gt;totalCount:{{ todoStore.total }}&lt;/h3&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;
import useTodoStore from &#39;../../store/module/todo&#39;

let todoStore = useTodoStore()

const handler = () =&gt; {
  let params = { id: 4, title: &#39;\u5B66\u4E60&#39;, done: true }
  todoStore.updateTodo(params)
}
&lt;/script&gt;

&lt;style scoped&gt;
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="_9-slot" tabindex="-1"><a class="header-anchor" href="#_9-slot" aria-hidden="true">#</a> 9. <code>slot</code></h2><p>\u63D2\u69FD\uFF1A\u9ED8\u8BA4\u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD\u53EF\u4EE5\u5B9E\u73B0\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1\u3002</p><h3 id="_9-1-\u9ED8\u8BA4\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#_9-1-\u9ED8\u8BA4\u63D2\u69FD" aria-hidden="true">#</a> 9.1 \u9ED8\u8BA4\u63D2\u69FD</h3><p>\u5728\u5B50\u7EC4\u4EF6\u5185\u90E8\u7684\u6A21\u677F\u4E2D\u4E66\u5199 <code>slot</code> \u5168\u5C40\u7EC4\u4EF6\u6807\u7B7E</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children1&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF61&lt;/h2&gt;
    &lt;!-- \u9ED8\u8BA4\u63D2\u69FD--&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;

&lt;/script&gt;

&lt;style scoped&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5728\u7236\u7EC4\u4EF6\u5185\u90E8\u63D0\u4F9B\u7ED3\u6784\uFF0C<code>Children1</code> \u5373\u4E3A\u5B50\u7EC4\u4EF6\uFF0C\u5728\u7236\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u5728\u53CC\u6807\u7B7E\u5185\u90E8\u4E66\u5199\u7ED3\u6784\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;h1&gt;\u6211\u662F\u7236\u7EC4\u4EF6:slot&lt;/h1&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;Children1&gt;
        &lt;span&gt;\u9ED8\u8BA4\u63D2\u69FD&lt;/span&gt;
      &lt;/Children1&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;
import Children1 from &quot;./Children1.vue&quot;;

&lt;/script&gt;

&lt;style scoped&gt;

&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><blockquote><p>\u6CE8\u610F\u5F00\u53D1\u9879\u76EE\u7684\u65F6\u5019\u9ED8\u8BA4\u63D2\u69FD\u4E00\u822C\u53EA\u6709\u4E00\u4E2A\u3002</p></blockquote><h3 id="_9-2-\u5177\u540D\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#_9-2-\u5177\u540D\u63D2\u69FD" aria-hidden="true">#</a> 9.2 \u5177\u540D\u63D2\u69FD</h3><blockquote><p>\u987E\u540D\u601D\u4E49\uFF0C\u6B64\u63D2\u69FD\u5E26\u6709\u540D\u5B57\uFF0C\u5728\u7EC4\u4EF6\u5185\u90E8\u53EF\u4EE5\u6709\u591A\u4E2A\u6307\u5B9A\u540D\u5B57\u7684\u63D2\u69FD\u3002</p></blockquote><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u5185\u90E8\uFF0C\u6A21\u677F\u4E2D\u6709\u4E24\u4E2A\u63D2\u69FD\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children1&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF61&lt;/h2&gt;
    &lt;!-- \u9ED8\u8BA4\u63D2\u69FD--&gt;
    &lt;slot&gt;&lt;/slot&gt;
    &lt;slot name=&quot;a&quot;&gt;&lt;/slot&gt;
    &lt;slot name=&quot;b&quot;&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;

&lt;/script&gt;

&lt;style scoped&gt;
.children1 {
  width: 300px;
  height: 250px;
  background-color: yellow;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u7236\u7EC4\u4EF6\u5185\u90E8\u5411\u6307\u5B9A\u7684\u5177\u540D\u63D2\u69FD\u4F20\u9012\u7ED3\u6784\uFF0C<code>v-slot</code> \u53EF\u4EE5\u66FF\u6362\u4E3A <code>#</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;h1&gt;\u6211\u662F\u7236\u7EC4\u4EF6:slot&lt;/h1&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;Children1&gt;
        &lt;span&gt;\u9ED8\u8BA4\u63D2\u69FD&lt;/span&gt;
      &lt;/Children1&gt;
      &lt;Children1&gt;
        &lt;template v-slot:a&gt;
          &lt;span&gt;\u5177\u540D\u63D2\u69FDa&lt;/span&gt;
        &lt;/template&gt;
      &lt;/Children1&gt;
      &lt;Children1&gt;
        &lt;template #b&gt;
          &lt;span&gt;\u5177\u540D\u63D2\u69FDb&lt;/span&gt;
        &lt;/template&gt;
      &lt;/Children1&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;


&lt;script lang=&#39;ts&#39; setup&gt;
import Children1 from &quot;./Children1.vue&quot;;

&lt;/script&gt;

&lt;style scoped&gt;
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
  display: flex;
  justify-content: space-between;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="_9-3-\u4F5C\u7528\u57DF\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#_9-3-\u4F5C\u7528\u57DF\u63D2\u69FD" aria-hidden="true">#</a> 9.3 \u4F5C\u7528\u57DF\u63D2\u69FD</h3><blockquote><p>\u4F5C\u7528\u57DF\u63D2\u69FD\uFF1A\u5B50\u7EC4\u4EF6\u6570\u636E\u7531\u7236\u7EC4\u4EF6\u63D0\u4F9B\uFF0C\u4F46\u662F\u5B50\u7EC4\u4EF6\u5185\u90E8\u51B3\u5B9A\u4E0D\u4E86\u81EA\u8EAB\u7ED3\u6784\u4E0E\u5916\u89C2(\u6837\u5F0F)</p></blockquote><p>\u5B50\u7EC4\u4EF6 <code>Children2</code> \u4EE3\u7801\u5982\u4E0B:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;children2&quot;&gt;
    &lt;h2&gt;\u6211\u662F\u5B50\u7EC4\u4EF62:\u4F5C\u7528\u57DF\u63D2\u69FD&lt;/h2&gt;
    &lt;ul&gt;
      &lt;li v-for=&quot;(item, index) in todos&quot; :key=&quot;item.id&quot;&gt;
        &lt;!--\u4F5C\u7528\u57DF\u63D2\u69FD:\u53EF\u4EE5\u8BB2\u6570\u636E\u56DE\u4F20\u7ED9\u7236\u7EC4\u4EF6--&gt;
        &lt;slot :$row=&quot;item&quot; :$index=&quot;index&quot;&gt;&lt;/slot&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&#39;ts&#39; setup&gt;
//\u901A\u8FC7props\u63A5\u53D7\u7236\u7EC4\u4EF6\u4F20\u9012\u6570\u636E
defineProps([&quot;todos&quot;]);
&lt;/script&gt;

&lt;style scoped&gt;
.children2 {
  width: 300px;
  height: 250px;
  background-color: yellowgreen;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u7236\u7EC4\u4EF6\u5185\u90E8\u4EE3\u7801\u5982\u4E0B:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>&lt;template&gt;
  &lt;div class=&quot;box&quot;&gt;
    &lt;h1&gt;\u6211\u662F\u7236\u7EC4\u4EF6:slot&lt;/h1&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;Children1&gt;
        &lt;span&gt;\u9ED8\u8BA4\u63D2\u69FD&lt;/span&gt;
      &lt;/Children1&gt;
      &lt;Children1&gt;
        &lt;template v-slot:a&gt;
          &lt;span&gt;\u5177\u540D\u63D2\u69FDa&lt;/span&gt;
        &lt;/template&gt;
      &lt;/Children1&gt;
      &lt;Children1&gt;
        &lt;template #b&gt;
          &lt;span&gt;\u5177\u540D\u63D2\u69FDb&lt;/span&gt;
        &lt;/template&gt;
      &lt;/Children1&gt;
      &lt;Children2 :todos=&quot;todos&quot;&gt;
        &lt;template v-slot=&quot;{ $row, $index }&quot;&gt;
          &lt;p :style=&quot;{ color: $row.done ? &#39;green&#39; : &#39;red&#39; }&quot;&gt;
            {{ $row.title }}
          &lt;/p&gt;
        &lt;/template&gt;
      &lt;/Children2&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;


&lt;script lang=&#39;ts&#39; setup&gt;
import Children1 from &quot;./Children1.vue&quot;;
import Children2 from &quot;./Children2.vue&quot;;

//\u63D2\u69FD:\u9ED8\u8BA4\u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD
//\u4F5C\u7528\u57DF\u63D2\u69FD:\u5C31\u662F\u53EF\u4EE5\u4F20\u9012\u6570\u636E\u7684\u63D2\u69FD,\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u5C06\u6570\u636E\u56DE\u4F20\u7ED9\u7236\u7EC4\u4EF6,\u7236\u7EC4\u4EF6\u53EF\u4EE5\u51B3\u5B9A\u8FD9\u4E9B\u56DE\u4F20\u7684\u6570\u636E\u662F\u4EE5\u4F55\u79CD\u7ED3\u6784\u6216\u8005\u5916\u89C2\u5728\u5B50\u7EC4\u4EF6\u5185\u90E8\u53BB\u5C55\u793A\uFF01\uFF01\uFF01

import { ref } from &quot;vue&quot;;
//todos\u6570\u636E
let todos = ref([
  { id: 1, title: &quot;\u5403\u996D&quot;, done: true },
  { id: 2, title: &quot;\u7761\u89C9&quot;, done: false },
  { id: 3, title: &quot;\u6253\u6E38\u620F&quot;, done: true },
  { id: 4, title: &quot;\u5B66\u4E60&quot;, done: false },
]);
&lt;/script&gt;

&lt;style scoped&gt;
.box {
  width: 1000px;
  height: 500px;
  background: skyblue;
}

.container {
  display: flex;
  justify-content: space-between;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div>`,120);function l(r,p){return a}var i=n(e,[["render",l],["__file","vue3_component_communication.html.vue"]]);export{i as default};
