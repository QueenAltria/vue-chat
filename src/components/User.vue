<template>
	<div class="full-w">
    <windowTitle :titleType="'user'"/>
    
  </div>
</template>

<script>
import windowTitle from '@/components/MainTitle';
export default {

  name: 'User',

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

</style>
