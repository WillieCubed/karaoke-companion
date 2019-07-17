<template>
  <div id="app">
    <div class="toolbar">Karaoke Companion</div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.toolbar {
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: bold;
  flex-direction: column;
  margin: 0px 8px;
}
</style>
