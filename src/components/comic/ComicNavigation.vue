<template>
	<div class="navigation-div">
		<i class="iconfont icon-back header-left" @click="back"></i>
		<div class="title">{{title}}</div>
		<div class="header-right">
			
		</div>
	</div>
</template>

<script>

export default {

  name: 'ComicNavigation',

  data() {
    return {

    };
  },

  methods:{
  	//返回
  	back(){
  		this.$router.back(-1);
  	},
  },

  props: {
    title: {
      type: String,
      default: "首页"
    }
  },

};
</script>

<style lang="css" scoped>
.navigation-div{
	display: flex;
	height: 50px;
	line-height: 50px;
	align-items: center;
	background: white;
	padding: 0 15px;
	box-shadow: 0 2px 4px 0px rgba(33,33,33,0.08);
	/*background: rgb(245,150,170);*/
}

.header-left{
	font-size: 18px;
	color: #333333;
	margin-right: -25%;
	flex: 0 0 25%;
}

.title{
	text-align: center;
	color: #333333;
	font-size: 18px;
	font-weight: bold;
	width: 50%;
	margin-left: 25%;
	white-space: nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
}

.header-right{
	color: #333333;
	flex: 0 0 25%;
	justify-content: flex-end;
	display: flex;
}
.header-right-icon{
	font-size: 18px;
}

</style>
