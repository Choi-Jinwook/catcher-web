/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        stayLoggedIn: "url(/images/samples/StayLoggedIn.svg)",
        idLabel: "url(/images/samples/IdLabel.svg)",
        pwLabel: "url(/images/samples/PwLabel.svg)",
        eye: "url(/images/samples/eye.svg)",
        kakao: "url(/images/samples/kakao.svg)",
        naver: "url(/images/samples/naver.svg)",
        question: "url(/images/samples/question.svg)",
        check: "url(/images/samples/check.svg)",
        searchIcon: "url(/images/samples/searchIcon.svg)",
        mypageMenu: "url(/images/samples/mypageMenu.svg)",
        changeProfileImageButton:
          "url(/images/samples/changeProfileImageButton.svg)",
        checked: "url(/images/samples/checked.svg)",
      },
      width: {
        "3/5-10": "calc(60% - 10px)",
        "full-177": "calc(100% - 177px)",
        "full-30": "calc(100% - 30px)",
        planContent: "calc(100% - 250px)",
      },
      height: {
        "full-204": "calc(100% - 204px)",
        "without-header": "calc(100vh - 78px)",
        planScrollbar: "calc(100vh - 85px)",
      },
      maxHeight: {
        "full-204": "calc(100% - 204px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
