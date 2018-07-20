<template>
    <div id="topbar">
        <div class="logo">
            <div class="hideSideBar"><img src="../assets/img/logo.png" alt=""></div>
            <section class="mainHead"><h1>Vue</h1><h2>Resumer</h2></section>
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
  align-items: center;
  height: px(80);
  font-size: px(20);
  background: #f8f8f8;
  border-bottom: 1px solid #c7c7c7;
  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    height: px(80);
  }
  .logo {
    padding-right: px(216);
    display: flex;
    justify-content: center;
    align-items: center;
    .hideSideBar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: px(80);
      height: px(80);
      background: #2a2b30;
      box-shadow: -10px 0px 10px 0px rgba(rgb(0, 0, 0), 0.5) inset;
      > img {
        width: px(40);
        height: px(40);
      }
    }
    > .mainHead {
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-left: px(32);
      > h1 {
        color: black;
        font-size: px(25);
      }
      > h2 {
        color: #b3b3b3;
        margin-left: px(10);
        font-size: px(25);
      }
    }
  }
}
</style>
