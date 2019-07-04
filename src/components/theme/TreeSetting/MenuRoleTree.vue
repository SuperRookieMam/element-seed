<template>
  <div>
    <el-row>
      <el-col :span="10">
        <el-row>
          <el-col>
            <h3>选择菜单节点</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="tree-div">
              <el-tree
                :data="menuTree"
                show-checkbox
                node-key="id"
                :default-expand-all="true"
                :props="defaultProps"/>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <el-row>
          <el-col>
            <h3>角色菜单效果</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="tree-div">
              <el-tree
                :data="menuTree"
                show-checkbox
                node-key="id"
                :default-expand-all="true"
                :props="defaultProps"/>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <el-row>
          <el-col>
            <h3>角色角色选择</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="tree-div">
              <el-radio-group v-model="rediosSelect">
                <el-radio
                  v-for="(item,index) in redios"
                  :key="index"
                  :label="item.id"
                  border>
                  {{ item.rolName }}
                </el-radio>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { Component, Mixins } from 'vue-property-decorator'
  import TableBase from '../../../plugins/TableBase'

  @Component
  export default class MenuRoleTree extends Mixins(TableBase) {
    defaultProps = {
      children: 'children',
      label: 'cname'
    }
    menuTree = []
    redios = []
    rediosSelect = []
    refreshTree () {
      this.select('data/menuFunction/list', {}, true).then(data => {
        this.menuTree = this.getTree(data, 'children', 'pid')
      })
    }
    roleList () {
      this.select('data/roleInfo/list', {}, true).then(data => {
        this.redios = data
      })
    }
    created () {
      this.refreshTree()
      this.roleList()
    }
  }
</script>
<style>
  .tree-div {
    width: 100%;
    height: 550px;
    overflow: scroll;
  }
  .tree-div1 {
    width: 100%;
    height: 150px;
    overflow: scroll;
  }
  .tree-div2 {
    width: 100%;
    height: 400px;
    overflow: scroll;
  }
</style>
