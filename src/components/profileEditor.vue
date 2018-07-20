<template>
	<div>
		<h2>个人信息</h2>
		<el-form>
			<hr class="start">
			<el-form-item label="姓名">
				<el-input v-model="profile.name"></el-input>
			</el-form-item>
			<el-form-item label="城市">
				<el-input v-model="profile.city"></el-input>
			</el-form-item>
			<el-form-item label="出生年月">
				<el-input v-model="profile.birth"></el-input>
			</el-form-item>
			<hr class="end">
		</el-form>
	</div>
</template>

<script>
export default {
  props: ['profile']
}
</script>
