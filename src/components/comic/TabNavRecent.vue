<template>
  <div class="tab-div">
    <div v-for="(item,index) in tabItem" class="tab-normal" 
      :class="{'tab-active':activeIndex==index}" @click="toggle(index)">{{item.title}}
    </div>
  </div>
</template>
<script>
export default {

  name: 'TabNavRecent',

  data() {
    return {
      tabItem: [{
        title: "7天内",
      }, {
        title: '15天内',
      }, {
        title: '30天内',
      }],
      activeIndex: 0,
    };
  },


  mounted() {

  },

  methods: {
    //切换排行
    toggle(index) {
      this.activeIndex = index
      this.$emit("toggleList", this.activeIndex)
    },
  }
};

</script>
<style lang="css" scoped>
.tab-div {
  display: flex;
  align-items: center;
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 899;
  /*background-color: white;*/
}

.tab-normal {
  flex: 1;
  text-align: center;
  height: 44px;
  line-height: 44px;
  display: inline-block;
  padding: 0 20px;
  position: relative;
  /*border-bottom: 2px solid transparent;*/
}

.tab-active {
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

.tab-slot {
  margin-top: 44px;
}

</style>
