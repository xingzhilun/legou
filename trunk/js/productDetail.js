$(function () {

	//初始化插件
	var magnifierConfig = {
		magnifier: "#magnifier1",//最外层的大容器
		width: 340,//承载容器宽
		height: 350,//承载容器高
		moveWidth: null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom: 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);


	/* 
		种类选择
	*/
	$('#books .rightBox b').click(function () {

		$(this).addClass('active').siblings('b').removeClass('active')
	})
	// 注册点击事件
	$('.rightBox>p:nth-child(5)>a').click(function () {
		$(this).addClass('active').siblings('a').removeClass('active')
	})
	// 增加
	$('.rightBox>.prductRight-box .addNum').click(function () {
		// 获取输入框的内容
		let num = $(this).siblings('input').val()
		$(this).siblings('input').val(++num)
	})
	// 减少
	$('.rightBox>.prductRight-box .reNum').click(function () {
		// 获取输入框的内容
		let num = $(this).siblings('input').val()
		// 判断数量减少到1的时候跳出循环
		if (num == 1) return;
		// 将定义的变量赋给当前输入的内容
		$(this).siblings('input').val(--num)
	})

	//  商品介绍-评价选项卡
	$('.introdright h4').mouseenter(function () {
		$(this).addClass('active').siblings().removeClass('active')
		let index = $(this).index()
		$('.evaluate').hide().eq(index).show()
	})
})