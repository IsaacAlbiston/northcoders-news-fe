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

export const fetchCommentsByArticleId = (articleId)=>{
    return ncNewsApi.get(`/articles/${articleId}/comments`, {params:{limit:1000}})
    .then(res=>{
        return res.data.comments
    })
}

export const incVotesOnArticle = (articleId, incValue)=>{
    return ncNewsApi.patch(`/articles/${articleId}`, {inc_votes:incValue})
}

export const postCommentOnArticle = (articleId, comment)=>{
    return ncNewsApi.post(`/articles/${articleId}/comments`,comment)
}