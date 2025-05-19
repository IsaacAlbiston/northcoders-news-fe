const CustomDropdown = ({selectedOption, setSelectedOption, optionsArr})=>{
    const updateDropdown = (event)=>{
        setSelectedOption(event.target.value)
    }

    return <select onChange={updateDropdown}>
        {optionsArr.map(singleOption=>{
            return <option value={selectedOption}>{singleOption}</option>
        })}
    </select>
}

export default CustomDropdown