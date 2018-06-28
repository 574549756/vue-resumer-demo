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
        <profileEditor v-bind:profile="resume.profile" />
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校', duration: '时间', degree: '学位'}" title="学习经历" />
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <ArrayEditor v-bind:items="resume.jobExperience" v-bind:labels="{company: '公司', content: '工作内容',duration: '时间'}" title="工作经历" />
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name: '项目名称', content: '工作内容'}" title="项目信息" />
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{time: '时间', award: '奖励详情'}" title="获奖信息" />
      </li>

      <li v-bind:class="{active: currentTab === 5}">
        <h2>联系方式</h2>
        <el-form>
          <el-form-item label="QQ">
            <el-input v-model="resume.contacts.qq"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="resume.contacts.wechat"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="resume.contacts.email"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="resume.contacts.phone"></el-input>
          </el-form-item>
        </el-form>
      </li>
    </ol>
  </div>
</template>

<script>
import profileEditor from './profileEditor.vue'
import ArrayEditor from './ArrayEditor.vue'

export default {
  components: { profileEditor, ArrayEditor },
  props: ['resume'],
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
          content: '',
          xxx: ''
        }
      ],
      studyHistory: [{ school: '', duration: '', degree: '' }],
      projects: [
        {
          name: '',
          content: ''
        }
      ],
      awards: [{ time: '', award: '' }],
      contacts: {
        qq: '',
        wechat: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {}
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
  width: px(700);
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
