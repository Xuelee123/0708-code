// 包含了多个同步及异步的action的creator---包含了多个生产action对象的工厂函数
// 引入action的type
import { SAVE_USER, REMOVE_USER, UPDATE_TITLE, GET_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DEL_CATEGORY ,GET_ROLES,ADD_ROLE,DEL_ROLE} from './action-types.js'
// 引入接口文件
import { reqCategories, reqAddCategory, reqUpdateCategory, reqDeleteCategory, reqGetRoles ,reqAddRole,reqDelRole} from '../api/index.js'
// 保存用户信息(的同时也要保存token)
export const saveUser = (value) => ({ type: SAVE_USER, data: value })
// 删除用户信息(的同时也要删除token)
export const removeUser = () => ({ type: REMOVE_USER })
// 更新title的信息
export const updateTitle = (value) => ({ type: UPDATE_TITLE, data: value })

// 获取分类信息数据的同步action对象
export const getCategoriesSuccess = (categories) => ({ type: GET_CATEGORIES, data: categories })
// 获取分类信息数据的异步action函数
export const getCategories = () => {
  return async (dispatch) => {
    const result = await reqCategories()
    if (result.status === 0) {
      // 请求接口成功后,有了结果之后,再分发同步的action
      dispatch(getCategoriesSuccess(result.data))
    }

  }
}

// 添加分类信息的数据的同步action对象
export const addCategorySuccess = (category) => ({ type: ADD_CATEGORY, data: category })
// 添加分类信息的数据的异步action函数
export const addCategory = (categoryName) => {
  return async (dispatch) => {
    const result = await reqAddCategory(categoryName)
    if (result.status === 0) {
      // 成功了,就是有结果了
      dispatch(addCategorySuccess(result.data))
    }
  }
}


// 更新分类信息的数据的同步action对象
export const updateCategorySuccess = (category) => ({ type: UPDATE_CATEGORY, data: category })
// 更新分类信息的数据的异步action函数
export const updateCategory = (categoryId, categoryName) => {
  return async (dispatch) => {
    // 发送请求
    const result = await reqUpdateCategory(categoryId, categoryName)
    if (result.status === 0) {
      dispatch(updateCategorySuccess(result.data))
    }
  }
}


// 删除分类信息的数据的同步action对象
export const delCategorySuccess = (categoryId) => ({ type: DEL_CATEGORY, data: categoryId })
// 删除分类信息的数据的异步action函数
export const delCategory = (categoryId) => {
  return async (dispatch) => {
    // 发送请求
    const result = await reqDeleteCategory(categoryId)
    if (result.status === 0) {
      dispatch(delCategorySuccess(result.data))
    }
  }
}


// 获取角色数据---同步action
export const getRolesSuccess = (roles) => ({ type: GET_ROLES, data: roles })
// 获取角色数据---异步action
export const getRoles = () => {
  return async (dispatch) => {
    const result = await reqGetRoles()
    if (result.status === 0) {
      dispatch(getRolesSuccess(result.data))
    }
  }
}


// 添加角色数据---同步action
export const addRoleSuccess=(role)=>({type:ADD_ROLE,data:role})
// 添加角色数据---异步action
export const addRole=(name)=>{
  return async (dispatch)=>{
    // 发送异步请求
    const result=await reqAddRole(name)
    if(result.status===0){
      dispatch(addRoleSuccess(result.data))
    }
  }
}

// 删除角色数据--同步action
export const delRoleSuccess=(roleId)=>({type:DEL_ROLE,data:roleId})
// 删除角色数据--异步action
export const delRole=(roleId)=>{
  return async (dispatch)=>{
    const result=await reqDelRole(roleId)
    if(result.status===0){
      dispatch(delRoleSuccess(roleId))
    }
  }
}