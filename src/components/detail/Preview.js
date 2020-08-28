import React, { Component } from 'react'
import axios from './../../Utils/myaxios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {previewAction} from './.././../store/actionCreate/detailAction'
import previewStyle from './Preview.module.scss'
import {toJS, fromJS} from 'immutable'
class Preview extends Component {
    state = {
        list : [1,2,3,4,5]
    }
    render() {
        const data = this.props.previewData.toJS()
        return (
            <div className={previewStyle.preview} onClick={
                () => {
                    this.props.history.push('/preview')
                }
                
            }>
                <div className={previewStyle.previewData}>
                    <div className={previewStyle.previewDataLeft}>
                        <h2 className={previewStyle.titleLeft}>用户评价（{this.props.previewData.get('total')}）</h2>
                    </div>
                    <div className={previewStyle.previewDataRight}>
                        查看全部
                    </div>
                </div>
                <div className={previewStyle.previewContent}>
                    <div className={previewStyle.userInfo}>
                        <img className={previewStyle.userIcon} src="data:image/png;base64,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"></img>
                        <span className={previewStyle.userTel}>{this.props.previewData.getIn(['list','0','phone'])}</span>
                        {
                            this.state.list.map((item,index) => index<this.props.previewData.getIn(['list','0','star'])?<span key={index} className={previewStyle.itemLight}></span>:<span key={index} className={previewStyle.itemDark}></span>)
                            
                        }
                    </div>
                    <div className={previewStyle.userContent}><p>{this.props.previewData.getIn(['list','0','content'])}</p></div>
                </div>
            </div>
        )
    }


    componentDidMount(){
        console.log(this.props.idsPreview,'评价')
        this.props.setPreviewData(this.props.idsPreview)
    }
}

const mapStateToProps = (state) => {
    return {
        previewData:state.getIn(['detailRedeuer','preview'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPreviewData:(spu_id) => {
            // spu_id = 1000610 
            axios.get('/comment/open/v1/preview?spu_id='+spu_id)
            .then((res) => {
                console.log(res)
                dispatch(previewAction(res.data))
            }
            )
        }
    }
    
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Preview))
