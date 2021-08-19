import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state就是共享的数据
  state: {
    user: {
      username: "",
      password: "",
      realName: "",
      id: "",
      access_token: "",
      refresh_token: ""
    }
  },
  //当我们直接调用store.state中的数据时, 会不可避免的产生数据安全的问题, 有时候出了错,我们根本不知道是谁修改了这个数据
  //所以, 我们应该使用get和set, 也就是getters和mutations+actions
  //state中的每一个对象都应该有对应的getter
  getters: {
    user: state => {
      return state.user
    },
    username: state => {
      return state.user.username
    },
    password: state => {
      return state.user.password
    },
    realName: state => {
      return state.user.realName
    },
    id: state => {
      return state.user.id
    },
    access_token: state => {
      return state.user.access_token
    },
    refresh_token: state => {
      return state.user.refresh_token
    },
  },
  //更改store中的数据唯一的方式就是 提交 mutation
  //mutations里面写的是一个个修改数据的方法
  mutations: {
    //每个mutation中的第一参数都应该是state
    setUser(state,user) {
      state.user = user
    },
    setUsername(state,username) {
      state.user.username = username
    },
    setPassword(state,password) {
      state.user.password = password
    },
    setRealName(state,realName) {
      state.user.realName = realName
    },
    setId(state,id) {
      state.user.id = id
    },
    setAccessToken(state,access_token) {
      state.user.access_token = access_token
    },
    setRefreshToken(state,refresh_token) {
      state.user.refresh_token = refresh_token
    }
  },
  //action里面写的是很多mutations的集合
  //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
  //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
  actions: {
    login({ commit }) {
      let userInfo = {
        username : "Cara",
        password : "jiazhihan",
        realName : "贾智涵",
        id: "1147824",
        access_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal",
        refresh_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal"
      }
      commit('setUsername', userInfo.username)
      commit('setPassword', userInfo.password)
      commit('setRealName', userInfo.realName)
      commit('setId', userInfo.id)
      commit('setAccessToken', userInfo.access_token)
      commit('setRefreshToken', userInfo.refresh_token)
    },
    logout({ commit }) {
      commit('setUsername', '')
      commit('setPassword', '')
      commit('setRealName', '')
      commit('setId', '')
      commit('setAccessToken', '')
      commit('setRefreshToken', '')
    }
  },
  modules: {
  }
})
