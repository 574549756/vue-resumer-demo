<template>
	<div id="app">
		<Topbar class="topbar" />
		<main>
			<Editor class="editor" />
			<Preview class="preview" />
		</main>
	</div>
</template>

<script>
import Topbar from "./components/Topbar";
import Preview from "./components/Preview";
import Editor from "./components/Editor";

// 自适应
let pageWidth = window.innerWidth;
styleTag.innerHTML = "html{font-size:" + pageWidth / 10 + "px;}";

export default {
	components: {
		Topbar,
		Preview,
		Editor
	}
};
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
    font-size: 16px;
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
</style>
