const userStatus=(state,user) =>{
	if(user){
		state.currentUser=user
		state.isLogin=true
	}else if(user==null){
		//登出清空sessionStorage
		sessionStorage.setItem("userName",null)
		sessionStorage.setItem("userToken","")
		state.currentUser=null
		state.isLogin=false
		state.userToken=""
	}
}

const userToken=(state,token)=>{
	if(token){
		state.token=token
	}else{
		state.token=""
	}
}

export {userStatus,userToken}