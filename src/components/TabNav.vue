<template>
	<div class="tab-div">
		<div v-for="(item,index) in tabItem" 
			class="tab-normal" 
			:class="{'tab-active':activeIndex==item.path}"
			@click="toggle(item.path)">{{item.title}}
		</div>
	</div>
</template>

<script>
export default {

  name: 'TabNav',

  data() {
    return {
    	tabItem:[{
    		title:"推荐",
    		path:'/Comic/Recommend'
    	},{
    		title:'最近',
    		path:'/Comic/Recent'
    	},{
    		title:'排行',
    		path:'/Comic/Ranking'
    	},{
    		title:'分类',
    		path:'/Comic/Category'
    	},{
    		title:'记录',
    		path:'/Comic/History'
    	}],
    	activeIndex:'/Comic/Recommend',
    };
  },

   props:{
   	defaultActive:{
   		type: String,
        default: "/Comic/Recommend"
   	}
   },

   mounted(){
   		console.log(this.activeIndex)
   		console.log(this.defaultActive)
   		this.activeIndex=this.defaultActive
   },

  methods:{
  	toggle(index){
  		this.activeIndex=index
  		this.$router.push({path: index})
  	},

  	resetIndex(path){
  		this.activeIndex=path
  	}
  }
};
</script>

<style lang="css" scoped>
.tab-div{
	display: flex;
	align-items: center;
}
.tab-normal{
	flex: 1;
	text-align: center;
	height: 44px;
	line-height: 44px;
	display:inline-block;
	padding: 0 20px;
	position: relative;
	/*border-bottom: 2px solid transparent;*/
}

.tab-active{
	/*display:inline-block;
	padding: 0 20px;
	border-bottom: 2px solid #66ccff;*/
	color: #32b66b;
}

.tab-active:after {
    content: '';
    position: absolute;
    top: 44px;
   	text-align: center;
   	left: 50%;
   	transform: translateX(-50%);
    height: 2px;
    width: 15px;
    background-color: #32b66b;
}
</style>
