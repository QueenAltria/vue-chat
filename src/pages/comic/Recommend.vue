<template>
  <div>
    <svg v-show="loading" class="svg-circle">
      <use xlink:href="#loading"></use>
    </svg>
    <div class="recent-parent" v-show="!loading">
      <div class="recent-list">
        <div v-for="(item,index) in comicData" :key="index" class="recent-item">
          <div class="recent-title recent-item-state">{{item.title}}</div>
          <div class="recent-child-parent">
            <div class="recent-child-item" v-for="(comic,_index) in item.data" @click=goDetail(comic)>
              <img :src="comic.cover" class="cover-img" @error.once="dosomething($event)">
              <div class="recent-item-state line-one text-center">{{comic.title}}</div>
              <div class="recent-item-state line-one text-center">{{comic.chapter}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="recent-item">
        <div class="recent-title">数据统计</div>
        <div v-for="(item,_index) in statistics" class="recent-item-state" style="font-size: 14px;">
          {{item.count_title}}{{item.count_num}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommend } from '@/api/login'
import defaultCover from '@/assets/head.jpg'
import {common} from '@/utils/comicMixins'
export default {

  name: 'Recommend',

  data() {
    return {
      loading: true,
      comicData: [],
      statistics: [],
    };
  },
  created() {
    this._initData()
  },

  mixins:[common],

  methods: {
    _initData() {
      this.loading = true
      getRecommend()
        .then(({ data }) => {
          this.comicData = data.result
          this.statistics = data.statistics
          this.loading = false
        })
    },

    //图片加载失败加载默认图片
    dosomething(e) {
      var err = e.target.currentSrc
      var index = err.indexOf('icon') + 4
      var resetSrc = err.substring(0, index) + '/0' + err.substring(index + 2, err.length)
      e.currentTarget.src = defaultCover
    },

  }
};

</script>
<style lang="css" scoped>
.recent-parent {
  position: relative;
  top: 10px;
  overflow-x: hidden;
  padding-bottom: 10px;
}

.recent-list {
  width: 100%;
}

.recent-item {
  background: white;
  margin: 0 8px 10px 8px;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}


.recent-child-parent {
  display: flex;
  flex-wrap: wrap;
}

.recent-child-item {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.recent-child-item:active {
  background: #F1F1F1;
}

.cover-img {
  width: 100px;
  height: 134px;
  object-position: center;
  object-fit: cover;
  border-radius: 2px;
}

.recent-item-state {
  color: #777;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.recent-title {
  color: #262626;
  font-size: 14px;
  font-weight: 800;
}

</style>
