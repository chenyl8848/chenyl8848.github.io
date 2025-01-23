const e={key:"v-2caca042",path:"/middleware/elasticsearch/ElasticSearch_advanced.html",title:"ElasticSearch\u8FDB\u9636",lang:"zh-CN",frontmatter:{title:"ElasticSearch\u8FDB\u9636",date:"2022-05-13T00:00:00.000Z",category:["\u4E2D\u95F4\u4EF6"],tag:["ElasticSearch"],summary:`# ElasticSearch\u8FDB\u9636
`,head:[["meta",{property:"og:url",content:"https://chenyl8848.github.io/middleware/elasticsearch/ElasticSearch_advanced.html"}],["meta",{property:"og:site_name",content:"Java\u9648\u5E8F\u5458"}],["meta",{property:"og:title",content:"ElasticSearch\u8FDB\u9636"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-05-17T03:16:13.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"ElasticSearch"}],["meta",{property:"article:published_time",content:"2022-05-13T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-05-17T03:16:13.000Z"}]]},excerpt:`<h1 id="elasticsearch\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#elasticsearch\u8FDB\u9636" aria-hidden="true">#</a> ElasticSearch\u8FDB\u9636</h1>
`,headers:[{level:2,title:"1. \u6838\u5FC3\u6982\u5FF5",slug:"_1-\u6838\u5FC3\u6982\u5FF5",children:[{level:3,title:"1.1 \u7D22\u5F15\uFF08Index\uFF09",slug:"_1-1-\u7D22\u5F15-index",children:[]},{level:3,title:"1.2 \u7C7B\u578B\uFF08Type\uFF09",slug:"_1-2-\u7C7B\u578B-type",children:[]},{level:3,title:"1.3 \u6587\u6863\uFF08Document\uFF09",slug:"_1-3-\u6587\u6863-document",children:[]},{level:3,title:"1.3 \u5B57\u6BB5\uFF08Field\uFF09",slug:"_1-3-\u5B57\u6BB5-field",children:[]},{level:3,title:"1.5 \u6620\u5C04\uFF08Mapping\uFF09",slug:"_1-5-\u6620\u5C04-mapping",children:[]},{level:3,title:"1.6 \u5206\u7247\uFF08Shards\uFF09",slug:"_1-6-\u5206\u7247-shards",children:[]},{level:3,title:"1.7 \u526F\u672C\uFF08Replicas\uFF09",slug:"_1-7-\u526F\u672C-replicas",children:[]},{level:3,title:"1.8 \u5206\u914D\uFF08Allocation\uFF09",slug:"_1-8-\u5206\u914D-allocation",children:[]}]},{level:2,title:"2. \u7CFB\u7EDF\u67B6\u6784",slug:"_2-\u7CFB\u7EDF\u67B6\u6784",children:[]},{level:2,title:"3. \u5206\u5E03\u5F0F\u96C6\u7FA4",slug:"_3-\u5206\u5E03\u5F0F\u96C6\u7FA4",children:[{level:3,title:"3.1 \u5355\u8282\u70B9\u96C6\u7FA4",slug:"_3-1-\u5355\u8282\u70B9\u96C6\u7FA4",children:[]},{level:3,title:"3.2 \u6545\u969C\u8F6C\u79FB",slug:"_3-2-\u6545\u969C\u8F6C\u79FB",children:[]},{level:3,title:"3.3 \u6C34\u5E73\u6269\u5BB9",slug:"_3-3-\u6C34\u5E73\u6269\u5BB9",children:[]},{level:3,title:"3.4 \u5E94\u5BF9\u6545\u969C",slug:"_3-4-\u5E94\u5BF9\u6545\u969C",children:[]}]},{level:2,title:"4. \u8DEF\u7531\u8BA1\u7B97",slug:"_4-\u8DEF\u7531\u8BA1\u7B97",children:[]},{level:2,title:"5. \u5206\u7247\u63A7\u5236",slug:"_5-\u5206\u7247\u63A7\u5236",children:[{level:3,title:"5.1 \u5199\u6D41\u7A0B",slug:"_5-1-\u5199\u6D41\u7A0B",children:[]},{level:3,title:"5.2 \u8BFB\u6D41\u7A0B",slug:"_5-2-\u8BFB\u6D41\u7A0B",children:[]},{level:3,title:"5.3 \u66F4\u65B0\u6D41\u7A0B",slug:"_5-3-\u66F4\u65B0\u6D41\u7A0B",children:[]},{level:3,title:"5.4 \u591A\u6587\u6863\u64CD\u4F5C\u6D41\u7A0B",slug:"_5-4-\u591A\u6587\u6863\u64CD\u4F5C\u6D41\u7A0B",children:[]}]},{level:2,title:"6. \u5206\u7247\u539F\u7406",slug:"_6-\u5206\u7247\u539F\u7406",children:[{level:3,title:"6.1 \u5012\u6392\u7D22\u5F15",slug:"_6-1-\u5012\u6392\u7D22\u5F15",children:[]},{level:3,title:"6.2 \u6587\u6863\u641C\u7D22",slug:"_6-2-\u6587\u6863\u641C\u7D22",children:[]},{level:3,title:"6.3 \u52A8\u6001\u66F4\u65B0\u7D22\u5F15",slug:"_6-3-\u52A8\u6001\u66F4\u65B0\u7D22\u5F15",children:[]},{level:3,title:"6.4 \u8FD1\u5B9E\u65F6\u641C\u7D22",slug:"_6-4-\u8FD1\u5B9E\u65F6\u641C\u7D22",children:[]},{level:3,title:"6.5 \u6301\u4E45\u5316\u53D8\u66F4",slug:"_6-5-\u6301\u4E45\u5316\u53D8\u66F4",children:[]},{level:3,title:"6.6 \u6BB5\u5408\u5E76",slug:"_6-6-\u6BB5\u5408\u5E76",children:[]}]},{level:2,title:"7. \u6587\u6863\u5206\u6790",slug:"_7-\u6587\u6863\u5206\u6790",children:[{level:3,title:"7.1 \u5185\u7F6E\u5206\u6790\u5668",slug:"_7-1-\u5185\u7F6E\u5206\u6790\u5668",children:[]},{level:3,title:"7.2 \u5206\u6790\u5668\u4F7F\u7528\u573A\u666F",slug:"_7-2-\u5206\u6790\u5668\u4F7F\u7528\u573A\u666F",children:[]},{level:3,title:"7.3 \u6D4B\u8BD5\u5206\u6790\u5668",slug:"_7-3-\u6D4B\u8BD5\u5206\u6790\u5668",children:[]},{level:3,title:"7.4 \u6307\u5B9A\u5206\u6790\u5668",slug:"_7-4-\u6307\u5B9A\u5206\u6790\u5668",children:[]},{level:3,title:"7.5 IK\u5206\u8BCD\u5668",slug:"_7-5-ik\u5206\u8BCD\u5668",children:[]},{level:3,title:"7.6 \u81EA\u5B9A\u4E49\u5206\u6790\u5668",slug:"_7-6-\u81EA\u5B9A\u4E49\u5206\u6790\u5668",children:[]}]},{level:2,title:"8. \u6587\u6863\u5904\u7406",slug:"_8-\u6587\u6863\u5904\u7406",children:[{level:3,title:"8.1 \u6587\u6863\u51B2\u7A81",slug:"_8-1-\u6587\u6863\u51B2\u7A81",children:[]},{level:3,title:"8.2 \u4E50\u89C2\u5E76\u53D1\u63A7\u5236",slug:"_8-2-\u4E50\u89C2\u5E76\u53D1\u63A7\u5236",children:[]},{level:3,title:"8.3 \u5916\u90E8\u7CFB\u7EDF\u7248\u672C\u63A7\u5236",slug:"_8-3-\u5916\u90E8\u7CFB\u7EDF\u7248\u672C\u63A7\u5236",children:[]}]},{level:2,title:"9. Kibana",slug:"_9-kibana",children:[]}],git:{createdTime:1652598818e3,updatedTime:1652757373e3,contributors:[{name:"cyl",email:"1063415880@qq.com",commits:2}]},readingTime:{minutes:51.85,words:15554},filePathRelative:"middleware/elasticsearch/ElasticSearch_advanced.md"};export{e as data};
