import React from 'react'
import {connect} from 'react-redux' 
import {Carousel,WingBlank ,Button ,NoticeBar } from 'antd-mobile'
import './index.less'
import Bscroll from 'better-scroll'
class App extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
         //避免开发模式下刷新会报错正常 因为没有传入参数
        if(!this.props.location.state ){
            this.props.history.replace('/home')
            return null 
        }
        new Bscroll(document.querySelector('.shop-content'))
    }
    render(){
        //避免开发模式下刷新会报错正常 因为没有传入参数
        if(!this.props.location.state ){
            this.props.history.replace('/home')
            return null 
        }
        console.log(this.props.location.state.data)
        const {text,picUrl,adress,oldPrice,nowPrice,desc} =this.props.location.state.data
        return(<div className="shop-content">
                <div className="shop-swiper">
                <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
           京东&nbsp;618&nbsp;特价即将来袭 请下载App准备~
            </NoticeBar>
            <WingBlank>
             <Carousel
             autoplay={true}
             infinite={true}
             >
            <img src={picUrl} alt=""/>
            <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/16946/36/6712/200431/5c638b36E72b37200/06d91d8fd7116043.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""/>
            <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t10213/130/2992826095/161860/59da4d8/5cde19d1Naea8582c.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""/>
            <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/40496/22/1791/215523/5cc7ca20E0c48c1c8/75e564931ba0d8d8.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""/>
             </Carousel>
             </WingBlank>
             <div className="buytitle-text">商品类别：{text}类</div>
             <div className="border-1px">
             </div>
             <div className="shop-desc">
                 <span className="shop-item-desc"><i className="material-icons">
                    star
                    </i>商品描述:{desc}</span><br/>
                 <span className="shop-item-adress"><i className="material-icons">
                star
                </i>发货地址:{adress}</span><br/>
                 <span className="shop-item-oldPrice"><i className="material-icons">
                star
                </i>原价:{oldPrice}</span><br/>
                 <span className="shop-item-newPrice"><i className="material-icons">
                star
                </i>京东618特价来袭:{nowPrice}</span><br/>
             </div>
             <div className="border-1px">
             </div>
             <Button>选择商品款式</Button>
             <Button type="primary">加入购物车</Button>
             <Button>选择商品款式</Button>
             <Button type="primary">加入购物车</Button><Button>选择商品款式</Button>
             <Button type="primary">加入购物车</Button><Button>选择商品款式</Button>
             <Button type="primary">加入购物车</Button>
                </div>
            </div>
        )
        
    }
}

export default connect(
    null,
    // (state)=>({KingkongModule:state.KingKong}),
    // (dispatch) =>({
    // reqKingKongModule(){
    //     const action = AsyncKingKongModule();
    //     dispatch(action)
    // },

    // })
)(App)