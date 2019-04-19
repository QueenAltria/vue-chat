const userStatus=(state,user) =>{
	if(user){
		state.currentUser=user
		state.isLogin=true
		var current=JSON.parse(localStorage.getItem("chat_vuex"))

		let item=current==null?{}:current
		item.currentUser=user
		
		

		localStorage.setItem("chat_vuex",JSON.stringify(item))
	}else if(user==null){
		//登出清空sessionStorage
		sessionStorage.setItem("userName",null)
		sessionStorage.setItem("userToken","")
		state.currentUser=null
		state.isLogin=false
		state.userToken=""
	}
}

const commitws=(state,socket)=>{
	if(socket){
		state.ws=socket
	}else{
		state.ws=null
	}
}

const userToken=(state,token)=>{
	if(token){
		state.token=token
	}else{
		state.token=""
	}
}

const setComic=(state,comic)=>{
	if(token){
		state.currentComic=comic
	}else{
		state.currentComic={}
	}
}

export {userStatus,userToken,commitws,setComic}