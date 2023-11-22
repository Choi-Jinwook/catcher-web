export const checkTagDuplication = (tagArray: string[], tag: string) => {
  if (tagArray.includes(tag)) throw new Error("태그 중복");
};
