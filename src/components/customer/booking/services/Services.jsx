import React from 'react'
import Head from './head/Head'
import Filter from './filter/Filter'
import Service from './service/Service'

const Services = () => {
  return (
    <div className='mx-auto container py-16'>
        <Head />
        <Filter />
        <Service />
    </div>
  )
}

export default Services