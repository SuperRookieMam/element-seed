<template>
  <div id="login" class="loginDiv">
    <div class="inner">
      <el-card class="box-card">
        <div  class="text item">
          <div class="inner-div">
            <label class="inner-div-label">账号:</label>
            <el-input v-model="input" placeholder="请输入账号"></el-input>
          </div>
        </div>
        <div  class="text item">
          <div class="inner-div">
            <label class="inner-div-label">密码:</label>
            <el-input v-model="input" placeholder="请输入密码"></el-input>
          </div>
        </div>
        <div  class="text item">
          <div class="inner-div">
            <el-button type="primary" plain size="medium">登录</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

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
     'grant_type': 'password',
     'client_id': 'ownerapp',
     'redirect_uri': '',
     'oauthServerUrl': ''
   }
   @loginModel.Action('login')
   login
  toHomePage () {
  }
  created () {

  }
  }
</script>
<style>
  @import "./login.css";
  .text {
    font-size: 18px;
  }

</style>
