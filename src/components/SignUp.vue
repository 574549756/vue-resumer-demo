<template>
	<div class="dialogBoard">
		<header class="mainTitle">
			<h1 class="head1">留下</h1>
			<h1 class="head2">您的足迹</h1>
		</header>
		<h2 class="titleDiscription">注册以储存您的简历数据</h2>
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
			<el-form-item label="邮箱" prop="email">
				<el-input v-model.email="ruleForm2.email"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="checkPass">
				<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
			</el-form-item>
			<div class="underLogin">
				<el-checkbox v-model="checked">确认信息</el-checkbox>
				<a href="javascript:void(0)" class="freeTry" @click="freeTry()">免注册试用?</a>
			</div>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
				<el-button @click="resetForm('ruleForm2')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	props: ["currentUser", "freeTryMode"],
	data() {
		var checkEmail = (rule, value, callback) => {
			if (!value) {
				return callback(new Error("邮箱不能为空"))
			}
			setTimeout(() => {
				if (value.indexOf("@") === -1) {
					callback(new Error("邮箱格式有误"))
				} else {
					callback()
				}
			}, 1000)
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
		var validatePass2 = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请再次输入密码"))
			} else if (value !== this.ruleForm2.pass) {
				callback(new Error("两次输入密码不一致!"))
			} else {
				callback()
			}
		}
		return {
			checked: true,
			ruleForm2: {
				pass: "",
				checkPass: "",
				email: ""
			},
			rules2: {
				pass: [{ validator: validatePass, trigger: "blur" }],
				checkPass: [
					{ validator: validatePass2, trigger: "blur" }
				],
				email: [{ validator: checkEmail, trigger: "blur" }]
			}
		}
	},
	methods: {
		signUp: function() {
			let user = new AV.User()
			user.setUsername(this.ruleForm2.email)
			user.setEmail(this.ruleForm2.email)
			user.setPassword(this.ruleForm2.checkPass)
			user.signUp().then(
				loginedUser => {
					this.$emit("switchCurrent")
				},
				function(error) {
					alert("注册失败")
				}
			)
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.signUp()
				} else {
					console.log("error submit!!")
					return false
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
		freeTry() {
			this.$emit("freeTry")
		}
	}
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}

.mainTitle {
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	padding-left: px(60);
	margin: px(0) px(0) px(0) px(0);
	.head1 {
		font-size: px(35);
		color: black;
	}
	.head2 {
		font-size: px(35);
		color: #b3b3b3;
	}
}
.underLogin {
	display: flex;
	justify-content: space-between;
	margin: px(52) px(0) px(25) px(0);
	.el-checkbox__inner {
		border-color: #dcdfe6;
		transition: all 0.3s;
	}
	.el-checkbox.is-checked {
		.el-checkbox__label {
			color: black;
			font-size: px(14);
		}
		.el-checkbox__input.is-checked {
			.el-checkbox__inner {
				background-color: #787878;
			}
		}
	}
	.el-checkbox__inner:hover {
		border-color: black;
	}
	.freeTry {
		font-size: px(14);
		display: block;
	}
}
.demo-ruleForm {
	margin-right: px(35);
	width: px(340);
	height: px(240);
	.el-form-item {
		position: relative;
		.el-form-item__label {
			padding: 0;
			position: absolute;
			line-height: px(20) !important;
			font-size: px(13);
			top: px(8);
			left: px(18);
			z-index: 50;
			color: #c6c6c6;
		}
		.el-form-item__content {
			position: relative;
			height: px(40);
			.el-button--primary {
				width: px(120);
				height: px(45);
				font-size: px(16);
				padding: px(12) px(20);
				span {
					font-size: px(16);
				}
				font-weight: bolder;
				background: #000;
				border-color: #ececec;
				color: #c6c6c6;
			}
			.el-button--default {
				width: px(120);
				padding: px(12) px(20);
				height: px(45);
				font-size: px(16);
				background: #ffffff;
				color: #787878;
				border-color: #ececec;
			}

			.el-input__inner {
				border-radius: 0;
				padding: px(24) px(8) px(2) px(18);
				height: px(63);
				font-size: px(14);
				line-height: px(20);
				border: 1px solid #ececec;
				transition: all 0.5s;
			}
			.el-input__inner:focus {
				border-left-color: #f56c6ca4;
				border-left-width: px(3);
			}
			.el-form-item__error {
				position: absolute;
				padding: 0;
				top: px(8);
				right: px(18);
				font-size: px(12);
				display: flex;
				justify-content: flex-end;
			}
		}
	}
}
</style>
