import{_ as n,f as s}from"./app.06d697e7.js";const e={},a=s(`<h1 id="node-js-\u4E07\u5B57\u5165\u95E8\u6559\u7A0B" tabindex="-1"><a class="header-anchor" href="#node-js-\u4E07\u5B57\u5165\u95E8\u6559\u7A0B" aria-hidden="true">#</a> <code>Node.js</code> \u4E07\u5B57\u5165\u95E8\u6559\u7A0B</h1><h2 id="_0-\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_0-\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> 0. \u57FA\u7840\u6982\u5FF5</h2><blockquote><p><code>Node.js</code> \u662F\u4E00\u4E2A\u57FA\u4E8E <code>Chrome V8</code> \u5F15\u64CE\u7684 <code>JavaScript</code> \u8FD0\u884C\u73AF\u5883\uFF0C\u4F7F\u7528\u4E86\u4E00\u4E2A\u4E8B\u4EF6\u9A71\u52A8\u3001\u975E\u963B\u585E\u5F0F <code>I/O</code> \u6A21\u578B\uFF0C\u8BA9 <code>JavaScript</code> \u8FD0\u884C\u5728\u670D\u52A1\u7AEF\u7684\u5F00\u53D1\u5E73\u53F0\u3002</p></blockquote><p>\u5B98\u65B9\u5730\u5740\uFF1Ahttps://nodejs.org/en</p><p>\u4E2D\u6587\u5730\u5740\uFF1Ahttps://nodejs.org/zh-cn</p><p>\u4EE3\u7801\u521D\u4F53\u9A8C\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>console.log(&quot;hello NodeJS&quot;)

// 1.\u8FDB\u5165\u5230\u5BF9\u5E94 js \u6587\u4EF6\u7684\u76EE\u5F55\u4E0B
// 2.\u6267\u884C node 1-hello.js
// 3.\u8F93\u51FA\uFF1Ahello NodeJS
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u793A\u4F8B\u4EE3\u7801\u5730\u5740\uFF1Ahttps://github.com/chenyl8848/node.js-study</p><h2 id="_1-buffer" tabindex="-1"><a class="header-anchor" href="#_1-buffer" aria-hidden="true">#</a> 1. <code>Buffer</code></h2><h3 id="_1-1-\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6982\u5FF5" aria-hidden="true">#</a> 1.1 \u6982\u5FF5</h3><blockquote><p><code>Buffer</code> \u662F\u4E00\u4E2A\u7C7B\u4F3C\u4E8E\u6570\u7EC4\u7684<strong>\u5BF9\u8C61</strong>\uFF0C\u7528\u4E8E\u8868\u793A\u56FA\u5B9A\u957F\u5EA6\u7684\u5B57\u8282\u5E8F\u5217\u3002<code>Buffer</code> \u672C\u8D28\u662F\u4E00\u6BB5\u5185\u5B58\u7A7A\u95F4\uFF0C\u4E13\u95E8\u7528\u6765\u5904\u7406\u4E8C\u8FDB\u5236\u6570\u636E\u3002</p></blockquote><h3 id="_1-2-\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-2-\u7279\u70B9" aria-hidden="true">#</a> 1.2 \u7279\u70B9</h3><ul><li><code>Buffer</code> \u5927\u5C0F\u56FA\u5B9A\u4E14\u65E0\u6CD5\u8C03\u6574</li><li><code>Buffer</code> \u6027\u80FD\u8F83\u597D\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5BF9\u8BA1\u7B97\u673A\u5185\u5B58\u8FDB\u884C\u64CD\u4F5C</li><li>\u6BCF\u4E2A\u5143\u7D20\u7684\u5927\u5C0F\u4E3A 1 \u5B57\u8282\uFF08byte\uFF09</li></ul><h3 id="_1-3-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4F7F\u7528" aria-hidden="true">#</a> 1.3 \u4F7F\u7528</h3><h4 id="_1-3-1-buffer-\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#_1-3-1-buffer-\u7684\u521B\u5EFA" aria-hidden="true">#</a> 1.3.1 <code>Buffer</code> \u7684\u521B\u5EFA</h4><p><code>Node.js</code> \u4E2D\u521B\u5EFA <code>Buffer</code> \u7684\u65B9\u5F0F\u4E3B\u8981\u5982\u4E0B\u51E0\u79CD\uFF1A</p><p><code>Buffer.alloc</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u521B\u5EFA\u4E86\u4E00\u4E2A\u957F\u5EA6\u4E3A 10 \u5B57\u8282\u7684 Buffer\uFF0C\u76F8\u5F53\u4E8E\u7533\u8BF7\u4E86 10 \u5B57\u8282\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u6BCF\u4E2A\u5B57\u8282\u7684\u503C\u4E3A 0
// \u7ED3\u679C\u4E3A &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt;
let buf_1 = Buffer.alloc(10);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>Buffer.allocUnsafe</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u521B\u5EFA\u4E86\u4E00\u4E2A\u957F\u5EA6\u4E3A 10 \u5B57\u8282\u7684 Buffer\uFF0CBuffer \u4E2D\u53EF\u80FD\u5B58\u5728\u65E7\u7684\u6570\u636E, \u53EF\u80FD\u4F1A\u5F71\u54CD\u6267\u884C\u7ED3\u679C\uFF0C\u6240\u4EE5\u53EB unsafe
let buf_2 = Buffer.allocUnsafe(10);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>Buffer.from</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u901A\u8FC7\u5B57\u7B26\u4E32\u521B\u5EFA Buffer
let buf_3 = Buffer.from(&#39;hello&#39;);
// \u901A\u8FC7\u6570\u7EC4\u521B\u5EFA Buffer
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_1-3-2-buffer-\u4E0E\u5B57\u7B26\u4E32\u7684\u8F6C\u5316" tabindex="-1"><a class="header-anchor" href="#_1-3-2-buffer-\u4E0E\u5B57\u7B26\u4E32\u7684\u8F6C\u5316" aria-hidden="true">#</a> 1.3.2 <code>Buffer</code> \u4E0E\u5B57\u7B26\u4E32\u7684\u8F6C\u5316</h4><p>\u53EF\u4EE5\u501F\u52A9 <code>toString</code> \u65B9\u6CD5\u5C06 <code>Buffer</code> \u8F6C\u4E3A\u5B57\u7B26\u4E32</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// buffer \u4E0E\u5B57\u7B26\u4E32\u7684\u8F6C\u6362
const buffer = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// \u9ED8\u8BA4\u4F7F\u7528 UTF-8 \u7684\u7F16\u7801\u683C\u5F0F
console.log(buffer.toString())
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A<code>toString</code> \u9ED8\u8BA4\u662F\u6309\u7167 <code>utf-8</code> \u7F16\u7801\u65B9\u5F0F\u8FDB\u884C\u8F6C\u6362\u7684\u3002</p></blockquote><h4 id="_1-3-3-buffer-\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-3-3-buffer-\u7684\u64CD\u4F5C" aria-hidden="true">#</a> 1.3.3 <code>Buffer</code> \u7684\u64CD\u4F5C</h4><p><code>Buffer</code> \u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 [] \u7684\u65B9\u5F0F\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\u3002</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const buffer = Buffer.from(&#39;hello&#39;);
// \u4E8C\u8FDB\u5236\uFF1A1101000
console.log(buffer[0].toString(2))

// \u4FEE\u6539 buffer
buffer[0] = 95
console.log(buffer.toString())

// \u6EA2\u51FA \u5982\u679C\u4FEE\u6539\u7684\u6570\u503C\u8D85\u8FC7 255 \uFF0C\u5219\u8D85\u8FC7 8 \u4F4D\u6570\u636E\u4F1A\u88AB\u820D\u5F03
const buffer = Buffer.from(&#39;hello&#39;)
// \u4F1A\u820D\u5F03\u9AD8\u4F4D\u7684\u6570\u5B57\uFF0C\u56E0\u4E3A\u516B\u4F4D\u7684\u4E8C\u8FDB\u5236\u6700\u9AD8\u503C\u4E3A 255   0001 0110 1001  =&gt; 0110 1001
buffer[0] = 361
console.log(buffer)

// \u4E2D\u6587 \u4E00\u4E2A utf-8 \u7684\u5B57\u7B26 \u4E00\u822C \u5360 3 \u4E2A\u5B57\u8282
const buffer = Buffer.from(&#39;\u4F60\u597D&#39;)
console.log(buffer)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A</p><ol><li>\u5982\u679C\u4FEE\u6539\u7684\u6570\u503C\u8D85\u8FC7 255\uFF0C\u5219\u8D85\u8FC7 8 \u4F4D\u6570\u636E\u4F1A\u88AB\u820D\u5F03</li><li>\u4E00\u4E2A <code>utf-8</code> \u7684\u5B57\u7B26\u4E00\u822C\u5360 3 \u4E2A\u5B57\u8282</li></ol></blockquote><h2 id="_2-fs-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2-fs-\u6A21\u5757" aria-hidden="true">#</a> 2. <code>fs</code> \u6A21\u5757</h2><blockquote><p><code>fs</code> \u5168\u79F0\u4E3A <code>file system</code>,\u79F0\u4E4B\u4E3A<strong>\u6587\u4EF6\u7CFB\u7EDF</strong>\uFF0C\u662F <code>Node.js</code> \u4E2D\u7684<strong>\u5185\u7F6E\u6A21\u5757</strong>\uFF0C\u53EF\u4EE5\u5BF9\u8BA1\u7B97\u673A\u4E2D\u7684\u78C1\u76D8\u8FDB\u884C\u64CD\u4F5C\u3002</p></blockquote><h3 id="_2-1-\u6587\u4EF6\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6587\u4EF6\u5199\u5165" aria-hidden="true">#</a> 2.1 \u6587\u4EF6\u5199\u5165</h3><p>\u6587\u4EF6\u5199\u5165\u5C31\u662F\u5C06\u6570\u636E\u4FDD\u5B58\u5230\u6587\u4EF6\u4E2D\uFF0C\u6709\u5982\u4E0B\u7684 <code>API</code></p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>writeFile</td><td>\u5F02\u6B65\u5199\u5165</td></tr><tr><td>writeFileSync</td><td>\u540C\u6B65\u5199\u5165</td></tr><tr><td>appendFile/appendFileSync</td><td>\u8FFD\u52A0\u5199\u5165</td></tr><tr><td>createWriteStream</td><td>\u6D41\u5F0F\u5199\u5165</td></tr></tbody></table><h4 id="_2-1-1-\u5F02\u6B65\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u5F02\u6B65\u5199\u5165" aria-hidden="true">#</a> 2.1.1 \u5F02\u6B65\u5199\u5165</h4><p>\u8BED\u6CD5\uFF1A <code>fs.writeFile(file, data, [options], callback)</code></p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>file</code>:\u6587\u4EF6\u540D</li><li><code>data</code>:\u5F85\u5199\u5165\u7684\u6570\u636E</li><li><code>options</code>:\u9009\u9879\u8BBE\u7F6E \uFF08\u53EF\u9009\uFF09</li><li><code>callback</code>:\u5199\u5165\u56DE\u8C03</li></ul><p>\u8FD4\u56DE\u503C\uFF1A <code>undefined</code></p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5BFC\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u5199\u5165\u6587\u4EF6
// writeFile \u5F02\u6B65\u5199\u5165\uFF0C\u56DB\u4E2A\u53C2\u6570\uFF1A1.\u6587\u4EF6\u8DEF\u5F84 2.\u5199\u5165\u5185\u5BB9 3.\u914D\u7F6E\u4FE1\u606F 4.\u56DE\u8C03\u51FD\u6570
// \u6587\u4EF6\u5199\u5165\u6210\u529F
fs.writeFile(&#39;./\u5EA7\u53F3\u94ED.txt&#39;, &#39;\u5C01\u72FC\u5C45\u80E5\uFF0C\u7985\u4E8E\u59D1\u884D\uFF0C\u996E\u9A6C\u701A\u6D77&#39;, error =&gt; {
    // errror \u4E3A null\u5C31\u662F\u5199\u5165\u6210\u529F
    if (error) {
        console.log(&#39;\u6587\u4EF6\u5199\u5165\u5931\u8D25&#39;)
        return;
    }
    console.log(&#39;\u6587\u4EF6\u5199\u5165\u6210\u529F&#39;)
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="_2-1-2-\u540C\u6B65\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u540C\u6B65\u5199\u5165" aria-hidden="true">#</a> 2.1.2 \u540C\u6B65\u5199\u5165</h4><p>\u8BED\u6CD5: <code>fs.writeFileSync(file, data, [options])</code></p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>file</code>:\u6587\u4EF6\u540D</li><li><code>data</code>:\u5F85\u5199\u5165\u7684\u6570\u636E</li><li><code>options</code>:\u9009\u9879\u8BBE\u7F6E \uFF08\u53EF\u9009\uFF09</li></ul><p>\u8FD4\u56DE\u503C\uFF1A <code>undefined</code></p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5BFC\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u5199\u5165\u6587\u4EF6
// \u540C\u6B65\u5199\u5165\uFF0C\u6CA1\u6709\u56DE\u8C03\u51FD\u6570
fs.writeFileSync(&#39;./\u5EA7\u53F3\u94ED.txt&#39;, &#39;\u5C01\u72FC\u5C45\u80E5\uFF0C\u7985\u4E8E\u59D1\u884D\uFF0C\u996E\u9A6C\u701A\u6D77\uFF0C\u71D5\u77F3\u52D2\u7136&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>Node.js</code> \u4E2D\u7684\u78C1\u76D8\u64CD\u4F5C\u662F\u7531\u5176\u4ED6\u7EBF\u7A0B\u5B8C\u6210\u7684\uFF0C\u7ED3\u679C\u7684\u5904\u7406\u6709\u4E24\u79CD\u6A21\u5F0F\uFF1A</p><ul><li>\u540C\u6B65\u5904\u7406 <code>JavaScript</code> \u4E3B\u7EBF\u7A0B\u4F1A\u7B49\u5F85\u5176\u4ED6\u7EBF\u7A0B\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u7136\u540E\u518D\u7EE7\u7EED\u6267\u884C\u4E3B\u7EBF\u7A0B\u7684\u4EE3\u7801\uFF0C\u6548\u7387\u8F83\u4F4E</li><li>\u5F02\u6B65\u5904\u7406 <code>JavaScript</code> \u4E3B\u7EBF\u7A0B\u4E0D\u4F1A\u7B49\u5F85\u5176\u4ED6\u7EBF\u7A0B\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u76F4\u63A5\u6267\u884C\u540E\u7EED\u7684\u4E3B\u7EBF\u7A0B\u4EE3\u7801\uFF0C\u6548\u7387\u8F83\u597D</li></ul></blockquote><h4 id="_2-1-3-\u8FFD\u52A0\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u8FFD\u52A0\u5199\u5165" aria-hidden="true">#</a> 2.1.3 \u8FFD\u52A0\u5199\u5165</h4><p><code>appendFile</code> \u4F5C\u7528\u662F\u5728\u6587\u4EF6\u5C3E\u90E8\u8FFD\u52A0\u5185\u5BB9\uFF0C<code>appendFile</code> \u8BED\u6CD5\u4E0E <code>writeFile</code> \u8BED\u6CD5\u5B8C\u5168\u76F8\u540C \u8BED\u6CD5:</p><ul><li>fs.appendFile(file, data, [options], callback)</li><li>fs.appendFileSync(file, data, [options])</li></ul><p>\u8FD4\u56DE\u503C\uFF1A \u4E8C\u8005\u90FD\u4E3A <code>undefined</code> \u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;);

const content = &#39;\\r\\n\u4F46\u4F7F\u9F99\u57CE\u98DE\u5C06\u5728\uFF0C\u4E0D\u6559\u80E1\u9A6C\u5EA6\u9634\u5C71&#39;;

// fs.appendFile(&#39;./\u5EA7\u53F3\u94ED.txt&#39;, content, error =&gt; {
//     // errror \u4E3A null\u5C31\u662F\u5199\u5165\u6210\u529F
//     if (error) {
//         console.log(&#39;\u6587\u4EF6\u8FFD\u52A0\u5199\u5165\u5931\u8D25&#39;)
//         return;
//     }
//     console.log(&#39;\u6587\u4EF6\u8FFD\u52A0\u5199\u5165\u6210\u529F&#39;);
// })

// \u540C\u6B65\u6587\u4EF6\u8FFD\u52A0\u5199\u5165
// fs.appendFileSync(&#39;./\u5EA7\u53F3\u94ED.txt&#39;, content)

// \u4F7F\u7528 writeFile \u7684\u65B9\u5F0F\u8FFD\u52A0\u6587\u4EF6\u5199\u5165
fs.writeFile(&#39;./\u5EA7\u53F3\u94ED.txt&#39;, content, {flag: &#39;a&#39;}, error =&gt; {
    if (error) {
        console.log(&#39;\u6587\u4EF6\u8FFD\u52A0\u5199\u5165\u5931\u8D25&#39;)
        return;
    }
    console.log(&#39;\u6587\u4EF6\u8FFD\u52A0\u5199\u5165\u6210\u529F&#39;)
})

console.log(&#39;hello world&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h4 id="_2-1-4-\u6D41\u5F0F\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#_2-1-4-\u6D41\u5F0F\u5199\u5165" aria-hidden="true">#</a> 2.1.4 \u6D41\u5F0F\u5199\u5165</h4><p>\u8BED\u6CD5\uFF1A <code>fs.createWriteStream(path, [options])</code></p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>path</code>:\u6587\u4EF6\u8DEF\u5F84</li><li><code>options</code>:\u9009\u9879\u914D\u7F6E\uFF08 \u53EF\u9009 \uFF09</li></ul><p>\u8FD4\u56DE\u503C\uFF1A <code>Object</code></p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5BFC\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;);

// 2.\u521B\u5EFA\u5199\u5165\u6D41\u5BF9\u8C61
const writeStream = fs.createWriteStream(&#39;./\u89C2\u4E66\u6709\u611F.txt&#39;);

// 3.\u5199\u5165\u5185\u5BB9
writeStream.write(&#39;\u534A\u4EA9\u65B9\u5858\u4E00\u9274\u5F00\\r\\n&#39;)
writeStream.write(&#39;\u5929\u5149\u4E91\u5F71\u5171\u5F98\u5F8A\\r\\n&#39;)
writeStream.write(&#39;\u95EE\u6E20\u90A3\u5F97\u6E05\u5982\u8BB8\\r\\n&#39;)
writeStream.write(&#39;\u4E3A\u6709\u6E90\u5934\u6D3B\u6C34\u6765\\r\\n&#39;)

// 4.\u5173\u95ED\u901A\u9053 \u4E0D\u662F\u5FC5\u987B
// writeStream.close();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><blockquote><p>\u7A0B\u5E8F\u6253\u5F00\u4E00\u4E2A\u6587\u4EF6\u662F\u9700\u8981\u6D88\u8017\u8D44\u6E90\u7684\uFF0C\u6D41\u5F0F\u5199\u5165\u53EF\u4EE5\u51CF\u5C11\u6253\u5F00\u5173\u95ED\u6587\u4EF6\u7684\u6B21\u6570\u3002\u6D41\u5F0F\u5199\u5165\u65B9\u5F0F\u9002\u7528\u4E8E<strong>\u5927\u6587\u4EF6\u5199\u5165</strong>\u6216\u8005<strong>\u9891\u7E41\u5199\u5165</strong>\u7684\u573A\u666F, <code>writeFile</code> \u9002\u5408\u4E8E\u5199\u5165\u9891\u7387\u8F83\u4F4E\u7684\u573A\u666F\u3002</p></blockquote><h3 id="_2-2-\u6587\u4EF6\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6587\u4EF6\u8BFB\u53D6" aria-hidden="true">#</a> 2.2 \u6587\u4EF6\u8BFB\u53D6</h3><p>\u6587\u4EF6\u8BFB\u53D6\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u901A\u8FC7\u7A0B\u5E8F\u4ECE\u6587\u4EF6\u4E2D\u53D6\u51FA\u5176\u4E2D\u7684\u6570\u636E\uFF0C\u6709\u5982\u4E0B\u51E0\u79CD <code>API</code>\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>readFile</td><td>\u5F02\u6B65\u8BFB\u53D6</td></tr><tr><td>readFileSync</td><td>\u540C\u6B65\u8BFB\u53D6</td></tr><tr><td>createReadStream</td><td>\u6D41\u5F0F\u8BFB\u53D6</td></tr></tbody></table><h4 id="_2-2-1-\u5F02\u6B65\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u5F02\u6B65\u8BFB\u53D6" aria-hidden="true">#</a> 2.2.1 \u5F02\u6B65\u8BFB\u53D6</h4><p>\u8BED\u6CD5\uFF1A <code>fs.readFile(path, [options], callback)</code></p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>path</code>:\u6587\u4EF6\u8DEF\u5F84</li><li><code>options</code>:\u9009\u9879\u914D\u7F6E</li><li><code>callback</code>:\u56DE\u8C03\u51FD\u6570</li></ul><p>\u8FD4\u56DE\u503C\uFF1A <code>undefined</code></p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u5F02\u6B65\u8BFB\u53D6
fs.readFile(&#39;./\u5EA7\u53F3\u94ED.txt&#39;, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u4EF6\u8BFB\u53D6\u9519\u8BEF&#39;)
        return
    }
    console.log(data.toString())
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="_2-2-2-\u540C\u6B65\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u540C\u6B65\u8BFB\u53D6" aria-hidden="true">#</a> 2.2.2 \u540C\u6B65\u8BFB\u53D6</h4><p>\u8BED\u6CD5\uFF1A <code>fs.readFileSync(path, [options])</code></p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>path</code>:\u6587\u4EF6\u8DEF\u5F84</li><li><code>options</code>:\u9009\u9879\u914D\u7F6E</li></ul><p>\u8FD4\u56DE\u503C\uFF1A <code>string</code> | <code>Buffer</code></p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u540C\u6B65\u8BFB\u53D6
let data = fs.readFileSync(&#39;./\u5EA7\u53F3\u94ED.txt&#39;);
console.log(data.toString())
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_2-2-3-\u6D41\u5F0F\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u6D41\u5F0F\u8BFB\u53D6" aria-hidden="true">#</a> 2.2.3 \u6D41\u5F0F\u8BFB\u53D6</h4><p>\u8BED\u6CD5\uFF1A <code>fs.createReadStream(path, [options])</code></p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>path</code>:\u6587\u4EF6\u8DEF\u5F84</li><li><code>options</code>:\u9009\u9879\u914D\u7F6E\uFF08\u53EF\u9009\uFF09</li></ul><p>\u8FD4\u56DE\u503C\uFF1A<code>Object</code></p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5BFC\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u521B\u5EFA\u8BFB\u53D6\u6D41\u5BF9\u8C61
const rs = fs.createReadStream(&#39;./\u89C2\u4E66\u6709\u611F.txt&#39;);

// 3.\u7ED1\u5B9A data \u4E8B\u4EF6
rs.on(&#39;data&#39;, chunk =&gt; {
    // chunk:\u5757\u513F\u3001\u5927\u5757\u513F
    console.log(chunk)
    console.log(chunk.length)
    console.log(chunk.toString())
})

// 4.\u7ED3\u675F\u4E8B\u4EF6\uFF08\u53EF\u9009\uFF09
rs.on(&#39;end&#39;, () =&gt; {
    console.log(&#39;\u6587\u4EF6\u8BFB\u53D6\u5B8C\u6210&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_2-3-\u6587\u4EF6\u79FB\u52A8\u4E0E\u91CD\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6587\u4EF6\u79FB\u52A8\u4E0E\u91CD\u547D\u540D" aria-hidden="true">#</a> 2.3 \u6587\u4EF6\u79FB\u52A8\u4E0E\u91CD\u547D\u540D</h3><p>\u5728 <code>Node.js</code> \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>rename</code> \u6216 <code>renameSync</code> \u6765\u79FB\u52A8\u6216\u91CD\u547D\u540D\u6587\u4EF6\u6216\u6587\u4EF6\u5939</p><p>\u8BED\u6CD5\uFF1A</p><ul><li><code>fs.rename(oldPath, newPath, callback)</code></li><li><code>fs.renameSync(oldPath, newPath)</code></li></ul><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>oldPath</code>:\u6587\u4EF6\u5F53\u524D\u7684\u8DEF\u5F84</li><li><code>newPath</code>:\u6587\u4EF6\u65B0\u7684\u8DEF\u5F84</li><li><code>callback</code>:\u64CD\u4F5C\u540E\u7684\u56DE\u8C03</li></ul><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5BFC\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;);

// 2.\u6587\u4EF6\u91CD\u547D\u540D
// fs.rename(&#39;./\u5EA7\u53F3\u94ED-2.txt&#39;, &#39;./\u897F\u6C49\u540D\u5C06.txt&#39;, error =&gt; {
//     if (error) {
//         console.log(&#39;\u6587\u4EF6\u91CD\u547D\u540D\u5931\u8D25&#39;)
//            return ;
//     }
//     console.log(&#39;\u6587\u4EF6\u91CD\u547D\u540D\u6210\u529F&#39;)
// })

// 3.\u6587\u4EF6\u79FB\u52A8
// \u6587\u4EF6\u5939\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u4F1A\u62A5\u9519\u8BEF Error: ENOENT: no such file or directory
fs.rename(&#39;./\u897F\u6C49\u540D\u5C06.txt&#39;, &#39;./\u6587\u4EF6/\u897F\u6C49\u540D\u5C06.txt&#39;, error =&gt; {
    if (error) {
        console.log(error, &#39;\u79FB\u52A8\u6587\u4EF6\u51FA\u9519&#39;);
        return ;
    }
    console.log(&#39;\u64CD\u4F5C\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_2-4-\u6587\u4EF6\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_2-4-\u6587\u4EF6\u5220\u9664" aria-hidden="true">#</a> 2.4 \u6587\u4EF6\u5220\u9664</h3><p>\u5728 <code>Node.js</code> \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>unlink</code> \u6216 <code>unlinkSync</code> \u6216 <code>rm</code> \u6216 <code>rmSync</code> \u6765\u5220\u9664\u6587\u4EF6</p><p>\u8BED\u6CD5\uFF1A</p><ul><li><code>fs.unlink(path, callback)</code></li><li><code>fs.unlinkSync(path)</code></li></ul><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>path</code>:\u6587\u4EF6\u8DEF\u5F84</li><li><code>callback</code>:\u64CD\u4F5C\u540E\u7684\u56DE\u8C03</li></ul><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u8C03\u7528 unlink \u65B9\u6CD5
// unlinkSync:\u540C\u6B65\u5220\u9664
// fs.unlink(&#39;./\u5EA7\u53F3\u94ED-3.txt&#39;, error =&gt; {
//     if (error) {
//         console.log(&#39;\u5220\u9664\u6587\u4EF6\u9519\u8BEF&#39;, error)
//         return;
//     }
//     console.log(&#39;\u5220\u9664\u6587\u4EF6\u6210\u529F&#39;)
// })

// 3.\u8C03\u7528 rm \u65B9\u6CD5
// rmSync:\u540C\u6B65\u5220\u9664
fs.rm(&#39;./\u6587\u4EF6/\u897F\u6C49\u540D\u5C06.txt&#39;, error =&gt; {
    if (error) {
        console.log(&#39;\u6587\u4EF6\u5220\u9664\u5931\u8D25&#39;, error)
        return;
    }
    console.log(&#39;\u6587\u4EF6\u5220\u9664\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_2-5-\u6587\u4EF6\u5939\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-5-\u6587\u4EF6\u5939\u64CD\u4F5C" aria-hidden="true">#</a> 2.5 \u6587\u4EF6\u5939\u64CD\u4F5C</h3><p>\u5728 <code>Node.js</code> \u4E2D\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B <code>API</code> \u5BF9\u6587\u4EF6\u5939\u8FDB\u884C\u521B\u5EFA\u3001\u8BFB\u53D6\u3001\u5220\u9664\u7B49\u64CD\u4F5C</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>mkdir / mkdirSync</td><td>\u521B\u5EFA\u6587\u4EF6\u5939</td></tr><tr><td>readdir / readdirSync</td><td>\u8BFB\u53D6\u6587\u4EF6\u5939</td></tr><tr><td>rmdir / rmdirSync</td><td>\u5220\u9664\u6587\u4EF6\u5939</td></tr></tbody></table><h4 id="_2-5-1-\u521B\u5EFA\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#_2-5-1-\u521B\u5EFA\u6587\u4EF6\u5939" aria-hidden="true">#</a> 2.5.1 \u521B\u5EFA\u6587\u4EF6\u5939</h4><p>\u5728 <code>Node.js</code> \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>mkdir</code> \u6216 <code>mkdirSync</code> \u6765\u521B\u5EFA\u6587\u4EF6\u5939</p><p>\u8BED\u6CD5\uFF1A</p><ul><li><code>fs.mkdir(path, [options], callback)</code></li><li><code>fs.mkdirSync(path, [options])</code></li></ul><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>path</code>:\u6587\u4EF6\u5939\u8DEF\u5F84</li><li><code>options</code>:\u9009\u9879\u914D\u7F6E\uFF08\u53EF\u9009\uFF09</li><li><code>callback</code>:\u64CD\u4F5C\u540E\u7684\u56DE\u8C03</li></ul><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u521B\u5EFA\u6587\u4EF6\u5939
// mkdir make:\u5236\u4F5C directory:\u76EE\u5F55
fs.mkdir(&#39;./html&#39;, error =&gt; {
    if (error) {
        console.log(&#39;\u521B\u5EFA\u76EE\u5F55\u5931\u8D25&#39;, error)
        return;
    }
    console.log(&#39;\u521B\u5EFA\u76EE\u5F55\u6210\u529F&#39;)
})

// 3.\u9012\u5F52\u521B\u5EFA\u6587\u4EF6\u5939
fs.mkdir(&#39;./a/b/c&#39;, {
    recursive: true
}, error =&gt; {
    if (error) {
        console.log(&quot;\u9012\u5F52\u521B\u5EFA\u6587\u4EF6\u5939\u5931\u8D25&quot;, error)
        return;
    }
    console.log(&#39;\u9012\u5F52\u521B\u5EFA\u6587\u4EF6\u5939\u6210\u529F&#39;)
})

// 4.\u9012\u5F52\u540C\u6B65\u521B\u5EFA\u6587\u4EF6\u5939
fs.mkdirSync(&#39;./a/b/c&#39;, {recursive: true});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h4 id="_2-5-2-\u8BFB\u53D6\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#_2-5-2-\u8BFB\u53D6\u6587\u4EF6\u5939" aria-hidden="true">#</a> 2.5.2 \u8BFB\u53D6\u6587\u4EF6\u5939</h4><p>\u5728 <code>Node.js</code> \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>readdir</code> \u6216 <code>readdirSync</code> \u6765\u8BFB\u53D6\u6587\u4EF6\u5939</p><p>\u8BED\u6CD5\uFF1A</p><ul><li><code>fs.readdir(path, [options], callback)</code></li><li><code>fs.readdirSync(path, [options])</code></li></ul><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>path</code>:\u6587\u4EF6\u5939\u8DEF\u5F84</li><li><code>options</code>:\u9009\u9879\u914D\u7F6E\uFF08\u53EF\u9009\uFF09</li><li><code>callback</code>:\u64CD\u4F5C\u540E\u7684\u56DE\u8C03</li></ul><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u8BFB\u53D6\u6587\u4EF6\u5939
// readdir read:\u8BFB\u53D6 dir:directory \u76EE\u5F55
fs.readdir(&#39;./&#39;, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u8BFB\u53D6\u6587\u4EF6\u5939\u9519\u8BEF&#39;, error)
        return;
    }
    // [
    //     &#39;1-\u6587\u4EF6\u5199\u5165.js&#39;,
    //     &#39;2-\u8FFD\u52A0\u5199\u5165.js&#39;,
    //     &#39;3-\u6D41\u5F0F\u5199\u5165.js&#39;,
    //     &#39;4-\u6587\u4EF6\u8BFB\u53D6.js&#39;,
    //     &#39;5-\u6D41\u5F0F\u8BFB\u53D6.js&#39;,
    //     &#39;6-\u7EC3\u4E60-\u6587\u4EF6\u590D\u5236.js&#39;,
    //     &#39;7-\u6587\u4EF6\u91CD\u547D\u540D\u4E0E\u79FB\u52A8.js&#39;,
    //     &#39;8-\u5220\u9664\u6587\u4EF6.js&#39;,
    //     &#39;9-\u6587\u4EF6\u5939\u64CD\u4F5C.js&#39;,
    //     &#39;a&#39;,
    //     &#39;html&#39;,
    //     &#39;\u5EA7\u53F3\u94ED.txt&#39;,
    //     &#39;\u6587\u4EF6&#39;,
    //     &#39;\u89C2\u4E66\u6709\u611F.txt&#39;
    // ]
    console.log(data)
})

//\u540C\u6B65\u8BFB\u53D6
// let data = fs.readdirSync(&#39;./&#39;);
// console.log(data);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h4 id="_2-5-3-\u5220\u9664\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#_2-5-3-\u5220\u9664\u6587\u4EF6\u5939" aria-hidden="true">#</a> 2.5.3 \u5220\u9664\u6587\u4EF6\u5939</h4><p>\u5728 <code>Node.js</code> \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>rmdir</code> \u6216 <code>rmdirSync</code> \u6765\u5220\u9664\u6587\u4EF6\u5939</p><p>\u8BED\u6CD5\uFF1A</p><ul><li><code>fs.rmdir(path, [options], callback)</code></li><li><code>fs.rmdirSync(path, [options])</code> \u53C2\u6570\u8BF4\u660E\uFF1A</li><li><code>path</code>:\u6587\u4EF6\u5939\u8DEF\u5F84</li><li><code>options</code>:\u9009\u9879\u914D\u7F6E\uFF08\u53EF\u9009\uFF09</li><li><code>callback</code>:\u64CD\u4F5C\u540E\u7684\u56DE\u8C03</li></ul><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u5220\u9664\u6587\u4EF6\u5939
// fs.rmdir(&#39;./\u6587\u4EF6&#39;, error =&gt; {
//     if (error) {
//         console.log(&#39;\u5220\u9664\u6587\u4EF6\u5939\u5931\u8D25&#39;, error)
//         return;
//     }
//     console.log(&#39;\u5220\u9664\u6587\u4EF6\u5939\u6210\u529F&#39;)
// })

// 3.\u9012\u5F52\u5220\u9664\u6587\u4EF6\u5939
// \u9012\u5F52\u5220\u9664\u6587\u4EF6\u5939\u5931\u8D25 [Error: ENOTEMPTY: directory not empty, rmdir &#39;E:\\JavaEE\\frontend\\nodejs-study\\2-fs\u6587\u4EF6\u7CFB\u7EDF\\a&#39;]

// \u4E0D\u63A8\u8350\u4F7F\u7528
// fs.rmdir(&#39;./a&#39;, {recursive: true}, error =&gt; {
//     if (error) {
//         console.log(&#39;\u9012\u5F52\u5220\u9664\u6587\u4EF6\u5939\u5931\u8D25&#39;, error)
//         return ;
//     }
//     console.log(&#39;\u9012\u5F52\u5220\u9664\u6587\u4EF6\u5939\u6210\u529F&#39;)
// })

// \u63A8\u8350\u4F7F\u7528
fs.rm(&#39;./a&#39;, {recursive: true}, error =&gt; {
    if (error) {
        console.log(&#39;\u9012\u5F52\u5220\u9664\u6587\u4EF6\u5931\u8D25&#39;, error)
        return;
    }
    console.log(&#39;\u9012\u5F52\u5220\u9664\u6587\u4EF6\u6210\u529F&#39;)
})

//\u540C\u6B65\u9012\u5F52\u5220\u9664\u6587\u4EF6\u5939
fs.rmdirSync(&#39;./a&#39;, {recursive: true})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="_2-6-\u67E5\u770B\u8D44\u6E90\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_2-6-\u67E5\u770B\u8D44\u6E90\u72B6\u6001" aria-hidden="true">#</a> 2.6 \u67E5\u770B\u8D44\u6E90\u72B6\u6001</h3><p>\u5728 <code>Node.js</code> \u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>stat</code> \u6216 <code>statSync</code> \u6765\u67E5\u770B\u8D44\u6E90\u7684\u8BE6\u7EC6\u4FE1\u606F</p><p>\u8BED\u6CD5\uFF1A</p><ul><li><code>fs.stat(path, [options], callback)</code></li><li><code>fs.statSync(path, [options])</code></li></ul><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>path</code>:\u6587\u4EF6\u5939\u8DEF\u5F84</li><li><code>options</code>:\u9009\u9879\u914D\u7F6E\uFF08\u53EF\u9009\uFF09</li><li><code>callback</code>:\u64CD\u4F5C\u540E\u7684\u56DE\u8C03</li></ul><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.stat \u65B9\u6CD5 status \u7684\u7F29\u5199\uFF1A\u72B6\u6001
fs.stat(&#39;./\u89C2\u4E66\u6709\u611F.txt&#39;, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u64CD\u4F5C\u5931\u8D25&#39;, error)
        return;
    }
    // Stats {
    //     dev: 985301708,
    //     mode: 33206,
    //     nlink: 1,
    //     uid: 0,
    //     gid: 0,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 281474979770305,
    //     size: 92,
    //     blocks: 0,
    //     atimeMs: 1684373309132.9426,
    //     mtimeMs: 1684289136772.1648,
    //     ctimeMs: 1684289136772.1648,
    //     birthtimeMs: 1684289136770.7136,
    //     atime: 2023 - 05 - 18 T01: 28: 29.133 Z,
    //     mtime: 2023 - 05 - 17 T02: 05: 36.772 Z,
    //     ctime: 2023 - 05 - 17 T02: 05: 36.772 Z,
    //     birthtime: 2023 - 05 - 17 T02: 05: 36.771 Z
    // }
    console.log(data)
    console.log(data.isFile())
    console.log(data.isDirectory())
})

// 3.\u540C\u6B65\u83B7\u53D6\u72B6\u6001
let data = fs.statSync(&#39;./\u89C2\u4E66\u6709\u611F.txt&#39;);
console.log(data)
console.log(data.isFile())
console.log(data.isDirectory())
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u7ED3\u679C\u503C\u5BF9\u8C61\u7ED3\u6784\uFF1A</p><ul><li><code>size</code>:\u6587\u4EF6\u4F53\u79EF</li><li><code>birthtime</code>:\u521B\u5EFA\u65F6\u95F4</li><li><code>mtime</code>:\u6700\u540E\u4FEE\u6539\u65F6\u95F4</li><li><code>isFile</code>:\u68C0\u6D4B\u662F\u5426\u4E3A\u6587\u4EF6</li><li><code>isDirectory</code>:\u68C0\u6D4B\u662F\u5426\u4E3A\u6587\u4EF6\u5939</li></ul><h3 id="_2-7-\u76F8\u5BF9\u8DEF\u5F84\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-7-\u76F8\u5BF9\u8DEF\u5F84\u95EE\u9898" aria-hidden="true">#</a> 2.7 \u76F8\u5BF9\u8DEF\u5F84\u95EE\u9898</h3><p><code>fs</code> \u6A21\u5757\u5BF9\u8D44\u6E90\u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0C\u8DEF\u5F84\u7684\u5199\u6CD5\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u76F8\u5BF9\u8DEF\u5F84 <ul><li><code>./\u5EA7\u53F3\u94ED.txt</code>:\u5F53\u524D\u76EE\u5F55\u4E0B\u7684\u5EA7\u53F3\u94ED.txt</li><li><code>\u5EA7\u53F3\u94ED.txt</code>:\u7B49\u6548\u4E8E\u4E0A\u9762\u7684\u5199\u6CD5</li><li><code>../\u5EA7\u53F3\u94ED.txt</code>:\u5F53\u524D\u76EE\u5F55\u7684\u4E0A\u4E00\u7EA7\u76EE\u5F55\u4E2D\u7684\u5EA7\u53F3\u94ED.txt</li></ul></li><li>\u7EDD\u5BF9\u8DEF\u5F84 <ul><li><code>D:/Program Files</code>:<code>windows</code> \u7CFB\u7EDF\u4E0B\u7684\u7EDD\u5BF9\u8DEF\u5F84</li><li><code>/usr/bin</code>:<code>Linux</code> \u7CFB\u7EDF\u4E0B\u7684\u7EDD\u5BF9\u8DEF\u5F84</li></ul></li></ul><blockquote><p>\u76F8\u5BF9\u8DEF\u5F84\u4E2D\u6240\u8C13\u7684\u5F53\u524D\u76EE\u5F55\uFF0C\u6307\u7684\u662F<strong>\u547D\u4EE4\u884C\u7684\u5DE5\u4F5C\u76EE\u5F55</strong>\uFF0C\u800C\u5E76\u975E\u662F\u6587\u4EF6\u7684\u6240\u5728\u76EE\u5F55\u3002\u6240\u4EE5\u5F53\u547D\u4EE4\u884C\u7684\u5DE5\u4F5C\u76EE\u5F55\u4E0E\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u4E0D\u4E00\u81F4\u65F6\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E9B <code>BUG</code>\u3002</p></blockquote><h3 id="_2-8-dirname" tabindex="-1"><a class="header-anchor" href="#_2-8-dirname" aria-hidden="true">#</a> 2.8 <code>__dirname</code></h3><p><code>__dirname</code> \u4E0E <code>require</code> \u7C7B\u4F3C\uFF0C\u90FD\u662F <code>Node.js</code> \u73AF\u5883\u4E2D\u7684 &#39;\u5168\u5C40&#39; \u53D8\u91CF <code>__dirname</code> \u4FDD\u5B58\u7740<strong>\u5F53\u524D\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84</strong>\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>__dirname</code> \u4E0E\u6587\u4EF6\u540D\u62FC\u63A5\u6210\u7EDD\u5BF9\u8DEF\u5F84 \u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>let data = fs.readFileSync(__dirname + &#39;/data.txt&#39;);
console.log(data);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u4F7F\u7528 <code>fs</code> \u6A21\u5757\u7684\u65F6\u5019\uFF0C\u5C3D\u91CF\u4F7F\u7528 <code>__dirname</code> \u5C06\u8DEF\u5F84\u8F6C\u5316\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u76F8\u5BF9\u8DEF\u5F84\u4EA7\u751F\u7684 <code>Bug</code></p></blockquote><h3 id="_2-9-\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_2-9-\u7EC3\u4E60" aria-hidden="true">#</a> 2.9 \u7EC3\u4E60</h3><p>\u5B9E\u73B0\u6587\u4EF6\u590D\u5236\u7684\u529F\u80FD \u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u590D\u5236\u3010\u5EA7\u53F3\u94ED.txt\u3011
 */

// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;);
// \u5168\u5C40\u5BF9\u8C61\uFF0C\u5373 global \u5BF9\u8C61\u7684\u5C5E\u6027\uFF0C\u65E0\u987B\u58F0\u660E\u5373\u53EF\u8BBF\u95EE\u3002\u5B83\u7528\u4E8E\u63CF\u8FF0\u5F53\u524D Node \u8FDB\u7A0B\u72B6\u6001\u7684\u5BF9\u8C61\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7B80\u5355\u63A5\u53E3\u3002
const process = require(&#39;process&#39;)

// \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 readFile
// 2.\u8BFB\u53D6\u6587\u4EF6
// let data = fs.readFileSync(&#39;./\u5EA7\u53F3\u94ED.txt&#39;);

// // 3.\u5199\u5165\u6587\u4EF6
// fs.writeFileSync(&#39;./\u5EA7\u53F3\u94ED-2.txt&#39;, data);

// // \u67E5\u770B\u7CFB\u7EDF\u8017\u8D39\u5185\u5B58
// // rss: 19795968 \u5B57\u8282
// console.log(process.memoryUsage())

// \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u6D41\u5F0F\u64CD\u4F5C
// 2.\u521B\u5EFA\u6D41\u5F0F\u8BFB\u53D6
let rs = fs.createReadStream(&#39;./\u5EA7\u53F3\u94ED.txt&#39;);

// 3.\u521B\u5EFA\u6D41\u5F0F\u5199\u5165
let ws = fs.createWriteStream(&#39;./\u5EA7\u53F3\u94ED-3.txt&#39;);

// // 4.\u7ED1\u5B9A data \u4E8B\u4EF6
// rs.on(&#39;data&#39;, chunk =&gt; {
//     ws.write(chunk);
// })

// // 5.\u7ED1\u5B9A end \u4E8B\u4EF6
// rs.on(&#39;end&#39;, () =&gt; {
//     // rss: 20885504 \u5B57\u8282 \u76F8\u6BD4\u4E8E\u540C\u6B65\u7684\u65B9\u5F0F\u5360\u7528\u5185\u5B58\u4F1A\u6BD4\u8F83\u5C0F
//     console.log(process.memoryUsage())
// })

// 4.\u4F7F\u7528 pipe(\u7BA1\u9053) \u53EF\u76F4\u63A5\u590D\u5236
rs.pipe(ws)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="_3-path-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_3-path-\u6A21\u5757" aria-hidden="true">#</a> 3. <code>path</code> \u6A21\u5757</h2><p><code>path</code> \u6A21\u5757\u63D0\u4F9B\u4E86<strong>\u64CD\u4F5C\u8DEF\u5F84</strong>\u7684\u529F\u80FD\uFF0C\u6709\u5982\u4E0B\u51E0\u4E2A\u8F83\u4E3A\u5E38\u7528\u7684 <code>API</code>\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>path.resolve</td><td>\u62FC\u63A5\u89C4\u8303\u7684\u7EDD\u5BF9\u8DEF\u5F84\u5E38\u7528</td></tr><tr><td>path.sep</td><td>\u83B7\u53D6\u64CD\u4F5C\u7CFB\u7EDF\u7684\u8DEF\u5F84\u5206\u9694\u7B26</td></tr><tr><td>path.parse</td><td>\u89E3\u6790\u8DEF\u5F84\u5E76\u8FD4\u56DE\u5BF9\u8C61</td></tr><tr><td>path.basename</td><td>\u83B7\u53D6\u8DEF\u5F84\u7684\u57FA\u7840\u540D\u79F0</td></tr><tr><td>path.dirname</td><td>\u83B7\u53D6\u8DEF\u5F84\u7684\u76EE\u5F55\u540D</td></tr><tr><td>path.extname</td><td>\u83B7\u5F97\u8DEF\u5F84\u7684\u6269\u5C55\u540D</td></tr></tbody></table><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 path\u3001fs \u6A21\u5757
const path = require(&#39;path&#39;)
const fs = require(&#39;fs&#39;)

// \u5199\u5165\u6587\u4EF6
// fs.writeFileSync(__dirname + &#39;/index.html&#39;, &#39;love&#39;)
// E:\\JavaEE\\frontend\\nodejs-study\\3-path\u6A21\u5757/index.html
// console.log(__dirname + &#39;/index.html&#39;)

// \u4F7F\u7528 path \u89E3\u51B3
// E:\\JavaEE\\frontend\\nodejs-study\\3-path\u6A21\u5757\\index.html
console.log(path.resolve(__dirname, &#39;./index.html&#39;))
// E:\\JavaEE\\frontend\\nodejs-study\\3-path\u6A21\u5757\\index.html
console.log(path.resolve(__dirname, &#39;index.html&#39;))
// E:\\index.html\\test
console.log(path.resolve(__dirname, &#39;/index.html&#39;, &#39;./test&#39;))

// \u5206\u9694\u7B26
// \\ windows:\\ linux:/
console.log(path.sep)

// parse \u65B9\u6CD5 __dirname &#39;\u5168\u5C40\u53D8\u91CF&#39;
// __filename &#39;\u5168\u5C40\u53D8\u91CF&#39; \u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84
console.log(__filename)

let str = &#39;E:\\\\JavaEE\\\\frontend\\\\nodejs-study\\\\3-path\u6A21\u5757\\\\index.html&#39;;

// {
//     root: &#39;E:\\\\&#39;,
//     dir: &#39;E:\\\\JavaEE\\\\frontend\\\\nodejs-study\\\\3-path\u6A21\u5757&#39;,
//     base: &#39;index.html&#39;,
//     ext: &#39;.html&#39;,
//     name: &#39;index&#39;
// }
console.log(path.parse(str))

// index.html
console.log(path.basename(str))

// E:\\JavaEE\\frontend\\nodejs-study\\3-path\u6A21\u5757
console.log(path.dirname(str))

// .html
console.log(path.extname(str))
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="_4-http-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_4-http-\u6A21\u5757" aria-hidden="true">#</a> 4. <code>http</code> \u6A21\u5757</h2><h3 id="_4-1-\u521B\u5EFA-http-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-1-\u521B\u5EFA-http-\u670D\u52A1" aria-hidden="true">#</a> 4.1 \u521B\u5EFA <code>http</code> \u670D\u52A1</h3><h4 id="_4-1-1-\u64CD\u4F5C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u64CD\u4F5C\u6B65\u9AA4" aria-hidden="true">#</a> 4.1.1 \u64CD\u4F5C\u6B65\u9AA4</h4><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 2.\u521B\u5EFA http \u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    // response.end \u8BBE\u7F6E\u54CD\u5E94\u4F53 \u5FC5\u987B\u8981\u8FD4\u56DE\uFF0C\u4E14\u53EA\u80FD\u8FD4\u56DE\u4E00\u6B21
    // \u591A\u4E2A response.end \u62A5\u9519 Error [ERR_STREAM_WRITE_AFTER_END]: write after end
    // response.end(&quot;hello world&quot;)
    // response.end(&quot;hello world&quot;)

    // \u89E3\u51B3\u4E2D\u6587\u4E71\u7801
    response.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
    response.end(&#39;\u4F60\u597D\uFF0C\u4E16\u754C&#39;)
})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3
server.listen(9000, () =&gt; {
    console.log(&#39;http \u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote><p><code>http.createServer</code> \u91CC\u7684\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A\uFF1A\u5F53\u63A5\u6536\u5230 <code>http</code> \u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u6267\u884C</p></blockquote><h4 id="_4-1-2-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u6D4B\u8BD5" aria-hidden="true">#</a> 4.1.2 \u6D4B\u8BD5</h4><p>\u6D4F\u89C8\u5668\u8BF7\u6C42\u5BF9\u5E94\u7AEF\u53E3 <code>http://127.0.0.1:9000</code></p><h4 id="_4-1-3-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 4.1.3 \u6CE8\u610F\u4E8B\u9879</h4><ul><li>\u547D\u4EE4\u884C <code>ctrl + c</code> \u505C\u6B62\u670D\u52A1</li><li>\u5F53\u670D\u52A1\u542F\u52A8\u540E\uFF0C\u66F4\u65B0\u4EE3\u7801\u5FC5\u987B\u91CD\u542F\u670D\u52A1\u624D\u80FD\u751F\u6548</li><li>\u54CD\u5E94\u5185\u5BB9\u4E2D\u6587\u4E71\u7801\u7684\u89E3\u51B3\u529E\u6CD5<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>response.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>\u7AEF\u53E3\u53F7\u88AB\u5360\u7528 <ul><li>\u5173\u95ED\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u76D1\u542C\u7AEF\u53E3\u7684\u670D\u52A1</li><li>\u4FEE\u6539\u5176\u4ED6\u7AEF\u53E3\u53F7</li><li>\u5982\u679C\u7AEF\u53E3\u88AB\u5176\u4ED6\u7A0B\u5E8F\u5360\u7528\uFF0C\u53EF\u4EE5\u4F7F\u7528<strong>\u8D44\u6E90\u76D1\u89C6\u5668</strong>\u627E\u5230\u5360\u7528\u7AEF\u53E3\u7684\u7A0B\u5E8F\uFF0C\u7136\u540E\u4F7F\u7528<strong>\u4EFB\u52A1\u7BA1\u7406\u5668</strong>\u5173\u95ED\u5BF9\u5E94\u7684\u7A0B\u5E8F</li></ul></li></ul><h3 id="_4-2-\u83B7\u53D6-http-\u8BF7\u6C42\u62A5\u6587" tabindex="-1"><a class="header-anchor" href="#_4-2-\u83B7\u53D6-http-\u8BF7\u6C42\u62A5\u6587" aria-hidden="true">#</a> 4.2 \u83B7\u53D6 <code>http</code> \u8BF7\u6C42\u62A5\u6587</h3><p>\u60F3\u8981\u83B7\u53D6\u8BF7\u6C42\u7684\u6570\u636E\uFF0C\u9700\u8981\u901A\u8FC7 <code>request</code> \u5BF9\u8C61</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>request.method</td><td>\u8BF7\u6C42\u65B9\u6CD5</td></tr><tr><td>request.httpVersion</td><td>\u8BF7\u6C42\u7248\u672C</td></tr><tr><td>request.url</td><td>\u8BF7\u6C42\u8DEF\u5F84</td></tr><tr><td>require(&#39;url&#39;).parse(request.url).pathname</td><td>URL \u8DEF\u5F84</td></tr><tr><td>require(&#39;url&#39;).parse(request.url, true).query</td><td>URL \u67E5\u8BE2\u5B57\u7B26\u4E32</td></tr><tr><td>request.headers</td><td>\u8BF7\u6C42\u5934</td></tr><tr><td>request.on(&#39;data&#39;, function(chunk){})<br>request.on(&#39;end&#39;, function(){});</td><td>\u8BF7\u6C42\u4F53</td></tr></tbody></table><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li><code>request.url</code> \u53EA\u80FD\u83B7\u53D6\u8DEF\u5F84\u4EE5\u53CA\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u65E0\u6CD5\u83B7\u53D6 <code>URL</code> \u4E2D\u7684\u57DF\u540D\u4EE5\u53CA\u534F\u8BAE\u7684\u5185\u5BB9</li><li><code>request.headers</code> \u5C06\u8BF7\u6C42\u4FE1\u606F\u8F6C\u5316\u6210\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u5C06\u5C5E\u6027\u540D\u90FD\u8F6C\u5316\u6210\u4E86\u300E\u5C0F\u5199\u300F</li><li>\u5173\u4E8E\u8DEF\u5F84\uFF1A\u5982\u679C\u8BBF\u95EE\u7F51\u7AD9\u7684\u65F6\u5019\uFF0C\u53EA\u586B\u5199\u4E86 <code>IP</code> \u5730\u5740\u6216\u8005\u662F\u57DF\u540D\u4FE1\u606F\uFF0C\u6B64\u65F6\u8BF7\u6C42\u7684\u8DEF\u5F84\u4E3A\u300E/\u300F</li><li>\u5173\u4E8E <code>favicon.ico</code>\uFF1A\u8FD9\u4E2A\u8BF7\u6C42\u662F\u5C5E\u4E8E\u6D4F\u89C8\u5668\u81EA\u52A8\u53D1\u9001\u7684\u8BF7\u6C42</li></ul><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {
    // \u83B7\u53D6\u8BF7\u6C42\u7684\u65B9\u6CD5
    console.log(request.method)
    // \u83B7\u53D6\u8BF7\u6C42\u7684 url
    console.log(request.url)
    // \u83B7\u53D6 http \u534F\u8BAE\u7248\u672C\u53F7
    console.log(request.httpVersion)
    // \u83B7\u53D6\u8BF7\u6C42\u5934
    console.log(request.headers)
    // \u83B7\u53D6\u8BF7\u6C42\u4E3B\u673A\u5730\u5740
    console.log(request.headers.host)

    response.end(&quot;hello world&quot;)
})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    // 1.\u58F0\u660E\u4E00\u4E2A\u53D8\u91CF
    let body = &#39;&#39;

    // 2.\u7ED1\u5B9A data \u4E8B\u4EF6
    request.on(&#39;data&#39;, chunk =&gt; {
        body += chunk
    })

    // 3.\u7ED1\u5B9A end \u4E8B\u4EF6
    request.on(&#39;end&#39;, () =&gt; {
        console.log(body)
        response.end(&quot;hello world&quot;)
    })

})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 1.\u5BFC\u5165 url \u6A21\u5757
const url = require(&#39;url&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {
    // request: http://127.0.0.1:9000/search?keyword=123&amp;username=chen

    // 2.\u89E3\u6790 request.url
    // let res1 = url.parse(request.url)
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: &#39;?keyword=123&amp;username=chen&#39;,
    //     query: &#39;keyword=123&amp;username=chen&#39;,
    //     pathname: &#39;/search&#39;,
    //     path: &#39;/search?keyword=123&amp;username=chen&#39;,
    //     href: &#39;/search?keyword=123&amp;username=chen&#39;
    // }
    // console.log(res1)


    // let res2 = url.parse(request.url, true)
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: &#39;?keyword=123&amp;username=chen&#39;,
    //     query: [Object: null prototype] {
    //         keyword: &#39;123&#39;,
    //         username: &#39;chen&#39;
    //     },
    //     pathname: &#39;/search&#39;,
    //     path: &#39;/search?keyword=123&amp;username=chen&#39;,
    //     href: &#39;/search?keyword=123&amp;username=chen&#39;
    // }
    // console.log(res2)

    let res = url.parse(request.url, true)
    // \u8BF7\u6C42\u8DEF\u5F84
    // /search
    console.log(res.pathname)
    // \u67E5\u8BE2\u5B57\u7B26\u4E32
    // 123
    console.log(res.query.keyword)

    response.end(&#39;hello world&#39;)
})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {
    // request: http://127.0.0.1:9000/search?keyword=123&amp;username=chen

    // \u7B2C\u4E8C\u4E2A\u53C2\u6570\u8981\u5199\u5B8C\u6574 http://127.0.0.1  \u53EA\u5199 ip \u4F1A\u62A5\u9519
    let url = new URL(request.url, &#39;http://127.0.0.1&#39;)

    // URL {
    //     href: &#39;http://127.0.0.1/search?keyword=123&amp;username=chen&#39;,
    //     origin: &#39;http://127.0.0.1&#39;,
    //     protocol: &#39;http:&#39;,
    //     username: &#39;&#39;,
    //     password: &#39;&#39;,
    //     host: &#39;127.0.0.1&#39;,
    //     hostname: &#39;127.0.0.1&#39;,
    //     port: &#39;&#39;,
    //     pathname: &#39;/search&#39;,
    //     search: &#39;?keyword=123&amp;username=chen&#39;,
    //     searchParams: URLSearchParams {
    //         &#39;keyword&#39; =&gt; &#39;123&#39;, &#39;username&#39; =&gt; &#39;chen&#39;
    //     },
    //     hash: &#39;&#39;
    // }
    // console.log(url)

    // \u8BF7\u6C42\u8DEF\u5F84
    console.log(url.pathname)

    // \u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570
    console.log(url.searchParams.get(&#39;keyword&#39;))

    response.end(&#39;hello world&#39;)
})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="_4-3-\u8BBE\u7F6E-http-\u54CD\u5E94\u62A5\u6587" tabindex="-1"><a class="header-anchor" href="#_4-3-\u8BBE\u7F6E-http-\u54CD\u5E94\u62A5\u6587" aria-hidden="true">#</a> 4.3 \u8BBE\u7F6E <code>http</code> \u54CD\u5E94\u62A5\u6587</h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>response.statusCode</td><td>\u8BBE\u7F6E\u54CD\u5E94\u72B6\u6001\u7801</td></tr><tr><td>response.statusMessage</td><td>\u8BBE\u7F6E\u54CD\u5E94\u72B6\u6001\u63CF\u8FF0</td></tr><tr><td>response.setHeader(&#39;\u952E\u540D&#39;, &#39;\u952E\u503C&#39;)</td><td>\u8BBE\u7F6E\u54CD\u5E94\u5934\u4FE1\u606F</td></tr><tr><td>response.write(&#39;xx&#39;)response.end(&#39;xxx&#39;)</td><td>\u8BBE\u7F6E\u54CD\u5E94\u4F53</td></tr></tbody></table><p><code>write</code> \u548C <code>end</code> \u7684\u4E24\u79CD\u4F7F\u7528\u60C5\u51B5\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.write \u548C end \u7684\u7ED3\u5408\u4F7F\u7528 \u54CD\u5E94\u4F53\u76F8\u5BF9\u5206\u6563
response.write(&#39;xx&#39;);
response.write(&#39;xx&#39;);
response.write(&#39;xx&#39;);

 //\u6BCF\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5728\u5904\u7406\u7684\u65F6\u5019\u5FC5\u987B\u8981\u6267\u884C end \u65B9\u6CD5\uFF0C\u4E14\u53EA\u80FD\u6267\u884C\u4E00\u6B21
response.end();

// 2.\u5355\u72EC\u4F7F\u7528 end \u65B9\u6CD5 \u54CD\u5E94\u4F53\u76F8\u5BF9\u96C6\u4E2D
response.end(&#39;xxx&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    // 1.\u8BBE\u7F6E\u54CD\u5E94\u72B6\u6001\u7801
    // response.statusCode = 200
    // response.statusCode = 404

    // 2.\u8BBE\u7F6E\u54CD\u5E94\u4FE1\u606F \u4E0D\u5E38\u7528
    // response.statusMessage = &#39;hello world&#39;

    // 3.\u8BBE\u7F6E\u54CD\u5E94\u5934
    response.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
    response.setHeader(&#39;Server&#39;, &#39;Node.js&#39;)
    response.setHeader(&#39;myHeader&#39;, &#39;myHeader&#39;)
    response.setHeader(&#39;test&#39;, [&#39;love&#39;, &#39;love&#39;, &#39;love&#39;])

    // 4.\u8BBE\u7F6E\u54CD\u5E94\u4F53
    response.write(&#39;love\\r\\n&#39;)
    response.write(&#39;love\\r\\n&#39;)
    response.write(&#39;love\\r\\n&#39;)
    response.write(&#39;love\\r\\n&#39;)

    response.end(&#39;hello world&#39;)

})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="_4-4-\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_4-4-\u7EC3\u4E60" aria-hidden="true">#</a> 4.4 \u7EC3\u4E60</h3><h4 id="_4-4-1-http-\u8BF7\u6C42\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_4-4-1-http-\u8BF7\u6C42\u7EC3\u4E60" aria-hidden="true">#</a> 4.4.1 <code>http</code> \u8BF7\u6C42\u7EC3\u4E60</h4><p>\u9700\u6C42\uFF1A \u5F53\u8BF7\u6C42\u65B9\u5F0F\u4E3A <code>get</code> \u8BF7\u6C42\u65F6\uFF0C\u8BF7\u6C42\u8DEF\u5F84\u4E3A <code>/login</code> \u8FD4\u56DE <code>login</code> \u5F53\u8BF7\u6C42\u65B9\u5F0F\u4E3A <code>get</code> \u8BF7\u6C42\u65F6\uFF0C\u8BF7\u6C42\u8DEF\u5F84\u4E3A <code>/register</code> \u8FD4\u56DE <code>register</code></p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u5F53\u8BF7\u6C42\u65B9\u5F0F\u4E3A get \u8BF7\u6C42\u65F6\uFF0C\u8BF7\u6C42\u8DEF\u5F84\u4E3A /login \u8FD4\u56DE login
 *  \u5F53\u8BF7\u6C42\u65B9\u5F0F\u4E3A get \u8BF7\u6C42\u65F6\uFF0C\u8BF7\u6C42\u8DEF\u5F84\u4E3A /register \u8FD4\u56DE register
 */

// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    // \u8BF7\u6C42\u65B9\u5F0F
    let { method } = request

    // \u8BF7\u6C42\u8DEF\u5F84
    let { pathname } = new URL(request.url, &#39;http://127.0.0.1&#39;)

    if (method === &#39;GET&#39; &amp;&amp; pathname === &#39;/login&#39;) {
        response.end(&#39;login&#39;)
    } else if (method === &#39;GET&#39; &amp;&amp; pathname === &#39;/register&#39;) {
        response.end(&#39;register&#39;)
    } else {
        response.end(&#39;hello world&#39;)
    }
})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h4 id="_4-4-1-http-\u54CD\u5E94\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#_4-4-1-http-\u54CD\u5E94\u7EC3\u4E60" aria-hidden="true">#</a> 4.4.1 <code>http</code> \u54CD\u5E94\u7EC3\u4E60</h4><p>\u9700\u6C42\uFF1A \u56DE\u4E00\u4E2A 4 \u884C 3 \u5217\u7684\u8868\u683C\uFF0C\u4E14\u8981\u6C42\u8868\u683C\u6709\u9694\u884C\u6362\u8272\u6548\u679C\uFF0C\u4E14\u70B9\u51FB\u5355\u5143\u683C\u80FD\u9AD8\u4EAE\u663E\u793A</p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u8FD4\u56DE\u4E00\u4E2A4\u884C3\u5217\u7684\u8868\u683C\uFF0C\u4E14\u8981\u6C42\u8868\u683C\u6709\u9694\u884C\u6362\u8272\u6548\u679C\uFF0C\u4E14\u70B9\u51FB\u5355\u5143\u683C\u80FD\u9AD8\u4EAE\u663E\u793A
 */


// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    response.end(\`
    &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;

        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
            &lt;title&gt;Document&lt;/title&gt;
            &lt;style&gt;
                td {
                    padding: 20px 40px;
                }

                table tr:nth-child(odd) {
                    background: rgb(179, 165, 201);
                }

                table tr:nth-child(even) {
                    background: #fcb;
                }

                table,
                td {
                    border-collapse: collapse;
                }
            &lt;/style&gt;
        &lt;/head&gt;

        &lt;body&gt;
            &lt;table border=&quot;1&quot;&gt;
                &lt;tr&gt;
                    &lt;td&gt;&lt;/td&gt;
                    &lt;td&gt;&lt;/td&gt;
                    &lt;td&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;&lt;/td&gt;
                    &lt;td&gt;&lt;/td&gt;
                    &lt;td&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;&lt;/td&gt;
                    &lt;td&gt;&lt;/td&gt;
                    &lt;td&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;&lt;/td&gt;
                    &lt;td&gt;&lt;/td&gt;
                    &lt;td&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;
            &lt;script&gt;
                //\u83B7\u53D6\u6240\u6709\u7684 td
                let tds = document.querySelectorAll(&#39;td&#39;);
                //\u904D\u5386
                tds.forEach(item =&gt; {
                    item.onclick = function () {
                        this.style.background = &#39;#222&#39;;
                    }
                })
            &lt;/script&gt;
        &lt;/body&gt;

        &lt;/html&gt;
    \`)

})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div><p>\u4EE3\u7801\u4F18\u5316\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u8FD4\u56DE\u4E00\u4E2A4\u884C3\u5217\u7684\u8868\u683C\uFF0C\u4E14\u8981\u6C42\u8868\u683C\u6709\u9694\u884C\u6362\u8272\u6548\u679C\uFF0C\u4E14\u70B9\u51FB\u5355\u5143\u683C\u80FD\u9AD8\u4EAE\u663E\u793A
 */


// 1.\u5F15\u5165 http \u6A21\u5757
const http = require(&#39;http&#39;)

// 1.\u5F15\u5165 fs \u6A21\u5757
const fs = require(&#39;fs&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    // 2.\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9
    let file = fs.readFileSync(__dirname + &#39;/10-table.html&#39;)

    response.end(file)

})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="_4-5-\u9759\u6001\u8D44\u6E90\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_4-5-\u9759\u6001\u8D44\u6E90\u670D\u52A1" aria-hidden="true">#</a> 4.5 \u9759\u6001\u8D44\u6E90\u670D\u52A1</h3><blockquote><p>\u9759\u6001\u8D44\u6E90\u662F\u6307<strong>\u5185\u5BB9\u957F\u65F6\u95F4\u4E0D\u53D1\u751F\u6539\u53D8\u7684\u8D44\u6E90</strong>\uFF0C\u4F8B\u5982\u56FE\u7247\u3001\u89C6\u9891\u3001<code>CSS</code> \u6587\u4EF6\u3001<code>JS</code> \u6587\u4EF6\u3001<code>HTML</code> \u6587\u4EF6\u3001\u5B57\u4F53\u6587\u4EF6\u7B49\u3002</p></blockquote><blockquote><p>\u52A8\u6001\u8D44\u6E90\u662F\u6307<strong>\u5185\u5BB9\u7ECF\u5E38\u66F4\u65B0\u7684\u8D44\u6E90</strong>\uFF0C\u4F8B\u5982\u767E\u5EA6\u9996\u9875\u3001\u7F51\u6613\u9996\u9875\u3001\u4EAC\u4E1C\u641C\u7D22\u5217\u8868\u9875\u9762\u7B49\u3002</p></blockquote><h4 id="_4-5-1-\u7F51\u9875\u4E2D\u7684-url" tabindex="-1"><a class="header-anchor" href="#_4-5-1-\u7F51\u9875\u4E2D\u7684-url" aria-hidden="true">#</a> 4.5.1 \u7F51\u9875\u4E2D\u7684 <code>URL</code></h4><blockquote><p>\u7F51\u9875\u4E2D\u7684 <code>URL</code> \u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u7C7B\uFF1A\u76F8\u5BF9\u8DEF\u5F84\u4E0E\u7EDD\u5BF9\u8DEF\u5F84</p></blockquote><p>\u7EDD\u5BF9\u8DEF\u5F84\u53EF\u9760\u6027\u5F3A\uFF0C\u800C\u4E14\u76F8\u5BF9\u5BB9\u6613\u7406\u89E3\uFF0C\u5728\u9879\u76EE\u4E2D\u8FD0\u7528\u8F83\u591A</p><table><thead><tr><th>\u5F62\u5F0F</th><th>\u7279\u70B9</th></tr></thead><tbody><tr><td>http://xxx.com/web</td><td>\u76F4\u63A5\u5411\u76EE\u6807\u8D44\u6E90\u53D1\u9001\u8BF7\u6C42\uFF0C\u5BB9\u6613\u7406\u89E3\uFF0C\u7F51\u7AD9\u7684\u5916\u94FE\u4F1A\u7528\u5230\u6B64\u5F62\u5F0F</td></tr><tr><td>//xxx.com/web</td><td>\u4E0E\u9875\u9762 <code>URL</code> \u7684\u534F\u8BAE\u62FC\u63A5\u5F62\u6210\u5B8C\u6574 <code>URL</code> \u518D\u53D1\u9001\u8BF7\u6C42\uFF0C\u5927\u578B\u7F51\u7AD9\u7528\u7684\u6BD4\u8F83\u591A</td></tr><tr><td>/web</td><td>\u4E0E\u9875\u9762 <code>URL</code> \u7684\u534F\u8BAE\u3001\u4E3B\u673A\u540D\u3001\u7AEF\u53E3\u62FC\u63A5\u5F62\u6210\u5B8C\u6574 <code>URL</code> \u518D\u53D1\u9001\u8BF7\u6C42\uFF0C\u4E2D\u5C0F\u578B\u7F51\u7AD9</td></tr></tbody></table><p>\u76F8\u5BF9\u8DEF\u5F84\u5728\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u9700\u8981\u4E0E\u5F53\u524D\u9875\u9762 <code>URL</code> \u8DEF\u5F84\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5F97\u5230\u5B8C\u6574 <code>URL</code> \u540E\uFF0C\u518D\u53D1\u9001\u8BF7\u6C42 \u4F8B\u5982\u5F53\u524D\u7F51\u9875 <code>URL</code> \u4E3A <code>http://www.xxx.com/course/h5.html</code></p><table><thead><tr><th>\u5F62\u5F0F</th><th>\u6700\u7EC8\u7684 <code>URL</code></th></tr></thead><tbody><tr><td>./css/app.css</td><td>http://www.xxx.com/course/css/app.css</td></tr><tr><td>js/app.js</td><td>http://www.xxx.com/course/js/app.js</td></tr><tr><td>../img/logo.png</td><td>http://www.xxx.com/img/logo.png</td></tr><tr><td>../../mp4/show.mp4</td><td>http://www.atguigu.com/mp4/show.mp4</td></tr></tbody></table><h4 id="_4-5-2-\u8BBE\u7F6E\u8D44\u6E90\u7C7B\u578B-mime-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_4-5-2-\u8BBE\u7F6E\u8D44\u6E90\u7C7B\u578B-mime-\u7C7B\u578B" aria-hidden="true">#</a> 4.5.2 \u8BBE\u7F6E\u8D44\u6E90\u7C7B\u578B\uFF08<code>mime</code> \u7C7B\u578B\uFF09</h4><blockquote><p>\u5A92\u4F53\u7C7B\u578B\uFF08\u901A\u5E38\u79F0\u4E3A <code>Multipurpose Internet Mail Extensions</code> \u6216 <code>MIME</code> \u7C7B\u578B \uFF09\u662F\u4E00\u79CD\u6807\u51C6\uFF0C\u7528\u6765\u8868\u793A\u6587\u6863\u3001\u6587\u4EF6\u6216\u5B57\u8282\u6D41\u7684\u6027\u8D28\u548C\u683C\u5F0F\u3002</p></blockquote><p><code>mime</code> \u7C7B\u578B\u7ED3\u6784\uFF1A <code>[type]/[subType]</code></p><p>\u4F8B\u5982\uFF1A <code>text/html</code> <code>text/css</code> <code>image/jpeg</code> <code>image/png</code> <code>application/json</code></p><p><code>http</code> \u670D\u52A1\u53EF\u4EE5\u8BBE\u7F6E\u54CD\u5E94\u5934 <code>Content-Type</code> \u6765\u8868\u660E\u54CD\u5E94\u4F53\u7684 <code>mime</code> \u7C7B\u578B\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6839\u636E\u8BE5\u7C7B\u578B\u51B3\u5B9A\u5982\u4F55\u5904\u7406\u8D44\u6E90 \u4E0B\u9762\u662F\u5E38\u89C1\u6587\u4EF6\u5BF9\u5E94\u7684 <code>mime</code> \u7C7B\u578B\uFF1A</p><div class="language-Json ext-Json line-numbers-mode"><pre class="language-Json"><code>{
    html: &#39;text/html&#39;,
    css: &#39;text/css&#39;,
    js: &#39;text/javascript&#39;,
    png: &#39;image/png&#39;,
    jpg: &#39;image/jpeg&#39;,
    gif: &#39;image/gif&#39;,
    mp4: &#39;video/mp4&#39;,
    mp3: &#39;audio/mpeg&#39;,
    json: &#39;application/json&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>\u8BF4\u660E\uFF1A\u5BF9\u4E8E\u672A\u77E5\u7684\u8D44\u6E90\u7C7B\u578B\uFF0C\u53EF\u4EE5\u9009\u62E9 <code>application/octet-stream</code> \u7C7B\u578B\uFF0C\u6D4F\u89C8\u5668\u5728\u9047\u5230\u8BE5\u7C7B\u578B\u7684\u54CD\u5E94\u65F6\uFF0C\u4F1A\u5BF9\u54CD\u5E94\u4F53\u5185\u5BB9\u8FDB\u884C\u72EC\u7ACB\u5B58\u50A8\uFF0C\u4E5F\u5C31\u662F<strong>\u4E0B\u8F7D</strong>\u3002</p></blockquote><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u6839\u636E\u4E0D\u540C\u7684\u8BF7\u6C42\u8DEF\u5F84\uFF0C\u8FD4\u56DE\u4E0D\u540C\u7684\u6587\u4EF6
 */

// 1.\u5F15\u5165\u6A21\u5757
const http = require(&#39;http&#39;)
const fs = require(&#39;fs&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    // \u83B7\u53D6\u8BF7\u6C42\u8DEF\u5F84
    let { pathname } = new URL(request.url, &#39;https://127.0.0.1:9000&#39;)
    if (pathname === &#39;/&#39;) {
        // \u83B7\u53D6\u8981\u54CD\u5E94\u7684\u6587\u4EF6
        let data = fs.readFileSync(__dirname + &#39;/11-table.html&#39;)
        // \u8BBE\u7F6E\u54CD\u5E94
        response.end(data)
    } else if (pathname === &#39;/index.css&#39;) {
        // \u83B7\u53D6\u8981\u54CD\u5E94\u7684\u6587\u4EF6
        let data = fs.readFileSync(__dirname + &#39;/index.css&#39;)
        // \u8BBE\u7F6E\u54CD\u5E94
        response.end(data)
    } else if (pathname === &#39;/index.js&#39;) {
        // \u83B7\u53D6\u8981\u54CD\u5E94\u7684\u6587\u4EF6
        let data = fs.readFileSync(__dirname + &#39;/index.js&#39;)
        // \u8BBE\u7F6E\u54CD\u5E94
        response.end(data)
    } else {
        response.end(\`&lt;h1&gt;404 Not Found&lt;/h1&gt;\`)
    }
})

// 3.\u542F\u52A8\u670D\u52A1\uFF0C\u5E76\u76D1\u542C\u7AEF\u53E3\u2018
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u4EE3\u7801\u4F18\u5316\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u521B\u5EFA\u4E00\u4E2A HTTP \u670D\u52A1\uFF0C\u7AEF\u53E3\u4E3A 9000\uFF0C\u6EE1\u8DB3\u5982\u4E0B\u9700\u6C42
 *      GET  /index.html        \u54CD\u5E94  page/index.html \u7684\u6587\u4EF6\u5185\u5BB9
 *      GET  /css/app.css       \u54CD\u5E94  page/css/app.css \u7684\u6587\u4EF6\u5185\u5BB9
 *      GET  /images/logo.png   \u54CD\u5E94  page/images/logo.png \u7684\u6587\u4EF6\u5185\u5BB9
 */

// 1.\u5F15\u5165\u6A21\u5757
const http = require(&#39;http&#39;)
const fs = require(&#39;fs&#39;)
const path = require(&#39;path&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    // \u83B7\u53D6\u6587\u4EF6\u6839\u8DEF\u5F84
    let root = path.resolve(__dirname + &#39;/page&#39;)
    // \u83B7\u53D6\u6587\u4EF6\u8DEF\u5F84
    let { pathname } = new URL(request.url, &#39;https://127.0.0.1:9000&#39;)
    // \u62FC\u63A5\u6587\u4EF6\u8DEF\u5F84
    let filePath = root + pathname

    // \u83B7\u53D6\u6587\u4EF6
    fs.readFile(filePath, (error, data) =&gt; {
        // \u8BBE\u7F6E\u5B57\u7B26\u96C6\uFF0C\u89E3\u51B3\u6253\u5F00\u6587\u4EF6\u4E2D\u6587\u4E71\u7801\u7684\u95EE\u9898
        response.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)

        if (error) {
            response.end(&#39;\u8BFB\u53D6\u6587\u4EF6\u9519\u8BEF&#39;)
        }

        response.end(data)
        return;
    })
})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>\u4EE3\u7801\u4F18\u5316\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u521B\u5EFA\u4E00\u4E2A HTTP \u670D\u52A1\uFF0C\u7AEF\u53E3\u4E3A 9000\uFF0C\u6EE1\u8DB3\u5982\u4E0B\u9700\u6C42
 *      GET  /index.html        \u54CD\u5E94  page/index.html \u7684\u6587\u4EF6\u5185\u5BB9
 *      GET  /css/app.css       \u54CD\u5E94  page/css/app.css \u7684\u6587\u4EF6\u5185\u5BB9
 *      GET  /images/logo.png   \u54CD\u5E94  page/images/logo.png \u7684\u6587\u4EF6\u5185\u5BB9
 *  \u6839\u636E\u4E0D\u540C\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u8FD4\u56DE\u4E0D\u540C\u7684\u7C7B\u578B
 */

// 1.\u5F15\u5165\u6A21\u5757
const http = require(&#39;http&#39;)
const fs = require(&#39;fs&#39;)
const path = require(&#39;path&#39;)

// \u58F0\u660E\u4E00\u4E2A\u53D8\u91CF
let mimes = {
    html: &#39;text/html&#39;,
    css: &#39;text/css&#39;,
    js: &#39;text/javascript&#39;,
    png: &#39;image/png&#39;,
    jpg: &#39;image/jpeg&#39;,
    gif: &#39;image/gif&#39;,
    mp4: &#39;video/mp4&#39;,
    mp3: &#39;audio/mpeg&#39;,
    json: &#39;application/json&#39;
}

// 2.\u521B\u5EFA\u670D\u52A1
const server = http.createServer((request, response) =&gt; {

    // \u83B7\u53D6\u6587\u4EF6\u6839\u8DEF\u5F84
    let root = path.resolve(__dirname + &#39;/page&#39;)
    // \u83B7\u53D6\u6587\u4EF6\u8DEF\u5F84
    let {
        pathname
    } = new URL(request.url, &#39;https://127.0.0.1:9000&#39;)
    // \u62FC\u63A5\u6587\u4EF6\u8DEF\u5F84
    let filePath = root + pathname

    // \u83B7\u53D6\u6587\u4EF6
    fs.readFile(filePath, (error, data) =&gt; {

        if (error) {
            // \u8BBE\u7F6E\u5B57\u7B26\u96C6\uFF0C\u89E3\u51B3\u6253\u5F00\u6587\u4EF6\u4E2D\u6587\u4E71\u7801\u7684\u95EE\u9898
            response.setHeader(&#39;content-type&#39;, &#39;text/html;charset=utf-8&#39;)
            switch(error.code) {
                case &#39;ENOENT&#39;:
                    response.statusCode = 404
                    response.end(\`&lt;h1&gt;404 Not Found&lt;/h1&gt;\`)
                    break;
                case &#39;EPERM&#39;:
                    response.statusCode = 403
                    response.end(\`&lt;h1&gt;403 Forbidden&lt;/h1&gt;\`)
                    break;
                default:
                    response.statusCode = 500
                    response.end(\`&lt;h1&gt;500 Internal &lt;/h1&gt;\`)
                    break;
            }
            return;
        }

        // \u83B7\u53D6\u6587\u4EF6\u540E\u7F00
        let ext = path.extname(filePath).slice(1)
        // \u83B7\u53D6\u5BF9\u5E94\u7684\u7C7B\u578B
        let type = mimes[ext]
        if (type) {
            // \u5339\u914D\u5230\u4E86
            if (ext === &#39;html&#39;) {
                response.setHeader(&#39;content-type&#39;, type + &#39;;charset=utf-8&#39;)
            } else {
                response.setHeader(&#39;content-type&#39;, type)
            }
        } else {
            // \u6CA1\u6709\u5339\u914D\u5230
            // \u8FD9\u79CD\u8FD4\u56DE\u683C\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u4E0B\u8F7D\u6548\u679C
            response.setHeader(&#39;content-type&#39;, &#39;application/octet-stream&#39;)
        }

        response.end(data)
    })
})

// 3.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3
server.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br></div></div><h4 id="_4-5-3-get-\u548C-post-\u8BF7\u6C42\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_4-5-3-get-\u548C-post-\u8BF7\u6C42\u7684\u533A\u522B" aria-hidden="true">#</a> 4.5.3 <code>GET</code> \u548C <code>POST</code> \u8BF7\u6C42\u7684\u533A\u522B</h4><ul><li><code>GET</code> \u548C <code>POST</code> \u662F <code>http</code> \u534F\u8BAE\u8BF7\u6C42\u7684\u4E24\u79CD\u65B9\u5F0F\u3002</li><li><code>GET</code> \u4E3B\u8981\u7528\u6765\u83B7\u53D6\u6570\u636E\uFF0C<code>POST</code> \u4E3B\u8981\u7528\u6765\u63D0\u4EA4\u6570\u636E</li><li><code>GET</code> \u5E26\u53C2\u6570\u8BF7\u6C42\u662F\u5C06\u53C2\u6570\u7F00\u5230 <code>URL</code> \u4E4B\u540E\uFF0C\u5728\u5730\u5740\u680F\u4E2D\u8F93\u5165 <code>URL</code> \u8BBF\u95EE\u7F51\u7AD9\u5C31\u662F <code>GET</code> \u8BF7\u6C42\uFF0C<code>POST</code> \u5E26\u53C2\u6570\u8BF7\u6C42\u662F\u5C06\u53C2\u6570\u653E\u5230\u8BF7\u6C42\u4F53\u4E2D</li><li><code>POST</code> \u8BF7\u6C42\u76F8\u5BF9 <code>GET</code> \u5B89\u5168\u4E00\u4E9B\uFF0C\u56E0\u4E3A\u5728\u6D4F\u89C8\u5668\u4E2D\u53C2\u6570\u4F1A\u66B4\u9732\u5728\u5730\u5740\u680F</li><li><code>GET</code> \u8BF7\u6C42\u5927\u5C0F\u6709\u9650\u5236\uFF0C\u4E00\u822C\u4E3A <code>2K</code>\uFF0C\u800C <code>POST</code> \u8BF7\u6C42\u5219\u6CA1\u6709\u5927\u5C0F\u9650\u5236</li></ul><h2 id="_5-\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#_5-\u6A21\u5757\u5316" aria-hidden="true">#</a> 5. \u6A21\u5757\u5316</h2><h3 id="_5-1-\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_5-1-\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> 5.1 \u57FA\u7840\u6982\u5FF5</h3><blockquote><p>\u6A21\u5757\u5316\uFF1A\u5C06\u4E00\u4E2A\u590D\u6742\u7684\u7A0B\u5E8F\u6587\u4EF6\u4F9D\u636E\u4E00\u5B9A\u89C4\u5219\uFF08\u89C4\u8303\uFF09\u62C6\u5206\u6210\u591A\u4E2A\u6587\u4EF6\u7684\u8FC7\u7A0B\u79F0\u4E4B\u4E3A<strong>\u6A21\u5757\u5316</strong>\u3002</p></blockquote><blockquote><p>\u6A21\u5757\uFF1A\u62C6\u5206\u51FA\u7684\u6BCF\u4E2A\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u6A21\u5757\u7684\u5185\u90E8\u6570\u636E\u662F\u79C1\u6709\u7684\uFF0C\u4E0D\u8FC7\u6A21\u5757\u53EF\u4EE5\u66B4\u9732\u5185\u90E8\u6570\u636E\u4EE5\u4FBF\u5176\u4ED6\u6A21\u5757\u4F7F\u7528</p></blockquote><blockquote><p>\u6A21\u5757\u5316\u9879\u76EE\uFF1A\u7F16\u7801\u65F6\u662F\u6309\u7167\u6A21\u5757\u4E00\u4E2A\u4E00\u4E2A\u7F16\u7801\u7684\uFF0C \u6574\u4E2A\u9879\u76EE\u5C31\u662F\u4E00\u4E2A\u6A21\u5757\u5316\u7684\u9879\u76EE</p></blockquote><p>\u6A21\u5757\u5316\u597D\u5904\uFF1A</p><ul><li>\u9632\u6B62\u547D\u540D\u51B2\u7A81</li><li>\u9AD8\u590D\u7528\u6027</li><li>\u9AD8\u7EF4\u62A4\u6027</li></ul><h3 id="_5-2-\u6A21\u5757\u66B4\u9732" tabindex="-1"><a class="header-anchor" href="#_5-2-\u6A21\u5757\u66B4\u9732" aria-hidden="true">#</a> 5.2 \u6A21\u5757\u66B4\u9732</h3><p>\u6A21\u5757\u66B4\u9732\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A</p><ul><li><code>module.exports = value</code></li><li><code>exports.name = value</code></li></ul><blockquote><p>\u8BF4\u660E\uFF1A</p><ul><li><code>module.exports</code> \u53EF\u4EE5\u66B4\u9732\u4EFB\u610F\u6570\u636E\u548C\u65B9\u6CD5</li><li>\u4E0D\u80FD\u4F7F\u7528 <code>exports = value</code> \u7684\u5F62\u5F0F\u66B4\u9732\uFF0C\u6A21\u5757\u5185\u90E8 <code>module</code> \u4E0E <code>exports</code> \u5177\u6709\u9690\u5F0F\u5173\u7CFB <code>exports = module.exports = {}</code>,<code>require</code> \u8FD4\u56DE\u7684\u662F\u76EE\u6807\u6A21\u5757\u4E2D <code>module.exports</code> \u7684\u503C</li></ul></blockquote><p>\u4EE3\u7801\u793A\u4F8B\uFF1A <code>hello.js</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>const type = &#39;hello world&#39;

function helloWorld() {
    console.log(&#39;\u4F60\u597D\uFF0C\u4E16\u754C....&#39;)
}

// \u66B4\u9732\u6570\u636E\u3001\u65B9\u6CD5
module.exports = {
    type,
    helloWorld
}

// exports.type = type
// module.exports = helloWorld

// exports.type = type
// exports.helloWorld = helloWorld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>index.js</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5F15\u5165\u81EA\u5B9A\u5E94\u6A21\u5757
const hello = require(&#39;./hello&#39;)

// \u8C03\u7528\u6A21\u5757\u6570\u636E/\u65B9\u6CD5
console.log(hello)
hello.helloWorld()
// hello()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_5-3-\u6A21\u5757\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_5-3-\u6A21\u5757\u5BFC\u5165" aria-hidden="true">#</a> 5.3 \u6A21\u5757\u5BFC\u5165</h3><p>\u5728\u6A21\u5757\u4E2D\u4F7F\u7528 <code>require</code> \u4F20\u5165\u6587\u4EF6\u8DEF\u5F84\u5373\u53EF\u5F15\u5165\u6587\u4EF6 <code>require</code> \u4F7F\u7528\u7684\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li>\u5BF9\u4E8E\u81EA\u5DF1\u521B\u5EFA\u7684\u6A21\u5757\uFF0C\u5BFC\u5165\u65F6\u8DEF\u5F84\u5EFA\u8BAE\u5199<strong>\u76F8\u5BF9\u8DEF\u5F84</strong>\uFF0C\u4E14\u4E0D\u80FD\u7701\u7565 <code>./</code> \u548C <code>../</code></li><li><code>js</code> \u548C <code>json</code> \u6587\u4EF6\u5BFC\u5165\u65F6\u53EF\u4EE5\u4E0D\u7528\u5199\u540E\u7F00\uFF0C<code>c/c++</code> \u7F16\u5199\u7684 <code>node</code> \u6269\u5C55\u6587\u4EF6\u4E5F\u53EF\u4EE5\u4E0D\u5199\u540E\u7F00\uFF0C\u4F46\u662F\u4E00\u822C\u7528\u4E0D\u5230</li><li>\u5982\u679C\u5BFC\u5165\u5176\u4ED6\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u4F1A\u4EE5 <code>js</code> \u6587\u4EF6\u8FDB\u884C\u5904\u7406</li><li>\u5982\u679C\u5BFC\u5165\u7684\u8DEF\u5F84\u662F\u4E2A\u6587\u4EF6\u5939\uFF0C\u5219\u4F1A\u9996\u5148\u68C0\u6D4B\u8BE5\u6587\u4EF6\u5939\u4E0B <code>package.json</code> \u6587\u4EF6\u4E2D <code>main</code> \u5C5E\u6027\u5BF9\u5E94\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u5B58\u5728\u5219\u5BFC\u5165\uFF0C\u53CD\u4E4B\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u4F1A\u62A5\u9519\u3002\u5982\u679C <code>main</code> \u5C5E\u6027\u4E0D\u5B58\u5728\uFF0C\u6216\u8005 <code>package.json</code> \u4E0D\u5B58\u5728\uFF0C\u5219\u4F1A\u5C1D\u8BD5\u5BFC\u5165\u6587\u4EF6\u5939\u4E0B\u7684 <code>index.js</code> \u548C <code>index.json</code>\uFF0C\u5982\u679C\u8FD8\u662F\u6CA1\u627E\u5230\uFF0C\u5C31\u4F1A\u62A5\u9519</li><li>\u5BFC\u5165 <code>node.js</code> \u5185\u7F6E\u6A21\u5757\u65F6\uFF0C\u76F4\u63A5 <code>require</code> \u6A21\u5757\u7684\u540D\u5B57\u5373\u53EF\uFF0C\u65E0\u9700\u52A0 <code>./</code> \u548C <code>../</code></li></ul><h3 id="_5-4-\u6A21\u5757\u5BFC\u5165\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-4-\u6A21\u5757\u5BFC\u5165\u6D41\u7A0B" aria-hidden="true">#</a> 5.4 \u6A21\u5757\u5BFC\u5165\u6D41\u7A0B</h3><p><code>require</code> \u5BFC\u5165<strong>\u81EA\u5B9A\u4E49\u6A21\u5757</strong>\u7684\u57FA\u672C\u6D41\u7A0B\uFF1A</p><ol><li>\u5C06\u76F8\u5BF9\u8DEF\u5F84\u8F6C\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5B9A\u4F4D\u76EE\u6807\u6587\u4EF6</li><li>\u7F13\u5B58\u68C0\u6D4B</li><li>\u8BFB\u53D6\u76EE\u6807\u6587\u4EF6\u4EE3\u7801</li><li>\u5305\u88F9\u4E3A\u4E00\u4E2A\u51FD\u6570\u5E76\u6267\u884C\uFF08\u81EA\u6267\u884C\u51FD\u6570\uFF09\uFF0C\u901A\u8FC7 <code>arguments.callee.toString()</code> \u67E5\u770B\u81EA\u6267\u884C\u51FD\u6570</li><li>\u7F13\u5B58\u6A21\u5757\u7684\u503C</li><li>\u8FD4\u56DE <code>module.exports</code> \u7684\u503C</li></ol><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * require \u5BFC\u5165\u539F\u7406 \u4F2A\u4EE3\u7801
 */

// 1.\u5F15\u5165\u6A21\u5757
const path = require(&#39;path&#39;)
const fs = require(&#39;fs&#39;)

// 2.\u5B9A\u4E49\u4E00\u4E2A\u7F13\u5B58\u6570\u7EC4
let caches = []

function require(file) {
    // 3.\u5C06\u76F8\u5BF9\u8DEF\u5F84\u8F6C\u6210\u7EDD\u5BF9\u8DEF\u5F84
    let absolutePath = path.resolve(__dirname, file)

    // 4.\u68C0\u6D4B\u662F\u5426\u6709\u7F13\u5B58
    if (caches[absolutePath]) {
        return caches[absolutePath]
    }

    // 5.\u8BFB\u53D6\u6587\u4EF6\u7684\u4EE3\u7801
    let code = fs.readFileSync(absolutePath).toString()
    // 6.\u5C01\u88C5\u4E00\u4E2A\u51FD\u6570
    let module = {}
    let exports = module.exports = {}

    (function (exports, require, module, __fileName, __dirname) {
        const test = {
            name: &#39;hello world&#39;
        }
        module.exports = test

        console.log(arguments.callee.toString())
    })(exports, require, module, __filename, __dirname)

    // 7.\u7F13\u5B58\u7ED3\u679C
    caches[absolutePath] = module.exports

    // 7.\u8FD4\u56DE module.exports \u7684\u503C
    return module.exports
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="_6-\u5305\u7BA1\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_6-\u5305\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a> 6. \u5305\u7BA1\u7406\u5DE5\u5177</h2><h3 id="_6-1-\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_6-1-\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> 6.1 \u57FA\u7840\u6982\u5FF5</h3><p>\u5305\uFF1A\u82F1\u6587\u5355\u8BCD\u662F <code>package</code>\uFF0C\u4EE3\u8868\u4E86\u4E00\u7EC4\u7279\u5B9A\u529F\u80FD\u7684\u6E90\u7801\u96C6\u5408 \u5305\u7BA1\u7406\u5DE5\u5177\uFF1A\u7BA1\u7406<strong>\u5305</strong>\u7684\u5E94\u7528\u8F6F\u4EF6\uFF0C\u53EF\u4EE5\u5BF9<strong>\u5305</strong>\u8FDB\u884C\u4E0B\u8F7D\u5B89\u88C5\u3001\u66F4\u65B0\u3001\u5220\u9664\u3001\u4E0A\u4F20\u7B49\u64CD\u4F5C\u3002\u501F\u52A9\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5F00\u53D1\u9879\u76EE\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002\u5305\u7BA1\u7406\u5DE5\u5177\u662F\u4E00\u4E2A\u901A\u7528\u7684\u6982\u5FF5\uFF0C\u5F88\u591A\u7F16\u7A0B\u8BED\u8A00\u90FD\u6709\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u6240\u4EE5 \u638C\u63E1\u597D\u5305\u7BA1\u7406\u5DE5\u5177\u975E\u5E38\u91CD\u8981</p><p>\u5E38\u7528\u7684\u5305\u7BA1\u7406\u5DE5\u5177\uFF1A</p><ul><li><code>npm</code></li><li><code>cnpm</code></li><li><code>yarn</code></li><li><code>pnpm</code></li></ul><h3 id="_6-2-npm" tabindex="-1"><a class="header-anchor" href="#_6-2-npm" aria-hidden="true">#</a> 6.2 <code>npm</code></h3><blockquote><p><code>npm</code> \u5168\u79F0 <code>Node Package Manager</code>,\u7FFB\u8BD1\u4E3A\u4E2D\u6587\u610F\u601D\u662F<strong>Node \u7684\u5305\u7BA1\u7406\u5DE5\u5177</strong></p></blockquote><blockquote><p><code>npm</code> \u662F <code>Node.js</code> \u5B98\u65B9\u5185\u7F6E\u7684\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u662F\u5FC5\u987B\u8981\u638C\u63E1\u4F4F\u7684\u5DE5\u5177</p></blockquote><p>\u5E38\u89C1\u4F7F\u7528\u547D\u4EE4\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>npm -v</code></td><td>\u67E5\u770B\u7248\u672C\u53F7</td></tr><tr><td><code>npm init</code></td><td>\u547D\u4EE4\u7684\u4F5C\u7528\u662F\u5C06\u6587\u4EF6\u5939\u521D\u59CB\u5316\u4E3A\u4E00\u4E2A\u5305\uFF0C \u4EA4\u4E92\u5F0F\u521B\u5EFA <code>package.json</code> \u6587\u4EF6</td></tr><tr><td><code>npm s/search</code></td><td>\u641C\u7D22\u5305</td></tr><tr><td><code>npm install</code> <code>npm i</code></td><td>\u4E0B\u8F7D\u5B89\u88C5\u5305</td></tr><tr><td><code>npm i -g</code></td><td>\u5168\u5C40\u5B89\u88C5</td></tr><tr><td><code>npm i &lt;\u5305\u540D@\u7248\u672C\u53F7&gt;</code></td><td>\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684\u5305</td></tr><tr><td><code>npm remove</code> <code>npm r</code></td><td>\u5C40\u90E8\u5220\u9664\u4F9D\u8D56</td></tr><tr><td><code>npm remove -g</code></td><td>\u5168\u5C40\u5220\u9664\u4F9D\u8D56</td></tr></tbody></table><h4 id="_6-2-1-\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_6-2-1-\u521D\u59CB\u5316" aria-hidden="true">#</a> 6.2.1 \u521D\u59CB\u5316</h4><p>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u76EE\u5F55\uFF0C\u7136\u540E\u4EE5\u6B64\u76EE\u5F55\u4F5C\u4E3A\u5DE5\u4F5C\u76EE\u5F55<strong>\u542F\u52A8\u547D\u4EE4\u884C\u5DE5\u5177</strong>\uFF0C\u6267\u884C <code>npm init</code>. <code>npm init</code> \u547D\u4EE4\u7684\u4F5C\u7528\u662F\u5C06\u6587\u4EF6\u5939\u521D\u59CB\u5316\u4E3A\u4E00\u4E2A<strong>\u5305</strong>\uFF0C\u4EA4\u4E92\u5F0F\u521B\u5EFA <code>package.json</code> \u6587\u4EF6\u3002 <code>package.json</code> \u6587\u4EF6\u662F\u5305\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6BCF\u4E2A\u5305\u90FD\u5FC5\u987B\u8981\u6709\uFF0C <code>package.json</code> \u6587\u4EF6\u5185\u5BB9\uFF1A</p><div class="language-Json ext-Json line-numbers-mode"><pre class="language-Json"><code>{
    &quot;name&quot;: &quot;1-npm&quot;, #\u5305\u7684\u540D\u5B57
    &quot;version&quot;: &quot;1.0.0&quot;, #\u5305\u7684\u7248\u672C
    &quot;description&quot;: &quot;&quot;, #\u5305\u7684\u63CF\u8FF0
    &quot;main&quot;: &quot;index.js&quot;, #\u5305\u7684\u5165\u53E3\u6587\u4EF6
    &quot;scripts&quot;: { #\u811A\u672C\u914D\u7F6E
    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;
    },
    &quot;author&quot;: &quot;&quot;, #\u4F5C\u8005
    &quot;license&quot;: &quot;ISC&quot; #\u5F00\u6E90\u8BC1\u4E66
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>\u521D\u59CB\u5316\u7684\u8FC7\u7A0B\u4E2D\u8FD8\u6709\u4E00\u4E9B\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li><code>name</code> ( \u5305\u540D ) \u4E0D\u80FD\u4F7F\u7528\u4E2D\u6587\u3001\u5927\u5199\uFF0C\u9ED8\u8BA4\u503C\u662F\u6587\u4EF6\u5939\u7684\u540D\u79F0 \uFF0C\u6240\u4EE5\u6587\u4EF6\u5939\u540D\u79F0\u4E5F\u4E0D\u80FD\u4F7F\u7528\u4E2D\u6587\u548C\u5927\u5199</li><li><code>version</code> ( \u7248\u672C\u53F7 )\u8981\u6C42 <code>x.x.x</code> \u7684\u5F62\u5F0F\u5B9A\u4E49\uFF0C <code>x</code> \u5FC5\u987B\u662F\u6570\u5B57\uFF0C\u9ED8\u8BA4\u503C\u662F <code>1.0.0</code></li><li><code>ISC</code> \u8BC1\u4E66\u4E0E <code>MIT</code> \u8BC1\u4E66\u529F\u80FD\u4E0A\u662F\u76F8\u540C\u7684\uFF0C\u5173\u4E8E\u5F00\u6E90\u8BC1\u4E66\u6269\u5C55\u9605\u8BFB http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html</li><li><code>package.json</code> \u53EF\u4EE5\u624B\u52A8\u521B\u5EFA\u4E0E\u4FEE\u6539</li><li>\u4F7F\u7528 <code>npm init -y</code> \u6216\u8005 <code>npm init --yes</code> \u6781\u901F\u521B\u5EFA <code>package.json</code></li></ul></blockquote><h3 id="_6-2-2-\u5305\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_6-2-2-\u5305\u7BA1\u7406" aria-hidden="true">#</a> 6.2.2 \u5305\u7BA1\u7406</h3><p>\u901A\u8FC7 <code>npm install</code> \u548C <code>npm i</code> \u547D\u4EE4\u5B89\u88C5\u5305</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm install uniq
npm i uniq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD0\u884C\u4E4B\u540E\u6587\u4EF6\u5939\u4E0B\u4F1A\u589E\u52A0\u4E24\u4E2A\u8D44\u6E90</p><ul><li><code>node_modules</code> \u6587\u4EF6\u5939\u5B58\u653E\u4E0B\u8F7D\u7684\u5305\uFF0C<code>node_modules</code> \u6587\u4EF6\u5939\u5927\u591A\u6570\u60C5\u51B5\u90FD\u4E0D\u4F1A\u5B58\u5165\u7248\u672C\u5E93(<code>git</code>\u3001<code>svn</code> \u7B49)</li><li><code>package-lock.json</code> \u5305\u7684\u9501\u6587\u4EF6\uFF0C\u7528\u6765\u9501\u5B9A\u5305\u7684\u7248\u672C</li></ul><p>\u53EF\u4EE5\u4F7F\u7528 <code>require</code> \u5BFC\u5165 <code>npm</code> \u5305</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BFC\u5165 uniq \u5305
const uniq = require(&#39;uniq&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>require</code> \u5BFC\u5165\u7684\u57FA\u672C\u6D41\u7A0B\uFF1A</p><ul><li>\u5728\u5F53\u524D\u6587\u4EF6\u5939\u4E0B <code>node_modules</code> \u4E2D\u5BFB\u627E\u540C\u540D\u7684\u6587\u4EF6\u5939</li><li>\u5728\u4E0A\u7EA7\u76EE\u5F55\u4E2D\u4E0B\u7684 <code>node_modules</code> \u4E2D\u5BFB\u627E\u540C\u540D\u7684\u6587\u4EF6\u5939\uFF0C\u76F4\u81F3\u627E\u5230\u78C1\u76D8\u6839\u76EE\u5F55</li></ul><p>\u5B89\u88C5\u7684\u5305\uFF0C\u4E5F\u79F0\u4E3A<strong>\u4F9D\u8D56</strong>\uFF0C<strong>\u4F9D\u8D56</strong>\u6709<strong>\u751F\u4EA7\u4F9D\u8D56</strong>\u4E0E<strong>\u5F00\u53D1\u4F9D\u8D56</strong>\uFF0C\u4E8C\u8005\u7684\u4F7F\u7528\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u751F\u4EA7\u4F9D\u8D56</td><td><code>npm i -S uniq</code> <code>npm i --save uniq</code></td><td><code>-S</code> \u7B49\u6548\u4E8E <code>--save</code>,<code>-S</code> \u662F\u9ED8\u8BA4\u9009\u9879 \u5305\u4FE1\u606F\u4FDD\u5B58\u5728 <code>package.json</code> \u4E2D <code>dependencies</code> \u5C5E\u6027</td></tr><tr><td>\u5F00\u53D1\u4F9D\u8D56</td><td><code>npm i -D less</code> <code>npm i --save-dev less</code></td><td><code>-D</code> \u7B49\u6548\u4E8E <code>--save-dev</code> \u5305\u4FE1\u606F\u4FDD\u5B58\u5728 <code>package.json</code> \u4E2D <code>devDependencies</code> \u5C5E\u6027</td></tr></tbody></table><p>\u9879\u76EE\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u7248\u672C\u4E0D\u5339\u914D\u7684\u60C5\u51B5\uFF0C\u6709\u65F6\u5C31\u9700\u8981\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684\u5305\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i jquery@1.11.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53EF\u4EE5\u6267\u884C\u5B89\u88C5\u9009\u9879 <code>-g</code> \u8FDB\u884C\u5168\u5C40\u5B89\u88C5</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i -g nodemon
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5168\u5C40\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\u5C31\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u7684\u4EFB\u4F55\u4F4D\u7F6E\u8FD0\u884C <code>nodemon</code> \u547D\u4EE4\uFF0C\u8BE5\u547D\u4EE4\u7684\u4F5C\u7528\u662F<strong>\u81EA\u52A8\u91CD\u542F Node \u5E94\u7528\u7A0B\u5E8F</strong></p><blockquote><p>\u8BF4\u660E\uFF1A</p><ul><li>\u5168\u5C40\u5B89\u88C5\u7684\u547D\u4EE4\u4E0D\u53D7\u5DE5\u4F5C\u76EE\u5F55\u4F4D\u7F6E\u5F71\u54CD</li><li>\u53EF\u4EE5\u901A\u8FC7 <code>npm root -g</code> \u53EF\u4EE5\u67E5\u770B\u5168\u5C40\u5B89\u88C5\u5305\u7684\u4F4D\u7F6E</li><li>\u4E0D\u662F\u6240\u6709\u7684\u5305\u90FD\u9002\u5408\u5168\u5C40\u5B89\u88C5\uFF0C\u53EA\u6709\u5168\u5C40\u7C7B\u7684\u5DE5\u5177\u624D\u9002\u5408\uFF0C\u53EF\u4EE5\u901A\u8FC7\u67E5\u770B\u5305\u7684\u5B98\u65B9\u6587\u6863\u6765\u786E\u5B9A</li></ul></blockquote><p>\u9879\u76EE\u4E2D\u53EF\u80FD\u9700\u8981\u5220\u9664\u67D0\u4E9B\u4E0D\u9700\u8981\u7684\u5305\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>## \u5C40\u90E8\u5220\u9664
npm remove uniq
npm r uniq
## \u5168\u5C40\u5220\u9664
npm remove -g nodemon
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_6-2-3-\u542F\u52A8\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_6-2-3-\u542F\u52A8\u9879\u76EE" aria-hidden="true">#</a> 6.2.3 \u542F\u52A8\u9879\u76EE</h3><p>\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E <code>package.json</code> \u4E2D\u7684 <code>scripts</code> \u5C5E\u6027\u6765\u542F\u52A8\u9879\u76EE</p><div class="language-Json ext-Json line-numbers-mode"><pre class="language-Json"><code>{
    &quot;scripts&quot;: {
        &quot;server&quot;: &quot;node server.js&quot;,
        &quot;start&quot;: &quot;node index.js&quot;,
    },
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u914D\u7F6E\u5B8C\u6210\u4E4B\u540E\uFF0C\u6267\u884C\u547D\u4EE4\u542F\u52A8\u9879\u76EE</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm run server
npm run start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0D\u8FC7 <code>start</code> \u6BD4\u8F83\u7279\u522B\uFF0C\u4F7F\u7528\u65F6\u53EF\u4EE5\u7701\u7565 <code>run</code></p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p><code>npm run</code> \u6709\u81EA\u52A8\u5411\u4E0A\u7EA7\u76EE\u5F55\u67E5\u627E\u7684\u7279\u6027\uFF0C\u8DDF <code>require</code> \u51FD\u6570\u4E00\u6837</p></blockquote><h3 id="_6-3-cnpm" tabindex="-1"><a class="header-anchor" href="#_6-3-cnpm" aria-hidden="true">#</a> 6.3 <code>cnpm</code></h3><p><code>cnpm</code> \u662F\u4E00\u4E2A\u6DD8\u5B9D\u6784\u5EFA\u7684 <code>npmjs.com</code> \u7684\u5B8C\u6574\u955C\u50CF\uFF0C\u4E5F\u79F0\u4E3A<strong>\u6DD8\u5B9D\u955C\u50CF</strong>\uFF0C\u7F51\u5740\uFF1Ahttps://npmmirror.com/\u3002 <code>cnpm</code> \u670D\u52A1\u90E8\u7F72\u5728\u56FD\u5185\u963F\u91CC\u4E91\u670D\u52A1\u5668\u4E0A\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u5305\u7684\u4E0B\u8F7D\u901F\u5EA6\u3002\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5168\u5C40\u5DE5\u5177\u5305 <code>cnpm</code>\uFF0C\u64CD\u4F5C\u547D\u4EE4\u4E0E <code>npm</code> \u5927\u4F53\u76F8\u540C\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7 <code>npm</code> \u6765\u5B89\u88C5 <code>cnpm</code> \u5DE5\u5177\uFF1A</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm install -g cnpm --registry=https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5E38\u7528\u64CD\u4F5C\u547D\u4EE4\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>cnpm init</code> / <code>cnpm init</code></td><td>\u521D\u59CB\u5316</td></tr><tr><td><code>cnpm i uniq</code> <code>cnpm i -S uniq</code> <code>cnpm i -D uniq</code> <code>cnpm i -g nodemon</code></td><td>\u5B89\u88C5\u5305</td></tr><tr><td><code>cnpm i</code></td><td>\u5B89\u88C5\u9879\u76EE\u4F9D\u8D56</td></tr><tr><td><code>cnpm r uniq</code></td><td>\u5220\u9664</td></tr></tbody></table><p>\u7528 <code>npm</code> \u4E5F\u53EF\u4EE5\u4F7F\u7528\u6DD8\u5B9D\u955C\u50CF\uFF0C\u914D\u7F6E\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A</p><ul><li>\u76F4\u63A5\u914D\u7F6E</li><li>\u5DE5\u5177\u914D\u7F6E</li></ul><p>\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u5373\u53EF\u5B8C\u6210\u914D\u7F6E\uFF1A</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm config set registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528 <code>nrm</code> \u914D\u7F6E <code>npm</code> \u7684\u955C\u50CF\u5730\u5740 <code>npm registry manager</code></p><ol><li>\u5B89\u88C5 <code>nrm</code><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i -g nrm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>\u4FEE\u6539\u955C\u50CF<div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code> nrm use taobao
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>\u68C0\u67E5\u662F\u5426\u914D\u7F6E\u6210\u529F\uFF08\u9009\u505A\uFF09<div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm config list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>\u68C0\u67E5 <code>registry</code> \u5730\u5740\u662F\u5426\u4E3A <code>https://registry.npmmirror.com/</code>, \u5982\u679C\u662F\u5219\u8868\u660E\u6210\u529F</li></ol><blockquote><p>\u8865\u5145\u8BF4\u660E\uFF1A</p><ul><li>\u5EFA\u8BAE\u4F7F\u7528\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u8FDB\u884C\u955C\u50CF\u914D\u7F6E\uFF0C\u56E0\u4E3A\u540E\u7EED\u4FEE\u6539\u8D77\u6765\u4F1A\u6BD4\u8F83\u65B9\u4FBF</li><li>\u867D\u7136 <code>cnpm</code> \u53EF\u4EE5\u63D0\u9AD8\u901F\u5EA6\uFF0C\u4F46\u662F <code>npm</code> \u4E5F\u53EF\u4EE5\u901A\u8FC7\u6DD8\u5B9D\u955C\u50CF\u8FDB\u884C\u52A0\u901F\uFF0C\u6240\u4EE5 <code>npm</code> \u7684\u4F7F\u7528\u7387\u8FD8\u662F\u9AD8\u4E8E <code>cnpm</code></li></ul></blockquote><h3 id="_6-4-yarn" tabindex="-1"><a class="header-anchor" href="#_6-4-yarn" aria-hidden="true">#</a> 6.4 <code>yarn</code></h3><p><code>yarn</code> \u662F\u7531 <code>Facebook</code> \u5728 2016 \u5E74\u63A8\u51FA\u7684\u65B0\u7684 <code>Javascript</code> \u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u5B98\u65B9\u7F51\u5740\uFF1Ahttps://yarnpkg.com/</p><p><code>yarn</code> \u7279\u70B9\uFF1A</p><ul><li>\u901F\u5EA6\u8D85\u5FEB\uFF1A<code>yarn</code> \u7F13\u5B58\u4E86\u6BCF\u4E2A\u4E0B\u8F7D\u8FC7\u7684\u5305\uFF0C\u6240\u4EE5\u518D\u6B21\u4F7F\u7528\u65F6\u65E0\u9700\u91CD\u590D\u4E0B\u8F7D\u3002\u540C\u65F6\u5229\u7528\u5E76\u884C\u4E0B\u8F7D\u4EE5\u6700\u5927\u5316\u8D44\u6E90\u5229\u7528\u7387\uFF0C\u56E0\u6B64\u5B89\u88C5\u901F\u5EA6\u66F4\u5FEB\u3002</li><li>\u8D85\u7EA7\u5B89\u5168\uFF1A\u5728\u6267\u884C\u4EE3\u7801\u4E4B\u524D\uFF0C<code>yarn</code> \u4F1A\u901A\u8FC7\u7B97\u6CD5\u6821\u9A8C\u6BCF\u4E2A\u5B89\u88C5\u5305\u7684\u5B8C\u6574\u6027</li><li>\u8D85\u7EA7\u53EF\u9760\uFF1A\u4F7F\u7528\u8BE6\u7EC6\u3001\u7B80\u6D01\u7684\u9501\u6587\u4EF6\u683C\u5F0F\u548C\u660E\u786E\u7684\u5B89\u88C5\u7B97\u6CD5\uFF0C<code>yarn</code> \u80FD\u591F\u4FDD\u8BC1\u5728\u4E0D\u540C\u7CFB\u7EDF\u4E0A\u65E0\u5DEE\u5F02\u7684\u5DE5\u4F5C</li></ul><p>\u53EF\u4EE5\u4F7F\u7528 <code>npm</code> \u5B89\u88C5 <code>yarn</code></p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i -g yarn
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>yarn</code> \u5E38\u7528\u547D\u4EE4\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>yarn init</code> / <code>yarn init -y</code></td><td>\u521D\u59CB\u5316</td></tr><tr><td><code>yarn add uniq</code> \u751F\u4EA7\u4F9D\u8D56 <code>yarn add less --dev</code> \u5F00\u53D1\u4F9D\u8D56 <code>yarn global add nodemon</code> \u5168\u5C40\u5B89\u88C5</td><td>\u5B89\u88C5\u5305</td></tr><tr><td><code>yarn remove uniq</code> \u5220\u9664\u9879\u76EE\u4F9D\u8D56\u5305 <code>yarn global remove nodemon</code> \u5168\u5C40\u5220\u9664\u5305</td><td>\u5220\u9664\u5305</td></tr><tr><td><code>yarn</code>/<code>yarn install</code></td><td>\u5B89\u88C5\u9879\u76EE\u4F9D\u8D56</td></tr><tr><td><code>yarn</code> # \u4E0D\u9700\u8981\u6DFB\u52A0 <code>run</code></td><td>\u8FD0\u884C\u547D\u4EE4\u522B\u540D</td></tr></tbody></table><p>\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u914D\u7F6E\u6DD8\u5B9D\u955C\u50CF</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>yarn config set registry https://registry.npmmirror.com/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B <code>yarn</code> \u7684\u914D\u7F6E\u9879</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>yarn config list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>npm</code> \u548C <code>yarn</code> \u9009\u62E9\uFF1A</p><ul><li>\u4E2A\u4EBA\u9879\u76EE\uFF1A\u5982\u679C\u662F\u4E2A\u4EBA\u9879\u76EE\uFF0C \u54EA\u4E2A\u5DE5\u5177\u90FD\u53EF\u4EE5 \uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u559C\u597D\u6765\u9009\u62E9</li><li>\u516C\u53F8\u9879\u76EE\uFF1A\u5982\u679C\u662F\u516C\u53F8\u8981\u6839\u636E\u9879\u76EE\u4EE3\u7801\u6765\u9009\u62E9\uFF0C\u53EF\u4EE5 \u901A\u8FC7<strong>\u9501\u6587\u4EF6</strong>\u5224\u65AD\u9879\u76EE\u7684\u5305\u7BA1\u7406\u5DE5\u5177 <ul><li><code>npm</code> \u7684\u9501\u6587\u4EF6\u4E3A <code>package-lock.json</code></li><li><code>yarn</code> \u7684\u9501\u6587\u4EF6\u4E3A <code>yarn.lock</code></li></ul></li></ul><blockquote><p>\u5207\u8BB0\uFF1A\u5305\u7BA1\u7406\u5DE5\u5177\u4E0D\u8981\u6DF7\u7740\u7528</p></blockquote><h3 id="_6-5-\u7BA1\u7406\u53D1\u5E03\u5305" tabindex="-1"><a class="header-anchor" href="#_6-5-\u7BA1\u7406\u53D1\u5E03\u5305" aria-hidden="true">#</a> 6.5 \u7BA1\u7406\u53D1\u5E03\u5305</h3><p>\u53EF\u4EE5\u5C06\u81EA\u5DF1\u5F00\u53D1\u7684\u5DE5\u5177\u5305\u53D1\u5E03\u5230 <code>npm</code> \u670D\u52A1\u4E0A\uFF0C\u65B9\u4FBF\u81EA\u5DF1\u548C\u5176\u4ED6\u5F00\u53D1\u8005\u4F7F\u7528\uFF0C\u64CD\u4F5C\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u5E76\u521B\u5EFA\u6587\u4EF6 <code>index.js</code>\uFF0C \u5728\u6587\u4EF6\u4E2D\u58F0\u660E\u51FD\u6570\uFF0C\u4F7F\u7528 <code>module.exports</code> \u66B4\u9732</li><li><code>npm</code> \u521D\u59CB\u5316\u5DE5\u5177\u5305\uFF0C<code>package.json</code> \u586B\u5199\u5305\u7684\u4FE1\u606F (\u5305\u7684\u540D\u5B57\u662F\u552F\u4E00\u7684)</li><li>\u6CE8\u518C\u8D26\u53F7\uFF1Ahttps://www.npmjs.com/signup</li><li>\u6FC0\u6D3B\u8D26\u53F7\uFF08\u4E00\u5B9A\u8981\u6FC0\u6D3B\u8D26\u53F7\uFF09</li><li>\u4FEE\u6539\u4E3A\u5B98\u65B9\u7684\u5B98\u65B9\u955C\u50CF(\u547D\u4EE4\u884C\u4E2D\u8FD0\u884C <code>nrm use npm</code>)</li><li>\u547D\u4EE4\u884C\u4E0B <code>npm login</code> \u586B\u5199\u76F8\u5173\u7528\u6237\u4FE1\u606F</li><li>\u547D\u4EE4\u884C\u4E0B <code>npm publish</code> \u63D0\u4EA4\u5305</li></ol><p>\u540E\u7EED\u53EF\u4EE5\u5BF9\u81EA\u5DF1\u53D1\u5E03\u7684\u5305\u8FDB\u884C\u66F4\u65B0\uFF0C\u64CD\u4F5C\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>\u66F4\u65B0\u5305\u4E2D\u7684\u4EE3\u7801</li><li>\u6D4B\u8BD5\u4EE3\u7801\u662F\u5426\u53EF\u7528</li><li>\u4FEE\u6539 <code>package.json</code> \u4E2D\u7684\u7248\u672C\u53F7</li><li>\u53D1\u5E03\u66F4\u65B0\u547D\u4EE4 <code>npm publish</code></li></ol><p>\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u5220\u9664\u5305</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm unpublish --force
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u5305\u9700\u8981\u6EE1\u8DB3\u4E00\u5B9A\u7684\u6761\u4EF6\uFF0Chttps://docs.npmjs.com/policies/unpublish</p><ul><li>\u662F\u5305\u7684\u4F5C\u8005</li><li>\u53D1\u5E03\u5C0F\u4E8E 24 \u5C0F\u65F6</li><li>\u5927\u4E8E 24 \u5C0F\u65F6\u540E\uFF0C\u6CA1\u6709\u5176\u4ED6\u5305\u4F9D\u8D56\uFF0C\u5E76\u4E14\u6BCF\u5468\u5C0F\u4E8E 300 \u4E0B\u8F7D\u91CF\uFF0C\u5E76\u4E14\u53EA\u6709\u4E00\u4E2A\u7EF4\u62A4\u8005</li></ul><h3 id="_6-6-nvm" tabindex="-1"><a class="header-anchor" href="#_6-6-nvm" aria-hidden="true">#</a> 6.6 <code>nvm</code></h3><blockquote><p><code>nvm</code> \u5168\u79F0 <code>Node Version Manager</code> \u987E\u540D\u601D\u4E49\u5B83\u662F\u7528\u6765\u7BA1\u7406 <code>Node</code> \u7248\u672C\u7684\u5DE5\u5177\uFF0C\u65B9\u4FBF\u5207\u6362\u4E0D\u540C\u7248\u672C\u7684 <code>Node.js</code>\u3002</p></blockquote><blockquote><p><code>nvm</code> \u7684\u4F7F\u7528\u975E\u5E38\u7684\u7B80\u5355\uFF0C\u8DDF <code>npm</code> \u7684\u4F7F\u7528\u65B9\u6CD5\u7C7B\u4F3C\u3002</p></blockquote><blockquote><p>\u4E0B\u8F7D\u5730\u5740 https://github.com/coreybutler/nvm-windows/releases</p></blockquote><p>\u5E38\u7528\u547D\u4EE4\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>nvm list available</code></td><td>\u663E\u793A\u6240\u6709\u53EF\u4EE5\u4E0B\u8F7D\u7684 <code>Node.js</code> \u7248\u672C</td></tr><tr><td><code>nvm list</code></td><td>\u663E\u793A\u5DF2\u5B89\u88C5\u7684\u7248\u672C</td></tr><tr><td><code>nvm install 18.12.1</code></td><td>\u5B89\u88C5 <code>18.12.1</code> \u7248\u672C\u7684 <code>Node.js</code></td></tr><tr><td><code>nvm install latest</code></td><td>\u5B89\u88C5\u6700\u65B0\u7248\u7684 <code>Node.js</code></td></tr><tr><td><code>nvm uninstall 18.12.1</code></td><td>\u5220\u9664\u67D0\u4E2A\u7248\u672C\u7684 <code>Node.js</code></td></tr><tr><td><code>nvm use 18.12.1</code></td><td>\u5207\u6362 <code>18.12.1</code> \u7684 <code>Node.js</code></td></tr></tbody></table><h2 id="_7-express-\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#_7-express-\u6846\u67B6" aria-hidden="true">#</a> 7. <code>express</code> \u6846\u67B6</h2><h3 id="_7-1-\u4ECB\u7ECD\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_7-1-\u4ECB\u7ECD\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> 7.1 \u4ECB\u7ECD\u4E0E\u4F7F\u7528</h3><blockquote><p><code>express</code> \u662F\u4E00\u4E2A\u57FA\u4E8E <code>Node.js</code> \u5E73\u53F0\u7684\u6781\u7B80\u3001\u7075\u6D3B\u7684 <code>WEB</code> \u5E94\u7528\u5F00\u53D1\u6846\u67B6\uFF0C\u5B98\u65B9\u7F51\u5740\uFF1A<code>https://www.expressjs.com.cn/</code></p></blockquote><blockquote><p>\u7B80\u5355\u6765\u8BF4\uFF0C<code>express</code> \u662F\u4E00\u4E2A\u5C01\u88C5\u597D\u7684\u5DE5\u5177\u5305\uFF0C\u5C01\u88C5\u4E86\u5F88\u591A\u529F\u80FD\uFF0C\u4FBF\u4E8E\u6211\u4EEC\u5F00\u53D1 <code>web</code> \u5E94\u7528\uFF08<code>http</code> \u670D\u52A1\uFF09</p></blockquote><p><code>express</code> \u4E0B\u8F7D <code>express</code> \u672C\u8EAB\u662F\u4E00\u4E2A <code>npm</code> \u5305\uFF0C\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7 <code>npm</code> \u5B89\u88C5\uFF1A</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm init
npm i express
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>express</code> \u521D\u4F53\u9A8C\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const app = express()

// 3.\u521B\u5EFA\u8DEF\u7531
app.get(&#39;/hello&#39;, (req, resp) =&gt; {
    resp.end(&#39;hello world&#39;)
})

// 4.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_7-2-\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#_7-2-\u8DEF\u7531" aria-hidden="true">#</a> 7.2 \u8DEF\u7531</h3><h4 id="_7-2-1-\u8DEF\u7531\u521D\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#_7-2-1-\u8DEF\u7531\u521D\u4F53\u9A8C" aria-hidden="true">#</a> 7.2.1 \u8DEF\u7531\u521D\u4F53\u9A8C</h4><blockquote><p>\u5B98\u65B9\u5B9A\u4E49\uFF1A\u8DEF\u7531\u786E\u5B9A\u4E86\u5E94\u7528\u7A0B\u5E8F\u5982\u4F55\u54CD\u5E94\u5BA2\u6237\u7AEF\u5BF9\u7279\u5B9A\u7AEF\u70B9\u7684\u8BF7\u6C42\u3002</p></blockquote><p>\u4E00\u4E2A\u8DEF\u7531\u7684\u7EC4\u6210\u6709\u8BF7\u6C42\u65B9\u6CD5\u3001\u8DEF\u5F84\u3001\u56DE\u8C03\u51FD\u6570\u7EC4\u6210\u3002 <code>express</code> \u4E2D\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u4F7F\u7528\u8DEF\u7531\uFF0C\u4F7F\u7528\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>app.&lt;method&gt;(path\uFF0Ccallback)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5F15\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// 2.\u521B\u5EFA\u670D\u52A1
const app = express()

// 3.\u521B\u5EFA\u8DEF\u7531
// get \u8BF7\u6C42
app.get(&#39;/hello&#39;, (req, resp) =&gt; {
    resp.end(&#39;hello world&#39;)
})

// \u9996\u9875\u8DEF\u7531
app.get(&#39;/&#39;, (req, resp) =&gt; {
    resp.end(&#39;home&#39;)
})

// post \u8BF7\u6C42
app.post(&#39;/login&#39;, (req, resp) =&gt; {
    resp.end(&#39;login&#39;)
})

// \u6240\u6709\u7684\u8BF7\u6C42\u65B9\u5F0F\u90FD\u53EF\u4EE5
app.all(&#39;/register&#39;, (req, resp) =&gt; {
    resp.end(&#39;register&#39;)
})

// 404
app.all(&#39;*&#39;, (req, resp) =&gt; {
    resp.end(\`&lt;h1&gt;404 Not Found&lt;/h1&gt;\`)
})

// 4.\u542F\u52A8\u670D\u52A1\u5E76\u76D1\u542C\u7AEF\u53E3
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h4 id="_7-2-2-\u83B7\u53D6\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_7-2-2-\u83B7\u53D6\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> 7.2.2 \u83B7\u53D6\u8BF7\u6C42\u53C2\u6570</h4><p><code>express</code> \u6846\u67B6\u5C01\u88C5\u4E86\u4E00\u4E9B <code>API</code> \u6765\u65B9\u4FBF\u83B7\u53D6\u8BF7\u6C42\u62A5\u6587\u4E2D\u7684\u6570\u636E\uFF0C\u5E76\u4E14\u517C\u5BB9\u539F\u751F <code>http</code> \u6A21\u5757\u7684\u83B7\u53D6\u65B9\u5F0F.\u3002 \u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5F15\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/hello&#39;, (req, resp) =&gt; {

    // \u539F\u751F\u65B9\u5F0F
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req.httpVersion)
    // console.log(req.headers)

    // express \u64CD\u4F5C
    console.log(req.path)
    console.log(req.query)
    // \u83B7\u53D6\u8BF7\u6C42ip
    console.log(req.ip)

    resp.end(&#39;hello world&#39;)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><code>express</code> \u6846\u67B6\u4E5F\u53EF\u4EE5\u83B7\u53D6\u5230\u8DEF\u7531\u53C2\u6570\u3002\u8DEF\u7531\u53C2\u6570\u6307\u7684\u662F <code>URL</code> \u8DEF\u5F84\u4E2D\u7684\u53C2\u6570\uFF08\u6570\u636E\uFF09\u3002 \u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BFC\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/:id/:token&#39;, (req, resp) =&gt; {
    console.log(req.params.id, req.params.token)
    resp.end(&#39;hello world&#39;)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>express</code> \u53EF\u4EE5\u4F7F\u7528 <code>body-parser</code> \u5305\u5904\u7406\u8BF7\u6C42\u4F53\u3002 \u5B89\u88C5 <code>body-parser</code></p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i body-parser
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  GET   /login  \u663E\u793A\u8868\u5355\u7F51\u9875
 *  POST  /login  \u83B7\u53D6\u8868\u5355\u4E2D\u7684\u300E\u7528\u6237\u540D\u300F\u548C\u300E\u5BC6\u7801\u300F
 */

// \u5BFC\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u4F7F\u7528 body-parser \u83B7\u53D6\u8BF7\u6C42\u4F53\u6570\u636E
// \u5B89\u88C5 body-parser
// npm i body-parser
// \u5BFC\u5165
const bodyParser = require(&#39;body-parser&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u89E3\u6790 json \u8BF7\u6C42\u683C\u5F0F\u7684\u8BF7\u6C42\u4F53\u4E2D\u95F4\u4EF6
const jsonParser = bodyParser.json()

// \u89E3\u6790 queryString \u8BF7\u6C42\u683C\u5F0F\u7684\u8BF7\u6C42\u4F53\u4E2D\u95F4\u4EF6
const urlencodedParser = bodyParser.urlencoded({extended: false})

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/login&#39;, (req, resp) =&gt; {
    resp.sendFile(__dirname + &#39;/11-form.html&#39;)
})

app.post(&#39;/login&#39;, urlencodedParser, (req, resp) =&gt; {

    // \u83B7\u53D6\u7528\u6237\u540D\u548C\u5BC6\u7801
    console.log(req.body)
    resp.send(&#39;\u767B\u5F55\u6210\u529F&#39;)
})

app.all(&#39;*&#39;, (req, resp) =&gt; {
    resp.send(\`&lt;h1&gt;404 Not Found&lt;/h1&gt;\`)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h4 id="_7-2-3-\u8BBE\u7F6E\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#_7-2-3-\u8BBE\u7F6E\u54CD\u5E94" aria-hidden="true">#</a> 7.2.3 \u8BBE\u7F6E\u54CD\u5E94</h4><p><code>express</code> \u6846\u67B6\u5C01\u88C5\u4E86\u4E00\u4E9B <code>API</code> \u6765\u65B9\u4FBF\u7ED9\u5BA2\u6237\u7AEF\u54CD\u5E94\u6570\u636E\uFF0C\u5E76\u4E14\u517C\u5BB9\u539F\u751F <code>http</code> \u6A21\u5757\u7684\u83B7\u53D6\u65B9\u5F0F\u3002 \u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5F15\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/hello&#39;, (req, resp) =&gt; {
    // \u539F\u751F\u54CD\u5E94
    // resp.statusCode = 404
    // resp.statusMessage = &#39;Not Found&#39;
    // resp.setHeader(&#39;aaaa&#39;, &#39;bbbb&#39;)
    // resp.write(&#39;hello express &#39;)

    // express \u64CD\u4F5C
    // resp.status(500)
    // resp.set(&#39;aaa&#39;, &#39;123&#39;)
    // \u81EA\u52A8\u8FD4\u56DE utf8 \u7F16\u7801\u3002\u6B64\u65F6\u65E0\u9700\u518D\u5199 resp.end()
    // resp.send(&#39;hello express &#39;)

    // \u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528
    resp.status(500).set(&#39;xxx&#39;, &#39;yyy&#39;).send(&#39;\u4F60\u597D\uFF0C\u4E16\u754C&#39;)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u5176\u4ED6\u54CD\u5E94\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BFC\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/hello&#39;, (req, resp) =&gt; {
    // resp.end(&#39;hello world&#39;)

    // \u91CD\u5B9A\u5411
    // resp.redirect(&#39;https://www.baidu.com&#39;)

    // \u4E0B\u8F7D\u54CD\u5E94
    // resp.download(__dirname + &#39;/singers.json&#39;)

    // \u8FD4\u56DEjson
    // resp.json({
    //     username: &#39;\u5F20\u4E09&#39;,
    //     age: 18
    // })

    // \u8FD4\u56DE\u6587\u4EF6\u5185\u5BB9
    resp.sendFile(__dirname + &#39;/2-form.html&#39;)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="_7-2-4-\u8DEF\u7531\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#_7-2-4-\u8DEF\u7531\u6A21\u5757\u5316" aria-hidden="true">#</a> 7.2.4 \u8DEF\u7531\u6A21\u5757\u5316</h4><p>\u5BF9\u8DEF\u7531\u8FDB\u884C\u6A21\u5757\u5316\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u7BA1\u7406\u8DEF\u7531\u3002</p><p><code>admin.js</code> \u8DEF\u7531</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BFC\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const router = express()

// \u521B\u5EFA\u8DEF\u7531
router.get(&#39;/admin&#39;, (req, resp) =&gt; {
    resp.send(&#39;\u540E\u53F0\u9996\u9875&#39;)
})

router.get(&#39;/setting&#39;, (req, resp) =&gt; {
    resp.send(&#39;\u4E2A\u4EBA\u8BBE\u7F6E&#39;)
})

module.exports = router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>home.js</code> \u8DEF\u7531</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BFC\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const router = express()

// \u521B\u5EFA\u8DEF\u7531
router.get(&#39;/&#39;, (req, resp) =&gt; {
    resp.send(&#39;\u524D\u53F0\u9996\u9875&#39;)
})

router.get(&#39;/home&#39;, (req, resp) =&gt; {
    resp.send(&#39;home&#39;)
})

module.exports = router
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>index.js</code> \u8DEF\u7531</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BFC\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u521B\u5EFA\u8DEF\u7531
// \u5BFC\u5165\u8DEF\u7531
const admin = require(&#39;./routes/admin&#39;)
const home = require(&#39;./routes/home&#39;)

app.use(admin)
app.use(home)

app.all(&#39;*&#39;, (req, resp) =&gt; {
    resp.send(\`&lt;h1&gt;404 Not Found&lt;/h1&gt;\`)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_7-3-\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-3-\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 7.3 \u4E2D\u95F4\u4EF6</h3><blockquote><p>\u4E2D\u95F4\u4EF6\uFF08<code>Middleware</code>\uFF09\u672C\u8D28\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u53EF\u4EE5\u50CF\u8DEF\u7531\u56DE\u8C03\u4E00\u6837\u8BBF\u95EE\u8BF7\u6C42\u5BF9\u8C61\uFF08<code>request</code>\uFF09\uFF0C\u54CD\u5E94\u5BF9\u8C61\uFF08<code>response</code>\uFF09\u3002</p></blockquote><blockquote><p>\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528\u5C31\u662F\u4F7F\u7528\u51FD\u6570\u5C01\u88C5\u516C\u5171\u64CD\u4F5C\uFF0C\u7B80\u5316\u4EE3\u7801\u3002</p></blockquote><p>\u4E2D\u95F4\u4EF6\u6709\u4E24\u79CD\u7C7B\u578B\uFF1A</p><ul><li>\u5168\u5C40\u4E2D\u95F4\u4EF6</li><li>\u8DEF\u7531\u4E2D\u95F4\u4EF6</li></ul><h4 id="_7-3-1-\u5168\u5C40\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-3-1-\u5168\u5C40\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 7.3.1 \u5168\u5C40\u4E2D\u95F4\u4EF6</h4><blockquote><p>\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u5230\u8FBE\u670D\u52A1\u7AEF\u4E4B\u540E\u90FD\u4F1A\u6267\u884C\u5168\u5C40\u4E2D\u95F4\u4EF6\u51FD\u6570\u3002</p></blockquote><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u8BB0\u5F55\u6BCF\u4E2A\u8BF7\u6C42\u7684 ip \u548C url
 */

// \u5F15\u5165\u6A21\u5757
const express = require(&#39;express&#39;)
const fs = require(&#39;fs&#39;)
const path = require(&#39;path&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u521B\u5EFA\u5168\u5C40\u8DEF\u7531\u4E2D\u95F4\u4EF6
let globalMiddleware = (req, resp, next) =&gt; {
    // \u83B7\u53D6 url \u548C ip
    let {ip, url} = req
    // \u4F7F\u7528\u8FFD\u52A0\u7684\u65B9\u5F0F\u8BB0\u5F55\u5230\u65E5\u5FD7\u6587\u4EF6
    fs.appendFileSync(path.resolve(__dirname, &#39;./access.log&#39;), \`\${ip} \${url} \\r\\n\`)
    // \u8C03\u7528 next
    next()
}

// \u4F7F\u7528\u5168\u5C40\u8DEF\u7531\u4E2D\u95F4\u4EF6
app.use(globalMiddleware)

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/home&#39;, (req, resp) =&gt; {
    resp.send(&#39;\u524D\u53F0\u9996\u9875&#39;)
})

app.get(&#39;/admin&#39;, (req, resp) =&gt; {
    resp.send(&#39;\u540E\u53F0\u9996\u9875&#39;)
})

app.all(&#39;*&#39;, (req, resp) =&gt; {
    resp.send(\`&lt;h1&gt;404 Not Found&lt;/h1&gt;\`)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h4 id="_7-3-2-\u8DEF\u7531\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-3-2-\u8DEF\u7531\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 7.3.2 \u8DEF\u7531\u4E2D\u95F4\u4EF6</h4><p>\u5982\u679C\u53EA\u9700\u8981\u5BF9\u67D0\u4E00\u4E9B\u8DEF\u7531\u8FDB\u884C\u529F\u80FD\u5C01\u88C5\uFF0C\u5219\u5C31\u9700\u8981\u8DEF\u7531\u4E2D\u95F4\u4EF6\u3002 \u8C03\u7528\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>app.get(&#39;/\u8DEF\u5F84&#39;,\`\u4E2D\u95F4\u4EF6\u51FD\u6570\`,(request,response)=&gt;{
});

app.get(&#39;/\u8DEF\u5F84&#39;,\`\u4E2D\u95F4\u4EF6\u51FD\u65701\`,\`\u4E2D\u95F4\u4EF6\u51FD\u65702\`,(request,response)=&gt;{
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>/**
 * \u9700\u6C42\uFF1A
 *  \u9488\u5BF9 /admin  /setting \u7684\u8BF7\u6C42, \u8981\u6C42 URL \u643A\u5E26 code=521 \u53C2\u6570, \u5982\u672A\u643A\u5E26\u63D0\u793A\u300E\u6697\u53F7\u9519\u8BEF\u300F
 */
// \u5F15\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u521B\u5EFA\u8DEF\u7531\u4E2D\u95F4\u4EF6
let routerMiddleware = (req, resp, next) =&gt; {
    // \u83B7\u53D6 code
    let { code } = req.query

    if (code !== &#39;521&#39;) {
        resp.send(&#39;\u6697\u53F7\u9519\u8BEF&#39;)
        return;
    }
    next()
}

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/home&#39;, (req, resp) =&gt; {
    resp.send(&#39;\u524D\u53F0\u9996\u9875&#39;)
})

app.get(&#39;/admin&#39;, routerMiddleware, (req, resp) =&gt; {
    resp.send(&#39;\u540E\u53F0\u9996\u9875&#39;)
})

app.get(&#39;/setting&#39;, routerMiddleware, (req, resp) =&gt; {
    resp.send(&#39;\u4E2A\u4EBA\u8BBE\u7F6E&#39;)
})

app.all(&#39;*&#39;, (req, resp) =&gt; {
    resp.send(\`&lt;h1&gt;404 Not Found&lt;/h1&gt;\`)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h4 id="_7-3-3-\u9759\u6001\u8D44\u6E90\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-3-3-\u9759\u6001\u8D44\u6E90\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> 7.3.3 \u9759\u6001\u8D44\u6E90\u4E2D\u95F4\u4EF6</h4><p><code>express</code> \u5185\u7F6E\u5904\u7406\u9759\u6001\u8D44\u6E90\u7684\u4E2D\u95F4\u4EF6\u3002</p><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BFC\u5165\u6A21\u5757
const express = require(&#39;express&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/&#39;, (req, resp) =&gt; {
    resp.send(&#39;\u524D\u53F0\u9996\u9875&#39;)
})

// \u9759\u6001\u8D44\u6E90\u4E2D\u95F4\u4EF6\u8BBE\u7F6E
// &#39;/&#39; \u8DEF\u5F84\u9ED8\u8BA4\u8BBF\u95EE idnex.html\uFF0C\u5982\u679C\u4E0E\u52A8\u6001\u8D44\u6E90\u7684\u8BF7\u6C42\u8DEF\u5F84\u4E00\u81F4\u65F6\uFF0C\u8C01\u5148\u52A0\u8F7D\u5C31\u8C01\u5148\u8FD4\u56DE
app.use(express.static(__dirname + &#39;/public&#39;))

app.all(&#39;*&#39;, (req, resp) =&gt; {
    resp.send(\`&lt;h1&gt;404 Not Found&lt;/h1&gt;\`)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(9000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><blockquote><p>\u6CE8\u610F\u4E8B\u9879:</p><ul><li>index.html \u6587\u4EF6\u4E3A\u9ED8\u8BA4\u6253\u5F00\u7684\u8D44\u6E90</li><li>\u5982\u679C\u9759\u6001\u8D44\u6E90\u4E0E\u8DEF\u7531\u89C4\u5219\u540C\u65F6\u5339\u914D\uFF0C\u8C01\u5148\u5339\u914D\u8C01\u5C31\u54CD\u5E94</li><li>\u8DEF\u7531\u54CD\u5E94\u52A8\u6001\u8D44\u6E90\uFF0C\u9759\u6001\u8D44\u6E90\u4E2D\u95F4\u4EF6\u54CD\u5E94\u9759\u6001\u8D44\u6E90</li></ul></blockquote><h3 id="_7-4-ejs-\u6A21\u677F\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#_7-4-ejs-\u6A21\u677F\u5F15\u64CE" aria-hidden="true">#</a> 7.4 <code>EJS</code> \u6A21\u677F\u5F15\u64CE</h3><blockquote><p>\u6A21\u677F\u5F15\u64CE\u662F\u5206\u79BB<strong>\u7528\u6237\u754C\u9762\u548C\u4E1A\u52A1\u6570\u636E</strong>\u7684\u4E00\u79CD\u6280\u672F\u3002</p></blockquote><blockquote><p><code>EJS</code> \u662F\u4E00\u4E2A\u9AD8\u6548\u7684 <code>Javascript</code> \u7684\u6A21\u677F\u5F15\u64CE\u3002\u5B98\u7F51: https://ejs.co/ \u4E2D\u6587\u7AD9\uFF1Ahttps://ejs.bootcss.com/</p></blockquote><h4 id="_7-4-1-ejs-\u521D\u4F53\u9A8C" tabindex="-1"><a class="header-anchor" href="#_7-4-1-ejs-\u521D\u4F53\u9A8C" aria-hidden="true">#</a> 7.4.1 <code>EJS</code> \u521D\u4F53\u9A8C</h4><p>\u4E0B\u8F7D\u5B89\u88C5 <code>EJS</code></p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i ejs --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5B89\u88C5 ejs
// npm i ejs
// \u5BFC\u5165\u6A21\u5757
const ejs = require(&#39;ejs&#39;)
const fs = require(&#39;fs&#39;)

// \u58F0\u660E\u53D8\u91CF
let text = &#39;\u4E2D\u56FD&#39;
let weather = &#39;\u8273\u9633\u9AD8\u7167\uFF0C\u4E07\u91CC\u65E0\u4E91&#39;
let str = fs.readFileSync(__dirname + &#39;/1-html.html&#39;).toString()

let result = ejs.render(str, {text, weather})
console.log(result)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-Html ext-Html line-numbers-mode"><pre class="language-Html"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;\u6211\u7231\u4F60&lt;%= text %&gt;&lt;/h1&gt;&lt;/h1&gt;
    &lt;h2&gt;&lt;%= weather %&gt;&lt;/h1&gt;&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="_7-4-2-ejs-\u5E38\u7528\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_7-4-2-ejs-\u5E38\u7528\u8BED\u6CD5" aria-hidden="true">#</a> 7.4.2 <code>EJS</code> \u5E38\u7528\u8BED\u6CD5</h4><p>\u5B57\u7B26\u4E32\u8F93\u51FA</p><div class="language-Html ext-Html line-numbers-mode"><pre class="language-Html"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;\u6211\u7231\u4F60&lt;%= text %&gt;&lt;/h1&gt;&lt;/h1&gt;
    &lt;h2&gt;&lt;%= weather %&gt;&lt;/h1&gt;&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5217\u8868\u6E32\u67D3</p><div class="language-Html ext-Html line-numbers-mode"><pre class="language-Html"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;ul&gt;
        &lt;% list.forEach( item =&gt; {%&gt;
            &lt;li&gt;&lt;%= item %&gt;&lt;/li&gt;
        &lt;% })%&gt;
    &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6761\u4EF6\u5224\u65AD</p><div class="language-Html ext-Html line-numbers-mode"><pre class="language-Html"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;% if (isLogin) { %&gt;
        &lt;span&gt;\u6B22\u8FCE\u56DE\u6765&lt;/span&gt;
    &lt;% } else { %&gt;
        &lt;button&gt;\u767B\u5F55&lt;/button&gt;  &lt;button&gt;\u6CE8\u518C&lt;/button&gt;
    &lt;% } %&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_7-5-\u811A\u624B\u67B6" tabindex="-1"><a class="header-anchor" href="#_7-5-\u811A\u624B\u67B6" aria-hidden="true">#</a> 7.5 \u811A\u624B\u67B6</h3><blockquote><p>\u811A\u624B\u67B6\uFF1A\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u5E94\u7528\u7684\u6846\u67B6\uFF0C\u5E94\u7528\u6846\u67B6\u662F\u6307\u5728\u9879\u76EE\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5E38\u7528\u7684\u76EE\u5F55\u6216\u6587\u4EF6\uFF0C\u6BD4\u5982\uFF1Acss \u76EE\u5F55\u3001js \u76EE\u5F55\u7B49\uFF0C\u4EE5\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002</p></blockquote><blockquote><p><code>express-generator</code> \u662F\u5B9E\u73B0 <code>express</code> \u6846\u67B6\u7684\u811A\u624B\u67B6\u3002</p></blockquote><p>\u5B89\u88C5 <code>express-generator</code></p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i express-generator -g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u521D\u59CB\u5316</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>express --view=ejs \u9879\u76EE\u5305\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>package.json</code> \u6587\u4EF6</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
  &quot;name&quot;: &quot;15-express-generator&quot;,
  &quot;version&quot;: &quot;0.0.0&quot;,
  &quot;private&quot;: true,
  &quot;scripts&quot;: {
    &quot;start&quot;: &quot;node ./bin/www&quot;
  },
  &quot;dependencies&quot;: {
    &quot;cookie-parser&quot;: &quot;~1.4.4&quot;,
    &quot;debug&quot;: &quot;~2.6.9&quot;,
    &quot;ejs&quot;: &quot;~2.6.1&quot;,
    &quot;express&quot;: &quot;~4.16.1&quot;,
    &quot;http-errors&quot;: &quot;~1.6.3&quot;,
    &quot;morgan&quot;: &quot;~1.9.1&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u8FDB\u5165\u9879\u76EE\uFF0C\u5B89\u88C5\u4F9D\u8D56</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u542F\u52A8\u9879\u76EE</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF0C\u7AEF\u53E3\u9ED8\u8BA4\u662F\uFF1A<code>3000</code><code>localhost:3000</code></p><h2 id="_8-mongodb" tabindex="-1"><a class="header-anchor" href="#_8-mongodb" aria-hidden="true">#</a> 8. <code>MongoDB</code></h2><h3 id="_8-1-\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_8-1-\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> 8.1 \u57FA\u7840\u6982\u5FF5</h3><blockquote><p><code>MongoDB</code> \u662F\u4E00\u4E2A\u57FA\u4E8E<strong>\u5206\u5E03\u5F0F\u6587\u4EF6\u5B58\u50A8</strong>\u7684\u6570\u636E\u5E93\uFF0C\u5B98\u65B9\u5730\u5740\uFF1Ahttps://www.mongodb.com/,\u4E0B\u8F7D\u5730\u5740\uFF1A https://www.mongodb.com/try/download/community</p></blockquote><blockquote><p><code>MongoDB</code> \u64CD\u4F5C\u8BED\u6CD5\u4E0E <code>JavaScript</code> \u7C7B\u4F3C\uFF0C\u5BB9\u6613\u4E0A\u624B\uFF0C\u5B66\u4E60\u6210\u672C\u4F4E\u3002</p></blockquote><p><code>MongoDB</code> \u4E2D\u6709\u4E09\u4E2A\u91CD\u8981\u6982\u5FF5\u9700\u8981\u638C\u63E1\uFF1A</p><ul><li>\u6570\u636E\u5E93\uFF08<code>Database</code>\uFF09 \u662F\u4E00\u4E2A\u6570\u636E\u4ED3\u5E93\uFF0C\u6570\u636E\u5E93\u670D\u52A1\u4E0B\u53EF\u4EE5\u521B\u5EFA\u5F88\u591A\u6570\u636E\u5E93\uFF0C\u6570\u636E\u5E93\u4E2D\u53EF\u4EE5\u5B58\u653E\u5F88\u591A\u96C6\u5408</li><li>\u96C6\u5408\uFF08<code>Collection</code>\uFF09 \u96C6\u5408\u7C7B\u4F3C\u4E8E <code>JS</code> \u4E2D\u7684\u6570\u7EC4\uFF0C\u5728\u96C6\u5408\u4E2D\u53EF\u4EE5\u5B58\u653E\u5F88\u591A\u6587\u6863</li><li>\u6587\u6863\uFF08<code>Document</code>\uFF09 \u6587\u6863\u662F\u6570\u636E\u5E93\u4E2D\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u7C7B\u4F3C\u4E8E <code>JS</code> \u4E2D\u7684\u5BF9\u8C61</li></ul><p>\u53EF\u4EE5\u901A\u8FC7 <code>JSON</code> \u6587\u4EF6\u6765\u7406\u89E3 <code>MongoDB</code> \u4E2D\u7684\u6982\u5FF5\uFF1A \u4E00\u4E2A <code>JSON</code> \u6587\u4EF6\u597D\u6BD4\u662F\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u4E00\u4E2A <code>Mongodb</code> \u670D\u52A1\u4E0B\u53EF\u4EE5\u6709 <code>N</code> \u4E2A\u6570\u636E\u5E93\uFF1B<code>JSON</code> \u6587\u4EF6\u4E2D\u7684\u4E00\u7EA7\u5C5E\u6027\u7684\u6570\u7EC4\u503C\u597D\u6BD4\u662F\u96C6\u5408\uFF1B\u6570\u7EC4\u4E2D\u7684\u5BF9\u8C61\u597D\u6BD4\u662F\u6587\u6863\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\uFF0C\u6709\u65F6\u4E5F\u79F0\u4E4B\u4E3A\u5B57\u6BB5\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E00\u4E2A\u9879\u76EE\u4F7F\u7528\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u4E00\u4E2A\u96C6\u5408\u4F1A\u5B58\u50A8\u540C\u4E00\u79CD\u7C7B\u578B\u7684\u6570\u636E\u3002</p><h3 id="_8-2-\u64CD\u4F5C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_8-2-\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a> 8.2 \u64CD\u4F5C\u547D\u4EE4</h3><h4 id="_8-2-1-\u6570\u636E\u5E93\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_8-2-1-\u6570\u636E\u5E93\u547D\u4EE4" aria-hidden="true">#</a> 8.2.1 \u6570\u636E\u5E93\u547D\u4EE4</h4><p>\u663E\u793A\u6240\u6709\u7684\u6570\u636E\u5E93</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>show dbs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5207\u6362\u5230\u6307\u5B9A\u7684\u6570\u636E\u5E93\uFF0C\u5982\u679C\u6570\u636E\u5E93\u4E0D\u5B58\u5728\u4F1A\u81EA\u52A8\u521B\u5EFA\u6570\u636E\u5E93</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>use \u6570\u636E\u5E93\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u663E\u793A\u5F53\u524D\u6240\u5728\u7684\u6570\u636E\u5E93</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>db
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u5F53\u524D\u6570\u636E\u5E93</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>use \u5E93\u540D
db.dropDatabase()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_8-2-2-\u96C6\u5408\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_8-2-2-\u96C6\u5408\u547D\u4EE4" aria-hidden="true">#</a> 8.2.2 \u96C6\u5408\u547D\u4EE4</h4><p>\u521B\u5EFA\u96C6\u5408</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>db.createCollection(&#39;\u96C6\u5408\u540D\u79F0&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u663E\u793A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u96C6\u5408</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>show collections
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u67D0\u4E2A\u96C6\u5408</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>db.\u96C6\u5408\u540D.drop()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u91CD\u547D\u540D\u96C6\u5408</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>db.\u96C6\u5408\u540D.renameCollection(&#39;newName&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_8-2-3-\u6587\u6863\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_8-2-3-\u6587\u6863\u547D\u4EE4" aria-hidden="true">#</a> 8.2.3 \u6587\u6863\u547D\u4EE4</h4><p>\u63D2\u5165\u6587\u6863</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>db.\u96C6\u5408\u540D.insert(\u6587\u6863\u5BF9\u8C61)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u8BE2\u6587\u6863</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>db.\u96C6\u5408\u540D.find(\u67E5\u8BE2\u6761\u4EF6)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>_id</code> \u662F <code>MongoDB</code> \u81EA\u52A8\u751F\u6210\u7684\u552F\u4E00\u7F16\u53F7\uFF0C\u7528\u6765\u552F\u4E00\u6807\u8BC6\u6587\u6863</p><p>\u66F4\u65B0\u6587\u6863</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>db.\u96C6\u5408\u540D.update(\u67E5\u8BE2\u6761\u4EF6,\u65B0\u7684\u6587\u6863)
db.\u96C6\u5408\u540D.update({name:&#39;\u5F20\u4E09&#39;},{$set:{age:19}})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5220\u9664\u6587\u6863</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>db.\u96C6\u5408\u540D.remove(\u67E5\u8BE2\u6761\u4EF6)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_8-3-mongooose" tabindex="-1"><a class="header-anchor" href="#_8-3-mongooose" aria-hidden="true">#</a> 8.3 <code>Mongooose</code></h3><h4 id="_8-4-1-\u4ECB\u7ECD\u4E0E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_8-4-1-\u4ECB\u7ECD\u4E0E\u4F7F\u7528" aria-hidden="true">#</a> 8.4.1 \u4ECB\u7ECD\u4E0E\u4F7F\u7528</h4><blockquote><p><code>Mongoose</code> \u662F\u4E00\u4E2A <strong>\u5BF9\u8C61\u6587\u6863\u6A21\u578B\u5E93</strong>\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u4F7F\u7528\u4EE3\u7801\u64CD\u4F5C <code>MongoDB</code> \u6570\u636E\u5E93,\u5B98\u7F51 http://www.mongoosejs.net/\u3002</p></blockquote><p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// 1.\u5BFC\u5165 mongoose
const mongoose = require(&#39;mongoose&#39;)

// \u8BBE\u7F6E strictQuery \u4E3A true
mongoose.set(&#39;strictQuery&#39;, true)

// 2.\u8FDE\u63A5 mongodb \u670D\u52A1
mongoose.connect(&#39;mongodb://127.0.0.1:27017/test&#39;)

// 3.\u8BBE\u7F6E\u8FDE\u63A5\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570
mongoose.connection.once(&#39;open&#39;, () =&gt; {
    // \u521B\u5EFA\u65B0\u6587\u6863

    // 1\u3001\u521B\u5EFA\u6587\u6863\u7684\u7ED3\u6784\u6A21\u578B
    let bookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 2\u3001\u521B\u5EFA\u6587\u6863\u6A21\u578B\u5BF9\u8C61\uFF0C\u7528\u4E8E\u64CD\u4F5C\u6587\u6863
    // book \u5C31\u662F\u96C6\u5408\u540D\uFF0Cmongoose \u4F1A\u9ED8\u8BA4\u52A0\u4E0A s,\u5728mongodb\u6570\u636E\u5E93\u4E2D\u663E\u793A\u7684\u662F books
    let bookModel = mongoose.model(&#39;book&#39;, bookSchema);

    // 3\u3001\u64CD\u4F5C\u6587\u6863-\u65B0\u589E
    bookModel.create({
        name: &quot;\u6D77\u8FB9\u7684\u5361\u592B\u5361&quot;,
        author: &#39;\u6811\u4E0A\u6625\u6811&#39;,
        price: 49
    }, (err, data) =&gt; {
        // \u5224\u65AD\u662F\u5426\u6709\u9519\u8BEF
        if (err) {
            console.log(&#39;\u6587\u6863\u65B0\u589E\u5931\u8D25&#39;, err)
            return;
        }
        console.log(&#39;\u6587\u6863\u65B0\u589E\u6210\u529F&#39;, data)
    });

    console.log(&#39;\u8FDE\u63A5\u6210\u529F&#39;)
})

// 4.\u8BBE\u7F6E\u8FDE\u63A5\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570
mongoose.connection.on(&#39;error&#39;, () =&gt; {
    console.log(&#39;\u8FDE\u63A5\u5931\u8D25&#39;)
})

// 5.\u8BBE\u7F6E\u8FDE\u63A5\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570
mongoose.connection.on(&#39;close&#39;, () =&gt; {
    console.log(&#39;\u8FDE\u63A5\u5173\u95ED&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h4 id="_8-4-2-\u5B57\u6BB5\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_8-4-2-\u5B57\u6BB5\u64CD\u4F5C" aria-hidden="true">#</a> 8.4.2 \u5B57\u6BB5\u64CD\u4F5C</h4><p>\u6587\u6863\u7ED3\u6784\u53EF\u9009\u7684\u5E38\u7528\u5B57\u6BB5\u7C7B\u578B\u5217\u8868</p><table><thead><tr><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>String</code></td><td>\u5B57\u7B26\u4E32</td></tr><tr><td><code>Number</code></td><td>\u6570\u5B57</td></tr><tr><td><code>Boolean</code></td><td>\u5E03\u5C14\u503C</td></tr><tr><td><code>Array</code></td><td>\u6570\u7EC4\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>[]</code> \u6765\u6807\u8BC6</td></tr><tr><td><code>Date</code></td><td>\u65E5\u671F</td></tr><tr><td><code>Buffer</code></td><td><code>Buffer</code> \u5BF9\u8C61</td></tr><tr><td><code>Mixed</code></td><td>\u4EFB\u610F\u7C7B\u578B\uFF0C\u9700\u8981\u4F7F\u7528 <code>mongoose.Schema.Types.Mixed</code> \u6307\u5B9A</td></tr><tr><td><code>ObjectId</code></td><td>\u5BF9\u8C61 <code>ID</code>\uFF0C\u9700\u8981\u4F7F\u7528 <code>mongoose.Schema.Types.ObjectId</code> \u6307\u5B9A</td></tr><tr><td><code>Decimal128</code></td><td>\u9AD8\u7CBE\u5EA6\u6570\u5B57\uFF0C\u9700\u8981\u4F7F\u7528 <code>mongoose.Schema.Types.Decimal128</code> \u6307\u5B9A</td></tr></tbody></table><p><code>Mongoose</code> \u6709\u4E00\u4E9B\u5185\u5EFA\u9A8C\u8BC1\u5668\uFF0C\u53EF\u4EE5\u5BF9\u5B57\u6BB5\u503C\u8FDB\u884C\u9A8C\u8BC1</p><p>\u5FC5\u586B\u9879</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>name: {
    type: String,
    // \u8BBE\u7F6E\u662F\u5426\u5FC5\u586B
    // name: ValidatorError: Path \`name\` is required.
    required: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u9ED8\u8BA4\u503C</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>author: {
    type: String,
    // \u8BBE\u7F6E\u9ED8\u8BA4\u503C
    default: &#39;\u533F\u540D&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u679A\u4E3E\u503C</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>tages: {
    type: String,
    // \u679A\u4E3E
    // tages: ValidatorError: \`\u67B6\u7A7A\` is not a valid enum value for path \`tages\`.
    enum: [&#39;\u8A00\u60C5&#39;, &#39;\u5386\u53F2&#39;, &#39;\u52B1\u5FD7&#39;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u552F\u4E00\u503C</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>name: {
    type: String,
    // \u662F\u5426\u552F\u4E00
    unique: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>unique</code> \u9700\u8981<strong>\u91CD\u5EFA\u96C6\u5408</strong>\u624D\u80FD\u6709\u6548\u679C\u3002</p><blockquote><p>\u6C38\u8FDC\u4E0D\u8981\u76F8\u4FE1\u7528\u6237\u7684\u8F93\u5165!</p></blockquote><h4 id="_8-4-3-\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#_8-4-3-\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> 8.4.3 \u589E\u5220\u6539\u67E5</h4><p>\u63D2\u5165\u4E00\u6761</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>bookModel.create({
    name: &quot;\u6D77\u8FB9\u7684\u5361\u592B\u5361&quot;,
    author: &#39;\u6811\u4E0A\u6625\u6811&#39;,
    price: 49
}, (err, data) =&gt; {
    // \u5224\u65AD\u662F\u5426\u6709\u9519\u8BEF
    if (err) {
        console.log(&#39;\u6587\u6863\u65B0\u589E\u5931\u8D25&#39;, err)
        return;
    }
    console.log(&#39;\u6587\u6863\u65B0\u589E\u6210\u529F&#39;, data)
});
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6279\u91CF\u63D2\u5165</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>bookModel.insertMany([{
        name: &#39;\u897F\u6E38\u8BB0&#39;,
        author: &#39;\u5434\u627F\u6069&#39;,
        price: 19.9,
    }, {
        name: &#39;\u7EA2\u697C\u68A6&#39;,
        author: &#39;\u66F9\u96EA\u82B9&#39;,
        price: 29.9,
    }, {
        name: &#39;\u4E09\u56FD\u6F14\u4E49&#39;,
        author: &#39;\u7F57\u8D2F\u4E2D&#39;,
        price: 25.9,
    }, {
        name: &#39;\u6C34\u6D52\u4F20&#39;,
        author: &#39;\u65BD\u8010\u5EB5&#39;,
        price: 20.9,
    }, {
        name: &#39;\u6D3B\u7740&#39;,
        author: &#39;\u4F59\u534E&#39;,
        price: 19.9,
    }, {
        name: &#39;\u72C2\u98D9&#39;,
        author: &#39;\u5F90\u7EAA\u5468&#39;,
        price: 68,
    }, {
        name: &#39;\u5927\u9B4F\u80FD\u81E3&#39;,
        author: &#39;\u9ED1\u7537\u7235&#39;,
        price: 9.9,
    },
    {
        name: &#39;\u77E5\u5317\u6E38&#39;,
        author: &#39;\u6D1B\u6C34&#39;,
        price: 59,
    }, {
        name: &#39;\u9053\u541B&#39;,
        author: &#39;\u8DC3\u5343\u6101&#39;,
        price: 59,
    }, {
        name: &#39;\u4E03\u715E\u7891&#39;,
        author: &#39;\u6E38\u6CF3\u7684\u732B&#39;,
        price: 29,
    }, {
        name: &#39;\u72EC\u6E38&#39;,
        author: &#39;\u9152\u7CBE\u8FC7\u654F&#39;,
        price: 15,
    }, {
        name: &#39;\u5927\u6CFC\u7334&#39;,
        author: &#39;\u7532\u9C7C\u4E0D\u662F\u9F9F&#39;,
        price: 26,
    },
    {
        name: &#39;\u9ED1\u6697\u738B\u8005&#39;,
        author: &#39;\u53E4\u7FB2&#39;,
        price: 39,
    },
    {
        name: &#39;\u4E0D\u4E8C\u5927\u9053&#39;,
        author: &#39;\u6587\u5200\u624B\u4E88&#39;,
        price: 89,
    },
    {
        name: &#39;\u5927\u6CFC\u7334&#39;,
        author: &#39;\u7532\u9C7C\u4E0D\u662F\u9F9F&#39;,
        price: 59,
    },
    {
        name: &#39;\u957F\u5B89\u7684\u8354\u679D&#39;,
        author: &#39;\u9A6C\u4F2F\u5EB8&#39;,
        price: 45,
    },
    {
        name: &#39;\u547D\u8FD0&#39;,
        author: &#39;\u8521\u5D07\u8FBE&#39;,
        price: 59.8,
    },
    {
        name: &#39;\u5982\u96EA\u5982\u5C71&#39;,
        author: &#39;\u5F20\u5929\u7FFC&#39;,
        price: 58,
    },
    {
        name: &#39;\u4E09\u4F53&#39;,
        author: &#39;\u5218\u6148\u6B23&#39;,
        price: 23,
    },
    {
        name: &#39;\u79CB\u56ED&#39;,
        author: &#39;\u6768\u672C\u82AC&#39;,
        price: 38,
    },
    {
        name: &#39;\u767E\u5E74\u5B64\u72EC&#39;,
        author: &#39;\u8303\u6654&#39;,
        price: 39.5,
    },
    {
        name: &#39;\u5728\u7EC6\u96E8\u4E2D\u547C\u558A&#39;,
        author: &#39;\u4F59\u534E&#39;,
        price: 25,
    },
], (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6279\u91CF\u65B0\u589E\u5931\u8D25&#39;, error)
        return
    }
    console.log(&#39;\u6279\u91CF\u65B0\u589E\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><p>\u5220\u9664\u4E00\u6761\u6570\u636E</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>bookModel.deleteOne({name: &#39;\u897F\u6E38\u8BB0&#39;}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u5220\u9664\u6587\u6863\u5931\u8D25&#39;, data)
        return
    }
    console.log(&#39;\u5220\u9664\u6587\u6863\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6279\u91CF\u5220\u9664</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>bookModel.deleteMany({
    name: &#39;\u6D77\u8FB9\u7684\u5361\u592B\u5361&#39;
}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6279\u91CF\u5220\u9664\u5931\u8D25&#39;, error)
        return
    }
    console.log(&#39;\u6279\u91CF\u5220\u9664\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u66F4\u65B0\u4E00\u6761\u6570\u636E</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>bookModel.updateOne({
    name: &#39;\u6D77\u8FB9\u7684\u5361\u592B\u5361&#39;
}, {
    name: &#39;\u897F\u6E38\u8BB0&#39;,
    author: &#39;\u5434\u627F\u6069&#39;,
    price: 59
}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u66F4\u65B0\u6587\u6863\u5931\u8D25&#39;, error)
        return;
    }

    console.log(&#39;\u66F4\u65B0\u6587\u6863\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6279\u91CF\u66F4\u65B0\u6570\u636E</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code> bookModel.updateMany({
    name: &#39;\u6D77\u8FB9\u7684\u5361\u592B\u5361&#39;
}, {
    price: 89
}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6279\u91CF\u66F4\u65B0\u6587\u6863\u5931\u8D25&#39;, error)
        return
    }
    console.log(&#39;\u6279\u91CF\u66F4\u65B0\u6587\u6863\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u67E5\u8BE2\u4E00\u6761\u6570\u636E</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>bookModel.findOne({name: &#39;\u897F\u6E38\u8BB0&#39;}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u8BFB\u53D6\u5355\u4E2A\u6587\u6863\u9519\u8BEF&#39;, error)
        return
    }
    console.log(&#39;\u8BFB\u53D6\u5355\u4E2A\u6587\u6863\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6279\u91CF\u67E5\u8BE2\u6570\u636E</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>bookModel.find({name: &#39;\u897F\u6E38\u8BB0&#39;}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u6863\u8BFB\u53D6\u9519\u8BEF&#39;, error)
        return;
    }
    console.log(&#39;\u6587\u6863\u8BFB\u53D6\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_8-4-4-\u6761\u4EF6\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_8-4-4-\u6761\u4EF6\u63A7\u5236" aria-hidden="true">#</a> 8.4.4 \u6761\u4EF6\u63A7\u5236</h4><p>\u5728 <code>MongoDB</code> \u4E0D\u80FD <code>&gt;</code>\u3001<code>&lt;</code>\u3001<code>&gt;=</code>\u3001<code>&lt;=</code>\u3001<code>!==</code> \u7B49\u8FD0\u7B97\u7B26\uFF0C\u9700\u8981\u4F7F\u7528\u66FF\u4EE3\u7B26\u53F7\uFF1A</p><p><code>&gt;</code> \u4F7F\u7528 <code>$gt</code><code>&lt;</code> \u4F7F\u7528 <code>$lt</code><code>&gt;=</code> \u4F7F\u7528 <code>$gte</code><code>&lt;=</code> \u4F7F\u7528 <code>$lte</code><code>!==</code> \u4F7F\u7528 <code>$ne</code></p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u83B7\u53D6\u4EF7\u683C \u5C0F\u4E8E 20 \u7684\u56FE\u4E66
bookModel.find({price: {$lt: 20}}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u6863\u8BFB\u53D6\u9519\u8BEF&#39;, error)
        return;
    }
    console.log(&#39;\u6587\u6863\u8BFB\u53D6\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u903B\u8F91\u8FD0\u7B97 <code>$or</code> \u903B\u8F91\u6216\u7684\u60C5\u51B5</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//\u66F9\u96EA\u82B9 \u6216\u8005 \u4F59\u534E\u7684\u4E66
bookModel.find({
    $or: [
        {
            author: &#39;\u66F9\u96EA\u82B9&#39;
        },
        {
            author: &#39;\u4F59\u534E&#39;
        }
    ]
}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u6863\u8BFB\u53D6\u9519\u8BEF&#39;, error)
        return
    }
    console.log(&#39;\u6587\u6863\u8BFB\u53D6\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>$and</code> \u903B\u8F91\u4E0E\u7684\u60C5\u51B5</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//\u4EF7\u683C\u5927\u4E8E\u7B49\u4E8E 30 \u4E14\u5C0F\u4E8E 70
bookModel.find({
    $and: [
        {
            price: {
                $gte: 30
            }
        }, {
            price: {
                $lt: 70
            }
        }
    ]
}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u6863\u8BFB\u53D6\u9519\u8BEF&#39;, error)
        return;
    }
    console.log(&#39;\u6587\u6863\u8BFB\u53D6\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u6B63\u5219\u5339\u914D \u6761\u4EF6\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>JS</code> \u7684\u6B63\u5219\u8BED\u6CD5\uFF0C\u901A\u8FC7\u6B63\u5219\u53EF\u4EE5\u8FDB\u884C\u6A21\u7CCA\u67E5\u8BE2</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>//\u6B63\u5219\u8868\u8FBE\u5F0F, \u641C\u7D22\u4E66\u7C4D\u540D\u79F0\u4E2D\u5E26\u6709 \`\u4E09\` \u7684\u56FE\u4E66
let queryCondition = &#39;\u4E09&#39;
bookModel.find({name: /\u4E09/}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u6863\u8BFB\u53D6\u9519\u8BEF&#39;, error)
        return;
    }
    console.log(&#39;\u6587\u6863\u8BFB\u53D6\u6210\u529F&#39;, data)
})

bookModel.find({name: new RegExp(queryCondition)}, (error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u6863\u8BFB\u53D6\u9519\u8BEF&#39;, error)
        return;
    }
    console.log(&#39;\u6587\u6863\u8BFB\u53D6\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="_8-4-5-\u4E2A\u6027\u5316\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#_8-4-5-\u4E2A\u6027\u5316\u8BFB\u53D6" aria-hidden="true">#</a> 8.4.5 \u4E2A\u6027\u5316\u8BFB\u53D6</h4><p>\u5B57\u6BB5\u7B5B\u9009</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u53EA\u67E5\u8BE2 \u4E66\u540D \u4F5C\u8005
// 1:\u67E5\u8BE2 0:\u4E0D\u67E5\u8BE2
bookModel.find().select({name: 1, author: 1, _id: 0}).exec((error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u6863\u8BFB\u53D6\u9519\u8BEF&#39;, error)
        return
    }
    console.log(&#39;\u6587\u6863\u8BFB\u53D6\u6210\u529F&#39;, data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6570\u636E\u6392\u5E8F</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F
// 1:\u5347\u5E8F -1:\u964D\u5E8F
bookModel.find({author: &#39;\u4F59\u534E&#39;}).select({name: 1, price: 1}).sort({price: -1}).exec((error, data) =&gt; {
    if (error) {
        console.log(&#39;\u6587\u4EF6\u8BFB\u53D6\u9519\u8BEF&#39;, error)
        return
    }
    console.log(data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6570\u636E\u622A\u53D6</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u6570\u636E\u5217\u8868\u96C6\u5408\u622A\u53D6
// \u53EF\u7528\u4E8E\u5206\u9875
bookModel.find()
    .select({name: 1, author: 1, _id: 0})
    .sort({price: -1})
    .skip(2)
    .limit(3)
    .exec((error, data) =&gt; {
        if (error) {
            console.log(&#39;\u6587\u4EF6\u8BFB\u53D6\u9519\u8BEF&#39;, error)
            return
        }
        console.log(data)
    })
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_9-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_9-\u63A5\u53E3" aria-hidden="true">#</a> 9. \u63A5\u53E3</h2><h3 id="_9-1-restful-api" tabindex="-1"><a class="header-anchor" href="#_9-1-restful-api" aria-hidden="true">#</a> 9.1 <code>RESTful API</code></h3><p><code>RESTful API</code> \u662F\u4E00\u79CD\u7279\u6B8A\u98CE\u683C\u7684\u63A5\u53E3\uFF0C\u4E3B\u8981\u7279\u70B9\u6709\u5982\u4E0B\u51E0\u4E2A\uFF1A</p><ul><li><code>URL</code> \u4E2D\u7684\u8DEF\u5F84\u8868\u793A\u8D44\u6E90 \uFF0C\u8DEF\u5F84\u4E2D\u4E0D\u80FD\u6709\u52A8\u8BCD \uFF0C\u4F8B\u5982 <code>create</code> , <code>delete</code> , <code>update</code> \u7B49\u8FD9\u4E9B\u90FD\u4E0D\u80FD\u6709</li><li>\u64CD\u4F5C\u8D44\u6E90\u8981\u4E0E <code>HTTP</code> \u8BF7\u6C42\u65B9\u6CD5\u5BF9\u5E94</li><li>\u64CD\u4F5C\u7ED3\u679C\u8981\u4E0E <code>HTTP</code> \u54CD\u5E94\u72B6\u6001\u7801\u5BF9\u5E94</li></ul><p>\u89C4\u5219\u793A\u4F8B\uFF1A</p><table><thead><tr><th>\u64CD\u4F5C</th><th>\u8BF7\u6C42\u7C7B\u578B</th><th>URL</th></tr></thead><tbody><tr><td>\u65B0\u589E\u6B4C\u66F2</td><td><code>POST</code></td><td><code>/song</code></td></tr><tr><td>\u5220\u9664\u6B4C\u66F2</td><td><code>DELETE</code></td><td><code>/song/10</code></td></tr><tr><td>\u4FEE\u6539\u6B4C\u66F2</td><td><code>PUT</code></td><td><code>/song/10</code></td></tr><tr><td>\u4FEE\u6539\u6B4C\u66F2</td><td><code>PATCH</code></td><td><code>/song/10</code></td></tr><tr><td>\u83B7\u53D6\u6240\u6709\u6B4C\u66F2</td><td><code>GET</code></td><td><code>/song</code></td></tr><tr><td>\u83B7\u53D6\u5355\u4E2A\u6B4C\u66F2</td><td><code>GET</code></td><td><code>/song/10</code></td></tr></tbody></table><h3 id="_9-2-json-server" tabindex="-1"><a class="header-anchor" href="#_9-2-json-server" aria-hidden="true">#</a> 9.2 <code>json-server</code></h3><blockquote><p><code>json-server</code> \u672C\u8EAB\u662F\u4E00\u4E2A <code>JS</code> \u7F16\u5199\u7684\u5DE5\u5177\u5305\uFF0C\u53EF\u4EE5\u5FEB\u901F\u642D\u5EFA <code>RESTful API</code> \u670D\u52A1\u3002</p></blockquote><p>\u5B98\u65B9\u5730\u5740: https://github.com/typicode/json-server</p><p>\u64CD\u4F5C\u6B65\u9AA4\uFF1A \u5168\u5C40\u5B89\u88C5 <code>json-server</code></p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>npm i -g json-server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA <code>JSON</code> \u6587\u4EF6\uFF08<code>db.json</code>\uFF09\uFF0C\u7F16\u5199\u57FA\u672C\u7ED3\u6784</p><div class="language-JSON ext-JSON line-numbers-mode"><pre class="language-JSON"><code>{
    &quot;song&quot;: [
        { &quot;id&quot;: 1, &quot;name&quot;: &quot;\u5E72\u676F&quot;, &quot;singer&quot;: &quot;\u4E94\u6708\u5929&quot; },
        { &quot;id&quot;: 2, &quot;name&quot;: &quot;\u5F53&quot;, &quot;singer&quot;: &quot;\u52A8\u529B\u706B\u8F66&quot; },
        { &quot;id&quot;: 3, &quot;name&quot;: &quot;\u4E0D\u80FD\u8BF4\u7684\u79D8\u5BC6&quot;, &quot;singer&quot;: &quot;\u5468\u6770\u4F26&quot; }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4EE5 <code>JSON</code> \u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u4F5C\u4E3A\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4</p><div class="language-Bash ext-Bash line-numbers-mode"><pre class="language-Bash"><code>json-server --watch db.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9ED8\u8BA4\u76D1\u542C\u7AEF\u53E3\u4E3A <code>3000</code></p><h2 id="_10-\u4F1A\u8BDD\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_10-\u4F1A\u8BDD\u63A7\u5236" aria-hidden="true">#</a> 10. \u4F1A\u8BDD\u63A7\u5236</h2><blockquote><p>\u6240\u8C13\u4F1A\u8BDD\u63A7\u5236\u5C31\u662F\u5BF9\u4F1A\u8BDD\u8FDB\u884C\u63A7\u5236\u3002<code>HTTP</code> \u662F\u4E00\u79CD\u65E0\u72B6\u6001\u7684\u534F\u8BAE\uFF0C\u5B83\u6CA1\u6709\u529E\u6CD5\u533A\u5206\u591A\u6B21\u7684\u8BF7\u6C42\u662F\u5426\u6765\u81EA\u4E8E\u540C\u4E00\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u65E0\u6CD5\u533A\u5206\u7528\u6237\u800C\u4EA7\u54C1\u4E2D\u53C8\u5927\u91CF\u5B58\u5728\u7684\u8FD9\u6837\u7684\u9700\u6C42\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u901A\u8FC7<strong>\u4F1A\u8BDD\u63A7\u5236</strong>\u6765\u89E3\u51B3\u8BE5\u95EE\u9898\u3002</p></blockquote><p>\u5E38\u89C1\u7684\u4F1A\u8BDD\u63A7\u5236\u6280\u672F\u6709\u4E09\u79CD\uFF1A</p><ul><li><code>cookie</code></li><li><code>session</code></li><li><code>token</code></li></ul><h3 id="_10-1-cookie" tabindex="-1"><a class="header-anchor" href="#_10-1-cookie" aria-hidden="true">#</a> 10.1 <code>cookie</code></h3><blockquote><p><code>cookie</code> \u662F <code>HTTP</code> \u670D\u52A1\u5668\u53D1\u9001\u5230\u7528\u6237\u6D4F\u89C8\u5668\u5E76\u4FDD\u5B58\u5728\u672C\u5730\u7684\u4E00\u5C0F\u5757\u6570\u636E\uFF0C<strong>\u4FDD\u5B58\u5728\u6D4F\u89C8\u5668\u7AEF</strong>\u7684\u4E00\u5C0F\u5757\u6570\u636E\u4E14\u662F\u6309\u7167\u57DF\u540D\u5212\u5206\u4FDD\u5B58\u7684\u3002</p></blockquote><p><code>express</code> \u4E2D\u53EF\u4EE5\u4F7F\u7528 <code>cookie-parser</code> \u6765\u8FDB\u884C\u5BF9 <code>cookie</code> \u7684\u64CD\u4F5C\u3002</p><p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5BFC\u5165express
const express = require(&#39;express&#39;)
const cookieParser = require(&#39;cookie-parser&#39;)

// \u521B\u5EFA\u5E94\u7528\u5BF9\u8C61
const app = express()
app.use(cookieParser())

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/&#39;, (req, resp) =&gt; {
    resp.send(&#39;home&#39;)
})

// \u8BBE\u7F6Ecookie
app.get(&#39;/set-cookie&#39;, (req, resp) =&gt; {
    // \u5728\u6D4F\u89C8\u5668\u5173\u95ED\u65F6\u4F1A\u9500\u6BC1
    // resp.cookie(&#39;name&#39;, &#39;zhangsan&#39;)

    // \u8BBE\u7F6E cookie \u7684\u8FC7\u671F\u65F6\u95F4\u3002\u8BBE\u7F6E\u4E00\u5206\u949F\u4EE5\u540E\u8FC7\u671F
    resp.cookie(&#39;name&#39;, &#39;lisi&#39;, {maxAge: 60 * 1000})

    resp.send(&#39;hello world&#39;)
})

// \u83B7\u53D6 cookie
app.get(&#39;/get-cookie&#39;, (req, resp) =&gt; {
    console.log(req.cookies)
    resp.send(\`\u6B22\u8FCE\u60A8\${req.cookies.name}\`)
})

// \u5220\u9664 cookie
app.get(&#39;/remove-cookie&#39;, (req, resp) =&gt; {
    resp.clearCookie(&#39;name&#39;)
    resp.send(&#39;\u5220\u9664cookie\u6210\u529F&#39;)
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(3000, () =&gt; {
    console.log(&#39;\u670D\u52A1\u542F\u52A8\u6210\u529F&#39;)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><blockquote><p>\u4E0D\u540C\u6D4F\u89C8\u5668\u4E2D\u7684 <code>cookie</code> \u662F\u76F8\u4E92\u72EC\u7ACB\u7684\uFF0C\u4E0D\u5171\u4EAB\u3002</p></blockquote><h3 id="_10-2-session" tabindex="-1"><a class="header-anchor" href="#_10-2-session" aria-hidden="true">#</a> 10.2 <code>session</code></h3><blockquote><p><code>session</code> \u662F\u4FDD\u5B58\u5728<strong>\u670D\u52A1\u5668\u7AEF</strong>\u7684\u4E00\u5757\u513F\u6570\u636E \uFF0C\u4FDD\u5B58\u5F53\u524D\u8BBF\u95EE\u7528\u6237\u7684\u76F8\u5173\u4FE1\u606F\u3002</p></blockquote><p><code>express</code> \u4E2D\u53EF\u4EE5\u4F7F\u7528 <code>express-session</code> \u5BF9 <code>session</code> \u8FDB\u884C\u64CD\u4F5C\u3002 \u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5F15\u5165\u6A21\u5757
const express = require(&#39;express&#39;)
const session = require(&#39;express-session&#39;)
const MongoStore = require(&#39;connect-mongo&#39;)

// \u521B\u5EFA\u5E94\u7528\u670D\u52A1
const app = express()
// \u8BBE\u7F6E session \u7684\u4E2D\u95F4\u4EF6
app.use(session({
    // \u8BBE\u7F6E cookie \u7684 name\uFF0C\u9ED8\u8BA4\u503C\u662F\uFF1Aconnect.sid
    name: &#39;sid&#39;,
    // \u53C2\u4E0E\u52A0\u5BC6\u7684\u5B57\u7B26\u4E32\uFF08\u53C8\u79F0\u7B7E\u540D\uFF09  \u52A0\u76D0
    secret: &#39;123456&#39;,
    // \u662F\u5426\u4E3A\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8BBE\u7F6E\u4E00\u4E2Acookie\u7528\u6765\u5B58\u50A8session\u7684id
    saveUninitialized: false,
    // \u662F\u5426\u5728\u6BCF\u6B21\u8BF7\u6C42\u65F6\u91CD\u65B0\u4FDD\u5B58session  20 \u5206\u949F    4:00  4:20
    resave: true,
    store: MongoStore.create({
        //\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u914D\u7F6E
        mongoUrl: &#39;mongodb://127.0.0.1:27017/test&#39;
    }),
    cookie: {
        // \u5F00\u542F\u540E\u524D\u7AEF\u65E0\u6CD5\u901A\u8FC7 JS \u64CD\u4F5C
        httpOnly: true,
        // \u8FD9\u4E00\u6761 \u662F\u63A7\u5236 sessionID \u7684\u8FC7\u671F\u65F6\u95F4\u7684\uFF01\uFF01\uFF01 5\u5206\u949F\u8FC7\u671F
        maxAge: 5 * 60 * 1000
    }
}))

// \u521B\u5EFA\u8DEF\u7531
app.get(&#39;/&#39;, (req, resp) =&gt; {
    resp.send(&#39;home&#39;)
})

// \u767B\u5F55\u65F6\u8BBE\u7F6E session
app.get(&#39;/login&#39;, (req, resp) =&gt; {
    // \u6821\u9A8C\u4E00\u4E0B\u7528\u6237\u540D\u5BC6\u7801\u662F\u5426\u6B63\u786E
    if (req.query.username === &#39;admin&#39; &amp;&amp; req.query.password === &#39;admin&#39;) {
        // \u8BBE\u7F6E session \u4FE1\u606F
        req.session.username = req.query.username
        req.session.uid = &#39;258aefccc&#39;
        resp.send(&#39;\u767B\u5F55\u6210\u529F&#39;)
    } else {
        resp.send(&#39;\u767B\u5F55\u5931\u8D25&#39;)
    }
})

// \u83B7\u53D6 session
app.get(&#39;/cart&#39;, (req, resp) =&gt; {
    // \u68C0\u6D4B session \u662F\u5426\u5B58\u5728\u7528\u6237\u4FE1\u606F
    if (req.session.username) {
        resp.send(\`\u6B22\u8FCE\u60A8\${req.session.username}\`)
    } else {
        resp.send(&#39;\u8BF7\u5148\u767B\u5F55&#39;)
    }
})

// \u9000\u51FA\u767B\u5F55\u5220\u9664 session
app.get(&#39;/logout&#39;, (req, resp) =&gt; {
    req.session.destroy(() =&gt; {
        resp.send(&#39;\u6210\u529F\u9000\u51FA\u767B\u5F55&#39;)
    })
})

// \u76D1\u542C\u7AEF\u53E3\uFF0C\u542F\u52A8\u670D\u52A1
app.listen(3000)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><p><strong><code>session</code> \u548C <code>cookie</code> \u7684\u533A\u522B</strong><code>cookie</code> \u548C <code>session</code> \u7684\u533A\u522B\u4E3B\u8981\u6709\u5982\u4E0B\u51E0\u70B9\uFF1A</p><ul><li>\u5B58\u5728\u7684\u4F4D\u7F6E <ul><li><code>cookie</code>\uFF1A\u6D4F\u89C8\u5668\u7AEF</li><li><code>session</code>\uFF1A\u670D\u52A1\u7AEF</li></ul></li><li>\u5B89\u5168\u6027 <ul><li><code>cookie</code> \u662F\u4EE5\u660E\u6587\u7684\u65B9\u5F0F\u5B58\u653E\u5728\u5BA2\u6237\u7AEF\u7684\uFF0C\u5B89\u5168\u6027\u76F8\u5BF9\u8F83\u4F4E</li><li><code>session</code> \u5B58\u653E\u4E8E\u670D\u52A1\u5668\u4E2D\uFF0C\u6240\u4EE5\u5B89\u5168\u6027<strong>\u76F8\u5BF9\u8F83\u597D</strong></li></ul></li><li>\u7F51\u7EDC\u4F20\u8F93\u91CF <ul><li><code>cookie</code> \u8BBE\u7F6E\u5185\u5BB9\u8FC7\u591A\u4F1A\u589E\u5927\u62A5\u6587\u4F53\u79EF\uFF0C\u4F1A\u5F71\u54CD\u4F20\u8F93\u6548\u7387</li><li><code>session</code> \u6570\u636E\u5B58\u50A8\u5728\u670D\u52A1\u5668\uFF0C\u53EA\u662F\u901A\u8FC7 <code>cookie</code> \u4F20\u9012 <code>id</code>\uFF0C\u6240\u4EE5\u4E0D\u5F71\u54CD\u4F20\u8F93\u6548\u7387</li></ul></li><li>\u5B58\u50A8\u9650\u5236 <ul><li>\u6D4F\u89C8\u5668\u9650\u5236\u5355\u4E2A <code>cookie</code> \u4FDD\u5B58\u7684\u6570\u636E\u4E0D\u80FD\u8D85\u8FC7 <code>4K</code>\uFF0C\u4E14\u5355\u4E2A\u57DF\u540D\u4E0B\u7684\u5B58\u50A8\u6570\u91CF\u4E5F\u6709\u9650\u5236</li><li><code>session</code> \u6570\u636E\u5B58\u50A8\u5728\u670D\u52A1\u5668\u4E2D\uFF0C\u6240\u4EE5\u6CA1\u6709\u8FD9\u4E9B\u9650\u5236</li></ul></li></ul><h3 id="_10-3-token" tabindex="-1"><a class="header-anchor" href="#_10-3-token" aria-hidden="true">#</a> 10.3 <code>token</code></h3><blockquote><p><code>token</code> \u662F\u670D\u52A1\u7AEF\u751F\u6210\u5E76\u8FD4\u56DE\u7ED9 <code>HTTP</code> \u5BA2\u6237\u7AEF\u7684\u4E00\u4E32\u52A0\u5BC6\u5B57\u7B26\u4E32\uFF0C <code>token</code> \u4E2D\u4FDD\u5B58\u7740\u7528\u6237\u4FE1\u606F\u3002</p></blockquote><p><code>token</code> \u7684\u7279\u70B9\uFF1A</p><ul><li>\u670D\u52A1\u7AEF\u538B\u529B\u66F4\u5C0F</li><li>\u6570\u636E\u5B58\u50A8\u5728\u5BA2\u6237\u7AEF</li><li>\u76F8\u5BF9\u66F4\u5B89\u5168</li><li>\u6570\u636E\u52A0\u5BC6</li><li>\u53EF\u4EE5\u907F\u514D <code>CSRF</code>\uFF08\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\uFF09</li><li>\u6269\u5C55\u6027\u66F4\u5F3A</li><li>\u670D\u52A1\u95F4\u53EF\u4EE5\u5171\u4EAB</li><li>\u589E\u52A0\u670D\u52A1\u8282\u70B9\u66F4\u7B80\u5355</li></ul><p><code>JWT</code>\uFF08<code>JSON Web Token</code>\uFF09\u662F\u76EE\u524D\u6700\u6D41\u884C\u7684\u8DE8\u57DF\u8BA4\u8BC1\u89E3\u51B3\u65B9\u6848\uFF0C\u53EF\u7528\u4E8E\u57FA\u4E8E <code>token</code> \u7684\u8EAB\u4EFD\u9A8C\u8BC1 <code>JWT</code> \u4F7F <code>token</code> \u7684\u751F\u6210\u4E0E\u6821\u9A8C\u66F4\u89C4\u8303\uFF0C\u53EF\u4EE5\u4F7F\u7528 jsonwebtoken \u5305 \u6765\u64CD\u4F5C <code>token</code>.</p><p>\u4EE3\u7801\u64CD\u4F5C\uFF1A</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// \u5F15\u5165 jwt
const jwt = require(&#39;jsonwebtoken&#39;)

// \u751F\u6210 token
// jwt.sign(\u7528\u6237\u6570\u636E\uFF0C\u52A0\u5BC6\u5B57\u7B26\u4E32\uFF0C\u914D\u7F6E\u5BF9\u8C61)
let token = jwt.sign({
    username: &#39;admin&#39;
}, &#39;123456&#39;, {
    // \u5355\u4F4D\u79D2 60\u79D2\u540E\u8FC7\u671F
    expiresIn: 60
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg1NTE5NTkzLCJleHAiOjE2ODU1MTk2NTN9.IP90SEMbkzaBGnxVDoq63IHWzQ8crbfapvYCylGZhhg
console.log(token)

// \u6821\u9A8C token
jwt.verify(token, &#39;123456&#39;, (error, data) =&gt; {
    if (error) {
        console.log(&#39;token \u6821\u9A8C\u5931\u8D25&#39;, error)
        return
    }
    console.log(data)
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,539);function r(l,p){return a}var i=n(e,[["render",r],["__file","nodejs.html.vue"]]);export{i as default};
