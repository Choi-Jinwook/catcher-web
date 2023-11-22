import { SUBTITLE, TITLE } from "@create-schedule/constants";
import { atom } from "recoil";
import { PlanSubTitle, PlanTitle } from "@shared/types";

export const planTitle = atom<PlanTitle>({
  key: "planTitle",
  default: {
    remains: TITLE.remains,
    nthPlan: (nickname: string, number: number) =>
      `${nickname} 님의 ${number}번째 일정`,
    tag: "태그 및 일정 템플릿",
    fill: "일정 채우기",
    finish: "작성 마무리",
  },
});

export const planSubTitle = atom<PlanSubTitle>({
  key: "planSubTitle",
  default: {
    fighting: (nickname: string) => SUBTITLE.fighting(nickname),
    withyou: SUBTITLE.withyou,
    fillyourplan: (nickname: string) => SUBTITLE.fillyourplan(nickname),
  },
});
