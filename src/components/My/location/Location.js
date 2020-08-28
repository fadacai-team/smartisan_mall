import React, { Component } from 'react'
import Title from "../order/Title"
import {withRouter} from "react-router-dom"
import styles from "./Location.module.scss"
import axios from "../../../Utils/myaxios"
import Item from 'antd-mobile/lib/popover/Item'
 class Location extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    HandleAddAddress(){
        this.props.history.push("/my/address")
    }
    componentDidMount(){
        axios.post("http://119.29.81.194/data/showAddress.php")
        .then(res =>{
            // console.log(res);
            this.setState({data:res},()=>{
                // console.log(this.state.data);
            })
        })
    }
    render() {
        return (
            <div className={styles.details}>
                <Title title={"地址列表"}></Title>
                <div className={styles.content}>
                    {
                        this.state.data.map((item,index)=>{
                            return <div className={styles.address} key={index}>
                       
                            <div className={styles.addressInfo}>
                                <div className={styles.infoTop}>
                                    <div className={styles.name}>
                                    {item.name}
                                    </div>
                                    <div className={styles.number}>
                                    { item.number}
                                    </div>
                                {
                                    index==0? <em className={styles.iconWrite}>
                                    默认地址
                                        </em>:""
                                }
                                </div>
                                <div className={styles.addressDetails}>
                                {item.province+item.city+item.county+item.details}
                                </div>
                        </div>
                       
                       
                            <i className={styles.changeAddress}>
                           
                            </i>
       
                    </div>
                        })
                    }
                   

                    
                    <div className={styles.addAddress} onClick={this.HandleAddAddress.bind(this)}>
                        添加地址
                    </div>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Location)