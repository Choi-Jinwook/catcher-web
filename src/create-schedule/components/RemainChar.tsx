import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { scheduleAnswers } from "@shared/recoil";

const RemainChar = () => {
  const [remainChar, setRemainChar] = useState(40);
  const { title } = useRecoilValue(scheduleAnswers);

  useEffect(() => {
    setRemainChar(() => {
      if (40 - title.length < 0) return 0;
      return 40 - title.length;
    });
  }, [title.length]);

  return (
    <div className="text-[12px] text-[#8D8D8D] font-medium -tracking-[0.01em]">
      {remainChar}자 남음
    </div>
  );
};

export default RemainChar;
