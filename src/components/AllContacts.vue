<template>
	<div class="cm-div">
		<chat_contacts></chat_contacts>
      	<div style="position: relative;flex:1">
        	<windowtitle></windowtitle>
        	<info/>
      	</div>
	</div>
</template>

<script>
import chat_contacts from "./ContactsList"
import windowtitle from "./MainTitle"
import info from "./ContactInfo"


export default {

  name: 'AllContacts',

  data() {
    return {
    	
    };
  },
  components:{
    chat_contacts,
    windowtitle,
    info,
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
