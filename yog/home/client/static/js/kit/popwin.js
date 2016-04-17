/*
 * @fileOverview 弹出窗口
 * @author wufangjian
 * @date 2015-08-06 17:03
 * @version 1.0
 */
define(function(require, exports, module) {

    //判断
    if ($('#J_pop-layer').length === 0) {
        return false;
    }

    //设置dom
    var doms = {
        $popwin: $('#J_pop-layer') //box
    };

    var Fun = {
        //绑定事件
        bindEvent: function() {
            Fun.closeWinEvent();
        },

        //关闭弹窗
        closeWinEvent: function() {
            doms.$popwin.find('.J_close').on('click', function() {
                doms.$popwin.addClass('dn');
            });
        }
    };

    (function() {
        Fun.bindEvent();
    })();
});