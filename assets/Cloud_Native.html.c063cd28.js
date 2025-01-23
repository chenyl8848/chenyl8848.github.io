const e={key:"v-8ce041fc",path:"/server/kubernetes/Cloud_Native.html",title:"\u4E91\u539F\u751F",lang:"zh-CN",frontmatter:{title:"\u4E91\u539F\u751F",date:"2022-04-11T00:00:00.000Z",category:["\u8FD0\u7EF4","\u5BB9\u5668\u7F16\u6392"],tag:["Kubernetes","\u4E91\u539F\u751F"],summary:`# 1. \u4E91\u539F\u751F\u57FA\u672C\u4ECB\u7ECD
`,head:[["meta",{property:"og:url",content:"https://chenyl8848.github.io/server/kubernetes/Cloud_Native.html"}],["meta",{property:"og:site_name",content:"Java\u9648\u5E8F\u5458"}],["meta",{property:"og:title",content:"\u4E91\u539F\u751F"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-10-19T01:35:33.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Kubernetes"}],["meta",{property:"article:tag",content:"\u4E91\u539F\u751F"}],["meta",{property:"article:published_time",content:"2022-04-11T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-10-19T01:35:33.000Z"}]]},excerpt:`<h1 id="_1-\u4E91\u539F\u751F\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u4E91\u539F\u751F\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u4E91\u539F\u751F\u57FA\u672C\u4ECB\u7ECD</h1>
`,headers:[{level:2,title:"3.1 Kubernetes\u57FA\u7840\u6982\u5FF5",slug:"_3-1-kubernetes\u57FA\u7840\u6982\u5FF5",children:[]},{level:2,title:"3.2 Kubernetes\u96C6\u7FA4\u642D\u5EFA",slug:"_3-2-kubernetes\u96C6\u7FA4\u642D\u5EFA",children:[]},{level:2,title:"3.3 Kubernetes\u6838\u5FC3\u5B9E\u6218",slug:"_3-3-kubernetes\u6838\u5FC3\u5B9E\u6218",children:[]},{level:2,title:"4.1 KubeSphere\u7B80\u4ECB",slug:"_4-1-kubesphere\u7B80\u4ECB",children:[]},{level:2,title:"4.2 KubeSphere\u5B89\u88C5",slug:"_4-2-kubesphere\u5B89\u88C5",children:[]},{level:2,title:"4.3 KubeSphere\u591A\u79DF\u6237",slug:"_4-3-kubesphere\u591A\u79DF\u6237",children:[]},{level:2,title:"4.4 KubeSphere\u90E8\u7F72\u4E2D\u95F4\u4EF6",slug:"_4-4-kubesphere\u90E8\u7F72\u4E2D\u95F4\u4EF6",children:[]},{level:2,title:"4.5 KubeSphere\u5E94\u7528\u5546\u5E97",slug:"_4-5-kubesphere\u5E94\u7528\u5546\u5E97",children:[]},{level:2,title:"4.6 KubeSphere\u5E94\u7528\u90E8\u7F72\u5B9E\u6218",slug:"_4-6-kubesphere\u5E94\u7528\u90E8\u7F72\u5B9E\u6218",children:[]},{level:2,title:"5.1 DevOps\u7B80\u4ECB",slug:"_5-1-devops\u7B80\u4ECB",children:[]},{level:2,title:"5.2 DevOps\u5E94\u7528\u90E8\u7F72\u5B9E\u6218",slug:"_5-2-devops\u5E94\u7528\u90E8\u7F72\u5B9E\u6218",children:[]},{level:2,title:"6.1 KubeKey\u7B80\u4ECB",slug:"_6-1-kubekey\u7B80\u4ECB",children:[{level:3,title:"1. \u662F\u4EC0\u4E48",slug:"_1-\u662F\u4EC0\u4E48",children:[]},{level:3,title:"2. \u4E3A\u4EC0\u4E48",slug:"_2-\u4E3A\u4EC0\u4E48",children:[]},{level:3,title:"3. \u5982\u4F55\u8FD0\u4F5C",slug:"_3-\u5982\u4F55\u8FD0\u4F5C",children:[]},{level:3,title:"4.\u5B89\u88C5",slug:"_4-\u5B89\u88C5",children:[]}]},{level:2,title:"6.2 \u90E8\u7F72\u9AD8\u53EF\u7528Kubernetes\u96C6\u7FA4",slug:"_6-2-\u90E8\u7F72\u9AD8\u53EF\u7528kubernetes\u96C6\u7FA4",children:[]},{level:2,title:"6.3 \u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3",slug:"_6-3-\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6\u8BE6\u89E3",children:[]},{level:2,title:"6.4 \u589E\u5220\u96C6\u7FA4\u8282\u70B9",slug:"_6-4-\u589E\u5220\u96C6\u7FA4\u8282\u70B9",children:[]},{level:2,title:"6.5 \u96C6\u7FA4\u8BC1\u4E66\u7BA1\u7406",slug:"_6-5-\u96C6\u7FA4\u8BC1\u4E66\u7BA1\u7406",children:[]},{level:2,title:"6.6 \u542F\u7528\u53EF\u63D2\u62D4\u7EC4\u4EF6",slug:"_6-6-\u542F\u7528\u53EF\u63D2\u62D4\u7EC4\u4EF6",children:[]},{level:2,title:"6.7 \u8282\u70B9\u7BA1\u7406",slug:"_6-7-\u8282\u70B9\u7BA1\u7406",children:[]}],git:{createdTime:1666143333e3,updatedTime:1666143333e3,contributors:[{name:"cyl",email:"1063415880@qq.com",commits:1}]},readingTime:{minutes:2.8,words:840},filePathRelative:"server/kubernetes/Cloud_Native.md"};export{e as data};
