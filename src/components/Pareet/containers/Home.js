import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase , decrease , reset } from '../actions/action'
import '../index.scss'

import { Link } from 'react-router'

//加减重置
export default class Home extends Component{
    render(){
        const { _increase , _decrease , _reset , number} = this.props;
        return (
            <div className="j-home">
                <p>这是当前显示值：{ number }</p>
                <button type="button" onClick={ () => _increase(1) }>+1按钮</button>
                <button type="button" onClick={ () => _decrease(1) }>-1按钮</button>
                <button type="button" onClick={ () => _reset() }>0归零</button>
            </div>
        )
    }
}


//mapStateToProps
const mapStateToProps = (state) =>{
    return {
        number : state.count.number
    }
}


//mapDispatchToProps
const mapDispatchToProps = (dispatch) =>{
    return {
        _increase : (num) =>{         //加
            dispatch(increase(num))
        },
        _decrease : (num) =>{
            dispatch(decrease(num))        //减少
        },
        _reset : () =>{
            dispatch(reset())       //重置
        }
    }
} 


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

