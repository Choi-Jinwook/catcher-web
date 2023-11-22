import { SCHEDULE_TITLE } from "@create-schedule/constants";
import { useSetRecoilState } from "recoil";
import { scheduleAnswers } from "@shared/recoil";
import RemainChar from "./RemainChar";
import ScheduleTitle from "./ScheduleTitle";

const PlanTitleInput = () => {
  const setTitle = useSetRecoilState(scheduleAnswers);

  const handleTitle = (title: string) => {
    setTitle((prev) => ({ ...prev, title }));
  };

  return (
    <div className="mb-[30px]">
      <ScheduleTitle title={SCHEDULE_TITLE.planTitle} />
      <input
        className="w-[628px] h-[55px] border border-[#E0E0E0] rounded-[5px] px-[26px]"
        type="text"
        placeholder="일정 제목을 입력해주세요."
        maxLength={40}
        onChange={({ target: { value } }) => handleTitle(value)}
      />
      <RemainChar />
    </div>
  );
};

export default PlanTitleInput;
