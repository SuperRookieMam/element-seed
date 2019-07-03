<template>
  <div>
    <el-form ref="serchObj"
             class="demo-form-inline"
             size="mini"
             label-width="80px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="中文名称">
            <el-input v-model="serchObj['cname']"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="英文名">
            <el-input v-model="serchObj['ename']"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="功能编号">
            <el-input v-model="serchObj['functionNumber']"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="primary"
                     size="mini"
                     @click="filterByserchObj()">
            筛选
          </el-button>
          <el-button type="primary"
                     size="mini"
                     @click="add('menutree')">
            新增
          </el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column
        label="id"
        prop="id"/>
      <el-table-column
        label="中文名称"
        prop="cname"/>
      <el-table-column
        label="英文名"
        prop="ename"/>
      <el-table-column
        label="跳转地址"
        prop="url"/>
      <el-table-column
        label="排序"
        prop="sort"/>
      <el-table-column
        label="功能编号"
        prop="functionNumber"/>
      <el-table-column
        label="父ID"
        prop="pid"/>
      <el-table-column
        label="中文名称"
        prop="isMenu"/>
      <el-table-column
        label="公司编号"
        prop="companyId"/>
      <el-table-column label="操作" :min-width="60">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="edit(controllerMapping,scope.row)">编辑</el-button>
          <el-button type="text" size="mini" @click="deleteRow(controllerMapping,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.pageNum"
      :page-sizes="pageSizes"
      :page-size="params.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPage"/>
  </div>
</template>
<script>
  import { Component, Mixins } from 'vue-property-decorator'
  import TableBase from '../../../../plugins/TableBase'
  @Component
  export default class MenuFunctions extends Mixins(TableBase) {
    templateSearch = ' cname like t and ename like t and  functionNumber eq 1'

    serchObj = {}

    params = {
        pageSize: 50,
        pageNum: 1
    }
    pageSizes = [1, 2, 3, 4]

    tableData = []

    controllerMapping = 'menuFunction'

    handleSizeChange (val) {
     this.params.pageSize = val
      this.filterByserchObj()
    }
    handleCurrentChange (val) {
      this.params.pageNum = val
      this.filterByserchObj()
    }

    filterByserchObj () {
      this.search(this.templateSearch, this.serchObj, this.params, this.controllerMapping)
          .then(ele => {
            this.tableData = ele.data.list
      })
    }

    created () {
      this.filterByserchObj()
    }
  }
</script>
