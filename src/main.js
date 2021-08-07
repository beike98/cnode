import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.filter('filterDate',(value)=>{
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const now = new Date().getTime();
  const value1 = new Date(value)
  const diffValue = now - value1.getTime();
  if(diffValue < 0){return;}
  const monthC =diffValue/month;
  const weekC =diffValue/(7*day);
  const dayC =diffValue/day;
  const hourC =diffValue/hour;
  const minC =diffValue/minute;
  let result;
  if(monthC>=1){
    result="" + parseInt(monthC) + "月前";
  }
  else if(weekC>=1){
    result="" + parseInt(weekC) + "周前";
  }
  else if(dayC>=1){
    result=""+ parseInt(dayC) +"天前";
  }
  else if(hourC>=1){
    result=""+ parseInt(hourC) +"小时前";
  }
  else if(minC>=1){
    result=""+ parseInt(minC) +"分钟前";
  }else
    result="刚刚";
  return result;
})
Vue.filter('filterTab',(value)=>{
  if(value==='share'){
    return value='分享'
  }else if(value==='ask'){
    return value='问答'
  }else if(value==='job'){
    return value='招聘'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')