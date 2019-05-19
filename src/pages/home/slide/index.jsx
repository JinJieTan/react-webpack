import React, { PureComponent } from 'react'
import { Carousel } from 'antd-mobile'
import { connect } from 'react-redux'
import { AsyncSlide } from '../../../redux-file/actions-creators'
import './index.less'
class App extends PureComponent {
    state = {
        data: ['1', '2', '3'],
    }
    componentDidMount() {
        this.props.reqSlide()
    }

    render() {
        const { slide } = this.props
        return (
            <Carousel
                infinite
            >
                {slide.length ? slide.map((item, index) => (
                    <img
                        src={item}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        key={index}
                    />
                )) :
                    <div className="slide-mock">
                    </div>
                }
                
            </Carousel>
        )
    }
}
export default connect(
    (state) => ({ slide: state.slide }),
    (dispatch) => ({
        reqSlide() {
            const action = AsyncSlide()
            dispatch(action)
        }
    })
)(App)