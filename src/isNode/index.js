export const isNode = (o) => {
  const asString = Object.prototype.toString.call(o);

  return /^\[object\sHTML\w{0,}Element\]$/.test(asString);
};
