import React, { Component } from 'react'
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
    return  { cartlist : state}
}
const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)