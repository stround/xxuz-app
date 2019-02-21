<template>
  <div id="shoplist">
    <mt-header fixed title="购物车"></mt-header>
    <div class="search_empty" :class="{'d-none':emptyHide}">
      <p class="pic"><img src="../img/emptyCart.png" alt="" width="118"></p>
      <p>购物车空空的哦，您再逛逛~</p>
    </div>
    <div class="mui-card" :class="{'d-none':cartHide}">
      <div class="mui-card-content" v-for="item of list">
        <!--<div class="mui-card-content-inner">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
              <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="">
                <div class="mui-media-body">
                  <div class="mui-numbox">
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="sub">-</button>
                    <input class="mui-input-numbox" type="number"/>
                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
                  </div>
                  title
                  <p class='mui-ellipsis'>price</p>
                </div>
              </a>
            </li>
          </ul>
        </div>-->
        <div class="left">
				  <div class="mui-input-row mui-checkbox mui-left">
						<label>
              <p class="pic">
					      <img :src="item.pic" alt="" width="87">
			  	    </p>
            </label>
						<input name="checkbox" value="1" type="checkbox">
					</div> 
			  </div>
        <div class="info">
				  <h4 class="title">{{item.title}}</h4>
				  <div class="list">
					  <p class="listDesc">{{item.spec}}</p>
				  </div>
				  <div class="mb">
					  <div class="buyInfo">
						  <p class="mouch">
							  <span class="price">¥{{item.price}}</span>/月/台
					  	</p>
              <div class="mui-numbox">
                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub" :data-id="item.id">-</button>
                <input class="mui-input-numbox" type="number" :value="item.count"/>
                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd" :data-id="item.id">+</button>
              </div>
			  		</div>
			  	</div>
		  	</div>
      </div>
      <div class="mui-card-footer">
        <span>小计:{{getSubTotal}}</span>
        <mt-button type="primary" size="small">去结算</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
    return{
      list:[],
      emptyHide:false,
      cartHide:true,
      uname:''
    }
  },
  created(){
    this.uname=sessionStorage.getItem("uname");
    this.getGoods();
  },
  computed:{
    getSubTotal:function(){
      var sum=0;
      for(var item of this.list){
        sum+=item.price*item.count;
      }
      return sum;
    }
  },
  methods:{
    updateItemCount(id,count){
      //同步购物车中数量
      //id    购物车id
      //count 购物车中数量
      var url = ``
      this.axios.get(url).then(result=>{
          console.log(result);
      });
    },
    cartSub(e){
      var id = e.target.dataset.id;
      for(var item of this.list){
          if(item.id == id && item.count > 1){
            item.count--;
            //同步数据
            this.updateItemCount(item.id,item.count);
            break;
          }
      }
    },
    cartAdd(e){
      //1:获取当前按钮绑定购物车id
      var id = e.target.dataset.id
      //2:创建循环购物车数组内容
      for(var item of this.list){
      //3:判断当前元素id是否与元素id
        if(item.id == id){
          //4:修改数据
          item.count++;
          //同步数据 40
          this.updateItemCount(item.id,item.count)
          break;
        }
      }
    },
    getGoods(){
      if(!this.uname==''){
        this.emptyHide=true;
        this.cartHide=false;
        var url=`http://127.0.0.1:5000/cart/getCartList?uname=${this.uname}`;
        this.axios.get(url).then(result=>{
          console.log(result)
          this.list=result.data;
          console.log(this.list)
          if(this.list.length==0){
            this.emptyHide=false;
            this.cartHide=true;
          }
        })
      }
    },
  }
}
</script>

<style>
.d-none{
  display:none;
}
.search_empty {
  text-align: center;
  padding-top:60px;
}
.search_empty .pic {
  width: 117px;
  height: 84px;
}
.search_empty p{
  margin: 0 auto;
  margin-top: 115px;
}
.mui-card-content::after{
  content: '';
  display: block;
  clear:both;
}
.left{
  float:left;
}
.left input{
  margin-top:35px;
}
.info{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right:11px;
}
.info .title{
  line-height: 20px;
  height: 40px;
  overflow: hidden;
  white-space: normal;
  color: #333;
  font-size: 14px;
}
.info .list p{
  font-size: 12px;
  color: #999;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.info .mb .buyInfo{
  overflow:hidden;
  margin-top:4px;
}
.info .mb .buyInfo .mouch{
  float: left;
  font-size: 12px;
  margin-top: 3px;
}
.buyInfo .mouch .price{
  font-size: 18px;
  color: #ed2441;
}
.mui-numbox{
  width: 80px !important;
  height: 30px !important;
  padding: 0 24px 0 24px !important;
}
.mui-numbox input{
  padding: 0 !important;
}
.mui-numbox button{
  width:24px !important;
}
</style>