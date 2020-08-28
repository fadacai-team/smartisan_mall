import {SET_ALL_DATA,SET_PREVIEW_DATA,SET_ACTIVE,SET_PRO_NUM,SET_TYPE_ARR,SET_INDEX,CLEAR_DATA} from './../actionsType/detailType'

const detailAction = (detailParams) => ({
    type:SET_ALL_DATA,
    detailParams
})

const previewAction = (previewParams) => ({
    type:SET_PREVIEW_DATA,
    previewParams
})

const urlProAction = (url,num) => ({
    type:SET_PREVIEW_DATA,
    payload:{
        url,
        num
    }
})

const activeAction = (isShow,optionType,buttonType) =>(
    {
        type:SET_ACTIVE,
        payload:{
            isShow,
            optionType,
            buttonType
        },
    }
)

const setNumAction = (num) => ({
    type:SET_PRO_NUM,
    num,
})

const setTypeAction = (index,sku_id,typePro) => ({
    type:SET_TYPE_ARR,
    payload:{
        index,
        sku_id,
        typePro
    }

})

const setIndexAction = (chooseIndex) =>( {
    type:SET_INDEX,
    chooseIndex
})

const clearAction = () => ({
    type:CLEAR_DATA
})


export {
    detailAction,
    previewAction,
    urlProAction,
    activeAction,
    setNumAction,
    setTypeAction,
    setIndexAction,
    clearAction
}
