import { useRecoilValue } from "recoil";
import { scheduleAnswers } from "@shared/recoil";
import DateCityHandler from "./DateCityHandler";

interface DateCityInputProps {
  callType: "date_start" | "date_end" | "city";
  answerType?: "startedAt" | "endedAt";
  placeholder: string;
}

const DateCityInput = ({
  callType,
  answerType,
  placeholder,
}: DateCityInputProps) => {
  const answer = useRecoilValue(scheduleAnswers);

  return (
    <div className="relative inline-block">
      {callType.includes("date") ? (
        <>
          <DateCityHandler callType={callType} />
          <input
            readOnly
            className="w-[301px] h-[55px] border border-[#E0E0E0] rounded-[5px] px-[19px]"
            type="text"
            placeholder={placeholder}
            value={answer[answerType!]}
          />
        </>
      ) : (
        <>
          <DateCityHandler callType={callType} />
          <input
            readOnly
            className="w-[301px] h-[55px] border border-[#E0E0E0] rounded-[5px] px-[19px]"
            type="text"
            placeholder={placeholder}
            value={answer.city}
          />
        </>
      )}
    </div>
  );
};

export default DateCityInput;
