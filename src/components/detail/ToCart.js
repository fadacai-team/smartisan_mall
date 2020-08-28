import React, { useEffect, useState } from 'react'
import toCartStyle from './ToCart.module.scss'
import {connect} from 'react-redux'
import {setNumAction,setTypeAction,setIndexAction} from './../../store/actionCreate/detailAction'
import {Map,toJS, fromJS} from 'immutable'



function ToCart(props) {
    let [mount,setMount] = useState(0)
    let [str,setStr] = useState('黑色')
    
    useEffect(() => {
        // let newstr = ''
        // console.log(props.productType)
        // props.productType.forEach((item,index) => {
        //     if(index<props.productType.length-1){
        //         newstr += item + '.'
        //     }else{
        //         newstr += item
        //     }
        // })
        // setStr(newstr)
    },[])
    return (
        <React.Fragment>
            {
                props.toCartData.getIn(['0','shop_info'])?(
                    <div className={toCartStyle.bottomDialog} onClick={
                        (e) => {
                            e.stopPropagation();
                        }}>
                        <div className={toCartStyle.dialogHeader}>
                            <div className={toCartStyle.goodsImage}>
                                <img src={props.toCartData.getIn([props.chooseIndex,'spu','sku_info',props.chooseIndex,'ali_image'])+'?x-oss-process=image/resize,w_198/format,webp'}/>
                            </div>
                            <div className={toCartStyle.goodsInfo}>
                                <h4 className={toCartStyle.goodsName}>{props.toCartData.getIn(['0','name'])}</h4>
                                <p className={toCartStyle.goodsType}>{str}</p>
                                <p className={toCartStyle.goodsPrice}>￥{props.toCartData.getIn(['0','price'])}</p>
                            </div>
                        </div>


                        <div className={toCartStyle.dialogContentWarp}>
                            <div className={toCartStyle.dialogContent}>
                                <div className={toCartStyle.typeChoose}>
                                    {props.toCartData.getIn(['0','shop_info','spec_v2']).map((item,index) => {
                                        return <div key={index} className={toCartStyle.type}>
                                                    <h4 className={toCartStyle.typeTitle}>{item.get('spec_name')}</h4>
                                                    <div className={toCartStyle.typeKind}>
                                                        <ul className={toCartStyle.typeItems}>
                                                            {
                                                                item.get('spec_values').map((kind,index_1) =>{  
                                                                    return   <li onClick={() => {
                                                                        props.setTypeArr(index,kind.get('id'),kind.get('item_value'))
                                                                        setMount(index_1)
                                                                        for(var i=0;i<props.attrs.length;i++){
                                                                            props.toCartData.getIn(['0','spu','sku_info']).filter((v,index_filter)=>{
                                                                                if(v.getIn(['spec_json',i,'spec_value_id']) == props.attrs[i]){
                                                                                    props.setChooseIndex(index_filter)
                                                                                }
                                                                                return v.getIn(['spu','spec_json',i,'spec_value_id']) == props.attrs[i]
                                                                            })
                                                                        }
                                                                        }
                                                                    } key={kind.get('id')} className={toCartStyle.typeItem+' '+(mount===index_1?toCartStyle.itemActive:'')} style={kind.get('image')?{padding:'.55rem .475rem',width: '30%'}:{}}>
                                                                                {
                                                                                    kind.get('image')?(
                                                                                        <span> 
                                                                                            <img  alt="" src={kind.get('image')}/> 
                                                                                        </span>
                                                                                    ):""
                                                                                }
                                                                                <p>{kind.get('show_name')}</p>
                                                                            </li>
                                                                })
                                                            }
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                    }
                                    )}
                                    
                                </div>
                                <div className={toCartStyle.goodsMount}>
                                        <h4 className={toCartStyle.mountTitle}>数量</h4>
                                        <div className={toCartStyle.chonnseMount}>
                                            <div className={toCartStyle.clickMount} onClick={
                                                () => {
                                                    props.setProNum(-1)
                                                }
                                                
                                            }></div>
                                            <span className={toCartStyle.clickNum}>{props.proNum+''}</span>
                                            <div className={toCartStyle.clickMount+' '+toCartStyle.addMount} onClick={
                                                () => {
                                                    props.setProNum(1)
                                                }
                                                
                                            }></div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                ):("sssssss")
                            
                
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        toCartData:state.getIn(['detailRedeuer','data']),
        attrs:state.getIn(['detailRedeuer','chooseType']),
        proNum:state.getIn(['detailRedeuer','proNum']),
        state:state.toJS(),
        chooseIndex:state.getIn(['detailRedeuer','index']),
        productType:state.set('detailRedeuer','productType')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProNum:(num) => {
            dispatch(setNumAction(num))
        },
        setTypeArr:(index,sku_id,typePro) => {

            dispatch(setTypeAction(index,sku_id,typePro))
        },
        setChooseIndex:(chooseIndex) => {
            dispatch(setIndexAction(chooseIndex))
        }
        
        
        
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ToCart)