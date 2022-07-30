import React, { useContext } from 'react'
import { useData } from '../context/Data.js'
import './Skills.css'

const Skills = () => {

    const { languageData } = useContext(useData)

  return (
    <>
    <h2 className='text-center text-emerald-400 font-bold text-lg sm:text-xl lg:text-2xl'>SKILLS</h2>
    <div className='w-4/5 h-max m-auto max-w-4xl overflow-x-scroll snap-proximity snap-center my-24 list-container'>
        <div className='flex w-full gap-12 mb-7'>
            {
                languageData.map((language) => {
                    return (
                        
                        <img src={language.image} alt="" className='w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain'/>
                       
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default Skills