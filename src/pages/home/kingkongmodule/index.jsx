import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import {AsyncKingKongModule} from '../../../redux-file/actions-creators'
import './index.less'
class App extends React.Component{
    componentDidMount(){
        this.props.reqKingKongModule()
    }
    render(){
        const {KingkongModule}=this.props
        return(
            <Fragment>
                {KingkongModule.map((item,index)=>{
                    return <img src={item.picUrl} alt="" key={index}/>
                })}
            </Fragment>
        )
    }
}


export default connect(
    (state)=>({KingkongModule:state.KingKong}),
    (dispatch) =>({
    reqKingKongModule(){
        const action = AsyncKingKongModule();
        dispatch(action)
    },

    })
)(App)