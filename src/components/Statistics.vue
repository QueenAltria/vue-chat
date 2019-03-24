<template>
	<div class="full-w">
    <windowTitle :titleType="'statistics'"/>

    <div class="parent-container-div">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="top-card-div">
            <!-- 34*36 -->
              <div class="card-icon">

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

.card-icon{
  background: red;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  
  /* transform: rotate(45deg); */
}
</style>
