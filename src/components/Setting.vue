<template>
	<div>
		<el-button @click="loginOut">退出登录</el-button>
		<div style="height: 100vh;">
		    <!-- 注意需要给 el-scrollbar 设置高度，判断是否滚动是看它的height判断的 -->
		    <el-scrollbar style="height: 100%;"> <!-- 滚动条 -->
		        <div style="height: 500px;width: 100%;background: red;"></div>
		        <div style="height: 500px;width: 100%;background: yellowgreen;"></div>
		        <div style="height: 500px;width: 100%;background: blueviolet;"></div>
		    </el-scrollbar><!-- /滚动条 -->
		</div>
	</div>
</template>

<script>
import storage from '@/utils/storage'
export default {

  name: 'Setting',

  data() {
    return {

    };
  },
  methods:{
  	//退出登录
  	loginOut(){
  		storage.clear()
  	}
  }
};
</script>

<style lang="css" scoped>
</style>
