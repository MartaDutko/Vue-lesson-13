<template>
  <div class="block_selected">
    <h3>Крок 1. Сторінка вибору уроків</h3>
    <p>Виберіть уроки:</p>
    <div
      v-for="subject in getListLessons"
      :key="subject.id"
      class="block_selected_subject"
    >
      <label>
        {{ subject.subject }}
        <input v-model="selectedSubject" :value="subject.id" type="checkbox" />
      </label>
    </div>
    <div>
      <button :disabled=isDisabled @click="onSelectTeachers">Вибрати вчителів</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SubjectsView",
  data() {
    return {
      selectedSubject: [],
    };
  },
  computed: {
    ...mapGetters("subject", ["getListLessons"]),
    isDisabled(){
      return !this.selectedSubject.length
    }
  },
  methods: {
    onSelectTeachers() {
      this.$router.push({
        name: "teachers_list",
        params: {
          lessons_list_id: this.selectedSubject,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.block_selected {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .block_selected_subject {
    width: 30%;
    label {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>