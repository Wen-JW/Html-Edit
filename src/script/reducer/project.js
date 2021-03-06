/*
 * @Author: WenJW
 * @Date: 2018-07-27 16:57:24
 * @Last Modified by: WenJW
 * @Last Modified time: 2018-08-20 17:50:23
 * @description
 */
import Golbal from './global'

const defaultState = {
  info: {},
  path: {},
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case 'PROJECT_INFO':
      return {
        ...state,
        info: {
          hidden: false,
          ...state.info,
          ...action.data
        },
      }
    case 'PROJECT_PATH':
      return {
        ...state,
        path: {
          ...state.path,
          ...action.data
        },
      }
    default:
      return state
  }
}