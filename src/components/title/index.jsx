import React from 'react'
import { SearchBar, ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import './index.less'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true,
            showSearchArr: ['/home', '/category', '/buy', 'shopcart', 'person', '/search'],
            clicked2: 'none',
        }
    }
    dataList = [
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
    ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
    }));


    showShareActionSheetMulpitleLine = () => {
        const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
        ActionSheet.showShareActionSheetWithOptions({
            options: data,
            message: '分享给您身边的人',
        },
            (buttonIndex, rowIndex) => {
                this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
            });
    }

    Focus = () => {
        this.setState({
            isShow: false,

        })
        this.props.history.push('/search')
    }
    cancel = () => {
        this.props.history.go(-1)
        this.setState({
            isShow: true,
        })
    }
    handleBack = () => {

        this.props.history.replace('/home')
    }
    handleShare = () => {

    }
    render() {
        let showSearch = true
        const { isShow, showSearchArr } = this.state
        const { color, location: { pathname } } = this.props
        if (!showSearchArr.find((item) => item === pathname)) {
            showSearch = false
        }
        if (showSearch) {
            return (
                <div className="title-container" style={{ backgroundColor: color }}>
                    {isShow ? <i className="material-icons " >subject</i> : ''}
                    <div className="title-input">
                        <SearchBar placeholder="全民湿巾品牌" maxLength={8} onFocus={this.Focus} onCancel={this.cancel} />
                    </div>
                    {isShow ? <i className="material-icons ">cloud_queue</i> : ''}
                </div>
            )
        } else {
            return (
                <div className="title-paly-b">
                    <i className="material-icons" onClick={this.handleBack}>
                        keyboard_backspace
                    </i>
                    <i className="material-icons" onClick={this.showShareActionSheetMulpitleLine}>
                        share
                    </i>
                </div>
            )
        }

    }
}
export default connect(
    (state) => ({ color: state.TitleColor })
)(withRouter(App))