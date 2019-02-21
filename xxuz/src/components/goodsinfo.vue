<template>
  <div id="goodsinfo">
    <mt-header fixed title="商品详情">
      <router-link to="/goodslist" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-swipe :auto="2500">
      <mt-swipe-item v-for="item of list">
        <img width="100%" height="100%" :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-card">
      <div class="mui-card-header">
        <div class="de-title">
          <span>{{product.title}}</span>
        </div>
        <div class="price">
          <span class="now">￥{{product.price}}/月</span>
        </div>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-inner">
          <div class="details">
            <ul class="items">
		          <li class="item">
			          <span class="title">配置：</span>
                <ul class="chose">
                  <li class="configure" v-for="sp of specs">{{sp.spec}}</li>
                </ul>
		          </li>
	  	        <li class="item">
			          <span class="title">保修：</span>
                <ul class="chose">
                  <li class="configure" >意外保：¥15.00/月</li>
                  <li class="configure on" >标准保：¥0.00/月</li>
                </ul>
		          </li>
              <li class="item">
                <span class="title">租期：</span>
                <ul class="chose">
                  <li class="configure on">12个月 租金：¥175/月</li>
                </ul>
              </li>
              <li class="item">
                <span class="title">数量：</span>
                <div class="mui-numbox">
                  <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodsSub">-</button>
                  <input class="mui-input-numbox" type="number" value="1" v-model="val"/>
                  <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodsAdd">+</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="small">立即购买</mt-button>
        <mt-button size="small" @click="addCart">加入购物车</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
  created(){
    this.uname=sessionStorage.getItem("uname");
    this.getGoodsInfo();
  },
  data(){
    return{
      id:this.$route.params.id,
      list:[],
      val:1,
      info:{},
      product:{},
      specs:[],
      uname:'',
    }
  },
  methods:{
    getGoodsInfo(){
      var id=this.id;
      var url=`http://127.0.0.1:5000/detail?lid=${id}`
      this.axios.get(url).then(result=>{
        console.log(result)
        this.info=result.data
        this.product=result.data.product
        this.specs=result.data.specs
        this.list=result.data.pics
      })
    },
    addCart(){
      if(!this.uname==''){
        var pid=this.id;
        var count=this.val;
        var price=this.product.price;
        var url=`http://127.0.0.1:5000/cart/addCart?pid=${pid}&count=${count}&price=${price}&uname=${this.uname}`;
        this.axios.get(url).then(result=>{
          console.log(result)
          if(result.data.code>0){
            //如果成功共享数据
            this.$store.commit("increment");
            Toast(result.data.msg);
          }else{
            Toast(result.data.msg);
          }
        })
      }else{
        Toast("请您先登录")
        this.$router.push("/login")
      }
    },
    goodsSub(){
      this.val--;
      if(this.val<=1)
      this.val=1;
    },
    goodsAdd(){
      if(this.val<999)
      this.val++;
    },
  }
}
</script>

<style>
.de-title span{
  font-size:14px;
}
.price{
  margin-top: 20px;
  width: 105px;
}
.price .now{
  font-size:15px;
  color:red;
  font-weight:bold;
}
.mui-numbox{
  float:right;
}
#goodsinfo .mint-swipe{
  margin-top:40px;
  height: 350px !important;
}
#goodsinfo .mui-card{
  margin-top:0 !important;
}
.details .items{
  background-color: #fff;
  margin-top: 9px;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
  padding: 0 11px;
}
.details .items .item{
  line-height: 35px;
  border-bottom: 1px solid #eee;
  position: relative;
  font-size:13px;
  margin-bottom:7px;
}
.details .items .item span{
  float:left;
  margin-right: 9px;
}
.details .items .item ul.chose{
  margin-left: 9px;
}
.details .items .item ul.chose li.on{
  border-color: #0282d3;
  color: #0282d3;
}
.details .items .item ul.chose li.configure{
  padding: 0 5px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #999;
  float: left;
  margin: 6px 0 0 14px;
}
.details .items .item::after{
  content: '';
  display: block;
  clear:both;
}
</style>