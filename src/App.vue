<template>
	<div id="app" v-bind:class="{previewMode:previewMode}">
		<signInAndSignUp
			class="signInAndSignUp"
			v-if="currentUser===null||freeTryMode===true"
			@switchCurrent="changeCurrent"
			@freeTry="freeTry"
		/>
		<Topbar class="topbar" v-on:preview="preview" v-bind:freeTryMode="freeTryMode"/>
		<main>
			<Editor class="editor"/>
			<Preview v-bind:resume="resume" class="preview"/>
		</main>
		<el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
	</div>
</template>

<script>
import signInAndSignUp from "./components/signInAndSignUp";
import Topbar from "./components/Topbar";
import Preview from "./components/Preview";
import Editor from "./components/Editor";
import store from "./store/index";

// 自适应
let pageWidth = window.innerWidth;
styleTag.innerHTML = "html{font-size:" + pageWidth / 10 + "px;}";

export default {
	data() {
		return {
			currentUser: null,
			freeTryMode: false,
			previewMode: false
		};
	},
	created: function() {
		console.log("最开始执行了");
		this.currentUser = this.getCurrentUser();
	},
	methods: {
		freeTry() {
			this.freeTryMode = true;
		},
		preview() {
			this.previewMode = true;
		},
		exitPreview() {
			this.previewMode = false;
		},
		getCurrentUser: function() {
			let current = AV.User.current();
			if (current) {
				let {
					id,
					createdAt,
					attributes: { username }
				} = current;
				return { id, username, createdAt };
			} else {
				return null;
			}
		},
		changeCurrent: function() {
			this.currentUser = this.getCurrentUser();
		}
	},
	store,
	computed: {
		resume() {
			return this.$store.state.resume;
		}
	},
	components: {
		Topbar,
		Preview,
		Editor,
		signInAndSignUp
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
	font-size: px(16);
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
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
		max-width: px(1650);
		max-height: px(1200);
		height: 100%;
		margin: auto auto;
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
