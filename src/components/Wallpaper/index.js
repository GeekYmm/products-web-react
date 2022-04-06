function Wallpaper() {
  const list = [
    {
      title: '数据来源', desc: '壁纸头像数据均来源于微博和 Instagram. 用 Node.js 实现爬虫，项目已经开源',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentcolor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <ellipse cx='12' cy='6' rx='8' ry='3'></ellipse>
        <path d='M4 6v6a8 3 0 0 0 16 0v-6' />
        <path d='M4 12v6a8 3 0 0 0 16 0v-6' />
      </svg>
    },
    {
      title: '头像饰品', desc: '超过100款头像饰品可选择，方便用户快速合成喜欢的头像。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentcolor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M11 17a2.5 2.5 0 0 0 2 0' />
        <path d='M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z' />
        <line x1='8' y1='11' x2='10' y2='13' />
        <line x1='16' y1='11' x2='14' y2='13' />
      </svg>
    },
    {
      title: '图片编辑', desc: '支持头像缩放裁剪，一键设置成 QQ 头像，或者保存到本地。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentcolor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1' />
        <path d='M4 12h7a1 1 0 0 1 1 1v7' />
      </svg>
    }
  ]
  return (
    <section id='wallpaper' className='container mx-auto px-6 py-4 bg-white dark:bg-gray-800 p-2'>
      <div className='lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center overflow-hidden'>
        <div className='lg:col-start-1'>
          <h4 className='text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9'>
            头像壁纸小程序
          </h4>
          <ul>
            {
              list.map((item, index) => {
                return (
                  <li className='mt-10' key={index}>
                    <div className='flex'>
                      <div className='flex-shrink-0'>
                        <div className='flex items-center justify-center h-10 w-10 rounded-md bg-violet-100 text-violet-500'>
                          {(item.icon)}
                        </div>
                      </div>
                      <div className='ml-4'>
                        <h5 className='text-lg leading-6 text-gray-900 dark:text-white font-bold'>
                          {item.title}
                        </h5>
                        <p className='mt-2 text-base leading-6 text-gray-500 dark:text-gray-300'>
                          {item.desc}
                          {index === 0 && <a className='text-violet-500 hover:text-violet-400' href='https://github.com/yaun369/node-crawler' target='view_window'>点击查看。</a>}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='mt-10 lg:mt-0 lg:col-start-2'>
          <picture>
            <source srcset='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/wallpaper.webp?imageMogr2/thumbnail/600x600' media='(max-width: 400px)' />
            <source srcset='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/wallpaper.webp?imageMogr2/thumbnail/1000x1000' media='(max-width: 800px)' />
            <source srcset='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/wallpaper.webp?imageMogr2/thumbnail/1500x1500' media='(max-width: 1200px)' />
            <img src='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/wallpaper.webp' alt='mockup' className='mx-auto w-auto object-cover' />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Wallpaper