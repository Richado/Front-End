// 16/09/20
// 作业 3
//
// 作业开始
// 注意, 作业中提到的颜色我们不关心

// 1
// 实现一个矩形函数
// x y 是矩形左上角坐标
// w h 是宽高
// rect(x, y, w, h)
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)

    var i = 0
    while (i < 4) {
        if (i%2) {
            forward(h)
        } else {
            forward(w)
        }
        right(90)
        i++
    }
}

rect(-30, -30, 50, 20)
// 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)

    var i = 0
    while (i < 4) {
        if (i%2) {
            forward(h)
        } else {
            forward(w)
        }
        right(90)
        i++
    }
}

var center_rect = function(x, y, w, h) {
    var x1 = x-(w/2)
    var y1 = y-(h/2)
    rect(x1, y1, w, h)
}

center_rect(0, 0, 50, 30)
// 3
// 实现一个圆形函数
// x y 是圆心坐标
// r 是半径
// circle(x, y, r)
#
// 提示, 我们以正 36 边形为圆
var polygon = function(x, y, l, n) {
    jump(x, y)
    var angle = 360/n

    var i = 0
    while (i < n) {
        forward(l)
        right(angle)
        i++
    }
}

var circle = function(x, y, r) {
    var l = 2*3.14*r/36
    var x1 = x-l/2
    var y1 = y-r

    polygon(x1, y1, l, 36)
}

circle(-50, -50, 30)
// 4
// 实现一个五角星函数
// x y 是五角星横边左边坐标
// length 是一条线的长度
// wujcxy(x, y, length)
var wujcxy = function(x, y, length) {

}

// 5
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()
#
// 注意, 你可以添加 x y w h 参数让国旗画在任意地方, 任意尺寸
// 注意, 以下所有国旗同理

// 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（调用 5 次，不要求角度朝向，只要5个五角星即可）
// china()

// 7
// 实现一个函数画法国国旗
// france()

// 8
// 画德国国旗
// germany()

// 9
// 画 冈比亚国旗
// gambia()

// 10
// 画 瑞士国旗
// switzerland()

// 11
// 画朝鲜国旗
// 分别是 圆 矩形 五角星
// 提示, 使用之前定义的函数
// northkorea()
