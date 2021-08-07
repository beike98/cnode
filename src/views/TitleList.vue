<template>
  <div class="content">
    <div class="title-list">
      <div class="tab-bar">
          <span><a class="activity" href="/?tab=all">全部</a></span>
          <span><a href="/?tab=good">精华</a></span>
          <span><a href="/?tab=share">分享</a></span>
          <span><a href="/?tab=ask">问答</a></span>
          <span><a href="/?tab=job">招聘</a></span>
      </div>
      <ul>
        <li v-for="list in lists">
          <span class="img"><img :src="list.author.avatar_url" alt="photo"></span>
          <span class="count">
            <span class="exp">{{ list.reply_count }}</span>/<span>{{ list.visit_count }}</span>
          </span>
            <span class="top" v-if="list.top">置顶</span>
            <span class="good" v-else-if="list.good">精华</span>
            <span class="tab" v-else>{{ list.tab | filterTab }}</span>
          <span class="title"><a href="#">{{ list.title }}</a></span>
          <span class="time">{{ list.last_reply_at | filterDate }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "TitleList",
  data() {
    return {
      lists: []
    }
  },
  created() {
    axios.get('https://cnodejs.org/api/v1/topics', {
      params: {
        page: 1,
        limit: 25
      }
    }).then(
        (response) => {
          this.lists = response.data.data

        }
    ).catch(
        (err) => {
          console.log(err)
        }
    )
  }
}
</script>

<style scoped>
.tab-bar {
  height: 40px;
  background: #f6f6f6;
  font-size: 14px;
}
.tab-bar>span>a{
  margin-left: 20px;
  color: #80bd01;
  line-height: 40px;
}
.tab-bar>span>.activity{
  background: #80bd01;
  color: #ffffff;
  padding: 3px 4px;
  border-radius: 3px;
}
.content {
  max-width: 1500px;
  margin: 0 auto;
}

.title-list {
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 18px;
  background: #ffffff;
}

img {
  width: 32px;
  height: 32px;
  vertical-align: middle;
}

li {
  border-top: 1px solid #f0f0f0;
  padding: 10px;
}
li:hover{
  background: #f6f6f6;
}
a {
  color: #000000;
}

.time {
  float: right;
  font-size: 11px;
  color: #777;
  line-height: 31px;
}

.count {
  font-size: 10px;
  width: 80px;
  display: inline-block;
  text-align: center;
}

.tab {
  font-size: 12px;
  padding: 2px 4px;
  color: #999999;
  border-radius: 3px;
  background: #e5e5e5;
}

.title{
  margin-left: 10px;
  color: #333333;
  font-size: 16px;
}

.exp{
  color: #9e78c0;
}

.good,.top{
  background: #8dba39;
  font-size: 12px;
  padding: 2px 4px;
  color: white;
  border-radius: 3px;
}
</style>