<template>
	<div class="send-div">
		<div class="top-operating-div">
			<i class="iconfont icon-biaoqing"></i>
			<i class="iconfont icon-jieping" @click="crop"></i>
			<i class="iconfont icon-luyin"></i>
			<i class="iconfont icon-image"></i>
			<i class="iconfont icon-wenjianjia"></i>

			<span class="send-text float-right">Message Record
				<i class="el-icon-caret-bottom"></i>
			</span>
		</div>

		<el-input
		  class="input-div send-text"
		  type="textarea"
		  placeholder=""
		  v-model="sendInput">
		</el-input>

		<el-button type="primary" round size="small" class="float-right mr-20">Send</el-button>
	</div>
</template>

<script>
export default {

  name: 'SendView',

  data() {
    return {
		sendInput:'',   //输入框输入内容
    };
  },
  methods:{
	crop(){
		this.$notify.info({
          title: '提示',
          message: '功能待开发',
          duration:800,
        });
	}
  }
};
</script>

<style lang="css" scoped>
.send-div{
	background: white;
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 170px;
	box-sizing: content-box;
}
i{
	color: #acabb1;
	font-size: 16px;
	padding-right: 30px;
}

i:last-child{
	padding-right: 0;
}

.top-operating-div{
	padding: 10px 20px;
	border-bottom: 1px solid #F8F8F8;
}
.send-text{
	color: #737373;
	font-weight: bold;
	font-size: 14px;
}
.float-right{
	float: right;
}
.input-div>>>textarea{
	border:none;
	height: 80px;
	color: #737373;
	font-weight: 500;
	font-size: 14px;
	margin-bottom: 10px;
}
</style>
