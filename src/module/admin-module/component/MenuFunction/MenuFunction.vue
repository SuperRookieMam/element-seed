<template>
  <div>
    <el-form :model="formData"
             :rules="rules"
             ref="formData"
             label-width="100px"
             size="mini">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础信息" name="base">
          <el-row>
            <el-col :span="12">
              <el-form-item label="中文名称" prop="cname">
                <el-input v-model="formData.cname"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="英文名" prop="ename">
                <el-input v-model="formData.ename"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="跳转地址" prop="url">
                <el-input v-model="formData.url"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="排序" prop="sort">
                <el-input v-model="formData.sort"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="功能编号" prop="functionNumber">
                <el-input v-model="formData.functionNumber"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="父ID" prop="pid">
                <el-input v-model="formData.pid"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="中文名称" prop="isMenu">
                <el-input v-model="formData.isMenu"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="isShow" prop="isShow">
                <el-input v-model="formData.isShow"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="isFlow" prop="isFlow">
                <el-input v-model="formData.isFlow"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="公司编号" prop="companyId">
                <el-input v-model="formData.companyId"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-button type="primary" @click="submitForm('formData',id,'menuFunction')">
                保存
              </el-button>
              <el-button @click="resetForm('formData')">
                取消
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-tabs>
    </el-form>
  </div>
</template>
<script>
  import { Component, Prop, Mixins } from 'vue-property-decorator'
  import TableBase from '../../../../plugins/TableBase'
  @Component
  export default class MenuFunction extends Mixins(TableBase) {
    @Prop({ default: () => 'new' })
    id
    activeName = 'base'
    controllerMapping = 'menuFunction'
    rules = {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]
        }
    handleClick (tab, event) {
       /* if (tab.name === 'formtest') {
            this.$router.push({name: 'tt', params: {rowData: {id: 'new'}}})
          } */
    }
    created () {
     this.getFormData(this.controllerMapping, this.id)
    }
  }
</script>
