import { useEffect, useState } from "react";

interface RemainCharProps {
  title: string;
}

const RemainChar = ({ title }: RemainCharProps) => {
  const [remainChar, setRemainChar] = useState(40);

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
