<template>
  <div>
    <el-form :model="formData"
             :rules="rules"
             ref="ruleForm"
             label-width="100px"
             size="mini">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <el-row>
            <el-col :span="12">
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="formData.cname"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="活动名称" prop="name">
                <el-date-picker type="datetime"
                                placeholder="选择日期"
                                v-model="formData.date1"
                                style="width: 100%;"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="测试" name="tableTest">
          <test-table/>
        </el-tab-pane>
        <el-tab-pane label="表单" name="formtest">
          <router-view/>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>
<script>
  import { Component, Prop, Mixins } from 'vue-property-decorator'
  import TableBase from '../../../plugins/TableBase'
  import TestTable from './TestTalble'
  @Component({
    components: {
      TestTable
    }
  })
  export default class TestForm extends Mixins(TableBase) {
    @Prop({ default: () => 'new' })
    id
    activeName = 'first'
    controllerMapping = 'menuFunction'

    rules = {
      name: [
        {required: true, message: '请输入活动名称', trigger: 'blur'},
        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
      ],
      region: [
        {required: true, message: '请选择活动区域', trigger: 'change'}
      ],
      date1: [
        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
      ],
      date2: [
        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
      ],
      type: [
        {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
      ],
      resource: [
        {required: true, message: '请选择活动资源', trigger: 'change'}
      ],
      desc: [
        {required: true, message: '请填写活动形式', trigger: 'blur'}
      ]
    }
    handleClick (tab, event) {
     /* if (tab.name === 'formtest') {
        this.$router.push({name: 'tt', params: {rowData: {id: 'new'}}})
      } */
    }
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    created () {
      this.getFormData(this.controllerMapping, this.id)
    }
  }
</script>

<style scoped>

</style>
