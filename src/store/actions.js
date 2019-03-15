export const setUser = ({commit},user)=>{
	console.log(user)
	commit("userStatus",user)
}

export const setToken = ({commit},token)=>{
	commit("userToken",token)
}