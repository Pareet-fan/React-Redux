import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


//双向数据绑定

//Ui组件
class Child extends Component{
    render(){
        let input;
        const { value , _onChange } = this.props;
        return (
            <div>
                <span style={{color : '#fff'}}> { value } </span>
                <input onChange={() =>_onChange(input.value)} ref={node =>{input=node}} />
            </div>
        )
    }
};


//声明
Child.propTypes = {
    value: PropTypes.string.isRequired,
    _onChange: PropTypes.func.isRequired
}

//action
// const increaseAction1 = {type : 'increase'};


const increaseAction = (text) =>{
    return {
        type : 'onChangeVal',
        text
    }
}



//Reducer

const initialState = {
    text : ''
} 

function counter(state = initialState,action){
    switch(action.type){
        case 'onChangeVal':
            return { text : action.text }
        default :
            return state
    }
}

//store
const store = createStore(counter);

function mapStateToProps(state){
    return {
        value : state.text
    }
}


function mapDispatchToProps(dispatch){
    return {
        _onChange : (text) =>{ dispatch(increaseAction(text)) }
    }
}





const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Child);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)


