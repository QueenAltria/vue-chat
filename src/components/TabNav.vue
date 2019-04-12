<template>
	<div class="tab-div">
		<div v-for="(item,index) in tabItem" 
			class="tab-normal" 
			:class="{'tab-active':activeIndex==index}"
			@click="toggle(index)">{{item.title}}
		</div>
	</div>
	<!-- <slot name="day" class="tab-slot"></slot> -->
</template>

<script>
export default {

  name: 'TabNav',

  data() {
    return {
    	tabItem:[{
    		title:"日排行",
    		path:'/Comic/Recommend'
    	},{
    		title:'月排行',
    		path:'/Comic/Recent'
    	},{
    		title:'总排行',
    		path:'/Comic/Ranking'
    	}],
    	activeIndex:0,
    };
  },

   props:{
   	defaultActive:{
   		type: String,
        default: "/Comic/Recommend"
   	}
   },

   mounted(){
 
   		// this.activeIndex=this.defaultActive
   },

  methods:{
  	toggle(index){
  		this.activeIndex=index
  		this.$emit("toggleList",this.activeIndex)
  		// this.$router.push({path: index})
  	},

  	resetIndex(path){
  		// this.activeIndex=path
  	}
  }
};
</script>

<style lang="css" scoped>
.tab-div{
	display: flex;
	align-items: center;
	background-color: white;
	position: fixed;
	width: 100%;
	z-index: 899;
	/*background-color: white;*/
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

.tab-slot{
	margin-top: 44px;
}
</style>
