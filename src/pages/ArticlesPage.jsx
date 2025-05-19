import { useState } from "react"
import PageTitle from "../components/PageTitle"
import SearchQueryFrom from "../components/SearchQueryForm"
import SearchResults from "../components/SearchResults"

const ArticlesPage = ()=>{
    const [articlesInfo, setArticlesInfo] = useState([])
    return <>
    <PageTitle title={ "Articles" } />
    <SearchQueryFrom setArticlesInfo={setArticlesInfo} />
    <SearchResults articlesInfo={articlesInfo} />
    </>
}

export default ArticlesPage