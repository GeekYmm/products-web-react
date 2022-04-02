import { useState } from 'react'

function Header() {
  const [menuStatus, switchMenuStatus] = useState('hidden')
  const handleClickMenu = () => {
    switchMenuStatus(menuStatus === 'hidden' ? 'block' : 'hidden')
  }
  return (
    <header>
      <nav className='bg-white shadow dark:bg-gray-800'>
        <div className='container px-6 py-4 mx-auto'>
          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className='flex items-center justify-between'>
              <div className='text-xl font-semibold text-gray-700'>
                <a className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300' href='/'>
                  GeekReading
                </a>
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
              <a href='1' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>星座运势</a>
              <a href='1' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>玩图宇宙</a>
              <a href='1' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>TensorFlow小程序</a>
              <a href='https://github.com/yaun369' target='view_window' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>GitHub</a>
            </div>
          </div>
        </div>
      </nav>
      <div className='flex relative z-20 items-center'>
        <div className='container mx-auto px-6 flex flex-col justify-between items-center relative py-4'>
          <div className='flex flex-col'>
            <img className='rounded-full w-28 mx-auto' src='https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/avatar.png?imageMogr2/thumbnail/150x150' alt='avatar' />
            <p className='text-xl sm:text-3xl my-6 text-center dark:text-white'>
              Hi, I&#x27;m Yanu 🤘
            </p>
            <h2 className='max-w-3xl text-xl sm:text-5xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2'>
              Service products, using technology to meet product claims
            </h2>
            <div className='flex items-center justify-center mt-2 mb-2'>
              <a href='#footer' className='uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md'>
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
