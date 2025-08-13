import React, { useState } from 'react'
import PROGRESS_BOOKING from '../../../../utils/progress-booking'

const ProgressBar = () => {
    const [stepActive,setStepActive] = useState(4);
    return (
        <ul className='container mx-auto flex justify-center h-[80px] items-center '>
            {
                PROGRESS_BOOKING.map((item,index) => (
                    <div className={`relative flex flex-col items-center gap-[10px] px-[35px] after:w-[100%] after:h-[2px] after:absolute after:bottom-[-15px] ${index < stepActive ? 'after:bg-(--color-primary-100)' : 'after:bg-[#F7F7F7]'}`}>
                        <li className={`text-[15px] ${index < stepActive ? 'text-(--color-primary-100)' : 'text-[rgba(0,0,0,0.5)]'} font-normal`}>{item.name}</li>
                    </div>
                ))
            }
        </ul>
    )
}

export default ProgressBar