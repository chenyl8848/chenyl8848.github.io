import{_ as e,f as s}from"./app.06d697e7.js";const n={},l=s(`<h1 id="linux-\u5B89\u88C5\u5378\u8F7D-mysql" tabindex="-1"><a class="header-anchor" href="#linux-\u5B89\u88C5\u5378\u8F7D-mysql" aria-hidden="true">#</a> Linux \u5B89\u88C5\u5378\u8F7D MySQL</h1><h2 id="mysql-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#mysql-\u5B89\u88C5" aria-hidden="true">#</a> MySQL \u5B89\u88C5</h2><ol><li><p>\u51C6\u5907\u4E00\u53F0 Linux \u670D\u52A1\u5668</p></li><li><p>\u4E0B\u8F7D Linux \u7248 MySQL \u5B89\u88C5\u5305</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://downloads.mysql.com/archives/community/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li><p>\u4E0A\u4F20 MySQL \u5B89\u88C5\u5305\u81F3\u670D\u52A1\u5668</p></li><li><p>\u521B\u5EFA\u76EE\u5F55\uFF0C\u5E76\u89E3\u538B\u5230\u5BF9\u5E94\u7684\u76EE\u5F55</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir mysql

tar -xvf mysql-8.0.26-1.el7.x86_64.rpm-bundle.tar -C mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="5"><li>\u6309\u7167\u5982\u4E0B\u987A\u5E8F\u5B89\u88C5 MySQL \u7684\u5B89\u88C5\u5305</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd mysql

rpm -ivh mysql-community-common-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-client-plugins-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-libs-8.0.26-1.el7.x86_64.rpm 

rpm -ivh mysql-community-libs-compat-8.0.26-1.el7.x86_64.rpm

rpm -ivh  mysql-community-devel-8.0.26-1.el7.x86_64.rpm

## \u5B89\u88C5 mysql-community-devel-8.0.26-1.el7.x86_64.rpm \u65F6\uFF0C\u82E5\u63D0\u793A\u7F3A\u5C11 openssl-devel,\u9700\u8981\u5148\u5B89\u88C5 openssl-devel
yum install openssl-devel

rpm -ivh mysql-community-client-8.0.26-1.el7.x86_64.rpm

rpm -ivh  mysql-community-server-8.0.26-1.el7.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="6"><li>\u542F\u52A8 MySQL \u670D\u52A1</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u91CD\u542F MySQL \u670D\u52A1</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u505C\u6B62 MySQL \u670D\u52A1</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="7"><li>MySQL \u670D\u52A1\u542F\u52A8\u65F6\uFF0C\u4F1A\u5C06 root \u5BC6\u7801\u8F93\u51FA\u5230\u65E5\u5FD7 <code>/var/log/mysqld.log</code> \u4E2D\uFF0C\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u67E5\u770B\u5BC6\u7801</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grep &#39;temporary password&#39; /var/log/mysqld.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="8"><li>\u8FDB\u5165 MySQL \u5BA2\u6237\u7AEF</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u8F93\u5165\u4E0A\u8FF0\u67E5\u8BE2\u5230\u7684\u81EA\u52A8\u751F\u6210\u7684\u5BC6\u7801, \u5B8C\u6210\u767B\u5F55</p></blockquote><ol start="9"><li>\u4FEE\u6539 root \u7528\u6237\u5BC6\u7801</li></ol><blockquote><p>MySQL \u670D\u52A1\u9ED8\u8BA4\u751F\u6210\u7684\u5BC6\u7801\u8F83\u96BE\u4E8E\u8BB0\u5FC6\uFF0C\u53EF\u4FEE\u6539\u6210\u81EA\u5DF1\u719F\u6089\u7684\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ALTER  USER  &#39;root&#39;@&#39;localhost&#39;  IDENTIFIED BY &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6267\u884C\u4E0A\u8FF0\u7684SQL\u4F1A\u62A5\u9519\uFF0C\u539F\u56E0\u662F\u56E0\u4E3A\u8BBE\u7F6E\u7684\u5BC6\u7801\u592A\u7B80\u5355\uFF0C\u5BC6\u7801\u590D\u6742\u5EA6\u4E0D\u591F\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u8BBE\u7F6E\u5BC6\u7801\u7684\u590D\u6742\u5EA6\u548C\u957F\u5EA6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## \u8BBE\u7F6E\u5BC6\u7801\u590D\u6742\u5EA6\u4E3A\u4F4E 0-\u4F4E 1-\u4E2D 2-\u9AD8 
set global validate_password.policy = 0;

## \u8BBE\u7F6E\u5BC6\u7801\u957F\u5EA6
set global validate_password.length = 6;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u964D\u4F4E\u5BC6\u7801\u7684\u6821\u9A8C\u89C4\u5219\u4E4B\u540E\uFF0C\u518D\u6B21\u6267\u884C\u4E0A\u8FF0\u4FEE\u6539\u5BC6\u7801\u7684\u6307\u4EE4\u3002</p><ol start="10"><li>\u521B\u5EFA\u7528\u6237</li></ol><p>\u9ED8\u8BA4\u7684 root \u7528\u6237\u53EA\u80FD\u5F53\u524D\u8282\u70B9 localhost \u8BBF\u95EE\uFF0C\u662F\u65E0\u6CD5\u8FDC\u7A0B\u8BBF\u95EE\u7684\uFF0C\u8FD8\u9700\u8981\u521B\u5EFA\u4E00\u4E2A root \u8D26\u6237\uFF0C\u7528\u4E8E\u8FDC\u7A0B\u8BBF\u95EE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create user &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="11"><li>\u5E76\u7ED9 root \u7528\u6237\u5206\u914D\u6743\u9650</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>grant all on *.* to &#39;root&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="12"><li>\u91CD\u65B0\u8FDE\u63A5 MySQL</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u8F93\u5165\u5BC6\u7801</p><ol start="13"><li>\u901A\u8FC7\u5BA2\u6237\u7AEF\u5DE5\u5177\u8FDC\u7A0B\u8FDE\u63A5 MySQL</li></ol><h2 id="mysql-\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#mysql-\u5378\u8F7D" aria-hidden="true">#</a> MySQL \u5378\u8F7D</h2><ol><li>\u505C\u6B62MySQL\u670D\u52A1</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u67E5\u8BE2 MySQL \u7684\u5B89\u88C5\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rpm -qa | grep -i mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u5378\u8F7D\u67E5\u8BE2\u51FA\u6765\u7684\u6240\u6709\u7684 MySQL \u5B89\u88C5\u5305</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rpm -e mysql-community-client-plugins-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-server-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-common-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-libs-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-client-8.0.26-1.el7.x86_64 --nodeps

rpm -e mysql-community-libs-compat-8.0.26-1.el7.x86_64 --nodeps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="4"><li>\u5220\u9664MySQL\u7684\u6570\u636E\u5B58\u653E\u76EE\u5F55</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf /var/lib/mysql/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u5220\u9664MySQL\u7684\u914D\u7F6E\u6587\u4EF6\u5907\u4EFD</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rm -rf /etc/my.cnf.rpmsave
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,46);function a(r,i){return l}var m=e(n,[["render",a],["__file","Linux_MySQL.html.vue"]]);export{m as default};
