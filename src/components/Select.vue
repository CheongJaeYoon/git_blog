<template>
  <div class="select">
    <div class = "titleCard">
      <span class = "title">{{ title }}</span>
      <span class = "length">( {{ postArr.length }} )</span>
    </div>
    <div class="menuCards">
      <div
        v-for="(el, idx) in postArr"
        :key="idx"
        class = "menuCard">
        <span class="title">{{ el.postname }}</span>
        <span class="date">{{ el.firstMadeDate | strToDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import post from '@/assets/post.json'
export default {
  name: 'Select',
  filters: {
    strToDate (val) {
      let date = new Date(val)
      let str = '' + date.getFullYear() + '. ' + ('0' + (date.getMonth() + 1)).slice(-2) + '. ' + ('0' + date.getDate()).slice(-2)
      return str
    }
  },
  data () {
    return {
      title: 'Home',
      postArr: []
    }
  },
  created () {
    if (this.$route.params.hasOwnProperty('categoryName')) {
      this.title = this.$route.params.categoryName
      this.postArr = post[this.title]
      console.log(this.postArr)
    } else {
      this.title = 'Home'
      console.log(post)
      for (let key in post) {
        post[key].forEach((el) => {
          this.postArr.push(el)
        })
      }
      this.postArr.sort(function (a, b) {
        a = new Date(a.firstMadeDate)
        b = new Date(b.firstMadeDate)
        return (a > b ? -1 : (a < b ? 1 : 0))
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select{
  height: 100%;
  overflow-y: scroll;
}
.titleCard{
  padding-top: 420px;
  padding-left: 50px;
  text-align: left;
  font-size: 50px;
  height: 488px;
  background-color:white;
  border-bottom: 3px solid #ccc;
  margin-bottom: 70px;
}
.titleCard .length{
  font-size: 25px;
  color : #777;
}

.menuCard{
  transition: 0.3s;
  height: 200px;
  width: 900px;
  margin: 40px 50px 40px 50px;
  padding-top: 150px;
  padding-left: 10px;
  text-align: left;
  background-color: white;
  border: 3px solid black;
  cursor: pointer;
}
.menuCard .title{
  font-size: 40px;
}
.menuCard .date{
  margin-left: 15px;
  font-size: 20px;
  color: #888;
}

.menuCard:hover{
  background-color: #ddd;
}
</style>
