<template>
	<div id="app" v-bind:class="{previewMode:mode.previewMode}">
		<transition name="fade">
			<signInAndSignUp v-if="!mode.currentUser && !mode.freeTryMode"/>
		</transition>
		<Topbar
			class="topbar"
			v-on:preview="preview"
			:currentUser="mode.currentUser"
			:mode="mode"
			v-if="mode.currentUser || mode.freeTryMode"
		/>
		<main v-if="mode.currentUser || mode.freeTryMode">
			<Editor class="editor" v-on:save="save"/>
			<Preview v-bind:resume="resume" class="preview"/>
		</main>
		<el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
		<transition name="fade">
			<toast :toastData="toastData" v-if="toastData.toastState"/>
		</transition>
	</div>
</template>

<script>
import Topbar from "./components/Topbar"
import Preview from "./components/Preview"
import Editor from "./components/Editor"
import store from "./store/index"
import signInAndSignUp from "./signInAndSignUp"
import toast from "./components/toast"

// 自适应
let pageWidth = window.innerWidth
styleTag.innerHTML = "html{font-size:" + pageWidth / 10 + "px;}"

export default {
	data() {
		return {}
	},
	created: function() {
		this.mode.currentUser = this.getCurrentUser()
		if (this.mode.currentUser) {
			let value = AV.User.current().get("userData")
			return this.$store.commit("getUserData", value)
		}
	},
	methods: {
		preview() {
			this.mode.previewMode = true
		},
		exitPreview() {
			this.mode.previewMode = false
		},
		getCurrentUser: function() {
			let current = AV.User.current()
			if (current) {
				let {
					id,
					createdAt,
					attributes: { username }
				} = current
				return { id, username, createdAt }
			} else {
				return null
			}
		},
		displayToast: function() {
			this.toastData.toastState = true
			setTimeout(() => {
				this.toastData.toastState = false
			}, 3000)
		},
		save: function() {
			if (this.mode.currentUser) {
				let current = AV.User.current()
				current.set("userData", this.resume)
				current.save()
				this.toastData.toastMsg = "保存成功"
				this.displayToast()
			} else {
				this.toastData.toastMsg = "保存失败，请先登录。"
				this.displayToast()
			}
		}
	},
	store,
	computed: {
		toastData() {
			return this.$store.state.toast
		},
		set() {},
		resume() {
			return this.$store.state.resume
		},
		mode() {
			return this.$store.state.mode
		}
	},
	components: {
		Topbar,
		Preview,
		Editor,
		signInAndSignUp,
		toast
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
	overflow: hidden;
	position: relative;
	.toast {
		transition: all 0.3s linear;
	}
}

#exitPreview {
	display: none;
}

.topbar {
	position: relative;
	z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
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

#app.previewMode {
	overflow: auto;
	> #topbar {
		display: none;
	}
	#editor {
		display: none;
	}
	#preview {
		overflow: auto;
		max-width: px(1500);
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
