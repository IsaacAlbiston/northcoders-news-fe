import { createContext, useState } from "react";

export const SessionContext = createContext()

export const SessionProvider = ({children})=>{
    const [username, setUsername] = useState("")

    return <SessionContext.Provider value={{username, setUsername}}>
        {children}
    </SessionContext.Provider>
}