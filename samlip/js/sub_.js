var dotIdx = 0;
var chgImg;
var chgVisual;



$(function() {


	/*========== GNB==========*/
		//GNB 마우스 오버
		$(".gnb > li, .depth").on({
			"mouseenter focusin": function() {
				var gnbNum = $(this).index();
				var depthHeight = $(this).find(".depth > li").length * 29;
				var depthHeightNum;

				$(this).addClass("on").children("a").find("img").attr("src", "../img/common/gnb_text_menu0"+ (gnbNum+1) +"hover.png");
				
				
				if( gnbNum == 1 ) {
					depthHeightNum = depthHeight + 33;
				} else {
					depthHeightNum = depthHeight+16;
				}


				$(this).children(".gnbon").stop().animate({height:69},400,"easeOutQuad");
				$(this).find(".depth").show().stop().animate({ height:depthHeightNum, paddingTop:13 }, 400, function(){
					//$(this).animate({   },150);
				});

				$(".depth > li").on({
					"mouseenter focusin": function() {
						$(this).addClass("on");
					},
					"mouseleave focusout": function() {
						$(this).removeClass("on");
					}
				});
			},
			"mouseleave focusout": function() {
				var gnbNum = $(this).index();

				$(this).children(".gnbon").animate({height:0},100);

				if ( $(this).hasClass("active") ) {
					$(this).removeClass("on").children("a").find("img").attr("src", "../img/common/gnb_text_menu0"+ (gnbNum+1) +"on.png");
				} else {
					$(this).removeClass("on").children("a").find("img").attr("src", "../img/common/gnb_text_menu0"+ (gnbNum+1) +"off.png");
				}
				
				$(this).find(".depth").stop().animate({ height :0, paddingTop:0 }, 200, function() {
					$(this).hide();
				});
			}
		});

		//SNS
		$(".gnb_sns").on({
			"mouseenter focusin": function() {
				$(this).addClass("on");
			},
			"mouseleave focusout": function() {
				$(this).removeClass("on");
			}
		});
	/*========== //GNB==========*/


	

		



	/*========== BUSINESS ==========*/

		$(".bread_menu a").on("click", function(e){
			e.preventDefault();
			$(".bread_menu li").removeClass("on");
			$(this).parent().addClass("on");

			$(".bread_list a").removeClass("active").removeClass("active");
			$(".detail_wrap").stop().animate( {height:0}, 400, "easeOutQuad", function(){
				$(".detail_wrap").remove();
			});
			$("html, body").animate({scrollTop: 325 }, 700 );
		});

		$(".bread_list a").on({
			"mouseenter focusin": function() {
				$(this).addClass("on");
			},
			"mouseleave focusout": function() {
				$(this).removeClass("on");
			}
		});


		$(".bread_list > a").on("click", function(e){
			e.preventDefault();
			var listNum = $(this).index();
			var breadnum = $(this).attr("id");

			if ( (breadnum=="1") || (breadnum=="2") || (breadnum=="3") || (breadnum=="4")  ) {
				var listlineNum = 4;
			} else if ( (breadnum=="5") ||  (breadnum=="6") || (breadnum=="7") || (breadnum=="8")  ) {
				var listlineNum = 8;
			} else if ( (breadnum=="9") ||  (breadnum=="10") || (breadnum=="11") || (breadnum=="12")  ) {
				var listlineNum = 12;
			} else if ( (breadnum=="13") ||  (breadnum=="14")  ) {
				var listlineNum = 14;
			} 
			/*
			var listlineNum = parseInt( listNum /4 ) * 4 + 3;
			if ( $(this).hasClass("last") ) {
				listlineNum = parseInt( listNum /4 ) * 4 + 1;
			}*/
			
			if ( $(this).hasClass("active") ) {
				$(".bread_list a").removeClass("active");
				$(".detail_wrap").stop().animate( {height:0}, 450, "easeOutQuad", function(){
					$(".detail_wrap").remove();
				});
				//$("html, body").animate({scrollTop: 325 }, 700 );
				$(this).removeClass("active");
			} else {
				if ( $(".detail_wrap").length ) {
					$(".bread_list a").removeClass("active");
					$(".detail_wrap").stop().animate( {height:0}, 450, "easeOutQuad", function(){
						$(".detail_wrap").remove();

						if ( breadnum=="6" ) {
							$(".bread_list a#" + listlineNum)
								.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_bread06.jpg" alt="" /></div>');
						} else {
							$(".bread_list a#" + listlineNum)
								.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_bread03.jpg" alt="" /></div>');
						}
						/*
						if ( $(window).height() > 750 ) {
							var scrollposition = $(".detail_wrap").offset().top - 82 - 228;
						} else {
							var scrollposition = $(".detail_wrap").offset().top - 82;
						}*/
						var scrollposition = $(".detail_wrap").offset().top - 82;
						$("html, body").stop().animate({scrollTop: scrollposition }, 700 );	
						$(".detail_wrap").stop().animate( {height:721}, 500, "easeOutQuad");
					});
				} else {
					$(".detail_wrap").remove();
					
					if ( breadnum=="6" ) {
						$(".bread_list a#" + listlineNum)
							.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_bread06.jpg" alt="" /></div>');
					} else {
						$(".bread_list a#" + listlineNum)
							.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_bread03.jpg" alt="" /></div>');
					}

					/*
					if ( $(window).height() > 750 ) {
						var scrollposition = $(".detail_wrap").offset().top - 82 - 228;
					} else {
						var scrollposition = $(".detail_wrap").offset().top - 82;
					}*/
					var scrollposition = $(".detail_wrap").offset().top - 82;
					$(".detail_wrap").stop().animate( {height:721}, 500, "easeOutQuad", function(){
						$("html, body").animate({scrollTop: scrollposition }, 700 );	
					});
				}
				$(this).addClass("active");
			}

			

		});



	/*========== //BUSINESS ==========*/



	/*========== FAMILY SITES==========*/
		$(".familysite, .scroll_wrap").on({
			"mouseenter focusin": function() {
				$(this).find(".scroll_wrap").stop().show().animate({ height : 198}, 350);

				$(".scroll_wrap > li").on({
					"mouseenter focusin": function() {
						$(this).addClass("on");
					},
					"mouseleave focusout": function() {
						$(this).removeClass("on");
					}
				});
			},
			"mouseleave focusout": function() {
				$(this).find(".scroll_wrap").css("height", 198).stop().animate({ height : 0}, 250, function() {$(this).hide();});
			}
		});
	/*========== //FAMILY SITES==========*/

});


