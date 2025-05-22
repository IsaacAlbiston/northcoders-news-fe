import { useContext, useEffect, useState } from "react"
import CommentInput from "./CommentInput"
import SetStateButton from "./SetStateButton"
import { postCommentOnArticle } from "../utils/api"
import { SessionContext } from "../contexts/SessionContext"

const NewCommentForm = ({setCreateComment, articleId, setAdditionToComments})=>{
    const [commentToPost, setCommentToPost] = useState("")
    const [inputComment, setInputComment] = useState("")
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {username, setUsername} = useContext(SessionContext)
    useEffect(()=>{
        if (commentToPost){
            setIsLoading(true)
            postCommentOnArticle(articleId, {username:username,body:commentToPost})
            .then(()=>{
                setCommentToPost("")
                setAdditionToComments(current=>{
                    const newValue = current+1
                    return newValue
                })
                setCreateComment(false)
            })
            .catch(err=>{
                setError(true)
            })
            setIsLoading(false)
        }
    },[commentToPost])

    return <form className="listItem">
        <CommentInput inputComment={inputComment} setInputComment={setInputComment} />
        {error?<p>Post Unsuccessful Please Retry</p>:<></>}
        <div>
        {isLoading?<p>Posting...</p>:<SetStateButton setState={setCommentToPost} valueToSet={inputComment} buttonText={"Post"}/>}
        <SetStateButton setState={setCreateComment} valueToSet={false} buttonText={"Cancel"}/>
        </div>
    </form>
}

export default NewCommentForm