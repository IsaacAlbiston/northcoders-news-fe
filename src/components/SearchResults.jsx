import ArticleInfoCard from "./ArticleInfoCard"
import PageIndex from "./PageIndex"

const SearchResults = ({articlesInfo})=>{
    return <>
    <PageIndex/>
    <ol>
        {articlesInfo.map(article=>{
            return <li key={article.article_id} className="listItem" >
                <ArticleInfoCard article={article} />
            </li>
        })}
    </ol>
    </>
}

export default SearchResults