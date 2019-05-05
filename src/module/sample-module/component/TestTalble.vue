<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <el-form ref="form"
             :model="form"
             class="demo-form-inline"
             size="mini"
             label-width="80px">
      <el-row>
        <el-col :span="4">
          <el-form-item label="活动名称">
            <el-input v-model="form['name']"/>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option v-for="(item,index) in selectData"
                         :key="index"
                         :label="item.lable"
                         :value="item.value"/>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item label="活动时间">
            <el-date-picker v-model="form.date1"
                            type="datetime"
                            placeholder="选择日期时间"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"/>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"/>
          <el-checkbox label="地推活动" name="type"/>
          <el-checkbox label="线下主题活动" name="type"/>
          <el-checkbox label="单纯品牌曝光" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"/>
          <el-radio label="线下场地免费"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <el-col :span="4">
        <el-button type="primary"
                   size="mini"
                   @click="search()">
          筛选
        </el-button>
        <el-button type="primary"
                   size="mini"
                   @click="add()">
          新增
        </el-button>
      </el-col>
    </el-form>
    <el-table
      :data="tableData5"
      style="width: 100%">
      <el-table-column
        label="商品 ID"
        prop="id"/>
      <el-table-column
        label="商品名称"
        prop="name"/>
      <el-table-column
        label="描述"
        prop="desc"/>
      <el-table-column label="操作" :min-width="60">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="mini" @click="delete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="currentPageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData5.length"/>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import AnalysParam from '../../../plugins/ParamUtils'
  @Component
  export default class TestTalble extends Vue {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    }
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
    onSubmit () {
      console.log('submit!')
    }
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
    edit (data) {

    }
    delete (data) {

    }
    search () {
      alert(JSON.stringify(AnalysParam.searchParamsBuild(' name.pass like zhangsan and (name like zhansgan or  password eq 123456) and passw eq 123456', {'name.pass': 'zhangsan', 'password': '123456', 'passw': '1'})))
    }
    activeIndex= '1'
    templateSearch={
      template: ' name.pass like zhangsan and (name like zhansgan or  password eq 123456)'
    }
    currentPage = 4
    currentPageSizes=50
    pageSizes=[50, 100, 200, 400]
    serchObj={}
    selectData=[{lable: '嫖娼', value: 5000}, {lable: '找小姐', value: 10000}]
    form = {
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    }
    tableData5= [{
      id: '12987122',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987123',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987125',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987126',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }]
  }
</script>
