<template>
  <div id="preview">
    <main class="idDiscription">
      <div class="cover">
        <h2 class="emailMe">ex.arc.zhang@gmail.com</h2>
        <section class="aboutMe">
          <h1>{{resume.profile.name || '请填写姓名'}}</h1>
          <span class="jobAndCity">
            <p>{{resume.profile.city || '请填写城市'}}</p>
            <p>{{resume.profile.birth || '请填写出生日期'}}</p>
            <h2>{{resume.profile.wanted || '请填写求职意向'}}</h2>
          </span>
        </section>
        <div class="buildDate">
          <p>创建时间</p>
          <p>{{buildDate}}</p>
        </div>
        <section v-if="filter(resume.contacts).length > 0" class="contactContainer">
          <main class="mainContact">
            <ul class="contactArea">
              <ol v-for="contact in filter(resume.contacts)">
                <li class="contactList">
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-qq`"></use>
                  </svg>
                  <p v-html="contact.qq || '请填写QQ'"></p>
                </li>
                <li class="contactList">
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-wechat`"></use>
                  </svg>
                  <p v-html="contact.wechat || '请填写微信'"></p>
                </li>
                <li class="contactList">
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-phone1`"></use>
                  </svg>
                  <p v-html="contact.phone || '请填写手机号'"></p>
                </li>
                <li class="contactList">
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-email`"></use>
                  </svg>
                  <p v-html="contact.email || '请填写邮箱'"></p>
                </li>
                <li class="contactList">
                  <svg class="icon" aria-hidden="true">
                    <use v-bind:xlink:href="`#icon-github`"></use>
                  </svg>
                  <p v-html="contact.github || '请填写GitHub地址'"></p>
                </li>
              </ol>
            </ul>
          </main>
        </section>
      </div>
      <footer class="footer">
        <abilityProcess v-bind:items="resume.skills"/>
      </footer>
    </main>
    <main class="resumeDiscription">
      <header class="header1">
        <h1>这里是头</h1>
      </header>
      <div class="main1">
        <section class="ID-completion">
          <ul>
            <li>
              <p>姓名</p>
              <p>性别</p>
              <p>城市</p>
              <p>出生年月</p>
              <p>求职意向</p>
              <p>年龄</p>
              <p>学历</p>
            </li>
            <li>
              <span>{{resume.profile.name}}</span>
              <span>{{resume.profile.gender}}</span>
              <span>{{resume.profile.city}}</span>
              <span>{{resume.profile.birth}}</span>
              <span>{{resume.profile.wanted}}</span>
              <span>{{resume.profile.age}}</span>
              <span>{{resume.profile.degree}}</span>
            </li>
          </ul>
        </section>
        <div class="history">
          <section class="studyHistory" v-if="filter(resume.studyHistory).length > 0">
            <ul>
              <li v-for="study in filter(resume.studyHistory)">
                <h2>{{study.duration}}</h2>
                <p>{{study.school}} {{study.degree}}</p>
              </li>
            </ul>
          </section>
          <section class="jobExperience" v-if="filter(resume.jobExperience).length > 0">
            <ul>
              <li v-for="job in filter(resume.jobExperience)">
                <h2>{{job.duration}}</h2>
                <p>{{job.company}} {{job.content}}</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <footer class="onlineMode">
        <a :href="resume.profile.onlineResume">ONLINE RESUME</a>
      </footer>
      <main class="main2">
        <section class="projectDiscription" v-if="filter(resume.projects).length > 0">
          <ul>
            <li v-for="project in filter(resume.projects)" class="projectContent">
              <span>
                <h3>{{project.name}}</h3>
                <h3 class="project-link">
                  <a :href="project.projectPreview">ViewDemo</a>
                  <a :href="project.projectCode">ViewCode</a>
                </h3>
              </span>
              <p>{{project.content}}</p>
            </li>
          </ul>
        </section>
      </main>
      <footer class="footerEnd"></footer>
    </main>
  </div>
</template>


<style>
#preview {
	overflow: hidden;
}
</style>

<script>
import abilityProcess from "./abilityProcess.vue"
import coverImg5 from "../assets/img/coverImg5.jpg"

export default {
	data() {
		return {
			contactIcon: [
				"qq",
				"wechat",
				"phone1",
				"email",
				"github"
			],
			buildDate: ""
		}
	},
	created: function() {
		var date = new Date()
		this.buildDate = date.toLocaleDateString()
	},
	methods: {
		filter(array) {
			// 找出非空对象
			return array.filter(item => !this.isEmpty(item))
		},
		isEmpty(object) {
			// 只要有一个 value 不是 falsy ，就返回 false
			let empty = true
			for (let key in object) {
				if (object[key]) {
					empty = false
					break
				}
			}
			return empty
		}
	},
	components: {
		abilityProcess
	},
	computed: {
		resume() {
			return this.$store.state.resume
		}
	}
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}

