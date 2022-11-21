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
      manUrl:
        "https://mp.weixin.qq.com/s?__biz=MzI1MjMxMzk5Mw==&mid=2247483899&idx=1&sn=08056b4cef3542180b3626b74732af8e&chksm=e9e4e91dde93600b4100966dfabf2a00d86446a842f492c5a8eeab1649488e639ef442e502ce#rd",
      womanUrl:
        "https://mp.weixin.qq.com/s?__biz=MzI1MjMxMzk5Mw==&mid=2247483899&idx=2&sn=fe76d53c4ff92c7f0f22bad6d8992908&chksm=e9e4e91dde93600bdb0be927789c75a8ca807e80757ac201da9b3ad9ef9b286754c605ccffc0#rd",
    },
    {
      title: "呜莎",
      key: "ws",
      icon: "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/4.JPEG",
      manUrl:
        "https://mp.weixin.qq.com/s?__biz=MzI1MjMxMzk5Mw==&mid=2247483899&idx=8&sn=c135e52142911785fae75035c0dfa10c&chksm=e9e4e91dde93600b5d3a994c78e04bf3972f01a5682d9bd97fa85e4bb1768abce303fd1a5124#rd",
      womanUrl:
        "https://mp.weixin.qq.com/s?__biz=MzI1MjMxMzk5Mw==&mid=2247483899&idx=7&sn=b84855013ec54357acf01c737d0f4304&chksm=e9e4e91dde93600b45d8c039a4b420647e42034a83a23f55ef772553d4373e4a610ab9667e7c#rd",
    },
    {
      title: "莎呜",
      key: "sw",
      icon: "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/5.JPEG",
      manUrl:
        "https://mp.weixin.qq.com/s?__biz=MzI1MjMxMzk5Mw==&mid=2247483899&idx=6&sn=b555055647f30f6d03a325d15e34e21a&chksm=e9e4e91dde93600b253f08f21a3e051e3f56e4f59ad4b675dc636ff94fb5a0199c587804f0eb#rd",
      womanUrl:
        "https://mp.weixin.qq.com/s?__biz=MzI1MjMxMzk5Mw==&mid=2247483899&idx=5&sn=9757273423b30e26dea41a3ddbdad752&chksm=e9e4e91dde93600b2824049cd7877cfde25caa173716cebcfaa12448578e45ed3ca49638272c#rd",
    },
    {
      title: "莎莎",
      key: "ss",
      icon: "https://star-1257061493.cos.ap-beijing.myqcloud.com/ws/icon/6.JPEG",
      manUrl:
        "https://mp.weixin.qq.com/s?__biz=MzI1MjMxMzk5Mw==&mid=2247483899&idx=3&sn=4d94df296fde84be71100f557ff73103&chksm=e9e4e91dde93600bf6eb3cb779889f30a48174dfa939be4e4fddf77837b7e5f379a143084564#rd",
      womanUrl:
        "https://mp.weixin.qq.com/s?__biz=MzI1MjMxMzk5Mw==&mid=2247483899&idx=4&sn=c4a3f59c2bcbd06d1ae1f71025f80c9b&chksm=e9e4e91dde93600b468d0154e28a5dd3e15be3e5b22ea461f2a1a5bd531a84c75a486365d958#rd",
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
              <a href={ele.manUrl} target="view_window">
                <button
                  type="button"
                  className="py-2 px-4 bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  {ele.title}男性格分析
                </button>
              </a>
            </div>
            <img className="object-cover w-1/4" src={ele.icon} alt="icon" />
            <div className="flex flex-col items-center justify-center">
              <img
                className="object-cover w-8 mb-2"
                src={womanIcon}
                alt="icon"
              />
              <a href={ele.womanUrl} target="view_window">
                <button
                  type="button"
                  className="py-2 px-4 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  {ele.title}女性格分析
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Wusha;
