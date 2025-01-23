const e={key:"v-4531e5da",path:"/web/framework/vue/vue3_composition.html",title:"Vue3 Composition Api",lang:"zh-CN",frontmatter:{title:"Vue3 Composition Api",date:"2022-10-29T00:00:00.000Z",category:["\u524D\u7AEF"],tag:["Vue.js","Composition Api"],summary:`# Vue3 Composition Api
`,head:[["meta",{property:"og:url",content:"https://chenyl8848.github.io/web/framework/vue/vue3_composition.html"}],["meta",{property:"og:site_name",content:"Java\u9648\u5E8F\u5458"}],["meta",{property:"og:title",content:"Vue3 Composition Api"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-10-24T06:14:25.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Vue.js"}],["meta",{property:"article:tag",content:"Composition Api"}],["meta",{property:"article:published_time",content:"2022-10-29T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-10-24T06:14:25.000Z"}]]},excerpt:`<h1 id="vue3-composition-api" tabindex="-1"><a class="header-anchor" href="#vue3-composition-api" aria-hidden="true">#</a> Vue3 Composition Api</h1>
`,headers:[{level:2,title:"1.1 \u62C9\u5F00\u5E8F\u5E55\u7684 setup",slug:"_1-1-\u62C9\u5F00\u5E8F\u5E55\u7684-setup",children:[{level:3,title:"1.1.1 \u4F7F\u7528\u8BF4\u660E",slug:"_1-1-1-\u4F7F\u7528\u8BF4\u660E",children:[]},{level:3,title:"1.1.2 \u4EE3\u7801\u793A\u4F8B",slug:"_1-1-2-\u4EE3\u7801\u793A\u4F8B",children:[]}]},{level:2,title:"1.2 ref \u51FD\u6570",slug:"_1-2-ref-\u51FD\u6570",children:[{level:3,title:"1.2.1 \u4F7F\u7528\u8BF4\u660E",slug:"_1-2-1-\u4F7F\u7528\u8BF4\u660E",children:[]},{level:3,title:"1.2.2 \u4EE3\u7801\u793A\u4F8B",slug:"_1-2-2-\u4EE3\u7801\u793A\u4F8B",children:[]}]},{level:2,title:"1.3 reactive \u51FD\u6570",slug:"_1-3-reactive-\u51FD\u6570",children:[{level:3,title:"1.3.1 \u4F7F\u7528\u8BF4\u660E",slug:"_1-3-1-\u4F7F\u7528\u8BF4\u660E",children:[]},{level:3,title:"1.3.2 \u4EE3\u7801\u793A\u4F8B",slug:"_1-3-2-\u4EE3\u7801\u793A\u4F8B",children:[]}]},{level:2,title:"1.4 Vue \u4E2D\u7684\u54CD\u5E94\u5F0F\u539F\u7406",slug:"_1-4-vue-\u4E2D\u7684\u54CD\u5E94\u5F0F\u539F\u7406",children:[{level:3,title:"1.4.1 Vue2.x \u7684\u54CD\u5E94\u5F0F",slug:"_1-4-1-vue2-x-\u7684\u54CD\u5E94\u5F0F",children:[]},{level:3,title:"1.4.2 Vue3.0 \u7684\u54CD\u5E94\u5F0F",slug:"_1-4-2-vue3-0-\u7684\u54CD\u5E94\u5F0F",children:[]}]},{level:2,title:"1.5 reactive \u5BF9\u6BD4 ref",slug:"_1-5-reactive-\u5BF9\u6BD4-ref",children:[]},{level:2,title:"1.6 setup \u7684\u4E24\u4E2A\u6CE8\u610F\u70B9",slug:"_1-6-setup-\u7684\u4E24\u4E2A\u6CE8\u610F\u70B9",children:[{level:3,title:"1.6.1 \u4F7F\u7528\u8BF4\u660E",slug:"_1-6-1-\u4F7F\u7528\u8BF4\u660E",children:[]},{level:3,title:"1.6.2 \u4EE3\u7801\u793A\u4F8B",slug:"_1-6-2-\u4EE3\u7801\u793A\u4F8B",children:[]}]},{level:2,title:"1.7 \u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6",slug:"_1-7-\u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6",children:[{level:3,title:"1.7.1 computed \u51FD\u6570",slug:"_1-7-1-computed-\u51FD\u6570",children:[]},{level:3,title:"1.7.2 watch \u51FD\u6570",slug:"_1-7-2-watch-\u51FD\u6570",children:[]},{level:3,title:"1.7.3 watchEffect \u51FD\u6570",slug:"_1-7-3-watcheffect-\u51FD\u6570",children:[]}]},{level:2,title:"1.8 \u751F\u547D\u5468\u671F",slug:"_1-8-\u751F\u547D\u5468\u671F",children:[{level:3,title:"1.8.1 \u4F7F\u7528\u8BF4\u660E",slug:"_1-8-1-\u4F7F\u7528\u8BF4\u660E",children:[]},{level:3,title:"1.8.2 \u4EE3\u7801\u793A\u4F8B",slug:"_1-8-2-\u4EE3\u7801\u793A\u4F8B",children:[]}]},{level:2,title:"1.9 \u81EA\u5B9A\u4E49 hook \u51FD\u6570",slug:"_1-9-\u81EA\u5B9A\u4E49-hook-\u51FD\u6570",children:[{level:3,title:"1.9.1 \u4F7F\u7528\u8BF4\u660E",slug:"_1-9-1-\u4F7F\u7528\u8BF4\u660E",children:[]},{level:3,title:"1.9.2 \u4EE3\u7801\u793A\u4F8B",slug:"_1-9-2-\u4EE3\u7801\u793A\u4F8B",children:[]}]},{level:2,title:"1.10 toRef",slug:"_1-10-toref",children:[{level:3,title:"1.10.1 \u4F7F\u7528\u8BF4\u660E",slug:"_1-10-1-\u4F7F\u7528\u8BF4\u660E",children:[]},{level:3,title:"1.10.2 \u4EE3\u7801\u793A\u4F8B",slug:"_1-10-2-\u4EE3\u7801\u793A\u4F8B",children:[]}]},{level:2,title:"2. \u5176\u5B83 Composition API",slug:"_2-\u5176\u5B83-composition-api",children:[{level:3,title:"2.1 shallowReactive \u4E0E shallowRef",slug:"_2-1-shallowreactive-\u4E0E-shallowref",children:[]},{level:3,title:"2.2 readonly \u4E0E shallowReadonly",slug:"_2-2-readonly-\u4E0E-shallowreadonly",children:[]},{level:3,title:"2.3 toRaw \u4E0E markRaw",slug:"_2-3-toraw-\u4E0E-markraw",children:[]},{level:3,title:"2.4 customRef",slug:"_2-4-customref",children:[]},{level:3,title:"2.5 provide \u4E0E inject",slug:"_2-5-provide-\u4E0E-inject",children:[]},{level:3,title:"2.6 \u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD",slug:"_2-6-\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD",children:[]}]},{level:2,title:"3. Composition API \u7684\u4F18\u52BF",slug:"_3-composition-api-\u7684\u4F18\u52BF",children:[{level:3,title:"3.1 Options API \u5B58\u5728\u7684\u95EE\u9898",slug:"_3-1-options-api-\u5B58\u5728\u7684\u95EE\u9898",children:[]},{level:3,title:"3.2 Composition API \u7684\u4F18\u52BF",slug:"_3-2-composition-api-\u7684\u4F18\u52BF",children:[]}]},{level:2,title:"4. \u65B0\u7684\u7EC4\u4EF6",slug:"_4-\u65B0\u7684\u7EC4\u4EF6",children:[{level:3,title:"4.1 Fragment",slug:"_4-1-fragment",children:[]},{level:3,title:"4.2 Teleport",slug:"_4-2-teleport",children:[]},{level:3,title:"4.3 Suspense",slug:"_4-3-suspense",children:[]}]},{level:2,title:"5. \u5176\u4ED6",slug:"_5-\u5176\u4ED6",children:[{level:3,title:"5.1 \u5168\u5C40 API \u7684\u8F6C\u79FB",slug:"_5-1-\u5168\u5C40-api-\u7684\u8F6C\u79FB",children:[]},{level:3,title:"5.2 \u5176\u4ED6\u6539\u53D8",slug:"_5-2-\u5176\u4ED6\u6539\u53D8",children:[]}]}],git:{createdTime:1666592065e3,updatedTime:1666592065e3,contributors:[{name:"cyl",email:"1063415880@qq.com",commits:1}]},readingTime:{minutes:22.02,words:6606},filePathRelative:"web/framework/vue/vue3_composition.md"};export{e as data};
