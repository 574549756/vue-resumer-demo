<template>
	<div>
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
	</div>
</template>

<script>
export default {
  props: ['jobExperience'],
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
