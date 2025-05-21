import { Link } from "react-router"

const ArticleInfoCard = ({article})=>{
    return <>
    <h2>{article.title}</h2>
    <p>By {article.author}</p>
    <Link to={`/articles/${article.article_id}`} >
        View Article
    </Link>
    <p>{article.votes} Votes</p>
    <img src={article.article_img_url} alt={`Image about ${article.topic}`} className="articleImage"/>
    </>
}

export default ArticleInfoCard