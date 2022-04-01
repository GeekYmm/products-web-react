function Footer() {
  return (
    <footer id='footer' className='bg-white dark:bg-gray-800'>
      <div className='container px-6 py-8 mx-auto'>
        <hr className='my-10 border-gray-200 dark:border-gray-700' />
        <section className='w-full max-w-2xl px-6 py-4 mx-auto bg-white dark:bg-gray-800'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>联系我们</h2>
          <p className='mt-3 text-center text-gray-600 dark:text-gray-400'>可以通过以下方式联系到我，加微信请备注来自网站</p>
          <div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3'>
            <div className='flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-qrcode' width='26' height='26' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <rect x='4' y='4' width='6' height='6' rx='1' />
                <line x1='7' y1='17' x2='7' y2='17.01' />
                <rect x='14' y='4' width='6' height='6' rx='1' />
                <line x1='7' y1='7' x2='7' y2='7.01' />
                <rect x='4' y='14' width='6' height='6' rx='1' />
                <line x1='17' y1='7' x2='17' y2='7.01' />
                <line x1='14' y1='14' x2='17' y2='14' />
                <line x1='20' y1='14' x2='20' y2='14.01' />
                <line x1='14' y1='14' x2='14' y2='17' />
                <line x1='14' y1='20' x2='17' y2='20' />
                <line x1='17' y1='17' x2='20' y2='17' />
                <line x1='20' y1='17' x2='20' y2='20' />
              </svg>
              <span className='text-xs'>WeChat</span>
            </div>

            <a href='https://github.com/GeekYmm/products-web-react/issues' target='view_window' className='flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-brand-github' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
              </svg>
              <span className='text-xs'>Github Issues</span>
            </a>

            <a href='mailto:yanu2lucky@gmail.com' className='flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500'>
              <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-mail' width='30' height='30' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <rect x='3' y='5' width='18' height='14' rx='2' />
                <polyline points='3 7 12 13 21 7' />
              </svg>
              <span className='text-xs'>yanu2lucky@gmail.com</span>
            </a>
          </div>
        </section>
        <div className='flex flex-col items-center mt-3 sm:flex-row sm:justify-between'>
          <p className='text-sm text-gray-400'>© Copyright 2022. All Rights Reserved.</p>
          <div className='flex mt-3 -mx-2 sm:mt-0'>
            <a href='https://beian.miit.gov.cn/#/Integrated/index' target='view_window' className='mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'> 晋ICP备18008609号-1 </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer