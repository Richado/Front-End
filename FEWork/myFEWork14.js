// 2016/10/17
//
// ============
// 作业 14
//
//
// 本次作业纯属暖身, 随意
// ============
//


// 作业 1
//
// 扩充上课时候做的 slide 库, 添加一个功能, 当鼠标移动到小圆点上的时候, 播放那张图片
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>slide</title>
        <style>
            .vertical-center {
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }
            .imgs-container {
                position: relative;
                width: 440px;
                height: 370px;
                overflow: hidden;
            }
            .image {
                position: absolute;
                display: none;
            }
            .active-image {
                display: block;
            }
            .button-left {
                position: absolute;
                left: 0px;
            }
            .button-right {
                position: absolute;
                right: 0px;
            }
            .button {
                background: lightblue;
                opacity: 0.5;
                color: white;
            }
            .active-button {
                opacity: 1;
                color: black;
            }
            .imgs-indicators-container {
                position: absolute;
                text-align: center;
                width: 100%;
                bottom: 2px;
            }
            .image-indicators {
                display: inline-block;
                background: lightgrey;
                opacity: 0.5;
                border-radius: 50%;
                padding: 0 5px;
            }
            .active-image-indicators {
                opacity: 1;
                background: black;
                color: white;
            }
        </style>
    </head>
    <body>
        <div class="imgs-container" data-index="0" data-imgs="6">
            <img class="image active-image" src="imgs/1.jpg" alt="1.jpg" />
            <img class="image" src="imgs/2.jpg" alt="2.jpg" />
            <img class="image" src="imgs/3.jpg" alt="3.jpg" />
            <img class="image" src="imgs/4-1.jpg" alt="4.jpg" />
            <img class="image" src="imgs/5-1.jpg" alt="5.jpg" />
            <img class="image" src="imgs/6.jpg" alt="6.jpg" />
            <button class="button-left vertical-center button" type="button" name="button">Pre</button>
            <button class="button-right vertical-center button" type="button" name="button">Next</button>

            <div class="imgs-indicators-container">
                <div class="image-indicators active-image-indicators">1</div>
                <div class="image-indicators">2</div>
                <div class="image-indicators">3</div>
                <div class="image-indicators">4</div>
                <div class="image-indicators">5</div>
                <div class="image-indicators">6</div>
            </div>
        </div>

        <script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.js"></script>
        <script type="text/javascript">
            var indexOfElement = function(element) {
                var parent = element.parentElement
                for (var i = 0; i < parent.children.length; i++) {
                    var e = parent.children[i]
                    if (e === element) {
                        return i
                    }
                }
            }

            var play = function(b) {
                $('.active-image').removeClass('active-image')
                $('.active-image-indicators').removeClass('active-image-indicators')
                //
                var index = $('.imgs-container').data('index')
                // console.log(index)
                var imgs = $('.imgs-container').data('imgs')
                // console.log(imgs)
                var i = (index + b + imgs) % imgs
                // console.log(i)
                $('.imgs-container').data('index', i)
                //
                var activeImage = $($('.image')[i])
                activeImage.addClass('active-image')
                //
                var activeIndicator = $($('.image-indicators')[i])
                activeIndicator.addClass('active-image-indicators')
            }

            var playIndicators = function(activeI) {
                $('.active-image').removeClass('active-image')
                $('.active-image-indicators').removeClass('active-image-indicators')

                // var activeI = indexOfElement(event.target)
                // console.log(activeI)
                $('.imgs-container').data('index', activeI)
                //
                var activeImage = $($('.image')[activeI])
                activeImage.addClass('active-image')
                //
                var activeIndicator = $($('.image-indicators')[activeI])
                activeIndicator.addClass('active-image-indicators')
            }

            $('.button').on('click', function(event) {
                if ($(event.target).hasClass('button-left')) {
                    play(-1)
                } else {
                    play(1)
                }
            })
            // $('.image-indicators').on('click', function(event) {
            //     var activeI = indexOfElement(event.target)
            //     playIndicators(activeI)
            // })
            $('.image-indicators').on('mouseover', function(event) {
                var activeI = indexOfElement(event.target)
                playIndicators(activeI)
            })
        </script>
    </body>
</html>





// 作业 2
//
// 扩充上课时候做的 slide 库, 添加一个功能, 当鼠标点击小圆点的时候, 播放那张图片




