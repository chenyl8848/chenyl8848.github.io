import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import { sidebar } from "./sidebar";

export default defineThemeConfig({
  hostname: "https://chenyl8848.github.io",

  author: {
    name: "Java陈序员",
    url: "https://chenyl8848.github.io",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.webp",

  // 文档仓库地址
  repo: "chenyl8848/chenyl8848.github.io",
  // 文档在仓库中的目录
  docsDir: "docs",
  // 文档存放的分支
  docsBranch: "master",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "没有最好，只有更好！",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    // name: 'hello world',
    description: "Java后端程序员，分享日常学习、工作、生活，致敬每个爱学习的你。微信公众号：【Java陈序员】",
    intro: "/introduction",
    roundAvatar: true,
    medias: {
      Wechat: "https://chen-coding.oss-cn-shenzhen.aliyuncs.com/qrcode_for_gh_b840974cfe99_430.jpg",
      GitHub: "https://github.com/chenyl8848",
      // Gitee: "https://gitee.com/chenylin8848",
      // BiliBili: "https://space.bilibili.com/402482994/",
      // Baidu: "https://author.baidu.com/home/1687795731434287",
      Zhihu: "https://www.zhihu.com/people/you-23-87",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "https://mail.qq.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://im.qq.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Weibo: "https://d.weibo.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "chenyl8848/chenyl8848.github.io",
      repoId: "R_kgDOHJ-qSQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHJ-qSc4COg8Z",
      // type: "giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    docsearch: {
      appId: "ZVX0G03WWG",
      apiKey: "8261872ff25256de3430991647d07137",
      indexName: "chenyl8848",
      // appId: "LDBQGQC8Q9",
      // apiKey: "5c3a7145aeba231c3b85b742d24fc24f",
      // indexName: "mrhope",
      locales: {
        "/": {
          placeholder: "搜索",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                openIssueText: "你认为该查询应该有结果？",
                openIssueLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
