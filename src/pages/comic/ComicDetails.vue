<template>
	<div>
		<div class="top-fixed-div">
	      <jp-nav :title="barTitle"></jp-nav>
	    </div>

	    <div class="parent-container">
	   
	    	<div class="comic-info">

	    		<div style="display: flex;">
	    		<img :src="info.cover" class="cover">
	    		 <div class="comic-introduction">
	    		 	<span class="comic-title mb-20">{{info.title}}</span>
	    		 	<div class="comic-item-state">漫画作者：{{info.author}}</div>
	    		 	<div class="comic-item-state">漫画状态：{{info.state}}</div>
	    		 	<div class="comic-item-state">最新类型：{{info.type}}</div>
		            <div class="comic-item-state">上架时间：{{info.start_time}}</div>
		            <div class="comic-item-state">更新时间：{{info.update_time}}</div>
		            <div class="comic-item-state">漫画人气：{{info.popular}}</div>
		          </div>
		        </div>

		        <div class="comic-item-state mt-16">简介：{{info.introduce}}</div>
	    	</div>

	    	<div class="comic-info" style="margin-top:8px">
	    		<div class="comic-title" style="margin-bottom:8px;">章节列表</div>
	    		<div class="chapter-list">
	    			<div class="chapter-item" v-for="(item,index) in info.data" :class="{active:activeIndex==index}" @click="read(item,index)">
	    				{{item.title}}
	    			</div>
	    		</div>
	    	</div>
	    	 
	    	 <div class="comic-info" style="margin-top:8px">
	    		<div class="comic-title" style="margin-bottom:8px;">相关推荐</div>
	    		<div class="chapter-list">
	    			<div class="relevant-item" v-for="(item,index) in info.relevant">
	    				<img :src="item.cover" class="relevant-img"/>
	    				<span class="line-one" style="width:100%">{{item.title}}</span>
	    				<div>{{item.chapter}}</div>
	    			</div>
	    		</div>
	    	</div>	

	    		
	    
	    	
	    	 
	    </div>

	    <router-view class="comic-parent-div"/>
	    
		
	</div>
	
</template>

<script>
import nav from '@/components/comic/ComicNavigation'
import { getDetails } from "@/api/login"
import storage from "@/utils/storage"
export default {

  name: 'ComicDetails',

  data() {
    return {
    	barTitle:'详情',
    	info:{},
    	activeIndex:-1,
    };
  },
  methods:{
  	//点击查看
  	read(item,index){
  		this.activeIndex=index
  		this.$router.push({name:'/Comic/ComicShow' ,params: {
            href: item.href,
            
          }})
  	}
  },

  //keep-alive会触发钩子
  activated(){
  	
  },

  created(){
  	//在ComicShow刷新params会undefined
  	var str=this.$route.params.item
  	var item={}
  	if(str){
  		item=JSON.parse(str)
  	}else{
  		item=storage.fetch('comic_vuex').select
  	}
  	
  	var title=item.title
  	var href=item.href

  	this.barTitle=title
  	this.info.cover=item.cover
  	this.info.title=title
  	getDetails({href})
  		.then(({data})=>{
  			var _temp=data.result
  			_temp.title=this.barTitle
  			this.info=_temp
  			
  		})
  },

  // beforeRouteLeave (to, from, next) {
  // 	console.log(from)
  // 	console.log(to)
  // 	if(to.path=='/Comic/ComicShow'){
  // 		from.meta.keepAlive = true
  //   	to.meta.keepAlive = false
  // 	}else{
  // 		from.meta.keepAlive = false
  //   	to.meta.keepAlive = true
  // 	}

  // 	next()
  // },


  components:{
  	'jp-nav':nav
  }
};
</script>

<style lang="css" scoped>
.top-fixed-div {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.parent-container{
	padding-top: 58px;
	padding-bottom: 16px;
	box-sizing: border-box;
	overflow-y: scroll;
}

.comic-info{
	padding: 16px;
	background-color: white;
	border-radius: 2px;
	margin: 0 8px;
}

.comic-introduction {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: 
}

.chapter-list{
	display: flex;
	flex-wrap: wrap;
}

.chapter-item{
	background-color: white;
	border-radius: 10px;
	height: 20px;
	line-height: 20px;
	border:1px solid #32b66b;
	font-size: 13px;
	padding: 0 10px;
	color: #333;
	margin-right: 8px;
	margin-bottom: 8px;
	text-align: center;
}

.active{
	background-color: #32b66b;
	color: white;
	border:1px solid white;
}

.relevant-item{
	width: 33%;
	text-align: center;
	font-size: 12px;
	color: #777;
	display: flex;
	flex-direction: column;
	margin-bottom: 8px;
	align-items: center;
}

.relevant-img{
  width: 100px;
  height: 134px;
}

.comic-parent-div{
	position: fixed;
	top: 50px;
	right: 0;
	bottom: 0;
	left: 0;
	background: #F1F1F1;
	overflow-y: scroll;
    overflow-x: hidden;

}
</style>

<style lang="scss" scoped>
.comic-info{
	.cover{
		width:120px;
		height:160px;
		object-position: center;
		object-fit: cover;
		border-radius:2px;
	}

	.comic-title {
  		color: #262626;
  		font-weight:bold;
	}


	.comic-item-state{
	  color: #777;
	  font-size: 12px;
	  overflow: hidden;
	  text-overflow:ellipsis;
	  white-space: pre-wrap;
	}
}
</style>
