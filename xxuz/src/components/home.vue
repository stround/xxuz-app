<template>
  <div>
    <header>
      <div class="hd-img">
        <img src="../img/logo.png" alt="" width="90">
      </div>
      <div class="hd-input">
        <input type="text" placeholder="搜索您需要的商品">
      </div>
      <div class="hd-btn">
        <router-link to="/login">登录</router-link>
      </div>
      <div>
        
      </div>
      <div style="clear:both"></div>
    </header>
    <mt-swipe :auto="2500">
      <mt-swipe-item>
        <img width="100%" height="100%" src="../img/banner1.jpg" >
      </mt-swipe-item>
      <mt-swipe-item>
        <img width="100%" height="100%" src="../img/banner2.jpg" >
      </mt-swipe-item>
      <mt-swipe-item>
        <img width="100%" height="100%" src="../img/banner3.jpg" >
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/goodslist">
						<img src="../img/ionc1.png" alt="">
						<div class="mui-media-body">长租下单</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/notfound">
						<img src="../img/ionc2.png" alt="">
						<div class="mui-media-body">新闻中心</div>
          </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					<router-link to="/notfound">
						<img src="../img/ionc3.png" alt="">
						<div class="mui-media-body">帮助中心</div>
          </router-link>
      </li>
    </ul>
    <div class="zm">
      <div class="img-box">
        <img src="../img/zmlog-1.png" width="100%">
      </div>
      <div class="text-wraper">
        <p>信用好，免押租赁</p>
        <p>商家/企业芝麻分1350及以上</p>
      </div>
      <a href="#" class="get-limit" @click.prevent="alipay()">获取免押额度</a>
	  </div>
    <div class="floortitle"><p class="info"><span class="title">今日推荐</span></p></div>
    <div class="app-goodslist">
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[0].pid">
          <img src="../img/index/bn1.jpg">
          <h3>{{list[0].details}}</h3>
          <div>
            <span>{{list[0].spec}}</span>
            <span class="now">￥{{list[0].price}}/月</span>
          </div>
        </router-link>
      </div>
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[1].pid">
          <img src="../img/index/bn4.png">
          <h3>{{list[1].details}}</h3>
          <div>
            <span>{{list[1].spec}}</span>
            <span class="now">￥{{list[1].price}}/月</span>
          </div>
        </router-link>
      </div>
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[2].pid">
          <img src="../img/index/bn2.jpg">
          <h3>{{list[2].details}}</h3>
          <div>
            <span>{{list[2].spec}}</span>
            <span class="now">￥{{list[2].price}}/月</span>
          </div>
        </router-link>
      </div>
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[3].pid">
          <img src="../img/index/bn3.jpg">
          <h3>{{list[3].details}}</h3>
          <div>
            <span>{{list[3].spec}}</span>
            <span class="now">￥{{list[3].price}}/月</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="floortitle"><p class="info"><i class="mui-icon-extra mui-icon-extra-order"></i><span class="title">办公专用</span></p></div>
    <div class="ad">
      <router-link to="/goodslist"><img class="img" src="../img/bg1.jpg"></router-link>
    </div>
    <div class="floortitle"><p class="info"><i class="mui-icon-extra mui-icon-extra-gold"></i><span class="title">便携商务</span></p></div>
    <div class="ad">
      <router-link to="/goodslist"><img class="img" src="../img/bg2.jpg"></router-link>
    </div>
    <div class="app-goodslist">
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[1].pid">
          <img src="../img/index/bn4.png">
          <h3>{{list[1].details}}</h3>
          <div>
            <span>{{list[1].spec}}</span>
            <span class="now">￥{{list[1].price}}/月</span>
          </div>
        </router-link>
      </div>
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[2].pid">
          <img src="../img/index/bn2.jpg">
          <h3>{{list[2].details}}</h3>
          <div>
            <span>{{list[2].spec}}</span>
            <span class="now">￥{{list[2].price}}/月</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="floortitle"><p class="info"><i class="mui-icon-extra mui-icon-extra-computer"></i><span class="title">技术开发</span></p></div>
    <div class="ad">
      <router-link to="/goodslist"><img class="img" src="../img/bg3.jpg"></router-link>
    </div>
    <div class="app-goodslist">
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[0].pid">
          <img src="../img/index/bn1.jpg">
          <h3>{{list[0].details}}</h3>
          <div>
            <span>{{list[0].spec}}</span>
            <span class="now">￥{{list[0].price}}/月</span>
          </div>
        </router-link>
      </div>
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[3].pid">
          <img src="../img/index/bn3.jpg">
          <h3>{{list[3].details}}</h3>
          <div>
            <span>{{list[3].spec}}</span>
            <span class="now">￥{{list[3].price}}/月</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="floortitle"><p class="info"><i class="mui-icon-extra mui-icon-extra-phone"></i><span class="title">衍生设备</span></p></div>
    <div class="ad">
      <router-link to="/goodslist"><img class="img" src="../img/bg4.jpg"></router-link>
    </div>
    <div class="app-goodslist">
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[2].pid">
          <img src="../img/index/bn2.jpg">
          <h3>{{list[2].details}}</h3>
          <div>
            <span>{{list[2].spec}}</span>
            <span class="now">￥{{list[2].price}}/月</span>
          </div>
        </router-link>
      </div>
      <div class="goods-item" >
        <router-link :to="'/goodsinfo/'+list[0].pid">
          <img src="../img/index/bn1.jpg">
          <h3>{{list[0].details}}</h3>
          <div>
            <span>{{list[0].spec}}</span>
            <span class="now">￥{{list[0].price}}/月</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="foot">
	    <h1 class="title">服务客户</h1>
	    <ul class="items">
        <li class="item"><img class="img" src="../img/hd.jpg"></li>
        <li class="item"><img class="img" src="../img/wk.jpg"></li>
        <li class="item"><img class="img" src="../img/bc.jpg"></li>
        <li class="item"><img class="img" src="../img/pt.jpg"></li>
        <li class="item"><img class="img" src="../img/361.jpg"></li>
        <li class="item"><img class="img" src="../img/bd.jpg"></li>
        <li class="item"><img class="img" src="../img/zs.jpg"></li>
        <li class="item"><img class="img" src="../img/mb.jpg"></li>
      </ul>
    </div>
    <div class="foot">
	    <h1 class="title">服务客户</h1>
	    <ul class="items">
        <li class="item"><img class="img" src="../img/yfk.jpg"></li>
        <li class="item"><img class="img" src="../img/fk.jpg"></li>
        <li class="item"><img class="img" src="../img/mz.jpg"></li>
        <li class="item"><img class="img" src="../img/qc.jpg"></li>
        <li class="item"><img class="img" src="../img/klwk.jpg"></li>
        <li class="item"><img class="img" src="../img/dym.jpg"></li>
        <li class="item"><img class="img" src="../img/fdd.jpg"></li>
        <li class="item"><img class="img" src="../img/kygf.jpg"></li>
      </ul>	
    </div>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
  data() {
    return {
      list:[],
    }
  },
  created() {
    this.getproducts()
  },
  methods: {
    getproducts(){
      var url="http://127.0.0.1:5000/index"
      this.axios.get(url).then((res)=>{
        this.list=res.data;
      })
    },
    alipay(){
      Toast("请前往支付宝客户端生活号中使用此功能！")
    }
  },
}
</script>

