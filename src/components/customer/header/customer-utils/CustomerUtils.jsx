import React from 'react'
import OutlineButton from '../../../common/button/outline-button/OutlineButton'
import ElevatedButton from '../../../common/button/elevated-button/ElevatedButton'

const CustomerUtils = () => {
  return (
    <div className='flex gap-x-[20px]'>
        <OutlineButton text='Login' width="120px" height="38px" fontSize="14px" />
        <ElevatedButton text='Register' width="120px" height="38px" fontSize="14px" />
    </div>
  )
}

export default CustomerUtils