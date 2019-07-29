      function loadStyle(url){
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(link);
      }

      // loadStyle('css/style.css');
      
      // var thems = document.getElementsByClassName('thems')[0];
      // var themslist = document.getElementsByClassName("themslist")[0];
      // themslist.onclick=function(e){
      //   console.log(e)
      // }

	$(".thems").click(function(event) {
		console.log($(this).next())
		$(this).next().slideToggle('fast');
	});

	$(".themslist li a").click(function(event) {
		//console.log($(this).attr("rel"))
		$(".themslist li a").removeClass('cur');
		loadStyle($(this).attr("rel"));
		$(this).parent().parent().slideToggle('fast');
		$(this).addClass('cur');
	});
//tab选中交换图片
//浮动菜单位置计算
var w = ($(window).width()-1200)/2-120;
$(".navigationList").css("left",w);
//点击菜单滚动到指定位置
$(".navigationList a").click(function(e) {
	$(".navigationList a").removeClass("cur");
	$(this).addClass('cur');
	for(i=1;i<=$(".navigationList a").length;i++){
		var c = "#"+i;
		if($(this).attr("h")==i){
			$("html,body").animate({scrollTop:$(c).offset().top-240}, 500);
		}
	}
});
//滚动鼠标自动切换栏目
$(document).on("mousewheel DOMMouseScroll", function (e) {
	var j = $(window).scrollTop()+100
	for(i=1;i<=$(".navigationList a").length;i++){
		var b = "#" + i;
		var d  = $(b).offset().top;
		var h = d - j;
		var s = ".navigationList a:eq("+(i-1)+")"
		console.log(s)
		console.log(h)
		if(h > 0 && h < 275){
			$(".navigationList a").removeClass('cur')
			$(s).addClass('cur')
		}else if($(document).scrollTop()+$(window).height()==$(document).height()){
			$(".navigationList a").removeClass('cur')
			$(".navigationList a:last").addClass('cur')
		}
	}
})

// 弹出下拉菜单
$("#offmenus").click(function(event) {
	$(".menu_small_box").slideToggle("fast");
	$(".zhezhaobg").fadeToggle("fast");
});
// 点击黑色区域关闭
$(".zhezhaobg").click(function(event) {
	$(".menu_small_box").slideToggle("fast");
	$(this).fadeToggle("fast");
});

$(".morefun").click(function(event) {
	$(this).next().slideToggle('fast');
});

$(".sllme li a").click(function(event) {
	$(this).parent().parent().slideToggle('fast');
});

// 操作树形菜单
$(".sidebar-menu > li > a").click(function(event) {
	$(".sidebar-menu > li").removeClass('cur');
	$(this).parent().addClass('cur');
	$(this).next('ul').slideToggle("fast");
});

// 操作小屏幕树形菜单
$(".menu_small_box > ul > li > a").click(function(event) {
	$(this).next('ul').slideToggle("fast");
});

$(".menu_small_box ul li > ul > li > a").click(function(event) {
	$(this).next('ul').slideToggle("fast");
});

//显示方式切换
if($("#aline1").attr('checked')=="checked"){
	$(".nr").addClass('titleContent')
	$(".discription").removeClass('hidden')
}
$("#aline1").click(function(event) {
		$(".nr").removeClass('titleContent')
		$(".nr").removeClass('titleContent2')
		$(".discription").removeClass('hidden')
	if($("#aline1").attr('checked')=="checked"){
		$(".nr").addClass('titleContent')
	}
});
$("#aline2").click(function(event) {
		$(".discription").addClass('hidden')
		$(".nr").removeClass('titleContent')
		$(".nr").removeClass('titleContent2')
	if($("#aline2").attr('checked')!="checked"){
		$(".nr").addClass('titleContent2')
	}
});

//折线图鼠滑显示
$("#zheThumbe1").hover(function(){
	$("#zheThumbe1Layer1").fadeIn("fast");
	$("#zheThumbe1Layer1 + div").fadeIn("fast");
},function(){
	$("#zheThumbe1Layer1").fadeOut("fast");
	$("#zheThumbe1Layer1 + div").fadeOut("fast");
})

