import { $http } from "../boot/http.js";

export const getPlaceholder = () => $http.get("/api/placeholder");

export const getTakeoutList = (params) => $http.get("/api/home_list", params);
