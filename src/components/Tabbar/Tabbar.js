import React,{useState} from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import  './Tabbar.css'

 const MyTabBar =(props)=>{
    const [selectedTab, setSelectedTab] = useState('')
    const [hidden, setHidden] = useState(false)
    const [tabBar, setTabBar] = useState([
        {
            title:'首页',
            pageText:'Home',
            icon:<i className="icon icon_home"></i>,
            selectedIcon:<i className="icon icon_home_o"></i>,
            path:'/'
        },{
            title:'分类',
            pageText:'Category',
            icon:<i className="icon icon-category"></i>,
            selectedIcon:<i className="icon icon-category-o"></i>,
            path:'/category'
        },{
            title:'购物车',
            pageText:'Cart',
            icon:<i className="icon icon-cart"></i>,
            selectedIcon:<i className="icon icon-cart-o"></i>,
            path:'/cart'
        },{
            title:'个人中心',
            pageText:'My',
            icon:<i className="icon icon-my"></i>,
            selectedIcon:<i className="icon icon-my-o"></i>,
            path:'/my'
        }
    ])
    return (
        <div id="tabbarrrrrrrrrrr" style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
            <div style={{height:"calc(100vh - 2.7rem)",overflowY:"scroll"}}>{props.children}</div>
            <TabBar id="RRRRRRRRRRRRR"
            unselectedTintColor="#9a9a9a"
            tintColor="#d44d44"
            barTintColor="white"
            hidden={hidden}
            >
                {
                    tabBar.map((v,i)=>{
                        return <TabBar.Item
                                    title={v.title}
                                    key={v.pageText}
                                    icon={v.icon}
                                    selectedIcon={v.selectedIcon}
                                    selected={props.location.pathname===v.path}
                                    onPress={() => {
                                        props.history.push(v.path);
                                    }}
                                    >
                                </TabBar.Item>
                    })

                }


                {/* <TabBar.Item
                    icon={
                        <i className="icon icon-category"></i>
                        }
                        selectedIcon={
                            <i className="icon icon-category-o"></i>
                            }
                            title="分类"
                            key="category"
                            selected={props.location.pathname==="/category"}
                            onPress={() => {
                                props.history.push("/category");
                            }}
                            data-seed="logId1"
                            >
            
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <i className="icon icon-cart"></i>
                        }
                        selectedIcon={
                            <i className="icon icon-cart-o"></i>
                            }
                            title="购物车"
                            key="cart"
                            selected={props.location.pathname==="/cart"}
                            onPress={() => {
                                props.history.push("/cart");
                            }}
                            >
                
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <i className="icon icon-my"></i>
                    }
                    selectedIcon={
                        <i className="icon icon-my-o"></i>
                    }
                    title="个人中心"
                    key="my"
                    selected={props.location.pathname==="/my"}
                    onPress={() => {
                        props.history.push("/my");
                    }}
                >

                </TabBar.Item> */}
            </TabBar>
        </div>
    )

}
export default withRouter(MyTabBar)


// import React,{useState} from 'react'
// import styles from './Tabbar.module.scss'
// export default function TabBar() {
//     let [navs,setNavs] = useState([
//         {
//             id:1,
//             text:"首页",
//             selected:true,
//             icon:styles.icon_home,
//             selectedIcon:styles.icon_home_o
        
//         },
//         {id:2,text:"分类",selected:false},
//         {id:3,text:"购物车",selected:false},
//         {id:4,text:"个人中心",selected:false},
//     ])
//     return (
//         <div>
//             {}
//             <div className="tabbar">
//                 {navs.map((v,i)=>{
//                     return (
//                     <section key={v.id} className='tabbar_item'>
//                         <i className={styles.icon + " " + v.selected ? v.selectedIcon:v.icon}></i>
//                     <p>{v.text}</p>
//                     </section>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
