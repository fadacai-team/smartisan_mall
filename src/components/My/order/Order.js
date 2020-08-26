import React, { Component } from 'react'
import Title from "./Title"
import {Router,Route,Link} from "react-router-dom"
import Nav from "./Nav"
import styles from "./Order.module.scss"

export default class order extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className={styles.order}>
                <Title title={"订单详情"}></Title>
                <div className={styles.content}>
                    {this.props.title}
                   <Nav></Nav>
                
                  
                </div>
            </div>
        )
    }
}
