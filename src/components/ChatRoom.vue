<template>
	<div>
		<div v-for="(item,index) in arr"   >{{item}}</div>

		<el-input class=""  v-model="message" />
		<el-button @click="send">发送</el-button>

	</div>
</template>

<script>
import store from "../store/index.js"
export default {

  name: 'ChatRoom',

  data() {
    return {
    	message:'',
    	arr:[],
    };
  },

  methods:{
  	send(){
  		var webSocket=this.$store.state.ws
  		var user=this.$store.state.currentUser

  		if(webSocket){
  			var msg={
                from:user._id,
                to:"000001",
                msg:this.message,
                type:'text'
              }
             this.arr.push(msg.msg)
  			webSocket.send(JSON.stringify(msg))
  			this.message=""
  		}
  		
  	}
  },
  computed:{

      currentuser:function(state){
        let localData=window.localStorage.getItem("chat_vuex")
        this.$store.dispatch('setUser',JSON.parse(localData).currentUser)
        return this.$store.state.currentUser
      },

      webSocket:function(state){
      	
      	return this.$store.state.ws
      }
      
  },

  mounted(){
  	var that=this
  	//var webSocket=this.$store.state.ws
  	 var user=this.$store.state.currentUser
  	 console.log(this.webSocket.onmessage)
  	 //
  	 this.webSocket.onmessage =  (evt)=> {
  			console.log("收到消息了"+evt.data)
  			 var msg=JSON.parse(evt.data)
  			 this.arr.push(msg.msg)
          // that.arr.push(msg.msg)
          //console.log(that.arr)
          
      	}			

  	if(this.webSocket){
  		this.webSocket.onmessage =  (evt)=> {
  			console.log("收到消息了"+evt.data)
  			 var msg=JSON.parse(evt.data)
  			 this.arr.push(msg.msg)
          // that.arr.push(msg.msg)
          //console.log(that.arr)
          
      	}			
  	}else{
  		console.log("需要重新创建socket")
  		// var webSocket = new WebSocket("ws://172.83.154.37:3001");
    //     webSocket.onopen = function (evt) {
    //       // 一旦连接成功，就发送第一条数据
    //        if(user){
    //           var message={
    //             from:user._id,
    //             to:"000001",
    //             msg:`欢迎用户-${user.account}`,
    //             type:'system'
    //           }
    //           webSocket.send(JSON.stringify(message))

    //           webSocket.onmessage =  (evt)=> {
	  	// 		console.log("收到消息了"+evt.data)
	  	// 		 var msg=JSON.parse(evt.data)
	  	// 		 this.arr.push(msg.msg)
      
          
    //   			}	
    //        }
    //   	}
    //   	this.$store.dispatch('setSocket',webSocket)
  	}
  }
};
</script>

<style lang="css" scoped>
</style>
