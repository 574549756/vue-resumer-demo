<template>
  <div class="toast">
    <span>{{toastData.toastMsg}}</span>
  </div>
</template>
<script>
export default {
	props: ["toastData"]
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}
.toast {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: px(30);
	background: white;
	box-shadow: 0 0 px(10) 0 rgba(0, 0, 0, 0.1);
	border-left: px(2) solid rgba(245, 108, 108, 0.643);
	left: px(960);
	span {
		font-size: px(15);
		color: #6e6e6e;
		padding: px(12) px(24);
	}
}
</style>
