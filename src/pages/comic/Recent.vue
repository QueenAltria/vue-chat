<template>
  <div>
    <tab @toggleList="toggleList" />
    <svg v-show="loading" class="svg-circle">
      <use xlink:href="#loading"></use>
    </svg>
    <div class="recent-parent" v-show="!loading">
      <div class="recent-list">
        <div v-for="(item,index) in recentData" :key="index" class="recent-item">
          <div class="recent-title recent-item-state">{{item.time}}</div>
          <div class="recent-child-parent">
            <div class="recent-child-item" v-for="(comic,_index) in item.data" @click="goDetail(comic)">
              <img :src="comic.cover" class="cover-img" @error.once="dosomething($event)">
              <div class="recent-item-state line-one text-center">{{comic.title}}</div>
              <div class="recent-item-state line-one text-center">{{comic.chapter}}</div>
              <div class="recent-item-state text-center">{{comic.time}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecent } from '@/api/login'
import defaultCover from '@/assets/head.jpg'
import tab from '@/components/comic/TabNavRecent'
import {common} from '@/utils/comicMixins'

export default {

  name: 'Recent',

  data() {
    return {
      recentData: [], //最近更新数据
      params: {
        date: '7',
      },
      tabIndex: 0,
      loading: true,
      loadError: 'this.src="' + defaultCover + '"'
    };
  },

  created() {
    this._initData()
  },

  mixins:[common],

  components: {
    tab,
  },

  methods: {
    _initData(index = 0) {
      if (index == 0) {
        this.params.date = '7'
      } else if (index == 1) {
        this.params.date = '15'
      } else if (index == 2) {
        this.params.date = '30'
      }

      this.loading = true
      getRecent(this.params)
        .then(({ data }) => {
          this.recentData = data.result
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

    //切换
    toggleList(index) {
      this.tabIndex = index
      // this._initData(index)
    },
  }
};

</script>
<style lang="css" scoped>
.recent-parent {
  position: relative;
  top: 54px;
  overflow-x: hidden;
  padding-bottom: 52px;
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
  font-weight: bold;
}

</style>
