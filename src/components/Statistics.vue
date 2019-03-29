<template>
	<div class="full-w">
    <windowTitle :titleType="'statistics'"/>

    <div class="parent-container-div">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="top-card-div" style="display:flex;">
              <div class="card-icon-bg-div color-blue-alpha-bg">
                <div class="card-icon-index color-blue-bg"></div>
                <i class="iconfont icon-document"></i>
              </div>
              <div class="ml-20 card-content">
                <span>文件</span>
                <div>68</div>
              </div>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="top-card-div" style="display:flex;">
              <div class="card-icon-bg-div color-green-alpha-bg">
                <div class="card-icon-index color-green-bg"></div>
                <i class="iconfont icon-document"></i>
              </div>
              <div class="ml-20 card-content">
                <span>日程</span>
                <div>12</div>
              </div>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="top-card-div" style="display:flex;">
              <div class="card-icon-bg-div color-orange-alpha-bg">
                <div class="card-icon-index color-orange-bg"></div>
                <i class="iconfont icon-document"></i>
              </div>
              <div class="ml-20 card-content">
                <span>收藏</span>
                <div>526</div>
              </div>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="top-card-div" style="display:flex;">
              <div class="card-icon-bg-div color-red-alpha-bg">
                <div class="card-icon-index color-red-bg"></div>
                <i class="iconfont icon-document"></i>
              </div>
              <div class="ml-20 card-content">
                <span>访客</span>
                <div>4515</div>
              </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import windowTitle from '@/components/MainTitle';
export default {

  name: 'Statistics',

  data() {
    return {
      upcomingArr:[1,2,3]
    };
  },

  components:{
    windowTitle
  }
};
</script>

<style lang="css" scoped>
.parent-container-div{
  padding: 20px;
  /* box-sizing: border-box; */
}
.top-card-div{
  background: white;
  border-radius: 10px;
  padding: 20px;
}

.card-icon-bg-div{
  width: 40px;
  height: 40px;
  border-radius: 4px;
  position: relative;
  transform: rotate(-10deg); 
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon-index{
  width: 40px;
  height: 40px;
  border-radius: 4px;
  position: absolute;
  transform: rotate(55deg); 
}

i{
  font-size: 24px;
  color: white;
  position: absolute;
  transform: rotate(10deg);
}

.card-content span{
  color: #9d9d9d;
  font-weight: 500;
}
</style>
