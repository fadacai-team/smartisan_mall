import {fromJS} from 'immutable'
import {SET_ALL_DATA,SET_PREVIEW_DATA,SET_URL_PRO,SET_ACTIVE,SET_PRO_NUM,SET_TYPE_ARR,SET_INDEX} from './../actionsType/detailType'

const defaultState = fromJS({
    data:[],
    nav:[{name:'商品'},{name:'评价'},{name:'详情'},{name:'推荐'}],
    bannerImg:[],
    preview:[],
    proDetailUrl:[],
    isChooseActive:false,
    isButtonActive:false,
    optionType:'add',
    toLocalStorage:{id:'',count:undefined,unpateTime:''},
    chooseType:[],
    productType:[],
    proNum:1,
    index:0,
    documentType:'button'
})
export default function (state = defaultState,action){
    switch (action.type){

        case SET_ALL_DATA:
            //处理产品详情图片
            let obj = fromJS(action.detailParams[0].shop_info.tpl_content.base.images.ali)
            let arr = []
            for(let i=1;i<=obj.get('pieces_num');i++){
                arr.push(obj.get('url').toJS()+'?x-oss-process=image/resize,w_828/indexcrop,y_1440,i_'+i+'/format,webp')
            }
            //处理选择样式为了获取id
            let typeArr = []
            typeArr.length = action.detailParams[0].shop_info.spec_v2.length
            for(let k=0;k<typeArr.length;k++){
                typeArr[k] = action.detailParams[0].spu.sku_info[0].spec_json[k].spec_value_id
            }
            //获取渲染的图片

            return state.set('data',fromJS(action.detailParams))
                        .set('bannerImg',fromJS(action.detailParams[state.get('index')].shop_info.ali_images))
                        .set('proDetailUrl',arr).set('chooseType',typeArr)
        case SET_PREVIEW_DATA:
            return state.set('preview',fromJS(action.previewParams))
        case SET_ACTIVE:
            let dataBool = false
            if(action.payload.buttonType === 'button'){
                let dataBool = false
                if(action.payload.isShow === 'hide'){
                    dataBool = true
                }else if(action.payload.isShow === 'show'){
                    dataBool = false
                }
                return state.set('isChooseActive',dataBool).set('documentType',action.payload.buttonType).set('optionType',action.payload.optionType).set('isButtonActive',dataBool)
            }else if(action.payload.buttonType === 'div'){
                return state.set('isChooseActive',true).set('documentType',action.payload.buttonType)
            }
        case SET_PRO_NUM:
            return state.set('proNum',state.get('proNum')+action.num)
        case SET_TYPE_ARR:
            let typeProduct = []
            if(typeProduct.indexOf(action.payload.typePro) == -1){
                typeProduct.push(action.payload.typePro)
            }
            return state.setIn(['chooseType',action.payload.index],action.payload.sku_id).set('productType',typeProduct)
        case SET_INDEX:
            let arrType = []
            return state.set('index',action.chooseIndex)    
        default:
            break
    }
    return state
}



















