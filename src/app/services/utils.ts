import { API_PATH } from "../constants";

export const makePath = (route: string, params?: Record<string, string | string[]>) => {
  let url = `${API_PATH}/${route}`;
  
  if (params) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(key, v));
      } else {
        searchParams.append(key, value);
      }
    });

    url += `?${searchParams.toString()}`;
  }

  return url;
};