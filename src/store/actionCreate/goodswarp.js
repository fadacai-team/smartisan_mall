import {GOODS_LIST,GOODWATERS,GOODS_ROW} from '../actionsType/goodswarp'

export const goodsData = (data)=>({
    type:GOODS_LIST,
    payload:{
        data
    }
})
export const goodsWater = (data1)=>({
    type:GOODWATERS,
    payload:{
        data1
    }
}) 

export const GoodsROWData = (data)=>({
    type:GOODS_ROW,
    payload:{
        data
    }
})