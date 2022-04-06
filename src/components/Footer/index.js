function Footer() {
  return (
    <footer id='footer' className='bg-white dark:bg-gray-800'>
      <div className='container px-6 py-8 mx-auto'>
        <section className='w-full max-w-2xl px-6 py-4 mx-auto bg-white dark:bg-gray-800'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>联系我们</h2>
          <p className='mt-3 text-center text-gray-600 dark:text-gray-400'>可以通过以下方式联系到我，发送邮件请备注来自网站</p>
          <div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3'>
            <a href='https://support.qq.com/products/164698' target='view_window' className='flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>
              <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 2.998 -3.49 2.998 -5.789c0 -4.286 -4.03 -7.764 -8.998 -7.764c-4.97 0 -9.002 3.478 -9.002 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29z' />
                <path d='M7.5 13.5c2.5 2.5 6.5 2.5 9 0' />
              </svg>
              <span className='text-xs leading-8'>Feedback</span>
            </a>

            <a href='https://github.com/yaun369/products-web-react/issues' target='view_window' className='flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>
              <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
              </svg>
              <span className='text-xs leading-8'>Github Issues</span>
            </a>

            <a href='mailto:yanu2lucky@gmail.com' className='flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>
              <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <rect x='3' y='5' width='18' height='14' rx='2' />
                <polyline points='3 7 12 13 21 7' />
              </svg>
              <span className='text-xs leading-8'>yanu2lucky@gmail.com</span>
            </a>
          </div>
        </section>
        <div className='flex flex-col items-center mt-3 sm:flex-row sm:justify-between'>
          <p className='text-sm sm:text-xs text-gray-400'>© Copyright 2022. All Rights Reserved.</p>
          <div className='flex mt-3 -mx-2 sm:mt-0'>
            <a href='https://beian.miit.gov.cn/#/Integrated/index' target='view_window' className='mx-2 text-sm sm:text-xs text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'> 晋ICP备18008609号-1 </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer