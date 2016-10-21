// 2016/09/28
//
// ============
// 作业 6
//
// string 题目用到的知识还是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
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
        log('*** 测试失败:', message)
    }
}


// 作业 1
// 10 分钟做不出就看提示
//
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    if (!condition) {
        log('*** 测试失败', message)
    }
}

var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            log(i)
            return i
        }
    }
    return -1
}

// 测试函数, 自行实现
var test_find = function() {
    ensure(find('guagua', 'a') === 2, '测试一')
    ensure(find('melongua', 'o') === 4, '测试二')
}

test_find()


/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
注意, 这里假设了 s 字符串全是大写字母
*/
// 这里是两个字符串, 包含了大写字母和小写字母
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowercase = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(upper, s[i])
        // 字符串可以用加号拼接, 不明白可以 log 一下
        result += lower[index]
    }
    return result
}


/*
作业 2

定义一个函数
参数是一个字符串 s
返回大写后的字符串
注意, 假设 s 字符串全是小写字母

注意, 自行实现测试函数, 之后的题目都要求自行实现测试函数
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var log = function() {
    console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
    if (!condition) {
        log('*** 测试失败', message)
    }
}

var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            log(i)
            return i
        }
    }
    return -1
}

var uppercase = function(s) {
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var index = find(lower, s[i])
        result += upper[index]
    }
    return result
}

var test_uppercase = function() {
    ensure(uppercase('abcd') === 'ABCD', '测试二-1')
    ensure(uppercase('wxyz') === 'WXYz', '测试二-2')
}

test_uppercase()


/*
作业 3

实现 lowercase1
它能正确处理带 小写字母 的字符串
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var log = function() {
    console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
    if (!condition) {
        log('*** 测试失败', message)
    }
}

var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            log(i)
            return i
        }
    }
    return -1
}

var lowercase1 = function(s) {
    var result = ''
    var a = []
    for (var i = 0; i < s.length; i++) {
        var index = find(upper, s[i])
        //判断s[i]是大写还是小写
        if (index !== -1) {
            a[i] = lower[index]
        } else {
            a[i] = s[i]
        }
    }
    for (var i = 0; i < a.length; i++) {
        result += a[i]
    }
    log(result)
    return result
}

var test_lowercase1 = function() {
    ensure(lowercase1('HEllo') === 'hello', '测试三-1')
    ensure(lowercase1('WORLd') === 'World', '测试三-2')
}

test_lowercase1()


/*
作业 4

实现 uppercase1
它能正确处理带 大写字母 的字符串
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var log = function() {
    console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
    if (!condition) {
        log('*** 测试失败', message)
    }
}

var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            log(i)
            return i
        }
    }
    return -1
}

var uppercase1 = function(s) {
    var result = ''
    var a = []
    for (var i = 0; i < s.length; i++) {
        var index = find(lower, s[i])
        if (index !== -1) {
            a[i] = upper[index]
        } else {
            a[i] = s[i]
        }
    }
    for (var i = 0; i < a.length; i++) {
        result += a[i]
    }
    log(result)
    return result
}

var test_uppercase1 = function() {
    ensure(uppercase1('hellO') === 'HELLO', '测试四-1' )
    ensure(uppercase1('woRLD') === 'WORLd', '测试四-2')
}

test_uppercase1()


/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var log = function() {
    console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
    if (!condition) {
        log('*** 测试失败', message)
    }
}

var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            log(i)
            return i
        }
    }
    return -1
}

var encode1 = function(s) {
    var result = ''
    var a = []      //临时存放的数组
    for (var i = 0; i < s.length; i++) {
        //判断该字母是大写还是小写
        var index = find(lower, s[i])
        if (index !== -1) {                 //index不等于-1，说明此刻的s[i]为小写
            a[i] = lower[(index+1) % 26]
        } else {                            //s[i]为大写
            a[i] = upper[(index+1) % 26]
        }
    }
    for (var i = 0; i < a.length; i++) {
        result += a[i]
    }
    log(result)
    return result
}

var test_encode1 = function() {
    ensure(encode1('afz') === 'bga', '测试五-1')
    ensure(encode1('hez') === 'ifa', '测试五-2')
    ensure(encode1('ghd') === 'ijf', '测试五-3')
}

test_encode1()


/*
作业 6
实现 decode1 函数, 把作业 5 加密的密码解密为明文并返回
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var log = function() {
    console.log.apply(console, arguments)
}

var ensure = function(condition, message) {
    if (!condition) {
        log('*** 测试失败', message)
    }
}

var find = function(s1, s2) {
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            log(i)
            return i
        }
    }
    return -1
}

var decode1 = function(s) {
    var result = ''
    var a = []      //临时存放的数组
    for (var i = 0; i < s.length; i++) {
        //判断该字母是大写还是小写
        var index = find(lower, s[i])
        if (index !== -1) {                 //index不等于-1，说明此刻的s[i]为小写
            a[i] = lower[(index-1+26) % 26]
        } else {                            //s[i]为大写
            a[i] = upper[(index-1+26) % 26]
        }
    }
    for (var i = 0; i < a.length; i++) {
        result += a[i]
    }
    log(result)
    return result
}

var test_decode1 = function() {
    ensure(decode1('bga') === 'afz', '测试五-1')
    ensure(decode1('hez') === 'gdy', '测试五-2')
    ensure(decode1('ghd') === 'ijf', '测试五-3')
}

test_decode1()

/*
作业 7
实现 encode2
多了一个参数 shift 表示移的位数
*/
var encode2 = function(s, shift) {
    var result = ''
    var a = []      //临时存放的数组
    for (var i = 0; i < s.length; i++) {
        //判断该字母是大写还是小写
        var index = find(lower, s[i])
        if (index !== -1) {                 //index不等于-1，说明此刻的s[i]为小写
            a[i] = lower[(index+shift) % 26]    //解密
        } else {                            //s[i]为大写
            a[i] = upper[(index+shift) % 26]    //解密
        }
    }
    for (var i = 0; i < a.length; i++) {
        result += a[i]
    }
    log(result)
    return result
}

