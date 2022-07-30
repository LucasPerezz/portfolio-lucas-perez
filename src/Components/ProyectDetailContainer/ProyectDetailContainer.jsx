import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useData } from '../context/Data'
import ProyectDetail from '../ProyectDetail/ProyectDetail'

const ProyectDetailContainer = () => {
    const { name } = useParams()
    const { proyectsData } = useContext(useData)


    const proyect = proyectsData.filter((item) => item.name === name)
    console.log(proyect)

  return (
    <div>
        {
            proyect.map((item) => {
                return <ProyectDetail detail={item} />
            })
        }
    </div>
  )
}

export default ProyectDetailContainer