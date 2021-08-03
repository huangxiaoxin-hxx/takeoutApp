import Vue from "vue";
// import { $i18n } from "../boot/i18n";

let lastError;
export function handleError(e, vm) {
  if (lastError == e) {
    // 重复错误不再处理
    return;
  } else {
    lastError = e;
  }
  if (process.env.NODE_ENV == "development") console.error(e);

  let message = "服务器开小差了";
  if (e.errors) {
    //async-validate 错误
    message = e.errors[0].message || "验证失败";
  } else if (e.message && !e.response) {
    // 逻辑错误
    message = e.message;
  } else if (e.status == 401) {
    message = "请先登录";
    // 未登录 跳转登录

    uni.navigateTo({
      url: "/pages/auth/login"
    });
    // #ifdef H5
    location.reload(); // h5 reLanch不会消除tabbar
    // #endif
  } else if (e.response && e.response.data.errors) {
    // 服务器返回validate错误
    const errors = Object.values(e.response.data.errors);
    message = errors[0][0] || "验证失败";
  } else if (e.response && e.response.data.message) {
    let sql = e.response.data.message.slice(0, 8)
    if (sql == 'SQLSTATE') {
      message = "系统错误，请稍后再试哦"
    } else {
      // 服务器返回错误
      message = e.response.data.message || "服务器开小差了";
    }

  }
  uni.showToast({
    title: message,
    duration: 2000,
    icon: "none"
  });
}

Vue.config.errorHandler = handleError;
