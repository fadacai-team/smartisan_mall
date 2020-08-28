import List from '../components/list/List'
import SearchBar from '../components/SearchBar/SearchBar'
import Detail from '../components/detail/Datail'
import Regist from '../components/My/regist/Regist'
import PreviewAll from '../components/detail/PreviewAll'
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
        path:'/my/regist',
        component:Regist,
    },
    {
        path:'/preview',
        component:PreviewAll
    }
]


export default routes