#preview {
	width: 100%;
	overflow: auto;
	display: flex;
	flex-direction: row;
	.idDiscription {
		width: 30%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		background: #f8f8f8;
		position: relative;
		.cover {
			background-image: url(../assets/img/coverImg5.jpg);
			min-height: px(380);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			position: relative;
			padding: px(50);
			width: 100%;
			background-position: center center;
			background-size: cover;
			.contactContainer {
				display: flex;
				justify-content: flex-end;
				align-items: flex-end;
				.mainContact {
					display: flex;
					box-shadow: 0 0 30px 0 rgba(255, 255, 255, 0.2);
					background: #2d3a4311;
					flex-direction: column;
					margin-left: px(10);
					.contactArea {
						text-align: flex-start;
						justify-content: flex-start;
						padding: px(20);
						ol {
							display: flex;
							flex-direction: column;
							.contactList {
								display: flex;
								font-display: row;
								align-items: center;
								justify-content: flex-start;
								margin-top: 5px;
								.icon {
									width: 12px;
									height: 12px;
									fill: #f7f7f7;
								}
								p {
									color: #f7f7f7;
									margin: 0 px(0) px(0) px(10);
									font-size: px(12);
								}
							}
						}
					}
				}
			}
			> .buildDate {
				position: absolute;
				display: flex;
				bottom: 40px;
				right: 40px;
				p {
					color: #bebebe;
					font-size: px(14);
				}
			}

			.emailMe {
				position: absolute;
				top: px(50);
				right: px(50);
				font-size: px(12);
				color: #d3d3d3;
			}
		}
		.aboutMe {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: px(30);
			h1 {
				color: #f8f8f8;
				font-size: px(70);
				font-weight: 300;
				margin: 0;
			}
			.jobAndCity {
				p {
					font-size: px(12);
					color: #dddddd;
				}
				h2 {
					font-size: px(24);
					color: #dddddd;
				}
			}
		}
	}
	.footer {
		padding: px(30) px(20) px(20) px(50);
		flex: 1;
	}
}
.resumeDiscription {
	display: flex;
	background: white;
	flex-direction: column;
	position: relative;
	.onlineMode {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: px(70);
		background: #f6f6f6;
		a {
			font-weight: 600;
			color: #f56c6ca4;
			background: white;
			padding: px(10) px(20);
			box-shadow: 0 0 px(10) 0 rgba(0, 0, 0, 0.03);
			font-size: px(16);
			border-radius: px(26);
		}
	}
	.main1 {
		position: relative;
		display: flex;
		width: 100%;
		height: px(260);
		padding-top: px(15);
		background: #f4f4f4;
		.rectango {
			width: px(40);
			height: px(40);
			background: #000;
		}
		.ID-completion {
			ul {
				display: flex;
				margin: px(30) px(40) 0 px(20);
				li {
					display: flex;
					flex-direction: column;
					font-size: px(16);
					justify-content: flex-start;
					margin-left: px(40);
					p {
						color: #979695;
						margin: px(3) 0;
					}
					span {
						margin: px(3) 0;
						color: black;
					}
				}
			}
		}
		.history {
			margin-top: px(20);
			.jobExperience,
			.studyHistory {
				color: black;
				margin: px(10) px(0) px(0) px(50);

				h2 {
					color: #979695;
					font-size: px(20);
					font-weight: 300;
					margin: px(10) px(0) px(5) px(0);
				}
			}
		}
		.headerR {
			font-weight: 300;
			margin: px(50) px(0) px(0) px(50);
			font-size: px(36);
		}
	}

	.header1 {
		height: px(50);
		background: #293d4e17;
		display: flex;
		padding: px(20) px(20);
		h1 {
			font-size: px(0);
			font-weight: 300;
			height: px(60);
			color: white;
		}
	}
	.footerEnd {
		position: absolute;
		bottom: 0;
		height: px(50);
		width: 100%;
		background: #f4f4f4;
	}
}
.main2 {
	display: flex;
	flex-direction: row;
	background: rgb(249, 248, 250);
	padding: px(30) px(30) px(0) px(30);
	.projectDiscription {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		padding: 0 px(20);
		> h2 {
			font-size: px(30);
			font-weight: 300;
			margin-bottom: px(20);
		}
		ul {
			display: flex;
			width: 100%;
			flex-direction: column;
			.projectContent {
				display: flex;
				border-left: 2px solid rgba(245, 108, 108, 0.643);
				width: 100%;
				margin: px(10) 0;
				justify-content: space-between;
				flex-direction: column;
				box-shadow: 0 0 px(10) 0
					rgba($color: #000000, $alpha: 0.05);
				padding: px(10);
				span {
					display: flex;
					margin-bottom: px(5);
					justify-content: space-between;
				}
				p,
				a {
					color: #747474;
					font-size: px(12);
				}
				a {
					font-size: px(15);
					color: rgba(245, 108, 108, 0.643);
				}
				p {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				h3 {
					font-size: px(20);
					font-weight: 500;
					color: #414141;
				}
				.project-link {
					align-self: flex-end;
					a {
						margin: 0 px(5);
					}
				}
			}
		}
	}
}
</style>
