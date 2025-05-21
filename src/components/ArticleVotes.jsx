import { useEffect, useState } from "react"
import NegativeVoteButton from "./NegativeVoteButton"
import PositiveVoteButton from "./PositiveVoteButton"
import { incVotesOnArticle } from "../utils/api"

const ArticleVotes = ({articleId, votes})=>{
    const [voted, setVoted] = useState(false)
    const [voteInput, setVoteInput] = useState(0)
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(voteInput===1){
            setVoted(true)
            incVotesOnArticle(articleId,1)
            .catch(err=>{
                setVoted(false)
                setError(true)
                setVoteInput(0)
            })
        } else if (voteInput===-1){
            setVoted(true)
            incVotesOnArticle(articleId,-1)
            .catch(err=>{
                console.log(error)
                setVoted(false)
                setError(true)
                setVoteInput(0)
            })
        }
    },[voteInput])

    const cancelVote = ()=>{
        if(voteInput===1){
            setVoted(false)
            incVotesOnArticle(articleId,-1)
            .then(()=>{
                setVoteInput(0)
            })
            .catch(err=>{
                setVoted(true)
                setError(true)
            })
        } else if (voteInput===-1){
            setVoted(false)
            incVotesOnArticle(articleId,1)
            .then(()=>{
                setVoteInput(0)
            })
            .catch(err=>{
                setVoted(true)
                setError(true)
            })
        }
    }

    return <>
    <p>{votes+voteInput} Votes</p>
    {error?<p>Action Unsuccessful Please Retry</p>:<></>}
    {voted?<>
    <p>{voteInput} Vote Accepted</p>
    <button onClick={cancelVote}>Cancel Vote</button>
    </>
    :<>
    <PositiveVoteButton setVoteInput={setVoteInput} />
    <NegativeVoteButton setVoteInput={setVoteInput} />
    </>}
    </>
}

export default ArticleVotes