import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../index.scss'


import { Link } from 'react-router'

export default class App extends Component{

    render(){
        return (
            <div className="j-Pareet">
                <div style={{'overflow' : 'hidden'}}>
                    <div className="react-app">
                        <Link to="/" className="link">React</Link>
                    </div>
                    <ul className="nav-ul">
                        <li>
                            <Link to="/home" className="nav-link" activeClassName="active">计数器</Link>
                        </li>
                        <li>
                            <Link to="/foo" className="nav-link" activeClassName="active">静态数据</Link>
                        </li>
                        <li>
                            <Link to="/bar" className="nav-link" activeClassName="active">动态数据</Link>
                        </li>
                        <li>
                            <Link to="/antd" className="nav-link" activeClassName="active">结合antd</Link>
                        </li>
                        <li>
                            <Link to="/cook" className="nav-link" activeClassName="active">轮播</Link>
                        </li>
                        <li>
                            <Link to="/movie" className="nav-link" activeClassName="active">获取电影</Link>
                        </li>
                    </ul>
                </div>
                <div className="j-children">
                    {this.props.children} 
                </div>
            </div>
        )
    }
}
