/*
 * @fileOverview 购物时 【增加、减少 数量】
 * @author wufangjian
 * @date 2015-08-06 17:03
 * @version 1.0
 */
define(function(require, exports, module) {
    var interface = require('../config'); //接口配置文件

    //判断
    if ($('.J_mod-amount').length === 0) {
        return false;
    }

    //设置dom
    var doms = {
        $amount: $('.J_mod-amount'), //box
        $cartBox: $("#J_mod-goods-cart"),
        $totalmoney: $('#J_total-money'),
        $totalnum: $('#J_total-num'),
        $checkall: $('.J_check-all-box')
    };

    var Fun = {
        //绑定事件
        bindEvent: function() {
            Fun.increaseClickEvent();
            Fun.decreaseClickEvent();
            Fun.inpChangeEvent();
        },

        //减少
        increaseClickEvent: function() {
            doms.$amount.find('.J_mod-increase').on('click', function() {
                var $par = $(this).parents('.J_mod-amount');
                var $inp = $par.find('.J_mod-inp');
                var id = $inp.attr("data-id");
                var price = $inp.attr("data-price");
                var $warn = doms.$amount.find(".J_mod-warn-info");
                var num = $inp.val();
                var max = parseInt($par.attr('data-total'), 10);
                num++;
                if (num > max) {
                    $warn.html("库存只有" + max + "件！");
                    $warn.removeClass('dn');
                    setTimeout(function() {
                        $warn.addClass('dn');
                    }, 3000);
                    num = max;
                }
                $inp.val(num);

                //发送事件
                if (doms.$cartBox.length > 0) {
                    Fun.setonegoodstotal({
                        dom: $(this),
                        num: num,
                        price: price,
                        id: id
                    });
                }
            });
        },

        //增加
        decreaseClickEvent: function() {
            doms.$amount.find('.J_mod-decrease').on('click', function() {
                var $par = $(this).parents('.J_mod-amount');
                var $inp = $par.find('.J_mod-inp');
                var id = $inp.attr("data-id");
                var price = $inp.attr("data-price");
                var num = $inp.val();
                var max = parseInt($par.attr('data-total'), 10);
                if (num <= 1) {
                    num = 1;
                } else {
                    num--;
                }
                $inp.val(num);

                //发送事件
                if (doms.$cartBox.length > 0) {
                    Fun.setonegoodstotal({
                        dom: $(this),
                        num: num,
                        price: price,
                        id: id
                    });
                }
            });
        },

        //input事件
        inpChangeEvent: function() {
            doms.$amount.find('.J_mod-inp').keyup(function() {
                var $par = $(this).parents('.J_mod-amount');
                var $inp = $par.find('.J_mod-inp');
                var id = $inp.attr("data-id");
                var num = $(this).val();
                var price = $inp.attr("data-price");
                var max = parseInt($par.attr('data-total'), 10);
                if (/^[1-9]\d*$/.test(num)) {
                    if (parseInt(num, 10) >= max) {
                        num = max;
                    }
                    $inp.val(num);
                } else {
                    $inp.val(1);
                }
                //发送事件
                if (doms.$cartBox.length > 0) {
                    Fun.setonegoodstotal({
                        dom: $(this),
                        num: num,
                        price: price,
                        id: id
                    });
                }
            });
        },

        /*
         * 计算
         */
        calculationEvent: function() {
            if (doms.$cartBox.length === 0) {
                return false;
            }

            $(document).on('calculation', function() {
                var elems = $('.J_check-box'); //.hasClass('icon-selected')
                var arr = [];
                $.each(elems, function(i, elem) {
                    var flag = $(elem).find("i").hasClass('check-selected');
                    if (flag) {
                        arr.push($(elem));
                    }
                });
                /*******************************/
                //处理全选按钮
                if (elems.length != arr.length) {
                    doms.$checkall.removeClass('icon-selected');
                } else {
                    doms.$checkall.addClass('icon-selected');
                }
                /*******************************/
                var totalNum = 0;
                var totalMoney = 0;
                for (var i = 0; i < arr.length; i++) {
                    var $el = $(arr[i]).parents('tr').find('.J_mod-inp');
                    var price = $el.attr('data-price');
                    var val = $el.val();
                    totalMoney += parseFloat(price * val);
                    totalNum += parseInt(val);
                }
                doms.$totalmoney.html(totalMoney.toFixed(2));
                doms.$totalnum.html(totalNum);
                if (elems.length === 0) {
                    var str = '<section class="mod-cart-empty tc">' +
                        '<div class="cart-icon-box"><i class="iconfont icon-cart"></i></div>' +
                        '<h4>购物车快饿瘪了</h4><div class="des">主人快给我挑点宝贝吧！</div><a href="/h5.html" class="btn btn-space-red">去逛逛</a></section>';
                    doms.$cartBox.html(str);
                }
            });
        },

        /*
         * 设置商品购买数量
         */
        setcartnum: function(num, id) {
            $.ajax({
                url: interface._setcartnum,
                type: "POST",
                dataType: "JSON",
                data: {
                    sku_id: id,
                    num: num
                },
                success: function(data) {
                    if (data.code === 'A00000') {
                        $(document).trigger('calculation');
                    }
                }
            })
        },

        /*
         * 设置单个商品总价
         * $el: dom元素
         * num: 单个商品数量
         * price: 商品单价
         */
        setonegoodstotal: function(param) {
            var total = parseInt(param.num) * parseInt(param.price);
            param.dom.parents("tr").find(".J_mod-totalprice").html(total.toFixed(2));
            Fun.setcartnum(param.num, param.id);
            param.dom.trigger('calculation');
        }
    };

    (function() {
        Fun.bindEvent();
    })();
});