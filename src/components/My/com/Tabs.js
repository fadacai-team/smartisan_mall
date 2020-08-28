import React, { Component } from 'react'
import styles from "./Tabs.module.scss"
export default class tabs extends Component {
    constructor(props){
        super(props)
        this.state={
            current:0
        }
        

    }
    colorChange(index){
        this.setState({current:index},()=>{
        if(this.props.tabsActive){
            this.props.tabsChange(index)
        }
        })
    }
    componentDidMount(){

        // console.log(1);
    }
    render() {
        return (
            <div className={styles.tabs}>
                <div className={styles.tabsWrap}>
                    {
                        this.props.item.map((item,index)=>{//去除最后item的border
                        return <div className={styles.tabsItem
                        +" "+(index == this.props.item.length - 1 ? styles.borderNone:"")
                        +" "+(this.state.current == index ? styles.active : ""  )
                        }
                        onClick = {this.colorChange.bind(this,index)}
                        
                        key = {item.text}>
                            
                            <span>{item.text}</span>
                            <span>({item.num})</span>
                        </div>
                        })
                    }
                </div>
            </div>
        )
    }
}
