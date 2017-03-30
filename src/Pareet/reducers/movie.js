import { GETMOVIE } from '../actions/actionType'

//初始化state

const initialState = {
    data : {}
}

//获取本地json数据
export const movie = (state = initialState , action) =>{
    switch(action.type){
        case GETMOVIE : 
            return Object.assign( {} , state , { datas : action.data })
        default :
            return state
    }
}


