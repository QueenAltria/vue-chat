<template>
	<div>
		<h1>分类</h1>
	</div>
</template>

<script>
import {getCategory} from '@/api/login'
export default {

  name: 'Category',

  data() {
    return {
      
    };
  },

  created(){
    // getCategory()
    //   .then(res=>{
    //     console.log(res)
    //   })
  }
};
</script>

<style lang="css" scoped>
</style>
