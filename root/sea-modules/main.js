define(function(require) {

	var royalSlider = require('./jquery.royalslider');
	var loading = require('./vqd.loading');
	var resource = require('./resource');
	var pages = require('./royalslider.page.js');
	
	var contentWidth = $(window).width();
	var contentHeight = $(window).height();


	if(contentWidth>320) {
		$(".container .gift>i.gift_header").attr("style","height:114px");
		$(".container .gift_rect_bor,.gift_rect_bor_1").attr("style","height:120px");
		$(".container .gift .mail_insert").attr("style","height:400px");
	}

	/* 追加弹窗 */
	var init = {
		/* 加载进度条 */
		load : function() {
			var append = $("#append");
			if(append.length != 0) {
				var $centerBox = $("#loading");
				var bWidth = $centerBox.width();
				var bHeight = $centerBox.height();
				$centerBox.fadeIn().css({
					"top":contentHeight/2-bHeight/2,
					"left":contentWidth/2-bWidth/2,
					"position":"absolute",
					"opacity":"1"
				})
			} else if(append.length == 0){
				var div = document.createElement("div");
				div.setAttribute("id","append");
				var htmls = "<div id='loading'>";
				htmls += "<i id='circle'></i>";
				htmls += "<span><i class='progress_len' id='progress_len'></i></span></div>";
				div.innerHTML = htmls;
				document.getElementById("append").appendChild(div);
				$centerBox.fadeIn().css({
					"top":contentHeight/2-bHeight/2,
					"left":contentWidth/2-bWidth/2,
					"position":"absolute",
					"opacity":"1"
				})
			}
		},
		/* 隐藏进度条 */
		hide : function() {
			$("#append").animate({
				"opacity": 0
			},2000,function() {
				$(this).remove();
			});
		}
	};

	/* 图片列表 */
	var imgList = config.imgResource;

	/* 调用loading中的函数，进度条加载之后的动作 */
	function Imgdone(s){
		var progress = document.getElementById("progress_len");
		progress.style.width = s+"%";

		var progress_len = progress.style.width;
		if(progress_len == "98%"){
			document.getElementById("circle").setAttribute("class","complete");
			setTimeout(init.hide(),1000);
		}
	}
	
	//调用loading
	loading.init(imgList,"",Imgdone,init.load);
	// 首页
	pages.page0();
	/* //文字页面;
	pages.page1();
	//商品页面;
	pages.page2(); */

	/*music 开关*/
	$(function(){
		$(".music").on("click",function(){
			var status = $(".music").attr("music-status");
			if(!status || status == 0){
				$(".music").removeClass("stp");
				$(".music").attr("music-status",1);
			}else if (status == 1) {
				$(".music").addClass("stp");
				$(".music").attr("music-status",0);
			}
		})
	})

	/*翻页*/
	$('#full-width-slider').royalSlider({
		arrowsNav:true,
		loop: true,
		allowCSS3: true,
		keyboardNavEnabled: true,
		controlsInside: false,
		imageScaleMode: 'fill',
		autoScaleSlider: true, 
		autoScaleSliderWidth: contentWidth,     
		autoScaleSliderHeight:contentHeight,
		controlNavigation: 'bullets',
		thumbsFitInViewport: false,
		navigateByClick: true,
		startSlideId: 0,
		autoPlay: true,
		transitionType:'move',
		globalCaption: true,
		slidesOrientation:'vertical',
		slidesSpacing:0,
		arrowsNav:true,
		autoScaleSlider: true,
		deeplinking: {
			enabled: true,
			change: false
		},
	});
	
	
});