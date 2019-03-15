<template>
  <div id="app">
    <router-view/>
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
  /*font-family: 'Roboto', sans-serif;*/
  /*font-family: 'PingFangSC-Regular', sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body{
  /*cursor: url(./assets/huaji.png), auto;*/
  margin: 0;
  background-color: #F5F5F5;
  background-image:url(./assets/bg1.jpg) ;
  background-repeat: repeat;
  background-size: 100%;
  min-width: 100%;
  width: 100%;
}
a:hover {
  cursor: url(./assets/yinxian.png), auto;
}
</style>
