<template>
	<div>
		<h1>排行</h1>
	</div>
</template>

<script>
import {getRank} from '@/api/login'
export default {

  name: 'Ranking',

  data() {
    return {

    };
  },

  mounted(){
    getRank()
      .then(res=>{
        
      })
  },
};
</script>

<style lang="css" scoped>
</style>
