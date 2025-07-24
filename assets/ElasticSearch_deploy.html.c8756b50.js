import{_ as n,f as s}from"./app.06d697e7.js";const a={},e=s(`<h1 id="elasticsearch\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#elasticsearch\u90E8\u7F72" aria-hidden="true">#</a> ElasticSearch\u90E8\u7F72</h1><h2 id="_1-\u76F8\u5173\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u76F8\u5173\u6982\u5FF5" aria-hidden="true">#</a> 1. \u76F8\u5173\u6982\u5FF5</h2><h3 id="_1-1-\u5355\u673A-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5355\u673A-\u96C6\u7FA4" aria-hidden="true">#</a> 1.1 \u5355\u673A &amp; \u96C6\u7FA4</h3><p>\u5355\u53F0Elasticsearch\u670D\u52A1\u5668\u63D0\u4F9B\u670D\u52A1\uFF0C\u5F80\u5F80\u90FD\u6709\u6700\u5927\u7684\u8D1F\u8F7D\u80FD\u529B\uFF0C\u8D85\u8FC7\u8FD9\u4E2A\u9608\u503C\uFF0C\u670D\u52A1\u5668\u6027\u80FD\u5C31\u4F1A\u5927\u5927\u964D\u4F4E\u751A\u81F3\u4E0D\u53EF\u7528\uFF0C\u6240\u4EE5\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u4E00\u822C\u90FD\u662F\u8FD0\u884C\u5728\u6307\u5B9A\u670D\u52A1\u5668\u96C6\u7FA4\u4E2D\u3002</p><p>\u9664\u4E86\u8D1F\u8F7D\u80FD\u529B\uFF0C\u5355\u70B9\u670D\u52A1\u5668\u4E5F\u5B58\u5728\u5176\u4ED6\u95EE\u9898\uFF1A</p><ul><li><p>\u5355\u53F0\u673A\u5668\u5B58\u50A8\u5BB9\u91CF\u6709\u9650</p></li><li><p>\u5355\u670D\u52A1\u5668\u5BB9\u6613\u51FA\u73B0\u5355\u70B9\u6545\u969C\uFF0C\u65E0\u6CD5\u5B9E\u73B0\u9AD8\u53EF\u7528</p></li><li><p>\u5355\u670D\u52A1\u7684\u5E76\u53D1\u5904\u7406\u80FD\u529B\u6709\u9650</p></li></ul><p>\u914D\u7F6E\u670D\u52A1\u5668\u96C6\u7FA4\u65F6\uFF0C\u96C6\u7FA4\u4E2D\u8282\u70B9\u6570\u91CF\u6CA1\u6709\u9650\u5236\uFF0C\u5927\u4E8E\u7B49\u4E8E2\u4E2A\u8282\u70B9\u5C31\u53EF\u4EE5\u770B\u505A\u662F\u96C6\u7FA4\u4E86\u3002\u4E00\u822C\u51FA\u4E8E\u9AD8\u6027\u80FD\u53CA\u9AD8\u53EF\u7528\u65B9\u9762\u6765\u8003\u8651\u96C6\u7FA4\u4E2D\u8282\u70B9\u6570\u91CF\u90FD\u662F3\u4E2A\u4EE5\u4E0A\u3002</p><h3 id="_1-2-\u96C6\u7FA4cluster" tabindex="-1"><a class="header-anchor" href="#_1-2-\u96C6\u7FA4cluster" aria-hidden="true">#</a> 1.2 \u96C6\u7FA4Cluster</h3><p>\u4E00\u4E2A\u96C6\u7FA4\u5C31\u662F\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u670D\u52A1\u5668\u8282\u70B9\u7EC4\u7EC7\u5728\u4E00\u8D77\uFF0C\u5171\u540C\u6301\u6709\u6574\u4E2A\u7684\u6570\u636E\uFF0C\u5E76\u4E00\u8D77\u63D0\u4F9B\u7D22\u5F15\u548C\u641C\u7D22\u529F\u80FD\u3002\u4E00\u4E2AElasticsearch\u96C6\u7FA4\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u540D\u5B57\u6807\u8BC6\uFF0C\u8FD9\u4E2A\u540D\u5B57\u9ED8\u8BA4\u5C31\u662F\u201Delasticsearch\u201D\u3002\u8FD9\u4E2A\u540D\u5B57\u662F\u91CD\u8981\u7684\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u8282\u70B9\u53EA\u80FD\u901A\u8FC7\u6307\u5B9A\u67D0\u4E2A\u96C6\u7FA4\u7684\u540D\u5B57\uFF0C\u6765\u52A0\u5165\u8FD9\u4E2A\u96C6\u7FA4\u3002</p><h3 id="_1-3-\u8282\u70B9node" tabindex="-1"><a class="header-anchor" href="#_1-3-\u8282\u70B9node" aria-hidden="true">#</a> 1.3 \u8282\u70B9Node</h3><p>\u96C6\u7FA4\u4E2D\u5305\u542B\u5F88\u591A\u670D\u52A1\u5668\uFF0C\u4E00\u4E2A\u8282\u70B9\u5C31\u662F\u5176\u4E2D\u7684\u4E00\u4E2A\u670D\u52A1\u5668\u3002\u4F5C\u4E3A\u96C6\u7FA4\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u5B58\u50A8\u6570\u636E\uFF0C\u53C2\u4E0E\u96C6\u7FA4\u7684\u7D22\u5F15\u548C\u641C\u7D22\u529F\u80FD\u3002</p><p>\u4E00\u4E2A\u8282\u70B9\u4E5F\u662F\u7531\u4E00\u4E2A\u540D\u5B57\u6765\u6807\u8BC6\u7684\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u540D\u5B57\u662F\u4E00\u4E2A\u968F\u673A\u7684\u6F2B\u5A01\u6F2B\u753B\u89D2\u8272\u7684\u540D\u5B57\uFF0C\u8FD9\u4E2A\u540D\u5B57\u4F1A\u5728\u542F\u52A8\u7684\u65F6\u5019\u8D4B\u4E88\u8282\u70B9\u3002\u8FD9\u4E2A\u540D\u5B57\u5BF9\u4E8E\u7BA1\u7406\u5DE5\u4F5C\u6765\u8BF4\u633A\u91CD\u8981\u7684\uFF0C\u56E0\u4E3A\u5728\u8FD9\u4E2A\u7BA1\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u4F60\u4F1A\u53BB\u786E\u5B9A\u7F51\u7EDC\u4E2D\u7684\u54EA\u4E9B\u670D\u52A1\u5668\u5BF9\u5E94\u4E8EElasticsearch\u96C6\u7FA4\u4E2D\u7684\u54EA\u4E9B\u8282\u70B9\u3002</p><p>\u4E00\u4E2A\u8282\u70B9\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u96C6\u7FA4\u540D\u79F0\u7684\u65B9\u5F0F\u6765\u52A0\u5165\u4E00\u4E2A\u6307\u5B9A\u7684\u96C6\u7FA4\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u4F1A\u88AB\u5B89\u6392\u52A0\u5165\u5230\u4E00\u4E2A\u53EB\u505A\u201Celasticsearch\u201D\u7684\u96C6\u7FA4\u4E2D\uFF0C\u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u4F60\u5728\u4F60\u7684\u7F51\u7EDC\u4E2D\u542F\u52A8\u4E86\u82E5\u5E72\u4E2A\u8282\u70B9\uFF0C\u5E76\u5047\u5B9A\u5B83\u4EEC\u80FD\u591F\u76F8\u4E92\u53D1\u73B0\u5F7C\u6B64\uFF0C\u5B83\u4EEC\u5C06\u4F1A\u81EA\u52A8\u5730\u5F62\u6210\u5E76\u52A0\u5165\u5230\u4E00\u4E2A\u53EB\u505A\u201Celasticsearch\u201D\u7684\u96C6\u7FA4\u4E2D\u3002</p><p>\u5728\u4E00\u4E2A\u96C6\u7FA4\u91CC\uFF0C\u53EA\u8981\u4F60\u60F3\uFF0C\u53EF\u4EE5\u62E5\u6709\u4EFB\u610F\u591A\u4E2A\u8282\u70B9\u3002\u800C\u4E14\uFF0C\u5982\u679C\u5F53\u524D\u4F60\u7684\u7F51\u7EDC\u4E2D\u6CA1\u6709\u8FD0\u884C\u4EFB\u4F55Elasticsearch\u8282\u70B9\uFF0C\u8FD9\u65F6\u542F\u52A8\u4E00\u4E2A\u8282\u70B9\uFF0C\u4F1A\u9ED8\u8BA4\u521B\u5EFA\u5E76\u52A0\u5165\u4E00\u4E2A\u53EB\u505A\u201Celasticsearch\u201D\u7684\u96C6\u7FA4\u3002</p><h2 id="_2-windows\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_2-windows\u96C6\u7FA4" aria-hidden="true">#</a> 2. Windows\u96C6\u7FA4</h2><h3 id="_2-1-\u90E8\u7F72\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_2-1-\u90E8\u7F72\u96C6\u7FA4" aria-hidden="true">#</a> 2.1 \u90E8\u7F72\u96C6\u7FA4</h3><ol><li>\u521B\u5EFAelasticsearch-cluster\u6587\u4EF6\u5939\uFF0C\u5728\u5185\u90E8\u590D\u5236\u4E09\u4E2Aelasticsearch\u670D\u52A1</li></ol><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72471.png?versionId=CAEQKRiBgIDF2rCKhhgiIDQyZTc0N2Q1YTM3ZTQ5Y2Q5ZTFkZmI4ZDYzOWE1MDYx" alt="img" loading="lazy"></p><ol start="2"><li><p>\u4FEE\u6539\u96C6\u7FA4\u6587\u4EF6\u76EE\u5F55\u4E2D\u6BCF\u4E2A\u8282\u70B9\u7684 config/elasticsearch.yml\u914D\u7F6E\u6587\u4EF6</p><ul><li><p>node-1001\u8282\u70B9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8282\u70B91\u7684\u914D\u7F6E\u4FE1\u606F\uFF1A</span>

<span class="token comment">#\u96C6\u7FA4\u540D\u79F0\uFF0C\u8282\u70B9\u4E4B\u95F4\u8981\u4FDD\u6301\u4E00\u81F4</span>

cluster.name: my-elasticsearch

<span class="token comment">#\u8282\u70B9\u540D\u79F0\uFF0C\u96C6\u7FA4\u5185\u8981\u552F\u4E00</span>

node.name: node-1001

node.master: <span class="token boolean">true</span>

node.data: <span class="token boolean">true</span>



<span class="token comment">#ip\u5730\u5740</span>

network.host: localhost

<span class="token comment">#http\u7AEF\u53E3</span>

http.port: <span class="token number">1001</span>

<span class="token comment">#tcp\u76D1\u542C\u7AEF\u53E3</span>

transport.tcp.port: <span class="token number">9301</span>



<span class="token comment">#discovery.seed_hosts: [&quot;localhost:9301&quot;, &quot;localhost:9302&quot;,&quot;localhost:9303&quot;]</span>

<span class="token comment">#discovery.zen.fd.ping_timeout: 1m</span>

<span class="token comment">#discovery.zen.fd.ping_retries: 5</span>



<span class="token comment">#\u96C6\u7FA4\u5185\u7684\u53EF\u4EE5\u88AB\u9009\u4E3A\u4E3B\u8282\u70B9\u7684\u8282\u70B9\u5217\u8868</span>

<span class="token comment">#cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;,&quot;node-3&quot;]</span>



<span class="token comment">#\u8DE8\u57DF\u914D\u7F6E</span>

<span class="token comment">#action.destructive_requires_name: true</span>

http.cors.enabled: <span class="token boolean">true</span>

http.cors.allow-origin: <span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></li><li><p>node-1002\u8282\u70B9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8282\u70B92\u7684\u914D\u7F6E\u4FE1\u606F\uFF1A</span>

<span class="token comment">#\u96C6\u7FA4\u540D\u79F0\uFF0C\u8282\u70B9\u4E4B\u95F4\u8981\u4FDD\u6301\u4E00\u81F4</span>

cluster.name: my-elasticsearch

<span class="token comment">#\u8282\u70B9\u540D\u79F0\uFF0C\u96C6\u7FA4\u5185\u8981\u552F\u4E00</span>

node.name: node-1002

node.master: <span class="token boolean">true</span>

node.data: <span class="token boolean">true</span>



<span class="token comment">#ip\u5730\u5740</span>

network.host: localhost

<span class="token comment">#http\u7AEF\u53E3</span>

http.port: <span class="token number">1002</span>

<span class="token comment">#tcp\u76D1\u542C\u7AEF\u53E3</span>

transport.tcp.port: <span class="token number">9302</span>



discovery.seed_hosts: <span class="token punctuation">[</span><span class="token string">&quot;localhost:9301&quot;</span><span class="token punctuation">]</span>

discovery.zen.fd.ping_timeout: 1m

discovery.zen.fd.ping_retries: <span class="token number">5</span>



<span class="token comment">#\u96C6\u7FA4\u5185\u7684\u53EF\u4EE5\u88AB\u9009\u4E3A\u4E3B\u8282\u70B9\u7684\u8282\u70B9\u5217\u8868</span>

<span class="token comment">#cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;,&quot;node-3&quot;]</span>



<span class="token comment">#\u8DE8\u57DF\u914D\u7F6E</span>

<span class="token comment">#action.destructive_requires_name: true</span>

http.cors.enabled: <span class="token boolean">true</span>

http.cors.allow-origin: <span class="token string">&quot;&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div></li><li><p>node-1003\u8282\u70B9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8282\u70B93\u7684\u914D\u7F6E\u4FE1\u606F\uFF1A</span>

<span class="token comment">#\u96C6\u7FA4\u540D\u79F0\uFF0C\u8282\u70B9\u4E4B\u95F4\u8981\u4FDD\u6301\u4E00\u81F4</span>

cluster.name: my-elasticsearch

<span class="token comment">#\u8282\u70B9\u540D\u79F0\uFF0C\u96C6\u7FA4\u5185\u8981\u552F\u4E00</span>

node.name: node-1003

node.master: <span class="token boolean">true</span>

node.data: <span class="token boolean">true</span>



<span class="token comment">#ip\u5730\u5740</span>

network.host: localhost

<span class="token comment">#http\u7AEF\u53E3</span>

http.port: <span class="token number">1003</span>

<span class="token comment">#tcp\u76D1\u542C\u7AEF\u53E3</span>

transport.tcp.port: <span class="token number">9303</span>

<span class="token comment">#\u5019\u9009\u4E3B\u8282\u70B9\u7684\u5730\u5740\uFF0C\u5728\u5F00\u542F\u670D\u52A1\u540E\u53EF\u4EE5\u88AB\u9009\u4E3A\u4E3B\u8282\u70B9 </span>

discovery.seed_hosts: <span class="token punctuation">[</span><span class="token string">&quot;localhost:9301&quot;</span>, <span class="token string">&quot;localhost:9302&quot;</span><span class="token punctuation">]</span>

discovery.zen.fd.ping_timeout: 1m

discovery.zen.fd.ping_retries: <span class="token number">5</span>



<span class="token comment">#\u96C6\u7FA4\u5185\u7684\u53EF\u4EE5\u88AB\u9009\u4E3A\u4E3B\u8282\u70B9\u7684\u8282\u70B9\u5217\u8868</span>

<span class="token comment">#cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;,&quot;node-3&quot;]</span>



<span class="token comment">#\u8DE8\u57DF\u914D\u7F6E</span>

<span class="token comment">#action.destructive_requires_name: true</span>

http.cors.enabled: <span class="token boolean">true</span>

http.cors.allow-origin: <span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div></li></ul></li></ol><h3 id="_2-2-\u542F\u52A8\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_2-2-\u542F\u52A8\u96C6\u7FA4" aria-hidden="true">#</a> 2.2 \u542F\u52A8\u96C6\u7FA4</h3><ol><li><p>\u542F\u52A8\u524D\u5148\u5220\u9664\u6BCF\u4E2A\u8282\u70B9\u4E2D\u7684data\u76EE\u5F55\u4E2D\u6240\u6709\u5185\u5BB9\uFF08\u5982\u679C\u5B58\u5728\uFF09</p></li><li><p>\u5206\u522B\u53CC\u51FB\u6267\u884C bin/elasticsearch.bat, \u542F\u52A8\u8282\u70B9\u670D\u52A1\u5668\uFF0C\u542F\u52A8\u540E\uFF0C\u4F1A\u81EA\u52A8\u52A0\u5165\u6307\u5B9A\u540D\u79F0\u7684\u96C6\u7FA4</p></li></ol><h3 id="_2-3-\u6D4B\u8BD5\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6D4B\u8BD5\u96C6\u7FA4" aria-hidden="true">#</a> 2.3 \u6D4B\u8BD5\u96C6\u7FA4</h3><ol><li><p>\u67E5\u770B\u96C6\u7FA4\u72B6\u6001</p><ul><li><p>node-1001\u8282\u70B9</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72472.png?versionId=CAEQKRiBgMDa2LCKhhgiIDhlYTY2OTI2YTljNjQxNDY4NGM5ZDZkMjVjYmRkYzkz" alt="img" loading="lazy"></p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72473.png?versionId=CAEQKRiBgIDv1rCKhhgiIDlmMjQxNDVjOWE1NDRkYWViYzhmNjU1ZDdjZDQzMjUy" alt="img" loading="lazy"></p></li><li><p>node-1002\u8282\u70B9</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72474.png?versionId=CAEQKRiBgICS0bCKhhgiIGQ2ZTY4OWM5MWE3OTRjN2ZhNGE3NDhhODRkZDRhNzA0" alt="img" loading="lazy"></p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72475.png?versionId=CAEQKRiBgICpz7CKhhgiIDY0NjhmZWJkZjliNTRkNjI5NjRjNDZmMjg2YWJmZjI5" alt="img" loading="lazy"></p></li><li><p>node-1003\u8282\u70B9</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72476.png?versionId=CAEQKRiBgICly7CKhhgiIGMyYzYzNWJmZWZmMTQ2YTU5YjkyYjljOTVlNjJkODhi" alt="img" loading="lazy"></p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72477.png?versionId=CAEQKRiBgIC0xbCKhhgiIGVlMjRjMDg1YTdmYjQ1YjFiMmFlYjM4YjQxMTM5MjQ4" alt="img" loading="lazy"></p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72478.png?versionId=CAEQKRiBgMCgwLCKhhgiIGYyZWJkNGI0NzViZjQyOWZiZDhmMTI5OTI5MTU4ODQ4" alt="img" loading="lazy"></p></li></ul></li><li><p>\u5411\u96C6\u7FA4\u4E2D\u7684node-1001\u8282\u70B9\u589E\u52A0\u7D22\u5F15</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u72479.png?versionId=CAEQKRiBgICeyLCKhhgiIDMxNmJmYjJhOTk2MzRjNmU4YmE4OTgxNzNiNmFkN2Iy" alt="img" loading="lazy"></p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u724710.png?versionId=CAEQKRiBgMDwurCKhhgiIGE3YzUyMjM0YmE5NjQ5NGU5MjU2OTAzZTdkMmFjYTcz" alt="img" loading="lazy"></p></li><li><p>\u5411\u96C6\u7FA4\u4E2D\u7684node-1002\u8282\u70B9\u67E5\u8BE2\u7D22\u5F15</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u724711.png?versionId=CAEQKRiBgMDxtLCKhhgiIDViZWMxZDYxMzNhYzRlN2NhMzMxMmZmZWYwMzk5ZDE4" alt="img" loading="lazy"></p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u724712.png?versionId=CAEQKRiBgIDrwbCKhhgiIGIwZGE5ZDZkNWRlMDQ3YTNiNTBmODBiZjJiMDRjYjcx" alt="img" loading="lazy"></p></li></ol><h2 id="_3-linux\u5355\u673A" tabindex="-1"><a class="header-anchor" href="#_3-linux\u5355\u673A" aria-hidden="true">#</a> 3. Linux\u5355\u673A</h2><h3 id="_3-1-\u8F6F\u4EF6\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8F6F\u4EF6\u4E0B\u8F7D" aria-hidden="true">#</a> 3.1 \u8F6F\u4EF6\u4E0B\u8F7D</h3><p>\u8F6F\u4EF6\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-8-0</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u724713.png?versionId=CAEQKRiBgMDFtbCKhhgiIGZjZTU5ZTE3NDYwNTRkYjFhYmM2MzYxNWZhZTdhYTMw" alt="img" loading="lazy"></p><h3 id="_3-2-\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> 3.2 \u8F6F\u4EF6\u5B89\u88C5</h3><ol><li><p>\u89E3\u538B\u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u538B\u7F29</span>
<span class="token function">tar</span> -zxvf elasticsearch-7.8.0-linux-x86_64.tar.gz -C /opt/module
<span class="token comment"># \u6539\u540D</span>
<span class="token function">mv</span> elasticsearch-7.8.0 es
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>\u521B\u5EFA\u7528\u6237 \u56E0\u4E3A\u5B89\u5168\u95EE\u9898\uFF0CElasticsearch\u4E0D\u5141\u8BB8root\u7528\u6237\u76F4\u63A5\u8FD0\u884C\uFF0C\u6240\u4EE5\u8981\u521B\u5EFA\u65B0\u7528\u6237\uFF0C\u5728root\u7528\u6237\u4E2D\u521B\u5EFA\u65B0\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">useradd</span> es <span class="token comment">#\u65B0\u589Ees\u7528\u6237</span>
<span class="token function">passwd</span> es <span class="token comment">#\u4E3Aes\u7528\u6237\u8BBE\u7F6E\u5BC6\u7801</span>

<span class="token function">userdel</span> -r es <span class="token comment">#\u5982\u679C\u9519\u4E86\uFF0C\u53EF\u4EE5\u5220\u9664\u518D\u52A0</span>
<span class="token function">chown</span> -R es:es /opt/module/es <span class="token comment">#\u6587\u4EF6\u5939\u6240\u6709\u8005</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 \u4FEE\u6539<code>/opt/module/es/config/elasticsearch.yml</code>\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u52A0\u5165\u5982\u4E0B\u914D\u7F6E</span>
cluster.name: elasticsearch
node.name: node-1
network.host: <span class="token number">0.0</span>.0.0
http.port: <span class="token number">9200</span>
cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4FEE\u6539/etc/security/limits.conf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u6587\u4EF6\u672B\u5C3E\u4E2D\u589E\u52A0\u4E0B\u9762\u5185\u5BB9</span>
<span class="token comment"># \u6BCF\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6\u6570\u7684\u9650\u5236</span>
es soft nofile <span class="token number">65536</span>
es hard nofile <span class="token number">65536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u4FEE\u6539/etc/security/limits.d/20-nproc.conf
<span class="token comment"># \u5728\u6587\u4EF6\u672B\u5C3E\u4E2D\u589E\u52A0\u4E0B\u9762\u5185\u5BB9</span>
<span class="token comment"># \u6BCF\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6\u6570\u7684\u9650\u5236</span>
es soft nofile <span class="token number">65536</span>
es hard nofile <span class="token number">65536</span>
<span class="token comment"># \u64CD\u4F5C\u7CFB\u7EDF\u7EA7\u522B\u5BF9\u6BCF\u4E2A\u7528\u6237\u521B\u5EFA\u7684\u8FDB\u7A0B\u6570\u7684\u9650\u5236</span>
* hard nproc <span class="token number">4096</span>
<span class="token comment"># \u6CE8\uFF1A* \u5E26\u8868Linux\u6240\u6709\u7528\u6237\u540D\u79F0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4FEE\u6539/etc/sysctl.conf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u6587\u4EF6\u4E2D\u589E\u52A0\u4E0B\u9762\u5185\u5BB9</span>
<span class="token comment"># \u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u62E5\u6709\u7684VMA(\u865A\u62DF\u5185\u5B58\u533A\u57DF)\u7684\u6570\u91CF,\u9ED8\u8BA4\u503C\u4E3A65536</span>
vm.max_map_count<span class="token operator">=</span><span class="token number">655360</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u91CD\u65B0\u52A0\u8F7D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sysctl -p 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h3 id="_3-3-\u542F\u52A8\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-3-\u542F\u52A8\u8F6F\u4EF6" aria-hidden="true">#</a> 3.3 \u542F\u52A8\u8F6F\u4EF6</h3><p>\u4F7F\u7528ES\u7528\u6237\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/es/
<span class="token comment">#\u542F\u52A8</span>
bin/elasticsearch
<span class="token comment">#\u540E\u53F0\u542F\u52A8</span>
bin/elasticsearch -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u542F\u52A8\u65F6\uFF0C\u4F1A\u52A8\u6001\u751F\u6210\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u6240\u5C5E\u7528\u6237\u4E0D\u5339\u914D\uFF0C\u4F1A\u53D1\u751F\u9519\u8BEF\uFF0C\u9700\u8981\u91CD\u65B0\u8FDB\u884C\u4FEE\u6539\u7528\u6237\u548C\u7528\u6237\u7EC4</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u724714.png?versionId=CAEQKRiBgICYsrCKhhgiIDEyMGQ5NTlkYTg0ODQxNTJhYjU3ZGUwNGFmM2ZmYjk2" alt="img" loading="lazy"></p><p>\u5173\u95ED\u9632\u706B\u5899</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6682\u65F6\u5173\u95ED\u9632\u706B\u5899</span>
systemctl stop firewalld

<span class="token comment">#\u6C38\u4E45\u5173\u95ED\u9632\u706B\u5899</span>
systemctl <span class="token builtin class-name">enable</span> firewalld.service <span class="token comment">#\u6253\u5F00\u653E\u8D27\u62A2\u6C38\u4E45\u6027\u751F\u6548\uFF0C\u91CD\u542F\u540E\u4E0D\u4F1A\u590D\u539F</span>
systemctl disable firewalld.service <span class="token comment">#\u5173\u95ED\u9632\u706B\u5899\uFF0C\u6C38\u4E45\u6027\u751F\u6548\uFF0C\u91CD\u542F\u540E\u4E0D\u4F1A\u590D\u539F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-4-\u6D4B\u8BD5\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_3-4-\u6D4B\u8BD5\u96C6\u7FA4" aria-hidden="true">#</a> 3.4 \u6D4B\u8BD5\u96C6\u7FA4</h3><p>\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165\u5730\u5740\uFF1Ahttp://linux1:9200/</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u724715.png?versionId=CAEQKRiBgMCvybCKhhgiIDc4M2E4MDZhNzFmZTRkZTY4MWE1Y2ExNGJhNmQ5NmVl" alt="img" loading="lazy"></p><h2 id="_4-linux\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_4-linux\u96C6\u7FA4" aria-hidden="true">#</a> 4. Linux\u96C6\u7FA4</h2><h3 id="_4-1-\u8F6F\u4EF6\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_4-1-\u8F6F\u4EF6\u4E0B\u8F7D" aria-hidden="true">#</a> 4.1 \u8F6F\u4EF6\u4E0B\u8F7D</h3><p>\u8F6F\u4EF6\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-8-0</p><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u724713.png?versionId=CAEQKRiBgMDFtbCKhhgiIGZjZTU5ZTE3NDYwNTRkYjFhYmM2MzYxNWZhZTdhYTMw" alt="img" loading="lazy"></p><h3 id="_4-2-\u8F6F\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_4-2-\u8F6F\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> 4.2 \u8F6F\u4EF6\u5B89\u88C5</h3><ol><li><p>\u89E3\u538B\u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u538B\u7F29</span>
<span class="token function">tar</span> -zxvf elasticsearch-7.8.0-linux-x86_64.tar.gz -C /opt/module
<span class="token comment"># \u6539\u540D</span>
<span class="token function">mv</span> elasticsearch-7.8.0 es-cluster
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5C06\u8F6F\u4EF6\u5206\u53D1\u5230\u5176\u4ED6\u8282\u70B9\uFF1Alinux2, linux3</p></li><li><p>\u521B\u5EFA\u7528\u6237 \u56E0\u4E3A\u5B89\u5168\u95EE\u9898\uFF0CElasticsearch\u4E0D\u5141\u8BB8root\u7528\u6237\u76F4\u63A5\u8FD0\u884C\uFF0C\u6240\u4EE5\u8981\u521B\u5EFA\u65B0\u7528\u6237\uFF0C\u5728root\u7528\u6237\u4E2D\u521B\u5EFA\u65B0\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">useradd</span> es <span class="token comment">#\u65B0\u589Ees\u7528\u6237</span>
<span class="token function">passwd</span> es <span class="token comment">#\u4E3Aes\u7528\u6237\u8BBE\u7F6E\u5BC6\u7801</span>

<span class="token function">userdel</span> -r es <span class="token comment">#\u5982\u679C\u9519\u4E86\uFF0C\u53EF\u4EE5\u5220\u9664\u518D\u52A0</span>
<span class="token function">chown</span> -R es:es /opt/module/es-cluster <span class="token comment">#\u6587\u4EF6\u5939\u6240\u6709\u8005</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 \u4FEE\u6539<code>/opt/module/es/config/elasticsearch.yml</code>\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u52A0\u5165\u5982\u4E0B\u914D\u7F6E</span>
<span class="token comment">#\u96C6\u7FA4\u540D\u79F0</span>
cluster.name: cluster-es
<span class="token comment">#\u8282\u70B9\u540D\u79F0\uFF0C\u6BCF\u4E2A\u8282\u70B9\u7684\u540D\u79F0\u4E0D\u80FD\u91CD\u590D</span>
node.name: node-1
<span class="token comment">#ip\u5730\u5740\uFF0C\u6BCF\u4E2A\u8282\u70B9\u7684\u5730\u5740\u4E0D\u80FD\u91CD\u590D</span>
network.host: linux1
<span class="token comment">#\u662F\u4E0D\u662F\u6709\u8D44\u683C\u4E3B\u8282\u70B9</span>
node.master: <span class="token boolean">true</span>
node.data: <span class="token boolean">true</span>
http.port: <span class="token number">9200</span>
<span class="token comment"># head \u63D2\u4EF6\u9700\u8981\u8FD9\u6253\u5F00\u8FD9\u4E24\u4E2A\u914D\u7F6E</span>
http.cors.allow-origin: <span class="token string">&quot;*&quot;</span>
http.cors.enabled: <span class="token boolean">true</span>
http.max_content_length: 200mb
<span class="token comment">#es7.x \u4E4B\u540E\u65B0\u589E\u7684\u914D\u7F6E\uFF0C\u521D\u59CB\u5316\u4E00\u4E2A\u65B0\u7684\u96C6\u7FA4\u65F6\u9700\u8981\u6B64\u914D\u7F6E\u6765\u9009\u4E3Emaster</span>
cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#es7.x \u4E4B\u540E\u65B0\u589E\u7684\u914D\u7F6E\uFF0C\u8282\u70B9\u53D1\u73B0</span>
discovery.seed_hosts: <span class="token punctuation">[</span><span class="token string">&quot;linux1:9300&quot;</span>,<span class="token string">&quot;linux2:9300&quot;</span>,<span class="token string">&quot;linux3:9300&quot;</span><span class="token punctuation">]</span>
gateway.recover_after_nodes: <span class="token number">2</span>
network.tcp.keep_alive: <span class="token boolean">true</span>
network.tcp.no_delay: <span class="token boolean">true</span>
transport.tcp.compress: <span class="token boolean">true</span>
<span class="token comment">#\u96C6\u7FA4\u5185\u540C\u65F6\u542F\u52A8\u7684\u6570\u636E\u4EFB\u52A1\u4E2A\u6570\uFF0C\u9ED8\u8BA4\u662F2\u4E2A</span>
cluster.routing.allocation.cluster_concurrent_rebalance: <span class="token number">16</span>
<span class="token comment">#\u6DFB\u52A0\u6216\u5220\u9664\u8282\u70B9\u53CA\u8D1F\u8F7D\u5747\u8861\u65F6\u5E76\u53D1\u6062\u590D\u7684\u7EBF\u7A0B\u4E2A\u6570\uFF0C\u9ED8\u8BA44\u4E2A</span>
cluster.routing.allocation.node_concurrent_recoveries: <span class="token number">16</span>
<span class="token comment">#\u521D\u59CB\u5316\u6570\u636E\u6062\u590D\u65F6\uFF0C\u5E76\u53D1\u6062\u590D\u7EBF\u7A0B\u7684\u4E2A\u6570\uFF0C\u9ED8\u8BA44\u4E2A</span>
cluster.routing.allocation.node_initial_primaries_recoveries: <span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u4FEE\u6539<code>/etc/security/limits.conf</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u6587\u4EF6\u672B\u5C3E\u4E2D\u589E\u52A0\u4E0B\u9762\u5185\u5BB9</span>
es soft nofile <span class="token number">65536</span>
es hard nofile <span class="token number">65536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4FEE\u6539<code>/etc/security/limits.d/20-nproc.conf</code>\uFF0C\u5206\u53D1\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u6587\u4EF6\u672B\u5C3E\u4E2D\u589E\u52A0\u4E0B\u9762\u5185\u5BB9</span>
es soft nofile <span class="token number">65536</span>
es hard nofile <span class="token number">65536</span>
* hard nproc <span class="token number">4096</span>
<span class="token comment"># \u6CE8\uFF1A* \u5E26\u8868Linux\u6240\u6709\u7528\u6237\u540D\u79F0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4FEE\u6539<code>/etc/sysctl.conf</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u6587\u4EF6\u4E2D\u589E\u52A0\u4E0B\u9762\u5185\u5BB9</span>
<span class="token comment"># \u4E00\u4E2A\u8FDB\u7A0B\u53EF\u4EE5\u62E5\u6709\u7684VMA(\u865A\u62DF\u5185\u5B58\u533A\u57DF)\u7684\u6570\u91CF,\u9ED8\u8BA4\u503C\u4E3A65536</span>
vm.max_map_count<span class="token operator">=</span><span class="token number">655360</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u91CD\u65B0\u52A0\u8F7D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>sysctl -p 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h3 id="_4-3-\u542F\u52A8\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-3-\u542F\u52A8\u8F6F\u4EF6" aria-hidden="true">#</a> 4.3 \u542F\u52A8\u8F6F\u4EF6</h3><p>\u5206\u522B\u5728\u4E0D\u540C\u8282\u70B9\u4E0A\u542F\u52A8ES\u8F6F\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/es-cluster

<span class="token comment">#\u542F\u52A8</span>
bin/elasticsearch

<span class="token comment">#\u540E\u53F0\u542F\u52A8</span>
bin/elasticsearch -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_4-4-\u6D4B\u8BD5\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_4-4-\u6D4B\u8BD5\u96C6\u7FA4" aria-hidden="true">#</a> 4.4 \u6D4B\u8BD5\u96C6\u7FA4</h3><p><img src="https://chen-coding.oss-cn-shenzhen.aliyuncs.com/middleware/elasticsearch/elasticsearch_deploy/\u56FE\u724716.png?versionId=CAEQKRiBgIDtsbCKhhgiIGEwMmFiZmQ0OTQ5NjRjMTM4ZGQyODU1ZTlhNmIwNDI4" alt="img" loading="lazy"></p>`,50);function l(p,r){return e}var i=n(a,[["render",l],["__file","ElasticSearch_deploy.html.vue"]]);export{i as default};
