<template>
    <div id="topbar">
        <div class="logo">
            Vue Resumer
        </div>
        <div class="actions">
            <el-row>
                <el-button>注册</el-button>
                <el-button>登录</el-button>
                <el-button v-on:click="preview">预览</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    preview() {
      this.$emit('preview')
    }
  }
}
</script>


<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}
#topbar {
  display: flex;
  justify-content: space-between;
  padding: px(16);
  align-items: center;
  font-size: px(20);
}
</style>
