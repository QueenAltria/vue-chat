import Vue from 'vue'
import vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(vuex);

/**
const state={
	show:false,
	count:0,
	user_id:110,
}

const getters={
	getUser_id:(state)=>{
		return state.user_id
	},
}

const mutations={
	increment(state){
		state.count++
	}
}

export default {
	state,
	getters,
	mutations
}
**/

// const store=new vuex.Store({
// 	state:{
// 		show:false,
// 		count:0,
// 		user_id:110,
// 		todos:"tosos"
// 	},
// 	mutations:{
// 		increment(state){
// 			state.count++
// 		}
// 	},
// 	getters:{
// 		doneTodos: state => {
//       		return state.todos.substring(0,state.count)
//     	}
// 	},
// 	actions: {
//     	increment (context) {
//       		context.commit('increment')
//     	},

//     	increment2 ({ commit }) {
//     		commit('increment')
//   		}
//   	}
// })
const store=new vuex.Store({
	state:{
		currentUser:null,
		isLogin:false,
		token:"",
	},
	mutations,
	getters,
	actions
})

export default store

/**
export default new vuex.Store({
	state:{
		show:false,
		count:0
	},
	mutations:{
		increment(state){
			state.count++
		}
	},
})
**/