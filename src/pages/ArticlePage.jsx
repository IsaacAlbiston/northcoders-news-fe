import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchArticleById } from "../utils/api"
import PageTitle from "../components/PageTitle"
import FullArticleInfo from "../components/FullArticleInfo"
import CommentsList from "../components/CommentsList"
import NewCommentForm from "../components/NewCommentForm"
import SetStateButton from "../components/SetStateButton"

const ArticlePage = ()=>{
    const [articleInfo, setArticleInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [createComment, setCreateComment] = useState(false)
    const [additionToComments, setAdditionToComments] = useState(0)
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
    {createComment?<NewCommentForm articleId={articleId} setCreateComment={setCreateComment} setAdditionToComments={setAdditionToComments} />
    :<SetStateButton setState={setCreateComment} valueToSet={true} buttonText={"New Comment"}/>}
    </>}
    <CommentsList articleId={articleId} additionToComments={additionToComments} />
    </>
}

export default ArticlePage