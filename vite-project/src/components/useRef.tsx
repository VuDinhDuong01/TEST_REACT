import {useRef, useState, useEffect } from 'react'

export const UseRef=()=>{
    const [count  , setCount]=useState(60)
    const ref = useRef(99)
     const preRef= useRef(99)
    const handleStart=()=>{
     ref.current=  setInterval(()=>{
            setCount((prev)=>prev-1)
        },1000)
    }
    const handleStop=()=>{
        clearInterval(ref.current)
    }

    // so sánh giá trị trước và giá trị hiện tại bằng useRef
    useEffect(()=>{
        preRef.current=count
    },[count])
   
    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={handleStart}>Start</button>
            <button  onClick={handleStop}>Stop</button>
        </div>
    )
}