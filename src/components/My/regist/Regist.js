import React, { Component } from 'react'
import "./Regist.scss"
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
        alert("手机号码格式有问题")
       }
      }

    handleSubmit(){
      
    }
    
   
    render() {
        return (
            <div className="regist">
                <div className="title">
                    账号密码登录
                </div>
                <div className="form">
                    <div className="location">
                        <p>国家和地区</p>
                        <div className="LocationRight"></div>
                    </div>
                    <div className="login">
                        <div className="number">
                            <span className="numPre">+86</span>
                        <div className="numIpt">
                                <input type="text" placeholder="手机号" onBlur={this.handleNumChange} onChange={this.handleChange}></input>
                        </div>
                        </div>
                        <div className="password">
                            <input type="password"></input>
                        </div>
                    </div>
                    <div className="loginBtn">
                       <Button type="primary" onClick={this.handleSubmit.bind(this)} value={this.state.value}>
                         {"登录"}
                       </Button>
                    </div>
                    <div className="oprate">
                        <CheckboxItem  className="checkbox" >
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
