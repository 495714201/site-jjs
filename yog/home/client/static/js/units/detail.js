/*
 * des:商品详情页
 * author:wfj
 * email:77676656@qq.com
 * time:2015-08-05 18:20
 */
define(function(require, exports, module) {
	var interface = require('../config'); //接口配置文件
	var queryUrl = require('../kit/queryUrl'); //处理链接地址
	//设置dom
	var doms = {
		$detail: $('#J_detail'),
		$submitbtn: $('#J_submit-btn'),
		$addcart: $('#J_addcart-btn'),
		$popwin: $('#J_pop-layer'),
		$favor: $("#J_favorfill-btn") //收藏
	};

	//判断
	if (doms.$detail.length === 0) {
		return false;
	}

	var Fun = {
		bindEvent: function() {
			Fun.submitEvent(); //立即购买
			Fun.addCartEvent(); //加入购物车
			Fun.storeEvent(); //[收藏/取消]
		},

		//立即购买
		submitEvent: function() {
			doms.$submitbtn.on('click', function() {
				$.ajax({
					url: interface._submitshopcart,
					type: "POST",
					dataType: "JSON",
					success: function(data) {
						if (data.code === 'A00000') {

						}
					}
				});
			});
		},

		//加入购物车
		addCartEvent: function() {
			doms.$addcart.on('click', function() {
				var $inp = $('.J_mod-amount').find('.J_mod-inp');
				var id = $inp.attr('data-id');
				var val = $inp.val();
				$.ajax({
					url: interface._addcart,
					type: 'POST',
					dataType: 'JSON',
					data: {
						sku_id: id,
						num: parseInt(val, 10)
					},
					success: function(data) {
						if (data.code === 'A00000') {
							if (data.data != parseInt(val, 10)) {
								doms.$popwin.removeClass('dn');
							} else {
								alert('库存不足');
							}

						}
					}
				});
			});
		},

		storeEvent: function() {
			doms.$favor.on('click', function() {
				var $el = $(this);
				var flag = $el.attr('data-favor-flag'); //true已被收藏
				var skuid = $el.attr('data-goods-skuid');
				var _login = $.cookie("P00001");
				if (!_login) {
					window.location.href = "/pc/login.html?_href=" + escape(window.location.href);
					return false;
				}
				param = {
					tid: skuid
				};

				if (flag === "0") {
					Fun.addFavorite($el, param);
				} else {
					Fun.delFavorite($el, param);
				}
			});
		},

		//购物车信息
		getCartInfo: function() {
			var $par = $('.J_mod-amount');
			var str = "";
			for (var i = 0, len = $par.length; i < len; i++) {
				var $inp = $($par[i]).find('.J_mod-inp');
				var val = $inp.val();
				var id = $inp.attr('data-id');
				str += id + "," + val;
			}
			return str;
		},

		//添加收藏
		addFavorite: function(elem, param) {
			$.ajax({
				url: interface._favoriteadd,
				type: "post",
				dataType: "json",
				data: param,
				success: function(data) {
					if (data.code === "A00000") {
						$(elem).css("background", "#ccc").attr('data-favor-flag', "1").html('已收藏');
						alert('商品已成功加入收藏夹！');
					}
				}
			});
		},

		//删除收藏
		delFavorite: function(elem, param) {
			$.ajax({
				url: interface._favoritedel,
				type: "post",
				dataType: "json",
				data: param,
				success: function(data) {
					if (data.code === "A00000") {
						$(elem).css({
							'background': "#a40000"
						}).attr('data-favor-flag', "0").html('<i class="icon icon-btn-stow"></i>收藏');
						alert('商品已成功移除收藏夹！');
					}
				}
			});
		},
	};

	(function() {
		Fun.bindEvent();
	})();
});