<template>
  <div id="app">
    <div class="mark"/>
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
}

a:hover {
  cursor: url(./assets/yinxian.png), auto;
}

.mark{
  background-image: url(./assets/bg1.jpg);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  opacity: 1;
  filter: blur(0px);
}
</style>
