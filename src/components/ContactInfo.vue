<template>
	<div>
		<div >
			<el-row style="height: 300px;">
			  <el-col :span="12">
			  	
			  	<img  class="info-img" src="https://b-ssl.duitang.com/uploads/item/201702/09/20170209134016_Ujt2h.thumb.700_0.jpeg">
			  </el-col>
			  <el-col :span="12">
			  	<div class="mt-20">
			  		<div class="info-name">Amy Adams</div>
			  		<div class="info-introduction normal-text mt-10">I need to be diffenert and there is no substitute for it.</div>
			  		<div class="info-base mt-10">
			  			<label>NickName</label>
			  		</div>
			  	</div>

			  </el-col>
			</el-row>

			
		</div>

	</div>
</template>

<script>
export default {

  name: 'ContactInfo',

  data() {
    return {

    };
  },
};
</script>

<style lang="css" scoped>
.info-img{
	width: 248px;
	height: 300px;
	background-color: #f1f8fd;
	object-fit: cover;
  	object-position: center;
  	border-radius: 4px;
  	margin: 20px;
}
.info-name{
	font-weight: bold;
}
.info-base{
	font-weight: 500;
	font-size: 12px;
}
</style>
