const PositiveVoteButton = ({setVoteInput})=>{
    const positiveInput = ()=>{
        setVoteInput(1)
    }

    return <button className="PositiveVoteButton" onClick={positiveInput}>+</button>
}

export default PositiveVoteButton