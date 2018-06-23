<template>
    <div id="topbar">
        <div class="logo">
            Vue Resumer
        </div>
        <div class="actions">
            <el-row>
                <el-button>注册</el-button>
                <el-button type="primary">登录</el-button>
            </el-row>
        </div>
    </div>
</template>


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
