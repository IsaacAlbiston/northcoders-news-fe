const ArticleInfoCard = ({article})=>{
    return <>
    <h2>{article.title}</h2>
    <p>By {article.author}</p>
    <p>{article.votes} Votes</p>
    <img src={article.article_img_url} alt={`Image about ${article.topic}`} />
    </>
}

export default ArticleInfoCard