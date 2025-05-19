import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://isaacalbiston-northcoders-news-be.onrender.com/api",
  });

export const getArticles = ()=>{
    return ncNewsApi.get("/articles", {params:{limit:1000}})
    .then(res=>{
        return res.data.articles
    })
}