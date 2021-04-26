<template>
  <div class="post">
    <div class = "titleCard">
      <div class = "category">
        <span class = "categoryName">{{ this.$route.params.categoryName }}</span>
      </div>
      <div class = "title">
        <span class = "titleName">{{ this.$route.params.postName }}</span>
        <span class = "lastModifiedDate">{{ lastModifiedDate }}</span>
      </div>
    </div>
    <div
      class="content"
      v-html="msg"/>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lastModifiedDate: '2020. 04. 12'
    }
  },
  created () {
    let a = require(`@/assets/category/${this.$route.params.categoryName}/${this.$route.params.postName}/index.json`)
    this.msg = marked(a.content)
    // eslint-disable-next-line no-useless-escape
    this.msg = this.msg.replace(/<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/, this.img_url_to_Base64)
  },
  mounted () {
    document.querySelectorAll('.content code').forEach(block => {
      // eslint-disable-next-line no-undef
      hljs.highlightBlock(block)
    })
  },
  methods: {
    img_url_to_Base64 (val, src) {
      return val.replace(src, require(`@/assets/category/${this.$route.params.categoryName}/${this.$route.params.postName}/${decodeURIComponent(src)}`))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post{
  width: 1000px;
  margin: auto;
  background-color:white;
}
.titleCard{
  padding-top: 360px;
  padding-left: 30px;
  text-align: left;
  font-size: 50px;
  height: 488px;
  background-color:white;
  border-bottom: 3px solid #ccc;
  margin-bottom: 70px;
}
.titleCard .category{
  color: #777;
  margin-left: 20px;
  height: 60px;
}
.titleCard .title .lastModifiedDate{
  color: #777;
  font-size: 20px;
}
.content{
  text-align: left;
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
