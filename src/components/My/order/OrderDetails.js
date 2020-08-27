import React, { Component } from 'react'
import styles from "./OrderDetails.module.scss"
export default class allOrder extends Component {
    render() {
        return (
            <div className={styles.orderDetails}>
                <div className={styles.orderTime}>
                <dt>订单日期:
                    <span>{"2020-08-26 09:44"}</span>
                </dt>
                    <dd>待付款</dd>
                </div>
                <div className={styles.orderInfo}>
                    <dt><img src="https://resource.smartisan.com/resource/8407bd8a1c74d23edbf2d1f7613380c4.jpg?x-oss-process=image/resize,w_180/format,webp"></img></dt>
                    <dd>
                        <div className={styles.shopTitle}>
                        坚果 Pro 3 足迹保护套 莫里斯·詹姆士·麦当劳出生（莫里斯·詹姆士·麦当劳出生）
                        </div>
                        <div className={styles.shopPrice}>
                            <span>￥49</span> x {1}
                        </div>
                    </dd>
                    <div className={styles.rightIcon}></div>
                </div>
                <div className={styles.orderPay}>
                    <dt>
                        实际金额
                        <span>￥49.00</span>
                    </dt>
                    <dd>
                        <div className={styles.payButton}>
                           现在付款
                        </div>
                    </dd>
                </div>
            </div>
        )
    }
}
