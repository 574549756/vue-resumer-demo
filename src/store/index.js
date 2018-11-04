import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: {
      freeTryMode: false,
      currentUser: null,
      previewMode: false,
      signUpMode: false,
      signInMode: true
    },
    selected: "profile",
    currentTab: 0,
    resume: {
      profile: {
        name: "狮子变猿猴",
        city: "重庆",
        birth: "1994.2.25",
        wanted: "前端工程师",
        age: "24",
        gender: "男",
        degree: "本科",
        school: "少数民族聚居的学校",
        onlineResume: "http://www.baidu.com"
      },
      jobExperience: [
        {
          company: "画图的公司",
          content: "天天画图",
          duration: "2017.3~2017.7"
        }
      ],
      studyHistory: [
        {
          school: "少数民族聚居的大学",
          duration: "2012~2016",
          degree: "本科"
        }
      ],
      projects: [
        {
          name: "拿来做测试的键盘",
          content: "原生JS",
          projectPreview:
            "https://574549756.github.io/myBookmarks/nav-demo/index.html",
          projectCode: ""
        }
      ],
      awards: [{ time: "曾经", award: "没得过啥奖也得占个位置" }],
      contacts: [
        {
          qq: "一串数字",
          wechat: "一个字母加一串数字",
          phone: "还是一串数字",
          email: "巴拉巴拉巴拉@gmail.com",
          github: "https://github.com/巴拉巴拉巴拉"
        }
      ],
      skills: [
        {
          abilityName: "HTML",
          abilityProcess: 80,
          abilityDiscription:
            "熟练编写语义化 HTML 能使用 HTML5 CSS3 独立制作精美网页，掌握CSS3动画、过渡效果、响应式等常用技术"
        }
      ]
    }
  },
  mutations: {
    getUserData(state, payload) {
      state.resume = payload
    },
    initState(state, payload) {
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload
      localStorage.setItem("state", JSON.stringify(state))
    },
    updateResume(state, { path, value }) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem("state", JSON.stringify(state))
    }
  }
})
