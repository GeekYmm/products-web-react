function TensorFlow() {
  const list = [
    {
      title: '体验项目', desc: '小程序已上线。在微信搜索「TensorFlow机器学习模型」即可找到。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <polyline points='12 4 4 8 12 12 20 8 12 4' />
        <polyline points='4 12 12 16 20 12' />
        <polyline points='4 16 12 20 20 16' />
      </svg>
    },
    {
      title: '技术要点', desc: '在微信小程序里使用 TensorFlow 提供的插件，运行一些开箱即用的预训练模型。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M10 12h-1v5h1' />
        <path d='M14 12h1v5h-1' />
        <path d='M14 3v4a1 1 0 0 0 1 1h4' />
        <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
      </svg>
    },
    {
      title: '功能实现', desc: '引入实时估计人体姿势(PoseNet)和定位和识别单个图像中的多个对象(Coco SSD)两个模型。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M14 10h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1' />
        <path d='M13 17c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5' />
        <path d='M3 19c0 1.5 .5 2 2 2s2 -4 3 -9s1.5 -9 3 -9s2 .5 2 2' />
        <line x1='5' y1='12' x2='11' y2='12' />
      </svg>
    },
    {
      title: '项目开源', desc: '本项目已经在 Github 上开源，欢迎贡献代码。',
      icon: <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
      </svg>
    }
  ]
  return (
    <section id='tensorflow' className='relative bg-white dark:bg-gray-800 px-2 py-10'>
      <div className='container px-6 mx-auto'>
        <h1 className='sm:text-2xl text-xl leading-8 sm:leading-9 font-extrabold text-gray-900 capitalize dark:text-white'>微信小程序中使用<span className='text-orange-400'>TensorFlow</span></h1>
        <picture>
          <source srcSet='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/tensorflow-1.webp?imageMogr2/thumbnail/600x600' media='(max-width: 400px)' />
          <source srcSet='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/tensorflow-1.webp?imageMogr2/thumbnail/1000x1000' media='(max-width: 800px)' />
          <source srcSet='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/tensorflow-1.webp?imageMogr2/thumbnail/1500x1500' media='(max-width: 1200px)' />
          <img src='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/WebP/tensorflow-1.webp' alt='mockup' className='my-10 lg:col-start-1' />
        </picture>
        <div className='grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2'>
          {
            list.map((item, index) => {
              return (
                <div key={index} className='p-4 border rounded-xl border-r-gray-200 dark:border-gray-700'>
                  <div className='md:flex md:items-start md:-mx-4'>
                    <span className='flex flex-shrink-0 items-center justify-center h-10 w-10 rounded-md text-orange-500 bg-orange-100 md:mx-4 dark:text-white dark:bg-orange-500'>
                      {item.icon}
                    </span>
                    <div className='mt-4 md:mx-4 md:mt-0'>
                      <h5 className='text-lg text-gray-900 dark:text-white font-bold'>
                        {item.title}
                      </h5>
                      <p className='mt-2 text-base text-gray-500 dark:text-gray-300'>
                        {item.desc}
                        {index === 3 && <a className='text-orange-500 hover:text-orange-400' href='https://github.com/yaun369/tensorflow-wxapp' target='view_window'>点击查看</a>}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TensorFlow