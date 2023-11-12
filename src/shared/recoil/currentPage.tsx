import { atom } from "recoil";
import { CurrentPageType } from "@shared/types";

export const currentPageName = atom<CurrentPageType>({
  key: "currentPage",
  default: "작성 중인 일정",
});