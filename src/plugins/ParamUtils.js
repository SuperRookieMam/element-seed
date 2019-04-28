
export default {

     analysParam (str) {
      return this.getExpressionFromStr(str)
    },

    // 递归解析字符串生成后台需要的
    getExpressionFromStr1 (str) {
       if (!str.trim()) {
         return
       }
      let expressions = []
      let exindex = 0
      let expression = {}
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
             let firstE = str.slice(bindex, eindex).trim()
              // 判断表达式是不是个复合的表达式如：
              // ( (field ge '' and  field le '')  or (field ge '' and  field ge'' ) ) or (field ge '')
              if (firstE.search('and') > 0 || firstE.search('\\(') >= 0 || firstE.search('or') > 0) {
                expression.unique = 0
                let expressions1 = []
                expression.expressions = expressions1
                // 如果表达式时以"("开头的//继续递归裁剪()
                //  因为and 与or 不可能平级，所以只要获下级表达的第-个下级表达式的条件即可
                if (firstE.search('\\(') === 0) {
                  let bflag1 = 1
                  let eflag1 = 0
                  let eindex1 = 0
                  for (let j = 1; j < firstE.length; j++) {
                      if (firstE.slice(j, j + 1) === '(') {
                        bflag1 += 1
                      } else if (firstE.slice(j, j + 1) === ')') {
                        eflag1 += 1
                      }
                      eindex1 = j
                    if (bflag1 === eflag1) {
                      let connect1 = str.slice(eindex1 + 1).trim()
                      if (connect1.search('and') === 0) {
                         expression.joinType = 'and'
                      } else if (connect1.search('or') === 0) {
                        expression.joinType = 'or'
                      }
                       break
                    }
                  }
                  // 继续递归
                  expressions1.push(...this.getExpressionFromStr(firstE))
                } else {
                  // 如果不是"("开始的话说明第一个链接条件即下级表达式的链接条件
                  expression.joinType = (firstE.search('and') < firstE.search('or') && firstE.search('and') !== -1) ? 'and' : 'or'
                  expressions1.push(...this.getExpressionFromStr(firstE))
                }
              } else {
                // 如果时个单一的表达式如：field ge ''
                expression.unique = 1
                let strs = firstE.split(' ')
                expression.key = strs[0]
                expression.type = strs[1]
                expression.value = strs[2]
                expressions[exindex] = expression
              }
             //  除去 第一个表达式，注意剩下的字符串如果有还有表达式，链接条件夜包含在其中
              str = str.slice(eindex + 1).trim()
              break
            }
        }
      } else {
        // 为单列表发誓
        if (str.search('and') === -1 && str.search('or') === -1) {
          // 如果时个单一的表达式如：field ge ''
          expression.unique = 1
          let strs = str.split(' ')
          expression.key = strs[0]
          expression.type = strs[1]
          expression.value = strs[2]
          expressions[exindex] = expression
          str = undefined
        } else if ((str.search('and') !== -1 && str.search('or') === -1) ||
                  (str.search('and') < str.search('or') && str.search('and') !== -1)) {
          // 解析第一个表达式
          expression.unique = 1
          let firstE = str.slice(0, str.search(expression.type))
          let strs = firstE.split(' ')
          expression.key = strs[0]
          expression.type = strs[1]
          expression.value = strs[2]
          //  除去 第一个表达式，注意剩下的字符串如果有还有表达式，链接条件夜包含在其中
          str = str.slice(str.search(expression.type)).trim()
        } else if ((str.search('or') !== -1 && str.search('and') === -1) ||
          (str.search('or') < str.search('and') && str.search('or') !== -1)) {
            expression.unique = 0
            expression.joinType = 'or'
            let expressions1 = []
            expression.expressions = expressions1
          }
      }

       expressions.push(expression)
        if (str) {
          str = str.search('and') >= 0 ? str.slice(3).trim() : str.slice(2).trim()
          let temp = this.getExpressionFromStr(str)
          if (temp) {
            expressions.push(...temp)
          }
        }
      return expressions
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
    } else if (str.search('and') === 0) { // 此层为and链接
      expression.unique = 1
      let strs = firstE.split(' ')
      expression.key = strs[0]
      expression.type = strs[1]
      expression.value = strs[2]
      expressions.push(expression)
      str = str.slice(3)
      expressions.push(...this.getExpressionFromStr(str))
    } else if (str.search('or') === 0) { // 此层为or链接
      expression.unique = 0
      expression.joinType = 'or'
    }
    expressions.push(expression)
    if (str) {
      str = str.search('and') >= 0 ? str.slice(3).trim() : str.slice(2).trim()
      let temp = this.getExpressionFromStr(str)
      if (temp) {
        expressions.push(...temp)
      }
    }
    return expressions
  }
}
