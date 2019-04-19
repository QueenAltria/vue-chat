<template>
	<div>
		<svg v-show="loading" class="svg-circle">
      <use xlink:href="#loading"></use>
    </svg>

    <div v-show="!loading">
      <div class="comic-item" v-for="(item,index) in dataList" @click="goDetail(item)">
         <img :src="item.cover" class="cover-img">
          <div class="comic-introduction">
            <span class="comic-title">{{item.title}}</span>
            <div class="comic-item-state">最新更新：{{item.chapter}}</div>
            <div class="comic-item-state">{{item.update_time}}</div>
          </div>
      </div>

      <div class="comic-item text-center">
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

    <div class="filter-parent" @click="filterComic">
      <i class="iconfont icon-filter"></i>
    </div>

   <!--  <div class="mask">
      
    </div> -->

	</div>
</template>

<script>
import {getAll} from '@/api/login'
import storage from '@/utils/storage'
import {common} from '@/utils/comicMixins'
export default {

  name: 'Category',

  data() {
    return {
      loading:true,
      nextLoading:false,
      params:{
        page:1,
        state:0,
        type:0,
        sort:'pubtime'
      },
      last:1,
      dataList:[]
    };
  },

  mixins:[common],

  created(){
    this._initData()
  },

  activated(){
    //console.log("activated")
  },

  deactivated(){
    //console.log("deactivated")
  },

  methods:{
    //下一页
    nextPage(){
      if(this.params.page>this.last){
        return 
      }

      this.nextLoading=true
      var page=this.params.page
      this.params.page=(page+=1)
      this._initData()
    },

    _initData(){
      getAll(this.params)
      .then(res=>{
        this.loading=false
        this.dataList=[...this.dataList,...res.data.result]
        this.nextLoading=false
        this.last=Number(res.last)
      })
    },

    //筛选分类
    filterComic(){

    },
  },

};
</script>

<style lang="css" scoped>
.comic-item{
  background: white;
  margin: 0 8px 10px 8px;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
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
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
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
.filter-parent{
  width: 56px;
  height: 56px;
  background: white;
  position: fixed;
  bottom: 76px;
  right: 20px;
  border-radius: 28px;
  box-shadow: 0 2px 4px 0px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mask{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.2);
}
</style>
