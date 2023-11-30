<template>
  <div>
    <div class="block__report">
      <h3 class="title">Навчальний план</h3>
      <div v-for="(item, index) in dataReport" :key="index">
        <span>{{ index + 1 }}. </span>
        <span
          >{{ getSubjectById(item.lessonsId) }} -
          {{ getTeacherById(item.teachersId) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ReportView",
  props: {
    dataReport: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    ...mapGetters("teachers", ["getTeacherById"]),
    ...mapGetters("subject", ["getSubjectById"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.title {
  color: red;
}
</style>