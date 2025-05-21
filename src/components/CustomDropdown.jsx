const CustomDropdown = ({selectedOption, setSelectedOption, optionsArr})=>{
    const updateDropdown = (event)=>{
        setSelectedOption(event.target.value)
    }

    return <select value={selectedOption} onChange={updateDropdown}>
        <option value={null}>{"All"}</option>
        <>
        {optionsArr.map(option=>{
            return <option value={option}>{option}</option>
        })}
        </>
    </select>
}

export default CustomDropdown