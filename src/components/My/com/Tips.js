import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import styles from "./Tips.module.scss"
 class Tips extends Component {
     constructor(props){
         super(props)
     }
     goTo(){
         this.props.history.push("/")
     }
    render() {
        return (
            <div className={styles.tips}>
            <dt>
            <p>{this.props.tips[0]}</p>
            <span>{this.props.tips[1]}</span>
            </dt>
            <dd onClick={this.goTo.bind(this)}> 
                返回首页
            </dd>
        </div>
        )
    }
}
export default withRouter(Tips)
