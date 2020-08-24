import React from 'react'
import style from './CartBottomBar.module.scss'
export default function CartBottomBar(props) {
    return (
        <div  className={style.bottom_bar}> 
            <div  className={style.select_info}> 
                <div  className={style.checkbox_container}>
                    <div className={style.check_outer}> 
                        <span className={style.checkbox_on}> </span> 
                    </div> 
                </div> 
                <span >已选 <i >6</i> 件</span> 
            </div> 
            <div  className={style.sum_info}>
                <div  className={style.desc}> 
                    <p  className={style.total_price}>
                        合计：<span ><i>¥</i> <span>7,093.00</span></span>
                    </p> 
                    <div  className={style.delivery}> 
                        <article >应付总额不含运费</article> 
                    </div>
                </div>
                <div  className={style.blue_btn+ " "+ style.disable}>现在结算</div>
            </div>
        </div>
    )
}
