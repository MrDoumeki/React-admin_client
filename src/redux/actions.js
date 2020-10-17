import { Action,Dispatch } from 'redux'
import { SET_HEAD_TITLE,GET_USER_INFO,REMOVE_USER } from './action-types'
import { reqLogin } from '@/api/admin'
// import { setUser,removeUser } from '@/utils/auth'
// import { LoginUser } from '@/utils/auth'

export function setHeadTitle(headTitle){
    return {
        type:SET_HEAD_TITLE,
        data:headTitle
    }
}

export function getUserInfo(user){
    return {
        type:GET_USER_INFO,
        data:user
    }
}

export function logout(){
    // removeUser()
    return{
        type:REMOVE_USER,
        data:{}
    }
}


export function login(form){
    return async (dispatch) => {
        const res = await reqLogin(form)
        if(res) {
            const user = res.data.data
            // setUser(user)
            dispatch(getUserInfo(user))
        }else {

        }
    }
}