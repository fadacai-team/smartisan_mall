import React, { Component } from 'react'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Cart from './components/Cart/Cart'
import My from './components/My/My'
import Tabbar from './components/Tabbar/Tabbar'
import PageNotFind from './components/PageNotFind/PageNotFind'
import Regist from './components/My/regist/Regist'
import config from './Router/config'
import RouterView from './Router/index'
import './App.css'
import { 
    HashRouter as Router, 
    Route, 
    // Redirect 
} from 'react-router-dom'
export default class App extends Component {
    render() {
        return <div>
                <Router>
                    <Route exact path='/' render={()=><Tabbar><Home></Home></Tabbar>}></Route>
                    <Route exact path='/category' render={()=><Tabbar><Category></Category></Tabbar>}></Route>
                    <Route exact path='/cart' render={()=><Tabbar><Cart></Cart></Tabbar>}></Route>
                    <Route exact path='/my' render={()=><Tabbar><My></My></Tabbar>}></Route>
                    <Route exact path='/404' render={()=><PageNotFind></PageNotFind>}></Route>
                    {/* <Redirect to='/404'></Redirect> */}
                    {/* <Route exact path='/404' render={()=><PageNotFind></PageNotFind>}></Route> */}
                    {/* <Redirect to='/404'></Redirect> */}
                    {/* 加载/展示路由视图组件 */}
                    <RouterView routes={config}></RouterView>
                </Router>
                

            </div>
        
    }
}

