<template>
	<div class="full-w scroll-parent-div">
    <windowTitle :titleType="'document'"/>
    <el-scrollbar style="height:400px;" class="scroll-view">
      <div v-for="(value,key,index) in docArr" :key="index">
        <div class="document-title">{{key}}</div>
        <div class="document-content">
          <el-row class="center" v-for="(item,index) in value" :key="index" :class="{ 'mb-20':index!=docArr.length-1}">
            <el-col :span="6" class="center">
              <img  class="type-img" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-751839.jpg">
              <span>&nbsp;&nbsp;phpto1.jpg</span>
            </el-col>
            <el-col :span="6">
              <span>11.35</span>
            </el-col>
            <el-col :span="6">
              <span>用户1</span>
            </el-col>
            <el-col :span="6">
              <span class="float-right">450KB</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import windowTitle from '@/components/MainTitle';
export default {

  name: 'Document',

  data() {
    return {
      docArr:{
        today:[1,2,3],
        before:[1,2,3,4,5,6,7,8,9,10]
      }
    };
  },

  components:{
    windowTitle
  }
};
</script>

<style lang="css" scoped>
.document-title{
  font-weight: bold;
  margin: 20px;
}
.document-content{
  margin: 20px;
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;
  background: white;
  border-radius: 10px;
}

.center{
  display: flex;
  align-items: center;
  font-weight: 600;
}

span{
  font-size: 0.8em;
}

.type-img{
  width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
}

.scroll-parent-div{
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view{
  overflow-x:hidden;
  flex: 1;
}
</style>
