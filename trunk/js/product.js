$(function () {
    $("#slider").slidebox({
        boxh: 420,//盒子的高度
        w: 1200,//图片的宽度
        h: 390,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
    // 电子书
    // jq注册移入事件
    $('#menuSlide .menuSlideRight li').mouseenter(function () {
        // li显示
        $('div', this).show().slideDown();
        // 标题隐藏
        $('h5', this).hide();
        // 其他li的div隐藏
        $(this).siblings('li').find('div').hide()
        // 其他li的标题显示
        $(this).siblings('li').find('h5').show()
    })

    // 新书上架
    // jq注册移入事件
    $('#newBook .bookRight li').mouseenter(function () {
        // li显示
        $('div', this).show().slideDown();
        // 标题隐藏
        $('h5', this).hide();
        // 其他li的div隐藏
        $(this).siblings('li').find('div').hide()
        // 其他li的标题显示
        $(this).siblings('li').find('h5').show()
    })
    // 独家提供-选项卡
    $('#Exclusive .sole li').mouseenter(function () {
        // 给移入的li添加激活样式
        $(this).addClass('active').siblings().removeClass('active')

    })
    // 独家提供轮播图
    $("#Exclusive .proSilide").slidebox({
        boxh: 550,//盒子的高度
        w: 1200,//图片的宽度
        h: 440,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
    // 定义变量保存初始索引
    let index = 0;
    // 获取li的高度
    let liHeight = $('#Guess .GuessBox .GuessUl .GuessList').outerHeight()
    // 获取li的长度
    let liLen = $('#Guess .GuessBox .GuessUl .GuessList').length
    // 克隆第一个li并追加到最后
    $('#Guess .GuessBox .GuessUl .GuessList').eq(0).clone().appendTo('.GuessUl')
    // console.log(liHeight)
    // 给换一批注册点击事件
    $('#Guess .changeBtn').click(function () {
        // 自增1
        index++;
        // 判断索引完全等于li的长度数将索引赋值为0
        // if (index === $('#Guess .GuessBox .GuessUl .GuessList').length) {
        //     index = 0;
        // }
        // 注册运动事件
        $('#Guess .GuessBox .GuessUl').animate({
            top: -index * liHeight
        }, 200, function () {
            // 判断索引完全等于li的长度数将索引赋值为0
            if (index === liLen) {
                index = 0;
                $('#Guess .GuessBox .GuessUl').css('top',0)
            }
        })
    })
})