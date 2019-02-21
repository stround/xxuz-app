<template>
 <div class="app-container">
    <!--顶部导航栏-->
    <!--<mt-header fixed title="小熊U租"></mt-header>-->
    <!--router-view-->
    <router-view></router-view>
    <!--tabbar-->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/goodslist">
            <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
            <span class="mui-tab-label">分类</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shoplist">
            <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.optCartCount}}</span></span>
            <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/login">
            <span class="mui-icon mui-icon-person"></span>
            <span class="mui-tab-label">我的</span>
        </router-link>
    </nav>
 </div>
</template> 

<style>
.app-container{
    padding-bottom:50px;
    overflow-x:hidden;
}
.mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
ul{
    list-style:none;
}
</style>
