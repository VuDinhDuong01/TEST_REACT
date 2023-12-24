import {useLayoutEffect, useState} from 'react'

// useEffect 
// 1 cập nhật lại state
// cập nhập Dom
// render ui
// gọi cleanup nếu deps thay đổi 
// gọi useEffect Callback 


// useLayoutEffect 
// cập nhật lại state
// cập nhật dom 
// gọi cleanup nếu des thay đổi 
// gọi useLayoutEffect callback
// render ui 

 export const Count=()=>{
    const [count , setCount]= useState(0);

    const handleCount=()=>{
        setCount((prev)=>prev+1)
    }
    // useEffect(()=>{
    //     if(count > 3) {
    //         setCount(0)
    //     }
    // },[count])
    // sử dụng thì nó sẽ cập nhật giao diện xong thì nó mới gọi useEffect dẫn tới 
    // nháy ui
     useLayoutEffect(()=>{
        if(count > 3) {
            setCount(0)
        }
     },[count])
     
    return (
        <div>
            <div style={{fontSize:'30px'}}>{count}</div>
            <button onClick={handleCount}>Đếm</button>
        </div>
    )
 }
