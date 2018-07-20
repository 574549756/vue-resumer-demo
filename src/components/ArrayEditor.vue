<template>
	<div>
		<h2>{{title}}</h2>
		<el-form>
		    <hr class="start">         
			<div class="container" v-for="(work, index) in items" v-bind:key="index">
				<el-form-item v-for="key in keys" v-bind:label="labels[key] || key" v-bind:key="key">
					<el-input v-model="work[key]"></el-input>
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
  props: ['items', 'labels', 'title'],
  computed: {
    keys() {
      return Object.keys(this.items[0])
    }
  },
  methods: {
    addJobExperience() {
      const empty = {}
      this.keys.map(key => {
        empty[key] = ''
      })
      this.items.push(empty)
    },
    removeJobExperience(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>
