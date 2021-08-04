let baseUrl;
if (process.env.NODE_ENV == "development") {
  baseUrl =
    "https://www.fastmock.site/mock/e0a108c3dbec166d88846603538ebb1d/xiaoxin";
} else {
  baseUrl =
    "https://www.fastmock.site/mock/e0a108c3dbec166d88846603538ebb1d/xiaoxin";
}

export const $config = {
  name: "App", // 项目名称
  api: {
    baseUrl, // 后端接口地址
    timeout: 10000 // 10秒超时
  },
  // 默认首页地址
  index: {
    url: "/pages/home/index",
    type: "switchTab"
  }
};
