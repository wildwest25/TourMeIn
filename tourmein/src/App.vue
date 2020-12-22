<template>
  <div id="app">
    <navigation v-if="!$route.meta.hideNavigation">
      <div id="nav">
        <!--<router-link to="/">Home</router-link> | -->
        <router-link to="/guide_profile">My Profile</router-link> |
        <router-link to="/my_previous_tours_guide">My Previous Tours</router-link> |
        <router-link to="/notifications">Notifications</router-link> |
        <router-link to="/messages">Messages</router-link>
      </div>
    </navigation>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
