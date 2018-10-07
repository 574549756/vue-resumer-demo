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
        <h3>HTTP</h3>        
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
  props: ['resume'],
  data() {
    return {}
  },
  computed: {
    selected: {
      set(value) {
        return this.$store.commit('switchTab', value)
      },
      get() {
        return this.$store.state.selected
      },
      resume() {
        return this.$store.state.resume
      }
    }
  }
}
</script>

<style lang="scss">
.el-slider__runway {
    .el-slider__bar {
        background: #f56c6ca4;
    }
    .el-slider__button.el-tooltip {
        border-color: #f05d5da4;
    }
}
</style>
