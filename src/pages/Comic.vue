<template>
	<div>
		<navigation></navigation>
    <tab :defaultActive="defaultActive" ref="tabbar"></tab>
    <div class="content">
      <router-view />
    </div>
	</div>
</template>

<script>
import axios from 'axios'
import navigation from '@/components/Navigation'
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
    tab
  }
};
</script>

<style lang="css" scoped>
.content{
  background: #FAFAFA;
  flex: 1;
  position: absolute;
  top: 96px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
