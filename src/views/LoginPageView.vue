<template>
  <div>
    <label>
      Ім"я
      <input v-model="dataUser.userName" type="text" minlength="3" />
    </label>
    <label>
      Password
      <input v-model="dataUser.password" type="password" minlength="5" />
    </label>
    <button :disabled=isDisabled @click="onLogin">Login</button>
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
  computed: {
    isDisabled() {
      return !(this.dataUser.userName && this.dataUser.password)
    }
  },
  methods: {
    ...mapActions(["setDataUser"]),
    onLogin() {
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
    },
  },
};
</script>

<style lang="scss" scoped>
</style>