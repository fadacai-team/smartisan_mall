import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import style from './style.module.scss'
/**
sync 同步购物车
/product/skus?ids=ids&with_stock=true&with_spu=true
id
*/

function CartItem(props) {
    var getAttrs = ()=>{
        var attrs = []
        var list = render_item.attr_info
        for(var key in list){
        attrs.push(<span key={key}> {attrs.length>0?" · ":""}{list[key].value}</span>)
        }
        return attrs
    }
    let render_item = props.item.toJS()
    return (
        <div className={style.group_sub}>
            <div className={style.cart_item}>
            {
                props.noCheck?'':(
                    <div className={style.checkbox_container}>
                        <span onClick={()=>{
                            if(props.isedit){
                                props.flagDel(render_item.id)
                            }else{
                                props.updateItem(props.index,!render_item.checked)
                            }
                        }} className={style.check_btn + " " + (props.isedit?(render_item.del?style.active:""):(render_item.checked?style.active:""))}></span>
                    </div>
                )
            }
            <div className={style.cart_item_wraper}>
                <div className={style.item_thumb} onClick={()=>{
                    props.history.push('/goodlist')
                }}>
                    <img alt={render_item.name} className="item-thumb-img" height="90" width="90" 
                    src={render_item.imageurl+"?x-oss-process=image/resize,w_180/format,webp"}/>
                </div>
                <div className={style.item_info_wraper}>
                    {
                        props.noTag?'':(
                            <div  className={style.colorful_tag_container}>  
                                <span className="colorful-tag red"> 赠品无货 </span> 
                            </div>
                        )
                    }
                    <h4 className={style.title}>
                        {render_item.name}
                    </h4> 
                    <p className={style.item_attrs}> 
                        {
                            getAttrs()
                        }
                    </p> 
                        
                        
                            {
                                props.isedit?
                                    <div className={style.item_price_container}>
                                        <div className={style.quantity_container}> 
                                            <div className={style.quantity}> 
                                                {
                                                    render_item.count<=1?(
                                                        <span className={style.button +" "+ style.down +" "+ style.disabled}>-</span>
                                                    ):(
                                                        <span onClick={()=>{
                                                            props.updateCount(render_item.id,render_item.count-1)
                                                        }} className={style.button +" "+ style.down}>-</span>
                                                    )
                                                }
                                                <span className={style.num}>{render_item.count}</span> 
                                                <span onClick={()=>{
                                                    props.updateCount(render_item.id,render_item.count-0+1)
                                                }} className={style.button +" "+ style.up}>+</span> 
                                            </div> 
                                        </div>
                                        <p className={style.price}>
                                            <span><i>¥</i> <span>{render_item.price}</span></span>
                                        </p>
                                    </div> 
                                :
                                    <div className={style.item_price_container}>
                                        <p className={style.price}>
                                            <span><i>¥</i> <span>{render_item.price}</span></span>
                                            <span className={style.count+" smartisan_icon"}>{render_item.count}</span>
                                        </p>
                                    </div>
                            }
                        


                </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(CartItem)