<template>
  <div id="dialog">
        <div class="signUpCard">
            <div class="switchMode">
                <div class="switchSignIn" v-bind:class="{signInMode:signInMode}" v-on:click="toSignIn">登录</div>
                <div class="switchSignUp" v-bind:class="{signUpMode:signUpMode}" v-on:click="toSignUp">注册</div>
            </div>
            <SignUp v-bind:class="{signUpMode:!signUpMode}"/>
            <SignIn v-bind:class="{signInMode:!signInMode}"/>
            <div class="coverImg">
                <div class="inner">
                    <div class="logomask"></div>
                    <h1>Powered By Vue</h1>
                    <img class="vueLogo" src="../assets/logo.png" alt="">
                </div>
        </div>
    </div>
  </div>
</template>

<script>
import logo from '../assets/logo.png'
import SignUp from './SignUp.vue'
import SignIn from './SignIn.vue'
import coverImg5 from '../assets/img/coverImg5.jpg'
import background from '../assets/img/background/backgroundImg.jpg'

let pageWidth = window.innerWidth
styleTag.innerHTML = 'html{font-size:' + pageWidth / 10 + 'px;}'

export default {
  props: ['currentUser', 'ruleForm2'],
  data() {
    return {
      signUpMode: false,
      signInMode: true
    }
  },
  methods: {
    toSignUp() {
      this.signUpMode = true
      this.signInMode = false
    },
    toSignIn() {
      this.signUpMode = false
      this.signInMode = true
    }
  },
  components: {
    SignUp,
    SignIn
  }
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
  @return $px/$designWidth * 10 + rem;
}

#dialog {
  z-index: 30;
  background-image: url(../assets/img/background/backgroundImg.jpg);
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .signUpCard {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: px(0) px(0) px(10) px(2) rgba($color: #666666, $alpha: 0.3);
    .switchMode {
      position: absolute;
      top: 0;
      left: px(60);
      display: flex;
      .switchSignIn,
      .switchSignUp {
        margin-right: px(10);
        border: 2px solid #ececec;
        word-wrap: break-word;
        width: px(30);
        height: px(60);
        background: #f8f8f8;
        color: #b3b3b3;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-bottom-left-radius: px(15);
        border-bottom-right-radius: px(15);
        transition: all 0.5s;
        cursor: pointer;
      }
    }
    .switchSignIn.signInMode,
    .switchSignUp.signUpMode {
      font-weight: bold;
      background: black;
      border: 2px solid black;
      box-shadow: px(0) px(0) px(5) px(3) rgba($color: #666666, $alpha: 0.3);
      height: px(80);
    }
    .dialogBoard.signInMode {
      display: none;
    }
    .dialogBoard.signUpMode {
      display: none;
    }
    .coverImg {
      width: px(650);
      height: px(700);
      background-image: url(../assets/img/coverImg5.jpg);
      background-position: center center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      .inner {
        opacity: 0.5;
        width: px(250);
        height: px(250);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        h1 {
          position: absolute;
          bottom: px(10);
          font-size: px(20);
          color: white;
        }
        .vueLogo {
          padding-bottom: px(20);
          width: px(150);
        }
        .logomask {
          border-radius: px(20);
          position: absolute;
          width: px(250);
          height: px(250);
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
    .dialogBoard {
      width: px(500);
      height: px(700);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f8f8f8;
      padding-bottom: px(80);
      .titleDiscription {
        font-size: px(14);
        color: #b3b3b3;
        align-self: flex-start;
        padding-left: px(60);
        margin: px(0) px(0) px(65) px(0);
      }
    }
  }
}
</style>
