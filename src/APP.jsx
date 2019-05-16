import React from 'react'
import Title from './components/title'
import Home from './pages/home'
import Category from './pages/home/categorys/index1.jsx'
import Buy from './pages/buy'
import Shopcart from './pages/shopcart'
import Person from './pages/person'
import Search from './pages/search'
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
                        <Route path="/search" component={Search}></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </div>
                <footer className="footer">
                    <NavLink to="/home" activeClassName="active" className="link">
                        <i className="material-icons">
                            favorite_border
                        </i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/category" activeClassName="active" className="link">
                        <i className="material-icons">
                            reorder
                        </i>
                        <span>分类</span>
                    </NavLink>
                    <NavLink to="/buy" activeClassName="active" className="link">
                        <i className="material-icons">
                            card_giftcard
                        </i>
                        <span>拼购</span>
                    </NavLink>
                    <NavLink to="/shopcart" activeClassName="active" className="link">
                        <i className="material-icons">
                            bookmark_border
                        </i>
                        <span>购物车</span>
                    </NavLink>
                    <NavLink to="/person" activeClassName="active" className="link">
                        <i className="material-icons">
                            account_box
                        </i>
                        <span>个人</span></NavLink>
                </footer>
            </div>
        )
    }
}