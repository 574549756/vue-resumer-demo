<template>
	<div>
		<h2>个人信息</h2>
		<el-form>
			<hr class="start">
			<el-form-item label="姓名">
				<el-input v-model="profile.name"></el-input>
			</el-form-item>
			<el-form-item label="性别">
				<el-input v-model="profile.gender"></el-input>
			</el-form-item>
			<el-form-item label="城市">
				<el-input v-model="profile.city"></el-input>
			</el-form-item>
			<el-form-item label="出生年月">
				<el-input v-model="profile.birth"></el-input>
			</el-form-item>
			<el-form-item label="年龄">
				<el-input v-model="profile.age"></el-input>
			</el-form-item>
			<el-form-item label="学位">
				<el-input v-model="profile.degree"></el-input>
			</el-form-item>
			<el-form-item label="求职意向">
				<el-input v-model="profile.wanted"></el-input>
			</el-form-item>
			<hr class="end">
		</el-form>
	</div>
</template>

<script>
export default {
	props: ["profile"]
};
</script>
