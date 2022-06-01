import { defineSidebarConfig, HopeThemeSidebarConfig } from "vuepress-theme-hope";

import { algorithm, dataStructure, java, microServices, springBoot, spring } from "./rearend";
import { database, mq, noSQL, zookeeper, elasticsearch, prometheus } from "./middleware";
import { docker, linux, kubernetes } from "./server";
import { wiki } from "./web"


// export default defineSidebarConfig([
//     "",
//     "home",
//     "slide",
//     {
//         text: "Java",
//         icon: "java",
//         prefix: "rearend/",
//         link: "rearend/java/",
//         collapsable: true,
//         children: [
//             {
//                 text: "JUC并发编程",
//                 link: "java/JUC",
//             },
//             {
//                 text: "ComptetableFuture异步编排",
//                 link: "java/ComptetableFuture",
//             },
//             {
//                 text: "Netty",
//                 link: "java/Netty",
//             },
//         ]
//     },
//     {
//         text: "Spring Boot",
//         icon: "springBoot",
//         prefix: "rearend/",
//         link: "rearend/springBoot/",
//         children: "structure",
//     },
//     {
//         text: "NoSQL",
//         icon: "noSQL",
//         prefix: "middleware/",
//         link: "middleware/noSQL/",
//         collapsable: true,
//         children: [
//             {
//                 text: "初学Redis",
//                 link: "noSQL/Redis",
//             },
//         ]
//     },
//     {
//         text: "MQ",
//         icon: "MQ",
//         prefix: "middleware/",
//         link: "middleware/mq/",
//         collapsable: true,
//         children: [
//             {
//                 text: "初学RabbitMQ",
//                 link: "mq/RabbitMQ",
//             },
//         ]
//     },
//     {
//         text: "Zookeeper",
//         icon: "zookeeper",
//         prefix: "middleware/",
//         link: "middleware/zookeeper/",
//         collapsable: true,
//         children: [
//             {
//                 text: "初学Zookeeper",
//                 link: "zookeeper/Zookeeper",
//             },
//         ]
//     },
//     {
//         text: "Linux",
//         icon: "linux",
//         prefix: "server/",
//         link: "server/linux/",
//         collapsable: true,
//         children: [
//             {
//                 text: "初学Linux",
//                 link: "linux/Linux",
//             },
//         ]
//     },
//     {
//         text: "Docker",
//         icon: "docker",
//         prefix: "server/",
//         link: "server/docker/",
//         collapsable: true,
//         children: [
//             {
//                 text: "初学Docker",
//                 link: "docker/Docker",
//             },
//         ]
//     },
//     {
//         text: "如何使用",
//         icon: "creative",
//         prefix: "guide/",
//         link: "guide/",
//         children: "structure",
//     },
//     {
//         text: "文章",
//         icon: "note",
//         prefix: "posts/",
//         children: [
//             {
//                 text: "文章 1-4",
//                 icon: "note",
//                 collapsable: true,
//                 prefix: "article/",
//                 children: ["article1", "article2", "article3", "article4"],
//             },
//             {
//                 text: "文章 5-12",
//                 icon: "note",
//                 children: [
//                     {
//                         text: "文章 5-8",
//                         icon: "note",
//                         collapsable: true,
//                         prefix: "article/",
//                         children: ["article5", "article6", "article7", "article8"],
//                     },
//                     {
//                         text: "文章 9-12",
//                         icon: "note",
//                         children: ["article9", "article10", "article11", "article12"],
//                     },
//                 ],
//             },
//         ],
//     },
// ]);
export const sidebar: HopeThemeSidebarConfig = {
    "/rearend/java/": java,
    "/rearend/spring/": spring,
    "/rearend/springBoot/": springBoot,
    "/rearend/microServices/": microServices,
    "/rearend/dataStructure/": dataStructure,
    "/rearend/algorithm/": algorithm,
    "/middleware/database/": database,
    "/middleware/noSQL/": noSQL,
    "/middleware/mq/": mq,
    "/middleware/zookeeper/": zookeeper,
    "/middleware/elasticsearch/": elasticsearch,
    "/middleware/prometheus/": prometheus,
    "/server/linux/": linux,
    "/server/docker/": docker,
    "/server/kubernetes/": kubernetes,
    "/web/framework/wiki": wiki,
};