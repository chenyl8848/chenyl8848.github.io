import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const database: HopeThemeSidebarArrayConfig = [
    "",
    {
        text: "MySQL",
        collapsable: true,
        children: ["Linux_MySQL", "MySQL基础", "MySQL进阶"]
    },
    {
        text: "持久化框架",
        collapsable: true,
        children: ["MyBatis", "MyBatisPlus"]
    },
];