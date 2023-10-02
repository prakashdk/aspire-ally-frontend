export const makeUrl = (url, queryStringParams) => {
  const urlObj = new URL(url);
  Object.keys(queryStringParams ?? {}).forEach((key) => {
    urlObj.searchParams.append(key, queryStringParams[key]);
  });
  return urlObj;
};
