import React from 'react'
import style from './style.module.scss'
/**
sync 同步购物车
/product/skus?ids=ids&with_stock=true&with_spu=true
id
*/
export default function CartItem(props) {
    return (
        <div className={style.cart_item}>
            <div className={style.checkbox_container}>
                <span onClick={props.updateItem.bind(this,props.index,!props.cartitem.get('choosed'))} className={style.check_btn + " " +( props.cartitem.get('choosed')?style.active:"")}></span>
            </div>
            <div className={style.cart_item_wraper}>
                <div className={style.item_thumb}>
                    <img alt={props.cartitem.get('name')} className="item-thumb-img" height="90" width="90" 
                    src={props.cartitem.getIn(['shop_info','ali_image'])+"?x-oss-process=image/resize,w_180/format,webp"}/>
                </div>
                <div className={style.item_info_wraper}>
                    <div  className={style.colorful_tag_container}>  
                        <span className="colorful-tag red"> 赠品无货 </span> 
                    </div>
                    <h4 className={style.title}>
                        {props.cartitem.getIn(['product_info','product_name'])}
                    </h4> 
                    <p className={style.item_attrs}> 
                        <span >白色</span>
                    </p> 
                    <div className={style.item_price_container}>
                        <p className={style.price}>
                            <span><i>¥</i> <span>98.00</span></span>
                            <span className={style.count+" smartisan_icon"}> 1</span>
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}
