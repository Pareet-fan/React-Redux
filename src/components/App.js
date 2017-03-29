'use strict';


import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory ,IndexRoute ,Link} from 'react-router';

//具备路由功能的list切换

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">列表页</a></div>
                <div><a href="#/detail">详情页</a></div>
                <hr/>
                {
                    this.props.children
                }
            </div>
        );
    }
});

var List = React.createClass({
    render: function() {
        return (
            <div>
                <div><a href="#/">返回首页</a></div>
                <div>这是列表页</div>
            </div>
        );
    }
});

var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});

var Home = React.createClass({
    render:function(){
        return(
            <div>
                <h3>我是默认显示的组件</h3>
            </div>
        )
    }
}) 

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>      {/*默认显示的组件*/}
            <Route path='/list' component={List} />
            <Route path='/detail' component={Detail} />
        </Route>
    </Router>
), document.getElementById('app'));
