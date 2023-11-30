<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link :to="{ name: 'subjects_select' }">Уроки</router-link> |
    <login-button />
  </nav>
  <router-view />
</template>
<script>
import LoginButton from "./components/LoginButton.vue";
export default {
  components: {
    LoginButton,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  gap: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
