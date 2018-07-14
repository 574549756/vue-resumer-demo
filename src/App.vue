<template>
  <div id="app"
       v-bind:class="{previewMode:previewMode}">
       <SignUp class="signInAndSignUp"/>
    <Topbar class="topbar"
            v-on:preview="preview" />
    <main>
      <Editor v-bind:resume='resume'
              class="editor" />
      <Preview v-bind:resume='resume'
               class="preview" />
    </main>
    <el-button id="exitPreview"
               v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import SignUp from './components/SignUp'
import Topbar from './components/Topbar'
import Preview from './components/Preview'
import Editor from './components/Editor'

// 自适应
let pageWidth = window.innerWidth
styleTag.innerHTML = 'html{font-size:' + pageWidth / 10 + 'px;}'

export default {
  data() {
    return {
      previewMode: false,
      resume: {
        profile: { name: '', city: '', birth: '' },
        jobExperience: [{ company: '', content: '', duration: '' }],
        studyHistory: [{ school: '', duration: '', degree: '' }],
        projects: [{ name: '', content: '' }],
        awards: [{ time: '', award: '' }],
        contacts: [{ qq: '', wechat: '', phone: '', email: '' }]
      }
    }
  },
  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview() {
      this.previewMode = false
    }
  },
  components: {
    Topbar,
    Preview,
    Editor,
    SignUp
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
  box-shadow: 0 0 px(3) hsla(0, 0, 0, 0.5);
}
main {
  display: flex;
  flex: 1;
  background: #ddd;
  > .editor {
    background: white;
    width: px(640);
    margin: px(16) px(8) px(16) px(16);
    box-shadow: 0 0 px(3) hsla(0, 0, 0, 0.5);
    border-radius: px(4);
  }
  > .preview {
    background: white;
    flex: 1;
    margin: px(16) px(16) px(16) px(8);
    box-shadow: 0 0 px(3) hsla(0, 0, 0, 0.5);
    border-radius: px(4);
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
    max-width: px(800);
    margin: 0 auto;
    margin: px(32) auto;
  }
  #exitPreview {
    display: inline-block;
    position: fixed;
    right: px(16);
    bottom: px(16);
  }
}
</style>
