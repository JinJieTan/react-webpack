import React,{Fragment} from 'react'
import {connect} from 'react-redux'
import {AsyncKingKongModule} from '../../../redux-file/actions-creators'
class App extends React.Component{
    componentDidMount(){
        this.props.reqKingKongModule()
    }
    render(){
        const {KingkongModule}=this.props
        return(
            <div className="KingkongModule">
                {KingkongModule.map((item,index)=>{
                    return <img src={item.picUrl} alt="" key={index}/>
                })}
            </div>
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