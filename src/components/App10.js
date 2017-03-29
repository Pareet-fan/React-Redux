import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore ,applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import createLogger from 'redux-logger';  //中间件
import thunk from 'redux-thunk';        //中间件

import 'whatwg-fetch'    
import 'es6-promise' 

import './index.scss'


class Social extends Component{

    componentDidMount(){
        this.props._fetchList();
    }

    render(){
        const { lists } = this.props;
        const nowTime = new Date().getTime(); //现在的时间毫秒数
        return (
            <div className="j-Social">
                <h1>留言板</h1>
                <Lists lists={lists} nowTime={nowTime}/>
                <div className="navBar">
                    <a>主页</a>
                    <a>发表</a>
                    <a>我</a>
                </div>
            </div>
        )
    }
}

//主页列表数据
class Lists extends Component{
    render(){
        const { lists , nowTime } = this.props;
        return (
            <ul>
                {
                    lists ? lists.map((item,index) =>{
                        return (
                            <li key={index}>
                                <div style={{"overflow" : "hidden"}}>  
                                    <a className="avatarA"><img className="avatarImg" src={item.user.avatar}/></a>
                                    <p className="avatarP"><span>{ item.user.username }</span><span>
                                        {
                                            (nowTime - item.createAt)>=604800000 ? ((nowTime - item.createAt)/604800000).toFixed(0) + '周前':
                                                ((nowTime - item.createAt)>=86400000 ? ((nowTime - item.createAt)/86400000).toFixed(0) + '天前' : 
                                                    ((nowTime - item.createAt)>=1440000 ? ((nowTime - item.createAt)/3600000).toFixed(0) + '小时前' : 
                                                        ((nowTime - item.createAt)>=24000 ? ((nowTime - item.createAt)/60000).toFixed(0) + '分钟前' : 
                                                            ((nowTime - item.createAt)>=1000 ? ((nowTime - item.createAt)/1000).toFixed(0) + '秒前' :
                                                                (nowTime - item.createAt).toFixed(0) + '毫秒前')
                                                    )
                                                )
                                            )
                                        }                                           
                                    </span></p>
                                </div>
                                <h4>{ item.title }</h4>
                                <p>{ item.content }</p>
                                <div className="starCom">
                                    <span>点赞 { item.star.length }</span>
                                    <span>评论 { item.commentNum }</span>
                                </div>
                            </li>
                        )
                    }) : null
                }
            </ul>
        )
    }
}



//actions
const FETCHLIST = 'FETCHLIST';  

//获取列表
const fetchListAction = (data) =>{
    return {
        type : FETCHLIST,
        data
    }
}

//调接口
const fetchListFnc = () =>{
    return dispatch =>{
        const url = 'http://114.215.80.72:4545/article/fetchList';
        return fetch(url)
            .then((res) => {
                return res.json()
            }).then((data) =>{
                dispatch(fetchListAction(data))
            }).catch((error) =>{
                console.log(error.message)
            })
    }
}


const initialState = {
    list : []
}

//reducer
const fetchListReducer = (state = initialState , action) =>{
    switch(action.type){
        case FETCHLIST : 
            return Object.assign({},state,{list : action.data})
        default :
            return state
    }
}

//store
const store = createStore(
     fetchListReducer,
     applyMiddleware(thunk)  //中间件
    //  applyMiddleware(thunk , logger)  //中间件
)


const mapStateToProps = (state) =>{
    return {
        lists : state.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        _fetchList : () =>{
            dispatch(fetchListFnc())
        }
    }
}

const SocialApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Social)


ReactDOM.render(
   <Provider store={store}>
        <SocialApp/>
   </Provider>,
   document.getElementById('app') 
)


