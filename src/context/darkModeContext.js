import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer"

const INIITIAL_STATE ={
    darkMode: false

}


export const DarkModeContext = createContext(INIITIAL_STATE)

//for us to be able to reach the context everywhere, we use a provider

export const DarkModeContextProvider= ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INIITIAL_STATE);

    return (
    <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
        {children}</DarkModeContext.Provider>
    );
}