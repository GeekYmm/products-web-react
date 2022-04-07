import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

const cards = [1, 2, 3, 4, 5]

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = _ => ({ x: 0, rot: 0, scale: 1.1, y: -350 })
const trans = (r, s) => `perspective(3000px) rotateX(15deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

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
  })

  return (
    <div className='overflow-hidden relative w-1/2 h-screen'>
      {
        props.map(({ x, y, rot, scale }, i) => (
          <animated.div
            key={i}
            className='absolute flex w-full h-full items-center justify-center will-change-transform'
            style={{ x, y }}>
            <animated.div
              {...bind(i)}
              className='touch-none cursor-grab flex w-96 h-96 items-center justify-center will-change-transform bg-zinc-100 rounded shadow-2xl'
              style={{ transform: interpolate([rot, scale], trans) }} />
          </animated.div>
        ))
      }
    </div>
  )
}

export default Horoscope