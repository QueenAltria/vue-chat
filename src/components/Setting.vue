<template>
	<div class="full-w">
		<windowTitle :titleType="'setting'"></windowTitle>
		<el-button @click="loginOut">退出登录</el-button>
	</div>
</template>

<script>
import storage from '@/utils/storage'
import windowTitle from '@/components/MainTitle';
export default {

  name: 'Setting',

  data() {
    return {

    };
	},
	components:{
    windowTitle
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
