// import Home from '../components/Home/Home'
import List from '../components/list/List'
import SearchBar from '../components/SearchBar/SearchBar'
import Detail from '../components/Datail'
import Home from '../components/Home/Home'
import Category from '../components/Category/Category'
import Cart from '../components/Cart/Cart'
import Regist from '../components/My/regist/Regist'
const routes = [
    {
        path:'/list',
        component:List,
        children:[]
    },
    {
        path:'/search',
        component:SearchBar,
        children:[]
    },
    {
        path:'/detail',
        component:Detail,
        children:[]
    },
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
