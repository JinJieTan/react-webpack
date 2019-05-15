import { reqSlides, reqIndexActivityModule ,reqKingKongModule } from '../api'
import { slides, IndexActivityModules ,KingKongModules } from './actions-types'

//同步将数据传递给reducers
export const IndexActivityModule = (data) => {
    return { type: IndexActivityModules, data }
}
//异步获取首页导航的的数据
export const AsyncIndexActivityModule = () => {
    return async (dispatch) => {
        const result = await reqIndexActivityModule()
        dispatch(IndexActivityModule(result.data))
    }
}

//同步将数据传递给reducers
export const Slide = (data) => {
    return { type: slides, data }
}
//异步获取走马灯的数据
export const AsyncSlide = () => {
    return async (dispatch) => {
        const result = await reqSlides()
        dispatch(Slide(result.data))
    }
}

// 同步将数据传递给reducers
export const KingKongModule = (data) => {
    console.log('KingKongModule')
    return { type: KingKongModules, data }
}
//异步获取slide下面十张图片的数据
export const AsyncKingKongModule = () => {
    return async (dispatch) => {
        const result = await reqKingKongModule()
        dispatch(KingKongModule(result.data))
    }
}
