import { collection, getDocs } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../Firebase/firebase'


export const useData = createContext([])


const Data = ({children}) => {

    const [languageData, setLanguageData] = useState([])

    const fetchDataLanguages = async () => {
        const querySnapshot = await getDocs(collection(db, "languages"))
        let languages = []
        querySnapshot.forEach((doc) => {
            languages.push(doc.data())
        })

        console.log(languages)
        setLanguageData(languages)
    }

    useEffect(() => {
        fetchDataLanguages()
    }, [])


  return (
    <useData.Provider value={
        {
            languageData,
            setLanguageData
        }
    }>
        {children}
    </useData.Provider>
  )
}

export default Data