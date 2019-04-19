import axios from 'axios'

export const getUser = (data) => axios.post("/users/doLogin", data) //登录获取用户信息



//排行
export const getRank = (data) => axios.get(`/2animx/rank?date=${data.date}&type=${data.type}`, data)
//最近
export const getRecent = (data) => axios.get(`/2animx/recent?date=${data.date}`, data)
//推荐
export const getRecommend = (data) => axios.get(`/2animx`, data)
//全部
export const getAll = (data) => axios.get(`/2animx/all?page=${data.page}&state=${data.state}&type=${data.type}&sort=${data.sort}`, data)
//搜索
export const searchComic = (data) => axios.get(`/2animx/search?searchType=${data.searchType}&
	page=${data.page}&search=${data.search}`, data)
//详情
export const getDetails = (data) => axios.post(`/2animx/detail`, data)
//获取图片
export const getImages = (data) => axios.post(`/2animx/show`, data)