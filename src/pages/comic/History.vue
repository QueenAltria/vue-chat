<template>
  <div>
    <h3>TODO：历史记录、全部筛选、加载失败布局、查看图片时未加载图片显示占位图、章节切换</h3>
    <h3>Bug：1、点击查看详情时，之前页面的滚动位置固定？<br>
      2、进入搜索，之前页面的滚动位置固定？<br>
    3、夸克浏览器底部工具栏导致的底部布局异常<br>
    4、小米浏览器布局显示空白<br>
    45、刷新详情页导致的数据丢失
    </h3>
    <div class="tip-div">
      数据来自www.2animx.com，若侵犯到您的权益，请立即联系我们删除
      <svg width="100%" height="30">
        <text text-anchor="middle" x="50%" y="50%" class="text text-1">
          {{svgText}}
        </text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-2">
          {{svgText}}
        </text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-3">
          {{svgText}}
        </text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-4">
          {{svgText}}
        </text>
      </svg>
    </div>
  </div>
</template>
<script>
export default {

  name: 'History',

  data() {
    return {
      svgText: 'Thanks 2animx.com'
    };
  },
};

</script>
<style lang="css" scoped>
h3{
  padding-left: 20px;
  padding-right: 20px;
}
.tip-div {
  text-align: center;
  padding: 20px 20px 60px 20px;
  position: fixed;
  bottom: 0;
  font-size: 14px;
}

.text {
  /*font-size: 24px;*/
  /*font-weight: bold;*/
  text-transform: uppercase;
  fill: none;
  stroke-width: 2px;
  stroke-dasharray: 90 310;
  animation: stroke 6s infinite linear;
}

.text-1 {
  stroke: #3498db;
  text-shadow: 0 0 5px #3498db;
  animation-delay: -1.5s;
}

.text-2 {
  stroke: #f39c12;
  text-shadow: 0 0 5px #f39c12;
  animation-delay: -3s;
}

.text-3 {
  stroke: #e74c3c;
  text-shadow: 0 0 5px #e74c3c;
  animation-delay: -4.5s;
}

.text-4 {
  stroke: #9b59b6;
  text-shadow: 0 0 5px #9b59b6;
  animation-delay: -6s;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}

</style>
