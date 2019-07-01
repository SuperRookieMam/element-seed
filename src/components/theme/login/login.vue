<template>
  <div id="login" class="loginDiv">
    <div class="inner" v-if="loginType==='ordinary'">
      <div class="inner-div">
        <label class="inner-div-label">账号:</label>
        <input class="inner-div-input" type="text" v-model="ordinary.username">
      </div>
      <div class="inner-div">
        <label class="inner-div-label">密码:</label>
        <input class="inner-div-input" type="text" v-model="ordinary.password">
      </div>
      <div class="inner-div">
        <input type="button" value="登陆" @click="toHomePage">
        <input type="button" value="取消">
      </div>
    </div>
    <div class="inner" v-if="loginType==='oauth'||loginType==='security'">

    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  import store from '@/vuex'

  const loginModel = namespace('Login')
 @Component
  export default class Login extends Vue {
  loginType = ''
  ordinary = {
    username: '绝世好男人',
    password: '123456',
    ordinaryUrl: ''
  }
  oauth = {
     'grant_type': 'code',
     'client_id': 'ownerapp',
     'redirect_uri': '',
     'oauthServerUrl':''
   }
   @loginModel.Action('login')
   login
   @loginModel.Action('oauthJump')
   oauthJump
   @loginModel.Action('securityJump')
   securityJump

  jump () {
      if (this.loginType === 'oauth') {
        this.oauthJump(this.oauth)
      }else if (this.loginType === 'security'){
        this.securityJump(this.security)
      }
    }
  toHomePage () {
    this.login(ordinary).then(ele => {
       store.commit('loginType',this.loginType)
       store.commit('updateUser',ele.data())

    })

  }
  created () {
    this.jump()
  }
  }
</script>
<style>
  @import "./login.css";
</style>
