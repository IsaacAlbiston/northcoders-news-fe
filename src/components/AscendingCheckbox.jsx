const AscendingCheckbox = ({inputAscCheckbox, setInputAscCheckbox})=>{

    const updateCheckbox = (event)=>{
        setInputAscCheckbox(!inputAscCheckbox)
    }

    return <div>
        <label htmlFor="AscendingCheckbox">Sort Ascending:</label>
        <input id="AscendingCheckbox" type="checkbox" value={inputAscCheckbox} onChange={updateCheckbox}/>
    </div>
}

export default AscendingCheckbox