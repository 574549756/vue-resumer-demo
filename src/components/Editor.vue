<template>
	<div id="editor">
		<nav class="sideNav">
			<ol>
				<li
					v-for="i in [0,1,2,3,4,5]"
					v-bind:class="{active: currentTab === i}"
					v-on:click="currentTab = i"
				>
					<svg class="icon" aria-hidden="true">
						<use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="panes">
			<li v-bind:class="{active: currentTab === 0}">
				<profileEditor v-bind:profile="resume.profile"/>
			</li>
			<li v-bind:class="{active: currentTab === 1}">
				<ArrayEditor
					v-bind:items="resume.studyHistory"
					v-bind:labels="{school:'学校', duration: '时间', degree: '学位'}"
					title="学习经历"
				/>
			</li>
			<li v-bind:class="{active: currentTab === 2}">
				<ArrayEditor
					v-bind:items="resume.jobExperience"
					v-bind:labels="{company: '公司', content: '工作内容',duration: '时间'}"
					title="工作经历"
				/>
			</li>
			<li v-bind:class="{active: currentTab === 3}">
				<ArrayEditor
					v-bind:items="resume.projects"
					v-bind:labels="{name: '项目名称', content: '技术栈',projectPreview:'项目预览链接',projectCode:'代码链接'}"
					title="项目信息"
				/>
			</li>
			<li v-bind:class="{active: currentTab === 4}">
				<ArrayEditor
					v-bind:items="resume.contacts"
					v-bind:labels="{qq: 'QQ', wechat: '微信', phone:'手机', email: 'Email'}"
					title="联系方式"
				/>
			</li>
			<li v-bind:class="{active: currentTab === 5}">
				<AbilityArrayEditor v-bind:items="resume.skills" title="技能熟练度"/>
			</li>
		</ol>
	</div>
</template>

<script>
import profileEditor from "./profileEditor.vue"
import ArrayEditor from "./ArrayEditor.vue"
import AbilityArrayEditor from "./AbilityArrayEditor"

export default {
	data() {
		return {
			currentTab: 0,
			icons: [
				"credentials_icon",
				"graduate",
				"work0",
				"project",
				"phone",
				"rank"
			]
		}
	},
	components: {
		profileEditor,
		ArrayEditor,
		AbilityArrayEditor
	},
	computed: {
		set(value) {
			return this.$store.commit("switchTab", value)
		},
		get() {
			return this.$store.state.selected
		},
		resume() {
			return this.$store.state.resume
		}
	}
}
</script>


<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}

#editor {
	min-height: px(100);
	display: flex;
	overflow: hidden;
	width: px(490);
	.sideNav {
		background: #2a2b30;
		width: px(80);
		padding-top: px(32);
		> ol {
			.icon {
				width: px(30);
				height: px(30);
				vertical-align: -0.15em;
				overflow: hidden;
				margin: px(25) px(10);
			}
			:nth-child(1) {
				.icon {
					width: px(35);
					height: px(35);
					margin: px(25) px(8) px(20) px(8);
				}
			}
			li {
				text-align: center;
				&.active {
					position: relative;
					box-shadow: -40px 0px 30px 5px
						rgba(rgb(0, 0, 0), 0.6);
					z-index: 30;
					background: #f8f8f8;
					transition: all 0.5s;
					> .icon {
						fill: black;
						transition: all 0.5s;
					}
				}
			}
		}
	}
	> .panes {
		width: px(330);
		flex: 1;
		.active {
			flex: 1;
			background: #f8f8f8;
			box-shadow: 0px 0px 20px 10px rgba(rgb(0, 0, 0), 0.5);
			h2 {
				margin: px(30) px(0) px(50) px(0);
			}
			.el-form {
				width: px(330);
				transition: all 0.5s;
				position: relative;
				> .start {
					margin: px(20) px(0) px(40) px(0);
				}
				> .end {
					margin: px(50) px(0) px(20) px(0);
				}
				.el-icon-circle-plus {
					transform: scale(1.2);
					cursor: pointer;
					position: absolute;
					right: px(0);
					bottom: px(-26);
				}
			}
		}
		.container {
			position: relative;
			border-radius: 0;
			> .start {
				margin: px(20) px(0) px(20) px(0);
			}
			> .end {
				margin: px(50) px(0) px(40) px(0);
			}
			.el-icon-remove {
				transform: scale(1.2);
				position: absolute;
				right: px(0);
				top: px(-28);
				cursor: pointer;
			}
		}
		.el-form-item {
			position: relative;

			.el-form-item__content {
				height: px(40);

				.el-input {
					height: px(63);
					.el-input__inner {
						padding: px(25) px(10) px(0) px(10);
						font-size: px(15);
						height: px(63);
						border-radius: 0;
						transition: all 0.4s;
					}
					.el-input__inner:focus {
						border-color: #dcdfe6;
						border-left-color: #f56c6ca4;
						border-left-width: px(3);
					}
				}
			}
			.el-form-item__label {
				position: absolute;
				font-size: px(12);
				color: #c6c6c6;
				top: px(-2);
				left: px(10);
				z-index: 20;
			}
		}
		> li {
			display: none;
			padding: px(32);
			height: 100%;
			overflow: auto;
			&.active {
				display: block;
			}
		}
	}
}
</style>
