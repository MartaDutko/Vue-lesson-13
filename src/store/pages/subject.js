export default ({
  namespaced: true,
  state: {
  listLessons : [
  {
      id:1,
      subject:'Українська мова'
  },
  {
      id:2,
      subject:'Математика'
  },
  {
      id:3,
      subject:'Географія'
  },
  {
      id:4,
      subject:'Історія'
  },
  {
      id:5,
      subject:'Хімія'
  },
  {
      id:6,
      subject:'Фізика'
  },
]
  },
  getters: {
    getListLessons:({listLessons})=>listLessons,
    getSubjectById:(state)=>id=>state.listLessons.find(item=>
      item.id==id).subject,
    getListLessonsById:(state)=>ids=>state.listLessons.filter(item=>
      ids.includes(item.id)),
  },
  mutations: {},
  actions: {},
  modules: {},
});
