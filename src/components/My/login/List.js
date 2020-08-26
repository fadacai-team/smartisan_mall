import React, { Component } from 'react'
import  styles from "./List.module.scss"
import {withRouter} from "react-router-dom"
 class List extends Component {
    constructor(props) {
        super(props);
    }
   handleClick(path){
    this.props.history.push(path)
    console.log(path);
   }
    render() {
        return (
            <div className={styles.list}>
                {
                    this.props.arr.map(item=>{
                        return(
                            <div className={styles.listItem} key={item.text} onClick={this.handleClick.bind(this,item.path)}>
                                <div className={styles.info}>
                        <div className={styles.listItemLeft}>{item.text}</div>
                                    <div className={styles.listItemRight} >{">"}</div>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>
        )
    }
}
export default withRouter(List)