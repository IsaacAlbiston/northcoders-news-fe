import { useEffect, useState } from "react"
import SortByDropdown from "./SortByDropdown"
import AscendingCheckbox from "./AscendingCheckbox"
import TopicsButtons from "./TopicsButtons"

const SearchQueryFrom = ({setSortBy})=>{
    const [inputSortBy, setInputSortBy] = useState(null)

    useEffect(()=>{
        setSortBy(inputSortBy)
    },[inputSortBy])
    
    return <form className="NavBar">
        <TopicsButtons/>
        <SortByDropdown inputSortBy={ inputSortBy } setInputSortBy={ setInputSortBy } />
        <AscendingCheckbox/>
    </form>
}

export default SearchQueryFrom