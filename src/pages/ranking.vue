<template>
  <div>
    <tab @toggleList="toggleList" />
    <div class="rank-parent">
      <div class="rank-list" v-show="tabIndex==0">
        <div v-for="(item,index) in rankDataDay" :key="index" class="rank-item">
          <!-- :onerror="loadError" -->
          <img :src="item.cover" class="cover-img" @error.once="dosomething($event)">
          <div class="comic-introduction">
            <span class="rank-title">{{item.title}}</span>
            <div>{{item.state}} | </div>
          </div>
        </div>
      </div>
      <div class="rank-list-month" v-show="tabIndex==1">
        <div v-for="(item,index) in rankDataMonth" :key="index" class="rank-item">
          <!-- :onerror="loadError" -->
          <img :src="item.cover" class="cover-img" @error.once="dosomething($event)">
          <div class="comic-introduction">
            <span class="rank-title">{{item.title}}</span>
            <div>{{item.state}} | </div>
          </div>
        </div>
      </div>
      <div class="rank-list-month" v-show="tabIndex==2">
        <div v-for="(item,index) in rankDataAll" :key="index" class="rank-item">
          <!-- :onerror="loadError" -->
          <img :src="item.cover" class="cover-img" @error.once="dosomething($event)">
          <div class="comic-introduction">
            <span class="rank-title">{{item.title}}</span>
            <div>{{item.state}} | </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRank } from '@/api/login'
import defaultCover from '@/assets/head.jpg'
import tab from '@/components/TabNav'

export default {

  name: 'Ranking',

  data() {
    return {
      rankDataDay:[],   //排行数据
      rankDataMonth:[],
      rankDataAll:[],  
      params:{
      	date:'day',
      	type:0,
      },
      showRun:false,
      tabIndex:0,

      loadError:'this.src="' + defaultCover + '"'
    };
  },

  created() {
    this._initData()
  },

   components:{
    tab,
  },


  methods:{
  	_initData(){
		getRank(this.params)
	      .then(({data}) => {
	      	this.rankDataDay=data.result
	      	console.log(data.result)
	      })
  	},

  	//图片加载失败加载默认图片
  	dosomething(e){
  		var err=e.target.currentSrc
  		var index=err.indexOf('icon')+4
  		var resetSrc=err.substring(0,index)+'/0'+err.substring(index+2,err.length)
  		e.currentTarget.src =defaultCover
  	},

  	//切换
  	toggleList(index){
  		console.log("子组件"+index)
  		this.tabIndex=index
  		this.showRun=true
  	}

  }
};

</script>
<style lang="css" scoped>
.rank-parent{
	width: 100%;
	position: relative;
	top: 54px;
	overflow-x: hidden;
}

.rank-list{
	
	width: 100%;
}


.rank-item{
	background: white;
	margin: 0 8px 10px 8px;
	padding: 8px;
	box-sizing: border-box;
	display: flex;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.comic-introduction{
	margin-left: 16px;
}
.rank-title{
	color: #262626;
	
}
.cover-img{
	width: 54px;
	height: 72px;
	object-position: center;
	object-fit: cover;
}

.rank-list-month{
	transform: translate3d(100%,0,0);
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
}

.run{
	transform: translate3d(0,0,0);
	transition:transform 3s ease;
}

</style>
