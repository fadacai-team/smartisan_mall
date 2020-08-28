import React from 'react'
import style from './CartBottomBar.module.scss'
import { withRouter } from 'react-router-dom'
function formatPrice(price) {  
    price = price.toFixed(2) +""
    return price
}
function CartBottomBar(props) {
    return (
        <div  className={style.bottom_bar}> 
            <div  className={style.select_info}> 
                <div  className={style.checkbox_container}>
                    <div className={style.check_outer}> 
                        <span onClick={
                            ()=>{
                                if(props.isedit){
                                    props.checkall('del',!props.ischeckall)
                                }else{
                                    props.checkall('checked',!props.ischeckall)
                                }
                            }
                        } className={style.checkbox+" " + (props.ischeckall?style.checkbox_on:'')}> </span> 
                    </div> 
                </div> 
                <span >已选 <i >{parseInt(props.count)}</i> 件</span> 
            </div> 
            <div  className={style.sum_info}>
                <div  className={style.desc}> 
                    <p  className={style.total_price}>
                        合计：<span ><i>¥</i> <span>{formatPrice(props.price)}</span></span>
                    </p> 
                    <div  className={style.delivery}> 
                        <article >应付总额不含运费</article> 
                    </div>
                </div>
                {
                    props.isedit?(
                        <div onClick={()=>{
                            if(props.count!=0){
                                props.del()
                            }
                        }}  className={style.blue_btn+" "+style.edit_red +" " + (props.count===0?style.disable:"" ) }>删除所选</div>
                    ):(
                        <div onClick={()=>{
                            if(props.count!=0){
                                props.history.push('/order')
                            }
                        }}  className={style.blue_btn +" "+ (props.count===0?style.disable:"" )}>现在结算</div>
                    )
                }
            </div>
        </div>
    )
}

export default withRouter(CartBottomBar)