$("#zheThumbe2").hover(function(){
	$("#zheThumbe2Layer2").fadeIn("fast");
	$("#zheThumbe2Layer2 + div").fadeIn("fast");
},function(){
	$("#zheThumbe2Layer2").fadeOut("fast");
	$("#zheThumbe2Layer2 + div").fadeOut("fast");
})

//添加邮箱单选弹出框
if($("#email").attr('checked')=="checked"){
	$(".emailBox").fadeIn("fast");
	$(".smsBox").fadeOut("fast");
}
$("#email").click(function(event) {
	if($("#email").attr('checked')=="checked"){
		$(".emailBox").fadeIn("fast");
		$(".smsBox").fadeOut("fast");
	}
});
$("#sms").click(function(event) {
	if($("#email").attr('checked')=="checked"){
		$(".emailBox").fadeOut("fast");
		$(".smsBox").fadeIn("fast");
	}
});
$(".more_down").click(function(event) {
	$(".more_up").removeClass('hidden')
	$(".zy_con").removeClass('changeHeight')
	$(this).addClass('hidden')
})
$(".more_up").click(function(event) {
	$(".more_down").removeClass('hidden')
	$(this).addClass('hidden')
	$(".zy_con").addClass('changeHeight')
})

$(".proScan").click(function(){
	$(".clipbox").slideToggle("fast")
})
$(".systemgg_n").click(function(){
	$(".zhezhao").fadeIn("fast")
	$(".tap").show("fast")
	$(".systemgg").show("fast")
})
$(".zhezhao").click(function(){
	$(".zhezhao").fadeOut("fast")
	$(".tap").hide("fast")
	$(".systemgg").hide("fast")
})
//导出echarts图标到本地
exportImg = function(b){

	    var mycanvas = $(b).find("canvas")[0];
	    var image = mycanvas.toDataURL("image/png");
	    console.log(image)
	    var $a = document.createElement('a');
	    $a.setAttribute("href", image);
	    $a.setAttribute("download", "");
	    $a.click();
}


		$('.zheline').click(function () {
			exportImg("#zheline");
		})
		$('.pie_qg').click(function () {
			exportImg("#pie_qg");
		})
		$('.pie_fb').click(function () {
			exportImg("#pie_fb");
		})
		$('.zhe_zb').click(function () {
			exportImg("#zhe_zb");
		})
		$('.zhe_hyd').click(function () {
			exportImg("#zhe_hyd");
		})


		$('.zdjc').click(function () {
			exportImg("#zdjc");
		})
		$('.zhu').click(function () {
			exportImg("#zhu");
		})
		$('.map_dy').click(function () {
			exportImg("#map_dy");
		})
		$('.ci_1').click(function () {
			exportImg("#ci_1");
		})
		$('.ci_2').click(function () {
			exportImg("#ci_2");
		})
		$('.pie_1').click(function () {
			exportImg("#pie_1");
		})
		$('.pie_2').click(function () {
			exportImg("#pie_2");
		})
		$('.fmzsfx').click(function () {
			exportImg("#fmzsfx");
		})
		$('.cbzsfx').click(function () {
			exportImg("#cbzsfx");
		})
		$('.hy_1').click(function () {
			exportImg("#hy_1");
		})
		$('.hy_2').click(function () {
			exportImg("#hy_2");
		})

		$('.zhe').click(function () {
			exportImg("#zhe");
		})
		$('.zheInfo').click(function () {
			exportImg("#zheInfo");
		})
		$('.pie').click(function () {
			exportImg("#pie");
		})
		$('.bartop10').click(function () {
			exportImg("#bartop10");
		})
		$('.map').click(function () {
			exportImg("#map");
		})
		
		$('.pie2').click(function () {
			exportImg("#pie2");
		})
		$('.keywords').click(function () {
			exportImg("#keywords");
		})
		$('.pie3').click(function () {
			exportImg("#pie3");
		})
		$('.zheInfo2').click(function () {
			exportImg("#zheInfo2");
		})























