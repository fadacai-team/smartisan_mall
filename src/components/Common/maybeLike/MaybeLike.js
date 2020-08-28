import React, { Component } from 'react'
import styles from "./MaybeLike.module.scss"
import axios from "../../../Utils/myaxios"
export default class MaybeLike extends Component {
    constructor(props){
        super(props)
        this.state={
            shopList:[]
        }
    }
    componentDidMount(){
        axios.get("https://shopapi.smartisan.com/mobile/skulist?page=1")
        .then(res=>{
         
            this.setState({shopList:res.data.skuInfo},()=>{

            })
        })
    }
    render() {
        return (
            <div>
                 <div className={styles.maybeLike}>
                        <h1>
                            猜你喜欢
                        </h1>
                        <div className={styles.shopList}>
                            {
                                this.state.shopList.map((item,index)=>{
                                    return <dl key={item.skuName}>
                                    <dt>
                                        <img src={item.images}/>
                                    </dt>
                                    <dd>
                                        <h3>{item.skuName}</h3>
                                        <div className={styles.shopInfo}>
                                        <span>￥{item.discountPrice}</span>
                                        <b>￥{item.originalPrice}</b>
                                           {
                                               item.originalPrice
                                               ? <i>直降</i>
                                               :""
                                           }
                                        </div>
                                    </dd>
                                </dl>
                                })
                            }
                          
                            
                        </div>
                    </div>
                    <div className={styles.footer}>
                            没有更多了
                    </div>
            </div>
        )
    }
}
