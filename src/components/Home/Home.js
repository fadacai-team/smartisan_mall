import React, { Component } from 'react'
import styles from './home.module.scss'
import { Carousel } from "antd-mobile";
import {withRouter} from 'react-router-dom'
import axios from '../../Utils/myaxios'
import { connect } from 'react-redux'
import {GoodsROWData} from '../../store/actionCreate/goodswarp'
import ImgWarp from '../imgWarp/ImgWarp'
import GoodsWarp from '../GoodsWarp/GoodsWarp'
import {goodsWater} from '../../store/actionCreate/goodswarp'

import List from "../List/List"
class Home extends Component {

    state = {
        swiper_list:[],
        imgHeight: 176,
        quickWarp:[],
        always:[],
        title1:{},
        title2:[],
        Time:0,
        type:false,
        title3:[],
        title4:[],
        list:[],
        full_img:[],
        page:1,
        loading:false,
        // goodswarp1:{},
        // goodswarp2:{},
    }
    // 添加事件监听
    scrollEvent(){
        window.addEventListener("scroll",this.ScrollScreen.bind(this))
    }
    ScrollScreen(e){
        if(e.target.scrollTop>30){
            this.setState({type:true})
        }else{
            this.setState({type:false})
        }

        if(e.target.scrollHeight - e.target.scrollTop<1000 && this.state.loading==false){
            this.setState({loading:true})
            this.setState({page:this.state.page+1},()=>{
                this.props.goodsWater(this.state.page).then(res=>{
                    this.setState({loading:false})

                })
            })
        }
        // if(e.target.scrollTop == 0){
        //     this.setState({type:false})
        // }
    }

