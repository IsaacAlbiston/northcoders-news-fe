import ArticleInfoCard from "./ArticleInfoCard"
import PageIndex from "./PageIndex"

const SearchResults = ({articlesInfo, isLoading})=>{
    return <>
    {isLoading? <h2>Loading...</h2>:
    <>
    <PageIndex/>
    <ol>
        {articlesInfo.map(article=>{
            return <li key={article.article_id} >
                <ArticleInfoCard article={article} />
            </li>
        })}
    </ol>
    </>}
    </>
}

export default SearchResults