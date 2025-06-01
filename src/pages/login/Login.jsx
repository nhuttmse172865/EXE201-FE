import React from 'react'
import Header from '../../components/customer/header/Header'
import Body from '../../components/login/Body'

const Login = () => {
  return (
    <div className='relative overflow-x-hidden'
    >
        <Header isLogin={true} border={false}/>
        <Body />
    </div>
  )
}

export default Login