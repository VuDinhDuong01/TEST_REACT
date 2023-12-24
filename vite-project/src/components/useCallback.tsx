/* eslint-disable react-refresh/only-export-components */
import {memo} from 'react'

// sinh ra để tránh tạo ra các hàm mới 1 cách k cần thiết

const UseCallback =({onIncrease}:{onIncrease:()=>void})=>{
    console.log("re-render")
    return <div>

       <div>Hello mọi người</div>
        <button onClick={onIncrease}></button>
    </div>
}

export default memo(UseCallback)