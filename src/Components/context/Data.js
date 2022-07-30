import { collection, getDocs } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../Firebase/firebase'


export const useData = createContext([])


const Data = ({children}) => {

    const [languageData, setLanguageData] = useState([])
    const [proyectsData, setProyectsData] = useState([])

    const fetchDataLanguages = async () => {
        const querySnapshot = await getDocs(collection(db, "languages"));
        let languages = [];
        querySnapshot.forEach((doc) => {
            languages.push(doc.data());
        })

        setLanguageData(languages);
    }

    const fetchDataProyects = async () => {
        const querySnapshot = await getDocs(collection(db, "proyects"));
        let proyects = [];
        querySnapshot.forEach((doc) => {
            proyects.push(doc.data())
        })

        setProyectsData(proyects)
    }

    useEffect(() => {
        fetchDataLanguages();
        fetchDataProyects()
    }, [])


  return (
    <useData.Provider value={
        {
            languageData,
            setLanguageData,
            proyectsData,
            setProyectsData
        }
    }>
        {children}
    </useData.Provider>
  )
}

export default Data