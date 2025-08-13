import React from 'react'
import ProgressBar from './progress-bar/ProgressBar'
import SelectService from './select-service/SelectService'
import SelectClinic from './select-clinic/SelectClinic'
import SelectDate from './select-date/SelectDate'

const Body = () => {
  return (
    <div className="min-h-[calc(100vh-70px)]">
        <div className='w-full h-[3px] bg-[#F7F7F7]'></div> 
        <ProgressBar />
        <div className='bg-[#F7F7F7] min-h-[calc(90vh)] pt-5'>
            <div className='container mx-auto grid grid-cols-12 gap-5'>
                <div className='p-[15px] col-span-9 rounded-[.375rem] bg-white'>
                    {/* <SelectService /> */}
                    {/* <SelectClinic /> */}
                    <SelectDate />
                </div>
                <div className='p-[15px] col-span-3 bg-white rounded-[.375rem]'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Body