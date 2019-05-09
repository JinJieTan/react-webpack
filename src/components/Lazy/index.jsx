import React from 'react'
import loadable from 'react-loadable'
import Loading from '../loading'
const LoadableComponent = loadable({
    loader: () => import('../Test/index.jsx'),
    loading: Loading,
});
class Assets extends React.Component {
    render() {
        return (
            <div>
                <div>这即将按需加载</div>
                <LoadableComponent />
            </div>
        )
    }
}

export default Assets