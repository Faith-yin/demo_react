import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

// 整合 action 方法，方便调用和统一管理

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value  // ES6简写，原为：value: value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index  // ES6简写，原为：index: index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  getlist: data.thingsList
})

