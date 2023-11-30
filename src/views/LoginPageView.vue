<template>
  <div>
    <label>
      Ім"я
      <input v-model="dataUser.userName" type="text" minlength="3" />
    </label>
    <label>
      Password
      <input v-model="dataUser.pasword" type="password" minlength="5" />
    </label>
    <button @click="onLogin">Login</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginPageView",
  data() {
    return {
      dataUser: {},
    };
  },
  methods: {
    ...mapActions(["setDataUser"]),
    onLogin() {
      if (Object.keys(this.dataUser).length === 2) {
        window.userName = this.dataUser.userName;
        this.setDataUser(this.dataUser);
        if (this.$route.query.redirect) {
          this.$router.push({
            path: this.$route.query.redirect,
          });
        } else {
          this.$router.push({
            name: "home",
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>