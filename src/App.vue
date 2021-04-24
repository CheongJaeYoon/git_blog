<template>
  <div id="app">
    <header>
      <top-bar/>
    </header>
    <main>
      <section>
        <transition>
          <router-view :key="$route.path"/>
        </transition>
      </section>
    </main>
    <aside>
      <side-menu/>
    </aside>
    <footer>
      <!-- -->
    </footer>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
import TopBar from './components/TopBar.vue'
export default {
  name: 'App',
  components: {
    TopBar,
    SideMenu
  },
  data () {
    return {
      firstClick: false
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to, from)
    }
  },
  mounted () {
    this.initEventListener()
  },
  methods: {
    initEventListener () {
      document.querySelectorAll('header, main, footer').forEach((el) => {
        el.addEventListener('click', (event) => {
          if (document.querySelector('aside').style.left === '0px' && this.firstClick === true) {
            document.querySelector('aside').style.left = '-300px'
            this.firstClick = false
          } else if (document.querySelector('aside').style.left === '0px') {
            this.firstClick = true
          }
        })
      })
    }
  }
}
</script>

<style>
@font-face {
    font-family: 'KyoboHand';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
html, body {
    line-height: 1.73em;
    height: 100%;
}
* {
    font-family : 'KyoboHand', serif;
    font-weight: bold;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
a {
  color: black;
  text-decoration: none;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eee;

}
header {
  margin-top: 3px;
  margin-left: 3px;
  margin-right: 3px;
  height: 50px;
}
main {
  height: calc(100% - 53px);
}
aside {
  position: absolute;
  top : 0px;
  left : 0px;
  left : -300px;
  width: 300px;
  height: 100%;
  padding: 3px;
  transition: 0.3s;
}
section {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: #eee;
}
</style>
