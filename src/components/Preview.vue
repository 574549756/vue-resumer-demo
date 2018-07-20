<template>
    <div id="preview">
      <header class="header1"><h1>这里是头</h1></header>
        <main class="idDiscription"><h1>{{resume.profile.name || '请填写姓名'}}</h1>
        <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生日期'}}</p></main>
        <main class="resumeDiscription">
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
        </main>
        <section v-if="filter(resume.contacts).length > 0">
          <h2>联系方式</h2>
          <ul>
            <li v-for='contact in filter(resume.contacts)'>
              <p v-html="'QQ:'+contact.qq"></p>
              <p v-html="'微信:'+contact.wechat"></p>
              <p v-html="'手机号码:'+contact.phone"></p>
              <p v-html="'Email:'+contact.email"></p>
            </li>
          </ul>
        </section>
        <footer class="footer1"></footer>
    </div>
</template>


<style>
#preview {
  min-height: 100px;
  overflow: hidden;
}
</style>

<script>
let pageWidth = window.innerWidth
styleTag.innerHTML = 'html{font-size:' + pageWidth / 10 + 'px;}'
export default {
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
  }
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}
#preview {
  overflow: auto;
  .idDiscription {
    display: flex;
    height: px(672);
  }
  .header1 {
    height: px(80);
    background: #2a2b30;
    display: flex;
    padding: px(20) px(20);
    h1 {
      font-size: px(30);
      height: px(60);
      color: white;
    }
  }
  .resumeDiscription {
    display: flex;
    height: px(1088);
    background: white;
  }
  .footer1 {
    height: px(80);
    background: #f8f8f8;
    display: flex;
    padding: px(20) px(20);
  }
}
</style>
