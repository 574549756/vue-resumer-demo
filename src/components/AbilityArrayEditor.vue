<template>
	<div>
		<h2>{{title}}</h2>
		<el-form>
			<hr class="start">
			<div class="container" v-for=" (work,index) in items" v-bind:key="index">
				<el-form-item label="技能名称">
					<el-input v-model="work.abilityName"></el-input>
				</el-form-item>
				<div class="block">
					<el-slider v-model="work.abilityProcess" type="number" :step="5"></el-slider>
				</div>
				<el-form-item label="技能描述">
					<el-input v-model="work.abilityDiscription"></el-input>
				</el-form-item>
				<i v-if="items.length>1" class="el-icon-remove" v-on:click="removeJobExperience(index)"></i>
				<hr class="end">
			</div>
			<i class="el-icon-circle-plus" v-on:click="addJobExperience"></i>
		</el-form>
	</div>
</template>

<script>
export default {
	props: ["items", "title"],
	computed: {
		keys() {
			console.log("调用keys")
			return Object.keys(this.items[0])
		}
	},
	methods: {
		addJobExperience() {
			const empty = {}
			this.keys.map(key => {
				empty[key] = 20
			})
			this.items.push(empty)
		},
		removeJobExperience(index) {
			this.items.splice(index, 1)
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
