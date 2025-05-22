const SortByDropdown = ({inputSortBy, setInputSortBy})=>{
    const updateDropdown = (event)=>{
        setInputSortBy(event.target.value)
    }

    return <div>
    <label htmlFor="SortByDropdown">Sort By:</label>
    <select id="SortByDropdown" value={inputSortBy} onChange={updateDropdown}>
        <option value={"votes"}>{"Votes"}</option>
        <option value={"created_at"}>{"Date"}</option>
        <option value={"comment_count"}>{"Comments"}</option>
    </select>
    </div>
}

export default SortByDropdown