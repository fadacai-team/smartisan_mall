import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import "./Nav.scss"
import OrderDetails from "./OrderDetails"
const data = [
    {text:"全部",path:"/my/order" },
    {text:"待付款",path:"/my/order/pay" },
    {text:"待收款",path:"/my/order/collect" },
]
 class Nav extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    goTo = (path) => {
        // 跳转路径
        this.props.history.push();
    }
    render() {
        return (
            <div className="container">
                <div className="nav">
                    <div className="itemWrap">
                      {
                          data.map((item,index)=>{
                          return   <div className="navItem" onClick={this.goTo.bind(this,item.path)} key={item.text}>{item.text}</div>
                          })
                      }
                      <div className="navItem borderNone" onClick={this.goTo.bind(this)} >已完成</div>
                       
                    </div>
                </div>
                <div className="content">
                   <OrderDetails></OrderDetails>
                   <OrderDetails></OrderDetails>
                   <OrderDetails></OrderDetails>
                </div>
            </div>
        )
    }
}
export default withRouter(Nav)