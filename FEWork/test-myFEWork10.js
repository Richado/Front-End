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
