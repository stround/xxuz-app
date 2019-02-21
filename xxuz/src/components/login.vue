<template>
  <div>
    <mt-header fixed title="登录"></mt-header>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <form>
            用户名：<input v-model="name" type="text" placeholder="请输入用户名">
            密码：<input v-model="pwd" type="password" placeholder="请输入密码">
            <mt-button size="large" type="primary" @click.prevent="login()">登录</mt-button>
          </form>
        </div>
      </div>
      <div class="mui-card-footer">
        <a href="javascript:;">忘记密码？</a>
        <router-link to="/register">免费注册</router-link>
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
      name:"",
      pwd:"",
    }
  },
  methods:{
    login(){
      var n=this.name;
      var p=this.pwd;
      var reg=/^[a-z0-9]{3,12}$/;
      if(!reg.test(n)){
        Toast("用户名输入格式错误");
      }else if(!reg.test(p)){
        Toast("密码输入格式错误");
      }else{
        var url=`http://127.0.0.1:5000/user/login`;
        var data={uname:n,upwd:p};
        this.axios.post(url,qs.stringify(data),{headers:{'Content-Type':'application/x-www-form-urlencoded'}})
        .then(result=>{
          var code=result.data.code;
            Toast(result.data.msg);
            if(code==100){
              sessionStorage.setItem("uname",n);
              this.$router.push("/home")
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
</style>