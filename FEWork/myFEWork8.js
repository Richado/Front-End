// 2016/10/01
//
// ============
// 作业 8
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}

// 定义一个增强的 ensureEqual
var ensureEqual(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}


// 作业 1
// 实现函数
// 多看提示多讨论
var log = function() {
    console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}

var join = function(delimiter, array) {
    /*
    delimiter 是 string
    array 是包含 string 的 array

    把 array 中的元素用 delimiter 连接成一个字符串并返回
    具体请看测试
    */
    var result = ''
    for (var i = 0; i < array.length; i++) {
        result += array[i]
        if (i < array.length-1) {
            result += delimiter
        }
    }
    log(result)
    return result
}

var test_join = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}

test_join()


// 作业 2
// 实现函数
var split = function(s, delimiter=' ') {
    /*
    s 是 string
    delimiter 是 string, 默认为空格 ' '

    以 delimiter 为分隔符号, 返回一个 array
    例如
    split('1 2 3') 返回 ['1', '2', '3']
    split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
    注意, 测试 array 是否相等得自己写一个函数用循环来跑
    */
    var result = []
    var start = 0
    var end = 0
    for (var i = start; i < s.length; i++) {
        if (s[i] === delimiter) {
            end = i
            result.push(s.slice(start, end))
            start = end+1
        }
    }
    result.push(s.slice(start))
    log(result)
    return result
}

var compare = function(a1, a2) {
    if (a1.length !== a2.length) {
        return false
    }
    for (var i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) {
            return false
        }
    }
    return true
}

var test_split = function() {
    ensure(compare(split('1 2 3'), ['1', '2', '3']), '测试一')
    ensure(compare(split('a=b%c=d', '%'), ['a=b', 'c=d']), '测试二')
    ensure(compare(split('a=b,bis,vcasvc', ','), ['a=b', 'vcasvc', 'vcasvc']), '测试三')
}

test_split()


// 作业 3
// 实现函数
var replaceAll = function(s, old, newString) {
    /*
    s old newString 都是 string
    返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
    */
    var a = split(s, old)
    var result = join(newString, a)
    log(result)
    return result
}

var test_replaceAll = function() {
    ensure(replaceAll('a=b&c=d', '&', '*') === 'a=b*c=d', '测试一')
    ensure(replaceAll('1 2 3 4', ' ', ',') === '1,2,3 4', '测试二')
}

test_replaceAll()


// 作业 4
// 实现函数
var str1 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       '1'
    2       '121'
    3       '12321'
    4       '1234321'
    */
    if (n === 1) {
        log('1')
        return '1'
    }
    // var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    var num = '123456789'
    var result = ''
    var leftStr = ''
    var rightStr = ''
    for (var i = 0; i < n-1; i++) {
        leftStr += num[i]
    }
    log(leftStr)
    for (var j = n-2; j >= 0; j--) {
        rightStr += num[j]
    }
    log(rightStr)
    result = leftStr+String(n)+rightStr
    log(result)
    return result
}

var test_str1 = function() {
    ensure(str1(4) === '1234321', '测试一')
    ensure(str1(3) === '1234321', '测试二')
}

test_str1()


// 作业 5
// 实现函数
var str2 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       'A'
    2       'ABA'
    3       'ABCBA'
    */
    if (n === 1) {
        log('A')
        return 'A'
    }
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    var leftStr = ''
    var rightStr = ''
    for (var i = 0; i < n-1; i++) {
        leftStr += upper[i]
    }
    log(leftStr)
    for (var j = n-2; j >= 0; j--) {
        rightStr += upper[j]
    }
    log(rightStr)
    result = leftStr+upper[n-1]+rightStr
    log(result)
    return result
}

var test_str2 = function() {
    ensure(str2(4) === 'ABCDCBA', '测试一')
    ensure(str2(3) === 'ABCDCBA', '测试二')
    ensure(str2(2) === 'ABCDCBA', '测试二')
}

test_str2()


// 作业 6
// 实现加法口诀表
var join = function(delimiter, array) {
    /*
    delimiter 是 string
    array 是包含 string 的 array

    把 array 中的元素用 delimiter 连接成一个字符串并返回
    具体请看测试
    */
    var result = ''
    for (var i = 0; i < array.length; i++) {
        result += array[i]
        if (i < array.length-1) {
            result += delimiter
        }
    }
    log(result)
    return result
}

var addLine = function(n) {
    var first = n
    var a = []
    for (var i = 0; i < n; i++) {
        var s = ''
        s += `${first} + ${i+1} = ${first+i+1}`
        a.push(s)
    }
    return join('  ', a)
}

var addTable = function() {
    /*
    返回这样格式的加法口诀表(没写全, 但是要返回完整的)
    注意, 这只是我输入的内容
    实际上你普通 log 出来是不会有回车的
    [
        '1 + 1 = 2',
        '2 + 1 = 3  2 + 2 = 4',
        '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
    ]
    */
    var result = []
    for (var i = 0; i < 9; i++) {
        result.push(addLine(i+1))
    }
    return result
}

var result = addTable()

