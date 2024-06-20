import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const database: HopeThemeSidebarArrayConfig = [
    "",
    {
        text: "MySQL",
        collapsable: true,
        children: ["Linux_MySQL", "MySQL_Basic", "MySQL_Advanced", "MySQL_Operation"]
    },
    {
        text: "持久化框架",
        collapsable: true,
        children: ["MyBatis", "MyBatisPlus"]
    },
];