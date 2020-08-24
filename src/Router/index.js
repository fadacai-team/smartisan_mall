import React from 'react'
import { Route } from 'react-router-dom'
// import Tabbar from '../components/Tabbar/Tabbar'

const RouterView = (props)=>{
    console.log(props.routes)
    return props.routes.map((item,index)=>{
        return <Route key={index} path={item.path} render={(routePorps)=>{
            // routePorps  路由元信息
            //判断当前的路由是否存在子路由
            if(item.children){
                return <item.component {...routePorps} routes={item.children}/>
            }else{
                return <item.component {...routePorps}/>

            }

        }}></Route>
    })
}

export default RouterView