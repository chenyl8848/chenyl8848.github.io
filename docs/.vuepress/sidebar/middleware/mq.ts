import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const mq: HopeThemeSidebarArrayConfig = [
    "",
    {
        text: "RabbitMQ",
        collapsable: true,
        children: ["RabbitMQ"]
    },
    {
        text: "RocketMQ",
        collapsable: true,
        children: ["test1"]
    },
    {
        text: "kafka",
        collapsable: true,
        children: ["kafka"]
    },
];