import React, { useState, createContext } from 'react'

export const Context = createContext({})

export default function UserContextProvider({children}) {
  const [jwt, setJwt] = useState(null)

  return <Context.Provider value={{jwt, setJwt}}>
    {children}
  </Context.Provider>
}
