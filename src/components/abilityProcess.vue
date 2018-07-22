<template>
    <section>
        <ul>
              <li>
                <el-progress :percentage="resume.skills.HtmlCSS3"></el-progress>
                <el-progress :percentage="resume.skills.JavaScript"></el-progress>
                <el-progress :percentage="resume.skills.jQuery"></el-progress>
                <el-progress :percentage="resume.skills.Vue"></el-progress>
                <el-progress :percentage="resume.skills.React"></el-progress>
                <el-progress :percentage="resume.skills.NodeJs"></el-progress>
              </li>
            </ul>
    </section>
</template>

<script>
export default {
  props: ['resume'],
}
</script>
