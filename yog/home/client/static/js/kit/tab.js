/*
 * @fileOverview tab切换功能
 * @author wufangjian
 * @date 2015-08-08 13:19
 * @version 1.0
 */
define(function(require, exports, module) {
    var tpls = require("../tpl/tpl");
    var juicer = require("../lib/juicer");
    var interface = require("../config");

    //判断
    if ($('.J_tab-box').length === 0) {
        return false;
    }

    //设置dom
    var doms = {
        $tab: $('.J_tab-box') //box
    };

    var Fun = {
        bindEvent: function() {
            Fun.tabClick();
        },

        tabClick: function() {
            var $menu = doms.$tab.find('.J_tab-menu');
            var $con = doms.$tab.find('.J_tab-con');

            $menu.on('click', '.J_tab', function() {
                $menu.find('.J_tab').removeClass('selected');
                $(this).addClass('selected');
                var type = $(this).attr('data-type');
                Fun.tabAjax(parseInt(type, 10), $con);
            });
        },

        tabAjax: function(type, $con) {
            var _url = "";
            var _tpl = "";
            var _str = "";
            var len = window.location.href.split('/').length;
            var id = window.location.href.split('/')[len - 1];
            //商品介绍
            if (type === 1) {
                _url = interface._goodsinfo + "" + id;
                _tpl = "";
                //规格参数
            } else if (type === 2) {
                _url = interface._goodsparam + "" + id;
                _tpl = tpls.tpl02;
                //包装售后
            } else if (type === 3) {
                _url = interface._goodsservice + "" + id;
                _tpl = tpls.tpl03;
            }
            $.ajax({
                url: _url,
                type: 'POST',
                dataType: 'JSON',
                success: function(data) {
                    if (data.code === 'A00000') {
                        if (_tpl) {
                            _str = juicer(_tpl, data);
                            $con.html(_str);
                        } else {
                            $con.html(data.data);
                        }
                    }
                }
            })
        }
    };

    (function() {
        Fun.bindEvent();
    })();
});