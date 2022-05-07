import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
  })
export const tableData= atom({
    key:"tableDataList",
    default:[],
    effects_UNSTABLE: [persistAtom],
})
export const astmTableData= atom({
    key:"astmTableDataList",
    default:[],
    effects_UNSTABLE: [persistAtom],
})
export const typeData= atom({
    key:"typeDataList",
    default:"Rural",
    effects_UNSTABLE: [persistAtom],
})
export const placeData= atom({
    key:"placeDataList",
    default:"place",
    effects_UNSTABLE: [persistAtom],
})
export const resultData=atom({
    key: "resultDataList",
    default:[],
    effects_UNSTABLE: [persistAtom],
})
export const astmPlaceData= atom({
    key:"astmPlaceDataList",
    default:"place",
    effects_UNSTABLE: [persistAtom],
})
export const astmResultData=atom({
    key: "astmResultDataList",
    default:[],
    effects_UNSTABLE: [persistAtom],
})