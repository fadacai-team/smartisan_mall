// import Home from '../components/Home/Home'
import List from '../components/list/List'
import SearchBar from '../components/SearchBar/SearchBar'
import Detail from '../components/Datail'
import Home from '../components/Home/Home'
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
