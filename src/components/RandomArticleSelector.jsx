import { useState } from "react"
import UseLoadingHook from "../hooks/UseLoadingHook"
import { fetchArticles } from "../utils/api"
import { Link } from "react-router"

const RandomArticleSelector = ()=>{
    const [searchParams] = useState({limit:1})
    const { data:articlesInfo, isLoading, error } = UseLoadingHook(fetchArticles, searchParams)

    return <>
    {error?<h2>Error Please Refresh Page</h2>:
    <>
    {isLoading? <h2>Loading...</h2>:
    <>
    <Link to={`article/${Math.ceil(articlesInfo.total_count*Math.random())}/1`}>View Random Article</Link>
    <p>{articlesInfo.total_count} articles!</p>
    </>}
    </>}
    </>
}

export default RandomArticleSelector