import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const database: HopeThemeSidebarArrayConfig = [
    "",
    {
        text: "持久化框架",
        collapsable: true,
        children: ["MyBatis", "MyBatis_Plus"]
    },
];