<template>
	<div class="title-div">	
		<h5 class="margin-0">Angelia</h5>
		<div>
		<i class="iconfont icon-heart"></i>
		<i class="iconfont icon-phone"></i>
		<i class="iconfont icon-person-collection"></i>
		<i class="iconfont icon-jujue"></i>
		<i class="iconfont icon-send"></i>
		</div>
	</div>

</template>

<script>
export default {

  name: 'MianTitle',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
i{
	color: #b3b2b7;
	font-size: 16px;
	margin-right: 20px;
}
.title-div{
	background: white;
	
	height: 20px;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
}

</style>
