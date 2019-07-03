 import Vue from 'vue'
 import { namespace } from 'vuex-class'
 import { Component } from 'vue-property-decorator'

 const Formstate = namespace('Formstate')

@Component
 export default class TableBase extends Vue {
   @Formstate.Action('get')
   Get
   @Formstate.Action('del')
   Del
   @Formstate.Action('post')
   update
   @Formstate.Action('put')
   insert

   tableData = []

   formData = {}

   totalPage = 0
   // get 请求，如果时是使用后台生成的接口用的是 dynamicParams 名字请用 dynamicParams请传true
  select (url, params, dynamicParams, flags) {
     let paramobj
     if (params && dynamicParams) {
       paramobj = {'dynameicParams': JSON.stringify(params)}
       if (flags) {
         if (Array.isArray(flags)) {
           flags.forEach(ele => {
             paramobj[ele.key] = ele.value
           })
         } else {
           paramobj[flags.key] = flags.value
         }
       }
     }
      return this.Get(url, paramobj).then(ele => { return ele.data })
   }
   remove (url, params, dynamicParams, flags) {
     let paramobj
     if (params && dynamicParams) {
       paramobj = {'dynameicParams': JSON.stringify(params)}
       if (flags) {
         if (Array.isArray(flags)) {
           flags.forEach(ele => {
             paramobj[ele.key] = ele.value
           })
         } else {
           paramobj[flags.key] = flags.value
         }
       }
     }
     return this.Del(url, paramobj).then(ele => { return ele.data })
   }
   search (url, serchObj, dynamicParams) {
   }
  deleteRow (url, params) {
   }
  edit (name, data) {
    this.$router.push({name: name, params: {id: data.id}})
  }
  add (name) {
    let data = {id: 'new'}
    this.edit(name, data)
  }

  getFormData (tableName, id) {
     if (id !== 'new') {
       this.action({url: `${tableName}/${id}`})
         .then(ele => {
           if (ele.code === 0) {
             this.formData = ele.data
           } else {
             alert(ele.msg)
           }
         })
     }
  }
  submitForm (url, formName, id) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        if (id === 'new') {
          this.post({url: url, params: this.formData})
            .then(ele => {
              if (ele.code === 0) {
                this.formData = ele.data
                this.$router.go(-1)
              } else {
                alert(ele.msg)
              }
            })
        } else {
          this.update({url: url, params: this.formData})
              .then(ele => {
              if (ele.code === 0) {
                this.formData = ele.data
                this.$router.go(-1)
              } else {
                alert(ele.msg)
              }
            })
        }
      } else {
        return false
      }
    })
  }
  message (msg, title) {
    this.$alert(msg, title, {
      confirmButtonText: '确定',
      callback: action => {
        this.$message({
          type: 'info',
          message: `action: ${ action }`
        })
      }
    })
  }
  resetForm (formName) {
     this.$router.go(-1)
  }
 }
