import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import categroyStyle from './Categroy.module.scss'
import axios from './../../Utils/myaxios'
import ContentRight from './../Category/ContentRight'

class Category extends Component {
    constructor(props){
        super(props)
    }
    
    state = {
        listData:[],
        itemData:{},
    }
    
    getDataHandle = (data,index,e) => {
        // this.state.listData.forEach((item) => {
        //     item.isActive = ''
        // })
        // console.log('111111111111',this.state.itemData)
        // this.state.listData[index].isActive = 'active'
        var newListData = this.state.listData
        newListData.forEach((item) => {
            item.isActive = ''
        })
        newListData[index].isActive = 'active'
        this.setState({
            listData:newListData,
            itemData:data
        })
        
    }
    

    render() {
        console.log(this.state.itemData)
        return (
            <div className={categroyStyle.categroy}>
                <div className={categroyStyle.categroyHeader}>
                    <input text="text" className={categroyStyle.categroySearch} placeholder="请输入搜索关键字"/>
                    <span className={categroyStyle.categroyIcon}></span>
                    <div className={categroyStyle.categroyClick} onClick={this.han}></div>
                </div>
                <div className={categroyStyle.categroyContent}>
                    <div className={categroyStyle.contentLeft}>
                        <ul className={categroyStyle.categroyItemList}>
                            {
                                this.state.listData.map((item,index) => {
                                    return <li  key={index} className={categroyStyle.categroyItemLeft+' '+(item.isActive?categroyStyle.active:'')} onClick={this.getDataHandle.bind(this,item,index)}>{item.classifyName}</li>
                                }
                                )
                            }
                        </ul>
                    </div>
                    <div className={categroyStyle.contentRight}>
                        <ContentRight contentRightData={this.state.itemData}></ContentRight>
                    </div>
                </div>
            </div>
        )
    }


    //请求数据
    componentDidMount () {
        axios('/mobile/classify').then((res) => {
            res.data.forEach((item) => {
                item.isActive = ''
            })
            this.setState({
                listData:res.data,
                itemData:res.data[0]
            })
        }
        )

    }
}





export default withRouter(Category)