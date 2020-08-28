import React from 'react'
import styles from './GoodsItem.module.scss'
import {useSpring, animated } from 'react-spring'

const to = i => ({ x: 0, y: 0 , scale: 1, rot: 0, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1200 })
const trans = (r, s) => `perspective(1500px) rotateX(00deg) rotateY(${0}deg) rotateZ(${0}deg) scale(${s})`

export default function GoodsItem(props){
    
        const myanimation = useSpring({to:{opacity: 1} , from: {opacity: 0}})
        const getPrice = ()=>{
            if(props.data.promotionList[0]){
                if(props.data.promotionList[0].tag){
                    return <span className={styles.tag + " " + styles.red }>{props.data.promotionList[0].describe}</span>
                }else{
                    return ''
                }
            }else{
                return ''
            }
        }
        return (
            <React.Fragment>
                            <animated.div 
                                style={ myanimation } 
                            >
                                <section key={props.data.skuId} className={styles.flow_item + " " + styles.sku_item + " " + styles.waterfall } >
                                    <figure className={styles.item_cover}>
                                        <aside className={styles.item_promotion_tage + " " + styles.sign}>
                                        </aside>
                                        <img src={props.data.images + '?x-oss-process=image/resize,w_324/format,webp'} className={styles.animation}></img>
                                    </figure>
                                    <article className={styles.item_title + ' ' + styles.two_line}>
                                        <h3>
                                            {props.data.skuTitle}
                                        </h3>
                                    </article>
                                    {props.data.promotionList === [] ? "jjj" : <aside className={styles.item_promotion_tage}>
                                        {getPrice()}
                                    </aside>}
                                    <article className={styles.item_bottom_info}>
                                        <aside className={styles.item_price}>
                                            <span className={styles.discount}>
                                                ¥{parseFloat(props.data.discountPrice)}
                                                
                                            </span>
                                            {props.data.discountPrice === props.data.originalPrice ? "" : <span className={styles.originalPrice}>
                                                    ¥{parseFloat(props.data.originalPrice)}
                                                    </span>}
                                        </aside>
                                    </article>
                                </section>
                    </animated.div>
                
            </React.Fragment>
        )
}
