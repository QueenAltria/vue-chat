import store from '@/store/index'
import storage from '@/utils/storage'

export default {
	methods:{

	},
	mounted(){
		
	},

	computed:{
      currentUser:function(state){
      	//console.log("computed-currentuser")
        this.$store.dispatch('setUser',storage.fetch().currentUser)
        return this.$store.state.currentUser
      },
      //...mapState(), 
  	}
}