<template>
  <div class="topBar">
    <font-awesome-icon
      class="fa-2x menu-button"
      icon="bars"
      @click="clickButton"/>
    <div class="title">{{ msg }}</div>
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
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    display: flex;
    flex-direction: row;
  }
  .menu-button{
    top : 11px;
    left : 17px;
    position: absolute;
    cursor: pointer;
  }
  .title{
    margin-top: 7px;
    font-size: 30px;
    width: 100%;
  }
</style>
