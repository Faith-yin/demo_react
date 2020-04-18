/*
 * @author: 殷鹏飞
 * @Date: 2020-04-17 19:17:05
 * @information: action创建者
 */
import {ADD, GET, DELETE, UPDATE} from './actionTypes.js'

// 整合 action 方法，方便调用和统一管理

const addItem = (val) => ({
  type: ADD,
  val
})


const getList = () => ({
  type: GET
})


const deleteItem = (val) => ({
  type: DELETE,
  val
})


const updateItem = (val) => ({
  type: UPDATE,
  val
})


export {
  addItem, //增加
  getList, //查看
  deleteItem, //删除
  updateItem, //修改
}


