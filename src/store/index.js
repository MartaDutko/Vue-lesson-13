import { createStore } from "vuex";
import subject from "@/store/pages/subject";
import teachers from "@/store/pages/teachers";

export default createStore({
  state: {
    dataUser:{},
  },
  getters: {
    getDataUser:({dataUser})=>dataUser,
    getDataUserName:({dataUser})=>dataUser.userName,

  },
  mutations: {
    setDataUser(state,obj){
      state.dataUser=obj
    }
  },
  actions: {
    setDataUser({commit},obj){
      commit('setDataUser',obj)
    }
  },
  modules: {
    subject,
    teachers
  },
});