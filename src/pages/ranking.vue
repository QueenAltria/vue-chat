<template>
	<div>
    <div class="rank-top">
      <div class="rank-top-item">
        日排行
      </div>

      <div class="rank-top-item">
        月排行
      </div>

      <div class="rank-top-item">
        总排行
      </div>

    </div>
	</div>
</template>

<script>
import {getRank} from '@/api/login'
export default {

  name: 'Ranking',

  data() {
    return {

    };
  },

  mounted(){
    getRank()
      .then(res=>{
        
      })
  },
};
</script>

<style lang="css" scoped>
.rank-top{
  display: flex;
  margin-top: 10px;
  font-size: 0.8em;
}

.rank-top-item{
  flex: 1;
  text-align: center;
  border: 1px solid #32b66b;
  padding: 5px;
  margin: 0 10px;
  border-radius: 4px;
}

</style>
