import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import {  useDrag } from 'react-use-gesture'
import GoodItem from './GoodItem'
import style from './GoodList.module.scss'

const cards = [
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
]

const to = i => ({ x: 0, y: 0 , scale: 1, rot: 0, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1200 })
const trans = (r, s) => `perspective(1500px) rotateX(00deg) rotateY(${0}deg) rotateZ(${0}deg) scale(${s})`



export default function GoodList() {
    const [gone] = useState(() => new Set()) 
    const [props, setProps] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) 
    const bind = useDrag(({ args: [index], down, movement: [mx, my] , delta: [xDelta,yDelta], distance, direction: [xDir,yDir], velocity }) => {
        const trigger = velocity > 0.2
        if (!down && trigger) gone.add(index) 
        setProps(i => {
            if (index !== i) return 
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * xDir : down ? mx : 0 
            const y = isGone ? (200 + window.innerHeight) * yDir : down ? my : 0 
            const rot = xDelta / 100 + (isGone ? xDir * 10 * velocity : 0) 
            const scale = down ? 1.1 : 1 
            return { x,y, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
        })
        if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || setProps(i => to(i)), 600)
    })
    return (
        <React.Fragment>
            <div className={style.back_btn}></div>
            <div className={style.good_list_page}>
                {
                    props.map(({ x, y, rot, scale }, i) => (
                        <animated.div className={style.item_wrapper}  {...bind(i)} key={i} style={{transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
                                <animated.div className={style.item} style={{ transform: interpolate([rot, scale], trans)}}>
                                </animated.div>
                        </animated.div>
                    ))
                }
            </div>
        </React.Fragment>
    )
}
