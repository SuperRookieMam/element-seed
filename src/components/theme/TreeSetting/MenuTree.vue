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
              <el-row>
                <el-col :span="24">
                  <div class="buttons">
                    <el-button @click="addRoot">新增根节点</el-button>
                    <el-dialog title="根节点信息录入" :visible.sync="dialogFormVisible">
                      <el-form :model="newRoot" ref="rootForm" :rules="rules">
                        <el-form-item label="中文名称" prop="cname">
                          <el-col span="18">
                            <el-input v-model="newRoot.cname"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="英文名称" prop="ename">
                          <el-col span="18">
                            <el-input v-model="newRoot.ename"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="排序权重" prop="sort">
                          <el-col span="18">
                            <el-input v-model="newRoot.sort" value="number"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="点击跳转" prop="isMenu">
                          <el-col span="18">
                            <el-switch
                              v-model="newRoot.isMenu"
                              active-color="#13ce66"
                              inactive-color="#ff4949">
                            </el-switch>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="跳转地址" prop="url" v-if="newRoot.isMenu === true">
                          <el-col span="18">
                            <el-input v-model="newRoot.url"/>
                          </el-col>
                        </el-form-item>
                        <el-form-item label="是否显示" prop="isShow">
                          <el-col span="18">
                            <el-switch
                              v-model="newRoot.isShow"
                              active-color="#13ce66"
                              inactive-color="#ff4949">
                            </el-switch>
                          </el-col>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="cancelAddRoot">取 消</el-button>
                        <el-button type="primary" @click="sureAddRoot('rootForm')">确 定</el-button>
                      </div>
                    </el-dialog>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="tree-div">
                    <el-tree :data="data"
                             :props="defaultProps"
                             highlight-current="true"
                             default-expand-all="true"
                             @node-click="handleNodeClick"/>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12">
              <el-row>
                <el-col :span="20">
                  <el-form-item label="中文名称" prop="cname">
                    <el-input v-model="currentNode.cname"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="英文名称" prop="ename">
                    <el-input v-model="currentNode.ename"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="排序权重" prop="sort">
                    <el-input v-model="currentNode.sort"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="点击跳转" prop="isMenu">
                    <el-switch
                      v-model="currentNode.isMenu"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row v-if="currentNode.isMenu === true">
                <el-col :span="20">
                  <el-form-item label="跳转地址" prop="url">
                    <el-input v-model="currentNode.url"/>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="20">
                  <el-form-item label="是否显示" prop="isShow">
                    <el-switch
                      v-model="currentNode.isShow"
                      active-color="#13ce66"
                      inactive-color="#ff4949">
                    </el-switch>
                  </el-form-item>
                </el-col>
              </el-row>
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
  import { Component, Mixins } from 'vue-property-decorator'
  import TableBase from '../../../plugins/TableBase'

  @Component
  export default class MenuTree extends Mixins(TableBase) {
    dialogFormVisible = false
    rules = {
      cname: [{required: true, message: '请输入中文名称', trigger: 'blur'}],
      ename: [{required: true, message: '请输入英文名称', trigger: 'change'}],
      sort: [{required: true, message: '请输入排序权重', trigger: 'change'}]
    }
    newRoot = {}

    activeName = 'base'
    controllerMapping = 'menuFunction'
    data = []
    defaultProps = {
      children: 'children',
      label: 'cname'
    }
    currentNode = {}
    defaultProps = {
      children: 'children',
      label: 'label'
    }

    addRoot () {
      this.newRoot = {}
      this.dialogFormVisible = true
    }

    cancelAddRoot () {
      this.newRoot = {}
      this.dialogFormVisible = false
    }

    sureAddRoot (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
           let tempRoot = {}
           tempRoot.cname = this.newRoot.cname
           tempRoot.ename = this.newRoot.ename
           tempRoot.sort = this.newRoot.sort
           tempRoot.url = this.newRoot.url ? this.newRoot.url : ''
           tempRoot.isMenu = this.newRoot.isMenu ? 1 : 0
           tempRoot.isShow = this.newRoot.isShow ? 1 : 0
           tempRoot.isFlow = 1
           tempRoot.pid = 0
          this.insert([tempRoot]).then(data => {
            if (data.code === 0) {
                let arr = data.data
                this.data.push(arr[0])

            } else {
              this.message("新增根节点失败","提示信息")
            }
          })
        } else {
          return false
        }
      })
    }

    /* handleClick (tab, event) {
       /!* if (tab.name === 'formtest') {
            this.$router.push({name: 'tt', params: {rowData: {id: 'new'}}})
          } *!/
     }
 */
    handleNodeClick (data) {
      console.log(data)
    }

    created () {
    }
  }
</script>
<style>
  .tree-div {
    width: 100%;
    height: 500px;
    overflow: scroll;
  }
</style>
