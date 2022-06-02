import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "Java陈序员",
  description: "Java陈序员的个人博客网站",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        // href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
        href: "//at.alicdn.com/t/font_3316994_f5l1bb2xgtk.css",
      },
    ],
  ],

  themeConfig,
});
