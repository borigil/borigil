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


	/*========== Subtop Visual ==========*/
	var e = $('.visualbox .visualtitle h3 span') // The elements we're searching
	var c = e.size() // Total number of those elements
	var randomtext = randsort(c) // an array of the element indices in random order

	$(".visualbox .visual").stop().animate({opacity:1}, 1700, "easeOutQuad");
	// the jQuery selector could be replaced with e
	$(".visualbox .visualtitle h3 span").each(function(i) {
		var e = $(this);
		e.fadeTo(0, 0);
		setTimeout(function(){
			e.fadeTo(1000, 1);
		}, randomtext[i]*300);
	});
	$(".visualbox .visualtitle h3").stop().animate({marginTop:0}, 1500, "easeOutQuad");
	$(".visualbox .visualtitle p").stop().delay(1700).animate({opacity:1, marginTop:22}, 3000, "easeOutQuad");
	/*========== //Subtop Visual ==========*/


	/* popup */
		$(".layerPop .layerclose").on("click", function(e){
			$(".layerPop, .dimmed").fadeOut();
		});

	/*========== BUSINESS ==========*/

/*
		$(".brand_list .more a.btn").on("click", function(e){
			e.preventDefault();
			if ( $(this).parent().hasClass("active") ) {
				$(".brand_list .more").removeClass("active").animate( {height:54} , 500, "easeInCubic");
				$(this).parent().css({height:265}).stop().animate( {height:54} , 500, "easeInCubic");
			} else {
				//$(".brand_list .more").removeClass("active").animate( {height:54} , 500, "easeInCubic");
				//$(this).parent().addClass("active").stop().animate( {height:265} , 500, "easeOutCubic");
			}
		});
*/
		$(".brand_list .more").on("click", function(e){
			if ( $(this).hasClass("active") ) {
				$(this).css({height:265}).stop().animate( {height:54} , 800);
				$(".brand_list .more").stop().animate( {height:54} , 800, "easeOutCubic", function(){
					$(this).removeClass("active");
				});
			} else {
				$(".brand_list .more").removeClass("active").stop().animate( {height:54} , 400, "easeInCubic");
				$(this).addClass("active").stop().animate( {height:265} , 400, "easeOutCubic");
			}
		});

	$(".product_menu a").on("click", function(e){
		$(".product_menu li").removeClass("on");
		$(this).parent().addClass("on");

		$(".bread_list a").removeClass("active").removeClass("active");
		$(".detail_wrap").stop().animate( {height:0}, 400, "easeOutQuad", function(){
			$(".detail_wrap").remove();
		});

		var productNum = $(this).parent().index();
		//alert( productNum );

		$(".product_list").hide();

		switch (productNum) {
			case 0:
				$(".arrive_list").show();
				break;
			case 1:
				$(".bread_list").show();
				break;
			case 2:
				$(".temperature_list").show();
				break;
			case 3:
				$(".freshfood_list").show();
				break;
			case 4:
				$(".franchise_list").show();
				break;
		}

	});

	$(".product_list a").on({
		"mouseenter focusin": function() {
			$(this).addClass("on");
		},
		"mouseleave focusout": function() {
			$(this).removeClass("on");
		}
	});

	var currentline = 0;
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
			$(".detail_wrap").stop().animate( {height:0}, 700, "easeOutQuad", function(){
				$(".detail_wrap").remove();
			});
			//$("html, body").animate({scrollTop: 325 }, 700 );
			$(this).removeClass("active");
		} else {
			if ( $(".detail_wrap").length ) {

				$(".bread_list a").removeClass("active");

				if ( currentline == listlineNum ) {
					$(".detail_wrap").remove();

					if ( breadnum=="2" || breadnum=="4" || breadnum=="6" || breadnum=="8" || breadnum=="10" || breadnum=="12" || breadnum=="14" ) {
						$(".bread_list a#" + listlineNum)
							.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close white">상세보기 닫기</a><img src="../img/business/detail_bread06.jpg" alt="" /></div>');
					} else {
						$(".bread_list a#" + listlineNum)
							.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_bread03.jpg" alt="" /></div>');
					}

					if ( $(window).height() > 750 ) {
						var scrollposition = $(".detail_wrap").offset().top - 82 - 228;
					} else {
						var scrollposition = $(".detail_wrap").offset().top - 82;
					}
					$("html, body").stop().animate({scrollTop: scrollposition }, 700 );
					$(".detail_wrap").stop().css( {height:721}, 500, "easeOutQuad");
				} else {
					$(".detail_wrap").stop().animate( {height:0}, 450, "easeOutQuad", function(){
						$(".detail_wrap").remove();

						if ( breadnum=="2" || breadnum=="4" || breadnum=="6" || breadnum=="8" || breadnum=="10" || breadnum=="12" || breadnum=="14" ) {
							$(".bread_list a#" + listlineNum)
								.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close white">상세보기 닫기</a><img src="../img/business/detail_bread06.jpg" alt="" /></div>');
						} else {
							$(".bread_list a#" + listlineNum)
								.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_bread03.jpg" alt="" /></div>');
						}

						if ( $(window).height() > 750 ) {
							var scrollposition = $(".detail_wrap").offset().top - 82 - 228;
						} else {
							var scrollposition = $(".detail_wrap").offset().top - 82;
						}
						$("html, body").stop().animate({scrollTop: scrollposition }, 700 );
						$(".detail_wrap").stop().animate( {height:721}, 500, "easeOutQuad");
					});
				}

			} else {
				$(".detail_wrap").remove();
				if ( breadnum=="2" || breadnum=="4" || breadnum=="6" || breadnum=="8" || breadnum=="10" || breadnum=="12" || breadnum=="14" ) {
					$(".bread_list a#" + listlineNum)
						.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close white">상세보기 닫기</a><img src="../img/business/detail_bread06.jpg" alt="" /></div>');
				} else {
					$(".bread_list a#" + listlineNum)
						.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_bread03.jpg" alt="" /></div>');
				}
				if ( $(window).height() > 750 ) {
					var scrollposition = $(".detail_wrap").offset().top - 82 - 228;
				} else {
					var scrollposition = $(".detail_wrap").offset().top - 82;
				}
				$(".detail_wrap").stop().animate( {height:721}, 500, "easeOutQuad", function(){
					$("html, body").animate({scrollTop: scrollposition }, 700 );
				});
			}
			$(this).addClass("active");
		}
		currentline = listlineNum;
	});

	$(".arrive_list > a").on("click", function(e){
		e.preventDefault();
		var listNum = $(this).index();
		var breadnum = $(this).attr("id");

		if ( (breadnum=="1") || (breadnum=="2") || (breadnum=="3") || (breadnum=="4")  ) {
			var listlineNum = 4;
		} else if ( (breadnum=="5") ||  (breadnum=="6") || (breadnum=="7") || (breadnum=="8")  ) {
			var listlineNum = 5;
		}

		/*
		var listlineNum = parseInt( listNum /4 ) * 4 + 3;
		if ( $(this).hasClass("last") ) {
			listlineNum = parseInt( listNum /4 ) * 4 + 1;
		}*/

		if ( $(this).hasClass("active") ) {
			$(".arrive_list a").removeClass("active");
			$(".detail_wrap").stop().animate( {height:0}, 450, "easeOutQuad", function(){
				$(".detail_wrap").remove();
			});
			//$("html, body").animate({scrollTop: 325 }, 700 );
			$(this).removeClass("active");
		} else {
			if ( $(".detail_wrap").length ) {
				$(".arrive_list a").removeClass("active");
				if ( currentline == listlineNum ) {
					$(".detail_wrap").remove();
					$(".arrive_list a#" + listlineNum)
						.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_arrive03.jpg" alt="" /></div>');

					if ( $(window).height() > 750 ) {
						var scrollposition = $(".detail_wrap").offset().top - 82 - 228;
					} else {
						var scrollposition = $(".detail_wrap").offset().top - 82;
					}
					$("html, body").stop().animate({scrollTop: scrollposition }, 700 );
					$(".detail_wrap").stop().css( {height:721}, 500, "easeOutQuad");
				} else {
					$(".detail_wrap").stop().animate( {height:0}, 450, "easeOutQuad", function(){
						$(".detail_wrap").remove();

						$(".arrive_list a#" + listlineNum)
							.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_arrive03.jpg" alt="" /></div>');

						if ( $(window).height() > 750 ) {
							var scrollposition = $(".detail_wrap").offset().top - 82 - 228;
						} else {
							var scrollposition = $(".detail_wrap").offset().top - 82;
						}
						$("html, body").stop().animate({scrollTop: scrollposition }, 700 );
						$(".detail_wrap").stop().animate( {height:721}, 500, "easeOutQuad");
					});
				}
			} else {
				$(".detail_wrap").remove();

				$(".arrive_list a#" + listlineNum)
					.after('<div class="detail_wrap"><a href="javascript:closeProductDetail();" class="btn_close">상세보기 닫기</a><img src="../img/business/detail_arrive03.jpg" alt="" /></div>');
				if ( $(window).height() > 750 ) {
					var scrollposition = $(".detail_wrap").offset().top - 82 - 228;
				} else {
					var scrollposition = $(".detail_wrap").offset().top - 82;
				}
				$(".detail_wrap").stop().animate( {height:721}, 500, "easeOutQuad", function(){
					$("html, body").animate({scrollTop: scrollposition }, 700 );
				});
			}
			$(this).addClass("active");
		}
		currentline = listlineNum;
	});








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
	//$("html, body").animate({scrollTop: 325 }, 700 );
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


function randsort(c) {
    var o = new Array();
    for (var i = 0; i < c; i++) {
        var n = Math.floor(Math.random()*c);
        if( jQuery.inArray(n, o) > 0 ) --i;
        else o.push(n);
    }
    return o;
}