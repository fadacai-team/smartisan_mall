import React, { Component } from 'react'
import styles from './imgWarp.module.scss'
import axios from '../../Utils/myaxios'
import { connect } from 'react-redux'
import {goodsData} from '../../store/actionCreate/goodswarp'
class ImgWarp extends Component {
    componentDidMount(){
        this.props.goodsData().then(()=>{
            // console.log(this.props)
        })
        // console.log(this.props)
        // console.log(this.props.def)
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.image_rows.map((v,i)=>{
                        return (
                            <section key={i} className={styles.img_row_warp}>
                                <title className={styles.module_title_warp}>
                                    <h3 style={{color:v.titleConfig.titleColor}}>
                                        {v.titleConfig.title}
                                    </h3>
                                    <a className={styles.link} style={{color:v.titleConfig.linkTextColor}}>
                                        {v.titleConfig.linkText}
                                    </a>
                                </title>
                                    <aside onScroll={(e)=>{
                                        e.stopPropagation()
                                    }} className={styles.common_flex_box + " " + styles.flex_three + " " + styles.img_scroll}>
                                        {v.content.map((j,i)=>{
                                            return ( 
                                                // https://resource.smartisan.com/resource/23b8aa7b361a7d65a0a52f20f167ef0a.png?x-oss-process=image/resize,w_190/format,webp
                                                <div className={styles.flex_item} key={i}>
                                                    <img src={j.src + "?x-oss-process=image/resize,w_190"}></img>
                                                </div>
                                            )
                                            })}
                                    </aside>
                            </section>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        // goods_rows:state.getIn(['goodsReducer','goods_rows']).toJS(),
        image_rows:state.getIn(['goodsReducer','image_rows']).toJS(),
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        goodsData:function(){
            return axios.get('/mobile/new/home?channel_id=1002').then(res=>{
                // console.log(res.data)
                dispatch(goodsData(res.data))
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ImgWarp)
