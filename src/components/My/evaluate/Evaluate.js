import React, { Component } from 'react'
import Title from "../order/Title"
import Tabs from "../com/Tabs"
import MaybeLike from "../../Common/maybeLike/MaybeLike"
import styles from "./Evaluate.module.scss"
import axios from "../../../Utils/myaxios"
let data =[
    {text:"待评价",num:0},
    {text:"已评价",num:0},
]
export default class Evaluate extends Component {
    constructor(props){
        super(props)
       
    }
    componentDidMount(){
        axios.get("https://shopapi.smartisan.com/mobile/skulist?page=1")
        .then(res=>{
            console.log(res.data.skuInfo);
            this.setState({shopList:res.data.skuInfo},()=>{

            })
        })
    }
    render() {
        return (
            <div className={styles.title}>
               <Title title={"评价中心"}></Title>
               <div className={styles.nav}>
               <Tabs item={data}></Tabs>
               </div>
               <div className={styles.content}>
                  
                    <div className={styles.evaluate}>
                        <div className={styles.notice}>
                            <dt>
                                <img src="data:image/png;base64,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" />
                            </dt>
                            <dd>
                                <p>暂无评价</p>
                                <span>您还没有发过评论，快去评价吧</span>
                            </dd>
                        </div>
                    </div>
                    <MaybeLike></MaybeLike>
              </div>
            </div>
        )
    }
}

