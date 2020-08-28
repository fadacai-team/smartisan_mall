import React, { Component } from 'react'
import styles from"./Title.module.scss"
import {withRouter} from "react-router-dom"
 class title extends Component {
    constructor(props){
        super(props)
    }
    handleBackClick=()=>{
        this.props.history.goBack();
    }
    render() {
        return (
                <div className={styles.top}>
                <div className={styles.back} onClick={this.handleBackClick}>{"< 返回"}</div>
                <div className={styles.title}>
                    {this.props.title}
                </div>
            </div>     
        
        )
    }
}
export default withRouter(title)