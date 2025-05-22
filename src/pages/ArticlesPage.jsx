import { useEffect, useState } from "react"
import PageTitle from "../components/PageTitle"
import SearchQueryFrom from "../components/SearchQueryForm"
import SearchResults from "../components/SearchResults"
import { fetchArticles } from "../utils/api"
import { useParams } from "react-router"
import UseLoadingHook from "../hooks/UseLoadingHook"

const ArticlesPage = ()=>{
    // const [articlesInfo, setArticlesInfo] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    const [articleSort, setArticleSort] = useState({sort_by:"votes"})
    const [articlesSearchTerm, setArticlesSearchTerm] = useState({})
    const {topic} = useParams()

    const { data:articlesInfo, isLoading, error } = UseLoadingHook(fetchArticles, articlesSearchTerm)

    useEffect(()=>{
        setArticlesSearchTerm({limit:1000, topic:topic, ...articleSort})
    },[topic, articleSort])

    return <>
    <PageTitle title={ "Articles" } />
    <SearchQueryFrom setArticleSort={setArticleSort} />
    {error?<PageTitle title={ "Topic Not Found" } />:
    <>
    {isLoading? <h2>Loading...</h2>:
    <SearchResults articlesInfo={articlesInfo} />}
    </>
    }
    </>
}

export default ArticlesPage