import React from 'react' // 引入react
import { Route, IndexRoute } from 'react-router' // 引入react路由
// import { App, Home, Foo } from './containers' // 引入各容器组件


import App from './containers/App';
import Home from './containers/Home';
import Foo from './containers/Foo';
import Bar from './containers/Bar';
import Antd from './containers/Antd';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/foo" component={Foo}/>
        <Route path="/bar" component={Bar}/>
        <Route path="/antd" component={Antd}/>
        <Route path="/home" component={Home}/>
    </Route>
)
