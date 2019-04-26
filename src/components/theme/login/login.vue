<template>
  <div id="login" class="loginDiv">
    <div class="inner">
      <div class="inner-div">
        <label class="inner-div-label">账号:</label>
        <input class="inner-div-input" type="text" v-model="data.username">
      </div>
      <div class="inner-div">
        <label class="inner-div-label">密码:</label>
        <input class="inner-div-input" type="text" v-model="data.password">
      </div>
      <div class="inner-div">
        <input type="button" value="登陆" @click="toHomePage">
        <input type="button" value="取消">
      </div>
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
  data = {}

   @loginModel.Action('login')
   login

  toHomePage () {
      this.login(this.data).then((data) => {
          this.$router.push('/')
        }
      )
    }
  }
</script>
<style>
  @import "./login.css";
</style>
