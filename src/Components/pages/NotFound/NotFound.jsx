import React from 'react'
import bgNotFound from '../../Imges/Concepto de fallo técnico para landing page _ Vector Gratis.jpeg'
import  './NotFound.css'

export default function NotFound() {
  return (
    <div className='bg-notFound'>
      <div>
        <img src={bgNotFound} alt="Not Found" />
      </div>
    </div>
  )
}
