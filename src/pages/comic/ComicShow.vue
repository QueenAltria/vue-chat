<template>
	<div>
		<!--  <div class="image-list">
		 		<img :src="item"  class="comic-img" v-for="(item,index) in imageList">
		 </div> -->


		 <div class="image-list" v-for="(item,index) in imageList">
		 		<div class="place-div" v-show="indexList[index]">
		 			{{index+1}}
		 		</div>
		 		<img :src="item"  class="comic-img" @load="setValue(index)">
		 	
		 </div>
	</div>
</template>

<script>
import nav from '@/components/comic/ComicNavigation'
import { getImages } from "@/api/login"
export default {

  name: 'ComicShow',

  data() {
    return {
		imageList:[],
		indexList:[]
    };
  },

  created(){
  	
  	var href=this.$route.params.href

  	getImages({href})
  		.then(({data})=>{
  			this.imageList=data.result.data
  			var _temp=[]
  			for (var i = 0; i <data.result.data.length; i++) {
  				_temp.push(true)
  			}
  			this.indexList=_temp
  			//console.log(_temp)
  		})
  },

  methods:{
  	setValue(index){
  		this.$set(this.indexList, index, false)
  	}
  },

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

.image-list{
	position: relative;
}


.place-div{
	width: 100%;
	min-height: 300px;
	background: gray;
	color: white;
	font-size: 100px;
	text-align: center;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
}


.comic-img{
	width: 100%;
	
}
</style>
