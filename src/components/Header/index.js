import { useState } from 'react'

function Header() {
  const [menuStatus, switchMenuStatus] = useState('hidden')
  const handleClickMenu = () => {
    switchMenuStatus(menuStatus === 'hidden' ? 'block' : 'hidden')
  }
  return (
    <header>
      <nav className='fixed top-0 left-0 right-0 z-50 bg-white shadow dark:bg-gray-800'>
        <div className='container px-6 py-4 mx-auto'>
          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col'>
                <a className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300' href='/'>
                  个人记录展示
                </a>
                <span className='text-sm text-gray-400'>GeekReading</span>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className='flex lg:hidden'>
                <button type='button' className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400' aria-label='toggle menu' onClick={handleClickMenu.bind()}>
                  <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                    <path fillRule='evenodd' d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: 'block', Menu closed: 'hidden' --> */}
            <div className={`${menuStatus} -mx-4 lg:flex lg:items-center`}>
              <a href='#robot' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>频道机器人</a>
              <a href='#tensorflow' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>TensorFlow小程序</a>
              <a href='#wallpaper' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>壁纸小程序</a>
              <a href='#ai-photo' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>玩图宇宙</a>
              <a href='#horoscope' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>星座运势</a>
              <a href='https://github.com/yaun369' target='view_window' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>GitHub</a>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex relative z-20 items-center pt-20 dark:bg-gray-800'>
        <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-4'>
          <div className='flex flex-col'>
            <img className='rounded-full w-28 mx-auto' src='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/avatar.png?imageMogr2/thumbnail/150x150' alt='avatar' />
            <p className='text-xl sm:text-3xl my-6 text-center dark:text-white'>
              Hi, I&#x27;m Yanu 🤘
            </p>
            <h2 className='max-w-3xl text-xl sm:text-5xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2'>
              Service products, using technology to meet product claims
            </h2>
            <div className='flex w-40 items-center justify-center mt-4 mb-2 mx-auto rounded-lg shadow text-base font-medium text-white transition-colors duration-150 transform bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600'>
              <a href='footer' className='inline-flex items-center justify-center px-5 py-3'>
                <svg className='w-6 h-6' width='24' height='24' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='48' height='48' fill='white' fillOpacity='0.01' /><path d='M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V44C28.9886 44 33.5507 42.1735 37.0539 39.1529' stroke='#ffffff' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' /><path d='M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z' fill='none' stroke='#ffffff' strokeWidth='4' strokeLinejoin='round' /><path d='M32 24C32 27.3137 34.6863 30 38 30V30C41.3137 30 44 27.3137 44 24' stroke='#ffffff' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' /><path d='M32 25V16' stroke='#ffffff' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' /></svg>
                <span className='ml-2'>联系我</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
