import React, { Component } from 'react'
import Title from "../order/Title"
import styles from "./Address.module.scss"
import { List,Checkbox,Flex } from 'antd-mobile';
import {withRouter} from "react-router-dom"
import axios from "../../../Utils/myaxios"
import CitySelect from "./citySelect"
const AgreeItem = Checkbox.AgreeItem;
 class Address extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    handleCheckButton(){
        let params = new URLSearchParams();
        params.append('name', "木子李");
        params.append('number',15179136010);
        params.append('province','江西省');
        params.append('city','南昌市');
        params.append('county','青山湖区');
        params.append('county','青山湖区');
        params.append('details','八一广场101号');
        params.append('time',new Date().getTime()/1000);
        axios.post("http://119.29.81.194/data/showAddress.php",params)
        .then(res=>{//如果返回为真，跳转至个人中心
            // console.log(res);

        })
        this.props.history.go(-1)
    }
    componentDidMount(){
        axios.get("/addressData/location.json")
        .then(res=>{
            this.setState({data:res.lcoalData},()=>{
                console.log(this.state.data);
            })
        })
    }
    
    render() {
    let data = [
        [
            {text:"收件人",type:"input"}
        ],
        [
            {text:"手机号",type:"input"},
            {text:"区号（可选",type:"input"},
            {text:"固定电话(可选)",type:"input"},
        ],
        [
            {text:"省市",type:"select"},
            {text:"城市",type:"select"},
            {text:"区县",type:"select"},
        ] ,
        [
            {text:"详细地址，如街道名称，楼层，门牌号码等",type:"input"},
        ]
    ]
        return (
            <div className={styles.address}>
                <Title title={"填写收货地址"}></Title>
                <div className={styles.content}>
                   {
                    data.map((item,index)=>{
                        return <div className={styles.iptWrap} key={item[0].text}>
                            {
                                data[index].map((item,index)=>{
                                    return  <div className={styles.inputItem} key={item.text}>
                                    <input placeholder={item.text} className={(item.type=="select"?styles.hidden:styles.show)}></input >
                                    <div className={styles.cityChoose+" "+(item.type=="input"?styles.hidden:"")}>
                                        <p>{item.text}</p>
                                        {/* 城市选择 */}
                                        <div className={styles.localSelect}>
                                            <CitySelect locaData={this.state.data[index]}></CitySelect>
                                        </div>
                                    </div>
                                </div>
                                })
                            }
                        </div>
                    })
                   }
                      <Flex>
                        <Flex.Item>
                        <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)} className={styles.radio}>
                            设为默认地址 
                        </AgreeItem>
                        </Flex.Item>
                    </Flex>

                    <div className={styles.checkButton} onClick={this.handleCheckButton.bind(this)}>
                        确定
                    </div>
                </div>
                
            </div>
        )
    }
}export default withRouter(Address)