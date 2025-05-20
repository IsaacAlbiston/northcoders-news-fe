import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchArticleById } from "../utils/api"
import PageTitle from "../components/PageTitle"
import FullArticleInfo from "../components/FullArticleInfo"
import CommentsList from "../components/CommentsList"

const ArticlePage = ()=>{
    const [articleInfo, setArticleInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {articleId} = useParams()
    useEffect(()=>{
        fetchArticleById(articleId)
        .then(article=>{
            setArticleInfo(article)
            setIsLoading(false)
        })
    },[])
    return <>{isLoading?<h2>Loading...</h2>:
    <>
    <PageTitle title={articleInfo.title} />
    <FullArticleInfo articleInfo={articleInfo} articleId={articleId} />
    </>}
    <CommentsList articleId={articleId} />
    </>
}

export default ArticlePage