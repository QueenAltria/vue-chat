<template>
	<div class="cm-div">
		<recent></recent>
      	<div style="position: relative;flex:1">
        	<windowtitle></windowtitle>
        	<chat/>
        	<send/>
      	</div>
	</div>
</template>

<script>
import recent from "./RecentList"
import windowtitle from "./MainTitle"
import chat from "./ChatView"
import send from "./SendView"

export default {

  name: 'CurrentMessage',

  data() {
    return {
    	
    };
  },
  components:{
    recent,
    windowtitle,
    chat,
    send
  },
};
</script>

<style lang="css" scoped>
.cm-div{
  background-color: #F8F8F8;
  width: 100%;
  display: flex;
}

</style>
