import List from '../components/list/List'
import SearchBar from '../components/SearchBar/SearchBar'
import Detail from '../components/Datail'
import Regist from '../components/My/regist/Regist'
import Order from "../components/My/order/Order"
import Details  from '../components/My/login/Details'
import Evaluate  from '../components/My/evaluate/Evaluate'
import Saled  from '../components/My/saled/Saled'
import Ticket  from '../components/My/ticket/Ticket'
import Location from "../components/My/location/Location"
import Address from "../components/My/location/Address"
import GoodList from '../components/GoodList/GoodList'
import Order from '../components/Cart/Order'
const routes = [
  
    {
        path:'/my/regist',
        component:Regist,
    },
    {
        path:'/my/order',
        component:Order,
    },
    {
        path: '/my/details',
        component:Details
    },
    {
        path: '/my/location',
        component:Location
    },
    {
        path: '/my/Address',
        component:Address
    },
    {
        path: '/my/evaluate',
        component:Evaluate
    },
    {
        path: '/my/saled',
        component:Saled
    },
    {
        path: '/my/ticket',
        component:Ticket
    },
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
        path:'/my/regist',
        component:Regist,
    },
    {
        path:'/goodlist',
        component:GoodList,
    },
    {
        path:'/order',
        component:Order,
    }

]

export default routes
