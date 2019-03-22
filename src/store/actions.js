export const setUser = ({commit},user)=>{
	//console.log(user)
	commit("userStatus",user)
}

export const ws = ({commit},socket)=>{
	//console.log(socket)
	commit("commitws",socket)
}
