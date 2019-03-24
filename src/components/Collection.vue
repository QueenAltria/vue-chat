<template>
	<div class="full-w">
    <windowTitle :titleType="'collection'"/>
    
  </div>
</template>

<script>
import windowTitle from '@/components/MainTitle';
export default {

  name: 'Collection',

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
