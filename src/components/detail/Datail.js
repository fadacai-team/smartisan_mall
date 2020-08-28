import React, { useRef ,useEffect,useState} from 'react'
import {connect} from 'react-redux'
import axios from './.././../Utils/myaxios'
import {detailAction,activeAction,clearAction} from './.././../store/actionCreate/detailAction'
import detailStyle from './Detail.module.scss'
import {withRouter} from 'react-router-dom'
import ProductBanner from './ProductBanner'
import ProductInfo from './ProductInfo'
import Preview from './Preview'
import ProDetail from './ProDetail'
// import {toJS, fromJS} from 'immutable'
import ToCart from './ToCart'






function Datail (props){
    
    let [shopNum,setShopNum] = useState(0)
    let [tabNum,setTabNum] = useState(0)
    let showShopMount = () => {
        axios.get('http://119.29.81.194/data/showCart.php').then((res) => {
            let lotalMount = 0
            res.data.forEach((item,index) => {
                lotalMount += item.count/1
            })
            setShopNum(lotalMount)
        }
        )
    }
    
    var body = useRef()
    var mask = useRef()
    useEffect(() => {
        props.setAllData(props.match.params.id)
        showShopMount()
        if(mask.current){
            mask.current.onmousewheel=function() {return false}
            mask.current.style.touchAction = 'none'
        }
        return () => {
            props.clearDataAll()
        }
        
    },[])
    var domData =  (props.detailData && props.detailData.size ) ? props.detailData.toJS()[0] :{}
    var navArr = props.navData.toJS()

    let scrollToItem = (index) => {
        let totalHeight = body.current.clientHeight
        let height = body.current.childNodes[index].offsetTop - body.current.childNodes[0].offsetTop
        window.scrollTo({top:height,left:0,behavior:'smooth'})
    }
    //获取id的方法
    function getId(attr_ids=[],sku_info=[]){
        var id 
        var filtered = []
        for(var i=0;i<attr_ids.length;i++){
            filtered = sku_info.filter((v,index)=>{
                return v.getIn(['spec_json',i,'spec_value_id']) == attr_ids[i]
            })
        }
        id = filtered?filtered.getIn([0,'sku_id']):[]
        return id 
    }

    //加入购物车的方法
    function toCartFunction (arrType=[],arrAll=[],propsNum,optionType){
        let ids = arrAll.getIn(['0','spu','sku_info'])?getId(arrType,arrAll.getIn(['0','spu','sku_info'])):'222'
                            let num = propsNum
                            let nowTime = new Date()
                            axios.get('http://119.29.81.194/data/addShopCart.php',{
                                params:{
                                    id:ids,count:num,unpateTime:nowTime
                                }
                            }).then((res) => {
                                showShopMount()
                                if(optionType==='pay'){
                                    props.history.push('/order')
                                }
                            }
                            )
    }



    return (
        <React.Fragment>
            {
            (props.detailData && props.detailData.size)?(
                <div className={detailStyle.detail}   >
            <div className={detailStyle.detailHeader}>
                <div className={detailStyle.detailTitle}>
                    <h2 className={detailStyle.productName}>{domData?domData.name:''}</h2>
                    <div className={detailStyle.returnPreRouter} onClick={() => {
                        props.history.goBack()
                    }
                    }>
                        <span className={detailStyle.arrow}>{'<'}</span>
                        <span className={detailStyle.backText}>返回</span>
                    </div>
                </div>
                <div className={detailStyle.detailNav}>
                    <ul className={detailStyle.navLists}>
                        {
                            navArr.map((item,index) => <li onClick={
                                // scrollToItem.bind(null,index)
                                // tabNumClick.bind(null,index)
                                () => {
                                    scrollToItem(index)
                                    setTabNum(index)
                                }} key={item.name} className={detailStyle.navList + ' ' + (tabNum===index?detailStyle.navActive:'')}>{item.name}</li> )
                        }
                    </ul>
                </div>
            </div>
            <div className={detailStyle.detailContent}  ref={body}>
                <div>
                    <ProductBanner bannerData = {props.detailData.getIn([props.index,'shop_info','ali_images'])}></ProductBanner>
                    <ProductInfo activeProps={props.activeHandleClick} productInfo={domData?domData:''}></ProductInfo>
                </div>
                <Preview idsPreview={props.match.params.id}></Preview>
                <ProDetail></ProDetail>
                
                <div></div>
            </div>
            <ul className={detailStyle.detailFooter}>
                <li className={detailStyle.firstItem}>
                    <a className={detailStyle.firstItemA}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVgSURBVHgB7Z3/i9xUFMWP3barteuuVFpaWtyqIEgFwf//j/AnsVgsVndddbVaraxYag5JYJq9mSQzufe9lzkfeMxsJsy+5OR+eTcvbwAhhBBCCCGEEEIIIYQQQgghhBBiE95C2bxTtYOq7VftevP31artrezzqmoXzes/zfsXzfviKE0wCkFRPqjaEd4UZioU8HnVfq/aHyiEUgSjMLerdgfbidTHv6it7qR5ny25C0ZxHlTtFuI4R8bC5SzYXfhZ1BB0l2dVO0Vm5CgYk4dPUMeqMfyHOoFoEwqe7FXr2Gu+c7/5zjYxGQO/5xtkZG25CcY4dQ/DVkWRfkEdd15gOswsmbQcohZyHbwA6CJ/RgbkJBhd4L2BfSjOKTYTqY+D5n8fDOx3ggxcZC6C3Ucdr/rwEKoLBfsQ6y0uuWgpAnqXdWLR9fEkfQ//OMLvp9ujCzzs2YeiMv79iUSkFuxu0yyYQDDgR5+cv1Gn9oxxVnLybvP6FxKQUjAmGPd7PqPre4zawlJAK6NoFMdykbQ0WmR4eSuVYEyzP6raFeMznqgnVXuNtLxu+kLBbhifU7TfUIsbRirBPqvaNWM7a3vfIS/YJwr2dmc7LzaK9isCSSEYY9aRsZ0x61uktywLxtH3cPkia/8Oi2dXEAtdoTXWoliMWaHuZQLs1xPY/Qstn0UL1jcw5tgm6yo56v6dGNvbAnUIkYLRuqyq+3nTSoDjNGvwzuMKsbJIwfqs6wRl8bRn+20EECmYVaujZeXuCruwv5ZHCIllUYLRZVw3tpdmXS1nxjaKdQPORAlmpfGMBaVZVwsrHH2xzJUowfrcYclY/T+CMxGC3YTt25+jbKz+t7O63IgQzPLrdCe5DpLHwv5bbnHoRuhWRAhmHcBLLAPrOFwTj7GTUbbBcodJ7iVNYA+X+/0Kl72CdXvFyoZnI0Iw6wAumleelGP0B2sG9meIc5/sz8fod2vd/lgWNjSpZysiXKJ1AG06zxrcusyKaXJIBaGB/VkXg27hzbqhdSG5Dp6ji78t7YGOGbfcQRxj+rN6gVnjyEUKNoUcJgqtkrQ/ETHM4hGcfb0zX6I/rXcllYWVLFYLLc29stHFW7Dc3FnxeApGsT7FbuJ2oXoKxsk2rnW1jHGbMuAlGNPjyHQ8N3j8LjVFL8GGnkLZBY7hgIdgzJxc62mFwHMwu5V5CSZqDjEzHoLtaqJh8T5mxkMw94koBTF7el9CLbFkihCs9Fv/czL7ufAQ7AKiZfZz4SFYeAU7Y2Z/QtNDsGIW2gpg9rmXXha2lFlR29Au8zcrXlniDxAu63l4CcYrK4ulfhLBY3eZiu45DuN0sF1MQHjMz+CE98CZzy3vkqVxvv1jOBJR6eDV9hQan81C1Kyp9jlm3m7gzT0WiEuuOXKFHs5J5GSi1fKT64MQJHqaW3d9wy8wXG+LLHXxf43pz1fN+0ed/RfzyGwf5zPtMxdnI/ZZ7U/4E6Spp6Fx5TReNPu4fPHQ7fAE/og4+FTN1Qn9eWDs57qeYuk/NJASTgH4vLONFZ6v4Yjuh22ONSvMfTk+CbYZtC7rMSj357ZTPQwRRbsY2c01+7QLpYxNbvid1oxmjjMl2BbwxHJdxqHEignGQbPfUFWGwj+EPY0vZPHmJQt2jGlZMC2xb8laLiW7bo37sAXOlizY1KoDxX2I6dAVhi3BtPQY5g3TeC58GTaAlmCbw3hHywqdJSbBpsEYx5W0uTBzkl/4W7JgLDJPjWN9saj9OcaXSDzvcsmCMc2eItgpMvy9sC5Lfga5/eUGrjd/bc1+zPJ+apoQQgghhBBCCCGEEEIIIYQQQgghhBCT+R/DyOaGDWTjLgAAAABJRU5ErkJggg=="></img>
                    </a>
                    <a className={detailStyle.firstItemA+' '+detailStyle.firstItemB} href="/#/cart">
                        <div className={detailStyle.showShop}>
                            <span className={detailStyle.showShopNum}>{shopNum}</span>
                        </div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALkSURBVHgB7d1baxNRFIbhZastlgbxQC+kYu5Ewf//QwRBrypC0XpGbYkouhZJqISdJpk9nZVv5n1gUZg0QzNf92lmkpgBAAAAAAAAAAAAAABg29ywfjj0uut122vPa3+2/Y/XudeF1xevHyZOPbAI6qHXaM3f/+V16vXJRKkGtut17PXAmonA3tq0BUpRDCy6vCeznzWitb2a/ZSxa1ri731q9WHN9xXjXrS2vyZCrYWNve4veey312ev73bZ1UUoMb7dscuJyKII7MREKAUWQY0L2yOod17vr366HXk9WvLYa5sGvfWUusSx162FbRFWHOyvq59uP72+ed3z2ll4LLpYiZnjjmmI9dVBYXu0rAtbX6zJTgvbR7b+0iCVSmClcWtiq7vBkjMrT+cPTYBKYKXWtU43uMzHwjZaWItKgdWcZip1o/smQCWw0uSo5izFpLCtjbXdtVMJDDMEJobAxBCYGAITQ2BiCEwMgQEAVGVfcY7rXHEVWOJMuU2vSp9Y4o07mYHFydZnpncjUJx0fmlJoWXOEuMeC7WwQvzNR5YkM7AD05V27Yx1WDNpPcNNy7PJi44Ljm9sOuhHy3xsdS20dn+DbGGbBDY/uCHufIpb22quOLe9v85kBrZJ6168yTMO7sSaq91fWpeo0sJGhefWdEu1+xtcYJu+4Hhr0d5/zz22uoPWxv5SQstaOMfBem6bi/EmWkJbB6tmfy8sYfGcNUtsektZ22u3mv2ltDDWYc2l/LNnBZa5/mtLyo2nKpMOzBBYc4MawwisIQJrjsDEDGqWKPFerBVYh4mhSxST0ksQmBjOdDRHlyhmMIH1qTvs/LUQWJ1BBCbx8QprGkRgfdL55CkjsD7MEOcYw8QQmBgCE0NgYghMDLNEMbQwMQQmhsDEMIaJoYWJGURgNe+c3Dbn1rGMwM6sPzp/LRndU3wHSrwRLj62SHU8i14ivkbkgwEAAAAAAAAAAAAAAGDw/gHvDFjY99BwWgAAAABJRU5ErkJggg=="></img>
                    </a>
                </li>
                <li onClick={() => {
                    if(props.documentType==='div'){
                        props.activeHandleClick('show','pay','button')
                        toCartFunction(props.attrs,props.detailData,props.proNum,props.optionType)
                    }else if(props.documentType==='button' && !props.isChooseActive){
                        props.activeHandleClick('hide','pay','button')
                    }
                    }} className={detailStyle.secondItem+' '+detailStyle.addPro+' '+(!props.isButtonActive?'':detailStyle.active)}>
                    <span className={detailStyle.nowBuying}>
                        <a className={detailStyle.clickBuying}>现在购买</a>
                    </span>
                </li>
                <li className={detailStyle.thirdItem+' '+detailStyle.addPro+' '+(!props.isButtonActive?'':detailStyle.active)} onClick={() => {
                    if(props.documentType==='div'){
                        props.activeHandleClick('show','add','button')
                        toCartFunction(props.attrs,props.detailData,props.proNum,props.optionType)
                    }else if(props.documentType==='button'){
                        props.activeHandleClick('hide','add','button')
                    }
                }
                }>
                    <span className={detailStyle.addCart}>
                        <a className={detailStyle.clickCart}>加入购物车</a>
                    </span>
                </li>
                <li className={detailStyle.thirdItem+' '+detailStyle.addPro+' '+(props.isButtonActive?'':detailStyle.active)} onClick={
                    () => {
                        if(props.detailData.getIn(['0','spu','sku_info'])){
                            props.activeHandleClick('show','add','button')
                            toCartFunction(props.attrs,props.detailData,props.proNum,props.optionType)
                        }
                    }
                    
                }>
                    <span className={detailStyle.addCart}>
                        <a className={detailStyle.clickCart}>确认</a>
                    </span>
                </li>
            </ul>
            <div ref={mask} className={detailStyle.loving+' '+(props.isChooseActive?'':detailStyle.active)} onClick={
                () => {
                    if(props.isChooseActive){
                        props.activeHandleClick('show','','button')
                    }
                }}>
                <ToCart></ToCart>
            </div>
        </div>
            ):""
        }
        </React.Fragment>
        
    )

}

