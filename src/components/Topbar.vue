<template>
  <div id="topbar">
    <div class="logo">
      <div class="hideSideBar">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gerenlogoBold"></use>
        </svg>
      </div>
      <section class="mainHead">
        <h1>Vue</h1>
        <h2>Resumer</h2>
      </section>
    </div>
    <div class="actions">
      <el-row>
        <el-button v-if="currentUser&&freeTryMode===true">注册</el-button>
        <el-button v-if="currentUser&&freeTryMode===true">登录</el-button>
        <el-button v-on:click="logout" v-if="!currentUser&&freeTryMode===false">登出</el-button>
        <el-button v-on:click="preview" type="primary">预览</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			freeTryMode: false,
			currentUser: null
		};
	},
	methods: {
		preview() {
			this.$emit("preview");
		},
		logout: function() {
			AV.User.logOut();
			this.freeTryMode = false;
			this.currentUser = null;
			window.location.reload();
		}
	}
};
</script>


<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}

#topbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: px(55);
	font-size: px(20);
	background: #f8f8f8;
	border-bottom: 1px solid #c7c7c7;
	.actions {
		display: flex;
		align-items: center;
		justify-content: center;
		height: px(80);
		.el-row {
			margin-right: px(40);
			.el-button--primary {
				width: px(120);
				height: px(40);
				font-size: px(16);
				font-weight: bolder;
				background: #2a2b30;
				border-color: #ececec;
				color: #c6c6c6;
			}
			.el-button--default {
				width: px(120);
				height: px(40);
				font-size: px(16);
				background: #ffffff;
				color: #787878;
				border-color: #ececec;
			}
		}
	}
	.logo {
		padding-right: px(216);
		display: flex;
		justify-content: center;
		align-items: center;
		.hideSideBar {
			display: flex;
			justify-content: center;
			align-items: center;
			width: px(80);
			height: px(55);
			background: #2a2b30;
			box-shadow: -10px 0px 10px 0px rgba(rgb(0, 0, 0), 0.5) inset;
			> svg {
				width: px(38);
				height: px(38);
			}
		}
		> .mainHead {
			display: flex;
			align-items: center;
			flex-direction: row;
			margin-left: px(32);
			> h1 {
				color: black;
				font-size: px(25);
			}
			> h2 {
				color: #b3b3b3;
				margin-left: px(10);
				font-size: px(25);
			}
		}
	}
}
</style>