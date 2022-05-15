import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const cards = [1, 2, 3, 4, 5]

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = _ => ({ x: 0, rot: 0, scale: 1.1, y: -80 })
const trans = (r, s) => `perspective(2000px) rotateX(15deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Horoscope() {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))

  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
    const trigger = vx > 0.2
    if (!active && trigger) gone.add(index)
    api.start(i => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0
      const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0)
      const scale = active ? 1.1 : 1
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!active && gone.size === cards.length) {
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
    }
  }, { delay: 1000, filterTaps: true })

  return (
    <section className='container flex flex-col lg:flex-row items-center py-10 lg:py-20 mx-auto w-full overflow-hidden'>
      <section className='relative w-10/12 lg:w-1/2 h-[560px]'>
        {
          props.map(({ x, y, rot, scale }, i) => (
            <animated.div
              key={i}
              className='absolute flex w-full h-full items-center justify-center will-change-transform'
              style={{ x, y }}>
              <animated.div
                {...bind(i)}
                className='touch-none cursor-grab flex w-96 h-full items-center justify-center will-change-transform bg-zinc-100 rounded shadow-xl'
                style={{ transform: interpolate([rot, scale], trans) }} />
            </animated.div>
          ))
        }
      </section>
      <section className='w-full lg:w-1/2 h-full dark:border-gray-700 z-10'>
        <div className='container h-full flex flex-col items-center justify-center mt-14 mx-auto text-center'>
          <h1 className='sm:text-2xl text-xl leading-8 sm:leading-9 font-extrabold text-gray-900 capitalize dark:text-white'>星座运势数据</h1>
          <p className='block mt-6 px-4 text-base leading-6 text-gray-500 dark:text-gray-300'>12星座运势数据每日更新，切换卡片或点击下方按钮可以体验。为用户生成今日/明日/本周/本月/年度运势。提供专属星座配对。记录情侣/好友星座，生成运势提醒。</p>
          <div className='mt-8'>
            <div className='inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3'>
              <a href='/' className='inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto'>
                <svg className='w-6 h-6' width='24' height='24' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='48' height='48' fill='white' fillOpacity='0.01' /><circle cx='24' cy='24' r='20' fill='none' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /><path d='M29 24C29.9889 24 30.9556 23.7068 31.7779 23.1574C32.6001 22.6079 33.241 21.827 33.6194 20.9134C33.9978 19.9998 34.0969 18.9945 33.9039 18.0246C33.711 17.0546 33.2348 16.1637 32.5355 15.4645C31.8363 14.7652 30.9454 14.289 29.9755 14.0961C29.0055 13.9031 28.0002 14.0022 27.0866 14.3806C26.173 14.759 25.3921 15.3999 24.8427 16.2222C24.2932 17.0444 24 18.0111 24 19V29C24 29.9889 23.7068 30.9556 23.1574 31.7779C22.6079 32.6001 21.8271 33.241 20.9134 33.6194C19.9998 33.9978 18.9945 34.0969 18.0246 33.9039C17.0546 33.711 16.1637 33.2348 15.4645 32.5355C14.7652 31.8363 14.289 30.9454 14.0961 29.9755C13.9031 29.0055 14.0022 28.0002 14.3806 27.0866C14.759 26.173 15.3999 25.3921 16.2222 24.8427C17.0444 24.2932 18.0111 24 19 24' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
                <span className='ml-2'>微信小程序</span>
              </a>
            </div>
            <div className='inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0'>
              <a href='/' className='inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' viewBox='0 0 1024 1024' width='24' height='24'><path d='M509.056 160a357.546667 357.546667 0 0 1 260.202667 111.872c116.906667-4.842667 197.866667 20.394667 218.965333 81.642667 17.002667 49.386667-13.184 106.453333-76.117333 162.581333l-9.429334 8.213333c-9.685333 8.192-20.053333 16.362667-31.04 24.469334l-5.674666 4.117333c-17.28 181.888-170.474667 324.181333-356.906667 324.181333-102.336 0-194.666667-42.88-259.989333-111.637333l-7.466667 0.277333c-111.573333 3.093333-191.765333-23.082667-212.074667-82.090666C8.96 624 54.165333 556.437333 144.213333 490.026667l7.893334-5.717334C169.386667 302.336 322.56 160 509.077333 160z m283.093333 440.106667l-14.293333 8.042666-14.101333 7.616-14.442667 7.530667-14.762667 7.424-15.104 7.338667-15.381333 7.232-15.722667 7.104-7.957333 3.52-20.202667 8.64-20.650666 8.448-16.810667 6.613333-17.066667 6.442667-8.597333 3.178666-17.429333 6.229334-8.789334 3.050666-17.6 5.952-17.514666 5.674667-17.429334 5.418667-17.301333 5.141333-25.749333 7.210667-21.205334 5.546666-20.949333 5.12-16.597333 3.797334-16.405334 3.498666-16.213333 3.242667-16 2.944-19.712 3.306667-11.861333 1.770666a293.205333 293.205333 0 0 0 172.757333 55.936c134.357333 0 247.701333-89.962667 283.093333-212.949333zM153.386667 564.373333l-0.789334 0.682667c-48.170667 41.301333-69.610667 77.333333-62.592 97.749333 6.144 17.813333 30.762667 29.845333 68.778667 35.541334l9.386667 1.258666c6.4 0.746667 13.162667 1.322667 20.224 1.749334l12.458666 0.554666a356.224 356.224 0 0 1-47.466666-137.536zM509.013333 224c-162.666667 0-294.528 131.861333-294.528 294.549333 0 68.117333 23.125333 130.837333 61.952 180.736l3.477334-0.32 13.845333-1.408 14.165333-1.664 14.506667-1.941333 14.784-2.218667 18.88-3.136 19.306667-3.541333 23.68-4.842667 16.085333-3.562666 24.490667-5.866667 16.576-4.266667 16.746666-4.544 16.874667-4.821333 8.512-2.517333 17.088-5.248 17.216-5.546667 17.301333-5.824 17.237334-6.058667c5.696-2.048 11.349333-4.138667 16.96-6.229333l16.725333-6.4 8.234667-3.242667 16.277333-6.613333 16-6.698667 15.68-6.848 19.136-8.704 18.624-8.853333 7.317333-3.562667 14.336-7.210666 13.973334-7.253334 13.589333-7.317333 13.226667-7.338667 12.8-7.402666 6.250666-3.690667 12.202667-7.402667 11.776-7.402666 3.242667-2.133334C803.114667 355.413333 671.424 224 509.056 224z m308.608 111.829333l3.136 5.461334a356.181333 356.181333 0 0 1 43.946667 131.861333l9.173333-7.850667 3.925334-3.498666 7.445333-6.933334c33.429333-32.064 49.301333-60.586667 42.453333-80.512-7.104-20.608-46.506667-35.712-110.08-38.528z' fill='#ffffff'></path></svg>
                <span className='ml-2'>QQ小程序</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Horoscope