import { useEffect, useState } from "react"
import { fetchTopics } from "../utils/api"
import { Link } from "react-router"

const TopicsButtons = ()=>{
    const [topics, setTopics] = useState([])

    useEffect(()=>{
        fetchTopics()
        .then(topics=>{
            setTopics(topics)
        })
    },[])

    return <div className="NavBar">
        <Link to='/articles'>All</Link>
        {topics.map(topic=>{
            return <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
        })}
    </div>
}

export default TopicsButtons