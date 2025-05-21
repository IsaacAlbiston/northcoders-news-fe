import { createContext, useState } from "react";

export const SessionContext = createContext()

export const SessionProvider = ({children})=>{
    const [username, setUsername] = useState("tickle122")

    return <SessionContext.Provider value={{username, setUsername}}>
        {children}
    </SessionContext.Provider>
}