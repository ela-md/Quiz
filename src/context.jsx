import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'


export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

    const [waiting, setWaiting] = useState(true);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] =useState(0);
    const[correct, setCorrect] = useState(0);
    const[error, setError] = useState(false);
    const[isModalOpen, setIsModalOpen] = useState(false);
  
    const contextValue = {waiting, setWaiting, loading,
       setLoading, questions, setQuestions,index, setIndex,
       correct, setCorrect, error, setError, isModalOpen,
      setIsModalOpen};


  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
