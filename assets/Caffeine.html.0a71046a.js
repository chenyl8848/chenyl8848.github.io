import{_ as n,f as s}from"./app.3bc80cc8.js";const a={},p=s(`<h1 id="spring-cache-caffeine\u5B9E\u73B0\u672C\u5730\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#spring-cache-caffeine\u5B9E\u73B0\u672C\u5730\u7F13\u5B58" aria-hidden="true">#</a> Spring Cache + Caffeine\u5B9E\u73B0\u672C\u5730\u7F13\u5B58</h1><h2 id="caffeine\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#caffeine\u7B80\u4ECB" aria-hidden="true">#</a> Caffeine\u7B80\u4ECB</h2><blockquote><p>Caffeine\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\uFF0C\u9AD8\u547D\u4E2D\u7387\uFF0C\u4F4E\u5185\u5B58\u5360\u7528\uFF0Cnear optimal \u7684\u672C\u5730\u7F13\u5B58\uFF0C\u7B80\u5355\u6765\u8BF4\u5B83\u662F Guava Cache \u7684\u4F18\u5316\u52A0\u5F3A\u7248</p></blockquote><h2 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-cache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.ben-manes.caffeine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>caffeine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5F00\u542F\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u7F13\u5B58" aria-hidden="true">#</a> \u5F00\u542F\u7F13\u5B58</h2><p><code>@EnableCaching</code>\u6CE8\u89E3\u5F00\u542F\u4F7F\u7528\u7F13\u5B58\u7BA1\u7406\u529F\u80FD</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCaching</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u5165" aria-hidden="true">#</a> \u6CE8\u5165</h2><h3 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h3><ol><li>\u65B0\u5EFA\u4E00\u4E2A\u679A\u4E3E\u7C7B</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Caches</span> <span class="token punctuation">{</span>
    <span class="token function">CACHE_ACCESS_TOKEN</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">7200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u6700\u5927\u6570\u91CF */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> maxSize<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u8FC7\u671F\u65F6\u95F4 \u79D2 */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> ttl<span class="token punctuation">;</span>

    <span class="token class-name">Caches</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Caches</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> maxSize<span class="token punctuation">,</span> <span class="token class-name">Integer</span> ttl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxSize <span class="token operator">=</span> maxSize<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ttl <span class="token operator">=</span> ttl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getMaxSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> maxSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getTtl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ttl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="2"><li>\u6CE8\u5165\u5230IOC\u5BB9\u5668</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u672C\u5730\u7F13\u5B58
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Primary</span>
    <span class="token keyword">public</span> <span class="token class-name">CacheManager</span> <span class="token function">cacheManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SimpleCacheManager</span> simpleCacheManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleCacheManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CaffeineCache</span><span class="token punctuation">&gt;</span></span> caffeineCaches <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Caches</span> c <span class="token operator">:</span> <span class="token class-name">Caches</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            caffeineCaches<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CaffeineCache</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                            <span class="token class-name">Caffeine</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                    <span class="token punctuation">.</span><span class="token function">recordStats</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                    <span class="token punctuation">.</span><span class="token function">expireAfterWrite</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getTtl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span>
                                    <span class="token punctuation">.</span><span class="token function">maximumSize</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getMaxSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        simpleCacheManager<span class="token punctuation">.</span><span class="token function">setCaches</span><span class="token punctuation">(</span>caffeineCaches<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> simpleCacheManager<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@Primary</span>
<span class="token keyword">public</span> <span class="token class-name">CacheManager</span> <span class="token function">cacheManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">CaffeineCacheManager</span> caffeineCacheManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CaffeineCacheManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Caffeine</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> caffeine <span class="token operator">=</span> <span class="token class-name">Caffeine</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expireAfterWrite</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MINUTES<span class="token punctuation">)</span><span class="token punctuation">;</span>
    caffeineCacheManager<span class="token punctuation">.</span><span class="token function">setCaffeine</span><span class="token punctuation">(</span>caffeine<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> caffeineCacheManager<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u53EF\u4EE5\u4F7F\u7528spring\u63D0\u4F9B\u7684@Cacheable\u3001@CachePut\u3001@CacheEvict\u7B49\u6CE8\u89E3\u6765\u65B9\u4FBF\u7684\u4F7F\u7528caffeine\u7F13\u5B58</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;CACHE_ACCESS_TOKEN&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#root.methodName&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> corpid<span class="token punctuation">,</span> <span class="token class-name">String</span> corpsecret<span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token comment">//todo something...</span>
   <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><h3 id="\u4F7F\u7528-cacheable\u7F13\u5B58\u4E0D\u8D77\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-cacheable\u7F13\u5B58\u4E0D\u8D77\u4F5C\u7528" aria-hidden="true">#</a> \u4F7F\u7528<code>@Cacheable</code>\u7F13\u5B58\u4E0D\u8D77\u4F5C\u7528</h3><p><strong>\u5931\u6548\u573A\u666F</strong></p><ul><li>\u5728\u79C1\u6709\u65B9\u6CD5\u4E0A\u52A0\u7F13\u5B58</li><li>\u7C7B\u5185\u90E8\u65B9\u6CD5\u8C03\u7528\u52A0\u7F13\u5B58</li></ul><p><strong>\u5931\u6548\u539F\u56E0</strong></p><blockquote><p><code>Spring cache</code> \u7684\u5B9E\u73B0\u539F\u7406\u662F\u57FA\u4E8E <code>AOP</code> \u7684\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u7684\uFF1A\u5373\u90FD\u5728\u65B9\u6CD5\u8C03\u7528\u524D\u540E\u53BB\u83B7\u53D6\u65B9\u6CD5\u7684\u540D\u79F0\u3001\u53C2\u6570\u3001\u8FD4\u56DE\u503C\uFF0C\u7136\u540E\u6839\u636E\u65B9\u6CD5\u540D\u79F0\u3001\u53C2\u6570\u751F\u6210\u7F13\u5B58\u7684key(\u81EA\u5B9A\u4E49\u7684key\u4F8B\u5916)\uFF0C\u8FDB\u884C\u7F13\u5B58\u3002</p></blockquote><blockquote><p><code>AOP</code> \u4E0D\u652F\u6301\u5BF9 <code>private</code> \u79C1\u6709\u65B9\u6CD5\u7684\u62E6\u622A\uFF0C\u6240\u4EE5\u4E5F\u5C31\u4E0D\u652F\u6301\u79C1\u6709\u65B9\u6CD5\u4E0A\u7684 <code>Spring Cache</code> \u6CE8\u89E3\u3002</p></blockquote><blockquote><p><code>this</code> \u8C03\u7528\u4E0D\u662F\u4EE3\u7406\u5BF9\u8C61\u7684\u8C03\u7528, \u6240\u4EE5 <code>AOP</code> \u5931\u6548\uFF0C\u6CE8\u89E3\u5931\u6548\u3002</p></blockquote><p><strong>\u89E3\u51B3\u529E\u6CD5</strong></p><ol><li>\u65B9\u6CD5\u7528 <code>public</code> \u9650\u5B9A\u7B26\u4FEE\u9970\uFF1B</li><li>\u7C7B\u5185\u90E8\u65B9\u6CD5\u8C03\u7528\u52A0\u7F13\u5B58\u65F6\u53EF\u4EE5\u7528 <code>SpringContextUtil</code> \u83B7\u53D6\u5F53\u524D <code>Bean</code> ,\u7531\u5B83\u6765\u8C03\u7528</li></ol><h2 id="\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> \u5DE5\u5177\u7C7B</h2><p><code>SpringContextUtil</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringContextUtil</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringContextUtil</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">containsBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> applicationContext<span class="token punctuation">.</span><span class="token function">containsBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> applicationContext<span class="token punctuation">.</span><span class="token function">isSingleton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> applicationContext<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,32);function e(t,c){return p}var l=n(a,[["render",e],["__file","Caffeine.html.vue"]]);export{l as default};
