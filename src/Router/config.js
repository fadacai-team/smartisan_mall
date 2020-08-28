import SearchBar from '../components/SearchBar/SearchBar'
import Detail from '../components/Datail'
import Regist from '../components/My/regist/Regist'
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
    }
]


export default routes
