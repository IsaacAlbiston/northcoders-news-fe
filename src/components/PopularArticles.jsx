import { useEffect, useState } from "react"
import { fetchArticles, fetchTopics } from "../utils/api"
import ArticleInfoCard from "./ArticleInfoCard"

const PopularArticles = ()=>{
    const [popArticlesInfo, setPopArticlesInfo] = useState({})

    useEffect(()=>{
        fetchTopics()
        .then(topics=>{
            topics.forEach(({slug})=>{
                fetchArticles({limit:1, topic:slug, sort_by: "votes"})
                .then(articles=>{
                    setPopArticlesInfo(current=>{
                        const copyCurrent = {...current}
                        copyCurrent[slug] = articles[0]
                        return copyCurrent
                    })
                })
            })
        })
    },[])

    return <>
    <h2>Popular Articles</h2>
    <ol>
        {Object.keys(popArticlesInfo).map(articleKey=>{
            return <li key={popArticlesInfo[articleKey].article_id} className="listItem" >
                <ArticleInfoCard article={popArticlesInfo[articleKey]} />
            </li>
        })}
    </ol>
    </>
}

export default PopularArticles