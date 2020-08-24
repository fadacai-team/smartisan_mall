import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import categroyStyle from './Categroy.module.scss'

class Category extends Component {
    
    render() {
        return (
            <div className={categroyStyle.categroy}>
                <div className={categroyStyle.categroyHeader}>
                    <input text="text" className={categroyStyle.categroySearch}/>
                    <div className={categroyStyle.categroyClick} onClick={this.han}></div>
                </div>
                <div className={categroyStyle.categroyContent}>

                </div>
            </div>
        )
    }
}





export default withRouter(Category)