const CommentInfoCard = ({comment})=>{
    return <>
    <h2>{comment.author}</h2>
    <p>{comment.body}</p>
    <p>{comment.created_at.slice(0,-14)}</p>
    <p>{comment.votes} Votes</p>
    </>
}

export default CommentInfoCard