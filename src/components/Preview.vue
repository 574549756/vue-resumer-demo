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
      </div>
      <footer class="footer">
        <abilityProcess v-bind:resume="resume" />
      </footer>
    </main>
    <main class="resumeDiscription">
      <header class="header1">
        <h1>这里是头</h1>
      </header>
      <div class="main1">
        <h1 class="headerR">前端工程师</h1>
        <section v-if="filter(resume.contacts).length > 0">
          <main class="mainContact">
            <h2>联系方式</h2>
            <ul class="contactArea">
              <div id="contactMenu">
                <ol>
                  <li v-for="i in [0,1,2,3,4]">
                    <svg class="icon" aria-hidden="true">
                      <use v-bind:xlink:href="`#icon-${contactIcon[i]}`"></use>
                    </svg>
                  </li>
                </ol>
              </div>
              <li v-for='contact in filter(resume.contacts)'>
                <p v-html="contact.qq || '请填写QQ'"></p>
                <p v-html="contact.wechat || '请填写微信'"></p>
                <p v-html="contact.phone || '请填写手机号'"></p>
                <p v-html="contact.email || '请填写邮箱'"></p>
                <p v-html="contact.github || '请填写GitHub地址'"></p>
              </li>
            </ul>
          </main>
        </section>
        <section class="studyHistory" v-if="filter(resume.studyHistory).length > 0">
          <ul>
            <li v-for='study in filter(resume.studyHistory)'>
              <h2>{{study.duration}}</h2>
              <p> {{study.school}} {{study.degree}}</p>
            </li>
          </ul>
        </section>
        <section class="jobExperience" v-if="filter(resume.jobExperience).length > 0">
          <ul>
            <li v-for='job in filter(resume.jobExperience)'>
              <h2>{{job.duration}}</h2>
              <p> {{job.company}} {{job.content}}</p>
            </li>
          </ul>
        </section>
      </div>
      <main class="main2">
        <section class="awardDiscription" v-if="filter(resume.awards).length > 0">
        <h2>获奖信息</h2>
        <ul>
          <li v-for='award in filter(resume.awards)' class="awardContent">
            <h3>{{award.time}}</h3><p>{{award.award}}</p>
          </li>
        </ul>
      </section>
      <section class="projectDiscription" v-if="filter(resume.projects).length > 0">
        <h2>项目信息</h2>
        <ul>
          <li v-for='project in filter(resume.projects)' class="projectContent">
            <h3>{{project.name}}</h3><p>{{project.content}} <a href="project.projectPreview">ViewDemo</a></p>
          </li>
        </ul>
      </section>
      </main>
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
      contactIcon: ['qq', 'wechat', 'phone1', 'email', 'github'],
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
      background-position: center center;
      background-size: cover;
      > .buildDate {
        margin: px(150) px(50) px(0) px(50);
        p {
          color: #bebebe;
          font-size: px(14);
          margin: px(5) 0px;
        }
      }

      > header {
        h1 {
          font-size: px(12);
          margin: px(50) px(50) 0px px(450);
          color: #d3d3d3;
        }
      }
      h1 {
        color: #f8f8f8;
        margin: px(200) px(0) px(0) px(50);
        font-size: px(64);
        font-weight: 300;
      }
      p {
        font-size: px(20);
        color: #f8f8f8;
        margin: px(20) px(15) px(30) px(50);
      }
    }
    .footer {
      margin: auto px(0);
    }
  }
  .resumeDiscription {
    display: flex;
    background: white;
    flex-direction: column;
    position: relative;
    .main1 {
      position: relative;
      width: 100%;
      height: px(380);
      background: #f4f4f4;
      .rectango {
        width: px(40);
        height: px(40);
        background: #000;
      }
      .jobExperience,
      .studyHistory {
        color: #747474;
        margin: px(30) px(0) px(0) px(50);

        h2 {
          font-size: px(20);
          margin: px(10) px(0) px(5) px(0);
        }
      }
      .headerR {
        font-weight: 300;
        margin: px(50) px(0) px(0) px(50);
        font-size: px(36);
      }
    }
    .mainContact {
      display: flex;
      position: absolute;
      right: px(50);
      bottom: px(-20);
      padding: px(20);
      height: px(235);
      background: #2d3a43;
      flex-direction: column;
      h2 {
        color: #b1b1b1;
        font-size: px(18);
        margin-bottom: px(25);
      }

      .contactArea {
        display: flex;
        flex-direction: row;
        text-align: flex-start;
        justify-content: flex-start;
        p {
          color: #b1b1b1;
          margin: px(13) px(0) px(0) px(20);
          font-size: px(12);
        }
        #contactMenu {
          > ol {
            li {
              margin: px(8);
              margin-right: 0;
              .icon {
                width: 15px;
                height: 15px;
                fill: #b1b1b1;
              }
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
  .main2 {
    display: flex;
    flex-direction: row;
    background: rgb(249, 248, 250);
    padding: px(40) px(30) px(0) px(30);
    .projectDiscription,
    .awardDiscription {
      width: 100%;
      padding: 0 px(20);
      > h2 {
        font-size: px(30);
        font-weight: 300;
        margin-bottom: px(20);
      }
      .projectContent,
      .awardContent {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        p,
        a,
        h3 {
          color: #747474;
          font-size: px(15);
        }
        a {
          color: rgba(245, 108, 108, 0.643);
        }
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h3 {
          margin: px(8) 0;
          font-weight: 500;
          color: #414141;
        }
      }
    }
  }
}
</style>
