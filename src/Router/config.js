import SearchBar from '../components/SearchBar/SearchBar'
import Detail from '../components/Datail'
import Regist from '../components/My/regist/Regist'
import GoodList from '../components/GoodsList/GoodsList'
import Order from '../components/Cart/Order'
const routes = [
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
        path:'/goodlist/:id',
        component:GoodList,
    },
    {
        path:'/order',
        component:Order,
    }

]

export default routes
