import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { AsyncCategoryModule } from '../../../redux-file/actions-creators'
import './index.less'
import Bscroll from 'better-scroll'
class App extends React.PureComponent {
    componentDidMount() {
        this.props.reqCategoryModule()
    }
    componentDidUpdate() {
        const arr = document.querySelectorAll('.swiper-wrap')
        if (arr) {
            arr.forEach(item => {
                new Bscroll(item, {
                    scrollX: true
                })
            })
        }
    }
    render() {
        const { categorys } = this.props

        return (
            <div className="categorys">
                {categorys.map((item, index) => {
                    return (
                        <div key={index} className="category-container">
                            <img src={item.titlePicUrl} alt="" />
                            <div className="swiper-wrap">
                                <div className="subList">
                                    {item.itemList.map((li) => {
                                        return (
                                            <div className="itemList" key={li.id}>
                                                <img src={li.scenePicUrl} />
                                                <span>{item.tagName}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default connect(
    (state) => ({ categorys: state.CategoryModule }),
    (dispatch) => ({
        reqCategoryModule() {
            const action = AsyncCategoryModule();
            dispatch(action)
        },

    })
)(App)
