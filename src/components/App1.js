import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

//计数器

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props    //UI 组件的两个参数，前者需要从state计算得到，后者需要向外发出 Action
    return (
      <div>
        <span>{value}</span>
      <button onClick={onIncreaseClick}>增加</button>
      {/*<button onClick={this.onIncreaseClick.bind(this)}>增加</button>  报错*/}
      </div>
    )
  }
}

//声明值的类型
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action  { 1 }
const increaseAction = { type: 'increase' }
/*
也可
const increaseAction = function(){
  return {
    type : 'increase'
  }
}*/

// Reducer  { 3 }


function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store  { 4 }
const store = createStore(counter)  //参数1是Reducer

//定义UI组件参数value到state的映射
function mapStateToProps(state) {  //会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
  return {
    value: state.count    //建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。
  }
}

//定义UI组件参数onIncreaseClick到dispatch的映射。   { 2 }
// mapDispatchToProps可以是函数也可以是对象
function mapDispatchToProps(dispatch) {   //onIncreaseClick是UI组件的同名参数，也就是this.props给出的
  return {
    onIncreaseClick: () => dispatch(increaseAction)  //定义了哪些用户的操作应该当作 Action，传给 Store。 
                                                        //将用户对 UI 组件的操作映射成 Action给dispatch出去,可以是一个函数，也可以是一个对象。
  }
}


// let mapDispatchToProps = (dispatch) => {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }  
// }


//mapDispatchToProps参数是对象也可是函数
// const mapDispatchToProps = {
//   onIncreaseClick: () =>{
//       dispatch(increaseAction)
//   }
// }



// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)   //将Counter这个UI组件，通过mapStateToProps和mapDispatchToProps组合得到容器组件App

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)


