
// 抽取轮播
function lunbo(selector,boxh,w,h){
    $(selector).slidebox({
        boxh: boxh,//盒子的高度
        w: w,//图片的宽度
        h: h,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
}
// //文档加载事件
$(function(){
lunbo('#slider',400,1000,400)
lunbo('#ebook .ebookSlid',220,328,220)
lunbo('#cloth .ebookSlid',342,430,342)
lunbo('#sport .ebookSlid',342,430,342)
lunbo('#childcloth .ebookSlid',342,430,342)

 // 电子书模块选项卡
$("#ebook .book ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    $("#ebook .rightcbox ul").eq(index).addClass("cur").siblings().removeClass("cur")
})
// 服装模块选项卡
$("#cloth .dress ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    $("#cloth .rightcbox ul").eq(index).addClass("cur").siblings().removeClass("cur")
})
// 户外运动模块选项卡
$("#sport .dress ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    $("#sport .rightcbox ul").eq(index).addClass("cur").siblings().removeClass("cur")
    
})
// 童装模块选项卡
$("#childcloth .dress ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    $("#childcloth .rightcbox ul").eq(index).addClass("cur").siblings().removeClass("cur")
    
})
// /* 新书畅销榜
    //   鼠标移入：显示当前的div 
    //             隐藏其它的div 
    //             隐藏自己的标题
    //             显示其它的标题
$("#ebook .ebook-right ul li").mouseenter(function(){
    $(this).find("div").show();
    $(this).find(".title").hide()
    $(this).siblings().find("div").hide()
    $(this).siblings().find(".title").show()
})

// 楼层跳转
$('#floorBox li').hover(function(){
    // 获取当前li的属性
    let bgColor = $(this).attr('bgColor')
    // 移入显示的样式
    $(this).css({
        'background-position-X':'-40px',
        'background-color':bgColor,
        'width':'80px'
    })
},function(){
    // 移出变回原来的样式
    $(this).css('background-positionX','')
    $(this).css({
        'background-position-X':'',
        'background-color':'',
        'width':'40px'
    })
}).click(function(){
    // 获取当前li的索引值
    let index = $(this).index()
    // 获取楼层距离浏览器顶部的偏移
    let sTop = $('.floor').eq(index).offset().top
    // console.log(sTop)
    // 赋给浏览器的卷动值
    $('html,body').animate({scrollTop: sTop},500)
}),function(){
    $(this).css({
        'backgroundColor':'',
        'backgroundPositionX':0,
        width:0
    }).click(function(){
    let $jumpBox = $('.foolr').eq($(this).index());
    let top = $jumpBox.offset().top;
    $('html,body').stop().animate({scrollTop:top})
})
}

// 顶部搜索框
$(window).scroll(function(){
    // 获取滚动条滚动的距离
    let sTop = $('html,body').scrollTop();
    // 判断滚动距离大于500时显示
    if(sTop > 500){
        $('#searchBox').slideDown()
        // 将搜索框追加到顶部搜索框
        $('.search-box').appendTo('#searchBox')
    }else{
        $('#searchBox').slideUp()
        $('.search-box').appendTo('.search-top')
    }
})
$(window).scroll(function(){
    // 获取滚动距离
    let top = $('html,body').scrollTop()
    // 判断
    if(top > 800){
        $('#goStop').css('display','block')
    }else{
        $('#goStop').css('display','none')
    }
})
// 点击按钮回到顶部
$('#goStop').click(function(){
    // 定义一个总时间
    let s = 1000;
    // 获取总路程
    let t = $('html,body').scrollTop()
    // 定义变量求运动速度
    let v = t / s;
    // 开启计时器
    let timeId = setInterval(function(){
        // 获取当前滚动的距离
        let top = $('html,body').scrollTop()
        // console.log(top)
        // 每个30毫秒的速度减去当前滚动的距离并赋值给当前滚动的距离
        $('html,body').scrollTop(top - v * 50)
        // 判断距离顶部等于0的时候清除计时器
        if(top === 0){
            clearInterval(timeId)
        }
    },50)
})
});

// $(function (){
//     $("#slider").slidebox({
//         boxh: 400,//盒子的高度
//         w: 1000,//图片的宽度
//         h: 400,//图片的高度
//         isShow: true,//是否显示控制器
//         isShowBtn: true,//是否显示左右按钮
//         controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
//         controlsW: 12,//控制按钮宽度
//         controlsH: 12,//控制按钮高度
//         radius: 6//控制按钮圆角度数
//     });  

// 图书轮播图
// $("#ebook .ebookSlid").slidebox({
//     boxh: 220,//盒子的高度
//     w: 328,//图片的宽度
//     h: 220,//图片的高度
//     isShow: true,//是否显示控制器
//     isShowBtn: true,//是否显示左右按钮
//     controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
//     controlsW: 20,//控制按钮宽度
//     controlsH: 6,//控制按钮高度
//     radius: 6//控制按钮圆角度数
// });
// 服装轮播图
// $("#cloth .ebookSlid").slidebox({
//     boxh: 342,//盒子的高度
//     w: 430,//图片的宽度
//     h: 342,//图片的高度
//     isShow: true,//是否显示控制器
//     isShowBtn: true,//是否显示左右按钮
//     controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
//     controlsW: 20,//控制按钮宽度
//     controlsH: 6,//控制按钮高度
//     radius: 6//控制按钮圆角度数
// });
 
// 二维码
$('.cpn3').mouseenter(function(){
    $('.cpn2').css('display','block')
}),$('.cpn3').mouseleave(function(){
    $('.cpn2').css('display','none')
})

// 推广商品
$('#Promot li').mouseenter(function(){
    $(this).css('backgroundColor','#eee')
}),$('#Promot li').mouseleave(function(){
    $(this).css('backgroundColor','')
})

