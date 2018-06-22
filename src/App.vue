<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Preview class="editor"/>
      <Editor class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Preview from "./components/Preview";
import Editor from "./components/Editor";

export default {
  components: {
    Topbar,
    Preview,
    Editor
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
.topbar {
}
main {
  display: flex;
  flex: 1;
  > .editor {
    width: 30em;
  }
  > .preview {
    flex: 1;
  }
}
</style>
