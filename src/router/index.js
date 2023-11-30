import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: false }
  },
  {
    path: '/subjects/select',
    name: 'subjects_select',
    component: () => import('@/views/SubjectsView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/teachers_list/:lessons_list_id*',
    name: 'teachers_list',
    props: (route) => ({
      lessonId: route.params.lessons_list_id.map(Number),
    }),
    component: () => import('@/views/TeachersView.vue'),
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (from.name === 'subjects_select') {
        if (to.params.lessons_list_id.length > 0)
          next();
        else if(window.userName) {
          next({name:"subjects_select"}) 
        }
        else {
          next({ name: 'home' });
        }
      }
      else{
        next({name:'home'})
      }
    },
  },
  {
    path: '/login_page',
    name: 'login_page',
    component: () => import('@/views/LoginPageView.vue')
  },
  {
    path: '/report_lessons/:lessonParams+',
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
    meta: { requiresAuth: true },
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
});
router.beforeEach((to) => {
  const isUser = window.userName
  if (to.meta.requiresAuth && !isUser) {
    return {
      name: 'login_page',
      query: { redirect: to.fullPath }
    }
  }
})


export default router;