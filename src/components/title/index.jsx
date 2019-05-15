import React from 'react'
import { SearchBar } from 'antd-mobile';
import './index.less'
import { withRouter } from 'react-router-dom'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    Focus = () => {
        this.setState({
            isShow: false
        })
        this.props.history.push('/search')
    }
    cancel = () => {
        this.props.history.go(-1)
        this.setState({
            isShow: true
        })
    }

    render() {
        const { isShow } = this.state
        return (
            <div className="title-container">
                {isShow ? <i className="material-icons " >subject</i> : ''}
                <div className="title-input">
                    <SearchBar placeholder="全民湿巾品牌" maxLength={8} onFocus={this.Focus} onCancel={this.cancel} />
                </div>
                {isShow ? <span>登录</span> : ''}
            </div>
        )
    }
}
export default withRouter(App)