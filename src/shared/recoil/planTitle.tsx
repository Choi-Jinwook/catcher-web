import { SUBTITLE, TITLE } from "@create-schedule/constants";
import { atom } from "recoil";
import { PlanSubTitle, PlanTitle } from "@shared/types";

export const planTitle = atom<PlanTitle>({
  key: "planTitle",
  default: TITLE.remains,
});

export const planSubTitle = atom<PlanSubTitle>({
  key: "planSubTitle",
  default: SUBTITLE.fighting,
});
