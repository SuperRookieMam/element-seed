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
      headerMsg: [{name: '中文名称', propety: 'cname', sort: false},
                    {name: '英文名称', propety: 'ename', sort: false},
                    {name: '跳转地址', propety: 'url', sort: false},
                    {name: '更能序号', propety: 'functionNumber', sort: false},
                    {name: '父Id', propety: 'pid', sort: false},
                    {name: '是否菜单', propety: 'isMenu', sort: false},
                    {name: '是否显示', propety: 'isShow', sort: false},
                    {name: '所属公司', propety: 'companyId', sort: false}
                    ],
      url: 'company'
    }
    params ={
      page: 'page',
      whereContext: {
        pageNum: 0,
        pageSize: 30
      }
    }
  }
</script>
