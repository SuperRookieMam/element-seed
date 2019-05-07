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
              <el-form-item label="serialVersionUID" prop="serialVersionUID">
                <el-input v-model="formData.serialVersionUID"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="createTime" prop="createTime">
                <el-input v-model="formData.createTime"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="modifyTime" prop="modifyTime">
                <el-input v-model="formData.modifyTime"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="createUser" prop="createUser">
                <el-input v-model="formData.createUser"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="modifyUser" prop="modifyUser">
                <el-input v-model="formData.modifyUser"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="serialVersionUID" prop="serialVersionUID">
                <el-input v-model="formData.serialVersionUID"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="id" prop="id">
                <el-input v-model="formData.id"/>
              </el-form-item>
            </el-col>
          </el-row>
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
