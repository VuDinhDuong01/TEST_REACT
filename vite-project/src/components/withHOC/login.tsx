/* eslint-disable @typescript-eslint/no-explicit-any */

import { HOCS } from '../HOC'

const Login = (props:any) => {
  const {navigate, location}= props
  console.log(navigate,location)
  return (
    <div>logindfdfdfdfd</div>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export default HOCS(Login)