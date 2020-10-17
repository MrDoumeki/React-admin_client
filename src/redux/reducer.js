import { combineReducers, Reducer } from 'redux'
// import { getUser } from '@/utils/auth'
import { SET_HEAD_TITLE, GET_USER_INFO, REMOVE_USER } from './action-types'
// import { ActionType } from './actions'
// import { LoginUser } from '@/utils/auth'

const headTitle = (state='', action) => {
    switch (action.type) {
        case SET_HEAD_TITLE:
            return action.data
        default:
            return state    
    }
}

// const initUser = getUser()
const initUser = ''

const user = (state = initUser, action) => {
    switch (action.type) {
        case GET_USER_INFO:
          return action.data
        case REMOVE_USER:
          return action.data
        default:
          return state
      }
}

const rootReducer = combineReducers({
    headTitle,
    user
  })


export default rootReducer  

