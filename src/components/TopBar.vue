<template>
  <div class="topBar">
    <font-awesome-icon
      class="fa-2x menu-button"
      icon="bars"
      @click="clickButton"/>
    <div
      class="title">
      <router-link to="/">
        {{ msg }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'SlowlyToYou의 블로그'
    }
  },
  methods: {
    clickButton () {
      document.querySelector('aside').style.left = '0px'
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
  .topBar{
    height: 100%;
    border: 5px solid #333333;
    background-color: white;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
  }
  .menu-button{
    top : 11px;
    left : 17px;
    position: absolute;
    cursor: pointer;
  }
  .menu-button:hover{
    top : 11px;
    left : 17px;
    position: absolute;
    cursor: pointer;
    color: #666
  }
  .title{
    margin-top: 7px;
    font-size: 30px;
    width: 100%;
    user-select: none
  }
  .title a:hover{
    cursor: pointer;
    color: #888
  }
</style>
