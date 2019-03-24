<template>
	<div class="full-w">
    <windowTitle :titleType="'calendar'"/>
    
  </div>
</template>

<script>
import windowTitle from '@/components/MainTitle';
export default {

  name: 'Calendar',

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
