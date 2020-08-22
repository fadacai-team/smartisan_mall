import React from 'react'
import style from './style.module.scss'

export default function CartItem() {
    return (
        <div className={style.cart_item}>
            <div className={style.checkbox_container}>
                <span className={style.check_btn}></span>
            </div>
            <div>

            </div>
        </div>
    )
}
