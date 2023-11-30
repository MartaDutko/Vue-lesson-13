<template>
  <div>
    <span>{{ getDataUserName }}</span>
    <button @click="onLogin">{{ getButtonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LoginButton",
  computed: {
    ...mapGetters(["getDataUserName"]),
    getButtonTitle() {
      return this.getDataUserName ? "Log out" : "Log in";
    },
  },
  methods: {
    ...mapActions(["setDataUser"]),
    onLogin() {
      if (this.getDataUserName) {
        window.userName = null;
        this.setDataUser({});
        this.$router.push({
          name: "home",
        });
      } else {
        this.$router.push({
          name: "login_page",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>