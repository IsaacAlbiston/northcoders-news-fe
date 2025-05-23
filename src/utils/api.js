import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://isaacalbiston-northcoders-news-be.onrender.com/api",
  });

export const fetchUsers = ()=>{
    return ncNewsApi.get("/users")
    .then(res=>{
        return res.data.users
    })
}

export const fetchUserByUsername = (username)=>{
    return ncNewsApi.get(`/users/${username}`)
    .then(res=>{
        return res.data.user
    })
}

export const fetchTopics = ()=>{
    return ncNewsApi.get("/topics")
    .then(res=>{
        return res.data.topics
    })
}

export const fetchArticles = (givenParams)=>{
    return ncNewsApi.get("/articles", {params:{...givenParams}})
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

export const incVotesOnComment = (commentId, incValue)=>{
    return ncNewsApi.patch(`/comments/${commentId}`, {inc_votes:incValue})
}

export const postCommentOnArticle = (articleId, comment)=>{
    return ncNewsApi.post(`/articles/${articleId}/comments`,comment)
}

export const removeCommentById = (commentId)=>{
    return ncNewsApi.delete(`/comments/${commentId}`)
}