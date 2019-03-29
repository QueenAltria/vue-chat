<template>
  <div id="app">
    <!-- <div class="mark-fixed" /> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  height: 100%;
}

html{
  height:100%;   
  width:100%; 
}

body {
  /*cursor: url(./assets/huaji.png), auto;*/
  margin: 0;
  font-weight:500;
  height:100%;   
  width:100%;   
  background: -webkit-linear-gradient(#fff 0%, #f2f7ff 100%);  
  /*background-image: url(./assets/bg1.jpg); */
  background-position: center 0;   
  background-repeat: no-repeat;   
  background-attachment:fixed;   
  background-size: cover;    
  zoom: 1;
  z-index: 1;  
}

a:hover {
  cursor: url(./assets/yinxian.png), auto;
}

 
/*背景图尺寸不随浏览器缩放而变化 center 0*/
.mark-fixed{
  position:absolute;   
  top:0;   
  left:0;   
  height:100%;   
  width:100%;   
  background: -webkit-linear-gradient(#fff 0%, #f2f7ff 100%);   
  background-position: center 0;   
  background-repeat: no-repeat;   
  background-attachment:fixed;   
  background-size: cover;    
  zoom: 1;
  z-index: 1;   
}

</style>
