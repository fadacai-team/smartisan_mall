import React, { Component } from 'react'
import styles from "./uesrInfo.module.scss"
import {withRouter} from "react-router-dom";

 class userInfo extends Component {
    constructor(props){
        super(props)
    }
    handleLoginOut(){
        this.props.history.push("/");
    }

    render() {
        return (
            <div className={styles.userInfo}>
                <div className={styles.loginTop}>
                    <div className={styles.loginLeft}>
                        <div className={styles.userImg}>
                            <img src="https://static.smartisanos.cn/mobilenew/img/head.4b81d150.png"></img>
                        </div>
                        <div className={styles.loginText} to="/my/regist">登录/注册</div>
                    </div>

                    <div className={styles.loginRight+" "+(this.props.attr =="login"?styles.show:styles.hidden)}>{">"}</div>
                    <div className={styles.loginRight+" "+(this.props.attr =="details"?styles.show:styles.hidden)}>{"<"}</div>

                </div>
                    <div className={styles.detailsInfo}>
                        <div className={styles.phone}>
                            <div className={styles.phoneLeft}>
                                手机
                            </div>
                            <div className={styles.phoneRight}>
                               <span> 15797841029</span>
                               <i> {">"} </i>
                             

                            </div>
                        </div>
                        <div className={styles.email}>
                            <div className={styles.emailLeft}>
                                邮箱
                            </div>
                            <div className={styles.emailRight}>
                                <span>未关联</span>
                                <i>{">"}</i>
                            </div>
                        </div>
                    </div>
                    <div className={styles.update}>
                        <div className={styles.updatePwd}>
                            <div className={styles.dataLeft}>
                                修改密码
                            </div>
                            <div className={styles.dataRight}>
                                {">"}
                            </div>
                        </div>
                    </div>
                    <div className={styles.loginOutButton} onClick={this.handleLoginOut.bind(this)}>
                        退出登录
                    </div>
               
            </div>
        )
    }
}
export default withRouter(userInfo)