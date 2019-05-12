<template>
  <div id="app" class="mx-auto">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-accent" v-if="loggedInAccount">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">School</span>
          </div>

          <div class="md-toolbar-section-end">
            <router-link to="/logout">
              Logout
            </router-link>
          </div>
        </div>

      </md-app-toolbar>
      <!-- <b-navbar toggleable="lg" type="dark" variant="secondary">
        <b-navbar-brand to="/">Beet Vue Boilerplate</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" :active="$route.name == 'home'">Home</b-nav-item>
            <b-nav-item to="/hello"  :active="$route.name == 'hello'">Hello</b-nav-item>
            <b-nav-item to="/about"  :active="$route.name == 'about'">About</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right v-if="loggedInAccount">
              <template slot="button-content"><em>{{loggedInAccount}}</em></template>
              <b-dropdown-item to="/logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-else to="/login">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar> -->
    </md-app>
    <router-view />
  </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'
    import Viewport from '../src/components/Viewport'

    export default {
        name: "App",
        components: {
          Viewport
        },
        computed: {
            ...mapState({
                loggedInAccount: state => state.accounts.loggedInAccount
            }),
        },
    };
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-active {
      color: #121bb9;
    }
  }
}
</style>
