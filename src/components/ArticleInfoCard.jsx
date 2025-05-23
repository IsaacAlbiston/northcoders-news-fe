import { Link } from "react-router"

const ArticleInfoCard = ({article})=>{
    return <>
    <h2>{article.title}</h2>
    <p>By {article.author}</p>
    <p>{article.votes} Votes</p>
    <div className="ArticleLinks" >
        <Link to={`/article/${article.article_id}/1`} >View Article</Link>
        <Link to={`/articles/${article.topic}`} >View Topic</Link>
    </div>
    <img src={article.article_img_url} alt={`Image about ${article.topic}`} className="articleImage"/>
    </>
}

export default ArticleInfoCard