<template>
  <div>
    <h2>技能熟练度</h2>
    <div class="block">
      <h3>HTML&CSS3</h3>
          <el-slider v-model="resume.skills.HtmlCSS3" :step="5">
          </el-slider>
        </div>
        <h3>JavaScript</h3>
        <div class="block">
          <el-slider v-model="resume.skills.JavaScript" :step="5">
          </el-slider>
        </div>
        <h3>jQuery</h3>        
        <div class="block">
          <el-slider v-model="resume.skills.jQuery" :step="5">
          </el-slider>
          
          </div>      
          <h3>Vue.js</h3>  
        <div class="block">
          <el-slider v-model="resume.skills.Vue" :step="5">
          </el-slider>
        </div>
        <h3>React.js</h3>  
        <div class="block">
          <el-slider v-model="resume.skills.React" :step="5">
          </el-slider>
        </div>
        <h3>Node.js</h3>  
        <div class="block">
          <el-slider v-model="resume.skills.NodeJs" :step="5">
          </el-slider>
        </div>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  props: ['resume'],
  
}
</script>
