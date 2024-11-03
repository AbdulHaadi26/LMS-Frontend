export const emptyToUndefined = (value: object) => {
  return Object.keys(value).map((key) => {
    if (value[key] === "") {
      return undefined;
    }
    return value[key];
  });
};
