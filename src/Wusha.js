function Wusha() {
  const manIcon =
    "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/1.JPEG";
  const womanIcon =
    "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/3.JPEG";

  const openList = [
    {
      title: "呜呜",
      key: "ww",
      icon: "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/2.JPEG",
    },
    {
      title: "呜莎",
      key: "ws",
      icon: "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/4.JPEG",
    },
    {
      title: "莎呜",
      key: "sw",
      icon: "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/5.JPEG",
    },
    {
      title: "莎莎",
      key: "ss",
      icon: "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/6.JPEG",
    },
  ];

  return (
    <div className="flex flex-col items-center max-w-screen-md m-auto pb-16">
      <img
        className="object-cover"
        src="https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/1.jpeg"
        alt="step1"
      />
      <img
        className="object-cover"
        src="https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/2.jpeg"
        alt="step2"
      />
      {openList.map((ele, index) => {
        return (
          <div
            key={index}
            className="w-full flex items-center justify-evenly mt-10 mx-auto"
          >
            <div className="flex flex-col items-center justify-center">
              <img className="object-cover w-8 mb-2" src={manIcon} alt="icon" />
              <button
                type="button"
                className="py-2 px-4 bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                {ele.title}男性格分析
              </button>
            </div>
            <img className="object-cover w-1/4" src={ele.icon} alt="icon" />
            <div className="flex flex-col items-center justify-center">
              <img
                className="object-cover w-8 mb-2"
                src={womanIcon}
                alt="icon"
              />
              <button
                type="button"
                className="py-2 px-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                {ele.title}女性格分析
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Wusha;
