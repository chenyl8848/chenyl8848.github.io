import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const noSQL: HopeThemeSidebarArrayConfig = [
    "",
    {
        text: "Redis",
        collapsable: true,
        children: ["Redis"]
    },
    {
        text: "MongoDB",
        collapsable: true,
        children: ["test1"]
    }
];