/*
 * @fileOverview 放大镜下面的小图
 * @author wufangjian
 * @date 2015-08-15 18:51
 * @version 1.0
 */
define(function(require, exports, module) {

    //判断
    if ($('#J_mod-slide').length === 0) {
        return false;
    }

    //设置dom
    var doms = {
        $slide: $("#J_mod-slide"),
        $magnifier: $("#J_mod-magnifier")//放大镜区域
    };

    var Fun = {
        //绑定事件
        bindEvent: function() {
            Fun.slidesimgEvent();
        },

        slidesimgEvent: function() {
            doms.$slide.on("mouseenter", '.J_mod-simg', function() {
                var src = $(this).find("img").attr("src");
                doms.$magnifier.find(".J_mod-simg").attr("src",src);
                doms.$magnifier.find(".J_mod-bimg").attr("src",src);
            });
        }
    };

    (function() {
        Fun.bindEvent();
    })();
});