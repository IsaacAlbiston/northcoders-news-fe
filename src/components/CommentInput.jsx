const CommentInput = ({inputComment, setInputComment})=>{
    const updateInputComment = (event)=>{
        setInputComment(event.target.value)
    }

    return <>
    <label htmlFor="CommentInput">New Comment</label>
    <textarea className="CommentInput" onChange={updateInputComment} value={inputComment}/>
    </>
}

export default CommentInput