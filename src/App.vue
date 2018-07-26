<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <signInAndSignUp class="signInAndSignUp" v-if="currentUser===null" v-on:click="changeCurrent" @switchCurrent="changeCurrent"/>
    <Topbar class="topbar" v-on:preview="preview" />
    <main>
      <Editor v-bind:resume='resume' class="editor" />
      <Preview v-bind:resume='resume' class="preview" />
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import signInAndSignUp from './components/signInAndSignUp'
import Topbar from './components/Topbar'
import Preview from './components/Preview'
import Editor from './components/Editor'

// 自适应
let pageWidth = window.innerWidth
styleTag.innerHTML = 'html{font-size:' + pageWidth / 10 + 'px;}'

export default {
  data() {
    return {
      currentUser: null,
      previewMode: false,
      resume: {
        profile: { name: '', city: '', birth: '' },
        jobExperience: [{ company: '', content: '', duration: '' }],
        studyHistory: [{ school: '', duration: '', degree: '' }],
        projects: [{ name: '', content: '', projectPreview: '' }],
        awards: [{ time: '', award: '' }],
        contacts: [{ qq: '', wechat: '', phone: '', email: '', github: '' }],
        skills: {
          HtmlCSS3: 0,
          JavaScript: 0,
          jQuery: 0,
          Vue: 0,
          React: 0,
          NodeJs: 0
        }
      }
    }
  },
  created: function() {
    console.log('最开始执行了')
    this.currentUser = this.getCurrentUser()
  },
  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview() {
      this.previewMode = false
    },
    getCurrentUser: function() {
      console.log('调用获取用户函数')
      let current = AV.User.current()
      console.log('赋值')
      if (current) {
        let {
          id,
          createdAt,
          attributes: { username }
        } = current
        console.log(current)
        console.log('结束')
        return { id, username, createdAt }
      } else {
        console.log(current)
        return null
      }
    },
    changeCurrent: function() {
      this.currentUser = this.getCurrentUser()
    }
  },
  components: {
    Topbar,
    Preview,
    Editor,
    signInAndSignUp
  }
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

body {
  font-size: px(16);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  fill: white;
  flex-direction: column;
}

#exitPreview {
  display: none;
}

.topbar {
  position: relative;
  z-index: 1;
}

main {
  display: flex;
  flex: 1;
  background: #f1f1f1;
  > .editor {
    background: white;
    width: px(640);
  }
  > .preview {
    margin: px(40) px(40) px(0) px(40);
    background: white;
    flex: 1;
    box-shadow: 0px 0px 20px 0px rgba(rgb(0, 0, 0), 0.3);
  }
}

.previewMode {
  > #topbar {
    display: none;
  }
  #editor {
    display: none;
  }
  #preview {
    max-width: px(1350);
    max-height: px(856);
    height: 100%;
    margin: px(32) auto;
    position: relative;
  }
  #exitPreview {
    display: inline-block;
    position: fixed;
    right: px(16);
    bottom: px(16);
  }
}
</style>
