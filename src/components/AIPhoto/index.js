function AIPhoto() {
  const list = [
    {
      title: '人像卡通化', desc: '使用 Taro 跨端框架开发，支持微信 QQ 小程序。上传人像图片实现卡通化效果。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805' />
        <circle cx='12' cy='12' r='7' />
      </svg>
    },
    {
      title: '人像抠图', desc: '利用阿里视觉智能 API 实现一键人像祛除背景。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M12 21a9.01 9.01 0 0 0 2.32 -.302a9.004 9.004 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035z' />
        <path d='M12 3v17' />
        <path d='M12 12h9' />
        <path d='M12 9h8' />
        <path d='M12 6h6' />
        <path d='M12 18h6' />
        <path d='M12 15h8' />
      </svg>
    },
    {
      title: '替换天空', desc: '上传带天空的图片，并选择小程序提供的天空素材，实现天空替换效果。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M17.553 16.75a7.5 7.5 0 0 0 -10.606 0' />
        <path d='M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z' />
        <path d='M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196' />
        <path d='M15 9l-3 5.196' />
        <path d='M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25' />
      </svg>
    }
  ]
  return (
    <section id='ai-photo' className='container mx-auto px-6 py-4 bg-white dark:bg-gray-800 p-2'>
      <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center overflow-hidden'>
        <div className='lg:col-start-2 md:pl-20'>
          <h4 className='text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9'>
            玩图宇宙小程序
          </h4>
          <ul>
            {
              list.map((item, index) => {
                return (
                  <li className='mt-10' key={index}>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center h-10 w-10 rounded-md bg-amber-100 text-amber-500'>
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
        <div className='mt-10 lg:mt-0 lg:col-start-1'>
          <picture>
            <source srcSet='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/ai-photo.webp?imageMogr2/thumbnail/600x600' media='(max-width: 400px)' />
            <source srcSet='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/ai-photo.webp?imageMogr2/thumbnail/1000x1000' media='(max-width: 800px)' />
            <source srcSet='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/ai-photo.webp?imageMogr2/thumbnail/1500x1500' media='(max-width: 1200px)' />
            <img src='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/ai-photo.webp' alt='mockup' className='mx-auto w-auto' />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default AIPhoto