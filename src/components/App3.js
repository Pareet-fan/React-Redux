import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const data = [
    { id : 1,name : 'Jack',sex : 'a',age  : 18,project : 'project1' },
    { id : 2,name : 'Tom',sex : 'b',age  : 28 },
    { id : 3,name : 'Alou',sex : 'b',age  : 32,project : 'project2'},
    { id : 4,name : 'Park',sex : 'a',age  : 26 },
    { id : 5,name : 'Coul',sex : 'a',age  : 23 }
]

class List extends Component{
    render(){
        const { date } = this.props;
        return (
            <li>
                <span>{ date.id }</span>
                <span>{ date.name }</span>
                <span>{ date.sex == 'a' ? '男':'女' }</span>
                <span>{ date.age }</span>
                <span>{ date.project }</span>
            </li>
        )
    }
}

class ListApp extends Component{
    render(){
        return (
            <div>
                <ul>
                    {
                        data.map((item,index) => {
                            return <List key={index} date={item}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}




ReactDOM.render(
    <ListApp/>,
    document.getElementById('app')
) 