import {createContext } from "react";
import { useState} from "react";

export const GlobalContext=createContext()

export const GlobalContextProvider=({children})=>{
    const [toggleSwitchState, setToggleSwitchState]=useState(false)
    return <GlobalContext.Provider value={{toggleSwitchState, setToggleSwitchState}}>{children}</GlobalContext.Provider>
}



