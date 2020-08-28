import React, { Component } from 'react'
import styles from './GoodsItem.module.scss'
export default class GoodsItem extends Component {
    constructor(props){
        super(props)
        // console.log(props)
    }
    // getPrice(){
    //     if()
    // }
    render() {
        return (
            <React.Fragment>
                {
                    // console.log(this.props.data)
                    <section key={this.props.data.skuId} className={styles.flow_item + " " + styles.sku_item + " " + styles.waterfall } >
                        <figure className={styles.item_cover}>
                            <aside className={styles.item_promotion_tage + " " + styles.sign}>

                            </aside>
                            <img src={this.props.data.images} className={styles.animation}></img>
                        </figure>
                        <article className={styles.item_title + ' ' + styles.two_line}>
                            <h3>
                                {this.props.data.skuTitle}
                            </h3>
                        </article>
                        {this.props.data.promotionList === [] ? "jjj" : <aside className={styles.item_promotion_tage}>
                                
                            {this.props.data.promotionList[0] ? <span className={styles.tag + " " + styles.red }>{this.props.data.promotionList[0].describe}</span> : ''}
                               
                        </aside>}
                        <article className={styles.item_bottom_info}>
                            <aside className={styles.item_price}>
                                <span className={styles.discount}>
                                    ¥{parseFloat(this.props.data.discountPrice)}
                                    
                                </span>
                                {this.props.data.discountPrice === this.props.data.originalPrice ? "" : <span className={styles.originalPrice}>
                                        ¥{parseFloat(this.props.data.originalPrice)}
                                        </span>}
                            </aside>
                        </article>
                    </section>
                }
            </React.Fragment>
        )
    }
}
