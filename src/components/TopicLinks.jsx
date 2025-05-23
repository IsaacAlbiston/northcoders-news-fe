import { fetchTopics } from "../utils/api"
import { Link, useParams } from "react-router"
import UseLoadingHook from "../hooks/UseLoadingHook"

const TopicLinks = ({topic:currentTopic})=>{
    const { data:topics, isLoading, error } = UseLoadingHook(fetchTopics)

    return <div className="NavBar">
        {error?<h2>Error Please Refresh Page</h2>:
        <>
        {isLoading? <h2>Loading...</h2>:
        <>
        {currentTopic?<Link to='/articles/1'>All</Link>:
        <p className="unclickableLink">All</p>}
        {topics.map(topic=>{
            return <>
            {currentTopic!==topic.slug?<Link to={`/articles/1/${topic.slug}`}>{topic.slug}</Link>:
            <p className="unclickableLink">{topic.slug}</p>}
            </>
        })}
        </>}
        </>}
    </div>
}

export default TopicLinks