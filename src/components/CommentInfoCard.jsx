import { useContext, useState } from "react"
import { incVotesOnComment, removeCommentById } from "../utils/api"
import { SessionContext } from "../contexts/SessionContext"
import VoteButtons from "./VoteButtons"

const CommentInfoCard = ({comment})=>{
    const {username} = useContext(SessionContext)
    const [deleteInProgress, setDeleteInProgress] = useState(false)
    const [isDeleteSuccessful, setIsDeleteSuccessful] = useState(false)
    const [error, setError] = useState(false)

    const attemptDeleteComment = ()=>{
        setDeleteInProgress(true)
        removeCommentById(comment.comment_id)
        .then(()=>{
            setIsDeleteSuccessful(true)
            setError(false)
            setDeleteInProgress(false)
        })
        .catch(()=>{
            setError(true)
            setDeleteInProgress(false)
        })
    }

    return <>
    {isDeleteSuccessful?<p>Comment Deleted</p>:
    <>
    <h2>{comment.author}</h2>
    <p>{comment.body}</p>
    <p>{comment.created_at.slice(0,-14)}</p>
    <VoteButtons incVotesFunction={incVotesOnComment} itemId={comment.comment_id} votes={comment.votes}/>
    {error?<p>Delete Unsuccessful Please Retry</p>:<></>}
    {deleteInProgress?<p>Deleting...</p>:
    <>
    {comment.author===username?<button onClick={attemptDeleteComment}>Delete Comment</button>:<></>}
    </>}
    </>}
    </>
}

export default CommentInfoCard