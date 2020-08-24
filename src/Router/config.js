// import Home from '../components/Home/Home'
import List from '../components/list/List'
import SearchBar from '../components/SearchBar/SearchBar'
import Detail from '../components/Datail'


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
    }
]


export default routes
