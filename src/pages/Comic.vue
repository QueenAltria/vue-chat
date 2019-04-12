<template>
	<div>
    <div class="top-fixed-div">
		<navigation></navigation>
    <!-- <tab :defaultActive="defaultActive" ref="tabbar"></tab> -->

    </div>

     <bottom class="bottom-navigation" :defaultActive="defaultActive" ref="tabbar"/>


    <div class="content">
      <keep-alive>
        <router-view keep-alive/>
      </keep-alive>
    </div>
	</div>
</template>

<script>
import axios from 'axios'
import navigation from '@/components/Navigation'
import bottom from '@/components/BottomNavigation'
import tab from '@/components/TabNav'
export default {

  name: 'Comic',

  data() {
    return {
      defaultActive:'/Comic/Recommend'
    };
  },

  methods:{
  	getData(){
  		axios.defaults.headers.post['Content-Type'] = 'text/html';
  		axios.get("/2animx",{
  			headers: {'content-type': 'text/html'},
  		})
  			.then(function (response) {
			    console.log(response.data);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
  	 }
  },

  mounted(){
  	this.getData()
    this.defaultActive=this.$route.path
    this.$refs.tabbar.resetIndex(this.$route.path)
    //console.log(this.$route.path)
  },

  components:{
    navigation,
    tab,
    bottom
  },

    beforeRouteLeave (to, from , next) {
      console.log(to)
    },


};
</script>

<style lang="css" scoped>
.top-fixed-div{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.content{
  background: #F1F1F1;
  flex: 1;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 52px;
  overflow-y: scroll;
  /*padding-top: 50px;
  padding-bottom: 56px;*/
}

.bottom-navigation{
  position: fixed;
  bottom: 0;
}
</style>
