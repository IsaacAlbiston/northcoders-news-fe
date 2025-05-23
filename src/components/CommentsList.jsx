import { useEffect, useState } from "react"
import CommentInfoCard from "./CommentInfoCard"
import PageIndex from "./PageIndex"
import { fetchCommentsByArticleId } from "../utils/api"
import UseLoadingHook from "../hooks/UseLoadingHook"
import { useParams } from "react-router"

const CommentsList = ({articleId, additionToComments})=>{
    const [commentsSearchTerm, setCommentsSearchTerm] = useState({limit:10, p:1, articleId:articleId})
    const {pageNumber} = useParams()
    const { data:commentsInfo, isLoading, error } = UseLoadingHook(fetchCommentsByArticleId, commentsSearchTerm, additionToComments)
    
    useEffect(()=>{
        setCommentsSearchTerm({limit:10, p:pageNumber, articleId:articleId})
    },[pageNumber])
    
    return <>
    {error?<h2>Error Please Refresh Page</h2>:
    <>
    {isLoading? <h2>Loading...</h2>:
    <>
    <h2>{commentsInfo.total_count} comments</h2>
    <PageIndex itemsInfo={commentsInfo} path={`/article/${articleId}`}/>
    <ol>
        {commentsInfo.comments.map(comment=>{
            return <li key={comment.comment_id} className="listItem" >
                <CommentInfoCard comment={comment} />
            </li>
        })}
    </ol>
    <PageIndex itemsInfo={commentsInfo} path={`/article/${articleId}`}/>
    </>}
    </>}
    </>
}

export default CommentsList