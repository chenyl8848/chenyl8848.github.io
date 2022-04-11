const e={key:"v-f50dfad8",path:"/middleware/zookeeper/Zookeeper.html",title:"\u521D\u5B66Zookeeper",lang:"zh-CN",frontmatter:{title:"\u521D\u5B66Zookeeper",date:"2022-04-10T00:00:00.000Z",category:["\u4E2D\u95F4\u4EF6","MQ"],tag:["Zookeeper"],summary:`# Zookeeper

\u5B66\u4E60\u89C6\u9891\u3010\u7F16\u7A0B\u4E0D\u826F\u4EBA\u3011

# 1. ZK\u7B80\u4ECB

dubbo\u6846\u67B6 springcloud \u6846\u67B6      zk  \u6CE8\u518C\u4E2D\u5FC3    AService     BService
Hadoop Hbase \u7EC4\u4EF6   \u96C6\u7FA4\u67B6\u6784   zk  \u96C6\u7FA4\u7BA1\u7406\u8005
zk\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501  redis\u5206\u5E03\u5F0F


ZooKeeper(\u52A8\u7269\u56ED\u7BA1\u7406\u8005) \u7B80\u79F0 ZK\uFF0C\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\uFF0C\u5F00\u653E\u6E90\u7801\u7684\u5206\u5E03\u5F0F\u5E94\u7528\u7A0B\u5E8F\u534F\u8C03\u670D\u52A1\uFF0C\u662FGoogle\u7684Chubby\u4E00\u4E2A\u5F00\u6E90\u7684\u5B9E\u73B0\uFF0C\u662FHadoop\u548CHbase\u7684\u91CD\u8981\u7EC4\u4EF6\u3002ZooKeeper \u4F7F\u7528 Java \u6240\u7F16\u5199\uFF0C\u4F46\u662F\u652F\u6301 Java \u548C C \u4E24\u79CD\u7F16\u7A0B\u8BED\u8A00\u3002

`,head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/middleware/zookeeper/Zookeeper.html"}],["meta",{property:"og:site_name",content:"\u4E3B\u9898\u6F14\u793A"}],["meta",{property:"og:title",content:"\u521D\u5B66Zookeeper"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-04-11T02:50:23.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Zookeeper"}],["meta",{property:"article:published_time",content:"2022-04-10T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-04-11T02:50:23.000Z"}]]},excerpt:`<h1 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> Zookeeper</h1>
<blockquote>
<p><a href="https://www.bilibili.com/video/BV1Uy4y1b7ED?spm_id_from=333.999.0.0" target="_blank" rel="noopener noreferrer">\u5B66\u4E60\u89C6\u9891\u3010\u7F16\u7A0B\u4E0D\u826F\u4EBA\u3011<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="_1-zk\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-zk\u7B80\u4ECB" aria-hidden="true">#</a> 1. ZK\u7B80\u4ECB</h2>
<ul>
<li>dubbo\u6846\u67B6 springcloud \u6846\u67B6      zk  \u6CE8\u518C\u4E2D\u5FC3    AService     BService</li>
<li>Hadoop Hbase \u7EC4\u4EF6   \u96C6\u7FA4\u67B6\u6784   zk  \u96C6\u7FA4\u7BA1\u7406\u8005</li>
<li>zk\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501  redis\u5206\u5E03\u5F0F</li>
</ul>
<blockquote>
<p>ZooKeeper(\u52A8\u7269\u56ED\u7BA1\u7406\u8005) \u7B80\u79F0 <strong>ZK</strong>\uFF0C<strong>\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684\uFF0C\u5F00\u653E\u6E90\u7801\u7684\u5206\u5E03\u5F0F\u5E94\u7528\u7A0B\u5E8F\u534F\u8C03\u670D\u52A1</strong>\uFF0C\u662FGoogle\u7684Chubby\u4E00\u4E2A\u5F00\u6E90\u7684\u5B9E\u73B0\uFF0C\u662FHadoop\u548CHbase\u7684\u91CD\u8981\u7EC4\u4EF6\u3002ZooKeeper \u4F7F\u7528 Java \u6240\u7F16\u5199\uFF0C\u4F46\u662F\u652F\u6301 Java \u548C C \u4E24\u79CD\u7F16\u7A0B\u8BED\u8A00\u3002</p>
</blockquote>
`,headers:[{level:2,title:"1. ZK\u7B80\u4ECB",slug:"_1-zk\u7B80\u4ECB",children:[]},{level:2,title:"2. ZK\u5185\u5B58\u6570\u636E\u6A21\u578B",slug:"_2-zk\u5185\u5B58\u6570\u636E\u6A21\u578B",children:[{level:3,title:"2.1 \u6A21\u578B\u7ED3\u6784",slug:"_2-1-\u6A21\u578B\u7ED3\u6784",children:[]},{level:3,title:"2.2 \u6A21\u578B\u7684\u7279\u70B9",slug:"_2-2-\u6A21\u578B\u7684\u7279\u70B9",children:[]}]},{level:2,title:"3. \u8282\u70B9\u7684\u5206\u7C7B",slug:"_3-\u8282\u70B9\u7684\u5206\u7C7B",children:[]},{level:2,title:"4. \u5B89\u88C5",slug:"_4-\u5B89\u88C5",children:[{level:3,title:"4.1 linux\u7CFB\u7EDF\u5B89\u88C5",slug:"_4-1-linux\u7CFB\u7EDF\u5B89\u88C5",children:[]},{level:3,title:"4.2 Docker\u5B89\u88C5zookeeper",slug:"_4-2-docker\u5B89\u88C5zookeeper",children:[]}]},{level:2,title:"5.\u5BA2\u6237\u7AEF\u57FA\u672C\u6307\u4EE4",slug:"_5-\u5BA2\u6237\u7AEF\u57FA\u672C\u6307\u4EE4",children:[]},{level:2,title:"6.\u8282\u70B9\u76D1\u542C\u673A\u5236 watch",slug:"_6-\u8282\u70B9\u76D1\u542C\u673A\u5236-watch",children:[]},{level:2,title:"7.java\u64CD\u4F5CZK",slug:"_7-java\u64CD\u4F5Czk",children:[{level:3,title:"7.1 \u521B\u5EFA\u9879\u76EE\u5F15\u5165\u4F9D\u8D56",slug:"_7-1-\u521B\u5EFA\u9879\u76EE\u5F15\u5165\u4F9D\u8D56",children:[]},{level:3,title:"7.2 \u83B7\u53D6zk\u5BA2\u6237\u7AEF\u5BF9\u8C61",slug:"_7-2-\u83B7\u53D6zk\u5BA2\u6237\u7AEF\u5BF9\u8C61",children:[]},{level:3,title:"7.3 \u5E38\u7528API",slug:"_7-3-\u5E38\u7528api",children:[]}]},{level:2,title:"8.ZK\u7684\u96C6\u7FA4",slug:"_8-zk\u7684\u96C6\u7FA4",children:[{level:3,title:"8.1\u96C6\u7FA4(cluster)",slug:"_8-1\u96C6\u7FA4-cluster",children:[]},{level:3,title:"8.2\u96C6\u7FA4\u67B6\u6784",slug:"_8-2\u96C6\u7FA4\u67B6\u6784",children:[]},{level:3,title:"8.3\u96C6\u7FA4\u642D\u5EFA",slug:"_8-3\u96C6\u7FA4\u642D\u5EFA",children:[]}]}],git:{createdTime:1649645423e3,updatedTime:1649645423e3,contributors:[{name:"cyl",email:"1063415880@qq.com",commits:1}]},readingTime:{minutes:8.15,words:2444},filePathRelative:"middleware/zookeeper/Zookeeper.md"};export{e as data};
