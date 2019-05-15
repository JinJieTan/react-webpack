import React from 'react'
import { Tabs, Badge } from 'antd-mobile'
import BScroll from 'better-scroll'
import Slide from './slide'
import { connect } from 'react-redux'
import { AsyncIndexActivityModule } from '../../redux-file/actions-creators'
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
        new BScroll(this.wrap.current,{
            bounce:false,
            click:true
        })
    }
    render() {
        const { data } = this.props
        return (
            <div className="content-wrap" ref={this.wrap}>
                <div className="content-inner">
                    <Slide></Slide>
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
                                        <i className="material-icons">
                                            today
                        </i></div>
                                )
                            })
                        }
                    </Tabs>
                    <br />
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
    })
)(App)

