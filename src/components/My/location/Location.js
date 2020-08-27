import React, { Component } from 'react'
import Title from "../order/Title"
import {withRouter} from "react-router-dom"
import styles from "./Location.module.scss"
 class Location extends Component {
    constructor(props){
        super(props)
    }
    HandleAddAddress(){
        this.props.history.push("/my/address")
    }
    render() {
        return (
            <div className={styles.details}>
                <Title title={"地址列表"}></Title>
                <div className={styles.content}>
                    <div className={styles.address}>
                        <div className={styles.addressInfo}>
                            <div className={styles.infoTop}>
                                <div className={styles.name}>
                                    木子李
                                </div>
                                <div className={styles.number}>
                                    15797841029
                                </div>
                                <em className={styles.iconWrite}>
                                    默认地址
                                </em>
                            </div>
                            <div className={styles.addressDetails}>
                                北京市直辖区长安路389号
                            </div>
                        </div>
                       
                            <i className={styles.changeAddress}>
                           
                            </i>
       
                    </div>
                    <div className={styles.address}>
                        <div className={styles.addressInfo}>
                            <div className={styles.infoTop}>
                                <div className={styles.name}>
                                    木子李
                                </div>
                                <div className={styles.number}>
                                    15797841029
                                </div>
                               
                            </div>
                            <div className={styles.addressDetails}>
                                北京市直辖区长安路389号
                            </div>
                        </div>
                       
                            <i class={styles.changeAddress}>
                           
                            </i>
       
                    </div>

                    
                    <div className={styles.addAddress} onClick={this.HandleAddAddress.bind(this)}>
                        添加地址
                    </div>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Location)