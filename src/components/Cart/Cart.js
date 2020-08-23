import React from 'react'
import CartItem from './CartItem/CartItem'
import { connect } from 'react-redux'

const Cart = () => {
    return (
        <div>
            <CartItem></CartItem>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.getIn(['cartReducer','CartItems']))
    return  { cartlist : state}
}
const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps,null)(Cart)