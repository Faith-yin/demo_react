/*
 * @author: 殷鹏飞
 * @Date: 2020-04-17 14:13:27
 * @information: 路由配置
 */
import Home from '../views/Home.jsx'
import Add from '../views/Add.jsx'
import Detail from '../views/Detail.jsx'
import NotFound from '../views/NotFound.jsx'


const routeConfig = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/add",
    component: Add,
    exact: true,
  },
  {
    path: "/detail/:id",
    component: Detail,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },

]

export default routeConfig