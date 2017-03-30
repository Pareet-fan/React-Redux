

import { INCREASE , DECREASE , RESET , GETBARDATA , ADDSTATICDATA , DELETESTATICDATA , PUBLISH , GETMOVIE } from './actionType.js'


import 'whatwg-fetch'    
import 'es6-promise' 


//actions
export const increase = (num) =>{      //+
    return {
        type : INCREASE,
        amount : num
    }
}

export const decrease = (num) =>{    //-
    return {
        type : DECREASE,
        amount : num
    }
}

export const reset = (num) =>{  //重置
    return {
        type : RESET
    }
}


const getBarData = (date) =>{  //获取动态数据
    return {
        type : GETBARDATA,
        date 
    }
}

export const addStaticData = (txt) =>{ //添加静态数据
    return {
        type : ADDSTATICDATA,
        txt
    }
}

export const deleteStaticData = (id) =>{  //删除静态数据
    return{
        type : DELETESTATICDATA,
        id
    }
}


export const fetchBarData = () =>{
    const url = "https://cnodejs.org/api/v1/topics";
    return (dispatch) =>{
        return fetch(url)
            .then((res) =>{
                return res.json()
            }).then((date) =>{
                if(date.success == true){
                   dispatch(getBarData(date)) 
                }
            }).catch((error) => { console.log(error.message) })
    }
}


const getMovie = (data) =>{ //获取电影
    return {
        type :　GETMOVIE,
        data
    }
}

export const fetchMovie = () =>{
    const url = 'http://localhost:8888/src/Pareet/data.json';
    return (dispatch) =>{
        return fetch(url)
        .then((res) =>{
            return res.json()
        }).then((data) =>{
            dispatch(getMovie(data))
        }).catch((error) => { console.log(error.message) })
    }
}

