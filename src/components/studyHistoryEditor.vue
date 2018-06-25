<template>
	<div>
		<h2>学习经历</h2>
		<hr class="start">
		<el-form>
			<div class="container" v-for="(item, index) in Items">
				<el-form-item label="学校">
					<el-input v-model="item.school"></el-input>
				</el-form-item>
				<el-form-item label="学位"></el-form-item>
					<el-input v-model="item.degree"></el-input>
				</el-form-item>
				<el-form-item label="时间"></el-form-item>
					<el-input v-model="item.duration"></el-input>
				</el-form-item>
				<i class="el-icon-remove" v-on:click="removeItem(index)"></i>
				<hr class="end">
			</div>
			<i class="el-icon-circle-plus" v-on:click="addItem"></i>
		</el-form>
	</div>
</template>

<script>
export default {
  props: ['Items'],
  methods: {
    addItem() {
      this.Items.push({
        school: '',
        duration: '',
        degree: ''
      })
    },
    removeItem(index) {
      this.Items.splice(index, 1)
    }
  }
}
</script>
