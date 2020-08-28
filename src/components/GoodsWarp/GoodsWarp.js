import React, { Component } from 'react'
import styles from './GoodsWarp.module.scss'
import axios from '../../Utils/myaxios'
import { connect } from 'react-redux'
import {goodsData} from '../../store/actionCreate/goodswarp'
class GoodsWarp extends Component {
    componentDidMount(){
        this.props.goodsData().then(()=>{
            // console.log(this.props)
        })
        // console.log(this.props.def)
    }
    componentDidUpdate(){
    }
    render() {
        return (
            <React.Fragment>
            {
            this.props.goods_rows.map((v,i)=>{
                return (
                    <div key={i} className={styles.goods_row_warp} key={i} style={{marginBottom:"15px"}}>
                        <title className={styles.module_title_warp + " " + styles.arrow_right_icon}>
                            <h3 style={{color:v.titleConfig.titleColor}}>{v.titleConfig.title}</h3>
                            <a className={styles.link} style={{color:v.titleConfig.linkTextColor}}>
                                {v.titleConfig.linkText}
                            </a>
                        </title>
                        <div className={styles.common_flex_box +" " + styles.flex_three + " " + styles.goods_scroll}>
                            {v.skuInfo.map((l,d)=>{
                                // console.log(l.promotionList)
                                return (
                                    <section key={d} className={styles.flex_item +' ' + styles.sku_item_block_box + " " + styles.floor}>
                                        <figure className={styles.item_cover}>
                                            {l.promotionList ? <aside className={styles.item_title + " " + styles.sign}>
                                                <span className={styles.green}>
                                                    {l.promotionList[0].tag}
                                                </span>
                                            </aside> : " "}
                                            <img src={l.images+"?x-oss-process=image/resize,w_190"}></img>
                                        </figure>
                                        <article className={styles.item_title10 + " " + styles.two_line}>
                                            <h3 className={styles.h3}>
                                                {l.skuMobileTitle}
                                            </h3>
                                        </article>
                                        <article className={styles.item_bottom_info}>
                                            <aside className={styles.item_price}>
                                                <span className={styles.discount}>
                                                    ¥{parseFloat(l.discountPrice)}
                                                </span>
                                                {parseFloat(l.discountPrice) == parseFloat(l.originalPrice) ? " " : <span className={styles.original}>
                                                    ¥{parseFloat(l.originalPrice)}
                                                </span>}
                                            </aside>
                                        </article>
                                    </section>
                                )
                            })}
                        </div>
                    </div>
                )
            })
           }
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        goods_rows:state.getIn(['goodsReducer','goods_rows']).toJS(),
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
export default connect(mapStateToProps,mapDispatchToProps)(GoodsWarp)
