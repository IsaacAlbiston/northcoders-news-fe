const NegativeVoteButton = ({setVoteInput})=>{
    const negativeInput = ()=>{
        setVoteInput(-1)
    }

    return <button className="NegativeVoteButton" onClick={negativeInput}>-</button>
}

export default NegativeVoteButton