// 作业 3
//
// 扩充上课时候做的 slide 库, 添加一个功能
// 小圆点被一系列缩略图取代
// 鼠标点击缩略图播放那张图片
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>slide-3</title>
        <style>
            .vertical-center {
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }
            .imgs-container {
                position: relative;
                width: 462px;
                height: 370px;
                overflow: hidden;
            }
            .image {
                position: absolute;
                display: none;
            }
            .active-image {
                display: block;
            }
            .button-left {
                position: absolute;
                left: 0px;
            }
            .button-right {
                position: absolute;
                right: 0px;
            }
            .button {
                background: lightblue;
                opacity: 0.5;
                color: white;
            }
            .active-button {
                opacity: 1;
                color: black;
            }
            .imgs-indicators-container {
                position: relative;
                text-align: center;
                width: 440px;
                bottom: 2px;
            }
            .image-indicators {
                display: inline-block;
                background: lightgrey;
                opacity: 0.5;
                border-radius: 50%;
                padding: 0 5px;
            }
            .active-image-indicators {
                opacity: 1;
                background: black;
                color: white;
            }
            .image-ab {
                position: relative;
                overflow: hidden;
                display: inline-block;
                bottom: -6px;
                background: lightblue;
                width: 80px;
                opacity: 0.5;
            }
            .active-image-ab {
                opacity: 1;
            }
            .ab {
                display: block;
                margin: 0 auto;
            }
        </style>
    </head>
    <body>
        <div class="imgs-container" data-index="0" data-imgs="6">
            <img class="image active-image" src="imgs/1.jpg" alt="1.jpg" />
            <img class="image" src="imgs/2.jpg" alt="2.jpg" />
            <img class="image" src="imgs/3.jpg" alt="3.jpg" />
            <img class="image" src="imgs/4-1.jpg" alt="4.jpg" />
            <img class="image" src="imgs/5-1.jpg" alt="5.jpg" />
            <img class="image" src="imgs/6.jpg" alt="6.jpg" />
            <button class="button-left vertical-center button" type="button" name="button">Pre</button>
            <button class="button-right vertical-center button" type="button" name="button">Next</button>
        </div>

        <!-- <div class="imgs-indicators-container">
            <div class="image-indicators active-image-indicators"><img src="images/1-s.jpg" alt="" /></div>
            <div class="image-indicators">2</div>
            <div class="image-indicators">3</div>
            <div class="image-indicators">4</div>
            <div class="image-indicators">5</div>
            <div class="image-indicators">6</div>
        </div> -->

        <div class="image-ab-container">
            <div class="image-ab active-image-ab">
                <img class="ab" src="imgs/ab1.jpg" alt="" />
            </div>
            <div class="image-ab">
                <img class="ab" src="imgs/ab2.jpg" alt="" />
            </div>
            <div class="image-ab">
                <img class="ab" src="imgs/ab3.jpg" alt="" />
            </div>
            <div class="image-ab">
                <img class="ab" src="imgs/ab4.jpg" alt="" />
            </div>
            <div class="image-ab">
                <img class="ab" src="imgs/ab5.jpg" alt="" />
            </div>
            <div class="image-ab">
                <img class="ab" src="imgs/ab6.jpg" alt="" />
            </div>
        </div>

        <script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.js"></script>
        <script type="text/javascript">
            var indexOfElement = function(element) {
                var parent = element.parentElement
                for (var i = 0; i < parent.children.length; i++) {
                    var e = parent.children[i]
                    if (e === element) {
                        return i
                    }
                }
            }

            var play = function(b) {
                $('.active-image').removeClass('active-image')
                $('.active-image-ab').removeClass('active-image-ab')
                //
                var index = $('.imgs-container').data('index')
                // console.log(index)
                var imgs = $('.imgs-container').data('imgs')
                // console.log(imgs)
                var i = (index + b + imgs) % imgs
                // console.log(i)
                $('.imgs-container').data('index', i)
                //
                var activeImage = $($('.image')[i])
                activeImage.addClass('active-image')
                //
                var activeIndicator = $($('.image-ab')[i])
                activeIndicator.addClass('active-image-ab')
            }

            var playIndicators = function(activeI) {
                $('.active-image').removeClass('active-image')
                $('.active-image-ab').removeClass('active-image-ab')

                // var activeI = indexOfElement(event.target)
                // console.log(activeI)
                $('.imgs-container').data('index', activeI)
                //
                var activeImage = $($('.image')[activeI])
                activeImage.addClass('active-image')
                //
                var activeIndicator = $($('.image-ab')[activeI])
                activeIndicator.addClass('active-image-ab')
            }

            $('.button').on('click', function(event) {
                if ($(event.target).hasClass('button-left')) {
                    play(-1)
                } else {
                    play(1)
                }
            })
            // $('.image-indicators').on('click', function(event) {
            //     var activeI = indexOfElement(event.target)
            //     playIndicators(activeI)
            // })
            $('.image-ab').on('click', function(event) {
                var activeI = indexOfElement(event.target.parentElement)
                playIndicators(activeI)
            })
        </script>
    </body>
</html>
              
                
                

