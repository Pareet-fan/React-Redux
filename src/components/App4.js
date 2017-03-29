import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

//报错

class List extends Component {
    render() {
        return(
            <li>{this.props.text}</li>
        )
    }
}

List.propTypes = {
    text: PropTypes.string.isRequired
}


class Foo extends Component{
    render(){
        const { lists } = this.props
        return(
            <div>
                <ul>
                    {
                       lists.map((item,index) => {
                           <List text={item.text} key={index}></List>
                       }) 
                    }
                </ul>
            </div>
        )
    }
}


// 验证组件中的参数类型
Foo.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
}




//action
// action常量
const GETLIST = 'GETLIST';

const getSuccessList = (json) => {
    return {
        type: GETLIST,
        json
    }
}

//reducers
const initialState = {
    lists: [
        {text: '整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。'}, 
        {text: '惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。'},
        {text: '为了描述 action 如何改变 state tree ，你需要编写 reducers。'},
        {text: '就是这样，现在你应该明白 Redux 是怎么回事了。'}
    ],
    data: []
}

// 通过dispatch action进入
function update(state = initialState, action) {

    // 根据不同的action type进行state的更新
    switch(action.type) {
        case GETLIST:
            return Object.assign({}, state, { data: action.json })
        default:
            return state
    }
}


// 获取state中的lists值
const mapStateToProps = state => {
    return {
        lists: state.update.lists
    }
}


const store = createStore(update);
// 利用connect将组件与Redux绑定起来
const App = connect(mapStateToProps)(Foo);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
