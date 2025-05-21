const SetStateButton = ({setState, valueToSet, buttonText})=>{
    const updateGivenState = (event)=>{
        event.preventDefault()
        setState(valueToSet)
    }
    return <button onClick={updateGivenState}>{buttonText}</button>
}

export default SetStateButton