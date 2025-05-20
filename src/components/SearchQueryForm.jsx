import { useEffect, useState } from "react"
import CustomDropdown from "../components/CustomDropdown"
import AscendingCheckbox from "./AscendingCheckbox"
import { fetchArticles } from "../utils/api"

const SearchQueryFrom = ({setArticlesInfo, setIsLoading})=>{
    const [inputTopic, setInputTopic] = useState(null)
    const [inputSortBy, setInputSortBy] = useState(null)

    const topics = ["temp","stuff","placeholder"]
    const sortOptions = ["temp","stuff","placeholder"]

    useEffect(()=>{
        fetchArticles()
        .then(articles=>{
            setArticlesInfo(articles)
            setIsLoading(false)
        })
    },[])

    return <form>
        <CustomDropdown selectedOption={ inputTopic } setSelectedOption={ setInputTopic } optionsArr={ topics } />
        <CustomDropdown selectedOption={ inputSortBy } setSelectedOption={ setInputSortBy } optionsArr={ sortOptions } />
        <AscendingCheckbox/>
    </form>
}

export default SearchQueryFrom