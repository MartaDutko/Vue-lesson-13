<template>
  <div>
    <h3>Крок 2. Вибір вчителя</h3>
    <div v-for="lesson in lessonsList" :key="lesson.id">
      {{ lesson.subject }}
      <select v-model="selectedTeachers[lesson.id]">
        <option
          v-for="teacher in getTeacherBySubjectId(lesson.id)"
          :key="teacher.id"
          :value="teacher.id"
        >
          {{ teacher.name }}
        </option>
      </select>
    </div>
    <div><button @click="addToReport">Розпочати навчання</button></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TeachersView",
  data() {
    return {
      selectedTeachers: {},
    };
  },
  props: {
    lessonId: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters("teachers", ["getTeacherBySubjectId"]),
    ...mapGetters("subject", ["getListLessonsById"]),
    lessonsList() {
      return this.getListLessonsById(this.lessonId);
    },
  },
  methods: {
    addToReport() {
      if (Object.keys(this.selectedTeachers).length === this.lessonId.length) {
        const params = [];
        for (const lessonId in this.selectedTeachers) {
          const teacherId = this.selectedTeachers[lessonId];
          params.push(lessonId + "-" + teacherId);
        }
        this.$router.push({
          name: "report_lesson",
          params: {
            lessonParams: params,
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>