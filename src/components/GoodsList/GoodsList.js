import React,{useEffect, useState} from 'react'

import axios from '../../Utils/myaxios'

import {Map} from 'immutable'
import CartItem from '../Cart/CartItem/CartItem'
import TitleBar from '../Common/TitleBar/TitleBar'

export default function GoodsList(props) {
    let [render_list,setRenderList] = useState([])
    useEffect(() => {
        var id = props.match.params.id
        console.log('props',props,id)
        axios.get('/v1/search/goods-list?type=shop&category_id='+id+'&num=20&sort=sort&channel_id=1002&page=1').then(res=>{
            console.log(res.data.list)
            
            var list = res.data.list.map(v=>{
                console.log(v)
                return Map({
                    id:v.spuInfo.spuId,
                    name:v.spuInfo.spuTitle,
                    sub_title:v.spuInfo.spuSubTitle,
                    price:v.spuInfo.price,
                    origin_price:'',
                    attr_info:'',
                    count:'',
                    tagType:v.spuInfo.tagType,
                    imageurl:v.spuInfo.images,
                    activety_title:'',
                    gifts:[],
                    checked:true,
                    del:false,
                    spu_id:v.spu_id
                })
            })
            setRenderList(list)
        })
            /**
            activeTitle: ""
            discountPrice: "158.00"
            images: "https://resource.smartisan.com/resource/a7a8ad765df9ba945eedb1045324cda7.png"
            price: "158.00"
            skuAttrIds: 1051
            skuColor: ""
            skuId: 100119001
            spuId: 1001190
            spuSubTitle: "双层不锈钢杯壁"
            spuTitle: "德国WMF福腾宝保温杯 "
            store_nums: 10
            tagText: ""
            tagType: 0
             */
    }, [])

    return (
        <div>
            <TitleBar title="商品列表"></TitleBar>
            <div style={{marginTop:'2.2rem'}}>
            {
                render_list.map((v,i)=>{
                    return <CartItem noCount={true} index={i} noCheck={true} item={v} key={i}></CartItem>
                })
            }
            </div>
        </div>
    )
}
