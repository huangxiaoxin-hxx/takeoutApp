import { $http } from "../boot/http.js";

export const getSearchHot = () => $http.get("/search/hot");
