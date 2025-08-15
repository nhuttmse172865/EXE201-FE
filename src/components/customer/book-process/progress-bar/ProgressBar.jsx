import React, { useState } from 'react'
import PROGRESS_BOOKING from '../../../../utils/progress-booking';


const ProgressBar = ({currentBookingStep}) => {

    return (
        <ul className='container mx-auto flex justify-center h-[80px] items-center '>
            {
                PROGRESS_BOOKING.map((item,index) => (
                    <div className={`relative flex flex-col items-center gap-[10px] px-[35px] after:w-[100%] after:h-[2px] after:absolute after:bottom-[-15px] ${item?.id <= currentBookingStep?.id  ? 'after:bg-(--color-primary-100)' : 'after:bg-[#F7F7F7]'}`}>
                        <li className={`text-[15px] ${item?.id <= currentBookingStep?.id ? 'text-(--color-primary-100)' : 'text-[rgba(0,0,0,0.5)]'} font-normal`}>{item.name}</li>
                    </div>
                ))
            }
        </ul>
    )
}

export default ProgressBar