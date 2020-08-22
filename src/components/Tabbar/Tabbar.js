import React,{useState} from 'react'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import  './Tabbar.css'

 const MyTabBar =(props)=>{
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
        <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
            <div style={{height:"calc(100vh - 2.7rem)",overflowY:"scroll"}}>{props.children}</div>
            <TabBar
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
            </TabBar>
        </div>
    )

}
export default withRouter(MyTabBar)
