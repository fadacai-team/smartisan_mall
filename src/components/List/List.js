import React, { Component } from 'react'
// /mobile/waterfall?page=1&pageSize=20
import styles from './List.module.scss'
import axios from '../../Utils/myaxios'
import { connect } from 'react-redux'
import {goodsWater} from '../../store/actionCreate/goodswarp'
import ListItem from '../ListItem/ListItem'
class List extends Component {
    render() {
        return (
            <React.Fragment>
                {/* {
            console.log(this.props.goodsWater1[0].info ? this.props.goodsWater1[0].info : " hahah")
                } */}
                {/* <section className={styles.waterfall_warp}>
                    <title className={styles.module_title_warp + " " + styles.arrow_right_icon}>
                        <h3 style={{color:this.props.goodsWater1[0].info ? this.props.goodsWater1[0].info.titleConfig.titleColor : " "}}>
                            {this.props.goodsWater1[0].info.titleConfig.title}
                        </h3>
                    </title>
                </section> */}
                {
                    this.props.goodsWater1.map((v,i)=>{
                        return (
                            <section className={styles.waterfall_warp} key={i} >
                                <title className={styles.module_title_warp + " " + styles.arrow_right_icon}>
                                    <h3 style={{color:v.info.titleConfig.titleColor}}>
                                        {v.info.titleConfig.title}
                                    </h3>
                                    <a className={styles.link} style={{color:v.info.titleConfig.linkTextColor}}>
                                        
                                    </a>
                                </title>
                                <aside className={styles.cloumn_flex_box + "" + styles.commn_layout + "" + styles.goods.scroll }>
                                    <ListItem data={this.props.goodsItem}></ListItem> 
                                </aside>
                            </section>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}


// const mapStateToProps = (state)=>{
//     return{

//     }
// }
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         goodsWater:function(page){
//             // page = 1
//             return axios.get('/mobile/waterfall?'+page+'&pageSize=20').then(res=>{
//                 // console.log(res.data)
//                 dispatch(goodsWater(res.data))
//             })
//         }
//     }
// }
export default List

