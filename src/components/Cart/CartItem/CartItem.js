import React,{useState} from 'react'
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
                <span className={style.check_btn}></span>
            </div>
            <div className={style.cart_item_wraper}>
                <div className={style.item_thumb}>
                    <img alt="" className="item-thumb-img" height="90" width="90" 
                    src={props.cartitem.shop_info.ali_image+"?x-oss-process=image/resize,w_180/format,webp"}/>
                </div>
                <div className={style.item_info_wraper}>
                    
                </div>
            </div>
        </div>
    )
}
