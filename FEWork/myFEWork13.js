// 2016/10/14
//
// ============
// 作业 13
//
//
// 本次作业如果做不出来, 可以大家一起讨论一下
// ============
//



// 作业 1
//
// 实现一个 GuaAlert 函数, 如下
var GuaAlert = function(title, message) {
    /*
    title 是 string
    message 是 string

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮
    点击 OK 按钮关闭弹窗
    */
    var t = `
    <div class="gua-alert">
        <div class="gua-title">
            <h2>${title}</h2>
        </div>
        <div class="gua-message">
            ${message}
        </div>
        <button class='button-close' type="button" name="button">OK</button>
    </div>
    `
    var oBody = document.querySelector('body')
    oBody.insertAdjacentHTML('beforeend', t)
    var guaAlert = document.querySelector('.gua-alert')
    guaAlert.setAttribute(`style`, `position: fixed; top: 0px; left: 0px; background: black;
                                    opacity: 0.5; width: 100%; height: 100%;
    `)
    var guatitle = document.querySelector('.gua-title')
    guatitle.setAttribute(`style`, `background-color: lightblue; text-align: center;`)
    var guamessage = document.querySelector('.gua-message')
    guamessage.setAttribute(`style`, `background-color: lightyellow; margin-top: 40px;`)
    var buttonClose = document.querySelector('.button-close')
    buttonClose.setAttribute(`style`, `position: fixed; bottom: 50px; left: 50px;`)
    buttonClose.addEventListener('click', function(event) {
        console.log('close')
        guaAlert.remove()
    })
}


