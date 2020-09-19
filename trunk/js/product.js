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
    
})