<template>
	<div class="full-w">
    <windowTitle :titleType="'user'"/>
    
    <el-form ref="form" :model="form" label-width="60px" class="info-form">
      <el-form-item label="头像">
        <el-upload
          action="/upload/"
          :name="upfiles"
          :show-file-list="false">
          <img :src="form.avatar_url" class="avatar_url">
        </el-upload>
      </el-form-item>
     
      <el-form-item label="用户名">
        <span>{{form.name}}</span>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.desc" class="pwd-input" type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" size="medium">修改信息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import windowTitle from '@/components/MainTitle';
export default {

  name: 'User',

  data() {
    return {
      form:{
        avatar_url:'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-679342.jpg',
        name:'咕咕咕~'
      },
      headers:{
        "content-type":"multipart/form-data;"
      },
      upfiles:'upfiles'
    };
  },

  components:{
    windowTitle
  },

  methods:{
    onSubmit(){

    }
  }
};
</script>

<style lang="css" scoped>
.info-form{
  margin: 20px;
}
.avatar_url{
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
}

.pwd-input{
  width: 200px;
}

</style>
