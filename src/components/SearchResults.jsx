import ArticleInfoCard from "./ArticleInfoCard"
import PageIndex from "./PageIndex"

const SearchResults = ({articlesInfo})=>{
    return <>
    <PageIndex itemsInfo={articlesInfo} path="/articles"/>
    <ol>
        {articlesInfo.articles.map(article=>{
            return <li key={article.article_id} className="listItem" >
                <ArticleInfoCard article={article} />
            </li>
        })}
    </ol>
    <PageIndex itemsInfo={articlesInfo} path="/articles"/>
    </>
}

export default SearchResults