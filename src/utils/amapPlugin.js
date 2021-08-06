import amap from "./js_sdk/amap-wx";
import { $config } from "../config";

const amapPlugin = new amap.AMapWX({
  key: $config.amapKey, //该key 是在高德中申请的微信小程序key
});

export default amapPlugin;
