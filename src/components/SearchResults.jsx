import ArticleInfoCard from "./ArticleInfoCard"
import PageIndex from "./PageIndex"

const SearchResults = ({articlesInfo, isLoading})=>{
    return <>
    {isLoading? <h2>Loading...</h2>:
    <div>
    <PageIndex/>
    <ol>
        {articlesInfo.map(article=>{
            return <li key={article.article_id} className="listItem" >
                <ArticleInfoCard article={article} />
            </li>
        })}
    </ol>
    </div>}
    </>
}

export default SearchResults