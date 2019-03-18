<!--  -->
<template>
  <div class="login-div">
      <div class="login-main-div" v-loading="loading">

        <div class="back" :class="{back_active:canBack}" @click="prev">
          <i class="fa fa-arrow-circle-left"></i>
        </div>
        <h3>Enter your credentials</h3>
        <div class="block">
          <el-carousel trigger="click" :autoplay="false" arrow="never" ref="carousel">
            <el-carousel-item>
              <div class="email"> 
                <el-input class="input_name mt-20" placeholder="用户名" v-model="userName"/>
                <div class="button">
                  <el-button type="primary" class="mt-40" @click="next">下一步</el-button>
                </div>
              </div>
            </el-carousel-item>

            <el-carousel-item>
               <div class="password">
                 <el-input class="input_name mt-20" placeholder="密码" type="password"/>
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
import {getUser} from '../api/login'
export default {
  data () {
    return {
      canBack:false,
      loading:false,
      userName:''
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    next(){
      this.canBack=true
      this.$refs.carousel.next()
    },
    prev(){
      if(!this.canBack) return
      this.canBack=false
      this.$refs.carousel.prev()
    },
    doLogin(){
      //this.loading=true
      getUser()
        .then(({data})=>{
          console.log(data)
          this.$router.push({
            name: 'MainWindow',
            params: {
              userName: this.userName
            }
          })
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
  width: 100%;
  height: 100%;
  position: absolute;
}

.login-main-div{
  width: 400px;
  height: 50%;
  background-color: white;
  box-shadow: 0px 5px 80px 0px #e4e8f0;
  border-radius: 5px;
  transition: all 0.2s ease-out;
}
.login-main-div:hover{
  transform: scale(1.05);
}
</style>