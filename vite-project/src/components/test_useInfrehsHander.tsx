import { forwardRef, ComponentPropsWithoutRef, useImperativeHandle, useRef, Ref } from 'react'
import hihi from '../assets/hihi.mp4'

interface videoRefMethod {
    play: () => void,
    pause: () => void
}

export const UseInfrehsHander = forwardRef<videoRefMethod, ComponentPropsWithoutRef<'video'>>((props, ref) => {
    const videoRef: Ref<HTMLVideoElement> = useRef<HTMLVideoElement>(null)
    const play = () => {
        if (videoRef.current) videoRef.current.play()
    }
    const pause = () => {
        if (videoRef.current) videoRef.current.pause()
    }
    useImperativeHandle(ref, () => ({ play, pause }))
    return (
        <video src={hihi} height={200} width={200} {...props} ref={videoRef} />
    )
});



