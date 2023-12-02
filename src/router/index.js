import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: false }
  },
  {
    path: "/subject",
    name: "subject",
    component: () => import('@/views/SubjectSelect.vue'),
    meta: { requiresAuth: false },
    beforeEnter: (to) => {
      if (to.name === 'subject' ) return { name: 'not_found' }
    },
    children: [
      {
        path: 'select',
        name: 'subjects_select',
        component: () => import('@/views/SubjectsView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: ':lessons_list_id(\\d+)+',
        name: 'teachers_list',
        props: (route) => ({
          lessonId: route.params.lessons_list_id.map(Number),
        }),
        component: () => import('@/views/TeachersView.vue'),
        meta: { requiresAuth: true },

        beforeEnter: (to, from) => {
          if (!(from.name === 'subjects_select' && from.params)) {
            return {
              name: 'subjects_select'
            }
          }
        }
      },
      {
        path: ':lessonParams(\\d+-\\d+)+',
        name: 'report_lesson',
        component: () => import('@/views/ReportView.vue'),
        props: (route) => ({
          dataReport: route.params.lessonParams.map((item) => {
            const [lesson, teacher] = item.split("-");
            return {
              lessonsId: parseInt(lesson),
              teachersId: parseInt(teacher)
            };
          })
        }),
        meta: { requiresAuth: false },

      },
    ]
  },
  {
    path: '/login_page',
    name: 'login_page',
    component: () => import('@/views/LoginPageView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => import('@/views/PageNotFoundView.vue'),
    meta: { requiresAuth: false }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  base: "/Vue-lesson-13/",
});
router.beforeEach((to) => {
  const isAuth = store.getters.getDataUserName
  if (to.meta.requiresAuth && !isAuth) {
    return {
      name: 'login_page',
      query: { redirect: to.fullPath }
    }
  }
})


export default router;