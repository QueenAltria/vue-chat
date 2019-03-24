<template>

  <transition enter-active-class="animated zoomIn" name="zoom">
<!-- <div class="app-wrapper-web" > -->
  <div class="container-div" v-show="show">
    <div class="left-div">
      <el-menu :default-active="defaultActive" class="el-menu-vertical-do" :collapse="isCollapse" @select="selectMenu" unique-opened router>
        <el-menu-item index="/MainWindow/User" class="mb-15">
          <img src="../../src/assets/head.jpg">
          <span slot="title">咕咕咕~</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/ChatRoom">
          <i class="iconfont icon-chat-room"></i>
          <span slot="title">聊天室</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/Message">
          <i class="iconfont icon-message"></i>
          <span slot="title">Message</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/Contact">
          <i class="iconfont icon-contact"></i>
          <span slot="title">Contact</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/Document">
          <i class="iconfont icon-document"></i>
          <span slot="title">Document</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/Upcoming">
          <i class="iconfont icon-upcoming"></i>
          <span slot="title">Upcoming</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/Calendar">
          <i class="iconfont icon-calendar"></i>
          <span slot="title">Calendar</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/Collection">
          <i class="iconfont icon-collection"></i>
          <span slot="title">Collection</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/Statistics">
          <i class="iconfont icon-statistics"></i>
          <span slot="title">Statistics</span>
        </el-menu-item>
        <el-menu-item index="/MainWindow/Setting" class="setting">
          <i class="iconfont icon-setting"></i>
          <span slot="title">Setting</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-div">
      <router-view/> 
    </div>
  </div>
<!-- </div> -->
</transition>

</template>

<script>
import store from "../store/index.js"
import showTip from "../utils/cursortip"
import message from "./CurrentMessage"
import windowtitle from "./MainTitle"
import chat from "./ChatView"
import send from "./SendView"
import {mapState} from 'vuex'
import syncUser from '../utils/syncUser'
import storage from '@/utils/storage'


export default {
  name: 'MainWindow',
  data () {
    return {
      msg: '',
      number:0,
      input:'',
      isCollapse:true,
      select:'1',
      show:false,
      webSocket:null,
      defaultActive:'/MainWindow/ChatRoom'
    }
  },
  mixins:[syncUser],
  methods:{

    selectMenu(index,indexPath){
      //console.log(index)
      this.select=index
      if(index=='/MainWindow/Message' || index=="/MainWindow/Contact"){
        this.isCollapse=true
      }else{
        this.isCollapse=false
      }
    },
    print() {
      console.log(this.$store.state.show)
      console.log(this.$store.state.count)
    },
    addCount() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
      console.log(this.$store.getters.doneTodos)
    },
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
    },
    login(){
      sessionStorage.setItem("userName","jiang")
      sessionStorage.setItem("userToken","10086")
      
      this.$store.dispatch("setUser","jiang")
      this.$store.dispatch("setToken","10086")

      console.log(this.$store.state.isLogin)
      console.log(this.$store.getters.isLogin)



    },

    linkSocket(){
      //var user=this.$store.state.currentUser
      var user=this.currentUser
      //console.log(user)
      var CreateWebSocket = (function () {
        return function (urlValue) {
            if (window.WebSocket) return new WebSocket(urlValue);
            if (window.MozWebSocket) return new MozWebSocket(urlValue);
            return false;
        }
      })()
      // 实例化websoscket websocket有两种协议ws(不加密)和wss(加密)
      //var webSocket = CreateWebSocket("ws://172.83.154.37:3001");
      var webSocket = this.$store.state.ws

      if(!webSocket){
        webSocket= CreateWebSocket("ws://172.83.154.37:3001");
        this.$store.dispatch('ws',webSocket)
        console.log(" 置空了,socket重新连接了")
      }else{
        console.log("非空就不重新连接了")
      }

      webSocket.onopen = function (evt) {
          // 一旦连接成功，就发送第一条数据
           if(user){

              var message={
                from:user._id,
                to:"000001",
                msg:`1欢迎用户-${user.account}`,
                type:'system'
              }
              webSocket.send(JSON.stringify(message))
           }
      }
      // webSocket.onmessage = function (evt) {
      //     // 这是服务端返回的数据
      //     console.log("1111服务端说" + evt.data)
      // }
      // 关闭连接
      webSocket.onclose = function (evt) {
          //console.log("Connection closed.")
      }



      //this.$store.dispatch('ws',webSocket)

      this.webSocket=webSocket
     
    },



    closeLink(){
      // window.onbeforeunload = event=> {
      //   console.log("关闭WebSocket连接！");
      //   alert("aa")
      //   if(this.webSocket){
      //     this.webSocket.close();
      //   }
        
      // }

      // window.addEventListener('beforeunload', e => {
      //     if(this.webSocket){
      //       this.webSocket.close();
      //     }
      // });
    },

    
  },
  beforeDestory(){
    if(this.webSocket){
          this.webSocket.close();
    }
    console.log("销毁之前调用")
  },

  created(){
    //console.log(this.$route.path)
    this.linkSocket()
    this.show=true
      this.closeLink()
  },
  mounted(){
    this.defaultActive=this.$route.path
    //this.linkSocket()
    //console.log(this.$route.params.userName)
      //showTip()
      //this.show=true
      //this.closeLink()
  },
  components:{
    message,
    windowtitle,
    chat,
    send
  },

  computed:{
     
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.app-wrapper-web{
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-div{
  display: flex;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scale(0.85,0.9);
 
  box-shadow: -5px 5px 20px 0px rgba(0,0,0,0.1);
}

.main-div{
  background-color: #F8F8F8;
  width: 100%;
  display: flex;
}

.left-div{
  background-color: white;
  box-sizing: border-box;
  min-height: 100%;
/*  height: 100%;
  overflow: auto;*/
}

.left-div img{
  width: 30px;
  height: 30px;
  border-radius: 100px;
}

.el-menu-vertical-do:not(.el-menu--collapse) {
  width: 160px;
  min-height: 100%;
}

.setting{
  /* position: absolute;;
  bottom: 0;
  width: 100%; */
}

/* .left-div::-webkit-scrollbar {
  background-color: rgba(0,0,0,0);
} */


</style>