// for (var i = 0; i < 9; i++) {
//     log(`${result[i]}\n`)
// }
// log(`${result[2]}\n${result[3]}\n${result[4]}`)
log(result)



// 作业 7
// 实现函数
var range1 = function(start, end) {
    /*
    start end 都是 int

    返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
    [1, 2, 3, 4]
    */
    var result = []
    for (var i = start; i < end; i++) {
        result.push(i)
    }
    return result
}

log(range1(1, 5))


// 作业 8
// 实现函数
var range2 = function(start, end, step=1) {
    /*
    start end step 都是数字
    step 是大于 0 的正整数

    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=0, end=6, step=2 返回数据如下
    [0, 2, 4]
    */
    var result = []
    for (var i = start; i < end; i+=step) {
        result.push(i)
    }
    return result
}

log(range2(0, 6, 3))


// 作业 9
// 实现函数
var range3 = function(start, end, step=1) {
    /*
    start end step 都是数字

    和 range2 一样, 但是要求支持负数 step
    使用 while 循环
    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=6, end=0, step=-1 返回数据如下
    [6, 5, 4, 3, 2, 1]

    */
    var result = []
    if (step > 0) {
        var i = start
        while (i < end) {
            result.push(i)
            i += step
        }
    } else {
        var i = start
        while (i > end) {
            result.push(i)
            i += step
        }
    }
    log(result)
    return result
}

range3(6, 0, -1)


// 作业 10
// 实现函数
var random01 = function() {
    /*
    js 标准数学库有一个随机数函数
    Math.random()
    它返回 0 - 1 之间的小数

    用它实现本函数, 返回 0 或 1
    */
    return Math.round(Math.random())
}

log(random01())


// 作业 11
// 实现函数
var random01 = function() {
    /*
    js 标准数学库有一个随机数函数
    Math.random()
    它返回 0 - 1 之间的小数

    用它实现本函数, 返回 0 或 1
    */
    return Math.round(Math.random())
}

var randomLine01 = function(n) {
    /*
    返回一个只包含了 0 1 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 1, 0, 1]
    */
    var array = []
    for (var i = 0; i < n; i++) {
        // array[i] = random01()
        array.push(random01())
    }
    return array
}

randomLine01(5)


// 作业 12
var randomSquare01 = function(n) {
    /*
    返回以下格式的数据
    假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
    */
    var result = []
    for (var i = 0; i < n; i++) {
        result.push(randomLine01(n))
    }
    return result
}

randomSquare01(5)
// log(randomSquare01(3))


// 作业 13
var random09 =function() {
    var n = Math.round(Math.random())
    if (n === 0) {
        return n
    } else {
        return 9
    }
}

var randomLine09 = function(n) {
    /*
    返回一个只包含了 0 9 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 9, 0, 9]
    */
    var array = []
    for (var i = 0; i < n; i++) {
        // array[i] = random01()
        array.push(random09())
    }
    return array
}

randomLine09(5)


// 作业 14

var markedLine = function(array) {
    /*
    array 是一个只包含了 0 9 的 array
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
    复制数组用 array.slice(0) 实现

    标记规则如下
    对于下面这样的 array\\\
    [0, 0, 9, 0, 9]
    标记后是这样
    [0, 1, 9, 2, 9]

    规则是, 0 会被设置为左右两边 9 的数量
    */
    var newArray = array.slice(0)
    var len = array.length
    for (var i = 0; i < len; i++) {
        if (array[i] === 0) {
            if ((i > 0) && (array[i-1] === 9)) {
                newArray[i] += 1
            }
            if ((i < len-1) && (array[i+1] === 9)) {
                newArray[i] += 1
            }
        }
    }
    return newArray
}

var a = [0, 0, 9, 0, 9]

markedLine(a)


// 作业 15
// var random09 =function() {
//     var n = Math.round(Math.random())
//     if (n === 0) {
//         return n
//     } else {
//         return 9
//     }
// }
//
// var randomLine09 = function(n) {
//     /*
//     返回一个只包含了 0 9 的随机 array, 长度为 n
//     假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
//     [0, 0, 9, 0, 9]
//     */
//     var array = []
//     for (var i = 0; i < n; i++) {
//         // array[i] = random01()
//         array.push(random09())
//     }
//     return array
// }
//
// var myRandomSquare09 = function(n) {
//     var result = []
//     for (var i = 0; i < n; i++) {
//         result.push(randomLine09(n))
//     }
//     return result
// }

// myRandomSquare09(4)

// var myMarkedLine = function(array, index) {
//     var n = 0
//     if (array[index] === 9) {
//         n++
//     }
//     if (array[index+1] === 9) {
//         n++
//     }
//     if (array[index-1] === 9) {
//         n++
//     }
//     return n
// }
// // myMarkedLine([0, 9, 0, 9], 2)

var a = [
    [0, 9, 0, 0],
    [0, 0, 9, 0],
    [9, 0, 9, 0],
    [0, 9, 0, 0],
]
log(a)

