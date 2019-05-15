import React from 'react'
import { SearchBar } from 'antd-mobile';
import './index.less'
import { withRouter } from 'react-router-dom'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    Focus = () => {
        this.props.history.push('/search')
    }
    cancel = () => {
        this.props.history.replace('/home')
    }

    render() {
        return (
            <div className="title-container">
                <i className="material-icons " >subject</i>
                <div className="title-input">
                    <SearchBar placeholder="全民湿巾品牌" maxLength={8} onFocus={this.Focus} onCancel={this.cancel} />
                </div>
                <span>登录</span>
            </div>
        )
    }
}
export default withRouter(App)