import React from 'react'
import ME from '../../assets/aboutMe.png'


const AboutMe = () => {


  return (
    <div className='w-4/5 max-w-4xl mx-auto min-h-screen py-24'>
        <h2 className='text-center text-lg sm:text-xl font-bold text-emerald-400'>SOBRE MI</h2>
        <div className='w-full flex flex-col sm:grid sm:grid-cols-2 sm:place-items-center sm:gap-7 mt-16'>
            <img src={ME} alt="" />
            <div class="flex justify-center items-center">
                <p>Apasionado por la programacion. Resiliente, competitivo y constante. Mi objetivo es poner en practica
                    todos los conocimientos adquiridos durante mi formacion academica y poder formar parte de un equipo
                    de trabajo que me permita desarrollarme personal y profesionalmente.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe