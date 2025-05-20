import { Link } from "react-router"

const ArticleInfoCard = ({article})=>{
    return <>
    <h2>{article.title}</h2>
    <p>By {article.author}</p>
    <p>{article.votes} Votes</p>
    <img src={article.article_img_url} alt={`Image about ${article.topic}`} className="articleImage"/>
    <Link to={`/articles/${article.article_id}`} >
        View Article
    </Link>
    </>
}

export default ArticleInfoCard