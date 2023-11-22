import { ScheduleCard } from "@shared/components";

const Template = () => {
  const content = [
    {
      id: 1,
      imageSrc: "image",
      title: "베이커리 빵지순례",
      position: "서울시 연남동",
      requiredTime: "1일 이내",
    },
    {
      id: 2,
      imageSrc: "image",
      title: "카페에서 함께 공부해요",
      position: "서울시 연남동",
      requiredTime: "2~3일 일정",
    },
    {
      id: 3,
      imageSrc: "image",
      title: "베이커리 빵지순례",
      position: "가로수길",
      requiredTime: "1일 이내",
    },
    {
      id: 4,
      imageSrc: "image",
      title: "호캉스 일정",
      position: "남해",
      requiredTime: "2~3일 일정",
    },
  ];

  return <ScheduleCard content={content} callType="template" />;
};

export default Template;
