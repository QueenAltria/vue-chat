<template>
  <div>
    <tab @toggleList="toggleList" />
    <svg v-show="loading" class="svg-circle">
      <use xlink:href="#loading"></use>
    </svg>
    <div class="rank-parent">
      <div class="rank-list" v-show="tabIndex==0">
        <div v-for="(item,index) in rankDataDay" :key="index" class="rank-item" @click="goDetail(item)">
          <!-- :onerror="loadError" -->
          <img :src="item.cover" class="cover-img" @error.once="dosomething($event)">
          <div class="comic-introduction">
            <span class="rank-title">{{item.title}}</span>
            <div class="rank-item-state">{{item.state}} | {{item.author}}</div>
            <div class="rank-item-state">最新更新：{{item.chapter}} | {{item.time}}</div>
            <div class="rank-item-state">观看人数：{{item.score}}</div>
          </div>
        </div>
      </div>
      <div class="rank-list" v-show="tabIndex==1">
        <div v-for="(item,index) in rankDataMonth" :key="index" class="rank-item" @click="goDetail(item)">
          <img :src="item.cover" class="cover-img" @error.once="dosomething($event)">
          <div class="comic-introduction">
            <span class="rank-title">{{item.title}}</span>
            <div class="rank-item-state">{{item.state}} | {{item.author}}</div>
            <div class="rank-item-state">最新更新：{{item.chapter}} | {{item.time}}</div>
            <div class="rank-item-state">观看人数：{{item.score}}</div>
          </div>
        </div>
      </div>
      <div class="rank-list" v-show="tabIndex==2">
        <div v-for="(item,index) in rankDataAll" :key="index" class="rank-item" @click="goDetail(item)">
          <img :src="item.cover" class="cover-img" @error.once="dosomething($event)">
          <div class="comic-introduction">
            <span class="rank-title">{{item.title}}</span>
            <div class="rank-item-state">{{item.state}} | {{item.author}}</div>
            <div class="rank-item-state">最新更新：{{item.chapter}} | {{item.time}}</div>
            <div class="rank-item-state">观看人数：{{item.score}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRank } from '@/api/login'
import defaultCover from '@/assets/head.jpg'
import tab from '@/components/comic/TabNav'
import {common} from '@/utils/comicMixins'

export default {

  name: 'Ranking',

  data() {
    return {
      rankDataDay: [], //排行数据
      rankDataMonth: [],
      rankDataAll: [],
      params: {
        date: 'day',
        type: 0,
      },
      tabIndex: 0,
      loading: true,
      loadError: 'this.src="' + defaultCover + '"'
    };
  },

  created() {
    this._initData()
  },

  components: {
    tab,
  },

  mixins:[common],

  methods: {
    _initData(index=0) {
      if (index == 0) {
        this.params.date = 'day'
        if (this.rankDataDay.length != 0) {
          return
        }
        this.loading = true
        getRank(this.params)
          .then(({ data }) => {
            this.rankDataDay = data.result
            this.loading = false
          })
      }else if (index == 1) {
        this.params.date = 'month'
        if (this.rankDataMonth.length != 0) {
          return
        }
        this.loading = true
        getRank(this.params)
          .then(({ data }) => {
            this.rankDataMonth = data.result
            this.loading = false
          })
      }else if (index == 2) {
        this.params.date = 'all'
        if (this.rankDataAll.length != 0) {
          return
        }
        this.loading = true
        getRank(this.params)
          .then(({ data }) => {
            this.rankDataAll = data.result
            this.loading = false
          })
      }
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
      this._initData(index)
      this.goTop()
    },

    //回到顶部
    goTop () {
      this.timer = setInterval(() => {
        let osTop = document.documentElement.scrollTop || document.body.scrollTop
        //console.log(osTop)
        let ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(this.timer)
        }
      }, 30)
    }
  }
};

</script>
<style lang="css" scoped>
.rank-parent {
  position: relative;
  top: 54px;
  overflow-x: hidden;
  padding-bottom: 52px;
}

.rank-list {
  width: 100%;
}

.rank-item {
  background: white;
  margin: 0 8px 10px 8px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.rank-item:active{
 background: #F1F1F1;
}

.comic-introduction {
  margin-left: 16px;
}

.rank-title {
  color: #262626;
}

.cover-img {
  width: 54px;
  height: 72px;
  object-position: center;
  object-fit: cover;
}

.rank-item-state{
  color: #777;
  font-size: 12px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}


.rank-list-month {
  transform: translate3d(100%, 0, 0);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.run {
  transform: translate3d(0, 0, 0);
  transition: transform 3s ease;
}

</style>
