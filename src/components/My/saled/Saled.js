import React, { Component } from 'react'
import Title from "../order/Title"
import Tabs from "../com/Tabs"
import Tips from "../com/Tips"
import styles from "./Saled.module.scss"
let data =[
    {text:"发起售后",num:0},
    {text:"我的售后",num:0},
]
let tips =[
    "您还没有此类订单","感谢您在锤子商城购物"
]
export default class Saled extends Component {
    render() {
        return (
            <div className={styles.saled}>
                <Title title={"售后中心"}></Title>
                <div className={styles.nav}>
                    <Tabs item={data}></Tabs>
                </div>
                <div className={styles.content}>
                    <Tips tips={tips}></Tips>  
                </div>

            </div>
        )
    }
}
