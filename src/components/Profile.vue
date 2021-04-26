<template>
  <div class="profile">
    <div class = "titleCard">
      <span class = "title">Profile</span>
    </div>
    <div class="content">
      <div class = "question">
        이름
      </div>
      <div class = "answer">
        정재윤
      </div>
      <div class = "question">
        생년월일
      </div>
      <div class = "answer">
        1999년 10월 11일
      </div>
      <div class = "question">
        목표
      </div>
      <div class = "answer">
        경력있는 신입되기
      </div>
      <div class = "question">
        경력
      </div>
      <div class = "answer">
        아직은 경력이 없습니다.... 쩝<br>
        공군기상단 개발병(경력?)으로 근무(2019.8.05 ~2021.5.21)<br>
        아주대학교 소프트웨어학과 재학중(2018.03.02 ~ )<br>
      </div>
      <div class = "question">
        깃허브 주소
      </div>
      <div class = "answer">
        <a href="https://github.com/SlowlyToYou">https://github.com/SlowlyToYou</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile{
  width: 1000px;
  margin: auto;
  background-color:white;
}
.titleCard{
  padding-top: 200px;
  padding-left: 50px;
  text-align: left;
  font-size: 50px;
  height: 288px;
  background-color:white;
  border-bottom: 3px solid #ccc;
  margin-bottom: 70px;
  user-select: none;
}
.content .question{
  font-size: 35px;
  border-bottom: 3px solid #777;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.content .answer{
  font-size: 23px;
  color: #333 ;
  line-height: 33px;
  padding-bottom: 10px;
  margin-bottom: 50px;
}
.content .answer a:hover{
  color: #7777ff;
  cursor: pointer;
}
.content{
  text-align: left;
  padding-bottom: 70px;
  margin-left: 30px;
  margin-right: 30px;
}
.content >>> h1{
  margin-left: 11px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 50px;
}
.content >>> p{
  font-size: 20px;
  margin-top: 20px;
  line-height: 33px;;
}
.content >>> img {
  border-style: none;
}
.content >>> code,
.content >>> kbd,
.content >>> pre {
  font-family: monospace,monospace;
  font-size: 1em;
}
.content >>> p{
  margin-top: 20px;
}
</style>
