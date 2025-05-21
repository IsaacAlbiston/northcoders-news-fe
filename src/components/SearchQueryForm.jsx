import { useEffect, useState } from "react"
import CustomDropdown from "../components/CustomDropdown"
import AscendingCheckbox from "./AscendingCheckbox"
import TopicsButtons from "./TopicsButtons"

const SearchQueryFrom = ()=>{
    const [inputSortBy, setInputSortBy] = useState(null)
    const sortOptions = ["temp","stuff","placeholder"]

    return <form className="NavBar">
        <TopicsButtons/>
        <CustomDropdown selectedOption={ inputSortBy } setSelectedOption={ setInputSortBy } optionsArr={ sortOptions } />
        <AscendingCheckbox/>
    </form>
}

export default SearchQueryFrom