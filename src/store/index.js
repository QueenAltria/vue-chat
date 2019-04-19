import Vue from 'vue'
import vuex from 'vuex'
import {mapState} from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
//监控state的值
import createLogger from 'vuex/dist/logger'

Vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production'

// mutations只能是同步操作
// actions可以是异步操作
const store=new vuex.Store({
	state:{
		currentUser:null,
		isLogin:false,
		ws:null,

		currentComic:{}  //存在local里存在问题：开启多个标签页，会覆盖local
	},
	mutations,
	getters,
	actions,
	strict: debug,
  	plugins: debug ? [createLogger()] : []
})

export default store
