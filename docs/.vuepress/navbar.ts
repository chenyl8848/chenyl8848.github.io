import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  // "home",
  {
    text: "后端",
    icon: "rearend",
    prefix: "/rearend/",
    children: [
      "java/",
      "spring/",
      "springBoot/",
      "microServices/",
      "dataStructure/",
      "algorithm/",
      "designPattern/"
    ]
  },
  {
    text: "中间件",
    icon: "middleware",
    prefix: "/middleware/",
    children: [
      "database/",
      "noSQL/",
      "mq/",
      "zookeeper/",
      "elasticsearch/",
      "prometheus/",
    ]
  },
  {
    text: "服务器",
    icon: "server",
    prefix: "/server/",
    children: [
      "linux/",
      "docker/",
      "kubernetes/"
    ]
  },
  {
    text: "前端",
    icon: "wangye",
    prefix: "/web/",
    children: [
      {
        text: "框架",
        icon: "framework",
        prefix: "framework/",
        children: [
          "js/",
          "nodejs/",
          "vue/",
          "react/",
          "docsify/",
          "vuepress/",
          "wiki/",
          "mp/",
        ],
      },
      {
        text: "页面",
        icon: "edit",
        prefix: "ui/",
        children: [
          "element/",
          "iview/"
        ],
      },
    ]
  },
  {
    text: "索引",
    icon: "index",
    prefix: "/",
    children: [
      {
        text: "文章",
        icon: "articles",
        link: "article/",
      },
      {
        text: "分类",
        icon: "category",
        link: "category/java/",
      },
      {
        text: "标签",
        icon: "tag",
        link: "tag/",
      },
      {
        text: "时间轴",
        icon: "timeLine",
        link: "timeline/",
      },
    ]
  },
  {
    text: "开源项目",
    icon: "note",
    link: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzkzOTM3NjAzOQ==&action=getalbum&album_id=2783119709868212224&scene=126&sessionid=-659761542&uin=&key=&devicetype=Windows+11+x64&version=6309092b&lang=zh_CN&ascene=0&session_us=gh_b840974cfe99",
  },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
