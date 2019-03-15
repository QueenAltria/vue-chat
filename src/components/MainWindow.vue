<template>
<div class="app-wrapper-web">
  <div class="container-div">
    <div class="left-div">
      <el-menu default-active="/Message" class="el-menu-vertical-do" :collapse="isCollapse" @select="selectMenu" unique-opened router>
        <el-menu-item index="/User" class="mb-15">
          <img src="../../src/assets/head.jpg">
          <span slot="title">Silence</span>
        </el-menu-item>
        <el-menu-item index="/Message">
          <i class="iconfont icon-message"></i>
          <span slot="title">Message</span>
        </el-menu-item>
        <el-menu-item index="/Contact">
          <i class="iconfont icon-contact"></i>
          <span slot="title">Contact</span>
        </el-menu-item>
        <el-menu-item index="/Document">
          <i class="iconfont icon-document"></i>
          <span slot="title">Document</span>
        </el-menu-item>
        <el-menu-item index="/Upcoming">
          <i class="iconfont icon-upcoming"></i>
          <span slot="title">Upcoming</span>
        </el-menu-item>
        <el-menu-item index="/Calendar">
          <i class="iconfont icon-calendar"></i>
          <span slot="title">Calendar</span>
        </el-menu-item>
        <el-menu-item index="/Collection">
          <i class="iconfont icon-collection"></i>
          <span slot="title">Collection</span>
        </el-menu-item>
        <el-menu-item index="/Statistics">
          <i class="iconfont icon-statistics"></i>
          <span slot="title">Statistics</span>
        </el-menu-item>
        <el-menu-item index="/Setting" class="setting">
          <i class="iconfont icon-setting"></i>
          <span slot="title">Setting</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-div">
      <router-view/>
      <!-- <message v-if="select==1"></message> -->
      <!-- <div style="width:100%;position: relative;">
        <windowtitle></windowtitle>
        <chat/>
        <send/>
      </div> -->
      
    </div>


  </div>
</div>
</div>
</template>


<script>
import store from "../store/index.js"
import showTip from "../utils/cursortip"
import message from "./CurrentMessage"
import windowtitle from "./MainTitle"
import chat from "./ChatView"
import send from "./SendView"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Test',
      number:0,
      input:'',
      isCollapse:true,
      select:'1',

    }
  },
  methods:{

    selectMenu(index,indexPath){
      console.log(index)
      this.select=index
      if(index=='/Message' || index=="/Contact"){
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
  $("a").fadeIn();
  $("a").fadeIn("slow");
  $("a").fadeIn(8000);


    },

    
  },
  mounted(){
      //showTip()
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

.container-div{
  display: flex;
  position: absolute;
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
  height: 100%;
  overflow: auto;
}

.left-div img{
  width: 30px;
  height: 30px;
  border-radius: 100px;
}

.el-menu-vertical-do:not(.el-menu--collapse) {
  width: 140px;
  min-height: 100%;
}

.setting{
  position: absolute;;
  bottom: 0;
  width: 100%;
}

.left-div::-webkit-scrollbar {
  background-color: rgba(0,0,0,0);
}


</style>