var markedSquare = function(array) {
    /*
    array 是一个「包含了『只包含了 0 9 的 array』的 array」
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

    范例如下, 这是 array
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]

    a[i][j]:   本行的n(判断两个元素) + a[i-1][j]的n(判断两个元素) + a[i+1][j]的n(判断两个元素)
                + a[i-1][j]本身(判断一个元素) + a[i+1][j]本身(判断一个元素)
                共计 判断八个元素

    这是标记后的结果
    [
        [1, 9, 2, 1],
        [2, 4, 9, 2],
        [9, 4, 9, 2],
        [2, 9, 2, 1],
    ]

    规则是, 0 会被设置为四周 8 个元素中 9 的数量
    */
    var newArray = array.slice(0)
    var rowLength = array.length
    var colLength = array[0].length
    for (var i = 0; i < rowLength; i++) {
        for (var j = 0; j < colLength; j++) {
            if (array[i][j] === 0) {
                if ((j > 0) && (array[i][j-1] === 9)) {
                    newArray[i][j] += 1
                }
                if ((j < colLength-1) && (array[i][j+1] === 9)) {
                    newArray[i][j] += 1
                }
                if ((i > 0) && (array[i-1][j] === 9)) {
                    newArray[i][j] += 1
                }
                if ((i < rowLength-1) && (array[i+1][j] === 9)) {
                    newArray[i][j] += 1
                }
                if ((i > 0 && j > 0) && (array[i-1][j-1] === 9)) {
                    newArray[i][j] += 1
                }
                if ((i > 0 && j < colLength-1) && (array[i-1][j+1] === 9)) {
                    newArray[i][j] += 1
                }
                if ((i < rowLength-1 && j > 0) && (array[i+1][j-1] === 9)) {
                    newArray[i][j] += 1
                }
                if ((i < rowLength-1 && j < colLength-1) && (array[i+1][j+1] === 9)) {
                    newArray[i][j] += 1
                }
            }
        }
    }
    return newArray
}

markedSquare(a)




// 作业 16
var random09 =function() {
    var n = Math.round(Math.random())
    if (n === 0) {
        return n
    } else {
        return 9
    }
}

var randomLine09 = function(n) {
    /*
    返回一个只包含了 0 9 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 9, 0, 9]
    */
    var array = []
    for (var i = 0; i < n; i++) {
        // array[i] = random01()
        array.push(random09())
    }
    return array
}

var randomSquare09 = function(n, limit=3) {
    /*
    返回以下格式的数据
    只包含 0 和 9
    limit 是 9 的个数
    假设 n 为 4, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 9」的 array』的 array, 9 的个数是 limit
    */

    var result = []
    for (var i = 0; i < n; i++) {
        result.push(randomLine09(n))
    }
    var n = 0
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result[i].length; j++) {
            if (n === limit) {
                result[i][j] = 0
                continue
            }
            if (result[i][j] === 9) {
                n++
            }
        }

    }
    return result
}

randomSquare09(5, 8)



// 下面开始都是 DOM API 相关练习
// ====
//
// 作业 17
/*
实现一个登录页, 有 2 个标签分别是用户名输入框和登录按钮
给登录按钮绑定一个 click 事件
检查用户名是否符合如下规则
1，第一位是字母
2，只能包含字母、数字、下划线
3，只能字母或数字结尾
4，最小长度2
5，最大长度10

如果符合规则, log '检查合格'
如果不符合, 在登录按钮后插入一个红色 h1 标签
内容是 '用户名错误'

需要补全的代码自行解决
*/


// 作业 18
/*
给上课写的 todo 程序加一个功能
在编辑的时候输入框失去焦掉后保存 todo
失去焦点的事件名是 blur
*/
// 18, 保存 todo
// 给编辑框绑定一个 blur 事件就好
// 用事件委托


// 作业 19
/*
给上课写的 todo 加一个功能
增加一个 编辑 按钮
task 默认是不能编辑的
在你点了编辑按钮后它才能编辑(设置属性)
并且拥有焦点(element.focus() 实现)
编辑完成后(失去焦点后), 让 task 不可编辑

如果不懂, 看提示
*/



// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, join
循环相加


2, split
用循环找到 delimiter
记录两个变量 start 和 end 来 slice 出子字符串


3, replaceAll
split 再 join


4, str1
用 2 个辅助函数
一个生成前半部分
一个生成后半部分
辅助函数用循环


5, str2
同上


6, addTable
用一个辅助函数生成行
用循环 push


7, range1
使用 while 循环


8, range2
循环加判断


9, range3
循环加判断


10, random01
用余数来实现


11, randomLine01
循环加 random01


12, randomSquare01
循环加 randomLine01


13, randomLine09
可以生成 01 之后把 1 替换为 9


14, markedLine
把 9 左右加一
注意判断 9 是否在两边


15, markedSquare
循环调用 markedLine


16, randomSquare09
把 randomSquare01 里的 1 替换成 9


17, 用户名检查
红色是 css 预先写好的


18, 保存 todo
给编辑框绑定一个 blur 事件就好
用事件委托


19, 动态编辑
用之前讲过的 DOM API 设置属性即可
*/
