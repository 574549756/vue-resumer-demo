<template>
  <div id="preview">
    <main class="idDiscription">
      <div class="cover">
        <header>
          <h1>ex.arc.zhang@gmail.com</h1>
        </header>
        <h1>{{resume.profile.name || '请填写姓名'}}</h1>
        <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生日期'}}</p>
        <div class="buildDate">
          <p>创建时间</p>
          <p>{{buildDate}}</p>
        </div>
        <div class="footer">
          <abilityProcess v-bind:resume="resume" />
        </div>
      </div>
    </main>
    <main class="resumeDiscription">
      <header class="header1">
        <h1>这里是头</h1>
      </header>
      <section v-if="filter(resume.contacts).length > 0">
        
        <ul class="contactArea">
        
          <div id="contactMenu">
            <ol>
              <li v-for="i in [0,1,2,3]">
                <svg class="icon" aria-hidden="true">
                  <use v-bind:xlink:href="`#icon-${contactIcon[i]}`"></use>
                </svg>
              </li>
            </ol>
          </div>
          <li v-for='contact in filter(resume.contacts)'>
            <p v-html="contact.qq"></p>
            <p v-html="contact.wechat"></p>
            <p v-html="contact.phone"></p>
            <p v-html="contact.email"></p>
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.studyHistory).length > 0">
        <h2>学习经历</h2>
        <ul>
          <li v-for='study in filter(resume.studyHistory)'>
            {{study.duration}} | {{study.school}} | {{study.degree}}
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.projects).length > 0">
        <h2>项目</h2>
        <ul>
          <li v-for='project in filter(resume.projects)'>
            {{project.name}} | {{project.content}}
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.jobExperience).length > 0">
        <h2>工作经历</h2>
        <ul>
          <li v-for='job in filter(resume.jobExperience)'>
            {{job.duration}} | {{job.company}} | {{job.content}}
          </li>
        </ul>
      </section>
      <section v-if="filter(resume.awards).length > 0">
        <h2>获奖信息</h2>
        <ul>
          <li v-for='award in filter(resume.awards)'>
            {{award.time}} | {{award.award}}
          </li>
        </ul>
      </section>
      <footer class="footerEnd"></footer>
    </main>
  </div>
</template>


<style>
#preview {
  min-height: 100px;
  overflow: hidden;
}
</style>

<script>
import abilityProcess from './abilityProcess.vue'
import coverImg5 from '../assets/img/coverImg5.jpg'

let pageWidth = window.innerWidth
styleTag.innerHTML = 'html{font-size:' + pageWidth / 10 + 'px;}'
export default {
  data() {
    return {
      contactIcon: ['qq', 'wechat', 'phone1', 'email'],
      buildDate: ''
    }
  },
  created: function() {
    var date = new Date()
    this.buildDate = date.toLocaleDateString()
  },
  props: ['resume'],
  methods: {
    filter(array) {
      // 找出非空对象
      return array.filter(item => !this.isEmpty(item))
    },
    isEmpty(object) {
      // 只要有一个 value 不是 falsy ，就返回 false
      let empty = true
      for (let key in object) {
        if (object[key]) {
          empty = false
          break
        }
      }
      return empty
    }
  },
  components: {
    abilityProcess
  }
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}

#preview {
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  .idDiscription {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #f8f8f8;
    position: relative;
    .cover {
      background-image: url(../assets/img/coverImg5.jpg);
      height: 73%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-position: center center;
      background-size: cover;
      > .buildDate {
        margin: px(100) px(80) px(0) px(80);
        p {
          color: #bebebe;
          font-size: px(14);
          margin: px(5) 0px;
        }
      }
      .footer {
        margin: px(120) p(0) px(40) px(50);
        h2 {
          color: #d3d3d3;
          font-size: px(20);
          margin: px(420) px(0) px(5) px(50);
        }
      }
      > header {
        h1 {
          font-size: px(12);
          margin: px(80) px(80) 0px px(450);
          color: #d3d3d3;
        }
      }
      h1 {
        color: #f8f8f8;
        margin: px(200) px(0) px(0) px(80);
        font-size: px(64);
        font-weight: 300;
      }
      p {
        font-size: px(20);
        color: #f8f8f8;
        margin: px(20) px(15) px(30) px(80);
      }
    }
  }
  .resumeDiscription {
    display: flex;
    background: white;
    flex-direction: column;
    position: relative;
    .contactArea {
      padding: px(20);
      width: px(200);
      height: px(180);
      display: flex;
      flex-direction: row;
      text-align: flex-start;
      margin: px(80) px(80) px(80) px(380);
      justify-content: flex-start;
      background: #2d3a43;
      p {
        color: #b1b1b1;
        margin: px(13) px(0) px(0) px(20);
        font-size: px(12);
      }
      #contactMenu {
        > ol {
          li {
            margin: px(8);
            .icon {
              width: 15px;
              height: 15px;
              fill: #b1b1b1;
            }
          }
        }
      }
    }
    .header1 {
      height: px(50);
      background: #2d3a43;
      display: flex;
      padding: px(20) px(20);
      h1 {
        font-size: px(0);
        font-weight: 300;
        height: px(60);
        color: white;
      }
    }
    .footerEnd {
      position: absolute;
      bottom: 0;
      height: px(50);
      width: 100%;
      background: #f4f4f4;
    }
  }
}
</style>
