import React, { Component } from 'react'
import styles from './GoodsRowItem.module.scss'
export default class GoodsRowItem extends Component {
    constructor(props){
        super(props)
    }
    componentDidUpdate(){
        // console.log(this.props)
    }
    render() {
        return (
           <React.Fragment>
               {this.props.data.skuInfo.map((l,d)=>{
                    // console.log(l.promotionList)
                    return (
                        <section className={styles.flex_item +' ' + styles.sku_item_block_box + " " + styles.floor}>
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
           </React.Fragment>
        )
    }
}
