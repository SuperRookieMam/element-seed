
export default {

     analysParam (str) {
      return this.getExpressionFromStr(str)
    },
  // 递归解析字符串生成后台需要的
  getExpressionFromStr (str) {
    if (!str.trim()) {
      return
    }
    let expressions = []
    let expression = {}
    let firstE = ''
    let unique = false
    // 解析第一个表达式
    if (str.indexOf('(') === 0) {
      let bflag = 1
      let eflag = 0
      let bindex = 1
      let eindex = 0
      for (let i = 1; i < str.length; i++) {
        if (str.slice(i, i + 1) === '(') {
          bflag += 1
        } else if (str.slice(i, i + 1) === ')') {
          eflag += 1
        }
        eindex = i
        // 截取得到第一个子表达式
        if (bflag === eflag) {
          // 第一个表达式如果有括号是去最外层了括号的 如 ：
          // ( (field ge '' and  field le '')  or (field ge '' and  field ge'' ) )
          // => (field ge '' and  field le '')  or (field ge '' and  field ge'' )
           firstE = str.slice(bindex, eindex).trim()
           //  除去 第一个表达式，注意剩下的字符串如果有还有表达式，链接条件夜包含在其中
           str = str.slice(eindex + 1).trim()
          break
        }
      }
    } else {
      // 为单列
      if (str.search('and') === -1 && str.search('or') === -1) {
        unique = true
        firstE = str
        str = undefined
      } else {
        let connect = (str.search('and') < str.search('or') && str.search('and') !== -1) ? 'and' : 'or'
        firstE = str.slice(0, str.search(connect))
        str = str.slice(str.search(connect)).trim()
      }
    }
    if (unique) { // 只有一个条件
      expression.unique = 1
      let strs = firstE.split(' ')
      expression.key = strs[0]
      expression.type = strs[1]
      expression.value = strs[2]
      expressions.push(expression)
      str = undefined
    } else if (str.search('and') === 0) { // 此层为and链接
      expression.unique = 1
      let strs = firstE.split(' ')
      expression.key = strs[0]
      expression.type = strs[1]
      expression.value = strs[2]
      expressions.push(expression)
      str = str.slice(3)
      let temp = this.getExpressionFromStr(str)
      if (temp) {
        expressions.push(...this.getExpressionFromStr(str))
      }
    } else if (str.search('or') === 0) { // 此层为or链接
      expression.unique = 0
      expression.joinType = 'or'
      let expressions1 = []
      expression.expressions = expressions1
      expressions1.push(this.getExpressionFromStr(firstE))
      expressions.push(expression)
      str = str.slice(2).trim()
      while (str) {
        if (str.search('\\(') >= 0) {
          let bflag = 1
          let eflag = 0
          let bindex = 1
          let eindex = 0
          for (let i = 1; i < str.length; i++) {
            if (str.slice(i, i + 1) === '(') {
              bflag += 1
            } else if (str.slice(i, i + 1) === ')') {
              eflag += 1
            }
            eindex = i
            // 截取得到第一个子表达式
            if (bflag === eflag) {
              // 第一个表达式如果有括号是去最外层了括号的 如 ：
              // ( (field ge '' and  field le '')  or (field ge '' and  field ge'' ) )
              // => (field ge '' and  field le '')  or (field ge '' and  field ge'' )
              firstE = str.slice(bindex, eindex).trim()
              //  除去 第一个表达式，注意剩下的字符串如果有还有表达式，链接条件夜包含在其中
              str = str.slice(eindex + 1).trim()
              break
            }
          }
        } else {
            if (str.search('or') >= 0) {
              firstE = str.slice(0, str.search('or')).trim()
              str = str.slice(str.search('or')).trim()
            } else {
              firstE = str
              str = undefined
            }
        }
        if (str && str.search('or') >= 0) {
          str = str.slice(2).trim()
        }
        if (!str || str.length === 0) {
          str = undefined
        }
        let temp = this.getExpressionFromStr(firstE)
        if (temp) {
          expressions1.push(...temp)
        }
      }
    }
    if (str) {
      str = str.search('and') >= 0 ? str.slice(3).trim() : str
      let temp = this.getExpressionFromStr(str)
      if (temp) {
        expressions.push(...temp)
      }
    }
    return expressions
  }
}
