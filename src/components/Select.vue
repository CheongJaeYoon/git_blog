<template>
  <div class = "select">
    <div class = "titleCard">
      <span class = "title">{{ title }}</span>
      <span class = "length">( {{ totalPostNum }} )</span>
    </div>
    <div class = "menuCards">
      <div
        v-for="(el, idx) in postArr[currentIdx]"
        :key="idx"
        :class="fadeEffect===true?'fade':''"
        class = "menuCard"
        @click = "clickLink('/post/'+ el.category + '/'+ el.postname)">
        <span class="title">{{ el.postname }}</span>
        <span class="date">{{ el.firstMadeDate | strToDate }}</span>
      </div>
      <div class = "pagination">
        <span
          v-for="el in idxArr"
          :class="el===currentIdx?'focus':''"
          :key="el"
          @click="clickIdx(el)">
          {{ el + 1 }}
        </span>
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
      postArr: [],
      totalPostNum: 0,
      currentIdx: 0,
      idxArr: [],
      fadeEffect: false
    }
  },
  created () {
    if (this.$route.params.hasOwnProperty('categoryName')) {
      this.title = this.$route.params.categoryName
      this.totalPostNum = post[this.title].length
      this.postArr = this.makePostArr(post[this.title])
      console.log(this.postArr)
    } else {
      this.title = 'Home'
      console.log(post)
      let tempArr = []
      for (let key in post) {
        post[key].forEach((el) => {
          tempArr.push(el)
        })
      }
      tempArr.sort(function (a, b) {
        a = new Date(a.firstMadeDate)
        b = new Date(b.firstMadeDate)
        return (a > b ? -1 : (a < b ? 1 : 0))
      })
      this.totalPostNum = tempArr.length
      this.postArr = this.makePostArr(tempArr)
    }
  },
  methods: {
    makePostArr (tempArr) {
      let pageUnit = 4
      let resultArr = []
      for (let i = 0; i < Math.ceil(tempArr.length / pageUnit); i++) {
        resultArr[i] = []
        this.idxArr.push(i)
        for (let j = i * pageUnit; j < (i + 1) * pageUnit; j++) {
          if (j < tempArr.length) {
            resultArr[i].push(tempArr[j])
          }
        }
      }
      console.log(this.idxArr)
      return resultArr
    },
    clickIdx (idx) {
      if (this.currentIdx !== idx) {
        this.currentIdx = idx
        this.fadeEffect = true
        document.querySelector('section').scrollTo({top: 400, behavior: 'smooth'})
        setTimeout(() => {
          this.fadeEffect = false
        }, 200)
      }
    },
    clickLink (str) {
      if (this.$route.fullPath === str) {
        this.$router.go()
      } else {
        this.$router.push(str)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.select{
  width: 1000px;
  margin: auto;
  background-color:white;
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
  user-select: none;
}
.titleCard .length{
  font-size: 25px;
  color : #777;
}

.menuCard{
  transition: 0.1s;
  height: 200px;
  width: 900px;
  margin: 40px 50px 40px 50px;
  padding-top: 150px;
  padding-left: 10px;
  text-align: left;
  background-color: white;
  border: 3px solid black;
  cursor: pointer;
  user-select: none;
}
.menuCard .title{
  font-size: 40px;
  user-select: none;
}
.menuCard .date{
  margin-left: 15px;
  font-size: 20px;
  color: #888;
  user-select: none;
}
.menuCard:hover{
  background-color: #ddd;
}
.menuCard.fade{
  transform:translateX(100%);
  opacity: 0;
}
.pagination{
  margin-top: 70px;
  padding-bottom: 150px;
}
.pagination span{
  display: inline-block;
  margin: 10px;
  border: 3px solid #ccc;
  width: 35px;
  height: 35px;
  padding: 3px;
  user-select: none;
}
.pagination span:hover{
  border: 3px solid black;
  cursor: pointer;
}
.pagination span.focus{
  border: 3px solid black;
}
.pagination span.focus:hover{
  border: 3px solid black;
  cursor: default;
}
</style>
