
import './App.css'
import { UseInfrehsHander } from './components/test_useInfrehsHander'
import { useRef, useId,useCallback, useEffect, type RefObject, type Ref } from 'react'
import { UseController } from './components/useController'
import { useForm, type Control, type FieldValues } from 'react-hook-form'
import { Count } from './components/useLayoutEffect'
import { UseRef } from './components/useRef'
import { useState } from 'react'
import  UseCallback  from './components/useCallback'

interface FormValues {
  name: string
}

function App() {
  const id = useId()
  const videoRef: RefObject<HTMLVideoElement> = useRef(null)
  const inputRef: Ref<HTMLInputElement> = useRef(null)

  const { control, handleSubmit, trigger, reset } = useForm<FormValues>({
    defaultValues: {
      name: ''
    }
  })

  const handlePlay = () => {
    if (videoRef.current) videoRef.current.play()
  }
  const handlePause = () => {
    if (videoRef.current) videoRef.current.pause()
  }


  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
  })
  useEffect(() => {
    console.log(inputRef.current)
  })

  const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value.target.value)
    trigger("name")
  }


  const [count , setCount]= useState(0)
// mỗi khi setCount thì fun App được render lại và tạo ra 1 tham chiếu mới 
// gắn vào handleCallback , và được truyền sang cho fn UseCallback
// sang hàm UseCallback , memo thấy có sự thay đổi nên bị render lại 

// khắc phục dùng useCallback 
 // useCallback nhân được tham chiếu của callback và nó lưu ra ngoài phạm vi hàm và return lại tham chiếu đó
 // sau đó dựa vào des để nó có thay đổi tham chiếu không 
 // nếu des là [] thì nó trả về tham chiếu trc đó , thay vì tạo 1 tham chiếu mới 
 // nếu des là [res] , thì mỗi lần res thay đổi thì sẽ trả về 1 tham chiếu mới 
 
   const handleCallback=useCallback(()=>{
    setCount(prev=>prev+1)
   },[])

  return (
    <div>
      {/* <UseInfrehsHander ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <form onSubmit={onSubmit}>
        <UseController
          ref={inputRef}
          control={control as unknown as Control<FieldValues>}
          name='name'
          id={id}
          label='name'
          placeholder='Enter your name'
          required
          onChange={handleChange}
        />
        <button>xin chào</button>
      </form> */}
      {/* <Count />
      <UseRef /> */}
      <UseCallback onIncrease={handleCallback} />
      <div>{count}</div>
    </div>
  )
}

export default App
