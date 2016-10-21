// 2016/10/19
//
// ============
// 作业 15
//
//
// 本次作业没有提示的地方需要自行搜索
// 别忘了用 github 管理作业的进度
// ============
// 



// 作业 1
//
// 实现函数 GuaOptions1, 功能见注释描述
var templateCheck = function(string) {
    var t = `
        <div class="div-container">
            <input type="checkbox" name="${string}">
            <span>${string}</span>
        </div>
    `
    return t
}

var options = ['hello', 'world']

var GuaOptions1 = function(options) {
    /*
    options 是一个包含 string 的数组
    本函数对每个 string 生成一个复选框和文本
    append 到 body 中
    示意图如下

    +-+
    | | string
    +-+

    */
    var allOptions = []
    for (var i = 0; i < options.length; i++) {
        var a = options[i]
        allOptions.push(templateCheck(a))
    }
    $('body').append(allOptions.join(''))
}


// 作业 2
//
var templateCheck = function(string) {
    var t = `
        <div class="div-container">
            <input class="checkbox1" type="checkbox" name="${string}">
            <span>${string}</span>
        </div>
    `
    return t
}

var templateButton = function() {
    var t = `
        <input id="checkboxAll" type="checkbox" name="checkboxAll">
        <span>全选</span>
        <input id="checkboxNot" type="checkbox" name="checkboxNot">
        <span>反选</span>
    `
    return t
}

var options = ['hello', 'world']

var GuaOptions2 = function(options) {
    /*
    options 是一个包含 string 的数组
	本题和作业 1 一样的功能 只是多了 2 个按钮
    全选 和 反选
    */
    var allOptions = []
    for (var i = 0; i < options.length; i++) {
        var a = options[i]
        allOptions.push(templateCheck(a))
    }
    $('body').append(allOptions.join(''))
    //
    $('body').append(templateButton())
    //
    $('#checkboxAll').on('click', function(event) {
        // DOM
        var checkAll = document.querySelector('#checkboxAll')
        var allCheckBoxs = document.querySelectorAll('.checkbox1')
        for (var i = 0; i < allCheckBoxs.length; i++) {
            var a = allCheckBoxs[i]
            if (checkAll.checked) {
                a.checked = true
            } else {
                a.checked = false
            }
        }
    })
    //
    $('#checkboxNot').on('click', function(event) {
        // DOM
        var checkNot = document.querySelector('#checkboxNot')
        var allCheckBoxs = document.querySelectorAll('.checkbox1')
        for (var i = 0; i < allCheckBoxs.length; i++) {
            var a = allCheckBoxs[i]
            if (a.checked) {
                a.checked = false
            } else {
                a.checked = true
            }
        }
    })
}


// 作业 3
//
var templateCheck = function(string) {
    var t = `
        <div class="div-container">
            <input class="checkbox1" type="checkbox" name="${string}">
            <span>${string}</span>
        </div>
    `
    return t
}

var templateButton = function() {
    var t = `
        <button class="button-all" type="button" name="button">全选</button>
        <button class="button-notall" type="button" name="button">反选</button>
    `
    return t
}

var initChecked = function(classOfCheckbox, options) {
    var allCheckBoxs = $(classOfCheckbox)
    for (var i = 0; i < allCheckBoxs.length; i++) {
        var a = allCheckBoxs[i]
        $(a).prop('checked', options[i]['checked'])
    }
}

var options = [
    {
        'text': 'hello',
        'checked': false,
    },
    {
        'text': 'world',
        'checked': true,
    }
]

var GuaOptions3 = function(options) {
    /*
    options 是一个包含如下 object 的数组
    text 是文本描述
    checked 是布尔值, 表示是否打勾
    {
    	'text': 'string',
        'checked': true,
    }
	本题和作业 2 一样的功能, 但是参数变了
	并且要求在初始化的时候要按照相应的值对相应的复选框打勾
    */
    var allOptions = []
    for (var i = 0; i < options.length; i++) {
        var a = options[i]['text']
        allOptions.push(templateCheck(a))
    }
    $('body').append(allOptions.join(''))
    //
    $('body').append(templateButton())
    //
    initChecked('.checkbox1', options)
    //
    $('.button-all').on('click', function(event) {
        $('.checkbox1').prop('checked', true)
    })
    //
    $('.button-notall').on('click', function(event) {
        // $('.checkbox1').prop('checked', false)
        var allCheckBoxs = $('.checkbox1')
        for (var i = 0; i < allCheckBoxs.length; i++) {
            var a = allCheckBoxs[i]
            if ($(a).prop('checked')) {
                $(a).prop('checked', false)
            } else {
                $(a).prop('checked', true)
            }
        }
    })
}


// 作业 4
//
var options = [
    {
        'text': 'helloFalse',
        'checked': false,
    },
    {
        'text': 'worldTrue',
        'checked': true,
    },
    {
        'text': 'foo',
        'checked': true,
    },
    {
        'text': 'bar',
        'checked': false,
    },
]

var templateCheck = function(string) {
    var t = `
        <div class="div-container">
            <input class="checkbox1" type="checkbox" name="${string}">
            <span>${string}</span>
        </div>
    `
    return t
}

var templateButton = function() {
    var t = `
        <button class="button-all" type="button" name="button">全选</button>
        <button class="button-notall" type="button" name="button">反选</button>
        <button class="button-save">Save</button>
        <button class="button-load">Load</button>
    `
    return t
}

var initChecked = function(options) {
    var allCheckBoxs = $('.checkbox1')
    var numOfCheckbox = options.length
    for (var i = 0; i < allCheckBoxs.length; i++) {
        var a = allCheckBoxs[i]
        $(a).prop('checked', options[i%numOfCheckbox]['checked'])
    }
}

var GuaOptions4 = function(options) {
    /*
	本题和作业 3 一样的功能
    但是多了 2 个按钮 save 和 load
    save 按钮点击的时候会保存当前的 options 状态到 localStorage(用 JSON)
    load 按钮点击的时候会从 localStorage 中读取保存的信息并更新界面
    */
    var allOptions = []
    for (var i = 0; i < options.length; i++) {
        var a = options[i]['text']
        allOptions.push(templateCheck(a))
    }
    //
    $('body').append(allOptions.join(''))
    //
    $('body').append(templateButton())
    //
    initChecked(options)
    //
    $('.button-all').on('click', function(event) {
        console.log('全选')
        $('.checkbox1').prop('checked', true)
    })
    //
    $('.button-notall').on('click', function(event) {
        var allCheckBoxs = $('.checkbox1')
        for (var i = 0; i < allCheckBoxs.length; i++) {
            var a = allCheckBoxs[i]
            if ($(a).prop('checked')) {
                $(a).prop('checked', false)
            } else {
                $(a).prop('checked', true)
            }
        }
    })
    //
    $('.button-save').on('click', function(event) {
        var status = []
        var allCheckBoxs = $('.checkbox1')
        for (var i = 0; i < allCheckBoxs.length; i++) {
            var a = allCheckBoxs[i]
            status.push($(a).prop('checked'))
        }
        localStorage.sta = JSON.stringify(status)
        console.log('当前checked状态：', localStorage.sta)
    })
    //
    $('.button-load').on('click', function(event) {
        var status = JSON.parse(localStorage.sta)
        var allCheckBoxs = $('.checkbox1')
        for (var i = 0; i < allCheckBoxs.length; i++) {
            var a = allCheckBoxs[i]
            console.log('load...', status[i])
            $(a).prop('checked', status[i])
        }
        console.log('load...complete!')
    })
}
