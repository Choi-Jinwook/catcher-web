import { ThumbnailSelectorProps } from "modalContent/ThumbnailSelector";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { useModal } from "@shared/hook";
import { scheduleAnswers } from "@shared/recoil";

const SelectMainImage = () => {
  const setImageSrc = useSetRecoilState(scheduleAnswers);
  const { openModal } = useModal();

  const handleModal = () => {
    openModal<ThumbnailSelectorProps>({
      contentId: "thumbnailSelector",
      isHeaderCloseBtn: true,
      okCallback: (id: string) => {
        setImageSrc((prev) => ({ ...prev, imageSrc: id }));
      },
    });
  };

  return (
    <div
      className="w-[222px] h-[126px] border border-[#E0E0E0] rounded-[5px] mr-[8px] cursor-pointer"
      onClick={handleModal}
    >
      <div className="py-[32.5px] text-center">
        <Image
          src="/images/samples/camera.svg"
          alt="camera"
          width={30}
          height={30}
        />
        <div className="text-[10px] text-[#757575] -tracking-[0.01em]">
          이미지 선택하기
        </div>
      </div>
    </div>
  );
};

export default SelectMainImage;
