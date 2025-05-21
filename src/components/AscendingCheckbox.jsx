const AscendingCheckbox = ({inputAscCheckbox, setInputAscCheckbox})=>{

    const updateCheckbox = (event)=>{
        setInputAscCheckbox(!inputAscCheckbox)
    }

    return <div>
         <label htmlFor="AscendingCheckbox">Sort Ascending:</label>
        <input type="checkbox" value={inputAscCheckbox} onChange={updateCheckbox}/>
    </div>
}

export default AscendingCheckbox