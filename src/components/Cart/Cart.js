import React,{useEffect} from 'react'
import CartItem from './CartItem/CartItem'
import { connect } from 'react-redux'
import {setCartList} from '../../store/actionCreate/cart'
import axios from 'axios'


const Cart = (props) => {
    useEffect(()=>{
        var url = '/product/skus?ids=100047001,100047101,100093401,100142001,100145701&with_stock=true&with_spu=true'
        axios.get(url).then(res=>{
            props.setListData(res.data.data.list)
        })
    })
    return (
        <div>
            {
                props.cartlist.map((v,i)=>{
                    return <CartItem cartitem={v} key={i}></CartItem>
                })

            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return  { cartlist : state.getIn(['cartReducer','CartItems'])}
}
const mapDispatchToProps = dispatch => ({
    setListData:(listData)=>{
        dispatch(setCartList(listData))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)