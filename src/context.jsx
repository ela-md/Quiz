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




  return <AppContext.Provider value={hello}>{children}</AppContext.Provider>

}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
