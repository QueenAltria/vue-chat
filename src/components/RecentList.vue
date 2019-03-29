<template>

	<div class="msg-list-div">
		<div style="padding:0 20px;">
		<h4 class="margin-0">Current Message</h4>
		<div class="margin-0 small-text">in 10 minutes</div>
		<div class="search-div color-c1"> 
			<i class="el-icon-search"></i>
			Search
		</div>
		</div>

		<el-scrollbar class="scroll-recent">

		<div v-for="(item,index) in messages" :class="{active:activeIndex==index}" class="msg-item" 
		@click="activeIndex=index" :key="index">
			<img :src="item.avater">
			<div>
				<label>{{item.name}}</label>
				<div class="small-text">{{item.time}}</div>
			</div>
			<i class="iconfont icon-friend color-green" v-if="index==1"></i>
		</div>

		</el-scrollbar>
	</div>	

</template>

<script>
export default {

  name: 'RecentList',

  data() {
    return {
    	activeIndex:0,
    	messages:[{
    		name:'Amy Adams',
    		time:'10 minutes ago',
    		avater:'https://b-ssl.duitang.com/uploads/item/201808/01/20180801203403_epbys.thumb.700_0.jpg',
    		icon:''
    	},
    	{
    		name:'Ralo Jackson',
    		time:'36 minutes ago',
    		avater:'https://b-ssl.duitang.com/uploads/item/201901/07/20190107222459_guish.thumb.700_0.png',
    		icon:''
    	},
    	{
    		name:'Bryan Cristance',
    		time:'1 hours ago',
    		avater:'https://b-ssl.duitang.com/uploads/item/201807/05/20180705101504_ezYh3.thumb.700_0.jpeg',
    		icon:''
    	},
    	{
    		name:'Angelia',
    		time:'5 hours ago',
    		avater:'https://b-ssl.duitang.com/uploads/item/201901/17/20190117235941_JLLnS.thumb.700_0.jpeg',
    		icon:''
    	},
    	{
    		name:'Alicia',
    		time:'2 days ago',
    		avater:'https://a-ssl.duitang.com/uploads/item/201812/21/20181221095354_wTuUd.thumb.700_0.jpeg',
    		icon:''
    	},
    	{
    		name:'Lareina',
    		time:'3 days ago',
    		avater:'https://a-ssl.duitang.com/uploads/item/201903/11/20190311194716_teQAh.thumb.700_0.jpeg',
    		icon:''
    	}]
    };
  },
  mounted(){
  	let a=this.messages
  	this.messages=[...a,...a]
  	let b=this.messages
  	this.messages=[...b,...b]
  }
};
</script>

<style lang="css" scoped>
.msg-list-div{
	padding: 10px 0;
	background: #FBFBFB;
	width: 250px;
	/*height: 100%;*/
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: 600px;
	/*overflow-y: auto;*/

}

.small-text{
	font-size: 10px;
	color: #c1c1c1;
	font-weight: normal;
}
.search-div{
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 4px 60px 4px 10px;
	font-size: 14px;
	background: #F4F4F4;
	border-radius: 100px;
}

.msg-item{
	padding: 10px 20px;
	display: flex;
	font-weight: 500;
	font-size: 14px;
	align-items: center;
	position: relative;
}

.msg-item i{
	font-size:14px;
	position: absolute;
	right: 0;
	margin-right: 20px;
}

.msg-item img{
	width: 36px;
	height: 36px;
	border-radius: 100px;
	margin-right: 10px;
}

.active{
	background: #f4f4f4;
}

.scroll-recent{
	flex: 1;
	overflow-y: auto;
	overflow-x:hidden;
}

</style>
