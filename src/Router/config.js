import Home from '../components/Home/Home'
import Category from '../components/Category/Category'
import Cart from '../components/Cart/Cart'
import Regist from '../components/My/regist/Regist'
import SearchBar from '../components/SearchBar/SearchBar'
const routes = [
    {
        path:'/home',
        component:Home,
     
    },{
        path:'/category',
        component:Category,
       
    },{
        path:'/cart',
        component:Cart,
        
    },
    {
        path:'/my/regist',
        component:Regist,
    },{
        path:'/search',
        component:SearchBar
    }
]


export default routes