var test_encode2 = function() {
    ensure(encode2('afz', 2) === 'chb', '测试七-1')
    ensure(encode2('afz', 3) === 'dic', '测试七-2')
    ensure(encode2('afz', 4) === 'chb', '测试七-3')
}

test_encode2()


/*
作业 8
实现 decode2
多了一个参数 shift 表示移的位数
*/
var decode2 = function(s, shift) {
    var result = ''
    var a = []      //临时存放的数组
    for (var i = 0; i < s.length; i++) {
        //判断该字母是大写还是小写
        var index = find(lower, s[i])
        if (index !== -1) {                 //index不等于-1，说明此刻的s[i]为小写
            a[i] = lower[(index-shift+26) % 26]
        } else {                            //s[i]为大写
            a[i] = upper[(index-shift+26) % 26]
        }
    }
    for (var i = 0; i < a.length; i++) {
        result += a[i]
    }
    log(result)
    return result
}

var test_decode2 = function() {
    ensure(decode2('bga', 1) === 'afz', '测试八-1')
    ensure(decode2('bga', 2) === 'zey', '测试八-2')
    ensure(decode2('bga', 3) === 'afz', '测试八-3')
}

test_decode2()

/*
作业 9
实现 encode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var encode3 = function(s, shift) {
    var result = ''
    var a = []      //临时存放的数组
    for (var i = 0; i < s.length; i++) {
        //判断该字母是大写还是小写或者不是字母
        if (find(lower, s[i]) !== -1) {             //不等于-1，说明此刻的s[i]一定为小写
            var index_low = find(lower, s[i])
            a[i] = lower[(index_low+shift) % 26]    //解密
        } else if (find(upper, s[i] !== -1) {       //不等于-1，说明s[i]一定为大写
            var index_up = find(upper, s[i])
            a[i] = upper[(index_up+shift) % 26]
        } else {                                    //既不是大写又不是小写，说明s[i]不是字母
            a[i] = s[i]
        }
    }
    for (var i = 0; i < a.length; i++) {
        result += a[i]
    }
    log(result)
    return result
}

encode3('a fz1', 1)


/*
作业 10
实现 decode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var decode3 = function(s, shift) {

}


/*
作业 11
知乎有一个求助题, 破译密码的
链接在此
https://www.zhihu.com/question/28324597
这一看就是凯撒加密...
如果没思路, 可看本文件最后的提示
我把密码放在下面, 请解出原文
*/
var code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'

var decode4 = function(s) {

}



// =======
// 提示
// =======
/*

1, find
循环比较, 如果发现就返回
注意处理不存在的情况


2, uppercase
参考例子实现, 这个简单, 最好 log 一下搞清程序执行的流程和逻辑


3, lowercase1
因为可能字符串中带小写字符, 那么就要判断一下才能处理


4, uppercase1
同作业 3 一样


11, decode4
因为不知道加密的位移, 所以考虑把所有加密的可能都打印出来人肉挑选
*/
