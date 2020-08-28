import React,{useState,useEffect} from 'react'
import CartItem from './CartItem/CartItem'
import { connect } from 'react-redux'
import {
    updateIschoosed,
    setPromotions,
    checkAllCartItems,
    setRenderCart,
    syncCart,
    setCart,
    updateItemCount,
    delCartItems,
    flagDel
} from '../../store/actionCreate/cart'
import axios from '../../Utils/myaxios'
import TitleBar from '../Common/TitleBar/TitleBar'
import BottomBar from './CartBottomBar/CartBottomBar'
import { List ,Map,toJS, fromJS} from 'immutable'

const Cart = (props) => {
    let [totalPrice,setTotalPrice] = useState(0)
    let [goodsCount,setGoodsCount] = useState(props.render_list.size)
    let [isEditor,setIsEditor] = useState(false)
    const changeIsEditor=()=>{
        setIsEditor(!isEditor)
    }
    let [ischeckall,setCheckall] = useState(true)
    //mounted时从localstorage拿去数据 或者 从远程数据库里
    useEffect(()=>{
        //从localstorage拿数据
        // var cart = JSON.parse(localStorage.getItem('cart'))
        // props.setCart(cart)
        // axios.get('http://119.29.81.194/data/showCart.php').then(res=>{
        //     props.setCart({
        //         cart:{
        //             cart_items:res,
        //             unlogin_items:[]
        //         },
        //     })
        // })
        // axios.post('http://119.29.81.194/data/addShopCart.php',)
    },[])
    useEffect(()=>{
        // var cart = JSON.parse(localStorage.getItem('cart'))
        // props.setCart(cart)
        var cart = Map({})
        axios.get('http://119.29.81.194/data/showCart.php').then(res=>{     
            cart = cart.set('cart_items',fromJS(res))
            props.setCart(cart)
        }).then(()=>{
            props.setPromotions().then(()=>{
                var ids = []
                ids =  cart.get('cart_items').map(v=>{
                    return v.get('id')
                }).join(',')
                props.setRenderData(ids).then(res=>{
                }).catch(err=>{
                })
            }).catch(err=>{
            })
        }).catch(err=>{
        })
        // var arr = List.union(List(cart.cart_items),List(cart_list))
        
    },[])
    //数量或价格改变时 生成新的cart cart_items
    useEffect(()=>{
        if(props.render_list.length){
            props.syncCartList()
        }
    },[goodsCount,totalPrice])
    //计算总价和总数
    useEffect(()=>{
        var count = 0
        var totalprice = 0
        if(isEditor){
            props.render_list.forEach(v=>{
                if(v.get('del')){ 
                    count += (v.get('count')-0)
                }
            })
            setGoodsCount(count)
        }else{
            props.render_list.forEach(v=>{
                if(v.get('checked')){ 
                    count += (v.get('count')-0)
                    totalprice += v.get('price') * v.get('count')
                }
            })
            setGoodsCount(count)
            setTotalPrice(totalprice)
        }
    },[props.render_list,isEditor])


    // 更新checkall
    useEffect(()=>{
        var checkall = true
        if (isEditor) {
            props.render_list.forEach(v=>{
                if(v.get('del')==false){
                    checkall =false
                }
            })
        }else{
            props.render_list.forEach(v=>{
                if(v.get('checked')==false){
                    checkall =false
                }
            })
        }
        setCheckall(checkall)
    },[props.render_list,isEditor])
    return (
        <div style={{position:'relative'}}>
            <TitleBar title="购物车" option="edit" edit={changeIsEditor} isedit={isEditor}></TitleBar>
            <div style={{marginTop:'2.2rem',marginBottom:'4rem',paddingTop:'.1rem'}}>
                {
                    props.render_list.map((v,i)=>{
                        return <CartItem flagDel={props.flagDel} updateCount={props.updateItemCount} updateItem={props.updateChoosed} index={i} item={v} key={i} isedit={isEditor}></CartItem>
                    })
                }
            </div>
            <BottomBar del={props.delItems} checkall={props.checkAll} ischeckall={ischeckall} count={goodsCount} price={totalPrice} isedit={isEditor}></BottomBar>
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
        cart:state.getIn(['cartReducer','cart']).toJS()
    }
}
const mapDispatchToProps = dispatch => ({
    setPromotions:()=>{
        var url = '/product/promotions?with_num=true'
        return axios.get(url).then(res=>{
            dispatch(setPromotions(res.data.list))   
        })
    },
    setRenderData:(ids)=>{
        var url = '/product/skus?ids='+ids+'&with_stock=true&with_spu=true'
        return axios.get(url).then(res=>{
            if(res.data){
                dispatch(setRenderCart(res.data.list))
            }
        })
    },
    updateChoosed:(index,choosed)=>{
        dispatch(updateIschoosed(index,choosed))
    },
    checkAll:(type,ischeckall)=>{
        dispatch(checkAllCartItems(type,ischeckall))
    },
    syncCartList:()=>{
        dispatch(syncCart())
    },
    setCart:(cart)=>{
        dispatch(setCart(cart))
    },
    updateItemCount:(id,count)=>{
        dispatch(updateItemCount(id,count))
    },
    delItems:()=>{
        dispatch(delCartItems())
    },
    flagDel:(id)=>{
        dispatch(flagDel(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)