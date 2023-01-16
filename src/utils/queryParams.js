import { API_KEY } from "config";

export const appendQueryParams = (params) => {
  let authurisedParams = { api_key: API_KEY, ...params };

  
  let queryParams = Object.entries(authurisedParams)
    .filter(([key, value]) => key && value)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return queryParams ? `?${queryParams}` : "";
};
