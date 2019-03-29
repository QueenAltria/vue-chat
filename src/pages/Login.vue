<!-- 登录 -->
<template>
  <div class="login-div">
      <div class="login-main-div" v-loading="loading">
        <div class="back" :class="{back_active:canBack}" @click="prev">
          <i class="fa fa-arrow-circle-left"></i>
        </div>
        <h3>Enter your credentials</h3>
        <div class="block">
          <el-carousel trigger="click" :autoplay="false" arrow="never" ref="carousel" :loop="false">
            <el-carousel-item>
              <div class="email"> 
                <el-input class="input_name mt-20" placeholder="用户名" v-model="userName" @keyup.enter.native="next" ref="accountInput"/>
                <div class="button">
                  <el-button type="primary" class="mt-40" @click="next">下一步</el-button>
                </div>
              </div>
            </el-carousel-item>

            <el-carousel-item>
               <div class="password">
                 <el-input class="input_name mt-20" placeholder="密码" type="password" v-model="password" @keyup.enter.native="doLogin" ref="passInput"/>
                 <div class="button">
                  <el-button type="primary" class="mt-40" @click="doLogin">登录</el-button>
                </div>
               </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>  
  </div>
</template>

<script>
import {getUser} from '@/api/login'
import store from "@/store/index.js"

export default {
  data () {
    return {
      canBack:false,  //是否可以后退
      loading:false,
      userName:'',    //用户名
      password:''     //密码
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    //下一步
    next(){
      var that=this
      this.canBack=true
      this.$refs.carousel.next()
      this.$refs.accountInput.blur()
      setTimeout(function(){
        that.$refs.passInput.focus()
      },500)
    },
    prev(){
      if(!this.canBack) return
      this.canBack=false
      this.$refs.carousel.prev()
    },
    //登录
    doLogin(){
      if(this.password==''){
        this.$message({
          showClose: true,
          message: '密码不能为空！',
          type: 'error'
        });
        return
      }

      this.loading=true
      var params={
        account:this.userName,
        password:this.password
      }
      getUser(params)
        .then(({data})=>{
          if(data.code==1){
            this.loading=false
            this.$message({
              showClose: true,
              message: '密码输入错误！',
              type: 'error'
            });

          }else{
            this.$store.dispatch("setUser",data)
            this.$router.replace({
              name: 'MainWindow'
            })
          }
        })
    }
  }
}

</script>

<style scoped>

h3{
  color: #4f5c76;
  text-align: center;
  margin-top: 48px;
}

.mt-40{
  margin-top: 40px;
}

.back{
  height: 20px;
  width: 40px;
  color: #d6dae4;
  display: block;
  transition: 0.3s;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 24px;
}

.back_active{
  color: #919cb2 !important;
}

/*.input_name>>>input{
  border: 1px dashed transparent;
  transition: all  0.2s ease-out;
  box-sizing: border-box;
  border-radius: 6px;
  color: #666;
  font-size: 1.1em;
  background: rgb(245,245,245);
}
.input_name>>>input::-webkit-input-placeholder { color:#888; }

.input_name>>>input:focus {
  border:1px dashed #5b95ff;
  color:#5b95ff;
}*/

.input_name{
  padding: 0 50px;
}

.button{
  margin: 0 50px;
}

.el-button{
  width: 100%;
}

.login-div{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
 
  /*position: absolute;*/
}

.login-main-div{
  z-index: 2;
  width: 400px;
 
  background-color: white;
  box-shadow: 0px 5px 80px 0px #e4e8f0;
  border-radius: 5px;
  transition: all 0.2s ease-out;
}
.login-main-div:hover{
  transform: scale(1.05);
}

</style>