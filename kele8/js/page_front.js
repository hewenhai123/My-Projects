(function($) {
	var MIN_WIN_WIDTH = 1000, ITEM_WIDTH = 236, MARGIN = 17;
	var jWindow = $(window), jLayout = $("#layout"), jPicList = $('#pic-list');
	function adjust() {
		var cw = Math.max(jWindow.width(), MIN_WIN_WIDTH);
		jLayout.width(cw);
		jPicList.width(Math.floor(cw / ITEM_WIDTH) * ITEM_WIDTH + MARGIN);
	}
	jWindow.resize(adjust);
	adjust();
	jPicList.masonry({
		itemSelector: '.box',
		columnWidth: ITEM_WIDTH,
		isAnimated: this.XMLHttpRequest && !("opacity" in document.body.style) ? false : true
	});
	tagShow();

	var loadurl = baseUrl + '/g/js/' + typeid, loadpage = 1, sTimer;
	if (addhot=='hot') {
		loadurl += '_hot';
	}
	
	$(window).scroll(function scrollHandler(){
		clearTimeout(sTimer);
		sTimer = setTimeout(function() {
			if(window.loaded == 1){$(window).unbind("scroll", scrollHandler);}
			var c=document.documentElement.clientHeight || document.body.clientHeight, t=$(document).scrollTop();
			if(t+c >= jPicList.offset().top+jPicList.height()){loadMore();}
		}, 100);
	});
	var jLoading = $('#loading');
	function loadMore() {
		if (window.loaded == 1) return;
		jLoading.show();
		loadpage++;
		$.getJSON(loadurl+'_'+loadpage+'.html?math='+Math.random(), function(json){
			if('undefined' == json || json.enabled ==0){
				window.loaded = 1;
			}else{
				var options = jPicList.data("masonry").options, bakAnimated = options.isAnimated;
				options.isAnimated = false;
				jPicList.append(json.html).masonry("reload");
				options.isAnimated = bakAnimated;
			}
			tagShow();
			jLoading.hide();
		});
	}
	function tagShow(){
		$(".pic-list li:not(.tags)").hover(function(){
			$(this).addClass("ding");
		},function(){
			$(this).removeClass("ding");
		});
	}
	
	$("#content img").lazyload({effect : "fadeIn"});
})(jQuery);


