<template>
    <div id="topbar">
        <div class="logo">
            Vue Resumer
        </div>
        <div class="actions">
            <el-row>
                <el-button v-if="currentUser">注册</el-button>
                <el-button v-if="currentUser">登录</el-button>
                <el-button v-on:click="logout" v-if="!currentUser">登出</el-button>
                <el-button v-on:click="preview">预览</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentUser: null
    }
  },
  methods: {
    preview() {
      this.$emit('preview')
    },
    logout: function() {
      AV.User.logOut()
      this.currentUser = null
      window.location.reload()
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
  background: #1e1e1e;
}
</style>
