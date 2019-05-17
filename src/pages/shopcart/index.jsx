import React from 'react'
import { connect } from 'react-redux'
import Bscroll from 'better-scroll'
import './index.less'

class App extends React.Component {
    componentDidMount() {
        new Bscroll(document.querySelector('.shopcart-container', {
            click: true
        }))
    }
    render() {
        const { shopcart } = this.props
        return (
            <div className="shopcart-container">
                <div className="shopcart-content">
                    {shopcart.length ?
                        shopcart.map((item, index) => {
                            return <div key={index} className="shop-item">
                                <div className="shop-items">
                                    <img src={item.picUrl} alt="" />
                                    <div className="shop-text">
                                        <span className="shop-desc">服务保障：{item.desc}</span><br />
                                        <span className="shop-adress">发货地址：{item.adress}</span><br />
                                        <span className="shop-oldPrice">原价：{item.oldPrice}</span><br />
                                        <span className="shop-newPrice">现价：{item.nowPrice}</span><br />
                                    </div>
                                </div>

                            </div>
                        }) : <div> 购物车空空如也，先去逛逛吧~

                    </div>}
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({ shopcart: state.shopcartArr }),

)(App)