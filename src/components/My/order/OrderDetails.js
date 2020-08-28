import React, { Component } from 'react'
import styles from "./OrderDetails.module.scss"
export default class allOrder extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        return (
            <div className={styles.orderDetails}>
                <div className={styles.orderTime}>
                <dt>订单日期:
                    <span>{this.props.data.orderTime}</span>
                </dt>
                    <dd className={(this.props.data.payType=="已完成"?styles.colorChange:"")}>{this.props.data.payType}</dd>
                </div>
                <div className={styles.orderInfo}>
                    <dt><img src={this.props.data.img}></img></dt>
                    <dd>
                        <div className={styles.shopTitle}>
                        {this.props.data.title}
                        </div>
                        <div className={styles.shopPrice}>
                            <span>￥{this.props.data.price}</span> x  {this.props.data.count}
                        </div>
                    </dd>
                    <div className={styles.rightIcon}></div>
                </div>
                <div className={styles.orderPay+" "+(this.props.data.payType=="待付款"?"":styles.colorChange)}>
                    <dt>
                        实际金额 :
                        <span className={(this.props.data.payType=="已完成"?styles.colorChange:"")}>￥{this.props.data.price*this.props.data.count}</span>
                    </dt>
                    <dd>
                       {
                           this.props.data.payType=="已完成" ?
                           "":
                           <div className={styles.payButton}>
                          {
                              this.props.data.payType=="待付款"?"现在付款":"确认收货"
                          }
                           </div>
                       }
                    </dd>
                </div>
            </div>
        )
    }
}
