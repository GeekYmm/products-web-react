function Robot() {
  const list = [
    {
      title: '运势问答', desc: 'QQ频道内自由接入，支持通过指令查询今日/本周/本月运势。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z' />
      </svg>
    },
    {
      title: '好运打卡', desc: '好运打卡帮助活跃频道。水逆期间还可以通过指令查询水逆详情。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2' />
        <rect x='9' y='3' width='6' height='4' rx='2' />
        <path d='M9 14l2 2l4 -4' />
      </svg>
    },
    {
      title: '专属头像', desc: '通过指令获取好运头像，快速生成专属头像，支持指定头像框。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <circle cx='12' cy='9' r='6' />
        <polyline points='9 14.2 9 21 12 19 15 21 15 14.2' transform='rotate(-30 12 9)' />
        <polyline points='9 14.2 9 21 12 19 15 21 15 14.2' transform='rotate(30 12 9)' />
      </svg>
    }
  ]
  return (
    <section id='robot' className='container mx-auto px-6 py-4 bg-white dark:bg-gray-800 p-2'>
      <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center overflow-hidden'>
        <div className='lg:col-start-2 md:pl-20'>
          <h4 className='text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9'>
            星座小圆 🤖️ 机器人
          </h4>
          <ul>
            {
              list.map((item, index) => {
                return (
                  <li className='mt-10' key={index}>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-b from-pink-600 to-purple-700 text-white'>
                          {(item.icon)}
                        </div>
                      </div>
                      <div className='ml-4'>
                        <h5 className='text-lg leading-6 text-gray-900 dark:text-white font-bold'>
                          {item.title}
                        </h5>
                        <p className='mt-2 text-base leading-6 text-gray-500 dark:text-gray-300'>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1'>
          <img src='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/robot-mock-up.png?imageMogr2/thumbnail/1500x1500' alt='illustration' className='mx-auto shadow-lg w-auto' />
        </div>
      </div>
    </section>
  )
}

export default Robot