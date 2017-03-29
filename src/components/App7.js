import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import './index.scss'

import 'whatwg-fetch'    
import 'es6-promise' 


//todo list
//containers
//最大父级
class Todo extends Component{
    handleKeyUp(e){
        if (e.keyCode === 13) {
            let text = {
                news : e.target.value
            };
            if (!text) return;
            this.props._onChange(text);
            e.target.value = '';
        }
    }

    handleDELETE(index){
        this.props._deleteList(index)
    }
    
    handleClick(){

        const url = "https://cnodejs.org/api/v1/topics";
        fetch(url).then(
            (response) => {
                return response.json()
            }
        ).then(
            (json) => {
                return console.log(json)
            }
        )

    }
    
    render(){
        let input;
        const { lists } = this.props;
        return (
            <div className="j-todo">
                <h1 className="todo-title">Todo-List</h1>
                <input type="text" onKeyUp={ this.handleKeyUp.bind(this)} className="input-text" placeholder="请输入"/>
                <List lists={lists} handleDelete={this.handleDELETE.bind(this)}/>
                <button onClick={ this.handleClick.bind(this) } className="get-button">获取console数据</button>
            </div>
        )
    }
}


//components
//子级
class List extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.lists.map((item,index) =>{
                        return <li key={index}>{index + 1} { item.news } <a className="delete-a" onClick={() => this.props.handleDelete(index)}>删除</a></li>
                    })
                }
            </ul>
        )
    }
}

//ActionTypes
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
//action
const addTodo = (text) =>{
    return {
        type : ADD_TODO,
        text
    }
}
const deleteTodo = (index) =>{
    return {
        type : DELETE_TODO,
        index
    }
}

//reducer

const list = [
    { news : '习近平总书记2013-2017两会时间全纪实' },
    { news : '习近平两会足迹 全国人大五次会议15日闭幕' },
    { news : '今年总理记者会创20年之"最" 揭总理之"强"' },
    { news : '韩媒:两名韩国牧师在中国被捕 涉嫌协助"脱北者"' }
];

const reducer = ( state = list , action ) =>{
    switch(action.type){
        case ADD_TODO :
            return [...state,action.text]   //数组铺开
        case DELETE_TODO : 
            state.splice(action.index, 1)
            return [...state]
        default : 
            return state
     }
}


//store
const store = createStore(reducer);

//mapStateToProps
const mapStateToProps = (state) =>{
    return {
        lists : state
    }
} 


//mapDispatchToProps
const mapDispatchToProps = (dispatch) =>{
    return {
        _onChange : (text) =>{         //_onChange是展示组件的 props 中的回调方法
            dispatch(addTodo(text))
        },
        _deleteList : (index) =>{
            dispatch(deleteTodo(index))
        },
    }
}


// Todo.propTypes = {
//   addTodo: React.PropTypes.func.isRequired
// }

//connect
const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)



ReactDOM.render(
    <Provider store={store}>
        <TodoList/>
    </Provider>,
    document.getElementById('app')
)

