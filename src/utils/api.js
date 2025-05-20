import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://isaacalbiston-northcoders-news-be.onrender.com/api",
  });

export const fetchArticles = ()=>{
    return ncNewsApi.get("/articles", {params:{limit:1000}})
    .then(res=>{
        return res.data.articles
    })
}

export const fetchArticleById = (articleId)=>{
    return ncNewsApi.get(`/articles/${articleId}`)
    .then(res=>{
        return res.data.article
    })
}