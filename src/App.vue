<template>
  <div id="app" class="mx-auto">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="secondary">
        <b-navbar-brand to="/">Beet Vue Boilerplate</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/" :active="$route.name == 'home'">Home</b-nav-item>
            <b-nav-item to="/hello"  :active="$route.name == 'hello'">Hello</b-nav-item>
            <b-nav-item to="/about"  :active="$route.name == 'about'">About</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right v-if="loggedInAccount">
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>{{loggedInAccount}}</em></template>
              <b-dropdown-item to="/logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item v-else to="/login">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'

    export default {
        name: "App",
        components: {},
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
  max-width: 1080px;
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
