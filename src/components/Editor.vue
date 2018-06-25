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
				<profileEditor v-bind:profile="profile"/>
			</li>
			<li v-bind:class="{active: currentTab === 1}">
				<h2>学习经历</h2>
			</li>
			<li v-bind:class="{active: currentTab === 2}">
				<h2>工作经历</h2>
				<hr class="start">
				<el-form>
					<div class="container" v-for="(work, index) in jobExperience">
						<el-form-item label="公司">
							<el-input v-model="work.company"></el-input>
						</el-form-item>
						<el-form-item label="工作内容"></el-form-item>
						<el-input v-model="work.content"></el-input>
						</el-form-item>
						<i class="el-icon-remove" v-on:click="removeJobExperience(index)"></i>
						<hr class="end">
					</div>
						<i class="el-icon-circle-plus" v-on:click="addJobExperience"></i>					
				</el-form>
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
import profileEditor from './profileEditor.vue'
export default {
  components: { profileEditor },
  data() {
    return {
      currentTab: 0,
      icons: [
        'credentials_icon',
        'graduate',
        'work0',
        'project',
        'achievementregular',
        'phone'
      ],
      profile: {
        name: '',
        city: '',
        birth: ''
      },
      jobExperience: [
        {
          company: '',
          content: ''
        }
      ]
    }
  },
  methods: {
    addJobExperience() {
      this.jobExperience.push({
        company: '',
        content: ''
      })
    },
    removeJobExperience(index) {
      this.jobExperience.splice(index, 1)
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
    flex: 1;
    .active {
      h2 {
        margin: px(20) px(0);
      }
      .el-form {
        position: relative;
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
      > .start {
        margin: px(30) px(0);
      }
      > .end {
        margin: px(40) px(0) px(5) px(0);
      }
      .el-icon-remove {
        transform: scale(1.2);
        position: absolute;
        right: px(0);
        top: px(10);
        cursor: pointer;
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
