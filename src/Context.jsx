import { useState,useEffect,createContext } from "react";

export const Context = createContext()

// things that need to be shared to other componenets go here

export const ContextProvider = (props) => {
  return (
    <Context.Provider value={{}}>
      {props.children}
    </Context.Provider>
  )
}