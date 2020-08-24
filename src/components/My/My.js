import React, { Component } from 'react'
import axios from "axios"
import Login from "./login/login"
import "./My.scss"
import List from "./login/List"
export default class My extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr: [
                [
                    {text:"地址管理",link:""},
                    {text:"我的优惠券",link:""},
                    {text:"优先购买码",link:""},
                ],
                [
                    {text:"零售门店",link:""},
                    {text:"以旧换新",link:""},
                    {text:"常见问题",link:""},
                    {text:"服务支持",link:""},
                ],
                [
                    {text:"意外碎屏保修服务",link:""},
                    {text:"延长保修服务",link:""},
                    {text:"协议政策",link:""},
                    {text:"资质证照",link:""},
                ]
                
            ]
        }
    }
    handleclick =()=>{
     
     
    }
    render() {
        return (
            <div className="my">
                <div className="title">个人中心</div>
                <div className="content">
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
