import React, { Component } from 'react'
import axios from "axios"
import Login from "./login/login"
import styles from"./My.module.scss"
import List from "./login/List"

export default class My extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr: [
                [
                    {text:"地址管理",path:"/my/location"},
                    {text:"我的优惠券",path:"/my/ticket"},
                    {text:"优先购买码",path:""},
                ],
                [
                    {text:"零售门店",path:""},
                    {text:"以旧换新",path:""},
                    {text:"常见问题",path:""},
                    {text:"服务支持",path:""},
                ],
                [
                    {text:"意外碎屏保修服务",path:""},
                    {text:"延长保修服务",path:""},
                    {text:"协议政策",path:""},
                    {text:"资质证照",path:""},
                ]
                
            ],
         
            
        }
    }
   
    handleclick =()=>{
     
     
    }
    render() {
        return (
            <div className={styles.my}>
                <div className={styles.title}>个人中心</div>
                <div className={styles.content}>
                <Login></Login>
                {/* List一键循环 */}
                    {
                        this.state.arr.map((item,index)=>{
                            return (
                                <List arr={this.state.arr[index]} key={item[index].text}></List>
                            )
                        })
                    }
               
                </div>
            </div>
        )
      
    }
}
