module.exports = {
  title: "小Q的架构师之路",
  description:
    "保持好奇，持续精进。坐而言不如起而行，与众分享则是实现价值的最好方式",
  theme: "reco",
  base: '/qig-coding/',
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "小Q的架构师之路",
        items: [{ text: "Github", link: "https://github.com/aa12gq" }],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "迎刃而解",
        path: "/handbook/solve",
        collapsable: false, // 不折叠
        children: [
          {
            title: "nodejs版本导致的不兼容vuepress问题",
            path: "/handbook/solve/01",
          },
        ],
      },
    ],
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
  },
};
