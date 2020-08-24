import React, { Component } from 'react'
import  styles from "./List.module.scss"
export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.list}>
                {
                    this.props.arr.map(item=>{
                        return(
                            <div className={styles.listItem} key={item.text}>
                                <div className={styles.info}>
                        <div className={styles.listItemLeft}>{item.text}</div>
                                    <div className={styles.listItemRight}>{">"}</div>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>
        )
    }
}
