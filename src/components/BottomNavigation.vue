<template>
  <div class="bottom-tab-div">
    <div v-for="(item,index) in tabItem" class="bottom-tab-normal" :class="{'bottom-tab-active':activeIndex==item.path}" @click="toggle(item.path)">
      <i class="iconfont" :class="item.icon"></i>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {

  name: 'BottomNavagation',

  data() {
    return {
      tabItem: [{
        title: "推荐",
        icon: 'icon-tuijian',
        path: '/Comic/Recommend'
      }, {
        title: '最近',
        icon: 'icon-rili',
        path: '/Comic/Recent'
      }, {
        title: '排行',
        icon: 'icon-paihang',
        path: '/Comic/Ranking'
      }, {
        title: '分类',
        icon: 'icon-fenlei',
        path: '/Comic/Category'
      }, {
        title: '记录',
        icon: 'icon-zuijin',
        path: '/Comic/History'
      }],
      activeIndex: '/Comic/Recommend',
    };
  },

  props: {
    defaultActive: {
      type: String,
      default: "/Comic/Recommend"
    }
  },

  mounted() {
    //console.log(`${this.activeIndex}----${this.defaultActive}`)
    this.activeIndex = this.defaultActive
  },

  methods: {
    //切换底部tab
    toggle(index) {
      this.activeIndex = index
      this.$router.push({ path: index })
    },
    //刷新页面重置选择
    resetIndex(path) {
      this.activeIndex = path
    }
  },

  watch: {
  	//'$route'(to, from){}
    '$route': function(to, from) {
      this.activeIndex = to.path
    }
  }
};

</script>
<style lang="css" scoped>
.bottom-tab-div {
  display: flex;
  align-items: center;
  border-top: 1px solid #E6E5E6;
  font-size: 0.8em;
  background: white;
  width: 100%;
}

.bottom-tab-normal {
  flex: 1;
  text-align: center;
  display: inline-block;
  padding: 5px 20px;
}

.bottom-tab-active {
  color: #32b66b;
}

</style>
