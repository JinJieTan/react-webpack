import { reqSlides, reqIndexActivityModule, reqKingKongModule, reqCategoryModule } from '../api'
import { slides, IndexActivityModules, KingKongModules, CategoryModules, TitleColorTransparent, TitleColorWhite } from './actions-types'

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
    return { type: KingKongModules, data }
}
//异步获取slide下面十张图片的数据
export const AsyncKingKongModule = () => {
    return async (dispatch) => {
        const result = await reqKingKongModule()
        dispatch(KingKongModule(result.data))
    }
}

// 同步将数据传递给reducers
export const CategoryModule = (data) => {
    return { type: CategoryModules, data }
}
//异步获取categorymodules的数据
export const AsyncCategoryModule = () => {
    return async (dispatch) => {
        const result = await reqCategoryModule()
        dispatch(CategoryModule(result.data))
    }
}

// 同步将title的颜色数据传递给reducers 
export const TitleColorTransparents = (data) => {
        console.log('transparent')
        return { type: TitleColorTransparent, data }
}

export const TitleColorRed = (data) => {
        console.log('red')
        return { type: TitleColorWhite, data }
}

export const AsyncTitleColor = (data) => {
    console.log(`data:${data}`)
    return (dispatch)=>{
        if (data === "transparent") {
            console.log('transparent')
            dispatch(TitleColorTransparents(data))
        } else if(data === "red"){
            console.log('red')
            dispatch(TitleColorRed(data))
        }
    }
    
}
