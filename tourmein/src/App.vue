<template>
  <div id="app">
    <navigation v-if="$route.meta.Guide">
      <div id="nav" class="navbar navbar-expand-md navbar-light">
        <img src="@/assets/tourmein_logo.png" height="40" class="d-inline-block align-top" alt="" loading="lazy" />
        <h1>TourMeIn</h1>
        <!--<router-link to="/">Home</router-link> | -->
        <router-link to="/guide_profile" class="offset-1">My Profile</router-link> |
        <router-link to="/my_previous_tours_guide">My Previous Tours</router-link> |
        <router-link to="/notifications">Notifications</router-link> |
        <router-link to="/messages">Messages</router-link>
      </div>
    </navigation>
    <navigation v-if="$route.meta.User">
      <div id="nav" class="navbar navbar-expand-md navbar-light">
        <img src="@/assets/tourmein_logo.png" height="40" class="d-inline-block align-top" alt="" loading="lazy" />
        <h1>TourMeIn</h1>
        <!--<router-link to="/">Home</router-link> | -->
        <router-link to="/user_profile" class="offset-1">My Profile</router-link> |
        <router-link to="/user_page">Search Guides</router-link> |
        <router-link to="/my_guides">My Guides</router-link> |
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
      color: #ee9f38;
    }
  }
}
</style>
