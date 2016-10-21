// 2016/09/25
//
// ============
// 作业 5
// string 的花式操作函数
//
// 用到的知识主要是
// 0, 用下标引用字符串
// 1, 字符串切片
// 2, 循环
// 3, 选择 (也就是 if)
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
//
// 请直接在我的代码中更改/添加, 不要新建别的文件


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// 本次作业起, 我们开始使用自动测试的方法来验证结果
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}

// 例子
// 测试的使用
//
// 注意看, 我们使用了上文定义的 ensure 来进行测试
var test_sample = function() {
    // ensure 函数接受两个参数
    // 第一个是一个 bool 值, 如果为 True 则不会有任何反应
    // 否则会打印第二个参数
    ensure(1 === 1, '如果测试失败, 这句话会被打印出来')
    ensure(1 > 2, '测试 1 > 2 失败')
}

test_sample()
// 调用上面的 test_sample 可以得到如下输出
// *** 测试失败: 测试 1 > 2 失败


// ======
// 资料
// ======
//
// String 函数可以把数字转成字符串
// 例如 String(1) 就能得到 '1'
// 注意, String 是大写开头的函数, 不要弄错大小写
//
// includes 函数可以检查一个字符串是否包含另一个字符串
// 例如 'good'.includes('o') 返回 true
// var name = 'gua'
// name.includes(1) // 返回 false



// 作业 1
// 10 分钟做不出就看提示
//
var nChar = function(char, n) {
    var s = ''
    for (var i = 0; i < n; i++) {
        s += char
    }
    return s
}

var zfill = function(n, width) {
    /*
    n 是 int 类型
    width 是 int 类型

    把 n 的位数变成 width 这么长，并在右对齐，不足部分用 0 补足并返回
    具体请看测试, 注意, 返回的是 string 类型

    返回 string 类型
    */
    var s = String(n)
    var len = s.length
    return nChar('0', width - len) + s
}


// 测试函数
var test_zfill = function() {
    ensure(zfill(1, 4) === '0001', 'zfill 测试 1')
    ensure(zfill(23, 4) === '0023', 'zfill 测试 2')
    ensure(zfill(12345, 4) === '12345', 'zfill 测试 3')
    ensure(zfill(169, 5) === '00169', 'zfill 测试 4')
}

// 调用测试函数
test_zfill()


// 作业 2
// 10 分钟做不出就看提示
//
// 注意, 这是一个新的知识点, 叫 默认参数
// fillchar 这个参数如果你不提供, 它的值默认就是 ' '
// 语法就是这样
var ljust = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在末尾用 fillchar 填充并返回
    否则, 原样返回, 不做额外处理

    返回 string 类型
    */
    var len = width - s.length
    return s + nChar(fillchar, len)
}


// 测试函数
var test_ljust = function() {
    ensure(ljust('gua', 5) === 'gua  ', 'ljust 测试 1')
    ensure(ljust('guagua', 5) === 'guagua', 'ljust 测试 2')
    ensure(ljust('gua', 5, '*') === 'gua**', 'ljust 测试 3')
}

// 作业 3
// 10 分钟做不出就看提示
//
var rjust = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在开头用 fillchar 填充并返回

    返回 string 类型
    */
    var len = width - s.length
    return nChar(fillchar, len) + s
}

// 测试函数
var test_rjust = function() {
    ensure(rjust('gua', 5) === '  gua', 'rjust 测试 1')
    ensure(rjust('guagua', 5) === 'guagua', 'rjust 测试 2')
    ensure(rjust('gua', 5, '*') === '**gua', 'rjust 测试 3')
}

// 作业 4
// 10 分钟做不出就看提示
//
var center = function(s, width, fillchar=' ') {
    /*
    s 是 string
    width 是 int
    fillchar 是 长度为 1 的字符串, 默认为空格 ' '

    如果 s 长度小于 width, 则在两边用 fillchar 填充并返回
    如果 s.length 和 width 互为奇偶, 则无法平均分配两边的 fillchar
    这种情况下, 让左边的 fillchar 数量小于右边

    返回 string 类型
    */
    var len = width - s.length
    var lenLeft = Math.floor(len / 2)
    var lenRight = len - lenLeft
    var left = nChar(fillchar, lenLeft)
    var right = nChar(fillchar, lenRight)
    return left + s + right
}

// 测试函数
var test_center = function() {
    ensure(center('gua', 5) === ' gua ', 'center 测试 1')
    ensure(center('gua', 5, '*') === '*gua*', 'center 测试 2')
    ensure(center('gw', 5) === ' gw  ', 'center 测试 3')
    ensure(center('gua', 6) === ' gua  ', 'center 测试 4')
}



// 作业 5
// 10 分钟做不出就看提示
// 注意, 看上面的资料, 介绍了一个 includes 函数
//
var is_space = function(s) {
    /*
    s 是 string
    检查 s 中是否只包含空格

    返回 bool, 如果 s 中包含的只有空格则返回 true, 否则返回 false
    */
    for (var i = 0; i < s.length; i++) {
        var char = s[i]
        if (char != ' ') {
            return false
        }
    }
    return true
}


