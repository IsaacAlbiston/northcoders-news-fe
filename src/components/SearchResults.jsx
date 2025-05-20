import ArticleInfoCard from "./ArticleInfoCard"
import PageIndex from "./PageIndex"

const SearchResults = ({articlesInfo, isLoading})=>{
    return <>
    {isLoading? <h1>Loading...</h1>:
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