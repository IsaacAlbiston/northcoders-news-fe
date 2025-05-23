import { useEffect, useState } from "react"
import PageTitle from "../components/PageTitle"
import SearchQueryFrom from "../components/SearchQueryForm"
import SearchResults from "../components/SearchResults"
import { fetchArticles } from "../utils/api"
import { useParams } from "react-router"
import UseLoadingHook from "../hooks/UseLoadingHook"

const ArticlesPage = ()=>{
    const [articleSort, setArticleSort] = useState({sort_by:"votes"})
    const [articlesSearchTerm, setArticlesSearchTerm] = useState({})
    const {topic, pageNumber} = useParams()

    const { data:articlesInfo, isLoading, error } = UseLoadingHook(fetchArticles, articlesSearchTerm)

    useEffect(()=>{
        setArticlesSearchTerm({limit:10, p:pageNumber, topic:topic, ...articleSort})
    },[topic, articleSort, pageNumber])

    return <>
    <PageTitle title={ "Articles" } />
    <SearchQueryFrom setArticleSort={setArticleSort} topic={topic} />
    {error?<PageTitle title={ "Topic Not Found" } />:
    <>
    {isLoading? <h2>Loading...</h2>:
    <SearchResults articlesInfo={articlesInfo}/>}
    </>
    }
    </>
}

export default ArticlesPage