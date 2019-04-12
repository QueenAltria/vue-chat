<template>
	 <div class="rank-top">
      <div class="rank-top-tab">
        <div class="rank-top-item" :class="{active:active==index}" 
        v-for="(item,index) in rankItem" :key="index" @click="toggle(index)">
          {{item.title}}
        </div>
      </div>
    </div>

</template>

<script>
export default {

  name: 'Segmented',

  data() {
    return {
      rankItem:[
      	{
      		title:'日排行',
      		date:'day'
      	},
      	{
      		title:'月排行',
      		date:'month'
      	},
      	{
      		title:'总排行',
      		date:'all'
      	}
      ],
      active: 0,
    };
  },

  created() {
    
  },


  methods:{
  	toggle(index){
  		this.active=index
  	},
  },
};
</script>

<style lang="css" scoped>
.rank-top {
  display: flex;
  padding-top: 16px;
  font-size: 0.8em;
  margin-left: 16px;
  margin-right: 16px;
  align-items: center;
  justify-content: space-between;
}

.rank-top-tab {
  border: 1px solid #32b66b;
  border-radius: 4px;
  width: 90%;
  display: flex;
}

.rank-top-item {
  width: 33.33%;
  text-align: center;
  padding: 5px;
}

.rank-top-item:nth-child(2) {
  border-left: 1px solid #32b66b;
  border-right: 1px solid #32b66b;
}

.active{
	background-color: #32b66b;
	color: white;
}
</style>
