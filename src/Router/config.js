
import Regist from '../components/My/regist/Regist'
import Order from "../components/My/order/Order"
import Details  from '../components/My/login/Details'
// import Evaluate  from '../components/My/order/Evaluate'
import Location from "../components/My/location/Location"
import Address from "../components/My/location/Address"
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
]


export default routes
