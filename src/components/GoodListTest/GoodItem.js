import React from 'react'
import style from './GoodItem.module.scss' 
export default function GoodItem() {
    return (
        <section class={style.spu_item_normal_box} index="4">
            <figure className={style.item_cover}>
                <img src="https://resource.smartisan.com/resource/de1274f4c70fe3768417bb0454320089.png?x-oss-process=image/resize,w_216"/>
            </figure>
            <article>
                <h3>坚果快充移动电源 20000mAh 45W MAX</h3>
                <h5 className={style.txt_product_title}>“充电狂人的大满足”</h5>
            </article><aside className={style.item_attr_colors}>
            </aside>
            <article className={style.item_price}>
                <span>¥ 99</span>
                <span className={style.orignal_price}>249.00</span>
            </article>
            <div className={style.activity_tag}>
            </div>
            <div className={style.markup_tag}>
            </div>
        </section>
    )
}