function closeProductDetail(){
	$(".bread_list a").removeClass("active").removeClass("active");
	$(".detail_wrap").stop().animate( {height:0}, 400, "easeOutQuad", function(){
		$(".detail_wrap").remove();
	});
	$("html, body").animate({scrollTop: 325 }, 700 );
}

// 사이트맵 열기
function mainSitemap() {
	if( $(".sitemap_wrap").css("display")=="none") {
		$(".sitemap_wrap").css("display","block").css("height",0).css({height:338, marginTop:-339}, 400);
		$(".sitemap").addClass("on");
		$(".footer").css({paddingTop:338}, 400);
	} else {
		closeSitemap();
	}
}

function openSitemap() {
	var body = $("html, body");
	var bodyTop = $(".footer").offset().top - $(window).height() + 500;

	$(this).focus();
	if( $(".sitemap_wrap").css("display")=="none") {
		body.animate({scrollTop: bodyTop }, 400);
		$(".sitemap_wrap").css("display","block").css("height",0).animate({height:338, marginTop:-339}, 400);
		$(".footer").animate({paddingTop:338}, 400);
		$(".close_sitemap").focus();
		$(".sitemap").addClass("on");
		
	} else {
		closeSitemap();
	}

}

// 사이트맵 닫기
function closeSitemap() {
	$(".sitemap_wrap").css("height",338).animate({height:0, marginTop:0}, 400, function() {$(this).css("display","none");});
	$(".sitemap").removeClass("on");
	$(".footer").animate({paddingTop:0}, 399);
}