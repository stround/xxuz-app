import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qs from 'qs'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false

import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

Vue.filter("datetimeFilter",function(val){
  var date=new Date(val);
  var year=date.getFullYear();
  var month=date.getMonth()+1;
  var day=date.getDate();
  var hours=date.getHours();
  var minutes=date.getMinutes();
  var seconds=date.getSeconds();
  month<10&&(month="0"+month);
  day<10&&(day="0"+day);
  return `${year}-${month}-${day} ${hours}-${minutes}-${seconds}`;
})

//引入vuex库
import Vuex from "vuex";

Vue.use(Vuex);

var store=new Vuex.Store({
  state:{cartCount:0},//定义数据
  mutations:{//完成state中的数据修改操作
    increment(state){state.cartCount++},
    substract(state){state.cartCount--}
  },
  getters:{//在state中的数据基础之上，派生新的数据
    optCartCount:function(state){
      return state.cartCount;
    }
  }
});


//1.引入mint-ui组件库
import {Header,Swipe,SwipeItem,Button} from "mint-ui";
//2.注册指定组件
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
//3.在home.vue中使用

//4.引入axios库
import axios from "axios"
//5.修改信息 跨域保存session值
axios.defaults.withCredentials=true
//6.注册组件
Vue.prototype.axios=axios


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
