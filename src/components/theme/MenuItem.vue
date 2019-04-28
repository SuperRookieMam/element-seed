<template>
  <el-submenu v-if="item.submenus && item.submenus.length>0"
              popper-class="my-submenu"
              :index="item.id+''">
    <template slot="title"> {{ item.cname }}</template>
    <menu-item v-for="(submenu,index) in item.submenus"
               :item="submenu"
               :key="index"/>
  </el-submenu>
  <el-menu-item v-else
                @click="toTarget(item)"
                :index="item.id+''">
    <template>{{ item.cname }}</template>
  </el-menu-item>
</template>

<script>
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import analysParam from '../../plugins/ParamUtils'
  @Component({
    name: 'menu-item'
  })
  export default class MenuItem extends Vue {
    @Prop({default: () => {}})
    item

    toTarget ({isMenu}) {
      if (isMenu === 1) {
        console.log(analysParam.analysParam('field eq    1   and ( ( (field ge "15" and  field le "16")    or   (field   ge "2" and  field ge "6"  )  ) or field ge "8"  )'))
        this.$router.push('table1')
      } /* else if (isMenu === 'HYPERLINK') {
        window.location.href = href
      } */
    }
  }
</script>

<style scoped>

</style>