// 测试函数
var test_is_space = function() {
    ensure(is_space(' '), 'center 测试 1')
    ensure(is_space('   '), 'center 测试 2')
    ensure(!is_space(''), 'center 测试 3')
    ensure(!is_space('gua'), 'center 测试 4')
}

// 作业 6
// 10 分钟做不出就看提示
//
var is_digit = function(s) {
    /*
    s 是字符串
    检查 s 中是否只包含数字
    返回: bool, 如果 s 中包含的只有数字则返回 true, 否则返回 false
    */
    var digits = '1234567890'
    for (var i = 0; i < s.length; i++) {
        var char = s[i]
        if (!digits.includes(char)) {
            return false
        }
    }
    return true
}

// 测试函数
var test_is_digit = function() {
    ensure(is_digit('123'), 'is_digit 测试 1')
    ensure(is_digit('0'), 'is_digit 测试 2')
    ensure(!is_digit('  '), 'is_digit 测试 3')
    ensure(!is_digit('1.1'), 'is_digit 测试 4')
    ensure(!is_digit('gua'), 'is_digit 测试 5')
}


// 作业 7
// 10 分钟做不出就看提示
//
var strip_left = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串开始的所有空格」的字符串

    返回 string
    */
    var index = 0
    for (var i = 0; i < s.length; i++) {
        var char = s[i]
        if (char != ' ') {
            index = i
            break
        }
    }
    return s.slice(index)
}

// 测试函数
var test_strip_left = function() {
    ensure(strip_left('  gua') === 'gua', 'strip_left 测试 1')
    ensure(strip_left(' gua  ') === 'gua  ', 'strip_left 测试 2')
    ensure(strip_left('') === '', 'strip_left 测试 3')
    ensure(strip_left('    ') === '', 'strip_left 测试 4')
}


// 作业 8
// 10 分钟做不出就看提示
//
var strip_right = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串末尾的所有空格」的字符串

    返回 string
    */
    var index = s.length
    for (var i = s.length - 1; i >= 0; i++) {
        var char = s[i]
        if (char != ' ') {
            index = i
            break
        }
    }
    return s.slice(0, index)
}

// 测试函数
var test_strip_right = function() {
    ensure(strip_right('  gua') === '  gua', 'strip_right 测试 1')
    ensure(strip_right(' gua  ') === ' gua', 'strip_right 测试 2')
    ensure(strip_right('') === '', 'strip_right 测试 3')
    ensure(strip_right('    ') === '', 'strip_right 测试 4')
}


// 作业 9
// 10 分钟做不出就看提示
//
var strip = function(s) {
    /*
    s 是 string
    返回一个「删除了字符串首尾的所有空格」的字符串

    返回 string
    */
    s = strip_left(s)
    s = strip_right(s)
    return s
}

// 测试函数
var test_strip = function() {
    ensure(strip('  gua') === 'gua', 'strip 测试 1')
    ensure(strip(' gua  ') === 'gua', 'strip 测试 2')
    ensure(strip('') === '', 'strip 测试 3')
    ensure(strip('    ') === '', 'strip 测试 4')
}


// 作业 10
// 10 分钟做不出就看提示
//
var findIndex = function(s1, s2) {
    var len = s2.length
    for (var i = 0; i < len; i++) {
        var s = s1.slice(i, i + len)
        log('find index', s)
        if (s === s2) {
            return i
        }
    }
}

var replace = function(s, old, newString) {
    /*
    3 个参数 s old new 都是字符串
    返回一个「将 s 中的 old 字符串替换为 new 字符串」的字符串
    假设 old 存在并且只出现一次

    返回 string
    */
    var oldLen = old.length
    var index = findIndex(s, old)
    var head = s.slice(0, index)
    var tail = s.slice(index + oldLen)
    log(oldLen, index, head, tail)
    return head + newString + tail
}


// 测试函数
var test_replace = function() {
    ensure(replace('hello, world', 'world', 'gua') === 'hello, gua', 'replace 测试 1')
    // 注意, 之前的这个测试写错了, 因为题目假设 old 存在并且只出现一次
    ensure(replace('hello', 'world', 'gua') != 'hello', 'replace 测试 2')
    ensure(replace('hello', 'll', 'gua') === 'heguao', 'replace 测试 3')
}




// =======
// 提示
// =======

// 1.1
// zfill
//     字符串拼接
//
//
// 1.2
// ljust
//     字符串拼接
//
//
// 1.3
// rjust
//     字符串拼接
//
//
// 1.4
// center
//     算好头尾再拼接
//
//
// 1.5
// is_space
//     循环检测
//
//
// 1.6
// is_digit
//     预定义数字
//     再循环检测
//
//
// 1.7
// strip_left
//     循环查找到第一个不为空格的字符的下标然后切片返回
//
//
// 1.8
// strip_left
//     和 1.7 类似, 注意好切片的下标
//
//
// 1.9
// strip
//     利用 1.7 1.8
//
//
// 1.10
// replace
//     查找切片 2 次再拼接
