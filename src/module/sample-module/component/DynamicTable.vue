<template>
  <div>
    <el-form size="mini"
             inline="true"
             :model="searchObj"
             class="clear-float">
      <el-row>
        <el-col :span="18">
          <el-form-item>
            <el-input size="mini" v-model="searchObj.searchName" placeholder="输入搜索关键字"/>
          </el-form-item>
        </el-col>
        <el-col :span="6" class="flex-right">
          <el-form-item>
            <el-button type="primary"
                       size="mini"
                       @click="add()">
              新增
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
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
    searchObj = {}

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
