"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[355],{7355:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var a=s(3396),r=s(9242);const n=["disabled"];function u(e,t,s,u,i,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("label",null,[(0,a.Uk)(' Ім"я '),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.dataUser.userName=e),type:"text",minlength:"3"},null,512),[[r.nr,i.dataUser.userName]])]),(0,a._)("label",null,[(0,a.Uk)(" Password "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.dataUser.password=e),type:"password",minlength:"5"},null,512),[[r.nr,i.dataUser.password]])]),(0,a._)("button",{disabled:d.isDisabled,onClick:t[2]||(t[2]=(...e)=>d.onLogin&&d.onLogin(...e))},"Login",8,n)])}s(560);var i=s(7139),d={name:"LoginPageView",data(){return{dataUser:{}}},computed:{isDisabled(){return!(this.dataUser.userName&&this.dataUser.password)}},methods:{...(0,i.nv)(["setDataUser"]),onLogin(){this.setDataUser(this.dataUser),this.$route.query.redirect?this.$router.push({path:this.$route.query.redirect}):this.$router.push({name:"home"})}}},o=s(89);const l=(0,o.Z)(d,[["render",u]]);var h=l}}]);
//# sourceMappingURL=355.fef8817d.js.map