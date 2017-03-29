import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import './index.scss'
//比较完整的计数器

//(5)组件
class Counter extends Component{
    render(){
        let input;
        const { textNum , _onClickIncrease , _onClickReduce ,textValue ,_onChange,lists} = this.props
        return (
            <div className="j-ion">
                <span>{ textNum }</span>
                <button onClick={() => _onClickIncrease(1)}>增加</button>
                <button onClick={() => _onClickReduce(1)}>减少</button>
                <div>输入值是：<span>{ textValue }</span></div>
                <div>请输入：<input type="text" onChange={() =>_onChange(input.value)} ref={node =>{input=node}}/></div>
                <br/>
                <hr/>
                <ul>
                    {
                        lists.map((item,index) =>{
                            return <li >{index} { item.text }</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


//声明值的类型
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  _onClickIncrease: PropTypes.func.isRequired,
  _onClickReduce: PropTypes.func.isRequired
}


//(1) actions
//增加
const increase = (n) => {
    return {
        type : 'INCREASE',
        num : n
    }
}
//减少
const reduce = (n) => {
    return {
        type : 'REDUCE',
        num : n
    }
}
//写入值
const write = (text) => {
    return {
        type : 'WRITE',
        text
    }
}




//(2) reducer
const initialState = {
    count : 5,
    text : '默认值',
    lists: [
        {text: '整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。'}, 
        {text: '惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。'},
        {text: '为了描述 action 如何改变 state tree ，你需要编写 reducers。'},
        {text: '就是这样，现在你应该明白 Redux 是怎么回事了。'}
    ]
}

const counter = (state = initialState , action) => {
    switch(action.type){
        case  'INCREASE':
            return Object.assign({}, state, { count : state.count + action.num })
        case 'REDUCE' : 
            return Object.assign({}, state, { count : state.count - action.num })
        case 'WRITE' : 
            return Object.assign({}, state, { textValue : action.text })
        default : 
            return state
    }
}



//(3) store
const store = createStore(counter);

 //(4)
const mapStateToProps = (state) =>{
    return {
        textNum : state.count,       //增加减少
        textValue : state.textValue,        // input输入值
        lists : state.lists     //获取列表数据
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        _onClickIncrease : (n) =>{ dispatch(increase(n)) },   //增加  dispatch(参数),参数可以是函数也可以是对象
        _onClickReduce : (n) =>{ dispatch(reduce(n)) },  //减少 
        _onChange : (text) =>{ dispatch(write(text)) }  //输入值  
    }
}


/*
mapDispatchToProps是函数
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
      });
    }
  };
};*/

/*
mapDispatchToProps是对象
const mapDispatchToProps = {
  onClick : function(filter){
      return {
           type: 'SET_VISIBILITY_FILTER',
           filter: filter
      }
  }
}
*/




//(6)connect
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


//(7)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)













