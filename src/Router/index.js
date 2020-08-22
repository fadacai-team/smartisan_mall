import React from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Tabbar from '../components/Tabbar/Tabbar'

const RouterView = (props)=>{
    return props.Routes.map((item,index)=>{
        return <Route key={index} path={item.path} render={}></Route>
    })
}
