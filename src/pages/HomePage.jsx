import PageTitle from "../components/PageTitle"
import PopularArticles from "../components/PopularArticles"
import RandomArticleSelector from "../components/RandomArticleSelector"

const HomePage = ()=>{
    return <>
    <PageTitle title={"Northcoders News"} />
    <RandomArticleSelector/>
    <PopularArticles/>
    </>
}

export default HomePage