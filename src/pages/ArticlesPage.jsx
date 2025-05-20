import { useState } from "react"
import PageTitle from "../components/PageTitle"
import SearchQueryFrom from "../components/SearchQueryForm"
import SearchResults from "../components/SearchResults"

const ArticlesPage = ()=>{
    const [articlesInfo, setArticlesInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    return <>
    <PageTitle title={ "Articles" } />
    <SearchQueryFrom setArticlesInfo={setArticlesInfo} setIsLoading={setIsLoading} />
    <SearchResults articlesInfo={articlesInfo} isLoading={isLoading} />
    </>
}

export default ArticlesPage