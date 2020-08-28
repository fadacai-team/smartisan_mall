import React, { Component } from 'react'
import Title from "../order/Title"
import Tabs from "../com/Tabs"
import Tips from "../com/Tips"
import styles from "./Ticket.module.scss"
let data =[
    {text:"未使用",num:0},
    {text:"已使用",num:0},
    {text:"已失效",num:0},
]
let tips =[ "您目前还没有优惠券","感谢您在锤子商城购物"]
   
export default class Saled extends Component {
    render() {
        return (
            <div className={styles.saled}>
                <Title title={"优惠券"}></Title>
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
