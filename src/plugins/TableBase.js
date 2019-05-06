 import Vue from 'vue'
 import AnalysParam from './ParamUtils'
 import { namespace } from 'vuex-class'
 import { Component } from 'vue-property-decorator'

 const Formstate = namespace('Formstate')

@Component
 export default class TableBase extends Vue {
   @Formstate.Action('get')
   action
   @Formstate.Action('del')
   del

   tableData = []

   totalPage = 0
   search (templateSearch, serchObj, params, tableName) {
     params.pageNum = 1
     params.expressions = AnalysParam.searchParamsBuild(templateSearch, serchObj)
     return this.action({url: tableName, params: {page: 'page', whereContext: JSON.stringify(params)}})
       .then(ele => {
         return ele
         }
       )
   }
  deleteRow (tableName, data) {
      this.del({url: tableName, params: data}).then(ele => {
            if (ele && ele.code === 0) {
              let m = []
              this.tableData.forEach(els => {
                    if (els.id !== data.id) {
                        m.push(els)
                    }
                })
              this.tableData = m
            }
        })
   }
  edit (name, data) {
    this.$router.push({name: name, params: {rowData: data}})
  }
  add (name) {
    let data = {id: 'new'}
    this.edit(name, data)
  }
 }
