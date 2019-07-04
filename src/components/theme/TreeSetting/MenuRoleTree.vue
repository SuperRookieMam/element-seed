<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div>123</div>
      </el-col>
      <el-col :span="8">
        <div>123</div>
      </el-col>
      <el-col :span="8">
        <div>123</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { Component, Mixins } from 'vue-property-decorator'
  import TableBase from '../../../plugins/TableBase'

  @Component
  export default class MenuRoleTree extends Mixins(TableBase) {
    created () {
      this.refreshTree()
    }
  }
</script>
<style>
</style>
