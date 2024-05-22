import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const database: HopeThemeSidebarArrayConfig = [
    "",
    {
        text: "MySQL",
        collapsable: true,
        children: ["Linux 安装 MySQL", "MySQL 基础", "MySQL 进阶"]
    },
    {
        text: "持久化框架",
        collapsable: true,
        children: ["MyBatis", "MyBatis Plus"]
    },
];