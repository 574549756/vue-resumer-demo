<template>
  <div class="dialogBoard">
    <header class="mainTitle">
      <h1 class="head1">欢迎</h1>
      <h1 class="head2">回来</h1>
    </header>
    <h2 class="titleDiscription">登录查看您曾保存的简历</h2>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <el-form-item label="邮箱" prop="email">
        <el-input v-model.email="ruleForm2.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <div class="underLogin">
        <el-checkbox v-model="checked">确认信息</el-checkbox>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
	props: ["currentUser"],
	data() {
		var checkEmail = (rule, value, callback) => {
			if (!value) {
				return callback(new Error("邮箱不能为空"))
			} else if (value.indexOf("@") === -1) {
				callback(new Error("邮箱格式有误"))
			} else {
				callback()
			}
		}
		var validatePass = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请输入密码"))
			} else {
				if (this.ruleForm2.checkPass !== "") {
					this.$refs.ruleForm2.validateField("checkPass")
				}
				callback()
			}
		}
		return {
			checked: true,
			ruleForm2: {
				pass: "",
				email: ""
			},
			rules2: {
				pass: [{ trigger: "blur" }],
				email: [
					{
						validator: checkEmail,
						trigger: "blur"
					}
				]
			}
		}
	},
	methods: {
		login: function() {
			AV.User.logIn(
				this.ruleForm2.email,
				this.ruleForm2.pass
			).then(
				loginedUser => {
					console.log("发送switchCurrent指令")
					this.$emit("switchCurrent")
					console.log("发送完毕")
				},
				function(error) {
					alert("登录失败")
				}
			)
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.login()
				} else {
					console.log("error submit!!")
					return false
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
		}
	}
}
</script>