const mapStateToProps = (state) => {
    return {
        detailData:state.getIn(['detailRedeuer','data']),
        navData:state.getIn(['detailRedeuer','nav']),
        bannerImgData:state.getIn(['detailRedeuer','bannerImg']),
        isChooseActive:state.getIn(['detailRedeuer','isChooseActive']),
        isButtonActive:state.getIn(['detailRedeuer','isButtonActive']),
        optionType:state.getIn(['detailRedeuer','optionType']),
        attrs:state.getIn(['detailRedeuer','chooseType']),
        proNum:state.getIn(['detailRedeuer','proNum']),
        index:state.getIn(['detailRedeuer','index']),
        documentType:state.getIn(['detailRedeuer','documentType'])

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAllData:(ids)=>{
            axios.get('/product/spus?ids='+ids).then((res) => {
                var str = ''
                res.data.list[0].sku_info.forEach((item,index) => {
                    if(index<res.data.list[0].sku_info.length-1){
                        str += item.sku_id + ','
                    }else{
                        str += item.sku_id
                    }
                })
                axios.get('/product/skus?ids='+str+'&with_stock=true&with_spu=true').then((res) => {
                    dispatch(detailAction(res.data.list))
                }
                )
            })
            // axios.get('/product/skus?ids=100039715,100053202,100060204,100060401,100061001,100061002,100061003,100068101,100069301,100069302,100080602,100141102,100144701&with_stock=true&with_spu=true')
            // .then((res) => {
            //     dispatch(detailAction(res.data.list))
            // })
        },
        activeHandleClick:(isShow,optionType,buttonType) => {
            dispatch(activeAction(isShow,optionType,buttonType))
        },
        clearDataAll:() => {
            dispatch(clearAction())
        }
        
        
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Datail))