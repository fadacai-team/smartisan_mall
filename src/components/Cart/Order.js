import React,{useState,useEffect} from 'react'
import CartItem from './CartItem/CartItem'
import { connect } from 'react-redux'

import style from './Order.module.scss'

import {
    changePayment
} from '../../store/actionCreate/cart'

import TitleBar from '../Common/TitleBar/TitleBar'

function formatPrice(price) {  
    price = price.toFixed(2) +""
    return price
}
function Order(props) {
    let [totalPrice,setTotalPrice] = useState(0)
    let [goodsCount,setGoodsCount] = useState(props.render_list.size)
    var [orders] = useState(props.render_list.filter(v=>{
        return v.get('checked')
    }))
    useEffect(()=>{
        var count = 0
        var totalprice = 0
        props.render_list.forEach(v=>{
            if(v.get('checked')){ 
                count += (v.get('count')-0)
                totalprice += v.get('price') * v.get('count')
            }
        })
        setGoodsCount(count)
        setTotalPrice(totalprice)
    },[props.render_list])

    
    return (
        <div>
            <TitleBar title="订单信息"></TitleBar>
            <div className={style.main_wrapper}>
                {/* 地址 */}
                <div className={style.order_card}>
                    <div className={style.card_header}>
                        <h2 className={style.title}>收货信息</h2> 
                    </div>
                    <div className={style.content}> 
                        <div className={style.name}> 
                            <span>谢安</span> 
                            <span>15679725683</span> 
                        </div> 
                        <h3 className={style.address}> 广东省 禅城区 汾江南路131号丽日豪庭1区3座 </h3>  
                    </div>
                </div>
                {/* 支付方式 */}
                <div className={style.order_card}>
                    <div className={style.card_header}>
                        <h2 className={style.title}>支付方式</h2> 
                    </div>
                    <ul className={style.payment_items}> 
                    <li onClick={
                        ()=>{
                            props.changePayment('wechat')
                        }
                    } className={style.item +" "+ style.wechat_pay}> 
                        <span className={style.name}>微信支付</span>  
                        <span className={style.payment_check +" "+ (props.payment==='wechat'?style.active:'')}></span> 
                    </li>
                    <li onClick={
                        ()=>{
                            props.changePayment('ali_pay')
                        }
                    } className={style.item +" "+ style.ali_pay}> 
                        <span className={style.name}>支付宝</span>  
                        <span className={style.payment_check +" "+ (props.payment==='ali_pay'?style.active:'')}></span> 
                    </li>
                    <li onClick={
                        ()=>{
                            props.changePayment('ant')
                        }
                    } className={style.item+" "+ style.ant +" "+style.stages_pay}> 
                        <span className={style.name}> 蚂蚁花呗分期 </span> 
                        <span className={style.payment_check+" "+ (props.payment==='ant'?style.active:'')}></span> 
                    </li> 
                    </ul>
                </div>
                {/* 商品信息 */}
                <div className={style.order_card}>
                    <div className={style.card_header}>
                        <h2 className={style.title}>商品信息</h2> 
                        <h3 className={style.sub_title}>总计 {goodsCount} 件商品</h3>
                    </div>
                    <div className={style.cart_items}>
                    {
                        orders.map((v,i)=>{
                            return <CartItem noTag={true} noCheck={true} index={i} item={v} key={i} ></CartItem>
                        })
                    }
                    </div>
                </div>
                {/* 商品金额 */}
                <div className={style.order_card} style={{marginBottom:'4rem'}}>
                    <div className={style.card_header}>
                        <h2 className={style.title}>商品金额</h2> 
                    </div>
                    <ul className={style.subtotal_items}> 
                        <li className={style.item}> 
                            <span className={style.name}>商品总计</span> 
                            <span className={style.price}><i>¥</i> <span>{formatPrice(totalPrice)}</span></span> 
                        </li> 
                        <li className={style.item}> 
                            <span className={style.name}>优惠</span>
                            <span className={style.price +" "+style.price_minus}><i>¥</i> 
                            <span>0.00</span></span> 
                        </li> 
                        <li className={style.item}> 
                            <span className={style.name}>运费</span> 
                            <span className={style.price +" "+ style.price_plus}><i>¥</i> <span>0.00</span></span> 
                        </li> 
                        <li className={style.item +" "+ style.items_subtotal}>
                            <span className={style.name}>应付金额</span> 
                            <span className={style.price}>
                                <i>¥</i> <span>{formatPrice(totalPrice)}</span>
                            </span> 
                        </li> 
                    </ul>
                </div>
            </div>

            <div  className={style.bottom_bar}> 
                <div  className={style.sum_info}>
                    <div  className={style.desc}> 
                        <p  className={style.total_price}>
                            合计：<span ><i>¥</i> <span>{totalPrice}</span></span>
                        </p> 
                    </div>
                        <div onClick={()=>{
                            props.history.push('/cart')
                        }}  className={style.blue_btn}>现在支付</div>
                </div>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => {
    return  {
        render_list: state.getIn(['cartReducer','cart_render_list']),
        cart_list:state.getIn(['cartReducer','cart','cart_items']),
        promotions: state.getIn(['cartReducer','promotions']),
        ischeckall:state.getIn(['cartReducer','ischeckAllCart']),
        editCheckall:state.getIn(['cartReducer','isEditCheckAll']),
        payment:state.getIn(['cartReducer','payment']),
    }
}
const mapDispatchToProps = dispatch => ({
    changePayment:(payment)=>{
        dispatch(changePayment(payment))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Order)