// 作业 4
// 函数封装
// 用一个函数传递图片 URL 参数来创建一个 slide
// 函数如下
var GuaSlide = function(element, images) {
    /*
    element 是一个 div 容器, DOM 类型, 创建的 slide 就 append 到这个容器中
    images 是一个包含了图片地址的 array
    */
    var templateImage = function(imageUrl, i) {
        var t = `<img class="image" src="${imageUrl}" data-imgIndex="${i}" alt="1.jpg" />`
        return t
    }
    var templateIndicators = function(i) {
        var t = `<div class="image-indicators" data-indicatorsIndex="${i}">${i+1}</div>`
        return t
    }

    var numberOfImgs = images.length
    var allImages = []
    for (var i = 0; i < numberOfImgs; i++) {
        var a = images[i]
        allImages.push(templateImage(a, i))
    }
    //
    var allImageIndicators = []
    for (var i = 0; i < numberOfImgs; i++) {
        allImageIndicators.push(templateIndicators(i))
    }

    var t = `
    <div class="imgs-container" data-index="0" data-imgs="${numberOfImgs}">
        ${allImages.join('')}
        <button class="button-left vertical-center button" type="button" name="button">Pre</button>
        <button class="button-right vertical-center button" type="button" name="button">Next</button>

        <div class="imgs-indicators-container">
            ${allImageIndicators.join('')}
        </div>
    </div>
    `
    $(element).append(t)

    var css = `
    <style>
        .vertical-center {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }
        .imgs-container {
            position: relative;
            width: 440px;
            height: 370px;
            overflow: hidden;
        }
        .image {
            position: absolute;
            display: none;
        }
        .active-image {
            display: block;
        }
        .button-left {
            position: absolute;
            left: 0px;
        }
        .button-right {
            position: absolute;
            right: 0px;
        }
        .button {
            background: black;
            opacity: 0.5;
            color: white;
            border: 0;
            height: 70px;
            width: 40px;
        }
        .active-button {
            opacity: 1;
            color: black;
        }
        .imgs-indicators-container {
            position: absolute;
            text-align: center;
            width: 100%;
            bottom: 2px;
        }
        .image-indicators {
            display: inline-block;
            background: black;
            opacity: 0.5;
            border-radius: 50%;
            padding: 0 5px;
            color: white;
            margin: 2px;
        }
        .active-image-indicators {
            opacity: 1;
            background: red;
            color: white;
        }
    </style>
    `
    $('head').append(css)
    $('[data-imgIndex="0"]').addClass('active-image')
    $('[data-indicatorsIndex="0"]').addClass('active-image-indicators')

    var indexOfElement = function(element) {
        var parent = element.parentElement
        for (var i = 0; i < parent.children.length; i++) {
            var e = parent.children[i]
            if (e === element) {
                return i
            }
        }
    }

    var play = function(b) {
        $('.active-image').removeClass('active-image')
        $('.active-image-indicators').removeClass('active-image-indicators')
        //
        var index = $('.imgs-container').data('index')
        // console.log(index)
        var imgs = $('.imgs-container').data('imgs')
        // console.log(imgs)
        var i = (index + b + imgs) % imgs
        console.log('显示该图片' ,i+1)
        $('.imgs-container').data('index', i)
        //
        var activeImage = $($('.image')[i])
        activeImage.addClass('active-image')
        //
        var activeIndicator = $($('.image-indicators')[i])
        activeIndicator.addClass('active-image-indicators')
    }

    var playIndicators = function(activeI) {
        $('.active-image').removeClass('active-image')
        $('.active-image-indicators').removeClass('active-image-indicators')

        // var activeI = indexOfElement(event.target)
        // console.log(activeI)
        $('.imgs-container').data('index', activeI)
        //
        var activeImage = $($('.image')[activeI])
        activeImage.addClass('active-image')
        //
        var activeIndicator = $($('.image-indicators')[activeI])
        activeIndicator.addClass('active-image-indicators')
    }

    $('.button').on('click', function(event) {
        if ($(event.target).hasClass('button-left')) {
            play(-1)
        } else {
            play(1)
        }
    })
    // $('.image-indicators').on('click', function(event) {
    //     var activeI = indexOfElement(event.target)
    //     playIndicators(activeI)
    // })
    $('.image-indicators').on('mouseover', function(event) {
        var activeI = indexOfElement(event.target)
        playIndicators(activeI)
    })
}

var images = [
    'https://img14.360buyimg.com/da/jfs/t3694/357/255956235/209928/3febb7f/58048139N954b693f.jpg',
    'https://img13.360buyimg.com/da/jfs/t3787/10/13900776/125243/733ff0a9/58004225Nf6110927.jpg',
    'https://img14.360buyimg.com/da/jfs/t3805/94/12173840/157059/7c6148a/580462c2N09b566a3.jpg',
    'https://img12.360buyimg.com/da/jfs/t3352/162/70994967/87910/a2e37628/57fdf99dN618b1320.jpg',
    'https://img12.360buyimg.com/da/jfs/t3739/215/283402599/102085/5aab65d5/580590a6N82486070.jpg',
]

// 'http://a4.topitme.com/o063/1006383654e4875344.jpg',
// 'http://a4.topitme.com/o063/1006383656c6222e36.jpg',
// 'http://a4.topitme.com/o/201102/05/12968897677841.jpg',
// 'http://a3.topitme.com/1/fd/c8/11614497779f8c8fd1o.jpg',
// 'http://a3.topitme.com/6/de/e2/1161783083375e2de6o.jpg',
// 'http://a3.topitme.com/b/6d/2b/11214342371722b6dbo.jpg',
