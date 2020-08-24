import React, { Component } from 'react'
import "./List.scss"
export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list">
                {
                    this.props.arr.map(item=>{
                        return(
                            <div className="listItem" key={item.text}>
                                <div className="info">
                        <div className="listItemLeft">{item.text}</div>
                                    <div className="listItemRight">{">"}</div>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>
        )
    }
}
