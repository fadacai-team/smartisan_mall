import React, { Component } from 'react'
import styles from "./login.module.scss"
import {Grid} from "antd-mobile"
import {HashRouter as Router,Link, withRouter} from "react-router-dom"


const data = [
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'全部订单',path:"/my/order",title:"全部订单"},
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'代付款',path:"/my/order",title:"全部订单"},
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'待收货',path:"/my/order",title:"全部订单"},
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'待评价',path:"/my/evaluate",title:"全部订单"},
             {icon:'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',text:'售后',path:"my/saled",title:"全部订单"},
         ]
 class login extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow:false,
        }
    }
    goTo= (path)=>{    
            this.props.history.push(path);
    }
    handleClick(){
        this.props.history.push("/my/details");
    }
    render() {
        return (
           <Router>
                <div className={styles.login}>
                <div className={styles.loginTop}>
                    <div className={styles.loginLeft}>
                        <div className={styles.userImg}>
                            <img src="https://static.smartisanos.cn/mobilenew/img/head.4b81d150.png"></img>
                        </div>
                        <Link className={styles.loginText} to="/my/regist">登录/注册</Link>
                    </div>
                    <div className={styles.loginRight} onClick={this.handleClick.bind(this)}>{">"}</div>
                </div>
                <div className={styles.menu +" "+(this.state.isShow?styles.show:styles.hidden)}>
                   {
                        data.map(item=>{
                            return <dl className={styles.menuItem+" "+(item.text
                            =="售后"?styles.borderNone:"")} key={item.text} onClick={this.goTo.bind(this,item.path) } title={item.title}>
                                    <dt>
                                        <img src={item.icon}></img>
                                    </dt>
                                    <dd>{item.text}</dd>
                                  </dl>
                        })

                       
                   }
                   
                </div>
            </div>
            
           </Router>
        )
    }
}

export default withRouter(login)