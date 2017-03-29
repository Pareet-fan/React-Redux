import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore ,applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import './index.scss'

import createLogger from 'redux-logger';  //中间件
import thunk from 'redux-thunk';        //中间件

import 'whatwg-fetch'    
import 'es6-promise' 

import Router from './router.js'

import api from './url.js'

/*异步获取数据--fetch*/

class List extends Component{

    constructor(props){
        super(props);
        // this.state = {
        //     disabled : true
        // }
    }

    _onClick(){
        // const url = " https://cnodejs.org/api/v1/user/alsotang";
        // const url = "https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312";
        fetch(api.fetchList.url,api.fetchList.options)
            .then(
                (response) => {
                    return response.json()
                }
            ).then(
                (data) =>{
                    console.log(data)
                }
            )

    }

    componentDidMount (){
        this.props._fetchListData();  //初始化就调用获取列表数据方法
    }

    render(){
        const { lists , _fetchPosts , _refreshData , obtDatas} = this.props;
        // console.log( obtDatas.data ? obtDatas.data : '')
        return (
            <div className="j-fetch">
                 <button type="button" onClick={() => _fetchPosts()}>加载数据</button>
                 <button type="button" onClick={() => _refreshData()}>清空数据</button>
                 <button type="button" onClick={this._onClick.bind(this)}>获取数据</button>
                 <ul className="numUl">
                     {
                         lists.map((item,index) =>{
                             return <li key={index}>
                                 {
                                     item >= 10000000 ? (item/10000000).toFixed(2) + '千万' : (item > 1000 ? item/1000 + '千' : item)
                                 }
                             </li>
                         })
                     }
                 </ul>
                 <table>
                     <thead>
                         <tr>
                             <td>ID</td><td>活动名称</td><td>活动经费</td><td>开始日期</td><td>结束日期</td><td>是否好玩</td><td>是否已缴费</td><td>操作</td>
                         </tr>
                     </thead>
                     <tbody>
                         {
                           obtDatas.data ? obtDatas.data.map((items,index) =>{
                               return <tr key={index}>
                                   <td>{ items.id }</td>
                                   <td style={{'width':'140px'}}>{ items.title }</td>
                                   <td>{ items.visit_count>10000 ? (items.visit_count/10000).toFixed(2) + '万' :(items.visit_count>1000 ? (items.visit_count/1000).toFixed(2) + '千' : items.visit_count) }</td>
                                   <td style={{'width':'180px'}}>{ items.create_at }</td>
                                   <td style={{'width':'140px'}}>{ items.last_reply_at }</td>
                                   <td style={{'width':'80px'}}>{ items.good ? '是' : '否' }</td>
                                   <td style={{'width':'100px'}}>{ items.top ? '是' : '否' }</td>
                                   <td style={{'width':'160px'}}>删除</td>
                               </tr>
                           }) : null
                         }
                     </tbody>
                 </table>
                 <hr/>
                 <dl>
                     {
                         Router.MENUDATA.map((item,index) =>{
                            return <dt key={index}>
                                <a href="#/">{ item.name }</a>
                                {
                                    item.child ? item.child.map((data,key) =>{
                                        return <div style={{"paddingLeft":"20px"}} key={key}>
                                            <a>{ data.name }</a>
                                            {
                                                data.child ? data.child.map((childData,indexKey) =>{
                                                    return <div style={{"paddingLeft":"20px"}} key={indexKey}><a>{ childData.name }</a></div>
                                                }) : null
                                            }
                                        </div>
                                    }) : null
                                }
                            </dt>
                        })
                     }
                 </dl>
            </div>
        )
    }
}


//action
const GETSUCCESS = 'GETSUCCESS';
const REFRESHDATA = 'REFRESHDATA';
const GETLISTDATA = 'GETLISTDATA';

//加载数据
const getSuccess = (arry) => {
    return {
        type: GETSUCCESS,
        arry
    }
}

//清除加载的数据
const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

//获取列表数据
const getListData = (obt) =>{
    return {
        type : GETLISTDATA,
        obt
    }
}


//调接口
const fetchPosts = () =>{
    // const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
    return dispatch => {
        return fetch(api.fetchPosts.url,api.fetchPosts.options)
            .then((res) => {return res.json()})
            .then((data) => {
                dispatch(getSuccess(data))
            }).catch((error) => { console.log(error.message) })
    }
}

//异步获取列表数据
const fetchListData = () =>{
    // const url = "https://cnodejs.org/api/v1/topics";
    return dispatch =>{
        return fetch(api.fetchListData.url,api.fetchListData.options)
            .then((res) =>{ return res.json()})
            .then((data) => {
                dispatch(getListData(data))
            }).catch((error) => { console.log(error.message) })
    }
}


//reducer
const initialState = {
    data: [],
    obtData : {}
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case GETSUCCESS :
            return Object.assign({}, state, { data: action.arry })
        case REFRESHDATA :
            return Object.assign({}, state, { data: [] })
        case GETLISTDATA : 
            return Object.assign({}, state, {obtData : action.obt})
        default : 
            return state
    }
}



//store
// const logger = createLogger();
const store = createStore(
     reducer,
     applyMiddleware(thunk)  //中间件
    //  applyMiddleware(thunk , logger)  //中间件
    
)


const mapStateToProps = (state) =>{
    return {
        lists : state.data,
        obtDatas : state.obtData
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        _fetchPosts : () =>{     //获取数组数据
            dispatch(fetchPosts())
        },
        _fetchListData : () =>{      //获取列表数据
            dispatch(fetchListData())
        },
        _refreshData : () =>{      //清除数据
            alert('确定清除数据？');
            dispatch(refreshData())
        }
    }
}



//connect
const GetList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)



ReactDOM.render(
    <Provider store={store}>
        <GetList/>
    </Provider>,
    document.getElementById('app')
)
