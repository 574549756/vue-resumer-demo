<template>
	<section class="skills">
		<ul class="skillList">
			<li v-for="item in items" class="skillArea">
				<div class="header">
					<el-progress
						:percentage="toNumber(item.abilityProcess)"
						:width="50"
						type="circle"
						color="#f56c6ca4"
					></el-progress>
				</div>
				<main class="content">
					<span>{{item.abilityName}}</span>
					<p>{{item.abilityDiscription}}</p>
				</main>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	props: ["items"],
	methods: {
		toNumber(xxx) {
			return xxx + 0
		}
	}
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}

.skills {
	.skillList {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		.skillArea {
			display: flex;
			justify-content: center;
			align-items: flex-start;
			border-left: 2px solid rgba(245, 108, 108, 0.643);
			background: #f9f8fa;
			box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: 0.05);
			padding: px(10);
			margin: px(10) 0;
			.content {
				display: flex;
				flex-direction: column;
				background: none;
				margin-left: px(15);
				span {
					font-size: px(20);
				}
				p {
					font-size: px(12);
					color: rgb(107, 107, 107);
				}
			}
			.header {
				.el-progress__text {
					color: #f56c6ca4;
				}
			}
		}
	}
}
</style>
