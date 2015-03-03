// vqd.pageAnimate v1.0.0
define(function(require, exports, module) {
	var isFirst = true; // 计数器
	var vqd = {
		page0 : function(){
			var $down_1 = $(".gift_header");
			var $down_2 = $(".gift_rect");
			var $down_3 = $(".gift_rect_bor");
			var $up = $(".gift_rect_bor_1");
			var $scale = $(".gift_txt");
			setTimeout(function(){
				$down_1.css("display","block").addClass("Jdown");
				$down_2.show().addClass("Jdown");
				$down_3.show().addClass("Jdown");
				$up.show().addClass("Jup");
			},1800);
			setTimeout(function(){
				$scale.css("display","block").addClass("Scale");
			},1900)	
		},
		page1 : function(){
			var s = "<p>在过去的2014年里，感谢您对飞博的关注、支持与厚爱。2015年，一个新的开始，飞博期待与您有更多地交流，更多的合作，共同获得长足持久的发展！</p>";
			var con = $(".mail_txt");
			var index = 0;
			var length = s.length;
			var tId = null;
				if(isFirst){
					function start(){
						con.text("");
						tId = setInterval(function(){
						con.append(s.charAt(index));
						if(index++ === length){
							clearInterval(tId);
							index = 0;
							setInterval(function(){
								$(".mail_insert").children("p").eq(2).show().addClass("fadeIn");
							},500)
							setInterval(function(){
								$(".mail_insert").children("p").eq(3).show().addClass("fadeIn");
							},800)
							setInterval(function(){
								$(".mail_insert").children("p").eq(4).show().addClass("fadeIn");
							},860)
							//start();
							}
						},50);
					}
					isFirst = false;
					start();
				}
				console.log(isFirst);
				$(".snow").remove();
		},
		page2 : function(){
			var $parent = $("#product");
			var $circle = $(".circle");
			$parent.children().eq(3).show().addClass("bigger");
			setTimeout(function(){
				$parent.children().eq(2).show().addClass("bigger");
				$parent.children().eq(4).show().addClass("bigger");
			},1500)
			setTimeout(function(){
				$parent.children().eq(1).show().addClass("bigger");
				$parent.children().eq(5).show().addClass("bigger");
			},2000)
			setTimeout(function(){
				$parent.children().eq(0).show().addClass("bigger");
				$parent.children().eq(6).show().addClass("bigger");
			},2400)
			setTimeout(function(){
				$circle.children().show().addClass(
					"opacity");
			},4500)
		}
	}
	module.exports = vqd;
});