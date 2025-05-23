import { useContext, useState } from "react"
import { SessionContext } from "../contexts/SessionContext"
import UsernameInput from "./UsernameInput"
import UseLoadingHook from "../hooks/UseLoadingHook"
import { fetchUsers } from "../utils/api"

const LoginForm = ()=>{
    const [inputUsername, setInputUsername] = useState("")
    const [validUsername, setValidUsername] = useState(null)
    const {setUsername} = useContext(SessionContext)
    const { data:usersInfo, isLoading, error } = UseLoadingHook(fetchUsers)

    const loginFunction = (event)=>{
        event.preventDefault()
        const usernamesArr = []
        for (let key in usersInfo){
            usernamesArr.push(usersInfo[key].username)
        }
        if (usernamesArr.includes(inputUsername)){
            setValidUsername("Logged in")
            setUsername(inputUsername)
        }
        else{
            setValidUsername("Invalid Username")
        }
    }

    return <>
    {error?<h2>Users List Not Found</h2>:
    <>
    {isLoading? <h2>Loading...</h2>:
    <>
    <form onSubmit={loginFunction} className="listItem">
        {validUsername==="Logged in"?<p>{validUsername}</p>:
        <>
        <UsernameInput inputUsername={inputUsername} setInputUsername={setInputUsername} />
        <button>Login</button>
        <p>{validUsername}</p>
        </>}
    </form>
    </>}
    </>}
    </>
}

export default LoginForm