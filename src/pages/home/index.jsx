import React from 'react'
import { Tabs, Badge, Carousel } from 'antd-mobile'
import BScroll from 'better-scroll'
import Slide from './slide'
import { connect } from 'react-redux'
import { AsyncIndexActivityModule , AsyncTitleColor } from '../../redux-file/actions-creators'
import Kingkong from './kingkongmodule'

import "./index.less"
const tabs = [
    { title: <Badge text={'3'}>今日推荐</Badge> },
    { title: <Badge text={'今日(20)'}>今日热卖</Badge> },
    { title: <Badge z>折扣到底</Badge> },
];
class App extends React.Component {
    constructor() {
        super()
        this.wrap = React.createRef()
    }
    componentDidMount() {
        this.props.IndexActivityModule()
        this. myScroll = new BScroll(this.wrap.current, {
            bounce: false,
            scrollbar: true,
            probeType:2,
            click:true
            
        })
        this.myScroll.on('scroll', (e) => {
            if (e.y < -130) {
             this.props.TitleColor('red')
            }else if(e.y > -130){
                this.props.TitleColor('transparent')
            }
        })
    }
    render() {
        const { data } = this.props
        if(this.myScroll){
            this.myScroll.refresh()}
        return (
            <div className="content-wrap" ref={this.wrap}>
                <div className="content-inner">
                    <ul className="list">
                        <li><i className="material-icons "  >face</i></li>
                        <li className="item1">京</li>
                        <li className="item2">东</li>
                        <li className="item3">专</li>
                        <li className="item4">享</li>
                        <li><i className="material-icons">face</i></li>
                    </ul>
                    <Tabs tabs={tabs}
                        initialPage={1}
                    >
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index}
                                        className="slide-container"
                                    >
                                        <img src={item.picUrl} />
                                    </div>
                                )
                            })
                        }
                    </Tabs>
                    <Carousel className="my-carousels test"
                        vertical
                        dots={false}
                        dragging={false}
                        swiping={false}
                        autoplay
                        infinite
                        speed={400}
                        autoplayInterval={400}
                        resetAutoplay={false}
                    >
                        {['抽奖：苹果x', '抽奖：华为p30', '抽奖：Mac', '抽奖：iPod', '抽奖：CK', '抽奖：Hemers'].map(type => (
                            <div className="v-item" key={type}>{type}</div>
                        ))}
                        
                    </Carousel>
                    <div className="main-gif">
                        <img src="//m.360buyimg.com/mobilecms/jfs/t29767/238/1280638669/118489/8915d2f5/5cdbb7fdNa69c9be3.gif" alt="" />
                    </div>
                    <Slide></Slide>
                    
                    <Kingkong></Kingkong>
                    

                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({ data: state.IndexActivityModule, KingkongModule: state.KingKong }),
    (dispatch) => ({
        IndexActivityModule() {
            const action = AsyncIndexActivityModule();
            dispatch(action)
        },
        TitleColor(data){
            const action = AsyncTitleColor(data)
            dispatch(action)
        }

    })
)(App)

