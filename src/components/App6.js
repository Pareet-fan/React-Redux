'use strict';

import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

//路由
import './index.scss'

//父级
class Parent extends Component{
    render(){
        return (
            <div className="J-Router">
                <h4>LOGO</h4>
                <p><a href="#/">首页</a></p>
                <p><a href="#/news">新闻</a></p>
                <p><a href="#/aboutUs">关于我们</a></p>
            </div>
        )
    }
}

//子级News
class News extends Component{
    render(){
        return (
            <div>
                <a href='#/'>返回首页</a>
                <p>新闻详情</p>
            </div>
        )
    }
}

//子级AboutUs
class AboutUs extends Component{
    render(){
        return (
            <div>
                <a href='#/'>返回首页</a>
                <p>关于我们详情</p>
            </div>
        )
    }
}



ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path='/' component={Parent}></Route>
            <Route path='/news' component={News}></Route>
            <Route path='/aboutUs' component={AboutUs}></Route>
        </Router>
    ),
    document.getElementById('app')
)



