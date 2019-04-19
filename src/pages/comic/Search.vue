<template>
  <!--  <transition enter-active-class="animated flash" name="zoom"> -->
  <div>
  	
    <div class="top-fixed-div">
      <searchNav :title="title"></searchNav>
    </div>
    <div class="content">
		<svg v-show="loading" class="svg-circle">
	      <use xlink:href="#loading"></use>
	    </svg>


      <div class="search-parent">
        <select v-model="query.searchType">
          <option value="1">漫画</option>
          <option value="2">作者</option>
        </select>

		<form action="javascript:return true;">
		  <input type="serch" name="str" placeholder="请输入关键字" @keyup.13=show() ref="searchstr" v-model="query.search">
		</form>
        
      </div>


      <div v-show="!loading">
      <div class="comic-item" v-for="(item,index) in dataList" @click="goDetail(item)">
         <img :src="item.cover" class="cover-img">
          <div class="comic-introduction">
            <span class="comic-title">{{item.title}}</span>
            <div class="comic-item-state">最新更新：{{item.chapter}}</div>
            <div class="comic-item-state">{{item.time}}</div>
          </div>
      </div>

      <div class="comic-item text-center" v-if="allNum>dataList.length">
        <div class="next-div" v-show="!nextLoading" @click="nextPage">
          <span>下一页</span>
          <i class="iconfont icon-back icon-next"></i>
        </div>

        <div class="next-div" v-show="nextLoading">
          <svg class="next-loading">
            <use xlink:href="#loading"></use>
          </svg>
          <span>正在加载中...</span>
        </div>
        
      </div>
    </div>


    </div>
  </div>
</template>
<script>
import searchNav from '@/components/comic/ComicNavigation'
import { searchComic } from "@/api/login"
import {common} from '@/utils/comicMixins'

export default {

  name: 'Search',

  data() {
    return {
    	title:'搜索',
    	query:{
    		searchType:'1',  //1：漫画  2：作者
    		page:1,
    		search:''
    	},
    	allNum:0,
    	loading:false,
    	dataList:[],
    	nextLoading:false
    };
  },

  mixins:[common],

  components: {
    searchNav
  },

  methods:{
  	//搜索
  	show(){
  		this.$refs.searchstr.blur();
  		this.query.page=1
  		this._search()
  	},

  	_search(){
  		if(this.query.page==1){
  			this.loading=true
  		}
  		
		searchComic(this.query)
	  		.then(({data})=>{
	  			this.loading=false
	  			this.nextLoading=false
	  			this.dataList=this.query.page==1?data.result:[...this.dataList,...data.result]
	  			this.allNum=data.num
	  			//console.log(data)
	  		})
  	},

  	nextPage(){
  		this.nextLoading=true
  		var page=this.query.page+1
  		this.query.page=page
  		this._search()
  	}
  }
};

</script>
<style lang="css" scoped>
.animated {
  animation-duration: 0.5s;
}

.top-fixed-div {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.content {
  background: #F1F1F1;
  flex: 1;
  /*position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;*/
  padding-top: 50px;
  padding-bottom: 56px;
}

.search-parent {
  background-color: white;
  border-radius: 2px;
  margin: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
}

</style>

<style lang="scss" scoped>
.search-parent{
	form{
		flex:1;
		input{
			width:100%;
			border: none;
			height: 30px;
		  	line-height: 30px;
		  	font-size: 14px;
		  	text-align: left;
		}
	}
	select{
	  cursor: pointer;
	  padding: 0 8px;
	  height: 24px;
	  line-height: 24px;
	  font-size: 14px;
	  background: none;
	  border-radius: 14px;
	  border: 1px solid #32b66b;
	  margin-right:16px;
	  option{

	  }
	}
}
</style>

<style scoped lang="css">
.comic-item{
  background: white;
  margin: 0 8px 10px 8px;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  box-sizing: border-box;
}

.comic-item:first-child{
  margin-top: 10px;
}

.comic-item:active{
  background: #F1F1F1;
}

.comic-introduction {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  flex: 1;
}

.comic-title {
  color: #262626;
}

.cover-img {
  width: 54px;
  height: 72px;
  object-position: center;
  object-fit: cover;
}

.comic-item-state{
  color: #777;
  font-size: 12px;
  /*overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;*/
}

.next-div{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.icon-next{
  margin-left: 10px;
  font-size: 14px;
  transform:rotate(180deg);
}

.next-loading{
  width: 20px;
  height: 20px;
  margin-right: 10px;
  animation: rotation 1.0s linear infinite; 
}
</style>
