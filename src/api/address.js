import { $http } from "../boot/http.js";
import { $store } from "../store";

export const getAddressList = () => $http.get("/address/my_address");
