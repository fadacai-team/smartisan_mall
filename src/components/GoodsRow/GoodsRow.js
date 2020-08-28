import React, { Component } from 'react'
import styles from './GoodsRow.module.scss'
import GoodsRowItem from '../GoodsRowItem/GoodsRowItem'
export default class GoodsRow extends Component {
    constructor(props){
        super(props)
        // console.log(props)
    }
    componentDidMount(){
        // this.props.goodsData().then(()=>{
            // })
            // console.log(this.props)
        }
    componentDidUpdate(){
        // console.log(this.props)
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.props.data.map((v,i)=>{
                        // console.log(v.titleConfig.title)
                        return (
                            <div className={styles.goods_row_warp} key={i} style={{marginBottom:"15px"}}>
                                <title className={styles.module_title_warp}>
                                    <h3 style={{color:v.titleConfig.titleColor}}>{v.titleConfig.title}</h3>
                                    <a className={styles.link} style={{color:v.titleConfig.linkTextColor}}>
                                        {v.titleConfig.linkText}
                                    </a>
                                </title>
                                <div className={styles.common_flex_box +" " + styles.flex_three + " " + styles.goods_scroll}>
                                    <GoodsRowItem data={v}></GoodsRowItem>
                                </div>
                                {/* {"hahahaah"} */}
                            </div>
                        )
                    })
                   }
                
            </React.Fragment>
        )
    }
}


// export default connect(mapStateToProps,mapDispatchToProps)(GoodsRow)
