type SomeType = string
type MyCon = SomeType extends string ? string : null;

function somefn<T>(value: T) {
    type A = T extends boolean ? 'TYPEA' : 'TYPEB'
    const someOther = (some: T extends boolean ? 'Type A' : 'type B') => {
        console.log(some)
    }
    return someOther
}

const result = somefn('string')

type StringOrNot<T> = T extends string ? string : never;
type t = StringOrNot<string>


type Result = Exclude<string | number | boolean, string | number>

type persion = {
    name: string
    age: number
}

type FruitPrices = Record<'apple' | 'banana' | 'orange', persion>;


type myType<T> = T extends string | number ? T : never

const my: myType<string>={

}

type InferSometinh<T> = T extends infer U ? U : any
type Infer = InferSometinh<"ngọc dương">

type ExtractString<T> = T extends infer U ? U : any;

type StringOrNumber = ExtractString<string | number>;
function greet(name: string) {
    return name
}
type GreetType = ReturnType<typeof greet>
const dynamicFunction = (value: boolean) => (value ? "true" : "false");

type DynamicFunctionReturnType = ReturnType<typeof dynamicFunction>;

type ArrayElementType<T> = T extends (infer U)[] ? U : never;

const numbers: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['a', 'b', 'c'];

type NumberArrayType = ArrayElementType<typeof numbers>;
// Kết quả: NumberArrayType sẽ là kiểu number

type StringArrayType = ArrayElementType<typeof stringArray>;

interface User {
    name: string
    age: number | string
}
const readOnlyUser: Readonly<User> = { name: "duong", age: '' }


// chuyển các thuộc tính thành dạng optionsl
const user: Partial<User> = {
    name: "ngọc dương"
}

// ngược lại so với Partial
const users: Required<User> = {
    name: 123,
    age: 12
}

interface Start {
    color?: 'blue' | 'yellow' | 'green'
}

// loại bỏ undefind or null 
function pani(id: number, color: NonNullable<Start['color']>) { }
pani(1, 'blue')



type Properties = 'a' | 'b'

type MyMap<T> = {
    [P in keyof T]: T[P] | null
}

const t: MyMap<User> = {
    name: null,
    age: '123'
}

type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P]
}

type USER = {
    id: number,
    name: string
    age: number
}

type UserSubset = Pick1<USER, 'name' | 'age' | 'id'>

const userss: UserSubset = {
    name: "ngọc dương",
    age: 123
}

type Record1<K extends keyof any, T> = {
    [P in K]: T
}
const someRecord: Record1<string, number> = {
    name: 1,
    age: 1
}

interface User {
    id: number
    name: string
    address: {
        street: string;
        city: string
        country: string
    }
}

type City = User['address']['city']
type IdOrName = User['name' | 'id']

function updateAddress(id: User['id'], newAddress: User['address']) { }
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

type Persion = {
    name: string,
    age: number
}
const persion: Persion = {
    name: "ngọc dương",
    age: 12
}

console.log(getProperty(persion, 'name'))
console.log(getProperty(persion, 'age'))


type Props = {
    name: string
} & ({
    gender: 'male',
    salary: number
} | {
    gender: 'female'
    weight: number
})

const k: Props = {
    name: "ngọc dương",
    gender: 'male',
    salary: 12
}

type ApiRespone<T> = | { status: 'success', date: T, timeStapm: true } | { status: 'successfully', data: T }

const good = {
    name: "ngọc dương",
    age: 12
} satisfies Persion