import React, { Component } from 'react'
import styles from "./Regist.module.scss"
import {Button,Checkbox} from "antd-mobile"

const CheckboxItem = Checkbox.CheckboxItem;
export default class Regist extends Component {
    constructor(props) {
        super(props);
        this.state = {value:''};
    }

    handleChange=(e)=>{
        this.setState({value:e.target.value})
       }
    handleNumChange=(e) =>{
       this.setState({value: e.target.value})
   
       let regex = /^1[3,4,5,8]\d{9}$/; 
       if(this.state.value==""){
          alert("请输入号码")
       }else if(!regex.test(this.state.value)){
        alert("请输入正确的手机号")
       }
      }

    handleSubmit(){
    
    }
    
   
    render() {
        return (
            <div className={styles.regist}>
                <div className={styles.title}>
                    账号密码登录
                </div>
                <div className={styles.form}>
                    <div className={styles.location}>
                        <p>国家和地区</p>
                        <div className={styles.LocationRight}></div>
                    </div>
                    <div className={styles.login}>
                        <div className={styles.number}>
                            <span className={styles.numPre}>+86</span>
                            <div className={styles.numIpt}>
                                    <input type="text" placeholder="手机号" onBlur={this.handleNumChange} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className={styles.password}>
                            <input type={styles.password}></input>
                        </div>
                    </div>
                    <div className={styles.loginBtn}>
                       <Button type="primary" onClick={this.handleSubmit.bind(this)} value={this.state.value}>
                         {"登录"}
                       </Button>
                    </div>
                    <div className={styles.oprate}>
                        <CheckboxItem  className={styles.checkbox} >
                         {"自动登录"}
                        </CheckboxItem>
                        <span>短信验证登录</span>
                        <span>忘记密码</span>
                    </div>
                </div>
            </div>
        )
    }
}
