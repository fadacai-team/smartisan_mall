import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import styles from "./Nav.module.scss"
import OrderDetails from "./OrderDetails"

const data = [
    {text:"全部",path:"/my/order" },
    {text:"待付款",path:"/my/order/pay" },
    {text:"待收货",path:"/my/order/collect" },
    {text:"已完成",path:"/my/order/finshed" },
]

 class Nav extends Component {
    constructor(props){
        super(props);
        this.state={
            current:0
        }
    }
    activeColor = (index) => {
        // 跳转路径
       this.setState({current:index})
    
    }

    componentDidMount(){
        // this.setState({current:this.props.current})
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.itemWrap}>
                      {
                          data.map((item,index)=>{
                          return   <div className={styles.navItem+" "+(index==data.length-1?styles.borderNone:"")+" "+(this.state.current == index ? styles.active : "")} onClick={this.activeColor.bind(this,index)} key={item.text}>{item.text}</div>
                          })
                      }
                     
                       
                    </div>
                </div>
                <div className={styles.content}>
                    {                     
                       shopListData[this.state.current].map(item=>{
                           return  <OrderDetails data={item}>

                           </OrderDetails>
                       })
                        
                    }
                  
                   
                </div>
            </div>
        )
    }
}
let shopListData =[
    [
        {orderTime:"2020-08-25  11:44",title:"espoir/艾丝珀 盈润光彩粉底液（2020升级版）（25ML，象牙色)",price:178,count:1,payType:"待付款",img:"https://resource.smartisan.com/resource/4a633c1de4ba6880f88c8299d9967fa1.jpg?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-08-24  09:44",title:"阿甘正馔甘小乐果干坚果仁60g（1包）",price:16.9,count:1,payType:"待付款",img:"https://resource.smartisan.com/resource/8407bd8a1c74d23edbf2d1f7613380c4.jpg?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-08-26  13:44",title:"坚果 Pro 3 足迹保护套 莫里斯·詹姆士·麦当劳出生（莫里斯·詹姆士·麦当劳出生）",price:49,count:1,payType:"待付款",img:"https://resource.smartisan.com/resource/31c8be42fbbabad10490835d953be356.jpg?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-07-25  11:44",title:"Smartisan  颈挂蓝牙耳机",price:159,count:1,payType:"已完成",img:"https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_242/format,webp"},
        {orderTime:"2020-07-24  09:44",title:"Smartisan 真无线TWS蓝牙耳机",price:99,count:1,payType:"已完成",img:"https://resource.smartisan.com/resource/e991f946530a7cfab3d9670dd8b1371b.png?x-oss-process=image/resize,w_242/format,webp"},
        {orderTime:"2020-06-26  13:44",title:"坚果快充移动电源 20000mAh（45W MAX)",payType:"已完成",price:249,count:1,img:"https://resource.smartisan.com/resource/de1274f4c70fe3768417bb0454320089.png?x-oss-process=image/resize,w_242/format,webp"},
        {orderTime:"2020-08-27  11:44",title:"坚果 QuickCharge 4+ 快速充电器",price:98,count:2,payType:"待收货",img:"https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-08-27  09:44",title:"落栗 卫衣 连帽 多普勒效应",price:249,count:2,payType:"待收货",img:"https://resource.smartisan.com/resource/3218a971d4d837c31e10fa738ef7f91f.png?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-08-27  13:44",title:"爱仕达酷厨三件套PH03Z6TG",price:450,count:1,payType:"待收货",img:"https://resource.smartisan.com/resource/1a994cbd53ca936706ff2532f4a038a0.jpg?x-oss-process=image/resize,w_180/format,webp"},
        
    ],
    
    [
        {orderTime:"2020-08-25  15:44",title:"espoir/艾丝珀 盈润光彩粉底液（2020升级版）（25ML，象牙色)",price:178,count:1,payType:"待付款",img:"https://resource.smartisan.com/resource/4a633c1de4ba6880f88c8299d9967fa1.jpg?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-08-24  09:44",title:"阿甘正馔甘小乐果干坚果仁60g（1包）",price:16.9,count:1,payType:"待付款",img:"https://resource.smartisan.com/resource/8407bd8a1c74d23edbf2d1f7613380c4.jpg?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-08-26  13:44",title:"坚果 Pro 3 足迹保护套 莫里斯·詹姆士·麦当劳出生（莫里斯·詹姆士·麦当劳出生）",price:49,count:1,payType:"待付款",img:"https://resource.smartisan.com/resource/31c8be42fbbabad10490835d953be356.jpg?x-oss-process=image/resize,w_180/format,webp"},
    ],
    [
        {orderTime:"2020-08-27  11:44",title:"坚果 QuickCharge 4+ 快速充电器",price:98,count:2,payType:"待收货",img:"https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-08-27  09:34",title:"落栗 卫衣 连帽 多普勒效应",price:249,count:2,payType:"待收货",img:"https://resource.smartisan.com/resource/3218a971d4d837c31e10fa738ef7f91f.png?x-oss-process=image/resize,w_180/format,webp"},
        {orderTime:"2020-08-27  17:43",title:"爱仕达酷厨三件套PH03Z6TG",price:450,count:1,payType:"待收货",img:"https://resource.smartisan.com/resource/1a994cbd53ca936706ff2532f4a038a0.jpg?x-oss-process=image/resize,w_180/format,webp"},
    ],
    [
        {orderTime:"2020-07-25  11:44",title:"Smartisan  颈挂蓝牙耳机",price:159,count:1,payType:"已完成",img:"https://resource.smartisan.com/resource/a5b6bf1f38fb88dceeb1e917bec288da.jpg?x-oss-process=image/resize,w_242/format,webp"},
        {orderTime:"2020-07-24  09:44",title:"Smartisan 真无线TWS蓝牙耳机",price:99,count:1,payType:"已完成",img:"https://resource.smartisan.com/resource/e991f946530a7cfab3d9670dd8b1371b.png?x-oss-process=image/resize,w_242/format,webp"},
        {orderTime:"2020-06-26  13:44",title:"坚果快充移动电源 20000mAh（45W MAX)",payType:"已完成",price:249,count:1,img:"https://resource.smartisan.com/resource/de1274f4c70fe3768417bb0454320089.png?x-oss-process=image/resize,w_242/format,webp"},
    ]
]
export default withRouter(Nav)