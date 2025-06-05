import React from 'react'
import OutlineButton from '../../../common/button/outline-button/OutlineButton'
import ElevatedButton from '../../../common/button/elevated-button/ElevatedButton'
import { useNavigate } from 'react-router-dom'

const CustomerUtils = () => {
  const navigate = useNavigate()
  return (
    <div className='flex gap-x-[20px]'>
        <OutlineButton text='Login' width="120px" height="38px" fontSize="14px" handleOnclick={() => navigate("/login")} />
        <ElevatedButton text='Register' width="120px" height="38px" fontSize="14px"  handleOnclick={() => navigate("/registration")}/>
    </div>
  )
}

export default CustomerUtils