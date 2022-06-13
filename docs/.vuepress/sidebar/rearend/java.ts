import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const java: HopeThemeSidebarArrayConfig = [
    "",
    {
        text: "多线程",
        collapsable: true,
        children: ["JUC", "CompletableFuture"]
    },
    {
        text: "Netty",
        collapsable: true,
        children: ["Netty"]
    },
    "SPI",
];