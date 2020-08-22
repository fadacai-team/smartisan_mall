import Home from '../components/Home/Home'
import Category from '../components/Category/Category'
import Cart from '../components/Cart/Cart'
import My from '../components/My/My'

const routes = [
    {
        path:'/home',
        component:Home,
        children:[]
    },{
        path:'/category',
        component:Category,
        children:[]
    },{
        path:'/cart',
        component:Cart,
        children:[]
    },{
        path:'/my',
        component:My,
        children:[]
    }
]


export default routes
