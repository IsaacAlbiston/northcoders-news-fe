import { useEffect, useState } from "react"
import PageTitle from "../components/PageTitle"
import SearchQueryFrom from "../components/SearchQueryForm"
import SearchResults from "../components/SearchResults"
import { fetchArticles } from "../utils/api"
import { useParams } from "react-router"

const ArticlesPage = ()=>{
    const [articlesInfo, setArticlesInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {topic} = useParams()
    console.log(topic)

    useEffect(()=>{
        setIsLoading(true)
        fetchArticles({topic})
        .then(articles=>{
            setArticlesInfo(articles)
            setIsLoading(false)
        })
    },[topic])

    return <>
    <PageTitle title={ "Articles" } />
    <SearchQueryFrom/>
    <SearchResults articlesInfo={articlesInfo} isLoading={isLoading} />
    </>
}

export default ArticlesPage