// 作业 2
//
var GuaAlert2 = function(title, message, callback) {
    /*
    title 是 string
    message 是 string
    callback 是一个接受一个 bool 类型参数的函数

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
    var t = `
    <div class="gua-alert">
        <div class="gua-title">
            <h2>${title}</h2>
        </div>
        <div class="gua-message">
            ${message}
        </div>
        <button class='button-close' type="button" name="button">OK</button>
        <button class='button-cancel'>Cancle</button>
    </div>
    `
    var oBody = document.querySelector('body')
    oBody.insertAdjacentHTML('beforeend', t)

    var guaAlert = document.querySelector('.gua-alert')
    guaAlert.setAttribute(`style`, `position: fixed; top: 0px; left: 0px; background: black;
                                    opacity: 0.5; width: 100%; height: 100%;
    `)

    var guatitle = document.querySelector('.gua-title')
    guatitle.setAttribute(`style`, `background-color: lightblue; text-align: center;`)

    var guamessage = document.querySelector('.gua-message')
    guamessage.setAttribute(`style`, `background-color: lightyellow; margin-top: 40px;`)

    var buttonClose = document.querySelector('.button-close')
    buttonClose.setAttribute(`style`, `position: fixed; bottom: 50px; left: 50px;`)
    buttonClose.addEventListener('click', function(event) {
        // console.log('close')
        callback(true)
        guaAlert.remove()
    })

    var buttonCancel = document.querySelector('.button-cancel')
    buttonCancel.setAttribute(`style`, `position: fixed; bottom: 50px; right: 50px;`)
    buttonCancel.addEventListener('click', function(event) {
        // console.log('cancel')
        callback(false)
        guaAlert.remove()
    })
}

// GuaAlert2('test-2', 'hello world', function(condition) {
//     if (condition) {
//         console.log('OK')
//     } else {
//         console.log('Cancel')
//     }
// })


// 作业 3
//
var GuaPrompt = function(title, callback) {
    /*
    title 是 string
    callback 是一个如下的函数
    function(clickOk, input) {
        // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
        // input 是 string
    }

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题
    包含一个 input 让用户输入信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
    var t = `
    <div class="gua-alert">
        <div class="gua-title">
            <h2>${title}</h2>
        </div>

        <div class='div-login'>
            <input id='id-input' name="name">
            <button class='button-close' type="button" name="button">OK</button>
            <button class='button-cancel'>Cancle</button>
        </div>
    </div>
    `
    var oBody = document.querySelector('body')
    oBody.insertAdjacentHTML('beforeend', t)

    var guaAlert = document.querySelector('.gua-alert')
    guaAlert.setAttribute(`style`, `position: fixed; top: 0px; left: 0px; background: black;
                                    opacity: 0.5; width: 100%; height: 100%;
    `)

    var guatitle = document.querySelector('.gua-title')
    guatitle.setAttribute(`style`, `background-color: lightblue; text-align: center;`)

    // var guamessage = document.querySelector('.gua-message')
    // guamessage.setAttribute(`style`, `background-color: lightyellow; margin-top: 40px;`)

    var login = document.querySelector('.div-login')
    login.setAttribute(`style`, `position:relative; bottom: -200px;
                                 background-color: lightblue; width: 200px;
                                 height: 200px; margin: 0 auto;`)

    var oInput = document.querySelector('#id-input')
    oInput.setAttribute('style', 'position: absolute; bottom: 100px; left: 10px;')

    var buttonClose = document.querySelector('.button-close')
    buttonClose.setAttribute(`style`, `position: absolute; bottom: 50px; left: 30px;`)
    buttonClose.addEventListener('click', function(event) {
        // console.log('close')
        callback(true, '这是输入的内容')
        guaAlert.remove()
    })

    var buttonCancel = document.querySelector('.button-cancel')
    buttonCancel.setAttribute(`style`, `position: absolute; bottom: 50px; right: 30px;`)
    buttonCancel.addEventListener('click', function(event) {
        // console.log('cancel')
        callback(false)
        guaAlert.remove()
    })
}

// GuaPrompt('test-3', function(condition, input) {
//     if (condition) {
//         console.log('点击的是OK按钮: ', input);
//     } else {
//         console.log('点击的是Cancel按钮');
//     }
// })


// 作业 4
//
var GuaActions = function(title, actions, callback) {
    /*
    title 是 string
    actions 是一个包含 string 的数组
    callback 是一个如下的函数
    function(index) {
        // index 是下标, 具体如下
        // index 如果是 -1 表明用户点击了 cancel
    }

    这个函数生成一个弹窗页面
    弹窗包含 title 作为标题
    actions 里面的 string 作为标题生成按钮
    弹窗还包含一个 Cancel 按钮
    点击按钮的时候, 调用 callback(index)
    */
    var t = `
    <div class="gua-alert">
        <div class="gua-title">
            <h2>${title}</h2>
        </div>

        <div class='div-login'>
            <input id='id-input' name="name">
            <button class='button-cancel'>Cancle</button>
        </div>
    </div>
    `

    var oBody = document.querySelector('body')
    oBody.insertAdjacentHTML('beforeend', t)

    // <button class='button-actions' type="button" name="button">${actions[0]}</button>
    for (var i = 0; i < actions.length; i++) {
        var b = `<button class='button-actions' id='${i+1}'>${actions[i]}</button>`
        var oLogin = document.querySelector('.div-login')
        oLogin.insertAdjacentHTML('beforeend', b)
    }

    var guaAlert = document.querySelector('.gua-alert')
    guaAlert.setAttribute(`style`, `position: fixed; top: 0px; left: 0px; background: black;
                                    opacity: 0.5; width: 100%; height: 100%;
    `)

    var guatitle = document.querySelector('.gua-title')
    guatitle.setAttribute(`style`, `background-color: lightblue; text-align: center;`)

    // var guamessage = document.querySelector('.gua-message')
    // guamessage.setAttribute(`style`, `background-color: lightyellow; margin-top: 40px;`)

    var login = document.querySelector('.div-login')
    login.setAttribute(`style`, `position:relative; bottom: -200px;
                                 background-color: lightblue; width: 200px;
                                 height: 200px; margin: 0 auto;`)

    var oInput = document.querySelector('#id-input')
    oInput.setAttribute('style', 'position: absolute; bottom: 100px; left: 10px;')

    var buttonActions = document.querySelectorAll('.button-actions')
    for (var i = 0; i < buttonActions.length; i++) {
        buttonActions[i].setAttribute(`style`, `position: absolute;`)
        buttonActions[i].style.bottom = `${i*20}px`;
        buttonActions[i].addEventListener('click', function(event) {
            // console.log('close')
            callback(event.target.id)
            guaAlert.remove()
        })
    }

    var buttonCancel = document.querySelector('.button-cancel')
    buttonCancel.setAttribute(`style`, `position: absolute; top: 0px; right: 0px;`)
    buttonCancel.addEventListener('click', function(event) {
        // console.log('cancel')
        callback(-1)
        guaAlert.remove()
    })
}

// GuaActions('test-4', ['test-button1', 'test-button2', 'test-button3'], function(index) {
//     if (index === -1) {
//         console.log('点击的是Cancel')
//     } else {
//         console.log(`点击的是第${index}个按钮`)
//     }
// })
