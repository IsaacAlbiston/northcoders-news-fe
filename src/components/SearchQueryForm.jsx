import { useEffect, useState } from "react"
import SortByDropdown from "./SortByDropdown"
import AscendingCheckbox from "./AscendingCheckbox"
import TopicLinks from "./TopicLinks"

const SearchQueryFrom = ({setArticleSort, topic})=>{
    const [inputAscCheckbox, setInputAscCheckbox] = useState(false)
    const [inputSortBy, setInputSortBy] = useState("votes")

    useEffect(()=>{
        setArticleSort(current=>{
            const copySortObj = {...current}
            copySortObj.sort_by = inputSortBy
            if (inputAscCheckbox) copySortObj.order = "ASC"
            else copySortObj.order = "DESC"
            return copySortObj
        })
    },[inputSortBy, inputAscCheckbox])
    
    return <form>
        <TopicLinks topic={topic} />
        <div className="NavBar">
            <SortByDropdown inputSortBy={ inputSortBy } setInputSortBy={ setInputSortBy } />
            <AscendingCheckbox inputAscCheckbox={ inputAscCheckbox } setInputAscCheckbox={ setInputAscCheckbox } />
        </div>
    </form>
}

export default SearchQueryFrom