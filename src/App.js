import { useState } from 'react'
import './App.css'

function App() {
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
                <a className='text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300' href='index'>
                  <span className='text-blue-400'>G</span>
                  <span className='text-rose-700'>e</span>
                  <span className='text-rose-700'>e</span>
                  <span className='text-green-500'>k</span>
                  Reading
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
              <a href='1' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>星座运势</a>
              <a href='1' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>频道机器人</a>
              <a href='1' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>玩图宇宙</a>
              <a href='1' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>TensorFlow小程序</a>
              <a href='https://github.com/GeekYmm' target='view_window' className='block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'>GitHub</a>
            </div>
          </div>
        </div>
      </nav>

      <div className='w-full bg-center bg-cover h-[32rem]' style={{ backgroundImage: `url(https://star-1257061493.cos.ap-beijing.myqcloud.com/geekreading/xenia-radchenko-ezEn4jYrVYQ-unsplash.jpeg)` }}>
        <div className='flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50'>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold text-white uppercase lg:text-3xl'>Only a little geeky, wish I had read more</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default App