<style>
.hd-img{
  float:left;
  height:40px;
  width:115px;
  margin-top:10px;
  padding-left:10px;
}
.hd-input{
  float:left;
  width:180px;
  margin-top:10px;
}
header>.hd-input>input{
  padding:0 0 0 7px;
  height:28px;
  width:90%;
  font-size:12px;
  margin-bottom:0;
}
.hd-btn{
  float:right;
  width:65px;
  margin-top:14px;
  padding-left:14px;
  font-size:14px;
}
.mint-swipe{
  height:160px !important;
}
.mint-swipe img{
  width:100%;
}
ul.mui-table-view{
  background-color:#fff !important;
}
ul.mui-table-view li{
  padding:0 !important;
  border-right:none !important;
}
div.mui-media-body{
  margin-top:0 !important;
}
.zm{
  display: flex;
  position: relative;
  padding: 13px 14px 14px 19px;
  width: 100%;
  height: 66px;
  background: url(../img/zmbg1.png) no-repeat left top;
  background-size: 100% 100%;
}
.zm .img-box{
  width:41px;
  height:41px;
  margin-right:10px;
}
.zm .text-wraper p{
  color:#fff !important;
}
.zm .text-wraper p:first-child{
  font-size:15px;
  margin-bottom: 7px;
}
.zm .text-wraper p:last-child{
  font-size:12px;
  margin-bottom:0;
}
.zm .get-limit{
  display: block;
  position: absolute;
  top: 18px;
  right: 15px;
  width: 100px;
  height: 30px;
  line-height: 20px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  font-size: 12px;
  color: #236fe1;
  padding-top:6px;
}
.floortitle {
  height: 43px;
  text-align: center;
  position: relative;
}
.floortitle .info {
  padding: 0 6px;
  background-color: #efeff4;
  line-height: 43px;
  position: relative;
  z-index: 2;
  display: inline-block;
  font-size: 14px;
}
.floortitle .info .title{
  color:#33cef5;
}
.floortitle::after{
  content: '';
  border-top: 1px solid #33cef5;
  position: absolute;
  top: 22px;
  left: 0;
  display: block;
  width: 100%;
  z-index: 1;
}
.app-goodslist{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  height:50%;
  padding:7px;
}
.app-goodslist .goods-item{
  width:49%;
  border:1px solid #ccc;
  margin:4px 0;
  padding:2px;
  display:flex;
  flex-direction:column;
  min-height:150px;
  justify-content:space-between;
  background-color:#fff;
}
.app-goodslist .goods-item h3,.app-goodslist .goods-item span{
  color: #333;
  font-size:12px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.app-goodslist .goods-item span:last-child{
  width:75px;
  text-align:right;
}
.app-goodslist .goods-item div{
  display:flex;
  justify-content:space-between;
}
.app-goodslist .goods-item h3{
  font-size:18px;
}
.app-goodslist .goods-item .now{
  color:red;
  font-weight:bold;
  font-size:16px;
}
.app-goodslist .goods-item img{
  width:100%;
}
i{
  color:#33cef5;
  font-size:14px !important;
  margin-right:5px;
}
.ad{
  margin-bottom:7px;
}
.img{
  width: 100%;
  height: 100%;
  display: block;
}
.foot {
  background-color: #fff;
  margin-bottom: 7px;
  overflow: hidden;
}
.foot .title {
  font-size: 14px;
  color:#33cef5;
  padding-left: 6px;
  line-height: 43px;
  border-bottom: 1px solid #f4f4f4;
}
.foot .items {
  padding: 15px 0 15px 8px;
  margin: 0 0 -7px -8px;
}
.foot .items::after{
  clear:both;
}
.foot .items .item{
  float: left;
  width: 79px;
  height: 43px;
  border: 1px solid #eee;
  margin: 0 0 10px 8px;
}
</style>