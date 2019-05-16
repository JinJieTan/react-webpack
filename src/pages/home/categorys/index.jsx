import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { AsyncCategoryModule } from '../../../redux-file/actions-creators'
import './index.less'
import Bscroll from 'better-scroll'
class App extends PureComponent {
    componentDidMount() {
        this.props.reqCategoryModule()
    }
    componentDidUpdate() {
        const arr = document.querySelectorAll('.swiper-wrap')
        new Bscroll(document.querySelector('.categorys'))
        if (arr) {
            arr.forEach(item => {
                new Bscroll(item, {
                    scrollX: true,
                    scrollY: false 
                })
            })
        }
    }
    render() {
        const { categorys } = this.props

        return (
            <div className="categorys">
                <div>
                {categorys.map((item, index) => {
                    return (
                        <div key={index} className="category-container">
                            <img src={item.titlePicUrl} alt="" />
                            <div className="swiper-wrap">
                                <div className="subList">
                                    {item.itemList.map((li) => {
                                        return (
                                            <div className="itemList" key={li.id}>
                                                <img src={li.scenePicUrl} height={200} offset={150} />
                                                <span>{li.name}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                </div>
    )
})}
                </div>
                
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
