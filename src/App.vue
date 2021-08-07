<template>
  <div id="app">
    <Nav></Nav>
    <TitleList></TitleList>
  </div>
</template>

<script>
import Nav from '@/components/NavBar.vue'
import TitleList from "@/views/TitleList";
export default {
  components:{
    Nav,TitleList
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a,a:link,a:visited,a:hover,a:active{
  text-decoration: none;
}
body{
  background: #e1e1e1;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
ul,li{
  list-style:none;
}
</style>
