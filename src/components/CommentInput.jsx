const CommentInput = ({inputComment, setInputComment})=>{
    const updateInputComment = (event)=>{
        setInputComment(event.target.value)
    }

    return <>
    <label htmlFor="comment input"></label>
    <input name="comment input" type="text" onChange={updateInputComment} value={inputComment}/>
    </>
}

export default CommentInput