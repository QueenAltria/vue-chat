<template>
	<div class="navigation-div">
		<i class="iconfont icon-back header-left"></i>
		<div class="title">首页</div>
		<div class="header-right">
			<i class="iconfont icon-search header-right-icon"></i>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Navigation',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
.navigation-div{
	display: flex;
	height: 50px;
	line-height: 50px;
	align-items: center;
	/*background: rgb(245,150,170);*/
	background: white;
	padding: 0 15px;
	box-shadow: 0 2px 8px 0px rgba(33,33,33,0.08);
}

.header-left{
	font-size: 22px;
	color: #333333;
	margin-right: -25%;
	flex: 0 0 25%;
}

.title{
	text-align: center;
	color: #333333;
	font-size: 20px;
	width: 50%;
	margin-left: 25%;
	white-space: nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
}

.header-right{
	font-size: 22px;
	color: #333333;
	flex: 0 0 25%;
	justify-content: flex-end;
	display: flex;
}
</style>
