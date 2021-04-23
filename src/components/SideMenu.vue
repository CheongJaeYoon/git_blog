<template>
  <div class="sideMenu">
    <div class="nameCard">
      <div class = "img"/>
      <div class = "name">
        SlowlyToYou
      </div>
      <div class = "shortcut">
        <div class = "git"/>
        <div class = "gmail"/>
        <div class = "git"/>
      </div>
    </div>
    <div class="menu">
      <a
        class = "home depth1"
        @click = "clickLink('/')">
        Home
      </a>
      <div
        class = "category depth1"
        @click="categoryClick">
        Category {{ isCategoryClicked ? '△' : '▽' }}
      </div>
      <a
        v-for="(obj, name) in category"
        :key="name"
        :class="name + (isCategoryClicked ? ' ' : ' hidden') + ' depth2'"
        @click = "clickLink('/category/' + name)">
        {{ name }} ( {{ obj.length }} )
      </a>
      <a
        class = "home depth1"
        @click = "clickLink('/profile')">
        Profile
      </a>
    </div>
  </div>
</template>

<script>
import post from '@/assets/post.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      category: post,
      isCategoryClicked: false
    }
  },
  methods: {
    categoryClick () {
      this.isCategoryClicked = !this.isCategoryClicked
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
.sideMenu{
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 5px solid #333333;
  border-radius: 5px;
  background-color: white;
}
.nameCard{
  height: 510px;
  background-color:white;
  display: flex;
  flex-direction: column;
}
.img{
  margin-top: 80px;
  margin-left: 27px;
  margin-bottom: 20px;
  height: 230px;
  width: 230px;
  border: 5px solid #333333;
  background-color:white;
}
.name{
  height: 50px;
  background-color:white;
  font-size: 30px;
  user-select: none;
}
.shortcut{
  height: 60px;
  background-color:white;
  display: flex;
  flex-direction: row;
}
.shortcut div {
  width: 50px;
  height: 50px;
  margin: 5px 15px 5px 15px;
  background-color: yellowgreen;
  cursor: pointer;
}
.shortcut div:first-child {
  margin-left: 37px;
}
.menu .depth1{
  display: block;
  font-size: 30px;
  height: 50px;
  border-top: 2px solid #999999;
  border-radius: 3px ;
  margin: 20px 0 0 0;
  padding: 20px;
  cursor: pointer;
  user-select: none;
}
.menu .depth2{
  display: block;
  transition: 0.3s;
  height: 35px;
  font-size: 20px;
  padding-top: 10px;
  cursor: pointer;
  user-select: none;
}
.menu .depth2:hover{
  color: #777777
}
.menu .depth1:hover{
  color: #777777
}
.menu .depth2.hidden {
  height: 0px;
  color: transparent;
  padding: 0px;
}
</style>
