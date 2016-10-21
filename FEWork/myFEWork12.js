// 2016/10/12
//
// ============
// 作业 12
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


// 字符     (ascii ->)       数字  (binary ->) 二进制字符串
//      (<- charFromAscii)         (<- int)


// 作业 1
//
var ascii = function(char) {
    /*
    char 是一个长度为 1 的 string
    这个函数返回这个字符的 ASCII 码

    这个答案用到了 s.charCodeAt(index) 函数, 例子如下
    'A'.charCodeAt(0) 返回 65
    'a'.charCodeAt(0) 返回 97

    字符在电脑中的存储是以数字的方式
    每个字符其实是用一个数字代表的, 这个方式叫做编码
    ASCII 码是一个通用的编码, 包含英文字符数字和常见符号

    这个作业答案我给了, 理解一下这件事就好, 不懂搜一下
    */
    return char.charCodeAt(0)
}


// 作业 2
//
var charFromAscii = function(code) {
    /*
    code 是一个 int
    返回 code 所表示的字符

    这个答案用到了 String.fromCharCode(code) 函数, 例子如下
    String.fromCharCode(97) 返回 'a'
    String.fromCharCode(65) 返回 'A'
    */
    return String.fromCharCode(code)
}


// 作业 3
//
var binary = function(n) {
    /*
    n 是一个不大于 255 的 int
    返回 n 的 8 位二进制形式的字符串
    例如 binary(7) 返回 '00000111'

    进制转换自行搜索或者论坛提问大家讨论吧
    */
    // div 被除数
    // remain 余数
    if (n > 255) {
        log('请输入一个小于255的整数!')
        return
    }
    var result = ''
    var a = []
    var div = n
    var remain = 0
    while (div > 0) {
        remain = div%2
        a.push(remain)
        div = Math.floor(div/2)
    }
    while (a.length < 8) {
        a.push(0)
    }
    for(var i = a.length-1; i >= 0; i--) {
        result = result + a[i]
    }
    return result
}


// 作业 4
// 调用 ascii() 函数
var myPow = function(n) {
    if (n === 0) {
        return 1
    }
    var sum = 2
    for (var i = 1; i < n; i++) {
        sum = 2 * sum
    }
    return sum
}

var int = function(bin) {
    /*
    bin 是一个 8 位二进制形式的字符串
    返回 bin 代表的数字
    例如 int('00000111') 返回 7

    进制转换自行搜索或者论坛提问大家讨论吧
    */
    var intArray = []
    var sum = 0
    for (var i = 0; i < bin.length; i++) {
        var b = bin[i]
        intArray.push(ascii(b)-48)
    }
    for (var i = 0; i < intArray.length; i++) {
        var n = 8-i-1
        var a = intArray[i]
        sum += a*myPow(n)
    }
    return sum
}


// 字符     (ascii ->)       数字  (binary ->)   二进制字符串
//      (<- charFromAscii)         (<- int)
// 字符串   （binaryStream ->）    二进制字符串
//          (<- stringFromBinary)


// 作业 5
// 调用 binary()、ascii() 函数
var binaryStream = function(s) {
    /*
    s 是一个 string
    返回 s 的二进制字符串
    例如 binaryStream('Man') 返回
    '010011010110000101101110'
    "010011010110000101101110"

    使用上面的函数
    */
    var result = ''
    for (var i = 0; i < s.length; i++) {
        var myChar = s[i]
        result += binary(ascii(myChar))
    }
    return result
}


// 作业 6
// 调用 int()、charFromAscii() 函数
var stringFromBinary = function(bins) {
    /*
    bins 是一个二进制形式的字符串
    返回 bins 代表的原始字符串
    例如 stringFromBinary('01001101 01100001 01101110') 返回 'Man'
                          01001101 01100001 01101110
    使用上面的函数
    */
    // 数字字符串 -> 二进制字符串 -> 数字 -> 字符 -> 字符串
    var result = ''
    var begin = 0
    for (var i = 0; i < bins.length; i += 8) {
        var binaryString = bins.slice(i, i+8)
        result += charFromAscii(int(binaryString))
    }
    return result
}


