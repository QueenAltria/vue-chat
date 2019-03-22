import axios from 'axios'

export const getUser=(data)=>axios.post("/users/doLogin",data) //登录获取用户信息