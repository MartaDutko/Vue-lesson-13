import HomeView from "../views/HomeView.vue";

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
        // якщо шлях subject передається без параметрів 
        beforeEnter: (to, from, next) => {
            // Перевіряємо, чи є вкладені дочірні роути з параметрами
            const hasChildRoutesWithParams = to.matched.some(route => route.path !== "/subject" && route.params);

            if (!hasChildRoutesWithParams) {
                // Якщо немає вкладених роутів з параметрами, редиректимо на сторінку "сторінка не знайдена"
                next({ name: 'not_found' });
            } else {
                // Інакше дозволяємо продовжити навігацію
                next();
            }
        },
    },
    children, [
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
                    };
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
];
