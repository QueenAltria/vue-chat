<template>
  <div class="title-div">
    <h5 class="margin-0">{{showTitle}}</h5>
    <div v-if="titleType=='user'">
      <i class="iconfont icon-heart"></i>
      <i class="iconfont icon-phone"></i>
      <i class="iconfont icon-person-collection"></i>
      <i class="iconfont icon-jujue"></i>
      <i class="iconfont icon-send"></i>
    </div>

  </div>

</template>

<script>
export default {
  name: "MianTitle",

  data() {
    return {};
  },
  props: {
    titleType: {
      type: String,
      default: "user"
    }
  },
  computed: {
    showTitle: function() {
      switch (this.titleType) {
        case "user":
          return "Alice";
        case "document":
          return "文件";
        case "upcoming":
          return "日程";
        case "calendar":
          return "日历";
        case "collection":
          return "收藏";
        case "statistics":
          return "统计";
        case "setting":
          return "设置";
        case "chatroom":
		  return "聊天室";
		default:
		  return this.titleType
      }
    }
  }
};
</script>

<style lang="css" scoped>
i {
  color: #b3b2b7;
  font-size: 16px;
  margin-right: 20px;
}
.title-div {
  background: white;

  height: 20px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
}
</style>
