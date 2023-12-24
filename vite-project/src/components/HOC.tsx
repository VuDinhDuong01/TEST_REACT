/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react"
import { useNavigate, useLocation } from "react-router-dom"

const fn1 = (p1: number) => {
    console.log(p1)
}

const fn2 = (p2: number) => {
    console.log(p2)
}

const HOC = (callback: (k: any) => void) => (x: number) => {
    const t = 'abc'
    callback(x + t)
}

HOC(fn1)(123)
HOC(fn2)(123)

const Component = (props: any) => {
    return console.log("JSX" + props)
}


export const HOCS = (Component: any) => (x: any) => {
    const navigate = useNavigate();
    const location = useLocation()
    return <Component {...x} t={t} navigate={navigate} location={location} />
}
const m = HOCS(Component)

const findNumber = (number: number) => (fn: (k: number) => boolean) => {
    const result = []
    for (let i = 0; i < number; i++) {
        if (fn(i)) {
            result.push(i)
        }
    }
    return result;
}

findNumber(10)((k: number) => k % 2 == 0)
interface ExtraProp {
    debug: string
    blog: string
}

export const connect = <T extends Record<string ,any>>(Component: ComponentType<T>) => (props: Omit<T, keyof ExtraProp>) => {
    const debug = 'abc';
    const blog = 'abc'
    const _props = props as T
    return <Component {..._props} debug={debug} blog={blog} />
}

export default connec<{ blog: string, debug: string }>((props) => {
    const { } = props
})










