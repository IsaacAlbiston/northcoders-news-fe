import ArticleVotes from "./ArticleVotes"

const FullArticleInfo = ({articleInfo, articleId})=>{
    return <div className="listItem">
    <p>About {articleInfo.topic}</p>
    <p>By {articleInfo.author}</p>
    <p>{articleInfo.created_at.slice(0,-14)}</p>
    <p>{articleInfo.body}</p>
    <img src={articleInfo.article_img_url} alt={`Image about ${articleInfo.topic}`} className="articleImage" />
    <ArticleVotes articleId={articleId} votes={articleInfo.votes} />
    </div>
}

export default FullArticleInfo