export default ({
  namespaced: true,
  state: {
    listTeachers : [
  {
      id:1,
      name:'Іван Іванович',
      subjectId:1
  },
  {
      id:2,
      name:'Павло Павлович',
      subjectId:1
  },
  {
      id:3,
      name:'Михайло Михайлович',
      subjectId:2
  },
  {
      id:4,
      name:'Андрій Андрійович',
      subjectId:2
  },
  {
      id:5,
      name:'Назар Назарович',
      subjectId:3
  },
  {
      id:6,
      name:'Ольга Олегівна',
      subjectId:3
  },
  {
      id:7,
      name:'Марія Михайлівна',
      subjectId:4
  },
  {
      id:8,
      name:'Галина Петрівна',
      subjectId:5
  },
  {
      id:9,
      name:'Василь Васильович',
      subjectId:6
  },
  {
      id:10,
      name:'Роман Романович',
      subjectId:6
  },
]
  },
  getters: {
    getTeacherById:(state)=>id=>state.listTeachers.find(item=>
        item.id==id).name,
    getTeacherBySubjectId:(state)=>id=>state.listTeachers.filter(item=>
        item.subjectId===id)
  },
  mutations: {},
  actions: {},
  modules: {},
});