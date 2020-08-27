import React, { Component } from 'react'
import styles from "./Regist.module.scss"
import {Button,Checkbox} from "antd-mobile"
import axios from "../../../Utils/myaxios"
import {onLogin} from "../cookie/Cookie"

const CheckboxItem = Checkbox.CheckboxItem;
export default class Regist extends Component {
    constructor(props) {
        super(props);
        this.state = {num:'',pwd:''};
        this.wraming=""
        this.isWraming=true
    }
    componentDidMount(){
        this.setState({isWraming:false,wraming:"号码格式错误"},()=>{
  
           })
    }
    componentDidUpdate(){
        if(this.state.isWraming ==true){
            setTimeout(() => {
                this.setState({isWraming:false})
            },2000 );
        }
    }

    // 账号失焦事件
    handleNumBulr=(e) =>{
       this.setState({num: e.target.value},()=>{
        let regex = /^1[3,4,5,8]\d{9}$/; 

        if(!regex.test(this.state.num)){
            this.setState({isWraming:true})
        }
       })
      
      }
    //   密码失焦
      handlePwdBulr=(e)=>{
          console.log(e);
        this.setState({pwd:e.target.value},()=>{

        })
        
      }
    //   提交事件
    handleSubmit=()=>{
        let params = new URLSearchParams();
        params.append('number', this.state.num);
        params.append('password', this.state.pwd);
        let regex = /^1[3,4,5,8]\d{9}$/; 
        if(this.state.num ==""){
            this.setState({wraming:"号码不能为空",isWraming:true})
            return
        }else if(this.state.pwd==""){
            return
            this.setState({wraming:"密码不能为空",isWraming:true})
        }else if(!regex.test(this.state.num)){
            this.setState({isWraming:true,wraming:"号码格式错误"})
        }
        else{
            axios.post("http://119.29.81.194/data/select.php",params)
            .then(res=>{//如果返回为真，跳转至个人中心
                console.log(res);

               if(JSON.parse(res.code)){
                  
                onLogin(res.token,this.state.num)
                this.props.history.push("/my")
                
               }else{
                   this.setState({wraming:"账号密码错误",isWraming:true})
               }
            }).catch(err=>{
                console.log(err);
            })
        }
       
        

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
                                    <input type="text" placeholder="手机号" onBlur={this.handleNumBulr} ></input>
                            </div>
                        </div>
                        <div className={styles.password}>
                            <input type="password"  onBlur={this.handlePwdBulr}></input>
                        </div>
                    </div>
                    <div className={styles.loginBtn}>
                       <Button type="primary" onClick={this.handleSubmit.bind(this)} value={this.state.value}>
                         {"登录"}
                       </Button>
                    </div>
                    <div className={styles.oprate}>
                        <CheckboxItem  className={styles.checkbox}>
                         {"自动登录"}
                        </CheckboxItem>
                        <span>短信验证登录</span>
                        <span>忘记密码</span>
                    </div>
                </div>
                <div className={styles.wraming+" "+(this.state.isWraming?styles.show:styles.hidden)} >
                    {this.state.wraming}
                </div>
            </div>
        )
    }
}
