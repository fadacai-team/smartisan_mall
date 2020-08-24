// import Home from '../components/Home/Home'
import List from '../components/list/List'
import SearchBar from '../components/SearchBar/SearchBar'


const routes = [
   {
       path:'/list',
       component:List,
       children:[]
   },{
       path:'/search',
       component:SearchBar,
       children:[]
   }
]


export default routes
