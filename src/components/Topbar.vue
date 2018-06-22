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
#topbar {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  font-size: 20px;
}
</style>
