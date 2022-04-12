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
      "springBoot/",
      "microServices/",
      "dataStructure/",
      "algorithm/",
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
      "zookeeper/"
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
          "vue/",
          "react/",
          "docsify/",
          "vuepress/",
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
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
