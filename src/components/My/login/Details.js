import React, { Component } from 'react'
import Title from "../order/Title"
import UserInfo from "../login/userInfo"
// import "./Details.scss"
import styles from "./Details.module.scss"
export default class  extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div className={styles.details}>
                <Title title={"账户详情"}></Title>
                <div className={styles.content}>
                    <UserInfo attr={"details"}></UserInfo>
                </div>
            </div>
        )
    }
}