/*
    s 是一个 string
    返回 s 的 base64 编码

Base64是一种基于 64 个可打印字符来表示数据的方法
它用每6个比特为一个单元，对应某个可打印字符
ASCII 码一个字符是 8 比特, 也就是一字节
3 个字节就有 24 个比特, 对应了 4 个 base64 单元

如下所示
原始信息        M        a        n
ASCII         77       7        110
二进制         01001101 01100001 01101110
              01001101 01100001 01101110
4 个单元       010011 010110 000101 101110
每个单元转换后  19  22  5  46

转换后每个 base64 单元都是一个 0-63 的数字
因为 6 比特表示的范围就是这么大
然后数字到字符串的转换是下面这段字符串取下标所得
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

那么 Base64 编码结果就是    T   W   F  u

所以 base64Encode('Man') 返回 'TWFu'

// 字符串 -> 二进制字符串 -> 按6位分的二进制字符串 -> 数字 -> Base64 字符 （charFromBase64） -> Base64 字符串


既然 3 个字节转换为 4 个 base64 单元
那么 1 个字节怎么办呢?
答案是用 0 补出 3 字节, 如下所示
原始信息    M
ASCII     77       0        0
二进制     01001101 00000000 00000000
          01001101 00000000 00000000
4 个单元   010011 010000 000000 000000
单元转换后  19 16 0 0
因为末尾是强行补上的, 所以给他用 '=' 凑出字符(这是一个例外)
所以 base64Encode('M') 返回 'TQ=='

// 字符串 -> 二进制字符串 -> 补0 成为三字节的 二进制字符串 -> 按6位分的二进制字符串 -> 数字 -> Base64字符 -> Base64字符串

*/

// 作业 7
//
var charFromBase64 = function(code) {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    if (code === 0) {
        return '='
    }
    return str[code]
}

var base64Encode = function(s) {
    /*
    // 3字节 的转换
    // 字符串s -> 二进制字符串 -> 按6位分的二进制字符串 -> 数字 -> Base64 字符 （charFromBase64） -> Base64 字符串
    // 1字节 的转换
    // 字符串s -> 二进制字符串 -> 补0 成为三字节的 二进制字符串 -> 按6位分的二进制字符串 -> 数字 -> Base64字符 -> Base64字符串
    */
    var binaryString = binaryStream(s)
    var result = ''
    // 如果是三个字节的转换，对 binaryString 补0，使之达到三个字节
    if (binaryString.length < 24) {
        while (binaryString.length < 24) {
            binaryString += '0'
        }
    }
    for (var i = 0; i < binaryString.length; i += 6) {
        // 以六个二进制字符串为一个单元
        var newBinaryString = binaryString.slice(i, i+6)
        // 将每个Base64单元补成八位，以求出其数字
        var myBinaryString = `00${newBinaryString}`
        // 先对每个Base64单元求出其数字，再求出其对应的Base64字符
        // 求出字符后，将该字符累加至 result 字符串中
        result += charFromBase64(int(myBinaryString))
    }
    // 返回该字符串
    return result
}
// base64Encode('Man')
// base64Encode('M')



// 作业 8
//
var Base64 = function(char) {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    if (char === '=') {
        return 0
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i
        }
    }
}

var base64Decode = function(s) {
    /*
    s 是一个 base64 编码后的字符串
    解码 s 并返回
    例如 base64Decode('TWFu') 返回 'Man'
    */

    var binaryString = ''
    for (var i = 0; i < s.length; i++) {
        // 得到 按6位为一组的二进制字符串
        var sixBinaryString = binary(Base64(s[i]))
        var newBinaryString = sixBinaryString.slice(2)
        // 得到 原始二进制字符串
        binaryString += newBinaryString
    }
    // 根据 原始二进制字符串 得到 字符串
    var result = stringFromBinary(binaryString)
    return result
}
// base64Decode('TWFu')
// base64Decode('TQ==')










/*













*/
