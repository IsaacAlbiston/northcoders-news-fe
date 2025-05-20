const FullArticleInfo = ({articleInfo})=>{
    return <>
    <p>About {articleInfo.topic}</p>
    <p>By {articleInfo.author}</p>
    <p>{articleInfo.body}</p>
    <img src={articleInfo.article_img_url} alt={`Image about ${articleInfo.topic}`} />
    <p>{articleInfo.votes} Votes</p>
    </>
}

export default FullArticleInfo