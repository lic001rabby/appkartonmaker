<template>
  <div id="app" style="margin: 0 80px;">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
  </div>
</template>

<style>
body {
  background-color: #f0f0f0;
}
.el-container{
  background-color: #ffffff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.no-padding {
  padding: 0%!important;
}
.no-right-padding {
  padding-right: 0%!important;
}
.align-right {
  text-align: right;
}
.el-button--primary {
  color: #2c3e50!important;
}
.el-button {
  border-radius: 0%!important;
}
.margin-right-30 {
  margin-right: 30px;
}
.price-tooltip {
  background-color: #FCD363;
}
.slider-point {
    position: absolute;
    height: 6px;
    width: 6px;
    border-radius: 100%;
    background-color: #fff;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.margin-20 {
  margin-bottom: 20px;
}
.el-header {
  height: auto!important;
}
</style>
