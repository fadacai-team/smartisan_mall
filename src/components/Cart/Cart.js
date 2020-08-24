import React,{useEffect} from 'react'
import CartItem from './CartItem/CartItem'
import { connect } from 'react-redux'
import {
    setCartList,
    updateIschoosed,
    setPromotions,
    updateCartCodeList
} from '../../store/actionCreate/cart'
import axios from '../../Utils/myaxios'
import {Map} from 'immutable'
import TitleBar from '../Common/TitleBar/TitleBar'
import BottomBar from './CartBottomBar/CartBottomBar'

const Cart = (props) => {
    useEffect(()=>{
        var url = '/product/promotions?with_num=true'
        axios.get(url).then(res=>{
            props.setPromotions(res.data.list)
        })
    },[false])
    useEffect(()=>{
        var ids = []
        ids =  props.cartIdList.map(v=>{
            return v.get('goods_code')
        }).join(',')
        var url = '/product/skus?ids='+ids+'&with_stock=true&with_spu=true'
        axios.get(url).then(res=>{
            props.setListData(res.data.list)
        })
    },[props.promotions])
    useEffect(()=>{
        props.updateCartCodeList()
    },[props.promotions])

    return (
        <div style={{position:'relative'}}>
            <TitleBar></TitleBar>
            <div style={{marginTop:'50px'}}>
                {
                    props.cartlist.map((v,i)=>{
                        return <CartItem updateItem={props.updateChoosed} index={i} cartitem={v} key={i}></CartItem>
                    })
                }
            </div>
            <BottomBar></BottomBar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return  {
        cartlist : state.getIn(['cartReducer','cartItemList']),
        cartIdList:state.getIn(['cartReducer','cartCodeList']),
        promotions: state.getIn(['cartReducer','promotions']),
        cartCodelist: state.getIn(['cartReducer','cartCodeList'])
    }
}
const mapDispatchToProps = dispatch => ({
    setPromotions:(promotions)=>{
        dispatch(setPromotions(promotions))
    },
    setListData:(listData)=>{
        dispatch(setCartList(listData))
    },
    updateChoosed:(index,choosed)=>{
        dispatch(updateIschoosed(index,choosed))
    },
    updateCartCodeList:(newcodelist)=>{
        dispatch(updateCartCodeList(newcodelist))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)