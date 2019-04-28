<template>
  <div>
    <el-form size="mini"
             inline="true"
             :model="searchObj"
             class="clear-float">
      <el-row>
        <el-col :span="18">
          <el-form-item v-if="searchObj.searchName">
            <el-input size="mini" v-model="searchObj.searchName" placeholder="输入搜索关键字"/>
          </el-form-item>
          <el-form-item v-if="searchObj.selelct">
            <el-select v-model="ruleForm.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"/>
              <el-option label="区域二" value="beijing"/>
            </el-select>
          </el-form-item>
          <el-form-item v-if="searchObj.beginDate">
            <el-date-picker type="date"
                            placeholder="选择日期"
                            v-model="searchObj.date1"
                            style="width: 100%;"/>
          </el-form-item>
          <el-form-item v-if="searchObj.beginTime">
            -
          </el-form-item>
          <el-form-item v-if="searchObj.beginTime">
            <el-time-picker type="fixed-time"
                            placeholder="选择时间"
                            v-model="searchObj.date2"
                            style="width: 100%;"/>
          </el-form-item>
          <el-form-item v-if="searchObj.endDate">
            <el-date-picker type="date"
                            placeholder="选择日期"
                            v-model="searchObj.date1"
                            style="width: 100%;"/>
          </el-form-item>
          <el-form-item v-if="searchObj.endTime">
            -
          </el-form-item>
          <el-form-item v-if="searchObj.endTime">
            <el-time-picker type="fixed-time"
                            placeholder="选择时间"
                            v-model="searchObj.date2"
                            style="width: 100%;"/>
          </el-form-item>
        </el-col>
        <el-col :span="6" class="flex-right">
          <el-form-item>
            <el-button type="primary"
                       size="mini"
                       @click="search()">
              筛选
            </el-button>
            <el-form-item>
              <el-button type="primary"
                         size="mini"
                         @click="add()">
                新增
              </el-button>
            </el-form-item>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <ele-data-tables :data="guideShows">
      <el-table-column v-for="(item,index) in tableMesg.headerMsg"
                       :key="index"
                       :label="item.name"
                       :prop="item.propety"
                       :sortable="item.sort"/>
      <el-table-column label="操作" :min-width="60">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="mini" @click="delete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </ele-data-tables>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import EleDatatables from 'element-datatables'
  import { namespace } from 'vuex-class'

  const SampleModule = namespace('sample')// 这里的名称要和某块中注册的名称一致

  @Component({
    components: {
      EleDatatables
    }
  })
  export default class TableOne extends Vue {
    @Prop({ default: () => {} })
    searchObj

    @Prop({ default: () => {} })
    tableMesage

    ajax = '/table1'

    @SampleModule.State('name')
    name

    @SampleModule.Action('action1')
    action1

    created () {
      console.log('get data from namespaced module', this.name)
      this.action1().then(data => {
        console.log('get data from namespaced action', data)
      })
    }
  }
</script>

<style scoped>

</style>
