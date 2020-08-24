import React, { Component } from 'react'
import "./login.scss"
import {Grid} from "antd-mobile"
import {HashRouter as Router,Link} from "react-router-dom"

const data = [
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'全部订单'},
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'代付款'},
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'待收货'},
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'待评价'},
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'售后'},
         ]
export default class login extends Component {
    
    render() {
        return (
           <Router>
                <div className="login">
                <div className="loginTop">
                    <div className="loginLeft">
                        <div className="userImg">
                            <img src="https://static.smartisanos.cn/mobilenew/img/head.4b81d150.png"></img>
                        </div>
                        <Link className="loginText" to="/my/regist">登录/注册</Link>
                    </div>
                    <div className="loginRight">{">"}</div>
                </div>
                <div className="menu">
                    <GridExample></GridExample>
                </div>
            </div>
            
           </Router>
        )
    }
}
console.log(data);
const GridExample = () => (
 
    <div>

      <Grid data={data} activeStyle={false} columnNum={5}/>
  
    </div>
  );
