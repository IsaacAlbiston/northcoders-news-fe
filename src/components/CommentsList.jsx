import { useEffect, useState } from "react"
import CommentInfoCard from "./CommentInfoCard"
import PageIndex from "./PageIndex"
import { fetchCommentsByArticleId } from "../utils/api"

const CommentsList = ({articleId})=>{
    const [isLoading, setIsLoading] = useState(true)
    const [commentsInfo, setCommentsInfo] = useState([])

    useEffect(()=>{
        fetchCommentsByArticleId(articleId)
        .then(comments=>{
            setCommentsInfo(comments)
            setIsLoading(false)
        })
    },[])

    return <>
    <h2>Comments</h2>
    {isLoading? <h2>Loading...</h2>:
    <>
    <PageIndex/>
    <ol>
        {commentsInfo.map(comment=>{
            return <li key={comment.comment_id} >
                <CommentInfoCard comment={comment} />
            </li>
        })}
    </ol>
    </>}
    </>
}

export default CommentsList