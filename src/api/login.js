import axios from 'axios'

export const getUser=(data)=>axios.post("/users/doLogin",data) //登录获取用户信息

export const getCategory=(data)=>axios.get("/2animx/category",data) //分类

export const getRank=(data)=>axios.get(`/2animx/rank?date=${data.date}&type=${data.type}`,data) //排行