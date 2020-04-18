/*
 * @author: 殷鹏飞
 * @Date: 2020-04-17 19:17:29
 * @information: 创建store的主文件
 */
import {createStore} from 'redux'
import reducer from './reducer.js'

const store = createStore(reducer)


export default store;