import { useEffect, useState } from "react"
import PageTitle from "../components/PageTitle"
import SearchQueryFrom from "../components/SearchQueryForm"
import SearchResults from "../components/SearchResults"
import { fetchArticles } from "../utils/api"
import { useParams } from "react-router"

const ArticlesPage = ()=>{
    const [articlesInfo, setArticlesInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [articleSort, setArticleSort] = useState({sort_by:"votes"})
    const {topic} = useParams()

    useEffect(()=>{
        setIsLoading(true)
        fetchArticles({topic, ...articleSort})
        .then(articles=>{
            setArticlesInfo(articles)
            setIsLoading(false)
        })
    },[topic, articleSort])

    return <>
    <PageTitle title={ "Articles" } />
    <SearchQueryFrom setArticleSort={setArticleSort} />
    <SearchResults articlesInfo={articlesInfo} isLoading={isLoading} />
    </>
}

export default ArticlesPage