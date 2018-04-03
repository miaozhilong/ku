import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
	state:{
		homeMsg:'这是vuex里面的数据'
	},
	mutations:{
		setHomeMsg(state,data){
			state.homeMsg=data.msg;
		}
	}
})

export default store