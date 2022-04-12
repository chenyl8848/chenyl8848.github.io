import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "Code Chen",
  description: "Code Chen的个人博客网站",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        // href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
        href: "//at.alicdn.com/t/font_3316994_13t317rc8al.css",
      },
    ],
  ],

  themeConfig,
});
