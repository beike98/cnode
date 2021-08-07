<template>
<div class="header">
  <div class="nav">
    <img src="../assets/cnodejs_light.svg" alt="logo">
    <ul>
      <li><a href="">首页</a></li>
      <li><a href="">新手入门</a></li>
      <li><a href="">API</a></li>
      <li><a href="">关于</a></li>
      <li><a href="">注册</a></li>
      <li><a href="">登陆</a></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
.header{
  height: 50px;
  background: #444444;
}
.nav{
  max-width: 1500px;
  margin: 0 auto;
}
img{
  width: 120px;
  margin-left: 70px;
  padding-top: 10px;
}
ul{
  list-style:none;
  float: right;
  margin-right: 60px;
  height: 50px;
}
ul>li{
  display: inline-block;
  margin-right: 30px;
  font-size: 14px;
  line-height: 50px;
}
a{
  color: #cccccc;
}
a:hover{
  color: #f1f1f1;
}
</style>