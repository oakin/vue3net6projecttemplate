<template>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/weather">Weather</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/

export default {
  name: 'App',
  components: {
    /*HelloWorld*/
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
