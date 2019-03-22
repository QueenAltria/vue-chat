<template>
	<div>
		<div>
			<el-row style="max-height: 300px;margin-left:10px;margin-right:10px;" :gutter="30">
			  <el-col :span="8">
			  	<img  class="info-img" src="http://172.83.154.37/images/20170902141742_TiAUm.thumb.700_0.jpeg">
			  </el-col>
			  <el-col :span="16">
			  	<div class="mt-20">
			  		<div class="info-name">Amy Adams</div>
			  		<div class="info-introduction normal-text mt-10">I need to be diffenert and there is no substitute for it.</div>
			  		<div class="info-base mt-10">
			  			<label>NickName：</label>
			  		</div>
			  	</div>
			  </el-col>
			</el-row>
		</div>

		<div>
			<el-row style="max-height: 300px;margin-left:10px;margin-right:10px;" :gutter="30" class="tablayout">
			  <el-col :span="2" v-for="(item,index) in arr" :key="index" :class="{tablayout_active:(index===active)}">
			  		{{item}}
			  </el-col>
			</el-row>
		</div>

		
			<div class="photo-container-div">
			  <div v-for="(item,index) in srcArr" :key="index" :class="{tablayout_active:(index===active)}">
			  		<img :src="item" class="photo-images">
			  </div>
			 </div>
			
		

	</div>
</template>

<script>
export default {

  name: 'ContactInfo',

  data() {
    return {
    	activeName:'first',
    	arr:["Photos","Videos","Daily"],
    	active:0,
    	srcArr:["https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-567795.jpg",
    			"https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-751323.jpg",
    			"https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-755263.png",
    			"https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-146170.jpg"]
    };
  },
};
</script>

<style lang="css" scoped>
.tablayout{
	margin-top: 4em;
	font-size: 0.9em;
	font-weight: 500;
	color: #838383;
}

.tablayout_active{
	font-size: 1em;
	color: #333333;
}

.photo-images{
	height: 100%;
	width: 300px;
	border-radius: 4px;
	margin-right: 20px;
}

.photo-container-div{
	display: flex;
	width: 100px;
	min-width: 100%;
	overflow-x: auto;
	overflow-y: hidden;
}

.info-left{
	margin: 20px;
}

.info-img{
	/*width: 248px;*/
	width: 100%;
	max-height: 300px;
	background-color: #f1f8fd;
	object-fit: cover;
  	object-position: center;
  	border-radius: 4px;
}
.info-name{
	font-weight: bold;
}
.info-base{
	font-weight: 500;
	font-size: 12px;
}
</style>