    componentDidMount(){
        this.props.goodsWater(1).then(res=>{

        })
        this.props.goodsData().then(()=>{
        })
        axios.get('/mobile/new/home?channel_id=1002').then((data)=>{
            // console.log(data.data)
            this.setState({swiper_list:data.data[0].content})
            this.setState({quickWarp:data.data[1].content})
            this.setState({always:data.data[2].content[0]})
            this.setState({title1:data.data[3].content[0].floor[0]})
            this.setState({title2:data.data[3].content[0].floor[1]})
            this.setState({title3:data.data[3].content[1].floor[0]})
            this.setState({title4:data.data[3].content[1].floor[1]})
            this.setState({list:data.data[3].content[2].floor})
            this.setState({full_img:data.data[7].content})
            // this.setState({goodswarp1:data.data[4]})
            // this.setState({goodswarp2:data.data[5]})
            setInterval(()=>{
                if(this.state.title1.activityInfo){
                    (this.state.title1.activityInfo.surplusTime --)
                    this.setState({Time:this.state.title1.activityInfo.surplusTime})
                }
            },1000)
        })
    }
    creatZero(num){
        if(num<10){
            return "0"+ num
        }else{
            return num
        }
    }
    getTime(){
        let hour = this.state.Time? parseInt(this.state.Time /60/60) : ''
        let min = this.state.Time? parseInt((this.state.Time%3600)/60) : ''
        let sec = this.state.Time? this.state.Time%60 : ''
        return (<span><i>{this.creatZero(hour)}</i><i>:</i><i>{this.creatZero(min)}</i><i>:</i><i>{this.creatZero(sec)}</i></span>)
    }
    componentWillUnmount(){
        // 移除事件
        window.removeEventListener("scroll",this.ScrollScreen.bind(this))
    }
    render() {
        return (
            <div style={{height:'100%',overflow:"scroll"}} onScroll={(e)=>{
                this.ScrollScreen(e)
            }}>
                <div className={styles.smart_home}>
                    {/* 头部开始 */}
                    <header className={styles.smart_home_logo}>
                        <figure className={styles.logo}></figure>
                    </header>
                    {/* 头部结束 */}
                    {/* 搜索框开始 */}
                    <section className={styles.search_bar_warp + " " + (this.state.type ? styles.pos : '')}>
                        <div className={styles.search_bar_middle}>
                            <div className={styles.search_inner} onClick={()=>{
                                    this.props.history.push('/search')
                                }}>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANRSURBVHgB7ZpPaxRBEMWf0aAGklX24CIR0YOCOSSIHvzoHgVRRBA9iRERiQfjn0AUDLoi9mNmcNNbs7Pb/XqWhfpBkdCzO9vzurqqu3oAx3Ecx3Ecx3EcPWfQLxvBNoOtT7SNg50E+44lUloIPvAw2CjYFZwWwOJbsINgR8F+okdKCcEHvlFb18O3QUHeoidBSghBD9gLdhEa9msrilqIHVReoIYx5CkKeodSiN1g12ZcZ1A8DHaM6sHGdTs9Z4DKk7ZmfL+oGCohZonAALhf/+2CotwOtt1yvZgYCiFu1RbDzr7CfALEUJD7sD2EYjwK9gdCziIPjtyO0c41wTOkrw34kB/q/4fRNWahtWBfICRXCI5anB7pCY+D/UY+jTfFYlyur51AxBrS4XSIUyRF4BxWui3jyyHs35eRI4QVHNlp2ShN8BL/s0zDENOekkyqEIwNsTfQVT+iDBThvdEu84pUIUZGW+nVH4WIvYJZ5RwEpAoRuyRjQ0qaXASKEHscA/UAAlKEGGA6UxyhHyyxtyAgRQjLFY/RD9bvLM0jrF1lX0UVKyMtNUYsk3ifkVrvOMUqCrGBAqiEKNI5A2v0xxCQIsQPo20T/WBlCEl8ShHCqgVIIvccWEJIMlaKEHTFOJ93VZdU3DTaluYR5JPRNkJZKLa1v5Fs8lKFsDZXLNqWDJp7RtsBRKQK0bbu30UZ2mofst1uTvp8Y7TRfe9AC+9pbbelu92cUl1ThbLKaESxG+W972G6n01hWEZuzZIPyyB5PmpvAhvXHKkLHsacu7D7yGkoPTjOFYJ8RiVGvOob1O0UYpEON0eG1zs+x3vLxFAd8HD0H6A9a7DDX1GlXdYuJr2EAnINMkRaHZJTJDt7KI/8usSI4Txfh2b3mC2GYmo0MHgynV3AfKvM9Tl/n67/GpWntH0+e5oohSB/Ubk/O3QJeaPN6fMu2Iv6fjzZuopCYpR+Y4ajyPOP7QW+w0xEMenq8UERPY3Tb5bASdOkz3eomo0Zs8nkKrF5RYC7SArQdUpWRIy+XyZT0SUGhX2IBVjFUh1hHOAZa9tibeFVrTpY9skv2AGUIj1HFbjnZpWFILEYFOEJxC+RrBIMvsxMkjMOx3Ecx3Ecx3EcFf8A6SChkbMgmJkAAAAASUVORK5CYII='></img>
                                <span className={styles.defaults_words}>
                                    请输入关键字
                                </span>
                            </div>
                        </div>
                    </section>
                    {/* 搜索框结束 */}
                    {/* 首页内容开始 */}
                    <div className={styles.home_content}>
                        {/* 轮播图开始 */}
                        <section className={styles.swiper_warp} style={{touchAction: 'pan-y'}}>
                            <Carousel
                            autoplay={true}
                            infinite
                            >
                            {this.state.swiper_list.map((item,i) => (
                            <a
                            key={i}
                            href={item.link}
                            style={{
                            display: "inline-block",
                            width: "100%",
                            height: this.state.imgHeight,
                            touchAction:'pan-y'
                            }}
                            >
                            <img
                            src={item.src+'?x-oss-process=image/resize,w_750'}
                            alt={item.link}
                            style={{ width: "100%", verticalAlign: "top" }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event("resize"));
                                this.setState({ imgHeight: "auto" });
                            }}
                            />
                            </a>
                                ))}
                            </Carousel>
                        </section>
                        {/* 轮播图结束 */}
                        {/* 快捷入口开始 */}
                        <section className={styles.quick_warp}>
                            <ul className={styles.quick_inner}>
                                {this.state.quickWarp.map((v,i)=>{
                                    return (
                                        <li key={i} className={styles.quick_item+" "+(parseInt(i/5)? styles.hasmargin : '')}
                                        
                                        >
                                            <img src={v.src+'?x-oss-process=image/resize,w_80'}></img>
                                            <p style={{color:"rgb(102,102,102)"}}>{v.entryName}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                        {/* 快捷入口结束 */}
                        {/* 海报开始 */}
                        <section className={styles.full_warp}>
                            <a hreh={this.state.always.link}>
                                <img src={this.state.always.src+'?x-oss-process=image/resize,w_750'}></img>
                            </a>
                        </section>
                        {/* 海报结束 */}
                        {/* 部分商品开始 */}
                        <section className={styles.four_place_content}>
                            {/* 第一部分商品开始 */}
                            <section className={styles.four_place_warp}>
                                <section className={styles.four_base}>
                                    <div className={styles.layout_item}>
                                        <title>
                                            <div className={styles.main_title}>
                                                <h3>{this.state.title1.titleConfig? this.state.title1.titleConfig.title :""}</h3>
                                                <span className={styles.tag + " " + styles.cutdown}>
                                                    <span className={styles.space}>{this.state.title1.activityInfo? this.state.title1.activityInfo.homeDescribe :""}</span>
                                                    <span>
                                                        {/* 倒计时部分开始 */}
                                                        <div className={styles.time_box}>
                                                            {this.getTime()}
                                                        </div>
                                                        {/* 倒计时部分结束 */}
                                                    </span>
                                                </span>
                                            </div>
                                            <p className={styles.sub_title}>{this.state.title1.titleConfig? this.state.title1.titleConfig.subTitle :""}</p>
                                        </title>
                                        <div className={styles.goods_warp}>
                                        
                                            {this.state.title1.skuInfo? this.state.title1.skuInfo.map((v,i)=>{
                                                // console.log(v)
                                                return (
                                                    <div className={styles.goods_item} key={i}>
                                                        <figure>
                                                            <img src={v.images} lazy='loaded'></img>
                                                        </figure>
                                                        <div className={styles.info}>
                                                            <h4>{v.skuTitle}</h4>
                                                            <p className={styles.goods_price}>
                                                                <span className={styles.discont}>¥{parseFloat(v.discountPrice)}</span>
                                                                <span className={styles.orignal}>
                                                                    ¥{parseFloat(v.originalPrice)}
                                                                </span>
                                                            </p>
                                                        </div>
                                                        
                                                    </div>
                                                )
                                            }) :''}
                                        </div>
                                    </div>
                                    <div className={styles.layout_item}>
                                        <title>
                                            <div className={styles.main_title}>
                                                <h3>
                                                    {this.state.title2.titleConfig? this.state.title2.titleConfig.title :""}
                                                </h3>
                                                <span className={styles.tag }>
                                                    <span style={{color: "rgb(151, 204, 78)",border: "1px solid rgb(151, 204, 78)"}} className={styles.describe}>{this.state.title2.titleConfig? this.state.title2.titleConfig.promotionTitle :""}</span>
                                                </span>
                                            </div>
                                            <p className={styles.sub_title}>{this.state.title2.titleConfig? this.state.title2.titleConfig.subTitle :""}</p>
                                        </title>
                                        <div className={styles.goods_warp}>
                                        
                                            {this.state.title2.skuInfo? this.state.title2.skuInfo.map((v,i)=>{
                                                // console.log(v)
                                                return (
                                                    <div className={styles.goods_item} key={i}>
                                                        <figure>
                                                            <img src={v.images} lazy='loaded'></img>
                                                        </figure>
                                                        <div className={styles.info}>
                                                            <h4>{v.skuTitle}</h4>
                                                            <p className={styles.goods_price}>
                                                                <span className={styles.discont}>¥{parseFloat(v.discountPrice)}</span>
                                                                <span className={styles.orignal}>
                                                                    ¥{v.originalPrice.substring(0,v.originalPrice.length-3)}
                                                                </span>
                                                            </p>
                                                        </div>
                                                        
                                                    </div>
                                                )
                                            }) :''}
                                        </div>
                                    </div>
                                </section>
                            </section>
                            {/* 第一部分商品结束 */}
                            {/* 第二部分商品开始 */}
                            <section className={styles.four_place_warp}>
                                <section className={styles.four_base}>
                                    <div className={styles.layout_item}>
                                        <title>
                                            <div className={styles.main_title}>
                                                <h3>{this.state.title3.titleConfig? this.state.title3.titleConfig.title :""}</h3>
                                                <span className={styles.tag }>
                                                    <span style={{color: "rgb(151, 204, 78)",border: "1px solid rgb(151, 204, 78)"}}>{this.state.title3.titleConfig? this.state.title3.titleConfig.promotionTitle :""}</span>
                                                </span>
                                            </div>
                                        </title>
                                        <div className={styles.goods_warp} style={{flexDirection:"row"}} >
                                        
                                            {this.state.title3.skuInfo? this.state.title3.skuInfo.map((v,i)=>{
                                                // console.log(v)
                                                return (
                                                    <div className={styles.goods_item1} key={i}>
                                                        <figure>
                                                            <img src={v.images} lazy='loaded'></img>
                                                        </figure>
                                                        
                                                        {/* <h4>{v.skuTitle}</h4> */}
                                                        <p style={{textAlign:'center',width:"71px"}} className={styles.goods_price}>
                                                            <span className={styles.discont}>¥{parseFloat(v.discountPrice)}</span>
                                                            
                                                        </p>
                                                        
                                                        
                                                    </div>
                                                )
                                            }) :''}
                                        </div>
                                    </div>
                                    <div className={styles.layout_item}>
                                        <title>
                                            <div className={styles.main_title}>
                                                <h3>{this.state.title4.titleConfig? this.state.title4.titleConfig.title :""}</h3>
                                                <span className={styles.tag }>
                                                    <span style={{color: "rgb(14, 11, 243)",border: "1px solid rgb(14, 11, 243)"}}>{this.state.title4.titleConfig? this.state.title4.titleConfig.promotionTitle :""}</span>
                                                </span>
                                            </div>
                                        </title>
                                        <div className={styles.goods_warp} style={{flexDirection:"row"}}>
                                        
                                            {this.state.title4.skuInfo? this.state.title4.skuInfo.map((v,i)=>{
                                                // console.log(v)
                                                return (
                                                    <div className={styles.goods_item1} key={i}>
                                                        <figure>
                                                            <img src={v.images} lazy='loaded'></img>
                                                        </figure>
                                                        
                                                        {/* <h4>{v.skuTitle}</h4> */}
                                                        <p className={styles.goods_price} style={{textAlign:'center',width:"71px"}}>
                                                            <span className={styles.discont}>¥{parseFloat(v.discountPrice)}</span>
                                                            <span className={styles.orignal}>
                                                                ¥{parseFloat(v.originalPrice)}
                                                            </span>
                                                        </p>
                                                    </div>
                                                )
                                            }) :''}
                                        </div>
                                    </div>
                                </section>
                            </section>
                            {/* 第二部分商品结束 */}
                            {/* 第三部分商品开始 */}
                            <section className={styles.four_place_warp}>
                                <section className={styles.four_base}>
                                    {this.state.list ? this.state.list.map((v,i)=>{
                                        return (
                                            <div className={styles.layout_item} key={i}>
                                                <title>
                                                    <h3 style={{color: "rgb(51, 51, 51)"}}>{v.titleConfig.title}</h3>
                                                    <span className={styles.tag1} style={{color:v.titleConfig.promotionTitleColor,border:"1px solid"+ v.titleConfig.promotionTitleColor}}>
                                                        <span>{v.titleConfig.promotionTitle}</span>
                                                    </span>
                                                </title>
                                                <div className={styles.goods_warp}>
                                                    <div className={styles.goods_item1}>
                                                        <figure>
                                                            <img src={v.skuInfo[0].images}></img>
                                                        </figure>
                                                        <div className={styles.goods_price} style={{textAlign:'center',width:"71px"}}>
                                                            {v.skuInfo[0].discountPrice == v.skuInfo[0].originalPrice ? <span>¥{parseFloat(v.skuInfo[0].discountPrice)}</span> : <p><span className={styles.discont}>¥{parseFloat(v.skuInfo[0].discountPrice)}</span><span className={styles.orignal}>¥{parseFloat(v.skuInfo[0].originalPrice)}</span></p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) : ''}
                                </section>
                            </section>
                            {/* 第三部分商品结束 */}
                        </section>
                        {/* 部分商品结束 */}
                        <section className={styles.has_margin_bottom}></section>
                        <section className={styles.has_margin_top}></section>
                        {/* 商城热销排行开始 */}
                            <GoodsWarp></GoodsWarp>
                        {/* 商城热销排行结束 */}
                        <section className={styles.has_margin_bottom}></section>
                        <section className={styles.has_margin_top}></section>
                        {/* ImgWarp开始 */}
                            <ImgWarp></ImgWarp>
                        {/* ImgWarp结束 */}
                            {/* <GoodsRow data={this.props.Digital}></GoodsRow> */}
                        {/* <section className={styles.has_margin_bottom}></section>
                        <section className={styles.has_margin_top}></section> */}
                            {/* <GoodsRow data={this.props.Electric}></GoodsRow>  */}
                        {/* <section className={styles.has_margin_bottom}></section>
                        <section className={styles.has_margin_top}></section> */}
                            {/* <GoodsRow data={this.props.Kitchenware}></GoodsRow>  */}
                        {/* <section className={styles.has_margin_bottom}></section>
                        <section className={styles.has_margin_top}></section>
                            <GoodsRow data={this.props.Kitchenware}></GoodsRow>  */}
                            
                        {/* full-img开始 */}
                            <section className={styles.full_cloumn}>
                                {/* {console.log(this.state)} */}
                                {this.state.full_img != []? this.state.full_img.map((v,i)=>{
                                    return (
                                        // https://resource.smartisan.com/resource/f895257e7fc46efd688ed0e860109898.png?x-oss-process=image/resize,w_375/format,webp
                                        <div key={i}>

                                            <img src={v.src + "?x-oss-process=image/resize,w_375"}></img>
                                        </div>
                                    )
                                }) : ' hahaha'}
                            </section>
                        {/* full-img结束 */}
                        <section className={styles.has_margin_bottom}></section>
                        <section className={styles.has_margin_top}></section>
                        {/* 首页商品列表开始 */}
                            <List loading={this.state.loading} page={this.state.page} goodsItem={this.props.goodsItem} goodsWater1={this.props.goodsWater1}></List>
                        {/* 首页商品列表结束 */}
                    </div>
                    {/* 首页内容结束 */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        // 数码热销
        Digital:state.getIn(['goodsReducer','Digital']).toJS(),
        // 电器热销
        Electric:state.getIn(['goodsReducer','Electric']).toJS(),
        // 厨具热销
        Kitchenware:state.getIn(['goodsReducer','Kitchenware']).toJS(),
        // 超然品推荐
        Detachment:state.getIn(['goodsReducer','Detachment']).toJS(),
        goodsItem:state.getIn(['goodsReducer','goodsItem']).toJS(),
        goodsWater1:state.getIn(['goodsReducer','goodsWater1']).toJS(),
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        goodsData:function(){
            return axios.get('/mobile/new/home?channel_id=1002').then(res=>{
                // console.log(res.data)
                dispatch(GoodsROWData(res.data))
            })
        },
        goodsWater:function(page){
            // page = 1
            return axios.get('/mobile/waterfall?page='+page+'&pageSize=20').then(res=>{
                // console.log(res.data)
                dispatch(goodsWater(res.data))
            })
        }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))
// export default connect(null,null)(withRouter(Home))
