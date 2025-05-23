const UsernameInput = ({inputUsername, setInputUsername})=>{

    const updateInputUsername = (event)=>{
        setInputUsername(event.target.value)
    }

    return<>
    <label htmlFor="username">Enter username:</label>
    <input onChange={updateInputUsername} id="username" type="text" value={inputUsername}/>
    </>
}

export default UsernameInput