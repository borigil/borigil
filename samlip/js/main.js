var dotIdx = 0;
var chgImg;
var chgVisual;
var currentfamily = 0;

$(function() {

/*========== GNB==========*/
	//GNB 마우스 오버
	$(".gnb > ul > li, .depth").on({
		"mouseenter focusin": function() {
			var gnbNum = $(this).index();
			var idxWidth = $(".gnb > ul > li:eq(" + gnbNum + ")").children("a").width();
			var idxLeft = $(".gnb > ul > li:eq(" + gnbNum + ")").children("a").offset().left  - $(".gnb > ul").offset().left ;

			$(this).addClass("on").children("a").find("img").attr("src", "img/common/gnb_text_menu"+ (gnbNum+1) +"on.png");
			$(".subgnb").stop().animate({ height:255 }, 500, "easeOutQuart");
			$(".gnbon").stop().animate({width:idxWidth, left:idxLeft },600);
			$(".gnbon span").stop().animate({width:"60%" },250, function(){
				$(".gnbon span").stop().animate({width:"100%" },300);
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
			var idxWidth = $(".gnb > ul > li:eq(" + gnbNum + ")").children("a").width();
			var idxLeft = $(".gnb > ul > li:eq(" + gnbNum + ")").children("a").offset().left  - $(".gnb > ul").offset().left +(idxWidth/2);

			if ( $(this).hasClass("active") ) {
				$(this).removeClass("on").children("a").find("img").attr("src", "img/common/gnb_text_menu"+ (gnbNum+1) +"on.png");
			} else {
				$(this).removeClass("on").children("a").find("img").attr("src", "img/common/gnb_text_menu"+ (gnbNum+1) +".png");
			}

			$(".subgnb").stop().animate({ height:1 }, 500, "easeInQuart");
			$(".gnbon").stop().animate({width:0, left: idxLeft },300,"easeOutQuad");
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



/*========== MAIN VISUAL==========*/
	var currentIndex = 1;
	var playing = 1;
	var max = $(".visual_list").children().length;
	var max = $(".navigate li").children().length - 1;
	var visualList = $(".visual_list li");

	startVisualInterval();

	$('.navigate li').click(function(){
		clearInterval(chgVisual);
		var index = $('.navigate li').index(this)-1;

		if ( index == -1) {
			if ( playing == 1) {
				clearInterval(chgVisual);
				$('.navigate li.listpause').addClass("listplay");
				playing=0;
			} else {
				$('.navigate li.listpause').removeClass("listplay");
				playing=1;
				startVisualInterval();
			}
		} else {
			currentIndex = index+1;
			setMainVisual();
			startVisualInterval();
		}
	});

	function setMainVisual(){
	//	chkIdx();
		chgVisualImg();
		toggleVisualDot();
	}

	$(".visual_list .visual1").stop().animate({ opacity:1 }, 1800, "easeOutQuad");

	function chgVisualImg(){
		//$('.visual_bg').css('background-image', 'url("img/main/main_visual0' + currentIndex + '.jpg")');
		var visualList = $(".visual_list li");
		visualList.stop().animate({ opacity:0, "z-index":1 }, 1100);
		var visualList2 = $(".visual_list li:eq(" + (currentIndex-1) + ")" );
		visualList2.stop().animate({ opacity:1, "z-index":2 }, 1200, "easeOutQuad");

		//$(".visualimage").removeClass("on");
		$(".visual_list li img.visualimage, .visual_list li p").stop().delay(700).animate({ opacity:0, marginTop:0 },1200);
		//$(".visual_list li h3").stop().delay(700).animate({ marginTop:12 },1200);
		$(".visualimage").stop().animate({ opacity:1 },1500);
		//$(".visual_list li:eq(" + (currentIndex-1) + ")" ).find(".visualimage").addClass("on");


		/*switch ( currentIndex ) {
			case 1:
				//$(".visual_list .visual1 img").stop().delay(400).animate({ opacity:1 }, 2000);
				break;
			case 2:
				$(".visual_list .visual2 img.visual2_text1").stop().delay(500).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual2 img.visual2_text2").stop().delay(700).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual2 img.visual2_text3").stop().delay(900).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual2 img.visual2_text4").stop().delay(1100).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual2 img.visual2_text5").stop().delay(1300).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual2 img.visual2_text0").stop().delay(1800).animate({ opacity:1, marginTop:0 }, 2000);
				break;
			case 3:
				$(".visual_list .visual3 img.visual3_text1").stop().delay(500).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual3 img.visual3_text2").stop().delay(700).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual3 img.visual3_text3").stop().delay(900).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual3 img.visual3_text4").stop().delay(1100).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual3 img.visual3_text5").stop().delay(1300).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual3 img.visual3_text0").stop().delay(1500).animate({ opacity:1, marginTop:0 }, 2000);
				break;
			case 4:
				$(".visual_list .visual4 img.visual4_text1").stop().delay(500).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual4 img.visual4_text2").stop().delay(700).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual4 img.visual4_text3").stop().delay(900).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual4 img.visual4_text4").stop().delay(1100).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual4 img.visual4_text5").stop().delay(1300).animate({ opacity:1, marginTop:0 }, 1500);
				$(".visual_list .visual4 img.visual4_text0").stop().delay(1800).animate({ opacity:1, marginTop:0 }, 2000);
				break;
		}*/

		if ( currentIndex != 1 ) {
			var e = $(".visual_list .visual" + currentIndex + " h3 span") // The elements we're searching
			var c = e.size() // Total number of those elements
			var randomtext = randsort(c) // an array of the element indices in random order

			$(".visual_list .visual" + currentIndex + " h3").stop().animate({marginTop:0}, 3500, "easeOutQuad");
			// the jQuery selector could be replaced with e
			$(".visual_list .visual" + currentIndex + " h3 span").each(function(i) {
				var e = $(this);
				e.fadeTo(10, 0);
				setTimeout(function(){
					e.fadeTo(3000, 1);
				}, randomtext[i]*90);
			});
			$(".visual_list .visual" + currentIndex + " p").stop().delay(500).animate({opacity:1, marginTop:-12}, 1000);
		}
	}


	function toggleVisualDot(){
		$('.navigate li').removeClass('on');
		$('.navigate li:eq(' + (currentIndex) + ')').addClass('on');
	}

	function autoChangeVisual(){
		//console.log("max:" + max + " , currentIndex:" + currentIndex );
		if(currentIndex < max){
			++currentIndex;
		} else {
			currentIndex = 1;
		}
		setMainVisual(dotIdx);
	}

	function startVisualInterval(){
		clearInterval(chgVisual);
		chgVisual = setInterval(autoChangeVisual, 5000);

		if ( $(window).width() > 1800 ) {
			$(".round1")
				.attr("src", "img/main/main_visual_round1.png").css({ marginRight:-300 })
				.delay(500).animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round2")
				.attr("src", "img/main/main_visual_round2.png").css({ marginLeft:115 })
				.delay(1300).animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round3")
				.attr("src", "img/main/main_visual_round3.png").css({ marginLeft:420 })
				.delay(1400).animate({ opacity:1, top:95, marginTop:0 }, 1500);
		} else if ( $(window).width() > 1280 ) {
			$(".round1")
				.attr("src", "img/main/main_visual_round1_1800.png").css({ marginRight:-340 })
				.delay(500).animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round2")
				.attr("src", "img/main/main_visual_round2_1800.png").css({ marginLeft:105 })
				.delay(1300).animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round3")
				.attr("src", "img/main/main_visual_round3_1800.png").css({ marginLeft:360 })
				.delay(1400).animate({ opacity:1, top:95, marginTop:0 }, 1500);
		} else {
			$(".round1")
				.attr("src", "img/main/main_visual_round1_1024.png").css({ marginRight:-380 })
				.delay(500).animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round2")
				.attr("src", "img/main/main_visual_round2_1024.png").css({ marginLeft:25 })
				.delay(1300).animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round3")
				.attr("src", "img/main/main_visual_round3_1024.png").css({ marginLeft:105 })
				.delay(1400).animate({ opacity:1, top:95, marginTop:0 }, 1500);
		}
	}
/*========== //MAIN VISUAL==========*/

/*========== MAIN ROLLING ==========*/
	mainSitemap();
	autoChangeSns();
	var chgSns = setInterval(autoChangeSns,8000);

	function autoChangeSns(){
		$(".thumb_type ul").css({top:0});
		for ( var i=0 ; i>-4 ; i-- ) {
			$(".thumb_type ul").stop().delay(1000).animate({top: (77*i) },1500);
		}
	}

	function autoChangefamsite(){
		$(".rolling_wrap ul").stop().css({left:0}).animate({left:-945},20000);
	}



	$(".rolling_family .prev").on("click", function(){
		if ( currentfamily > 6 ) {
			currentfamily=currentfamily-7;
			$(".rolling_family ul").css({left: 0});
		}
		$(".rolling_family ul").stop().animate({left: (currentfamily+1)*-131  },200, function(){
			currentfamily=currentfamily+1;
		});
	});

	$(".rolling_family .next").on("click", function(){
		if ( currentfamily == 0 ) {
			currentfamily=currentfamily+7;
			$(".rolling_family ul").css({left: -917});
		}
		$(".rolling_family ul").stop().animate({left: (currentfamily-1)*-131  },200, function(){
			currentfamily=currentfamily-1;
		});
	});
/*========== //MAIN ROLLING ==========*/



/*========== MAIN icon menu ==========*/
	$(".direct_menu a").on({
		"mouseenter focusin": function() {
			$(this).find(".color_bg1").removeClass("blur-out");
			$(this).find(".color_bg2").removeClass("blur-out");
		},
		"mouseleave focusout": function() {
			$(this).find(".color_bg1").addClass("blur-out");
			$(this).find(".color_bg2").addClass("blur-out");
		}
	});
/*========== //MAIN icon menu ==========*/







/*========== FAMILY SITES==========*/
	$(".familysite, .scroll_wrap").on({
		"mouseenter focusin": function() {
			$(this).find(".scroll_wrap").stop().show().animate({ height : 89 }, 400, "easeOutQuad");
			$(".familysite").addClass("on");

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
			$(this).find(".scroll_wrap").css("height", 89).stop().animate({ height : 0}, 250, function() {$(this).hide();});
			$(".familysite").removeClass("on");
		}
	});
/*========== //FAMILY SITES==========*/


	$(window).resize(function () {
		if ( $(window).width() > 1800 ) {
			$(".round1")
				.attr("src", "img/main/main_visual_round1.png").css({ marginRight:-300 })
				.animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round2")
				.attr("src", "img/main/main_visual_round2.png").css({ marginLeft:115 })
				.animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round3")
				.attr("src", "img/main/main_visual_round3.png").css({ marginLeft:420 })
				.animate({ opacity:1, top:95, marginTop:0 }, 1500);
		} else if ( $(window).width() > 1280 ) {
			$(".round1")
				.attr("src", "img/main/main_visual_round1_1800.png").css({ marginRight:-340 })
				.animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round2")
				.attr("src", "img/main/main_visual_round2_1800.png").css({ marginLeft:105 })
				.animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round3")
				.attr("src", "img/main/main_visual_round3_1800.png").css({ marginLeft:360 })
				.animate({ opacity:1, top:95, marginTop:0 }, 1500);
		} else {
			$(".round1")
				.attr("src", "img/main/main_visual_round1_1024.png").css({ marginRight:-380 })
				.animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round2")
				.attr("src", "img/main/main_visual_round2_1024.png").css({ marginLeft:25 })
				.animate({ opacity:1, bottom:0, marginBottom:0 }, 1500);
			$(".round3")
				.attr("src", "img/main/main_visual_round3_1024.png").css({ marginLeft:105 })
				.animate({ opacity:1, top:95, marginTop:0 }, 1500);
		}
	});
});


function closeProductDetail(){
	$(".bread_list a").removeClass("active").removeClass("active");
	$(".detail_wrap").stop().animate( {top:0}, 400, "easeOutQuad", function(){
		$(".detail_wrap").remove();
	});spq
	$("html, body").animate({scrollTop: 325 }, 700 );
}

// 사이트맵 열기
function mainSitemap() {
	if( $(".sitemap_wrap").css("display")=="none") {
		$(".sitemap_wrap").css("display","block").css("height",0).animate({height:338, top:0}, 400);
		$(".sitemap").addClass("on");
		$(".footer").animate({height:371}, 400);
	} else {
		closeSitemap();
	}
}

function openSitemap() {
	var body = $("html, body");
	var bodyTop = $(".footer").offset().top - $(window).height() + 500;

	$(this).focus();
	if( $(".sitemap_wrap").css("display")=="none") {
		$(".sitemap_wrap").css("display","block").css("height",0).animate({height:338}, 400);
		$(".footer").animate({height:371}, 400);
		$(".close_sitemap").focus();
		$(".sitemap").addClass("on");
		body.animate({scrollTop: bodyTop }, 600);
	} else {
		closeSitemap();
	}

}

// 사이트맵 닫기
function closeSitemap() {
	$(".sitemap_wrap").css("height",338).animate({height:0, marginTop:0}, 400, function() {$(this).css("display","none");});
	$(".sitemap").removeClass("on");
	$(".footer").animate({height:100}, 400);
}