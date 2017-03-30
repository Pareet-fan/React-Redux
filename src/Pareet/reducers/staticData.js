import { ADDSTATICDATA , DELETESTATICDATA } from '../actions/actionType'


//初始化state



let list = [
        { news : '习近平总书记2013-2017两会时间全纪实' },
        { news : '习近平两会足迹 全国人大五次会议15日闭幕' },
        { news : '今年总理记者会创20年之"最" 揭总理之"强"' },
        { news : '韩媒:两名韩国牧师在中国被捕 涉嫌协助"脱北者"' }
    ]
//添加静态数据
export const staticData = ( state = list , action ) =>{
    switch(action.type){
        case ADDSTATICDATA : 
            return [...state,action.txt]
        case DELETESTATICDATA :
            state.splice(action.id, 1)
            return [...state]
        default :
            return state
    }
}



