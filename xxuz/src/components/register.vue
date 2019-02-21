<template>
  <div>
    <mt-header fixed title="注册">
      <router-link to="/login" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <form>
            用户名：<input v-model="nameval" type="text" placeholder="请输入用户名">
            密码：<input v-model="pwdval" type="password" placeholder="请输入密码">
            确认密码：<input v-model="pwd2val" type="password" placeholder="请再次输入密码">
            <mt-button size="large" type="primary" @click.prevent="register()">注册</mt-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
import qs from 'qs'
export default {
  data(){
    return {
      nameval:"",
      pwdval:"",
      pwd2val:""
    };
  }, 
  methods:{
    register(){
      var n=this.nameval;
      var p=this.pwdval;
      var p2=this.pwd2val;
      var reg1=/^\w{6,12}$/i;
      var reg2=/^\w{6,12}$/i;
      if(!reg1.test(n)){
        Toast("用户名格式错误");}
      else if(!reg2.test(p)){
        Toast("密码格式错误");}
      else if(p2!=p){
        Toast("两次输入密码不一致")
      }else{
        //检测用户名
        var url=`http://127.0.0.1:5000/user/reguser?uname=${n}`;
        this.axios.get(url).then(result=>{
          if(result.data.code==100){
            //注册
            var url=`http://127.0.0.1:5000/user/register`;
            var data={uname:n,upwd:p};
            this.axios.post(url,qs.stringify(data),{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
            .then(result=>{
              //注册返回结果
              Toast(result.data.msg)
              if(result.data.code==100){
                this.$router.push("/login")
              }
            })
          }
        })
      }
    }
  }
}
</script>

<style>
.mui-card{
  margin:40px 0 0 0 !important;
  background-color: transparent !important;
  box-shadow:none !important;
}
i.mintui-back{
  color:#fff;
  margin-right:0;
}
span.mint-button-icon{
  vertical-align:bottom;
}
</style>