import { useEffect, useState } from "react"
import CommentInfoCard from "./CommentInfoCard"
import PageIndex from "./PageIndex"
import { fetchCommentsByArticleId } from "../utils/api"
import UseLoadingHook from "../hooks/UseLoadingHook"

const CommentsList = ({articleId, additionToComments})=>{
    const { data:commentsInfo, isLoading, error } = UseLoadingHook(fetchCommentsByArticleId, articleId, additionToComments)

    return <>
    {error?<h2>Error Please Refresh Page</h2>:
    <>
    {isLoading? <h2>Loading...</h2>:
    <>
    <h2>{commentsInfo.length} comments</h2>
    <PageIndex/>
    <ol>
        {commentsInfo.map(comment=>{
            return <li key={comment.comment_id} className="listItem" >
                <CommentInfoCard comment={comment} />
            </li>
        })}
    </ol>
    </>}
    </>}
    </>
}

export default CommentsList