import Home from '../components/Home/Home'
import Category from '../components/Category/Category'
import Cart from '../components/Cart/Cart'
import My from '../components/My/My'
import Regist from '../components/My/regist/Regist'
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
    },
]


export default routes
