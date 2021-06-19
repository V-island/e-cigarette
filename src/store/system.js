const state = () => ({
  initMenu: [
    { title: "首页", url: "/home", active: false},
    { title: "产品", url: "/product", active: false},
    { title: "资讯", url: '/news', active: false},
    { title: "招商", url: "/merchants", active: false},
    { title: "关于", url: "/about", active: false},
    { title: "联系", url: "/contact", active: false}
  ]
})

// getters
const getters = {
  siderMenu: state => {
    return state.initMenu
  },
}

// actions
const actions = {
  activeMenuPage({ commit }, path) {
    commit('setMenuPath', path)
  },
}

// mutations
const mutations = {
  setMenuPath (state, path) {
    if(path == '/' || !path) path = '/home'

    let menuMap = [...state.initMenu]

    state.initMenu = menuMap.map(item => {
      if(path.indexOf(item.url) == 0)
        item.active = true
      else
        item.active = false

      return item
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}