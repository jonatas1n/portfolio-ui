export const makePath = (route: string, params?: Record<string, string | string[]>) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let url = `${apiUrl}/${route}`;
  
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