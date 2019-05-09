import React, { Fragment } from 'react'
import style from './index.less'
import './1.mp3'
import img from './1.jpeg'
import Lazy from '../Lazy/index.jsx'
import test from './test.jpg'
export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={style["text"]}>
                    <h1>从0构建React脚手架</h1>
                    <img src={img} alt="" />
                    <Lazy/>
                    <div>改变JSX文件</div>
                    <img src={test}/>
                </div>
            </Fragment>
        )
    }
}