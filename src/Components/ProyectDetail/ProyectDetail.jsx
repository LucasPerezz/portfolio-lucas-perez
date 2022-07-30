import React from 'react'
import { Link } from 'react-router-dom'

const ProyectDetail = ({detail}) => {



  return (
    <div className='w-full sm:w-4/5 lg:w-3/4 mx-auto min-h-screen flex flex-col sm:grid sm:grid-cols-2 sm:place-items-center'>
        <div className='flex flex-col sm:flex-row items-center'>
            <div className='flex sm:flex-col gap-3'>
                {
                    detail.views.map((view) => {
                        return <img src={view} alt="" className='w-48 h-48 object-contain'/>
                    })
                }
            </div>
            <div>
                <img src={detail.image} alt=""  className='w-full'/>
            </div>
        </div>
        <div>
            <div>
                <h2>{detail.name}</h2>
            </div>
            <div className='flex gap-5 mx-auto flex-wrap sm:w-3/4 justify-center'>
              {detail.languages.map((language) => {
                return <p className='px-2 sm:py-1 sm:px-3 border-2 text-xs sm:text-sm rounded-md border-gray-200 shadow-sm'>{language}</p>
              })}
            </div>
            <div>
                <button><a href={detail.github}>Github</a></button>
                <button><a href={detail.demo}>Demo</a></button>
            </div>
        </div>
    </div>
  )
}

export default ProyectDetail