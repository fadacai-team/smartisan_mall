import React, { Component } from 'react'
import styles from "./login.module.scss"
import {Grid} from "antd-mobile"
import {HashRouter as Router,Link, withRouter} from "react-router-dom"
import {loginUser} from "../cookie/Cookie"
import cookie from "react-cookies"


 class login extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow:false,
            title:"登录/注册"
        }
    }
    componentDidMount(){
        if(loginUser()){
            this.setState({title:cookie.load('number')},()=>{
                // console.log(this.state.title);
            })
            
           
        }else{
            this.setState({title:'登录 / 注册'},()=>{
                // console.log(this.state.title);
            })
        }
    }
    goTo= (path,index)=>{    
            if(loginUser()){
                this.props.history.push(path,index);
            }else{
                this.props.history.push("/my/regist");
            }
    }
    handleClick(){
        if(loginUser()){
            this.props.history.push("/my/details");
        }else{
            this.props.history.push("/my/regist");
        }
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
        <div className={styles.loginText} onClick={this.handleClick.bind(this)}>{this.state.title}</div>
                    </div>
                    <div className={styles.loginRight} onClick={this.handleClick.bind(this)}></div>
                </div>
                <div className={styles.menu +" "+(this.state.isShow?styles.show:styles.hidden)}>
                   {
                        data.map((item,index)=>{
                            return <dl className={styles.menuItem+" "+(item.text
                            =="售后"?styles.borderNone:"")} key={item.text} onClick={this.goTo.bind(this,item.path) } title={item.title} mark={index}>
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
const data = [
    {icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUySURBVHgB3Vq/jhZHDPd+d4RLDuWIUBQSKYpSJUqVJkUeIA+QOqmjFKlTIV6AAhoK3oAGUSB4ACRokEBISHRQIkRxBwLdAfpusL+zF68/27P7gY6BnzTa2fWMx54/Ho9nAT5RdAltA9Nv/GwR25juYdrziJFiX2H6dzabfYHP+f7+Pn0r+N5xXqMoPos8lgOvHNXnMou2VRlbb1GG3zvOF84X/r6G+V1MZz3l1sHHH5g2sPIz1bDXiFWsp4mQnpLyTmU1X3x6nVd0HYNjLOsVGKMYMqcRe0lMmaH0VDG9DHoUjLJgRmjBR5RVSnYwHKFBefVdtyN0kvE7cBCNmPQeMf0M81uGBqrBPq/fgx5e4qH52BFOeDzFcq9gOJ3rirFS0nP0fIDpQjSlbD5CJHCNj/n2D8p2QuSEANmIacMSMjhs8DQuMqMi5WYJA6pQ9HpoATJlOR92uCu1sWTNjNYUuIo1rpRY0FS26jzLhvtDgLeQqrGKFCswHK1mlOu6Tq99K2ePtizDCMzn88WzNpMyq0iPVg1HVa71pGJx8hb/YwccV/P9KqYb8rK2tvZ3KeWXaD0Y18qSyXs/A75sej8DD65iKFA/5IGnLthC2hMudxTzJzUReWzg9x3MvlaCLG387DSLMy3PrzMDUbPcrmKiFCQ9IjCOcSgAr4lOmWnPuhXl7NamW8k6fT0RWAsUlkE6HUTJGSVeu04ZGskjLGjn8OtMO10mMM+m1daYU9llhI1fwseP6tNNU+QGlvkWJoKV2vFoajaJXNOmohoxSHCbU4T7nA4dmXdPj5bN/cr7mDb3zYCWyZgTR83cNzdi2mJDIl+2QS9Q2cfIImrj8LBCnwKKPD3yCDqUEKG2j9WMx3+YNpWhuYWPa0LEkf8LeX0PpmejzjIxlCOYP+W0Wd1bCVXPIwO5U/h4zJ4DjY4NrtIm+hzpFE3qvYpAKR1bJOG/SdpdTMPJIyZCQWUey6aqvI9BAFatU+0q9YFTHdpT/AYhPAvs9GLW2STFdJwvY0Dr4EsOm83wuevQj3H9EhwSbZBUK7cEx4ed7CsW7sHMMp4H9jy4EbsZ03o7Dr5f2CP47sbkCTX/lBCuMTxuZI0KyO25U6HvwHuEWf/TpqI2HBVzf+gYoxThowvmAN8hUCaLVLmK0XALE2gMJFt0i6MRTUX3ZsXBr3Bwlyag9abX1M+Y5FTtXjsp3tbMPwVn/Tr763irOPY8hvgT0wv2PNaxI8gCXlb03zGdRPrcu6GpYBMSw6SWyHjFRACpmAhCTF/w83NLpM0UsYv1XzPPwd2XeBvqgqFTFw2bEKOsFMzRlqd2RMhGwFowWRvmm6bZm9KszXT9j/U8ogZ2kH5ClX1oiuxJeE53UOSdm/do/1vdCQ4a8ujn4MCziOIUF6PLvndE9QSdrbHBVEnwXj2LsTCO9DI9qtiSt+GBjzYhfVarDI2iatQqlZu7qmWvSI5B0+KKhAlr7INATUP37BZ5HsWJuLYC6xGNv/gzx5amRmxMLIZQDZg2bB3T9Z+GuJWH/wOm05CA4xZF/xymeXEZWMEZ1m1Ine2Vji1GoFfI5LE+AxmfTpft6cDRJ11OKwXLf82FvJnu8Zp20ISDCOxRGP7xZkNtBZZDdH28jzfQztAA3gaJBNJG35a5N+g9f2lf0SmOue0pEI3YdTg4JFJojVbr4P9DO6UIavrpHyZlenZeGeUMDwKp2TGJeXQs+x7LuoTar7M/YdoCE/BUdYvh5b17x5DoWwlk9Nqk6PJdSMJ0nyTeAKki/r+A5HzYAAAAAElFTkSuQmCC',text:'全部订单',path:"/my/order",title:"全部订单"},
    {icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATrSURBVHgB7Vk9jtUwEB6Ht0CHqJAoV0gUtBTUHICjcA04AzfgPgiJCpYCkKifYPnJ4GQ9zjefxwkSzT6RkazkOeP598zYT2SHHXbYYYcddrh2kOD9fh7P8jgfhkHGcZwn87vm94RzDL1v0/wE+I1oN98Zbw2HaHzKj9d5fEbF7maE5/n5IyP8ChgoEJjWaJnH95neZAjDg3kt31hAFW9cM6QAfcNDeavBgcbNPM7yeJnH9xsF77GqPsjj20QwPxfO+T2yGuKklOYxzdlgHKTF84zDuPjMfBLwQKP8Lopd5vFxKJO3y4fIovMch4J5ZsKx79OcGaEHWyFFuMZfyfta+I8kqxZd5ECEZ7cWghwGTggKMQXltbMvGnq4jyyUy/oEylTlkCbQVpC/zh/YOgXxzIiTYBoIHP6eGBVmlU6giPsOAs68et4NZPrJHw74wyyf4U5+vpd/APCoCdBYmyLDfSMwvCjZnOc1Xwut0XiaYsppOL+/ktOAF7KEf6o62FcOl1MBioIa0hiKc1ZhhBMAl50Nwty8lbKvGViaxxJUFatan1oo9sBCcc40UDdOKRQnaBoDzIrVncVjT+UEwJxRetPqFCzQ00NLYT3m309ocZgxuQsnepvd+YbAEpQhh5PhiB2KwYEJFmJHWtx07PYMFHZFtGeILSWiAs/4ax0QmhnTprlUi5sdTgnXiiNLKGNbptgoA/MGl9o5E15Jwcpzg3ejGAouPTBFrRfshAc+nbIgbOWHeCbkBk33HtFz3b0dPQQaXnq334ICwqHPKRmcEhIIWNcIhLq0YEpixx+FerzHIEQqEm9KPK6QAhg6bIheeDEfke0jkkty5FUzbNMEa7AZjXHC8xYx1eAYr2z9v0kwUWKJooIzZcEbReJeMYHH3Nkr8JqdlxIcCt1dBSqNPAQOpzZX8DDUHD7Q5JB1+93JCZZRSLV43JfAgi6jIc7oj+9ubXSdAHhKuHWOQr3SJ56eF7zjEdwJAITCdqsYAgXs0VLMligspnDeV4O/eqiZkwzlZDugUhROUW3pbnJnrSUM09j2nhxuTSKg0FdSkot5KIuLFVxAYeQYdeqc4l7jdSQ01ixOENIBXfsOtc1lxTohcEtEC7Vn5SG+tKkXmoRbvcgWjwyCRg7SPiYz52nuFS0UQ68MK80wMex5ZP4pvlBzpDRdR1QOaC3Xw+aWqmkuYb+5ujP4O31L4WxVvFnSKMQhEzvr2zpSpJYKLAlRphxYAcxsw9Ls4kK3RyD8tJco7IkZEZUSfz3HexAbX6F1jC+NYmPbOcvaRmXPcuaK8I0PRYQGikvEn/ZglJhaxVAIY0h1Cfcd17R6r0dK2rGn8aSI+8cGa2ETJVS3aptHmdDlheZqQKC4Du3RAHEsAWAx3gLn0WjNWmbs1TqQsc2KY9ugJtzYsvSGGqRdl9ZLShfuPS3ZyJJIUtAQGD4q1/xRAoomkfY04loqDj/8XdyunG6ZESQhV/fAOOgJDj00Loeua8NABm7Lrr6V5we5+kew6ccipiwMtGLRMb/2iOQtDfhVI5HwdR0YJWr7pv/GvkwvFooXebzNiI8yocuysKldsnQlgoAZT5YEUusQejPIeIohSd+w50SWGOJm0Fv59U0e70To9ifDwzzuSQu96wEN8JixyvpVQ8Sn+6fjCq+LMnbYYYcddvh/4A/cJ/0j3z9AnAAAAABJRU5ErkJggg==',text:'代付款',path:"/my/order",title:"全部订单"},
    {icon:'data:image/png;base64,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',text:'待收货',path:"/my/order",title:"全部订单"},
    {icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXKSURBVHgB7Vo9byRFEK1Zr88JPhEA0oEd3EYITgJxyOs9RIREhgQE/C3+B58RIQgSAhI+BNKBxCUIESAkWCcstrepmqkav67pnp2Ztb17kp/U6p6enup609XV3TVDdIMbbAUKd31/NBq9tlwu9+SCy8Rlait7+HtyLejybELOgos/cvqCemIHyvdY2JssbGwVIYSyA8klSZV2WFg955yFwnJGmaMMrqtlCSnJtU6Eoizrh1SO6PesivqNemAE5RetU9HHKrnOykGvfb2QCPCstZWXUCa9F8mEEQwqq8ytHYyqXN+nnhi566DJFMGyKYLXAQjWCgNBU7CsR8UJXpS1BzMNKIPLt6gnxr4CRuQfzn7COl/OAWRk761of8jpgNQHZPq8x+k2pzlV8zCCJ4bmJcS+ps3gAZM50HJIOJwHnGak02BnZ2d2fn7+AVU6lxhlBAfaDphJovcuSZkvkJxJyci9x2nPGtXEmHU0NzaMaG7bPB6PxzJKM2iDjknIvWICaibMOnIEW4ICTHDGZSFVE6JqqUByh9Y4NWLouTYGXAao0mnmPGhNCvCvFSLn0ebNrhswCoUuFUbWPGVw7cVxfGnXNTExRS1ugzkGGI2SHMG8MzOkC11POH1IlesvURMTUwRyRGmC4nWecZ0VKcXcfd9OTOZPyqOgWHHcBJAjOPekImKGtk0qk3+LyR/m2iZ2HLUSoLDdf5/yuJ1yZDbHzDSpWrc+8qTKPqHc1QQb+znYfgXoNGoH9dTmfXd3d485eyGhkx+9eY5URIxHwh4KlCEpbWDBjGwevFXAowpeG9GW9fL49PT02F6UeD6nj5m0jFTD/BDJvaIOd4rcAnfq6G61vZlaRM7IpDa4SIrrj92+1L8k837ZkUoSc8qkiH3F6dsuy4K/5xReUJPUVPsswLVbe3PxQurjVaSImusYkkl5uzl1ENoHPKembOJT7d+qzbwLO+pwLv12IiXAnQfOhVI4XT2mMqek4A6WUbkvKUHkPPBQeA2QUZqCo/CEcJ3qRUqwkWOLmJ84CinDMlAASWs6iJQgFRpIlS8TYn7mKJJ9C1GeGq3r1CqMnWBbO3Ie72VOE6zQrRheL/j6M0pjqokIIl6ogzqMOcuQkTqhgfB7xcKtRx4T7vgA2gQNm9lzEckEqSNy0S5qrnlmfoNJCSLn4SNIKcCiiQqFFadvmVNHUceuvZqfkEmReop6InL3uEugdnLRTsLqUmBHIYSOUgs2Hv1lTmXMT0i9Sz2B5zFTsmjZpP5KzcCpb4O7igk7igk1z1T1UUYX3xPu/5MWUuvHFandG36vqSseaZrwiLzOyu9Lpb04I8XFHKl3aAApwZiuBjJKL1HlCL7h9IhJycFSFBVy5nnl/qeUIcXE94ZuFpIh7tH6Ybi7LEM+JjzPIyVkRFFR/nNroOtUipRAXsweBHN6I3nQXEeg4jnbxKr5vU3VSP2uSRxFjpTpEn0v6IvGiOHBcCD2+fl9O9OpLJknb+j9h5QfKUNpql2Wnxz8eazNI3bF0xkZthY9pNXIfbLqjGholu5b2BBwGPqukymZLAHiHfeoO2pdhljQuIPgXjg7OxPvd4fTH1SF2GRO/UUDYAHSIZ4R94pB4oqwMR06aj9oWgdoiqnPSCvho1Tkoq+bxKqTRivajPdKD5ur4Lxq/+ehfB2HzM5Ajzga8PUntY7RlmCtTUKDxSWsY5eCxJ8E/Z5311tBSuDCcevtPEyQvqUn6OLHkZyH9AHWKMydKLfdRxl36MLlD1p6GiFu+Hq4z/mruQcTMfXGf1Mp2aly7hnftg/QFBcuvi6ZdyYhFd9fxn/nkIsPNtqQC7V5ku6+hA18rL8XsZ8JzmMYj9AdP+4jMVJbf+5JRJLrkzJBQJTU5PC7GpBv7Fd58/AL9QT+/fY3p/84PckhtVv2N5r8pSaK2l9p/i81gf3d5oHP4LMuGFQpon8tODkyUt9RdQq/wQ0eR/wPaPhpAVsnhq8AAAAASUVORK5CYII=',text:'待评价',path:"/my/evaluate",title:"全部订单"},
    {icon:'data:image/png;base64,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',text:'售后',path:"my/saled",title:"全部订单"},
]
export default withRouter(login)