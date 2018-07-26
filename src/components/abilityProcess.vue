<template>
  <section class="skills">
    <ul>
      <li>
        <div class="leftSideSkills">
          <span>HTML＆CSS3</span>
          <el-progress :percentage="resume.skills.HtmlCSS3" color="#f56c6ca4"></el-progress>
          <span>JavaScript</span>
          <el-progress :percentage="resume.skills.JavaScript" color="#f56c6ca4"></el-progress>
          <span>jQuery</span>
          <el-progress :percentage="resume.skills.jQuery" color="#f56c6ca4"></el-progress>
        </div>
        <div class="rightSideSkills">
          <span>Vue.JS</span>
          <el-progress :percentage="resume.skills.Vue" color="#f56c6ca4"></el-progress>
          <span>React.JS</span>
          <el-progress :percentage="resume.skills.React" color="#f56c6ca4"></el-progress>
          <span>Node.JS</span>
          <el-progress :percentage="resume.skills.NodeJs" color="#f56c6ca4" ></el-progress>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['resume']
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}

.skills {
  > ul {
    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: px(50);

      .leftSideSkills,
      .rightSideSkills {
        .el-progress.el-progress--line {
          .el-progress__text {
            display: none;
          }
          .el-progress-bar {
            .el-progress-bar__outer {
              margin: px(8) 0;
              width: px(250);
            }
          }
        }
      }
    }
  }
}
</style>
