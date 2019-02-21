<template>
  <div id="goodslist">
    <mt-header fixed>
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="hd-input">
      <input type="text" placeholder="搜索您需要的商品">
    </div>
    <div class="app-goodslist">
      <div class="goods-item" v-for="item of list" :key="item.lid">
        <a href="#" @click.prevent="jump(item.lid)" >
          <img :src="item.pic">
          <h3>{{item.title}}</h3>
          <div>
            <span>{{item.spec}}</span>
            <span class="now">￥{{item.price}}/月</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return {
        pageIndex:0,
        pageSize:4,
        list:[]
      }
    },
    created(){
      this.getMore();
    },
    methods:{
      getMore(){
        this.pageIndex++;
        var url=`http://127.0.0.1:5000/product`;
        this.axios.get(url).then(result=>{
          this.list=result.data.products;
        })
      },
      jump(id){
        this.$router.push("/goodsinfo/"+id);
      }
    }
}
</script>

<style>
#goodslist .app-goodslist{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  height:50%;
  padding:7px;
  margin-top:40px;
}
#goodslist .app-goodslist .goods-item{
  width:49%;
  border:1px solid #ccc;
  margin:4px 0;
  padding:2px;
  display:flex;
  flex-direction:column;
  min-height:150px;
  justify-content:space-between;
}
#goodslist .app-goodslist .goods-item h3{
  font-size:18px;
}
.app-goodslist .goods-item .now{
  color:red;
  font-weight:bold;
  font-size:16px;
}
#goodslist .app-goodslist .goods-item img{
    width:100%;  
  }
#goodslist .app-goodslist .goods-item .old{
  font-size:12px;
  text-decoration:line-through;
}
#goodslist .hd-input{
  position:fixed;
  width:285px;
  margin-top:6px;
  top:0;
  left:45px;
  z-index:1000;
}
#goodslist>.hd-input>input{
  padding:0 0 0 7px;
  height:28px;
  width:100%;
  font-size:12px;
  margin-bottom:0;
}
</style>