import React, { Component } from 'react'
import styles from './ListItem.module.scss'
import GoodsItem from '../GoodsItem/GoodsItem'
export default class ListItem extends Component {
    /**
     * 
     * {
     *  TITLE:"",
     * 
     * } 
     */
    constructor(props){
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div id={styles.vue_water} className={styles.vue_waterfall + " " + styles.is_transition}>
                    <div className={styles.slot_box}></div>
                    <div className={styles.vue_waterfall_cloumn} style={{width:"50%"}}>
                        {
                            
                            this.props.data.map((v,i)=>{
                                if((i+1)%2 == 0){
                                    return (
                                        // <section key={i} className={styles.flow_item + " " + styles.sku_item + " " + styles.waterfall } >
                                        //     <figure className={styles.item_cover}>
                                        //         <img src={v.images} className={styles.animation}></img>
                                        //     </figure>
                                        //     <article className={styles.item_title + ' ' + styles.two_line}>
                                        //         <h3>
                                        //             {v.skuTitle}
                                        //         </h3>
                                        //     </article>
                                        // </section>
                                        <GoodsItem key={i} data={v} index={i}></GoodsItem>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className={styles.vue_waterfall_cloumn} style={{width:"50%"}}>
                        {
                            
                            this.props.data.map((v,i)=>{
                                if((i+1)%2 == 1){
                                    return (
                                        // <section key={i} className={styles.flow_item + " " + styles.sku_item + " " + styles.waterfall } >
                                        //     <figure className={styles.item_cover}>
                                        //         <img src={v.images}></img>
                                        //     </figure>
                                        //     <article className={styles.item_title + ' ' + styles.two_line}>
                                        //         <h3>
                                        //             {v.skuTitle}
                                        //         </h3>
                                        //     </article>
                                        //     {v.promotionList == []? console.log("hahaahah") : <article className={styles.item_promotion_tage}>
                                                    // <span className={styles.tag + " " + styles.red }>
                                                    //     {v.promotionList == [] ? " " : v.promotionList[0].describe }
                                                    // </span>
                                        //         </article>}
                                        // </section>
                                        <GoodsItem key={i} data={v} index={i}></GoodsItem>
                                    )
                                }
                            })
                        }
                    </div>
                    
                </div>
                
            </React.Fragment>
        )
    }
}
