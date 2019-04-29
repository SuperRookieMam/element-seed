<template>
  <dynamic-table
    :search-obj="searchobj"
    :table-mesage="tableMsg"
    :params="params"/>
</template>
<script>
  import Vue from 'vue'
  import DynamicTable from './DynamicTable'
  import { Component } from 'vue-property-decorator'
  @Component({
    components: {
      DynamicTable
    }
  })
  export default class TestTalble extends Vue {
    searchobj = {
        searchName: ''
      }
    tableMsg={
        searchMsg: {
        searchFields: ['cname']
          },
      headerMsg: [{name: '中文名称', property: 'cname', sort: false},
                    {name: '英文名称', property: 'ename', sort: false},
                    {name: '跳转地址', property: 'url', sort: false},
                    {name: '更能序号', property: 'functionNumber', sort: false},
                    {name: '父Id', property: 'pid', sort: false},
                    {name: '是否菜单', property: 'isMenu', sort: false},
                    {name: '是否显示', property: 'isShow', sort: false},
                    {name: '所属公司', property: 'companyId', sort: false}
                    ],
      url: 'menuFunction'
    }
    params ={
      page: 'page',
      whereContext: {
        pageNum: 1,
        pageSize: 30
      }
    }
  }
</script>
