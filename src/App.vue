<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
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
  fill: white;
  flex-direction: column;
}
.topbar {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
}
.icon {
  width: 2.4em;
  height: 2.4em;
  vertical-align: -0.15em;
  overflow: hidden;
  margin: 16px 10px;
}
main {
  display: flex;
  flex: 1;
  background: #ddd;
  > .editor {
    background: white;
    width: 40em;
    margin: 16px 8px 16px 16px;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
  }
  > .preview {
    background: white;
    flex: 1;
    margin: 16px 16px 16px 8px;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 4px;
  }
}
</style>
