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
        {currentTopic?<Link to='/articles'><p className="link">All</p></Link>:
        <p>All</p>}
        {topics.map(topic=>{
            return <>
            {currentTopic!==topic.slug?<Link to={`/articles/${topic.slug}`}><p className="link">{topic.slug}</p></Link>:
            <p>{topic.slug}</p>}
            </>
        })}
        </>}
        </>}
    </div>
}

export default TopicLinks