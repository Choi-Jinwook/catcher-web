export const checkTagDuplication = (tagArray: string[], tag: string) => {
  tagArray.forEach((_tag) => {
    if (_tag === tag) throw new Error("태그 중복");
  });
};
