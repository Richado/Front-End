// 2016/10/07
//
// ============
// 作业 10
//
//
// 注意, 提示在文件最末尾
// ============
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
//
var isPrime = function(n) {
    /*
    n 是 int
    判断 n 是否是素数(质数)
    */
    if (n < 2) {
        return true
    } else {
        for (var i = 2; i < n; i++) {
            if (n%i === 0) {
                // log(i)
                return false
            }
        }
        return true
    }
}
// isPrime(18)


// 作业 2
//
var primeNumbers = function() {
    /*
    返回 100 内的素数列表
    */
    var result = []
    for (var i = 1; i < 101; i++) {
        if (isPrime(i)) {
            result.push(i)
        }
    }
    return result
}
// primeNumbers()


// 作业 3
//当str中非首字母位置出现大写时，有bug(结果仍然显示为大写)
//
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var isLetter = function(letter) {
    if (lower.includes(letter)) {
        return true
    } else if (upper.includes(letter)) {
        return true
    } else {
        return false
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
            // log(i)
            return i
        }
    }
    return -1
}

var uppercase = function(s) {
    var result = ''
    if(find(lower, s) !== -1) {
        var index = find(lower, s)
        result += upper[index]
        return result
    } else {
        return s
    }
}

var capString = function(str) {
    /*
    给定一个英文句子 str（一个只有字母的字符串）
    返回「将句中所有单词变为有且只有首字母大写的形式」的 string
    */
    var newStr = ''
    var newArray = []
    if(isLetter(str[0])) {
        newArray.push(0)
        // log('0')
    }
    for (var i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            continue
        } else {
            if (isLetter(str[i+1])) {
                newArray.push(i+1)
            }
        }
    }
    for (var i = 0; i < str.length; i++) {
        if (newArray.includes(i)) {
            newStr += uppercase(str[i])
        } else {
            newStr += str[i]
        }
    }
    // return newArray
    return newStr
}
// capString("how do you do")


// 作业 4
//
var letterCount = function(str) {
    /*
    给定一个只包含字母的字符串，返回单个字母出现的次数
    考察字典的概念和使用
    返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

    // 可以使用 Object.keys 函数
    var obj = {
      foo: 1,
      bar: 2,
    }
    var a = Object.keys(obj)
    ["foo", "bar"]
    // log(a)

    参数 "hello"
    返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
    */
    var obj = {}
    // log(Object.keys(obj))
    for (var i = 0; i < str.length; i++) {
        if (Object.keys(obj).includes(str[i])) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }
    }
    var a = Object.keys(obj)
    var result = []
    for (var i = 0; i < a.length; i++) {
        var newArray = []
        newArray.push(a[i])
        newArray.push(obj[a[i]])
        result.push(newArray)
    }
    return result
}
// letterCount('helloopqeee')


// 作业 5
//
var param = {
    'foo': '1',
    'bar': 'far',
}
var queryFromObject = function(param) {
    /*
    param 是一个 object
    例子如下
    param 是 {
        'foo': 1,
        'bar': 'far',
    }
    返回如下 string, 顺序不做要求(foo bar 的顺序)
    foo=1&bar=far

    注意, 使用 Object.keys 函数
    */
    var a = Object.keys(param)
    var result = ``
    for (var i = 0; i < a.length; i++) {
        result += `${a[i]}=${param[a[i]]}`
        if (i < a.length-1) {
            result += `&`
        }
    }
    return result
}
// queryFromObject(param)


// 作业 6
//
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
    // log(result)
    return result
}

var argsFromQuery = function(queryString) {
    /*
    queryString 是一个 string
    例子如下
    queryString 是 foo=1&bar=far
    返回如下 object, 顺序不做要求(foo bar 的顺序)
    {
        'foo': 1,
        'bar': 'far',
    }
    */
    var obj = {}
    var newStr = split(queryString, '&')
    // log(newStr)
    var aNewStr = []
    for (var i = 0; i < newStr.length; i++) {
        aNewStr.push( split(newStr[i], '=') )
    }
    // log(aNewStr)
    for (var i = 0; i < aNewStr.length; i++) {
        obj[aNewStr[i][0]] = aNewStr[i][1]
    }
    // log(obj)
    return obj
}
// argsFromQuery('foo=1&bar=far')


//测试函数
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}

var test_isPrime = function() {
    ensure(isPrime(18), 'test_isPrime')
}

var test_primeNumbers = function() {
    ensure(primeNumbers() === [2,3,5,7,11,13,17,19,23,29,31,37,41,43,53,59,61,67,71,73,79,83,89,97], 'test_primeNumbers')
}

var test_capString = function() {
    ensure(capString('how do you do') === 'How Do You Do', 'test_capString')
}

var test_letterCount = function() {
    ensure(letterCount('hello') === [['h', 1], ['e', 1], ['l', 2], ['o', 1]], 'test_letterCount')
}

var test_querryFromObject = function() {
    ensure(queryFromObject(param) === 'foo=1&bar=far', 'test_querryFromObject')
}

var test_argsFromQuery = function() {
    ensure(argsFromQuery('foo=1&bar=far') === {
        'bar': 'far',
        'foo': '1',
    }, 'test_argsFromQuery')
}

var _main = function() {
    test_isPrime()
    test_primeNumbers()
    test_capString()
    test_letterCount()
    test_querryFromObject()
    test_argsFromQuery()
}

_main()
//测试函数



// 作业 7
//
var ajaxGet = function(url, callback) {
    /*
    利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
    url 是一个 URL
    callback 是一个函数, 在接受服务器响应后调用并传递参数给它
    本题不会就放弃
    */
    // 创建 AJAX 对象
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open('GET', url, true)
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            callback(r.response)
        } else {
            log('change')
        }
    }
    // 发送请求
    r.send()
}


// 作业 8
//
var ajax = function(request) {
    /*
    request 是一个 object, 有如下属性
    method, 请求的方法, string
    url, 请求的路径, string
    data, 请求发送的数据, 如果是 GET 方法则没这个值, string
    callback, 响应回调, function

    本题不会就放弃, 本题带了一个用法在下方
    */
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(request.method, request.url, true)
    // 设置发送的数据的格式
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            callback(r.response)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
    }
}

var r = {
    method: 'POST',
    url: '/login',
    data: 'username=gua',
    callback: function(response) {
        console.log('响应', response)
    }
}
ajax(r)
