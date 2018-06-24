<template>
	<div id="editor">
		<nav class="sideNav">
			<ol>
				<li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
					<svg class="icon" aria-hidden="true">
						<use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="panes">
			<li v-bind:class="{active: currentTab === 0}">
				<h2>个人信息</h2>
				<el-form>
					<el-form-item label="姓名">
						<el-input v-model="profile.name"></el-input>
					</el-form-item>
					<el-form-item label="城市">
						<el-input v-model="profile.city"></el-input>
					</el-form-item>
					<el-form-item label="出生年月">
						<el-input v-model="profile.birth"></el-input>
					</el-form-item>
				</el-form>
			</li>
			<li v-bind:class="{active: currentTab === 1}">
				<h2>学习经历</h2>
			</li>
			<li v-bind:class="{active: currentTab === 2}">
				<h2>工作经历</h2>
			</li>
			<li v-bind:class="{active: currentTab === 3}">
				<h2>项目作品</h2>
			</li>
			<li v-bind:class="{active: currentTab === 4}">
				<h2>获奖情况</h2>
			</li>
			<li v-bind:class="{active: currentTab === 5}">
				<h2>联系方式</h2>
			</li>
		</ol>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentTab: 0,
			icons: [
				"credentials_icon",
				"graduate",
				"work0",
				"project",
				"achievementregular",
				"phone"
			],
			profile: {
				name: '',
				city: '',
				birth: '',
			}
		};
	},
};
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
    .sideNav {
        background: #000;
        width: px(100);
        > ol {
            .icon {
                width: px(36);
                height: px(36);
                vertical-align: -0.15em;
                overflow: hidden;
                margin: px(16) px(10);
            }
            :nth-child(1) {
                .icon {
                    width: px(40);
                    height: px(40);
                    margin: px(12) px(8) px(10) px(8);
                }
            }
            li {
                text-align: center;
                &.active {
                    background: white;
                    > .icon {
                        fill: black;
                    }
                }
            }
        }
    }
    > .panes {
        > li {
            display: none;
			padding: px(32);
            &.active {
                display: block;
            }
        }
    }
}
</style>
