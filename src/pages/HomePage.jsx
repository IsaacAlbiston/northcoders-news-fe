import LoginForm from "../components/LoginForm"
import PageTitle from "../components/PageTitle"
import PopularArticles from "../components/PopularArticles"
import RandomArticleSelector from "../components/RandomArticleSelector"

const HomePage = ()=>{
    return <>
    <PageTitle title={"Northcoders News"} />
    <LoginForm/>
    <RandomArticleSelector/>
    <PopularArticles/>
    </>
}

export default HomePage