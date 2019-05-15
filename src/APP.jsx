import React from 'react'
import Title from './components/title'
import Home from './pages/home'
import Category from './pages/category'
import Buy from './pages/buy'
import Shopcart from './pages/shopcart'
import Person from './pages/person'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
export default class App extends React.Component {
    render() {
        return (
            <div className="wrap">
                <header className="Title"><Title></Title></header>
                <div className="content">
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/category" component={Category}></Route>
                        <Route path="/buy" component={Buy}></Route>
                        <Route path="/shopcart" component={Shopcart}></Route>
                        <Route path="/person" component={Person}></Route>
                        <Route path="/search" component={Person}></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                    </div>
                <footer className="footer">
                    <NavLink to="/home" activeClassName="active">首页</NavLink>
                    <NavLink to="/category" activeClassName="active">分类</NavLink>
                    <NavLink to="/buy" activeClassName="active">拼购</NavLink>
                    <NavLink to="/shopcart" activeClassName="active">购物车</NavLink>
                    <NavLink to="/person" activeClassName="active">个人</NavLink>
                </footer>
            </div>
        )
    }
}