import React, { Component } from 'react'
import {connect} from 'react-redux'
import { toJS } from 'immutable'
import proStyle from './ProDetail.module.scss'
import {urlProAction} from './../../store/actionCreate/detailAction'


class ProDetail extends Component {
    render() {

        return (
            
            <div className={proStyle.proDetail}>
                <h2 className={proStyle.title}>商品详情</h2>
                {
                    this.props.proDetailUrl.map((item) => <img className={proStyle.item} key={item} src = {item}/>)
                    
                }
            </div>
        )
    }


}



const mapStateToProps = (state) => {
    return {
        proDetailUrl:state.getIn(['detailRedeuer','proDetailUrl'])
    }
}



export default connect(mapStateToProps,null)(ProDetail)