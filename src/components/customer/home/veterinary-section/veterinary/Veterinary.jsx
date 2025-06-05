import React from 'react'
import Filter from './filter/Filter'
import VeterinaryCard from './veterinary-card/VeterinaryCard'
import OutlineButton from '../../../../common/button/outline-button/OutlineButton'

const Veterinary = () => {
  return (
    <div className='container mx-auto'>
        <Filter />
        <div className='w-full min-h-[50vh] grid grid-cols-4 gap-11 mt-8'>
            <VeterinaryCard />
            <VeterinaryCard />
            <VeterinaryCard />
            <VeterinaryCard />
            <VeterinaryCard />
            <VeterinaryCard />
            <VeterinaryCard />
            <VeterinaryCard />
        </div>
        <div className='py-10 flex justify-center items-center'>
            <OutlineButton text="Show more" width="120px" height="40px" borderColor="rgba(0,0,0,0.1)" color="rgba(0,0,0,0.5)"/>
        </div>
    </div>
  )
}

export default Veterinary